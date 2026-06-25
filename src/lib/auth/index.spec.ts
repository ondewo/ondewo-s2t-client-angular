import * as authApi from "./index";

/** Unit tests asserting the public auth barrel re-exports the whole surface. */
describe("auth public API barrel", (): void => {
  /** Every hand-written export must be reachable through the barrel module. */
  it("re-exports the full hand-written auth surface", (): void => {
    expect(typeof authApi.authHttpInterceptor).toBe("function");
    expect(typeof authApi.AuthGrpcInterceptor).toBe("function");
    expect(typeof authApi.provideOndewoS2tAuth).toBe("function");
    expect(typeof authApi.resolveToken).toBe("function");
    expect(typeof authApi.resolveBearerValue).toBe("function");
    expect(typeof authApi.buildBearerValue).toBe("function");
    expect(authApi.AUTHORIZATION_HEADER).toBe("authorization");
    expect(authApi.BEARER_PREFIX).toBe("Bearer ");
    expect(authApi.TOKEN_PROVIDER).toBeDefined();
  });
});
