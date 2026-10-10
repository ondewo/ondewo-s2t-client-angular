# Release History

*****************

## Release ONDEWO S2T Angular Client 7.5.2

### Bug Fixes

* Removed `Speech2TextClient.transcribeStream` (plain and `$raw`), the service-client method of the bidirectional-streaming RPC `TranscribeStream`, because it never worked in a browser: gRPC-web, the protocol this library speaks, carries unary and server-streaming calls only. `TranscribeStreamRequest` and `TranscribeStreamResponse` are still exported, and every unary method is unchanged. **Migration:** a client that has to stream audio for transcription uses a native SDK such as `ondewo-s2t-client` (python, PyPI) or `@ondewo/s2t-client-nodejs`; a browser uses `transcribeFile`. The js and typescript SDKs never generated this method.
* Generated with ondewo-proto-compiler [5.15.7](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.15.7), which omits these methods for the angular target. `tests/no-client-streaming.spec.ts` fails if the public typings (`index.d.ts`) expose a method whose request is an `Observable`.
* Release automation: the GitHub and npm credentials no longer reach a process argv. `run_release_with_devops` exports them into the sub-make's environment instead of passing them as `make release NAME=<value>` arguments, `login_to_gh` and the npm `_authToken` config read them from the environment, the utils container receives them with `-e NAME`, and the NPM user name is no longer echoed. `tests/release-credentials.spec.ts` pins it.

*****************

## Release ONDEWO S2T Angular Client 7.5.1

### Improvements

* **TLS endpoint builder for the browser gRPC-web client.** `buildGrpcWebHost(config)` turns the `host` / `port` /
  `useSecureChannel` fields every ONDEWO SDK takes into the gRPC-web base URL (the `host` setting of
  `@ngx-grpc/grpc-web-client`): `https://` by default; `http://` only with `useSecureChannel: false`, and then a
  `console.warn` naming `host:port`. A bare IPv6 literal is bracketed (`https://[::1]:8443`); a host that already
  carries an `http(s)://` scheme is used as given, and an `http://` URL together with `useSecureChannel: true` is
  refused.
* **Certificate and key fields are refused instead of being silently dropped.** In a browser the user agent owns the
  TLS handshake: it trusts its own certificate store and presents a client certificate only from the browser / OS
  store, so application code can neither add a CA nor attach a client identity. A non-empty `grpcCert`,
  `grpcClientCert` or `grpcClientKey` (or their snake_case spellings, listed in `BROWSER_UNSUPPORTED_TLS_FIELDS`)
  throws a `GrpcWebEndpointError`; a private key is never shipped to a browser. An empty host, a `host:port` string,
  and a port outside 1-65535 are refused as well. Error messages name the field, never its value.
* Mutual TLS works through the browser's certificate store, or by letting the gRPC-web proxy (Envoy) terminate the
  browser's TLS and use mutual TLS upstream. Node.js callers that need certificates in code use the nodejs client.
* README: new section "TLS, mutual TLS and certificates" (modes table, Angular example, openssl test PKI, security
  notes, troubleshooting of the browser's handshake errors).

### Tests

* Unit tests for every rule above; real-handshake tests run the built URL against an HTTPS server with an in-test
  openssl PKI (trusted CA, CRLF-encoded CA, unrelated CA, client certificate required, `[::1]`).
* A jest spec pins the release-notes slice: the Makefile's slice command, the spelling of every heading, the closing
  `*****` separators, one section per version, non-empty notes for the released version, and `src/RELEASE.md`
  identical to `RELEASE.md`.

### Documentation

* RELEASE.md regains the sections and bullets that only the GitHub release bodies or the tags carried, and
  misspelled headings now match the Makefile's slice.

### Build

* Generated with ondewo-proto-compiler 5.15.2 (7.5.0 was generated with 5.14.0).
* The release no longer errors on the removed `esm2022` output or on `git pull` in a submodule pinned to a tag
  (detached HEAD); RELEASE.md normalised so pre-commit no longer rewrites it.

*****************

## Release ONDEWO S2T Angular Client 7.5.0

### Improvements

* Tracking API Version [7.5.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/7.5.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 7.4.2

### Bug Fixes

* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) The hand-written `auth/` surface moved from `src/lib/auth` to `src/auth`. `src/lib` is ng-packagr's `dest`, and ng-packagr deletes `dest` recursively *before* it compiles the library entry point - so the auth sources were removed from the build tree before the compilation that needed them. With [ondewo-proto-compiler 5.13.0](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.13.0), whose generated barrel star-exports that directory, the library build fails with `TS2307: Cannot find module './lib/auth'`; with the older compiler the barrel never mentioned it, so the build stayed green and silently published a package with no auth surface in it. `src/auth` is outside `dest` and is the first location the compiler looks for the barrel in.
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) `ONDEWO_PROTO_COMPILER_GIT_BRANCH` now pins `tags/5.13.0`, the tag the committed submodule points at, so the fix is exercised by the build rather than merely latent. The regenerated stubs under `api/` are byte-identical to 7.4.1's; the only public-API change is the newly exported auth surface (`AuthGrpcInterceptor`, `KeycloakTokenProvider`, `provideOndewoS2tAuth`, `authHttpInterceptor`, `TOKEN_PROVIDER` and the rest of the barrel), which was compiled into previous packages but reachable from nothing.
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) `tests/build-layout.spec.ts` guards the layout: it reads `dest` from the ng-package.json the build actually uses and fails when any hand-written source sits underneath it. `make release` now also stages `public-api.ts` and `index.d.ts`, which every build regenerates and which carry the auth surface into the published typings.

*****************

## Release ONDEWO S2T Angular Client 7.4.1

### Bug Fixes

* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Regenerated with [ondewo-proto-compiler 5.13.0](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.13.0).
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) The hand-written `auth/` surface is now re-exported from the generated public-api barrel. It was compiled and shipped inside the package but nothing re-exported it, so importing a symbol from the package root did not resolve and consumers could only deep-import the module. The re-export is emitted by the compiler, so it survives the regeneration that rewrites the barrel on every build.
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Tooling: `conventional-pre-commit` now runs before `giticket` at the commit-msg stage - with giticket first, its `[OND221-2830] fix: ...` rewrite was no longer valid Conventional Commits and every commit on a ticket branch failed. `README.md` is prettier-ignored where `.prettierrc` sets `useTabs` and markdownlint's MD010 de-tabs the same blocks, and the codegen `docker run` invocations no longer pass `-it`, which fails outside a TTY.

*****************

## Release ONDEWO S2T Angular Client 7.4.0

### Improvements

* Tracking API Version [7.4.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/7.4.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 7.3.0

### Improvements

* Tracking API Version [7.3.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/7.3.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 7.2.0

### Improvements

* Tracking API Version [7.2.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/7.2.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 7.1.0

### Improvements

* Tracking API Version [7.1.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/7.1.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 7.0.0

### Improvements

* Tracking API Version [7.0.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/7.0.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 6.1.0

### Improvements

* Tracking API Version [6.1.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/6.1.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 6.0.0

### Improvements

* Tracking API Version [6.0.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/6.0.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 5.7.0

### Improvements

* Tracking API Version [5.7.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/5.7.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 5.6.0

### Improvements

* Tracking API Version [5.6.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/5.6.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 5.5.0

### Improvements

* Tracking API Version [5.5.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/5.5.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 5.4.1

### Improvements

* Optimized for Angular 16 (esm2022 and fesm2022)
* Tracking API
  Version [5.4.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/5.4.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 5.4.0

### Improvements

* Tracking API
  Version [5.4.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/5.4.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 5.3.0

### Improvements

* Tracking API
  Version [5.3.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/5.3.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 5.2.0

### Improvements

* Tracking API
  Version [5.2.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/5.2.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 4.0.0

### Improvements

* Tracking API
  Version [4.0.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/4.0.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 3.3.0

* Track version 3.3.0 of [ONDEWO S2T API](https://github.com/ondewo/ondewo-s2t-api/releases/3.3.0)
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Implemented automated release for GitHub and NPM
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Added pre-commit hooks and adjusted files to them

*****************

## Release ONDEWO S2T Angular Client 3.1.1

* Track version 3.1.1 of [ONDEWO S2T API](https://github.com/ondewo/ondewo-s2t-api/releases/3.1.1)
* Upgraded to Angular >= 13.x.x and ngx-grpc >=3.0.0

*****************

## Release ONDEWO S2T Angular Client 3.0.0

* Track version 3.0.0 of [ONDEWO S2T API](https://github.com/ondewo/ondewo-s2t-api/releases/3.0.0)

### Breaking changes

* Rename Description, GetServiceInfoResponse, Inference, and Normalization messages to include S2T

*****************

## Release ONDEWO S2T Angular Client 2.0.0

* Track version 2.0.0 of [ONDEWO S2T API](https://github.com/ondewo/ondewo-s2t-api/releases/2.0.0)

*****************

## Release ONDEWO S2T Angular Client 1.6.0

* Track version 1.6.0 of [ONDEWO S2T API](https://github.com/ondewo/ondewo-s2t-api/releases/1.6.0)

*****************

## Release ONDEWO S2T Angular Client 1.4.1

* Track version 1.4.1 of [ONDEWO S2T API](https://github.com/ondewo/ondewo-s2t-api/releases/1.4.1)
* Upgraded from ngx-grpc 0.3.1 to 2.1.0

*****************

## Release ONDEWO S2T Angular Client 1.4.0

* Track version 1.4.0 of [ONDEWO S2T API](https://github.com/ondewo/ondewo-s2t-api/releases/1.4.0)
* Compatible with ONDEWO-S2T 1.4.* GRPC server

*****************
