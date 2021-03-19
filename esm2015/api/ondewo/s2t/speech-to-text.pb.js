import { BinaryReader, BinaryWriter } from 'google-protobuf';
export var CTCDecoding;
(function (CTCDecoding) {
    CTCDecoding[CTCDecoding["greedy"] = 0] = "greedy";
    CTCDecoding[CTCDecoding["beamSearchWithLm"] = 1] = "beamSearchWithLm";
})(CTCDecoding || (CTCDecoding = {}));
export class TranscribeStreamRequest {
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
export class TranscribeStreamResponse {
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
export class TranscribeFileRequest {
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
export class TranscribeFileResponse {
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
export class WordTiming {
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
export class S2tPipelineId {
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
export class ListS2tPipelinesRequest {
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
export class ListS2tPipelinesResponse {
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
export class ListS2tLanguagesRequest {
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
export class ListS2tLanguagesResponse {
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
export class ListS2tDomainsRequest {
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
export class ListS2tDomainsResponse {
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
export class Speech2TextConfig {
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
export class Description {
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
export class Inference {
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
export class CtcAcousticModels {
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
export class Wav2Vec {
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
export class Quartznet {
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
export class PtFiles {
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
export class CkptFile {
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
export class QuartznetTriton {
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
export class LanguageModel {
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
export class StreamingServer {
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
export class StreamingSpeechRecognition {
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
export class VoiceActivityDetection {
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
export class Pyannote {
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
export class Matchbox {
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
export class PostProcessing {
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
export class PostProcessors {
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
export class SymSpell {
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
export class Normalization {
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
export class Logging {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlZWNoLXRvLXRleHQucGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvb25kZXdvL3MydC9zcGVlY2gtdG8tdGV4dC5wYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBYyxNQUFNLGlCQUFpQixDQUFDO0FBRXpFLE1BQU0sQ0FBTixJQUFZLFdBR1g7QUFIRCxXQUFZLFdBQVc7SUFDckIsaURBQVUsQ0FBQTtJQUNWLHFFQUFvQixDQUFBO0FBQ3RCLENBQUMsRUFIVyxXQUFXLEtBQVgsV0FBVyxRQUd0QjtBQUNELE1BQU0sT0FBTyx1QkFBdUI7SUF1RmxDOzs7T0FHRztJQUNILFlBQVksS0FBaUQ7UUFDM0QsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztRQUNuRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQW5HRCxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQWlDO1FBQy9DLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsdUJBQXVCLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6RCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJ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L1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHsgR3JwY01lc3NhZ2UsIFJlY3Vyc2l2ZVBhcnRpYWwgfSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAwIGZyb20gJy4uLy4uL2dvb2dsZS9wcm90b2J1Zi9lbXB0eS5wYic7XG5leHBvcnQgZW51bSBDVENEZWNvZGluZyB7XG4gIGdyZWVkeSA9IDAsXG4gIGJlYW1TZWFyY2hXaXRoTG0gPSAxXG59XG5leHBvcnQgY2xhc3MgVHJhbnNjcmliZVN0cmVhbVJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogVHJhbnNjcmliZVN0cmVhbVJlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVHJhbnNjcmliZVN0cmVhbVJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVHJhbnNjcmliZVN0cmVhbVJlcXVlc3QoKTtcbiAgICBUcmFuc2NyaWJlU3RyZWFtUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogVHJhbnNjcmliZVN0cmVhbVJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5zMnRQaXBlbGluZUlkID0gaW5zdGFuY2UuczJ0UGlwZWxpbmVJZCB8fCAnJztcbiAgICBpbnN0YW5jZS5hdWRpb0NodW5rID0gaW5zdGFuY2UuYXVkaW9DaHVuayB8fCBuZXcgVWludDhBcnJheSgpO1xuICAgIGluc3RhbmNlLmN0Y0RlY29kaW5nID0gaW5zdGFuY2UuY3RjRGVjb2RpbmcgfHwgMDtcbiAgICBpbnN0YW5jZS5zcGVsbGluZ0NvcnJlY3Rpb24gPSBpbnN0YW5jZS5zcGVsbGluZ0NvcnJlY3Rpb24gfHwgZmFsc2U7XG4gICAgaW5zdGFuY2UuZGlzYWJsZU5vcm1hbGl6YXRpb24gPSBpbnN0YW5jZS5kaXNhYmxlTm9ybWFsaXphdGlvbiB8fCBmYWxzZTtcbiAgICBpbnN0YW5jZS5lbmRPZlN0cmVhbSA9IGluc3RhbmNlLmVuZE9mU3RyZWFtIHx8IGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IFRyYW5zY3JpYmVTdHJlYW1SZXF1ZXN0LFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UuczJ0UGlwZWxpbmVJZCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5hdWRpb0NodW5rID0gcmVhZGVyLnJlYWRCeXRlcygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UuY3RjRGVjb2RpbmcgPSByZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGluc3RhbmNlLnNwZWxsaW5nQ29ycmVjdGlvbiA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgaW5zdGFuY2UuZGlzYWJsZU5vcm1hbGl6YXRpb24gPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIGluc3RhbmNlLmVuZE9mU3RyZWFtID0gcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFRyYW5zY3JpYmVTdHJlYW1SZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IFRyYW5zY3JpYmVTdHJlYW1SZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5zMnRQaXBlbGluZUlkKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UuczJ0UGlwZWxpbmVJZCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5hdWRpb0NodW5rICYmIGluc3RhbmNlLmF1ZGlvQ2h1bmsubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVCeXRlcygyLCBpbnN0YW5jZS5hdWRpb0NodW5rKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmN0Y0RlY29kaW5nKSB7XG4gICAgICB3cml0ZXIud3JpdGVFbnVtKDMsIGluc3RhbmNlLmN0Y0RlY29kaW5nKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnNwZWxsaW5nQ29ycmVjdGlvbikge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCg0LCBpbnN0YW5jZS5zcGVsbGluZ0NvcnJlY3Rpb24pO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZGlzYWJsZU5vcm1hbGl6YXRpb24pIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woNSwgaW5zdGFuY2UuZGlzYWJsZU5vcm1hbGl6YXRpb24pO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZW5kT2ZTdHJlYW0pIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woNiwgaW5zdGFuY2UuZW5kT2ZTdHJlYW0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3MydFBpcGVsaW5lSWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2F1ZGlvQ2h1bms/OiBVaW50OEFycmF5O1xuICBwcml2YXRlIF9jdGNEZWNvZGluZz86IENUQ0RlY29kaW5nO1xuICBwcml2YXRlIF9zcGVsbGluZ0NvcnJlY3Rpb24/OiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlTm9ybWFsaXphdGlvbj86IGJvb2xlYW47XG4gIHByaXZhdGUgX2VuZE9mU3RyZWFtPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFRyYW5zY3JpYmVTdHJlYW1SZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VHJhbnNjcmliZVN0cmVhbVJlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnMydFBpcGVsaW5lSWQgPSB2YWx1ZS5zMnRQaXBlbGluZUlkO1xuICAgIHRoaXMuYXVkaW9DaHVuayA9IHZhbHVlLmF1ZGlvQ2h1bms7XG4gICAgdGhpcy5jdGNEZWNvZGluZyA9IHZhbHVlLmN0Y0RlY29kaW5nO1xuICAgIHRoaXMuc3BlbGxpbmdDb3JyZWN0aW9uID0gdmFsdWUuc3BlbGxpbmdDb3JyZWN0aW9uO1xuICAgIHRoaXMuZGlzYWJsZU5vcm1hbGl6YXRpb24gPSB2YWx1ZS5kaXNhYmxlTm9ybWFsaXphdGlvbjtcbiAgICB0aGlzLmVuZE9mU3RyZWFtID0gdmFsdWUuZW5kT2ZTdHJlYW07XG4gICAgVHJhbnNjcmliZVN0cmVhbVJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzMnRQaXBlbGluZUlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3MydFBpcGVsaW5lSWQ7XG4gIH1cbiAgc2V0IHMydFBpcGVsaW5lSWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3MydFBpcGVsaW5lSWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYXVkaW9DaHVuaygpOiBVaW50OEFycmF5IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYXVkaW9DaHVuaztcbiAgfVxuICBzZXQgYXVkaW9DaHVuayh2YWx1ZTogVWludDhBcnJheSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2F1ZGlvQ2h1bmsgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY3RjRGVjb2RpbmcoKTogQ1RDRGVjb2RpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jdGNEZWNvZGluZztcbiAgfVxuICBzZXQgY3RjRGVjb2RpbmcodmFsdWU6IENUQ0RlY29kaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY3RjRGVjb2RpbmcgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3BlbGxpbmdDb3JyZWN0aW9uKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zcGVsbGluZ0NvcnJlY3Rpb247XG4gIH1cbiAgc2V0IHNwZWxsaW5nQ29ycmVjdGlvbih2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NwZWxsaW5nQ29ycmVjdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBkaXNhYmxlTm9ybWFsaXphdGlvbigpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZU5vcm1hbGl6YXRpb247XG4gIH1cbiAgc2V0IGRpc2FibGVOb3JtYWxpemF0aW9uKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZGlzYWJsZU5vcm1hbGl6YXRpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW5kT2ZTdHJlYW0oKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZE9mU3RyZWFtO1xuICB9XG4gIHNldCBlbmRPZlN0cmVhbSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VuZE9mU3RyZWFtID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHMydFBpcGVsaW5lSWQ6IHRoaXMuczJ0UGlwZWxpbmVJZCxcbiAgICAgIGF1ZGlvQ2h1bms6IHRoaXMuYXVkaW9DaHVua1xuICAgICAgICA/IHRoaXMuYXVkaW9DaHVuay5zdWJhcnJheSgwKVxuICAgICAgICA6IG5ldyBVaW50OEFycmF5KCksXG4gICAgICBjdGNEZWNvZGluZzogdGhpcy5jdGNEZWNvZGluZyxcbiAgICAgIHNwZWxsaW5nQ29ycmVjdGlvbjogdGhpcy5zcGVsbGluZ0NvcnJlY3Rpb24sXG4gICAgICBkaXNhYmxlTm9ybWFsaXphdGlvbjogdGhpcy5kaXNhYmxlTm9ybWFsaXphdGlvbixcbiAgICAgIGVuZE9mU3RyZWFtOiB0aGlzLmVuZE9mU3RyZWFtXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUcmFuc2NyaWJlU3RyZWFtUmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBUcmFuc2NyaWJlU3RyZWFtUmVzcG9uc2UpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVHJhbnNjcmliZVN0cmVhbVJlc3BvbnNlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZSgpO1xuICAgIFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZS5mcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogVHJhbnNjcmliZVN0cmVhbVJlc3BvbnNlKSB7XG4gICAgaW5zdGFuY2UudHJhbnNjcmlwdGlvbiA9IGluc3RhbmNlLnRyYW5zY3JpcHRpb24gfHwgJyc7XG4gICAgaW5zdGFuY2UudGltZSA9IGluc3RhbmNlLnRpbWUgfHwgMDtcbiAgICBpbnN0YW5jZS5maW5hbCA9IGluc3RhbmNlLmZpbmFsIHx8IGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZSxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnRyYW5zY3JpcHRpb24gPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UudGltZSA9IHJlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLmZpbmFsID0gcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgIGluc3RhbmNlOiBUcmFuc2NyaWJlU3RyZWFtUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLnRyYW5zY3JpcHRpb24pIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS50cmFuc2NyaXB0aW9uKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnRpbWUpIHtcbiAgICAgIHdyaXRlci53cml0ZUZsb2F0KDIsIGluc3RhbmNlLnRpbWUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZmluYWwpIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woMywgaW5zdGFuY2UuZmluYWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RyYW5zY3JpcHRpb24/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3RpbWU/OiBudW1iZXI7XG4gIHByaXZhdGUgX2ZpbmFsPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZT4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMudHJhbnNjcmlwdGlvbiA9IHZhbHVlLnRyYW5zY3JpcHRpb247XG4gICAgdGhpcy50aW1lID0gdmFsdWUudGltZTtcbiAgICB0aGlzLmZpbmFsID0gdmFsdWUuZmluYWw7XG4gICAgVHJhbnNjcmliZVN0cmVhbVJlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdHJhbnNjcmlwdGlvbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90cmFuc2NyaXB0aW9uO1xuICB9XG4gIHNldCB0cmFuc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90cmFuc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRpbWUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZTtcbiAgfVxuICBzZXQgdGltZSh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdGltZSA9IHZhbHVlO1xuICB9XG4gIGdldCBmaW5hbCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZmluYWw7XG4gIH1cbiAgc2V0IGZpbmFsKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZmluYWwgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNjcmlwdGlvbjogdGhpcy50cmFuc2NyaXB0aW9uLFxuICAgICAgdGltZTogdGhpcy50aW1lLFxuICAgICAgZmluYWw6IHRoaXMuZmluYWxcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZSB7fVxuZXhwb3J0IGNsYXNzIFRyYW5zY3JpYmVGaWxlUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBUcmFuc2NyaWJlRmlsZVJlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVHJhbnNjcmliZUZpbGVSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRyYW5zY3JpYmVGaWxlUmVxdWVzdCgpO1xuICAgIFRyYW5zY3JpYmVGaWxlUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogVHJhbnNjcmliZUZpbGVSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UuczJ0UGlwZWxpbmVJZCA9IGluc3RhbmNlLnMydFBpcGVsaW5lSWQgfHwgJyc7XG4gICAgaW5zdGFuY2UuYXVkaW9GaWxlID0gaW5zdGFuY2UuYXVkaW9GaWxlIHx8IG5ldyBVaW50OEFycmF5KCk7XG4gICAgaW5zdGFuY2UuY3RjRGVjb2RpbmcgPSBpbnN0YW5jZS5jdGNEZWNvZGluZyB8fCAwO1xuICAgIGluc3RhbmNlLnNwZWxsaW5nQ29ycmVjdGlvbiA9IGluc3RhbmNlLnNwZWxsaW5nQ29ycmVjdGlvbiB8fCBmYWxzZTtcbiAgICBpbnN0YW5jZS5kaXNhYmxlTm9ybWFsaXphdGlvbiA9IGluc3RhbmNlLmRpc2FibGVOb3JtYWxpemF0aW9uIHx8IGZhbHNlO1xuICAgIGluc3RhbmNlLmluY2x1ZGVUaW1pbmcgPSBpbnN0YW5jZS5pbmNsdWRlVGltaW5nIHx8IGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IFRyYW5zY3JpYmVGaWxlUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnMydFBpcGVsaW5lSWQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UuYXVkaW9GaWxlID0gcmVhZGVyLnJlYWRCeXRlcygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UuY3RjRGVjb2RpbmcgPSByZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGluc3RhbmNlLnNwZWxsaW5nQ29ycmVjdGlvbiA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgaW5zdGFuY2UuZGlzYWJsZU5vcm1hbGl6YXRpb24gPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIGluc3RhbmNlLmluY2x1ZGVUaW1pbmcgPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVHJhbnNjcmliZUZpbGVSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IFRyYW5zY3JpYmVGaWxlUmVxdWVzdCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UuczJ0UGlwZWxpbmVJZCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnMydFBpcGVsaW5lSWQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuYXVkaW9GaWxlICYmIGluc3RhbmNlLmF1ZGlvRmlsZS5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZUJ5dGVzKDIsIGluc3RhbmNlLmF1ZGlvRmlsZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5jdGNEZWNvZGluZykge1xuICAgICAgd3JpdGVyLndyaXRlRW51bSgzLCBpbnN0YW5jZS5jdGNEZWNvZGluZyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5zcGVsbGluZ0NvcnJlY3Rpb24pIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woNCwgaW5zdGFuY2Uuc3BlbGxpbmdDb3JyZWN0aW9uKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmRpc2FibGVOb3JtYWxpemF0aW9uKSB7XG4gICAgICB3cml0ZXIud3JpdGVCb29sKDUsIGluc3RhbmNlLmRpc2FibGVOb3JtYWxpemF0aW9uKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmluY2x1ZGVUaW1pbmcpIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woNiwgaW5zdGFuY2UuaW5jbHVkZVRpbWluZyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfczJ0UGlwZWxpbmVJZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfYXVkaW9GaWxlPzogVWludDhBcnJheTtcbiAgcHJpdmF0ZSBfY3RjRGVjb2Rpbmc/OiBDVENEZWNvZGluZztcbiAgcHJpdmF0ZSBfc3BlbGxpbmdDb3JyZWN0aW9uPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZGlzYWJsZU5vcm1hbGl6YXRpb24/OiBib29sZWFuO1xuICBwcml2YXRlIF9pbmNsdWRlVGltaW5nPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFRyYW5zY3JpYmVGaWxlUmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFRyYW5zY3JpYmVGaWxlUmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuczJ0UGlwZWxpbmVJZCA9IHZhbHVlLnMydFBpcGVsaW5lSWQ7XG4gICAgdGhpcy5hdWRpb0ZpbGUgPSB2YWx1ZS5hdWRpb0ZpbGU7XG4gICAgdGhpcy5jdGNEZWNvZGluZyA9IHZhbHVlLmN0Y0RlY29kaW5nO1xuICAgIHRoaXMuc3BlbGxpbmdDb3JyZWN0aW9uID0gdmFsdWUuc3BlbGxpbmdDb3JyZWN0aW9uO1xuICAgIHRoaXMuZGlzYWJsZU5vcm1hbGl6YXRpb24gPSB2YWx1ZS5kaXNhYmxlTm9ybWFsaXphdGlvbjtcbiAgICB0aGlzLmluY2x1ZGVUaW1pbmcgPSB2YWx1ZS5pbmNsdWRlVGltaW5nO1xuICAgIFRyYW5zY3JpYmVGaWxlUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHMydFBpcGVsaW5lSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fczJ0UGlwZWxpbmVJZDtcbiAgfVxuICBzZXQgczJ0UGlwZWxpbmVJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fczJ0UGlwZWxpbmVJZCA9IHZhbHVlO1xuICB9XG4gIGdldCBhdWRpb0ZpbGUoKTogVWludDhBcnJheSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2F1ZGlvRmlsZTtcbiAgfVxuICBzZXQgYXVkaW9GaWxlKHZhbHVlOiBVaW50OEFycmF5IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYXVkaW9GaWxlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGN0Y0RlY29kaW5nKCk6IENUQ0RlY29kaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY3RjRGVjb2Rpbmc7XG4gIH1cbiAgc2V0IGN0Y0RlY29kaW5nKHZhbHVlOiBDVENEZWNvZGluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2N0Y0RlY29kaW5nID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNwZWxsaW5nQ29ycmVjdGlvbigpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlbGxpbmdDb3JyZWN0aW9uO1xuICB9XG4gIHNldCBzcGVsbGluZ0NvcnJlY3Rpb24odmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zcGVsbGluZ0NvcnJlY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGlzYWJsZU5vcm1hbGl6YXRpb24oKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVOb3JtYWxpemF0aW9uO1xuICB9XG4gIHNldCBkaXNhYmxlTm9ybWFsaXphdGlvbih2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Rpc2FibGVOb3JtYWxpemF0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGluY2x1ZGVUaW1pbmcoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVUaW1pbmc7XG4gIH1cbiAgc2V0IGluY2x1ZGVUaW1pbmcodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbmNsdWRlVGltaW5nID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHMydFBpcGVsaW5lSWQ6IHRoaXMuczJ0UGlwZWxpbmVJZCxcbiAgICAgIGF1ZGlvRmlsZTogdGhpcy5hdWRpb0ZpbGUgPyB0aGlzLmF1ZGlvRmlsZS5zdWJhcnJheSgwKSA6IG5ldyBVaW50OEFycmF5KCksXG4gICAgICBjdGNEZWNvZGluZzogdGhpcy5jdGNEZWNvZGluZyxcbiAgICAgIHNwZWxsaW5nQ29ycmVjdGlvbjogdGhpcy5zcGVsbGluZ0NvcnJlY3Rpb24sXG4gICAgICBkaXNhYmxlTm9ybWFsaXphdGlvbjogdGhpcy5kaXNhYmxlTm9ybWFsaXphdGlvbixcbiAgICAgIGluY2x1ZGVUaW1pbmc6IHRoaXMuaW5jbHVkZVRpbWluZ1xuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVHJhbnNjcmliZUZpbGVSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgVHJhbnNjcmliZUZpbGVSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBUcmFuc2NyaWJlRmlsZVJlc3BvbnNlKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFRyYW5zY3JpYmVGaWxlUmVzcG9uc2UudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVHJhbnNjcmliZUZpbGVSZXNwb25zZSgpO1xuICAgIFRyYW5zY3JpYmVGaWxlUmVzcG9uc2UuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFRyYW5zY3JpYmVGaWxlUmVzcG9uc2UpIHtcbiAgICBpbnN0YW5jZS50cmFuc2NyaXB0aW9uID0gaW5zdGFuY2UudHJhbnNjcmlwdGlvbiB8fCAnJztcbiAgICBpbnN0YW5jZS50aW1lID0gaW5zdGFuY2UudGltZSB8fCAwO1xuICAgIGluc3RhbmNlLndvcmRUaW1pbmcgPSBpbnN0YW5jZS53b3JkVGltaW5nIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IFRyYW5zY3JpYmVGaWxlUmVzcG9uc2UsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS50cmFuc2NyaXB0aW9uID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnRpbWUgPSByZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIzID0gbmV3IFdvcmRUaW1pbmcoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UobWVzc2FnZUluaXRpYWxpemVyMywgV29yZFRpbWluZy5mcm9tQmluYXJ5UmVhZGVyKTtcbiAgICAgICAgICAoaW5zdGFuY2Uud29yZFRpbWluZyA9IGluc3RhbmNlLndvcmRUaW1pbmcgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIzXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVHJhbnNjcmliZUZpbGVSZXNwb25zZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgIGluc3RhbmNlOiBUcmFuc2NyaWJlRmlsZVJlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS50cmFuc2NyaXB0aW9uKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UudHJhbnNjcmlwdGlvbik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS50aW1lKSB7XG4gICAgICB3cml0ZXIud3JpdGVGbG9hdCgyLCBpbnN0YW5jZS50aW1lKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLndvcmRUaW1pbmcgJiYgaW5zdGFuY2Uud29yZFRpbWluZy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgaW5zdGFuY2Uud29yZFRpbWluZyBhcyBhbnksXG4gICAgICAgIFdvcmRUaW1pbmcudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdHJhbnNjcmlwdGlvbj86IHN0cmluZztcbiAgcHJpdmF0ZSBfdGltZT86IG51bWJlcjtcbiAgcHJpdmF0ZSBfd29yZFRpbWluZz86IFdvcmRUaW1pbmdbXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFRyYW5zY3JpYmVGaWxlUmVzcG9uc2UgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxUcmFuc2NyaWJlRmlsZVJlc3BvbnNlPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy50cmFuc2NyaXB0aW9uID0gdmFsdWUudHJhbnNjcmlwdGlvbjtcbiAgICB0aGlzLnRpbWUgPSB2YWx1ZS50aW1lO1xuICAgIHRoaXMud29yZFRpbWluZyA9ICh2YWx1ZS53b3JkVGltaW5nIHx8IFtdKS5tYXAobSA9PiBuZXcgV29yZFRpbWluZyhtKSk7XG4gICAgVHJhbnNjcmliZUZpbGVSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHRyYW5zY3JpcHRpb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhbnNjcmlwdGlvbjtcbiAgfVxuICBzZXQgdHJhbnNjcmlwdGlvbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdHJhbnNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCB0aW1lKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWU7XG4gIH1cbiAgc2V0IHRpbWUodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RpbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgd29yZFRpbWluZygpOiBXb3JkVGltaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl93b3JkVGltaW5nO1xuICB9XG4gIHNldCB3b3JkVGltaW5nKHZhbHVlOiBXb3JkVGltaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl93b3JkVGltaW5nID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zY3JpcHRpb246IHRoaXMudHJhbnNjcmlwdGlvbixcbiAgICAgIHRpbWU6IHRoaXMudGltZSxcbiAgICAgIHdvcmRUaW1pbmc6ICh0aGlzLndvcmRUaW1pbmcgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFRyYW5zY3JpYmVGaWxlUmVzcG9uc2Uge31cbmV4cG9ydCBjbGFzcyBXb3JkVGltaW5nIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFdvcmRUaW1pbmcpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgV29yZFRpbWluZy50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBXb3JkVGltaW5nKCk7XG4gICAgV29yZFRpbWluZy5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogV29yZFRpbWluZykge1xuICAgIGluc3RhbmNlLndvcmQgPSBpbnN0YW5jZS53b3JkIHx8ICcnO1xuICAgIGluc3RhbmNlLmJlZ2luID0gaW5zdGFuY2UuYmVnaW4gfHwgMDtcbiAgICBpbnN0YW5jZS5lbmQgPSBpbnN0YW5jZS5lbmQgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBXb3JkVGltaW5nLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2Uud29yZCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5iZWdpbiA9IHJlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLmVuZCA9IHJlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgV29yZFRpbWluZy5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBXb3JkVGltaW5nLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS53b3JkKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2Uud29yZCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5iZWdpbikge1xuICAgICAgd3JpdGVyLndyaXRlSW50MzIoMiwgaW5zdGFuY2UuYmVnaW4pO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZW5kKSB7XG4gICAgICB3cml0ZXIud3JpdGVJbnQzMigzLCBpbnN0YW5jZS5lbmQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3dvcmQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2JlZ2luPzogbnVtYmVyO1xuICBwcml2YXRlIF9lbmQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBXb3JkVGltaW5nIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8V29yZFRpbWluZz4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMud29yZCA9IHZhbHVlLndvcmQ7XG4gICAgdGhpcy5iZWdpbiA9IHZhbHVlLmJlZ2luO1xuICAgIHRoaXMuZW5kID0gdmFsdWUuZW5kO1xuICAgIFdvcmRUaW1pbmcucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB3b3JkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmQ7XG4gIH1cbiAgc2V0IHdvcmQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3dvcmQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYmVnaW4oKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYmVnaW47XG4gIH1cbiAgc2V0IGJlZ2luKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9iZWdpbiA9IHZhbHVlO1xuICB9XG4gIGdldCBlbmQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW5kO1xuICB9XG4gIHNldCBlbmQodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VuZCA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3b3JkOiB0aGlzLndvcmQsXG4gICAgICBiZWdpbjogdGhpcy5iZWdpbixcbiAgICAgIGVuZDogdGhpcy5lbmRcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFdvcmRUaW1pbmcge31cbmV4cG9ydCBjbGFzcyBTMnRQaXBlbGluZUlkIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFMydFBpcGVsaW5lSWQpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUzJ0UGlwZWxpbmVJZC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTMnRQaXBlbGluZUlkKCk7XG4gICAgUzJ0UGlwZWxpbmVJZC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogUzJ0UGlwZWxpbmVJZCkge1xuICAgIGluc3RhbmNlLmlkID0gaW5zdGFuY2UuaWQgfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogUzJ0UGlwZWxpbmVJZCwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLmlkID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUzJ0UGlwZWxpbmVJZC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBTMnRQaXBlbGluZUlkLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5pZCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLmlkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pZD86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFMydFBpcGVsaW5lSWQgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTMnRQaXBlbGluZUlkPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5pZCA9IHZhbHVlLmlkO1xuICAgIFMydFBpcGVsaW5lSWQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBpZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuICBzZXQgaWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTMnRQaXBlbGluZUlkIHt9XG5leHBvcnQgY2xhc3MgTGlzdFMydFBpcGVsaW5lc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogTGlzdFMydFBpcGVsaW5lc1JlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdFMydFBpcGVsaW5lc1JlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFMydFBpcGVsaW5lc1JlcXVlc3QoKTtcbiAgICBMaXN0UzJ0UGlwZWxpbmVzUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogTGlzdFMydFBpcGVsaW5lc1JlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5sYW5ndWFnZXMgPSBpbnN0YW5jZS5sYW5ndWFnZXMgfHwgW107XG4gICAgaW5zdGFuY2UucGlwZWxpbmVPd25lcnMgPSBpbnN0YW5jZS5waXBlbGluZU93bmVycyB8fCBbXTtcbiAgICBpbnN0YW5jZS5kb21haW5zID0gaW5zdGFuY2UuZG9tYWlucyB8fCBbXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBMaXN0UzJ0UGlwZWxpbmVzUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChpbnN0YW5jZS5sYW5ndWFnZXMgPSBpbnN0YW5jZS5sYW5ndWFnZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICByZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIChpbnN0YW5jZS5waXBlbGluZU93bmVycyA9IGluc3RhbmNlLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAoaW5zdGFuY2UuZG9tYWlucyA9IGluc3RhbmNlLmRvbWFpbnMgfHwgW10pLnB1c2gocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RTMnRQaXBlbGluZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IExpc3RTMnRQaXBlbGluZXNSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5sYW5ndWFnZXMgJiYgaW5zdGFuY2UubGFuZ3VhZ2VzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMSwgaW5zdGFuY2UubGFuZ3VhZ2VzKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnBpcGVsaW5lT3duZXJzICYmIGluc3RhbmNlLnBpcGVsaW5lT3duZXJzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMiwgaW5zdGFuY2UucGlwZWxpbmVPd25lcnMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZG9tYWlucyAmJiBpbnN0YW5jZS5kb21haW5zLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMywgaW5zdGFuY2UuZG9tYWlucyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VzPzogc3RyaW5nW107XG4gIHByaXZhdGUgX3BpcGVsaW5lT3duZXJzPzogc3RyaW5nW107XG4gIHByaXZhdGUgX2RvbWFpbnM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIExpc3RTMnRQaXBlbGluZXNSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFMydFBpcGVsaW5lc1JlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhbmd1YWdlcyA9ICh2YWx1ZS5sYW5ndWFnZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5waXBlbGluZU93bmVycyA9ICh2YWx1ZS5waXBlbGluZU93bmVycyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLmRvbWFpbnMgPSAodmFsdWUuZG9tYWlucyB8fCBbXSkuc2xpY2UoKTtcbiAgICBMaXN0UzJ0UGlwZWxpbmVzUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlcygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlcztcbiAgfVxuICBzZXQgbGFuZ3VhZ2VzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlcyA9IHZhbHVlO1xuICB9XG4gIGdldCBwaXBlbGluZU93bmVycygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BpcGVsaW5lT3duZXJzO1xuICB9XG4gIHNldCBwaXBlbGluZU93bmVycyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9waXBlbGluZU93bmVycyA9IHZhbHVlO1xuICB9XG4gIGdldCBkb21haW5zKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWlucztcbiAgfVxuICBzZXQgZG9tYWlucyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kb21haW5zID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlczogKHRoaXMubGFuZ3VhZ2VzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgcGlwZWxpbmVPd25lcnM6ICh0aGlzLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgZG9tYWluczogKHRoaXMuZG9tYWlucyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGlzdFMydFBpcGVsaW5lc1JlcXVlc3Qge31cbmV4cG9ydCBjbGFzcyBMaXN0UzJ0UGlwZWxpbmVzUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogTGlzdFMydFBpcGVsaW5lc1Jlc3BvbnNlKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RTMnRQaXBlbGluZXNSZXNwb25zZS50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaXN0UzJ0UGlwZWxpbmVzUmVzcG9uc2UoKTtcbiAgICBMaXN0UzJ0UGlwZWxpbmVzUmVzcG9uc2UuZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IExpc3RTMnRQaXBlbGluZXNSZXNwb25zZSkge1xuICAgIGluc3RhbmNlLnBpcGVsaW5lQ29uZmlncyA9IGluc3RhbmNlLnBpcGVsaW5lQ29uZmlncyB8fCBbXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBMaXN0UzJ0UGlwZWxpbmVzUmVzcG9uc2UsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IFNwZWVjaDJUZXh0Q29uZmlnKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMSxcbiAgICAgICAgICAgIFNwZWVjaDJUZXh0Q29uZmlnLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChpbnN0YW5jZS5waXBlbGluZUNvbmZpZ3MgPSBpbnN0YW5jZS5waXBlbGluZUNvbmZpZ3MgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdFMydFBpcGVsaW5lc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IExpc3RTMnRQaXBlbGluZXNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UucGlwZWxpbmVDb25maWdzICYmIGluc3RhbmNlLnBpcGVsaW5lQ29uZmlncy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgaW5zdGFuY2UucGlwZWxpbmVDb25maWdzIGFzIGFueSxcbiAgICAgICAgU3BlZWNoMlRleHRDb25maWcudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGlwZWxpbmVDb25maWdzPzogU3BlZWNoMlRleHRDb25maWdbXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIExpc3RTMnRQaXBlbGluZXNSZXNwb25zZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RTMnRQaXBlbGluZXNSZXNwb25zZT4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGlwZWxpbmVDb25maWdzID0gKHZhbHVlLnBpcGVsaW5lQ29uZmlncyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgU3BlZWNoMlRleHRDb25maWcobSlcbiAgICApO1xuICAgIExpc3RTMnRQaXBlbGluZXNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBpcGVsaW5lQ29uZmlncygpOiBTcGVlY2gyVGV4dENvbmZpZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGlwZWxpbmVDb25maWdzO1xuICB9XG4gIHNldCBwaXBlbGluZUNvbmZpZ3ModmFsdWU6IFNwZWVjaDJUZXh0Q29uZmlnW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9waXBlbGluZUNvbmZpZ3MgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGlwZWxpbmVDb25maWdzOiAodGhpcy5waXBlbGluZUNvbmZpZ3MgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RTMnRQaXBlbGluZXNSZXNwb25zZSB7fVxuZXhwb3J0IGNsYXNzIExpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IExpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0KCk7XG4gICAgTGlzdFMydExhbmd1YWdlc1JlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IExpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UuZG9tYWlucyA9IGluc3RhbmNlLmRvbWFpbnMgfHwgW107XG4gICAgaW5zdGFuY2UucGlwZWxpbmVPd25lcnMgPSBpbnN0YW5jZS5waXBlbGluZU93bmVycyB8fCBbXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBMaXN0UzJ0TGFuZ3VhZ2VzUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChpbnN0YW5jZS5kb21haW5zID0gaW5zdGFuY2UuZG9tYWlucyB8fCBbXSkucHVzaChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIChpbnN0YW5jZS5waXBlbGluZU93bmVycyA9IGluc3RhbmNlLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IExpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5kb21haW5zICYmIGluc3RhbmNlLmRvbWFpbnMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBpbnN0YW5jZS5kb21haW5zKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnBpcGVsaW5lT3duZXJzICYmIGluc3RhbmNlLnBpcGVsaW5lT3duZXJzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMiwgaW5zdGFuY2UucGlwZWxpbmVPd25lcnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2RvbWFpbnM/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfcGlwZWxpbmVPd25lcnM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIExpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFMydExhbmd1YWdlc1JlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmRvbWFpbnMgPSAodmFsdWUuZG9tYWlucyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLnBpcGVsaW5lT3duZXJzID0gKHZhbHVlLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5zbGljZSgpO1xuICAgIExpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgZG9tYWlucygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RvbWFpbnM7XG4gIH1cbiAgc2V0IGRvbWFpbnModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZG9tYWlucyA9IHZhbHVlO1xuICB9XG4gIGdldCBwaXBlbGluZU93bmVycygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BpcGVsaW5lT3duZXJzO1xuICB9XG4gIHNldCBwaXBlbGluZU93bmVycyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9waXBlbGluZU93bmVycyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBkb21haW5zOiAodGhpcy5kb21haW5zIHx8IFtdKS5zbGljZSgpLFxuICAgICAgcGlwZWxpbmVPd25lcnM6ICh0aGlzLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0UzJ0TGFuZ3VhZ2VzUmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIExpc3RTMnRMYW5ndWFnZXNSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBMaXN0UzJ0TGFuZ3VhZ2VzUmVzcG9uc2UpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdFMydExhbmd1YWdlc1Jlc3BvbnNlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RTMnRMYW5ndWFnZXNSZXNwb25zZSgpO1xuICAgIExpc3RTMnRMYW5ndWFnZXNSZXNwb25zZS5mcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogTGlzdFMydExhbmd1YWdlc1Jlc3BvbnNlKSB7XG4gICAgaW5zdGFuY2UubGFuZ3VhZ2VzID0gaW5zdGFuY2UubGFuZ3VhZ2VzIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IExpc3RTMnRMYW5ndWFnZXNSZXNwb25zZSxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChpbnN0YW5jZS5sYW5ndWFnZXMgPSBpbnN0YW5jZS5sYW5ndWFnZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICByZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdFMydExhbmd1YWdlc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IExpc3RTMnRMYW5ndWFnZXNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UubGFuZ3VhZ2VzICYmIGluc3RhbmNlLmxhbmd1YWdlcy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDEsIGluc3RhbmNlLmxhbmd1YWdlcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBMaXN0UzJ0TGFuZ3VhZ2VzUmVzcG9uc2UgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0UzJ0TGFuZ3VhZ2VzUmVzcG9uc2U+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhbmd1YWdlcyA9ICh2YWx1ZS5sYW5ndWFnZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgTGlzdFMydExhbmd1YWdlc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VzO1xuICB9XG4gIHNldCBsYW5ndWFnZXModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VzID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlczogKHRoaXMubGFuZ3VhZ2VzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0UzJ0TGFuZ3VhZ2VzUmVzcG9uc2Uge31cbmV4cG9ydCBjbGFzcyBMaXN0UzJ0RG9tYWluc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogTGlzdFMydERvbWFpbnNSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RTMnREb21haW5zUmVxdWVzdC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaXN0UzJ0RG9tYWluc1JlcXVlc3QoKTtcbiAgICBMaXN0UzJ0RG9tYWluc1JlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IExpc3RTMnREb21haW5zUmVxdWVzdCkge1xuICAgIGluc3RhbmNlLmxhbmd1YWdlcyA9IGluc3RhbmNlLmxhbmd1YWdlcyB8fCBbXTtcbiAgICBpbnN0YW5jZS5waXBlbGluZU93bmVycyA9IGluc3RhbmNlLnBpcGVsaW5lT3duZXJzIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IExpc3RTMnREb21haW5zUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChpbnN0YW5jZS5sYW5ndWFnZXMgPSBpbnN0YW5jZS5sYW5ndWFnZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICByZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIChpbnN0YW5jZS5waXBlbGluZU93bmVycyA9IGluc3RhbmNlLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RTMnREb21haW5zUmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBMaXN0UzJ0RG9tYWluc1JlcXVlc3QsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLmxhbmd1YWdlcyAmJiBpbnN0YW5jZS5sYW5ndWFnZXMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBpbnN0YW5jZS5sYW5ndWFnZXMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucGlwZWxpbmVPd25lcnMgJiYgaW5zdGFuY2UucGlwZWxpbmVPd25lcnMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygyLCBpbnN0YW5jZS5waXBlbGluZU93bmVycyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VzPzogc3RyaW5nW107XG4gIHByaXZhdGUgX3BpcGVsaW5lT3duZXJzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBMaXN0UzJ0RG9tYWluc1JlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0UzJ0RG9tYWluc1JlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhbmd1YWdlcyA9ICh2YWx1ZS5sYW5ndWFnZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5waXBlbGluZU93bmVycyA9ICh2YWx1ZS5waXBlbGluZU93bmVycyB8fCBbXSkuc2xpY2UoKTtcbiAgICBMaXN0UzJ0RG9tYWluc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBsYW5ndWFnZXMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZXM7XG4gIH1cbiAgc2V0IGxhbmd1YWdlcyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGlwZWxpbmVPd25lcnMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9waXBlbGluZU93bmVycztcbiAgfVxuICBzZXQgcGlwZWxpbmVPd25lcnModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGlwZWxpbmVPd25lcnMgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFuZ3VhZ2VzOiAodGhpcy5sYW5ndWFnZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBwaXBlbGluZU93bmVyczogKHRoaXMucGlwZWxpbmVPd25lcnMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RTMnREb21haW5zUmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIExpc3RTMnREb21haW5zUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogTGlzdFMydERvbWFpbnNSZXNwb25zZSkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMaXN0UzJ0RG9tYWluc1Jlc3BvbnNlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RTMnREb21haW5zUmVzcG9uc2UoKTtcbiAgICBMaXN0UzJ0RG9tYWluc1Jlc3BvbnNlLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBMaXN0UzJ0RG9tYWluc1Jlc3BvbnNlKSB7XG4gICAgaW5zdGFuY2UuZG9tYWlucyA9IGluc3RhbmNlLmRvbWFpbnMgfHwgW107XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogTGlzdFMydERvbWFpbnNSZXNwb25zZSxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChpbnN0YW5jZS5kb21haW5zID0gaW5zdGFuY2UuZG9tYWlucyB8fCBbXSkucHVzaChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdFMydERvbWFpbnNSZXNwb25zZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgIGluc3RhbmNlOiBMaXN0UzJ0RG9tYWluc1Jlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5kb21haW5zICYmIGluc3RhbmNlLmRvbWFpbnMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBpbnN0YW5jZS5kb21haW5zKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kb21haW5zPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBMaXN0UzJ0RG9tYWluc1Jlc3BvbnNlIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFMydERvbWFpbnNSZXNwb25zZT4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuZG9tYWlucyA9ICh2YWx1ZS5kb21haW5zIHx8IFtdKS5zbGljZSgpO1xuICAgIExpc3RTMnREb21haW5zUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBkb21haW5zKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWlucztcbiAgfVxuICBzZXQgZG9tYWlucyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kb21haW5zID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbWFpbnM6ICh0aGlzLmRvbWFpbnMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RTMnREb21haW5zUmVzcG9uc2Uge31cbmV4cG9ydCBjbGFzcyBTcGVlY2gyVGV4dENvbmZpZyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBTcGVlY2gyVGV4dENvbmZpZykge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBTcGVlY2gyVGV4dENvbmZpZy50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTcGVlY2gyVGV4dENvbmZpZygpO1xuICAgIFNwZWVjaDJUZXh0Q29uZmlnLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBTcGVlY2gyVGV4dENvbmZpZykge1xuICAgIGluc3RhbmNlLmlkID0gaW5zdGFuY2UuaWQgfHwgJyc7XG4gICAgaW5zdGFuY2UuZGVzY3JpcHRpb24gPSBpbnN0YW5jZS5kZXNjcmlwdGlvbiB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2UuYWN0aXZlID0gaW5zdGFuY2UuYWN0aXZlIHx8IGZhbHNlO1xuICAgIGluc3RhbmNlLmluZmVyZW5jZSA9IGluc3RhbmNlLmluZmVyZW5jZSB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2Uuc3RyZWFtaW5nU2VydmVyID0gaW5zdGFuY2Uuc3RyZWFtaW5nU2VydmVyIHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS52b2ljZUFjdGl2aXR5RGV0ZWN0aW9uID1cbiAgICAgIGluc3RhbmNlLnZvaWNlQWN0aXZpdHlEZXRlY3Rpb24gfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLnBvc3RQcm9jZXNzaW5nID0gaW5zdGFuY2UucG9zdFByb2Nlc3NpbmcgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLmxvZ2dpbmcgPSBpbnN0YW5jZS5sb2dnaW5nIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBTcGVlY2gyVGV4dENvbmZpZywgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLmlkID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLmRlc2NyaXB0aW9uID0gbmV3IERlc2NyaXB0aW9uKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2UuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBEZXNjcmlwdGlvbi5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLmFjdGl2ZSA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgaW5zdGFuY2UuaW5mZXJlbmNlID0gbmV3IEluZmVyZW5jZSgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShpbnN0YW5jZS5pbmZlcmVuY2UsIEluZmVyZW5jZS5mcm9tQmluYXJ5UmVhZGVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGluc3RhbmNlLnN0cmVhbWluZ1NlcnZlciA9IG5ldyBTdHJlYW1pbmdTZXJ2ZXIoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS5zdHJlYW1pbmdTZXJ2ZXIsXG4gICAgICAgICAgICBTdHJlYW1pbmdTZXJ2ZXIuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBpbnN0YW5jZS52b2ljZUFjdGl2aXR5RGV0ZWN0aW9uID0gbmV3IFZvaWNlQWN0aXZpdHlEZXRlY3Rpb24oKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS52b2ljZUFjdGl2aXR5RGV0ZWN0aW9uLFxuICAgICAgICAgICAgVm9pY2VBY3Rpdml0eURldGVjdGlvbi5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIGluc3RhbmNlLnBvc3RQcm9jZXNzaW5nID0gbmV3IFBvc3RQcm9jZXNzaW5nKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2UucG9zdFByb2Nlc3NpbmcsXG4gICAgICAgICAgICBQb3N0UHJvY2Vzc2luZy5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIGluc3RhbmNlLmxvZ2dpbmcgPSBuZXcgTG9nZ2luZygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShpbnN0YW5jZS5sb2dnaW5nLCBMb2dnaW5nLmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTcGVlY2gyVGV4dENvbmZpZy5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBTcGVlY2gyVGV4dENvbmZpZywgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UuaWQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5pZCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5kZXNjcmlwdGlvbikge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgaW5zdGFuY2UuZGVzY3JpcHRpb24gYXMgYW55LFxuICAgICAgICBEZXNjcmlwdGlvbi50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmFjdGl2ZSkge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCgzLCBpbnN0YW5jZS5hY3RpdmUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuaW5mZXJlbmNlKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBpbnN0YW5jZS5pbmZlcmVuY2UgYXMgYW55LFxuICAgICAgICBJbmZlcmVuY2UudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5zdHJlYW1pbmdTZXJ2ZXIpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIGluc3RhbmNlLnN0cmVhbWluZ1NlcnZlciBhcyBhbnksXG4gICAgICAgIFN0cmVhbWluZ1NlcnZlci50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnZvaWNlQWN0aXZpdHlEZXRlY3Rpb24pIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDYsXG4gICAgICAgIGluc3RhbmNlLnZvaWNlQWN0aXZpdHlEZXRlY3Rpb24gYXMgYW55LFxuICAgICAgICBWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucG9zdFByb2Nlc3NpbmcpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDcsXG4gICAgICAgIGluc3RhbmNlLnBvc3RQcm9jZXNzaW5nIGFzIGFueSxcbiAgICAgICAgUG9zdFByb2Nlc3NpbmcudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5sb2dnaW5nKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKDgsIGluc3RhbmNlLmxvZ2dpbmcgYXMgYW55LCBMb2dnaW5nLnRvQmluYXJ5V3JpdGVyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBEZXNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfYWN0aXZlPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaW5mZXJlbmNlPzogSW5mZXJlbmNlO1xuICBwcml2YXRlIF9zdHJlYW1pbmdTZXJ2ZXI/OiBTdHJlYW1pbmdTZXJ2ZXI7XG4gIHByaXZhdGUgX3ZvaWNlQWN0aXZpdHlEZXRlY3Rpb24/OiBWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uO1xuICBwcml2YXRlIF9wb3N0UHJvY2Vzc2luZz86IFBvc3RQcm9jZXNzaW5nO1xuICBwcml2YXRlIF9sb2dnaW5nPzogTG9nZ2luZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFNwZWVjaDJUZXh0Q29uZmlnIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U3BlZWNoMlRleHRDb25maWc+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmlkID0gdmFsdWUuaWQ7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZhbHVlLmRlc2NyaXB0aW9uXG4gICAgICA/IG5ldyBEZXNjcmlwdGlvbih2YWx1ZS5kZXNjcmlwdGlvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuYWN0aXZlID0gdmFsdWUuYWN0aXZlO1xuICAgIHRoaXMuaW5mZXJlbmNlID0gdmFsdWUuaW5mZXJlbmNlXG4gICAgICA/IG5ldyBJbmZlcmVuY2UodmFsdWUuaW5mZXJlbmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdHJlYW1pbmdTZXJ2ZXIgPSB2YWx1ZS5zdHJlYW1pbmdTZXJ2ZXJcbiAgICAgID8gbmV3IFN0cmVhbWluZ1NlcnZlcih2YWx1ZS5zdHJlYW1pbmdTZXJ2ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZvaWNlQWN0aXZpdHlEZXRlY3Rpb24gPSB2YWx1ZS52b2ljZUFjdGl2aXR5RGV0ZWN0aW9uXG4gICAgICA/IG5ldyBWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uKHZhbHVlLnZvaWNlQWN0aXZpdHlEZXRlY3Rpb24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBvc3RQcm9jZXNzaW5nID0gdmFsdWUucG9zdFByb2Nlc3NpbmdcbiAgICAgID8gbmV3IFBvc3RQcm9jZXNzaW5nKHZhbHVlLnBvc3RQcm9jZXNzaW5nKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2dnaW5nID0gdmFsdWUubG9nZ2luZyA/IG5ldyBMb2dnaW5nKHZhbHVlLmxvZ2dpbmcpIDogdW5kZWZpbmVkO1xuICAgIFNwZWVjaDJUZXh0Q29uZmlnLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIGdldCBkZXNjcmlwdGlvbigpOiBEZXNjcmlwdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG4gIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogRGVzY3JpcHRpb24gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuICBzZXQgYWN0aXZlKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGluZmVyZW5jZSgpOiBJbmZlcmVuY2UgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pbmZlcmVuY2U7XG4gIH1cbiAgc2V0IGluZmVyZW5jZSh2YWx1ZTogSW5mZXJlbmNlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faW5mZXJlbmNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHN0cmVhbWluZ1NlcnZlcigpOiBTdHJlYW1pbmdTZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zdHJlYW1pbmdTZXJ2ZXI7XG4gIH1cbiAgc2V0IHN0cmVhbWluZ1NlcnZlcih2YWx1ZTogU3RyZWFtaW5nU2VydmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3RyZWFtaW5nU2VydmVyID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHZvaWNlQWN0aXZpdHlEZXRlY3Rpb24oKTogVm9pY2VBY3Rpdml0eURldGVjdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3ZvaWNlQWN0aXZpdHlEZXRlY3Rpb247XG4gIH1cbiAgc2V0IHZvaWNlQWN0aXZpdHlEZXRlY3Rpb24odmFsdWU6IFZvaWNlQWN0aXZpdHlEZXRlY3Rpb24gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl92b2ljZUFjdGl2aXR5RGV0ZWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBvc3RQcm9jZXNzaW5nKCk6IFBvc3RQcm9jZXNzaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zdFByb2Nlc3Npbmc7XG4gIH1cbiAgc2V0IHBvc3RQcm9jZXNzaW5nKHZhbHVlOiBQb3N0UHJvY2Vzc2luZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Bvc3RQcm9jZXNzaW5nID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxvZ2dpbmcoKTogTG9nZ2luZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ2dpbmc7XG4gIH1cbiAgc2V0IGxvZ2dpbmcodmFsdWU6IExvZ2dpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sb2dnaW5nID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24gPyB0aGlzLmRlc2NyaXB0aW9uLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBhY3RpdmU6IHRoaXMuYWN0aXZlLFxuICAgICAgaW5mZXJlbmNlOiB0aGlzLmluZmVyZW5jZSA/IHRoaXMuaW5mZXJlbmNlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBzdHJlYW1pbmdTZXJ2ZXI6IHRoaXMuc3RyZWFtaW5nU2VydmVyXG4gICAgICAgID8gdGhpcy5zdHJlYW1pbmdTZXJ2ZXIudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHZvaWNlQWN0aXZpdHlEZXRlY3Rpb246IHRoaXMudm9pY2VBY3Rpdml0eURldGVjdGlvblxuICAgICAgICA/IHRoaXMudm9pY2VBY3Rpdml0eURldGVjdGlvbi50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgcG9zdFByb2Nlc3Npbmc6IHRoaXMucG9zdFByb2Nlc3NpbmdcbiAgICAgICAgPyB0aGlzLnBvc3RQcm9jZXNzaW5nLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBsb2dnaW5nOiB0aGlzLmxvZ2dpbmcgPyB0aGlzLmxvZ2dpbmcudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU3BlZWNoMlRleHRDb25maWcge31cbmV4cG9ydCBjbGFzcyBEZXNjcmlwdGlvbiBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBEZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBEZXNjcmlwdGlvbi50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBEZXNjcmlwdGlvbigpO1xuICAgIERlc2NyaXB0aW9uLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBEZXNjcmlwdGlvbikge1xuICAgIGluc3RhbmNlLmxhbmd1YWdlID0gaW5zdGFuY2UubGFuZ3VhZ2UgfHwgJyc7XG4gICAgaW5zdGFuY2UucGlwZWxpbmVPd25lciA9IGluc3RhbmNlLnBpcGVsaW5lT3duZXIgfHwgJyc7XG4gICAgaW5zdGFuY2UuZG9tYWluID0gaW5zdGFuY2UuZG9tYWluIHx8ICcnO1xuICAgIGluc3RhbmNlLmNvbW1lbnRzID0gaW5zdGFuY2UuY29tbWVudHMgfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogRGVzY3JpcHRpb24sIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5sYW5ndWFnZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5waXBlbGluZU93bmVyID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLmRvbWFpbiA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5jb21tZW50cyA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIERlc2NyaXB0aW9uLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IERlc2NyaXB0aW9uLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5sYW5ndWFnZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLmxhbmd1YWdlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnBpcGVsaW5lT3duZXIpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5waXBlbGluZU93bmVyKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmRvbWFpbikge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDMsIGluc3RhbmNlLmRvbWFpbik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5jb21tZW50cykge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDQsIGluc3RhbmNlLmNvbW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sYW5ndWFnZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfcGlwZWxpbmVPd25lcj86IHN0cmluZztcbiAgcHJpdmF0ZSBfZG9tYWluPzogc3RyaW5nO1xuICBwcml2YXRlIF9jb21tZW50cz86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIERlc2NyaXB0aW9uIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RGVzY3JpcHRpb24+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhbmd1YWdlID0gdmFsdWUubGFuZ3VhZ2U7XG4gICAgdGhpcy5waXBlbGluZU93bmVyID0gdmFsdWUucGlwZWxpbmVPd25lcjtcbiAgICB0aGlzLmRvbWFpbiA9IHZhbHVlLmRvbWFpbjtcbiAgICB0aGlzLmNvbW1lbnRzID0gdmFsdWUuY29tbWVudHM7XG4gICAgRGVzY3JpcHRpb24ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBsYW5ndWFnZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2UodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBpcGVsaW5lT3duZXIoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGlwZWxpbmVPd25lcjtcbiAgfVxuICBzZXQgcGlwZWxpbmVPd25lcih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGlwZWxpbmVPd25lciA9IHZhbHVlO1xuICB9XG4gIGdldCBkb21haW4oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWluO1xuICB9XG4gIHNldCBkb21haW4odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RvbWFpbiA9IHZhbHVlO1xuICB9XG4gIGdldCBjb21tZW50cygpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jb21tZW50cztcbiAgfVxuICBzZXQgY29tbWVudHModmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NvbW1lbnRzID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlLFxuICAgICAgcGlwZWxpbmVPd25lcjogdGhpcy5waXBlbGluZU93bmVyLFxuICAgICAgZG9tYWluOiB0aGlzLmRvbWFpbixcbiAgICAgIGNvbW1lbnRzOiB0aGlzLmNvbW1lbnRzXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBEZXNjcmlwdGlvbiB7fVxuZXhwb3J0IGNsYXNzIEluZmVyZW5jZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBJbmZlcmVuY2UpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgSW5mZXJlbmNlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEluZmVyZW5jZSgpO1xuICAgIEluZmVyZW5jZS5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogSW5mZXJlbmNlKSB7XG4gICAgaW5zdGFuY2UuY3RjQWNvdXN0aWNNb2RlbHMgPSBpbnN0YW5jZS5jdGNBY291c3RpY01vZGVscyB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2UubGFuZ3VhZ2VNb2RlbCA9IGluc3RhbmNlLmxhbmd1YWdlTW9kZWwgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IEluZmVyZW5jZSwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLmN0Y0Fjb3VzdGljTW9kZWxzID0gbmV3IEN0Y0Fjb3VzdGljTW9kZWxzKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2UuY3RjQWNvdXN0aWNNb2RlbHMsXG4gICAgICAgICAgICBDdGNBY291c3RpY01vZGVscy5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLmxhbmd1YWdlTW9kZWwgPSBuZXcgTGFuZ3VhZ2VNb2RlbCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLmxhbmd1YWdlTW9kZWwsXG4gICAgICAgICAgICBMYW5ndWFnZU1vZGVsLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBJbmZlcmVuY2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogSW5mZXJlbmNlLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5jdGNBY291c3RpY01vZGVscykge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgaW5zdGFuY2UuY3RjQWNvdXN0aWNNb2RlbHMgYXMgYW55LFxuICAgICAgICBDdGNBY291c3RpY01vZGVscy50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmxhbmd1YWdlTW9kZWwpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIGluc3RhbmNlLmxhbmd1YWdlTW9kZWwgYXMgYW55LFxuICAgICAgICBMYW5ndWFnZU1vZGVsLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2N0Y0Fjb3VzdGljTW9kZWxzPzogQ3RjQWNvdXN0aWNNb2RlbHM7XG4gIHByaXZhdGUgX2xhbmd1YWdlTW9kZWw/OiBMYW5ndWFnZU1vZGVsO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gSW5mZXJlbmNlIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8SW5mZXJlbmNlPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5jdGNBY291c3RpY01vZGVscyA9IHZhbHVlLmN0Y0Fjb3VzdGljTW9kZWxzXG4gICAgICA/IG5ldyBDdGNBY291c3RpY01vZGVscyh2YWx1ZS5jdGNBY291c3RpY01vZGVscylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubGFuZ3VhZ2VNb2RlbCA9IHZhbHVlLmxhbmd1YWdlTW9kZWxcbiAgICAgID8gbmV3IExhbmd1YWdlTW9kZWwodmFsdWUubGFuZ3VhZ2VNb2RlbClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIEluZmVyZW5jZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGN0Y0Fjb3VzdGljTW9kZWxzKCk6IEN0Y0Fjb3VzdGljTW9kZWxzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY3RjQWNvdXN0aWNNb2RlbHM7XG4gIH1cbiAgc2V0IGN0Y0Fjb3VzdGljTW9kZWxzKHZhbHVlOiBDdGNBY291c3RpY01vZGVscyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2N0Y0Fjb3VzdGljTW9kZWxzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlTW9kZWwoKTogTGFuZ3VhZ2VNb2RlbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlTW9kZWw7XG4gIH1cbiAgc2V0IGxhbmd1YWdlTW9kZWwodmFsdWU6IExhbmd1YWdlTW9kZWwgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZU1vZGVsID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN0Y0Fjb3VzdGljTW9kZWxzOiB0aGlzLmN0Y0Fjb3VzdGljTW9kZWxzXG4gICAgICAgID8gdGhpcy5jdGNBY291c3RpY01vZGVscy50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgbGFuZ3VhZ2VNb2RlbDogdGhpcy5sYW5ndWFnZU1vZGVsXG4gICAgICAgID8gdGhpcy5sYW5ndWFnZU1vZGVsLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEluZmVyZW5jZSB7fVxuZXhwb3J0IGNsYXNzIEN0Y0Fjb3VzdGljTW9kZWxzIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEN0Y0Fjb3VzdGljTW9kZWxzKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEN0Y0Fjb3VzdGljTW9kZWxzLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEN0Y0Fjb3VzdGljTW9kZWxzKCk7XG4gICAgQ3RjQWNvdXN0aWNNb2RlbHMuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEN0Y0Fjb3VzdGljTW9kZWxzKSB7XG4gICAgaW5zdGFuY2UudHlwZSA9IGluc3RhbmNlLnR5cGUgfHwgJyc7XG4gICAgaW5zdGFuY2UucXVhcnR6bmV0ID0gaW5zdGFuY2UucXVhcnR6bmV0IHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS5xdWFydHpuZXRUcml0b24gPSBpbnN0YW5jZS5xdWFydHpuZXRUcml0b24gfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLndhdjJ2ZWMgPSBpbnN0YW5jZS53YXYydmVjIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBDdGNBY291c3RpY01vZGVscywgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnR5cGUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UucXVhcnR6bmV0ID0gbmV3IFF1YXJ0em5ldCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShpbnN0YW5jZS5xdWFydHpuZXQsIFF1YXJ0em5ldC5mcm9tQmluYXJ5UmVhZGVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLnF1YXJ0em5ldFRyaXRvbiA9IG5ldyBRdWFydHpuZXRUcml0b24oKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS5xdWFydHpuZXRUcml0b24sXG4gICAgICAgICAgICBRdWFydHpuZXRUcml0b24uZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS53YXYydmVjID0gbmV3IFdhdjJWZWMoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoaW5zdGFuY2Uud2F2MnZlYywgV2F2MlZlYy5mcm9tQmluYXJ5UmVhZGVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ3RjQWNvdXN0aWNNb2RlbHMucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogQ3RjQWNvdXN0aWNNb2RlbHMsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLnR5cGUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS50eXBlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnF1YXJ0em5ldCkge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgaW5zdGFuY2UucXVhcnR6bmV0IGFzIGFueSxcbiAgICAgICAgUXVhcnR6bmV0LnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucXVhcnR6bmV0VHJpdG9uKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBpbnN0YW5jZS5xdWFydHpuZXRUcml0b24gYXMgYW55LFxuICAgICAgICBRdWFydHpuZXRUcml0b24udG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS53YXYydmVjKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKDQsIGluc3RhbmNlLndhdjJ2ZWMgYXMgYW55LCBXYXYyVmVjLnRvQmluYXJ5V3JpdGVyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90eXBlPzogc3RyaW5nO1xuICBwcml2YXRlIF9xdWFydHpuZXQ/OiBRdWFydHpuZXQ7XG4gIHByaXZhdGUgX3F1YXJ0em5ldFRyaXRvbj86IFF1YXJ0em5ldFRyaXRvbjtcbiAgcHJpdmF0ZSBfd2F2MnZlYz86IFdhdjJWZWM7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBDdGNBY291c3RpY01vZGVscyB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEN0Y0Fjb3VzdGljTW9kZWxzPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy50eXBlID0gdmFsdWUudHlwZTtcbiAgICB0aGlzLnF1YXJ0em5ldCA9IHZhbHVlLnF1YXJ0em5ldFxuICAgICAgPyBuZXcgUXVhcnR6bmV0KHZhbHVlLnF1YXJ0em5ldClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucXVhcnR6bmV0VHJpdG9uID0gdmFsdWUucXVhcnR6bmV0VHJpdG9uXG4gICAgICA/IG5ldyBRdWFydHpuZXRUcml0b24odmFsdWUucXVhcnR6bmV0VHJpdG9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy53YXYydmVjID0gdmFsdWUud2F2MnZlYyA/IG5ldyBXYXYyVmVjKHZhbHVlLndhdjJ2ZWMpIDogdW5kZWZpbmVkO1xuICAgIEN0Y0Fjb3VzdGljTW9kZWxzLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdHlwZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG4gIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHF1YXJ0em5ldCgpOiBRdWFydHpuZXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9xdWFydHpuZXQ7XG4gIH1cbiAgc2V0IHF1YXJ0em5ldCh2YWx1ZTogUXVhcnR6bmV0IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcXVhcnR6bmV0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHF1YXJ0em5ldFRyaXRvbigpOiBRdWFydHpuZXRUcml0b24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9xdWFydHpuZXRUcml0b247XG4gIH1cbiAgc2V0IHF1YXJ0em5ldFRyaXRvbih2YWx1ZTogUXVhcnR6bmV0VHJpdG9uIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcXVhcnR6bmV0VHJpdG9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHdhdjJ2ZWMoKTogV2F2MlZlYyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3dhdjJ2ZWM7XG4gIH1cbiAgc2V0IHdhdjJ2ZWModmFsdWU6IFdhdjJWZWMgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl93YXYydmVjID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIHF1YXJ0em5ldDogdGhpcy5xdWFydHpuZXQgPyB0aGlzLnF1YXJ0em5ldC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgcXVhcnR6bmV0VHJpdG9uOiB0aGlzLnF1YXJ0em5ldFRyaXRvblxuICAgICAgICA/IHRoaXMucXVhcnR6bmV0VHJpdG9uLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICB3YXYydmVjOiB0aGlzLndhdjJ2ZWMgPyB0aGlzLndhdjJ2ZWMudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQ3RjQWNvdXN0aWNNb2RlbHMge31cbmV4cG9ydCBjbGFzcyBXYXYyVmVjIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFdhdjJWZWMpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgV2F2MlZlYy50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBXYXYyVmVjKCk7XG4gICAgV2F2MlZlYy5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogV2F2MlZlYykge1xuICAgIGluc3RhbmNlLm1vZGVsUGF0aCA9IGluc3RhbmNlLm1vZGVsUGF0aCB8fCAnJztcbiAgICBpbnN0YW5jZS51c2VHcHUgPSBpbnN0YW5jZS51c2VHcHUgfHwgZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogV2F2MlZlYywgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLm1vZGVsUGF0aCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS51c2VHcHUgPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgV2F2MlZlYy5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBXYXYyVmVjLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5tb2RlbFBhdGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5tb2RlbFBhdGgpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudXNlR3B1KSB7XG4gICAgICB3cml0ZXIud3JpdGVCb29sKDIsIGluc3RhbmNlLnVzZUdwdSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbW9kZWxQYXRoPzogc3RyaW5nO1xuICBwcml2YXRlIF91c2VHcHU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gV2F2MlZlYyB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFdhdjJWZWM+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm1vZGVsUGF0aCA9IHZhbHVlLm1vZGVsUGF0aDtcbiAgICB0aGlzLnVzZUdwdSA9IHZhbHVlLnVzZUdwdTtcbiAgICBXYXYyVmVjLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbW9kZWxQYXRoKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVsUGF0aDtcbiAgfVxuICBzZXQgbW9kZWxQYXRoKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tb2RlbFBhdGggPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXNlR3B1KCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91c2VHcHU7XG4gIH1cbiAgc2V0IHVzZUdwdSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VzZUdwdSA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBtb2RlbFBhdGg6IHRoaXMubW9kZWxQYXRoLFxuICAgICAgdXNlR3B1OiB0aGlzLnVzZUdwdVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgV2F2MlZlYyB7fVxuZXhwb3J0IGNsYXNzIFF1YXJ0em5ldCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBRdWFydHpuZXQpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUXVhcnR6bmV0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFF1YXJ0em5ldCgpO1xuICAgIFF1YXJ0em5ldC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogUXVhcnR6bmV0KSB7XG4gICAgaW5zdGFuY2UuY29uZmlnUGF0aCA9IGluc3RhbmNlLmNvbmZpZ1BhdGggfHwgJyc7XG4gICAgaW5zdGFuY2UubG9hZFR5cGUgPSBpbnN0YW5jZS5sb2FkVHlwZSB8fCAnJztcbiAgICBpbnN0YW5jZS5wdEZpbGVzID0gaW5zdGFuY2UucHRGaWxlcyB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2UuY2twdEZpbGUgPSBpbnN0YW5jZS5ja3B0RmlsZSB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogUXVhcnR6bmV0LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UuY29uZmlnUGF0aCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5sb2FkVHlwZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5wdEZpbGVzID0gbmV3IFB0RmlsZXMoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoaW5zdGFuY2UucHRGaWxlcywgUHRGaWxlcy5mcm9tQmluYXJ5UmVhZGVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGluc3RhbmNlLmNrcHRGaWxlID0gbmV3IENrcHRGaWxlKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKGluc3RhbmNlLmNrcHRGaWxlLCBDa3B0RmlsZS5mcm9tQmluYXJ5UmVhZGVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUXVhcnR6bmV0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IFF1YXJ0em5ldCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UuY29uZmlnUGF0aCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLmNvbmZpZ1BhdGgpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubG9hZFR5cGUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5sb2FkVHlwZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5wdEZpbGVzKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKDMsIGluc3RhbmNlLnB0RmlsZXMgYXMgYW55LCBQdEZpbGVzLnRvQmluYXJ5V3JpdGVyKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmNrcHRGaWxlKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKDQsIGluc3RhbmNlLmNrcHRGaWxlIGFzIGFueSwgQ2twdEZpbGUudG9CaW5hcnlXcml0ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbmZpZ1BhdGg/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xvYWRUeXBlPzogc3RyaW5nO1xuICBwcml2YXRlIF9wdEZpbGVzPzogUHRGaWxlcztcbiAgcHJpdmF0ZSBfY2twdEZpbGU/OiBDa3B0RmlsZTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFF1YXJ0em5ldCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFF1YXJ0em5ldD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuY29uZmlnUGF0aCA9IHZhbHVlLmNvbmZpZ1BhdGg7XG4gICAgdGhpcy5sb2FkVHlwZSA9IHZhbHVlLmxvYWRUeXBlO1xuICAgIHRoaXMucHRGaWxlcyA9IHZhbHVlLnB0RmlsZXMgPyBuZXcgUHRGaWxlcyh2YWx1ZS5wdEZpbGVzKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNrcHRGaWxlID0gdmFsdWUuY2twdEZpbGUgPyBuZXcgQ2twdEZpbGUodmFsdWUuY2twdEZpbGUpIDogdW5kZWZpbmVkO1xuICAgIFF1YXJ0em5ldC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGNvbmZpZ1BhdGgoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnUGF0aDtcbiAgfVxuICBzZXQgY29uZmlnUGF0aCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY29uZmlnUGF0aCA9IHZhbHVlO1xuICB9XG4gIGdldCBsb2FkVHlwZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sb2FkVHlwZTtcbiAgfVxuICBzZXQgbG9hZFR5cGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xvYWRUeXBlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHB0RmlsZXMoKTogUHRGaWxlcyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3B0RmlsZXM7XG4gIH1cbiAgc2V0IHB0RmlsZXModmFsdWU6IFB0RmlsZXMgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wdEZpbGVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNrcHRGaWxlKCk6IENrcHRGaWxlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2twdEZpbGU7XG4gIH1cbiAgc2V0IGNrcHRGaWxlKHZhbHVlOiBDa3B0RmlsZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NrcHRGaWxlID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ1BhdGg6IHRoaXMuY29uZmlnUGF0aCxcbiAgICAgIGxvYWRUeXBlOiB0aGlzLmxvYWRUeXBlLFxuICAgICAgcHRGaWxlczogdGhpcy5wdEZpbGVzID8gdGhpcy5wdEZpbGVzLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBja3B0RmlsZTogdGhpcy5ja3B0RmlsZSA/IHRoaXMuY2twdEZpbGUudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUXVhcnR6bmV0IHt9XG5leHBvcnQgY2xhc3MgUHRGaWxlcyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBQdEZpbGVzKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFB0RmlsZXMudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUHRGaWxlcygpO1xuICAgIFB0RmlsZXMuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFB0RmlsZXMpIHtcbiAgICBpbnN0YW5jZS5wYXRoID0gaW5zdGFuY2UucGF0aCB8fCAnJztcbiAgICBpbnN0YW5jZS5zdGVwID0gaW5zdGFuY2Uuc3RlcCB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBQdEZpbGVzLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UucGF0aCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5zdGVwID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUHRGaWxlcy5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBQdEZpbGVzLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5wYXRoKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UucGF0aCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5zdGVwKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2Uuc3RlcCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGF0aD86IHN0cmluZztcbiAgcHJpdmF0ZSBfc3RlcD86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFB0RmlsZXMgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxQdEZpbGVzPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXRoID0gdmFsdWUucGF0aDtcbiAgICB0aGlzLnN0ZXAgPSB2YWx1ZS5zdGVwO1xuICAgIFB0RmlsZXMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXRoKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdGg7XG4gIH1cbiAgc2V0IHBhdGgodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhdGggPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3RlcCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zdGVwO1xuICB9XG4gIHNldCBzdGVwKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zdGVwID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgIHN0ZXA6IHRoaXMuc3RlcFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUHRGaWxlcyB7fVxuZXhwb3J0IGNsYXNzIENrcHRGaWxlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IENrcHRGaWxlKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIENrcHRGaWxlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENrcHRGaWxlKCk7XG4gICAgQ2twdEZpbGUuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IENrcHRGaWxlKSB7XG4gICAgaW5zdGFuY2UucGF0aCA9IGluc3RhbmNlLnBhdGggfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogQ2twdEZpbGUsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5wYXRoID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ2twdEZpbGUucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogQ2twdEZpbGUsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLnBhdGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5wYXRoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXRoPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gQ2twdEZpbGUgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDa3B0RmlsZT4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGF0aCA9IHZhbHVlLnBhdGg7XG4gICAgQ2twdEZpbGUucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXRoKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdGg7XG4gIH1cbiAgc2V0IHBhdGgodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhdGggPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF0aDogdGhpcy5wYXRoXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDa3B0RmlsZSB7fVxuZXhwb3J0IGNsYXNzIFF1YXJ0em5ldFRyaXRvbiBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBRdWFydHpuZXRUcml0b24pIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUXVhcnR6bmV0VHJpdG9uLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFF1YXJ0em5ldFRyaXRvbigpO1xuICAgIFF1YXJ0em5ldFRyaXRvbi5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogUXVhcnR6bmV0VHJpdG9uKSB7XG4gICAgaW5zdGFuY2UuY29uZmlnUGF0aCA9IGluc3RhbmNlLmNvbmZpZ1BhdGggfHwgJyc7XG4gICAgaW5zdGFuY2UudHJpdG9uVXJsID0gaW5zdGFuY2UudHJpdG9uVXJsIHx8ICcnO1xuICAgIGluc3RhbmNlLnRyaXRvbk1vZGVsID0gaW5zdGFuY2UudHJpdG9uTW9kZWwgfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogUXVhcnR6bmV0VHJpdG9uLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UuY29uZmlnUGF0aCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS50cml0b25VcmwgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UudHJpdG9uTW9kZWwgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBRdWFydHpuZXRUcml0b24ucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogUXVhcnR6bmV0VHJpdG9uLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5jb25maWdQYXRoKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UuY29uZmlnUGF0aCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS50cml0b25VcmwpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS50cml0b25VcmwpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudHJpdG9uTW9kZWwpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygzLCBpbnN0YW5jZS50cml0b25Nb2RlbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29uZmlnUGF0aD86IHN0cmluZztcbiAgcHJpdmF0ZSBfdHJpdG9uVXJsPzogc3RyaW5nO1xuICBwcml2YXRlIF90cml0b25Nb2RlbD86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFF1YXJ0em5ldFRyaXRvbiB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFF1YXJ0em5ldFRyaXRvbj4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuY29uZmlnUGF0aCA9IHZhbHVlLmNvbmZpZ1BhdGg7XG4gICAgdGhpcy50cml0b25VcmwgPSB2YWx1ZS50cml0b25Vcmw7XG4gICAgdGhpcy50cml0b25Nb2RlbCA9IHZhbHVlLnRyaXRvbk1vZGVsO1xuICAgIFF1YXJ0em5ldFRyaXRvbi5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGNvbmZpZ1BhdGgoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnUGF0aDtcbiAgfVxuICBzZXQgY29uZmlnUGF0aCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY29uZmlnUGF0aCA9IHZhbHVlO1xuICB9XG4gIGdldCB0cml0b25VcmwoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJpdG9uVXJsO1xuICB9XG4gIHNldCB0cml0b25VcmwodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RyaXRvblVybCA9IHZhbHVlO1xuICB9XG4gIGdldCB0cml0b25Nb2RlbCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90cml0b25Nb2RlbDtcbiAgfVxuICBzZXQgdHJpdG9uTW9kZWwodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RyaXRvbk1vZGVsID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ1BhdGg6IHRoaXMuY29uZmlnUGF0aCxcbiAgICAgIHRyaXRvblVybDogdGhpcy50cml0b25VcmwsXG4gICAgICB0cml0b25Nb2RlbDogdGhpcy50cml0b25Nb2RlbFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUXVhcnR6bmV0VHJpdG9uIHt9XG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VNb2RlbCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBMYW5ndWFnZU1vZGVsKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExhbmd1YWdlTW9kZWwudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGFuZ3VhZ2VNb2RlbCgpO1xuICAgIExhbmd1YWdlTW9kZWwuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IExhbmd1YWdlTW9kZWwpIHtcbiAgICBpbnN0YW5jZS5wYXRoID0gaW5zdGFuY2UucGF0aCB8fCAnJztcbiAgICBpbnN0YW5jZS5iZWFtU2l6ZSA9IGluc3RhbmNlLmJlYW1TaXplIHx8ICcwJztcbiAgICBpbnN0YW5jZS5iZWFtU2VhcmNoU2NvcmVyQWxwaGEgPSBpbnN0YW5jZS5iZWFtU2VhcmNoU2NvcmVyQWxwaGEgfHwgMDtcbiAgICBpbnN0YW5jZS5iZWFtU2VhcmNoU2NvcmVyQmV0YSA9IGluc3RhbmNlLmJlYW1TZWFyY2hTY29yZXJCZXRhIHx8IDA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogTGFuZ3VhZ2VNb2RlbCwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnBhdGggPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UuYmVhbVNpemUgPSByZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5iZWFtU2VhcmNoU2NvcmVyQWxwaGEgPSByZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5iZWFtU2VhcmNoU2NvcmVyQmV0YSA9IHJlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGFuZ3VhZ2VNb2RlbC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBMYW5ndWFnZU1vZGVsLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5wYXRoKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UucGF0aCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5iZWFtU2l6ZSkge1xuICAgICAgd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMiwgaW5zdGFuY2UuYmVhbVNpemUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuYmVhbVNlYXJjaFNjb3JlckFscGhhKSB7XG4gICAgICB3cml0ZXIud3JpdGVGbG9hdCgzLCBpbnN0YW5jZS5iZWFtU2VhcmNoU2NvcmVyQWxwaGEpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuYmVhbVNlYXJjaFNjb3JlckJldGEpIHtcbiAgICAgIHdyaXRlci53cml0ZUZsb2F0KDQsIGluc3RhbmNlLmJlYW1TZWFyY2hTY29yZXJCZXRhKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXRoPzogc3RyaW5nO1xuICBwcml2YXRlIF9iZWFtU2l6ZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfYmVhbVNlYXJjaFNjb3JlckFscGhhPzogbnVtYmVyO1xuICBwcml2YXRlIF9iZWFtU2VhcmNoU2NvcmVyQmV0YT86IG51bWJlcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIExhbmd1YWdlTW9kZWwgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMYW5ndWFnZU1vZGVsPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXRoID0gdmFsdWUucGF0aDtcbiAgICB0aGlzLmJlYW1TaXplID0gdmFsdWUuYmVhbVNpemU7XG4gICAgdGhpcy5iZWFtU2VhcmNoU2NvcmVyQWxwaGEgPSB2YWx1ZS5iZWFtU2VhcmNoU2NvcmVyQWxwaGE7XG4gICAgdGhpcy5iZWFtU2VhcmNoU2NvcmVyQmV0YSA9IHZhbHVlLmJlYW1TZWFyY2hTY29yZXJCZXRhO1xuICAgIExhbmd1YWdlTW9kZWwucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXRoKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdGg7XG4gIH1cbiAgc2V0IHBhdGgodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhdGggPSB2YWx1ZTtcbiAgfVxuICBnZXQgYmVhbVNpemUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYmVhbVNpemU7XG4gIH1cbiAgc2V0IGJlYW1TaXplKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9iZWFtU2l6ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBiZWFtU2VhcmNoU2NvcmVyQWxwaGEoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYmVhbVNlYXJjaFNjb3JlckFscGhhO1xuICB9XG4gIHNldCBiZWFtU2VhcmNoU2NvcmVyQWxwaGEodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2JlYW1TZWFyY2hTY29yZXJBbHBoYSA9IHZhbHVlO1xuICB9XG4gIGdldCBiZWFtU2VhcmNoU2NvcmVyQmV0YSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9iZWFtU2VhcmNoU2NvcmVyQmV0YTtcbiAgfVxuICBzZXQgYmVhbVNlYXJjaFNjb3JlckJldGEodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2JlYW1TZWFyY2hTY29yZXJCZXRhID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgIGJlYW1TaXplOiB0aGlzLmJlYW1TaXplLFxuICAgICAgYmVhbVNlYXJjaFNjb3JlckFscGhhOiB0aGlzLmJlYW1TZWFyY2hTY29yZXJBbHBoYSxcbiAgICAgIGJlYW1TZWFyY2hTY29yZXJCZXRhOiB0aGlzLmJlYW1TZWFyY2hTY29yZXJCZXRhXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMYW5ndWFnZU1vZGVsIHt9XG5leHBvcnQgY2xhc3MgU3RyZWFtaW5nU2VydmVyIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFN0cmVhbWluZ1NlcnZlcikge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBTdHJlYW1pbmdTZXJ2ZXIudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU3RyZWFtaW5nU2VydmVyKCk7XG4gICAgU3RyZWFtaW5nU2VydmVyLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBTdHJlYW1pbmdTZXJ2ZXIpIHtcbiAgICBpbnN0YW5jZS5ob3N0ID0gaW5zdGFuY2UuaG9zdCB8fCAnJztcbiAgICBpbnN0YW5jZS5wb3J0ID0gaW5zdGFuY2UucG9ydCB8fCAnMCc7XG4gICAgaW5zdGFuY2Uub3V0cHV0U3R5bGUgPSBpbnN0YW5jZS5vdXRwdXRTdHlsZSB8fCAnJztcbiAgICBpbnN0YW5jZS5zdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbiA9XG4gICAgICBpbnN0YW5jZS5zdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbiB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogU3RyZWFtaW5nU2VydmVyLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UuaG9zdCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5wb3J0ID0gcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2Uub3V0cHV0U3R5bGUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgaW5zdGFuY2Uuc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24gPSBuZXcgU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24oKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS5zdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbixcbiAgICAgICAgICAgIFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTdHJlYW1pbmdTZXJ2ZXIucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogU3RyZWFtaW5nU2VydmVyLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5ob3N0KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UuaG9zdCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5wb3J0KSB7XG4gICAgICB3cml0ZXIud3JpdGVJbnQ2NFN0cmluZygyLCBpbnN0YW5jZS5wb3J0KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm91dHB1dFN0eWxlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMywgaW5zdGFuY2Uub3V0cHV0U3R5bGUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24pIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIGluc3RhbmNlLnN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uIGFzIGFueSxcbiAgICAgICAgU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24udG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaG9zdD86IHN0cmluZztcbiAgcHJpdmF0ZSBfcG9ydD86IHN0cmluZztcbiAgcHJpdmF0ZSBfb3V0cHV0U3R5bGU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3N0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uPzogU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb247XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBTdHJlYW1pbmdTZXJ2ZXIgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTdHJlYW1pbmdTZXJ2ZXI+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmhvc3QgPSB2YWx1ZS5ob3N0O1xuICAgIHRoaXMucG9ydCA9IHZhbHVlLnBvcnQ7XG4gICAgdGhpcy5vdXRwdXRTdHlsZSA9IHZhbHVlLm91dHB1dFN0eWxlO1xuICAgIHRoaXMuc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24gPSB2YWx1ZS5zdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvblxuICAgICAgPyBuZXcgU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24odmFsdWUuc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBTdHJlYW1pbmdTZXJ2ZXIucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBob3N0KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2hvc3Q7XG4gIH1cbiAgc2V0IGhvc3QodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2hvc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcG9ydCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wb3J0O1xuICB9XG4gIHNldCBwb3J0KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wb3J0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG91dHB1dFN0eWxlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX291dHB1dFN0eWxlO1xuICB9XG4gIHNldCBvdXRwdXRTdHlsZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fb3V0cHV0U3R5bGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24oKTogU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbjtcbiAgfVxuICBzZXQgc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24oXG4gICAgdmFsdWU6IFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHRoaXMuX3N0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhvc3Q6IHRoaXMuaG9zdCxcbiAgICAgIHBvcnQ6IHRoaXMucG9ydCxcbiAgICAgIG91dHB1dFN0eWxlOiB0aGlzLm91dHB1dFN0eWxlLFxuICAgICAgc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb246IHRoaXMuc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb25cbiAgICAgICAgPyB0aGlzLnN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFN0cmVhbWluZ1NlcnZlciB7fVxuZXhwb3J0IGNsYXNzIFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uKCk7XG4gICAgU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24uZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uKSB7XG4gICAgaW5zdGFuY2UudHJhbnNjcmliZU5vdEZpbmFsID0gaW5zdGFuY2UudHJhbnNjcmliZU5vdEZpbmFsIHx8IGZhbHNlO1xuICAgIGluc3RhbmNlLmN0Y0RlY29kaW5nTWV0aG9kID0gaW5zdGFuY2UuY3RjRGVjb2RpbmdNZXRob2QgfHwgJyc7XG4gICAgaW5zdGFuY2Uuc2FtcGxpbmdSYXRlID0gaW5zdGFuY2Uuc2FtcGxpbmdSYXRlIHx8ICcwJztcbiAgICBpbnN0YW5jZS5taW5BdWRpb0NodW5rU2l6ZSA9IGluc3RhbmNlLm1pbkF1ZGlvQ2h1bmtTaXplIHx8ICcwJztcbiAgICBpbnN0YW5jZS5zdGFydE9mVXR0ZXJhbmNlVGhyZXNob2xkID1cbiAgICAgIGluc3RhbmNlLnN0YXJ0T2ZVdHRlcmFuY2VUaHJlc2hvbGQgfHwgMDtcbiAgICBpbnN0YW5jZS5lbmRPZlV0dGVyYW5jZVRocmVzaG9sZCA9IGluc3RhbmNlLmVuZE9mVXR0ZXJhbmNlVGhyZXNob2xkIHx8IDA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24sXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS50cmFuc2NyaWJlTm90RmluYWwgPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLmN0Y0RlY29kaW5nTWV0aG9kID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLnNhbXBsaW5nUmF0ZSA9IHJlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGluc3RhbmNlLm1pbkF1ZGlvQ2h1bmtTaXplID0gcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgaW5zdGFuY2Uuc3RhcnRPZlV0dGVyYW5jZVRocmVzaG9sZCA9IHJlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIGluc3RhbmNlLmVuZE9mVXR0ZXJhbmNlVGhyZXNob2xkID0gcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbi5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgIGluc3RhbmNlOiBTdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbixcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UudHJhbnNjcmliZU5vdEZpbmFsKSB7XG4gICAgICB3cml0ZXIud3JpdGVCb29sKDEsIGluc3RhbmNlLnRyYW5zY3JpYmVOb3RGaW5hbCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5jdGNEZWNvZGluZ01ldGhvZCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLmN0Y0RlY29kaW5nTWV0aG9kKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnNhbXBsaW5nUmF0ZSkge1xuICAgICAgd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMywgaW5zdGFuY2Uuc2FtcGxpbmdSYXRlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm1pbkF1ZGlvQ2h1bmtTaXplKSB7XG4gICAgICB3cml0ZXIud3JpdGVJbnQ2NFN0cmluZyg0LCBpbnN0YW5jZS5taW5BdWRpb0NodW5rU2l6ZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5zdGFydE9mVXR0ZXJhbmNlVGhyZXNob2xkKSB7XG4gICAgICB3cml0ZXIud3JpdGVGbG9hdCg1LCBpbnN0YW5jZS5zdGFydE9mVXR0ZXJhbmNlVGhyZXNob2xkKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmVuZE9mVXR0ZXJhbmNlVGhyZXNob2xkKSB7XG4gICAgICB3cml0ZXIud3JpdGVGbG9hdCg2LCBpbnN0YW5jZS5lbmRPZlV0dGVyYW5jZVRocmVzaG9sZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdHJhbnNjcmliZU5vdEZpbmFsPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfY3RjRGVjb2RpbmdNZXRob2Q/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3NhbXBsaW5nUmF0ZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfbWluQXVkaW9DaHVua1NpemU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3N0YXJ0T2ZVdHRlcmFuY2VUaHJlc2hvbGQ/OiBudW1iZXI7XG4gIHByaXZhdGUgX2VuZE9mVXR0ZXJhbmNlVGhyZXNob2xkPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24gdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbj4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMudHJhbnNjcmliZU5vdEZpbmFsID0gdmFsdWUudHJhbnNjcmliZU5vdEZpbmFsO1xuICAgIHRoaXMuY3RjRGVjb2RpbmdNZXRob2QgPSB2YWx1ZS5jdGNEZWNvZGluZ01ldGhvZDtcbiAgICB0aGlzLnNhbXBsaW5nUmF0ZSA9IHZhbHVlLnNhbXBsaW5nUmF0ZTtcbiAgICB0aGlzLm1pbkF1ZGlvQ2h1bmtTaXplID0gdmFsdWUubWluQXVkaW9DaHVua1NpemU7XG4gICAgdGhpcy5zdGFydE9mVXR0ZXJhbmNlVGhyZXNob2xkID0gdmFsdWUuc3RhcnRPZlV0dGVyYW5jZVRocmVzaG9sZDtcbiAgICB0aGlzLmVuZE9mVXR0ZXJhbmNlVGhyZXNob2xkID0gdmFsdWUuZW5kT2ZVdHRlcmFuY2VUaHJlc2hvbGQ7XG4gICAgU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB0cmFuc2NyaWJlTm90RmluYWwoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYW5zY3JpYmVOb3RGaW5hbDtcbiAgfVxuICBzZXQgdHJhbnNjcmliZU5vdEZpbmFsKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdHJhbnNjcmliZU5vdEZpbmFsID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGN0Y0RlY29kaW5nTWV0aG9kKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2N0Y0RlY29kaW5nTWV0aG9kO1xuICB9XG4gIHNldCBjdGNEZWNvZGluZ01ldGhvZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY3RjRGVjb2RpbmdNZXRob2QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2FtcGxpbmdSYXRlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NhbXBsaW5nUmF0ZTtcbiAgfVxuICBzZXQgc2FtcGxpbmdSYXRlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zYW1wbGluZ1JhdGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWluQXVkaW9DaHVua1NpemUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWluQXVkaW9DaHVua1NpemU7XG4gIH1cbiAgc2V0IG1pbkF1ZGlvQ2h1bmtTaXplKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9taW5BdWRpb0NodW5rU2l6ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzdGFydE9mVXR0ZXJhbmNlVGhyZXNob2xkKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0T2ZVdHRlcmFuY2VUaHJlc2hvbGQ7XG4gIH1cbiAgc2V0IHN0YXJ0T2ZVdHRlcmFuY2VUaHJlc2hvbGQodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3N0YXJ0T2ZVdHRlcmFuY2VUaHJlc2hvbGQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW5kT2ZVdHRlcmFuY2VUaHJlc2hvbGQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW5kT2ZVdHRlcmFuY2VUaHJlc2hvbGQ7XG4gIH1cbiAgc2V0IGVuZE9mVXR0ZXJhbmNlVGhyZXNob2xkKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbmRPZlV0dGVyYW5jZVRocmVzaG9sZCA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2NyaWJlTm90RmluYWw6IHRoaXMudHJhbnNjcmliZU5vdEZpbmFsLFxuICAgICAgY3RjRGVjb2RpbmdNZXRob2Q6IHRoaXMuY3RjRGVjb2RpbmdNZXRob2QsXG4gICAgICBzYW1wbGluZ1JhdGU6IHRoaXMuc2FtcGxpbmdSYXRlLFxuICAgICAgbWluQXVkaW9DaHVua1NpemU6IHRoaXMubWluQXVkaW9DaHVua1NpemUsXG4gICAgICBzdGFydE9mVXR0ZXJhbmNlVGhyZXNob2xkOiB0aGlzLnN0YXJ0T2ZVdHRlcmFuY2VUaHJlc2hvbGQsXG4gICAgICBlbmRPZlV0dGVyYW5jZVRocmVzaG9sZDogdGhpcy5lbmRPZlV0dGVyYW5jZVRocmVzaG9sZFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24ge31cbmV4cG9ydCBjbGFzcyBWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFZvaWNlQWN0aXZpdHlEZXRlY3Rpb24pIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVm9pY2VBY3Rpdml0eURldGVjdGlvbi50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uKCk7XG4gICAgVm9pY2VBY3Rpdml0eURldGVjdGlvbi5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogVm9pY2VBY3Rpdml0eURldGVjdGlvbikge1xuICAgIGluc3RhbmNlLmFjdGl2ZSA9IGluc3RhbmNlLmFjdGl2ZSB8fCAnJztcbiAgICBpbnN0YW5jZS5zYW1wbGluZ1JhdGUgPSBpbnN0YW5jZS5zYW1wbGluZ1JhdGUgfHwgJzAnO1xuICAgIGluc3RhbmNlLnB5YW5ub3RlID0gaW5zdGFuY2UucHlhbm5vdGUgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLm1hdGNoYm94ID0gaW5zdGFuY2UubWF0Y2hib3ggfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IFZvaWNlQWN0aXZpdHlEZXRlY3Rpb24sXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5hY3RpdmUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2Uuc2FtcGxpbmdSYXRlID0gcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UucHlhbm5vdGUgPSBuZXcgUHlhbm5vdGUoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoaW5zdGFuY2UucHlhbm5vdGUsIFB5YW5ub3RlLmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgaW5zdGFuY2UubWF0Y2hib3ggPSBuZXcgTWF0Y2hib3goKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoaW5zdGFuY2UubWF0Y2hib3gsIE1hdGNoYm94LmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IFZvaWNlQWN0aXZpdHlEZXRlY3Rpb24sXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLmFjdGl2ZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLmFjdGl2ZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5zYW1wbGluZ1JhdGUpIHtcbiAgICAgIHdyaXRlci53cml0ZUludDY0U3RyaW5nKDIsIGluc3RhbmNlLnNhbXBsaW5nUmF0ZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5weWFubm90ZSkge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZSgzLCBpbnN0YW5jZS5weWFubm90ZSBhcyBhbnksIFB5YW5ub3RlLnRvQmluYXJ5V3JpdGVyKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm1hdGNoYm94KSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKDQsIGluc3RhbmNlLm1hdGNoYm94IGFzIGFueSwgTWF0Y2hib3gudG9CaW5hcnlXcml0ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FjdGl2ZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfc2FtcGxpbmdSYXRlPzogc3RyaW5nO1xuICBwcml2YXRlIF9weWFubm90ZT86IFB5YW5ub3RlO1xuICBwcml2YXRlIF9tYXRjaGJveD86IE1hdGNoYm94O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gVm9pY2VBY3Rpdml0eURldGVjdGlvbiB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFZvaWNlQWN0aXZpdHlEZXRlY3Rpb24+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmFjdGl2ZSA9IHZhbHVlLmFjdGl2ZTtcbiAgICB0aGlzLnNhbXBsaW5nUmF0ZSA9IHZhbHVlLnNhbXBsaW5nUmF0ZTtcbiAgICB0aGlzLnB5YW5ub3RlID0gdmFsdWUucHlhbm5vdGUgPyBuZXcgUHlhbm5vdGUodmFsdWUucHlhbm5vdGUpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubWF0Y2hib3ggPSB2YWx1ZS5tYXRjaGJveCA/IG5ldyBNYXRjaGJveCh2YWx1ZS5tYXRjaGJveCkgOiB1bmRlZmluZWQ7XG4gICAgVm9pY2VBY3Rpdml0eURldGVjdGlvbi5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGFjdGl2ZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XG4gIH1cbiAgc2V0IGFjdGl2ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNhbXBsaW5nUmF0ZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zYW1wbGluZ1JhdGU7XG4gIH1cbiAgc2V0IHNhbXBsaW5nUmF0ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2FtcGxpbmdSYXRlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHB5YW5ub3RlKCk6IFB5YW5ub3RlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcHlhbm5vdGU7XG4gIH1cbiAgc2V0IHB5YW5ub3RlKHZhbHVlOiBQeWFubm90ZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3B5YW5ub3RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1hdGNoYm94KCk6IE1hdGNoYm94IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWF0Y2hib3g7XG4gIH1cbiAgc2V0IG1hdGNoYm94KHZhbHVlOiBNYXRjaGJveCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21hdGNoYm94ID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZTogdGhpcy5hY3RpdmUsXG4gICAgICBzYW1wbGluZ1JhdGU6IHRoaXMuc2FtcGxpbmdSYXRlLFxuICAgICAgcHlhbm5vdGU6IHRoaXMucHlhbm5vdGUgPyB0aGlzLnB5YW5ub3RlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBtYXRjaGJveDogdGhpcy5tYXRjaGJveCA/IHRoaXMubWF0Y2hib3gudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVm9pY2VBY3Rpdml0eURldGVjdGlvbiB7fVxuZXhwb3J0IGNsYXNzIFB5YW5ub3RlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFB5YW5ub3RlKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFB5YW5ub3RlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFB5YW5ub3RlKCk7XG4gICAgUHlhbm5vdGUuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFB5YW5ub3RlKSB7XG4gICAgaW5zdGFuY2UubW9kZWxQYXRoID0gaW5zdGFuY2UubW9kZWxQYXRoIHx8ICcnO1xuICAgIGluc3RhbmNlLm1pbkF1ZGlvU2l6ZSA9IGluc3RhbmNlLm1pbkF1ZGlvU2l6ZSB8fCAnMCc7XG4gICAgaW5zdGFuY2Uub2Zmc2V0ID0gaW5zdGFuY2Uub2Zmc2V0IHx8IDA7XG4gICAgaW5zdGFuY2Uub25zZXQgPSBpbnN0YW5jZS5vbnNldCB8fCAwO1xuICAgIGluc3RhbmNlLmxvZ1NjYWxlID0gaW5zdGFuY2UubG9nU2NhbGUgfHwgZmFsc2U7XG4gICAgaW5zdGFuY2UubWluRHVyYXRpb25PZmYgPSBpbnN0YW5jZS5taW5EdXJhdGlvbk9mZiB8fCAwO1xuICAgIGluc3RhbmNlLm1pbkR1cmF0aW9uT24gPSBpbnN0YW5jZS5taW5EdXJhdGlvbk9uIHx8IDA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogUHlhbm5vdGUsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5tb2RlbFBhdGggPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UubWluQXVkaW9TaXplID0gcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2Uub2Zmc2V0ID0gcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgaW5zdGFuY2Uub25zZXQgPSByZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBpbnN0YW5jZS5sb2dTY2FsZSA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgaW5zdGFuY2UubWluRHVyYXRpb25PZmYgPSByZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBpbnN0YW5jZS5taW5EdXJhdGlvbk9uID0gcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBQeWFubm90ZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBQeWFubm90ZSwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UubW9kZWxQYXRoKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UubW9kZWxQYXRoKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm1pbkF1ZGlvU2l6ZSkge1xuICAgICAgd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMiwgaW5zdGFuY2UubWluQXVkaW9TaXplKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm9mZnNldCkge1xuICAgICAgd3JpdGVyLndyaXRlRmxvYXQoMywgaW5zdGFuY2Uub2Zmc2V0KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm9uc2V0KSB7XG4gICAgICB3cml0ZXIud3JpdGVGbG9hdCg0LCBpbnN0YW5jZS5vbnNldCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5sb2dTY2FsZSkge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCg1LCBpbnN0YW5jZS5sb2dTY2FsZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5taW5EdXJhdGlvbk9mZikge1xuICAgICAgd3JpdGVyLndyaXRlRmxvYXQoNiwgaW5zdGFuY2UubWluRHVyYXRpb25PZmYpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubWluRHVyYXRpb25Pbikge1xuICAgICAgd3JpdGVyLndyaXRlRmxvYXQoNywgaW5zdGFuY2UubWluRHVyYXRpb25Pbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbW9kZWxQYXRoPzogc3RyaW5nO1xuICBwcml2YXRlIF9taW5BdWRpb1NpemU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX29mZnNldD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfb25zZXQ/OiBudW1iZXI7XG4gIHByaXZhdGUgX2xvZ1NjYWxlPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfbWluRHVyYXRpb25PZmY/OiBudW1iZXI7XG4gIHByaXZhdGUgX21pbkR1cmF0aW9uT24/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBQeWFubm90ZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFB5YW5ub3RlPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5tb2RlbFBhdGggPSB2YWx1ZS5tb2RlbFBhdGg7XG4gICAgdGhpcy5taW5BdWRpb1NpemUgPSB2YWx1ZS5taW5BdWRpb1NpemU7XG4gICAgdGhpcy5vZmZzZXQgPSB2YWx1ZS5vZmZzZXQ7XG4gICAgdGhpcy5vbnNldCA9IHZhbHVlLm9uc2V0O1xuICAgIHRoaXMubG9nU2NhbGUgPSB2YWx1ZS5sb2dTY2FsZTtcbiAgICB0aGlzLm1pbkR1cmF0aW9uT2ZmID0gdmFsdWUubWluRHVyYXRpb25PZmY7XG4gICAgdGhpcy5taW5EdXJhdGlvbk9uID0gdmFsdWUubWluRHVyYXRpb25PbjtcbiAgICBQeWFubm90ZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IG1vZGVsUGF0aCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbFBhdGg7XG4gIH1cbiAgc2V0IG1vZGVsUGF0aCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbW9kZWxQYXRoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1pbkF1ZGlvU2l6ZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9taW5BdWRpb1NpemU7XG4gIH1cbiAgc2V0IG1pbkF1ZGlvU2l6ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWluQXVkaW9TaXplID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9mZnNldCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vZmZzZXQ7XG4gIH1cbiAgc2V0IG9mZnNldCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fb2Zmc2V0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9uc2V0KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29uc2V0O1xuICB9XG4gIHNldCBvbnNldCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fb25zZXQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbG9nU2NhbGUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ1NjYWxlO1xuICB9XG4gIHNldCBsb2dTY2FsZSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xvZ1NjYWxlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1pbkR1cmF0aW9uT2ZmKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21pbkR1cmF0aW9uT2ZmO1xuICB9XG4gIHNldCBtaW5EdXJhdGlvbk9mZih2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWluRHVyYXRpb25PZmYgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWluRHVyYXRpb25PbigpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9taW5EdXJhdGlvbk9uO1xuICB9XG4gIHNldCBtaW5EdXJhdGlvbk9uKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9taW5EdXJhdGlvbk9uID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZGVsUGF0aDogdGhpcy5tb2RlbFBhdGgsXG4gICAgICBtaW5BdWRpb1NpemU6IHRoaXMubWluQXVkaW9TaXplLFxuICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgIG9uc2V0OiB0aGlzLm9uc2V0LFxuICAgICAgbG9nU2NhbGU6IHRoaXMubG9nU2NhbGUsXG4gICAgICBtaW5EdXJhdGlvbk9mZjogdGhpcy5taW5EdXJhdGlvbk9mZixcbiAgICAgIG1pbkR1cmF0aW9uT246IHRoaXMubWluRHVyYXRpb25PblxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUHlhbm5vdGUge31cbmV4cG9ydCBjbGFzcyBNYXRjaGJveCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBNYXRjaGJveCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBNYXRjaGJveC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBNYXRjaGJveCgpO1xuICAgIE1hdGNoYm94LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBNYXRjaGJveCkge1xuICAgIGluc3RhbmNlLm1vZGVsQ29uZmlnID0gaW5zdGFuY2UubW9kZWxDb25maWcgfHwgJyc7XG4gICAgaW5zdGFuY2UuZW5jb2RlclBhdGggPSBpbnN0YW5jZS5lbmNvZGVyUGF0aCB8fCAnJztcbiAgICBpbnN0YW5jZS5kZWNvZGVyUGF0aCA9IGluc3RhbmNlLmRlY29kZXJQYXRoIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IE1hdGNoYm94LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UubW9kZWxDb25maWcgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UuZW5jb2RlclBhdGggPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UuZGVjb2RlclBhdGggPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBNYXRjaGJveC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBNYXRjaGJveCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UubW9kZWxDb25maWcpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5tb2RlbENvbmZpZyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5lbmNvZGVyUGF0aCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLmVuY29kZXJQYXRoKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmRlY29kZXJQYXRoKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMywgaW5zdGFuY2UuZGVjb2RlclBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21vZGVsQ29uZmlnPzogc3RyaW5nO1xuICBwcml2YXRlIF9lbmNvZGVyUGF0aD86IHN0cmluZztcbiAgcHJpdmF0ZSBfZGVjb2RlclBhdGg/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBNYXRjaGJveCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPE1hdGNoYm94Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5tb2RlbENvbmZpZyA9IHZhbHVlLm1vZGVsQ29uZmlnO1xuICAgIHRoaXMuZW5jb2RlclBhdGggPSB2YWx1ZS5lbmNvZGVyUGF0aDtcbiAgICB0aGlzLmRlY29kZXJQYXRoID0gdmFsdWUuZGVjb2RlclBhdGg7XG4gICAgTWF0Y2hib3gucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBtb2RlbENvbmZpZygpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbENvbmZpZztcbiAgfVxuICBzZXQgbW9kZWxDb25maWcodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21vZGVsQ29uZmlnID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVuY29kZXJQYXRoKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY29kZXJQYXRoO1xuICB9XG4gIHNldCBlbmNvZGVyUGF0aCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZW5jb2RlclBhdGggPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGVjb2RlclBhdGgoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGVjb2RlclBhdGg7XG4gIH1cbiAgc2V0IGRlY29kZXJQYXRoKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kZWNvZGVyUGF0aCA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBtb2RlbENvbmZpZzogdGhpcy5tb2RlbENvbmZpZyxcbiAgICAgIGVuY29kZXJQYXRoOiB0aGlzLmVuY29kZXJQYXRoLFxuICAgICAgZGVjb2RlclBhdGg6IHRoaXMuZGVjb2RlclBhdGhcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIE1hdGNoYm94IHt9XG5leHBvcnQgY2xhc3MgUG9zdFByb2Nlc3NpbmcgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogUG9zdFByb2Nlc3NpbmcpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUG9zdFByb2Nlc3NpbmcudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUG9zdFByb2Nlc3NpbmcoKTtcbiAgICBQb3N0UHJvY2Vzc2luZy5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogUG9zdFByb2Nlc3NpbmcpIHtcbiAgICBpbnN0YW5jZS5waXBlbGluZSA9IGluc3RhbmNlLnBpcGVsaW5lIHx8IFtdO1xuICAgIGluc3RhbmNlLnBvc3RQcm9jZXNzb3JzID0gaW5zdGFuY2UucG9zdFByb2Nlc3NvcnMgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IFBvc3RQcm9jZXNzaW5nLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgKGluc3RhbmNlLnBpcGVsaW5lID0gaW5zdGFuY2UucGlwZWxpbmUgfHwgW10pLnB1c2goXG4gICAgICAgICAgICByZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnBvc3RQcm9jZXNzb3JzID0gbmV3IFBvc3RQcm9jZXNzb3JzKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2UucG9zdFByb2Nlc3NvcnMsXG4gICAgICAgICAgICBQb3N0UHJvY2Vzc29ycy5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUG9zdFByb2Nlc3NpbmcucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogUG9zdFByb2Nlc3NpbmcsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLnBpcGVsaW5lICYmIGluc3RhbmNlLnBpcGVsaW5lLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMSwgaW5zdGFuY2UucGlwZWxpbmUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucG9zdFByb2Nlc3NvcnMpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIGluc3RhbmNlLnBvc3RQcm9jZXNzb3JzIGFzIGFueSxcbiAgICAgICAgUG9zdFByb2Nlc3NvcnMudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGlwZWxpbmU/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfcG9zdFByb2Nlc3NvcnM/OiBQb3N0UHJvY2Vzc29ycztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFBvc3RQcm9jZXNzaW5nIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UG9zdFByb2Nlc3Npbmc+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBpcGVsaW5lID0gKHZhbHVlLnBpcGVsaW5lIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMucG9zdFByb2Nlc3NvcnMgPSB2YWx1ZS5wb3N0UHJvY2Vzc29yc1xuICAgICAgPyBuZXcgUG9zdFByb2Nlc3NvcnModmFsdWUucG9zdFByb2Nlc3NvcnMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBQb3N0UHJvY2Vzc2luZy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBpcGVsaW5lKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGlwZWxpbmU7XG4gIH1cbiAgc2V0IHBpcGVsaW5lKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BpcGVsaW5lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBvc3RQcm9jZXNzb3JzKCk6IFBvc3RQcm9jZXNzb3JzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zdFByb2Nlc3NvcnM7XG4gIH1cbiAgc2V0IHBvc3RQcm9jZXNzb3JzKHZhbHVlOiBQb3N0UHJvY2Vzc29ycyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Bvc3RQcm9jZXNzb3JzID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBpcGVsaW5lOiAodGhpcy5waXBlbGluZSB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHBvc3RQcm9jZXNzb3JzOiB0aGlzLnBvc3RQcm9jZXNzb3JzXG4gICAgICAgID8gdGhpcy5wb3N0UHJvY2Vzc29ycy50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBQb3N0UHJvY2Vzc2luZyB7fVxuZXhwb3J0IGNsYXNzIFBvc3RQcm9jZXNzb3JzIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFBvc3RQcm9jZXNzb3JzKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFBvc3RQcm9jZXNzb3JzLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFBvc3RQcm9jZXNzb3JzKCk7XG4gICAgUG9zdFByb2Nlc3NvcnMuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFBvc3RQcm9jZXNzb3JzKSB7XG4gICAgaW5zdGFuY2Uuc3ltU3BlbGwgPSBpbnN0YW5jZS5zeW1TcGVsbCB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2Uubm9ybWFsaXphdGlvbiA9IGluc3RhbmNlLm5vcm1hbGl6YXRpb24gfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IFBvc3RQcm9jZXNzb3JzLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2Uuc3ltU3BlbGwgPSBuZXcgU3ltU3BlbGwoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoaW5zdGFuY2Uuc3ltU3BlbGwsIFN5bVNwZWxsLmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2Uubm9ybWFsaXphdGlvbiA9IG5ldyBOb3JtYWxpemF0aW9uKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2Uubm9ybWFsaXphdGlvbixcbiAgICAgICAgICAgIE5vcm1hbGl6YXRpb24uZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFBvc3RQcm9jZXNzb3JzLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IFBvc3RQcm9jZXNzb3JzLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5zeW1TcGVsbCkge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZSgxLCBpbnN0YW5jZS5zeW1TcGVsbCBhcyBhbnksIFN5bVNwZWxsLnRvQmluYXJ5V3JpdGVyKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm5vcm1hbGl6YXRpb24pIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIGluc3RhbmNlLm5vcm1hbGl6YXRpb24gYXMgYW55LFxuICAgICAgICBOb3JtYWxpemF0aW9uLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3N5bVNwZWxsPzogU3ltU3BlbGw7XG4gIHByaXZhdGUgX25vcm1hbGl6YXRpb24/OiBOb3JtYWxpemF0aW9uO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gUG9zdFByb2Nlc3NvcnMgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxQb3N0UHJvY2Vzc29ycz4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc3ltU3BlbGwgPSB2YWx1ZS5zeW1TcGVsbCA/IG5ldyBTeW1TcGVsbCh2YWx1ZS5zeW1TcGVsbCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5ub3JtYWxpemF0aW9uID0gdmFsdWUubm9ybWFsaXphdGlvblxuICAgICAgPyBuZXcgTm9ybWFsaXphdGlvbih2YWx1ZS5ub3JtYWxpemF0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgUG9zdFByb2Nlc3NvcnMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzeW1TcGVsbCgpOiBTeW1TcGVsbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3N5bVNwZWxsO1xuICB9XG4gIHNldCBzeW1TcGVsbCh2YWx1ZTogU3ltU3BlbGwgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zeW1TcGVsbCA9IHZhbHVlO1xuICB9XG4gIGdldCBub3JtYWxpemF0aW9uKCk6IE5vcm1hbGl6YXRpb24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9ub3JtYWxpemF0aW9uO1xuICB9XG4gIHNldCBub3JtYWxpemF0aW9uKHZhbHVlOiBOb3JtYWxpemF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbm9ybWFsaXphdGlvbiA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBzeW1TcGVsbDogdGhpcy5zeW1TcGVsbCA/IHRoaXMuc3ltU3BlbGwudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIG5vcm1hbGl6YXRpb246IHRoaXMubm9ybWFsaXphdGlvblxuICAgICAgICA/IHRoaXMubm9ybWFsaXphdGlvbi50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBQb3N0UHJvY2Vzc29ycyB7fVxuZXhwb3J0IGNsYXNzIFN5bVNwZWxsIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFN5bVNwZWxsKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFN5bVNwZWxsLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFN5bVNwZWxsKCk7XG4gICAgU3ltU3BlbGwuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFN5bVNwZWxsKSB7XG4gICAgaW5zdGFuY2UuZGljdFBhdGggPSBpbnN0YW5jZS5kaWN0UGF0aCB8fCAnJztcbiAgICBpbnN0YW5jZS5tYXhEaWN0aW9uYXJ5RWRpdERpc3RhbmNlID1cbiAgICAgIGluc3RhbmNlLm1heERpY3Rpb25hcnlFZGl0RGlzdGFuY2UgfHwgJzAnO1xuICAgIGluc3RhbmNlLnByZWZpeExlbmd0aCA9IGluc3RhbmNlLnByZWZpeExlbmd0aCB8fCAnMCc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogU3ltU3BlbGwsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5kaWN0UGF0aCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5tYXhEaWN0aW9uYXJ5RWRpdERpc3RhbmNlID0gcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UucHJlZml4TGVuZ3RoID0gcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTeW1TcGVsbC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBTeW1TcGVsbCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UuZGljdFBhdGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5kaWN0UGF0aCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5tYXhEaWN0aW9uYXJ5RWRpdERpc3RhbmNlKSB7XG4gICAgICB3cml0ZXIud3JpdGVJbnQ2NFN0cmluZygyLCBpbnN0YW5jZS5tYXhEaWN0aW9uYXJ5RWRpdERpc3RhbmNlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnByZWZpeExlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMywgaW5zdGFuY2UucHJlZml4TGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kaWN0UGF0aD86IHN0cmluZztcbiAgcHJpdmF0ZSBfbWF4RGljdGlvbmFyeUVkaXREaXN0YW5jZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfcHJlZml4TGVuZ3RoPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gU3ltU3BlbGwgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTeW1TcGVsbD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuZGljdFBhdGggPSB2YWx1ZS5kaWN0UGF0aDtcbiAgICB0aGlzLm1heERpY3Rpb25hcnlFZGl0RGlzdGFuY2UgPSB2YWx1ZS5tYXhEaWN0aW9uYXJ5RWRpdERpc3RhbmNlO1xuICAgIHRoaXMucHJlZml4TGVuZ3RoID0gdmFsdWUucHJlZml4TGVuZ3RoO1xuICAgIFN5bVNwZWxsLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgZGljdFBhdGgoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGljdFBhdGg7XG4gIH1cbiAgc2V0IGRpY3RQYXRoKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kaWN0UGF0aCA9IHZhbHVlO1xuICB9XG4gIGdldCBtYXhEaWN0aW9uYXJ5RWRpdERpc3RhbmNlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21heERpY3Rpb25hcnlFZGl0RGlzdGFuY2U7XG4gIH1cbiAgc2V0IG1heERpY3Rpb25hcnlFZGl0RGlzdGFuY2UodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21heERpY3Rpb25hcnlFZGl0RGlzdGFuY2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcHJlZml4TGVuZ3RoKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWZpeExlbmd0aDtcbiAgfVxuICBzZXQgcHJlZml4TGVuZ3RoKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wcmVmaXhMZW5ndGggPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGljdFBhdGg6IHRoaXMuZGljdFBhdGgsXG4gICAgICBtYXhEaWN0aW9uYXJ5RWRpdERpc3RhbmNlOiB0aGlzLm1heERpY3Rpb25hcnlFZGl0RGlzdGFuY2UsXG4gICAgICBwcmVmaXhMZW5ndGg6IHRoaXMucHJlZml4TGVuZ3RoXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTeW1TcGVsbCB7fVxuZXhwb3J0IGNsYXNzIE5vcm1hbGl6YXRpb24gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogTm9ybWFsaXphdGlvbikge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBOb3JtYWxpemF0aW9uLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE5vcm1hbGl6YXRpb24oKTtcbiAgICBOb3JtYWxpemF0aW9uLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBOb3JtYWxpemF0aW9uKSB7XG4gICAgaW5zdGFuY2UubGFuZ3VhZ2UgPSBpbnN0YW5jZS5sYW5ndWFnZSB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBOb3JtYWxpemF0aW9uLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UubGFuZ3VhZ2UgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBOb3JtYWxpemF0aW9uLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IE5vcm1hbGl6YXRpb24sIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLmxhbmd1YWdlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UubGFuZ3VhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xhbmd1YWdlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gTm9ybWFsaXphdGlvbiB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPE5vcm1hbGl6YXRpb24+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhbmd1YWdlID0gdmFsdWUubGFuZ3VhZ2U7XG4gICAgTm9ybWFsaXphdGlvbi5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlO1xuICB9XG4gIHNldCBsYW5ndWFnZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2VcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIE5vcm1hbGl6YXRpb24ge31cbmV4cG9ydCBjbGFzcyBMb2dnaW5nIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IExvZ2dpbmcpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTG9nZ2luZy50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMb2dnaW5nKCk7XG4gICAgTG9nZ2luZy5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogTG9nZ2luZykge1xuICAgIGluc3RhbmNlLnR5cGUgPSBpbnN0YW5jZS50eXBlIHx8ICcnO1xuICAgIGluc3RhbmNlLnBhdGggPSBpbnN0YW5jZS5wYXRoIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IExvZ2dpbmcsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS50eXBlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnBhdGggPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMb2dnaW5nLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IExvZ2dpbmcsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLnR5cGUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS50eXBlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnBhdGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5wYXRoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90eXBlPzogc3RyaW5nO1xuICBwcml2YXRlIF9wYXRoPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gTG9nZ2luZyB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExvZ2dpbmc+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnR5cGUgPSB2YWx1ZS50eXBlO1xuICAgIHRoaXMucGF0aCA9IHZhbHVlLnBhdGg7XG4gICAgTG9nZ2luZy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIGdldCBwYXRoKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdGg7XG4gIH1cbiAgc2V0IHBhdGgodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhdGggPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgcGF0aDogdGhpcy5wYXRoXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMb2dnaW5nIHt9XG4iXX0=