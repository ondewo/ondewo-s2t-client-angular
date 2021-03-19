import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Optional, Inject } from '@angular/core';
import { BinaryWriter, BinaryReader } from 'google-protobuf';
import { GrpcCallType } from '@ngx-grpc/common';
import * as i2 from '@ngx-grpc/core';
import { throwStatusErrors, takeMessages, GRPC_CLIENT_FACTORY, GrpcHandler } from '@ngx-grpc/core';

/* tslint:disable */
/*
  To configure the services you need to provide a configuration for each of them.

  E.g. you can create a module where you configure all of them and then import this module into your AppModule:

  const grpcSettings = { host: environment.grpcHost };

  @NgModule({
    providers: [
      { provide: GRPC_SPEECH2_TEXT_CLIENT_SETTINGS, useValue: grpcSettings },
    ],
  })
  export class GrpcConfigModule { }
*/
const GRPC_SPEECH2_TEXT_CLIENT_SETTINGS = new InjectionToken('GRPC_SPEECH2_TEXT_CLIENT_SETTINGS');

var CTCDecoding;
(function (CTCDecoding) {
    CTCDecoding[CTCDecoding["greedy"] = 0] = "greedy";
    CTCDecoding[CTCDecoding["beamSearchWithLm"] = 1] = "beamSearchWithLm";
})(CTCDecoding || (CTCDecoding = {}));
class TranscribeStreamRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param TranscribeStreamRequest value
     */
    constructor(value) {
        value = value || {};
        this.s2tPipelineId = value.s2tPipelineId;
        this.audioChunk = value.audioChunk;
        this.ctcDecoding = value.ctcDecoding;
        this.spellingCorrection = value.spellingCorrection;
        this.disableNormalization = value.disableNormalization;
        this.endOfStream = value.endOfStream;
        TranscribeStreamRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        TranscribeStreamRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new TranscribeStreamRequest();
        TranscribeStreamRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.s2tPipelineId = instance.s2tPipelineId || '';
        instance.audioChunk = instance.audioChunk || new Uint8Array();
        instance.ctcDecoding = instance.ctcDecoding || 0;
        instance.spellingCorrection = instance.spellingCorrection || false;
        instance.disableNormalization = instance.disableNormalization || false;
        instance.endOfStream = instance.endOfStream || false;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.s2tPipelineId = reader.readString();
                    break;
                case 2:
                    instance.audioChunk = reader.readBytes();
                    break;
                case 3:
                    instance.ctcDecoding = reader.readEnum();
                    break;
                case 4:
                    instance.spellingCorrection = reader.readBool();
                    break;
                case 5:
                    instance.disableNormalization = reader.readBool();
                    break;
                case 6:
                    instance.endOfStream = reader.readBool();
                    break;
                default:
                    reader.skipField();
            }
        }
        TranscribeStreamRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.s2tPipelineId) {
            writer.writeString(1, instance.s2tPipelineId);
        }
        if (instance.audioChunk && instance.audioChunk.length) {
            writer.writeBytes(2, instance.audioChunk);
        }
        if (instance.ctcDecoding) {
            writer.writeEnum(3, instance.ctcDecoding);
        }
        if (instance.spellingCorrection) {
            writer.writeBool(4, instance.spellingCorrection);
        }
        if (instance.disableNormalization) {
            writer.writeBool(5, instance.disableNormalization);
        }
        if (instance.endOfStream) {
            writer.writeBool(6, instance.endOfStream);
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
    toJSON() {
        return this.toObject();
    }
}
class TranscribeStreamResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param TranscribeStreamResponse value
     */
    constructor(value) {
        value = value || {};
        this.transcription = value.transcription;
        this.time = value.time;
        this.final = value.final;
        TranscribeStreamResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        TranscribeStreamResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new TranscribeStreamResponse();
        TranscribeStreamResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.transcription = instance.transcription || '';
        instance.time = instance.time || 0;
        instance.final = instance.final || false;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.transcription = reader.readString();
                    break;
                case 2:
                    instance.time = reader.readFloat();
                    break;
                case 3:
                    instance.final = reader.readBool();
                    break;
                default:
                    reader.skipField();
            }
        }
        TranscribeStreamResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.transcription) {
            writer.writeString(1, instance.transcription);
        }
        if (instance.time) {
            writer.writeFloat(2, instance.time);
        }
        if (instance.final) {
            writer.writeBool(3, instance.final);
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
    toObject() {
        return {
            transcription: this.transcription,
            time: this.time,
            final: this.final
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class TranscribeFileRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param TranscribeFileRequest value
     */
    constructor(value) {
        value = value || {};
        this.s2tPipelineId = value.s2tPipelineId;
        this.audioFile = value.audioFile;
        this.ctcDecoding = value.ctcDecoding;
        this.spellingCorrection = value.spellingCorrection;
        this.disableNormalization = value.disableNormalization;
        this.includeTiming = value.includeTiming;
        TranscribeFileRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        TranscribeFileRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new TranscribeFileRequest();
        TranscribeFileRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.s2tPipelineId = instance.s2tPipelineId || '';
        instance.audioFile = instance.audioFile || new Uint8Array();
        instance.ctcDecoding = instance.ctcDecoding || 0;
        instance.spellingCorrection = instance.spellingCorrection || false;
        instance.disableNormalization = instance.disableNormalization || false;
        instance.includeTiming = instance.includeTiming || false;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.s2tPipelineId = reader.readString();
                    break;
                case 2:
                    instance.audioFile = reader.readBytes();
                    break;
                case 3:
                    instance.ctcDecoding = reader.readEnum();
                    break;
                case 4:
                    instance.spellingCorrection = reader.readBool();
                    break;
                case 5:
                    instance.disableNormalization = reader.readBool();
                    break;
                case 6:
                    instance.includeTiming = reader.readBool();
                    break;
                default:
                    reader.skipField();
            }
        }
        TranscribeFileRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.s2tPipelineId) {
            writer.writeString(1, instance.s2tPipelineId);
        }
        if (instance.audioFile && instance.audioFile.length) {
            writer.writeBytes(2, instance.audioFile);
        }
        if (instance.ctcDecoding) {
            writer.writeEnum(3, instance.ctcDecoding);
        }
        if (instance.spellingCorrection) {
            writer.writeBool(4, instance.spellingCorrection);
        }
        if (instance.disableNormalization) {
            writer.writeBool(5, instance.disableNormalization);
        }
        if (instance.includeTiming) {
            writer.writeBool(6, instance.includeTiming);
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
    toJSON() {
        return this.toObject();
    }
}
class TranscribeFileResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param TranscribeFileResponse value
     */
    constructor(value) {
        value = value || {};
        this.transcription = value.transcription;
        this.time = value.time;
        this.wordTiming = (value.wordTiming || []).map(m => new WordTiming(m));
        TranscribeFileResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        TranscribeFileResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new TranscribeFileResponse();
        TranscribeFileResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.transcription = instance.transcription || '';
        instance.time = instance.time || 0;
        instance.wordTiming = instance.wordTiming || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.transcription = reader.readString();
                    break;
                case 2:
                    instance.time = reader.readFloat();
                    break;
                case 3:
                    const messageInitializer3 = new WordTiming();
                    reader.readMessage(messageInitializer3, WordTiming.fromBinaryReader);
                    (instance.wordTiming = instance.wordTiming || []).push(messageInitializer3);
                    break;
                default:
                    reader.skipField();
            }
        }
        TranscribeFileResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.transcription) {
            writer.writeString(1, instance.transcription);
        }
        if (instance.time) {
            writer.writeFloat(2, instance.time);
        }
        if (instance.wordTiming && instance.wordTiming.length) {
            writer.writeRepeatedMessage(3, instance.wordTiming, WordTiming.toBinaryWriter);
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
    toObject() {
        return {
            transcription: this.transcription,
            time: this.time,
            wordTiming: (this.wordTiming || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class WordTiming {
    /**
     * Creates an object and applies default Protobuf values
     * @param WordTiming value
     */
    constructor(value) {
        value = value || {};
        this.word = value.word;
        this.begin = value.begin;
        this.end = value.end;
        WordTiming.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        WordTiming.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new WordTiming();
        WordTiming.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.word = instance.word || '';
        instance.begin = instance.begin || 0;
        instance.end = instance.end || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.word = reader.readString();
                    break;
                case 2:
                    instance.begin = reader.readInt32();
                    break;
                case 3:
                    instance.end = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        WordTiming.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.word) {
            writer.writeString(1, instance.word);
        }
        if (instance.begin) {
            writer.writeInt32(2, instance.begin);
        }
        if (instance.end) {
            writer.writeInt32(3, instance.end);
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
    toObject() {
        return {
            word: this.word,
            begin: this.begin,
            end: this.end
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class S2tPipelineId {
    /**
     * Creates an object and applies default Protobuf values
     * @param S2tPipelineId value
     */
    constructor(value) {
        value = value || {};
        this.id = value.id;
        S2tPipelineId.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        S2tPipelineId.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new S2tPipelineId();
        S2tPipelineId.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.id = instance.id || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.id = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        S2tPipelineId.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.id) {
            writer.writeString(1, instance.id);
        }
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    toObject() {
        return {
            id: this.id
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListS2tPipelinesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListS2tPipelinesRequest value
     */
    constructor(value) {
        value = value || {};
        this.languages = (value.languages || []).slice();
        this.pipelineOwners = (value.pipelineOwners || []).slice();
        this.domains = (value.domains || []).slice();
        ListS2tPipelinesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListS2tPipelinesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListS2tPipelinesRequest();
        ListS2tPipelinesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.languages = instance.languages || [];
        instance.pipelineOwners = instance.pipelineOwners || [];
        instance.domains = instance.domains || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    (instance.languages = instance.languages || []).push(reader.readString());
                    break;
                case 2:
                    (instance.pipelineOwners = instance.pipelineOwners || []).push(reader.readString());
                    break;
                case 3:
                    (instance.domains = instance.domains || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        ListS2tPipelinesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.languages && instance.languages.length) {
            writer.writeRepeatedString(1, instance.languages);
        }
        if (instance.pipelineOwners && instance.pipelineOwners.length) {
            writer.writeRepeatedString(2, instance.pipelineOwners);
        }
        if (instance.domains && instance.domains.length) {
            writer.writeRepeatedString(3, instance.domains);
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
    toObject() {
        return {
            languages: (this.languages || []).slice(),
            pipelineOwners: (this.pipelineOwners || []).slice(),
            domains: (this.domains || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListS2tPipelinesResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListS2tPipelinesResponse value
     */
    constructor(value) {
        value = value || {};
        this.pipelineConfigs = (value.pipelineConfigs || []).map(m => new Speech2TextConfig(m));
        ListS2tPipelinesResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListS2tPipelinesResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListS2tPipelinesResponse();
        ListS2tPipelinesResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.pipelineConfigs = instance.pipelineConfigs || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Speech2TextConfig();
                    reader.readMessage(messageInitializer1, Speech2TextConfig.fromBinaryReader);
                    (instance.pipelineConfigs = instance.pipelineConfigs || []).push(messageInitializer1);
                    break;
                default:
                    reader.skipField();
            }
        }
        ListS2tPipelinesResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.pipelineConfigs && instance.pipelineConfigs.length) {
            writer.writeRepeatedMessage(1, instance.pipelineConfigs, Speech2TextConfig.toBinaryWriter);
        }
    }
    get pipelineConfigs() {
        return this._pipelineConfigs;
    }
    set pipelineConfigs(value) {
        this._pipelineConfigs = value;
    }
    toObject() {
        return {
            pipelineConfigs: (this.pipelineConfigs || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListS2tLanguagesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListS2tLanguagesRequest value
     */
    constructor(value) {
        value = value || {};
        this.domains = (value.domains || []).slice();
        this.pipelineOwners = (value.pipelineOwners || []).slice();
        ListS2tLanguagesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListS2tLanguagesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListS2tLanguagesRequest();
        ListS2tLanguagesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.domains = instance.domains || [];
        instance.pipelineOwners = instance.pipelineOwners || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    (instance.domains = instance.domains || []).push(reader.readString());
                    break;
                case 2:
                    (instance.pipelineOwners = instance.pipelineOwners || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        ListS2tLanguagesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.domains && instance.domains.length) {
            writer.writeRepeatedString(1, instance.domains);
        }
        if (instance.pipelineOwners && instance.pipelineOwners.length) {
            writer.writeRepeatedString(2, instance.pipelineOwners);
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
    toObject() {
        return {
            domains: (this.domains || []).slice(),
            pipelineOwners: (this.pipelineOwners || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListS2tLanguagesResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListS2tLanguagesResponse value
     */
    constructor(value) {
        value = value || {};
        this.languages = (value.languages || []).slice();
        ListS2tLanguagesResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListS2tLanguagesResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListS2tLanguagesResponse();
        ListS2tLanguagesResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.languages = instance.languages || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    (instance.languages = instance.languages || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        ListS2tLanguagesResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.languages && instance.languages.length) {
            writer.writeRepeatedString(1, instance.languages);
        }
    }
    get languages() {
        return this._languages;
    }
    set languages(value) {
        this._languages = value;
    }
    toObject() {
        return {
            languages: (this.languages || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListS2tDomainsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListS2tDomainsRequest value
     */
    constructor(value) {
        value = value || {};
        this.languages = (value.languages || []).slice();
        this.pipelineOwners = (value.pipelineOwners || []).slice();
        ListS2tDomainsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListS2tDomainsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListS2tDomainsRequest();
        ListS2tDomainsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.languages = instance.languages || [];
        instance.pipelineOwners = instance.pipelineOwners || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    (instance.languages = instance.languages || []).push(reader.readString());
                    break;
                case 2:
                    (instance.pipelineOwners = instance.pipelineOwners || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        ListS2tDomainsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.languages && instance.languages.length) {
            writer.writeRepeatedString(1, instance.languages);
        }
        if (instance.pipelineOwners && instance.pipelineOwners.length) {
            writer.writeRepeatedString(2, instance.pipelineOwners);
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
    toObject() {
        return {
            languages: (this.languages || []).slice(),
            pipelineOwners: (this.pipelineOwners || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class ListS2tDomainsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListS2tDomainsResponse value
     */
    constructor(value) {
        value = value || {};
        this.domains = (value.domains || []).slice();
        ListS2tDomainsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListS2tDomainsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListS2tDomainsResponse();
        ListS2tDomainsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.domains = instance.domains || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    (instance.domains = instance.domains || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        ListS2tDomainsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.domains && instance.domains.length) {
            writer.writeRepeatedString(1, instance.domains);
        }
    }
    get domains() {
        return this._domains;
    }
    set domains(value) {
        this._domains = value;
    }
    toObject() {
        return {
            domains: (this.domains || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class Speech2TextConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param Speech2TextConfig value
     */
    constructor(value) {
        value = value || {};
        this.id = value.id;
        this.description = value.description
            ? new Description(value.description)
            : undefined;
        this.active = value.active;
        this.inference = value.inference
            ? new Inference(value.inference)
            : undefined;
        this.streamingServer = value.streamingServer
            ? new StreamingServer(value.streamingServer)
            : undefined;
        this.voiceActivityDetection = value.voiceActivityDetection
            ? new VoiceActivityDetection(value.voiceActivityDetection)
            : undefined;
        this.postProcessing = value.postProcessing
            ? new PostProcessing(value.postProcessing)
            : undefined;
        this.logging = value.logging ? new Logging(value.logging) : undefined;
        Speech2TextConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Speech2TextConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Speech2TextConfig();
        Speech2TextConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.id = instance.id || '';
        instance.description = instance.description || undefined;
        instance.active = instance.active || false;
        instance.inference = instance.inference || undefined;
        instance.streamingServer = instance.streamingServer || undefined;
        instance.voiceActivityDetection =
            instance.voiceActivityDetection || undefined;
        instance.postProcessing = instance.postProcessing || undefined;
        instance.logging = instance.logging || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.id = reader.readString();
                    break;
                case 2:
                    instance.description = new Description();
                    reader.readMessage(instance.description, Description.fromBinaryReader);
                    break;
                case 3:
                    instance.active = reader.readBool();
                    break;
                case 4:
                    instance.inference = new Inference();
                    reader.readMessage(instance.inference, Inference.fromBinaryReader);
                    break;
                case 5:
                    instance.streamingServer = new StreamingServer();
                    reader.readMessage(instance.streamingServer, StreamingServer.fromBinaryReader);
                    break;
                case 6:
                    instance.voiceActivityDetection = new VoiceActivityDetection();
                    reader.readMessage(instance.voiceActivityDetection, VoiceActivityDetection.fromBinaryReader);
                    break;
                case 7:
                    instance.postProcessing = new PostProcessing();
                    reader.readMessage(instance.postProcessing, PostProcessing.fromBinaryReader);
                    break;
                case 8:
                    instance.logging = new Logging();
                    reader.readMessage(instance.logging, Logging.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        Speech2TextConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.id) {
            writer.writeString(1, instance.id);
        }
        if (instance.description) {
            writer.writeMessage(2, instance.description, Description.toBinaryWriter);
        }
        if (instance.active) {
            writer.writeBool(3, instance.active);
        }
        if (instance.inference) {
            writer.writeMessage(4, instance.inference, Inference.toBinaryWriter);
        }
        if (instance.streamingServer) {
            writer.writeMessage(5, instance.streamingServer, StreamingServer.toBinaryWriter);
        }
        if (instance.voiceActivityDetection) {
            writer.writeMessage(6, instance.voiceActivityDetection, VoiceActivityDetection.toBinaryWriter);
        }
        if (instance.postProcessing) {
            writer.writeMessage(7, instance.postProcessing, PostProcessing.toBinaryWriter);
        }
        if (instance.logging) {
            writer.writeMessage(8, instance.logging, Logging.toBinaryWriter);
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
    toJSON() {
        return this.toObject();
    }
}
class Description {
    /**
     * Creates an object and applies default Protobuf values
     * @param Description value
     */
    constructor(value) {
        value = value || {};
        this.language = value.language;
        this.pipelineOwner = value.pipelineOwner;
        this.domain = value.domain;
        this.comments = value.comments;
        Description.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Description.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Description();
        Description.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.language = instance.language || '';
        instance.pipelineOwner = instance.pipelineOwner || '';
        instance.domain = instance.domain || '';
        instance.comments = instance.comments || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.language = reader.readString();
                    break;
                case 2:
                    instance.pipelineOwner = reader.readString();
                    break;
                case 3:
                    instance.domain = reader.readString();
                    break;
                case 4:
                    instance.comments = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        Description.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.language) {
            writer.writeString(1, instance.language);
        }
        if (instance.pipelineOwner) {
            writer.writeString(2, instance.pipelineOwner);
        }
        if (instance.domain) {
            writer.writeString(3, instance.domain);
        }
        if (instance.comments) {
            writer.writeString(4, instance.comments);
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
    toObject() {
        return {
            language: this.language,
            pipelineOwner: this.pipelineOwner,
            domain: this.domain,
            comments: this.comments
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class Inference {
    /**
     * Creates an object and applies default Protobuf values
     * @param Inference value
     */
    constructor(value) {
        value = value || {};
        this.ctcAcousticModels = value.ctcAcousticModels
            ? new CtcAcousticModels(value.ctcAcousticModels)
            : undefined;
        this.languageModel = value.languageModel
            ? new LanguageModel(value.languageModel)
            : undefined;
        Inference.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Inference.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Inference();
        Inference.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.ctcAcousticModels = instance.ctcAcousticModels || undefined;
        instance.languageModel = instance.languageModel || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.ctcAcousticModels = new CtcAcousticModels();
                    reader.readMessage(instance.ctcAcousticModels, CtcAcousticModels.fromBinaryReader);
                    break;
                case 2:
                    instance.languageModel = new LanguageModel();
                    reader.readMessage(instance.languageModel, LanguageModel.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        Inference.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.ctcAcousticModels) {
            writer.writeMessage(1, instance.ctcAcousticModels, CtcAcousticModels.toBinaryWriter);
        }
        if (instance.languageModel) {
            writer.writeMessage(2, instance.languageModel, LanguageModel.toBinaryWriter);
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
    toJSON() {
        return this.toObject();
    }
}
class CtcAcousticModels {
    /**
     * Creates an object and applies default Protobuf values
     * @param CtcAcousticModels value
     */
    constructor(value) {
        value = value || {};
        this.type = value.type;
        this.quartznet = value.quartznet
            ? new Quartznet(value.quartznet)
            : undefined;
        this.quartznetTriton = value.quartznetTriton
            ? new QuartznetTriton(value.quartznetTriton)
            : undefined;
        this.wav2vec = value.wav2vec ? new Wav2Vec(value.wav2vec) : undefined;
        CtcAcousticModels.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CtcAcousticModels.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CtcAcousticModels();
        CtcAcousticModels.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.type = instance.type || '';
        instance.quartznet = instance.quartznet || undefined;
        instance.quartznetTriton = instance.quartznetTriton || undefined;
        instance.wav2vec = instance.wav2vec || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.type = reader.readString();
                    break;
                case 2:
                    instance.quartznet = new Quartznet();
                    reader.readMessage(instance.quartznet, Quartznet.fromBinaryReader);
                    break;
                case 3:
                    instance.quartznetTriton = new QuartznetTriton();
                    reader.readMessage(instance.quartznetTriton, QuartznetTriton.fromBinaryReader);
                    break;
                case 4:
                    instance.wav2vec = new Wav2Vec();
                    reader.readMessage(instance.wav2vec, Wav2Vec.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        CtcAcousticModels.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.type) {
            writer.writeString(1, instance.type);
        }
        if (instance.quartznet) {
            writer.writeMessage(2, instance.quartznet, Quartznet.toBinaryWriter);
        }
        if (instance.quartznetTriton) {
            writer.writeMessage(3, instance.quartznetTriton, QuartznetTriton.toBinaryWriter);
        }
        if (instance.wav2vec) {
            writer.writeMessage(4, instance.wav2vec, Wav2Vec.toBinaryWriter);
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
    toJSON() {
        return this.toObject();
    }
}
class Wav2Vec {
    /**
     * Creates an object and applies default Protobuf values
     * @param Wav2Vec value
     */
    constructor(value) {
        value = value || {};
        this.modelPath = value.modelPath;
        this.useGpu = value.useGpu;
        Wav2Vec.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Wav2Vec.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Wav2Vec();
        Wav2Vec.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.modelPath = instance.modelPath || '';
        instance.useGpu = instance.useGpu || false;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.modelPath = reader.readString();
                    break;
                case 2:
                    instance.useGpu = reader.readBool();
                    break;
                default:
                    reader.skipField();
            }
        }
        Wav2Vec.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.modelPath) {
            writer.writeString(1, instance.modelPath);
        }
        if (instance.useGpu) {
            writer.writeBool(2, instance.useGpu);
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
    toObject() {
        return {
            modelPath: this.modelPath,
            useGpu: this.useGpu
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class Quartznet {
    /**
     * Creates an object and applies default Protobuf values
     * @param Quartznet value
     */
    constructor(value) {
        value = value || {};
        this.configPath = value.configPath;
        this.loadType = value.loadType;
        this.ptFiles = value.ptFiles ? new PtFiles(value.ptFiles) : undefined;
        this.ckptFile = value.ckptFile ? new CkptFile(value.ckptFile) : undefined;
        Quartznet.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Quartznet.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Quartznet();
        Quartznet.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.configPath = instance.configPath || '';
        instance.loadType = instance.loadType || '';
        instance.ptFiles = instance.ptFiles || undefined;
        instance.ckptFile = instance.ckptFile || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.configPath = reader.readString();
                    break;
                case 2:
                    instance.loadType = reader.readString();
                    break;
                case 3:
                    instance.ptFiles = new PtFiles();
                    reader.readMessage(instance.ptFiles, PtFiles.fromBinaryReader);
                    break;
                case 4:
                    instance.ckptFile = new CkptFile();
                    reader.readMessage(instance.ckptFile, CkptFile.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        Quartznet.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.configPath) {
            writer.writeString(1, instance.configPath);
        }
        if (instance.loadType) {
            writer.writeString(2, instance.loadType);
        }
        if (instance.ptFiles) {
            writer.writeMessage(3, instance.ptFiles, PtFiles.toBinaryWriter);
        }
        if (instance.ckptFile) {
            writer.writeMessage(4, instance.ckptFile, CkptFile.toBinaryWriter);
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
    toObject() {
        return {
            configPath: this.configPath,
            loadType: this.loadType,
            ptFiles: this.ptFiles ? this.ptFiles.toObject() : undefined,
            ckptFile: this.ckptFile ? this.ckptFile.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class PtFiles {
    /**
     * Creates an object and applies default Protobuf values
     * @param PtFiles value
     */
    constructor(value) {
        value = value || {};
        this.path = value.path;
        this.step = value.step;
        PtFiles.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        PtFiles.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new PtFiles();
        PtFiles.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.path = instance.path || '';
        instance.step = instance.step || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.path = reader.readString();
                    break;
                case 2:
                    instance.step = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        PtFiles.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.path) {
            writer.writeString(1, instance.path);
        }
        if (instance.step) {
            writer.writeString(2, instance.step);
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
    toObject() {
        return {
            path: this.path,
            step: this.step
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class CkptFile {
    /**
     * Creates an object and applies default Protobuf values
     * @param CkptFile value
     */
    constructor(value) {
        value = value || {};
        this.path = value.path;
        CkptFile.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CkptFile.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CkptFile();
        CkptFile.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.path = instance.path || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.path = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        CkptFile.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.path) {
            writer.writeString(1, instance.path);
        }
    }
    get path() {
        return this._path;
    }
    set path(value) {
        this._path = value;
    }
    toObject() {
        return {
            path: this.path
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class QuartznetTriton {
    /**
     * Creates an object and applies default Protobuf values
     * @param QuartznetTriton value
     */
    constructor(value) {
        value = value || {};
        this.configPath = value.configPath;
        this.tritonUrl = value.tritonUrl;
        this.tritonModel = value.tritonModel;
        QuartznetTriton.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        QuartznetTriton.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new QuartznetTriton();
        QuartznetTriton.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.configPath = instance.configPath || '';
        instance.tritonUrl = instance.tritonUrl || '';
        instance.tritonModel = instance.tritonModel || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.configPath = reader.readString();
                    break;
                case 2:
                    instance.tritonUrl = reader.readString();
                    break;
                case 3:
                    instance.tritonModel = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        QuartznetTriton.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.configPath) {
            writer.writeString(1, instance.configPath);
        }
        if (instance.tritonUrl) {
            writer.writeString(2, instance.tritonUrl);
        }
        if (instance.tritonModel) {
            writer.writeString(3, instance.tritonModel);
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
    toObject() {
        return {
            configPath: this.configPath,
            tritonUrl: this.tritonUrl,
            tritonModel: this.tritonModel
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class LanguageModel {
    /**
     * Creates an object and applies default Protobuf values
     * @param LanguageModel value
     */
    constructor(value) {
        value = value || {};
        this.path = value.path;
        this.beamSize = value.beamSize;
        this.beamSearchScorerAlpha = value.beamSearchScorerAlpha;
        this.beamSearchScorerBeta = value.beamSearchScorerBeta;
        LanguageModel.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        LanguageModel.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new LanguageModel();
        LanguageModel.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.path = instance.path || '';
        instance.beamSize = instance.beamSize || '0';
        instance.beamSearchScorerAlpha = instance.beamSearchScorerAlpha || 0;
        instance.beamSearchScorerBeta = instance.beamSearchScorerBeta || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.path = reader.readString();
                    break;
                case 2:
                    instance.beamSize = reader.readInt64String();
                    break;
                case 3:
                    instance.beamSearchScorerAlpha = reader.readFloat();
                    break;
                case 4:
                    instance.beamSearchScorerBeta = reader.readFloat();
                    break;
                default:
                    reader.skipField();
            }
        }
        LanguageModel.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.path) {
            writer.writeString(1, instance.path);
        }
        if (instance.beamSize) {
            writer.writeInt64String(2, instance.beamSize);
        }
        if (instance.beamSearchScorerAlpha) {
            writer.writeFloat(3, instance.beamSearchScorerAlpha);
        }
        if (instance.beamSearchScorerBeta) {
            writer.writeFloat(4, instance.beamSearchScorerBeta);
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
    toObject() {
        return {
            path: this.path,
            beamSize: this.beamSize,
            beamSearchScorerAlpha: this.beamSearchScorerAlpha,
            beamSearchScorerBeta: this.beamSearchScorerBeta
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class StreamingServer {
    /**
     * Creates an object and applies default Protobuf values
     * @param StreamingServer value
     */
    constructor(value) {
        value = value || {};
        this.host = value.host;
        this.port = value.port;
        this.outputStyle = value.outputStyle;
        this.streamingSpeechRecognition = value.streamingSpeechRecognition
            ? new StreamingSpeechRecognition(value.streamingSpeechRecognition)
            : undefined;
        StreamingServer.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        StreamingServer.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new StreamingServer();
        StreamingServer.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.host = instance.host || '';
        instance.port = instance.port || '0';
        instance.outputStyle = instance.outputStyle || '';
        instance.streamingSpeechRecognition =
            instance.streamingSpeechRecognition || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.host = reader.readString();
                    break;
                case 2:
                    instance.port = reader.readInt64String();
                    break;
                case 3:
                    instance.outputStyle = reader.readString();
                    break;
                case 4:
                    instance.streamingSpeechRecognition = new StreamingSpeechRecognition();
                    reader.readMessage(instance.streamingSpeechRecognition, StreamingSpeechRecognition.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        StreamingServer.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.host) {
            writer.writeString(1, instance.host);
        }
        if (instance.port) {
            writer.writeInt64String(2, instance.port);
        }
        if (instance.outputStyle) {
            writer.writeString(3, instance.outputStyle);
        }
        if (instance.streamingSpeechRecognition) {
            writer.writeMessage(4, instance.streamingSpeechRecognition, StreamingSpeechRecognition.toBinaryWriter);
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
    toJSON() {
        return this.toObject();
    }
}
class StreamingSpeechRecognition {
    /**
     * Creates an object and applies default Protobuf values
     * @param StreamingSpeechRecognition value
     */
    constructor(value) {
        value = value || {};
        this.transcribeNotFinal = value.transcribeNotFinal;
        this.ctcDecodingMethod = value.ctcDecodingMethod;
        this.samplingRate = value.samplingRate;
        this.minAudioChunkSize = value.minAudioChunkSize;
        this.startOfUtteranceThreshold = value.startOfUtteranceThreshold;
        this.endOfUtteranceThreshold = value.endOfUtteranceThreshold;
        StreamingSpeechRecognition.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        StreamingSpeechRecognition.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new StreamingSpeechRecognition();
        StreamingSpeechRecognition.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.transcribeNotFinal = instance.transcribeNotFinal || false;
        instance.ctcDecodingMethod = instance.ctcDecodingMethod || '';
        instance.samplingRate = instance.samplingRate || '0';
        instance.minAudioChunkSize = instance.minAudioChunkSize || '0';
        instance.startOfUtteranceThreshold =
            instance.startOfUtteranceThreshold || 0;
        instance.endOfUtteranceThreshold = instance.endOfUtteranceThreshold || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.transcribeNotFinal = reader.readBool();
                    break;
                case 2:
                    instance.ctcDecodingMethod = reader.readString();
                    break;
                case 3:
                    instance.samplingRate = reader.readInt64String();
                    break;
                case 4:
                    instance.minAudioChunkSize = reader.readInt64String();
                    break;
                case 5:
                    instance.startOfUtteranceThreshold = reader.readFloat();
                    break;
                case 6:
                    instance.endOfUtteranceThreshold = reader.readFloat();
                    break;
                default:
                    reader.skipField();
            }
        }
        StreamingSpeechRecognition.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.transcribeNotFinal) {
            writer.writeBool(1, instance.transcribeNotFinal);
        }
        if (instance.ctcDecodingMethod) {
            writer.writeString(2, instance.ctcDecodingMethod);
        }
        if (instance.samplingRate) {
            writer.writeInt64String(3, instance.samplingRate);
        }
        if (instance.minAudioChunkSize) {
            writer.writeInt64String(4, instance.minAudioChunkSize);
        }
        if (instance.startOfUtteranceThreshold) {
            writer.writeFloat(5, instance.startOfUtteranceThreshold);
        }
        if (instance.endOfUtteranceThreshold) {
            writer.writeFloat(6, instance.endOfUtteranceThreshold);
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
    toJSON() {
        return this.toObject();
    }
}
class VoiceActivityDetection {
    /**
     * Creates an object and applies default Protobuf values
     * @param VoiceActivityDetection value
     */
    constructor(value) {
        value = value || {};
        this.active = value.active;
        this.samplingRate = value.samplingRate;
        this.pyannote = value.pyannote ? new Pyannote(value.pyannote) : undefined;
        this.matchbox = value.matchbox ? new Matchbox(value.matchbox) : undefined;
        VoiceActivityDetection.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        VoiceActivityDetection.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new VoiceActivityDetection();
        VoiceActivityDetection.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.active = instance.active || '';
        instance.samplingRate = instance.samplingRate || '0';
        instance.pyannote = instance.pyannote || undefined;
        instance.matchbox = instance.matchbox || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.active = reader.readString();
                    break;
                case 2:
                    instance.samplingRate = reader.readInt64String();
                    break;
                case 3:
                    instance.pyannote = new Pyannote();
                    reader.readMessage(instance.pyannote, Pyannote.fromBinaryReader);
                    break;
                case 4:
                    instance.matchbox = new Matchbox();
                    reader.readMessage(instance.matchbox, Matchbox.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        VoiceActivityDetection.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.active) {
            writer.writeString(1, instance.active);
        }
        if (instance.samplingRate) {
            writer.writeInt64String(2, instance.samplingRate);
        }
        if (instance.pyannote) {
            writer.writeMessage(3, instance.pyannote, Pyannote.toBinaryWriter);
        }
        if (instance.matchbox) {
            writer.writeMessage(4, instance.matchbox, Matchbox.toBinaryWriter);
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
    toObject() {
        return {
            active: this.active,
            samplingRate: this.samplingRate,
            pyannote: this.pyannote ? this.pyannote.toObject() : undefined,
            matchbox: this.matchbox ? this.matchbox.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class Pyannote {
    /**
     * Creates an object and applies default Protobuf values
     * @param Pyannote value
     */
    constructor(value) {
        value = value || {};
        this.modelPath = value.modelPath;
        this.minAudioSize = value.minAudioSize;
        this.offset = value.offset;
        this.onset = value.onset;
        this.logScale = value.logScale;
        this.minDurationOff = value.minDurationOff;
        this.minDurationOn = value.minDurationOn;
        Pyannote.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Pyannote.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Pyannote();
        Pyannote.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.modelPath = instance.modelPath || '';
        instance.minAudioSize = instance.minAudioSize || '0';
        instance.offset = instance.offset || 0;
        instance.onset = instance.onset || 0;
        instance.logScale = instance.logScale || false;
        instance.minDurationOff = instance.minDurationOff || 0;
        instance.minDurationOn = instance.minDurationOn || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.modelPath = reader.readString();
                    break;
                case 2:
                    instance.minAudioSize = reader.readInt64String();
                    break;
                case 3:
                    instance.offset = reader.readFloat();
                    break;
                case 4:
                    instance.onset = reader.readFloat();
                    break;
                case 5:
                    instance.logScale = reader.readBool();
                    break;
                case 6:
                    instance.minDurationOff = reader.readFloat();
                    break;
                case 7:
                    instance.minDurationOn = reader.readFloat();
                    break;
                default:
                    reader.skipField();
            }
        }
        Pyannote.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.modelPath) {
            writer.writeString(1, instance.modelPath);
        }
        if (instance.minAudioSize) {
            writer.writeInt64String(2, instance.minAudioSize);
        }
        if (instance.offset) {
            writer.writeFloat(3, instance.offset);
        }
        if (instance.onset) {
            writer.writeFloat(4, instance.onset);
        }
        if (instance.logScale) {
            writer.writeBool(5, instance.logScale);
        }
        if (instance.minDurationOff) {
            writer.writeFloat(6, instance.minDurationOff);
        }
        if (instance.minDurationOn) {
            writer.writeFloat(7, instance.minDurationOn);
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
    toJSON() {
        return this.toObject();
    }
}
class Matchbox {
    /**
     * Creates an object and applies default Protobuf values
     * @param Matchbox value
     */
    constructor(value) {
        value = value || {};
        this.modelConfig = value.modelConfig;
        this.encoderPath = value.encoderPath;
        this.decoderPath = value.decoderPath;
        Matchbox.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Matchbox.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Matchbox();
        Matchbox.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.modelConfig = instance.modelConfig || '';
        instance.encoderPath = instance.encoderPath || '';
        instance.decoderPath = instance.decoderPath || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.modelConfig = reader.readString();
                    break;
                case 2:
                    instance.encoderPath = reader.readString();
                    break;
                case 3:
                    instance.decoderPath = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        Matchbox.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.modelConfig) {
            writer.writeString(1, instance.modelConfig);
        }
        if (instance.encoderPath) {
            writer.writeString(2, instance.encoderPath);
        }
        if (instance.decoderPath) {
            writer.writeString(3, instance.decoderPath);
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
    toObject() {
        return {
            modelConfig: this.modelConfig,
            encoderPath: this.encoderPath,
            decoderPath: this.decoderPath
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class PostProcessing {
    /**
     * Creates an object and applies default Protobuf values
     * @param PostProcessing value
     */
    constructor(value) {
        value = value || {};
        this.pipeline = (value.pipeline || []).slice();
        this.postProcessors = value.postProcessors
            ? new PostProcessors(value.postProcessors)
            : undefined;
        PostProcessing.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        PostProcessing.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new PostProcessing();
        PostProcessing.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.pipeline = instance.pipeline || [];
        instance.postProcessors = instance.postProcessors || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    (instance.pipeline = instance.pipeline || []).push(reader.readString());
                    break;
                case 2:
                    instance.postProcessors = new PostProcessors();
                    reader.readMessage(instance.postProcessors, PostProcessors.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        PostProcessing.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.pipeline && instance.pipeline.length) {
            writer.writeRepeatedString(1, instance.pipeline);
        }
        if (instance.postProcessors) {
            writer.writeMessage(2, instance.postProcessors, PostProcessors.toBinaryWriter);
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
    toObject() {
        return {
            pipeline: (this.pipeline || []).slice(),
            postProcessors: this.postProcessors
                ? this.postProcessors.toObject()
                : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class PostProcessors {
    /**
     * Creates an object and applies default Protobuf values
     * @param PostProcessors value
     */
    constructor(value) {
        value = value || {};
        this.symSpell = value.symSpell ? new SymSpell(value.symSpell) : undefined;
        this.normalization = value.normalization
            ? new Normalization(value.normalization)
            : undefined;
        PostProcessors.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        PostProcessors.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new PostProcessors();
        PostProcessors.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.symSpell = instance.symSpell || undefined;
        instance.normalization = instance.normalization || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.symSpell = new SymSpell();
                    reader.readMessage(instance.symSpell, SymSpell.fromBinaryReader);
                    break;
                case 2:
                    instance.normalization = new Normalization();
                    reader.readMessage(instance.normalization, Normalization.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        PostProcessors.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.symSpell) {
            writer.writeMessage(1, instance.symSpell, SymSpell.toBinaryWriter);
        }
        if (instance.normalization) {
            writer.writeMessage(2, instance.normalization, Normalization.toBinaryWriter);
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
    toObject() {
        return {
            symSpell: this.symSpell ? this.symSpell.toObject() : undefined,
            normalization: this.normalization
                ? this.normalization.toObject()
                : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class SymSpell {
    /**
     * Creates an object and applies default Protobuf values
     * @param SymSpell value
     */
    constructor(value) {
        value = value || {};
        this.dictPath = value.dictPath;
        this.maxDictionaryEditDistance = value.maxDictionaryEditDistance;
        this.prefixLength = value.prefixLength;
        SymSpell.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        SymSpell.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new SymSpell();
        SymSpell.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.dictPath = instance.dictPath || '';
        instance.maxDictionaryEditDistance =
            instance.maxDictionaryEditDistance || '0';
        instance.prefixLength = instance.prefixLength || '0';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.dictPath = reader.readString();
                    break;
                case 2:
                    instance.maxDictionaryEditDistance = reader.readInt64String();
                    break;
                case 3:
                    instance.prefixLength = reader.readInt64String();
                    break;
                default:
                    reader.skipField();
            }
        }
        SymSpell.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.dictPath) {
            writer.writeString(1, instance.dictPath);
        }
        if (instance.maxDictionaryEditDistance) {
            writer.writeInt64String(2, instance.maxDictionaryEditDistance);
        }
        if (instance.prefixLength) {
            writer.writeInt64String(3, instance.prefixLength);
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
    toObject() {
        return {
            dictPath: this.dictPath,
            maxDictionaryEditDistance: this.maxDictionaryEditDistance,
            prefixLength: this.prefixLength
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class Normalization {
    /**
     * Creates an object and applies default Protobuf values
     * @param Normalization value
     */
    constructor(value) {
        value = value || {};
        this.language = value.language;
        Normalization.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Normalization.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Normalization();
        Normalization.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.language = instance.language || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.language = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        Normalization.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.language) {
            writer.writeString(1, instance.language);
        }
    }
    get language() {
        return this._language;
    }
    set language(value) {
        this._language = value;
    }
    toObject() {
        return {
            language: this.language
        };
    }
    toJSON() {
        return this.toObject();
    }
}
class Logging {
    /**
     * Creates an object and applies default Protobuf values
     * @param Logging value
     */
    constructor(value) {
        value = value || {};
        this.type = value.type;
        this.path = value.path;
        Logging.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Logging.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Logging();
        Logging.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.type = instance.type || '';
        instance.path = instance.path || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.type = reader.readString();
                    break;
                case 2:
                    instance.path = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        Logging.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.type) {
            writer.writeString(1, instance.type);
        }
        if (instance.path) {
            writer.writeString(2, instance.path);
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
    toObject() {
        return {
            type: this.type,
            path: this.path
        };
    }
    toJSON() {
        return this.toObject();
    }
}

class Empty {
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Empty.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Empty();
        Empty.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) { }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                default:
                    reader.skipField();
            }
        }
        Empty.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) { }
    /**
     * Creates an object and applies default Protobuf values
     * @param Empty value
     */
    constructor(value) {
        value = value || {};
        Empty.refineValues(this);
    }
    toObject() {
        return {};
    }
    toJSON() {
        return this.toObject();
    }
}

/* tslint:disable */
class Speech2TextClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.s2t.Speech2Text', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.TranscribeFileRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.TranscribeFileResponse>
     */
    transcribeFile(requestData, requestMetadata = {}) {
        return this.transcribeFile$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.TranscribeFileRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.TranscribeFileResponse>>
     */
    transcribeFile$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.s2t.Speech2Text/TranscribeFile',
            requestData,
            requestMetadata,
            requestClass: TranscribeFileRequest,
            responseClass: TranscribeFileResponse
        });
    }
    /**
     * Server streaming RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.TranscribeStreamRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.TranscribeStreamResponse>
     */
    transcribeStream(requestData, requestMetadata = {}) {
        return this.transcribeStream$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Server streaming RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.TranscribeStreamRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.TranscribeStreamResponse>>
     */
    transcribeStream$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.serverStream,
            client: this.client,
            path: '/ondewo.s2t.Speech2Text/TranscribeStream',
            requestData,
            requestMetadata,
            requestClass: TranscribeStreamRequest,
            responseClass: TranscribeStreamResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.S2tPipelineId request
     * @param Metadata metadata
     * @return Observable<thisProto.Speech2TextConfig>
     */
    getS2tPipeline(requestData, requestMetadata = {}) {
        return this.getS2tPipeline$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.S2tPipelineId request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Speech2TextConfig>>
     */
    getS2tPipeline$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.s2t.Speech2Text/GetS2tPipeline',
            requestData,
            requestMetadata,
            requestClass: S2tPipelineId,
            responseClass: Speech2TextConfig
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.Speech2TextConfig request
     * @param Metadata metadata
     * @return Observable<thisProto.S2tPipelineId>
     */
    createS2tPipeline(requestData, requestMetadata = {}) {
        return this.createS2tPipeline$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.Speech2TextConfig request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.S2tPipelineId>>
     */
    createS2tPipeline$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.s2t.Speech2Text/CreateS2tPipeline',
            requestData,
            requestMetadata,
            requestClass: Speech2TextConfig,
            responseClass: S2tPipelineId
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.S2tPipelineId request
     * @param Metadata metadata
     * @return Observable<googleProtobuf000.Empty>
     */
    deleteS2tPipeline(requestData, requestMetadata = {}) {
        return this.deleteS2tPipeline$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.S2tPipelineId request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    deleteS2tPipeline$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.s2t.Speech2Text/DeleteS2tPipeline',
            requestData,
            requestMetadata,
            requestClass: S2tPipelineId,
            responseClass: Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.Speech2TextConfig request
     * @param Metadata metadata
     * @return Observable<googleProtobuf000.Empty>
     */
    updateS2tPipeline(requestData, requestMetadata = {}) {
        return this.updateS2tPipeline$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.Speech2TextConfig request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    updateS2tPipeline$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.s2t.Speech2Text/UpdateS2tPipeline',
            requestData,
            requestMetadata,
            requestClass: Speech2TextConfig,
            responseClass: Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListS2tPipelinesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListS2tPipelinesResponse>
     */
    listS2tPipelines(requestData, requestMetadata = {}) {
        return this.listS2tPipelines$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListS2tPipelinesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListS2tPipelinesResponse>>
     */
    listS2tPipelines$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.s2t.Speech2Text/ListS2tPipelines',
            requestData,
            requestMetadata,
            requestClass: ListS2tPipelinesRequest,
            responseClass: ListS2tPipelinesResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListS2tLanguagesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListS2tLanguagesResponse>
     */
    listS2tLanguages(requestData, requestMetadata = {}) {
        return this.listS2tLanguages$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListS2tLanguagesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListS2tLanguagesResponse>>
     */
    listS2tLanguages$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.s2t.Speech2Text/ListS2tLanguages',
            requestData,
            requestMetadata,
            requestClass: ListS2tLanguagesRequest,
            responseClass: ListS2tLanguagesResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListS2tDomainsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListS2tDomainsResponse>
     */
    listS2tDomains(requestData, requestMetadata = {}) {
        return this.listS2tDomains$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListS2tDomainsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListS2tDomainsResponse>>
     */
    listS2tDomains$eventStream(requestData, requestMetadata = {}) {
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
}
Speech2TextClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function Speech2TextClient_Factory() { return new Speech2TextClient(i0.ɵɵinject(GRPC_SPEECH2_TEXT_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: Speech2TextClient, providedIn: "root" });
Speech2TextClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
Speech2TextClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_SPEECH2_TEXT_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];

/**
 * Generated bundle index. Do not edit.
 */

export { CTCDecoding, CkptFile, CtcAcousticModels, Description, Empty, GRPC_SPEECH2_TEXT_CLIENT_SETTINGS, Inference, LanguageModel, ListS2tDomainsRequest, ListS2tDomainsResponse, ListS2tLanguagesRequest, ListS2tLanguagesResponse, ListS2tPipelinesRequest, ListS2tPipelinesResponse, Logging, Matchbox, Normalization, PostProcessing, PostProcessors, PtFiles, Pyannote, Quartznet, QuartznetTriton, S2tPipelineId, Speech2TextClient, Speech2TextConfig, StreamingServer, StreamingSpeechRecognition, SymSpell, TranscribeFileRequest, TranscribeFileResponse, TranscribeStreamRequest, TranscribeStreamResponse, VoiceActivityDetection, Wav2Vec, WordTiming };
//# sourceMappingURL=ondewo-s2t-client-angular.js.map
