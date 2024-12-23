import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
export declare enum Decoding {
    DEFAULT = 0,
    GREEDY = 1,
    BEAM_SEARCH_WITH_LM = 2,
    BEAM_SEARCH = 3
}
export declare enum InferenceBackend {
    INFERENCE_BACKEND_UNKNOWN = 0,
    INFERENCE_BACKEND_PYTORCH = 1,
    INFERENCE_BACKEND_FLAX = 2,
    INFERENCE_BACKEND_CLOUD_SERVICE_AMAZON = 3,
    INFERENCE_BACKEND_CLOUD_SERVICE_DEEPGRAM = 4,
    INFERENCE_BACKEND_CLOUD_SERVICE_GOOGLE = 5,
    INFERENCE_BACKEND_CLOUD_SERVICE_MICROSOFT = 6
}
/**
 * Message implementation for ondewo.s2t.TranscribeRequestConfig
 */
export declare class TranscribeRequestConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): TranscribeRequestConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: TranscribeRequestConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: TranscribeRequestConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: TranscribeRequestConfig, _writer: BinaryWriter): void;
    private _s2tPipelineId;
    private _decoding;
    private _languageModelName;
    private _postProcessing?;
    private _utteranceDetection?;
    private _pyannote?;
    private _returnOptions?;
    private _language;
    private _task;
    private _s2tServiceConfig?;
    private _s2tCloudProviderConfig?;
    private _oneofLanguageModelName;
    private _oneofPostProcessing;
    private _oneofUtteranceDetection;
    private _voiceActivityDetection;
    private _oneofReturnOptions;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscribeRequestConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<TranscribeRequestConfig.AsObject>);
    get s2tPipelineId(): string;
    set s2tPipelineId(value: string);
    get decoding(): Decoding;
    set decoding(value: Decoding);
    get languageModelName(): string;
    set languageModelName(value: string);
    get postProcessing(): PostProcessingOptions | undefined;
    set postProcessing(value: PostProcessingOptions | undefined);
    get utteranceDetection(): UtteranceDetectionOptions | undefined;
    set utteranceDetection(value: UtteranceDetectionOptions | undefined);
    get pyannote(): Pyannote | undefined;
    set pyannote(value: Pyannote | undefined);
    get returnOptions(): TranscriptionReturnOptions | undefined;
    set returnOptions(value: TranscriptionReturnOptions | undefined);
    get language(): string;
    set language(value: string);
    get task(): string;
    set task(value: string);
    get s2tServiceConfig(): googleProtobuf001.Struct | undefined;
    set s2tServiceConfig(value: googleProtobuf001.Struct | undefined);
    get s2tCloudProviderConfig(): S2tCloudProviderConfig | undefined;
    set s2tCloudProviderConfig(value: S2tCloudProviderConfig | undefined);
    get oneofLanguageModelName(): TranscribeRequestConfig.OneofLanguageModelNameCase;
    get oneofPostProcessing(): TranscribeRequestConfig.OneofPostProcessingCase;
    get oneofUtteranceDetection(): TranscribeRequestConfig.OneofUtteranceDetectionCase;
    get voiceActivityDetection(): TranscribeRequestConfig.VoiceActivityDetectionCase;
    get oneofReturnOptions(): TranscribeRequestConfig.OneofReturnOptionsCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): TranscribeRequestConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): TranscribeRequestConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): TranscribeRequestConfig.AsProtobufJSON;
}
export declare namespace TranscribeRequestConfig {
    /**
     * Standard JavaScript object representation for TranscribeRequestConfig
     */
    interface AsObject {
        s2tPipelineId: string;
        decoding: Decoding;
        languageModelName: string;
        postProcessing?: PostProcessingOptions.AsObject;
        utteranceDetection?: UtteranceDetectionOptions.AsObject;
        pyannote?: Pyannote.AsObject;
        returnOptions?: TranscriptionReturnOptions.AsObject;
        language: string;
        task: string;
        s2tServiceConfig?: googleProtobuf001.Struct.AsObject;
        s2tCloudProviderConfig?: S2tCloudProviderConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for TranscribeRequestConfig
     */
    interface AsProtobufJSON {
        s2tPipelineId: string;
        decoding: string;
        languageModelName: string | null;
        postProcessing: PostProcessingOptions.AsProtobufJSON | null;
        utteranceDetection: UtteranceDetectionOptions.AsProtobufJSON | null;
        pyannote: Pyannote.AsProtobufJSON | null;
        returnOptions: TranscriptionReturnOptions.AsProtobufJSON | null;
        language: string;
        task: string;
        s2tServiceConfig: googleProtobuf001.Struct.AsProtobufJSON | null;
        s2tCloudProviderConfig: S2tCloudProviderConfig.AsProtobufJSON | null;
    }
    enum OneofLanguageModelNameCase {
        none = 0,
        languageModelName = 1
    }
    enum OneofPostProcessingCase {
        none = 0,
        postProcessing = 1
    }
    enum OneofUtteranceDetectionCase {
        none = 0,
        utteranceDetection = 1
    }
    enum VoiceActivityDetectionCase {
        none = 0,
        pyannote = 1
    }
    enum OneofReturnOptionsCase {
        none = 0,
        returnOptions = 1
    }
}
/**
 * Message implementation for ondewo.s2t.S2tCloudProviderConfig
 */
export declare class S2tCloudProviderConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): S2tCloudProviderConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: S2tCloudProviderConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: S2tCloudProviderConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: S2tCloudProviderConfig, _writer: BinaryWriter): void;
    private _s2tCloudProviderConfigAmazon?;
    private _s2tCloudProviderConfigDeepgram?;
    private _s2tCloudProviderConfigGoogle?;
    private _s2tCloudProviderConfigMicrosoft?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tCloudProviderConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<S2tCloudProviderConfig.AsObject>);
    get s2tCloudProviderConfigAmazon(): S2tCloudProviderConfigAmazon | undefined;
    set s2tCloudProviderConfigAmazon(value: S2tCloudProviderConfigAmazon | undefined);
    get s2tCloudProviderConfigDeepgram(): S2tCloudProviderConfigDeepgram | undefined;
    set s2tCloudProviderConfigDeepgram(value: S2tCloudProviderConfigDeepgram | undefined);
    get s2tCloudProviderConfigGoogle(): S2tCloudProviderConfigGoogle | undefined;
    set s2tCloudProviderConfigGoogle(value: S2tCloudProviderConfigGoogle | undefined);
    get s2tCloudProviderConfigMicrosoft(): S2tCloudProviderConfigMicrosoft | undefined;
    set s2tCloudProviderConfigMicrosoft(value: S2tCloudProviderConfigMicrosoft | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): S2tCloudProviderConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): S2tCloudProviderConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): S2tCloudProviderConfig.AsProtobufJSON;
}
export declare namespace S2tCloudProviderConfig {
    /**
     * Standard JavaScript object representation for S2tCloudProviderConfig
     */
    interface AsObject {
        s2tCloudProviderConfigAmazon?: S2tCloudProviderConfigAmazon.AsObject;
        s2tCloudProviderConfigDeepgram?: S2tCloudProviderConfigDeepgram.AsObject;
        s2tCloudProviderConfigGoogle?: S2tCloudProviderConfigGoogle.AsObject;
        s2tCloudProviderConfigMicrosoft?: S2tCloudProviderConfigMicrosoft.AsObject;
    }
    /**
     * Protobuf JSON representation for S2tCloudProviderConfig
     */
    interface AsProtobufJSON {
        s2tCloudProviderConfigAmazon: S2tCloudProviderConfigAmazon.AsProtobufJSON | null;
        s2tCloudProviderConfigDeepgram: S2tCloudProviderConfigDeepgram.AsProtobufJSON | null;
        s2tCloudProviderConfigGoogle: S2tCloudProviderConfigGoogle.AsProtobufJSON | null;
        s2tCloudProviderConfigMicrosoft: S2tCloudProviderConfigMicrosoft.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.s2t.S2tCloudProviderConfigAmazon
 */
export declare class S2tCloudProviderConfigAmazon implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): S2tCloudProviderConfigAmazon;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: S2tCloudProviderConfigAmazon): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: S2tCloudProviderConfigAmazon, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: S2tCloudProviderConfigAmazon, _writer: BinaryWriter): void;
    private _enablePartialResultsStabilization;
    private _partialResultsStability;
    private _languageModelName;
    private _vocabularyName;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tCloudProviderConfigAmazon to deeply clone from
     */
    constructor(_value?: RecursivePartial<S2tCloudProviderConfigAmazon.AsObject>);
    get enablePartialResultsStabilization(): boolean;
    set enablePartialResultsStabilization(value: boolean);
    get partialResultsStability(): string;
    set partialResultsStability(value: string);
    get languageModelName(): string;
    set languageModelName(value: string);
    get vocabularyName(): string;
    set vocabularyName(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): S2tCloudProviderConfigAmazon.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): S2tCloudProviderConfigAmazon.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): S2tCloudProviderConfigAmazon.AsProtobufJSON;
}
export declare namespace S2tCloudProviderConfigAmazon {
    /**
     * Standard JavaScript object representation for S2tCloudProviderConfigAmazon
     */
    interface AsObject {
        enablePartialResultsStabilization: boolean;
        partialResultsStability: string;
        languageModelName: string;
        vocabularyName: string;
    }
    /**
     * Protobuf JSON representation for S2tCloudProviderConfigAmazon
     */
    interface AsProtobufJSON {
        enablePartialResultsStabilization: boolean;
        partialResultsStability: string;
        languageModelName: string;
        vocabularyName: string;
    }
}
/**
 * Message implementation for ondewo.s2t.S2tCloudProviderConfigDeepgram
 */
export declare class S2tCloudProviderConfigDeepgram implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): S2tCloudProviderConfigDeepgram;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: S2tCloudProviderConfigDeepgram): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: S2tCloudProviderConfigDeepgram, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: S2tCloudProviderConfigDeepgram, _writer: BinaryWriter): void;
    private _punctuate;
    private _smartFormat;
    private _numerals;
    private _measurements;
    private _dictation;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tCloudProviderConfigDeepgram to deeply clone from
     */
    constructor(_value?: RecursivePartial<S2tCloudProviderConfigDeepgram.AsObject>);
    get punctuate(): boolean;
    set punctuate(value: boolean);
    get smartFormat(): boolean;
    set smartFormat(value: boolean);
    get numerals(): boolean;
    set numerals(value: boolean);
    get measurements(): boolean;
    set measurements(value: boolean);
    get dictation(): boolean;
    set dictation(value: boolean);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): S2tCloudProviderConfigDeepgram.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): S2tCloudProviderConfigDeepgram.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): S2tCloudProviderConfigDeepgram.AsProtobufJSON;
}
export declare namespace S2tCloudProviderConfigDeepgram {
    /**
     * Standard JavaScript object representation for S2tCloudProviderConfigDeepgram
     */
    interface AsObject {
        punctuate: boolean;
        smartFormat: boolean;
        numerals: boolean;
        measurements: boolean;
        dictation: boolean;
    }
    /**
     * Protobuf JSON representation for S2tCloudProviderConfigDeepgram
     */
    interface AsProtobufJSON {
        punctuate: boolean;
        smartFormat: boolean;
        numerals: boolean;
        measurements: boolean;
        dictation: boolean;
    }
}
/**
 * Message implementation for ondewo.s2t.S2tCloudProviderConfigGoogle
 */
export declare class S2tCloudProviderConfigGoogle implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): S2tCloudProviderConfigGoogle;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: S2tCloudProviderConfigGoogle): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: S2tCloudProviderConfigGoogle, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: S2tCloudProviderConfigGoogle, _writer: BinaryWriter): void;
    private _enableAutomaticPunctuation;
    private _enableWordTimeOffsets;
    private _enableWordConfidence;
    private _transcriptNormalization;
    private _maxAlternatives;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tCloudProviderConfigGoogle to deeply clone from
     */
    constructor(_value?: RecursivePartial<S2tCloudProviderConfigGoogle.AsObject>);
    get enableAutomaticPunctuation(): boolean;
    set enableAutomaticPunctuation(value: boolean);
    get enableWordTimeOffsets(): boolean;
    set enableWordTimeOffsets(value: boolean);
    get enableWordConfidence(): boolean;
    set enableWordConfidence(value: boolean);
    get transcriptNormalization(): boolean;
    set transcriptNormalization(value: boolean);
    get maxAlternatives(): number;
    set maxAlternatives(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): S2tCloudProviderConfigGoogle.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): S2tCloudProviderConfigGoogle.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): S2tCloudProviderConfigGoogle.AsProtobufJSON;
}
export declare namespace S2tCloudProviderConfigGoogle {
    /**
     * Standard JavaScript object representation for S2tCloudProviderConfigGoogle
     */
    interface AsObject {
        enableAutomaticPunctuation: boolean;
        enableWordTimeOffsets: boolean;
        enableWordConfidence: boolean;
        transcriptNormalization: boolean;
        maxAlternatives: number;
    }
    /**
     * Protobuf JSON representation for S2tCloudProviderConfigGoogle
     */
    interface AsProtobufJSON {
        enableAutomaticPunctuation: boolean;
        enableWordTimeOffsets: boolean;
        enableWordConfidence: boolean;
        transcriptNormalization: boolean;
        maxAlternatives: number;
    }
}
/**
 * Message implementation for ondewo.s2t.S2tCloudProviderConfigMicrosoft
 */
export declare class S2tCloudProviderConfigMicrosoft implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): S2tCloudProviderConfigMicrosoft;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: S2tCloudProviderConfigMicrosoft): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: S2tCloudProviderConfigMicrosoft, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: S2tCloudProviderConfigMicrosoft, _writer: BinaryWriter): void;
    private _useFastTranscriptionApi;
    private _useDetailedOutputFormat;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tCloudProviderConfigMicrosoft to deeply clone from
     */
    constructor(_value?: RecursivePartial<S2tCloudProviderConfigMicrosoft.AsObject>);
    get useFastTranscriptionApi(): boolean;
    set useFastTranscriptionApi(value: boolean);
    get useDetailedOutputFormat(): boolean;
    set useDetailedOutputFormat(value: boolean);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): S2tCloudProviderConfigMicrosoft.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): S2tCloudProviderConfigMicrosoft.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): S2tCloudProviderConfigMicrosoft.AsProtobufJSON;
}
export declare namespace S2tCloudProviderConfigMicrosoft {
    /**
     * Standard JavaScript object representation for S2tCloudProviderConfigMicrosoft
     */
    interface AsObject {
        useFastTranscriptionApi: boolean;
        useDetailedOutputFormat: boolean;
    }
    /**
     * Protobuf JSON representation for S2tCloudProviderConfigMicrosoft
     */
    interface AsProtobufJSON {
        useFastTranscriptionApi: boolean;
        useDetailedOutputFormat: boolean;
    }
}
/**
 * Message implementation for ondewo.s2t.TranscriptionReturnOptions
 */
export declare class TranscriptionReturnOptions implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): TranscriptionReturnOptions;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: TranscriptionReturnOptions): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: TranscriptionReturnOptions, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: TranscriptionReturnOptions, _writer: BinaryWriter): void;
    private _returnStartOfSpeech;
    private _returnAudio;
    private _returnConfidenceScore;
    private _returnAlternativeTranscriptions;
    private _returnAlternativeTranscriptionsNr;
    private _returnAlternativeWords;
    private _returnAlternativeWordsNr;
    private _returnWordTiming;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscriptionReturnOptions to deeply clone from
     */
    constructor(_value?: RecursivePartial<TranscriptionReturnOptions.AsObject>);
    get returnStartOfSpeech(): boolean;
    set returnStartOfSpeech(value: boolean);
    get returnAudio(): boolean;
    set returnAudio(value: boolean);
    get returnConfidenceScore(): boolean;
    set returnConfidenceScore(value: boolean);
    get returnAlternativeTranscriptions(): boolean;
    set returnAlternativeTranscriptions(value: boolean);
    get returnAlternativeTranscriptionsNr(): number;
    set returnAlternativeTranscriptionsNr(value: number);
    get returnAlternativeWords(): boolean;
    set returnAlternativeWords(value: boolean);
    get returnAlternativeWordsNr(): number;
    set returnAlternativeWordsNr(value: number);
    get returnWordTiming(): boolean;
    set returnWordTiming(value: boolean);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): TranscriptionReturnOptions.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): TranscriptionReturnOptions.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): TranscriptionReturnOptions.AsProtobufJSON;
}
export declare namespace TranscriptionReturnOptions {
    /**
     * Standard JavaScript object representation for TranscriptionReturnOptions
     */
    interface AsObject {
        returnStartOfSpeech: boolean;
        returnAudio: boolean;
        returnConfidenceScore: boolean;
        returnAlternativeTranscriptions: boolean;
        returnAlternativeTranscriptionsNr: number;
        returnAlternativeWords: boolean;
        returnAlternativeWordsNr: number;
        returnWordTiming: boolean;
    }
    /**
     * Protobuf JSON representation for TranscriptionReturnOptions
     */
    interface AsProtobufJSON {
        returnStartOfSpeech: boolean;
        returnAudio: boolean;
        returnConfidenceScore: boolean;
        returnAlternativeTranscriptions: boolean;
        returnAlternativeTranscriptionsNr: number;
        returnAlternativeWords: boolean;
        returnAlternativeWordsNr: number;
        returnWordTiming: boolean;
    }
}
/**
 * Message implementation for ondewo.s2t.UtteranceDetectionOptions
 */
export declare class UtteranceDetectionOptions implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UtteranceDetectionOptions;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UtteranceDetectionOptions): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UtteranceDetectionOptions, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UtteranceDetectionOptions, _writer: BinaryWriter): void;
    private _transcribeNotFinal;
    private _nextChunkTimeout;
    private _oneofTranscribeNotFinal;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UtteranceDetectionOptions to deeply clone from
     */
    constructor(_value?: RecursivePartial<UtteranceDetectionOptions.AsObject>);
    get transcribeNotFinal(): boolean;
    set transcribeNotFinal(value: boolean);
    get nextChunkTimeout(): number;
    set nextChunkTimeout(value: number);
    get oneofTranscribeNotFinal(): UtteranceDetectionOptions.OneofTranscribeNotFinalCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UtteranceDetectionOptions.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UtteranceDetectionOptions.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UtteranceDetectionOptions.AsProtobufJSON;
}
export declare namespace UtteranceDetectionOptions {
    /**
     * Standard JavaScript object representation for UtteranceDetectionOptions
     */
    interface AsObject {
        transcribeNotFinal: boolean;
        nextChunkTimeout: number;
    }
    /**
     * Protobuf JSON representation for UtteranceDetectionOptions
     */
    interface AsProtobufJSON {
        transcribeNotFinal: boolean;
        nextChunkTimeout: number;
    }
    enum OneofTranscribeNotFinalCase {
        none = 0,
        transcribeNotFinal = 1
    }
}
/**
 * Message implementation for ondewo.s2t.PostProcessingOptions
 */
export declare class PostProcessingOptions implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): PostProcessingOptions;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: PostProcessingOptions): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: PostProcessingOptions, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: PostProcessingOptions, _writer: BinaryWriter): void;
    private _spellingCorrection;
    private _normalize;
    private _config?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PostProcessingOptions to deeply clone from
     */
    constructor(_value?: RecursivePartial<PostProcessingOptions.AsObject>);
    get spellingCorrection(): boolean;
    set spellingCorrection(value: boolean);
    get normalize(): boolean;
    set normalize(value: boolean);
    get config(): PostProcessing | undefined;
    set config(value: PostProcessing | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): PostProcessingOptions.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): PostProcessingOptions.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): PostProcessingOptions.AsProtobufJSON;
}
export declare namespace PostProcessingOptions {
    /**
     * Standard JavaScript object representation for PostProcessingOptions
     */
    interface AsObject {
        spellingCorrection: boolean;
        normalize: boolean;
        config?: PostProcessing.AsObject;
    }
    /**
     * Protobuf JSON representation for PostProcessingOptions
     */
    interface AsProtobufJSON {
        spellingCorrection: boolean;
        normalize: boolean;
        config: PostProcessing.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.s2t.Transcription
 */
export declare class Transcription implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Transcription;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Transcription): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Transcription, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Transcription, _writer: BinaryWriter): void;
    private _transcription;
    private _confidenceScore;
    private _words?;
    private _alternatives?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Transcription to deeply clone from
     */
    constructor(_value?: RecursivePartial<Transcription.AsObject>);
    get transcription(): string;
    set transcription(value: string);
    get confidenceScore(): number;
    set confidenceScore(value: number);
    get words(): WordDetail[] | undefined;
    set words(value: WordDetail[] | undefined);
    get alternatives(): TranscriptionAlternative[] | undefined;
    set alternatives(value: TranscriptionAlternative[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Transcription.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Transcription.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Transcription.AsProtobufJSON;
}
export declare namespace Transcription {
    /**
     * Standard JavaScript object representation for Transcription
     */
    interface AsObject {
        transcription: string;
        confidenceScore: number;
        words?: WordDetail.AsObject[];
        alternatives?: TranscriptionAlternative.AsObject[];
    }
    /**
     * Protobuf JSON representation for Transcription
     */
    interface AsProtobufJSON {
        transcription: string;
        confidenceScore: number;
        words: WordDetail.AsProtobufJSON[] | null;
        alternatives: TranscriptionAlternative.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.s2t.TranscriptionAlternative
 */
export declare class TranscriptionAlternative implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): TranscriptionAlternative;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: TranscriptionAlternative): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: TranscriptionAlternative, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: TranscriptionAlternative, _writer: BinaryWriter): void;
    private _transcript;
    private _confidence;
    private _words?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscriptionAlternative to deeply clone from
     */
    constructor(_value?: RecursivePartial<TranscriptionAlternative.AsObject>);
    get transcript(): string;
    set transcript(value: string);
    get confidence(): number;
    set confidence(value: number);
    get words(): WordDetail[] | undefined;
    set words(value: WordDetail[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): TranscriptionAlternative.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): TranscriptionAlternative.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): TranscriptionAlternative.AsProtobufJSON;
}
export declare namespace TranscriptionAlternative {
    /**
     * Standard JavaScript object representation for TranscriptionAlternative
     */
    interface AsObject {
        transcript: string;
        confidence: number;
        words?: WordDetail.AsObject[];
    }
    /**
     * Protobuf JSON representation for TranscriptionAlternative
     */
    interface AsProtobufJSON {
        transcript: string;
        confidence: number;
        words: WordDetail.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.s2t.WordDetail
 */
export declare class WordDetail implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): WordDetail;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: WordDetail): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: WordDetail, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: WordDetail, _writer: BinaryWriter): void;
    private _startTime;
    private _endTime;
    private _word;
    private _confidence;
    private _wordAlternatives?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of WordDetail to deeply clone from
     */
    constructor(_value?: RecursivePartial<WordDetail.AsObject>);
    get startTime(): number;
    set startTime(value: number);
    get endTime(): number;
    set endTime(value: number);
    get word(): string;
    set word(value: string);
    get confidence(): number;
    set confidence(value: number);
    get wordAlternatives(): WordAlternative[] | undefined;
    set wordAlternatives(value: WordAlternative[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): WordDetail.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): WordDetail.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): WordDetail.AsProtobufJSON;
}
export declare namespace WordDetail {
    /**
     * Standard JavaScript object representation for WordDetail
     */
    interface AsObject {
        startTime: number;
        endTime: number;
        word: string;
        confidence: number;
        wordAlternatives?: WordAlternative.AsObject[];
    }
    /**
     * Protobuf JSON representation for WordDetail
     */
    interface AsProtobufJSON {
        startTime: number;
        endTime: number;
        word: string;
        confidence: number;
        wordAlternatives: WordAlternative.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.s2t.WordAlternative
 */
export declare class WordAlternative implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): WordAlternative;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: WordAlternative): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: WordAlternative, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: WordAlternative, _writer: BinaryWriter): void;
    private _word;
    private _confidence;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of WordAlternative to deeply clone from
     */
    constructor(_value?: RecursivePartial<WordAlternative.AsObject>);
    get word(): string;
    set word(value: string);
    get confidence(): number;
    set confidence(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): WordAlternative.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): WordAlternative.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): WordAlternative.AsProtobufJSON;
}
export declare namespace WordAlternative {
    /**
     * Standard JavaScript object representation for WordAlternative
     */
    interface AsObject {
        word: string;
        confidence: number;
    }
    /**
     * Protobuf JSON representation for WordAlternative
     */
    interface AsProtobufJSON {
        word: string;
        confidence: number;
    }
}
/**
 * Message implementation for ondewo.s2t.TranscribeStreamRequest
 */
export declare class TranscribeStreamRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): TranscribeStreamRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: TranscribeStreamRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: TranscribeStreamRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: TranscribeStreamRequest, _writer: BinaryWriter): void;
    private _audioChunk;
    private _endOfStream;
    private _config?;
    private _muteAudio;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscribeStreamRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<TranscribeStreamRequest.AsObject>);
    get audioChunk(): Uint8Array;
    set audioChunk(value: Uint8Array);
    get endOfStream(): boolean;
    set endOfStream(value: boolean);
    get config(): TranscribeRequestConfig | undefined;
    set config(value: TranscribeRequestConfig | undefined);
    get muteAudio(): boolean;
    set muteAudio(value: boolean);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): TranscribeStreamRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): TranscribeStreamRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): TranscribeStreamRequest.AsProtobufJSON;
}
export declare namespace TranscribeStreamRequest {
    /**
     * Standard JavaScript object representation for TranscribeStreamRequest
     */
    interface AsObject {
        audioChunk: Uint8Array;
        endOfStream: boolean;
        config?: TranscribeRequestConfig.AsObject;
        muteAudio: boolean;
    }
    /**
     * Protobuf JSON representation for TranscribeStreamRequest
     */
    interface AsProtobufJSON {
        audioChunk: string;
        endOfStream: boolean;
        config: TranscribeRequestConfig.AsProtobufJSON | null;
        muteAudio: boolean;
    }
}
/**
 * Message implementation for ondewo.s2t.TranscribeStreamResponse
 */
export declare class TranscribeStreamResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): TranscribeStreamResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: TranscribeStreamResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: TranscribeStreamResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: TranscribeStreamResponse, _writer: BinaryWriter): void;
    private _transcriptions?;
    private _time;
    private _final;
    private _returnAudio;
    private _audio;
    private _utteranceStart;
    private _audioUuid;
    private _config?;
    private _oneofConfig;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscribeStreamResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<TranscribeStreamResponse.AsObject>);
    get transcriptions(): Transcription[] | undefined;
    set transcriptions(value: Transcription[] | undefined);
    get time(): number;
    set time(value: number);
    get final(): boolean;
    set final(value: boolean);
    get returnAudio(): boolean;
    set returnAudio(value: boolean);
    get audio(): Uint8Array;
    set audio(value: Uint8Array);
    get utteranceStart(): boolean;
    set utteranceStart(value: boolean);
    get audioUuid(): string;
    set audioUuid(value: string);
    get config(): TranscribeRequestConfig | undefined;
    set config(value: TranscribeRequestConfig | undefined);
    get oneofConfig(): TranscribeStreamResponse.OneofConfigCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): TranscribeStreamResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): TranscribeStreamResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): TranscribeStreamResponse.AsProtobufJSON;
}
export declare namespace TranscribeStreamResponse {
    /**
     * Standard JavaScript object representation for TranscribeStreamResponse
     */
    interface AsObject {
        transcriptions?: Transcription.AsObject[];
        time: number;
        final: boolean;
        returnAudio: boolean;
        audio: Uint8Array;
        utteranceStart: boolean;
        audioUuid: string;
        config?: TranscribeRequestConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for TranscribeStreamResponse
     */
    interface AsProtobufJSON {
        transcriptions: Transcription.AsProtobufJSON[] | null;
        time: number;
        final: boolean;
        returnAudio: boolean;
        audio: string;
        utteranceStart: boolean;
        audioUuid: string;
        config: TranscribeRequestConfig.AsProtobufJSON | null;
    }
    enum OneofConfigCase {
        none = 0,
        config = 1
    }
}
/**
 * Message implementation for ondewo.s2t.TranscribeFileRequest
 */
export declare class TranscribeFileRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): TranscribeFileRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: TranscribeFileRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: TranscribeFileRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: TranscribeFileRequest, _writer: BinaryWriter): void;
    private _audioFile;
    private _config?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscribeFileRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<TranscribeFileRequest.AsObject>);
    get audioFile(): Uint8Array;
    set audioFile(value: Uint8Array);
    get config(): TranscribeRequestConfig | undefined;
    set config(value: TranscribeRequestConfig | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): TranscribeFileRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): TranscribeFileRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): TranscribeFileRequest.AsProtobufJSON;
}
export declare namespace TranscribeFileRequest {
    /**
     * Standard JavaScript object representation for TranscribeFileRequest
     */
    interface AsObject {
        audioFile: Uint8Array;
        config?: TranscribeRequestConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for TranscribeFileRequest
     */
    interface AsProtobufJSON {
        audioFile: string;
        config: TranscribeRequestConfig.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.s2t.TranscribeFileResponse
 */
export declare class TranscribeFileResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): TranscribeFileResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: TranscribeFileResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: TranscribeFileResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: TranscribeFileResponse, _writer: BinaryWriter): void;
    private _transcriptions?;
    private _time;
    private _audioUuid;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscribeFileResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<TranscribeFileResponse.AsObject>);
    get transcriptions(): Transcription[] | undefined;
    set transcriptions(value: Transcription[] | undefined);
    get time(): number;
    set time(value: number);
    get audioUuid(): string;
    set audioUuid(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): TranscribeFileResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): TranscribeFileResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): TranscribeFileResponse.AsProtobufJSON;
}
export declare namespace TranscribeFileResponse {
    /**
     * Standard JavaScript object representation for TranscribeFileResponse
     */
    interface AsObject {
        transcriptions?: Transcription.AsObject[];
        time: number;
        audioUuid: string;
    }
    /**
     * Protobuf JSON representation for TranscribeFileResponse
     */
    interface AsProtobufJSON {
        transcriptions: Transcription.AsProtobufJSON[] | null;
        time: number;
        audioUuid: string;
    }
}
/**
 * Message implementation for ondewo.s2t.S2tPipelineId
 */
export declare class S2tPipelineId implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): S2tPipelineId;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: S2tPipelineId): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: S2tPipelineId, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: S2tPipelineId, _writer: BinaryWriter): void;
    private _id;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tPipelineId to deeply clone from
     */
    constructor(_value?: RecursivePartial<S2tPipelineId.AsObject>);
    get id(): string;
    set id(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): S2tPipelineId.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): S2tPipelineId.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): S2tPipelineId.AsProtobufJSON;
}
export declare namespace S2tPipelineId {
    /**
     * Standard JavaScript object representation for S2tPipelineId
     */
    interface AsObject {
        id: string;
    }
    /**
     * Protobuf JSON representation for S2tPipelineId
     */
    interface AsProtobufJSON {
        id: string;
    }
}
/**
 * Message implementation for ondewo.s2t.ListS2tPipelinesRequest
 */
export declare class ListS2tPipelinesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListS2tPipelinesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListS2tPipelinesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListS2tPipelinesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListS2tPipelinesRequest, _writer: BinaryWriter): void;
    private _languages;
    private _pipelineOwners;
    private _domains;
    private _registeredOnly;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tPipelinesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListS2tPipelinesRequest.AsObject>);
    get languages(): string[];
    set languages(value: string[]);
    get pipelineOwners(): string[];
    set pipelineOwners(value: string[]);
    get domains(): string[];
    set domains(value: string[]);
    get registeredOnly(): boolean;
    set registeredOnly(value: boolean);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListS2tPipelinesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListS2tPipelinesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListS2tPipelinesRequest.AsProtobufJSON;
}
export declare namespace ListS2tPipelinesRequest {
    /**
     * Standard JavaScript object representation for ListS2tPipelinesRequest
     */
    interface AsObject {
        languages: string[];
        pipelineOwners: string[];
        domains: string[];
        registeredOnly: boolean;
    }
    /**
     * Protobuf JSON representation for ListS2tPipelinesRequest
     */
    interface AsProtobufJSON {
        languages: string[];
        pipelineOwners: string[];
        domains: string[];
        registeredOnly: boolean;
    }
}
/**
 * Message implementation for ondewo.s2t.ListS2tPipelinesResponse
 */
export declare class ListS2tPipelinesResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListS2tPipelinesResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListS2tPipelinesResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListS2tPipelinesResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListS2tPipelinesResponse, _writer: BinaryWriter): void;
    private _pipelineConfigs?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tPipelinesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListS2tPipelinesResponse.AsObject>);
    get pipelineConfigs(): Speech2TextConfig[] | undefined;
    set pipelineConfigs(value: Speech2TextConfig[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListS2tPipelinesResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListS2tPipelinesResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListS2tPipelinesResponse.AsProtobufJSON;
}
export declare namespace ListS2tPipelinesResponse {
    /**
     * Standard JavaScript object representation for ListS2tPipelinesResponse
     */
    interface AsObject {
        pipelineConfigs?: Speech2TextConfig.AsObject[];
    }
    /**
     * Protobuf JSON representation for ListS2tPipelinesResponse
     */
    interface AsProtobufJSON {
        pipelineConfigs: Speech2TextConfig.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.s2t.ListS2tLanguagesRequest
 */
export declare class ListS2tLanguagesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListS2tLanguagesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListS2tLanguagesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListS2tLanguagesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListS2tLanguagesRequest, _writer: BinaryWriter): void;
    private _domains;
    private _pipelineOwners;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tLanguagesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListS2tLanguagesRequest.AsObject>);
    get domains(): string[];
    set domains(value: string[]);
    get pipelineOwners(): string[];
    set pipelineOwners(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListS2tLanguagesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListS2tLanguagesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListS2tLanguagesRequest.AsProtobufJSON;
}
export declare namespace ListS2tLanguagesRequest {
    /**
     * Standard JavaScript object representation for ListS2tLanguagesRequest
     */
    interface AsObject {
        domains: string[];
        pipelineOwners: string[];
    }
    /**
     * Protobuf JSON representation for ListS2tLanguagesRequest
     */
    interface AsProtobufJSON {
        domains: string[];
        pipelineOwners: string[];
    }
}
/**
 * Message implementation for ondewo.s2t.ListS2tLanguagesResponse
 */
export declare class ListS2tLanguagesResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListS2tLanguagesResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListS2tLanguagesResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListS2tLanguagesResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListS2tLanguagesResponse, _writer: BinaryWriter): void;
    private _languages;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tLanguagesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListS2tLanguagesResponse.AsObject>);
    get languages(): string[];
    set languages(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListS2tLanguagesResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListS2tLanguagesResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListS2tLanguagesResponse.AsProtobufJSON;
}
export declare namespace ListS2tLanguagesResponse {
    /**
     * Standard JavaScript object representation for ListS2tLanguagesResponse
     */
    interface AsObject {
        languages: string[];
    }
    /**
     * Protobuf JSON representation for ListS2tLanguagesResponse
     */
    interface AsProtobufJSON {
        languages: string[];
    }
}
/**
 * Message implementation for ondewo.s2t.ListS2tDomainsRequest
 */
export declare class ListS2tDomainsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListS2tDomainsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListS2tDomainsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListS2tDomainsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListS2tDomainsRequest, _writer: BinaryWriter): void;
    private _languages;
    private _pipelineOwners;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tDomainsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListS2tDomainsRequest.AsObject>);
    get languages(): string[];
    set languages(value: string[]);
    get pipelineOwners(): string[];
    set pipelineOwners(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListS2tDomainsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListS2tDomainsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListS2tDomainsRequest.AsProtobufJSON;
}
export declare namespace ListS2tDomainsRequest {
    /**
     * Standard JavaScript object representation for ListS2tDomainsRequest
     */
    interface AsObject {
        languages: string[];
        pipelineOwners: string[];
    }
    /**
     * Protobuf JSON representation for ListS2tDomainsRequest
     */
    interface AsProtobufJSON {
        languages: string[];
        pipelineOwners: string[];
    }
}
/**
 * Message implementation for ondewo.s2t.ListS2tDomainsResponse
 */
export declare class ListS2tDomainsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListS2tDomainsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListS2tDomainsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListS2tDomainsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListS2tDomainsResponse, _writer: BinaryWriter): void;
    private _domains;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tDomainsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListS2tDomainsResponse.AsObject>);
    get domains(): string[];
    set domains(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListS2tDomainsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListS2tDomainsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListS2tDomainsResponse.AsProtobufJSON;
}
export declare namespace ListS2tDomainsResponse {
    /**
     * Standard JavaScript object representation for ListS2tDomainsResponse
     */
    interface AsObject {
        domains: string[];
    }
    /**
     * Protobuf JSON representation for ListS2tDomainsResponse
     */
    interface AsProtobufJSON {
        domains: string[];
    }
}
/**
 * Message implementation for ondewo.s2t.S2TGetServiceInfoResponse
 */
export declare class S2TGetServiceInfoResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): S2TGetServiceInfoResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: S2TGetServiceInfoResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: S2TGetServiceInfoResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: S2TGetServiceInfoResponse, _writer: BinaryWriter): void;
    private _version;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2TGetServiceInfoResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<S2TGetServiceInfoResponse.AsObject>);
    get version(): string;
    set version(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): S2TGetServiceInfoResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): S2TGetServiceInfoResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): S2TGetServiceInfoResponse.AsProtobufJSON;
}
export declare namespace S2TGetServiceInfoResponse {
    /**
     * Standard JavaScript object representation for S2TGetServiceInfoResponse
     */
    interface AsObject {
        version: string;
    }
    /**
     * Protobuf JSON representation for S2TGetServiceInfoResponse
     */
    interface AsProtobufJSON {
        version: string;
    }
}
/**
 * Message implementation for ondewo.s2t.Speech2TextConfig
 */
export declare class Speech2TextConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Speech2TextConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Speech2TextConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Speech2TextConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Speech2TextConfig, _writer: BinaryWriter): void;
    private _id;
    private _description?;
    private _active;
    private _inference?;
    private _streamingServer?;
    private _voiceActivityDetection?;
    private _postProcessing?;
    private _logging?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Speech2TextConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<Speech2TextConfig.AsObject>);
    get id(): string;
    set id(value: string);
    get description(): S2TDescription | undefined;
    set description(value: S2TDescription | undefined);
    get active(): boolean;
    set active(value: boolean);
    get inference(): S2TInference | undefined;
    set inference(value: S2TInference | undefined);
    get streamingServer(): StreamingServer | undefined;
    set streamingServer(value: StreamingServer | undefined);
    get voiceActivityDetection(): VoiceActivityDetection | undefined;
    set voiceActivityDetection(value: VoiceActivityDetection | undefined);
    get postProcessing(): PostProcessing | undefined;
    set postProcessing(value: PostProcessing | undefined);
    get logging(): Logging | undefined;
    set logging(value: Logging | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Speech2TextConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Speech2TextConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Speech2TextConfig.AsProtobufJSON;
}
export declare namespace Speech2TextConfig {
    /**
     * Standard JavaScript object representation for Speech2TextConfig
     */
    interface AsObject {
        id: string;
        description?: S2TDescription.AsObject;
        active: boolean;
        inference?: S2TInference.AsObject;
        streamingServer?: StreamingServer.AsObject;
        voiceActivityDetection?: VoiceActivityDetection.AsObject;
        postProcessing?: PostProcessing.AsObject;
        logging?: Logging.AsObject;
    }
    /**
     * Protobuf JSON representation for Speech2TextConfig
     */
    interface AsProtobufJSON {
        id: string;
        description: S2TDescription.AsProtobufJSON | null;
        active: boolean;
        inference: S2TInference.AsProtobufJSON | null;
        streamingServer: StreamingServer.AsProtobufJSON | null;
        voiceActivityDetection: VoiceActivityDetection.AsProtobufJSON | null;
        postProcessing: PostProcessing.AsProtobufJSON | null;
        logging: Logging.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.s2t.S2TDescription
 */
export declare class S2TDescription implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): S2TDescription;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: S2TDescription): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: S2TDescription, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: S2TDescription, _writer: BinaryWriter): void;
    private _language;
    private _pipelineOwner;
    private _domain;
    private _comments;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2TDescription to deeply clone from
     */
    constructor(_value?: RecursivePartial<S2TDescription.AsObject>);
    get language(): string;
    set language(value: string);
    get pipelineOwner(): string;
    set pipelineOwner(value: string);
    get domain(): string;
    set domain(value: string);
    get comments(): string;
    set comments(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): S2TDescription.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): S2TDescription.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): S2TDescription.AsProtobufJSON;
}
export declare namespace S2TDescription {
    /**
     * Standard JavaScript object representation for S2TDescription
     */
    interface AsObject {
        language: string;
        pipelineOwner: string;
        domain: string;
        comments: string;
    }
    /**
     * Protobuf JSON representation for S2TDescription
     */
    interface AsProtobufJSON {
        language: string;
        pipelineOwner: string;
        domain: string;
        comments: string;
    }
}
/**
 * Message implementation for ondewo.s2t.S2TInference
 */
export declare class S2TInference implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): S2TInference;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: S2TInference): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: S2TInference, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: S2TInference, _writer: BinaryWriter): void;
    private _acousticModels?;
    private _languageModels?;
    private _inferenceBackend;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2TInference to deeply clone from
     */
    constructor(_value?: RecursivePartial<S2TInference.AsObject>);
    get acousticModels(): AcousticModels | undefined;
    set acousticModels(value: AcousticModels | undefined);
    get languageModels(): LanguageModels | undefined;
    set languageModels(value: LanguageModels | undefined);
    get inferenceBackend(): InferenceBackend;
    set inferenceBackend(value: InferenceBackend);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): S2TInference.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): S2TInference.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): S2TInference.AsProtobufJSON;
}
export declare namespace S2TInference {
    /**
     * Standard JavaScript object representation for S2TInference
     */
    interface AsObject {
        acousticModels?: AcousticModels.AsObject;
        languageModels?: LanguageModels.AsObject;
        inferenceBackend: InferenceBackend;
    }
    /**
     * Protobuf JSON representation for S2TInference
     */
    interface AsProtobufJSON {
        acousticModels: AcousticModels.AsProtobufJSON | null;
        languageModels: LanguageModels.AsProtobufJSON | null;
        inferenceBackend: string;
    }
}
/**
 * Message implementation for ondewo.s2t.AcousticModels
 */
export declare class AcousticModels implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AcousticModels;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AcousticModels): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AcousticModels, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AcousticModels, _writer: BinaryWriter): void;
    private _type;
    private _wav2vec?;
    private _wav2vecTriton?;
    private _whisper?;
    private _whisperTriton?;
    private _s2tCloudServiceAmazon?;
    private _s2tCloudServiceDeepgram?;
    private _s2tCloudServiceGoogle?;
    private _s2tCloudServiceMicrosoft?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AcousticModels to deeply clone from
     */
    constructor(_value?: RecursivePartial<AcousticModels.AsObject>);
    get type(): string;
    set type(value: string);
    get wav2vec(): Wav2Vec | undefined;
    set wav2vec(value: Wav2Vec | undefined);
    get wav2vecTriton(): Wav2VecTriton | undefined;
    set wav2vecTriton(value: Wav2VecTriton | undefined);
    get whisper(): Whisper | undefined;
    set whisper(value: Whisper | undefined);
    get whisperTriton(): WhisperTriton | undefined;
    set whisperTriton(value: WhisperTriton | undefined);
    get s2tCloudServiceAmazon(): S2tCloudServiceAmazon | undefined;
    set s2tCloudServiceAmazon(value: S2tCloudServiceAmazon | undefined);
    get s2tCloudServiceDeepgram(): S2tCloudServiceDeepgram | undefined;
    set s2tCloudServiceDeepgram(value: S2tCloudServiceDeepgram | undefined);
    get s2tCloudServiceGoogle(): S2tCloudServiceGoogle | undefined;
    set s2tCloudServiceGoogle(value: S2tCloudServiceGoogle | undefined);
    get s2tCloudServiceMicrosoft(): S2tCloudServiceMicrosoft | undefined;
    set s2tCloudServiceMicrosoft(value: S2tCloudServiceMicrosoft | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AcousticModels.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AcousticModels.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AcousticModels.AsProtobufJSON;
}
export declare namespace AcousticModels {
    /**
     * Standard JavaScript object representation for AcousticModels
     */
    interface AsObject {
        type: string;
        wav2vec?: Wav2Vec.AsObject;
        wav2vecTriton?: Wav2VecTriton.AsObject;
        whisper?: Whisper.AsObject;
        whisperTriton?: WhisperTriton.AsObject;
        s2tCloudServiceAmazon?: S2tCloudServiceAmazon.AsObject;
        s2tCloudServiceDeepgram?: S2tCloudServiceDeepgram.AsObject;
        s2tCloudServiceGoogle?: S2tCloudServiceGoogle.AsObject;
        s2tCloudServiceMicrosoft?: S2tCloudServiceMicrosoft.AsObject;
    }
    /**
     * Protobuf JSON representation for AcousticModels
     */
    interface AsProtobufJSON {
        type: string;
        wav2vec: Wav2Vec.AsProtobufJSON | null;
        wav2vecTriton: Wav2VecTriton.AsProtobufJSON | null;
        whisper: Whisper.AsProtobufJSON | null;
        whisperTriton: WhisperTriton.AsProtobufJSON | null;
        s2tCloudServiceAmazon: S2tCloudServiceAmazon.AsProtobufJSON | null;
        s2tCloudServiceDeepgram: S2tCloudServiceDeepgram.AsProtobufJSON | null;
        s2tCloudServiceGoogle: S2tCloudServiceGoogle.AsProtobufJSON | null;
        s2tCloudServiceMicrosoft: S2tCloudServiceMicrosoft.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.s2t.S2tCloudServiceAmazon
 */
export declare class S2tCloudServiceAmazon implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): S2tCloudServiceAmazon;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: S2tCloudServiceAmazon): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: S2tCloudServiceAmazon, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: S2tCloudServiceAmazon, _writer: BinaryWriter): void;
    private _language;
    private _streamingAvailable;
    private _enablePartialResultsStabilization;
    private _partialResultsStability;
    private _languageModelName;
    private _vocabularyName;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tCloudServiceAmazon to deeply clone from
     */
    constructor(_value?: RecursivePartial<S2tCloudServiceAmazon.AsObject>);
    get language(): string;
    set language(value: string);
    get streamingAvailable(): boolean;
    set streamingAvailable(value: boolean);
    get enablePartialResultsStabilization(): boolean;
    set enablePartialResultsStabilization(value: boolean);
    get partialResultsStability(): string;
    set partialResultsStability(value: string);
    get languageModelName(): string;
    set languageModelName(value: string);
    get vocabularyName(): string;
    set vocabularyName(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): S2tCloudServiceAmazon.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): S2tCloudServiceAmazon.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): S2tCloudServiceAmazon.AsProtobufJSON;
}
export declare namespace S2tCloudServiceAmazon {
    /**
     * Standard JavaScript object representation for S2tCloudServiceAmazon
     */
    interface AsObject {
        language: string;
        streamingAvailable: boolean;
        enablePartialResultsStabilization: boolean;
        partialResultsStability: string;
        languageModelName: string;
        vocabularyName: string;
    }
    /**
     * Protobuf JSON representation for S2tCloudServiceAmazon
     */
    interface AsProtobufJSON {
        language: string;
        streamingAvailable: boolean;
        enablePartialResultsStabilization: boolean;
        partialResultsStability: string;
        languageModelName: string;
        vocabularyName: string;
    }
}
/**
 * Message implementation for ondewo.s2t.S2tCloudServiceDeepgram
 */
export declare class S2tCloudServiceDeepgram implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): S2tCloudServiceDeepgram;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: S2tCloudServiceDeepgram): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: S2tCloudServiceDeepgram, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: S2tCloudServiceDeepgram, _writer: BinaryWriter): void;
    private _modelName;
    private _language;
    private _punctuate;
    private _smartFormat;
    private _numerals;
    private _measurements;
    private _dictation;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tCloudServiceDeepgram to deeply clone from
     */
    constructor(_value?: RecursivePartial<S2tCloudServiceDeepgram.AsObject>);
    get modelName(): string;
    set modelName(value: string);
    get language(): string;
    set language(value: string);
    get punctuate(): boolean;
    set punctuate(value: boolean);
    get smartFormat(): boolean;
    set smartFormat(value: boolean);
    get numerals(): boolean;
    set numerals(value: boolean);
    get measurements(): boolean;
    set measurements(value: boolean);
    get dictation(): boolean;
    set dictation(value: boolean);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): S2tCloudServiceDeepgram.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): S2tCloudServiceDeepgram.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): S2tCloudServiceDeepgram.AsProtobufJSON;
}
export declare namespace S2tCloudServiceDeepgram {
    /**
     * Standard JavaScript object representation for S2tCloudServiceDeepgram
     */
    interface AsObject {
        modelName: string;
        language: string;
        punctuate: boolean;
        smartFormat: boolean;
        numerals: boolean;
        measurements: boolean;
        dictation: boolean;
    }
    /**
     * Protobuf JSON representation for S2tCloudServiceDeepgram
     */
    interface AsProtobufJSON {
        modelName: string;
        language: string;
        punctuate: boolean;
        smartFormat: boolean;
        numerals: boolean;
        measurements: boolean;
        dictation: boolean;
    }
}
/**
 * Message implementation for ondewo.s2t.S2tCloudServiceGoogle
 */
export declare class S2tCloudServiceGoogle implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): S2tCloudServiceGoogle;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: S2tCloudServiceGoogle): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: S2tCloudServiceGoogle, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: S2tCloudServiceGoogle, _writer: BinaryWriter): void;
    private _modelName;
    private _language;
    private _enableAutomaticPunctuation;
    private _enableWordTimeOffsets;
    private _enableWordConfidence;
    private _transcriptNormalization;
    private _maxAlternatives;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tCloudServiceGoogle to deeply clone from
     */
    constructor(_value?: RecursivePartial<S2tCloudServiceGoogle.AsObject>);
    get modelName(): string;
    set modelName(value: string);
    get language(): string;
    set language(value: string);
    get enableAutomaticPunctuation(): boolean;
    set enableAutomaticPunctuation(value: boolean);
    get enableWordTimeOffsets(): boolean;
    set enableWordTimeOffsets(value: boolean);
    get enableWordConfidence(): boolean;
    set enableWordConfidence(value: boolean);
    get transcriptNormalization(): boolean;
    set transcriptNormalization(value: boolean);
    get maxAlternatives(): number;
    set maxAlternatives(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): S2tCloudServiceGoogle.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): S2tCloudServiceGoogle.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): S2tCloudServiceGoogle.AsProtobufJSON;
}
export declare namespace S2tCloudServiceGoogle {
    /**
     * Standard JavaScript object representation for S2tCloudServiceGoogle
     */
    interface AsObject {
        modelName: string;
        language: string;
        enableAutomaticPunctuation: boolean;
        enableWordTimeOffsets: boolean;
        enableWordConfidence: boolean;
        transcriptNormalization: boolean;
        maxAlternatives: number;
    }
    /**
     * Protobuf JSON representation for S2tCloudServiceGoogle
     */
    interface AsProtobufJSON {
        modelName: string;
        language: string;
        enableAutomaticPunctuation: boolean;
        enableWordTimeOffsets: boolean;
        enableWordConfidence: boolean;
        transcriptNormalization: boolean;
        maxAlternatives: number;
    }
}
/**
 * Message implementation for ondewo.s2t.S2tCloudServiceMicrosoft
 */
export declare class S2tCloudServiceMicrosoft implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): S2tCloudServiceMicrosoft;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: S2tCloudServiceMicrosoft): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: S2tCloudServiceMicrosoft, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: S2tCloudServiceMicrosoft, _writer: BinaryWriter): void;
    private _language;
    private _useFastTranscriptionApi;
    private _useDetailedOutputFormat;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tCloudServiceMicrosoft to deeply clone from
     */
    constructor(_value?: RecursivePartial<S2tCloudServiceMicrosoft.AsObject>);
    get language(): string;
    set language(value: string);
    get useFastTranscriptionApi(): boolean;
    set useFastTranscriptionApi(value: boolean);
    get useDetailedOutputFormat(): boolean;
    set useDetailedOutputFormat(value: boolean);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): S2tCloudServiceMicrosoft.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): S2tCloudServiceMicrosoft.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): S2tCloudServiceMicrosoft.AsProtobufJSON;
}
export declare namespace S2tCloudServiceMicrosoft {
    /**
     * Standard JavaScript object representation for S2tCloudServiceMicrosoft
     */
    interface AsObject {
        language: string;
        useFastTranscriptionApi: boolean;
        useDetailedOutputFormat: boolean;
    }
    /**
     * Protobuf JSON representation for S2tCloudServiceMicrosoft
     */
    interface AsProtobufJSON {
        language: string;
        useFastTranscriptionApi: boolean;
        useDetailedOutputFormat: boolean;
    }
}
/**
 * Message implementation for ondewo.s2t.Whisper
 */
export declare class Whisper implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Whisper;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Whisper): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Whisper, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Whisper, _writer: BinaryWriter): void;
    private _modelPath;
    private _useGpu;
    private _language;
    private _task;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Whisper to deeply clone from
     */
    constructor(_value?: RecursivePartial<Whisper.AsObject>);
    get modelPath(): string;
    set modelPath(value: string);
    get useGpu(): boolean;
    set useGpu(value: boolean);
    get language(): string;
    set language(value: string);
    get task(): string;
    set task(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Whisper.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Whisper.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Whisper.AsProtobufJSON;
}
export declare namespace Whisper {
    /**
     * Standard JavaScript object representation for Whisper
     */
    interface AsObject {
        modelPath: string;
        useGpu: boolean;
        language: string;
        task: string;
    }
    /**
     * Protobuf JSON representation for Whisper
     */
    interface AsProtobufJSON {
        modelPath: string;
        useGpu: boolean;
        language: string;
        task: string;
    }
}
/**
 * Message implementation for ondewo.s2t.WhisperTriton
 */
export declare class WhisperTriton implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): WhisperTriton;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: WhisperTriton): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: WhisperTriton, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: WhisperTriton, _writer: BinaryWriter): void;
    private _processorPath;
    private _tritonModelName;
    private _tritonModelVersion;
    private _checkStatusTimeout;
    private _language;
    private _task;
    private _tritonServerHost;
    private _tritonServerPort;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of WhisperTriton to deeply clone from
     */
    constructor(_value?: RecursivePartial<WhisperTriton.AsObject>);
    get processorPath(): string;
    set processorPath(value: string);
    get tritonModelName(): string;
    set tritonModelName(value: string);
    get tritonModelVersion(): string;
    set tritonModelVersion(value: string);
    get checkStatusTimeout(): string;
    set checkStatusTimeout(value: string);
    get language(): string;
    set language(value: string);
    get task(): string;
    set task(value: string);
    get tritonServerHost(): string;
    set tritonServerHost(value: string);
    get tritonServerPort(): string;
    set tritonServerPort(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): WhisperTriton.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): WhisperTriton.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): WhisperTriton.AsProtobufJSON;
}
export declare namespace WhisperTriton {
    /**
     * Standard JavaScript object representation for WhisperTriton
     */
    interface AsObject {
        processorPath: string;
        tritonModelName: string;
        tritonModelVersion: string;
        checkStatusTimeout: string;
        language: string;
        task: string;
        tritonServerHost: string;
        tritonServerPort: string;
    }
    /**
     * Protobuf JSON representation for WhisperTriton
     */
    interface AsProtobufJSON {
        processorPath: string;
        tritonModelName: string;
        tritonModelVersion: string;
        checkStatusTimeout: string;
        language: string;
        task: string;
        tritonServerHost: string;
        tritonServerPort: string;
    }
}
/**
 * Message implementation for ondewo.s2t.Wav2Vec
 */
export declare class Wav2Vec implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Wav2Vec;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Wav2Vec): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Wav2Vec, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Wav2Vec, _writer: BinaryWriter): void;
    private _modelPath;
    private _useGpu;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Wav2Vec to deeply clone from
     */
    constructor(_value?: RecursivePartial<Wav2Vec.AsObject>);
    get modelPath(): string;
    set modelPath(value: string);
    get useGpu(): boolean;
    set useGpu(value: boolean);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Wav2Vec.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Wav2Vec.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Wav2Vec.AsProtobufJSON;
}
export declare namespace Wav2Vec {
    /**
     * Standard JavaScript object representation for Wav2Vec
     */
    interface AsObject {
        modelPath: string;
        useGpu: boolean;
    }
    /**
     * Protobuf JSON representation for Wav2Vec
     */
    interface AsProtobufJSON {
        modelPath: string;
        useGpu: boolean;
    }
}
/**
 * Message implementation for ondewo.s2t.Wav2VecTriton
 */
export declare class Wav2VecTriton implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Wav2VecTriton;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Wav2VecTriton): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Wav2VecTriton, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Wav2VecTriton, _writer: BinaryWriter): void;
    private _processorPath;
    private _tritonModelName;
    private _tritonModelVersion;
    private _checkStatusTimeout;
    private _tritonServerHost;
    private _tritonServerPort;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Wav2VecTriton to deeply clone from
     */
    constructor(_value?: RecursivePartial<Wav2VecTriton.AsObject>);
    get processorPath(): string;
    set processorPath(value: string);
    get tritonModelName(): string;
    set tritonModelName(value: string);
    get tritonModelVersion(): string;
    set tritonModelVersion(value: string);
    get checkStatusTimeout(): string;
    set checkStatusTimeout(value: string);
    get tritonServerHost(): string;
    set tritonServerHost(value: string);
    get tritonServerPort(): string;
    set tritonServerPort(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Wav2VecTriton.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Wav2VecTriton.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Wav2VecTriton.AsProtobufJSON;
}
export declare namespace Wav2VecTriton {
    /**
     * Standard JavaScript object representation for Wav2VecTriton
     */
    interface AsObject {
        processorPath: string;
        tritonModelName: string;
        tritonModelVersion: string;
        checkStatusTimeout: string;
        tritonServerHost: string;
        tritonServerPort: string;
    }
    /**
     * Protobuf JSON representation for Wav2VecTriton
     */
    interface AsProtobufJSON {
        processorPath: string;
        tritonModelName: string;
        tritonModelVersion: string;
        checkStatusTimeout: string;
        tritonServerHost: string;
        tritonServerPort: string;
    }
}
/**
 * Message implementation for ondewo.s2t.PtFiles
 */
export declare class PtFiles implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): PtFiles;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: PtFiles): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: PtFiles, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: PtFiles, _writer: BinaryWriter): void;
    private _path;
    private _step;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PtFiles to deeply clone from
     */
    constructor(_value?: RecursivePartial<PtFiles.AsObject>);
    get path(): string;
    set path(value: string);
    get step(): string;
    set step(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): PtFiles.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): PtFiles.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): PtFiles.AsProtobufJSON;
}
export declare namespace PtFiles {
    /**
     * Standard JavaScript object representation for PtFiles
     */
    interface AsObject {
        path: string;
        step: string;
    }
    /**
     * Protobuf JSON representation for PtFiles
     */
    interface AsProtobufJSON {
        path: string;
        step: string;
    }
}
/**
 * Message implementation for ondewo.s2t.CkptFile
 */
export declare class CkptFile implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CkptFile;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CkptFile): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CkptFile, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CkptFile, _writer: BinaryWriter): void;
    private _path;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CkptFile to deeply clone from
     */
    constructor(_value?: RecursivePartial<CkptFile.AsObject>);
    get path(): string;
    set path(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CkptFile.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CkptFile.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CkptFile.AsProtobufJSON;
}
export declare namespace CkptFile {
    /**
     * Standard JavaScript object representation for CkptFile
     */
    interface AsObject {
        path: string;
    }
    /**
     * Protobuf JSON representation for CkptFile
     */
    interface AsProtobufJSON {
        path: string;
    }
}
/**
 * Message implementation for ondewo.s2t.LanguageModels
 */
export declare class LanguageModels implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): LanguageModels;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LanguageModels): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: LanguageModels, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: LanguageModels, _writer: BinaryWriter): void;
    private _path;
    private _beamSize;
    private _defaultLm;
    private _beamSearchScorerAlpha;
    private _beamSearchScorerBeta;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LanguageModels to deeply clone from
     */
    constructor(_value?: RecursivePartial<LanguageModels.AsObject>);
    get path(): string;
    set path(value: string);
    get beamSize(): string;
    set beamSize(value: string);
    get defaultLm(): string;
    set defaultLm(value: string);
    get beamSearchScorerAlpha(): number;
    set beamSearchScorerAlpha(value: number);
    get beamSearchScorerBeta(): number;
    set beamSearchScorerBeta(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): LanguageModels.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): LanguageModels.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): LanguageModels.AsProtobufJSON;
}
export declare namespace LanguageModels {
    /**
     * Standard JavaScript object representation for LanguageModels
     */
    interface AsObject {
        path: string;
        beamSize: string;
        defaultLm: string;
        beamSearchScorerAlpha: number;
        beamSearchScorerBeta: number;
    }
    /**
     * Protobuf JSON representation for LanguageModels
     */
    interface AsProtobufJSON {
        path: string;
        beamSize: string;
        defaultLm: string;
        beamSearchScorerAlpha: number;
        beamSearchScorerBeta: number;
    }
}
/**
 * Message implementation for ondewo.s2t.StreamingServer
 */
export declare class StreamingServer implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StreamingServer;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StreamingServer): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StreamingServer, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StreamingServer, _writer: BinaryWriter): void;
    private _host;
    private _port;
    private _outputStyle;
    private _streamingSpeechRecognition?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StreamingServer to deeply clone from
     */
    constructor(_value?: RecursivePartial<StreamingServer.AsObject>);
    get host(): string;
    set host(value: string);
    get port(): string;
    set port(value: string);
    get outputStyle(): string;
    set outputStyle(value: string);
    get streamingSpeechRecognition(): StreamingSpeechRecognition | undefined;
    set streamingSpeechRecognition(value: StreamingSpeechRecognition | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StreamingServer.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StreamingServer.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StreamingServer.AsProtobufJSON;
}
export declare namespace StreamingServer {
    /**
     * Standard JavaScript object representation for StreamingServer
     */
    interface AsObject {
        host: string;
        port: string;
        outputStyle: string;
        streamingSpeechRecognition?: StreamingSpeechRecognition.AsObject;
    }
    /**
     * Protobuf JSON representation for StreamingServer
     */
    interface AsProtobufJSON {
        host: string;
        port: string;
        outputStyle: string;
        streamingSpeechRecognition: StreamingSpeechRecognition.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.s2t.StreamingSpeechRecognition
 */
export declare class StreamingSpeechRecognition implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StreamingSpeechRecognition;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StreamingSpeechRecognition): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StreamingSpeechRecognition, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StreamingSpeechRecognition, _writer: BinaryWriter): void;
    private _transcribeNotFinal;
    private _decodingMethod;
    private _samplingRate;
    private _minAudioChunkSize;
    private _nextChunkTimeout;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StreamingSpeechRecognition to deeply clone from
     */
    constructor(_value?: RecursivePartial<StreamingSpeechRecognition.AsObject>);
    get transcribeNotFinal(): boolean;
    set transcribeNotFinal(value: boolean);
    get decodingMethod(): string;
    set decodingMethod(value: string);
    get samplingRate(): string;
    set samplingRate(value: string);
    get minAudioChunkSize(): string;
    set minAudioChunkSize(value: string);
    get nextChunkTimeout(): number;
    set nextChunkTimeout(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StreamingSpeechRecognition.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StreamingSpeechRecognition.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StreamingSpeechRecognition.AsProtobufJSON;
}
export declare namespace StreamingSpeechRecognition {
    /**
     * Standard JavaScript object representation for StreamingSpeechRecognition
     */
    interface AsObject {
        transcribeNotFinal: boolean;
        decodingMethod: string;
        samplingRate: string;
        minAudioChunkSize: string;
        nextChunkTimeout: number;
    }
    /**
     * Protobuf JSON representation for StreamingSpeechRecognition
     */
    interface AsProtobufJSON {
        transcribeNotFinal: boolean;
        decodingMethod: string;
        samplingRate: string;
        minAudioChunkSize: string;
        nextChunkTimeout: number;
    }
}
/**
 * Message implementation for ondewo.s2t.VoiceActivityDetection
 */
export declare class VoiceActivityDetection implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): VoiceActivityDetection;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: VoiceActivityDetection): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: VoiceActivityDetection, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: VoiceActivityDetection, _writer: BinaryWriter): void;
    private _active;
    private _samplingRate;
    private _pyannote?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VoiceActivityDetection to deeply clone from
     */
    constructor(_value?: RecursivePartial<VoiceActivityDetection.AsObject>);
    get active(): string;
    set active(value: string);
    get samplingRate(): string;
    set samplingRate(value: string);
    get pyannote(): Pyannote | undefined;
    set pyannote(value: Pyannote | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): VoiceActivityDetection.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): VoiceActivityDetection.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): VoiceActivityDetection.AsProtobufJSON;
}
export declare namespace VoiceActivityDetection {
    /**
     * Standard JavaScript object representation for VoiceActivityDetection
     */
    interface AsObject {
        active: string;
        samplingRate: string;
        pyannote?: Pyannote.AsObject;
    }
    /**
     * Protobuf JSON representation for VoiceActivityDetection
     */
    interface AsProtobufJSON {
        active: string;
        samplingRate: string;
        pyannote: Pyannote.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.s2t.Pyannote
 */
export declare class Pyannote implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Pyannote;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Pyannote): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Pyannote, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Pyannote, _writer: BinaryWriter): void;
    private _modelName;
    private _minAudioSize;
    private _minDurationOff;
    private _minDurationOn;
    private _tritonServerHost;
    private _tritonServerPort;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Pyannote to deeply clone from
     */
    constructor(_value?: RecursivePartial<Pyannote.AsObject>);
    get modelName(): string;
    set modelName(value: string);
    get minAudioSize(): string;
    set minAudioSize(value: string);
    get minDurationOff(): number;
    set minDurationOff(value: number);
    get minDurationOn(): number;
    set minDurationOn(value: number);
    get tritonServerHost(): string;
    set tritonServerHost(value: string);
    get tritonServerPort(): string;
    set tritonServerPort(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Pyannote.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Pyannote.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Pyannote.AsProtobufJSON;
}
export declare namespace Pyannote {
    /**
     * Standard JavaScript object representation for Pyannote
     */
    interface AsObject {
        modelName: string;
        minAudioSize: string;
        minDurationOff: number;
        minDurationOn: number;
        tritonServerHost: string;
        tritonServerPort: string;
    }
    /**
     * Protobuf JSON representation for Pyannote
     */
    interface AsProtobufJSON {
        modelName: string;
        minAudioSize: string;
        minDurationOff: number;
        minDurationOn: number;
        tritonServerHost: string;
        tritonServerPort: string;
    }
}
/**
 * Message implementation for ondewo.s2t.PostProcessing
 */
export declare class PostProcessing implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): PostProcessing;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: PostProcessing): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: PostProcessing, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: PostProcessing, _writer: BinaryWriter): void;
    private _pipeline;
    private _postProcessors?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PostProcessing to deeply clone from
     */
    constructor(_value?: RecursivePartial<PostProcessing.AsObject>);
    get pipeline(): string[];
    set pipeline(value: string[]);
    get postProcessors(): PostProcessors | undefined;
    set postProcessors(value: PostProcessors | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): PostProcessing.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): PostProcessing.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): PostProcessing.AsProtobufJSON;
}
export declare namespace PostProcessing {
    /**
     * Standard JavaScript object representation for PostProcessing
     */
    interface AsObject {
        pipeline: string[];
        postProcessors?: PostProcessors.AsObject;
    }
    /**
     * Protobuf JSON representation for PostProcessing
     */
    interface AsProtobufJSON {
        pipeline: string[];
        postProcessors: PostProcessors.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.s2t.PostProcessors
 */
export declare class PostProcessors implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): PostProcessors;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: PostProcessors): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: PostProcessors, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: PostProcessors, _writer: BinaryWriter): void;
    private _symSpell?;
    private _normalization?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PostProcessors to deeply clone from
     */
    constructor(_value?: RecursivePartial<PostProcessors.AsObject>);
    get symSpell(): SymSpell | undefined;
    set symSpell(value: SymSpell | undefined);
    get normalization(): S2TNormalization | undefined;
    set normalization(value: S2TNormalization | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): PostProcessors.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): PostProcessors.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): PostProcessors.AsProtobufJSON;
}
export declare namespace PostProcessors {
    /**
     * Standard JavaScript object representation for PostProcessors
     */
    interface AsObject {
        symSpell?: SymSpell.AsObject;
        normalization?: S2TNormalization.AsObject;
    }
    /**
     * Protobuf JSON representation for PostProcessors
     */
    interface AsProtobufJSON {
        symSpell: SymSpell.AsProtobufJSON | null;
        normalization: S2TNormalization.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.s2t.SymSpell
 */
export declare class SymSpell implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SymSpell;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SymSpell): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SymSpell, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SymSpell, _writer: BinaryWriter): void;
    private _dictPath;
    private _maxDictionaryEditDistance;
    private _prefixLength;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SymSpell to deeply clone from
     */
    constructor(_value?: RecursivePartial<SymSpell.AsObject>);
    get dictPath(): string;
    set dictPath(value: string);
    get maxDictionaryEditDistance(): string;
    set maxDictionaryEditDistance(value: string);
    get prefixLength(): string;
    set prefixLength(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SymSpell.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SymSpell.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SymSpell.AsProtobufJSON;
}
export declare namespace SymSpell {
    /**
     * Standard JavaScript object representation for SymSpell
     */
    interface AsObject {
        dictPath: string;
        maxDictionaryEditDistance: string;
        prefixLength: string;
    }
    /**
     * Protobuf JSON representation for SymSpell
     */
    interface AsProtobufJSON {
        dictPath: string;
        maxDictionaryEditDistance: string;
        prefixLength: string;
    }
}
/**
 * Message implementation for ondewo.s2t.S2TNormalization
 */
export declare class S2TNormalization implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): S2TNormalization;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: S2TNormalization): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: S2TNormalization, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: S2TNormalization, _writer: BinaryWriter): void;
    private _language;
    private _pipeline;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2TNormalization to deeply clone from
     */
    constructor(_value?: RecursivePartial<S2TNormalization.AsObject>);
    get language(): string;
    set language(value: string);
    get pipeline(): string[];
    set pipeline(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): S2TNormalization.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): S2TNormalization.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): S2TNormalization.AsProtobufJSON;
}
export declare namespace S2TNormalization {
    /**
     * Standard JavaScript object representation for S2TNormalization
     */
    interface AsObject {
        language: string;
        pipeline: string[];
    }
    /**
     * Protobuf JSON representation for S2TNormalization
     */
    interface AsProtobufJSON {
        language: string;
        pipeline: string[];
    }
}
/**
 * Message implementation for ondewo.s2t.Logging
 */
export declare class Logging implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Logging;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Logging): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Logging, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Logging, _writer: BinaryWriter): void;
    private _type;
    private _path;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Logging to deeply clone from
     */
    constructor(_value?: RecursivePartial<Logging.AsObject>);
    get type(): string;
    set type(value: string);
    get path(): string;
    set path(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Logging.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Logging.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Logging.AsProtobufJSON;
}
export declare namespace Logging {
    /**
     * Standard JavaScript object representation for Logging
     */
    interface AsObject {
        type: string;
        path: string;
    }
    /**
     * Protobuf JSON representation for Logging
     */
    interface AsProtobufJSON {
        type: string;
        path: string;
    }
}
/**
 * Message implementation for ondewo.s2t.ListS2tLanguageModelsRequest
 */
export declare class ListS2tLanguageModelsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListS2tLanguageModelsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListS2tLanguageModelsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListS2tLanguageModelsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListS2tLanguageModelsRequest, _writer: BinaryWriter): void;
    private _ids;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tLanguageModelsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListS2tLanguageModelsRequest.AsObject>);
    get ids(): string[];
    set ids(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListS2tLanguageModelsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListS2tLanguageModelsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListS2tLanguageModelsRequest.AsProtobufJSON;
}
export declare namespace ListS2tLanguageModelsRequest {
    /**
     * Standard JavaScript object representation for ListS2tLanguageModelsRequest
     */
    interface AsObject {
        ids: string[];
    }
    /**
     * Protobuf JSON representation for ListS2tLanguageModelsRequest
     */
    interface AsProtobufJSON {
        ids: string[];
    }
}
/**
 * Message implementation for ondewo.s2t.LanguageModelPipelineId
 */
export declare class LanguageModelPipelineId implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): LanguageModelPipelineId;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LanguageModelPipelineId): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: LanguageModelPipelineId, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: LanguageModelPipelineId, _writer: BinaryWriter): void;
    private _pipelineId;
    private _modelNames;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LanguageModelPipelineId to deeply clone from
     */
    constructor(_value?: RecursivePartial<LanguageModelPipelineId.AsObject>);
    get pipelineId(): string;
    set pipelineId(value: string);
    get modelNames(): string[];
    set modelNames(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): LanguageModelPipelineId.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): LanguageModelPipelineId.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): LanguageModelPipelineId.AsProtobufJSON;
}
export declare namespace LanguageModelPipelineId {
    /**
     * Standard JavaScript object representation for LanguageModelPipelineId
     */
    interface AsObject {
        pipelineId: string;
        modelNames: string[];
    }
    /**
     * Protobuf JSON representation for LanguageModelPipelineId
     */
    interface AsProtobufJSON {
        pipelineId: string;
        modelNames: string[];
    }
}
/**
 * Message implementation for ondewo.s2t.ListS2tLanguageModelsResponse
 */
export declare class ListS2tLanguageModelsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListS2tLanguageModelsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListS2tLanguageModelsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListS2tLanguageModelsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListS2tLanguageModelsResponse, _writer: BinaryWriter): void;
    private _lmPipelineIds?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tLanguageModelsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListS2tLanguageModelsResponse.AsObject>);
    get lmPipelineIds(): LanguageModelPipelineId[] | undefined;
    set lmPipelineIds(value: LanguageModelPipelineId[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListS2tLanguageModelsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListS2tLanguageModelsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListS2tLanguageModelsResponse.AsProtobufJSON;
}
export declare namespace ListS2tLanguageModelsResponse {
    /**
     * Standard JavaScript object representation for ListS2tLanguageModelsResponse
     */
    interface AsObject {
        lmPipelineIds?: LanguageModelPipelineId.AsObject[];
    }
    /**
     * Protobuf JSON representation for ListS2tLanguageModelsResponse
     */
    interface AsProtobufJSON {
        lmPipelineIds: LanguageModelPipelineId.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.s2t.CreateUserLanguageModelRequest
 */
export declare class CreateUserLanguageModelRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateUserLanguageModelRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateUserLanguageModelRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateUserLanguageModelRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateUserLanguageModelRequest, _writer: BinaryWriter): void;
    private _languageModelName;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateUserLanguageModelRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateUserLanguageModelRequest.AsObject>);
    get languageModelName(): string;
    set languageModelName(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateUserLanguageModelRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateUserLanguageModelRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateUserLanguageModelRequest.AsProtobufJSON;
}
export declare namespace CreateUserLanguageModelRequest {
    /**
     * Standard JavaScript object representation for CreateUserLanguageModelRequest
     */
    interface AsObject {
        languageModelName: string;
    }
    /**
     * Protobuf JSON representation for CreateUserLanguageModelRequest
     */
    interface AsProtobufJSON {
        languageModelName: string;
    }
}
/**
 * Message implementation for ondewo.s2t.DeleteUserLanguageModelRequest
 */
export declare class DeleteUserLanguageModelRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteUserLanguageModelRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteUserLanguageModelRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteUserLanguageModelRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteUserLanguageModelRequest, _writer: BinaryWriter): void;
    private _languageModelName;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteUserLanguageModelRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteUserLanguageModelRequest.AsObject>);
    get languageModelName(): string;
    set languageModelName(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeleteUserLanguageModelRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteUserLanguageModelRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteUserLanguageModelRequest.AsProtobufJSON;
}
export declare namespace DeleteUserLanguageModelRequest {
    /**
     * Standard JavaScript object representation for DeleteUserLanguageModelRequest
     */
    interface AsObject {
        languageModelName: string;
    }
    /**
     * Protobuf JSON representation for DeleteUserLanguageModelRequest
     */
    interface AsProtobufJSON {
        languageModelName: string;
    }
}
/**
 * Message implementation for ondewo.s2t.AddDataToUserLanguageModelRequest
 */
export declare class AddDataToUserLanguageModelRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AddDataToUserLanguageModelRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AddDataToUserLanguageModelRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AddDataToUserLanguageModelRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AddDataToUserLanguageModelRequest, _writer: BinaryWriter): void;
    private _languageModelName;
    private _zippedData;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddDataToUserLanguageModelRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<AddDataToUserLanguageModelRequest.AsObject>);
    get languageModelName(): string;
    set languageModelName(value: string);
    get zippedData(): Uint8Array;
    set zippedData(value: Uint8Array);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AddDataToUserLanguageModelRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AddDataToUserLanguageModelRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AddDataToUserLanguageModelRequest.AsProtobufJSON;
}
export declare namespace AddDataToUserLanguageModelRequest {
    /**
     * Standard JavaScript object representation for AddDataToUserLanguageModelRequest
     */
    interface AsObject {
        languageModelName: string;
        zippedData: Uint8Array;
    }
    /**
     * Protobuf JSON representation for AddDataToUserLanguageModelRequest
     */
    interface AsProtobufJSON {
        languageModelName: string;
        zippedData: string;
    }
}
/**
 * Message implementation for ondewo.s2t.TrainUserLanguageModelRequest
 */
export declare class TrainUserLanguageModelRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): TrainUserLanguageModelRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: TrainUserLanguageModelRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: TrainUserLanguageModelRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: TrainUserLanguageModelRequest, _writer: BinaryWriter): void;
    private _languageModelName;
    private _order;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TrainUserLanguageModelRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<TrainUserLanguageModelRequest.AsObject>);
    get languageModelName(): string;
    set languageModelName(value: string);
    get order(): string;
    set order(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): TrainUserLanguageModelRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): TrainUserLanguageModelRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): TrainUserLanguageModelRequest.AsProtobufJSON;
}
export declare namespace TrainUserLanguageModelRequest {
    /**
     * Standard JavaScript object representation for TrainUserLanguageModelRequest
     */
    interface AsObject {
        languageModelName: string;
        order: string;
    }
    /**
     * Protobuf JSON representation for TrainUserLanguageModelRequest
     */
    interface AsProtobufJSON {
        languageModelName: string;
        order: string;
    }
}
