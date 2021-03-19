import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare enum CTCDecoding {
    greedy = 0,
    beamSearchWithLm = 1
}
export declare class TranscribeStreamRequest implements GrpcMessage {
    static toBinary(instance: TranscribeStreamRequest): any;
    static fromBinary(bytes: ByteSource): TranscribeStreamRequest;
    static refineValues(instance: TranscribeStreamRequest): void;
    static fromBinaryReader(instance: TranscribeStreamRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: TranscribeStreamRequest, writer: BinaryWriter): void;
    private _s2tPipelineId?;
    private _audioChunk?;
    private _ctcDecoding?;
    private _spellingCorrection?;
    private _disableNormalization?;
    private _endOfStream?;
    /**
     * Creates an object and applies default Protobuf values
     * @param TranscribeStreamRequest value
     */
    constructor(value?: RecursivePartial<TranscribeStreamRequest>);
    get s2tPipelineId(): string | undefined;
    set s2tPipelineId(value: string | undefined);
    get audioChunk(): Uint8Array | undefined;
    set audioChunk(value: Uint8Array | undefined);
    get ctcDecoding(): CTCDecoding | undefined;
    set ctcDecoding(value: CTCDecoding | undefined);
    get spellingCorrection(): boolean | undefined;
    set spellingCorrection(value: boolean | undefined);
    get disableNormalization(): boolean | undefined;
    set disableNormalization(value: boolean | undefined);
    get endOfStream(): boolean | undefined;
    set endOfStream(value: boolean | undefined);
    toObject(): {
        s2tPipelineId: string;
        audioChunk: Uint8Array;
        ctcDecoding: CTCDecoding;
        spellingCorrection: boolean;
        disableNormalization: boolean;
        endOfStream: boolean;
    };
    toJSON(): {
        s2tPipelineId: string;
        audioChunk: Uint8Array;
        ctcDecoding: CTCDecoding;
        spellingCorrection: boolean;
        disableNormalization: boolean;
        endOfStream: boolean;
    };
}
export declare module TranscribeStreamRequest { }
export declare class TranscribeStreamResponse implements GrpcMessage {
    static toBinary(instance: TranscribeStreamResponse): any;
    static fromBinary(bytes: ByteSource): TranscribeStreamResponse;
    static refineValues(instance: TranscribeStreamResponse): void;
    static fromBinaryReader(instance: TranscribeStreamResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: TranscribeStreamResponse, writer: BinaryWriter): void;
    private _transcription?;
    private _time?;
    private _final?;
    /**
     * Creates an object and applies default Protobuf values
     * @param TranscribeStreamResponse value
     */
    constructor(value?: RecursivePartial<TranscribeStreamResponse>);
    get transcription(): string | undefined;
    set transcription(value: string | undefined);
    get time(): number | undefined;
    set time(value: number | undefined);
    get final(): boolean | undefined;
    set final(value: boolean | undefined);
    toObject(): {
        transcription: string;
        time: number;
        final: boolean;
    };
    toJSON(): {
        transcription: string;
        time: number;
        final: boolean;
    };
}
export declare module TranscribeStreamResponse { }
export declare class TranscribeFileRequest implements GrpcMessage {
    static toBinary(instance: TranscribeFileRequest): any;
    static fromBinary(bytes: ByteSource): TranscribeFileRequest;
    static refineValues(instance: TranscribeFileRequest): void;
    static fromBinaryReader(instance: TranscribeFileRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: TranscribeFileRequest, writer: BinaryWriter): void;
    private _s2tPipelineId?;
    private _audioFile?;
    private _ctcDecoding?;
    private _spellingCorrection?;
    private _disableNormalization?;
    private _includeTiming?;
    /**
     * Creates an object and applies default Protobuf values
     * @param TranscribeFileRequest value
     */
    constructor(value?: RecursivePartial<TranscribeFileRequest>);
    get s2tPipelineId(): string | undefined;
    set s2tPipelineId(value: string | undefined);
    get audioFile(): Uint8Array | undefined;
    set audioFile(value: Uint8Array | undefined);
    get ctcDecoding(): CTCDecoding | undefined;
    set ctcDecoding(value: CTCDecoding | undefined);
    get spellingCorrection(): boolean | undefined;
    set spellingCorrection(value: boolean | undefined);
    get disableNormalization(): boolean | undefined;
    set disableNormalization(value: boolean | undefined);
    get includeTiming(): boolean | undefined;
    set includeTiming(value: boolean | undefined);
    toObject(): {
        s2tPipelineId: string;
        audioFile: Uint8Array;
        ctcDecoding: CTCDecoding;
        spellingCorrection: boolean;
        disableNormalization: boolean;
        includeTiming: boolean;
    };
    toJSON(): {
        s2tPipelineId: string;
        audioFile: Uint8Array;
        ctcDecoding: CTCDecoding;
        spellingCorrection: boolean;
        disableNormalization: boolean;
        includeTiming: boolean;
    };
}
export declare module TranscribeFileRequest { }
export declare class TranscribeFileResponse implements GrpcMessage {
    static toBinary(instance: TranscribeFileResponse): any;
    static fromBinary(bytes: ByteSource): TranscribeFileResponse;
    static refineValues(instance: TranscribeFileResponse): void;
    static fromBinaryReader(instance: TranscribeFileResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: TranscribeFileResponse, writer: BinaryWriter): void;
    private _transcription?;
    private _time?;
    private _wordTiming?;
    /**
     * Creates an object and applies default Protobuf values
     * @param TranscribeFileResponse value
     */
    constructor(value?: RecursivePartial<TranscribeFileResponse>);
    get transcription(): string | undefined;
    set transcription(value: string | undefined);
    get time(): number | undefined;
    set time(value: number | undefined);
    get wordTiming(): WordTiming[] | undefined;
    set wordTiming(value: WordTiming[] | undefined);
    toObject(): {
        transcription: string;
        time: number;
        wordTiming: {
            word: string;
            begin: number;
            end: number;
        }[];
    };
    toJSON(): {
        transcription: string;
        time: number;
        wordTiming: {
            word: string;
            begin: number;
            end: number;
        }[];
    };
}
export declare module TranscribeFileResponse { }
export declare class WordTiming implements GrpcMessage {
    static toBinary(instance: WordTiming): any;
    static fromBinary(bytes: ByteSource): WordTiming;
    static refineValues(instance: WordTiming): void;
    static fromBinaryReader(instance: WordTiming, reader: BinaryReader): void;
    static toBinaryWriter(instance: WordTiming, writer: BinaryWriter): void;
    private _word?;
    private _begin?;
    private _end?;
    /**
     * Creates an object and applies default Protobuf values
     * @param WordTiming value
     */
    constructor(value?: RecursivePartial<WordTiming>);
    get word(): string | undefined;
    set word(value: string | undefined);
    get begin(): number | undefined;
    set begin(value: number | undefined);
    get end(): number | undefined;
    set end(value: number | undefined);
    toObject(): {
        word: string;
        begin: number;
        end: number;
    };
    toJSON(): {
        word: string;
        begin: number;
        end: number;
    };
}
export declare module WordTiming { }
export declare class S2tPipelineId implements GrpcMessage {
    static toBinary(instance: S2tPipelineId): any;
    static fromBinary(bytes: ByteSource): S2tPipelineId;
    static refineValues(instance: S2tPipelineId): void;
    static fromBinaryReader(instance: S2tPipelineId, reader: BinaryReader): void;
    static toBinaryWriter(instance: S2tPipelineId, writer: BinaryWriter): void;
    private _id?;
    /**
     * Creates an object and applies default Protobuf values
     * @param S2tPipelineId value
     */
    constructor(value?: RecursivePartial<S2tPipelineId>);
    get id(): string | undefined;
    set id(value: string | undefined);
    toObject(): {
        id: string;
    };
    toJSON(): {
        id: string;
    };
}
export declare module S2tPipelineId { }
export declare class ListS2tPipelinesRequest implements GrpcMessage {
    static toBinary(instance: ListS2tPipelinesRequest): any;
    static fromBinary(bytes: ByteSource): ListS2tPipelinesRequest;
    static refineValues(instance: ListS2tPipelinesRequest): void;
    static fromBinaryReader(instance: ListS2tPipelinesRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListS2tPipelinesRequest, writer: BinaryWriter): void;
    private _languages?;
    private _pipelineOwners?;
    private _domains?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListS2tPipelinesRequest value
     */
    constructor(value?: RecursivePartial<ListS2tPipelinesRequest>);
    get languages(): string[] | undefined;
    set languages(value: string[] | undefined);
    get pipelineOwners(): string[] | undefined;
    set pipelineOwners(value: string[] | undefined);
    get domains(): string[] | undefined;
    set domains(value: string[] | undefined);
    toObject(): {
        languages: string[];
        pipelineOwners: string[];
        domains: string[];
    };
    toJSON(): {
        languages: string[];
        pipelineOwners: string[];
        domains: string[];
    };
}
export declare module ListS2tPipelinesRequest { }
export declare class ListS2tPipelinesResponse implements GrpcMessage {
    static toBinary(instance: ListS2tPipelinesResponse): any;
    static fromBinary(bytes: ByteSource): ListS2tPipelinesResponse;
    static refineValues(instance: ListS2tPipelinesResponse): void;
    static fromBinaryReader(instance: ListS2tPipelinesResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListS2tPipelinesResponse, writer: BinaryWriter): void;
    private _pipelineConfigs?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListS2tPipelinesResponse value
     */
    constructor(value?: RecursivePartial<ListS2tPipelinesResponse>);
    get pipelineConfigs(): Speech2TextConfig[] | undefined;
    set pipelineConfigs(value: Speech2TextConfig[] | undefined);
    toObject(): {
        pipelineConfigs: {
            id: string;
            description: {
                language: string;
                pipelineOwner: string;
                domain: string;
                comments: string;
            };
            active: boolean;
            inference: {
                ctcAcousticModels: {
                    type: string;
                    quartznet: {
                        configPath: string;
                        loadType: string;
                        ptFiles: {
                            path: string;
                            step: string;
                        };
                        ckptFile: {
                            path: string;
                        };
                    };
                    quartznetTriton: {
                        configPath: string;
                        tritonUrl: string;
                        tritonModel: string;
                    };
                    wav2vec: {
                        modelPath: string;
                        useGpu: boolean;
                    };
                };
                languageModel: {
                    path: string;
                    beamSize: string;
                    beamSearchScorerAlpha: number;
                    beamSearchScorerBeta: number;
                };
            };
            streamingServer: {
                host: string;
                port: string;
                outputStyle: string;
                streamingSpeechRecognition: {
                    transcribeNotFinal: boolean;
                    ctcDecodingMethod: string;
                    samplingRate: string;
                    minAudioChunkSize: string;
                    startOfUtteranceThreshold: number;
                    endOfUtteranceThreshold: number;
                };
            };
            voiceActivityDetection: {
                active: string;
                samplingRate: string;
                pyannote: {
                    modelPath: string;
                    minAudioSize: string;
                    offset: number;
                    onset: number;
                    logScale: boolean;
                    minDurationOff: number;
                    minDurationOn: number;
                };
                matchbox: {
                    modelConfig: string;
                    encoderPath: string;
                    decoderPath: string;
                };
            };
            postProcessing: {
                pipeline: string[];
                postProcessors: {
                    symSpell: {
                        dictPath: string;
                        maxDictionaryEditDistance: string;
                        prefixLength: string;
                    };
                    normalization: {
                        language: string;
                    };
                };
            };
            logging: {
                type: string;
                path: string;
            };
        }[];
    };
    toJSON(): {
        pipelineConfigs: {
            id: string;
            description: {
                language: string;
                pipelineOwner: string;
                domain: string;
                comments: string;
            };
            active: boolean;
            inference: {
                ctcAcousticModels: {
                    type: string;
                    quartznet: {
                        configPath: string;
                        loadType: string;
                        ptFiles: {
                            path: string;
                            step: string;
                        };
                        ckptFile: {
                            path: string;
                        };
                    };
                    quartznetTriton: {
                        configPath: string;
                        tritonUrl: string;
                        tritonModel: string;
                    };
                    wav2vec: {
                        modelPath: string;
                        useGpu: boolean;
                    };
                };
                languageModel: {
                    path: string;
                    beamSize: string;
                    beamSearchScorerAlpha: number;
                    beamSearchScorerBeta: number;
                };
            };
            streamingServer: {
                host: string;
                port: string;
                outputStyle: string;
                streamingSpeechRecognition: {
                    transcribeNotFinal: boolean;
                    ctcDecodingMethod: string;
                    samplingRate: string;
                    minAudioChunkSize: string;
                    startOfUtteranceThreshold: number;
                    endOfUtteranceThreshold: number;
                };
            };
            voiceActivityDetection: {
                active: string;
                samplingRate: string;
                pyannote: {
                    modelPath: string;
                    minAudioSize: string;
                    offset: number;
                    onset: number;
                    logScale: boolean;
                    minDurationOff: number;
                    minDurationOn: number;
                };
                matchbox: {
                    modelConfig: string;
                    encoderPath: string;
                    decoderPath: string;
                };
            };
            postProcessing: {
                pipeline: string[];
                postProcessors: {
                    symSpell: {
                        dictPath: string;
                        maxDictionaryEditDistance: string;
                        prefixLength: string;
                    };
                    normalization: {
                        language: string;
                    };
                };
            };
            logging: {
                type: string;
                path: string;
            };
        }[];
    };
}
export declare module ListS2tPipelinesResponse { }
export declare class ListS2tLanguagesRequest implements GrpcMessage {
    static toBinary(instance: ListS2tLanguagesRequest): any;
    static fromBinary(bytes: ByteSource): ListS2tLanguagesRequest;
    static refineValues(instance: ListS2tLanguagesRequest): void;
    static fromBinaryReader(instance: ListS2tLanguagesRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListS2tLanguagesRequest, writer: BinaryWriter): void;
    private _domains?;
    private _pipelineOwners?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListS2tLanguagesRequest value
     */
    constructor(value?: RecursivePartial<ListS2tLanguagesRequest>);
    get domains(): string[] | undefined;
    set domains(value: string[] | undefined);
    get pipelineOwners(): string[] | undefined;
    set pipelineOwners(value: string[] | undefined);
    toObject(): {
        domains: string[];
        pipelineOwners: string[];
    };
    toJSON(): {
        domains: string[];
        pipelineOwners: string[];
    };
}
export declare module ListS2tLanguagesRequest { }
export declare class ListS2tLanguagesResponse implements GrpcMessage {
    static toBinary(instance: ListS2tLanguagesResponse): any;
    static fromBinary(bytes: ByteSource): ListS2tLanguagesResponse;
    static refineValues(instance: ListS2tLanguagesResponse): void;
    static fromBinaryReader(instance: ListS2tLanguagesResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListS2tLanguagesResponse, writer: BinaryWriter): void;
    private _languages?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListS2tLanguagesResponse value
     */
    constructor(value?: RecursivePartial<ListS2tLanguagesResponse>);
    get languages(): string[] | undefined;
    set languages(value: string[] | undefined);
    toObject(): {
        languages: string[];
    };
    toJSON(): {
        languages: string[];
    };
}
export declare module ListS2tLanguagesResponse { }
export declare class ListS2tDomainsRequest implements GrpcMessage {
    static toBinary(instance: ListS2tDomainsRequest): any;
    static fromBinary(bytes: ByteSource): ListS2tDomainsRequest;
    static refineValues(instance: ListS2tDomainsRequest): void;
    static fromBinaryReader(instance: ListS2tDomainsRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListS2tDomainsRequest, writer: BinaryWriter): void;
    private _languages?;
    private _pipelineOwners?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListS2tDomainsRequest value
     */
    constructor(value?: RecursivePartial<ListS2tDomainsRequest>);
    get languages(): string[] | undefined;
    set languages(value: string[] | undefined);
    get pipelineOwners(): string[] | undefined;
    set pipelineOwners(value: string[] | undefined);
    toObject(): {
        languages: string[];
        pipelineOwners: string[];
    };
    toJSON(): {
        languages: string[];
        pipelineOwners: string[];
    };
}
export declare module ListS2tDomainsRequest { }
export declare class ListS2tDomainsResponse implements GrpcMessage {
    static toBinary(instance: ListS2tDomainsResponse): any;
    static fromBinary(bytes: ByteSource): ListS2tDomainsResponse;
    static refineValues(instance: ListS2tDomainsResponse): void;
    static fromBinaryReader(instance: ListS2tDomainsResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListS2tDomainsResponse, writer: BinaryWriter): void;
    private _domains?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListS2tDomainsResponse value
     */
    constructor(value?: RecursivePartial<ListS2tDomainsResponse>);
    get domains(): string[] | undefined;
    set domains(value: string[] | undefined);
    toObject(): {
        domains: string[];
    };
    toJSON(): {
        domains: string[];
    };
}
export declare module ListS2tDomainsResponse { }
export declare class Speech2TextConfig implements GrpcMessage {
    static toBinary(instance: Speech2TextConfig): any;
    static fromBinary(bytes: ByteSource): Speech2TextConfig;
    static refineValues(instance: Speech2TextConfig): void;
    static fromBinaryReader(instance: Speech2TextConfig, reader: BinaryReader): void;
    static toBinaryWriter(instance: Speech2TextConfig, writer: BinaryWriter): void;
    private _id?;
    private _description?;
    private _active?;
    private _inference?;
    private _streamingServer?;
    private _voiceActivityDetection?;
    private _postProcessing?;
    private _logging?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Speech2TextConfig value
     */
    constructor(value?: RecursivePartial<Speech2TextConfig>);
    get id(): string | undefined;
    set id(value: string | undefined);
    get description(): Description | undefined;
    set description(value: Description | undefined);
    get active(): boolean | undefined;
    set active(value: boolean | undefined);
    get inference(): Inference | undefined;
    set inference(value: Inference | undefined);
    get streamingServer(): StreamingServer | undefined;
    set streamingServer(value: StreamingServer | undefined);
    get voiceActivityDetection(): VoiceActivityDetection | undefined;
    set voiceActivityDetection(value: VoiceActivityDetection | undefined);
    get postProcessing(): PostProcessing | undefined;
    set postProcessing(value: PostProcessing | undefined);
    get logging(): Logging | undefined;
    set logging(value: Logging | undefined);
    toObject(): {
        id: string;
        description: {
            language: string;
            pipelineOwner: string;
            domain: string;
            comments: string;
        };
        active: boolean;
        inference: {
            ctcAcousticModels: {
                type: string;
                quartznet: {
                    configPath: string;
                    loadType: string;
                    ptFiles: {
                        path: string;
                        step: string;
                    };
                    ckptFile: {
                        path: string;
                    };
                };
                quartznetTriton: {
                    configPath: string;
                    tritonUrl: string;
                    tritonModel: string;
                };
                wav2vec: {
                    modelPath: string;
                    useGpu: boolean;
                };
            };
            languageModel: {
                path: string;
                beamSize: string;
                beamSearchScorerAlpha: number;
                beamSearchScorerBeta: number;
            };
        };
        streamingServer: {
            host: string;
            port: string;
            outputStyle: string;
            streamingSpeechRecognition: {
                transcribeNotFinal: boolean;
                ctcDecodingMethod: string;
                samplingRate: string;
                minAudioChunkSize: string;
                startOfUtteranceThreshold: number;
                endOfUtteranceThreshold: number;
            };
        };
        voiceActivityDetection: {
            active: string;
            samplingRate: string;
            pyannote: {
                modelPath: string;
                minAudioSize: string;
                offset: number;
                onset: number;
                logScale: boolean;
                minDurationOff: number;
                minDurationOn: number;
            };
            matchbox: {
                modelConfig: string;
                encoderPath: string;
                decoderPath: string;
            };
        };
        postProcessing: {
            pipeline: string[];
            postProcessors: {
                symSpell: {
                    dictPath: string;
                    maxDictionaryEditDistance: string;
                    prefixLength: string;
                };
                normalization: {
                    language: string;
                };
            };
        };
        logging: {
            type: string;
            path: string;
        };
    };
    toJSON(): {
        id: string;
        description: {
            language: string;
            pipelineOwner: string;
            domain: string;
            comments: string;
        };
        active: boolean;
        inference: {
            ctcAcousticModels: {
                type: string;
                quartznet: {
                    configPath: string;
                    loadType: string;
                    ptFiles: {
                        path: string;
                        step: string;
                    };
                    ckptFile: {
                        path: string;
                    };
                };
                quartznetTriton: {
                    configPath: string;
                    tritonUrl: string;
                    tritonModel: string;
                };
                wav2vec: {
                    modelPath: string;
                    useGpu: boolean;
                };
            };
            languageModel: {
                path: string;
                beamSize: string;
                beamSearchScorerAlpha: number;
                beamSearchScorerBeta: number;
            };
        };
        streamingServer: {
            host: string;
            port: string;
            outputStyle: string;
            streamingSpeechRecognition: {
                transcribeNotFinal: boolean;
                ctcDecodingMethod: string;
                samplingRate: string;
                minAudioChunkSize: string;
                startOfUtteranceThreshold: number;
                endOfUtteranceThreshold: number;
            };
        };
        voiceActivityDetection: {
            active: string;
            samplingRate: string;
            pyannote: {
                modelPath: string;
                minAudioSize: string;
                offset: number;
                onset: number;
                logScale: boolean;
                minDurationOff: number;
                minDurationOn: number;
            };
            matchbox: {
                modelConfig: string;
                encoderPath: string;
                decoderPath: string;
            };
        };
        postProcessing: {
            pipeline: string[];
            postProcessors: {
                symSpell: {
                    dictPath: string;
                    maxDictionaryEditDistance: string;
                    prefixLength: string;
                };
                normalization: {
                    language: string;
                };
            };
        };
        logging: {
            type: string;
            path: string;
        };
    };
}
export declare module Speech2TextConfig { }
export declare class Description implements GrpcMessage {
    static toBinary(instance: Description): any;
    static fromBinary(bytes: ByteSource): Description;
    static refineValues(instance: Description): void;
    static fromBinaryReader(instance: Description, reader: BinaryReader): void;
    static toBinaryWriter(instance: Description, writer: BinaryWriter): void;
    private _language?;
    private _pipelineOwner?;
    private _domain?;
    private _comments?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Description value
     */
    constructor(value?: RecursivePartial<Description>);
    get language(): string | undefined;
    set language(value: string | undefined);
    get pipelineOwner(): string | undefined;
    set pipelineOwner(value: string | undefined);
    get domain(): string | undefined;
    set domain(value: string | undefined);
    get comments(): string | undefined;
    set comments(value: string | undefined);
    toObject(): {
        language: string;
        pipelineOwner: string;
        domain: string;
        comments: string;
    };
    toJSON(): {
        language: string;
        pipelineOwner: string;
        domain: string;
        comments: string;
    };
}
export declare module Description { }
export declare class Inference implements GrpcMessage {
    static toBinary(instance: Inference): any;
    static fromBinary(bytes: ByteSource): Inference;
    static refineValues(instance: Inference): void;
    static fromBinaryReader(instance: Inference, reader: BinaryReader): void;
    static toBinaryWriter(instance: Inference, writer: BinaryWriter): void;
    private _ctcAcousticModels?;
    private _languageModel?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Inference value
     */
    constructor(value?: RecursivePartial<Inference>);
    get ctcAcousticModels(): CtcAcousticModels | undefined;
    set ctcAcousticModels(value: CtcAcousticModels | undefined);
    get languageModel(): LanguageModel | undefined;
    set languageModel(value: LanguageModel | undefined);
    toObject(): {
        ctcAcousticModels: {
            type: string;
            quartznet: {
                configPath: string;
                loadType: string;
                ptFiles: {
                    path: string;
                    step: string;
                };
                ckptFile: {
                    path: string;
                };
            };
            quartznetTriton: {
                configPath: string;
                tritonUrl: string;
                tritonModel: string;
            };
            wav2vec: {
                modelPath: string;
                useGpu: boolean;
            };
        };
        languageModel: {
            path: string;
            beamSize: string;
            beamSearchScorerAlpha: number;
            beamSearchScorerBeta: number;
        };
    };
    toJSON(): {
        ctcAcousticModels: {
            type: string;
            quartznet: {
                configPath: string;
                loadType: string;
                ptFiles: {
                    path: string;
                    step: string;
                };
                ckptFile: {
                    path: string;
                };
            };
            quartznetTriton: {
                configPath: string;
                tritonUrl: string;
                tritonModel: string;
            };
            wav2vec: {
                modelPath: string;
                useGpu: boolean;
            };
        };
        languageModel: {
            path: string;
            beamSize: string;
            beamSearchScorerAlpha: number;
            beamSearchScorerBeta: number;
        };
    };
}
export declare module Inference { }
export declare class CtcAcousticModels implements GrpcMessage {
    static toBinary(instance: CtcAcousticModels): any;
    static fromBinary(bytes: ByteSource): CtcAcousticModels;
    static refineValues(instance: CtcAcousticModels): void;
    static fromBinaryReader(instance: CtcAcousticModels, reader: BinaryReader): void;
    static toBinaryWriter(instance: CtcAcousticModels, writer: BinaryWriter): void;
    private _type?;
    private _quartznet?;
    private _quartznetTriton?;
    private _wav2vec?;
    /**
     * Creates an object and applies default Protobuf values
     * @param CtcAcousticModels value
     */
    constructor(value?: RecursivePartial<CtcAcousticModels>);
    get type(): string | undefined;
    set type(value: string | undefined);
    get quartznet(): Quartznet | undefined;
    set quartznet(value: Quartznet | undefined);
    get quartznetTriton(): QuartznetTriton | undefined;
    set quartznetTriton(value: QuartznetTriton | undefined);
    get wav2vec(): Wav2Vec | undefined;
    set wav2vec(value: Wav2Vec | undefined);
    toObject(): {
        type: string;
        quartznet: {
            configPath: string;
            loadType: string;
            ptFiles: {
                path: string;
                step: string;
            };
            ckptFile: {
                path: string;
            };
        };
        quartznetTriton: {
            configPath: string;
            tritonUrl: string;
            tritonModel: string;
        };
        wav2vec: {
            modelPath: string;
            useGpu: boolean;
        };
    };
    toJSON(): {
        type: string;
        quartznet: {
            configPath: string;
            loadType: string;
            ptFiles: {
                path: string;
                step: string;
            };
            ckptFile: {
                path: string;
            };
        };
        quartznetTriton: {
            configPath: string;
            tritonUrl: string;
            tritonModel: string;
        };
        wav2vec: {
            modelPath: string;
            useGpu: boolean;
        };
    };
}
export declare module CtcAcousticModels { }
export declare class Wav2Vec implements GrpcMessage {
    static toBinary(instance: Wav2Vec): any;
    static fromBinary(bytes: ByteSource): Wav2Vec;
    static refineValues(instance: Wav2Vec): void;
    static fromBinaryReader(instance: Wav2Vec, reader: BinaryReader): void;
    static toBinaryWriter(instance: Wav2Vec, writer: BinaryWriter): void;
    private _modelPath?;
    private _useGpu?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Wav2Vec value
     */
    constructor(value?: RecursivePartial<Wav2Vec>);
    get modelPath(): string | undefined;
    set modelPath(value: string | undefined);
    get useGpu(): boolean | undefined;
    set useGpu(value: boolean | undefined);
    toObject(): {
        modelPath: string;
        useGpu: boolean;
    };
    toJSON(): {
        modelPath: string;
        useGpu: boolean;
    };
}
export declare module Wav2Vec { }
export declare class Quartznet implements GrpcMessage {
    static toBinary(instance: Quartznet): any;
    static fromBinary(bytes: ByteSource): Quartznet;
    static refineValues(instance: Quartznet): void;
    static fromBinaryReader(instance: Quartznet, reader: BinaryReader): void;
    static toBinaryWriter(instance: Quartznet, writer: BinaryWriter): void;
    private _configPath?;
    private _loadType?;
    private _ptFiles?;
    private _ckptFile?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Quartznet value
     */
    constructor(value?: RecursivePartial<Quartznet>);
    get configPath(): string | undefined;
    set configPath(value: string | undefined);
    get loadType(): string | undefined;
    set loadType(value: string | undefined);
    get ptFiles(): PtFiles | undefined;
    set ptFiles(value: PtFiles | undefined);
    get ckptFile(): CkptFile | undefined;
    set ckptFile(value: CkptFile | undefined);
    toObject(): {
        configPath: string;
        loadType: string;
        ptFiles: {
            path: string;
            step: string;
        };
        ckptFile: {
            path: string;
        };
    };
    toJSON(): {
        configPath: string;
        loadType: string;
        ptFiles: {
            path: string;
            step: string;
        };
        ckptFile: {
            path: string;
        };
    };
}
export declare module Quartznet { }
export declare class PtFiles implements GrpcMessage {
    static toBinary(instance: PtFiles): any;
    static fromBinary(bytes: ByteSource): PtFiles;
    static refineValues(instance: PtFiles): void;
    static fromBinaryReader(instance: PtFiles, reader: BinaryReader): void;
    static toBinaryWriter(instance: PtFiles, writer: BinaryWriter): void;
    private _path?;
    private _step?;
    /**
     * Creates an object and applies default Protobuf values
     * @param PtFiles value
     */
    constructor(value?: RecursivePartial<PtFiles>);
    get path(): string | undefined;
    set path(value: string | undefined);
    get step(): string | undefined;
    set step(value: string | undefined);
    toObject(): {
        path: string;
        step: string;
    };
    toJSON(): {
        path: string;
        step: string;
    };
}
export declare module PtFiles { }
export declare class CkptFile implements GrpcMessage {
    static toBinary(instance: CkptFile): any;
    static fromBinary(bytes: ByteSource): CkptFile;
    static refineValues(instance: CkptFile): void;
    static fromBinaryReader(instance: CkptFile, reader: BinaryReader): void;
    static toBinaryWriter(instance: CkptFile, writer: BinaryWriter): void;
    private _path?;
    /**
     * Creates an object and applies default Protobuf values
     * @param CkptFile value
     */
    constructor(value?: RecursivePartial<CkptFile>);
    get path(): string | undefined;
    set path(value: string | undefined);
    toObject(): {
        path: string;
    };
    toJSON(): {
        path: string;
    };
}
export declare module CkptFile { }
export declare class QuartznetTriton implements GrpcMessage {
    static toBinary(instance: QuartznetTriton): any;
    static fromBinary(bytes: ByteSource): QuartznetTriton;
    static refineValues(instance: QuartznetTriton): void;
    static fromBinaryReader(instance: QuartznetTriton, reader: BinaryReader): void;
    static toBinaryWriter(instance: QuartznetTriton, writer: BinaryWriter): void;
    private _configPath?;
    private _tritonUrl?;
    private _tritonModel?;
    /**
     * Creates an object and applies default Protobuf values
     * @param QuartznetTriton value
     */
    constructor(value?: RecursivePartial<QuartznetTriton>);
    get configPath(): string | undefined;
    set configPath(value: string | undefined);
    get tritonUrl(): string | undefined;
    set tritonUrl(value: string | undefined);
    get tritonModel(): string | undefined;
    set tritonModel(value: string | undefined);
    toObject(): {
        configPath: string;
        tritonUrl: string;
        tritonModel: string;
    };
    toJSON(): {
        configPath: string;
        tritonUrl: string;
        tritonModel: string;
    };
}
export declare module QuartznetTriton { }
export declare class LanguageModel implements GrpcMessage {
    static toBinary(instance: LanguageModel): any;
    static fromBinary(bytes: ByteSource): LanguageModel;
    static refineValues(instance: LanguageModel): void;
    static fromBinaryReader(instance: LanguageModel, reader: BinaryReader): void;
    static toBinaryWriter(instance: LanguageModel, writer: BinaryWriter): void;
    private _path?;
    private _beamSize?;
    private _beamSearchScorerAlpha?;
    private _beamSearchScorerBeta?;
    /**
     * Creates an object and applies default Protobuf values
     * @param LanguageModel value
     */
    constructor(value?: RecursivePartial<LanguageModel>);
    get path(): string | undefined;
    set path(value: string | undefined);
    get beamSize(): string | undefined;
    set beamSize(value: string | undefined);
    get beamSearchScorerAlpha(): number | undefined;
    set beamSearchScorerAlpha(value: number | undefined);
    get beamSearchScorerBeta(): number | undefined;
    set beamSearchScorerBeta(value: number | undefined);
    toObject(): {
        path: string;
        beamSize: string;
        beamSearchScorerAlpha: number;
        beamSearchScorerBeta: number;
    };
    toJSON(): {
        path: string;
        beamSize: string;
        beamSearchScorerAlpha: number;
        beamSearchScorerBeta: number;
    };
}
export declare module LanguageModel { }
export declare class StreamingServer implements GrpcMessage {
    static toBinary(instance: StreamingServer): any;
    static fromBinary(bytes: ByteSource): StreamingServer;
    static refineValues(instance: StreamingServer): void;
    static fromBinaryReader(instance: StreamingServer, reader: BinaryReader): void;
    static toBinaryWriter(instance: StreamingServer, writer: BinaryWriter): void;
    private _host?;
    private _port?;
    private _outputStyle?;
    private _streamingSpeechRecognition?;
    /**
     * Creates an object and applies default Protobuf values
     * @param StreamingServer value
     */
    constructor(value?: RecursivePartial<StreamingServer>);
    get host(): string | undefined;
    set host(value: string | undefined);
    get port(): string | undefined;
    set port(value: string | undefined);
    get outputStyle(): string | undefined;
    set outputStyle(value: string | undefined);
    get streamingSpeechRecognition(): StreamingSpeechRecognition | undefined;
    set streamingSpeechRecognition(value: StreamingSpeechRecognition | undefined);
    toObject(): {
        host: string;
        port: string;
        outputStyle: string;
        streamingSpeechRecognition: {
            transcribeNotFinal: boolean;
            ctcDecodingMethod: string;
            samplingRate: string;
            minAudioChunkSize: string;
            startOfUtteranceThreshold: number;
            endOfUtteranceThreshold: number;
        };
    };
    toJSON(): {
        host: string;
        port: string;
        outputStyle: string;
        streamingSpeechRecognition: {
            transcribeNotFinal: boolean;
            ctcDecodingMethod: string;
            samplingRate: string;
            minAudioChunkSize: string;
            startOfUtteranceThreshold: number;
            endOfUtteranceThreshold: number;
        };
    };
}
export declare module StreamingServer { }
export declare class StreamingSpeechRecognition implements GrpcMessage {
    static toBinary(instance: StreamingSpeechRecognition): any;
    static fromBinary(bytes: ByteSource): StreamingSpeechRecognition;
    static refineValues(instance: StreamingSpeechRecognition): void;
    static fromBinaryReader(instance: StreamingSpeechRecognition, reader: BinaryReader): void;
    static toBinaryWriter(instance: StreamingSpeechRecognition, writer: BinaryWriter): void;
    private _transcribeNotFinal?;
    private _ctcDecodingMethod?;
    private _samplingRate?;
    private _minAudioChunkSize?;
    private _startOfUtteranceThreshold?;
    private _endOfUtteranceThreshold?;
    /**
     * Creates an object and applies default Protobuf values
     * @param StreamingSpeechRecognition value
     */
    constructor(value?: RecursivePartial<StreamingSpeechRecognition>);
    get transcribeNotFinal(): boolean | undefined;
    set transcribeNotFinal(value: boolean | undefined);
    get ctcDecodingMethod(): string | undefined;
    set ctcDecodingMethod(value: string | undefined);
    get samplingRate(): string | undefined;
    set samplingRate(value: string | undefined);
    get minAudioChunkSize(): string | undefined;
    set minAudioChunkSize(value: string | undefined);
    get startOfUtteranceThreshold(): number | undefined;
    set startOfUtteranceThreshold(value: number | undefined);
    get endOfUtteranceThreshold(): number | undefined;
    set endOfUtteranceThreshold(value: number | undefined);
    toObject(): {
        transcribeNotFinal: boolean;
        ctcDecodingMethod: string;
        samplingRate: string;
        minAudioChunkSize: string;
        startOfUtteranceThreshold: number;
        endOfUtteranceThreshold: number;
    };
    toJSON(): {
        transcribeNotFinal: boolean;
        ctcDecodingMethod: string;
        samplingRate: string;
        minAudioChunkSize: string;
        startOfUtteranceThreshold: number;
        endOfUtteranceThreshold: number;
    };
}
export declare module StreamingSpeechRecognition { }
export declare class VoiceActivityDetection implements GrpcMessage {
    static toBinary(instance: VoiceActivityDetection): any;
    static fromBinary(bytes: ByteSource): VoiceActivityDetection;
    static refineValues(instance: VoiceActivityDetection): void;
    static fromBinaryReader(instance: VoiceActivityDetection, reader: BinaryReader): void;
    static toBinaryWriter(instance: VoiceActivityDetection, writer: BinaryWriter): void;
    private _active?;
    private _samplingRate?;
    private _pyannote?;
    private _matchbox?;
    /**
     * Creates an object and applies default Protobuf values
     * @param VoiceActivityDetection value
     */
    constructor(value?: RecursivePartial<VoiceActivityDetection>);
    get active(): string | undefined;
    set active(value: string | undefined);
    get samplingRate(): string | undefined;
    set samplingRate(value: string | undefined);
    get pyannote(): Pyannote | undefined;
    set pyannote(value: Pyannote | undefined);
    get matchbox(): Matchbox | undefined;
    set matchbox(value: Matchbox | undefined);
    toObject(): {
        active: string;
        samplingRate: string;
        pyannote: {
            modelPath: string;
            minAudioSize: string;
            offset: number;
            onset: number;
            logScale: boolean;
            minDurationOff: number;
            minDurationOn: number;
        };
        matchbox: {
            modelConfig: string;
            encoderPath: string;
            decoderPath: string;
        };
    };
    toJSON(): {
        active: string;
        samplingRate: string;
        pyannote: {
            modelPath: string;
            minAudioSize: string;
            offset: number;
            onset: number;
            logScale: boolean;
            minDurationOff: number;
            minDurationOn: number;
        };
        matchbox: {
            modelConfig: string;
            encoderPath: string;
            decoderPath: string;
        };
    };
}
export declare module VoiceActivityDetection { }
export declare class Pyannote implements GrpcMessage {
    static toBinary(instance: Pyannote): any;
    static fromBinary(bytes: ByteSource): Pyannote;
    static refineValues(instance: Pyannote): void;
    static fromBinaryReader(instance: Pyannote, reader: BinaryReader): void;
    static toBinaryWriter(instance: Pyannote, writer: BinaryWriter): void;
    private _modelPath?;
    private _minAudioSize?;
    private _offset?;
    private _onset?;
    private _logScale?;
    private _minDurationOff?;
    private _minDurationOn?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Pyannote value
     */
    constructor(value?: RecursivePartial<Pyannote>);
    get modelPath(): string | undefined;
    set modelPath(value: string | undefined);
    get minAudioSize(): string | undefined;
    set minAudioSize(value: string | undefined);
    get offset(): number | undefined;
    set offset(value: number | undefined);
    get onset(): number | undefined;
    set onset(value: number | undefined);
    get logScale(): boolean | undefined;
    set logScale(value: boolean | undefined);
    get minDurationOff(): number | undefined;
    set minDurationOff(value: number | undefined);
    get minDurationOn(): number | undefined;
    set minDurationOn(value: number | undefined);
    toObject(): {
        modelPath: string;
        minAudioSize: string;
        offset: number;
        onset: number;
        logScale: boolean;
        minDurationOff: number;
        minDurationOn: number;
    };
    toJSON(): {
        modelPath: string;
        minAudioSize: string;
        offset: number;
        onset: number;
        logScale: boolean;
        minDurationOff: number;
        minDurationOn: number;
    };
}
export declare module Pyannote { }
export declare class Matchbox implements GrpcMessage {
    static toBinary(instance: Matchbox): any;
    static fromBinary(bytes: ByteSource): Matchbox;
    static refineValues(instance: Matchbox): void;
    static fromBinaryReader(instance: Matchbox, reader: BinaryReader): void;
    static toBinaryWriter(instance: Matchbox, writer: BinaryWriter): void;
    private _modelConfig?;
    private _encoderPath?;
    private _decoderPath?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Matchbox value
     */
    constructor(value?: RecursivePartial<Matchbox>);
    get modelConfig(): string | undefined;
    set modelConfig(value: string | undefined);
    get encoderPath(): string | undefined;
    set encoderPath(value: string | undefined);
    get decoderPath(): string | undefined;
    set decoderPath(value: string | undefined);
    toObject(): {
        modelConfig: string;
        encoderPath: string;
        decoderPath: string;
    };
    toJSON(): {
        modelConfig: string;
        encoderPath: string;
        decoderPath: string;
    };
}
export declare module Matchbox { }
export declare class PostProcessing implements GrpcMessage {
    static toBinary(instance: PostProcessing): any;
    static fromBinary(bytes: ByteSource): PostProcessing;
    static refineValues(instance: PostProcessing): void;
    static fromBinaryReader(instance: PostProcessing, reader: BinaryReader): void;
    static toBinaryWriter(instance: PostProcessing, writer: BinaryWriter): void;
    private _pipeline?;
    private _postProcessors?;
    /**
     * Creates an object and applies default Protobuf values
     * @param PostProcessing value
     */
    constructor(value?: RecursivePartial<PostProcessing>);
    get pipeline(): string[] | undefined;
    set pipeline(value: string[] | undefined);
    get postProcessors(): PostProcessors | undefined;
    set postProcessors(value: PostProcessors | undefined);
    toObject(): {
        pipeline: string[];
        postProcessors: {
            symSpell: {
                dictPath: string;
                maxDictionaryEditDistance: string;
                prefixLength: string;
            };
            normalization: {
                language: string;
            };
        };
    };
    toJSON(): {
        pipeline: string[];
        postProcessors: {
            symSpell: {
                dictPath: string;
                maxDictionaryEditDistance: string;
                prefixLength: string;
            };
            normalization: {
                language: string;
            };
        };
    };
}
export declare module PostProcessing { }
export declare class PostProcessors implements GrpcMessage {
    static toBinary(instance: PostProcessors): any;
    static fromBinary(bytes: ByteSource): PostProcessors;
    static refineValues(instance: PostProcessors): void;
    static fromBinaryReader(instance: PostProcessors, reader: BinaryReader): void;
    static toBinaryWriter(instance: PostProcessors, writer: BinaryWriter): void;
    private _symSpell?;
    private _normalization?;
    /**
     * Creates an object and applies default Protobuf values
     * @param PostProcessors value
     */
    constructor(value?: RecursivePartial<PostProcessors>);
    get symSpell(): SymSpell | undefined;
    set symSpell(value: SymSpell | undefined);
    get normalization(): Normalization | undefined;
    set normalization(value: Normalization | undefined);
    toObject(): {
        symSpell: {
            dictPath: string;
            maxDictionaryEditDistance: string;
            prefixLength: string;
        };
        normalization: {
            language: string;
        };
    };
    toJSON(): {
        symSpell: {
            dictPath: string;
            maxDictionaryEditDistance: string;
            prefixLength: string;
        };
        normalization: {
            language: string;
        };
    };
}
export declare module PostProcessors { }
export declare class SymSpell implements GrpcMessage {
    static toBinary(instance: SymSpell): any;
    static fromBinary(bytes: ByteSource): SymSpell;
    static refineValues(instance: SymSpell): void;
    static fromBinaryReader(instance: SymSpell, reader: BinaryReader): void;
    static toBinaryWriter(instance: SymSpell, writer: BinaryWriter): void;
    private _dictPath?;
    private _maxDictionaryEditDistance?;
    private _prefixLength?;
    /**
     * Creates an object and applies default Protobuf values
     * @param SymSpell value
     */
    constructor(value?: RecursivePartial<SymSpell>);
    get dictPath(): string | undefined;
    set dictPath(value: string | undefined);
    get maxDictionaryEditDistance(): string | undefined;
    set maxDictionaryEditDistance(value: string | undefined);
    get prefixLength(): string | undefined;
    set prefixLength(value: string | undefined);
    toObject(): {
        dictPath: string;
        maxDictionaryEditDistance: string;
        prefixLength: string;
    };
    toJSON(): {
        dictPath: string;
        maxDictionaryEditDistance: string;
        prefixLength: string;
    };
}
export declare module SymSpell { }
export declare class Normalization implements GrpcMessage {
    static toBinary(instance: Normalization): any;
    static fromBinary(bytes: ByteSource): Normalization;
    static refineValues(instance: Normalization): void;
    static fromBinaryReader(instance: Normalization, reader: BinaryReader): void;
    static toBinaryWriter(instance: Normalization, writer: BinaryWriter): void;
    private _language?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Normalization value
     */
    constructor(value?: RecursivePartial<Normalization>);
    get language(): string | undefined;
    set language(value: string | undefined);
    toObject(): {
        language: string;
    };
    toJSON(): {
        language: string;
    };
}
export declare module Normalization { }
export declare class Logging implements GrpcMessage {
    static toBinary(instance: Logging): any;
    static fromBinary(bytes: ByteSource): Logging;
    static refineValues(instance: Logging): void;
    static fromBinaryReader(instance: Logging, reader: BinaryReader): void;
    static toBinaryWriter(instance: Logging, writer: BinaryWriter): void;
    private _type?;
    private _path?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Logging value
     */
    constructor(value?: RecursivePartial<Logging>);
    get type(): string | undefined;
    set type(value: string | undefined);
    get path(): string | undefined;
    set path(value: string | undefined);
    toObject(): {
        type: string;
        path: string;
    };
    toJSON(): {
        type: string;
        path: string;
    };
}
export declare module Logging { }
