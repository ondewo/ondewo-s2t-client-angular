import { InjectionToken } from "@angular/core";
import { TOKEN_PROVIDER } from "./token-provider";

/** Unit tests for the {@link TOKEN_PROVIDER} dependency-injection token. */
describe("TOKEN_PROVIDER", (): void => {
  /**
   * The exported token must be an `InjectionToken` instance whose debug
   * description carries the namespaced id, so DI errors point at this library.
   */
  it("is an InjectionToken with a descriptive name", (): void => {
    expect(TOKEN_PROVIDER).toBeInstanceOf(InjectionToken);
    expect(TOKEN_PROVIDER.toString()).toContain("ONDEWO_S2T_TOKEN_PROVIDER");
  });
});
