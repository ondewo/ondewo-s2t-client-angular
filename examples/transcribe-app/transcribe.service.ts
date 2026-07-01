/**
 * Minimal, idiomatic usage example for `@ondewo/s2t-client-angular`.
 *
 * It shows the three things a consumer needs to do:
 *   1. inject the generated {@link Speech2TextClient} through Angular DI,
 *   2. build a request message and call a representative RPC (`TranscribeFile`),
 *   3. handle the streamed gRPC-web response.
 *
 * Authentication is intentionally NOT handled here. This library attaches the
 * Keycloak bearer token to every outgoing request via the
 * {@link https://github.com/ondewo/ondewo-s2t-client-angular `AuthGrpcInterceptor`}.
 * The host application wires it up once at bootstrap and this service stays
 * auth-agnostic:
 *
 * ```ts
 * import { bootstrapApplication } from '@angular/platform-browser';
 * import { provideHttpClient, withInterceptors } from '@angular/common/http';
 * import { authHttpInterceptor, provideOndewoS2tAuth } from '@ondewo/s2t-client-angular';
 * import { KeycloakTokenProvider } from './keycloak-token-provider';
 *
 * bootstrapApplication(AppComponent, {
 *   providers: [
 *     provideOndewoS2tAuth(KeycloakTokenProvider),
 *     provideHttpClient(withInterceptors([authHttpInterceptor]))
 *   ]
 * });
 * ```
 *
 * In a real application these symbols are imported from the published package
 * (`@ondewo/s2t-client-angular`); the relative paths below are only used so the
 * example compiles and is unit-tested inside this repository.
 */
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Speech2TextClient } from '../../api/ondewo/s2t/speech-to-text.pbsc';
import {
	TranscribeFileRequest,
	TranscribeFileResponse,
	TranscribeRequestConfig
} from '../../api/ondewo/s2t/speech-to-text.pb';

/** Example service that transcribes a single audio file through the S2T API. */
@Injectable({ providedIn: 'root' })
export class TranscribeService {
	public constructor(private readonly speech2TextClient: Speech2TextClient) {}

	/**
	 * Transcribe one audio file with the given S2T pipeline and emit the text of
	 * the best (first) transcription — or an empty string when the service
	 * returned no transcription.
	 *
	 * @param pipelineId the id of the S2T pipeline to run the audio through.
	 * @param audioFile the raw audio bytes (e.g. the contents of a `.wav` file).
	 * @returns an observable that emits the transcribed text once and completes.
	 */
	public transcribeFile(pipelineId: string, audioFile: Uint8Array): Observable<string> {
		const request: TranscribeFileRequest = new TranscribeFileRequest({
			audioFile,
			config: new TranscribeRequestConfig({ s2tPipelineId: pipelineId })
		});

		return this.speech2TextClient
			.transcribeFile(request)
			.pipe(map((response: TranscribeFileResponse): string => response.transcriptions?.[0]?.transcription ?? ''));
	}
}
