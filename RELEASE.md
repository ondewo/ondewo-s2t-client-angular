# Release History

*****************

## Release ONDEWO S2T Angular Client 7.6.2

### New Features

* [[OND236-120]](https://ondewo.atlassian.net/browse/OND236-120) Keycloak authentication with offline-token start-up, matching ondewo-s2t-client-python 7.6.2 (this release carries the python SDK's 7.6.1 and 7.6.2 Keycloak work at once, so every language shares one version for one feature set): the framework-free `KeycloakTokenSession` behind the `KeycloakTokenProvider` DI adapter, with `refreshToken` (`offlineToken` stays as a deprecated alias), `configure()`, `whenReady()` and `ensureFreshToken({ force })`.
* [[OND236-120]](https://ondewo.atlassian.net/browse/OND236-120) A handed-off Keycloak *offline* refresh token starts the client with one `grant_type=refresh_token` exchange, and the client then never sends a password grant, not even as a fallback; a refused token is never answered with a password login. A Keycloak config needs `password` OR `refresh_token`, all Keycloak fields are validated all-or-nothing, and the password and the token are redacted in every rendering.
* [[OND236-120]](https://ondewo.atlassian.net/browse/OND236-120) Resilient refresh: a failed refresh never ends the refresh loop; the proactive refresh and the per-call (lazy) refresh share one full-jitter backoff (5 s doubling to 300 s, measured from the recorded failure) and send no request while it runs; concurrent callers share one in-flight refresh. A still-valid token keeps being served while a refresh fails, and only an expired token raises `KeycloakAuthenticationError` (carrying the cause).
* [[OND236-120]](https://ondewo.atlassian.net/browse/OND236-120) One shared provider per credential set, keyed by a SHA-256 of the credentials, so two configs of different tenants never share one. The token request has a 10 s timeout, quoted Keycloak error bodies are cut at 500 characters, and a token response is reported by its field names only, never its values.

### Bug Fixes

* [[OND236-120]](https://ondewo.atlassian.net/browse/OND236-120) `getToken()` waits for an in-flight first login instead of answering `null`, so a request issued right after bootstrap is no longer sent unauthenticated.
* [[OND236-120]](https://ondewo.atlassian.net/browse/OND236-120) A provider registered without a configuration stays idle instead of throwing; `login()`, `stop()` and `onRefreshError()` stay as deprecated aliases, and `onRefreshError()` now hears every failed refresh of a shared login.

### Improvements

* [[OND236-120]](https://ondewo.atlassian.net/browse/OND236-120) Tests: the T01-T62 catalogue as unit tests; the library bundle and typings are rebuilt with `make build`.

API unchanged: tracking API Version [7.6.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/7.6.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 7.6.0

### New Features

* Regenerated against the not yet released ondewo-s2t-api 7.6.0 (`src/ondewo-s2t-api` at `9c0e0ad`, branch
  `feature/OND236-120-barge-in-cancel`; 7.5.2 was generated from tag 7.5.0). New messages and fields in the typings:
  * Turn-detection conversation context: `TurnDetectionOptions.conversationContext`
    (`TurnDetectionConversationContext` of `TurnDetectionContextTurn`s, role `ROLE_USER` / `ROLE_ASSISTANT`).
  * Per-call end-of-turn decision fields on `TurnDetectionOptions`: `endOfTurnProbabilityThreshold`, `holdBands`
    (`TurnDetectionHoldBands` of `TurnDetectionHoldBand`), `uncertainMinWords`, `incompleteMaxSilenceSeconds` and
    `exactProbability`.
  * pipecat Smart Turn Triton fields on `TurnDetectionOptions`: `pipecatTritonModelName`, `pipecatTritonServerHost`,
    `pipecatTritonServerPort`, `pipecatMaxAudioSeconds` and `pipecatTimeoutSeconds`.
  * Per-stream processing chunk `UtteranceDetectionOptions.minAudioChunkSize` and per-request partial-transcription
    period `UtteranceDetectionOptions.transcribeNotFinalPeriodSeconds`; the pipeline-level
    `StreamingSpeechRecognition.transcribeNotFinalPeriodSeconds`.
  * `StreamingSpeechRecognition.transcribeNotFinal` is now `optional` (same field number, wire-compatible), so an
    explicit `false` can be told apart from unset.
  * Opt-in end-of-speech candidate: `TranscriptionReturnOptions.returnEndOfSpeechCandidate` and the flag
    `TranscribeStreamResponse.endOfSpeechCandidate`.

### Build

* Generated with ondewo-proto-compiler [5.17.0](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.17.0),
  built with the Angular 22 toolchain (ng-packagr 22). The peer range of `@angular/core` and `@angular/common` is
  widened to `>=20.0.0 <23.0.0`.
* The typings moved from `index.d.ts` to `types/ondewo-s2t-client-angular.d.ts`; `typings` and `exports["."].types`
  of the package manifest point there.
* Codegen runs on the `ondewo-angular-proto-compiler:5.17.0` image, tagged from the pinned submodule by
  `build_compiler`, instead of the untagged `:latest`.
* New make target `test_angular_compat` runs the proto compiler's Angular backward-compatibility harness on `npm/`.
* `update_package` also stamps the version into the root `package.json` and `package-lock.json`.
* The utils image uses Node.js 24.22.3.
* eslint ignores the `npm/` build output: ng-packagr 22 writes its typings to `npm/types/`, which `**/index.d.ts`
  no longer covered, so `make eslint` failed on the generated declarations.

### Improvements

* Tracking API Version [7.6.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/7.6.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )
* [[OND236-120]](https://ondewo.atlassian.net/browse/OND236-120) New runtime floors from ondewo-proto-compiler 5.17.0:
  grpc-web 2.1.1. An app using this client needs `"grpc-web": "2.1.1"` as an exact direct dependency plus
  `"overrides": { "grpc-web": "$grpc-web" }` (`@ngx-grpc/grpc-web-client` still declares the peer `grpc-web ^1.2.1`)
  and `google-protobuf ~3.21.4`, as this repository's own `package.json` does. The `@ngx-grpc/*` peer range is
  `>=3.1.2` with no upper bound, and `@ngx-grpc/well-known-types` (imported by the generated code) is now declared
  as a peer too; the compiler's Angular compatibility harness passes on Angular 20.0.0, 20, 21 and 22 with
  `@ngx-grpc` 5.x.

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
