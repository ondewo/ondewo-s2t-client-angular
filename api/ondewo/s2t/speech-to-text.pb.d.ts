import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare enum CTCDecoding {
    DEFAULT = 0,
    GREEDY = 1,
    BEAM_SEARCH_WITH_LM = 2
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
    private _s2tPipelineId?;
    private _audioChunk?;
    private _ctcDecoding?;
    private _languageModelName?;
    private _spellingCorrection?;
    private _disableNormalization?;
    private _endOfStream?;
    private _returnStartOfSpeech?;
    private _returnAudio?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscribeStreamRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<TranscribeStreamRequest.AsObject>);
    get s2tPipelineId(): string | undefined;
    set s2tPipelineId(value: string | undefined);
    get audioChunk(): Uint8Array | undefined;
    set audioChunk(value: Uint8Array | undefined);
    get ctcDecoding(): CTCDecoding | undefined;
    set ctcDecoding(value: CTCDecoding | undefined);
    get languageModelName(): string | undefined;
    set languageModelName(value: string | undefined);
    get spellingCorrection(): boolean | undefined;
    set spellingCorrection(value: boolean | undefined);
    get disableNormalization(): boolean | undefined;
    set disableNormalization(value: boolean | undefined);
    get endOfStream(): boolean | undefined;
    set endOfStream(value: boolean | undefined);
    get returnStartOfSpeech(): boolean | undefined;
    set returnStartOfSpeech(value: boolean | undefined);
    get returnAudio(): boolean | undefined;
    set returnAudio(value: boolean | undefined);
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
export declare module TranscribeStreamRequest {
    /**
     * Standard JavaScript object representation for TranscribeStreamRequest
     */
    interface AsObject {
        s2tPipelineId?: string;
        audioChunk?: Uint8Array;
        ctcDecoding?: CTCDecoding;
        languageModelName?: string;
        spellingCorrection?: boolean;
        disableNormalization?: boolean;
        endOfStream?: boolean;
        returnStartOfSpeech?: boolean;
        returnAudio?: boolean;
    }
    /**
     * Protobuf JSON representation for TranscribeStreamRequest
     */
    interface AsProtobufJSON {
        s2tPipelineId?: string;
        audioChunk?: string;
        ctcDecoding?: string;
        languageModelName?: string;
        spellingCorrection?: boolean;
        disableNormalization?: boolean;
        endOfStream?: boolean;
        returnStartOfSpeech?: boolean;
        returnAudio?: boolean;
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
    private _transcription?;
    private _time?;
    private _final?;
    private _returnAudio?;
    private _audio?;
    private _utteranceStart?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscribeStreamResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<TranscribeStreamResponse.AsObject>);
    get transcription(): string | undefined;
    set transcription(value: string | undefined);
    get time(): number | undefined;
    set time(value: number | undefined);
    get final(): boolean | undefined;
    set final(value: boolean | undefined);
    get returnAudio(): boolean | undefined;
    set returnAudio(value: boolean | undefined);
    get audio(): Uint8Array | undefined;
    set audio(value: Uint8Array | undefined);
    get utteranceStart(): boolean | undefined;
    set utteranceStart(value: boolean | undefined);
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
export declare module TranscribeStreamResponse {
    /**
     * Standard JavaScript object representation for TranscribeStreamResponse
     */
    interface AsObject {
        transcription?: string;
        time?: number;
        final?: boolean;
        returnAudio?: boolean;
        audio?: Uint8Array;
        utteranceStart?: boolean;
    }
    /**
     * Protobuf JSON representation for TranscribeStreamResponse
     */
    interface AsProtobufJSON {
        transcription?: string;
        time?: number;
        final?: boolean;
        returnAudio?: boolean;
        audio?: string;
        utteranceStart?: boolean;
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
    private _s2tPipelineId?;
    private _audioFile?;
    private _ctcDecoding?;
    private _languageModelName?;
    private _spellingCorrection?;
    private _disableNormalization?;
    private _includeTiming?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscribeFileRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<TranscribeFileRequest.AsObject>);
    get s2tPipelineId(): string | undefined;
    set s2tPipelineId(value: string | undefined);
    get audioFile(): Uint8Array | undefined;
    set audioFile(value: Uint8Array | undefined);
    get ctcDecoding(): CTCDecoding | undefined;
    set ctcDecoding(value: CTCDecoding | undefined);
    get languageModelName(): string | undefined;
    set languageModelName(value: string | undefined);
    get spellingCorrection(): boolean | undefined;
    set spellingCorrection(value: boolean | undefined);
    get disableNormalization(): boolean | undefined;
    set disableNormalization(value: boolean | undefined);
    get includeTiming(): boolean | undefined;
    set includeTiming(value: boolean | undefined);
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
export declare module TranscribeFileRequest {
    /**
     * Standard JavaScript object representation for TranscribeFileRequest
     */
    interface AsObject {
        s2tPipelineId?: string;
        audioFile?: Uint8Array;
        ctcDecoding?: CTCDecoding;
        languageModelName?: string;
        spellingCorrection?: boolean;
        disableNormalization?: boolean;
        includeTiming?: boolean;
    }
    /**
     * Protobuf JSON representation for TranscribeFileRequest
     */
    interface AsProtobufJSON {
        s2tPipelineId?: string;
        audioFile?: string;
        ctcDecoding?: string;
        languageModelName?: string;
        spellingCorrection?: boolean;
        disableNormalization?: boolean;
        includeTiming?: boolean;
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
    private _transcription?;
    private _time?;
    private _wordTiming?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscribeFileResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<TranscribeFileResponse.AsObject>);
    get transcription(): string | undefined;
    set transcription(value: string | undefined);
    get time(): number | undefined;
    set time(value: number | undefined);
    get wordTiming(): WordTiming[] | undefined;
    set wordTiming(value: WordTiming[] | undefined);
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
export declare module TranscribeFileResponse {
    /**
     * Standard JavaScript object representation for TranscribeFileResponse
     */
    interface AsObject {
        transcription?: string;
        time?: number;
        wordTiming?: WordTiming.AsObject[];
    }
    /**
     * Protobuf JSON representation for TranscribeFileResponse
     */
    interface AsProtobufJSON {
        transcription?: string;
        time?: number;
        wordTiming?: WordTiming.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.s2t.WordTiming
 */
export declare class WordTiming implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): WordTiming;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: WordTiming): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: WordTiming, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: WordTiming, _writer: BinaryWriter): void;
    private _word?;
    private _begin?;
    private _end?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of WordTiming to deeply clone from
     */
    constructor(_value?: RecursivePartial<WordTiming.AsObject>);
    get word(): string | undefined;
    set word(value: string | undefined);
    get begin(): number | undefined;
    set begin(value: number | undefined);
    get end(): number | undefined;
    set end(value: number | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): WordTiming.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): WordTiming.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): WordTiming.AsProtobufJSON;
}
export declare module WordTiming {
    /**
     * Standard JavaScript object representation for WordTiming
     */
    interface AsObject {
        word?: string;
        begin?: number;
        end?: number;
    }
    /**
     * Protobuf JSON representation for WordTiming
     */
    interface AsProtobufJSON {
        word?: string;
        begin?: number;
        end?: number;
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
    private _id?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tPipelineId to deeply clone from
     */
    constructor(_value?: RecursivePartial<S2tPipelineId.AsObject>);
    get id(): string | undefined;
    set id(value: string | undefined);
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
export declare module S2tPipelineId {
    /**
     * Standard JavaScript object representation for S2tPipelineId
     */
    interface AsObject {
        id?: string;
    }
    /**
     * Protobuf JSON representation for S2tPipelineId
     */
    interface AsProtobufJSON {
        id?: string;
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
    private _languages?;
    private _pipelineOwners?;
    private _domains?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tPipelinesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListS2tPipelinesRequest.AsObject>);
    get languages(): string[] | undefined;
    set languages(value: string[] | undefined);
    get pipelineOwners(): string[] | undefined;
    set pipelineOwners(value: string[] | undefined);
    get domains(): string[] | undefined;
    set domains(value: string[] | undefined);
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
export declare module ListS2tPipelinesRequest {
    /**
     * Standard JavaScript object representation for ListS2tPipelinesRequest
     */
    interface AsObject {
        languages?: string[];
        pipelineOwners?: string[];
        domains?: string[];
    }
    /**
     * Protobuf JSON representation for ListS2tPipelinesRequest
     */
    interface AsProtobufJSON {
        languages?: string[];
        pipelineOwners?: string[];
        domains?: string[];
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
export declare module ListS2tPipelinesResponse {
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
        pipelineConfigs?: Speech2TextConfig.AsProtobufJSON[] | null;
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
    private _domains?;
    private _pipelineOwners?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tLanguagesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListS2tLanguagesRequest.AsObject>);
    get domains(): string[] | undefined;
    set domains(value: string[] | undefined);
    get pipelineOwners(): string[] | undefined;
    set pipelineOwners(value: string[] | undefined);
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
export declare module ListS2tLanguagesRequest {
    /**
     * Standard JavaScript object representation for ListS2tLanguagesRequest
     */
    interface AsObject {
        domains?: string[];
        pipelineOwners?: string[];
    }
    /**
     * Protobuf JSON representation for ListS2tLanguagesRequest
     */
    interface AsProtobufJSON {
        domains?: string[];
        pipelineOwners?: string[];
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
    private _languages?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tLanguagesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListS2tLanguagesResponse.AsObject>);
    get languages(): string[] | undefined;
    set languages(value: string[] | undefined);
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
export declare module ListS2tLanguagesResponse {
    /**
     * Standard JavaScript object representation for ListS2tLanguagesResponse
     */
    interface AsObject {
        languages?: string[];
    }
    /**
     * Protobuf JSON representation for ListS2tLanguagesResponse
     */
    interface AsProtobufJSON {
        languages?: string[];
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
    private _languages?;
    private _pipelineOwners?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tDomainsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListS2tDomainsRequest.AsObject>);
    get languages(): string[] | undefined;
    set languages(value: string[] | undefined);
    get pipelineOwners(): string[] | undefined;
    set pipelineOwners(value: string[] | undefined);
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
export declare module ListS2tDomainsRequest {
    /**
     * Standard JavaScript object representation for ListS2tDomainsRequest
     */
    interface AsObject {
        languages?: string[];
        pipelineOwners?: string[];
    }
    /**
     * Protobuf JSON representation for ListS2tDomainsRequest
     */
    interface AsProtobufJSON {
        languages?: string[];
        pipelineOwners?: string[];
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
    private _domains?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tDomainsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListS2tDomainsResponse.AsObject>);
    get domains(): string[] | undefined;
    set domains(value: string[] | undefined);
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
export declare module ListS2tDomainsResponse {
    /**
     * Standard JavaScript object representation for ListS2tDomainsResponse
     */
    interface AsObject {
        domains?: string[];
    }
    /**
     * Protobuf JSON representation for ListS2tDomainsResponse
     */
    interface AsProtobufJSON {
        domains?: string[];
    }
}
/**
 * Message implementation for ondewo.s2t.GetServiceInfoResponse
 */
export declare class GetServiceInfoResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetServiceInfoResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetServiceInfoResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetServiceInfoResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetServiceInfoResponse, _writer: BinaryWriter): void;
    private _version?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetServiceInfoResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetServiceInfoResponse.AsObject>);
    get version(): string | undefined;
    set version(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetServiceInfoResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetServiceInfoResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetServiceInfoResponse.AsProtobufJSON;
}
export declare module GetServiceInfoResponse {
    /**
     * Standard JavaScript object representation for GetServiceInfoResponse
     */
    interface AsObject {
        version?: string;
    }
    /**
     * Protobuf JSON representation for GetServiceInfoResponse
     */
    interface AsProtobufJSON {
        version?: string;
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
    private _id?;
    private _description?;
    private _active?;
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
export declare module Speech2TextConfig {
    /**
     * Standard JavaScript object representation for Speech2TextConfig
     */
    interface AsObject {
        id?: string;
        description?: Description.AsObject;
        active?: boolean;
        inference?: Inference.AsObject;
        streamingServer?: StreamingServer.AsObject;
        voiceActivityDetection?: VoiceActivityDetection.AsObject;
        postProcessing?: PostProcessing.AsObject;
        logging?: Logging.AsObject;
    }
    /**
     * Protobuf JSON representation for Speech2TextConfig
     */
    interface AsProtobufJSON {
        id?: string;
        description?: Description.AsProtobufJSON | null;
        active?: boolean;
        inference?: Inference.AsProtobufJSON | null;
        streamingServer?: StreamingServer.AsProtobufJSON | null;
        voiceActivityDetection?: VoiceActivityDetection.AsProtobufJSON | null;
        postProcessing?: PostProcessing.AsProtobufJSON | null;
        logging?: Logging.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.s2t.Description
 */
export declare class Description implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Description;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Description): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Description, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Description, _writer: BinaryWriter): void;
    private _language?;
    private _pipelineOwner?;
    private _domain?;
    private _comments?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Description to deeply clone from
     */
    constructor(_value?: RecursivePartial<Description.AsObject>);
    get language(): string | undefined;
    set language(value: string | undefined);
    get pipelineOwner(): string | undefined;
    set pipelineOwner(value: string | undefined);
    get domain(): string | undefined;
    set domain(value: string | undefined);
    get comments(): string | undefined;
    set comments(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Description.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Description.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Description.AsProtobufJSON;
}
export declare module Description {
    /**
     * Standard JavaScript object representation for Description
     */
    interface AsObject {
        language?: string;
        pipelineOwner?: string;
        domain?: string;
        comments?: string;
    }
    /**
     * Protobuf JSON representation for Description
     */
    interface AsProtobufJSON {
        language?: string;
        pipelineOwner?: string;
        domain?: string;
        comments?: string;
    }
}
/**
 * Message implementation for ondewo.s2t.Inference
 */
export declare class Inference implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Inference;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Inference): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Inference, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Inference, _writer: BinaryWriter): void;
    private _ctcAcousticModels?;
    private _languageModels?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Inference to deeply clone from
     */
    constructor(_value?: RecursivePartial<Inference.AsObject>);
    get ctcAcousticModels(): CtcAcousticModels | undefined;
    set ctcAcousticModels(value: CtcAcousticModels | undefined);
    get languageModels(): LanguageModels | undefined;
    set languageModels(value: LanguageModels | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Inference.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Inference.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Inference.AsProtobufJSON;
}
export declare module Inference {
    /**
     * Standard JavaScript object representation for Inference
     */
    interface AsObject {
        ctcAcousticModels?: CtcAcousticModels.AsObject;
        languageModels?: LanguageModels.AsObject;
    }
    /**
     * Protobuf JSON representation for Inference
     */
    interface AsProtobufJSON {
        ctcAcousticModels?: CtcAcousticModels.AsProtobufJSON | null;
        languageModels?: LanguageModels.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.s2t.CtcAcousticModels
 */
export declare class CtcAcousticModels implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CtcAcousticModels;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CtcAcousticModels): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CtcAcousticModels, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CtcAcousticModels, _writer: BinaryWriter): void;
    private _type?;
    private _quartznet?;
    private _quartznetTriton?;
    private _wav2vec?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CtcAcousticModels to deeply clone from
     */
    constructor(_value?: RecursivePartial<CtcAcousticModels.AsObject>);
    get type(): string | undefined;
    set type(value: string | undefined);
    get quartznet(): Quartznet | undefined;
    set quartznet(value: Quartznet | undefined);
    get quartznetTriton(): QuartznetTriton | undefined;
    set quartznetTriton(value: QuartznetTriton | undefined);
    get wav2vec(): Wav2Vec | undefined;
    set wav2vec(value: Wav2Vec | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CtcAcousticModels.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CtcAcousticModels.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CtcAcousticModels.AsProtobufJSON;
}
export declare module CtcAcousticModels {
    /**
     * Standard JavaScript object representation for CtcAcousticModels
     */
    interface AsObject {
        type?: string;
        quartznet?: Quartznet.AsObject;
        quartznetTriton?: QuartznetTriton.AsObject;
        wav2vec?: Wav2Vec.AsObject;
    }
    /**
     * Protobuf JSON representation for CtcAcousticModels
     */
    interface AsProtobufJSON {
        type?: string;
        quartznet?: Quartznet.AsProtobufJSON | null;
        quartznetTriton?: QuartznetTriton.AsProtobufJSON | null;
        wav2vec?: Wav2Vec.AsProtobufJSON | null;
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
    private _modelPath?;
    private _useGpu?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Wav2Vec to deeply clone from
     */
    constructor(_value?: RecursivePartial<Wav2Vec.AsObject>);
    get modelPath(): string | undefined;
    set modelPath(value: string | undefined);
    get useGpu(): boolean | undefined;
    set useGpu(value: boolean | undefined);
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
export declare module Wav2Vec {
    /**
     * Standard JavaScript object representation for Wav2Vec
     */
    interface AsObject {
        modelPath?: string;
        useGpu?: boolean;
    }
    /**
     * Protobuf JSON representation for Wav2Vec
     */
    interface AsProtobufJSON {
        modelPath?: string;
        useGpu?: boolean;
    }
}
/**
 * Message implementation for ondewo.s2t.Quartznet
 */
export declare class Quartznet implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Quartznet;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Quartznet): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Quartznet, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Quartznet, _writer: BinaryWriter): void;
    private _configPath?;
    private _loadType?;
    private _ptFiles?;
    private _ckptFile?;
    private _useGpu?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Quartznet to deeply clone from
     */
    constructor(_value?: RecursivePartial<Quartznet.AsObject>);
    get configPath(): string | undefined;
    set configPath(value: string | undefined);
    get loadType(): string | undefined;
    set loadType(value: string | undefined);
    get ptFiles(): PtFiles | undefined;
    set ptFiles(value: PtFiles | undefined);
    get ckptFile(): CkptFile | undefined;
    set ckptFile(value: CkptFile | undefined);
    get useGpu(): boolean | undefined;
    set useGpu(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Quartznet.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Quartznet.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Quartznet.AsProtobufJSON;
}
export declare module Quartznet {
    /**
     * Standard JavaScript object representation for Quartznet
     */
    interface AsObject {
        configPath?: string;
        loadType?: string;
        ptFiles?: PtFiles.AsObject;
        ckptFile?: CkptFile.AsObject;
        useGpu?: boolean;
    }
    /**
     * Protobuf JSON representation for Quartznet
     */
    interface AsProtobufJSON {
        configPath?: string;
        loadType?: string;
        ptFiles?: PtFiles.AsProtobufJSON | null;
        ckptFile?: CkptFile.AsProtobufJSON | null;
        useGpu?: boolean;
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
    private _path?;
    private _step?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PtFiles to deeply clone from
     */
    constructor(_value?: RecursivePartial<PtFiles.AsObject>);
    get path(): string | undefined;
    set path(value: string | undefined);
    get step(): string | undefined;
    set step(value: string | undefined);
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
export declare module PtFiles {
    /**
     * Standard JavaScript object representation for PtFiles
     */
    interface AsObject {
        path?: string;
        step?: string;
    }
    /**
     * Protobuf JSON representation for PtFiles
     */
    interface AsProtobufJSON {
        path?: string;
        step?: string;
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
    private _path?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CkptFile to deeply clone from
     */
    constructor(_value?: RecursivePartial<CkptFile.AsObject>);
    get path(): string | undefined;
    set path(value: string | undefined);
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
export declare module CkptFile {
    /**
     * Standard JavaScript object representation for CkptFile
     */
    interface AsObject {
        path?: string;
    }
    /**
     * Protobuf JSON representation for CkptFile
     */
    interface AsProtobufJSON {
        path?: string;
    }
}
/**
 * Message implementation for ondewo.s2t.QuartznetTriton
 */
export declare class QuartznetTriton implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): QuartznetTriton;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: QuartznetTriton): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: QuartznetTriton, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: QuartznetTriton, _writer: BinaryWriter): void;
    private _configPath?;
    private _tritonUrl?;
    private _tritonModel?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of QuartznetTriton to deeply clone from
     */
    constructor(_value?: RecursivePartial<QuartznetTriton.AsObject>);
    get configPath(): string | undefined;
    set configPath(value: string | undefined);
    get tritonUrl(): string | undefined;
    set tritonUrl(value: string | undefined);
    get tritonModel(): string | undefined;
    set tritonModel(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): QuartznetTriton.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): QuartznetTriton.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): QuartznetTriton.AsProtobufJSON;
}
export declare module QuartznetTriton {
    /**
     * Standard JavaScript object representation for QuartznetTriton
     */
    interface AsObject {
        configPath?: string;
        tritonUrl?: string;
        tritonModel?: string;
    }
    /**
     * Protobuf JSON representation for QuartznetTriton
     */
    interface AsProtobufJSON {
        configPath?: string;
        tritonUrl?: string;
        tritonModel?: string;
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
    private _path?;
    private _beamSize?;
    private _defaultLm?;
    private _beamSearchScorerAlpha?;
    private _beamSearchScorerBeta?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LanguageModels to deeply clone from
     */
    constructor(_value?: RecursivePartial<LanguageModels.AsObject>);
    get path(): string | undefined;
    set path(value: string | undefined);
    get beamSize(): string | undefined;
    set beamSize(value: string | undefined);
    get defaultLm(): string | undefined;
    set defaultLm(value: string | undefined);
    get beamSearchScorerAlpha(): number | undefined;
    set beamSearchScorerAlpha(value: number | undefined);
    get beamSearchScorerBeta(): number | undefined;
    set beamSearchScorerBeta(value: number | undefined);
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
export declare module LanguageModels {
    /**
     * Standard JavaScript object representation for LanguageModels
     */
    interface AsObject {
        path?: string;
        beamSize?: string;
        defaultLm?: string;
        beamSearchScorerAlpha?: number;
        beamSearchScorerBeta?: number;
    }
    /**
     * Protobuf JSON representation for LanguageModels
     */
    interface AsProtobufJSON {
        path?: string;
        beamSize?: string;
        defaultLm?: string;
        beamSearchScorerAlpha?: number;
        beamSearchScorerBeta?: number;
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
    private _host?;
    private _port?;
    private _outputStyle?;
    private _streamingSpeechRecognition?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StreamingServer to deeply clone from
     */
    constructor(_value?: RecursivePartial<StreamingServer.AsObject>);
    get host(): string | undefined;
    set host(value: string | undefined);
    get port(): string | undefined;
    set port(value: string | undefined);
    get outputStyle(): string | undefined;
    set outputStyle(value: string | undefined);
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
export declare module StreamingServer {
    /**
     * Standard JavaScript object representation for StreamingServer
     */
    interface AsObject {
        host?: string;
        port?: string;
        outputStyle?: string;
        streamingSpeechRecognition?: StreamingSpeechRecognition.AsObject;
    }
    /**
     * Protobuf JSON representation for StreamingServer
     */
    interface AsProtobufJSON {
        host?: string;
        port?: string;
        outputStyle?: string;
        streamingSpeechRecognition?: StreamingSpeechRecognition.AsProtobufJSON | null;
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
    private _transcribeNotFinal?;
    private _ctcDecodingMethod?;
    private _samplingRate?;
    private _minAudioChunkSize?;
    private _startOfUtteranceThreshold?;
    private _endOfUtteranceThreshold?;
    private _nextChunkTimeout?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StreamingSpeechRecognition to deeply clone from
     */
    constructor(_value?: RecursivePartial<StreamingSpeechRecognition.AsObject>);
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
    get nextChunkTimeout(): number | undefined;
    set nextChunkTimeout(value: number | undefined);
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
export declare module StreamingSpeechRecognition {
    /**
     * Standard JavaScript object representation for StreamingSpeechRecognition
     */
    interface AsObject {
        transcribeNotFinal?: boolean;
        ctcDecodingMethod?: string;
        samplingRate?: string;
        minAudioChunkSize?: string;
        startOfUtteranceThreshold?: number;
        endOfUtteranceThreshold?: number;
        nextChunkTimeout?: number;
    }
    /**
     * Protobuf JSON representation for StreamingSpeechRecognition
     */
    interface AsProtobufJSON {
        transcribeNotFinal?: boolean;
        ctcDecodingMethod?: string;
        samplingRate?: string;
        minAudioChunkSize?: string;
        startOfUtteranceThreshold?: number;
        endOfUtteranceThreshold?: number;
        nextChunkTimeout?: number;
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
    private _active?;
    private _samplingRate?;
    private _pyannote?;
    private _matchbox?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VoiceActivityDetection to deeply clone from
     */
    constructor(_value?: RecursivePartial<VoiceActivityDetection.AsObject>);
    get active(): string | undefined;
    set active(value: string | undefined);
    get samplingRate(): string | undefined;
    set samplingRate(value: string | undefined);
    get pyannote(): Pyannote | undefined;
    set pyannote(value: Pyannote | undefined);
    get matchbox(): Matchbox | undefined;
    set matchbox(value: Matchbox | undefined);
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
export declare module VoiceActivityDetection {
    /**
     * Standard JavaScript object representation for VoiceActivityDetection
     */
    interface AsObject {
        active?: string;
        samplingRate?: string;
        pyannote?: Pyannote.AsObject;
        matchbox?: Matchbox.AsObject;
    }
    /**
     * Protobuf JSON representation for VoiceActivityDetection
     */
    interface AsProtobufJSON {
        active?: string;
        samplingRate?: string;
        pyannote?: Pyannote.AsProtobufJSON | null;
        matchbox?: Matchbox.AsProtobufJSON | null;
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
    private _modelPath?;
    private _minAudioSize?;
    private _offset?;
    private _onset?;
    private _logScale?;
    private _minDurationOff?;
    private _minDurationOn?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Pyannote to deeply clone from
     */
    constructor(_value?: RecursivePartial<Pyannote.AsObject>);
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
export declare module Pyannote {
    /**
     * Standard JavaScript object representation for Pyannote
     */
    interface AsObject {
        modelPath?: string;
        minAudioSize?: string;
        offset?: number;
        onset?: number;
        logScale?: boolean;
        minDurationOff?: number;
        minDurationOn?: number;
    }
    /**
     * Protobuf JSON representation for Pyannote
     */
    interface AsProtobufJSON {
        modelPath?: string;
        minAudioSize?: string;
        offset?: number;
        onset?: number;
        logScale?: boolean;
        minDurationOff?: number;
        minDurationOn?: number;
    }
}
/**
 * Message implementation for ondewo.s2t.Matchbox
 */
export declare class Matchbox implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Matchbox;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Matchbox): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Matchbox, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Matchbox, _writer: BinaryWriter): void;
    private _modelConfig?;
    private _encoderPath?;
    private _decoderPath?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Matchbox to deeply clone from
     */
    constructor(_value?: RecursivePartial<Matchbox.AsObject>);
    get modelConfig(): string | undefined;
    set modelConfig(value: string | undefined);
    get encoderPath(): string | undefined;
    set encoderPath(value: string | undefined);
    get decoderPath(): string | undefined;
    set decoderPath(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Matchbox.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Matchbox.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Matchbox.AsProtobufJSON;
}
export declare module Matchbox {
    /**
     * Standard JavaScript object representation for Matchbox
     */
    interface AsObject {
        modelConfig?: string;
        encoderPath?: string;
        decoderPath?: string;
    }
    /**
     * Protobuf JSON representation for Matchbox
     */
    interface AsProtobufJSON {
        modelConfig?: string;
        encoderPath?: string;
        decoderPath?: string;
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
    private _pipeline?;
    private _postProcessors?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PostProcessing to deeply clone from
     */
    constructor(_value?: RecursivePartial<PostProcessing.AsObject>);
    get pipeline(): string[] | undefined;
    set pipeline(value: string[] | undefined);
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
export declare module PostProcessing {
    /**
     * Standard JavaScript object representation for PostProcessing
     */
    interface AsObject {
        pipeline?: string[];
        postProcessors?: PostProcessors.AsObject;
    }
    /**
     * Protobuf JSON representation for PostProcessing
     */
    interface AsProtobufJSON {
        pipeline?: string[];
        postProcessors?: PostProcessors.AsProtobufJSON | null;
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
    get normalization(): Normalization | undefined;
    set normalization(value: Normalization | undefined);
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
export declare module PostProcessors {
    /**
     * Standard JavaScript object representation for PostProcessors
     */
    interface AsObject {
        symSpell?: SymSpell.AsObject;
        normalization?: Normalization.AsObject;
    }
    /**
     * Protobuf JSON representation for PostProcessors
     */
    interface AsProtobufJSON {
        symSpell?: SymSpell.AsProtobufJSON | null;
        normalization?: Normalization.AsProtobufJSON | null;
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
    private _dictPath?;
    private _maxDictionaryEditDistance?;
    private _prefixLength?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SymSpell to deeply clone from
     */
    constructor(_value?: RecursivePartial<SymSpell.AsObject>);
    get dictPath(): string | undefined;
    set dictPath(value: string | undefined);
    get maxDictionaryEditDistance(): string | undefined;
    set maxDictionaryEditDistance(value: string | undefined);
    get prefixLength(): string | undefined;
    set prefixLength(value: string | undefined);
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
export declare module SymSpell {
    /**
     * Standard JavaScript object representation for SymSpell
     */
    interface AsObject {
        dictPath?: string;
        maxDictionaryEditDistance?: string;
        prefixLength?: string;
    }
    /**
     * Protobuf JSON representation for SymSpell
     */
    interface AsProtobufJSON {
        dictPath?: string;
        maxDictionaryEditDistance?: string;
        prefixLength?: string;
    }
}
/**
 * Message implementation for ondewo.s2t.Normalization
 */
export declare class Normalization implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Normalization;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Normalization): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Normalization, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Normalization, _writer: BinaryWriter): void;
    private _language?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Normalization to deeply clone from
     */
    constructor(_value?: RecursivePartial<Normalization.AsObject>);
    get language(): string | undefined;
    set language(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Normalization.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Normalization.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Normalization.AsProtobufJSON;
}
export declare module Normalization {
    /**
     * Standard JavaScript object representation for Normalization
     */
    interface AsObject {
        language?: string;
    }
    /**
     * Protobuf JSON representation for Normalization
     */
    interface AsProtobufJSON {
        language?: string;
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
    private _type?;
    private _path?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Logging to deeply clone from
     */
    constructor(_value?: RecursivePartial<Logging.AsObject>);
    get type(): string | undefined;
    set type(value: string | undefined);
    get path(): string | undefined;
    set path(value: string | undefined);
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
export declare module Logging {
    /**
     * Standard JavaScript object representation for Logging
     */
    interface AsObject {
        type?: string;
        path?: string;
    }
    /**
     * Protobuf JSON representation for Logging
     */
    interface AsProtobufJSON {
        type?: string;
        path?: string;
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
    private _ids?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tLanguageModelsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListS2tLanguageModelsRequest.AsObject>);
    get ids(): string[] | undefined;
    set ids(value: string[] | undefined);
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
export declare module ListS2tLanguageModelsRequest {
    /**
     * Standard JavaScript object representation for ListS2tLanguageModelsRequest
     */
    interface AsObject {
        ids?: string[];
    }
    /**
     * Protobuf JSON representation for ListS2tLanguageModelsRequest
     */
    interface AsProtobufJSON {
        ids?: string[];
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
    private _pipelineId?;
    private _modelNames?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LanguageModelPipelineId to deeply clone from
     */
    constructor(_value?: RecursivePartial<LanguageModelPipelineId.AsObject>);
    get pipelineId(): string | undefined;
    set pipelineId(value: string | undefined);
    get modelNames(): string[] | undefined;
    set modelNames(value: string[] | undefined);
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
export declare module LanguageModelPipelineId {
    /**
     * Standard JavaScript object representation for LanguageModelPipelineId
     */
    interface AsObject {
        pipelineId?: string;
        modelNames?: string[];
    }
    /**
     * Protobuf JSON representation for LanguageModelPipelineId
     */
    interface AsProtobufJSON {
        pipelineId?: string;
        modelNames?: string[];
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
export declare module ListS2tLanguageModelsResponse {
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
        lmPipelineIds?: LanguageModelPipelineId.AsProtobufJSON[] | null;
    }
}
