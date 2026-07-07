# Transcribe example

A minimal, idiomatic usage example for [`@ondewo/s2t-client-angular`](../../README.md).

[`transcribe.service.ts`](transcribe.service.ts) is a small `@Injectable` Angular service that

1. receives the generated `Speech2TextClient` through Angular dependency injection,
2. builds a `TranscribeFileRequest` and calls the representative `TranscribeFile` RPC,
3. maps the streamed `TranscribeFileResponse` to the transcribed text.

Authentication is **not** handled here: the library attaches the Keycloak bearer token to every
request through its `AuthGrpcInterceptor`, which the host application wires up once at bootstrap via
`provideOndewoS2tAuth(...)`. See the [root README](../../README.md#authentication-keycloak-bearer-token)
for the auth setup.

## Test

[`transcribe.service.spec.ts`](transcribe.service.spec.ts) proves the example works without a live
server by mocking the generated gRPC client and message classes, then asserting that the service
builds the correct request and maps the response. Run it with:

```shell
npm test
```
