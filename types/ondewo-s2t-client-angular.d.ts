/**
 * Generated bundle index. Do not edit.
 */
import { GrpcClientFactory, GrpcEvent, GrpcMessage, GrpcMetadata, GrpcRequest, RecursivePartial, ToProtobufJSONOptions } from "@ngx-grpc/common";
import { BinaryReader, BinaryWriter, ByteSource } from "google-protobuf";
import * as googleProtobuf001 from "@ngx-grpc/well-known-types";
import * as i0 from "@angular/core";
import { EnvironmentProviders, InjectionToken, OnDestroy, Type } from "@angular/core";
import { GrpcHandler, GrpcInterceptor } from "@ngx-grpc/core";
import { Observable } from "rxjs";
import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
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
export declare enum ServiceTier {
  SERVICE_TIER_UNSPECIFIED = 0,
  SERVICE_TIER_AUTO = 1,
  SERVICE_TIER_DEFAULT = 2,
  SERVICE_TIER_FLEX = 3,
  SERVICE_TIER_SCALE = 4,
  SERVICE_TIER_PRIORITY = 5
}
export declare enum Verbosity {
  VERBOSITY_UNSPECIFIED = 0,
  VERBOSITY_LOW = 1,
  VERBOSITY_MEDIUM = 2,
  VERBOSITY_HIGH = 3
}
export declare enum ReasoningEffort {
  REASONING_EFFORT_UNSPECIFIED = 0,
  REASONING_EFFORT_MINIMAL = 1,
  REASONING_EFFORT_LOW = 2,
  REASONING_EFFORT_MEDIUM = 3,
  REASONING_EFFORT_HIGH = 4
}
export declare enum VadMethod {
  VAD_METHOD_UNSPECIFIED = 0,
  VAD_METHOD_PYANNOTE = 1,
  VAD_METHOD_SILERO = 2
}
export declare enum TsdMethod {
  TSD_METHOD_UNSPECIFIED = 0,
  TSD_METHOD_NONE = 1,
  TSD_METHOD_PYANNOTE = 2,
  TSD_METHOD_WESPEAKER = 3
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
  private _returnEndOfSpeechCandidate;
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
  get returnEndOfSpeechCandidate(): boolean;
  set returnEndOfSpeechCandidate(value: boolean);
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
    returnEndOfSpeechCandidate: boolean;
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
    returnEndOfSpeechCandidate: boolean;
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
  private _turnDetection?;
  private _minAudioChunkSize;
  private _transcribeNotFinalPeriodSeconds;
  private _oneofTranscribeNotFinal;
  private _oneofTurnDetection;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UtteranceDetectionOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<UtteranceDetectionOptions.AsObject>);
  get transcribeNotFinal(): boolean;
  set transcribeNotFinal(value: boolean);
  get nextChunkTimeout(): number;
  set nextChunkTimeout(value: number);
  get turnDetection(): TurnDetectionOptions | undefined;
  set turnDetection(value: TurnDetectionOptions | undefined);
  get minAudioChunkSize(): string;
  set minAudioChunkSize(value: string);
  get transcribeNotFinalPeriodSeconds(): number;
  set transcribeNotFinalPeriodSeconds(value: number);
  get oneofTranscribeNotFinal(): UtteranceDetectionOptions.OneofTranscribeNotFinalCase;
  get oneofTurnDetection(): UtteranceDetectionOptions.OneofTurnDetectionCase;
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
    turnDetection?: TurnDetectionOptions.AsObject;
    minAudioChunkSize: string;
    transcribeNotFinalPeriodSeconds: number;
  }
  /**
   * Protobuf JSON representation for UtteranceDetectionOptions
   */
  interface AsProtobufJSON {
    transcribeNotFinal: boolean;
    nextChunkTimeout: number;
    turnDetection: TurnDetectionOptions.AsProtobufJSON | null;
    minAudioChunkSize: string;
    transcribeNotFinalPeriodSeconds: number;
  }
  enum OneofTranscribeNotFinalCase {
    none = 0,
    transcribeNotFinal = 1
  }
  enum OneofTurnDetectionCase {
    none = 0,
    turnDetection = 1
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
  private _llmPostProcessing;
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
  get llmPostProcessing(): boolean;
  set llmPostProcessing(value: boolean);
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
    llmPostProcessing: boolean;
  }
  /**
   * Protobuf JSON representation for PostProcessingOptions
   */
  interface AsProtobufJSON {
    spellingCorrection: boolean;
    normalize: boolean;
    config: PostProcessing.AsProtobufJSON | null;
    llmPostProcessing: boolean;
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
  private _endOfSpeechCandidate;
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
  get endOfSpeechCandidate(): boolean;
  set endOfSpeechCandidate(value: boolean);
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
    endOfSpeechCandidate: boolean;
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
    endOfSpeechCandidate: boolean;
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
 * Message implementation for ondewo.s2t.S2tGetServiceInfoResponse
 */
export declare class S2tGetServiceInfoResponse implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): S2tGetServiceInfoResponse;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2tGetServiceInfoResponse): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: S2tGetServiceInfoResponse, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: S2tGetServiceInfoResponse, _writer: BinaryWriter): void;
  private _version;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2tGetServiceInfoResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2tGetServiceInfoResponse.AsObject>);
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
  toObject(): S2tGetServiceInfoResponse.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): S2tGetServiceInfoResponse.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): S2tGetServiceInfoResponse.AsProtobufJSON;
}
export declare namespace S2tGetServiceInfoResponse {
  /**
   * Standard JavaScript object representation for S2tGetServiceInfoResponse
   */
  interface AsObject {
    version: string;
  }
  /**
   * Protobuf JSON representation for S2tGetServiceInfoResponse
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
  get description(): S2tDescription | undefined;
  set description(value: S2tDescription | undefined);
  get active(): boolean;
  set active(value: boolean);
  get inference(): S2tInference | undefined;
  set inference(value: S2tInference | undefined);
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
    description?: S2tDescription.AsObject;
    active: boolean;
    inference?: S2tInference.AsObject;
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
    description: S2tDescription.AsProtobufJSON | null;
    active: boolean;
    inference: S2tInference.AsProtobufJSON | null;
    streamingServer: StreamingServer.AsProtobufJSON | null;
    voiceActivityDetection: VoiceActivityDetection.AsProtobufJSON | null;
    postProcessing: PostProcessing.AsProtobufJSON | null;
    logging: Logging.AsProtobufJSON | null;
  }
}
/**
 * Message implementation for ondewo.s2t.S2tDescription
 */
export declare class S2tDescription implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): S2tDescription;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2tDescription): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: S2tDescription, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: S2tDescription, _writer: BinaryWriter): void;
  private _language;
  private _pipelineOwner;
  private _domain;
  private _comments;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2tDescription to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2tDescription.AsObject>);
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
  toObject(): S2tDescription.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): S2tDescription.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): S2tDescription.AsProtobufJSON;
}
export declare namespace S2tDescription {
  /**
   * Standard JavaScript object representation for S2tDescription
   */
  interface AsObject {
    language: string;
    pipelineOwner: string;
    domain: string;
    comments: string;
  }
  /**
   * Protobuf JSON representation for S2tDescription
   */
  interface AsProtobufJSON {
    language: string;
    pipelineOwner: string;
    domain: string;
    comments: string;
  }
}
/**
 * Message implementation for ondewo.s2t.S2tInference
 */
export declare class S2tInference implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): S2tInference;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2tInference): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: S2tInference, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: S2tInference, _writer: BinaryWriter): void;
  private _acousticModels?;
  private _languageModels?;
  private _inferenceBackend;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2tInference to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2tInference.AsObject>);
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
  toObject(): S2tInference.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): S2tInference.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): S2tInference.AsProtobufJSON;
}
export declare namespace S2tInference {
  /**
   * Standard JavaScript object representation for S2tInference
   */
  interface AsObject {
    acousticModels?: AcousticModels.AsObject;
    languageModels?: LanguageModels.AsObject;
    inferenceBackend: InferenceBackend;
  }
  /**
   * Protobuf JSON representation for S2tInference
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
  private _parakeet?;
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
  get parakeet(): Parakeet | undefined;
  set parakeet(value: Parakeet | undefined);
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
    parakeet?: Parakeet.AsObject;
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
    parakeet: Parakeet.AsProtobufJSON | null;
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
 * Message implementation for ondewo.s2t.Parakeet
 */
export declare class Parakeet implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): Parakeet;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Parakeet): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Parakeet, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Parakeet, _writer: BinaryWriter): void;
  private _tritonModelName;
  private _tritonModelVersion;
  private _checkStatusTimeout;
  private _tritonServerHost;
  private _tritonServerPort;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Parakeet to deeply clone from
   */
  constructor(_value?: RecursivePartial<Parakeet.AsObject>);
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
  toObject(): Parakeet.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): Parakeet.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): Parakeet.AsProtobufJSON;
}
export declare namespace Parakeet {
  /**
   * Standard JavaScript object representation for Parakeet
   */
  interface AsObject {
    tritonModelName: string;
    tritonModelVersion: string;
    checkStatusTimeout: string;
    tritonServerHost: string;
    tritonServerPort: string;
  }
  /**
   * Protobuf JSON representation for Parakeet
   */
  interface AsProtobufJSON {
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
  private _turnDetection?;
  private _transcribeNotFinalPeriodSeconds;
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
  get turnDetection(): TurnDetectionOptions | undefined;
  set turnDetection(value: TurnDetectionOptions | undefined);
  get transcribeNotFinalPeriodSeconds(): number;
  set transcribeNotFinalPeriodSeconds(value: number);
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
    turnDetection?: TurnDetectionOptions.AsObject;
    transcribeNotFinalPeriodSeconds: number;
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
    turnDetection: TurnDetectionOptions.AsProtobufJSON | null;
    transcribeNotFinalPeriodSeconds: number;
  }
}
/**
 * Message implementation for ondewo.s2t.TurnDetectionOptions
 */
export declare class TurnDetectionOptions implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): TurnDetectionOptions;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TurnDetectionOptions): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: TurnDetectionOptions, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: TurnDetectionOptions, _writer: BinaryWriter): void;
  private _active;
  private _fullUtteranceDeployment;
  private _turnDetectionSystemPrompt;
  private _turnDetectionUserPrompt;
  private _turnDetectionLlmOpenaiOptions?;
  private _incompleteMaxSilenceSeconds;
  private _turnDetectionConversationContext?;
  private _turnDetectionChatLlmOptions?;
  private _turnDetectionEndOfUtteranceLlmOptions?;
  private _turnDetectionOndewoDeOptions?;
  private _turnDetectionOndewoDeFusionOptions?;
  private _turnDetectionPipecatSmartTurnOptions?;
  private _oneofTurnDetector;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TurnDetectionOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<TurnDetectionOptions.AsObject>);
  get active(): boolean;
  set active(value: boolean);
  get fullUtteranceDeployment(): boolean;
  set fullUtteranceDeployment(value: boolean);
  get turnDetectionSystemPrompt(): string;
  set turnDetectionSystemPrompt(value: string);
  get turnDetectionUserPrompt(): string;
  set turnDetectionUserPrompt(value: string);
  get turnDetectionLlmOpenaiOptions(): OpenaiLlmOptions | undefined;
  set turnDetectionLlmOpenaiOptions(value: OpenaiLlmOptions | undefined);
  get incompleteMaxSilenceSeconds(): number;
  set incompleteMaxSilenceSeconds(value: number);
  get turnDetectionConversationContext(): TurnDetectionConversationContext | undefined;
  set turnDetectionConversationContext(value: TurnDetectionConversationContext | undefined);
  get turnDetectionChatLlmOptions(): TurnDetectionChatLlmOptions | undefined;
  set turnDetectionChatLlmOptions(value: TurnDetectionChatLlmOptions | undefined);
  get turnDetectionEndOfUtteranceLlmOptions(): TurnDetectionEndOfUtteranceLlmOptions | undefined;
  set turnDetectionEndOfUtteranceLlmOptions(value: TurnDetectionEndOfUtteranceLlmOptions | undefined);
  get turnDetectionOndewoDeOptions(): TurnDetectionOndewoDeOptions | undefined;
  set turnDetectionOndewoDeOptions(value: TurnDetectionOndewoDeOptions | undefined);
  get turnDetectionOndewoDeFusionOptions(): TurnDetectionOndewoDeFusionOptions | undefined;
  set turnDetectionOndewoDeFusionOptions(value: TurnDetectionOndewoDeFusionOptions | undefined);
  get turnDetectionPipecatSmartTurnOptions(): TurnDetectionPipecatSmartTurnOptions | undefined;
  set turnDetectionPipecatSmartTurnOptions(value: TurnDetectionPipecatSmartTurnOptions | undefined);
  get oneofTurnDetector(): TurnDetectionOptions.OneofTurnDetectorCase;
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TurnDetectionOptions.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): TurnDetectionOptions.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): TurnDetectionOptions.AsProtobufJSON;
}
export declare namespace TurnDetectionOptions {
  /**
   * Standard JavaScript object representation for TurnDetectionOptions
   */
  interface AsObject {
    active: boolean;
    fullUtteranceDeployment: boolean;
    turnDetectionSystemPrompt: string;
    turnDetectionUserPrompt: string;
    turnDetectionLlmOpenaiOptions?: OpenaiLlmOptions.AsObject;
    incompleteMaxSilenceSeconds: number;
    turnDetectionConversationContext?: TurnDetectionConversationContext.AsObject;
    turnDetectionChatLlmOptions?: TurnDetectionChatLlmOptions.AsObject;
    turnDetectionEndOfUtteranceLlmOptions?: TurnDetectionEndOfUtteranceLlmOptions.AsObject;
    turnDetectionOndewoDeOptions?: TurnDetectionOndewoDeOptions.AsObject;
    turnDetectionOndewoDeFusionOptions?: TurnDetectionOndewoDeFusionOptions.AsObject;
    turnDetectionPipecatSmartTurnOptions?: TurnDetectionPipecatSmartTurnOptions.AsObject;
  }
  /**
   * Protobuf JSON representation for TurnDetectionOptions
   */
  interface AsProtobufJSON {
    active: boolean;
    fullUtteranceDeployment: boolean;
    turnDetectionSystemPrompt: string;
    turnDetectionUserPrompt: string;
    turnDetectionLlmOpenaiOptions: OpenaiLlmOptions.AsProtobufJSON | null;
    incompleteMaxSilenceSeconds: number;
    turnDetectionConversationContext: TurnDetectionConversationContext.AsProtobufJSON | null;
    turnDetectionChatLlmOptions: TurnDetectionChatLlmOptions.AsProtobufJSON | null;
    turnDetectionEndOfUtteranceLlmOptions: TurnDetectionEndOfUtteranceLlmOptions.AsProtobufJSON | null;
    turnDetectionOndewoDeOptions: TurnDetectionOndewoDeOptions.AsProtobufJSON | null;
    turnDetectionOndewoDeFusionOptions: TurnDetectionOndewoDeFusionOptions.AsProtobufJSON | null;
    turnDetectionPipecatSmartTurnOptions: TurnDetectionPipecatSmartTurnOptions.AsProtobufJSON | null;
  }
  enum OneofTurnDetectorCase {
    none = 0,
    turnDetectionChatLlmOptions = 1,
    turnDetectionEndOfUtteranceLlmOptions = 2,
    turnDetectionOndewoDeOptions = 3,
    turnDetectionOndewoDeFusionOptions = 4,
    turnDetectionPipecatSmartTurnOptions = 5
  }
}
/**
 * Message implementation for ondewo.s2t.TurnDetectionChatLlmOptions
 */
export declare class TurnDetectionChatLlmOptions implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): TurnDetectionChatLlmOptions;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TurnDetectionChatLlmOptions): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: TurnDetectionChatLlmOptions, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: TurnDetectionChatLlmOptions, _writer: BinaryWriter): void;
  private _openaiLlmOptions?;
  private _systemPrompt;
  private _userPrompt;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TurnDetectionChatLlmOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<TurnDetectionChatLlmOptions.AsObject>);
  get openaiLlmOptions(): OpenaiLlmOptions | undefined;
  set openaiLlmOptions(value: OpenaiLlmOptions | undefined);
  get systemPrompt(): string;
  set systemPrompt(value: string);
  get userPrompt(): string;
  set userPrompt(value: string);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TurnDetectionChatLlmOptions.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): TurnDetectionChatLlmOptions.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): TurnDetectionChatLlmOptions.AsProtobufJSON;
}
export declare namespace TurnDetectionChatLlmOptions {
  /**
   * Standard JavaScript object representation for TurnDetectionChatLlmOptions
   */
  interface AsObject {
    openaiLlmOptions?: OpenaiLlmOptions.AsObject;
    systemPrompt: string;
    userPrompt: string;
  }
  /**
   * Protobuf JSON representation for TurnDetectionChatLlmOptions
   */
  interface AsProtobufJSON {
    openaiLlmOptions: OpenaiLlmOptions.AsProtobufJSON | null;
    systemPrompt: string;
    userPrompt: string;
  }
}
/**
 * Message implementation for ondewo.s2t.TurnDetectionEndOfUtteranceLlmOptions
 */
export declare class TurnDetectionEndOfUtteranceLlmOptions implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): TurnDetectionEndOfUtteranceLlmOptions;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TurnDetectionEndOfUtteranceLlmOptions): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: TurnDetectionEndOfUtteranceLlmOptions, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: TurnDetectionEndOfUtteranceLlmOptions, _writer: BinaryWriter): void;
  private _openaiLlmOptions?;
  private _endOfTurnProbabilityThreshold;
  private _turnDetectionHoldBands?;
  private _uncertainMinWords;
  private _exactProbability;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TurnDetectionEndOfUtteranceLlmOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<TurnDetectionEndOfUtteranceLlmOptions.AsObject>);
  get openaiLlmOptions(): OpenaiLlmOptions | undefined;
  set openaiLlmOptions(value: OpenaiLlmOptions | undefined);
  get endOfTurnProbabilityThreshold(): number;
  set endOfTurnProbabilityThreshold(value: number);
  get turnDetectionHoldBands(): TurnDetectionHoldBands | undefined;
  set turnDetectionHoldBands(value: TurnDetectionHoldBands | undefined);
  get uncertainMinWords(): number;
  set uncertainMinWords(value: number);
  get exactProbability(): boolean;
  set exactProbability(value: boolean);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TurnDetectionEndOfUtteranceLlmOptions.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): TurnDetectionEndOfUtteranceLlmOptions.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): TurnDetectionEndOfUtteranceLlmOptions.AsProtobufJSON;
}
export declare namespace TurnDetectionEndOfUtteranceLlmOptions {
  /**
   * Standard JavaScript object representation for TurnDetectionEndOfUtteranceLlmOptions
   */
  interface AsObject {
    openaiLlmOptions?: OpenaiLlmOptions.AsObject;
    endOfTurnProbabilityThreshold: number;
    turnDetectionHoldBands?: TurnDetectionHoldBands.AsObject;
    uncertainMinWords: number;
    exactProbability: boolean;
  }
  /**
   * Protobuf JSON representation for TurnDetectionEndOfUtteranceLlmOptions
   */
  interface AsProtobufJSON {
    openaiLlmOptions: OpenaiLlmOptions.AsProtobufJSON | null;
    endOfTurnProbabilityThreshold: number;
    turnDetectionHoldBands: TurnDetectionHoldBands.AsProtobufJSON | null;
    uncertainMinWords: number;
    exactProbability: boolean;
  }
}
/**
 * Message implementation for ondewo.s2t.TurnDetectionOndewoDeOptions
 */
export declare class TurnDetectionOndewoDeOptions implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): TurnDetectionOndewoDeOptions;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TurnDetectionOndewoDeOptions): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: TurnDetectionOndewoDeOptions, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: TurnDetectionOndewoDeOptions, _writer: BinaryWriter): void;
  private _openaiLlmOptions?;
  private _endOfTurnProbabilityThreshold;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TurnDetectionOndewoDeOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<TurnDetectionOndewoDeOptions.AsObject>);
  get openaiLlmOptions(): OpenaiLlmOptions | undefined;
  set openaiLlmOptions(value: OpenaiLlmOptions | undefined);
  get endOfTurnProbabilityThreshold(): number;
  set endOfTurnProbabilityThreshold(value: number);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TurnDetectionOndewoDeOptions.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): TurnDetectionOndewoDeOptions.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): TurnDetectionOndewoDeOptions.AsProtobufJSON;
}
export declare namespace TurnDetectionOndewoDeOptions {
  /**
   * Standard JavaScript object representation for TurnDetectionOndewoDeOptions
   */
  interface AsObject {
    openaiLlmOptions?: OpenaiLlmOptions.AsObject;
    endOfTurnProbabilityThreshold: number;
  }
  /**
   * Protobuf JSON representation for TurnDetectionOndewoDeOptions
   */
  interface AsProtobufJSON {
    openaiLlmOptions: OpenaiLlmOptions.AsProtobufJSON | null;
    endOfTurnProbabilityThreshold: number;
  }
}
/**
 * Message implementation for ondewo.s2t.TurnDetectionOndewoDeFusionOptions
 */
export declare class TurnDetectionOndewoDeFusionOptions implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): TurnDetectionOndewoDeFusionOptions;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TurnDetectionOndewoDeFusionOptions): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: TurnDetectionOndewoDeFusionOptions, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: TurnDetectionOndewoDeFusionOptions, _writer: BinaryWriter): void;
  private _openaiLlmOptions?;
  private _endOfTurnProbabilityThreshold;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TurnDetectionOndewoDeFusionOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<TurnDetectionOndewoDeFusionOptions.AsObject>);
  get openaiLlmOptions(): OpenaiLlmOptions | undefined;
  set openaiLlmOptions(value: OpenaiLlmOptions | undefined);
  get endOfTurnProbabilityThreshold(): number;
  set endOfTurnProbabilityThreshold(value: number);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TurnDetectionOndewoDeFusionOptions.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): TurnDetectionOndewoDeFusionOptions.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): TurnDetectionOndewoDeFusionOptions.AsProtobufJSON;
}
export declare namespace TurnDetectionOndewoDeFusionOptions {
  /**
   * Standard JavaScript object representation for TurnDetectionOndewoDeFusionOptions
   */
  interface AsObject {
    openaiLlmOptions?: OpenaiLlmOptions.AsObject;
    endOfTurnProbabilityThreshold: number;
  }
  /**
   * Protobuf JSON representation for TurnDetectionOndewoDeFusionOptions
   */
  interface AsProtobufJSON {
    openaiLlmOptions: OpenaiLlmOptions.AsProtobufJSON | null;
    endOfTurnProbabilityThreshold: number;
  }
}
/**
 * Message implementation for ondewo.s2t.TurnDetectionPipecatSmartTurnOptions
 */
export declare class TurnDetectionPipecatSmartTurnOptions implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): TurnDetectionPipecatSmartTurnOptions;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TurnDetectionPipecatSmartTurnOptions): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: TurnDetectionPipecatSmartTurnOptions, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: TurnDetectionPipecatSmartTurnOptions, _writer: BinaryWriter): void;
  private _modelName;
  private _tritonServerHost;
  private _tritonServerPort;
  private _maxAudioSeconds;
  private _timeoutSeconds;
  private _endOfTurnProbabilityThreshold;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TurnDetectionPipecatSmartTurnOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<TurnDetectionPipecatSmartTurnOptions.AsObject>);
  get modelName(): string;
  set modelName(value: string);
  get tritonServerHost(): string;
  set tritonServerHost(value: string);
  get tritonServerPort(): string;
  set tritonServerPort(value: string);
  get maxAudioSeconds(): number;
  set maxAudioSeconds(value: number);
  get timeoutSeconds(): number;
  set timeoutSeconds(value: number);
  get endOfTurnProbabilityThreshold(): number;
  set endOfTurnProbabilityThreshold(value: number);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TurnDetectionPipecatSmartTurnOptions.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): TurnDetectionPipecatSmartTurnOptions.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): TurnDetectionPipecatSmartTurnOptions.AsProtobufJSON;
}
export declare namespace TurnDetectionPipecatSmartTurnOptions {
  /**
   * Standard JavaScript object representation for TurnDetectionPipecatSmartTurnOptions
   */
  interface AsObject {
    modelName: string;
    tritonServerHost: string;
    tritonServerPort: string;
    maxAudioSeconds: number;
    timeoutSeconds: number;
    endOfTurnProbabilityThreshold: number;
  }
  /**
   * Protobuf JSON representation for TurnDetectionPipecatSmartTurnOptions
   */
  interface AsProtobufJSON {
    modelName: string;
    tritonServerHost: string;
    tritonServerPort: string;
    maxAudioSeconds: number;
    timeoutSeconds: number;
    endOfTurnProbabilityThreshold: number;
  }
}
/**
 * Message implementation for ondewo.s2t.TurnDetectionConversationContext
 */
export declare class TurnDetectionConversationContext implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): TurnDetectionConversationContext;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TurnDetectionConversationContext): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: TurnDetectionConversationContext, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: TurnDetectionConversationContext, _writer: BinaryWriter): void;
  private _turnDetectionContextTurns?;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TurnDetectionConversationContext to deeply clone from
   */
  constructor(_value?: RecursivePartial<TurnDetectionConversationContext.AsObject>);
  get turnDetectionContextTurns(): TurnDetectionContextTurn[] | undefined;
  set turnDetectionContextTurns(value: TurnDetectionContextTurn[] | undefined);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TurnDetectionConversationContext.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): TurnDetectionConversationContext.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): TurnDetectionConversationContext.AsProtobufJSON;
}
export declare namespace TurnDetectionConversationContext {
  /**
   * Standard JavaScript object representation for TurnDetectionConversationContext
   */
  interface AsObject {
    turnDetectionContextTurns?: TurnDetectionContextTurn.AsObject[];
  }
  /**
   * Protobuf JSON representation for TurnDetectionConversationContext
   */
  interface AsProtobufJSON {
    turnDetectionContextTurns: TurnDetectionContextTurn.AsProtobufJSON[] | null;
  }
}
/**
 * Message implementation for ondewo.s2t.TurnDetectionContextTurn
 */
export declare class TurnDetectionContextTurn implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): TurnDetectionContextTurn;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TurnDetectionContextTurn): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: TurnDetectionContextTurn, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: TurnDetectionContextTurn, _writer: BinaryWriter): void;
  private _role;
  private _text;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TurnDetectionContextTurn to deeply clone from
   */
  constructor(_value?: RecursivePartial<TurnDetectionContextTurn.AsObject>);
  get role(): TurnDetectionContextTurn.Role;
  set role(value: TurnDetectionContextTurn.Role);
  get text(): string;
  set text(value: string);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TurnDetectionContextTurn.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): TurnDetectionContextTurn.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): TurnDetectionContextTurn.AsProtobufJSON;
}
export declare namespace TurnDetectionContextTurn {
  /**
   * Standard JavaScript object representation for TurnDetectionContextTurn
   */
  interface AsObject {
    role: TurnDetectionContextTurn.Role;
    text: string;
  }
  /**
   * Protobuf JSON representation for TurnDetectionContextTurn
   */
  interface AsProtobufJSON {
    role: string;
    text: string;
  }
  enum Role {
    ROLE_UNSPECIFIED = 0,
    ROLE_USER = 1,
    ROLE_ASSISTANT = 2
  }
}
/**
 * Message implementation for ondewo.s2t.TurnDetectionHoldBands
 */
export declare class TurnDetectionHoldBands implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): TurnDetectionHoldBands;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TurnDetectionHoldBands): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: TurnDetectionHoldBands, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: TurnDetectionHoldBands, _writer: BinaryWriter): void;
  private _turnDetectionHoldBands?;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TurnDetectionHoldBands to deeply clone from
   */
  constructor(_value?: RecursivePartial<TurnDetectionHoldBands.AsObject>);
  get turnDetectionHoldBands(): TurnDetectionHoldBand[] | undefined;
  set turnDetectionHoldBands(value: TurnDetectionHoldBand[] | undefined);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TurnDetectionHoldBands.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): TurnDetectionHoldBands.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): TurnDetectionHoldBands.AsProtobufJSON;
}
export declare namespace TurnDetectionHoldBands {
  /**
   * Standard JavaScript object representation for TurnDetectionHoldBands
   */
  interface AsObject {
    turnDetectionHoldBands?: TurnDetectionHoldBand.AsObject[];
  }
  /**
   * Protobuf JSON representation for TurnDetectionHoldBands
   */
  interface AsProtobufJSON {
    turnDetectionHoldBands: TurnDetectionHoldBand.AsProtobufJSON[] | null;
  }
}
/**
 * Message implementation for ondewo.s2t.TurnDetectionHoldBand
 */
export declare class TurnDetectionHoldBand implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): TurnDetectionHoldBand;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TurnDetectionHoldBand): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: TurnDetectionHoldBand, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: TurnDetectionHoldBand, _writer: BinaryWriter): void;
  private _upperProbability;
  private _maxSilenceSeconds;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TurnDetectionHoldBand to deeply clone from
   */
  constructor(_value?: RecursivePartial<TurnDetectionHoldBand.AsObject>);
  get upperProbability(): number;
  set upperProbability(value: number);
  get maxSilenceSeconds(): number;
  set maxSilenceSeconds(value: number);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TurnDetectionHoldBand.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): TurnDetectionHoldBand.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): TurnDetectionHoldBand.AsProtobufJSON;
}
export declare namespace TurnDetectionHoldBand {
  /**
   * Standard JavaScript object representation for TurnDetectionHoldBand
   */
  interface AsObject {
    upperProbability: number;
    maxSilenceSeconds: number;
  }
  /**
   * Protobuf JSON representation for TurnDetectionHoldBand
   */
  interface AsProtobufJSON {
    upperProbability: number;
    maxSilenceSeconds: number;
  }
}
/**
 * Message implementation for ondewo.s2t.OpenaiLlmOptions
 */
export declare class OpenaiLlmOptions implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): OpenaiLlmOptions;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: OpenaiLlmOptions): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: OpenaiLlmOptions, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: OpenaiLlmOptions, _writer: BinaryWriter): void;
  private _apiKey;
  private _organization;
  private _project;
  private _webhookSecret;
  private _baseUrl;
  private _websocketBaseUrl;
  private _timeout;
  private _maxRetries;
  private _defaultHeaders;
  private _defaultQuery?;
  private _strictResponseValidation;
  private _model;
  private _frequencyPenalty;
  private _logitBias;
  private _logprobs;
  private _maxCompletionTokens;
  private _maxTokens;
  private _metadata?;
  private _n;
  private _presencePenalty;
  private _promptCacheKey;
  private _reasoningEffort;
  private _seed;
  private _serviceTier;
  private _stop;
  private _store;
  private _temperature;
  private _topLogprobs;
  private _topP;
  private _user;
  private _verbosity;
  private _extraHeaders?;
  private _extraQuery?;
  private _extraBody?;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OpenaiLlmOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<OpenaiLlmOptions.AsObject>);
  get apiKey(): string;
  set apiKey(value: string);
  get organization(): string;
  set organization(value: string);
  get project(): string;
  set project(value: string);
  get webhookSecret(): string;
  set webhookSecret(value: string);
  get baseUrl(): string;
  set baseUrl(value: string);
  get websocketBaseUrl(): string;
  set websocketBaseUrl(value: string);
  get timeout(): number;
  set timeout(value: number);
  get maxRetries(): number;
  set maxRetries(value: number);
  get defaultHeaders(): {
    [prop: string]: string;
  };
  set defaultHeaders(value: {
    [prop: string]: string;
  });
  get defaultQuery(): googleProtobuf001.Struct | undefined;
  set defaultQuery(value: googleProtobuf001.Struct | undefined);
  get strictResponseValidation(): boolean;
  set strictResponseValidation(value: boolean);
  get model(): string;
  set model(value: string);
  get frequencyPenalty(): number;
  set frequencyPenalty(value: number);
  get logitBias(): {
    [prop: string]: number;
  };
  set logitBias(value: {
    [prop: string]: number;
  });
  get logprobs(): boolean;
  set logprobs(value: boolean);
  get maxCompletionTokens(): number;
  set maxCompletionTokens(value: number);
  get maxTokens(): number;
  set maxTokens(value: number);
  get metadata(): googleProtobuf001.Struct | undefined;
  set metadata(value: googleProtobuf001.Struct | undefined);
  get n(): number;
  set n(value: number);
  get presencePenalty(): number;
  set presencePenalty(value: number);
  get promptCacheKey(): string;
  set promptCacheKey(value: string);
  get reasoningEffort(): ReasoningEffort;
  set reasoningEffort(value: ReasoningEffort);
  get seed(): string;
  set seed(value: string);
  get serviceTier(): ServiceTier;
  set serviceTier(value: ServiceTier);
  get stop(): string[];
  set stop(value: string[]);
  get store(): boolean;
  set store(value: boolean);
  get temperature(): number;
  set temperature(value: number);
  get topLogprobs(): number;
  set topLogprobs(value: number);
  get topP(): number;
  set topP(value: number);
  get user(): string;
  set user(value: string);
  get verbosity(): Verbosity;
  set verbosity(value: Verbosity);
  get extraHeaders(): googleProtobuf001.Struct | undefined;
  set extraHeaders(value: googleProtobuf001.Struct | undefined);
  get extraQuery(): googleProtobuf001.Struct | undefined;
  set extraQuery(value: googleProtobuf001.Struct | undefined);
  get extraBody(): googleProtobuf001.Struct | undefined;
  set extraBody(value: googleProtobuf001.Struct | undefined);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): OpenaiLlmOptions.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): OpenaiLlmOptions.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): OpenaiLlmOptions.AsProtobufJSON;
}
export declare namespace OpenaiLlmOptions {
  /**
   * Standard JavaScript object representation for OpenaiLlmOptions
   */
  interface AsObject {
    apiKey: string;
    organization: string;
    project: string;
    webhookSecret: string;
    baseUrl: string;
    websocketBaseUrl: string;
    timeout: number;
    maxRetries: number;
    defaultHeaders: {
      [prop: string]: string;
    };
    defaultQuery?: googleProtobuf001.Struct.AsObject;
    strictResponseValidation: boolean;
    model: string;
    frequencyPenalty: number;
    logitBias: {
      [prop: string]: number;
    };
    logprobs: boolean;
    maxCompletionTokens: number;
    maxTokens: number;
    metadata?: googleProtobuf001.Struct.AsObject;
    n: number;
    presencePenalty: number;
    promptCacheKey: string;
    reasoningEffort: ReasoningEffort;
    seed: string;
    serviceTier: ServiceTier;
    stop: string[];
    store: boolean;
    temperature: number;
    topLogprobs: number;
    topP: number;
    user: string;
    verbosity: Verbosity;
    extraHeaders?: googleProtobuf001.Struct.AsObject;
    extraQuery?: googleProtobuf001.Struct.AsObject;
    extraBody?: googleProtobuf001.Struct.AsObject;
  }
  /**
   * Protobuf JSON representation for OpenaiLlmOptions
   */
  interface AsProtobufJSON {
    apiKey: string;
    organization: string;
    project: string;
    webhookSecret: string;
    baseUrl: string;
    websocketBaseUrl: string;
    timeout: number;
    maxRetries: number;
    defaultHeaders: {
      [prop: string]: string;
    };
    defaultQuery: googleProtobuf001.Struct.AsProtobufJSON | null;
    strictResponseValidation: boolean;
    model: string;
    frequencyPenalty: number;
    logitBias: {
      [prop: string]: number;
    };
    logprobs: boolean;
    maxCompletionTokens: number;
    maxTokens: number;
    metadata: googleProtobuf001.Struct.AsProtobufJSON | null;
    n: number;
    presencePenalty: number;
    promptCacheKey: string;
    reasoningEffort: string;
    seed: string;
    serviceTier: string;
    stop: string[];
    store: boolean;
    temperature: number;
    topLogprobs: number;
    topP: number;
    user: string;
    verbosity: string;
    extraHeaders: googleProtobuf001.Struct.AsProtobufJSON | null;
    extraQuery: googleProtobuf001.Struct.AsProtobufJSON | null;
    extraBody: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
  /**
   * Message implementation for ondewo.s2t.OpenaiLlmOptions.DefaultHeadersEntry
   */
  class DefaultHeadersEntry implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DefaultHeadersEntry;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DefaultHeadersEntry): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DefaultHeadersEntry, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DefaultHeadersEntry, _writer: BinaryWriter): void;
    private _key;
    private _value;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DefaultHeadersEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<DefaultHeadersEntry.AsObject>);
    get key(): string;
    set key(value: string);
    get value(): string;
    set value(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DefaultHeadersEntry.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DefaultHeadersEntry.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DefaultHeadersEntry.AsProtobufJSON;
  }
  namespace DefaultHeadersEntry {
    /**
     * Standard JavaScript object representation for DefaultHeadersEntry
     */
    interface AsObject {
      key: string;
      value: string;
    }
    /**
     * Protobuf JSON representation for DefaultHeadersEntry
     */
    interface AsProtobufJSON {
      key: string;
      value: string;
    }
  }
  /**
   * Message implementation for ondewo.s2t.OpenaiLlmOptions.LogitBiasEntry
   */
  class LogitBiasEntry implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): LogitBiasEntry;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LogitBiasEntry): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: LogitBiasEntry, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: LogitBiasEntry, _writer: BinaryWriter): void;
    private _key;
    private _value;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LogitBiasEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<LogitBiasEntry.AsObject>);
    get key(): string;
    set key(value: string);
    get value(): number;
    set value(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): LogitBiasEntry.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): LogitBiasEntry.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): LogitBiasEntry.AsProtobufJSON;
  }
  namespace LogitBiasEntry {
    /**
     * Standard JavaScript object representation for LogitBiasEntry
     */
    interface AsObject {
      key: string;
      value: number;
    }
    /**
     * Protobuf JSON representation for LogitBiasEntry
     */
    interface AsProtobufJSON {
      key: string;
      value: number;
    }
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
  private _silero?;
  private _wespeakerTsd?;
  private _vadMethod;
  private _tsdMethod;
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
  get silero(): Silero | undefined;
  set silero(value: Silero | undefined);
  get wespeakerTsd(): WespeakerTsd | undefined;
  set wespeakerTsd(value: WespeakerTsd | undefined);
  get vadMethod(): VadMethod;
  set vadMethod(value: VadMethod);
  get tsdMethod(): TsdMethod;
  set tsdMethod(value: TsdMethod);
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
    silero?: Silero.AsObject;
    wespeakerTsd?: WespeakerTsd.AsObject;
    vadMethod: VadMethod;
    tsdMethod: TsdMethod;
  }
  /**
   * Protobuf JSON representation for VoiceActivityDetection
   */
  interface AsProtobufJSON {
    active: string;
    samplingRate: string;
    pyannote: Pyannote.AsProtobufJSON | null;
    silero: Silero.AsProtobufJSON | null;
    wespeakerTsd: WespeakerTsd.AsProtobufJSON | null;
    vadMethod: string;
    tsdMethod: string;
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
 * Message implementation for ondewo.s2t.Silero
 */
export declare class Silero implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): Silero;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Silero): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Silero, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Silero, _writer: BinaryWriter): void;
  private _modelName;
  private _minAudioSize;
  private _threshold;
  private _minSpeechDurationMs;
  private _minSilenceDurationMs;
  private _speechPadMs;
  private _tritonServerHost;
  private _tritonServerPort;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Silero to deeply clone from
   */
  constructor(_value?: RecursivePartial<Silero.AsObject>);
  get modelName(): string;
  set modelName(value: string);
  get minAudioSize(): string;
  set minAudioSize(value: string);
  get threshold(): number;
  set threshold(value: number);
  get minSpeechDurationMs(): number;
  set minSpeechDurationMs(value: number);
  get minSilenceDurationMs(): number;
  set minSilenceDurationMs(value: number);
  get speechPadMs(): number;
  set speechPadMs(value: number);
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
  toObject(): Silero.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): Silero.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): Silero.AsProtobufJSON;
}
export declare namespace Silero {
  /**
   * Standard JavaScript object representation for Silero
   */
  interface AsObject {
    modelName: string;
    minAudioSize: string;
    threshold: number;
    minSpeechDurationMs: number;
    minSilenceDurationMs: number;
    speechPadMs: number;
    tritonServerHost: string;
    tritonServerPort: string;
  }
  /**
   * Protobuf JSON representation for Silero
   */
  interface AsProtobufJSON {
    modelName: string;
    minAudioSize: string;
    threshold: number;
    minSpeechDurationMs: number;
    minSilenceDurationMs: number;
    speechPadMs: number;
    tritonServerHost: string;
    tritonServerPort: string;
  }
}
/**
 * Message implementation for ondewo.s2t.WespeakerTsd
 */
export declare class WespeakerTsd implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): WespeakerTsd;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WespeakerTsd): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: WespeakerTsd, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: WespeakerTsd, _writer: BinaryWriter): void;
  private _active;
  private _modelName;
  private _tritonServerHost;
  private _tritonServerPort;
  private _similarityThreshold;
  private _minAudioLength;
  private _referenceMaxLength;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WespeakerTsd to deeply clone from
   */
  constructor(_value?: RecursivePartial<WespeakerTsd.AsObject>);
  get active(): boolean;
  set active(value: boolean);
  get modelName(): string;
  set modelName(value: string);
  get tritonServerHost(): string;
  set tritonServerHost(value: string);
  get tritonServerPort(): string;
  set tritonServerPort(value: string);
  get similarityThreshold(): number;
  set similarityThreshold(value: number);
  get minAudioLength(): number;
  set minAudioLength(value: number);
  get referenceMaxLength(): number;
  set referenceMaxLength(value: number);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WespeakerTsd.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): WespeakerTsd.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): WespeakerTsd.AsProtobufJSON;
}
export declare namespace WespeakerTsd {
  /**
   * Standard JavaScript object representation for WespeakerTsd
   */
  interface AsObject {
    active: boolean;
    modelName: string;
    tritonServerHost: string;
    tritonServerPort: string;
    similarityThreshold: number;
    minAudioLength: number;
    referenceMaxLength: number;
  }
  /**
   * Protobuf JSON representation for WespeakerTsd
   */
  interface AsProtobufJSON {
    active: boolean;
    modelName: string;
    tritonServerHost: string;
    tritonServerPort: string;
    similarityThreshold: number;
    minAudioLength: number;
    referenceMaxLength: number;
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
  private _llmPostProcessing?;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PostProcessors to deeply clone from
   */
  constructor(_value?: RecursivePartial<PostProcessors.AsObject>);
  get symSpell(): SymSpell | undefined;
  set symSpell(value: SymSpell | undefined);
  get normalization(): S2tNormalization | undefined;
  set normalization(value: S2tNormalization | undefined);
  get llmPostProcessing(): S2tLlmPostProcessing | undefined;
  set llmPostProcessing(value: S2tLlmPostProcessing | undefined);
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
    normalization?: S2tNormalization.AsObject;
    llmPostProcessing?: S2tLlmPostProcessing.AsObject;
  }
  /**
   * Protobuf JSON representation for PostProcessors
   */
  interface AsProtobufJSON {
    symSpell: SymSpell.AsProtobufJSON | null;
    normalization: S2tNormalization.AsProtobufJSON | null;
    llmPostProcessing: S2tLlmPostProcessing.AsProtobufJSON | null;
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
 * Message implementation for ondewo.s2t.S2tNormalization
 */
export declare class S2tNormalization implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): S2tNormalization;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2tNormalization): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: S2tNormalization, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: S2tNormalization, _writer: BinaryWriter): void;
  private _language;
  private _pipeline;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2tNormalization to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2tNormalization.AsObject>);
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
  toObject(): S2tNormalization.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): S2tNormalization.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): S2tNormalization.AsProtobufJSON;
}
export declare namespace S2tNormalization {
  /**
   * Standard JavaScript object representation for S2tNormalization
   */
  interface AsObject {
    language: string;
    pipeline: string[];
  }
  /**
   * Protobuf JSON representation for S2tNormalization
   */
  interface AsProtobufJSON {
    language: string;
    pipeline: string[];
  }
}
/**
 * Message implementation for ondewo.s2t.S2tLlmPostProcessing
 */
export declare class S2tLlmPostProcessing implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): S2tLlmPostProcessing;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2tLlmPostProcessing): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: S2tLlmPostProcessing, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: S2tLlmPostProcessing, _writer: BinaryWriter): void;
  private _s2tLlmPostProcessingOpenaiOptions?;
  private _s2tLlmPostProcessingSystemPrompt;
  private _s2tLlmPostProcessingEndingPrompt;
  private _s2tLlmPostProcessingCasingOptions?;
  private _s2tLlmPostProcessingPunctuationOptions?;
  private _s2tLlmPostProcessingSpellingCorrectionOptions?;
  private _s2tLlmPostProcessingSemanticCorrectionOptions?;
  private _s2tLlmPostProcessingTranslationOptions?;
  private _s2tLlmPostProcessingInverseNormalizationOptions?;
  private _s2tLlmPostProcessingNormalizationOptions?;
  private _s2tLlmPostProcessingSummarizationOptions?;
  private _s2tLlmPostProcessingUserPromptOptions?;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2tLlmPostProcessing to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2tLlmPostProcessing.AsObject>);
  get s2tLlmPostProcessingOpenaiOptions(): OpenaiLlmOptions | undefined;
  set s2tLlmPostProcessingOpenaiOptions(value: OpenaiLlmOptions | undefined);
  get s2tLlmPostProcessingSystemPrompt(): string;
  set s2tLlmPostProcessingSystemPrompt(value: string);
  get s2tLlmPostProcessingEndingPrompt(): string;
  set s2tLlmPostProcessingEndingPrompt(value: string);
  get s2tLlmPostProcessingCasingOptions(): S2tLlmPostProcessingSubTaskOptions | undefined;
  set s2tLlmPostProcessingCasingOptions(value: S2tLlmPostProcessingSubTaskOptions | undefined);
  get s2tLlmPostProcessingPunctuationOptions(): S2tLlmPostProcessingSubTaskOptions | undefined;
  set s2tLlmPostProcessingPunctuationOptions(value: S2tLlmPostProcessingSubTaskOptions | undefined);
  get s2tLlmPostProcessingSpellingCorrectionOptions(): S2tLlmPostProcessingSubTaskOptions | undefined;
  set s2tLlmPostProcessingSpellingCorrectionOptions(value: S2tLlmPostProcessingSubTaskOptions | undefined);
  get s2tLlmPostProcessingSemanticCorrectionOptions(): S2tLlmPostProcessingSubTaskOptions | undefined;
  set s2tLlmPostProcessingSemanticCorrectionOptions(value: S2tLlmPostProcessingSubTaskOptions | undefined);
  get s2tLlmPostProcessingTranslationOptions(): S2tLlmPostProcessingTranslationOptions | undefined;
  set s2tLlmPostProcessingTranslationOptions(value: S2tLlmPostProcessingTranslationOptions | undefined);
  get s2tLlmPostProcessingInverseNormalizationOptions(): S2tLlmPostProcessingInverseNormalizationOptions | undefined;
  set s2tLlmPostProcessingInverseNormalizationOptions(value: S2tLlmPostProcessingInverseNormalizationOptions | undefined);
  get s2tLlmPostProcessingNormalizationOptions(): S2tLlmPostProcessingNormalizationOptions | undefined;
  set s2tLlmPostProcessingNormalizationOptions(value: S2tLlmPostProcessingNormalizationOptions | undefined);
  get s2tLlmPostProcessingSummarizationOptions(): S2tLlmPostProcessingSummarizationOptions | undefined;
  set s2tLlmPostProcessingSummarizationOptions(value: S2tLlmPostProcessingSummarizationOptions | undefined);
  get s2tLlmPostProcessingUserPromptOptions(): S2tLlmPostProcessingSubTaskOptions | undefined;
  set s2tLlmPostProcessingUserPromptOptions(value: S2tLlmPostProcessingSubTaskOptions | undefined);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2tLlmPostProcessing.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): S2tLlmPostProcessing.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): S2tLlmPostProcessing.AsProtobufJSON;
}
export declare namespace S2tLlmPostProcessing {
  /**
   * Standard JavaScript object representation for S2tLlmPostProcessing
   */
  interface AsObject {
    s2tLlmPostProcessingOpenaiOptions?: OpenaiLlmOptions.AsObject;
    s2tLlmPostProcessingSystemPrompt: string;
    s2tLlmPostProcessingEndingPrompt: string;
    s2tLlmPostProcessingCasingOptions?: S2tLlmPostProcessingSubTaskOptions.AsObject;
    s2tLlmPostProcessingPunctuationOptions?: S2tLlmPostProcessingSubTaskOptions.AsObject;
    s2tLlmPostProcessingSpellingCorrectionOptions?: S2tLlmPostProcessingSubTaskOptions.AsObject;
    s2tLlmPostProcessingSemanticCorrectionOptions?: S2tLlmPostProcessingSubTaskOptions.AsObject;
    s2tLlmPostProcessingTranslationOptions?: S2tLlmPostProcessingTranslationOptions.AsObject;
    s2tLlmPostProcessingInverseNormalizationOptions?: S2tLlmPostProcessingInverseNormalizationOptions.AsObject;
    s2tLlmPostProcessingNormalizationOptions?: S2tLlmPostProcessingNormalizationOptions.AsObject;
    s2tLlmPostProcessingSummarizationOptions?: S2tLlmPostProcessingSummarizationOptions.AsObject;
    s2tLlmPostProcessingUserPromptOptions?: S2tLlmPostProcessingSubTaskOptions.AsObject;
  }
  /**
   * Protobuf JSON representation for S2tLlmPostProcessing
   */
  interface AsProtobufJSON {
    s2tLlmPostProcessingOpenaiOptions: OpenaiLlmOptions.AsProtobufJSON | null;
    s2tLlmPostProcessingSystemPrompt: string;
    s2tLlmPostProcessingEndingPrompt: string;
    s2tLlmPostProcessingCasingOptions: S2tLlmPostProcessingSubTaskOptions.AsProtobufJSON | null;
    s2tLlmPostProcessingPunctuationOptions: S2tLlmPostProcessingSubTaskOptions.AsProtobufJSON | null;
    s2tLlmPostProcessingSpellingCorrectionOptions: S2tLlmPostProcessingSubTaskOptions.AsProtobufJSON | null;
    s2tLlmPostProcessingSemanticCorrectionOptions: S2tLlmPostProcessingSubTaskOptions.AsProtobufJSON | null;
    s2tLlmPostProcessingTranslationOptions: S2tLlmPostProcessingTranslationOptions.AsProtobufJSON | null;
    s2tLlmPostProcessingInverseNormalizationOptions: S2tLlmPostProcessingInverseNormalizationOptions.AsProtobufJSON | null;
    s2tLlmPostProcessingNormalizationOptions: S2tLlmPostProcessingNormalizationOptions.AsProtobufJSON | null;
    s2tLlmPostProcessingSummarizationOptions: S2tLlmPostProcessingSummarizationOptions.AsProtobufJSON | null;
    s2tLlmPostProcessingUserPromptOptions: S2tLlmPostProcessingSubTaskOptions.AsProtobufJSON | null;
  }
}
/**
 * Message implementation for ondewo.s2t.S2tLlmPostProcessingTranslationOptions
 */
export declare class S2tLlmPostProcessingTranslationOptions implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): S2tLlmPostProcessingTranslationOptions;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2tLlmPostProcessingTranslationOptions): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: S2tLlmPostProcessingTranslationOptions, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: S2tLlmPostProcessingTranslationOptions, _writer: BinaryWriter): void;
  private _active;
  private _language;
  private _prompt;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2tLlmPostProcessingTranslationOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2tLlmPostProcessingTranslationOptions.AsObject>);
  get active(): boolean;
  set active(value: boolean);
  get language(): string;
  set language(value: string);
  get prompt(): string;
  set prompt(value: string);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2tLlmPostProcessingTranslationOptions.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): S2tLlmPostProcessingTranslationOptions.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): S2tLlmPostProcessingTranslationOptions.AsProtobufJSON;
}
export declare namespace S2tLlmPostProcessingTranslationOptions {
  /**
   * Standard JavaScript object representation for S2tLlmPostProcessingTranslationOptions
   */
  interface AsObject {
    active: boolean;
    language: string;
    prompt: string;
  }
  /**
   * Protobuf JSON representation for S2tLlmPostProcessingTranslationOptions
   */
  interface AsProtobufJSON {
    active: boolean;
    language: string;
    prompt: string;
  }
}
/**
 * Message implementation for ondewo.s2t.S2tLlmPostProcessingInverseNormalizationOptions
 */
export declare class S2tLlmPostProcessingInverseNormalizationOptions implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): S2tLlmPostProcessingInverseNormalizationOptions;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2tLlmPostProcessingInverseNormalizationOptions): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: S2tLlmPostProcessingInverseNormalizationOptions, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: S2tLlmPostProcessingInverseNormalizationOptions, _writer: BinaryWriter): void;
  private _active;
  private _email?;
  private _phoneNumber?;
  private _dateAndTime?;
  private _creditCardNumber?;
  private _socialSecurityNumber?;
  private _timeZone?;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2tLlmPostProcessingInverseNormalizationOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2tLlmPostProcessingInverseNormalizationOptions.AsObject>);
  get active(): boolean;
  set active(value: boolean);
  get email(): S2tLlmPostProcessingSubTaskOptions | undefined;
  set email(value: S2tLlmPostProcessingSubTaskOptions | undefined);
  get phoneNumber(): S2tLlmPostProcessingSubTaskOptions | undefined;
  set phoneNumber(value: S2tLlmPostProcessingSubTaskOptions | undefined);
  get dateAndTime(): S2tLlmPostProcessingSubTaskOptions | undefined;
  set dateAndTime(value: S2tLlmPostProcessingSubTaskOptions | undefined);
  get creditCardNumber(): S2tLlmPostProcessingSubTaskOptions | undefined;
  set creditCardNumber(value: S2tLlmPostProcessingSubTaskOptions | undefined);
  get socialSecurityNumber(): S2tLlmPostProcessingSubTaskOptions | undefined;
  set socialSecurityNumber(value: S2tLlmPostProcessingSubTaskOptions | undefined);
  get timeZone(): S2tLlmPostProcessingSubTaskOptions | undefined;
  set timeZone(value: S2tLlmPostProcessingSubTaskOptions | undefined);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2tLlmPostProcessingInverseNormalizationOptions.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): S2tLlmPostProcessingInverseNormalizationOptions.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): S2tLlmPostProcessingInverseNormalizationOptions.AsProtobufJSON;
}
export declare namespace S2tLlmPostProcessingInverseNormalizationOptions {
  /**
   * Standard JavaScript object representation for S2tLlmPostProcessingInverseNormalizationOptions
   */
  interface AsObject {
    active: boolean;
    email?: S2tLlmPostProcessingSubTaskOptions.AsObject;
    phoneNumber?: S2tLlmPostProcessingSubTaskOptions.AsObject;
    dateAndTime?: S2tLlmPostProcessingSubTaskOptions.AsObject;
    creditCardNumber?: S2tLlmPostProcessingSubTaskOptions.AsObject;
    socialSecurityNumber?: S2tLlmPostProcessingSubTaskOptions.AsObject;
    timeZone?: S2tLlmPostProcessingSubTaskOptions.AsObject;
  }
  /**
   * Protobuf JSON representation for S2tLlmPostProcessingInverseNormalizationOptions
   */
  interface AsProtobufJSON {
    active: boolean;
    email: S2tLlmPostProcessingSubTaskOptions.AsProtobufJSON | null;
    phoneNumber: S2tLlmPostProcessingSubTaskOptions.AsProtobufJSON | null;
    dateAndTime: S2tLlmPostProcessingSubTaskOptions.AsProtobufJSON | null;
    creditCardNumber: S2tLlmPostProcessingSubTaskOptions.AsProtobufJSON | null;
    socialSecurityNumber: S2tLlmPostProcessingSubTaskOptions.AsProtobufJSON | null;
    timeZone: S2tLlmPostProcessingSubTaskOptions.AsProtobufJSON | null;
  }
}
/**
 * Message implementation for ondewo.s2t.S2tLlmPostProcessingNormalizationOptions
 */
export declare class S2tLlmPostProcessingNormalizationOptions implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): S2tLlmPostProcessingNormalizationOptions;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2tLlmPostProcessingNormalizationOptions): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: S2tLlmPostProcessingNormalizationOptions, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: S2tLlmPostProcessingNormalizationOptions, _writer: BinaryWriter): void;
  private _active;
  private _email?;
  private _phoneNumber?;
  private _dateAndTime?;
  private _creditCardNumber?;
  private _socialSecurityNumber?;
  private _timeZone?;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2tLlmPostProcessingNormalizationOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2tLlmPostProcessingNormalizationOptions.AsObject>);
  get active(): boolean;
  set active(value: boolean);
  get email(): S2tLlmPostProcessingSubTaskOptions | undefined;
  set email(value: S2tLlmPostProcessingSubTaskOptions | undefined);
  get phoneNumber(): S2tLlmPostProcessingSubTaskOptions | undefined;
  set phoneNumber(value: S2tLlmPostProcessingSubTaskOptions | undefined);
  get dateAndTime(): S2tLlmPostProcessingSubTaskOptions | undefined;
  set dateAndTime(value: S2tLlmPostProcessingSubTaskOptions | undefined);
  get creditCardNumber(): S2tLlmPostProcessingSubTaskOptions | undefined;
  set creditCardNumber(value: S2tLlmPostProcessingSubTaskOptions | undefined);
  get socialSecurityNumber(): S2tLlmPostProcessingSubTaskOptions | undefined;
  set socialSecurityNumber(value: S2tLlmPostProcessingSubTaskOptions | undefined);
  get timeZone(): S2tLlmPostProcessingSubTaskOptions | undefined;
  set timeZone(value: S2tLlmPostProcessingSubTaskOptions | undefined);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2tLlmPostProcessingNormalizationOptions.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): S2tLlmPostProcessingNormalizationOptions.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): S2tLlmPostProcessingNormalizationOptions.AsProtobufJSON;
}
export declare namespace S2tLlmPostProcessingNormalizationOptions {
  /**
   * Standard JavaScript object representation for S2tLlmPostProcessingNormalizationOptions
   */
  interface AsObject {
    active: boolean;
    email?: S2tLlmPostProcessingSubTaskOptions.AsObject;
    phoneNumber?: S2tLlmPostProcessingSubTaskOptions.AsObject;
    dateAndTime?: S2tLlmPostProcessingSubTaskOptions.AsObject;
    creditCardNumber?: S2tLlmPostProcessingSubTaskOptions.AsObject;
    socialSecurityNumber?: S2tLlmPostProcessingSubTaskOptions.AsObject;
    timeZone?: S2tLlmPostProcessingSubTaskOptions.AsObject;
  }
  /**
   * Protobuf JSON representation for S2tLlmPostProcessingNormalizationOptions
   */
  interface AsProtobufJSON {
    active: boolean;
    email: S2tLlmPostProcessingSubTaskOptions.AsProtobufJSON | null;
    phoneNumber: S2tLlmPostProcessingSubTaskOptions.AsProtobufJSON | null;
    dateAndTime: S2tLlmPostProcessingSubTaskOptions.AsProtobufJSON | null;
    creditCardNumber: S2tLlmPostProcessingSubTaskOptions.AsProtobufJSON | null;
    socialSecurityNumber: S2tLlmPostProcessingSubTaskOptions.AsProtobufJSON | null;
    timeZone: S2tLlmPostProcessingSubTaskOptions.AsProtobufJSON | null;
  }
}
/**
 * Message implementation for ondewo.s2t.S2tLlmPostProcessingSummarizationOptions
 */
export declare class S2tLlmPostProcessingSummarizationOptions implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): S2tLlmPostProcessingSummarizationOptions;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2tLlmPostProcessingSummarizationOptions): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: S2tLlmPostProcessingSummarizationOptions, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: S2tLlmPostProcessingSummarizationOptions, _writer: BinaryWriter): void;
  private _active;
  private _prompt;
  private _minChars;
  private _maxChars;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2tLlmPostProcessingSummarizationOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2tLlmPostProcessingSummarizationOptions.AsObject>);
  get active(): boolean;
  set active(value: boolean);
  get prompt(): string;
  set prompt(value: string);
  get minChars(): number;
  set minChars(value: number);
  get maxChars(): number;
  set maxChars(value: number);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2tLlmPostProcessingSummarizationOptions.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): S2tLlmPostProcessingSummarizationOptions.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): S2tLlmPostProcessingSummarizationOptions.AsProtobufJSON;
}
export declare namespace S2tLlmPostProcessingSummarizationOptions {
  /**
   * Standard JavaScript object representation for S2tLlmPostProcessingSummarizationOptions
   */
  interface AsObject {
    active: boolean;
    prompt: string;
    minChars: number;
    maxChars: number;
  }
  /**
   * Protobuf JSON representation for S2tLlmPostProcessingSummarizationOptions
   */
  interface AsProtobufJSON {
    active: boolean;
    prompt: string;
    minChars: number;
    maxChars: number;
  }
}
/**
 * Message implementation for ondewo.s2t.S2tLlmPostProcessingSubTaskOptions
 */
export declare class S2tLlmPostProcessingSubTaskOptions implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): S2tLlmPostProcessingSubTaskOptions;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2tLlmPostProcessingSubTaskOptions): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: S2tLlmPostProcessingSubTaskOptions, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: S2tLlmPostProcessingSubTaskOptions, _writer: BinaryWriter): void;
  private _active;
  private _prompt;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2tLlmPostProcessingSubTaskOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2tLlmPostProcessingSubTaskOptions.AsObject>);
  get active(): boolean;
  set active(value: boolean);
  get prompt(): string;
  set prompt(value: string);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2tLlmPostProcessingSubTaskOptions.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): S2tLlmPostProcessingSubTaskOptions.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): S2tLlmPostProcessingSubTaskOptions.AsProtobufJSON;
}
export declare namespace S2tLlmPostProcessingSubTaskOptions {
  /**
   * Standard JavaScript object representation for S2tLlmPostProcessingSubTaskOptions
   */
  interface AsObject {
    active: boolean;
    prompt: string;
  }
  /**
   * Protobuf JSON representation for S2tLlmPostProcessingSubTaskOptions
   */
  interface AsProtobufJSON {
    active: boolean;
    prompt: string;
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
/**
 * Message implementation for ondewo.s2t.ListS2tNormalizationPipelinesRequest
 */
export declare class ListS2tNormalizationPipelinesRequest implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): ListS2tNormalizationPipelinesRequest;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListS2tNormalizationPipelinesRequest): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: ListS2tNormalizationPipelinesRequest, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: ListS2tNormalizationPipelinesRequest, _writer: BinaryWriter): void;
  private _language;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListS2tNormalizationPipelinesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListS2tNormalizationPipelinesRequest.AsObject>);
  get language(): string;
  set language(value: string);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListS2tNormalizationPipelinesRequest.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): ListS2tNormalizationPipelinesRequest.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): ListS2tNormalizationPipelinesRequest.AsProtobufJSON;
}
export declare namespace ListS2tNormalizationPipelinesRequest {
  /**
   * Standard JavaScript object representation for ListS2tNormalizationPipelinesRequest
   */
  interface AsObject {
    language: string;
  }
  /**
   * Protobuf JSON representation for ListS2tNormalizationPipelinesRequest
   */
  interface AsProtobufJSON {
    language: string;
  }
}
/**
 * Message implementation for ondewo.s2t.ListS2tNormalizationPipelinesResponse
 */
export declare class ListS2tNormalizationPipelinesResponse implements GrpcMessage {
  static id: string;
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource): ListS2tNormalizationPipelinesResponse;
  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListS2tNormalizationPipelinesResponse): void;
  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: ListS2tNormalizationPipelinesResponse, _reader: BinaryReader): void;
  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: ListS2tNormalizationPipelinesResponse, _writer: BinaryWriter): void;
  private _s2tNormalizationPipelines;
  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListS2tNormalizationPipelinesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListS2tNormalizationPipelinesResponse.AsObject>);
  get s2tNormalizationPipelines(): string[];
  set s2tNormalizationPipelines(value: string[]);
  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary(): any;
  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListS2tNormalizationPipelinesResponse.AsObject;
  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON(): ListS2tNormalizationPipelinesResponse.AsObject;
  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(options?: ToProtobufJSONOptions): ListS2tNormalizationPipelinesResponse.AsProtobufJSON;
}
export declare namespace ListS2tNormalizationPipelinesResponse {
  /**
   * Standard JavaScript object representation for ListS2tNormalizationPipelinesResponse
   */
  interface AsObject {
    s2tNormalizationPipelines: string[];
  }
  /**
   * Protobuf JSON representation for ListS2tNormalizationPipelinesResponse
   */
  interface AsProtobufJSON {
    s2tNormalizationPipelines: string[];
  }
}
/**
 * Specific GrpcClientSettings for Speech2Text.
 * Use it only if your default settings are not set or the service requires other settings.
 */
export declare const GRPC_SPEECH2_TEXT_CLIENT_SETTINGS: InjectionToken<any>;
/**
 * Service client implementation for ondewo.s2t.Speech2Text
 */
export declare class Speech2TextClient {
  private handler;
  private client;
  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw: {
    /**
     * Unary call: /ondewo.s2t.Speech2Text/TranscribeFile
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.TranscribeFileResponse>>
     */
    transcribeFile: (requestData: TranscribeFileRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<TranscribeFileResponse>>;
    /**
     * Unary call: /ondewo.s2t.Speech2Text/GetS2tPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Speech2TextConfig>>
     */
    getS2tPipeline: (requestData: S2tPipelineId, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<Speech2TextConfig>>;
    /**
     * Unary call: /ondewo.s2t.Speech2Text/CreateS2tPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.S2tPipelineId>>
     */
    createS2tPipeline: (requestData: Speech2TextConfig, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<S2tPipelineId>>;
    /**
     * Unary call: /ondewo.s2t.Speech2Text/DeleteS2tPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    deleteS2tPipeline: (requestData: S2tPipelineId, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf001.Empty>>;
    /**
     * Unary call: /ondewo.s2t.Speech2Text/UpdateS2tPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    updateS2tPipeline: (requestData: Speech2TextConfig, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf001.Empty>>;
    /**
     * Unary call: /ondewo.s2t.Speech2Text/ListS2tPipelines
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListS2tPipelinesResponse>>
     */
    listS2tPipelines: (requestData: ListS2tPipelinesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ListS2tPipelinesResponse>>;
    /**
     * Unary call: /ondewo.s2t.Speech2Text/ListS2tLanguages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListS2tLanguagesResponse>>
     */
    listS2tLanguages: (requestData: ListS2tLanguagesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ListS2tLanguagesResponse>>;
    /**
     * Unary call: /ondewo.s2t.Speech2Text/ListS2tDomains
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListS2tDomainsResponse>>
     */
    listS2tDomains: (requestData: ListS2tDomainsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ListS2tDomainsResponse>>;
    /**
     * Unary call: /ondewo.s2t.Speech2Text/GetServiceInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.S2tGetServiceInfoResponse>>
     */
    getServiceInfo: (requestData: googleProtobuf001.Empty, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<S2tGetServiceInfoResponse>>;
    /**
     * Unary call: /ondewo.s2t.Speech2Text/ListS2tLanguageModels
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListS2tLanguageModelsResponse>>
     */
    listS2tLanguageModels: (requestData: ListS2tLanguageModelsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ListS2tLanguageModelsResponse>>;
    /**
     * Unary call: /ondewo.s2t.Speech2Text/CreateUserLanguageModel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    createUserLanguageModel: (requestData: CreateUserLanguageModelRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf001.Empty>>;
    /**
     * Unary call: /ondewo.s2t.Speech2Text/DeleteUserLanguageModel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    deleteUserLanguageModel: (requestData: DeleteUserLanguageModelRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf001.Empty>>;
    /**
     * Unary call: /ondewo.s2t.Speech2Text/AddDataToUserLanguageModel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    addDataToUserLanguageModel: (requestData: AddDataToUserLanguageModelRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf001.Empty>>;
    /**
     * Unary call: /ondewo.s2t.Speech2Text/TrainUserLanguageModel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    trainUserLanguageModel: (requestData: TrainUserLanguageModelRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf001.Empty>>;
    /**
     * Unary call: /ondewo.s2t.Speech2Text/ListS2tNormalizationPipelines
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListS2tNormalizationPipelinesResponse>>
     */
    listS2tNormalizationPipelines: (requestData: ListS2tNormalizationPipelinesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ListS2tNormalizationPipelinesResponse>>;
  };
  constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
  /**
   * Unary call @/ondewo.s2t.Speech2Text/TranscribeFile
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.TranscribeFileResponse>
   */
  transcribeFile(requestData: TranscribeFileRequest, requestMetadata?: GrpcMetadata): Observable<TranscribeFileResponse>;
  /**
   * Unary call @/ondewo.s2t.Speech2Text/GetS2tPipeline
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Speech2TextConfig>
   */
  getS2tPipeline(requestData: S2tPipelineId, requestMetadata?: GrpcMetadata): Observable<Speech2TextConfig>;
  /**
   * Unary call @/ondewo.s2t.Speech2Text/CreateS2tPipeline
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.S2tPipelineId>
   */
  createS2tPipeline(requestData: Speech2TextConfig, requestMetadata?: GrpcMetadata): Observable<S2tPipelineId>;
  /**
   * Unary call @/ondewo.s2t.Speech2Text/DeleteS2tPipeline
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  deleteS2tPipeline(requestData: S2tPipelineId, requestMetadata?: GrpcMetadata): Observable<googleProtobuf001.Empty>;
  /**
   * Unary call @/ondewo.s2t.Speech2Text/UpdateS2tPipeline
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  updateS2tPipeline(requestData: Speech2TextConfig, requestMetadata?: GrpcMetadata): Observable<googleProtobuf001.Empty>;
  /**
   * Unary call @/ondewo.s2t.Speech2Text/ListS2tPipelines
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListS2tPipelinesResponse>
   */
  listS2tPipelines(requestData: ListS2tPipelinesRequest, requestMetadata?: GrpcMetadata): Observable<ListS2tPipelinesResponse>;
  /**
   * Unary call @/ondewo.s2t.Speech2Text/ListS2tLanguages
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListS2tLanguagesResponse>
   */
  listS2tLanguages(requestData: ListS2tLanguagesRequest, requestMetadata?: GrpcMetadata): Observable<ListS2tLanguagesResponse>;
  /**
   * Unary call @/ondewo.s2t.Speech2Text/ListS2tDomains
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListS2tDomainsResponse>
   */
  listS2tDomains(requestData: ListS2tDomainsRequest, requestMetadata?: GrpcMetadata): Observable<ListS2tDomainsResponse>;
  /**
   * Unary call @/ondewo.s2t.Speech2Text/GetServiceInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.S2tGetServiceInfoResponse>
   */
  getServiceInfo(requestData: googleProtobuf001.Empty, requestMetadata?: GrpcMetadata): Observable<S2tGetServiceInfoResponse>;
  /**
   * Unary call @/ondewo.s2t.Speech2Text/ListS2tLanguageModels
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListS2tLanguageModelsResponse>
   */
  listS2tLanguageModels(requestData: ListS2tLanguageModelsRequest, requestMetadata?: GrpcMetadata): Observable<ListS2tLanguageModelsResponse>;
  /**
   * Unary call @/ondewo.s2t.Speech2Text/CreateUserLanguageModel
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  createUserLanguageModel(requestData: CreateUserLanguageModelRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf001.Empty>;
  /**
   * Unary call @/ondewo.s2t.Speech2Text/DeleteUserLanguageModel
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  deleteUserLanguageModel(requestData: DeleteUserLanguageModelRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf001.Empty>;
  /**
   * Unary call @/ondewo.s2t.Speech2Text/AddDataToUserLanguageModel
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  addDataToUserLanguageModel(requestData: AddDataToUserLanguageModelRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf001.Empty>;
  /**
   * Unary call @/ondewo.s2t.Speech2Text/TrainUserLanguageModel
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  trainUserLanguageModel(requestData: TrainUserLanguageModelRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf001.Empty>;
  /**
   * Unary call @/ondewo.s2t.Speech2Text/ListS2tNormalizationPipelines
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListS2tNormalizationPipelinesResponse>
   */
  listS2tNormalizationPipelines(requestData: ListS2tNormalizationPipelinesRequest, requestMetadata?: GrpcMetadata): Observable<ListS2tNormalizationPipelinesResponse>;
  static ɵfac: i0.ɵɵFactoryDeclaration<Speech2TextClient, [{
    optional: true;
  }, null, null]>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
/**
 * The set of shapes a {@link TokenProvider} is allowed to return for the current
 * access token.
 *
 * - `string` — a ready, synchronous token.
 * - `null` — there is no token right now (the user is unauthenticated). The
 *   request must be sent unchanged, never with an empty `Bearer` header.
 * - `Promise<...>` / `Observable<...>` — an asynchronous source (e.g.
 *   `keycloak.updateToken()` from `keycloak-js`, or `KeycloakService` from
 *   `keycloak-angular`) that resolves to a token or `null`.
 */
export type TokenResult = string | null | Promise<string | null> | Observable<string | null>;
/**
 * Contract the consuming application implements to feed the current Keycloak
 * access token into this library's auth interceptors.
 *
 * SECURITY: this client deliberately does NOT perform any OAuth/OIDC flow
 * itself — no Resource Owner Password Credentials grant, no client secret, no
 * token storage. Acquiring, refreshing and storing the token is the
 * responsibility of a dedicated, browser-safe library (`keycloak-js` /
 * `keycloak-angular`) in the host application. This client only reads the
 * current token and attaches it as a bearer credential to outgoing requests.
 *
 * Implementations should return the freshest token they have. Returning a
 * `Promise`/`Observable` lets the implementation refresh a soon-to-expire token
 * before the request is sent (e.g. `keycloak.updateToken(30)`).
 */
export interface TokenProvider {
  /**
   * Return the current access token, or `null` when the user is not
   * authenticated. May be synchronous or asynchronous.
   */
  getToken(): TokenResult;
}
/**
 * DI token under which the consuming application registers its
 * {@link TokenProvider} implementation.
 *
 * Example:
 *
 * ```ts
 * providers: [
 *   { provide: TOKEN_PROVIDER, useExisting: KeycloakTokenProvider },
 * ]
 * ```
 */
export declare const TOKEN_PROVIDER: InjectionToken<TokenProvider>;
/**
 * Seconds before `expires_at` at which the access token is refreshed (spec `EXPIRY_LEEWAY`). Covers
 * clock skew and the round trip to Keycloak. Identical in every ONDEWO client SDK.
 */
export declare const REFRESH_SKEW_IN_S: number;
/** Floor (seconds) of any background wait, so an `expires_in` of 0 cannot spin a hot loop. */
export declare const MIN_REFRESH_DELAY_IN_S: number;
/**
 * First retry delay (seconds) after a FAILED refresh. Far above {@link MIN_REFRESH_DELAY_IN_S} on
 * purpose: ondewo runs one client per call container, so clients that fail together would otherwise
 * poll a shared realm at 1 Hz, together, for the whole outage.
 */
export declare const REFRESH_RETRY_BASE_DELAY_IN_S: number;
/** Ceiling (seconds) of the failure backoff: a persistent outage is retried at most this often. */
export declare const REFRESH_RETRY_MAX_DELAY_IN_S: number;
/** Exponent cap so `2 ** n` cannot grow without bound; `5 * 2^6 = 320` already exceeds the ceiling. */
export declare const MAX_REFRESH_RETRY_EXPONENT: number;
/** Timeout (seconds) of one whole token-endpoint call. Must stay below {@link REFRESH_SKEW_IN_S}. */
export declare const HTTP_TIMEOUT_IN_S: number;
/** An error body quoted into an error message is truncated to this many characters. */
export declare const MAX_ERROR_BODY_CHARS: number;
/** How a non-empty secret is rendered by every string rendering of a configuration. */
export declare const REDACTED: string;
/** The timing constants of the token session, overridable (shrinkable) by tests. */
export interface KeycloakTimings {
  /** See {@link REFRESH_SKEW_IN_S}. */
  expiryLeewayInS: number;
  /** See {@link MIN_REFRESH_DELAY_IN_S}. */
  minRefreshDelayInS: number;
  /** See {@link REFRESH_RETRY_BASE_DELAY_IN_S}. */
  retryBaseDelayInS: number;
  /** See {@link REFRESH_RETRY_MAX_DELAY_IN_S}. */
  retryMaxDelayInS: number;
  /** See {@link MAX_REFRESH_RETRY_EXPONENT}. */
  maxRetryExponent: number;
  /** See {@link HTTP_TIMEOUT_IN_S}. */
  httpTimeoutInS: number;
  /** See {@link MAX_ERROR_BODY_CHARS}. */
  maxErrorBodyChars: number;
}
/** The production timings: exactly the constants above. */
export declare const DEFAULT_KEYCLOAK_TIMINGS: Readonly<KeycloakTimings>;
/**
 * The one error type of every Keycloak failure: login, refresh, and the lazy read of an expired
 * token. The original error, when there is one, is kept as `cause`. Its message never carries a
 * credential.
 */
export declare class KeycloakAuthenticationError extends Error {
  /**
   * @param message a human-readable description of the authentication failure.
   * @param options `cause`: the underlying error, kept as the standard `Error.cause`.
   */
  constructor(message: string, options?: ErrorOptions);
}
/**
 * Raised by a {@link KeycloakTokenTransport} when the token endpoint could not be REACHED (connection
 * refused, DNS, TLS handshake, timeout). The session reports it as "could not reach the token
 * endpoint"; any other error a transport throws is treated as a defect of the transport.
 */
export declare class KeycloakTransportError extends Error {
  /**
   * @param message what failed.
   * @param options `cause`: the underlying network error, kept as the standard `Error.cause`.
   */
  constructor(message: string, options?: ErrorOptions);
}
/** One token-endpoint request handed to a {@link KeycloakTokenTransport}. */
export interface KeycloakTokenRequest {
  /** `<keycloakUrl>/realms/<realm>/protocol/openid-connect/token`. */
  url: string;
  /** The form fields, to be sent `application/x-www-form-urlencoded`. */
  form: Record<string, string>;
  /** Timeout of the whole call (seconds). */
  timeoutInS: number;
  /** Whether to verify the endpoint's TLS certificate (a browser transport cannot honour `false`). */
  verifySsl: boolean;
}
/** The raw HTTP answer of the token endpoint. */
export interface KeycloakTokenHttpResponse {
  /** HTTP status code. */
  status: number;
  /** The raw response body. */
  body: string;
}
/**
 * POST one form to the token endpoint. Resolves with ANY HTTP answer (the session judges the status),
 * rejects with a {@link KeycloakTransportError} when no answer could be obtained.
 */
export type KeycloakTokenTransport = (request: KeycloakTokenRequest) => Promise<KeycloakTokenHttpResponse>;
/** Log sink; levels as in every ONDEWO SDK (WARNING per failed refresh, INFO on recovery). */
export interface KeycloakLogger {
  /** One line per failed refresh. */
  warn(message: string): void;
  /** One line when refreshing recovers. */
  info(message: string): void;
  /** Diagnostic detail only. */
  debug(message: string): void;
}
/** The default {@link KeycloakLogger}: the browser console. */
export declare const CONSOLE_KEYCLOAK_LOGGER: KeycloakLogger;
/** Timer seam of the background refresher. */
export interface KeycloakScheduler {
  /** Arm `fn` to run in `delayInMs`; returns a handle for {@link clearTimeout}. */
  setTimeout(fn: () => void, delayInMs: number): unknown;
  /** Disarm a handle returned by {@link setTimeout}. */
  clearTimeout(handle: unknown): void;
}
/** The default {@link KeycloakScheduler}: the global timers (looked up per call, so fakes apply). */
export declare const GLOBAL_KEYCLOAK_SCHEDULER: KeycloakScheduler;
/** Options of {@link KeycloakTokenSession.create}. `refreshToken` is deliberately the last field. */
export interface KeycloakTokenSessionOptions {
  /** Keycloak base URL, the part before `/realms/<realm>`; trailing `/` characters are stripped. */
  keycloakUrl: string;
  /** Realm, e.g. `ondewo-ccai-platform`. */
  realm: string;
  /** PUBLIC SDK client id; no client secret exists and none is ever sent. */
  clientId: string;
  /** Technical user of the password grant. */
  username?: string;
  /** Technical-user password. SECRET. */
  password?: string;
  /** Bounds auto-refresh, measured from the initial token acquisition; absent = unbounded. */
  tokenExpirationInS?: number | null;
  /** TLS verification of the token-endpoint call only (default `true`). */
  verifySsl?: boolean;
  /** The HTTP exchange with the token endpoint. */
  transport: KeycloakTokenTransport;
  /** MONOTONIC clock in seconds; defaults to `performance.now() / 1000`. */
  timeFn?: () => number;
  /** [0,1] jitter source of the failure backoff; defaults to `Math.random`. */
  randomFn?: () => number;
  /** Timer seam of the background refresher. */
  scheduler?: KeycloakScheduler;
  /** Log sink; defaults to the console. */
  logger?: KeycloakLogger;
  /** `false` skips the background refresher (test seam); default `true`. */
  startBackgroundRefresh?: boolean;
  /** Overrides of {@link DEFAULT_KEYCLOAK_TIMINGS} (test seam). */
  timings?: Partial<KeycloakTimings>;
  /** A handed-off Keycloak OFFLINE refresh token used instead of the password. SECRET. */
  refreshToken?: string;
}
/** Options of {@link KeycloakTokenSession.getAccessToken}. */
export interface KeycloakAccessTokenOptions {
  /**
   * Refresh even when the token still looks comfortably valid (e.g. after the server answered
   * `UNAUTHENTICATED`). A running backoff and the `tokenExpirationInS` deadline still apply.
   */
  force?: boolean;
}
/**
 * Full-jitter backoff delay (seconds) after `consecutiveFailures` failed refreshes: uniform in
 * `[base, ceiling]`, the ceiling doubling per failure up to the maximum.
 *
 * @param consecutiveFailures how many refreshes failed in a row (values below 1 count as 1).
 * @param randomFn jitter source; its value is clamped to [0, 1].
 * @param timings the timing constants to use.
 * @returns the delay in seconds.
 */
export declare function backoffDelayInS(consecutiveFailures: number, randomFn: () => number, timings?: Readonly<KeycloakTimings>): number;
/**
 * @param value a secret, possibly empty.
 * @returns {@link REDACTED} for a non-empty secret, the empty string otherwise.
 */
export declare function redactSecret(value: string | undefined | null): string;
/**
 * The fields that identify one credential set, in the order the shared-session key hashes them.
 */
export interface KeycloakCredentialFields {
  /** Keycloak base URL. */
  keycloakUrl: string;
  /** Realm. */
  realm: string;
  /** Public client id. */
  clientId: string;
  /** Technical user. */
  username?: string;
  /** Password. */
  password?: string;
  /** Auto-refresh bound. */
  tokenExpirationInS?: number | null;
  /** TLS verification flag. */
  verifySsl?: boolean;
  /** Offline refresh token. */
  refreshToken?: string;
}
/**
 * Key of the shared-session registry: SHA-256 hex of the credential fields joined with NUL, in the
 * order of every ONDEWO SDK. Never an object identity, and it holds no secret substring.
 *
 * @param fields the credential set.
 * @returns 64 hex characters.
 */
export declare function keycloakSessionRegistryKey(fields: KeycloakCredentialFields): string;
/**
 * One Keycloak login and the access token it keeps fresh: the framework-free core of
 * `KeycloakTokenProvider`, behaving exactly like the token provider of every other ONDEWO SDK.
 *
 * - Start-up ({@link create}): ONE refresh grant with a handed-off offline token, or else ONE password
 *   grant. A refused offline token is never answered with a password login.
 * - Lazy path ({@link getAccessToken} / {@link authorizationMetadata}): inside {@link REFRESH_SKEW_IN_S}
 *   of expiry one refresh grant is sent, shared by every concurrent caller; while it fails, the
 *   still-valid token keeps being served and the jittered backoff decides when the next request may
 *   go out. Only an EXPIRED token whose refresh fails raises.
 * - Background: a timer refreshes ahead of expiry; no failure ever ends it, it backs off instead.
 *   It ends on {@link stop} or once `tokenExpirationInS` has elapsed.
 */
export declare class KeycloakTokenSession {
  /** Keycloak base URL without trailing `/`. */
  readonly keycloakUrl: string;
  /** Realm. */
  readonly realm: string;
  /** Public client id. */
  readonly clientId: string;
  /** Technical user. */
  readonly username: string;
  /** Auto-refresh bound in seconds, or `null`. */
  readonly tokenExpirationInS: number | null;
  /** TLS verification flag of the token-endpoint call. */
  readonly verifySsl: boolean;
  /** Password; never rendered. */
  private readonly password;
  /** The offline token handed in at start-up; never rendered. */
  private readonly configuredRefreshToken;
  /** Token endpoint URL. */
  private readonly tokenEndpoint;
  /** HTTP exchange. */
  private readonly transport;
  /** Monotonic clock (seconds). */
  private readonly timeFn;
  /** Backoff jitter. */
  private readonly randomFn;
  /** Timer seam. */
  private readonly scheduler;
  /** Log sink. */
  private readonly logger;
  /** Timing constants. */
  private readonly timings;
  /** The current access token. */
  private currentAccessToken;
  /** The current refresh token (rotated by Keycloak, kept when a response carries none). */
  private currentRefreshToken;
  /** Monotonic second at which the access token lapses. */
  private expiresAt;
  /** Monotonic second after which auto-refresh stops, or `null`. */
  private loginDeadline;
  /** Consecutive failed refreshes; shared by the lazy path and the background refresher. */
  private failures;
  /** No refresh request is sent before this monotonic second (0 = no backoff running). */
  private nextAttemptAt;
  /** The refresh attempt in flight, shared by every caller. */
  private inFlight;
  /** The armed background timer handle. */
  private timer;
  /** Whether a background timer is armed. */
  private timerArmed;
  /** Whether the background refresher has ended. */
  private backgroundStopped;
  /** Whether {@link stop} ran. */
  private stopCalled;
  /**
   * @param options the session options.
   */
  private constructor();
  /**
   * Acquire the first token and start the background refresher.
   *
   * @param options the session options.
   * @returns the started session.
   * @throws KeycloakAuthenticationError when the initial acquisition fails (nothing is retried and
   *   no refresher is started).
   */
  static create(options: KeycloakTokenSessionOptions): Promise<KeycloakTokenSession>;
  /** @returns the current access token as stored, without any refresh decision. */
  get accessToken(): string;
  /** @returns the monotonic second at which the current access token lapses. */
  get accessTokenExpiresAt(): number;
  /** @returns the monotonic second after which auto-refresh stops, or `null`. */
  get autoRefreshDeadline(): number | null;
  /** @returns how many refreshes have failed in a row. */
  get consecutiveFailures(): number;
  /** @returns the monotonic second before which no refresh request is sent (0 = none pending). */
  get nextRefreshAttemptAt(): number;
  /** @returns whether the background refresher is still running. */
  get backgroundRefreshActive(): boolean;
  /** @returns whether {@link stop} was called. */
  get closed(): boolean;
  /**
   * The access token if it may be served WITHOUT a refresh decision that could send a request:
   * comfortably valid, or past the auto-refresh deadline. Lets an interceptor stay synchronous.
   *
   * @returns the token, or `null` when the caller must go through {@link getAccessToken}.
   */
  peekAccessToken(): string | null;
  /**
   * The access token to send right now, refreshing first when it is inside the leeway.
   *
   * @param options `force`: refresh even when the token still looks comfortably valid.
   * @returns the access token.
   * @throws KeycloakAuthenticationError when the token has expired and cannot be refreshed.
   */
  getAccessToken(options?: KeycloakAccessTokenOptions): Promise<string>;
  /**
   * The gRPC metadata entry to attach to an RPC.
   *
   * @returns `["authorization", "Bearer <token>"]`.
   * @throws KeycloakAuthenticationError when the token has expired and cannot be refreshed.
   */
  authorizationMetadata(): Promise<[string, string]>;
  /**
   * Stop the background refresher, interrupting a pending wait (a backoff wait included) so no
   * further request is sent. Idempotent and safe from any state, also from inside a refresh. The lazy
   * path keeps working afterwards.
   */
  stop(): void;
  /** Alias of {@link stop}. */
  close(): void;
  /** @returns the configuration with every non-empty secret rendered as {@link REDACTED}. */
  toJSON(): Record<string, unknown>;
  /** @returns a redacted rendering of the configuration. */
  toString(): string;
  /** P1-P4: one refresh grant with a handed-off token, else one password grant; then the deadline. */
  private acquireInitialToken;
  /**
   * The refresh decision shared by the lazy path and the background refresher (R1-R6). Concurrent
   * callers share one in-flight attempt.
   *
   * @param force skip the "comfortably valid" short-cut.
   * @throws KeycloakAuthenticationError when the token has expired and cannot be refreshed.
   */
  private refreshIfWithinWindow;
  /**
   * Count a failed refresh, arm the backoff from NOW (the moment it is recorded) and warn once.
   *
   * @param error the failure.
   */
  private recordFailure;
  /** Reset the backoff after a successful refresh, with one INFO line if it had been failing. */
  private recordSuccess;
  /** Arm the next background refresh per the loop of every ONDEWO SDK. */
  private scheduleNextBackgroundRefresh;
  /** Disarm the background timer, if armed. */
  private disarmTimer;
  /** One password (ROPC) grant: exactly the five fields of every ONDEWO SDK. */
  private passwordGrant;
  /** One refresh grant: exactly the three fields of every ONDEWO SDK. Never a password. */
  private refreshGrant;
  /**
   * POST one form and return the JSON object it answered with (E1-E4).
   *
   * @param form the form fields.
   * @param action `login` or `refresh`, for the error messages.
   * @returns the parsed JSON object.
   * @throws KeycloakAuthenticationError on every failure; a non-transport error of the transport
   *   itself is passed through for the caller to wrap.
   */
  private postTokenRequest;
  /**
   * Validate a token response completely, then adopt it (S1-S4): a malformed response changes nothing.
   *
   * @param payload the parsed token response.
   * @throws KeycloakAuthenticationError on a missing access token or a non-numeric `expires_in`.
   */
  private storeTokens;
}
/** A counted hold on a shared {@link KeycloakTokenSession}. */
export interface KeycloakTokenSessionLease {
  /** The shared session. */
  readonly session: KeycloakTokenSession;
  /** Give the hold back; the last release stops the session. Idempotent. */
  release(): void;
}
/**
 * Hold the ONE session of a credential set, starting it when none is live: every caller with the
 * same credentials and scope shares one login and one refresher. Concurrent first callers share one
 * start-up; a failed start-up is not cached; a stopped session is never handed out again.
 *
 * @param options the session options.
 * @param scope what the session is shared within (default: the transport), e.g. one Angular
 *   `HttpClient`, so a session never sends through another application's HTTP stack.
 * @returns a lease on the session; release it when done.
 * @throws KeycloakAuthenticationError when the start-up fails.
 */
export declare function acquireKeycloakTokenSession(options: KeycloakTokenSessionOptions, scope?: object): Promise<KeycloakTokenSessionLease>;
/** Options accepted by {@link KeycloakTokenProvider.ensureFreshToken}. */
export interface EnsureFreshTokenOptions {
  /**
   * Renew even when the cached access token still looks valid.
   *
   * Set this after the server has rejected a request with `UNAUTHENTICATED`: the
   * token may have been revoked, or the local clock may be ahead of Keycloak's,
   * in which case the cached expiry cannot be trusted. A running failure backoff
   * still applies, so a forced renewal never hammers an unavailable Keycloak.
   */
  force?: boolean;
}
/**
 * Runtime configuration for {@link KeycloakTokenProvider}.
 *
 * Authentication is performed against the *public* SDK Keycloak client (no
 * `client_secret` is ever sent). Supply **either** a long-lived offline
 * refresh token (`refreshToken`) **or** a username + password pair for a
 * one-time Resource-Owner-Password-Credentials (ROPC) login — the technical
 * user must be 2FA-exempt for the ROPC grant to succeed.
 *
 * `keycloakUrl`, `realm` and `clientId` are all-or-nothing: all three empty
 * means "no Keycloak" (no login, no `authorization` metadata); setting only
 * some of them is rejected.
 */
export interface KeycloakTokenProviderConfig {
  /** Base Keycloak URL, e.g. `https://auth.example.com/auth` (trailing slash tolerated). */
  keycloakUrl: string;
  /** Realm name, e.g. `ondewo-ccai-platform`. */
  realm: string;
  /** Public SDK client id, e.g. `ondewo-nlu-cai-sdk-public` (no `client_secret`). */
  clientId: string;
  /**
   * Deprecated alias of {@link refreshToken}, used only when `refreshToken` is empty.
   *
   * @deprecated use `refreshToken`.
   */
  offlineToken?: string;
  /** Technical-user email / username for the ROPC grant (not needed with a refresh token). */
  username?: string;
  /** Technical-user password for the ROPC grant. Never sent when a refresh token is configured. */
  password?: string;
  /**
   * Optional cap (seconds) on how long the auto-refresh runs after the
   * first login. Once it elapses no refresh is sent any more and the access
   * token is allowed to lapse. Omit to keep refreshing until the offline
   * session itself expires.
   */
  tokenExpirationInS?: number;
  /**
   * Whether to verify the Keycloak server's TLS certificate on the
   * token-endpoint call. Defaults to `true` (secure).
   *
   * NO-OP IN THIS ANGULAR/BROWSER CLIENT. The token request is made with
   * Angular's `HttpClient` (an XHR/fetch call), and in a browser the TLS
   * handshake is owned by the user agent — there is no `https.Agent`, undici
   * dispatcher, or `rejectUnauthorized` hook that app code can reach. The value
   * is accepted for cross-SDK config parity (it is part of the shared-login key)
   * but has no effect on the outgoing request here. For a self-signed
   * Keycloak/Envoy endpoint, trust the certificate at the browser/OS level.
   */
  keycloakVerifySsl?: boolean;
  /**
   * Optional [0,1] random source for the failure-backoff jitter; defaults to
   * `Math.random`. Tests inject a constant to make the retry delay exact.
   */
  randomFraction?: () => number;
  /**
   * Optional log sink for the refresh WARNING / recovery INFO lines; defaults to
   * the console. No credential ever reaches it.
   */
  logger?: KeycloakLogger;
  /**
   * A handed-off Keycloak OFFLINE refresh token. When set, start-up is ONE
   * `refresh_token` grant with it and no password grant is ever sent, not even
   * as a fallback when the token is refused. Takes precedence over
   * `username` / `password`.
   */
  refreshToken?: string;
}
/**
 * DI token under which the consuming application supplies the
 * {@link KeycloakTokenProviderConfig} for {@link KeycloakTokenProvider}.
 *
 * Example:
 *
 * ```ts
 * providers: [
 *   {
 *     provide: KEYCLOAK_TOKEN_PROVIDER_CONFIG,
 *     useValue: {
 *       keycloakUrl: "https://auth.example.com/auth",
 *       realm: "ondewo-ccai-platform",
 *       clientId: "ondewo-nlu-cai-sdk-public",
 *       refreshToken: "<offline token>", // or: username + password
 *     } satisfies KeycloakTokenProviderConfig,
 *   },
 *   provideOndewoS2tAuth(KeycloakTokenProvider),
 * ]
 * ```
 */
export declare const KEYCLOAK_TOKEN_PROVIDER_CONFIG: InjectionToken<KeycloakTokenProviderConfig>;
/**
 * Concrete, ready-to-use {@link TokenProvider} that logs in once against the
 * public Keycloak SDK client and keeps the access token fresh, behaving exactly
 * like the token provider of every other ONDEWO SDK (see {@link KeycloakTokenSession}):
 *
 * 1. **Start-up once** — ONE `refresh_token` grant with a configured
 *    `refreshToken`, or else ONE `grant_type=password` login with
 *    `scope=offline_access`. A refused refresh token is never answered with a
 *    password login.
 * 2. **Refresh ahead of expiry** — a background timer refreshes
 *    {@link REFRESH_SKEW_IN_S} before the token lapses; a failed refresh is
 *    retried with a jittered backoff (5 s doubling to 300 s) and never ends the
 *    loop. The optional `tokenExpirationInS` bounds it.
 * 3. **Serve the current token** — {@link getToken} answers synchronously while
 *    the token is comfortably valid; inside the leeway it returns a promise that
 *    runs one shared refresh, and keeps serving the still-valid token while that
 *    refresh fails. Only an expired token that cannot be refreshed rejects, with
 *    a {@link KeycloakAuthenticationError}.
 *
 * Providers with the same credentials on the same `HttpClient` share one login.
 *
 * Register it through `provideOndewoS2tAuth` after supplying a
 * {@link KEYCLOAK_TOKEN_PROVIDER_CONFIG}. The first login is kicked off on
 * construction; call {@link whenReady} to await it explicitly (e.g. in an
 * `APP_INITIALIZER`).
 */
export declare class KeycloakTokenProvider implements TokenProvider, OnDestroy {
  /** Angular HTTP client used for the token-endpoint calls (and the scope of the shared login). */
  private readonly http;
  /**
   * The resolved runtime configuration, or `null` until {@link configure} supplies
   * one. Injected optionally so an application that only learns its credentials at
   * runtime (e.g. an embedded widget reading them from its URL) can register the
   * provider at bootstrap and configure it later.
   */
  private config;
  /**
   * Whether TLS-certificate verification is requested for the token-endpoint
   * call. Defaults to `true`. A NO-OP in this browser client (the browser owns the
   * TLS handshake). See {@link KeycloakTokenProviderConfig.keycloakVerifySsl}.
   */
  private verifySsl;
  /** The started session, or `null` before the first login / without Keycloak. */
  private session;
  /** This provider's hold on the shared session, released on destroy / re-configure. */
  private lease;
  /** The start-up in flight, or `null`. */
  private starting;
  /** Bumped by every start-up, so a superseded start-up drops its session. */
  private generation;
  /** Whether {@link ngOnDestroy} has run. */
  private destroyed;
  /** The deprecated {@link onRefreshError} callback, or `null`. */
  private refreshErrorHandler;
  /** The listener set this provider is registered in for its current login, or `null`. */
  private listening;
  /**
   * Promise settled by the *first* login attempt — the one started by the constructor when a
   * config was injected, otherwise the one started by the first {@link configure} call. It
   * resolves when that login succeeds and rejects when it fails; later attempts leave it as-is
   * (a settled promise cannot be re-settled), so callers tracking a re-{@link configure} must
   * await the promise `configure()` returns rather than {@link whenReady}.
   */
  private readonly ready;
  /** Settles {@link ready} on the first successful login. */
  private resolveReady;
  /** Settles {@link ready} when the first login fails. */
  private rejectReady;
  /**
   * The token-endpoint exchange over Angular's `HttpClient`: the raw body is kept as text so the
   * session can judge the status and parse the JSON itself; a status-0 answer, a timeout or any
   * other failure to get an answer becomes a {@link KeycloakTransportError}.
   *
   * @param request the token request.
   * @returns the HTTP answer.
   */
  private readonly transport;
  /**
   * Build the provider and kick off the first login in the background.
   *
   * No network call is awaited here; {@link getToken} returns `null` until the
   * login resolves. Await {@link whenReady} to block until the first token is
   * available.
   */
  constructor();
  /**
   * Supply (or replace) the runtime configuration and log in with it.
   *
   * This is the entry point for credentials that are only known after the
   * application has bootstrapped — an embedded widget that reads a technical
   * user and secret from its own URL, for example. The previous login is
   * released (and stopped when nothing else shares it) before the new one runs,
   * so a provider can be re-pointed at a different technical user without being
   * re-created.
   *
   * When this is the provider's first login attempt it also settles {@link whenReady}; a later
   * re-configure does not, so track those through the promise returned here.
   *
   * @param config the configuration to adopt, replacing any earlier one.
   * @returns a promise that resolves once the login with `config` has completed.
   * @throws KeycloakAuthenticationError when the configuration is invalid or the
   *   login fails (the provider is left unauthenticated; {@link getToken} returns `null`).
   */
  configure(config: KeycloakTokenProviderConfig): Promise<void>;
  /**
   * Return an access token that is safe to send right now, refreshing first when
   * the cached one is within {@link REFRESH_SKEW_IN_S} of lapsing.
   *
   * Concurrent calls share a single refresh, so a burst of requests arriving on
   * an expiring token issues one grant rather than one per request. When the
   * provider holds no session yet (the first login failed), the start-up is run
   * again — with the refresh token when one is configured.
   *
   * @param options renewal options; `force` renews even when the cached token
   *   still looks valid.
   * @returns the usable access token, or `null` when the provider has no
   *   Keycloak config (nothing to renew with).
   * @throws KeycloakAuthenticationError when the token has expired and cannot be
   *   refreshed, or the repeated start-up fails.
   */
  ensureFreshToken(options?: EnsureFreshTokenOptions): Promise<string | null>;
  /**
   * Return the current access token for the auth interceptors.
   *
   * @returns the access token synchronously while it is comfortably valid; a
   *   promise running the shared refresh when it is inside the leeway (rejecting
   *   with a {@link KeycloakAuthenticationError} only when the token has expired
   *   and cannot be refreshed); while the first login is still in flight, a
   *   promise that waits for it and yields its token (`null` when it fails), so
   *   a request issued right after bootstrap is not sent unauthenticated; `null`
   *   without a Keycloak config or after a failed first login.
   */
  getToken(): TokenResult;
  /**
   * The resolved TLS-verification setting from
   * {@link KeycloakTokenProviderConfig.keycloakVerifySsl} (defaults to `true`).
   * A NO-OP in this browser client.
   *
   * @returns `true` when TLS verification is requested (the default), `false`
   *   when the config explicitly opted out (still inert here).
   */
  get keycloakVerifySsl(): boolean;
  /**
   * Await the first login so callers can guarantee a token is present before
   * issuing requests (e.g. from an `APP_INITIALIZER`).
   *
   * @returns a promise that resolves once the first access token is stored, or
   *   rejects with the {@link KeycloakAuthenticationError} from a failed login.
   */
  whenReady(): Promise<void>;
  /**
   * Release this provider's hold on the shared login; the background refresh stops once nothing
   * else shares it. Invoked automatically when the root injector is destroyed. The token stays
   * readable (and is still refreshed on demand) afterwards.
   */
  ngOnDestroy(): void;
  /** @returns the configuration with every non-empty secret rendered as `***REDACTED***`. */
  toJSON(): Record<string, unknown>;
  /** @returns a redacted rendering of the configuration. */
  toString(): string;
  /**
   * Log in and resolve once an access token is held; re-runs a failed start-up.
   *
   * @deprecated the first login now starts on construction (or on {@link configure}); await
   *   {@link whenReady} or {@link ensureFreshToken} instead.
   * @returns a promise that resolves once an access token is held.
   * @throws KeycloakAuthenticationError when no configuration was supplied or the login fails.
   */
  login(): Promise<void>;
  /**
   * Release this provider's hold on the shared login (see {@link ngOnDestroy}).
   *
   * @deprecated use {@link ngOnDestroy}; kept so existing callers keep compiling.
   */
  stop(): void;
  /**
   * Register a callback for failed refreshes: it receives a {@link KeycloakAuthenticationError}
   * carrying the WARNING line of every refresh that fails on this provider's login (shared logins
   * included). Replaces any earlier callback; the refresh keeps retrying with its backoff.
   *
   * @deprecated prefer {@link KeycloakTokenProviderConfig.logger}.
   * @param handler the callback.
   */
  onRefreshError(handler: (error: unknown) => void): void;
  /** Give the shared session back, if held. */
  private releaseLease;
  /**
   * Run (or re-run) the start-up for a caller of a deprecated explicit-login entry point.
   *
   * @returns a promise that resolves once an access token is held (immediately without Keycloak).
   * @throws KeycloakAuthenticationError when no configuration was supplied or the login fails.
   */
  private loginOnRequest;
  /**
   * Adopt `config`, drop the previous session and start (or join) the session of `config`.
   *
   * @param config the configuration to adopt.
   * @returns a promise that resolves once the session is started (immediately without Keycloak).
   */
  private start;
  /**
   * Validate `config` and hold the shared session of its credentials.
   *
   * @param config the configuration.
   * @param generation the start-up generation this call belongs to.
   * @returns a promise that resolves once the session is held (or no Keycloak is configured).
   */
  private startSession;
  /**
   * Wrap `logger` so every refresh WARNING also reaches the {@link onRefreshError} callbacks of the
   * providers sharing the login.
   *
   * @param logger the configured log sink.
   * @param listeners the providers sharing the login.
   * @returns the wrapping log sink.
   */
  private notifyingLogger;
  static ɵfac: i0.ɵɵFactoryDeclaration<KeycloakTokenProvider, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
/**
 * The HTTP / gRPC header under which the bearer credential is attached.
 *
 * Written in the canonical `Authorization` casing (capital `A`) from the HTTP
 * spec. Header names are case-insensitive, so the gRPC-web / HTTP/2 transport
 * may lower-case it on the wire — but the source uses the canonical form.
 */
export declare const AUTHORIZATION_HEADER: string;
/** The credential scheme prefix prepended to the raw access token. */
export declare const BEARER_PREFIX: string;
/**
 * Normalize the value returned by a `TokenProvider.getToken()` call — which may
 * be a `string`, `null`, a `Promise` or an `Observable` — into a single
 * `Observable<string | null>` that emits exactly once.
 *
 * A non-empty token is returned trimmed; `null`, `undefined`, an empty string
 * and a whitespace-only string are all collapsed to `null` so callers have a
 * single "no usable token" signal and never build an empty `Bearer` header.
 *
 * @param result the raw value returned by `TokenProvider.getToken()`.
 * @returns an observable emitting the usable token, or `null` when absent.
 */
export declare function resolveToken(result: TokenResult): Observable<string | null>;
/**
 * Build the `Authorization` header value for a resolved token, or `null` when
 * the token is absent.
 *
 * @param token a usable token, or `null`.
 * @returns the `"Bearer <token>"` string, or `null` when there is no token.
 */
export declare function buildBearerValue(token: string | null): string | null;
/**
 * Convenience wrapper: emit the ready-to-use `Authorization` header value, or
 * `null` when no token is available.
 *
 * @param result the raw value returned by `TokenProvider.getToken()`.
 * @returns an observable emitting the bearer header value, or `null`.
 */
export declare function resolveBearerValue(result: TokenResult): Observable<string | null>;
/**
 * Functional Angular `HttpInterceptor` that attaches the current Keycloak access
 * token as an `Authorization: Bearer <token>` header to outgoing HTTP requests.
 *
 * Behaviour:
 * - token present  → a cloned request carrying the bearer header is forwarded.
 * - token absent / empty → the original request is forwarded untouched (no empty
 *   `Bearer` header is ever sent).
 * - token source is async (Promise/Observable) → resolved before the request is
 *   sent.
 * - an existing `Authorization` header on the request is left untouched, so a
 *   caller that already set credentials explicitly wins.
 *
 * Register it in the application's HTTP pipeline:
 *
 * ```ts
 * provideHttpClient(withInterceptors([authHttpInterceptor]))
 * ```
 *
 * Errors raised by the `TokenProvider` propagate to the caller (the request is
 * not sent) so an authentication failure surfaces rather than silently issuing
 * an unauthenticated request.
 *
 * @param req the outgoing HTTP request.
 * @param next the next handler in the interceptor chain.
 * @returns the stream of HTTP events for the (possibly authorized) request.
 */
export declare function authHttpInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>>;
/**
 * `@ngx-grpc` interceptor that attaches the current Keycloak access token as an
 * `authorization: Bearer <token>` entry on the gRPC-web request metadata. This
 * is the gRPC-web counterpart of {@link authHttpInterceptor} and matches the
 * `@ngx-grpc` client style used by every generated `*.pbsc.ts` service client in
 * this library.
 *
 * Behaviour mirrors the HTTP interceptor:
 * - token present → the bearer credential is set on `requestMetadata`.
 * - token absent / empty → the request metadata is left untouched (no empty
 *   `Bearer` value is ever attached).
 * - token source is async (Promise/Observable) → resolved before the request is
 *   handed to the next handler.
 * - an `authorization` entry already present on the request metadata is left
 *   untouched, so an explicitly-set credential wins.
 *
 * Register it via the standard `@ngx-grpc` multi-provider:
 *
 * ```ts
 * providers: [
 *   { provide: GRPC_INTERCEPTORS, useClass: AuthGrpcInterceptor, multi: true },
 * ]
 * ```
 */
export declare class AuthGrpcInterceptor implements GrpcInterceptor {
  private readonly tokenProvider;
  constructor(tokenProvider: TokenProvider);
  /**
   * Attach the bearer credential (when available) to the request metadata, then
   * delegate to the next handler in the chain.
   *
   * @param request the intercepted gRPC request.
   * @param next the next handler to pass the request through.
   * @returns the stream of gRPC events for the (possibly authorized) request.
   */
  intercept<Q extends GrpcMessage, S extends GrpcMessage>(request: GrpcRequest<Q, S>, next: GrpcHandler): Observable<GrpcEvent<S>>;
  static ɵfac: i0.ɵɵFactoryDeclaration<AuthGrpcInterceptor, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
/**
 * Wire a consuming application's {@link TokenProvider} implementation into this
 * library and register the `@ngx-grpc` {@link AuthGrpcInterceptor} that uses it.
 *
 * This covers the gRPC-web side. For HTTP requests, additionally register the
 * functional `authHttpInterceptor`:
 *
 * ```ts
 * provideHttpClient(withInterceptors([authHttpInterceptor]))
 * ```
 *
 * Usage in an application's `providers` (standalone bootstrap or `AppModule`):
 *
 * ```ts
 * import { provideOndewoS2tAuth } from "@ondewo/s2t-client-angular";
 *
 * bootstrapApplication(AppComponent, {
 *   providers: [
 *     provideOndewoS2tAuth(KeycloakTokenProvider),
 *     provideHttpClient(withInterceptors([authHttpInterceptor])),
 *   ],
 * });
 * ```
 *
 * @param tokenProvider the application's `TokenProvider` class (e.g. one that
 *   wraps `keycloak-js` / `keycloak-angular`).
 * @returns environment providers binding the token provider and the gRPC
 *   interceptor.
 */
export declare function provideOndewoS2tAuth(tokenProvider: Type<TokenProvider>): EnvironmentProviders;
/**
 * Builds the gRPC-web endpoint URL (`host` setting of `@ngx-grpc/grpc-web-client`) from the
 * same `host` / `port` / `useSecureChannel` fields every ONDEWO SDK takes.
 *
 * In a browser the TLS handshake belongs to the user agent: it verifies the server against
 * its own (OS / browser) trust store and presents a client certificate only from the
 * browser's certificate store. Application code can neither add a CA nor attach a client
 * identity, and a private key must never be shipped to a browser. The certificate fields the
 * other SDKs accept (`grpcCert`, `grpcClientCert`, `grpcClientKey`) are therefore refused
 * here instead of being silently dropped.
 */
/** Connection settings for a gRPC-web endpoint (an Envoy / gRPC-web proxy in front of the ONDEWO server). */
export interface GrpcWebEndpointConfig {
  /**
   * Host name or IP address (`nlu.example.com`, `10.0.0.5`, `::1`, `[::1]`), or a complete base
   * URL with scheme (`https://nlu.example.com:8443/grpc`), which is then used as given.
   */
  host: string;
  /** Port; omit it for the scheme's default port. Must be omitted when `host` is a URL. */
  port?: number | string;
  /** `true` (default): `https://`. `false`: plain `http://`, logged as a warning -- never in production. */
  useSecureChannel?: boolean;
}
/**
 * Certificate / key fields of the other ONDEWO SDKs' configs (camelCase and snake_case) that a
 * browser cannot use. A non-empty value in any of them makes {@link buildGrpcWebHost} throw.
 */
export declare const BROWSER_UNSUPPORTED_TLS_FIELDS: readonly string[];
/** Raised for an unusable {@link GrpcWebEndpointConfig}. The message names fields, never their values. */
export declare class GrpcWebEndpointError extends Error {
  /**
   * @param message a description of the problem that names the offending field.
   */
  constructor(message: string);
}
/**
 * Return the gRPC-web base URL for `config`: `https://host:port` by default, `http://host:port`
 * when `useSecureChannel` is `false` (with a warning naming `host:port`). A bare IPv6 literal is
 * bracketed (`https://[::1]:8443`); a bracketed host or a host that already carries a scheme is
 * left alone.
 *
 * ```ts
 * GrpcWebClientModule.forRoot({ settings: { host: buildGrpcWebHost({ host: "nlu.example.com", port: 443 }) } })
 * ```
 *
 * @param config the endpoint settings.
 * @returns the base URL to pass as the gRPC-web client's `host` setting.
 * @throws GrpcWebEndpointError when a certificate / key field is set, the host is empty or
 *   carries a port, the port is invalid, or an `http://` URL is combined with
 *   `useSecureChannel: true`.
 */
export declare function buildGrpcWebHost(config: GrpcWebEndpointConfig): string;