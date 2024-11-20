import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Optional, Inject } from '@angular/core';
import { uint8ArrayToBase64, GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import * as i1 from '@ngx-grpc/core';
import { throwStatusErrors, takeMessages, GRPC_CLIENT_FACTORY } from '@ngx-grpc/core';
import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
/**
 * Specific GrpcClientSettings for Speech2Text.
 * Use it only if your default settings are not set or the service requires other settings.
 */
const GRPC_SPEECH2_TEXT_CLIENT_SETTINGS = new InjectionToken('GRPC_SPEECH2_TEXT_CLIENT_SETTINGS');

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
var Decoding;
(function (Decoding) {
    Decoding[Decoding["DEFAULT"] = 0] = "DEFAULT";
    Decoding[Decoding["GREEDY"] = 1] = "GREEDY";
    Decoding[Decoding["BEAM_SEARCH_WITH_LM"] = 2] = "BEAM_SEARCH_WITH_LM";
    Decoding[Decoding["BEAM_SEARCH"] = 3] = "BEAM_SEARCH";
})(Decoding || (Decoding = {}));
var InferenceBackend;
(function (InferenceBackend) {
    InferenceBackend[InferenceBackend["INFERENCE_BACKEND_UNKNOWN"] = 0] = "INFERENCE_BACKEND_UNKNOWN";
    InferenceBackend[InferenceBackend["INFERENCE_BACKEND_PYTORCH"] = 1] = "INFERENCE_BACKEND_PYTORCH";
    InferenceBackend[InferenceBackend["INFERENCE_BACKEND_FLAX"] = 2] = "INFERENCE_BACKEND_FLAX";
    InferenceBackend[InferenceBackend["INFERENCE_BACKEND_CLOUD_SERVICE_AMAZON"] = 3] = "INFERENCE_BACKEND_CLOUD_SERVICE_AMAZON";
    InferenceBackend[InferenceBackend["INFERENCE_BACKEND_CLOUD_SERVICE_DEEPGRAM"] = 4] = "INFERENCE_BACKEND_CLOUD_SERVICE_DEEPGRAM";
    InferenceBackend[InferenceBackend["INFERENCE_BACKEND_CLOUD_SERVICE_GOOGLE"] = 5] = "INFERENCE_BACKEND_CLOUD_SERVICE_GOOGLE";
    InferenceBackend[InferenceBackend["INFERENCE_BACKEND_CLOUD_SERVICE_MICROSOFT"] = 6] = "INFERENCE_BACKEND_CLOUD_SERVICE_MICROSOFT";
})(InferenceBackend || (InferenceBackend = {}));
/**
 * Message implementation for ondewo.s2t.TranscribeRequestConfig
 */
class TranscribeRequestConfig {
    static { this.id = 'ondewo.s2t.TranscribeRequestConfig'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new TranscribeRequestConfig();
        TranscribeRequestConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.s2tPipelineId = _instance.s2tPipelineId || '';
        _instance.decoding = _instance.decoding || 0;
        _instance.language = _instance.language || '';
        _instance.task = _instance.task || '';
        _instance.s2tServiceConfig = _instance.s2tServiceConfig || undefined;
        _instance.s2tCloudProviderConfig =
            _instance.s2tCloudProviderConfig || undefined;
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
                    _instance.decoding = _reader.readEnum();
                    break;
                case 3:
                    _instance.languageModelName = _reader.readString();
                    break;
                case 4:
                    _instance.postProcessing = new PostProcessingOptions();
                    _reader.readMessage(_instance.postProcessing, PostProcessingOptions.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.utteranceDetection = new UtteranceDetectionOptions();
                    _reader.readMessage(_instance.utteranceDetection, UtteranceDetectionOptions.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.pyannote = new Pyannote();
                    _reader.readMessage(_instance.pyannote, Pyannote.deserializeBinaryFromReader);
                    break;
                case 8:
                    _instance.returnOptions = new TranscriptionReturnOptions();
                    _reader.readMessage(_instance.returnOptions, TranscriptionReturnOptions.deserializeBinaryFromReader);
                    break;
                case 9:
                    _instance.language = _reader.readString();
                    break;
                case 10:
                    _instance.task = _reader.readString();
                    break;
                case 11:
                    _instance.s2tServiceConfig = new googleProtobuf000.Struct();
                    _reader.readMessage(_instance.s2tServiceConfig, googleProtobuf000.Struct.deserializeBinaryFromReader);
                    break;
                case 12:
                    _instance.s2tCloudProviderConfig = new S2tCloudProviderConfig();
                    _reader.readMessage(_instance.s2tCloudProviderConfig, S2tCloudProviderConfig.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        TranscribeRequestConfig.refineValues(_instance);
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
        if (_instance.decoding) {
            _writer.writeEnum(2, _instance.decoding);
        }
        if (_instance.languageModelName || _instance.languageModelName === '') {
            _writer.writeString(3, _instance.languageModelName);
        }
        if (_instance.postProcessing) {
            _writer.writeMessage(4, _instance.postProcessing, PostProcessingOptions.serializeBinaryToWriter);
        }
        if (_instance.utteranceDetection) {
            _writer.writeMessage(5, _instance.utteranceDetection, UtteranceDetectionOptions.serializeBinaryToWriter);
        }
        if (_instance.pyannote) {
            _writer.writeMessage(6, _instance.pyannote, Pyannote.serializeBinaryToWriter);
        }
        if (_instance.returnOptions) {
            _writer.writeMessage(8, _instance.returnOptions, TranscriptionReturnOptions.serializeBinaryToWriter);
        }
        if (_instance.language) {
            _writer.writeString(9, _instance.language);
        }
        if (_instance.task) {
            _writer.writeString(10, _instance.task);
        }
        if (_instance.s2tServiceConfig) {
            _writer.writeMessage(11, _instance.s2tServiceConfig, googleProtobuf000.Struct.serializeBinaryToWriter);
        }
        if (_instance.s2tCloudProviderConfig) {
            _writer.writeMessage(12, _instance.s2tCloudProviderConfig, S2tCloudProviderConfig.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscribeRequestConfig to deeply clone from
     */
    constructor(_value) {
        this._oneofLanguageModelName = TranscribeRequestConfig.OneofLanguageModelNameCase.none;
        this._oneofPostProcessing = TranscribeRequestConfig.OneofPostProcessingCase.none;
        this._oneofUtteranceDetection = TranscribeRequestConfig.OneofUtteranceDetectionCase.none;
        this._voiceActivityDetection = TranscribeRequestConfig.VoiceActivityDetectionCase.none;
        this._oneofReturnOptions = TranscribeRequestConfig.OneofReturnOptionsCase.none;
        _value = _value || {};
        this.s2tPipelineId = _value.s2tPipelineId;
        this.decoding = _value.decoding;
        this.languageModelName = _value.languageModelName;
        this.postProcessing = _value.postProcessing
            ? new PostProcessingOptions(_value.postProcessing)
            : undefined;
        this.utteranceDetection = _value.utteranceDetection
            ? new UtteranceDetectionOptions(_value.utteranceDetection)
            : undefined;
        this.pyannote = _value.pyannote ? new Pyannote(_value.pyannote) : undefined;
        this.returnOptions = _value.returnOptions
            ? new TranscriptionReturnOptions(_value.returnOptions)
            : undefined;
        this.language = _value.language;
        this.task = _value.task;
        this.s2tServiceConfig = _value.s2tServiceConfig
            ? new googleProtobuf000.Struct(_value.s2tServiceConfig)
            : undefined;
        this.s2tCloudProviderConfig = _value.s2tCloudProviderConfig
            ? new S2tCloudProviderConfig(_value.s2tCloudProviderConfig)
            : undefined;
        TranscribeRequestConfig.refineValues(this);
    }
    get s2tPipelineId() {
        return this._s2tPipelineId;
    }
    set s2tPipelineId(value) {
        this._s2tPipelineId = value;
    }
    get decoding() {
        return this._decoding;
    }
    set decoding(value) {
        this._decoding = value;
    }
    get languageModelName() {
        return this._languageModelName;
    }
    set languageModelName(value) {
        if (value !== undefined && value !== null) {
            this._oneofLanguageModelName =
                TranscribeRequestConfig.OneofLanguageModelNameCase.languageModelName;
        }
        this._languageModelName = value;
    }
    get postProcessing() {
        return this._postProcessing;
    }
    set postProcessing(value) {
        if (value !== undefined && value !== null) {
            this._oneofPostProcessing =
                TranscribeRequestConfig.OneofPostProcessingCase.postProcessing;
        }
        this._postProcessing = value;
    }
    get utteranceDetection() {
        return this._utteranceDetection;
    }
    set utteranceDetection(value) {
        if (value !== undefined && value !== null) {
            this._oneofUtteranceDetection =
                TranscribeRequestConfig.OneofUtteranceDetectionCase.utteranceDetection;
        }
        this._utteranceDetection = value;
    }
    get pyannote() {
        return this._pyannote;
    }
    set pyannote(value) {
        if (value !== undefined && value !== null) {
            this._voiceActivityDetection =
                TranscribeRequestConfig.VoiceActivityDetectionCase.pyannote;
        }
        this._pyannote = value;
    }
    get returnOptions() {
        return this._returnOptions;
    }
    set returnOptions(value) {
        if (value !== undefined && value !== null) {
            this._oneofReturnOptions =
                TranscribeRequestConfig.OneofReturnOptionsCase.returnOptions;
        }
        this._returnOptions = value;
    }
    get language() {
        return this._language;
    }
    set language(value) {
        this._language = value;
    }
    get task() {
        return this._task;
    }
    set task(value) {
        this._task = value;
    }
    get s2tServiceConfig() {
        return this._s2tServiceConfig;
    }
    set s2tServiceConfig(value) {
        this._s2tServiceConfig = value;
    }
    get s2tCloudProviderConfig() {
        return this._s2tCloudProviderConfig;
    }
    set s2tCloudProviderConfig(value) {
        this._s2tCloudProviderConfig = value;
    }
    get oneofLanguageModelName() {
        return this._oneofLanguageModelName;
    }
    get oneofPostProcessing() {
        return this._oneofPostProcessing;
    }
    get oneofUtteranceDetection() {
        return this._oneofUtteranceDetection;
    }
    get voiceActivityDetection() {
        return this._voiceActivityDetection;
    }
    get oneofReturnOptions() {
        return this._oneofReturnOptions;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        TranscribeRequestConfig.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            s2tPipelineId: this.s2tPipelineId,
            decoding: this.decoding,
            languageModelName: this.languageModelName,
            postProcessing: this.postProcessing
                ? this.postProcessing.toObject()
                : undefined,
            utteranceDetection: this.utteranceDetection
                ? this.utteranceDetection.toObject()
                : undefined,
            pyannote: this.pyannote ? this.pyannote.toObject() : undefined,
            returnOptions: this.returnOptions
                ? this.returnOptions.toObject()
                : undefined,
            language: this.language,
            task: this.task,
            s2tServiceConfig: this.s2tServiceConfig
                ? this.s2tServiceConfig.toObject()
                : undefined,
            s2tCloudProviderConfig: this.s2tCloudProviderConfig
                ? this.s2tCloudProviderConfig.toObject()
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
            s2tPipelineId: this.s2tPipelineId,
            decoding: Decoding[this.decoding === null || this.decoding === undefined
                ? 0
                : this.decoding],
            languageModelName: this.languageModelName === null || this.languageModelName === undefined
                ? null
                : this.languageModelName,
            postProcessing: this.postProcessing
                ? this.postProcessing.toProtobufJSON(options)
                : null,
            utteranceDetection: this.utteranceDetection
                ? this.utteranceDetection.toProtobufJSON(options)
                : null,
            pyannote: this.pyannote ? this.pyannote.toProtobufJSON(options) : null,
            returnOptions: this.returnOptions
                ? this.returnOptions.toProtobufJSON(options)
                : null,
            language: this.language,
            task: this.task,
            s2tServiceConfig: this.s2tServiceConfig
                ? this.s2tServiceConfig.toProtobufJSON(options)
                : null,
            s2tCloudProviderConfig: this.s2tCloudProviderConfig
                ? this.s2tCloudProviderConfig.toProtobufJSON(options)
                : null
        };
    }
}
(function (TranscribeRequestConfig) {
    let OneofLanguageModelNameCase;
    (function (OneofLanguageModelNameCase) {
        OneofLanguageModelNameCase[OneofLanguageModelNameCase["none"] = 0] = "none";
        OneofLanguageModelNameCase[OneofLanguageModelNameCase["languageModelName"] = 1] = "languageModelName";
    })(OneofLanguageModelNameCase = TranscribeRequestConfig.OneofLanguageModelNameCase || (TranscribeRequestConfig.OneofLanguageModelNameCase = {}));
    let OneofPostProcessingCase;
    (function (OneofPostProcessingCase) {
        OneofPostProcessingCase[OneofPostProcessingCase["none"] = 0] = "none";
        OneofPostProcessingCase[OneofPostProcessingCase["postProcessing"] = 1] = "postProcessing";
    })(OneofPostProcessingCase = TranscribeRequestConfig.OneofPostProcessingCase || (TranscribeRequestConfig.OneofPostProcessingCase = {}));
    let OneofUtteranceDetectionCase;
    (function (OneofUtteranceDetectionCase) {
        OneofUtteranceDetectionCase[OneofUtteranceDetectionCase["none"] = 0] = "none";
        OneofUtteranceDetectionCase[OneofUtteranceDetectionCase["utteranceDetection"] = 1] = "utteranceDetection";
    })(OneofUtteranceDetectionCase = TranscribeRequestConfig.OneofUtteranceDetectionCase || (TranscribeRequestConfig.OneofUtteranceDetectionCase = {}));
    let VoiceActivityDetectionCase;
    (function (VoiceActivityDetectionCase) {
        VoiceActivityDetectionCase[VoiceActivityDetectionCase["none"] = 0] = "none";
        VoiceActivityDetectionCase[VoiceActivityDetectionCase["pyannote"] = 1] = "pyannote";
    })(VoiceActivityDetectionCase = TranscribeRequestConfig.VoiceActivityDetectionCase || (TranscribeRequestConfig.VoiceActivityDetectionCase = {}));
    let OneofReturnOptionsCase;
    (function (OneofReturnOptionsCase) {
        OneofReturnOptionsCase[OneofReturnOptionsCase["none"] = 0] = "none";
        OneofReturnOptionsCase[OneofReturnOptionsCase["returnOptions"] = 1] = "returnOptions";
    })(OneofReturnOptionsCase = TranscribeRequestConfig.OneofReturnOptionsCase || (TranscribeRequestConfig.OneofReturnOptionsCase = {}));
})(TranscribeRequestConfig || (TranscribeRequestConfig = {}));
/**
 * Message implementation for ondewo.s2t.S2tCloudProviderConfig
 */
class S2tCloudProviderConfig {
    static { this.id = 'ondewo.s2t.S2tCloudProviderConfig'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new S2tCloudProviderConfig();
        S2tCloudProviderConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.s2tCloudProviderConfigAmazon =
            _instance.s2tCloudProviderConfigAmazon || undefined;
        _instance.s2tCloudProviderConfigDeepgram =
            _instance.s2tCloudProviderConfigDeepgram || undefined;
        _instance.s2tCloudProviderConfigGoogle =
            _instance.s2tCloudProviderConfigGoogle || undefined;
        _instance.s2tCloudProviderConfigMicrosoft =
            _instance.s2tCloudProviderConfigMicrosoft || undefined;
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
                    _instance.s2tCloudProviderConfigAmazon = new S2tCloudProviderConfigAmazon();
                    _reader.readMessage(_instance.s2tCloudProviderConfigAmazon, S2tCloudProviderConfigAmazon.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.s2tCloudProviderConfigDeepgram = new S2tCloudProviderConfigDeepgram();
                    _reader.readMessage(_instance.s2tCloudProviderConfigDeepgram, S2tCloudProviderConfigDeepgram.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.s2tCloudProviderConfigGoogle = new S2tCloudProviderConfigGoogle();
                    _reader.readMessage(_instance.s2tCloudProviderConfigGoogle, S2tCloudProviderConfigGoogle.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.s2tCloudProviderConfigMicrosoft = new S2tCloudProviderConfigMicrosoft();
                    _reader.readMessage(_instance.s2tCloudProviderConfigMicrosoft, S2tCloudProviderConfigMicrosoft.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        S2tCloudProviderConfig.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.s2tCloudProviderConfigAmazon) {
            _writer.writeMessage(1, _instance.s2tCloudProviderConfigAmazon, S2tCloudProviderConfigAmazon.serializeBinaryToWriter);
        }
        if (_instance.s2tCloudProviderConfigDeepgram) {
            _writer.writeMessage(2, _instance.s2tCloudProviderConfigDeepgram, S2tCloudProviderConfigDeepgram.serializeBinaryToWriter);
        }
        if (_instance.s2tCloudProviderConfigGoogle) {
            _writer.writeMessage(3, _instance.s2tCloudProviderConfigGoogle, S2tCloudProviderConfigGoogle.serializeBinaryToWriter);
        }
        if (_instance.s2tCloudProviderConfigMicrosoft) {
            _writer.writeMessage(4, _instance.s2tCloudProviderConfigMicrosoft, S2tCloudProviderConfigMicrosoft.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tCloudProviderConfig to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.s2tCloudProviderConfigAmazon = _value.s2tCloudProviderConfigAmazon
            ? new S2tCloudProviderConfigAmazon(_value.s2tCloudProviderConfigAmazon)
            : undefined;
        this.s2tCloudProviderConfigDeepgram = _value.s2tCloudProviderConfigDeepgram
            ? new S2tCloudProviderConfigDeepgram(_value.s2tCloudProviderConfigDeepgram)
            : undefined;
        this.s2tCloudProviderConfigGoogle = _value.s2tCloudProviderConfigGoogle
            ? new S2tCloudProviderConfigGoogle(_value.s2tCloudProviderConfigGoogle)
            : undefined;
        this.s2tCloudProviderConfigMicrosoft = _value.s2tCloudProviderConfigMicrosoft
            ? new S2tCloudProviderConfigMicrosoft(_value.s2tCloudProviderConfigMicrosoft)
            : undefined;
        S2tCloudProviderConfig.refineValues(this);
    }
    get s2tCloudProviderConfigAmazon() {
        return this._s2tCloudProviderConfigAmazon;
    }
    set s2tCloudProviderConfigAmazon(value) {
        this._s2tCloudProviderConfigAmazon = value;
    }
    get s2tCloudProviderConfigDeepgram() {
        return this._s2tCloudProviderConfigDeepgram;
    }
    set s2tCloudProviderConfigDeepgram(value) {
        this._s2tCloudProviderConfigDeepgram = value;
    }
    get s2tCloudProviderConfigGoogle() {
        return this._s2tCloudProviderConfigGoogle;
    }
    set s2tCloudProviderConfigGoogle(value) {
        this._s2tCloudProviderConfigGoogle = value;
    }
    get s2tCloudProviderConfigMicrosoft() {
        return this._s2tCloudProviderConfigMicrosoft;
    }
    set s2tCloudProviderConfigMicrosoft(value) {
        this._s2tCloudProviderConfigMicrosoft = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        S2tCloudProviderConfig.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            s2tCloudProviderConfigAmazon: this.s2tCloudProviderConfigAmazon
                ? this.s2tCloudProviderConfigAmazon.toObject()
                : undefined,
            s2tCloudProviderConfigDeepgram: this.s2tCloudProviderConfigDeepgram
                ? this.s2tCloudProviderConfigDeepgram.toObject()
                : undefined,
            s2tCloudProviderConfigGoogle: this.s2tCloudProviderConfigGoogle
                ? this.s2tCloudProviderConfigGoogle.toObject()
                : undefined,
            s2tCloudProviderConfigMicrosoft: this.s2tCloudProviderConfigMicrosoft
                ? this.s2tCloudProviderConfigMicrosoft.toObject()
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
            s2tCloudProviderConfigAmazon: this.s2tCloudProviderConfigAmazon
                ? this.s2tCloudProviderConfigAmazon.toProtobufJSON(options)
                : null,
            s2tCloudProviderConfigDeepgram: this.s2tCloudProviderConfigDeepgram
                ? this.s2tCloudProviderConfigDeepgram.toProtobufJSON(options)
                : null,
            s2tCloudProviderConfigGoogle: this.s2tCloudProviderConfigGoogle
                ? this.s2tCloudProviderConfigGoogle.toProtobufJSON(options)
                : null,
            s2tCloudProviderConfigMicrosoft: this.s2tCloudProviderConfigMicrosoft
                ? this.s2tCloudProviderConfigMicrosoft.toProtobufJSON(options)
                : null
        };
    }
}
/**
 * Message implementation for ondewo.s2t.S2tCloudProviderConfigAmazon
 */
class S2tCloudProviderConfigAmazon {
    static { this.id = 'ondewo.s2t.S2tCloudProviderConfigAmazon'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new S2tCloudProviderConfigAmazon();
        S2tCloudProviderConfigAmazon.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.enablePartialResultsStabilization =
            _instance.enablePartialResultsStabilization || false;
        _instance.partialResultsStability = _instance.partialResultsStability || '';
        _instance.languageModelName = _instance.languageModelName || '';
        _instance.vocabularyName = _instance.vocabularyName || '';
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
                    _instance.enablePartialResultsStabilization = _reader.readBool();
                    break;
                case 2:
                    _instance.partialResultsStability = _reader.readString();
                    break;
                case 3:
                    _instance.languageModelName = _reader.readString();
                    break;
                case 4:
                    _instance.vocabularyName = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        S2tCloudProviderConfigAmazon.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.enablePartialResultsStabilization) {
            _writer.writeBool(1, _instance.enablePartialResultsStabilization);
        }
        if (_instance.partialResultsStability) {
            _writer.writeString(2, _instance.partialResultsStability);
        }
        if (_instance.languageModelName) {
            _writer.writeString(3, _instance.languageModelName);
        }
        if (_instance.vocabularyName) {
            _writer.writeString(4, _instance.vocabularyName);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tCloudProviderConfigAmazon to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.enablePartialResultsStabilization =
            _value.enablePartialResultsStabilization;
        this.partialResultsStability = _value.partialResultsStability;
        this.languageModelName = _value.languageModelName;
        this.vocabularyName = _value.vocabularyName;
        S2tCloudProviderConfigAmazon.refineValues(this);
    }
    get enablePartialResultsStabilization() {
        return this._enablePartialResultsStabilization;
    }
    set enablePartialResultsStabilization(value) {
        this._enablePartialResultsStabilization = value;
    }
    get partialResultsStability() {
        return this._partialResultsStability;
    }
    set partialResultsStability(value) {
        this._partialResultsStability = value;
    }
    get languageModelName() {
        return this._languageModelName;
    }
    set languageModelName(value) {
        this._languageModelName = value;
    }
    get vocabularyName() {
        return this._vocabularyName;
    }
    set vocabularyName(value) {
        this._vocabularyName = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        S2tCloudProviderConfigAmazon.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            enablePartialResultsStabilization: this.enablePartialResultsStabilization,
            partialResultsStability: this.partialResultsStability,
            languageModelName: this.languageModelName,
            vocabularyName: this.vocabularyName
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
            enablePartialResultsStabilization: this.enablePartialResultsStabilization,
            partialResultsStability: this.partialResultsStability,
            languageModelName: this.languageModelName,
            vocabularyName: this.vocabularyName
        };
    }
}
/**
 * Message implementation for ondewo.s2t.S2tCloudProviderConfigDeepgram
 */
class S2tCloudProviderConfigDeepgram {
    static { this.id = 'ondewo.s2t.S2tCloudProviderConfigDeepgram'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new S2tCloudProviderConfigDeepgram();
        S2tCloudProviderConfigDeepgram.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.punctuate = _instance.punctuate || false;
        _instance.smartFormat = _instance.smartFormat || false;
        _instance.numerals = _instance.numerals || false;
        _instance.measurements = _instance.measurements || false;
        _instance.dictation = _instance.dictation || false;
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
                    _instance.punctuate = _reader.readBool();
                    break;
                case 2:
                    _instance.smartFormat = _reader.readBool();
                    break;
                case 3:
                    _instance.numerals = _reader.readBool();
                    break;
                case 4:
                    _instance.measurements = _reader.readBool();
                    break;
                case 5:
                    _instance.dictation = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        S2tCloudProviderConfigDeepgram.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.punctuate) {
            _writer.writeBool(1, _instance.punctuate);
        }
        if (_instance.smartFormat) {
            _writer.writeBool(2, _instance.smartFormat);
        }
        if (_instance.numerals) {
            _writer.writeBool(3, _instance.numerals);
        }
        if (_instance.measurements) {
            _writer.writeBool(4, _instance.measurements);
        }
        if (_instance.dictation) {
            _writer.writeBool(5, _instance.dictation);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tCloudProviderConfigDeepgram to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.punctuate = _value.punctuate;
        this.smartFormat = _value.smartFormat;
        this.numerals = _value.numerals;
        this.measurements = _value.measurements;
        this.dictation = _value.dictation;
        S2tCloudProviderConfigDeepgram.refineValues(this);
    }
    get punctuate() {
        return this._punctuate;
    }
    set punctuate(value) {
        this._punctuate = value;
    }
    get smartFormat() {
        return this._smartFormat;
    }
    set smartFormat(value) {
        this._smartFormat = value;
    }
    get numerals() {
        return this._numerals;
    }
    set numerals(value) {
        this._numerals = value;
    }
    get measurements() {
        return this._measurements;
    }
    set measurements(value) {
        this._measurements = value;
    }
    get dictation() {
        return this._dictation;
    }
    set dictation(value) {
        this._dictation = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        S2tCloudProviderConfigDeepgram.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            punctuate: this.punctuate,
            smartFormat: this.smartFormat,
            numerals: this.numerals,
            measurements: this.measurements,
            dictation: this.dictation
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
            punctuate: this.punctuate,
            smartFormat: this.smartFormat,
            numerals: this.numerals,
            measurements: this.measurements,
            dictation: this.dictation
        };
    }
}
/**
 * Message implementation for ondewo.s2t.S2tCloudProviderConfigGoogle
 */
class S2tCloudProviderConfigGoogle {
    static { this.id = 'ondewo.s2t.S2tCloudProviderConfigGoogle'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new S2tCloudProviderConfigGoogle();
        S2tCloudProviderConfigGoogle.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.enableAutomaticPunctuation =
            _instance.enableAutomaticPunctuation || false;
        _instance.enableWordTimeOffsets = _instance.enableWordTimeOffsets || false;
        _instance.enableWordConfidence = _instance.enableWordConfidence || false;
        _instance.transcriptNormalization =
            _instance.transcriptNormalization || false;
        _instance.maxAlternatives = _instance.maxAlternatives || 0;
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
                    _instance.enableAutomaticPunctuation = _reader.readBool();
                    break;
                case 2:
                    _instance.enableWordTimeOffsets = _reader.readBool();
                    break;
                case 3:
                    _instance.enableWordConfidence = _reader.readBool();
                    break;
                case 4:
                    _instance.transcriptNormalization = _reader.readBool();
                    break;
                case 5:
                    _instance.maxAlternatives = _reader.readInt32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        S2tCloudProviderConfigGoogle.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.enableAutomaticPunctuation) {
            _writer.writeBool(1, _instance.enableAutomaticPunctuation);
        }
        if (_instance.enableWordTimeOffsets) {
            _writer.writeBool(2, _instance.enableWordTimeOffsets);
        }
        if (_instance.enableWordConfidence) {
            _writer.writeBool(3, _instance.enableWordConfidence);
        }
        if (_instance.transcriptNormalization) {
            _writer.writeBool(4, _instance.transcriptNormalization);
        }
        if (_instance.maxAlternatives) {
            _writer.writeInt32(5, _instance.maxAlternatives);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tCloudProviderConfigGoogle to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.enableAutomaticPunctuation = _value.enableAutomaticPunctuation;
        this.enableWordTimeOffsets = _value.enableWordTimeOffsets;
        this.enableWordConfidence = _value.enableWordConfidence;
        this.transcriptNormalization = _value.transcriptNormalization;
        this.maxAlternatives = _value.maxAlternatives;
        S2tCloudProviderConfigGoogle.refineValues(this);
    }
    get enableAutomaticPunctuation() {
        return this._enableAutomaticPunctuation;
    }
    set enableAutomaticPunctuation(value) {
        this._enableAutomaticPunctuation = value;
    }
    get enableWordTimeOffsets() {
        return this._enableWordTimeOffsets;
    }
    set enableWordTimeOffsets(value) {
        this._enableWordTimeOffsets = value;
    }
    get enableWordConfidence() {
        return this._enableWordConfidence;
    }
    set enableWordConfidence(value) {
        this._enableWordConfidence = value;
    }
    get transcriptNormalization() {
        return this._transcriptNormalization;
    }
    set transcriptNormalization(value) {
        this._transcriptNormalization = value;
    }
    get maxAlternatives() {
        return this._maxAlternatives;
    }
    set maxAlternatives(value) {
        this._maxAlternatives = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        S2tCloudProviderConfigGoogle.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            enableAutomaticPunctuation: this.enableAutomaticPunctuation,
            enableWordTimeOffsets: this.enableWordTimeOffsets,
            enableWordConfidence: this.enableWordConfidence,
            transcriptNormalization: this.transcriptNormalization,
            maxAlternatives: this.maxAlternatives
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
            enableAutomaticPunctuation: this.enableAutomaticPunctuation,
            enableWordTimeOffsets: this.enableWordTimeOffsets,
            enableWordConfidence: this.enableWordConfidence,
            transcriptNormalization: this.transcriptNormalization,
            maxAlternatives: this.maxAlternatives
        };
    }
}
/**
 * Message implementation for ondewo.s2t.S2tCloudProviderConfigMicrosoft
 */
class S2tCloudProviderConfigMicrosoft {
    static { this.id = 'ondewo.s2t.S2tCloudProviderConfigMicrosoft'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new S2tCloudProviderConfigMicrosoft();
        S2tCloudProviderConfigMicrosoft.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.useFastTranscriptionApi =
            _instance.useFastTranscriptionApi || false;
        _instance.useDetailedOutputFormat =
            _instance.useDetailedOutputFormat || false;
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
                    _instance.useFastTranscriptionApi = _reader.readBool();
                    break;
                case 2:
                    _instance.useDetailedOutputFormat = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        S2tCloudProviderConfigMicrosoft.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.useFastTranscriptionApi) {
            _writer.writeBool(1, _instance.useFastTranscriptionApi);
        }
        if (_instance.useDetailedOutputFormat) {
            _writer.writeBool(2, _instance.useDetailedOutputFormat);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tCloudProviderConfigMicrosoft to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.useFastTranscriptionApi = _value.useFastTranscriptionApi;
        this.useDetailedOutputFormat = _value.useDetailedOutputFormat;
        S2tCloudProviderConfigMicrosoft.refineValues(this);
    }
    get useFastTranscriptionApi() {
        return this._useFastTranscriptionApi;
    }
    set useFastTranscriptionApi(value) {
        this._useFastTranscriptionApi = value;
    }
    get useDetailedOutputFormat() {
        return this._useDetailedOutputFormat;
    }
    set useDetailedOutputFormat(value) {
        this._useDetailedOutputFormat = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        S2tCloudProviderConfigMicrosoft.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            useFastTranscriptionApi: this.useFastTranscriptionApi,
            useDetailedOutputFormat: this.useDetailedOutputFormat
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
            useFastTranscriptionApi: this.useFastTranscriptionApi,
            useDetailedOutputFormat: this.useDetailedOutputFormat
        };
    }
}
/**
 * Message implementation for ondewo.s2t.TranscriptionReturnOptions
 */
class TranscriptionReturnOptions {
    static { this.id = 'ondewo.s2t.TranscriptionReturnOptions'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new TranscriptionReturnOptions();
        TranscriptionReturnOptions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.returnStartOfSpeech = _instance.returnStartOfSpeech || false;
        _instance.returnAudio = _instance.returnAudio || false;
        _instance.returnConfidenceScore = _instance.returnConfidenceScore || false;
        _instance.returnAlternativeTranscriptions =
            _instance.returnAlternativeTranscriptions || false;
        _instance.returnAlternativeTranscriptionsNr =
            _instance.returnAlternativeTranscriptionsNr || 0;
        _instance.returnAlternativeWords =
            _instance.returnAlternativeWords || false;
        _instance.returnAlternativeWordsNr =
            _instance.returnAlternativeWordsNr || 0;
        _instance.returnWordTiming = _instance.returnWordTiming || false;
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
                    _instance.returnStartOfSpeech = _reader.readBool();
                    break;
                case 2:
                    _instance.returnAudio = _reader.readBool();
                    break;
                case 3:
                    _instance.returnConfidenceScore = _reader.readBool();
                    break;
                case 4:
                    _instance.returnAlternativeTranscriptions = _reader.readBool();
                    break;
                case 5:
                    _instance.returnAlternativeTranscriptionsNr = _reader.readInt32();
                    break;
                case 6:
                    _instance.returnAlternativeWords = _reader.readBool();
                    break;
                case 7:
                    _instance.returnAlternativeWordsNr = _reader.readInt32();
                    break;
                case 8:
                    _instance.returnWordTiming = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        TranscriptionReturnOptions.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.returnStartOfSpeech) {
            _writer.writeBool(1, _instance.returnStartOfSpeech);
        }
        if (_instance.returnAudio) {
            _writer.writeBool(2, _instance.returnAudio);
        }
        if (_instance.returnConfidenceScore) {
            _writer.writeBool(3, _instance.returnConfidenceScore);
        }
        if (_instance.returnAlternativeTranscriptions) {
            _writer.writeBool(4, _instance.returnAlternativeTranscriptions);
        }
        if (_instance.returnAlternativeTranscriptionsNr) {
            _writer.writeInt32(5, _instance.returnAlternativeTranscriptionsNr);
        }
        if (_instance.returnAlternativeWords) {
            _writer.writeBool(6, _instance.returnAlternativeWords);
        }
        if (_instance.returnAlternativeWordsNr) {
            _writer.writeInt32(7, _instance.returnAlternativeWordsNr);
        }
        if (_instance.returnWordTiming) {
            _writer.writeBool(8, _instance.returnWordTiming);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscriptionReturnOptions to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.returnStartOfSpeech = _value.returnStartOfSpeech;
        this.returnAudio = _value.returnAudio;
        this.returnConfidenceScore = _value.returnConfidenceScore;
        this.returnAlternativeTranscriptions =
            _value.returnAlternativeTranscriptions;
        this.returnAlternativeTranscriptionsNr =
            _value.returnAlternativeTranscriptionsNr;
        this.returnAlternativeWords = _value.returnAlternativeWords;
        this.returnAlternativeWordsNr = _value.returnAlternativeWordsNr;
        this.returnWordTiming = _value.returnWordTiming;
        TranscriptionReturnOptions.refineValues(this);
    }
    get returnStartOfSpeech() {
        return this._returnStartOfSpeech;
    }
    set returnStartOfSpeech(value) {
        this._returnStartOfSpeech = value;
    }
    get returnAudio() {
        return this._returnAudio;
    }
    set returnAudio(value) {
        this._returnAudio = value;
    }
    get returnConfidenceScore() {
        return this._returnConfidenceScore;
    }
    set returnConfidenceScore(value) {
        this._returnConfidenceScore = value;
    }
    get returnAlternativeTranscriptions() {
        return this._returnAlternativeTranscriptions;
    }
    set returnAlternativeTranscriptions(value) {
        this._returnAlternativeTranscriptions = value;
    }
    get returnAlternativeTranscriptionsNr() {
        return this._returnAlternativeTranscriptionsNr;
    }
    set returnAlternativeTranscriptionsNr(value) {
        this._returnAlternativeTranscriptionsNr = value;
    }
    get returnAlternativeWords() {
        return this._returnAlternativeWords;
    }
    set returnAlternativeWords(value) {
        this._returnAlternativeWords = value;
    }
    get returnAlternativeWordsNr() {
        return this._returnAlternativeWordsNr;
    }
    set returnAlternativeWordsNr(value) {
        this._returnAlternativeWordsNr = value;
    }
    get returnWordTiming() {
        return this._returnWordTiming;
    }
    set returnWordTiming(value) {
        this._returnWordTiming = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        TranscriptionReturnOptions.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            returnStartOfSpeech: this.returnStartOfSpeech,
            returnAudio: this.returnAudio,
            returnConfidenceScore: this.returnConfidenceScore,
            returnAlternativeTranscriptions: this.returnAlternativeTranscriptions,
            returnAlternativeTranscriptionsNr: this.returnAlternativeTranscriptionsNr,
            returnAlternativeWords: this.returnAlternativeWords,
            returnAlternativeWordsNr: this.returnAlternativeWordsNr,
            returnWordTiming: this.returnWordTiming
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
            returnStartOfSpeech: this.returnStartOfSpeech,
            returnAudio: this.returnAudio,
            returnConfidenceScore: this.returnConfidenceScore,
            returnAlternativeTranscriptions: this.returnAlternativeTranscriptions,
            returnAlternativeTranscriptionsNr: this.returnAlternativeTranscriptionsNr,
            returnAlternativeWords: this.returnAlternativeWords,
            returnAlternativeWordsNr: this.returnAlternativeWordsNr,
            returnWordTiming: this.returnWordTiming
        };
    }
}
/**
 * Message implementation for ondewo.s2t.UtteranceDetectionOptions
 */
class UtteranceDetectionOptions {
    static { this.id = 'ondewo.s2t.UtteranceDetectionOptions'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new UtteranceDetectionOptions();
        UtteranceDetectionOptions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.nextChunkTimeout = _instance.nextChunkTimeout || 0;
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
                    _instance.nextChunkTimeout = _reader.readFloat();
                    break;
                default:
                    _reader.skipField();
            }
        }
        UtteranceDetectionOptions.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.transcribeNotFinal ||
            _instance.transcribeNotFinal === false) {
            _writer.writeBool(1, _instance.transcribeNotFinal);
        }
        if (_instance.nextChunkTimeout) {
            _writer.writeFloat(2, _instance.nextChunkTimeout);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UtteranceDetectionOptions to deeply clone from
     */
    constructor(_value) {
        this._oneofTranscribeNotFinal = UtteranceDetectionOptions.OneofTranscribeNotFinalCase.none;
        _value = _value || {};
        this.transcribeNotFinal = _value.transcribeNotFinal;
        this.nextChunkTimeout = _value.nextChunkTimeout;
        UtteranceDetectionOptions.refineValues(this);
    }
    get transcribeNotFinal() {
        return this._transcribeNotFinal;
    }
    set transcribeNotFinal(value) {
        if (value !== undefined && value !== null) {
            this._oneofTranscribeNotFinal =
                UtteranceDetectionOptions.OneofTranscribeNotFinalCase.transcribeNotFinal;
        }
        this._transcribeNotFinal = value;
    }
    get nextChunkTimeout() {
        return this._nextChunkTimeout;
    }
    set nextChunkTimeout(value) {
        this._nextChunkTimeout = value;
    }
    get oneofTranscribeNotFinal() {
        return this._oneofTranscribeNotFinal;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        UtteranceDetectionOptions.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            transcribeNotFinal: this.transcribeNotFinal,
            nextChunkTimeout: this.nextChunkTimeout
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
            nextChunkTimeout: this.nextChunkTimeout
        };
    }
}
(function (UtteranceDetectionOptions) {
    let OneofTranscribeNotFinalCase;
    (function (OneofTranscribeNotFinalCase) {
        OneofTranscribeNotFinalCase[OneofTranscribeNotFinalCase["none"] = 0] = "none";
        OneofTranscribeNotFinalCase[OneofTranscribeNotFinalCase["transcribeNotFinal"] = 1] = "transcribeNotFinal";
    })(OneofTranscribeNotFinalCase = UtteranceDetectionOptions.OneofTranscribeNotFinalCase || (UtteranceDetectionOptions.OneofTranscribeNotFinalCase = {}));
})(UtteranceDetectionOptions || (UtteranceDetectionOptions = {}));
/**
 * Message implementation for ondewo.s2t.PostProcessingOptions
 */
class PostProcessingOptions {
    static { this.id = 'ondewo.s2t.PostProcessingOptions'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new PostProcessingOptions();
        PostProcessingOptions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.spellingCorrection = _instance.spellingCorrection || false;
        _instance.normalize = _instance.normalize || false;
        _instance.config = _instance.config || undefined;
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
                    _instance.spellingCorrection = _reader.readBool();
                    break;
                case 2:
                    _instance.normalize = _reader.readBool();
                    break;
                case 3:
                    _instance.config = new PostProcessing();
                    _reader.readMessage(_instance.config, PostProcessing.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        PostProcessingOptions.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.spellingCorrection) {
            _writer.writeBool(1, _instance.spellingCorrection);
        }
        if (_instance.normalize) {
            _writer.writeBool(2, _instance.normalize);
        }
        if (_instance.config) {
            _writer.writeMessage(3, _instance.config, PostProcessing.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PostProcessingOptions to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.spellingCorrection = _value.spellingCorrection;
        this.normalize = _value.normalize;
        this.config = _value.config ? new PostProcessing(_value.config) : undefined;
        PostProcessingOptions.refineValues(this);
    }
    get spellingCorrection() {
        return this._spellingCorrection;
    }
    set spellingCorrection(value) {
        this._spellingCorrection = value;
    }
    get normalize() {
        return this._normalize;
    }
    set normalize(value) {
        this._normalize = value;
    }
    get config() {
        return this._config;
    }
    set config(value) {
        this._config = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        PostProcessingOptions.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            spellingCorrection: this.spellingCorrection,
            normalize: this.normalize,
            config: this.config ? this.config.toObject() : undefined
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
            spellingCorrection: this.spellingCorrection,
            normalize: this.normalize,
            config: this.config ? this.config.toProtobufJSON(options) : null
        };
    }
}
/**
 * Message implementation for ondewo.s2t.Transcription
 */
class Transcription {
    static { this.id = 'ondewo.s2t.Transcription'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Transcription();
        Transcription.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.transcription = _instance.transcription || '';
        _instance.confidenceScore = _instance.confidenceScore || 0;
        _instance.words = _instance.words || [];
        _instance.alternatives = _instance.alternatives || [];
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
                    _instance.confidenceScore = _reader.readFloat();
                    break;
                case 3:
                    const messageInitializer3 = new WordDetail();
                    _reader.readMessage(messageInitializer3, WordDetail.deserializeBinaryFromReader);
                    (_instance.words = _instance.words || []).push(messageInitializer3);
                    break;
                case 4:
                    const messageInitializer4 = new TranscriptionAlternative();
                    _reader.readMessage(messageInitializer4, TranscriptionAlternative.deserializeBinaryFromReader);
                    (_instance.alternatives = _instance.alternatives || []).push(messageInitializer4);
                    break;
                default:
                    _reader.skipField();
            }
        }
        Transcription.refineValues(_instance);
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
        if (_instance.confidenceScore) {
            _writer.writeFloat(2, _instance.confidenceScore);
        }
        if (_instance.words && _instance.words.length) {
            _writer.writeRepeatedMessage(3, _instance.words, WordDetail.serializeBinaryToWriter);
        }
        if (_instance.alternatives && _instance.alternatives.length) {
            _writer.writeRepeatedMessage(4, _instance.alternatives, TranscriptionAlternative.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Transcription to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.transcription = _value.transcription;
        this.confidenceScore = _value.confidenceScore;
        this.words = (_value.words || []).map(m => new WordDetail(m));
        this.alternatives = (_value.alternatives || []).map(m => new TranscriptionAlternative(m));
        Transcription.refineValues(this);
    }
    get transcription() {
        return this._transcription;
    }
    set transcription(value) {
        this._transcription = value;
    }
    get confidenceScore() {
        return this._confidenceScore;
    }
    set confidenceScore(value) {
        this._confidenceScore = value;
    }
    get words() {
        return this._words;
    }
    set words(value) {
        this._words = value;
    }
    get alternatives() {
        return this._alternatives;
    }
    set alternatives(value) {
        this._alternatives = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Transcription.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            transcription: this.transcription,
            confidenceScore: this.confidenceScore,
            words: (this.words || []).map(m => m.toObject()),
            alternatives: (this.alternatives || []).map(m => m.toObject())
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
            confidenceScore: this.confidenceScore,
            words: (this.words || []).map(m => m.toProtobufJSON(options)),
            alternatives: (this.alternatives || []).map(m => m.toProtobufJSON(options))
        };
    }
}
/**
 * Message implementation for ondewo.s2t.TranscriptionAlternative
 */
class TranscriptionAlternative {
    static { this.id = 'ondewo.s2t.TranscriptionAlternative'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new TranscriptionAlternative();
        TranscriptionAlternative.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.transcript = _instance.transcript || '';
        _instance.confidence = _instance.confidence || 0;
        _instance.words = _instance.words || [];
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
                    _instance.transcript = _reader.readString();
                    break;
                case 2:
                    _instance.confidence = _reader.readFloat();
                    break;
                case 3:
                    const messageInitializer3 = new WordDetail();
                    _reader.readMessage(messageInitializer3, WordDetail.deserializeBinaryFromReader);
                    (_instance.words = _instance.words || []).push(messageInitializer3);
                    break;
                default:
                    _reader.skipField();
            }
        }
        TranscriptionAlternative.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.transcript) {
            _writer.writeString(1, _instance.transcript);
        }
        if (_instance.confidence) {
            _writer.writeFloat(2, _instance.confidence);
        }
        if (_instance.words && _instance.words.length) {
            _writer.writeRepeatedMessage(3, _instance.words, WordDetail.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscriptionAlternative to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.transcript = _value.transcript;
        this.confidence = _value.confidence;
        this.words = (_value.words || []).map(m => new WordDetail(m));
        TranscriptionAlternative.refineValues(this);
    }
    get transcript() {
        return this._transcript;
    }
    set transcript(value) {
        this._transcript = value;
    }
    get confidence() {
        return this._confidence;
    }
    set confidence(value) {
        this._confidence = value;
    }
    get words() {
        return this._words;
    }
    set words(value) {
        this._words = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        TranscriptionAlternative.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            transcript: this.transcript,
            confidence: this.confidence,
            words: (this.words || []).map(m => m.toObject())
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
            transcript: this.transcript,
            confidence: this.confidence,
            words: (this.words || []).map(m => m.toProtobufJSON(options))
        };
    }
}
/**
 * Message implementation for ondewo.s2t.WordDetail
 */
class WordDetail {
    static { this.id = 'ondewo.s2t.WordDetail'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new WordDetail();
        WordDetail.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.startTime = _instance.startTime || 0;
        _instance.endTime = _instance.endTime || 0;
        _instance.word = _instance.word || '';
        _instance.confidence = _instance.confidence || 0;
        _instance.wordAlternatives = _instance.wordAlternatives || [];
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
                    _instance.startTime = _reader.readFloat();
                    break;
                case 2:
                    _instance.endTime = _reader.readFloat();
                    break;
                case 3:
                    _instance.word = _reader.readString();
                    break;
                case 4:
                    _instance.confidence = _reader.readFloat();
                    break;
                case 5:
                    const messageInitializer5 = new WordAlternative();
                    _reader.readMessage(messageInitializer5, WordAlternative.deserializeBinaryFromReader);
                    (_instance.wordAlternatives = _instance.wordAlternatives || []).push(messageInitializer5);
                    break;
                default:
                    _reader.skipField();
            }
        }
        WordDetail.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.startTime) {
            _writer.writeFloat(1, _instance.startTime);
        }
        if (_instance.endTime) {
            _writer.writeFloat(2, _instance.endTime);
        }
        if (_instance.word) {
            _writer.writeString(3, _instance.word);
        }
        if (_instance.confidence) {
            _writer.writeFloat(4, _instance.confidence);
        }
        if (_instance.wordAlternatives && _instance.wordAlternatives.length) {
            _writer.writeRepeatedMessage(5, _instance.wordAlternatives, WordAlternative.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of WordDetail to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.startTime = _value.startTime;
        this.endTime = _value.endTime;
        this.word = _value.word;
        this.confidence = _value.confidence;
        this.wordAlternatives = (_value.wordAlternatives || []).map(m => new WordAlternative(m));
        WordDetail.refineValues(this);
    }
    get startTime() {
        return this._startTime;
    }
    set startTime(value) {
        this._startTime = value;
    }
    get endTime() {
        return this._endTime;
    }
    set endTime(value) {
        this._endTime = value;
    }
    get word() {
        return this._word;
    }
    set word(value) {
        this._word = value;
    }
    get confidence() {
        return this._confidence;
    }
    set confidence(value) {
        this._confidence = value;
    }
    get wordAlternatives() {
        return this._wordAlternatives;
    }
    set wordAlternatives(value) {
        this._wordAlternatives = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        WordDetail.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            startTime: this.startTime,
            endTime: this.endTime,
            word: this.word,
            confidence: this.confidence,
            wordAlternatives: (this.wordAlternatives || []).map(m => m.toObject())
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
            startTime: this.startTime,
            endTime: this.endTime,
            word: this.word,
            confidence: this.confidence,
            wordAlternatives: (this.wordAlternatives || []).map(m => m.toProtobufJSON(options))
        };
    }
}
/**
 * Message implementation for ondewo.s2t.WordAlternative
 */
class WordAlternative {
    static { this.id = 'ondewo.s2t.WordAlternative'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new WordAlternative();
        WordAlternative.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.word = _instance.word || '';
        _instance.confidence = _instance.confidence || 0;
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
                    _instance.confidence = _reader.readFloat();
                    break;
                default:
                    _reader.skipField();
            }
        }
        WordAlternative.refineValues(_instance);
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
        if (_instance.confidence) {
            _writer.writeFloat(2, _instance.confidence);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of WordAlternative to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.word = _value.word;
        this.confidence = _value.confidence;
        WordAlternative.refineValues(this);
    }
    get word() {
        return this._word;
    }
    set word(value) {
        this._word = value;
    }
    get confidence() {
        return this._confidence;
    }
    set confidence(value) {
        this._confidence = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        WordAlternative.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            word: this.word,
            confidence: this.confidence
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
            confidence: this.confidence
        };
    }
}
/**
 * Message implementation for ondewo.s2t.TranscribeStreamRequest
 */
class TranscribeStreamRequest {
    static { this.id = 'ondewo.s2t.TranscribeStreamRequest'; }
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
        _instance.audioChunk = _instance.audioChunk || new Uint8Array();
        _instance.endOfStream = _instance.endOfStream || false;
        _instance.config = _instance.config || undefined;
        _instance.muteAudio = _instance.muteAudio || false;
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
                    _instance.audioChunk = _reader.readBytes();
                    break;
                case 2:
                    _instance.endOfStream = _reader.readBool();
                    break;
                case 3:
                    _instance.config = new TranscribeRequestConfig();
                    _reader.readMessage(_instance.config, TranscribeRequestConfig.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.muteAudio = _reader.readBool();
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
        if (_instance.audioChunk && _instance.audioChunk.length) {
            _writer.writeBytes(1, _instance.audioChunk);
        }
        if (_instance.endOfStream) {
            _writer.writeBool(2, _instance.endOfStream);
        }
        if (_instance.config) {
            _writer.writeMessage(3, _instance.config, TranscribeRequestConfig.serializeBinaryToWriter);
        }
        if (_instance.muteAudio) {
            _writer.writeBool(4, _instance.muteAudio);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscribeStreamRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.audioChunk = _value.audioChunk;
        this.endOfStream = _value.endOfStream;
        this.config = _value.config
            ? new TranscribeRequestConfig(_value.config)
            : undefined;
        this.muteAudio = _value.muteAudio;
        TranscribeStreamRequest.refineValues(this);
    }
    get audioChunk() {
        return this._audioChunk;
    }
    set audioChunk(value) {
        this._audioChunk = value;
    }
    get endOfStream() {
        return this._endOfStream;
    }
    set endOfStream(value) {
        this._endOfStream = value;
    }
    get config() {
        return this._config;
    }
    set config(value) {
        this._config = value;
    }
    get muteAudio() {
        return this._muteAudio;
    }
    set muteAudio(value) {
        this._muteAudio = value;
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
            audioChunk: this.audioChunk
                ? this.audioChunk.subarray(0)
                : new Uint8Array(),
            endOfStream: this.endOfStream,
            config: this.config ? this.config.toObject() : undefined,
            muteAudio: this.muteAudio
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
            audioChunk: this.audioChunk ? uint8ArrayToBase64(this.audioChunk) : '',
            endOfStream: this.endOfStream,
            config: this.config ? this.config.toProtobufJSON(options) : null,
            muteAudio: this.muteAudio
        };
    }
}
/**
 * Message implementation for ondewo.s2t.TranscribeStreamResponse
 */
class TranscribeStreamResponse {
    static { this.id = 'ondewo.s2t.TranscribeStreamResponse'; }
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
        _instance.transcriptions = _instance.transcriptions || [];
        _instance.time = _instance.time || 0;
        _instance.final = _instance.final || false;
        _instance.returnAudio = _instance.returnAudio || false;
        _instance.audio = _instance.audio || new Uint8Array();
        _instance.utteranceStart = _instance.utteranceStart || false;
        _instance.audioUuid = _instance.audioUuid || '';
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
                    const messageInitializer1 = new Transcription();
                    _reader.readMessage(messageInitializer1, Transcription.deserializeBinaryFromReader);
                    (_instance.transcriptions = _instance.transcriptions || []).push(messageInitializer1);
                    break;
                case 2:
                    _instance.time = _reader.readFloat();
                    break;
                case 3:
                    _instance.final = _reader.readBool();
                    break;
                case 4:
                    _instance.returnAudio = _reader.readBool();
                    break;
                case 5:
                    _instance.audio = _reader.readBytes();
                    break;
                case 6:
                    _instance.utteranceStart = _reader.readBool();
                    break;
                case 7:
                    _instance.audioUuid = _reader.readString();
                    break;
                case 8:
                    _instance.config = new TranscribeRequestConfig();
                    _reader.readMessage(_instance.config, TranscribeRequestConfig.deserializeBinaryFromReader);
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
        if (_instance.transcriptions && _instance.transcriptions.length) {
            _writer.writeRepeatedMessage(1, _instance.transcriptions, Transcription.serializeBinaryToWriter);
        }
        if (_instance.time) {
            _writer.writeFloat(2, _instance.time);
        }
        if (_instance.final) {
            _writer.writeBool(3, _instance.final);
        }
        if (_instance.returnAudio) {
            _writer.writeBool(4, _instance.returnAudio);
        }
        if (_instance.audio && _instance.audio.length) {
            _writer.writeBytes(5, _instance.audio);
        }
        if (_instance.utteranceStart) {
            _writer.writeBool(6, _instance.utteranceStart);
        }
        if (_instance.audioUuid) {
            _writer.writeString(7, _instance.audioUuid);
        }
        if (_instance.config) {
            _writer.writeMessage(8, _instance.config, TranscribeRequestConfig.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscribeStreamResponse to deeply clone from
     */
    constructor(_value) {
        this._oneofConfig = TranscribeStreamResponse.OneofConfigCase.none;
        _value = _value || {};
        this.transcriptions = (_value.transcriptions || []).map(m => new Transcription(m));
        this.time = _value.time;
        this.final = _value.final;
        this.returnAudio = _value.returnAudio;
        this.audio = _value.audio;
        this.utteranceStart = _value.utteranceStart;
        this.audioUuid = _value.audioUuid;
        this.config = _value.config
            ? new TranscribeRequestConfig(_value.config)
            : undefined;
        TranscribeStreamResponse.refineValues(this);
    }
    get transcriptions() {
        return this._transcriptions;
    }
    set transcriptions(value) {
        this._transcriptions = value;
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
    get returnAudio() {
        return this._returnAudio;
    }
    set returnAudio(value) {
        this._returnAudio = value;
    }
    get audio() {
        return this._audio;
    }
    set audio(value) {
        this._audio = value;
    }
    get utteranceStart() {
        return this._utteranceStart;
    }
    set utteranceStart(value) {
        this._utteranceStart = value;
    }
    get audioUuid() {
        return this._audioUuid;
    }
    set audioUuid(value) {
        this._audioUuid = value;
    }
    get config() {
        return this._config;
    }
    set config(value) {
        if (value !== undefined && value !== null) {
            this._oneofConfig = TranscribeStreamResponse.OneofConfigCase.config;
        }
        this._config = value;
    }
    get oneofConfig() {
        return this._oneofConfig;
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
            transcriptions: (this.transcriptions || []).map(m => m.toObject()),
            time: this.time,
            final: this.final,
            returnAudio: this.returnAudio,
            audio: this.audio ? this.audio.subarray(0) : new Uint8Array(),
            utteranceStart: this.utteranceStart,
            audioUuid: this.audioUuid,
            config: this.config ? this.config.toObject() : undefined
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
            transcriptions: (this.transcriptions || []).map(m => m.toProtobufJSON(options)),
            time: this.time,
            final: this.final,
            returnAudio: this.returnAudio,
            audio: this.audio ? uint8ArrayToBase64(this.audio) : '',
            utteranceStart: this.utteranceStart,
            audioUuid: this.audioUuid,
            config: this.config ? this.config.toProtobufJSON(options) : null
        };
    }
}
(function (TranscribeStreamResponse) {
    let OneofConfigCase;
    (function (OneofConfigCase) {
        OneofConfigCase[OneofConfigCase["none"] = 0] = "none";
        OneofConfigCase[OneofConfigCase["config"] = 1] = "config";
    })(OneofConfigCase = TranscribeStreamResponse.OneofConfigCase || (TranscribeStreamResponse.OneofConfigCase = {}));
})(TranscribeStreamResponse || (TranscribeStreamResponse = {}));
/**
 * Message implementation for ondewo.s2t.TranscribeFileRequest
 */
class TranscribeFileRequest {
    static { this.id = 'ondewo.s2t.TranscribeFileRequest'; }
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
        _instance.audioFile = _instance.audioFile || new Uint8Array();
        _instance.config = _instance.config || undefined;
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
                    _instance.audioFile = _reader.readBytes();
                    break;
                case 2:
                    _instance.config = new TranscribeRequestConfig();
                    _reader.readMessage(_instance.config, TranscribeRequestConfig.deserializeBinaryFromReader);
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
        if (_instance.audioFile && _instance.audioFile.length) {
            _writer.writeBytes(1, _instance.audioFile);
        }
        if (_instance.config) {
            _writer.writeMessage(2, _instance.config, TranscribeRequestConfig.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscribeFileRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.audioFile = _value.audioFile;
        this.config = _value.config
            ? new TranscribeRequestConfig(_value.config)
            : undefined;
        TranscribeFileRequest.refineValues(this);
    }
    get audioFile() {
        return this._audioFile;
    }
    set audioFile(value) {
        this._audioFile = value;
    }
    get config() {
        return this._config;
    }
    set config(value) {
        this._config = value;
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
            audioFile: this.audioFile ? this.audioFile.subarray(0) : new Uint8Array(),
            config: this.config ? this.config.toObject() : undefined
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
            audioFile: this.audioFile ? uint8ArrayToBase64(this.audioFile) : '',
            config: this.config ? this.config.toProtobufJSON(options) : null
        };
    }
}
/**
 * Message implementation for ondewo.s2t.TranscribeFileResponse
 */
class TranscribeFileResponse {
    static { this.id = 'ondewo.s2t.TranscribeFileResponse'; }
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
        _instance.transcriptions = _instance.transcriptions || [];
        _instance.time = _instance.time || 0;
        _instance.audioUuid = _instance.audioUuid || '';
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
                    const messageInitializer1 = new Transcription();
                    _reader.readMessage(messageInitializer1, Transcription.deserializeBinaryFromReader);
                    (_instance.transcriptions = _instance.transcriptions || []).push(messageInitializer1);
                    break;
                case 2:
                    _instance.time = _reader.readFloat();
                    break;
                case 3:
                    _instance.audioUuid = _reader.readString();
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
        if (_instance.transcriptions && _instance.transcriptions.length) {
            _writer.writeRepeatedMessage(1, _instance.transcriptions, Transcription.serializeBinaryToWriter);
        }
        if (_instance.time) {
            _writer.writeFloat(2, _instance.time);
        }
        if (_instance.audioUuid) {
            _writer.writeString(3, _instance.audioUuid);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscribeFileResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.transcriptions = (_value.transcriptions || []).map(m => new Transcription(m));
        this.time = _value.time;
        this.audioUuid = _value.audioUuid;
        TranscribeFileResponse.refineValues(this);
    }
    get transcriptions() {
        return this._transcriptions;
    }
    set transcriptions(value) {
        this._transcriptions = value;
    }
    get time() {
        return this._time;
    }
    set time(value) {
        this._time = value;
    }
    get audioUuid() {
        return this._audioUuid;
    }
    set audioUuid(value) {
        this._audioUuid = value;
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
            transcriptions: (this.transcriptions || []).map(m => m.toObject()),
            time: this.time,
            audioUuid: this.audioUuid
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
            transcriptions: (this.transcriptions || []).map(m => m.toProtobufJSON(options)),
            time: this.time,
            audioUuid: this.audioUuid
        };
    }
}
/**
 * Message implementation for ondewo.s2t.S2tPipelineId
 */
class S2tPipelineId {
    static { this.id = 'ondewo.s2t.S2tPipelineId'; }
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
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tPipelineId to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.id = _value.id;
        S2tPipelineId.refineValues(this);
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
/**
 * Message implementation for ondewo.s2t.ListS2tPipelinesRequest
 */
class ListS2tPipelinesRequest {
    static { this.id = 'ondewo.s2t.ListS2tPipelinesRequest'; }
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
        _instance.registeredOnly = _instance.registeredOnly || false;
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
                case 4:
                    _instance.registeredOnly = _reader.readBool();
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
        if (_instance.registeredOnly) {
            _writer.writeBool(4, _instance.registeredOnly);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tPipelinesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.languages = (_value.languages || []).slice();
        this.pipelineOwners = (_value.pipelineOwners || []).slice();
        this.domains = (_value.domains || []).slice();
        this.registeredOnly = _value.registeredOnly;
        ListS2tPipelinesRequest.refineValues(this);
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
    get registeredOnly() {
        return this._registeredOnly;
    }
    set registeredOnly(value) {
        this._registeredOnly = value;
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
            domains: (this.domains || []).slice(),
            registeredOnly: this.registeredOnly
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
            domains: (this.domains || []).slice(),
            registeredOnly: this.registeredOnly
        };
    }
}
/**
 * Message implementation for ondewo.s2t.ListS2tPipelinesResponse
 */
class ListS2tPipelinesResponse {
    static { this.id = 'ondewo.s2t.ListS2tPipelinesResponse'; }
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
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tPipelinesResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.pipelineConfigs = (_value.pipelineConfigs || []).map(m => new Speech2TextConfig(m));
        ListS2tPipelinesResponse.refineValues(this);
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
/**
 * Message implementation for ondewo.s2t.ListS2tLanguagesRequest
 */
class ListS2tLanguagesRequest {
    static { this.id = 'ondewo.s2t.ListS2tLanguagesRequest'; }
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
/**
 * Message implementation for ondewo.s2t.ListS2tLanguagesResponse
 */
class ListS2tLanguagesResponse {
    static { this.id = 'ondewo.s2t.ListS2tLanguagesResponse'; }
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
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tLanguagesResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.languages = (_value.languages || []).slice();
        ListS2tLanguagesResponse.refineValues(this);
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
/**
 * Message implementation for ondewo.s2t.ListS2tDomainsRequest
 */
class ListS2tDomainsRequest {
    static { this.id = 'ondewo.s2t.ListS2tDomainsRequest'; }
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
/**
 * Message implementation for ondewo.s2t.ListS2tDomainsResponse
 */
class ListS2tDomainsResponse {
    static { this.id = 'ondewo.s2t.ListS2tDomainsResponse'; }
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
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tDomainsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.domains = (_value.domains || []).slice();
        ListS2tDomainsResponse.refineValues(this);
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
/**
 * Message implementation for ondewo.s2t.S2TGetServiceInfoResponse
 */
class S2TGetServiceInfoResponse {
    static { this.id = 'ondewo.s2t.S2TGetServiceInfoResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new S2TGetServiceInfoResponse();
        S2TGetServiceInfoResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.version = _instance.version || '';
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
                    _instance.version = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        S2TGetServiceInfoResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.version) {
            _writer.writeString(1, _instance.version);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2TGetServiceInfoResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.version = _value.version;
        S2TGetServiceInfoResponse.refineValues(this);
    }
    get version() {
        return this._version;
    }
    set version(value) {
        this._version = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        S2TGetServiceInfoResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            version: this.version
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
            version: this.version
        };
    }
}
/**
 * Message implementation for ondewo.s2t.Speech2TextConfig
 */
class Speech2TextConfig {
    static { this.id = 'ondewo.s2t.Speech2TextConfig'; }
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
                    _instance.description = new S2TDescription();
                    _reader.readMessage(_instance.description, S2TDescription.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.active = _reader.readBool();
                    break;
                case 4:
                    _instance.inference = new S2TInference();
                    _reader.readMessage(_instance.inference, S2TInference.deserializeBinaryFromReader);
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
            _writer.writeMessage(2, _instance.description, S2TDescription.serializeBinaryToWriter);
        }
        if (_instance.active) {
            _writer.writeBool(3, _instance.active);
        }
        if (_instance.inference) {
            _writer.writeMessage(4, _instance.inference, S2TInference.serializeBinaryToWriter);
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
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Speech2TextConfig to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.id = _value.id;
        this.description = _value.description
            ? new S2TDescription(_value.description)
            : undefined;
        this.active = _value.active;
        this.inference = _value.inference
            ? new S2TInference(_value.inference)
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
/**
 * Message implementation for ondewo.s2t.S2TDescription
 */
class S2TDescription {
    static { this.id = 'ondewo.s2t.S2TDescription'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new S2TDescription();
        S2TDescription.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
        S2TDescription.refineValues(_instance);
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
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2TDescription to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.language = _value.language;
        this.pipelineOwner = _value.pipelineOwner;
        this.domain = _value.domain;
        this.comments = _value.comments;
        S2TDescription.refineValues(this);
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
        S2TDescription.serializeBinaryToWriter(this, writer);
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
/**
 * Message implementation for ondewo.s2t.S2TInference
 */
class S2TInference {
    static { this.id = 'ondewo.s2t.S2TInference'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new S2TInference();
        S2TInference.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.acousticModels = _instance.acousticModels || undefined;
        _instance.languageModels = _instance.languageModels || undefined;
        _instance.inferenceBackend = _instance.inferenceBackend || 0;
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
                    _instance.acousticModels = new AcousticModels();
                    _reader.readMessage(_instance.acousticModels, AcousticModels.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.languageModels = new LanguageModels();
                    _reader.readMessage(_instance.languageModels, LanguageModels.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.inferenceBackend = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        S2TInference.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.acousticModels) {
            _writer.writeMessage(1, _instance.acousticModels, AcousticModels.serializeBinaryToWriter);
        }
        if (_instance.languageModels) {
            _writer.writeMessage(2, _instance.languageModels, LanguageModels.serializeBinaryToWriter);
        }
        if (_instance.inferenceBackend) {
            _writer.writeEnum(3, _instance.inferenceBackend);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2TInference to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.acousticModels = _value.acousticModels
            ? new AcousticModels(_value.acousticModels)
            : undefined;
        this.languageModels = _value.languageModels
            ? new LanguageModels(_value.languageModels)
            : undefined;
        this.inferenceBackend = _value.inferenceBackend;
        S2TInference.refineValues(this);
    }
    get acousticModels() {
        return this._acousticModels;
    }
    set acousticModels(value) {
        this._acousticModels = value;
    }
    get languageModels() {
        return this._languageModels;
    }
    set languageModels(value) {
        this._languageModels = value;
    }
    get inferenceBackend() {
        return this._inferenceBackend;
    }
    set inferenceBackend(value) {
        this._inferenceBackend = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        S2TInference.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            acousticModels: this.acousticModels
                ? this.acousticModels.toObject()
                : undefined,
            languageModels: this.languageModels
                ? this.languageModels.toObject()
                : undefined,
            inferenceBackend: this.inferenceBackend
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
            acousticModels: this.acousticModels
                ? this.acousticModels.toProtobufJSON(options)
                : null,
            languageModels: this.languageModels
                ? this.languageModels.toProtobufJSON(options)
                : null,
            inferenceBackend: InferenceBackend[this.inferenceBackend === null || this.inferenceBackend === undefined
                ? 0
                : this.inferenceBackend]
        };
    }
}
/**
 * Message implementation for ondewo.s2t.AcousticModels
 */
class AcousticModels {
    static { this.id = 'ondewo.s2t.AcousticModels'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new AcousticModels();
        AcousticModels.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.type = _instance.type || '';
        _instance.wav2vec = _instance.wav2vec || undefined;
        _instance.wav2vecTriton = _instance.wav2vecTriton || undefined;
        _instance.whisper = _instance.whisper || undefined;
        _instance.whisperTriton = _instance.whisperTriton || undefined;
        _instance.s2tCloudServiceAmazon =
            _instance.s2tCloudServiceAmazon || undefined;
        _instance.s2tCloudServiceDeepgram =
            _instance.s2tCloudServiceDeepgram || undefined;
        _instance.s2tCloudServiceGoogle =
            _instance.s2tCloudServiceGoogle || undefined;
        _instance.s2tCloudServiceMicrosoft =
            _instance.s2tCloudServiceMicrosoft || undefined;
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
                    _instance.wav2vec = new Wav2Vec();
                    _reader.readMessage(_instance.wav2vec, Wav2Vec.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.wav2vecTriton = new Wav2VecTriton();
                    _reader.readMessage(_instance.wav2vecTriton, Wav2VecTriton.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.whisper = new Whisper();
                    _reader.readMessage(_instance.whisper, Whisper.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.whisperTriton = new WhisperTriton();
                    _reader.readMessage(_instance.whisperTriton, WhisperTriton.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.s2tCloudServiceAmazon = new S2tCloudServiceAmazon();
                    _reader.readMessage(_instance.s2tCloudServiceAmazon, S2tCloudServiceAmazon.deserializeBinaryFromReader);
                    break;
                case 7:
                    _instance.s2tCloudServiceDeepgram = new S2tCloudServiceDeepgram();
                    _reader.readMessage(_instance.s2tCloudServiceDeepgram, S2tCloudServiceDeepgram.deserializeBinaryFromReader);
                    break;
                case 8:
                    _instance.s2tCloudServiceGoogle = new S2tCloudServiceGoogle();
                    _reader.readMessage(_instance.s2tCloudServiceGoogle, S2tCloudServiceGoogle.deserializeBinaryFromReader);
                    break;
                case 9:
                    _instance.s2tCloudServiceMicrosoft = new S2tCloudServiceMicrosoft();
                    _reader.readMessage(_instance.s2tCloudServiceMicrosoft, S2tCloudServiceMicrosoft.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        AcousticModels.refineValues(_instance);
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
        if (_instance.wav2vec) {
            _writer.writeMessage(2, _instance.wav2vec, Wav2Vec.serializeBinaryToWriter);
        }
        if (_instance.wav2vecTriton) {
            _writer.writeMessage(3, _instance.wav2vecTriton, Wav2VecTriton.serializeBinaryToWriter);
        }
        if (_instance.whisper) {
            _writer.writeMessage(4, _instance.whisper, Whisper.serializeBinaryToWriter);
        }
        if (_instance.whisperTriton) {
            _writer.writeMessage(5, _instance.whisperTriton, WhisperTriton.serializeBinaryToWriter);
        }
        if (_instance.s2tCloudServiceAmazon) {
            _writer.writeMessage(6, _instance.s2tCloudServiceAmazon, S2tCloudServiceAmazon.serializeBinaryToWriter);
        }
        if (_instance.s2tCloudServiceDeepgram) {
            _writer.writeMessage(7, _instance.s2tCloudServiceDeepgram, S2tCloudServiceDeepgram.serializeBinaryToWriter);
        }
        if (_instance.s2tCloudServiceGoogle) {
            _writer.writeMessage(8, _instance.s2tCloudServiceGoogle, S2tCloudServiceGoogle.serializeBinaryToWriter);
        }
        if (_instance.s2tCloudServiceMicrosoft) {
            _writer.writeMessage(9, _instance.s2tCloudServiceMicrosoft, S2tCloudServiceMicrosoft.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AcousticModels to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.type = _value.type;
        this.wav2vec = _value.wav2vec ? new Wav2Vec(_value.wav2vec) : undefined;
        this.wav2vecTriton = _value.wav2vecTriton
            ? new Wav2VecTriton(_value.wav2vecTriton)
            : undefined;
        this.whisper = _value.whisper ? new Whisper(_value.whisper) : undefined;
        this.whisperTriton = _value.whisperTriton
            ? new WhisperTriton(_value.whisperTriton)
            : undefined;
        this.s2tCloudServiceAmazon = _value.s2tCloudServiceAmazon
            ? new S2tCloudServiceAmazon(_value.s2tCloudServiceAmazon)
            : undefined;
        this.s2tCloudServiceDeepgram = _value.s2tCloudServiceDeepgram
            ? new S2tCloudServiceDeepgram(_value.s2tCloudServiceDeepgram)
            : undefined;
        this.s2tCloudServiceGoogle = _value.s2tCloudServiceGoogle
            ? new S2tCloudServiceGoogle(_value.s2tCloudServiceGoogle)
            : undefined;
        this.s2tCloudServiceMicrosoft = _value.s2tCloudServiceMicrosoft
            ? new S2tCloudServiceMicrosoft(_value.s2tCloudServiceMicrosoft)
            : undefined;
        AcousticModels.refineValues(this);
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get wav2vec() {
        return this._wav2vec;
    }
    set wav2vec(value) {
        this._wav2vec = value;
    }
    get wav2vecTriton() {
        return this._wav2vecTriton;
    }
    set wav2vecTriton(value) {
        this._wav2vecTriton = value;
    }
    get whisper() {
        return this._whisper;
    }
    set whisper(value) {
        this._whisper = value;
    }
    get whisperTriton() {
        return this._whisperTriton;
    }
    set whisperTriton(value) {
        this._whisperTriton = value;
    }
    get s2tCloudServiceAmazon() {
        return this._s2tCloudServiceAmazon;
    }
    set s2tCloudServiceAmazon(value) {
        this._s2tCloudServiceAmazon = value;
    }
    get s2tCloudServiceDeepgram() {
        return this._s2tCloudServiceDeepgram;
    }
    set s2tCloudServiceDeepgram(value) {
        this._s2tCloudServiceDeepgram = value;
    }
    get s2tCloudServiceGoogle() {
        return this._s2tCloudServiceGoogle;
    }
    set s2tCloudServiceGoogle(value) {
        this._s2tCloudServiceGoogle = value;
    }
    get s2tCloudServiceMicrosoft() {
        return this._s2tCloudServiceMicrosoft;
    }
    set s2tCloudServiceMicrosoft(value) {
        this._s2tCloudServiceMicrosoft = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        AcousticModels.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            type: this.type,
            wav2vec: this.wav2vec ? this.wav2vec.toObject() : undefined,
            wav2vecTriton: this.wav2vecTriton
                ? this.wav2vecTriton.toObject()
                : undefined,
            whisper: this.whisper ? this.whisper.toObject() : undefined,
            whisperTriton: this.whisperTriton
                ? this.whisperTriton.toObject()
                : undefined,
            s2tCloudServiceAmazon: this.s2tCloudServiceAmazon
                ? this.s2tCloudServiceAmazon.toObject()
                : undefined,
            s2tCloudServiceDeepgram: this.s2tCloudServiceDeepgram
                ? this.s2tCloudServiceDeepgram.toObject()
                : undefined,
            s2tCloudServiceGoogle: this.s2tCloudServiceGoogle
                ? this.s2tCloudServiceGoogle.toObject()
                : undefined,
            s2tCloudServiceMicrosoft: this.s2tCloudServiceMicrosoft
                ? this.s2tCloudServiceMicrosoft.toObject()
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
            type: this.type,
            wav2vec: this.wav2vec ? this.wav2vec.toProtobufJSON(options) : null,
            wav2vecTriton: this.wav2vecTriton
                ? this.wav2vecTriton.toProtobufJSON(options)
                : null,
            whisper: this.whisper ? this.whisper.toProtobufJSON(options) : null,
            whisperTriton: this.whisperTriton
                ? this.whisperTriton.toProtobufJSON(options)
                : null,
            s2tCloudServiceAmazon: this.s2tCloudServiceAmazon
                ? this.s2tCloudServiceAmazon.toProtobufJSON(options)
                : null,
            s2tCloudServiceDeepgram: this.s2tCloudServiceDeepgram
                ? this.s2tCloudServiceDeepgram.toProtobufJSON(options)
                : null,
            s2tCloudServiceGoogle: this.s2tCloudServiceGoogle
                ? this.s2tCloudServiceGoogle.toProtobufJSON(options)
                : null,
            s2tCloudServiceMicrosoft: this.s2tCloudServiceMicrosoft
                ? this.s2tCloudServiceMicrosoft.toProtobufJSON(options)
                : null
        };
    }
}
/**
 * Message implementation for ondewo.s2t.S2tCloudServiceAmazon
 */
class S2tCloudServiceAmazon {
    static { this.id = 'ondewo.s2t.S2tCloudServiceAmazon'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new S2tCloudServiceAmazon();
        S2tCloudServiceAmazon.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.language = _instance.language || '';
        _instance.streamingAvailable = _instance.streamingAvailable || false;
        _instance.enablePartialResultsStabilization =
            _instance.enablePartialResultsStabilization || false;
        _instance.partialResultsStability = _instance.partialResultsStability || '';
        _instance.languageModelName = _instance.languageModelName || '';
        _instance.vocabularyName = _instance.vocabularyName || '';
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
                    _instance.streamingAvailable = _reader.readBool();
                    break;
                case 3:
                    _instance.enablePartialResultsStabilization = _reader.readBool();
                    break;
                case 4:
                    _instance.partialResultsStability = _reader.readString();
                    break;
                case 5:
                    _instance.languageModelName = _reader.readString();
                    break;
                case 6:
                    _instance.vocabularyName = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        S2tCloudServiceAmazon.refineValues(_instance);
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
        if (_instance.streamingAvailable) {
            _writer.writeBool(2, _instance.streamingAvailable);
        }
        if (_instance.enablePartialResultsStabilization) {
            _writer.writeBool(3, _instance.enablePartialResultsStabilization);
        }
        if (_instance.partialResultsStability) {
            _writer.writeString(4, _instance.partialResultsStability);
        }
        if (_instance.languageModelName) {
            _writer.writeString(5, _instance.languageModelName);
        }
        if (_instance.vocabularyName) {
            _writer.writeString(6, _instance.vocabularyName);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tCloudServiceAmazon to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.language = _value.language;
        this.streamingAvailable = _value.streamingAvailable;
        this.enablePartialResultsStabilization =
            _value.enablePartialResultsStabilization;
        this.partialResultsStability = _value.partialResultsStability;
        this.languageModelName = _value.languageModelName;
        this.vocabularyName = _value.vocabularyName;
        S2tCloudServiceAmazon.refineValues(this);
    }
    get language() {
        return this._language;
    }
    set language(value) {
        this._language = value;
    }
    get streamingAvailable() {
        return this._streamingAvailable;
    }
    set streamingAvailable(value) {
        this._streamingAvailable = value;
    }
    get enablePartialResultsStabilization() {
        return this._enablePartialResultsStabilization;
    }
    set enablePartialResultsStabilization(value) {
        this._enablePartialResultsStabilization = value;
    }
    get partialResultsStability() {
        return this._partialResultsStability;
    }
    set partialResultsStability(value) {
        this._partialResultsStability = value;
    }
    get languageModelName() {
        return this._languageModelName;
    }
    set languageModelName(value) {
        this._languageModelName = value;
    }
    get vocabularyName() {
        return this._vocabularyName;
    }
    set vocabularyName(value) {
        this._vocabularyName = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        S2tCloudServiceAmazon.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            language: this.language,
            streamingAvailable: this.streamingAvailable,
            enablePartialResultsStabilization: this.enablePartialResultsStabilization,
            partialResultsStability: this.partialResultsStability,
            languageModelName: this.languageModelName,
            vocabularyName: this.vocabularyName
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
            streamingAvailable: this.streamingAvailable,
            enablePartialResultsStabilization: this.enablePartialResultsStabilization,
            partialResultsStability: this.partialResultsStability,
            languageModelName: this.languageModelName,
            vocabularyName: this.vocabularyName
        };
    }
}
/**
 * Message implementation for ondewo.s2t.S2tCloudServiceDeepgram
 */
class S2tCloudServiceDeepgram {
    static { this.id = 'ondewo.s2t.S2tCloudServiceDeepgram'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new S2tCloudServiceDeepgram();
        S2tCloudServiceDeepgram.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.modelName = _instance.modelName || '';
        _instance.language = _instance.language || '';
        _instance.punctuate = _instance.punctuate || false;
        _instance.smartFormat = _instance.smartFormat || false;
        _instance.numerals = _instance.numerals || false;
        _instance.measurements = _instance.measurements || false;
        _instance.dictation = _instance.dictation || false;
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
                    _instance.modelName = _reader.readString();
                    break;
                case 2:
                    _instance.language = _reader.readString();
                    break;
                case 3:
                    _instance.punctuate = _reader.readBool();
                    break;
                case 4:
                    _instance.smartFormat = _reader.readBool();
                    break;
                case 5:
                    _instance.numerals = _reader.readBool();
                    break;
                case 6:
                    _instance.measurements = _reader.readBool();
                    break;
                case 7:
                    _instance.dictation = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        S2tCloudServiceDeepgram.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.modelName) {
            _writer.writeString(1, _instance.modelName);
        }
        if (_instance.language) {
            _writer.writeString(2, _instance.language);
        }
        if (_instance.punctuate) {
            _writer.writeBool(3, _instance.punctuate);
        }
        if (_instance.smartFormat) {
            _writer.writeBool(4, _instance.smartFormat);
        }
        if (_instance.numerals) {
            _writer.writeBool(5, _instance.numerals);
        }
        if (_instance.measurements) {
            _writer.writeBool(6, _instance.measurements);
        }
        if (_instance.dictation) {
            _writer.writeBool(7, _instance.dictation);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tCloudServiceDeepgram to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.modelName = _value.modelName;
        this.language = _value.language;
        this.punctuate = _value.punctuate;
        this.smartFormat = _value.smartFormat;
        this.numerals = _value.numerals;
        this.measurements = _value.measurements;
        this.dictation = _value.dictation;
        S2tCloudServiceDeepgram.refineValues(this);
    }
    get modelName() {
        return this._modelName;
    }
    set modelName(value) {
        this._modelName = value;
    }
    get language() {
        return this._language;
    }
    set language(value) {
        this._language = value;
    }
    get punctuate() {
        return this._punctuate;
    }
    set punctuate(value) {
        this._punctuate = value;
    }
    get smartFormat() {
        return this._smartFormat;
    }
    set smartFormat(value) {
        this._smartFormat = value;
    }
    get numerals() {
        return this._numerals;
    }
    set numerals(value) {
        this._numerals = value;
    }
    get measurements() {
        return this._measurements;
    }
    set measurements(value) {
        this._measurements = value;
    }
    get dictation() {
        return this._dictation;
    }
    set dictation(value) {
        this._dictation = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        S2tCloudServiceDeepgram.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            modelName: this.modelName,
            language: this.language,
            punctuate: this.punctuate,
            smartFormat: this.smartFormat,
            numerals: this.numerals,
            measurements: this.measurements,
            dictation: this.dictation
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
            modelName: this.modelName,
            language: this.language,
            punctuate: this.punctuate,
            smartFormat: this.smartFormat,
            numerals: this.numerals,
            measurements: this.measurements,
            dictation: this.dictation
        };
    }
}
/**
 * Message implementation for ondewo.s2t.S2tCloudServiceGoogle
 */
class S2tCloudServiceGoogle {
    static { this.id = 'ondewo.s2t.S2tCloudServiceGoogle'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new S2tCloudServiceGoogle();
        S2tCloudServiceGoogle.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.modelName = _instance.modelName || '';
        _instance.language = _instance.language || '';
        _instance.enableAutomaticPunctuation =
            _instance.enableAutomaticPunctuation || false;
        _instance.enableWordTimeOffsets = _instance.enableWordTimeOffsets || false;
        _instance.enableWordConfidence = _instance.enableWordConfidence || false;
        _instance.transcriptNormalization =
            _instance.transcriptNormalization || false;
        _instance.maxAlternatives = _instance.maxAlternatives || 0;
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
                    _instance.modelName = _reader.readString();
                    break;
                case 2:
                    _instance.language = _reader.readString();
                    break;
                case 3:
                    _instance.enableAutomaticPunctuation = _reader.readBool();
                    break;
                case 4:
                    _instance.enableWordTimeOffsets = _reader.readBool();
                    break;
                case 5:
                    _instance.enableWordConfidence = _reader.readBool();
                    break;
                case 6:
                    _instance.transcriptNormalization = _reader.readBool();
                    break;
                case 7:
                    _instance.maxAlternatives = _reader.readInt32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        S2tCloudServiceGoogle.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.modelName) {
            _writer.writeString(1, _instance.modelName);
        }
        if (_instance.language) {
            _writer.writeString(2, _instance.language);
        }
        if (_instance.enableAutomaticPunctuation) {
            _writer.writeBool(3, _instance.enableAutomaticPunctuation);
        }
        if (_instance.enableWordTimeOffsets) {
            _writer.writeBool(4, _instance.enableWordTimeOffsets);
        }
        if (_instance.enableWordConfidence) {
            _writer.writeBool(5, _instance.enableWordConfidence);
        }
        if (_instance.transcriptNormalization) {
            _writer.writeBool(6, _instance.transcriptNormalization);
        }
        if (_instance.maxAlternatives) {
            _writer.writeInt32(7, _instance.maxAlternatives);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tCloudServiceGoogle to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.modelName = _value.modelName;
        this.language = _value.language;
        this.enableAutomaticPunctuation = _value.enableAutomaticPunctuation;
        this.enableWordTimeOffsets = _value.enableWordTimeOffsets;
        this.enableWordConfidence = _value.enableWordConfidence;
        this.transcriptNormalization = _value.transcriptNormalization;
        this.maxAlternatives = _value.maxAlternatives;
        S2tCloudServiceGoogle.refineValues(this);
    }
    get modelName() {
        return this._modelName;
    }
    set modelName(value) {
        this._modelName = value;
    }
    get language() {
        return this._language;
    }
    set language(value) {
        this._language = value;
    }
    get enableAutomaticPunctuation() {
        return this._enableAutomaticPunctuation;
    }
    set enableAutomaticPunctuation(value) {
        this._enableAutomaticPunctuation = value;
    }
    get enableWordTimeOffsets() {
        return this._enableWordTimeOffsets;
    }
    set enableWordTimeOffsets(value) {
        this._enableWordTimeOffsets = value;
    }
    get enableWordConfidence() {
        return this._enableWordConfidence;
    }
    set enableWordConfidence(value) {
        this._enableWordConfidence = value;
    }
    get transcriptNormalization() {
        return this._transcriptNormalization;
    }
    set transcriptNormalization(value) {
        this._transcriptNormalization = value;
    }
    get maxAlternatives() {
        return this._maxAlternatives;
    }
    set maxAlternatives(value) {
        this._maxAlternatives = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        S2tCloudServiceGoogle.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            modelName: this.modelName,
            language: this.language,
            enableAutomaticPunctuation: this.enableAutomaticPunctuation,
            enableWordTimeOffsets: this.enableWordTimeOffsets,
            enableWordConfidence: this.enableWordConfidence,
            transcriptNormalization: this.transcriptNormalization,
            maxAlternatives: this.maxAlternatives
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
            modelName: this.modelName,
            language: this.language,
            enableAutomaticPunctuation: this.enableAutomaticPunctuation,
            enableWordTimeOffsets: this.enableWordTimeOffsets,
            enableWordConfidence: this.enableWordConfidence,
            transcriptNormalization: this.transcriptNormalization,
            maxAlternatives: this.maxAlternatives
        };
    }
}
/**
 * Message implementation for ondewo.s2t.S2tCloudServiceMicrosoft
 */
class S2tCloudServiceMicrosoft {
    static { this.id = 'ondewo.s2t.S2tCloudServiceMicrosoft'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new S2tCloudServiceMicrosoft();
        S2tCloudServiceMicrosoft.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.language = _instance.language || '';
        _instance.useFastTranscriptionApi =
            _instance.useFastTranscriptionApi || false;
        _instance.useDetailedOutputFormat =
            _instance.useDetailedOutputFormat || false;
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
                    _instance.useFastTranscriptionApi = _reader.readBool();
                    break;
                case 3:
                    _instance.useDetailedOutputFormat = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        S2tCloudServiceMicrosoft.refineValues(_instance);
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
        if (_instance.useFastTranscriptionApi) {
            _writer.writeBool(2, _instance.useFastTranscriptionApi);
        }
        if (_instance.useDetailedOutputFormat) {
            _writer.writeBool(3, _instance.useDetailedOutputFormat);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tCloudServiceMicrosoft to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.language = _value.language;
        this.useFastTranscriptionApi = _value.useFastTranscriptionApi;
        this.useDetailedOutputFormat = _value.useDetailedOutputFormat;
        S2tCloudServiceMicrosoft.refineValues(this);
    }
    get language() {
        return this._language;
    }
    set language(value) {
        this._language = value;
    }
    get useFastTranscriptionApi() {
        return this._useFastTranscriptionApi;
    }
    set useFastTranscriptionApi(value) {
        this._useFastTranscriptionApi = value;
    }
    get useDetailedOutputFormat() {
        return this._useDetailedOutputFormat;
    }
    set useDetailedOutputFormat(value) {
        this._useDetailedOutputFormat = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        S2tCloudServiceMicrosoft.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            language: this.language,
            useFastTranscriptionApi: this.useFastTranscriptionApi,
            useDetailedOutputFormat: this.useDetailedOutputFormat
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
            useFastTranscriptionApi: this.useFastTranscriptionApi,
            useDetailedOutputFormat: this.useDetailedOutputFormat
        };
    }
}
/**
 * Message implementation for ondewo.s2t.Whisper
 */
class Whisper {
    static { this.id = 'ondewo.s2t.Whisper'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Whisper();
        Whisper.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.modelPath = _instance.modelPath || '';
        _instance.useGpu = _instance.useGpu || false;
        _instance.language = _instance.language || '';
        _instance.task = _instance.task || '';
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
                case 3:
                    _instance.language = _reader.readString();
                    break;
                case 4:
                    _instance.task = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Whisper.refineValues(_instance);
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
        if (_instance.language) {
            _writer.writeString(3, _instance.language);
        }
        if (_instance.task) {
            _writer.writeString(4, _instance.task);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Whisper to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.modelPath = _value.modelPath;
        this.useGpu = _value.useGpu;
        this.language = _value.language;
        this.task = _value.task;
        Whisper.refineValues(this);
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
    get language() {
        return this._language;
    }
    set language(value) {
        this._language = value;
    }
    get task() {
        return this._task;
    }
    set task(value) {
        this._task = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Whisper.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            modelPath: this.modelPath,
            useGpu: this.useGpu,
            language: this.language,
            task: this.task
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
            useGpu: this.useGpu,
            language: this.language,
            task: this.task
        };
    }
}
/**
 * Message implementation for ondewo.s2t.WhisperTriton
 */
class WhisperTriton {
    static { this.id = 'ondewo.s2t.WhisperTriton'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new WhisperTriton();
        WhisperTriton.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.processorPath = _instance.processorPath || '';
        _instance.tritonModelName = _instance.tritonModelName || '';
        _instance.tritonModelVersion = _instance.tritonModelVersion || '';
        _instance.checkStatusTimeout = _instance.checkStatusTimeout || '0';
        _instance.language = _instance.language || '';
        _instance.task = _instance.task || '';
        _instance.tritonServerHost = _instance.tritonServerHost || '';
        _instance.tritonServerPort = _instance.tritonServerPort || '0';
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
                    _instance.processorPath = _reader.readString();
                    break;
                case 2:
                    _instance.tritonModelName = _reader.readString();
                    break;
                case 3:
                    _instance.tritonModelVersion = _reader.readString();
                    break;
                case 4:
                    _instance.checkStatusTimeout = _reader.readInt64String();
                    break;
                case 5:
                    _instance.language = _reader.readString();
                    break;
                case 6:
                    _instance.task = _reader.readString();
                    break;
                case 7:
                    _instance.tritonServerHost = _reader.readString();
                    break;
                case 8:
                    _instance.tritonServerPort = _reader.readInt64String();
                    break;
                default:
                    _reader.skipField();
            }
        }
        WhisperTriton.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.processorPath) {
            _writer.writeString(1, _instance.processorPath);
        }
        if (_instance.tritonModelName) {
            _writer.writeString(2, _instance.tritonModelName);
        }
        if (_instance.tritonModelVersion) {
            _writer.writeString(3, _instance.tritonModelVersion);
        }
        if (_instance.checkStatusTimeout) {
            _writer.writeInt64String(4, _instance.checkStatusTimeout);
        }
        if (_instance.language) {
            _writer.writeString(5, _instance.language);
        }
        if (_instance.task) {
            _writer.writeString(6, _instance.task);
        }
        if (_instance.tritonServerHost) {
            _writer.writeString(7, _instance.tritonServerHost);
        }
        if (_instance.tritonServerPort) {
            _writer.writeInt64String(8, _instance.tritonServerPort);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of WhisperTriton to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.processorPath = _value.processorPath;
        this.tritonModelName = _value.tritonModelName;
        this.tritonModelVersion = _value.tritonModelVersion;
        this.checkStatusTimeout = _value.checkStatusTimeout;
        this.language = _value.language;
        this.task = _value.task;
        this.tritonServerHost = _value.tritonServerHost;
        this.tritonServerPort = _value.tritonServerPort;
        WhisperTriton.refineValues(this);
    }
    get processorPath() {
        return this._processorPath;
    }
    set processorPath(value) {
        this._processorPath = value;
    }
    get tritonModelName() {
        return this._tritonModelName;
    }
    set tritonModelName(value) {
        this._tritonModelName = value;
    }
    get tritonModelVersion() {
        return this._tritonModelVersion;
    }
    set tritonModelVersion(value) {
        this._tritonModelVersion = value;
    }
    get checkStatusTimeout() {
        return this._checkStatusTimeout;
    }
    set checkStatusTimeout(value) {
        this._checkStatusTimeout = value;
    }
    get language() {
        return this._language;
    }
    set language(value) {
        this._language = value;
    }
    get task() {
        return this._task;
    }
    set task(value) {
        this._task = value;
    }
    get tritonServerHost() {
        return this._tritonServerHost;
    }
    set tritonServerHost(value) {
        this._tritonServerHost = value;
    }
    get tritonServerPort() {
        return this._tritonServerPort;
    }
    set tritonServerPort(value) {
        this._tritonServerPort = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        WhisperTriton.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            processorPath: this.processorPath,
            tritonModelName: this.tritonModelName,
            tritonModelVersion: this.tritonModelVersion,
            checkStatusTimeout: this.checkStatusTimeout,
            language: this.language,
            task: this.task,
            tritonServerHost: this.tritonServerHost,
            tritonServerPort: this.tritonServerPort
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
            processorPath: this.processorPath,
            tritonModelName: this.tritonModelName,
            tritonModelVersion: this.tritonModelVersion,
            checkStatusTimeout: this.checkStatusTimeout,
            language: this.language,
            task: this.task,
            tritonServerHost: this.tritonServerHost,
            tritonServerPort: this.tritonServerPort
        };
    }
}
/**
 * Message implementation for ondewo.s2t.Wav2Vec
 */
class Wav2Vec {
    static { this.id = 'ondewo.s2t.Wav2Vec'; }
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
/**
 * Message implementation for ondewo.s2t.Wav2VecTriton
 */
class Wav2VecTriton {
    static { this.id = 'ondewo.s2t.Wav2VecTriton'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Wav2VecTriton();
        Wav2VecTriton.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.processorPath = _instance.processorPath || '';
        _instance.tritonModelName = _instance.tritonModelName || '';
        _instance.tritonModelVersion = _instance.tritonModelVersion || '';
        _instance.checkStatusTimeout = _instance.checkStatusTimeout || '0';
        _instance.tritonServerHost = _instance.tritonServerHost || '';
        _instance.tritonServerPort = _instance.tritonServerPort || '0';
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
                    _instance.processorPath = _reader.readString();
                    break;
                case 2:
                    _instance.tritonModelName = _reader.readString();
                    break;
                case 3:
                    _instance.tritonModelVersion = _reader.readString();
                    break;
                case 4:
                    _instance.checkStatusTimeout = _reader.readInt64String();
                    break;
                case 5:
                    _instance.tritonServerHost = _reader.readString();
                    break;
                case 6:
                    _instance.tritonServerPort = _reader.readInt64String();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Wav2VecTriton.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.processorPath) {
            _writer.writeString(1, _instance.processorPath);
        }
        if (_instance.tritonModelName) {
            _writer.writeString(2, _instance.tritonModelName);
        }
        if (_instance.tritonModelVersion) {
            _writer.writeString(3, _instance.tritonModelVersion);
        }
        if (_instance.checkStatusTimeout) {
            _writer.writeInt64String(4, _instance.checkStatusTimeout);
        }
        if (_instance.tritonServerHost) {
            _writer.writeString(5, _instance.tritonServerHost);
        }
        if (_instance.tritonServerPort) {
            _writer.writeInt64String(6, _instance.tritonServerPort);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Wav2VecTriton to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.processorPath = _value.processorPath;
        this.tritonModelName = _value.tritonModelName;
        this.tritonModelVersion = _value.tritonModelVersion;
        this.checkStatusTimeout = _value.checkStatusTimeout;
        this.tritonServerHost = _value.tritonServerHost;
        this.tritonServerPort = _value.tritonServerPort;
        Wav2VecTriton.refineValues(this);
    }
    get processorPath() {
        return this._processorPath;
    }
    set processorPath(value) {
        this._processorPath = value;
    }
    get tritonModelName() {
        return this._tritonModelName;
    }
    set tritonModelName(value) {
        this._tritonModelName = value;
    }
    get tritonModelVersion() {
        return this._tritonModelVersion;
    }
    set tritonModelVersion(value) {
        this._tritonModelVersion = value;
    }
    get checkStatusTimeout() {
        return this._checkStatusTimeout;
    }
    set checkStatusTimeout(value) {
        this._checkStatusTimeout = value;
    }
    get tritonServerHost() {
        return this._tritonServerHost;
    }
    set tritonServerHost(value) {
        this._tritonServerHost = value;
    }
    get tritonServerPort() {
        return this._tritonServerPort;
    }
    set tritonServerPort(value) {
        this._tritonServerPort = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Wav2VecTriton.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            processorPath: this.processorPath,
            tritonModelName: this.tritonModelName,
            tritonModelVersion: this.tritonModelVersion,
            checkStatusTimeout: this.checkStatusTimeout,
            tritonServerHost: this.tritonServerHost,
            tritonServerPort: this.tritonServerPort
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
            processorPath: this.processorPath,
            tritonModelName: this.tritonModelName,
            tritonModelVersion: this.tritonModelVersion,
            checkStatusTimeout: this.checkStatusTimeout,
            tritonServerHost: this.tritonServerHost,
            tritonServerPort: this.tritonServerPort
        };
    }
}
/**
 * Message implementation for ondewo.s2t.PtFiles
 */
class PtFiles {
    static { this.id = 'ondewo.s2t.PtFiles'; }
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
/**
 * Message implementation for ondewo.s2t.CkptFile
 */
class CkptFile {
    static { this.id = 'ondewo.s2t.CkptFile'; }
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
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CkptFile to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.path = _value.path;
        CkptFile.refineValues(this);
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
/**
 * Message implementation for ondewo.s2t.LanguageModels
 */
class LanguageModels {
    static { this.id = 'ondewo.s2t.LanguageModels'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new LanguageModels();
        LanguageModels.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.path = _instance.path || '';
        _instance.beamSize = _instance.beamSize || '0';
        _instance.defaultLm = _instance.defaultLm || '';
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
                    _instance.defaultLm = _reader.readString();
                    break;
                case 4:
                    _instance.beamSearchScorerAlpha = _reader.readFloat();
                    break;
                case 5:
                    _instance.beamSearchScorerBeta = _reader.readFloat();
                    break;
                default:
                    _reader.skipField();
            }
        }
        LanguageModels.refineValues(_instance);
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
        if (_instance.defaultLm) {
            _writer.writeString(3, _instance.defaultLm);
        }
        if (_instance.beamSearchScorerAlpha) {
            _writer.writeFloat(4, _instance.beamSearchScorerAlpha);
        }
        if (_instance.beamSearchScorerBeta) {
            _writer.writeFloat(5, _instance.beamSearchScorerBeta);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LanguageModels to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.path = _value.path;
        this.beamSize = _value.beamSize;
        this.defaultLm = _value.defaultLm;
        this.beamSearchScorerAlpha = _value.beamSearchScorerAlpha;
        this.beamSearchScorerBeta = _value.beamSearchScorerBeta;
        LanguageModels.refineValues(this);
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
    get defaultLm() {
        return this._defaultLm;
    }
    set defaultLm(value) {
        this._defaultLm = value;
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
        LanguageModels.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            path: this.path,
            beamSize: this.beamSize,
            defaultLm: this.defaultLm,
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
            defaultLm: this.defaultLm,
            beamSearchScorerAlpha: this.beamSearchScorerAlpha,
            beamSearchScorerBeta: this.beamSearchScorerBeta
        };
    }
}
/**
 * Message implementation for ondewo.s2t.StreamingServer
 */
class StreamingServer {
    static { this.id = 'ondewo.s2t.StreamingServer'; }
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
/**
 * Message implementation for ondewo.s2t.StreamingSpeechRecognition
 */
class StreamingSpeechRecognition {
    static { this.id = 'ondewo.s2t.StreamingSpeechRecognition'; }
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
        _instance.decodingMethod = _instance.decodingMethod || '';
        _instance.samplingRate = _instance.samplingRate || '0';
        _instance.minAudioChunkSize = _instance.minAudioChunkSize || '0';
        _instance.nextChunkTimeout = _instance.nextChunkTimeout || 0;
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
                    _instance.decodingMethod = _reader.readString();
                    break;
                case 3:
                    _instance.samplingRate = _reader.readInt64String();
                    break;
                case 4:
                    _instance.minAudioChunkSize = _reader.readInt64String();
                    break;
                case 5:
                    _instance.nextChunkTimeout = _reader.readFloat();
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
        if (_instance.decodingMethod) {
            _writer.writeString(2, _instance.decodingMethod);
        }
        if (_instance.samplingRate) {
            _writer.writeInt64String(3, _instance.samplingRate);
        }
        if (_instance.minAudioChunkSize) {
            _writer.writeInt64String(4, _instance.minAudioChunkSize);
        }
        if (_instance.nextChunkTimeout) {
            _writer.writeFloat(5, _instance.nextChunkTimeout);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StreamingSpeechRecognition to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.transcribeNotFinal = _value.transcribeNotFinal;
        this.decodingMethod = _value.decodingMethod;
        this.samplingRate = _value.samplingRate;
        this.minAudioChunkSize = _value.minAudioChunkSize;
        this.nextChunkTimeout = _value.nextChunkTimeout;
        StreamingSpeechRecognition.refineValues(this);
    }
    get transcribeNotFinal() {
        return this._transcribeNotFinal;
    }
    set transcribeNotFinal(value) {
        this._transcribeNotFinal = value;
    }
    get decodingMethod() {
        return this._decodingMethod;
    }
    set decodingMethod(value) {
        this._decodingMethod = value;
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
    get nextChunkTimeout() {
        return this._nextChunkTimeout;
    }
    set nextChunkTimeout(value) {
        this._nextChunkTimeout = value;
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
            decodingMethod: this.decodingMethod,
            samplingRate: this.samplingRate,
            minAudioChunkSize: this.minAudioChunkSize,
            nextChunkTimeout: this.nextChunkTimeout
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
            decodingMethod: this.decodingMethod,
            samplingRate: this.samplingRate,
            minAudioChunkSize: this.minAudioChunkSize,
            nextChunkTimeout: this.nextChunkTimeout
        };
    }
}
/**
 * Message implementation for ondewo.s2t.VoiceActivityDetection
 */
class VoiceActivityDetection {
    static { this.id = 'ondewo.s2t.VoiceActivityDetection'; }
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
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VoiceActivityDetection to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.active = _value.active;
        this.samplingRate = _value.samplingRate;
        this.pyannote = _value.pyannote ? new Pyannote(_value.pyannote) : undefined;
        VoiceActivityDetection.refineValues(this);
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
            pyannote: this.pyannote ? this.pyannote.toObject() : undefined
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
            pyannote: this.pyannote ? this.pyannote.toProtobufJSON(options) : null
        };
    }
}
/**
 * Message implementation for ondewo.s2t.Pyannote
 */
class Pyannote {
    static { this.id = 'ondewo.s2t.Pyannote'; }
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
        _instance.modelName = _instance.modelName || '';
        _instance.minAudioSize = _instance.minAudioSize || '0';
        _instance.minDurationOff = _instance.minDurationOff || 0;
        _instance.minDurationOn = _instance.minDurationOn || 0;
        _instance.tritonServerHost = _instance.tritonServerHost || '';
        _instance.tritonServerPort = _instance.tritonServerPort || '0';
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
                    _instance.modelName = _reader.readString();
                    break;
                case 2:
                    _instance.minAudioSize = _reader.readInt64String();
                    break;
                case 3:
                    _instance.minDurationOff = _reader.readFloat();
                    break;
                case 4:
                    _instance.minDurationOn = _reader.readFloat();
                    break;
                case 5:
                    _instance.tritonServerHost = _reader.readString();
                    break;
                case 6:
                    _instance.tritonServerPort = _reader.readInt64String();
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
        if (_instance.modelName) {
            _writer.writeString(1, _instance.modelName);
        }
        if (_instance.minAudioSize) {
            _writer.writeInt64String(2, _instance.minAudioSize);
        }
        if (_instance.minDurationOff) {
            _writer.writeFloat(3, _instance.minDurationOff);
        }
        if (_instance.minDurationOn) {
            _writer.writeFloat(4, _instance.minDurationOn);
        }
        if (_instance.tritonServerHost) {
            _writer.writeString(5, _instance.tritonServerHost);
        }
        if (_instance.tritonServerPort) {
            _writer.writeInt64String(6, _instance.tritonServerPort);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Pyannote to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.modelName = _value.modelName;
        this.minAudioSize = _value.minAudioSize;
        this.minDurationOff = _value.minDurationOff;
        this.minDurationOn = _value.minDurationOn;
        this.tritonServerHost = _value.tritonServerHost;
        this.tritonServerPort = _value.tritonServerPort;
        Pyannote.refineValues(this);
    }
    get modelName() {
        return this._modelName;
    }
    set modelName(value) {
        this._modelName = value;
    }
    get minAudioSize() {
        return this._minAudioSize;
    }
    set minAudioSize(value) {
        this._minAudioSize = value;
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
    get tritonServerHost() {
        return this._tritonServerHost;
    }
    set tritonServerHost(value) {
        this._tritonServerHost = value;
    }
    get tritonServerPort() {
        return this._tritonServerPort;
    }
    set tritonServerPort(value) {
        this._tritonServerPort = value;
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
            modelName: this.modelName,
            minAudioSize: this.minAudioSize,
            minDurationOff: this.minDurationOff,
            minDurationOn: this.minDurationOn,
            tritonServerHost: this.tritonServerHost,
            tritonServerPort: this.tritonServerPort
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
            modelName: this.modelName,
            minAudioSize: this.minAudioSize,
            minDurationOff: this.minDurationOff,
            minDurationOn: this.minDurationOn,
            tritonServerHost: this.tritonServerHost,
            tritonServerPort: this.tritonServerPort
        };
    }
}
/**
 * Message implementation for ondewo.s2t.PostProcessing
 */
class PostProcessing {
    static { this.id = 'ondewo.s2t.PostProcessing'; }
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
/**
 * Message implementation for ondewo.s2t.PostProcessors
 */
class PostProcessors {
    static { this.id = 'ondewo.s2t.PostProcessors'; }
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
                    _instance.normalization = new S2TNormalization();
                    _reader.readMessage(_instance.normalization, S2TNormalization.deserializeBinaryFromReader);
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
            _writer.writeMessage(2, _instance.normalization, S2TNormalization.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PostProcessors to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.symSpell = _value.symSpell ? new SymSpell(_value.symSpell) : undefined;
        this.normalization = _value.normalization
            ? new S2TNormalization(_value.normalization)
            : undefined;
        PostProcessors.refineValues(this);
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
/**
 * Message implementation for ondewo.s2t.SymSpell
 */
class SymSpell {
    static { this.id = 'ondewo.s2t.SymSpell'; }
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
/**
 * Message implementation for ondewo.s2t.S2TNormalization
 */
class S2TNormalization {
    static { this.id = 'ondewo.s2t.S2TNormalization'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new S2TNormalization();
        S2TNormalization.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.language = _instance.language || '';
        _instance.pipeline = _instance.pipeline || [];
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
                    (_instance.pipeline = _instance.pipeline || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        S2TNormalization.refineValues(_instance);
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
        if (_instance.pipeline && _instance.pipeline.length) {
            _writer.writeRepeatedString(2, _instance.pipeline);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2TNormalization to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.language = _value.language;
        this.pipeline = (_value.pipeline || []).slice();
        S2TNormalization.refineValues(this);
    }
    get language() {
        return this._language;
    }
    set language(value) {
        this._language = value;
    }
    get pipeline() {
        return this._pipeline;
    }
    set pipeline(value) {
        this._pipeline = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        S2TNormalization.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            language: this.language,
            pipeline: (this.pipeline || []).slice()
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
            pipeline: (this.pipeline || []).slice()
        };
    }
}
/**
 * Message implementation for ondewo.s2t.Logging
 */
class Logging {
    static { this.id = 'ondewo.s2t.Logging'; }
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
/**
 * Message implementation for ondewo.s2t.ListS2tLanguageModelsRequest
 */
class ListS2tLanguageModelsRequest {
    static { this.id = 'ondewo.s2t.ListS2tLanguageModelsRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListS2tLanguageModelsRequest();
        ListS2tLanguageModelsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.ids = _instance.ids || [];
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
                    (_instance.ids = _instance.ids || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListS2tLanguageModelsRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.ids && _instance.ids.length) {
            _writer.writeRepeatedString(1, _instance.ids);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tLanguageModelsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.ids = (_value.ids || []).slice();
        ListS2tLanguageModelsRequest.refineValues(this);
    }
    get ids() {
        return this._ids;
    }
    set ids(value) {
        this._ids = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ListS2tLanguageModelsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            ids: (this.ids || []).slice()
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
            ids: (this.ids || []).slice()
        };
    }
}
/**
 * Message implementation for ondewo.s2t.LanguageModelPipelineId
 */
class LanguageModelPipelineId {
    static { this.id = 'ondewo.s2t.LanguageModelPipelineId'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new LanguageModelPipelineId();
        LanguageModelPipelineId.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.pipelineId = _instance.pipelineId || '';
        _instance.modelNames = _instance.modelNames || [];
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
                    _instance.pipelineId = _reader.readString();
                    break;
                case 2:
                    (_instance.modelNames = _instance.modelNames || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        LanguageModelPipelineId.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.pipelineId) {
            _writer.writeString(1, _instance.pipelineId);
        }
        if (_instance.modelNames && _instance.modelNames.length) {
            _writer.writeRepeatedString(2, _instance.modelNames);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LanguageModelPipelineId to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.pipelineId = _value.pipelineId;
        this.modelNames = (_value.modelNames || []).slice();
        LanguageModelPipelineId.refineValues(this);
    }
    get pipelineId() {
        return this._pipelineId;
    }
    set pipelineId(value) {
        this._pipelineId = value;
    }
    get modelNames() {
        return this._modelNames;
    }
    set modelNames(value) {
        this._modelNames = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        LanguageModelPipelineId.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            pipelineId: this.pipelineId,
            modelNames: (this.modelNames || []).slice()
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
            pipelineId: this.pipelineId,
            modelNames: (this.modelNames || []).slice()
        };
    }
}
/**
 * Message implementation for ondewo.s2t.ListS2tLanguageModelsResponse
 */
class ListS2tLanguageModelsResponse {
    static { this.id = 'ondewo.s2t.ListS2tLanguageModelsResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListS2tLanguageModelsResponse();
        ListS2tLanguageModelsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.lmPipelineIds = _instance.lmPipelineIds || [];
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
                    const messageInitializer1 = new LanguageModelPipelineId();
                    _reader.readMessage(messageInitializer1, LanguageModelPipelineId.deserializeBinaryFromReader);
                    (_instance.lmPipelineIds = _instance.lmPipelineIds || []).push(messageInitializer1);
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListS2tLanguageModelsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.lmPipelineIds && _instance.lmPipelineIds.length) {
            _writer.writeRepeatedMessage(1, _instance.lmPipelineIds, LanguageModelPipelineId.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListS2tLanguageModelsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.lmPipelineIds = (_value.lmPipelineIds || []).map(m => new LanguageModelPipelineId(m));
        ListS2tLanguageModelsResponse.refineValues(this);
    }
    get lmPipelineIds() {
        return this._lmPipelineIds;
    }
    set lmPipelineIds(value) {
        this._lmPipelineIds = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ListS2tLanguageModelsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            lmPipelineIds: (this.lmPipelineIds || []).map(m => m.toObject())
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
            lmPipelineIds: (this.lmPipelineIds || []).map(m => m.toProtobufJSON(options))
        };
    }
}
/**
 * Message implementation for ondewo.s2t.CreateUserLanguageModelRequest
 */
class CreateUserLanguageModelRequest {
    static { this.id = 'ondewo.s2t.CreateUserLanguageModelRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CreateUserLanguageModelRequest();
        CreateUserLanguageModelRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.languageModelName = _instance.languageModelName || '';
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
                    _instance.languageModelName = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        CreateUserLanguageModelRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.languageModelName) {
            _writer.writeString(1, _instance.languageModelName);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateUserLanguageModelRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.languageModelName = _value.languageModelName;
        CreateUserLanguageModelRequest.refineValues(this);
    }
    get languageModelName() {
        return this._languageModelName;
    }
    set languageModelName(value) {
        this._languageModelName = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        CreateUserLanguageModelRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            languageModelName: this.languageModelName
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
            languageModelName: this.languageModelName
        };
    }
}
/**
 * Message implementation for ondewo.s2t.DeleteUserLanguageModelRequest
 */
class DeleteUserLanguageModelRequest {
    static { this.id = 'ondewo.s2t.DeleteUserLanguageModelRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new DeleteUserLanguageModelRequest();
        DeleteUserLanguageModelRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.languageModelName = _instance.languageModelName || '';
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
                    _instance.languageModelName = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        DeleteUserLanguageModelRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.languageModelName) {
            _writer.writeString(1, _instance.languageModelName);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteUserLanguageModelRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.languageModelName = _value.languageModelName;
        DeleteUserLanguageModelRequest.refineValues(this);
    }
    get languageModelName() {
        return this._languageModelName;
    }
    set languageModelName(value) {
        this._languageModelName = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        DeleteUserLanguageModelRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            languageModelName: this.languageModelName
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
            languageModelName: this.languageModelName
        };
    }
}
/**
 * Message implementation for ondewo.s2t.AddDataToUserLanguageModelRequest
 */
class AddDataToUserLanguageModelRequest {
    static { this.id = 'ondewo.s2t.AddDataToUserLanguageModelRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new AddDataToUserLanguageModelRequest();
        AddDataToUserLanguageModelRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.languageModelName = _instance.languageModelName || '';
        _instance.zippedData = _instance.zippedData || new Uint8Array();
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
                    _instance.languageModelName = _reader.readString();
                    break;
                case 2:
                    _instance.zippedData = _reader.readBytes();
                    break;
                default:
                    _reader.skipField();
            }
        }
        AddDataToUserLanguageModelRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.languageModelName) {
            _writer.writeString(1, _instance.languageModelName);
        }
        if (_instance.zippedData && _instance.zippedData.length) {
            _writer.writeBytes(2, _instance.zippedData);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddDataToUserLanguageModelRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.languageModelName = _value.languageModelName;
        this.zippedData = _value.zippedData;
        AddDataToUserLanguageModelRequest.refineValues(this);
    }
    get languageModelName() {
        return this._languageModelName;
    }
    set languageModelName(value) {
        this._languageModelName = value;
    }
    get zippedData() {
        return this._zippedData;
    }
    set zippedData(value) {
        this._zippedData = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        AddDataToUserLanguageModelRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            languageModelName: this.languageModelName,
            zippedData: this.zippedData
                ? this.zippedData.subarray(0)
                : new Uint8Array()
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
            languageModelName: this.languageModelName,
            zippedData: this.zippedData ? uint8ArrayToBase64(this.zippedData) : ''
        };
    }
}
/**
 * Message implementation for ondewo.s2t.TrainUserLanguageModelRequest
 */
class TrainUserLanguageModelRequest {
    static { this.id = 'ondewo.s2t.TrainUserLanguageModelRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new TrainUserLanguageModelRequest();
        TrainUserLanguageModelRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.languageModelName = _instance.languageModelName || '';
        _instance.order = _instance.order || '0';
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
                    _instance.languageModelName = _reader.readString();
                    break;
                case 2:
                    _instance.order = _reader.readInt64String();
                    break;
                default:
                    _reader.skipField();
            }
        }
        TrainUserLanguageModelRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.languageModelName) {
            _writer.writeString(1, _instance.languageModelName);
        }
        if (_instance.order) {
            _writer.writeInt64String(2, _instance.order);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TrainUserLanguageModelRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.languageModelName = _value.languageModelName;
        this.order = _value.order;
        TrainUserLanguageModelRequest.refineValues(this);
    }
    get languageModelName() {
        return this._languageModelName;
    }
    set languageModelName(value) {
        this._languageModelName = value;
    }
    get order() {
        return this._order;
    }
    set order(value) {
        this._order = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        TrainUserLanguageModelRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            languageModelName: this.languageModelName,
            order: this.order
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
            languageModelName: this.languageModelName,
            order: this.order
        };
    }
}

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
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
             * Unary call: /ondewo.s2t.Speech2Text/TranscribeFile
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
             * Bidirectional streaming: /ondewo.s2t.Speech2Text/TranscribeStream
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.TranscribeStreamResponse>>
             */
            transcribeStream: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.bidiStream,
                    client: this.client,
                    path: '/ondewo.s2t.Speech2Text/TranscribeStream',
                    requestData,
                    requestMetadata,
                    requestClass: TranscribeStreamRequest,
                    responseClass: TranscribeStreamResponse
                });
            },
            /**
             * Unary call: /ondewo.s2t.Speech2Text/GetS2tPipeline
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
             * Unary call: /ondewo.s2t.Speech2Text/CreateS2tPipeline
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
             * Unary call: /ondewo.s2t.Speech2Text/DeleteS2tPipeline
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
                    responseClass: googleProtobuf000.Empty
                });
            },
            /**
             * Unary call: /ondewo.s2t.Speech2Text/UpdateS2tPipeline
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
                    responseClass: googleProtobuf000.Empty
                });
            },
            /**
             * Unary call: /ondewo.s2t.Speech2Text/ListS2tPipelines
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
             * Unary call: /ondewo.s2t.Speech2Text/ListS2tLanguages
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
             * Unary call: /ondewo.s2t.Speech2Text/ListS2tDomains
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
            },
            /**
             * Unary call: /ondewo.s2t.Speech2Text/GetServiceInfo
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.S2TGetServiceInfoResponse>>
             */
            getServiceInfo: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.s2t.Speech2Text/GetServiceInfo',
                    requestData,
                    requestMetadata,
                    requestClass: googleProtobuf000.Empty,
                    responseClass: S2TGetServiceInfoResponse
                });
            },
            /**
             * Unary call: /ondewo.s2t.Speech2Text/ListS2tLanguageModels
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ListS2tLanguageModelsResponse>>
             */
            listS2tLanguageModels: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.s2t.Speech2Text/ListS2tLanguageModels',
                    requestData,
                    requestMetadata,
                    requestClass: ListS2tLanguageModelsRequest,
                    responseClass: ListS2tLanguageModelsResponse
                });
            },
            /**
             * Unary call: /ondewo.s2t.Speech2Text/CreateUserLanguageModel
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
             */
            createUserLanguageModel: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.s2t.Speech2Text/CreateUserLanguageModel',
                    requestData,
                    requestMetadata,
                    requestClass: CreateUserLanguageModelRequest,
                    responseClass: googleProtobuf000.Empty
                });
            },
            /**
             * Unary call: /ondewo.s2t.Speech2Text/DeleteUserLanguageModel
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
             */
            deleteUserLanguageModel: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.s2t.Speech2Text/DeleteUserLanguageModel',
                    requestData,
                    requestMetadata,
                    requestClass: DeleteUserLanguageModelRequest,
                    responseClass: googleProtobuf000.Empty
                });
            },
            /**
             * Unary call: /ondewo.s2t.Speech2Text/AddDataToUserLanguageModel
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
             */
            addDataToUserLanguageModel: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.s2t.Speech2Text/AddDataToUserLanguageModel',
                    requestData,
                    requestMetadata,
                    requestClass: AddDataToUserLanguageModelRequest,
                    responseClass: googleProtobuf000.Empty
                });
            },
            /**
             * Unary call: /ondewo.s2t.Speech2Text/TrainUserLanguageModel
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
             */
            trainUserLanguageModel: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.s2t.Speech2Text/TrainUserLanguageModel',
                    requestData,
                    requestMetadata,
                    requestClass: TrainUserLanguageModelRequest,
                    responseClass: googleProtobuf000.Empty
                });
            }
        };
        this.client = clientFactory.createClient('ondewo.s2t.Speech2Text', settings);
    }
    /**
     * Unary call @/ondewo.s2t.Speech2Text/TranscribeFile
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
     * Bidirectional streaming @/ondewo.s2t.Speech2Text/TranscribeStream
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
     * Unary call @/ondewo.s2t.Speech2Text/GetS2tPipeline
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
     * Unary call @/ondewo.s2t.Speech2Text/CreateS2tPipeline
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
     * Unary call @/ondewo.s2t.Speech2Text/DeleteS2tPipeline
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
     * Unary call @/ondewo.s2t.Speech2Text/UpdateS2tPipeline
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
     * Unary call @/ondewo.s2t.Speech2Text/ListS2tPipelines
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
     * Unary call @/ondewo.s2t.Speech2Text/ListS2tLanguages
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
     * Unary call @/ondewo.s2t.Speech2Text/ListS2tDomains
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
    /**
     * Unary call @/ondewo.s2t.Speech2Text/GetServiceInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.S2TGetServiceInfoResponse>
     */
    getServiceInfo(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getServiceInfo(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.s2t.Speech2Text/ListS2tLanguageModels
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListS2tLanguageModelsResponse>
     */
    listS2tLanguageModels(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .listS2tLanguageModels(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.s2t.Speech2Text/CreateUserLanguageModel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    createUserLanguageModel(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .createUserLanguageModel(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.s2t.Speech2Text/DeleteUserLanguageModel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    deleteUserLanguageModel(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .deleteUserLanguageModel(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.s2t.Speech2Text/AddDataToUserLanguageModel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    addDataToUserLanguageModel(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .addDataToUserLanguageModel(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.s2t.Speech2Text/TrainUserLanguageModel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    trainUserLanguageModel(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .trainUserLanguageModel(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: Speech2TextClient, deps: [{ token: GRPC_SPEECH2_TEXT_CLIENT_SETTINGS, optional: true }, { token: GRPC_CLIENT_FACTORY }, { token: i1.GrpcHandler }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: Speech2TextClient, providedIn: 'any' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: Speech2TextClient, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRPC_SPEECH2_TEXT_CLIENT_SETTINGS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [GRPC_CLIENT_FACTORY]
                }] }, { type: i1.GrpcHandler }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AcousticModels, AddDataToUserLanguageModelRequest, CkptFile, CreateUserLanguageModelRequest, Decoding, DeleteUserLanguageModelRequest, GRPC_SPEECH2_TEXT_CLIENT_SETTINGS, InferenceBackend, LanguageModelPipelineId, LanguageModels, ListS2tDomainsRequest, ListS2tDomainsResponse, ListS2tLanguageModelsRequest, ListS2tLanguageModelsResponse, ListS2tLanguagesRequest, ListS2tLanguagesResponse, ListS2tPipelinesRequest, ListS2tPipelinesResponse, Logging, PostProcessing, PostProcessingOptions, PostProcessors, PtFiles, Pyannote, S2TDescription, S2TGetServiceInfoResponse, S2TInference, S2TNormalization, S2tCloudProviderConfig, S2tCloudProviderConfigAmazon, S2tCloudProviderConfigDeepgram, S2tCloudProviderConfigGoogle, S2tCloudProviderConfigMicrosoft, S2tCloudServiceAmazon, S2tCloudServiceDeepgram, S2tCloudServiceGoogle, S2tCloudServiceMicrosoft, S2tPipelineId, Speech2TextClient, Speech2TextConfig, StreamingServer, StreamingSpeechRecognition, SymSpell, TrainUserLanguageModelRequest, TranscribeFileRequest, TranscribeFileResponse, TranscribeRequestConfig, TranscribeStreamRequest, TranscribeStreamResponse, Transcription, TranscriptionAlternative, TranscriptionReturnOptions, UtteranceDetectionOptions, VoiceActivityDetection, Wav2Vec, Wav2VecTriton, Whisper, WhisperTriton, WordAlternative, WordDetail };
//# sourceMappingURL=ondewo-s2t-client-angular.mjs.map
