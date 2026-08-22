# Release History

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

## Release ONDEWO S2T Angular Client 5.7.0

### Improvements

* Tracking API Version [5.7.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/5.4.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 5.6.0

### Improvements

* Tracking API Version [5.6.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/5.4.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 5.5.0

### Improvements

* Tracking API Version [5.5.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/5.4.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 5.4.1

### Improvements

* Optimized for Angular 16 (esm2022 and fesm2022)
* Tracking API Version [5.4.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/5.4.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 5.4.0

### Improvements

* Tracking API Version [5.4.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/5.4.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 5.3.0

### Improvements

* Tracking API Version [5.3.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/5.3.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 5.2.0

### Improvements

* Tracking API Version [5.2.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/5.2.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 4.0.0

### Improvements

* Tracking API Version [4.0.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/4.0.0) ( [Documentation](https://ondewo.github.io/ondewo-s2t-api/) )

*****************

## Release ONDEWO S2T Angular Client 3.3.0

### Improvements

* Track version 3.3.0 of [ONDEWO S2T API](https://github.com/ondewo/ondewo-s2t-api/releases/3.1.1)
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Implemented automated release for GitHub and NPM
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Added pre-commit hooks and adjusted files to them

*****************

## Release ONDEWO S2T Angular Client 3.1.1

### Improvements

* Track version 3.1.1 of [ONDEWO S2T API](https://github.com/ondewo/ondewo-s2t-api/releases/3.1.1)
* Upgraded to Angular >= 13.x.x and ngx-grpc >=3.0.0

*****************

## Release ONDEWO S2T Angular Client 3.0.0

### Improvements

* Track version 3.0.0 of [ONDEWO S2T API](https://github.com/ondewo/ondewo-s2t-api/releases/3.0.0)

*****************

## Release ONDEWO-S2T Angular Client 2.0.0

### Improvements

* Track version 2.0.0 of [ONDEWO S2T API](https://github.com/ondewo/ondewo-s2t-api/releases/2.0.0)

*****************

## Release ONDEWO-S2T Angular Client 1.6.0

### Improvements

* Track version 1.6.0 of [ONDEWO S2T API](https://github.com/ondewo/ondewo-s2t-api/releases/1.6.0)

*****************

## Release ONDEWO-S2T Angular Client 1.4.1

### Improvements

* Track version 1.4.1 of [ONDEWO S2T API](https://github.com/ondewo/ondewo-s2t-api/releases/1.4.1)
* Upgraded from ngx-grpc 0.3.1 to 2.1.0

*****************

## Release ONDEWO-S2T Angular Client 1.4.0

### Improvements

* Track version 1.4.0 of [ONDEWO S2T API](https://github.com/ondewo/ondewo-s2t-api/releases/1.4.0)
