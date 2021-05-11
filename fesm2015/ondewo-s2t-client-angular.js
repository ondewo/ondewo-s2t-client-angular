import { InjectionToken, ɵɵdefineInjectable, ɵɵinject, Injectable, Optional, Inject } from '@angular/core';
import { uint8ArrayToBase64, GrpcMetadata, GrpcCallType } from '@ngx-grpc/common';
import { throwStatusErrors, takeMessages, GRPC_CLIENT_FACTORY, GrpcHandler } from '@ngx-grpc/core';
import { BinaryReader, BinaryWriter } from 'google-protobuf';
import { Empty } from '@ngx-grpc/well-known-types';

/* tslint:disable */
/**
 * Specific GrpcClientSettings for Speech2Text.
 * Use it only if your default settings are not set or the service requires other settings.
 */
const GRPC_SPEECH2_TEXT_CLIENT_SETTINGS = new InjectionToken('GRPC_SPEECH2_TEXT_CLIENT_SETTINGS');

/* tslint:disable */
var CTCDecoding;
(function (CTCDecoding) {
    CTCDecoding[CTCDecoding["GREEDY"] = 0] = "GREEDY";
    CTCDecoding[CTCDecoding["BEAM_SEARCH_WITH_LM"] = 1] = "BEAM_SEARCH_WITH_LM";
})(CTCDecoding || (CTCDecoding = {}));
/**
 * Message implementation for ondewo.s2t.TranscribeStreamRequest
 */
class TranscribeStreamRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscribeStreamRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.s2tPipelineId = _value.s2tPipelineId;
        this.audioChunk = _value.audioChunk;
        this.ctcDecoding = _value.ctcDecoding;
        this.spellingCorrection = _value.spellingCorrection;
        this.disableNormalization = _value.disableNormalization;
        this.endOfStream = _value.endOfStream;
        TranscribeStreamRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new TranscribeStreamRequest();
        TranscribeStreamRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.s2tPipelineId = _instance.s2tPipelineId || '';
        _instance.audioChunk = _instance.audioChunk || new Uint8Array();
        _instance.ctcDecoding = _instance.ctcDecoding || 0;
        _instance.spellingCorrection = _instance.spellingCorrection || false;
        _instance.disableNormalization = _instance.disableNormalization || false;
        _instance.endOfStream = _instance.endOfStream || false;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.s2tPipelineId = _reader.readString();
                    break;
                case 2:
                    _instance.audioChunk = _reader.readBytes();
                    break;
                case 3:
                    _instance.ctcDecoding = _reader.readEnum();
                    break;
                case 4:
                    _instance.spellingCorrection = _reader.readBool();
                    break;
                case 5:
                    _instance.disableNormalization = _reader.readBool();
                    break;
                case 6:
                    _instance.endOfStream = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        TranscribeStreamRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.s2tPipelineId) {
            _writer.writeString(1, _instance.s2tPipelineId);
        }
        if (_instance.audioChunk && _instance.audioChunk.length) {
            _writer.writeBytes(2, _instance.audioChunk);
        }
        if (_instance.ctcDecoding) {
            _writer.writeEnum(3, _instance.ctcDecoding);
        }
        if (_instance.spellingCorrection) {
            _writer.writeBool(4, _instance.spellingCorrection);
        }
        if (_instance.disableNormalization) {
            _writer.writeBool(5, _instance.disableNormalization);
        }
        if (_instance.endOfStream) {
            _writer.writeBool(6, _instance.endOfStream);
        }
    }
    get s2tPipelineId() {
        return this._s2tPipelineId;
    }
    set s2tPipelineId(value) {
        this._s2tPipelineId = value;
    }
    get audioChunk() {
        return this._audioChunk;
    }
    set audioChunk(value) {
        this._audioChunk = value;
    }
    get ctcDecoding() {
        return this._ctcDecoding;
    }
    set ctcDecoding(value) {
        this._ctcDecoding = value;
    }
    get spellingCorrection() {
        return this._spellingCorrection;
    }
    set spellingCorrection(value) {
        this._spellingCorrection = value;
    }
    get disableNormalization() {
        return this._disableNormalization;
    }
    set disableNormalization(value) {
        this._disableNormalization = value;
    }
    get endOfStream() {
        return this._endOfStream;
    }
    set endOfStream(value) {
        this._endOfStream = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        TranscribeStreamRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            s2tPipelineId: this.s2tPipelineId,
            audioChunk: this.audioChunk
                ? this.audioChunk.subarray(0)
                : new Uint8Array(),
            ctcDecoding: this.ctcDecoding,
            spellingCorrection: this.spellingCorrection,
            disableNormalization: this.disableNormalization,
            endOfStream: this.endOfStream
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        var _a;
        return {
            s2tPipelineId: this.s2tPipelineId,
            audioChunk: this.audioChunk ? uint8ArrayToBase64(this.audioChunk) : '',
            ctcDecoding: CTCDecoding[(_a = this.ctcDecoding) !== null && _a !== void 0 ? _a : 0],
            spellingCorrection: this.spellingCorrection,
            disableNormalization: this.disableNormalization,
            endOfStream: this.endOfStream
        };
    }
}
TranscribeStreamRequest.id = 'ondewo.s2t.TranscribeStreamRequest';
/**
 * Message implementation for ondewo.s2t.TranscribeStreamResponse
 */
class TranscribeStreamResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscribeStreamResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.transcription = _value.transcription;
        this.time = _value.time;
        this.final = _value.final;
        TranscribeStreamResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new TranscribeStreamResponse();
        TranscribeStreamResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.transcription = _instance.transcription || '';
        _instance.time = _instance.time || 0;
        _instance.final = _instance.final || false;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.transcription = _reader.readString();
                    break;
                case 2:
                    _instance.time = _reader.readFloat();
                    break;
                case 3:
                    _instance.final = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        TranscribeStreamResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.transcription) {
            _writer.writeString(1, _instance.transcription);
        }
        if (_instance.time) {
            _writer.writeFloat(2, _instance.time);
        }
        if (_instance.final) {
            _writer.writeBool(3, _instance.final);
        }
    }
    get transcription() {
        return this._transcription;
    }
    set transcription(value) {
        this._transcription = value;
    }
    get time() {
        return this._time;
    }
    set time(value) {
        this._time = value;
    }
    get final() {
        return this._final;
    }
    set final(value) {
        this._final = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        TranscribeStreamResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            transcription: this.transcription,
            time: this.time,
            final: this.final
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            transcription: this.transcription,
            time: this.time,
            final: this.final
        };
    }
}
TranscribeStreamResponse.id = 'ondewo.s2t.TranscribeStreamResponse';
/**
 * Message implementation for ondewo.s2t.TranscribeFileRequest
 */
class TranscribeFileRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscribeFileRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.s2tPipelineId = _value.s2tPipelineId;
        this.audioFile = _value.audioFile;
        this.ctcDecoding = _value.ctcDecoding;
        this.spellingCorrection = _value.spellingCorrection;
        this.disableNormalization = _value.disableNormalization;
        this.includeTiming = _value.includeTiming;
        TranscribeFileRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new TranscribeFileRequest();
        TranscribeFileRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.s2tPipelineId = _instance.s2tPipelineId || '';
        _instance.audioFile = _instance.audioFile || new Uint8Array();
        _instance.ctcDecoding = _instance.ctcDecoding || 0;
        _instance.spellingCorrection = _instance.spellingCorrection || false;
        _instance.disableNormalization = _instance.disableNormalization || false;
        _instance.includeTiming = _instance.includeTiming || false;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.s2tPipelineId = _reader.readString();
                    break;
                case 2:
                    _instance.audioFile = _reader.readBytes();
                    break;
                case 3:
                    _instance.ctcDecoding = _reader.readEnum();
                    break;
                case 4:
                    _instance.spellingCorrection = _reader.readBool();
                    break;
                case 5:
                    _instance.disableNormalization = _reader.readBool();
                    break;
                case 6:
                    _instance.includeTiming = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        TranscribeFileRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.s2tPipelineId) {
            _writer.writeString(1, _instance.s2tPipelineId);
        }
        if (_instance.audioFile && _instance.audioFile.length) {
            _writer.writeBytes(2, _instance.audioFile);
        }
        if (_instance.ctcDecoding) {
            _writer.writeEnum(3, _instance.ctcDecoding);
        }
        if (_instance.spellingCorrection) {
            _writer.writeBool(4, _instance.spellingCorrection);
        }
        if (_instance.disableNormalization) {
            _writer.writeBool(5, _instance.disableNormalization);
        }
        if (_instance.includeTiming) {
            _writer.writeBool(6, _instance.includeTiming);
        }
    }
    get s2tPipelineId() {
        return this._s2tPipelineId;
    }
    set s2tPipelineId(value) {
        this._s2tPipelineId = value;
    }
    get audioFile() {
        return this._audioFile;
    }
    set audioFile(value) {
        this._audioFile = value;
    }
    get ctcDecoding() {
        return this._ctcDecoding;
    }
    set ctcDecoding(value) {
        this._ctcDecoding = value;
    }
    get spellingCorrection() {
        return this._spellingCorrection;
    }
    set spellingCorrection(value) {
        this._spellingCorrection = value;
    }
    get disableNormalization() {
        return this._disableNormalization;
    }
    set disableNormalization(value) {
        this._disableNormalization = value;
    }
    get includeTiming() {
        return this._includeTiming;
    }
    set includeTiming(value) {
        this._includeTiming = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        TranscribeFileRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            s2tPipelineId: this.s2tPipelineId,
            audioFile: this.audioFile ? this.audioFile.subarray(0) : new Uint8Array(),
            ctcDecoding: this.ctcDecoding,
            spellingCorrection: this.spellingCorrection,
            disableNormalization: this.disableNormalization,
            includeTiming: this.includeTiming
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        var _a;
        return {
            s2tPipelineId: this.s2tPipelineId,
            audioFile: this.audioFile ? uint8ArrayToBase64(this.audioFile) : '',
            ctcDecoding: CTCDecoding[(_a = this.ctcDecoding) !== null && _a !== void 0 ? _a : 0],
            spellingCorrection: this.spellingCorrection,
            disableNormalization: this.disableNormalization,
            includeTiming: this.includeTiming
        };
    }
}
TranscribeFileRequest.id = 'ondewo.s2t.TranscribeFileRequest';
/**
 * Message implementation for ondewo.s2t.TranscribeFileResponse
 */
class TranscribeFileResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscribeFileResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.transcription = _value.transcription;
        this.time = _value.time;
        this.wordTiming = (_value.wordTiming || []).map(m => new WordTiming(m));
        TranscribeFileResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new TranscribeFileResponse();
        TranscribeFileResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.transcription = _instance.transcription || '';
        _instance.time = _instance.time || 0;
        _instance.wordTiming = _instance.wordTiming || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.transcription = _reader.readString();
                    break;
                case 2:
                    _instance.time = _reader.readFloat();
                    break;
                case 3:
                    const messageInitializer3 = new WordTiming();
                    _reader.readMessage(messageInitializer3, WordTiming.deserializeBinaryFromReader);
                    (_instance.wordTiming = _instance.wordTiming || []).push(messageInitializer3);
                    break;
                default:
                    _reader.skipField();
            }
        }
        TranscribeFileResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.transcription) {
            _writer.writeString(1, _instance.transcription);
        }
        if (_instance.time) {
            _writer.writeFloat(2, _instance.time);
        }
        if (_instance.wordTiming && _instance.wordTiming.length) {
            _writer.writeRepeatedMessage(3, _instance.wordTiming, WordTiming.serializeBinaryToWriter);
        }
    }
    get transcription() {
        return this._transcription;
    }
    set transcription(value) {
        this._transcription = value;
    }
    get time() {
        return this._time;
    }
    set time(value) {
        this._time = value;
    }
    get wordTiming() {
        return this._wordTiming;
    }
    set wordTiming(value) {
        this._wordTiming = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        TranscribeFileResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            transcription: this.transcription,
            time: this.time,
            wordTiming: (this.wordTiming || []).map(m => m.toObject())
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            transcription: this.transcription,
            time: this.time,
            wordTiming: (this.wordTiming || []).map(m => m.toProtobufJSON(options))
        };
    }
}
TranscribeFileResponse.id = 'ondewo.s2t.TranscribeFileResponse';
/**
 * Message implementation for ondewo.s2t.WordTiming
 */
class WordTiming {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of WordTiming to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.word = _value.word;
        this.begin = _value.begin;
        this.end = _value.end;
        WordTiming.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new WordTiming();
        WordTiming.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.word = _instance.word || '';
        _instance.begin = _instance.begin || 0;
        _instance.end = _instance.end || 0;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.word = _reader.readString();
                    break;
                case 2:
                    _instance.begin = _reader.readInt32();
                    break;
                case 3:
                    _instance.end = _reader.readInt32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        WordTiming.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.word) {
            _writer.writeString(1, _instance.word);
        }
        if (_instance.begin) {
            _writer.writeInt32(2, _instance.begin);
        }
        if (_instance.end) {
            _writer.writeInt32(3, _instance.end);
        }
    }
    get word() {
        return this._word;
    }
    set word(value) {
        this._word = value;
    }
    get begin() {
        return this._begin;
    }
    set begin(value) {
        this._begin = value;
    }
    get end() {
        return this._end;
    }
    set end(value) {
        this._end = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        WordTiming.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            word: this.word,
            begin: this.begin,
            end: this.end
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            word: this.word,
            begin: this.begin,
            end: this.end
        };
    }
}
WordTiming.id = 'ondewo.s2t.WordTiming';
/**
 * Message implementation for ondewo.s2t.S2tPipelineId
 */
class S2tPipelineId {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tPipelineId to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.id = _value.id;
        S2tPipelineId.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new S2tPipelineId();
        S2tPipelineId.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.id = _instance.id || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.id = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        S2tPipelineId.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.id) {
            _writer.writeString(1, _instance.id);
        }
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        S2tPipelineId.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            id: this.id
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            id: this.id
        };
    }
}
S2tPipelineId.id = 'ondewo.s2t.S2tPipelineId';
/**
 * Message implementation for ondewo.s2t.ListS2tPipelinesRequest
 */
class ListS2tPipelinesRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tPipelinesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.languages = (_value.languages || []).slice();
        this.pipelineOwners = (_value.pipelineOwners || []).slice();
        this.domains = (_value.domains || []).slice();
        ListS2tPipelinesRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListS2tPipelinesRequest();
        ListS2tPipelinesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.languages = _instance.languages || [];
        _instance.pipelineOwners = _instance.pipelineOwners || [];
        _instance.domains = _instance.domains || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    (_instance.languages = _instance.languages || []).push(_reader.readString());
                    break;
                case 2:
                    (_instance.pipelineOwners = _instance.pipelineOwners || []).push(_reader.readString());
                    break;
                case 3:
                    (_instance.domains = _instance.domains || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListS2tPipelinesRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.languages && _instance.languages.length) {
            _writer.writeRepeatedString(1, _instance.languages);
        }
        if (_instance.pipelineOwners && _instance.pipelineOwners.length) {
            _writer.writeRepeatedString(2, _instance.pipelineOwners);
        }
        if (_instance.domains && _instance.domains.length) {
            _writer.writeRepeatedString(3, _instance.domains);
        }
    }
    get languages() {
        return this._languages;
    }
    set languages(value) {
        this._languages = value;
    }
    get pipelineOwners() {
        return this._pipelineOwners;
    }
    set pipelineOwners(value) {
        this._pipelineOwners = value;
    }
    get domains() {
        return this._domains;
    }
    set domains(value) {
        this._domains = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ListS2tPipelinesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            languages: (this.languages || []).slice(),
            pipelineOwners: (this.pipelineOwners || []).slice(),
            domains: (this.domains || []).slice()
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            languages: (this.languages || []).slice(),
            pipelineOwners: (this.pipelineOwners || []).slice(),
            domains: (this.domains || []).slice()
        };
    }
}
ListS2tPipelinesRequest.id = 'ondewo.s2t.ListS2tPipelinesRequest';
/**
 * Message implementation for ondewo.s2t.ListS2tPipelinesResponse
 */
class ListS2tPipelinesResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tPipelinesResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.pipelineConfigs = (_value.pipelineConfigs || []).map(m => new Speech2TextConfig(m));
        ListS2tPipelinesResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListS2tPipelinesResponse();
        ListS2tPipelinesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.pipelineConfigs = _instance.pipelineConfigs || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Speech2TextConfig();
                    _reader.readMessage(messageInitializer1, Speech2TextConfig.deserializeBinaryFromReader);
                    (_instance.pipelineConfigs = _instance.pipelineConfigs || []).push(messageInitializer1);
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListS2tPipelinesResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.pipelineConfigs && _instance.pipelineConfigs.length) {
            _writer.writeRepeatedMessage(1, _instance.pipelineConfigs, Speech2TextConfig.serializeBinaryToWriter);
        }
    }
    get pipelineConfigs() {
        return this._pipelineConfigs;
    }
    set pipelineConfigs(value) {
        this._pipelineConfigs = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ListS2tPipelinesResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            pipelineConfigs: (this.pipelineConfigs || []).map(m => m.toObject())
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            pipelineConfigs: (this.pipelineConfigs || []).map(m => m.toProtobufJSON(options))
        };
    }
}
ListS2tPipelinesResponse.id = 'ondewo.s2t.ListS2tPipelinesResponse';
/**
 * Message implementation for ondewo.s2t.ListS2tLanguagesRequest
 */
class ListS2tLanguagesRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tLanguagesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.domains = (_value.domains || []).slice();
        this.pipelineOwners = (_value.pipelineOwners || []).slice();
        ListS2tLanguagesRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListS2tLanguagesRequest();
        ListS2tLanguagesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.domains = _instance.domains || [];
        _instance.pipelineOwners = _instance.pipelineOwners || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    (_instance.domains = _instance.domains || []).push(_reader.readString());
                    break;
                case 2:
                    (_instance.pipelineOwners = _instance.pipelineOwners || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListS2tLanguagesRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.domains && _instance.domains.length) {
            _writer.writeRepeatedString(1, _instance.domains);
        }
        if (_instance.pipelineOwners && _instance.pipelineOwners.length) {
            _writer.writeRepeatedString(2, _instance.pipelineOwners);
        }
    }
    get domains() {
        return this._domains;
    }
    set domains(value) {
        this._domains = value;
    }
    get pipelineOwners() {
        return this._pipelineOwners;
    }
    set pipelineOwners(value) {
        this._pipelineOwners = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ListS2tLanguagesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            domains: (this.domains || []).slice(),
            pipelineOwners: (this.pipelineOwners || []).slice()
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            domains: (this.domains || []).slice(),
            pipelineOwners: (this.pipelineOwners || []).slice()
        };
    }
}
ListS2tLanguagesRequest.id = 'ondewo.s2t.ListS2tLanguagesRequest';
/**
 * Message implementation for ondewo.s2t.ListS2tLanguagesResponse
 */
class ListS2tLanguagesResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tLanguagesResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.languages = (_value.languages || []).slice();
        ListS2tLanguagesResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListS2tLanguagesResponse();
        ListS2tLanguagesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.languages = _instance.languages || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    (_instance.languages = _instance.languages || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListS2tLanguagesResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.languages && _instance.languages.length) {
            _writer.writeRepeatedString(1, _instance.languages);
        }
    }
    get languages() {
        return this._languages;
    }
    set languages(value) {
        this._languages = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ListS2tLanguagesResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            languages: (this.languages || []).slice()
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            languages: (this.languages || []).slice()
        };
    }
}
ListS2tLanguagesResponse.id = 'ondewo.s2t.ListS2tLanguagesResponse';
/**
 * Message implementation for ondewo.s2t.ListS2tDomainsRequest
 */
class ListS2tDomainsRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tDomainsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.languages = (_value.languages || []).slice();
        this.pipelineOwners = (_value.pipelineOwners || []).slice();
        ListS2tDomainsRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListS2tDomainsRequest();
        ListS2tDomainsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.languages = _instance.languages || [];
        _instance.pipelineOwners = _instance.pipelineOwners || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    (_instance.languages = _instance.languages || []).push(_reader.readString());
                    break;
                case 2:
                    (_instance.pipelineOwners = _instance.pipelineOwners || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListS2tDomainsRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.languages && _instance.languages.length) {
            _writer.writeRepeatedString(1, _instance.languages);
        }
        if (_instance.pipelineOwners && _instance.pipelineOwners.length) {
            _writer.writeRepeatedString(2, _instance.pipelineOwners);
        }
    }
    get languages() {
        return this._languages;
    }
    set languages(value) {
        this._languages = value;
    }
    get pipelineOwners() {
        return this._pipelineOwners;
    }
    set pipelineOwners(value) {
        this._pipelineOwners = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ListS2tDomainsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            languages: (this.languages || []).slice(),
            pipelineOwners: (this.pipelineOwners || []).slice()
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            languages: (this.languages || []).slice(),
            pipelineOwners: (this.pipelineOwners || []).slice()
        };
    }
}
ListS2tDomainsRequest.id = 'ondewo.s2t.ListS2tDomainsRequest';
/**
 * Message implementation for ondewo.s2t.ListS2tDomainsResponse
 */
class ListS2tDomainsResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tDomainsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.domains = (_value.domains || []).slice();
        ListS2tDomainsResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListS2tDomainsResponse();
        ListS2tDomainsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.domains = _instance.domains || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    (_instance.domains = _instance.domains || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListS2tDomainsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.domains && _instance.domains.length) {
            _writer.writeRepeatedString(1, _instance.domains);
        }
    }
    get domains() {
        return this._domains;
    }
    set domains(value) {
        this._domains = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ListS2tDomainsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            domains: (this.domains || []).slice()
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            domains: (this.domains || []).slice()
        };
    }
}
ListS2tDomainsResponse.id = 'ondewo.s2t.ListS2tDomainsResponse';
/**
 * Message implementation for ondewo.s2t.Speech2TextConfig
 */
class Speech2TextConfig {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Speech2TextConfig to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.id = _value.id;
        this.description = _value.description
            ? new Description(_value.description)
            : undefined;
        this.active = _value.active;
        this.inference = _value.inference
            ? new Inference(_value.inference)
            : undefined;
        this.streamingServer = _value.streamingServer
            ? new StreamingServer(_value.streamingServer)
            : undefined;
        this.voiceActivityDetection = _value.voiceActivityDetection
            ? new VoiceActivityDetection(_value.voiceActivityDetection)
            : undefined;
        this.postProcessing = _value.postProcessing
            ? new PostProcessing(_value.postProcessing)
            : undefined;
        this.logging = _value.logging ? new Logging(_value.logging) : undefined;
        Speech2TextConfig.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Speech2TextConfig();
        Speech2TextConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.id = _instance.id || '';
        _instance.description = _instance.description || undefined;
        _instance.active = _instance.active || false;
        _instance.inference = _instance.inference || undefined;
        _instance.streamingServer = _instance.streamingServer || undefined;
        _instance.voiceActivityDetection =
            _instance.voiceActivityDetection || undefined;
        _instance.postProcessing = _instance.postProcessing || undefined;
        _instance.logging = _instance.logging || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.id = _reader.readString();
                    break;
                case 2:
                    _instance.description = new Description();
                    _reader.readMessage(_instance.description, Description.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.active = _reader.readBool();
                    break;
                case 4:
                    _instance.inference = new Inference();
                    _reader.readMessage(_instance.inference, Inference.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.streamingServer = new StreamingServer();
                    _reader.readMessage(_instance.streamingServer, StreamingServer.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.voiceActivityDetection = new VoiceActivityDetection();
                    _reader.readMessage(_instance.voiceActivityDetection, VoiceActivityDetection.deserializeBinaryFromReader);
                    break;
                case 7:
                    _instance.postProcessing = new PostProcessing();
                    _reader.readMessage(_instance.postProcessing, PostProcessing.deserializeBinaryFromReader);
                    break;
                case 8:
                    _instance.logging = new Logging();
                    _reader.readMessage(_instance.logging, Logging.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        Speech2TextConfig.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.id) {
            _writer.writeString(1, _instance.id);
        }
        if (_instance.description) {
            _writer.writeMessage(2, _instance.description, Description.serializeBinaryToWriter);
        }
        if (_instance.active) {
            _writer.writeBool(3, _instance.active);
        }
        if (_instance.inference) {
            _writer.writeMessage(4, _instance.inference, Inference.serializeBinaryToWriter);
        }
        if (_instance.streamingServer) {
            _writer.writeMessage(5, _instance.streamingServer, StreamingServer.serializeBinaryToWriter);
        }
        if (_instance.voiceActivityDetection) {
            _writer.writeMessage(6, _instance.voiceActivityDetection, VoiceActivityDetection.serializeBinaryToWriter);
        }
        if (_instance.postProcessing) {
            _writer.writeMessage(7, _instance.postProcessing, PostProcessing.serializeBinaryToWriter);
        }
        if (_instance.logging) {
            _writer.writeMessage(8, _instance.logging, Logging.serializeBinaryToWriter);
        }
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get active() {
        return this._active;
    }
    set active(value) {
        this._active = value;
    }
    get inference() {
        return this._inference;
    }
    set inference(value) {
        this._inference = value;
    }
    get streamingServer() {
        return this._streamingServer;
    }
    set streamingServer(value) {
        this._streamingServer = value;
    }
    get voiceActivityDetection() {
        return this._voiceActivityDetection;
    }
    set voiceActivityDetection(value) {
        this._voiceActivityDetection = value;
    }
    get postProcessing() {
        return this._postProcessing;
    }
    set postProcessing(value) {
        this._postProcessing = value;
    }
    get logging() {
        return this._logging;
    }
    set logging(value) {
        this._logging = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Speech2TextConfig.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            id: this.id,
            description: this.description ? this.description.toObject() : undefined,
            active: this.active,
            inference: this.inference ? this.inference.toObject() : undefined,
            streamingServer: this.streamingServer
                ? this.streamingServer.toObject()
                : undefined,
            voiceActivityDetection: this.voiceActivityDetection
                ? this.voiceActivityDetection.toObject()
                : undefined,
            postProcessing: this.postProcessing
                ? this.postProcessing.toObject()
                : undefined,
            logging: this.logging ? this.logging.toObject() : undefined
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            id: this.id,
            description: this.description
                ? this.description.toProtobufJSON(options)
                : null,
            active: this.active,
            inference: this.inference ? this.inference.toProtobufJSON(options) : null,
            streamingServer: this.streamingServer
                ? this.streamingServer.toProtobufJSON(options)
                : null,
            voiceActivityDetection: this.voiceActivityDetection
                ? this.voiceActivityDetection.toProtobufJSON(options)
                : null,
            postProcessing: this.postProcessing
                ? this.postProcessing.toProtobufJSON(options)
                : null,
            logging: this.logging ? this.logging.toProtobufJSON(options) : null
        };
    }
}
Speech2TextConfig.id = 'ondewo.s2t.Speech2TextConfig';
/**
 * Message implementation for ondewo.s2t.Description
 */
class Description {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Description to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.language = _value.language;
        this.pipelineOwner = _value.pipelineOwner;
        this.domain = _value.domain;
        this.comments = _value.comments;
        Description.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Description();
        Description.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.language = _instance.language || '';
        _instance.pipelineOwner = _instance.pipelineOwner || '';
        _instance.domain = _instance.domain || '';
        _instance.comments = _instance.comments || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.language = _reader.readString();
                    break;
                case 2:
                    _instance.pipelineOwner = _reader.readString();
                    break;
                case 3:
                    _instance.domain = _reader.readString();
                    break;
                case 4:
                    _instance.comments = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Description.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.language) {
            _writer.writeString(1, _instance.language);
        }
        if (_instance.pipelineOwner) {
            _writer.writeString(2, _instance.pipelineOwner);
        }
        if (_instance.domain) {
            _writer.writeString(3, _instance.domain);
        }
        if (_instance.comments) {
            _writer.writeString(4, _instance.comments);
        }
    }
    get language() {
        return this._language;
    }
    set language(value) {
        this._language = value;
    }
    get pipelineOwner() {
        return this._pipelineOwner;
    }
    set pipelineOwner(value) {
        this._pipelineOwner = value;
    }
    get domain() {
        return this._domain;
    }
    set domain(value) {
        this._domain = value;
    }
    get comments() {
        return this._comments;
    }
    set comments(value) {
        this._comments = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Description.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            language: this.language,
            pipelineOwner: this.pipelineOwner,
            domain: this.domain,
            comments: this.comments
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            language: this.language,
            pipelineOwner: this.pipelineOwner,
            domain: this.domain,
            comments: this.comments
        };
    }
}
Description.id = 'ondewo.s2t.Description';
/**
 * Message implementation for ondewo.s2t.Inference
 */
class Inference {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Inference to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.ctcAcousticModels = _value.ctcAcousticModels
            ? new CtcAcousticModels(_value.ctcAcousticModels)
            : undefined;
        this.languageModel = _value.languageModel
            ? new LanguageModel(_value.languageModel)
            : undefined;
        Inference.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Inference();
        Inference.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.ctcAcousticModels = _instance.ctcAcousticModels || undefined;
        _instance.languageModel = _instance.languageModel || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.ctcAcousticModels = new CtcAcousticModels();
                    _reader.readMessage(_instance.ctcAcousticModels, CtcAcousticModels.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.languageModel = new LanguageModel();
                    _reader.readMessage(_instance.languageModel, LanguageModel.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        Inference.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.ctcAcousticModels) {
            _writer.writeMessage(1, _instance.ctcAcousticModels, CtcAcousticModels.serializeBinaryToWriter);
        }
        if (_instance.languageModel) {
            _writer.writeMessage(2, _instance.languageModel, LanguageModel.serializeBinaryToWriter);
        }
    }
    get ctcAcousticModels() {
        return this._ctcAcousticModels;
    }
    set ctcAcousticModels(value) {
        this._ctcAcousticModels = value;
    }
    get languageModel() {
        return this._languageModel;
    }
    set languageModel(value) {
        this._languageModel = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Inference.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            ctcAcousticModels: this.ctcAcousticModels
                ? this.ctcAcousticModels.toObject()
                : undefined,
            languageModel: this.languageModel
                ? this.languageModel.toObject()
                : undefined
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            ctcAcousticModels: this.ctcAcousticModels
                ? this.ctcAcousticModels.toProtobufJSON(options)
                : null,
            languageModel: this.languageModel
                ? this.languageModel.toProtobufJSON(options)
                : null
        };
    }
}
Inference.id = 'ondewo.s2t.Inference';
/**
 * Message implementation for ondewo.s2t.CtcAcousticModels
 */
class CtcAcousticModels {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CtcAcousticModels to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.type = _value.type;
        this.quartznet = _value.quartznet
            ? new Quartznet(_value.quartznet)
            : undefined;
        this.quartznetTriton = _value.quartznetTriton
            ? new QuartznetTriton(_value.quartznetTriton)
            : undefined;
        this.wav2vec = _value.wav2vec ? new Wav2Vec(_value.wav2vec) : undefined;
        CtcAcousticModels.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CtcAcousticModels();
        CtcAcousticModels.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.type = _instance.type || '';
        _instance.quartznet = _instance.quartznet || undefined;
        _instance.quartznetTriton = _instance.quartznetTriton || undefined;
        _instance.wav2vec = _instance.wav2vec || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.type = _reader.readString();
                    break;
                case 2:
                    _instance.quartznet = new Quartznet();
                    _reader.readMessage(_instance.quartznet, Quartznet.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.quartznetTriton = new QuartznetTriton();
                    _reader.readMessage(_instance.quartznetTriton, QuartznetTriton.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.wav2vec = new Wav2Vec();
                    _reader.readMessage(_instance.wav2vec, Wav2Vec.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        CtcAcousticModels.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.type) {
            _writer.writeString(1, _instance.type);
        }
        if (_instance.quartznet) {
            _writer.writeMessage(2, _instance.quartznet, Quartznet.serializeBinaryToWriter);
        }
        if (_instance.quartznetTriton) {
            _writer.writeMessage(3, _instance.quartznetTriton, QuartznetTriton.serializeBinaryToWriter);
        }
        if (_instance.wav2vec) {
            _writer.writeMessage(4, _instance.wav2vec, Wav2Vec.serializeBinaryToWriter);
        }
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get quartznet() {
        return this._quartznet;
    }
    set quartznet(value) {
        this._quartznet = value;
    }
    get quartznetTriton() {
        return this._quartznetTriton;
    }
    set quartznetTriton(value) {
        this._quartznetTriton = value;
    }
    get wav2vec() {
        return this._wav2vec;
    }
    set wav2vec(value) {
        this._wav2vec = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        CtcAcousticModels.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            type: this.type,
            quartznet: this.quartznet ? this.quartznet.toObject() : undefined,
            quartznetTriton: this.quartznetTriton
                ? this.quartznetTriton.toObject()
                : undefined,
            wav2vec: this.wav2vec ? this.wav2vec.toObject() : undefined
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            type: this.type,
            quartznet: this.quartznet ? this.quartznet.toProtobufJSON(options) : null,
            quartznetTriton: this.quartznetTriton
                ? this.quartznetTriton.toProtobufJSON(options)
                : null,
            wav2vec: this.wav2vec ? this.wav2vec.toProtobufJSON(options) : null
        };
    }
}
CtcAcousticModels.id = 'ondewo.s2t.CtcAcousticModels';
/**
 * Message implementation for ondewo.s2t.Wav2Vec
 */
class Wav2Vec {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Wav2Vec to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.modelPath = _value.modelPath;
        this.useGpu = _value.useGpu;
        Wav2Vec.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Wav2Vec();
        Wav2Vec.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.modelPath = _instance.modelPath || '';
        _instance.useGpu = _instance.useGpu || false;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.modelPath = _reader.readString();
                    break;
                case 2:
                    _instance.useGpu = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Wav2Vec.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.modelPath) {
            _writer.writeString(1, _instance.modelPath);
        }
        if (_instance.useGpu) {
            _writer.writeBool(2, _instance.useGpu);
        }
    }
    get modelPath() {
        return this._modelPath;
    }
    set modelPath(value) {
        this._modelPath = value;
    }
    get useGpu() {
        return this._useGpu;
    }
    set useGpu(value) {
        this._useGpu = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Wav2Vec.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            modelPath: this.modelPath,
            useGpu: this.useGpu
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            modelPath: this.modelPath,
            useGpu: this.useGpu
        };
    }
}
Wav2Vec.id = 'ondewo.s2t.Wav2Vec';
/**
 * Message implementation for ondewo.s2t.Quartznet
 */
class Quartznet {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Quartznet to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.configPath = _value.configPath;
        this.loadType = _value.loadType;
        this.ptFiles = _value.ptFiles ? new PtFiles(_value.ptFiles) : undefined;
        this.ckptFile = _value.ckptFile ? new CkptFile(_value.ckptFile) : undefined;
        Quartznet.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Quartznet();
        Quartznet.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.configPath = _instance.configPath || '';
        _instance.loadType = _instance.loadType || '';
        _instance.ptFiles = _instance.ptFiles || undefined;
        _instance.ckptFile = _instance.ckptFile || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.configPath = _reader.readString();
                    break;
                case 2:
                    _instance.loadType = _reader.readString();
                    break;
                case 3:
                    _instance.ptFiles = new PtFiles();
                    _reader.readMessage(_instance.ptFiles, PtFiles.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.ckptFile = new CkptFile();
                    _reader.readMessage(_instance.ckptFile, CkptFile.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        Quartznet.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.configPath) {
            _writer.writeString(1, _instance.configPath);
        }
        if (_instance.loadType) {
            _writer.writeString(2, _instance.loadType);
        }
        if (_instance.ptFiles) {
            _writer.writeMessage(3, _instance.ptFiles, PtFiles.serializeBinaryToWriter);
        }
        if (_instance.ckptFile) {
            _writer.writeMessage(4, _instance.ckptFile, CkptFile.serializeBinaryToWriter);
        }
    }
    get configPath() {
        return this._configPath;
    }
    set configPath(value) {
        this._configPath = value;
    }
    get loadType() {
        return this._loadType;
    }
    set loadType(value) {
        this._loadType = value;
    }
    get ptFiles() {
        return this._ptFiles;
    }
    set ptFiles(value) {
        this._ptFiles = value;
    }
    get ckptFile() {
        return this._ckptFile;
    }
    set ckptFile(value) {
        this._ckptFile = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Quartznet.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            configPath: this.configPath,
            loadType: this.loadType,
            ptFiles: this.ptFiles ? this.ptFiles.toObject() : undefined,
            ckptFile: this.ckptFile ? this.ckptFile.toObject() : undefined
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            configPath: this.configPath,
            loadType: this.loadType,
            ptFiles: this.ptFiles ? this.ptFiles.toProtobufJSON(options) : null,
            ckptFile: this.ckptFile ? this.ckptFile.toProtobufJSON(options) : null
        };
    }
}
Quartznet.id = 'ondewo.s2t.Quartznet';
/**
 * Message implementation for ondewo.s2t.PtFiles
 */
class PtFiles {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PtFiles to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.path = _value.path;
        this.step = _value.step;
        PtFiles.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new PtFiles();
        PtFiles.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.path = _instance.path || '';
        _instance.step = _instance.step || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.path = _reader.readString();
                    break;
                case 2:
                    _instance.step = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        PtFiles.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.path) {
            _writer.writeString(1, _instance.path);
        }
        if (_instance.step) {
            _writer.writeString(2, _instance.step);
        }
    }
    get path() {
        return this._path;
    }
    set path(value) {
        this._path = value;
    }
    get step() {
        return this._step;
    }
    set step(value) {
        this._step = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        PtFiles.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            path: this.path,
            step: this.step
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            path: this.path,
            step: this.step
        };
    }
}
PtFiles.id = 'ondewo.s2t.PtFiles';
/**
 * Message implementation for ondewo.s2t.CkptFile
 */
class CkptFile {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CkptFile to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.path = _value.path;
        CkptFile.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CkptFile();
        CkptFile.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.path = _instance.path || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.path = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        CkptFile.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.path) {
            _writer.writeString(1, _instance.path);
        }
    }
    get path() {
        return this._path;
    }
    set path(value) {
        this._path = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        CkptFile.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            path: this.path
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            path: this.path
        };
    }
}
CkptFile.id = 'ondewo.s2t.CkptFile';
/**
 * Message implementation for ondewo.s2t.QuartznetTriton
 */
class QuartznetTriton {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of QuartznetTriton to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.configPath = _value.configPath;
        this.tritonUrl = _value.tritonUrl;
        this.tritonModel = _value.tritonModel;
        QuartznetTriton.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new QuartznetTriton();
        QuartznetTriton.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.configPath = _instance.configPath || '';
        _instance.tritonUrl = _instance.tritonUrl || '';
        _instance.tritonModel = _instance.tritonModel || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.configPath = _reader.readString();
                    break;
                case 2:
                    _instance.tritonUrl = _reader.readString();
                    break;
                case 3:
                    _instance.tritonModel = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        QuartznetTriton.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.configPath) {
            _writer.writeString(1, _instance.configPath);
        }
        if (_instance.tritonUrl) {
            _writer.writeString(2, _instance.tritonUrl);
        }
        if (_instance.tritonModel) {
            _writer.writeString(3, _instance.tritonModel);
        }
    }
    get configPath() {
        return this._configPath;
    }
    set configPath(value) {
        this._configPath = value;
    }
    get tritonUrl() {
        return this._tritonUrl;
    }
    set tritonUrl(value) {
        this._tritonUrl = value;
    }
    get tritonModel() {
        return this._tritonModel;
    }
    set tritonModel(value) {
        this._tritonModel = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        QuartznetTriton.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            configPath: this.configPath,
            tritonUrl: this.tritonUrl,
            tritonModel: this.tritonModel
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            configPath: this.configPath,
            tritonUrl: this.tritonUrl,
            tritonModel: this.tritonModel
        };
    }
}
QuartznetTriton.id = 'ondewo.s2t.QuartznetTriton';
/**
 * Message implementation for ondewo.s2t.LanguageModel
 */
class LanguageModel {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LanguageModel to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.path = _value.path;
        this.beamSize = _value.beamSize;
        this.beamSearchScorerAlpha = _value.beamSearchScorerAlpha;
        this.beamSearchScorerBeta = _value.beamSearchScorerBeta;
        LanguageModel.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new LanguageModel();
        LanguageModel.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.path = _instance.path || '';
        _instance.beamSize = _instance.beamSize || '0';
        _instance.beamSearchScorerAlpha = _instance.beamSearchScorerAlpha || 0;
        _instance.beamSearchScorerBeta = _instance.beamSearchScorerBeta || 0;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.path = _reader.readString();
                    break;
                case 2:
                    _instance.beamSize = _reader.readInt64String();
                    break;
                case 3:
                    _instance.beamSearchScorerAlpha = _reader.readFloat();
                    break;
                case 4:
                    _instance.beamSearchScorerBeta = _reader.readFloat();
                    break;
                default:
                    _reader.skipField();
            }
        }
        LanguageModel.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.path) {
            _writer.writeString(1, _instance.path);
        }
        if (_instance.beamSize) {
            _writer.writeInt64String(2, _instance.beamSize);
        }
        if (_instance.beamSearchScorerAlpha) {
            _writer.writeFloat(3, _instance.beamSearchScorerAlpha);
        }
        if (_instance.beamSearchScorerBeta) {
            _writer.writeFloat(4, _instance.beamSearchScorerBeta);
        }
    }
    get path() {
        return this._path;
    }
    set path(value) {
        this._path = value;
    }
    get beamSize() {
        return this._beamSize;
    }
    set beamSize(value) {
        this._beamSize = value;
    }
    get beamSearchScorerAlpha() {
        return this._beamSearchScorerAlpha;
    }
    set beamSearchScorerAlpha(value) {
        this._beamSearchScorerAlpha = value;
    }
    get beamSearchScorerBeta() {
        return this._beamSearchScorerBeta;
    }
    set beamSearchScorerBeta(value) {
        this._beamSearchScorerBeta = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        LanguageModel.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            path: this.path,
            beamSize: this.beamSize,
            beamSearchScorerAlpha: this.beamSearchScorerAlpha,
            beamSearchScorerBeta: this.beamSearchScorerBeta
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            path: this.path,
            beamSize: this.beamSize,
            beamSearchScorerAlpha: this.beamSearchScorerAlpha,
            beamSearchScorerBeta: this.beamSearchScorerBeta
        };
    }
}
LanguageModel.id = 'ondewo.s2t.LanguageModel';
/**
 * Message implementation for ondewo.s2t.StreamingServer
 */
class StreamingServer {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StreamingServer to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.host = _value.host;
        this.port = _value.port;
        this.outputStyle = _value.outputStyle;
        this.streamingSpeechRecognition = _value.streamingSpeechRecognition
            ? new StreamingSpeechRecognition(_value.streamingSpeechRecognition)
            : undefined;
        StreamingServer.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new StreamingServer();
        StreamingServer.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.host = _instance.host || '';
        _instance.port = _instance.port || '0';
        _instance.outputStyle = _instance.outputStyle || '';
        _instance.streamingSpeechRecognition =
            _instance.streamingSpeechRecognition || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.host = _reader.readString();
                    break;
                case 2:
                    _instance.port = _reader.readInt64String();
                    break;
                case 3:
                    _instance.outputStyle = _reader.readString();
                    break;
                case 4:
                    _instance.streamingSpeechRecognition = new StreamingSpeechRecognition();
                    _reader.readMessage(_instance.streamingSpeechRecognition, StreamingSpeechRecognition.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        StreamingServer.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.host) {
            _writer.writeString(1, _instance.host);
        }
        if (_instance.port) {
            _writer.writeInt64String(2, _instance.port);
        }
        if (_instance.outputStyle) {
            _writer.writeString(3, _instance.outputStyle);
        }
        if (_instance.streamingSpeechRecognition) {
            _writer.writeMessage(4, _instance.streamingSpeechRecognition, StreamingSpeechRecognition.serializeBinaryToWriter);
        }
    }
    get host() {
        return this._host;
    }
    set host(value) {
        this._host = value;
    }
    get port() {
        return this._port;
    }
    set port(value) {
        this._port = value;
    }
    get outputStyle() {
        return this._outputStyle;
    }
    set outputStyle(value) {
        this._outputStyle = value;
    }
    get streamingSpeechRecognition() {
        return this._streamingSpeechRecognition;
    }
    set streamingSpeechRecognition(value) {
        this._streamingSpeechRecognition = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        StreamingServer.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            host: this.host,
            port: this.port,
            outputStyle: this.outputStyle,
            streamingSpeechRecognition: this.streamingSpeechRecognition
                ? this.streamingSpeechRecognition.toObject()
                : undefined
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            host: this.host,
            port: this.port,
            outputStyle: this.outputStyle,
            streamingSpeechRecognition: this.streamingSpeechRecognition
                ? this.streamingSpeechRecognition.toProtobufJSON(options)
                : null
        };
    }
}
StreamingServer.id = 'ondewo.s2t.StreamingServer';
/**
 * Message implementation for ondewo.s2t.StreamingSpeechRecognition
 */
class StreamingSpeechRecognition {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StreamingSpeechRecognition to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.transcribeNotFinal = _value.transcribeNotFinal;
        this.ctcDecodingMethod = _value.ctcDecodingMethod;
        this.samplingRate = _value.samplingRate;
        this.minAudioChunkSize = _value.minAudioChunkSize;
        this.startOfUtteranceThreshold = _value.startOfUtteranceThreshold;
        this.endOfUtteranceThreshold = _value.endOfUtteranceThreshold;
        StreamingSpeechRecognition.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new StreamingSpeechRecognition();
        StreamingSpeechRecognition.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.transcribeNotFinal = _instance.transcribeNotFinal || false;
        _instance.ctcDecodingMethod = _instance.ctcDecodingMethod || '';
        _instance.samplingRate = _instance.samplingRate || '0';
        _instance.minAudioChunkSize = _instance.minAudioChunkSize || '0';
        _instance.startOfUtteranceThreshold =
            _instance.startOfUtteranceThreshold || 0;
        _instance.endOfUtteranceThreshold = _instance.endOfUtteranceThreshold || 0;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.transcribeNotFinal = _reader.readBool();
                    break;
                case 2:
                    _instance.ctcDecodingMethod = _reader.readString();
                    break;
                case 3:
                    _instance.samplingRate = _reader.readInt64String();
                    break;
                case 4:
                    _instance.minAudioChunkSize = _reader.readInt64String();
                    break;
                case 5:
                    _instance.startOfUtteranceThreshold = _reader.readFloat();
                    break;
                case 6:
                    _instance.endOfUtteranceThreshold = _reader.readFloat();
                    break;
                default:
                    _reader.skipField();
            }
        }
        StreamingSpeechRecognition.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.transcribeNotFinal) {
            _writer.writeBool(1, _instance.transcribeNotFinal);
        }
        if (_instance.ctcDecodingMethod) {
            _writer.writeString(2, _instance.ctcDecodingMethod);
        }
        if (_instance.samplingRate) {
            _writer.writeInt64String(3, _instance.samplingRate);
        }
        if (_instance.minAudioChunkSize) {
            _writer.writeInt64String(4, _instance.minAudioChunkSize);
        }
        if (_instance.startOfUtteranceThreshold) {
            _writer.writeFloat(5, _instance.startOfUtteranceThreshold);
        }
        if (_instance.endOfUtteranceThreshold) {
            _writer.writeFloat(6, _instance.endOfUtteranceThreshold);
        }
    }
    get transcribeNotFinal() {
        return this._transcribeNotFinal;
    }
    set transcribeNotFinal(value) {
        this._transcribeNotFinal = value;
    }
    get ctcDecodingMethod() {
        return this._ctcDecodingMethod;
    }
    set ctcDecodingMethod(value) {
        this._ctcDecodingMethod = value;
    }
    get samplingRate() {
        return this._samplingRate;
    }
    set samplingRate(value) {
        this._samplingRate = value;
    }
    get minAudioChunkSize() {
        return this._minAudioChunkSize;
    }
    set minAudioChunkSize(value) {
        this._minAudioChunkSize = value;
    }
    get startOfUtteranceThreshold() {
        return this._startOfUtteranceThreshold;
    }
    set startOfUtteranceThreshold(value) {
        this._startOfUtteranceThreshold = value;
    }
    get endOfUtteranceThreshold() {
        return this._endOfUtteranceThreshold;
    }
    set endOfUtteranceThreshold(value) {
        this._endOfUtteranceThreshold = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        StreamingSpeechRecognition.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            transcribeNotFinal: this.transcribeNotFinal,
            ctcDecodingMethod: this.ctcDecodingMethod,
            samplingRate: this.samplingRate,
            minAudioChunkSize: this.minAudioChunkSize,
            startOfUtteranceThreshold: this.startOfUtteranceThreshold,
            endOfUtteranceThreshold: this.endOfUtteranceThreshold
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            transcribeNotFinal: this.transcribeNotFinal,
            ctcDecodingMethod: this.ctcDecodingMethod,
            samplingRate: this.samplingRate,
            minAudioChunkSize: this.minAudioChunkSize,
            startOfUtteranceThreshold: this.startOfUtteranceThreshold,
            endOfUtteranceThreshold: this.endOfUtteranceThreshold
        };
    }
}
StreamingSpeechRecognition.id = 'ondewo.s2t.StreamingSpeechRecognition';
/**
 * Message implementation for ondewo.s2t.VoiceActivityDetection
 */
class VoiceActivityDetection {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VoiceActivityDetection to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.active = _value.active;
        this.samplingRate = _value.samplingRate;
        this.pyannote = _value.pyannote ? new Pyannote(_value.pyannote) : undefined;
        this.matchbox = _value.matchbox ? new Matchbox(_value.matchbox) : undefined;
        VoiceActivityDetection.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new VoiceActivityDetection();
        VoiceActivityDetection.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.active = _instance.active || '';
        _instance.samplingRate = _instance.samplingRate || '0';
        _instance.pyannote = _instance.pyannote || undefined;
        _instance.matchbox = _instance.matchbox || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.active = _reader.readString();
                    break;
                case 2:
                    _instance.samplingRate = _reader.readInt64String();
                    break;
                case 3:
                    _instance.pyannote = new Pyannote();
                    _reader.readMessage(_instance.pyannote, Pyannote.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.matchbox = new Matchbox();
                    _reader.readMessage(_instance.matchbox, Matchbox.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        VoiceActivityDetection.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.active) {
            _writer.writeString(1, _instance.active);
        }
        if (_instance.samplingRate) {
            _writer.writeInt64String(2, _instance.samplingRate);
        }
        if (_instance.pyannote) {
            _writer.writeMessage(3, _instance.pyannote, Pyannote.serializeBinaryToWriter);
        }
        if (_instance.matchbox) {
            _writer.writeMessage(4, _instance.matchbox, Matchbox.serializeBinaryToWriter);
        }
    }
    get active() {
        return this._active;
    }
    set active(value) {
        this._active = value;
    }
    get samplingRate() {
        return this._samplingRate;
    }
    set samplingRate(value) {
        this._samplingRate = value;
    }
    get pyannote() {
        return this._pyannote;
    }
    set pyannote(value) {
        this._pyannote = value;
    }
    get matchbox() {
        return this._matchbox;
    }
    set matchbox(value) {
        this._matchbox = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        VoiceActivityDetection.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            active: this.active,
            samplingRate: this.samplingRate,
            pyannote: this.pyannote ? this.pyannote.toObject() : undefined,
            matchbox: this.matchbox ? this.matchbox.toObject() : undefined
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            active: this.active,
            samplingRate: this.samplingRate,
            pyannote: this.pyannote ? this.pyannote.toProtobufJSON(options) : null,
            matchbox: this.matchbox ? this.matchbox.toProtobufJSON(options) : null
        };
    }
}
VoiceActivityDetection.id = 'ondewo.s2t.VoiceActivityDetection';
/**
 * Message implementation for ondewo.s2t.Pyannote
 */
class Pyannote {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Pyannote to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.modelPath = _value.modelPath;
        this.minAudioSize = _value.minAudioSize;
        this.offset = _value.offset;
        this.onset = _value.onset;
        this.logScale = _value.logScale;
        this.minDurationOff = _value.minDurationOff;
        this.minDurationOn = _value.minDurationOn;
        Pyannote.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Pyannote();
        Pyannote.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.modelPath = _instance.modelPath || '';
        _instance.minAudioSize = _instance.minAudioSize || '0';
        _instance.offset = _instance.offset || 0;
        _instance.onset = _instance.onset || 0;
        _instance.logScale = _instance.logScale || false;
        _instance.minDurationOff = _instance.minDurationOff || 0;
        _instance.minDurationOn = _instance.minDurationOn || 0;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.modelPath = _reader.readString();
                    break;
                case 2:
                    _instance.minAudioSize = _reader.readInt64String();
                    break;
                case 3:
                    _instance.offset = _reader.readFloat();
                    break;
                case 4:
                    _instance.onset = _reader.readFloat();
                    break;
                case 5:
                    _instance.logScale = _reader.readBool();
                    break;
                case 6:
                    _instance.minDurationOff = _reader.readFloat();
                    break;
                case 7:
                    _instance.minDurationOn = _reader.readFloat();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Pyannote.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.modelPath) {
            _writer.writeString(1, _instance.modelPath);
        }
        if (_instance.minAudioSize) {
            _writer.writeInt64String(2, _instance.minAudioSize);
        }
        if (_instance.offset) {
            _writer.writeFloat(3, _instance.offset);
        }
        if (_instance.onset) {
            _writer.writeFloat(4, _instance.onset);
        }
        if (_instance.logScale) {
            _writer.writeBool(5, _instance.logScale);
        }
        if (_instance.minDurationOff) {
            _writer.writeFloat(6, _instance.minDurationOff);
        }
        if (_instance.minDurationOn) {
            _writer.writeFloat(7, _instance.minDurationOn);
        }
    }
    get modelPath() {
        return this._modelPath;
    }
    set modelPath(value) {
        this._modelPath = value;
    }
    get minAudioSize() {
        return this._minAudioSize;
    }
    set minAudioSize(value) {
        this._minAudioSize = value;
    }
    get offset() {
        return this._offset;
    }
    set offset(value) {
        this._offset = value;
    }
    get onset() {
        return this._onset;
    }
    set onset(value) {
        this._onset = value;
    }
    get logScale() {
        return this._logScale;
    }
    set logScale(value) {
        this._logScale = value;
    }
    get minDurationOff() {
        return this._minDurationOff;
    }
    set minDurationOff(value) {
        this._minDurationOff = value;
    }
    get minDurationOn() {
        return this._minDurationOn;
    }
    set minDurationOn(value) {
        this._minDurationOn = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Pyannote.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            modelPath: this.modelPath,
            minAudioSize: this.minAudioSize,
            offset: this.offset,
            onset: this.onset,
            logScale: this.logScale,
            minDurationOff: this.minDurationOff,
            minDurationOn: this.minDurationOn
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            modelPath: this.modelPath,
            minAudioSize: this.minAudioSize,
            offset: this.offset,
            onset: this.onset,
            logScale: this.logScale,
            minDurationOff: this.minDurationOff,
            minDurationOn: this.minDurationOn
        };
    }
}
Pyannote.id = 'ondewo.s2t.Pyannote';
/**
 * Message implementation for ondewo.s2t.Matchbox
 */
class Matchbox {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Matchbox to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.modelConfig = _value.modelConfig;
        this.encoderPath = _value.encoderPath;
        this.decoderPath = _value.decoderPath;
        Matchbox.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Matchbox();
        Matchbox.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.modelConfig = _instance.modelConfig || '';
        _instance.encoderPath = _instance.encoderPath || '';
        _instance.decoderPath = _instance.decoderPath || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.modelConfig = _reader.readString();
                    break;
                case 2:
                    _instance.encoderPath = _reader.readString();
                    break;
                case 3:
                    _instance.decoderPath = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Matchbox.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.modelConfig) {
            _writer.writeString(1, _instance.modelConfig);
        }
        if (_instance.encoderPath) {
            _writer.writeString(2, _instance.encoderPath);
        }
        if (_instance.decoderPath) {
            _writer.writeString(3, _instance.decoderPath);
        }
    }
    get modelConfig() {
        return this._modelConfig;
    }
    set modelConfig(value) {
        this._modelConfig = value;
    }
    get encoderPath() {
        return this._encoderPath;
    }
    set encoderPath(value) {
        this._encoderPath = value;
    }
    get decoderPath() {
        return this._decoderPath;
    }
    set decoderPath(value) {
        this._decoderPath = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Matchbox.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            modelConfig: this.modelConfig,
            encoderPath: this.encoderPath,
            decoderPath: this.decoderPath
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            modelConfig: this.modelConfig,
            encoderPath: this.encoderPath,
            decoderPath: this.decoderPath
        };
    }
}
Matchbox.id = 'ondewo.s2t.Matchbox';
/**
 * Message implementation for ondewo.s2t.PostProcessing
 */
class PostProcessing {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PostProcessing to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.pipeline = (_value.pipeline || []).slice();
        this.postProcessors = _value.postProcessors
            ? new PostProcessors(_value.postProcessors)
            : undefined;
        PostProcessing.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new PostProcessing();
        PostProcessing.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.pipeline = _instance.pipeline || [];
        _instance.postProcessors = _instance.postProcessors || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    (_instance.pipeline = _instance.pipeline || []).push(_reader.readString());
                    break;
                case 2:
                    _instance.postProcessors = new PostProcessors();
                    _reader.readMessage(_instance.postProcessors, PostProcessors.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        PostProcessing.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.pipeline && _instance.pipeline.length) {
            _writer.writeRepeatedString(1, _instance.pipeline);
        }
        if (_instance.postProcessors) {
            _writer.writeMessage(2, _instance.postProcessors, PostProcessors.serializeBinaryToWriter);
        }
    }
    get pipeline() {
        return this._pipeline;
    }
    set pipeline(value) {
        this._pipeline = value;
    }
    get postProcessors() {
        return this._postProcessors;
    }
    set postProcessors(value) {
        this._postProcessors = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        PostProcessing.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            pipeline: (this.pipeline || []).slice(),
            postProcessors: this.postProcessors
                ? this.postProcessors.toObject()
                : undefined
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            pipeline: (this.pipeline || []).slice(),
            postProcessors: this.postProcessors
                ? this.postProcessors.toProtobufJSON(options)
                : null
        };
    }
}
PostProcessing.id = 'ondewo.s2t.PostProcessing';
/**
 * Message implementation for ondewo.s2t.PostProcessors
 */
class PostProcessors {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PostProcessors to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.symSpell = _value.symSpell ? new SymSpell(_value.symSpell) : undefined;
        this.normalization = _value.normalization
            ? new Normalization(_value.normalization)
            : undefined;
        PostProcessors.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new PostProcessors();
        PostProcessors.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.symSpell = _instance.symSpell || undefined;
        _instance.normalization = _instance.normalization || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.symSpell = new SymSpell();
                    _reader.readMessage(_instance.symSpell, SymSpell.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.normalization = new Normalization();
                    _reader.readMessage(_instance.normalization, Normalization.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        PostProcessors.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.symSpell) {
            _writer.writeMessage(1, _instance.symSpell, SymSpell.serializeBinaryToWriter);
        }
        if (_instance.normalization) {
            _writer.writeMessage(2, _instance.normalization, Normalization.serializeBinaryToWriter);
        }
    }
    get symSpell() {
        return this._symSpell;
    }
    set symSpell(value) {
        this._symSpell = value;
    }
    get normalization() {
        return this._normalization;
    }
    set normalization(value) {
        this._normalization = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        PostProcessors.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            symSpell: this.symSpell ? this.symSpell.toObject() : undefined,
            normalization: this.normalization
                ? this.normalization.toObject()
                : undefined
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            symSpell: this.symSpell ? this.symSpell.toProtobufJSON(options) : null,
            normalization: this.normalization
                ? this.normalization.toProtobufJSON(options)
                : null
        };
    }
}
PostProcessors.id = 'ondewo.s2t.PostProcessors';
/**
 * Message implementation for ondewo.s2t.SymSpell
 */
class SymSpell {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SymSpell to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.dictPath = _value.dictPath;
        this.maxDictionaryEditDistance = _value.maxDictionaryEditDistance;
        this.prefixLength = _value.prefixLength;
        SymSpell.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new SymSpell();
        SymSpell.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.dictPath = _instance.dictPath || '';
        _instance.maxDictionaryEditDistance =
            _instance.maxDictionaryEditDistance || '0';
        _instance.prefixLength = _instance.prefixLength || '0';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.dictPath = _reader.readString();
                    break;
                case 2:
                    _instance.maxDictionaryEditDistance = _reader.readInt64String();
                    break;
                case 3:
                    _instance.prefixLength = _reader.readInt64String();
                    break;
                default:
                    _reader.skipField();
            }
        }
        SymSpell.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.dictPath) {
            _writer.writeString(1, _instance.dictPath);
        }
        if (_instance.maxDictionaryEditDistance) {
            _writer.writeInt64String(2, _instance.maxDictionaryEditDistance);
        }
        if (_instance.prefixLength) {
            _writer.writeInt64String(3, _instance.prefixLength);
        }
    }
    get dictPath() {
        return this._dictPath;
    }
    set dictPath(value) {
        this._dictPath = value;
    }
    get maxDictionaryEditDistance() {
        return this._maxDictionaryEditDistance;
    }
    set maxDictionaryEditDistance(value) {
        this._maxDictionaryEditDistance = value;
    }
    get prefixLength() {
        return this._prefixLength;
    }
    set prefixLength(value) {
        this._prefixLength = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        SymSpell.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            dictPath: this.dictPath,
            maxDictionaryEditDistance: this.maxDictionaryEditDistance,
            prefixLength: this.prefixLength
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            dictPath: this.dictPath,
            maxDictionaryEditDistance: this.maxDictionaryEditDistance,
            prefixLength: this.prefixLength
        };
    }
}
SymSpell.id = 'ondewo.s2t.SymSpell';
/**
 * Message implementation for ondewo.s2t.Normalization
 */
class Normalization {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Normalization to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.language = _value.language;
        Normalization.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Normalization();
        Normalization.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.language = _instance.language || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.language = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Normalization.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.language) {
            _writer.writeString(1, _instance.language);
        }
    }
    get language() {
        return this._language;
    }
    set language(value) {
        this._language = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Normalization.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            language: this.language
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            language: this.language
        };
    }
}
Normalization.id = 'ondewo.s2t.Normalization';
/**
 * Message implementation for ondewo.s2t.Logging
 */
class Logging {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Logging to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.type = _value.type;
        this.path = _value.path;
        Logging.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Logging();
        Logging.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.type = _instance.type || '';
        _instance.path = _instance.path || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.type = _reader.readString();
                    break;
                case 2:
                    _instance.path = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Logging.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.type) {
            _writer.writeString(1, _instance.type);
        }
        if (_instance.path) {
            _writer.writeString(2, _instance.path);
        }
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get path() {
        return this._path;
    }
    set path(value) {
        this._path = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Logging.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            type: this.type,
            path: this.path
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            type: this.type,
            path: this.path
        };
    }
}
Logging.id = 'ondewo.s2t.Logging';

/* tslint:disable */
/**
 * Service client implementation for ondewo.s2t.Speech2Text
 */
class Speech2TextClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary RPC for /ondewo.s2t.Speech2Text/TranscribeFile
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.TranscribeFileResponse>>
             */
            transcribeFile: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.s2t.Speech2Text/TranscribeFile',
                    requestData,
                    requestMetadata,
                    requestClass: TranscribeFileRequest,
                    responseClass: TranscribeFileResponse
                });
            },
            /**
             * Server streaming RPC for /ondewo.s2t.Speech2Text/TranscribeStream
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.TranscribeStreamResponse>>
             */
            transcribeStream: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.serverStream,
                    client: this.client,
                    path: '/ondewo.s2t.Speech2Text/TranscribeStream',
                    requestData,
                    requestMetadata,
                    requestClass: TranscribeStreamRequest,
                    responseClass: TranscribeStreamResponse
                });
            },
            /**
             * Unary RPC for /ondewo.s2t.Speech2Text/GetS2tPipeline
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.Speech2TextConfig>>
             */
            getS2tPipeline: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.s2t.Speech2Text/GetS2tPipeline',
                    requestData,
                    requestMetadata,
                    requestClass: S2tPipelineId,
                    responseClass: Speech2TextConfig
                });
            },
            /**
             * Unary RPC for /ondewo.s2t.Speech2Text/CreateS2tPipeline
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.S2tPipelineId>>
             */
            createS2tPipeline: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.s2t.Speech2Text/CreateS2tPipeline',
                    requestData,
                    requestMetadata,
                    requestClass: Speech2TextConfig,
                    responseClass: S2tPipelineId
                });
            },
            /**
             * Unary RPC for /ondewo.s2t.Speech2Text/DeleteS2tPipeline
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
             */
            deleteS2tPipeline: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.s2t.Speech2Text/DeleteS2tPipeline',
                    requestData,
                    requestMetadata,
                    requestClass: S2tPipelineId,
                    responseClass: Empty
                });
            },
            /**
             * Unary RPC for /ondewo.s2t.Speech2Text/UpdateS2tPipeline
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
             */
            updateS2tPipeline: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.s2t.Speech2Text/UpdateS2tPipeline',
                    requestData,
                    requestMetadata,
                    requestClass: Speech2TextConfig,
                    responseClass: Empty
                });
            },
            /**
             * Unary RPC for /ondewo.s2t.Speech2Text/ListS2tPipelines
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ListS2tPipelinesResponse>>
             */
            listS2tPipelines: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.s2t.Speech2Text/ListS2tPipelines',
                    requestData,
                    requestMetadata,
                    requestClass: ListS2tPipelinesRequest,
                    responseClass: ListS2tPipelinesResponse
                });
            },
            /**
             * Unary RPC for /ondewo.s2t.Speech2Text/ListS2tLanguages
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ListS2tLanguagesResponse>>
             */
            listS2tLanguages: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.s2t.Speech2Text/ListS2tLanguages',
                    requestData,
                    requestMetadata,
                    requestClass: ListS2tLanguagesRequest,
                    responseClass: ListS2tLanguagesResponse
                });
            },
            /**
             * Unary RPC for /ondewo.s2t.Speech2Text/ListS2tDomains
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ListS2tDomainsResponse>>
             */
            listS2tDomains: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.s2t.Speech2Text/ListS2tDomains',
                    requestData,
                    requestMetadata,
                    requestClass: ListS2tDomainsRequest,
                    responseClass: ListS2tDomainsResponse
                });
            }
        };
        this.client = clientFactory.createClient('ondewo.s2t.Speech2Text', settings);
    }
    /**
     * Unary RPC for /ondewo.s2t.Speech2Text/TranscribeFile
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.TranscribeFileResponse>
     */
    transcribeFile(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .transcribeFile(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Server streaming RPC for /ondewo.s2t.Speech2Text/TranscribeStream
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.TranscribeStreamResponse>
     */
    transcribeStream(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .transcribeStream(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.s2t.Speech2Text/GetS2tPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Speech2TextConfig>
     */
    getS2tPipeline(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getS2tPipeline(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.s2t.Speech2Text/CreateS2tPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.S2tPipelineId>
     */
    createS2tPipeline(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .createS2tPipeline(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.s2t.Speech2Text/DeleteS2tPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    deleteS2tPipeline(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .deleteS2tPipeline(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.s2t.Speech2Text/UpdateS2tPipeline
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    updateS2tPipeline(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .updateS2tPipeline(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.s2t.Speech2Text/ListS2tPipelines
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListS2tPipelinesResponse>
     */
    listS2tPipelines(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .listS2tPipelines(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.s2t.Speech2Text/ListS2tLanguages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListS2tLanguagesResponse>
     */
    listS2tLanguages(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .listS2tLanguages(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.s2t.Speech2Text/ListS2tDomains
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListS2tDomainsResponse>
     */
    listS2tDomains(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .listS2tDomains(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
}
Speech2TextClient.ɵprov = ɵɵdefineInjectable({ factory: function Speech2TextClient_Factory() { return new Speech2TextClient(ɵɵinject(GRPC_SPEECH2_TEXT_CLIENT_SETTINGS, 8), ɵɵinject(GRPC_CLIENT_FACTORY), ɵɵinject(GrpcHandler)); }, token: Speech2TextClient, providedIn: "any" });
Speech2TextClient.decorators = [
    { type: Injectable, args: [{ providedIn: 'any' },] }
];
Speech2TextClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_SPEECH2_TEXT_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];

/**
 * Generated bundle index. Do not edit.
 */

export { CTCDecoding, CkptFile, CtcAcousticModels, Description, GRPC_SPEECH2_TEXT_CLIENT_SETTINGS, Inference, LanguageModel, ListS2tDomainsRequest, ListS2tDomainsResponse, ListS2tLanguagesRequest, ListS2tLanguagesResponse, ListS2tPipelinesRequest, ListS2tPipelinesResponse, Logging, Matchbox, Normalization, PostProcessing, PostProcessors, PtFiles, Pyannote, Quartznet, QuartznetTriton, S2tPipelineId, Speech2TextClient, Speech2TextConfig, StreamingServer, StreamingSpeechRecognition, SymSpell, TranscribeFileRequest, TranscribeFileResponse, TranscribeStreamRequest, TranscribeStreamResponse, VoiceActivityDetection, Wav2Vec, WordTiming };
//# sourceMappingURL=ondewo-s2t-client-angular.js.map
