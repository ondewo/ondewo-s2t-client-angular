import { HttpClient, provideHttpClient } from "@angular/common/http";
import { HttpTestingController, provideHttpClientTesting, TestRequest } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { throwError } from "rxjs";
import {
  KEYCLOAK_TOKEN_PROVIDER_CONFIG,
  KeycloakAuthenticationError,
  KeycloakTokenProvider,
  KeycloakTokenProviderConfig,
  MIN_REFRESH_DELAY_IN_S,
  REFRESH_SKEW_IN_S
} from "./keycloak-token-provider";

/** Base Keycloak URL used across the cases (with a trailing slash to exercise stripping). */
const KEYCLOAK_URL = "https://auth.example.com/auth/";

/** Realm name used across the cases. */
const REALM = "ondewo-ccai-platform";

/** Public SDK client id used across the cases. */
const CLIENT_ID = "ondewo-nlu-cai-sdk-public";

/** The fully-qualified token endpoint the configured realm resolves to. */
const TOKEN_ENDPOINT = `https://auth.example.com/auth/realms/${REALM}/protocol/openid-connect/token`;

/** A representative 2FA-exempt technical-user email for the ROPC grant. */
const USERNAME = "tech-user@example.com";

/** A representative technical-user password for the ROPC grant. */
const PASSWORD = "super-secret";

/** Valid ROPC (username/password) login config shared via spread by most cases. */
const ROPC_CONFIG: KeycloakTokenProviderConfig = {
  keycloakUrl: KEYCLOAK_URL,
  realm: REALM,
  clientId: CLIENT_ID,
  username: USERNAME,
  password: PASSWORD
};

/** A token-endpoint response body. */
interface TokenBody {
  /** The short-lived bearer access token. */
  access_token?: string;
  /** The (optionally rotated) offline refresh token. */
  refresh_token?: string;
  /** The access token lifetime in seconds. */
  expires_in?: number;
}

/**
 * Build a {@link KeycloakTokenProvider} backed by the Angular HTTP testing
 * controller for the given config.
 *
 * @param config the {@link KeycloakTokenProviderConfig}, or `null` to omit the
 *   config provider entirely.
 * @returns the controller (to script token-endpoint responses) and a factory
 *   that instantiates the provider via DI.
 */
function setup(config: KeycloakTokenProviderConfig | null): {
  controller: HttpTestingController;
  create: () => KeycloakTokenProvider;
} {
  TestBed.configureTestingModule({
    providers: [
      provideHttpClient(),
      provideHttpClientTesting(),
      ...(config === null ? [] : [{ provide: KEYCLOAK_TOKEN_PROVIDER_CONFIG, useValue: config }])
    ]
  });
  return {
    controller: TestBed.inject(HttpTestingController),
    create: (): KeycloakTokenProvider => TestBed.inject(KeycloakTokenProvider)
  };
}

/**
 * Yield to the microtask queue so an awaited HTTP response inside the provider
 * can settle before the next assertion.
 *
 * @returns a promise resolving on the next microtask tick.
 */
function flushMicrotasks(): Promise<void> {
  return Promise.resolve();
}

/**
 * Flush the single pending token-endpoint request with a JSON body, then let the
 * provider's awaiting `firstValueFrom` settle.
 *
 * @param controller the HTTP testing controller scripting the response.
 * @param body the token-endpoint response body to return.
 * @returns the flushed {@link TestRequest} for body/URL assertions.
 */
async function flushToken(controller: HttpTestingController, body: TokenBody): Promise<TestRequest> {
  const request: TestRequest = controller.expectOne(TOKEN_ENDPOINT);
  request.flush(body);
  await flushMicrotasks();
  return request;
}

/** Unit tests for the concrete {@link KeycloakTokenProvider}. */
describe("KeycloakTokenProvider", (): void => {
  afterEach((): void => {
    jest.useRealTimers();
  });

  /** A `null` config provider makes construction fail with a descriptive error. */
  it("throws when no config is provided", (): void => {
    const { create } = setup(null);
    expect((): KeycloakTokenProvider => create()).toThrow(KeycloakAuthenticationError);
  });

  /** Each required base field must be a non-empty string. */
  it("throws when a required base field is empty", (): void => {
    const { create } = setup({ ...ROPC_CONFIG, realm: "" });
    expect((): KeycloakTokenProvider => create()).toThrow(/realm is required/);
  });

  /** Neither an offlineToken nor a full username+password pair → construction fails. */
  it("throws when no usable credential is supplied", (): void => {
    const { create } = setup({ keycloakUrl: KEYCLOAK_URL, realm: REALM, clientId: CLIENT_ID, username: USERNAME });
    expect((): KeycloakTokenProvider => create()).toThrow(/offlineToken or a username \+ password/);
  });

  /** Before login, getToken() returns null. */
  it("returns null from getToken before login", (): void => {
    const { create } = setup(ROPC_CONFIG);
    expect(create().getToken()).toBeNull();
  });

  /** ROPC login posts grant_type=password + offline_access to the realm endpoint (no secret). */
  it("logs in via ROPC and exposes the access token", async (): Promise<void> => {
    const { controller, create } = setup(ROPC_CONFIG);
    const provider: KeycloakTokenProvider = create();

    const loginDone: Promise<void> = provider.login();
    const request: TestRequest = await flushToken(controller, {
      access_token: "access-1",
      refresh_token: "offline-1",
      expires_in: 300
    });
    await loginDone;

    const params: URLSearchParams = new URLSearchParams(request.request.body as string);
    expect(params.get("grant_type")).toBe("password");
    expect(params.get("client_id")).toBe(CLIENT_ID);
    expect(params.get("username")).toBe(USERNAME);
    expect(params.get("password")).toBe(PASSWORD);
    expect(params.get("scope")).toBe("offline_access");
    expect(params.get("client_secret")).toBeNull();
    expect(request.request.headers.get("Content-Type")).toBe("application/x-www-form-urlencoded");

    expect(provider.getToken()).toBe("access-1");
    provider.stop();
    controller.verify();
  });

  /** An offlineToken config uses a refresh_token grant and never sends a password. */
  it("logs in with a pre-obtained offlineToken via the refresh_token grant", async (): Promise<void> => {
    const { controller, create } = setup({
      keycloakUrl: KEYCLOAK_URL,
      realm: REALM,
      clientId: CLIENT_ID,
      offlineToken: "pre-offline"
    });
    const provider: KeycloakTokenProvider = create();

    const loginDone: Promise<void> = provider.login();
    const request: TestRequest = await flushToken(controller, {
      access_token: "access-1",
      refresh_token: "offline-1",
      expires_in: 300
    });
    await loginDone;

    const params: URLSearchParams = new URLSearchParams(request.request.body as string);
    expect(params.get("grant_type")).toBe("refresh_token");
    expect(params.get("refresh_token")).toBe("pre-offline");
    expect(params.get("password")).toBeNull();
    expect(provider.getToken()).toBe("access-1");
    provider.stop();
    controller.verify();
  });

  /** A second login() while a token is held is a no-op (no second request). */
  it("is idempotent: a second login while authenticated issues no request", async (): Promise<void> => {
    const { controller, create } = setup(ROPC_CONFIG);
    const provider: KeycloakTokenProvider = create();

    const loginDone: Promise<void> = provider.login();
    await flushToken(controller, { access_token: "access-1", refresh_token: "offline-1", expires_in: 300 });
    await loginDone;

    await provider.login();
    controller.verify();
    expect(provider.getToken()).toBe("access-1");
    provider.stop();
  });

  /** A 2xx response without an access_token rejects login with the error type. */
  it("rejects login when the response carries no access_token", async (): Promise<void> => {
    const { controller, create } = setup(ROPC_CONFIG);
    const provider: KeycloakTokenProvider = create();

    const loginDone: Promise<void> = provider.login();
    controller.expectOne(TOKEN_ENDPOINT).flush({ refresh_token: "offline-1", expires_in: 300 });
    await expect(loginDone).rejects.toThrow(KeycloakAuthenticationError);
    controller.verify();
  });

  /** A 2xx response without a refresh_token rejects login (missing offline_access). */
  it("rejects login when the response carries no refresh_token", async (): Promise<void> => {
    const { controller, create } = setup(ROPC_CONFIG);
    const provider: KeycloakTokenProvider = create();

    const loginDone: Promise<void> = provider.login();
    controller.expectOne(TOKEN_ENDPOINT).flush({ access_token: "access-1", expires_in: 300 });
    await expect(loginDone).rejects.toThrow(/did not contain a refresh_token/);
    controller.verify();
  });

  /** A non-2xx token response rejects login with the error type and the HTTP status. */
  it("rejects login on a non-2xx token response", async (): Promise<void> => {
    const { controller, create } = setup(ROPC_CONFIG);
    const provider: KeycloakTokenProvider = create();

    const loginDone: Promise<void> = provider.login();
    controller
      .expectOne(TOKEN_ENDPOINT)
      .flush({ error: "invalid_grant" }, { status: 401, statusText: "Unauthorized" });
    await expect(loginDone).rejects.toThrow(/HTTP 401/);
    controller.verify();
  });

  /** The background timer refreshes via the offline refresh token before expiry. */
  it("auto-refreshes before expiry, swapping in a fresh access token", async (): Promise<void> => {
    jest.useFakeTimers();
    const { controller, create } = setup(ROPC_CONFIG);
    const provider: KeycloakTokenProvider = create();

    const loginDone: Promise<void> = provider.login();
    // expires_in 31 - 30 skew = 1s scheduled delay.
    await flushToken(controller, { access_token: "access-1", refresh_token: "offline-1", expires_in: 31 });
    await loginDone;
    expect(provider.getToken()).toBe("access-1");

    jest.advanceTimersByTime(MIN_REFRESH_DELAY_IN_S * 1000);
    await flushMicrotasks();
    const refresh: TestRequest = await flushToken(controller, {
      access_token: "access-2",
      refresh_token: "offline-2",
      expires_in: 31
    });

    const params: URLSearchParams = new URLSearchParams(refresh.request.body as string);
    expect(params.get("grant_type")).toBe("refresh_token");
    expect(params.get("refresh_token")).toBe("offline-1");
    expect(provider.getToken()).toBe("access-2");
    provider.stop();
    controller.verify();
  });

  /** A refresh response without a rotated refresh_token keeps reusing the previous one. */
  it("keeps the previous refresh token when a refresh response omits one", async (): Promise<void> => {
    jest.useFakeTimers();
    const { controller, create } = setup(ROPC_CONFIG);
    const provider: KeycloakTokenProvider = create();

    const loginDone: Promise<void> = provider.login();
    await flushToken(controller, { access_token: "access-1", refresh_token: "offline-1", expires_in: 31 });
    await loginDone;

    jest.advanceTimersByTime(1000);
    await flushMicrotasks();
    await flushToken(controller, { access_token: "access-2", expires_in: 31 });
    expect(provider.getToken()).toBe("access-2");

    jest.advanceTimersByTime(1000);
    await flushMicrotasks();
    const second: TestRequest = await flushToken(controller, {
      access_token: "access-3",
      refresh_token: "offline-3",
      expires_in: 31
    });
    // The second refresh must still send the original offline-1 token (never rotated).
    expect(new URLSearchParams(second.request.body as string).get("refresh_token")).toBe("offline-1");
    expect(provider.getToken()).toBe("access-3");
    provider.stop();
    controller.verify();
  });

  /** An absent/zero expires_in clamps the delay to the minimum rather than spinning. */
  it("clamps an absent expires_in to the minimum refresh delay", async (): Promise<void> => {
    jest.useFakeTimers();
    const { controller, create } = setup(ROPC_CONFIG);
    const provider: KeycloakTokenProvider = create();

    const loginDone: Promise<void> = provider.login();
    await flushToken(controller, { access_token: "access-1", refresh_token: "offline-1" });
    await loginDone;

    // No timer should have fired yet just before the minimum delay.
    jest.advanceTimersByTime(MIN_REFRESH_DELAY_IN_S * 1000 - 1);
    await flushMicrotasks();
    controller.verify();

    jest.advanceTimersByTime(1);
    await flushMicrotasks();
    await flushToken(controller, { access_token: "access-2", refresh_token: "offline-2", expires_in: 31 });
    expect(provider.getToken()).toBe("access-2");
    provider.stop();
    controller.verify();
  });

  /** A failed background refresh surfaces to onRefreshError and keeps the stale token. */
  it("surfaces a failed background refresh to onRefreshError and keeps the stale token", async (): Promise<void> => {
    jest.useFakeTimers();
    const { controller, create } = setup(ROPC_CONFIG);
    const provider: KeycloakTokenProvider = create();
    let captured: unknown = null;
    provider.onRefreshError((error: unknown): void => {
      captured = error;
    });

    const loginDone: Promise<void> = provider.login();
    await flushToken(controller, { access_token: "access-1", refresh_token: "offline-1", expires_in: 31 });
    await loginDone;

    jest.advanceTimersByTime(1000);
    await flushMicrotasks();
    controller.expectOne(TOKEN_ENDPOINT).flush({ error: "down" }, { status: 500, statusText: "Server Error" });
    await flushMicrotasks();
    await flushMicrotasks();

    expect(captured).toBeInstanceOf(KeycloakAuthenticationError);
    expect((captured as KeycloakAuthenticationError).message).toMatch(/HTTP 500/);
    // The transient failure must NOT clobber the still-valid access token.
    expect(provider.getToken()).toBe("access-1");
    provider.stop();
    controller.verify();
  });

  /** A failed background refresh with no handler registered is swallowed silently. */
  it("swallows a failed background refresh when no handler is registered", async (): Promise<void> => {
    jest.useFakeTimers();
    const { controller, create } = setup(ROPC_CONFIG);
    const provider: KeycloakTokenProvider = create();

    const loginDone: Promise<void> = provider.login();
    await flushToken(controller, { access_token: "access-1", refresh_token: "offline-1", expires_in: 31 });
    await loginDone;

    jest.advanceTimersByTime(1000);
    await flushMicrotasks();
    controller.expectOne(TOKEN_ENDPOINT).flush({ error: "down" }, { status: 503, statusText: "Unavailable" });
    await flushMicrotasks();
    await flushMicrotasks();

    expect(provider.getToken()).toBe("access-1");
    provider.stop();
    controller.verify();
  });

  /** The refresh fired after the bounded deadline elapses stops the loop without renewing. */
  it("stops the loop at fire time once tokenExpirationInS has elapsed", async (): Promise<void> => {
    jest.useFakeTimers();
    jest.setSystemTime(0);
    const { controller, create } = setup({ ...ROPC_CONFIG, tokenExpirationInS: 1 });
    const provider: KeycloakTokenProvider = create();

    const loginDone: Promise<void> = provider.login();
    // expires_in 31 -> scheduled at ~1s, but clamped by the 1s deadline; advance past it before firing.
    await flushToken(controller, { access_token: "access-1", refresh_token: "offline-1", expires_in: 31 });
    await loginDone;

    // Move the wall clock past the deadline, then fire the armed timer.
    jest.setSystemTime(2000);
    jest.advanceTimersByTime(1000);
    await flushMicrotasks();

    // Deadline already passed at fire time -> no refresh request was issued.
    controller.verify();
    provider.stop();
  });

  /** A non-positive tokenExpirationInS lapses the loop at schedule time (no timer armed). */
  it("arms no timer when tokenExpirationInS is zero", async (): Promise<void> => {
    jest.useFakeTimers();
    jest.setSystemTime(0);
    const { controller, create } = setup({ ...ROPC_CONFIG, tokenExpirationInS: 0 });
    const provider: KeycloakTokenProvider = create();

    const loginDone: Promise<void> = provider.login();
    await flushToken(controller, { access_token: "access-1", refresh_token: "offline-1", expires_in: 31 });
    await loginDone;

    // No timer should be armed (remaining <= 0 at schedule time); advancing fires nothing.
    jest.advanceTimersByTime(100_000);
    await flushMicrotasks();
    controller.verify();
    expect(provider.getToken()).toBe("access-1");
    provider.stop();
  });

  /** stop() before a scheduled refresh fires suppresses the refresh entirely. */
  it("suppresses a scheduled refresh after stop()", async (): Promise<void> => {
    jest.useFakeTimers();
    const { controller, create } = setup(ROPC_CONFIG);
    const provider: KeycloakTokenProvider = create();

    const loginDone: Promise<void> = provider.login();
    await flushToken(controller, { access_token: "access-1", refresh_token: "offline-1", expires_in: 31 });
    await loginDone;

    provider.stop();
    jest.advanceTimersByTime(100_000);
    await flushMicrotasks();
    // No refresh request was issued after stop().
    controller.verify();
    // stop() is idempotent.
    provider.stop();
  });

  /** ngOnDestroy stops the refresh loop (Angular lifecycle hook). */
  it("stops the loop on ngOnDestroy", async (): Promise<void> => {
    jest.useFakeTimers();
    const { controller, create } = setup(ROPC_CONFIG);
    const provider: KeycloakTokenProvider = create();

    const loginDone: Promise<void> = provider.login();
    await flushToken(controller, { access_token: "access-1", refresh_token: "offline-1", expires_in: 31 });
    await loginDone;

    provider.ngOnDestroy();
    jest.advanceTimersByTime(100_000);
    await flushMicrotasks();
    controller.verify();
  });

  /** scheduleRefresh re-arms with the new expiry on a successful refresh, clamped under the deadline. */
  it("re-clamps the next refresh delay to the remaining deadline after a refresh", async (): Promise<void> => {
    jest.useFakeTimers();
    jest.setSystemTime(0);
    const { controller, create } = setup({ ...ROPC_CONFIG, tokenExpirationInS: 100 });
    const provider: KeycloakTokenProvider = create();

    const loginDone: Promise<void> = provider.login();
    // expires_in 31 -> delay 1s (under the 100s deadline).
    await flushToken(controller, { access_token: "access-1", refresh_token: "offline-1", expires_in: 31 });
    await loginDone;

    jest.setSystemTime(1000);
    jest.advanceTimersByTime(1000);
    await flushMicrotasks();
    await flushToken(controller, { access_token: "access-2", refresh_token: "offline-2", expires_in: 31 });
    expect(provider.getToken()).toBe("access-2");
    provider.stop();
    controller.verify();
  });

  /** A non-HttpErrorResponse rejection (e.g. a transport error) is wrapped with status 0. */
  it("wraps a non-HttpErrorResponse rejection as status 0", async (): Promise<void> => {
    const { create } = setup(ROPC_CONFIG);
    const http: HttpClient = TestBed.inject(HttpClient);
    const transportError: Error = new Error("network down");
    jest.spyOn(http, "post").mockReturnValue(throwError((): Error => transportError));
    const provider: KeycloakTokenProvider = create();

    await expect(provider.login()).rejects.toThrow(/HTTP 0: Error: network down/);
  });

  /** stop() while a refresh is in flight applies that refresh but re-arms nothing. */
  it("suppresses re-arming when stop() is called during an in-flight refresh", async (): Promise<void> => {
    jest.useFakeTimers();
    const { controller, create } = setup(ROPC_CONFIG);
    const provider: KeycloakTokenProvider = create();

    const loginDone: Promise<void> = provider.login();
    await flushToken(controller, { access_token: "access-1", refresh_token: "offline-1", expires_in: 31 });
    await loginDone;

    // Fire the timer so refresh() starts and parks awaiting the (still-pending) refresh response.
    jest.advanceTimersByTime(1000);
    await flushMicrotasks();
    const inFlight: TestRequest = controller.expectOne(TOKEN_ENDPOINT);

    // Stop while the refresh is in flight, then let it complete.
    provider.stop();
    inFlight.flush({ access_token: "access-2", refresh_token: "offline-2", expires_in: 31 });
    await flushMicrotasks();
    await flushMicrotasks();

    // The completed refresh still updated the token, but scheduleRefresh saw `stopped` and armed nothing.
    expect(provider.getToken()).toBe("access-2");
    jest.advanceTimersByTime(100_000);
    await flushMicrotasks();
    controller.verify();
  });

  /** The exported skew/min-delay constants are the documented values. */
  it("exposes the documented refresh-timing constants", (): void => {
    expect(REFRESH_SKEW_IN_S).toBe(30);
    expect(MIN_REFRESH_DELAY_IN_S).toBe(1);
  });

  describe("keycloakVerifySsl (browser no-op, config -> provider parity)", (): void => {
    /** An offlineToken config exercising the refresh_token grant. */
    const offlineConfig: KeycloakTokenProviderConfig = {
      keycloakUrl: KEYCLOAK_URL,
      realm: REALM,
      clientId: CLIENT_ID,
      offlineToken: "pre-offline"
    };

    /** Omitting the field defaults the stored flag to verification-ON (secure). */
    it("defaults the stored flag to true when keycloakVerifySsl is omitted", (): void => {
      const { create } = setup(offlineConfig);
      expect(create().keycloakVerifySsl).toBe(true);
    });

    /** An explicit true is stored as true. */
    it("stores an explicit keycloakVerifySsl: true as true", (): void => {
      const { create } = setup({ ...offlineConfig, keycloakVerifySsl: true });
      expect(create().keycloakVerifySsl).toBe(true);
    });

    /** An explicit false is threaded from config through to the provider field. */
    it("stores keycloakVerifySsl: false as false (threaded config -> provider)", (): void => {
      const { create } = setup({ ...offlineConfig, keycloakVerifySsl: false });
      expect(create().keycloakVerifySsl).toBe(false);
    });

    /**
     * The flag is inert at the transport layer: with keycloakVerifySsl: false the
     * provider issues the SAME single POST (same URL, method, headers, body) and
     * logs in exactly as with the field omitted — proving it is a no-op, not wired
     * to TLS.
     */
    it("does not alter or break the token request when keycloakVerifySsl is false", async (): Promise<void> => {
      const { controller, create } = setup({ ...offlineConfig, keycloakVerifySsl: false });
      const provider: KeycloakTokenProvider = create();

      const loginDone: Promise<void> = provider.login();
      const request: TestRequest = await flushToken(controller, {
        access_token: "access-1",
        refresh_token: "offline-1",
        expires_in: 300
      });
      await loginDone;

      expect(request.request.method).toBe("POST");
      expect(request.request.headers.get("Content-Type")).toBe("application/x-www-form-urlencoded");
      const params: URLSearchParams = new URLSearchParams(request.request.body as string);
      expect(params.get("grant_type")).toBe("refresh_token");
      expect(params.get("client_id")).toBe(CLIENT_ID);
      expect(params.get("refresh_token")).toBe("pre-offline");

      expect(provider.getToken()).toBe("access-1");
      provider.stop();
      controller.verify();
    });
  });
});
