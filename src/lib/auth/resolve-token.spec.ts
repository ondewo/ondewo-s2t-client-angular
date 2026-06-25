import { firstValueFrom, Observable, of, Subject, Subscription, throwError } from "rxjs";
import {
  AUTHORIZATION_HEADER,
  BEARER_PREFIX,
  buildBearerValue,
  once,
  resolveBearerValue,
  resolveToken
} from "./resolve-token";

/** A representative, structurally-valid JWT-shaped access token. */
const TOKEN: string = "eyJhbGciOi.payload.signature";

/** Unit tests for the header-name / scheme-prefix constants. */
describe("constants", (): void => {
  /** The header name must be lower-cased for HTTP/2 and gRPC-web metadata. */
  it("uses a lower-case authorization header name", (): void => {
    expect(AUTHORIZATION_HEADER).toBe("authorization");
  });

  /** The credential scheme prefix must be the standard `"Bearer "`. */
  it("uses the standard bearer scheme prefix", (): void => {
    expect(BEARER_PREFIX).toBe("Bearer ");
  });
});

/** Unit tests for {@link resolveToken}: normalizing every `TokenResult` shape. */
describe("resolveToken", (): void => {
  /** A synchronous string is emitted verbatim. */
  it("resolves a synchronous string token", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(TOKEN))).resolves.toBe(TOKEN);
  });

  /** A synchronous `null` (unauthenticated) is emitted as `null`. */
  it("resolves null when the token is null", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(null))).resolves.toBeNull();
  });

  /** An empty string is collapsed to `null` so no empty `Bearer` is built. */
  it("collapses an empty-string token to null", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(""))).resolves.toBeNull();
  });

  /** A whitespace-only token carries no credential and collapses to `null`. */
  it("collapses a whitespace-only token to null", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken("   "))).resolves.toBeNull();
  });

  /** A misbehaving source emitting `undefined` must be treated as "no token". */
  it("collapses an undefined emission from a misbehaving source to null", async (): Promise<void> => {
    // A `TokenResult` source can emit `undefined` at runtime even though the
    // type says `string | null`; it must be treated as "no token", not crash.
    const source: Observable<string | null> = of(undefined as unknown as string | null);
    await expect(firstValueFrom(resolveToken(source))).resolves.toBeNull();
  });

  /** Surrounding whitespace is trimmed off a real token. */
  it("trims surrounding whitespace from a real token", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(`  ${TOKEN}  `))).resolves.toBe(TOKEN);
  });

  /** A `Promise` source resolving to a token is awaited and emitted. */
  it("resolves a Promise-based token source", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(Promise.resolve(TOKEN)))).resolves.toBe(TOKEN);
  });

  /** A `Promise` source resolving to `null` is awaited and emitted as `null`. */
  it("resolves a Promise that resolves to null", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(Promise.resolve(null)))).resolves.toBeNull();
  });

  /** An `Observable` source is subscribed and its emission re-emitted. */
  it("resolves an Observable-based token source", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(of(TOKEN)))).resolves.toBe(TOKEN);
  });

  /** A rejected `Promise` source surfaces as an error, never as "no token". */
  it("propagates an error from a Promise token source", async (): Promise<void> => {
    const boom: Error = new Error("token refresh failed");
    await expect(firstValueFrom(resolveToken(Promise.reject(boom)))).rejects.toBe(boom);
  });

  /** An erroring `Observable` source surfaces as an error. */
  it("propagates an error from an Observable token source", async (): Promise<void> => {
    const boom: Error = new Error("token stream failed");
    await expect(firstValueFrom(resolveToken(throwError(() => boom)))).rejects.toBe(boom);
  });

  /** Unsubscribing the wrapper must unsubscribe the wrapped source (no leak). */
  it("tears down the underlying subscription when the consumer unsubscribes", (): void => {
    const source: Subject<string | null> = new Subject<string | null>();
    const subscription: Subscription = resolveToken(source).subscribe();
    expect(source.observed).toBe(true);
    subscription.unsubscribe();
    expect(source.observed).toBe(false);
  });
});

/** Unit tests for {@link buildBearerValue}: composing the header value. */
describe("buildBearerValue", (): void => {
  /** A real token is prefixed with the bearer scheme. */
  it("prefixes a real token with the bearer scheme", (): void => {
    expect(buildBearerValue(TOKEN)).toBe(`${BEARER_PREFIX}${TOKEN}`);
  });

  /** A `null` token yields `null` (no header to attach). */
  it("returns null for a null token", (): void => {
    expect(buildBearerValue(null)).toBeNull();
  });
});

/** Unit tests for {@link resolveBearerValue}: resolve-and-format end to end. */
describe("resolveBearerValue", (): void => {
  /** A present token is resolved and formatted as the full header value. */
  it("emits the bearer header value for a present token", async (): Promise<void> => {
    await expect(firstValueFrom(resolveBearerValue(TOKEN))).resolves.toBe(`${BEARER_PREFIX}${TOKEN}`);
  });

  /** A `null` token yields `null` (interceptors then send the request as-is). */
  it("emits null when no token is available", async (): Promise<void> => {
    await expect(firstValueFrom(resolveBearerValue(null))).resolves.toBeNull();
  });

  /** An empty token collapses to `null` before any header is built. */
  it("emits null for an empty token", async (): Promise<void> => {
    await expect(firstValueFrom(resolveBearerValue(""))).resolves.toBeNull();
  });

  /** Errors from the token source propagate through the formatting wrapper. */
  it("propagates an error from the token source", async (): Promise<void> => {
    const boom: Error = new Error("nope");
    await expect(firstValueFrom(resolveBearerValue(throwError(() => boom)))).rejects.toBe(boom);
  });

  /** Unsubscribing the wrapper tears down the wrapped source (no leak). */
  it("tears down the underlying subscription when the consumer unsubscribes", (): void => {
    const source: Subject<string | null> = new Subject<string | null>();
    const subscription: Subscription = resolveBearerValue(source).subscribe();
    expect(source.observed).toBe(true);
    subscription.unsubscribe();
    expect(source.observed).toBe(false);
  });

  /** A token pushed asynchronously through a `Subject` is formatted on arrival. */
  it("emits the bearer value for a token pushed through an Observable source", async (): Promise<void> => {
    const source: Subject<string | null> = new Subject<string | null>();
    const promise: Promise<string | null> = firstValueFrom(resolveBearerValue(source));
    source.next(TOKEN);
    source.complete();
    await expect(promise).resolves.toBe(`${BEARER_PREFIX}${TOKEN}`);
  });
});

/** Unit tests for the {@link once} synchronous-value observable helper. */
describe("once", (): void => {
  /** The supplied value is emitted exactly once and the stream completes. */
  it("emits the given value exactly once", async (): Promise<void> => {
    await expect(firstValueFrom(once("value"))).resolves.toBe("value");
  });
});
