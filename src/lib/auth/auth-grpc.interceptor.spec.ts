import { GrpcEvent, GrpcMessage, GrpcRequest } from "@ngx-grpc/common";
import { GrpcHandler } from "@ngx-grpc/core";
import { firstValueFrom, Observable, of, throwError } from "rxjs";
import { AuthGrpcInterceptor } from "./auth-grpc.interceptor";
import { AUTHORIZATION_HEADER, BEARER_PREFIX } from "./resolve-token";
import { TokenProvider, TokenResult } from "./token-provider";

/** A representative JWT-shaped access token used across the cases. */
const TOKEN: string = "header.payload.signature";

/** The full `authorization` metadata value expected for {@link TOKEN}. */
const BEARER: string = `${BEARER_PREFIX}${TOKEN}`;

/** A `TokenProvider` whose `getToken` returns a caller-supplied value. */
class StubTokenProvider implements TokenProvider {
  constructor(private readonly value: TokenResult) {}

  /**
   * Return the value the test seeded the provider with.
   *
   * @returns the caller-supplied {@link TokenResult}.
   */
  public getToken(): TokenResult {
    return this.value;
  }
}

/** Minimal stand-in for `@ngx-grpc`'s `GrpcMetadata` (set/has/get over a map). */
class FakeMetadata {
  private readonly map: Map<string, string> = new Map<string, string>();

  constructor(initial?: Record<string, string>) {
    if (initial !== undefined) {
      for (const key of Object.keys(initial)) {
        this.map.set(key, initial[key]);
      }
    }
  }

  /**
   * Set a metadata entry.
   *
   * @param name the metadata key.
   * @param value the metadata value.
   */
  public set(name: string, value: string): void {
    this.map.set(name, value);
  }

  /**
   * Report whether a metadata entry exists.
   *
   * @param name the metadata key.
   * @returns `true` when the key is present.
   */
  public has(name: string): boolean {
    return this.map.has(name);
  }

  /**
   * Read a metadata entry.
   *
   * @param name the metadata key.
   * @returns the stored value, or `undefined` when absent.
   */
  public get(name: string): string | undefined {
    return this.map.get(name);
  }
}

/** A recognizable downstream event the fake `next` handler emits. */
const SENTINEL: GrpcEvent<GrpcMessage> = { sentinel: true } as unknown as GrpcEvent<GrpcMessage>;

/** Outcome of one interceptor run: the request metadata and the event stream. */
interface RunResult {
  /** The metadata object the interceptor may have mutated. */
  metadata: FakeMetadata;
  /** The stream of gRPC events produced by the interceptor. */
  events: Observable<GrpcEvent<GrpcMessage>>;
  /** The request handed to the `next` handler (throws if none was). */
  handled: () => GrpcRequest<GrpcMessage, GrpcMessage>;
}

/**
 * Build a request carrying the given metadata, run it through the interceptor
 * with a `next` handler that records the request it received and emits a
 * sentinel event.
 *
 * @param tokenResult the {@link TokenResult} the stub provider returns.
 * @param metadata the request metadata fed into the interceptor.
 * @returns the metadata, the event stream and a getter for the handled request.
 */
function run(tokenResult: TokenResult, metadata: FakeMetadata): RunResult {
  const interceptor: AuthGrpcInterceptor = new AuthGrpcInterceptor(new StubTokenProvider(tokenResult));
  const request: GrpcRequest<GrpcMessage, GrpcMessage> = {
    requestMetadata: metadata
  } as unknown as GrpcRequest<GrpcMessage, GrpcMessage>;

  let handledRequest: GrpcRequest<GrpcMessage, GrpcMessage> | undefined;
  const next: GrpcHandler = {
    handle: (req: GrpcRequest<GrpcMessage, GrpcMessage>): Observable<GrpcEvent<GrpcMessage>> => {
      handledRequest = req;
      return of(SENTINEL);
    }
  } as unknown as GrpcHandler;

  const events: Observable<GrpcEvent<GrpcMessage>> = interceptor.intercept(request, next);
  return {
    metadata,
    events,
    handled: (): GrpcRequest<GrpcMessage, GrpcMessage> => {
      if (handledRequest === undefined) {
        throw new Error("next handler was not invoked");
      }
      return handledRequest;
    }
  };
}

/** Unit tests for the {@link AuthGrpcInterceptor} `@ngx-grpc` interceptor. */
describe("AuthGrpcInterceptor", (): void => {
  /** A synchronous token is written to the request metadata as a bearer value. */
  it("sets the bearer metadata when a synchronous token is present", async (): Promise<void> => {
    const result: RunResult = run(TOKEN, new FakeMetadata());
    await firstValueFrom(result.events);
    expect(result.metadata.get(AUTHORIZATION_HEADER)).toBe(BEARER);
  });

  /** The downstream event from the `next` handler is re-emitted unchanged. */
  it("emits the downstream event from the next handler", async (): Promise<void> => {
    const result: RunResult = run(TOKEN, new FakeMetadata());
    await expect(firstValueFrom(result.events)).resolves.toBe(SENTINEL);
  });

  /** A `null` token leaves the metadata untouched (no empty bearer value). */
  it("leaves metadata untouched when the token is null", async (): Promise<void> => {
    const result: RunResult = run(null, new FakeMetadata());
    await firstValueFrom(result.events);
    expect(result.metadata.has(AUTHORIZATION_HEADER)).toBe(false);
  });

  /** An empty-string token is treated as "no token" — metadata is untouched. */
  it("leaves metadata untouched when the token is an empty string", async (): Promise<void> => {
    const result: RunResult = run("", new FakeMetadata());
    await firstValueFrom(result.events);
    expect(result.metadata.has(AUTHORIZATION_HEADER)).toBe(false);
  });

  /** A `Promise` token is awaited before the request is delegated. */
  it("resolves a Promise-based token before delegating", async (): Promise<void> => {
    const result: RunResult = run(Promise.resolve(TOKEN), new FakeMetadata());
    await firstValueFrom(result.events);
    expect(result.metadata.get(AUTHORIZATION_HEADER)).toBe(BEARER);
  });

  /** An `Observable` token is awaited before the request is delegated. */
  it("resolves an Observable-based token before delegating", async (): Promise<void> => {
    const result: RunResult = run(of(TOKEN), new FakeMetadata());
    await firstValueFrom(result.events);
    expect(result.metadata.get(AUTHORIZATION_HEADER)).toBe(BEARER);
  });

  /** A pre-set `authorization` entry wins and the provider is never consulted. */
  it("leaves an existing authorization entry untouched and skips the token provider", async (): Promise<void> => {
    const preset: string = `${BEARER_PREFIX}caller-supplied`;
    const provider: StubTokenProvider = new StubTokenProvider(TOKEN);
    const getTokenSpy: jest.SpyInstance<TokenResult, []> = jest.spyOn(provider, "getToken");
    const interceptor: AuthGrpcInterceptor = new AuthGrpcInterceptor(provider);
    const metadata: FakeMetadata = new FakeMetadata({ [AUTHORIZATION_HEADER]: preset });
    const request: GrpcRequest<GrpcMessage, GrpcMessage> = {
      requestMetadata: metadata
    } as unknown as GrpcRequest<GrpcMessage, GrpcMessage>;
    const next: GrpcHandler = {
      handle: (): Observable<GrpcEvent<GrpcMessage>> => of(SENTINEL)
    } as unknown as GrpcHandler;

    await firstValueFrom(interceptor.intercept(request, next));

    expect(metadata.get(AUTHORIZATION_HEADER)).toBe(preset);
    expect(getTokenSpy).not.toHaveBeenCalled();
  });

  /** A token-source error surfaces to the caller; the request is not delegated. */
  it("propagates an error raised by the token source without delegating", async (): Promise<void> => {
    const boom: Error = new Error("token refresh failed");
    const result: RunResult = run(throwError(() => boom), new FakeMetadata());
    await expect(firstValueFrom(result.events)).rejects.toBe(boom);
  });
});
