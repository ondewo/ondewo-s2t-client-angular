import { firstValueFrom, Observable, of } from 'rxjs';
import { TranscribeService } from './transcribe.service';
import { Speech2TextClient } from '../../api/ondewo/s2t/speech-to-text.pbsc';
import type { TranscribeFileResponse } from '../../api/ondewo/s2t/speech-to-text.pb';

// Replace the generated gRPC-web service + message modules with tiny fakes.
// This keeps the test hermetic: the real `.pbsc`/`.pb` modules pull in the
// gRPC-web / protobuf runtime (and reach a live S2T server), none of which is
// available — or wanted — in a unit test. The message fakes simply record the
// values the example passes into them so we can assert on the built request.
jest.mock('../../api/ondewo/s2t/speech-to-text.pbsc', (): object => ({
	Speech2TextClient: class {}
}));

jest.mock('../../api/ondewo/s2t/speech-to-text.pb', (): object => ({
	TranscribeFileRequest: class {
		public audioFile: Uint8Array;
		public config: { s2tPipelineId: string };
		public constructor(value: { audioFile: Uint8Array; config: { s2tPipelineId: string } }) {
			this.audioFile = value.audioFile;
			this.config = value.config;
		}
	},
	TranscribeRequestConfig: class {
		public s2tPipelineId: string;
		public constructor(value: { s2tPipelineId: string }) {
			this.s2tPipelineId = value.s2tPipelineId;
		}
	}
}));

/** The S2T pipeline the example is asked to transcribe with. */
const PIPELINE_ID: string = 'default_english_pipeline';

/** Raw audio bytes handed to the example (contents are irrelevant to the test). */
const AUDIO_FILE: Uint8Array = new Uint8Array([1, 2, 3, 4]);

/** The transcription text the mocked service returns for the happy-path case. */
const EXPECTED_TRANSCRIPTION: string = 'hello world';

/** Shape of the request the example builds and hands to the client. */
interface CapturedRequest {
	audioFile: Uint8Array;
	config: { s2tPipelineId: string };
}

/** A `TranscribeService` wired to a stub client, plus handles to inspect the call. */
interface BuiltService {
	service: TranscribeService;
	transcribeFile: jest.Mock;
	request: () => CapturedRequest;
}

/**
 * Build a `TranscribeService` backed by a stub `Speech2TextClient` whose
 * `transcribeFile` records the request it received and emits `response`.
 *
 * @param response the `TranscribeFileResponse` the stub client emits.
 * @returns the service under test, the recording mock and a getter for the
 *   captured request (throws if the client was never called).
 */
function buildService(response: TranscribeFileResponse): BuiltService {
	let capturedRequest: CapturedRequest | undefined;
	const transcribeFile: jest.Mock = jest.fn((request: CapturedRequest): Observable<TranscribeFileResponse> => {
		capturedRequest = request;
		return of(response);
	});
	const client: Speech2TextClient = { transcribeFile } as unknown as Speech2TextClient;
	return {
		service: new TranscribeService(client),
		transcribeFile,
		request: (): CapturedRequest => {
			if (capturedRequest === undefined) {
				throw new Error('transcribeFile was not called');
			}
			return capturedRequest;
		}
	};
}

describe('TranscribeService (examples/transcribe-app)', (): void => {
	it('builds a TranscribeFileRequest from the pipeline id and audio and returns the first transcription', async (): Promise<void> => {
		const response: TranscribeFileResponse = {
			transcriptions: [{ transcription: EXPECTED_TRANSCRIPTION, confidenceScore: 0.95 }],
			time: 12,
			audioUuid: 'audio-uuid'
		} as unknown as TranscribeFileResponse;
		const built: BuiltService = buildService(response);

		const text: string = await firstValueFrom(built.service.transcribeFile(PIPELINE_ID, AUDIO_FILE));

		expect(built.transcribeFile).toHaveBeenCalledTimes(1);
		expect(built.request().audioFile).toBe(AUDIO_FILE);
		expect(built.request().config.s2tPipelineId).toBe(PIPELINE_ID);
		expect(text).toBe(EXPECTED_TRANSCRIPTION);
	});

	it('emits an empty string when the response carries no transcription', async (): Promise<void> => {
		const response: TranscribeFileResponse = {
			transcriptions: [],
			time: 0,
			audioUuid: ''
		} as unknown as TranscribeFileResponse;
		const built: BuiltService = buildService(response);

		const text: string = await firstValueFrom(built.service.transcribeFile(PIPELINE_ID, AUDIO_FILE));

		expect(text).toBe('');
	});
});
