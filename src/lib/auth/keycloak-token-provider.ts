import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable, InjectionToken, OnDestroy, Optional } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { TokenProvider, TokenResult } from "./token-provider";

/**
 * Seconds of head-room subtracted from a token's `expires_in` so the background
 * refresh fires *before* the access token actually lapses. Covers clock skew and
 * the round-trip latency to Keycloak. Mirrors `REFRESH_SKEW_IN_S` in the nodejs
 * SDK and `_EXPIRY_LEEWAY_S` in the python SDK.
 */
export const REFRESH_SKEW_IN_S = 30;

/**
 * Lower bound (in seconds) for the scheduled refresh delay, so a tiny or zero
 * `expires_in` can never spin a hot refresh loop.
 */
export const MIN_REFRESH_DELAY_IN_S = 1;

/**
 * Configuration for {@link KeycloakTokenProvider}.
 *
 * Supply *either* a long-lived `offlineToken` (an `offline_access` refresh token
 * obtained out-of-band) *or* a `username` + `password` pair for a one-time
 * Resource Owner Password Credentials (ROPC) login. When both are present the
 * `offlineToken` wins and no password is ever sent.
 *
 * SECURITY: the configured client must be a **public** Keycloak client (no
 * `client_secret`) with `directAccessGrants` enabled and the `offline_access`
 * scope. The account used for ROPC must be 2FA-exempt (a technical user).
 */
export interface KeycloakTokenProviderConfig {
  /** Base Keycloak URL, e.g. `https://auth.example.com/auth` (trailing slash tolerated). */
  keycloakUrl: string;
  /** Realm name, e.g. `ondewo-ccai-platform`. */
  realm: string;
  /** Public SDK client id, e.g. `ondewo-nlu-cai-sdk-public`. No `client_secret` is ever sent. */
  clientId: string;
  /** A pre-obtained `offline_access` refresh token. Preferred over `username`/`password`. */
  offlineToken?: string;
  /** Technical-user email/username for the ROPC grant (used only when `offlineToken` is absent). */
  username?: string;
  /** Technical-user password for the ROPC grant (used only when `offlineToken` is absent). */
  password?: string;
  /**
   * Whether to verify the Keycloak server's TLS certificate on the
   * token-endpoint call. Defaults to `true` (secure).
   *
   * NO-OP IN THIS ANGULAR/BROWSER CLIENT. The token request is made with
   * Angular's `HttpClient` (an XHR/fetch call), and in a browser the TLS
   * handshake is owned by the user agent — there is no `https.Agent`, undici
   * dispatcher, or `rejectUnauthorized` hook that app code can reach, and
   * `HttpClient`'s request options expose no certificate-verification slot. The
   * value is therefore stored on the provider for cross-SDK config parity with
   * the Python/Node.js clients (where it does disable TLS verification) but has
   * no effect on the outgoing request here. For a self-signed local Envoy the
   * certificate must be trusted at the browser/OS level instead.
   */
  keycloakVerifySsl?: boolean;
  /**
   * Optional cap (seconds) on how long the auto-refresh loop runs after login.
   * Once it elapses the loop stops, the access token is allowed to lapse, and a
   * re-login is required. Omit for an unbounded loop.
   */
  tokenExpirationInS?: number;
}

/**
 * DI token carrying the {@link KeycloakTokenProviderConfig} for the
 * {@link KeycloakTokenProvider}. The consuming application provides it:
 *
 * ```ts
 * providers: [
 *   {
 *     provide: KEYCLOAK_TOKEN_PROVIDER_CONFIG,
 *     useValue: {
 *       keycloakUrl: "https://auth.example.com/auth",
 *       realm: "ondewo-ccai-platform",
 *       clientId: "ondewo-nlu-cai-sdk-public",
 *       username: "tech-user@example.com",
 *       password: "…",
 *     } satisfies KeycloakTokenProviderConfig,
 *   },
 * ]
 * ```
 */
export const KEYCLOAK_TOKEN_PROVIDER_CONFIG: InjectionToken<KeycloakTokenProviderConfig> =
  new InjectionToken<KeycloakTokenProviderConfig>("ONDEWO_S2T_KEYCLOAK_TOKEN_PROVIDER_CONFIG");

/** Error raised on any token-endpoint failure or unusable token response shape. */
export class KeycloakAuthenticationError extends Error {
  /**
   * Create a {@link KeycloakAuthenticationError} with a fixed `name`.
   *
   * @param message a human-readable description of the failure.
   */
  constructor(message: string) {
    super(message);
    this.name = "KeycloakAuthenticationError";
  }
}

/** Parsed Keycloak token-endpoint response (only the fields this provider reads). */
interface KeycloakTokenResponse {
  /** The short-lived bearer access token. */
  access_token?: string;
  /** The (optionally rotated) offline refresh token; absent if the response carries none. */
  refresh_token?: string;
  /** The access token lifetime in seconds, as reported by Keycloak. */
  expires_in?: number;
}

/**
 * Concrete, ready-to-use {@link TokenProvider} that authenticates against
 * Keycloak with the D18 headless offline-token flow and keeps the access token
 * fresh in the background — so consumers get refreshing bearer auth **without**
 * implementing {@link TokenProvider} themselves.
 *
 * Behaviour (mirrors the nodejs `OfflineTokenProvider` and the python
 * `KeycloakTokenProvider`):
 *
 * 1. {@link login} performs a one-time login against the realm token endpoint —
 *    either a `refresh_token` grant from a pre-obtained `offlineToken`, or a
 *    ROPC `password` grant (`scope=offline_access`) — and stores the resulting
 *    short-lived access token plus the long-lived offline refresh token.
 * 2. A background timer refreshes the access token {@link REFRESH_SKEW_IN_S}
 *    seconds before it expires (floored at {@link MIN_REFRESH_DELAY_IN_S},
 *    clamped to the optional `tokenExpirationInS` deadline).
 * 3. {@link getToken} synchronously returns the current valid access token (or
 *    `null` before {@link login} / after the bounded loop lapses), so the
 *    library's auth interceptors attach `Authorization: Bearer <token>` with no
 *    per-request round-trip.
 *
 * Wire it as the application's `TokenProvider`:
 *
 * ```ts
 * import { provideOndewoS2tAuth, KeycloakTokenProvider } from "@ondewo/s2t-client-angular";
 *
 * bootstrapApplication(AppComponent, {
 *   providers: [
 *     provideHttpClient(),
 *     { provide: KEYCLOAK_TOKEN_PROVIDER_CONFIG, useValue: { … } },
 *     provideOndewoS2tAuth(KeycloakTokenProvider),
 *   ],
 * });
 * ```
 *
 * Call {@link login} once at startup (e.g. in an `APP_INITIALIZER`) to acquire
 * the first token before any authenticated request is issued.
 */
@Injectable({ providedIn: "root" })
export class KeycloakTokenProvider implements TokenProvider, OnDestroy {
  /** Pre-computed OIDC token endpoint URL for the configured realm. */
  private readonly tokenEndpoint: string;

  /** The current access token, or `null` before {@link login} / after the bounded loop lapses. */
  private accessToken: string | null = null;

  /** The current offline refresh token, or `null` before {@link login}. */
  private refreshToken: string | null = null;

  /** Handle of the armed refresh timer, or `null` when no refresh is scheduled. */
  private timer: ReturnType<typeof setTimeout> | null = null;

  /** Whether {@link stop} has been called; suppresses any further (re-)scheduling. */
  private stopped = false;

  /** Absolute epoch-ms deadline for the bounded loop, or `null` when unbounded. */
  private deadlineInMs: number | null = null;

  /** Optional callback invoked with the error of a failed background refresh. */
  private onRefreshErrorHandler: ((error: unknown) => void) | null = null;

  /** The validated, non-null configuration this provider authenticates with. */
  private readonly config: KeycloakTokenProviderConfig;

  /**
   * Whether TLS-certificate verification is requested for the token-endpoint
   * call. Defaults to `true`. Stored for cross-SDK config parity only — it is a
   * NO-OP in this browser client (the browser owns the TLS handshake), so the
   * outgoing {@link postTokenRequest} call is unaffected by its value. See
   * {@link KeycloakTokenProviderConfig.keycloakVerifySsl}.
   */
  private readonly verifySsl: boolean;

  /**
   * @param http the Angular `HttpClient` used for the token endpoint calls.
   * @param config the {@link KeycloakTokenProviderConfig}; must be provided
   *   under {@link KEYCLOAK_TOKEN_PROVIDER_CONFIG}.
   * @throws {@link KeycloakAuthenticationError} when no config is provided or a
   *   required field is missing.
   */
  constructor(
    private readonly http: HttpClient,
    @Optional() @Inject(KEYCLOAK_TOKEN_PROVIDER_CONFIG) config: KeycloakTokenProviderConfig | null
  ) {
    if (config === null) {
      throw new KeycloakAuthenticationError(
        "KeycloakTokenProvider requires a KEYCLOAK_TOKEN_PROVIDER_CONFIG provider"
      );
    }
    this.assertCredentials(config);
    this.config = config;
    // Stored for cross-SDK config parity; a no-op on the browser transport (see field doc).
    this.verifySsl = config.keycloakVerifySsl ?? true;
    this.tokenEndpoint = buildTokenEndpoint(config.keycloakUrl, config.realm);
  }

  /**
   * Return the current access token for the auth interceptors.
   *
   * @returns the current valid access token, or `null` before {@link login} /
   *   after the bounded loop has lapsed.
   */
  public getToken(): TokenResult {
    return this.accessToken;
  }

  /**
   * The resolved TLS-verification setting from
   * {@link KeycloakTokenProviderConfig.keycloakVerifySsl} (defaults to `true`).
   *
   * Exposed for cross-SDK config parity and introspection only. It is a NO-OP in
   * this browser client — the browser owns the TLS handshake, so the value never
   * reaches {@link postTokenRequest} and does not change the outgoing request.
   *
   * @returns `true` when TLS verification is requested (the default), `false`
   *   when the config explicitly opted out (still inert here).
   */
  public get keycloakVerifySsl(): boolean {
    return this.verifySsl;
  }

  /**
   * Perform the one-time login and arm the first background refresh. Idempotent:
   * a second call while a token is already held is a no-op.
   *
   * @returns a promise that resolves once the first access token is stored and
   *   the refresh is armed.
   * @throws {@link KeycloakAuthenticationError} if the token endpoint fails or
   *   the response carries no `access_token` / `refresh_token`.
   */
  public async login(): Promise<void> {
    if (this.accessToken !== null) {
      return;
    }
    const tokenResponse: KeycloakTokenResponse =
      typeof this.config.offlineToken === "string" && this.config.offlineToken.length > 0
        ? await this.postTokenRequest({
            grant_type: "refresh_token",
            client_id: this.config.clientId,
            refresh_token: this.config.offlineToken
          })
        : await this.postTokenRequest({
            grant_type: "password",
            client_id: this.config.clientId,
            username: this.config.username as string,
            password: this.config.password as string,
            scope: "offline_access"
          });

    this.storeTokens(tokenResponse);
    if (this.refreshToken === null) {
      throw new KeycloakAuthenticationError(
        "Keycloak token response did not contain a refresh_token; the SDK client must have " +
          "directAccessGrants + the offline_access scope (e.g. ondewo-nlu-cai-sdk-public)"
      );
    }

    if (this.config.tokenExpirationInS !== undefined) {
      this.deadlineInMs = Date.now() + this.config.tokenExpirationInS * 1000;
    }
    this.scheduleRefresh(tokenResponse.expires_in);
  }

  /**
   * Register a callback invoked with the error of a failed background refresh
   * (optional diagnostics). A later call replaces any previously registered
   * handler.
   *
   * @param handler callback receiving the (untyped) error thrown by a failed
   *   background refresh.
   */
  public onRefreshError(handler: (error: unknown) => void): void {
    this.onRefreshErrorHandler = handler;
  }

  /** Stop the auto-refresh loop. Idempotent; safe to call from any state. */
  public stop(): void {
    this.stopped = true;
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  /** Angular lifecycle hook: stop the refresh loop when the provider is destroyed. */
  public ngOnDestroy(): void {
    this.stop();
  }

  /**
   * Exchange the offline refresh token for a fresh access token and re-arm the
   * next refresh. No-ops once {@link stop} has run or the bounded deadline has
   * elapsed (in which case it also stops the loop).
   *
   * @returns a promise that resolves once the token is refreshed and the next
   *   refresh is armed (or once the loop has been stopped).
   * @throws {@link KeycloakAuthenticationError} if the refresh call fails or
   *   returns an unusable body.
   */
  private async refresh(): Promise<void> {
    // Re-check the bounded deadline at fire time (not just at schedule time): once it has elapsed
    // the loop stops with no further renewal -> the access token lapses -> a re-login is required.
    if (this.deadlineInMs !== null && Date.now() >= this.deadlineInMs) {
      this.stop();
      return;
    }
    const tokenResponse: KeycloakTokenResponse = await this.postTokenRequest({
      grant_type: "refresh_token",
      client_id: this.config.clientId,
      refresh_token: this.refreshToken as string
    });
    this.storeTokens(tokenResponse);
    this.scheduleRefresh(tokenResponse.expires_in);
  }

  /**
   * Arm a single timer for the next refresh, clamped to the bounded deadline.
   * Stops silently once `tokenExpirationInS` has elapsed (no further renewal ->
   * access lapses -> re-login required).
   *
   * The delay is derived from `expiresInRaw` minus {@link REFRESH_SKEW_IN_S},
   * floored at {@link MIN_REFRESH_DELAY_IN_S}, then clamped to the time
   * remaining before the deadline.
   *
   * @param expiresInRaw the `expires_in` (seconds) from the latest token
   *   response; a missing or non-positive value falls back to
   *   {@link MIN_REFRESH_DELAY_IN_S}.
   */
  private scheduleRefresh(expiresInRaw: number | undefined): void {
    if (this.stopped) {
      return;
    }
    const expiresInS: number =
      typeof expiresInRaw === "number" && expiresInRaw > 0 ? expiresInRaw : MIN_REFRESH_DELAY_IN_S;
    let delayInS: number = Math.max(expiresInS - REFRESH_SKEW_IN_S, MIN_REFRESH_DELAY_IN_S);

    if (this.deadlineInMs !== null) {
      const remainingInMs: number = this.deadlineInMs - Date.now();
      if (remainingInMs <= 0) {
        this.stop();
        return;
      }
      delayInS = Math.min(delayInS, remainingInMs / 1000);
    }

    this.timer = setTimeout((): void => {
      this.refresh().catch((refreshError: unknown): void => {
        // Swallow a transient refresh failure but surface it so the caller can react; the next
        // request travels with the stale (possibly expired) token until the next refresh succeeds.
        if (this.onRefreshErrorHandler !== null) {
          this.onRefreshErrorHandler(refreshError);
        }
      });
    }, delayInS * 1000);
  }

  /**
   * POST an `application/x-www-form-urlencoded` body to the token endpoint and
   * return the parsed JSON.
   *
   * @param params form fields to URL-encode into the request body (grant type,
   *   client id, credentials).
   * @returns the parsed {@link KeycloakTokenResponse}.
   * @throws {@link KeycloakAuthenticationError} on a non-2xx response.
   */
  private async postTokenRequest(params: Record<string, string>): Promise<KeycloakTokenResponse> {
    const body: string = new URLSearchParams(params).toString();
    const headers: HttpHeaders = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json"
    });
    try {
      return await firstValueFrom(
        this.http.post<KeycloakTokenResponse>(this.tokenEndpoint, body, { headers })
      );
    } catch (caughtError: unknown) {
      const status: number = caughtError instanceof HttpErrorResponse ? caughtError.status : 0;
      const detail: string =
        caughtError instanceof HttpErrorResponse ? caughtError.message : String(caughtError);
      throw new KeycloakAuthenticationError(
        `Keycloak token endpoint returned HTTP ${status}: ${detail}`
      );
    }
  }

  /**
   * Store the access token and (when present) the rotated offline refresh token
   * from a token response.
   *
   * Keycloak may rotate the offline refresh token; the newest one is kept when
   * present, and the previous one is preserved when a refresh response omits it
   * (so a same-token refresh never blanks out the offline token).
   *
   * @param tokenResponse the parsed token endpoint response.
   * @throws {@link KeycloakAuthenticationError} if the response carries no
   *   `access_token`.
   */
  private storeTokens(tokenResponse: KeycloakTokenResponse): void {
    if (typeof tokenResponse.access_token !== "string" || tokenResponse.access_token.length === 0) {
      throw new KeycloakAuthenticationError("Keycloak token response did not contain an access_token");
    }
    this.accessToken = tokenResponse.access_token;
    if (typeof tokenResponse.refresh_token === "string" && tokenResponse.refresh_token.length > 0) {
      this.refreshToken = tokenResponse.refresh_token;
    }
  }

  /**
   * Validate that the config carries the base fields plus a usable credential
   * (an `offlineToken`, or both `username` and `password`).
   *
   * @param config the configuration to validate.
   * @throws {@link KeycloakAuthenticationError} if a required field is missing.
   */
  private assertCredentials(config: KeycloakTokenProviderConfig): void {
    for (const key of ["keycloakUrl", "realm", "clientId"] as const) {
      if (typeof config[key] !== "string" || config[key].length === 0) {
        throw new KeycloakAuthenticationError(
          `KeycloakTokenProviderConfig.${key} is required and must be a non-empty string`
        );
      }
    }
    const hasOfflineToken: boolean = typeof config.offlineToken === "string" && config.offlineToken.length > 0;
    const hasPassword: boolean =
      typeof config.username === "string" &&
      config.username.length > 0 &&
      typeof config.password === "string" &&
      config.password.length > 0;
    if (!hasOfflineToken && !hasPassword) {
      throw new KeycloakAuthenticationError(
        "KeycloakTokenProviderConfig requires either an offlineToken or a username + password pair"
      );
    }
  }
}

/**
 * Build the OIDC token endpoint URL for a realm, tolerating a trailing slash on
 * `keycloakUrl`.
 *
 * @param keycloakUrl base Keycloak URL (trailing slashes are stripped).
 * @param realm realm name; URL-encoded into the path.
 * @returns the fully-qualified `.../protocol/openid-connect/token` endpoint URL.
 */
function buildTokenEndpoint(keycloakUrl: string, realm: string): string {
  const base: string = keycloakUrl.replace(/\/+$/, "");
  return `${base}/realms/${encodeURIComponent(realm)}/protocol/openid-connect/token`;
}
