import { GrpcCallType, GrpcMetadata, uint8ArrayToBase64 } from "@ngx-grpc/common";
import { BinaryReader, BinaryWriter } from "google-protobuf";
import * as googleProtobuf001 from "@ngx-grpc/well-known-types";
import * as i0 from "@angular/core";
import { Inject, Injectable, InjectionToken, Optional, inject, makeEnvironmentProviders } from "@angular/core";
import * as i1$1 from "@ngx-grpc/core";
import { GRPC_CLIENT_FACTORY, GRPC_INTERCEPTORS, takeMessages, throwStatusErrors } from "@ngx-grpc/core";
import * as i1 from "@angular/common/http";
import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, firstValueFrom, from, isObservable, switchMap } from "rxjs";
var Decoding;
(function(Decoding) {
	Decoding[Decoding["DEFAULT"] = 0] = "DEFAULT";
	Decoding[Decoding["GREEDY"] = 1] = "GREEDY";
	Decoding[Decoding["BEAM_SEARCH_WITH_LM"] = 2] = "BEAM_SEARCH_WITH_LM";
	Decoding[Decoding["BEAM_SEARCH"] = 3] = "BEAM_SEARCH";
})(Decoding || (Decoding = {}));
var InferenceBackend;
(function(InferenceBackend) {
	InferenceBackend[InferenceBackend["INFERENCE_BACKEND_UNKNOWN"] = 0] = "INFERENCE_BACKEND_UNKNOWN";
	InferenceBackend[InferenceBackend["INFERENCE_BACKEND_PYTORCH"] = 1] = "INFERENCE_BACKEND_PYTORCH";
	InferenceBackend[InferenceBackend["INFERENCE_BACKEND_FLAX"] = 2] = "INFERENCE_BACKEND_FLAX";
	InferenceBackend[InferenceBackend["INFERENCE_BACKEND_CLOUD_SERVICE_AMAZON"] = 3] = "INFERENCE_BACKEND_CLOUD_SERVICE_AMAZON";
	InferenceBackend[InferenceBackend["INFERENCE_BACKEND_CLOUD_SERVICE_DEEPGRAM"] = 4] = "INFERENCE_BACKEND_CLOUD_SERVICE_DEEPGRAM";
	InferenceBackend[InferenceBackend["INFERENCE_BACKEND_CLOUD_SERVICE_GOOGLE"] = 5] = "INFERENCE_BACKEND_CLOUD_SERVICE_GOOGLE";
	InferenceBackend[InferenceBackend["INFERENCE_BACKEND_CLOUD_SERVICE_MICROSOFT"] = 6] = "INFERENCE_BACKEND_CLOUD_SERVICE_MICROSOFT";
})(InferenceBackend || (InferenceBackend = {}));
var ServiceTier;
(function(ServiceTier) {
	ServiceTier[ServiceTier["SERVICE_TIER_UNSPECIFIED"] = 0] = "SERVICE_TIER_UNSPECIFIED";
	ServiceTier[ServiceTier["SERVICE_TIER_AUTO"] = 1] = "SERVICE_TIER_AUTO";
	ServiceTier[ServiceTier["SERVICE_TIER_DEFAULT"] = 2] = "SERVICE_TIER_DEFAULT";
	ServiceTier[ServiceTier["SERVICE_TIER_FLEX"] = 3] = "SERVICE_TIER_FLEX";
	ServiceTier[ServiceTier["SERVICE_TIER_SCALE"] = 4] = "SERVICE_TIER_SCALE";
	ServiceTier[ServiceTier["SERVICE_TIER_PRIORITY"] = 5] = "SERVICE_TIER_PRIORITY";
})(ServiceTier || (ServiceTier = {}));
var Verbosity;
(function(Verbosity) {
	Verbosity[Verbosity["VERBOSITY_UNSPECIFIED"] = 0] = "VERBOSITY_UNSPECIFIED";
	Verbosity[Verbosity["VERBOSITY_LOW"] = 1] = "VERBOSITY_LOW";
	Verbosity[Verbosity["VERBOSITY_MEDIUM"] = 2] = "VERBOSITY_MEDIUM";
	Verbosity[Verbosity["VERBOSITY_HIGH"] = 3] = "VERBOSITY_HIGH";
})(Verbosity || (Verbosity = {}));
var ReasoningEffort;
(function(ReasoningEffort) {
	ReasoningEffort[ReasoningEffort["REASONING_EFFORT_UNSPECIFIED"] = 0] = "REASONING_EFFORT_UNSPECIFIED";
	ReasoningEffort[ReasoningEffort["REASONING_EFFORT_MINIMAL"] = 1] = "REASONING_EFFORT_MINIMAL";
	ReasoningEffort[ReasoningEffort["REASONING_EFFORT_LOW"] = 2] = "REASONING_EFFORT_LOW";
	ReasoningEffort[ReasoningEffort["REASONING_EFFORT_MEDIUM"] = 3] = "REASONING_EFFORT_MEDIUM";
	ReasoningEffort[ReasoningEffort["REASONING_EFFORT_HIGH"] = 4] = "REASONING_EFFORT_HIGH";
})(ReasoningEffort || (ReasoningEffort = {}));
var VadMethod;
(function(VadMethod) {
	VadMethod[VadMethod["VAD_METHOD_UNSPECIFIED"] = 0] = "VAD_METHOD_UNSPECIFIED";
	VadMethod[VadMethod["VAD_METHOD_PYANNOTE"] = 1] = "VAD_METHOD_PYANNOTE";
	VadMethod[VadMethod["VAD_METHOD_SILERO"] = 2] = "VAD_METHOD_SILERO";
})(VadMethod || (VadMethod = {}));
var TsdMethod;
(function(TsdMethod) {
	TsdMethod[TsdMethod["TSD_METHOD_UNSPECIFIED"] = 0] = "TSD_METHOD_UNSPECIFIED";
	TsdMethod[TsdMethod["TSD_METHOD_NONE"] = 1] = "TSD_METHOD_NONE";
	TsdMethod[TsdMethod["TSD_METHOD_PYANNOTE"] = 2] = "TSD_METHOD_PYANNOTE";
	TsdMethod[TsdMethod["TSD_METHOD_WESPEAKER"] = 3] = "TSD_METHOD_WESPEAKER";
})(TsdMethod || (TsdMethod = {}));
var TranscribeRequestConfig = class TranscribeRequestConfig {
	static {
		this.id = "ondewo.s2t.TranscribeRequestConfig";
	}
	static deserializeBinary(bytes) {
		const instance = new TranscribeRequestConfig();
		TranscribeRequestConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.s2tPipelineId = _instance.s2tPipelineId || "";
		_instance.decoding = _instance.decoding || 0;
		_instance.s2tServiceConfig = _instance.s2tServiceConfig || void 0;
		_instance.s2tCloudProviderConfig = _instance.s2tCloudProviderConfig || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
					_instance.s2tServiceConfig = new googleProtobuf001.Struct();
					_reader.readMessage(_instance.s2tServiceConfig, googleProtobuf001.Struct.deserializeBinaryFromReader);
					break;
				case 12:
					_instance.s2tCloudProviderConfig = new S2tCloudProviderConfig();
					_reader.readMessage(_instance.s2tCloudProviderConfig, S2tCloudProviderConfig.deserializeBinaryFromReader);
					break;
				default: _reader.skipField();
			}
		}
		TranscribeRequestConfig.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.s2tPipelineId) _writer.writeString(1, _instance.s2tPipelineId);
		if (_instance.decoding) _writer.writeEnum(2, _instance.decoding);
		if (_instance.languageModelName || _instance.languageModelName === "") _writer.writeString(3, _instance.languageModelName);
		if (_instance.postProcessing) _writer.writeMessage(4, _instance.postProcessing, PostProcessingOptions.serializeBinaryToWriter);
		if (_instance.utteranceDetection) _writer.writeMessage(5, _instance.utteranceDetection, UtteranceDetectionOptions.serializeBinaryToWriter);
		if (_instance.pyannote) _writer.writeMessage(6, _instance.pyannote, Pyannote.serializeBinaryToWriter);
		if (_instance.returnOptions) _writer.writeMessage(8, _instance.returnOptions, TranscriptionReturnOptions.serializeBinaryToWriter);
		if (_instance.language !== void 0 && _instance.language !== null) _writer.writeString(9, _instance.language);
		if (_instance.task !== void 0 && _instance.task !== null) _writer.writeString(10, _instance.task);
		if (_instance.s2tServiceConfig) _writer.writeMessage(11, _instance.s2tServiceConfig, googleProtobuf001.Struct.serializeBinaryToWriter);
		if (_instance.s2tCloudProviderConfig) _writer.writeMessage(12, _instance.s2tCloudProviderConfig, S2tCloudProviderConfig.serializeBinaryToWriter);
	}
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
		this.postProcessing = _value.postProcessing ? new PostProcessingOptions(_value.postProcessing) : void 0;
		this.utteranceDetection = _value.utteranceDetection ? new UtteranceDetectionOptions(_value.utteranceDetection) : void 0;
		this.pyannote = _value.pyannote ? new Pyannote(_value.pyannote) : void 0;
		this.returnOptions = _value.returnOptions ? new TranscriptionReturnOptions(_value.returnOptions) : void 0;
		this.language = _value.language;
		this.task = _value.task;
		this.s2tServiceConfig = _value.s2tServiceConfig ? new googleProtobuf001.Struct(_value.s2tServiceConfig) : void 0;
		this.s2tCloudProviderConfig = _value.s2tCloudProviderConfig ? new S2tCloudProviderConfig(_value.s2tCloudProviderConfig) : void 0;
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
		if (value !== void 0 && value !== null) this._oneofLanguageModelName = TranscribeRequestConfig.OneofLanguageModelNameCase.languageModelName;
		this._languageModelName = value;
	}
	get postProcessing() {
		return this._postProcessing;
	}
	set postProcessing(value) {
		if (value !== void 0 && value !== null) this._oneofPostProcessing = TranscribeRequestConfig.OneofPostProcessingCase.postProcessing;
		this._postProcessing = value;
	}
	get utteranceDetection() {
		return this._utteranceDetection;
	}
	set utteranceDetection(value) {
		if (value !== void 0 && value !== null) this._oneofUtteranceDetection = TranscribeRequestConfig.OneofUtteranceDetectionCase.utteranceDetection;
		this._utteranceDetection = value;
	}
	get pyannote() {
		return this._pyannote;
	}
	set pyannote(value) {
		if (value !== void 0 && value !== null) this._voiceActivityDetection = TranscribeRequestConfig.VoiceActivityDetectionCase.pyannote;
		this._pyannote = value;
	}
	get returnOptions() {
		return this._returnOptions;
	}
	set returnOptions(value) {
		if (value !== void 0 && value !== null) this._oneofReturnOptions = TranscribeRequestConfig.OneofReturnOptionsCase.returnOptions;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		TranscribeRequestConfig.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			s2tPipelineId: this.s2tPipelineId,
			decoding: this.decoding,
			languageModelName: this.languageModelName,
			postProcessing: this.postProcessing ? this.postProcessing.toObject() : void 0,
			utteranceDetection: this.utteranceDetection ? this.utteranceDetection.toObject() : void 0,
			pyannote: this.pyannote ? this.pyannote.toObject() : void 0,
			returnOptions: this.returnOptions ? this.returnOptions.toObject() : void 0,
			language: this.language,
			task: this.task,
			s2tServiceConfig: this.s2tServiceConfig ? this.s2tServiceConfig.toObject() : void 0,
			s2tCloudProviderConfig: this.s2tCloudProviderConfig ? this.s2tCloudProviderConfig.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			s2tPipelineId: this.s2tPipelineId,
			decoding: Decoding[this.decoding === null || this.decoding === void 0 ? 0 : this.decoding],
			languageModelName: this.languageModelName === null || this.languageModelName === void 0 ? null : this.languageModelName,
			postProcessing: this.postProcessing ? this.postProcessing.toProtobufJSON(options) : null,
			utteranceDetection: this.utteranceDetection ? this.utteranceDetection.toProtobufJSON(options) : null,
			pyannote: this.pyannote ? this.pyannote.toProtobufJSON(options) : null,
			returnOptions: this.returnOptions ? this.returnOptions.toProtobufJSON(options) : null,
			language: this.language,
			task: this.task,
			s2tServiceConfig: this.s2tServiceConfig ? this.s2tServiceConfig.toProtobufJSON(options) : null,
			s2tCloudProviderConfig: this.s2tCloudProviderConfig ? this.s2tCloudProviderConfig.toProtobufJSON(options) : null
		};
	}
};
(function(TranscribeRequestConfig) {
	(function(OneofLanguageModelNameCase) {
		OneofLanguageModelNameCase[OneofLanguageModelNameCase["none"] = 0] = "none";
		OneofLanguageModelNameCase[OneofLanguageModelNameCase["languageModelName"] = 1] = "languageModelName";
	})(TranscribeRequestConfig.OneofLanguageModelNameCase || (TranscribeRequestConfig.OneofLanguageModelNameCase = {}));
	(function(OneofPostProcessingCase) {
		OneofPostProcessingCase[OneofPostProcessingCase["none"] = 0] = "none";
		OneofPostProcessingCase[OneofPostProcessingCase["postProcessing"] = 1] = "postProcessing";
	})(TranscribeRequestConfig.OneofPostProcessingCase || (TranscribeRequestConfig.OneofPostProcessingCase = {}));
	(function(OneofUtteranceDetectionCase) {
		OneofUtteranceDetectionCase[OneofUtteranceDetectionCase["none"] = 0] = "none";
		OneofUtteranceDetectionCase[OneofUtteranceDetectionCase["utteranceDetection"] = 1] = "utteranceDetection";
	})(TranscribeRequestConfig.OneofUtteranceDetectionCase || (TranscribeRequestConfig.OneofUtteranceDetectionCase = {}));
	(function(VoiceActivityDetectionCase) {
		VoiceActivityDetectionCase[VoiceActivityDetectionCase["none"] = 0] = "none";
		VoiceActivityDetectionCase[VoiceActivityDetectionCase["pyannote"] = 1] = "pyannote";
	})(TranscribeRequestConfig.VoiceActivityDetectionCase || (TranscribeRequestConfig.VoiceActivityDetectionCase = {}));
	(function(OneofReturnOptionsCase) {
		OneofReturnOptionsCase[OneofReturnOptionsCase["none"] = 0] = "none";
		OneofReturnOptionsCase[OneofReturnOptionsCase["returnOptions"] = 1] = "returnOptions";
	})(TranscribeRequestConfig.OneofReturnOptionsCase || (TranscribeRequestConfig.OneofReturnOptionsCase = {}));
})(TranscribeRequestConfig || (TranscribeRequestConfig = {}));
var S2tCloudProviderConfig = class S2tCloudProviderConfig {
	static {
		this.id = "ondewo.s2t.S2tCloudProviderConfig";
	}
	static deserializeBinary(bytes) {
		const instance = new S2tCloudProviderConfig();
		S2tCloudProviderConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.s2tCloudProviderConfigAmazon = _instance.s2tCloudProviderConfigAmazon || void 0;
		_instance.s2tCloudProviderConfigDeepgram = _instance.s2tCloudProviderConfigDeepgram || void 0;
		_instance.s2tCloudProviderConfigGoogle = _instance.s2tCloudProviderConfigGoogle || void 0;
		_instance.s2tCloudProviderConfigMicrosoft = _instance.s2tCloudProviderConfigMicrosoft || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		S2tCloudProviderConfig.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.s2tCloudProviderConfigAmazon) _writer.writeMessage(1, _instance.s2tCloudProviderConfigAmazon, S2tCloudProviderConfigAmazon.serializeBinaryToWriter);
		if (_instance.s2tCloudProviderConfigDeepgram) _writer.writeMessage(2, _instance.s2tCloudProviderConfigDeepgram, S2tCloudProviderConfigDeepgram.serializeBinaryToWriter);
		if (_instance.s2tCloudProviderConfigGoogle) _writer.writeMessage(3, _instance.s2tCloudProviderConfigGoogle, S2tCloudProviderConfigGoogle.serializeBinaryToWriter);
		if (_instance.s2tCloudProviderConfigMicrosoft) _writer.writeMessage(4, _instance.s2tCloudProviderConfigMicrosoft, S2tCloudProviderConfigMicrosoft.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.s2tCloudProviderConfigAmazon = _value.s2tCloudProviderConfigAmazon ? new S2tCloudProviderConfigAmazon(_value.s2tCloudProviderConfigAmazon) : void 0;
		this.s2tCloudProviderConfigDeepgram = _value.s2tCloudProviderConfigDeepgram ? new S2tCloudProviderConfigDeepgram(_value.s2tCloudProviderConfigDeepgram) : void 0;
		this.s2tCloudProviderConfigGoogle = _value.s2tCloudProviderConfigGoogle ? new S2tCloudProviderConfigGoogle(_value.s2tCloudProviderConfigGoogle) : void 0;
		this.s2tCloudProviderConfigMicrosoft = _value.s2tCloudProviderConfigMicrosoft ? new S2tCloudProviderConfigMicrosoft(_value.s2tCloudProviderConfigMicrosoft) : void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		S2tCloudProviderConfig.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			s2tCloudProviderConfigAmazon: this.s2tCloudProviderConfigAmazon ? this.s2tCloudProviderConfigAmazon.toObject() : void 0,
			s2tCloudProviderConfigDeepgram: this.s2tCloudProviderConfigDeepgram ? this.s2tCloudProviderConfigDeepgram.toObject() : void 0,
			s2tCloudProviderConfigGoogle: this.s2tCloudProviderConfigGoogle ? this.s2tCloudProviderConfigGoogle.toObject() : void 0,
			s2tCloudProviderConfigMicrosoft: this.s2tCloudProviderConfigMicrosoft ? this.s2tCloudProviderConfigMicrosoft.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			s2tCloudProviderConfigAmazon: this.s2tCloudProviderConfigAmazon ? this.s2tCloudProviderConfigAmazon.toProtobufJSON(options) : null,
			s2tCloudProviderConfigDeepgram: this.s2tCloudProviderConfigDeepgram ? this.s2tCloudProviderConfigDeepgram.toProtobufJSON(options) : null,
			s2tCloudProviderConfigGoogle: this.s2tCloudProviderConfigGoogle ? this.s2tCloudProviderConfigGoogle.toProtobufJSON(options) : null,
			s2tCloudProviderConfigMicrosoft: this.s2tCloudProviderConfigMicrosoft ? this.s2tCloudProviderConfigMicrosoft.toProtobufJSON(options) : null
		};
	}
};
var S2tCloudProviderConfigAmazon = class S2tCloudProviderConfigAmazon {
	static {
		this.id = "ondewo.s2t.S2tCloudProviderConfigAmazon";
	}
	static deserializeBinary(bytes) {
		const instance = new S2tCloudProviderConfigAmazon();
		S2tCloudProviderConfigAmazon.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		S2tCloudProviderConfigAmazon.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.enablePartialResultsStabilization !== void 0 && _instance.enablePartialResultsStabilization !== null) _writer.writeBool(1, _instance.enablePartialResultsStabilization);
		if (_instance.partialResultsStability !== void 0 && _instance.partialResultsStability !== null) _writer.writeString(2, _instance.partialResultsStability);
		if (_instance.languageModelName !== void 0 && _instance.languageModelName !== null) _writer.writeString(3, _instance.languageModelName);
		if (_instance.vocabularyName !== void 0 && _instance.vocabularyName !== null) _writer.writeString(4, _instance.vocabularyName);
	}
	constructor(_value) {
		_value = _value || {};
		this.enablePartialResultsStabilization = _value.enablePartialResultsStabilization;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		S2tCloudProviderConfigAmazon.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			enablePartialResultsStabilization: this.enablePartialResultsStabilization,
			partialResultsStability: this.partialResultsStability,
			languageModelName: this.languageModelName,
			vocabularyName: this.vocabularyName
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			enablePartialResultsStabilization: this.enablePartialResultsStabilization,
			partialResultsStability: this.partialResultsStability,
			languageModelName: this.languageModelName,
			vocabularyName: this.vocabularyName
		};
	}
};
var S2tCloudProviderConfigDeepgram = class S2tCloudProviderConfigDeepgram {
	static {
		this.id = "ondewo.s2t.S2tCloudProviderConfigDeepgram";
	}
	static deserializeBinary(bytes) {
		const instance = new S2tCloudProviderConfigDeepgram();
		S2tCloudProviderConfigDeepgram.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		S2tCloudProviderConfigDeepgram.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.punctuate !== void 0 && _instance.punctuate !== null) _writer.writeBool(1, _instance.punctuate);
		if (_instance.smartFormat !== void 0 && _instance.smartFormat !== null) _writer.writeBool(2, _instance.smartFormat);
		if (_instance.numerals !== void 0 && _instance.numerals !== null) _writer.writeBool(3, _instance.numerals);
		if (_instance.measurements !== void 0 && _instance.measurements !== null) _writer.writeBool(4, _instance.measurements);
		if (_instance.dictation !== void 0 && _instance.dictation !== null) _writer.writeBool(5, _instance.dictation);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		S2tCloudProviderConfigDeepgram.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			punctuate: this.punctuate,
			smartFormat: this.smartFormat,
			numerals: this.numerals,
			measurements: this.measurements,
			dictation: this.dictation
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			punctuate: this.punctuate,
			smartFormat: this.smartFormat,
			numerals: this.numerals,
			measurements: this.measurements,
			dictation: this.dictation
		};
	}
};
var S2tCloudProviderConfigGoogle = class S2tCloudProviderConfigGoogle {
	static {
		this.id = "ondewo.s2t.S2tCloudProviderConfigGoogle";
	}
	static deserializeBinary(bytes) {
		const instance = new S2tCloudProviderConfigGoogle();
		S2tCloudProviderConfigGoogle.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		S2tCloudProviderConfigGoogle.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.enableAutomaticPunctuation !== void 0 && _instance.enableAutomaticPunctuation !== null) _writer.writeBool(1, _instance.enableAutomaticPunctuation);
		if (_instance.enableWordTimeOffsets !== void 0 && _instance.enableWordTimeOffsets !== null) _writer.writeBool(2, _instance.enableWordTimeOffsets);
		if (_instance.enableWordConfidence !== void 0 && _instance.enableWordConfidence !== null) _writer.writeBool(3, _instance.enableWordConfidence);
		if (_instance.transcriptNormalization !== void 0 && _instance.transcriptNormalization !== null) _writer.writeBool(4, _instance.transcriptNormalization);
		if (_instance.maxAlternatives !== void 0 && _instance.maxAlternatives !== null) _writer.writeInt32(5, _instance.maxAlternatives);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		S2tCloudProviderConfigGoogle.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			enableAutomaticPunctuation: this.enableAutomaticPunctuation,
			enableWordTimeOffsets: this.enableWordTimeOffsets,
			enableWordConfidence: this.enableWordConfidence,
			transcriptNormalization: this.transcriptNormalization,
			maxAlternatives: this.maxAlternatives
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			enableAutomaticPunctuation: this.enableAutomaticPunctuation,
			enableWordTimeOffsets: this.enableWordTimeOffsets,
			enableWordConfidence: this.enableWordConfidence,
			transcriptNormalization: this.transcriptNormalization,
			maxAlternatives: this.maxAlternatives
		};
	}
};
var S2tCloudProviderConfigMicrosoft = class S2tCloudProviderConfigMicrosoft {
	static {
		this.id = "ondewo.s2t.S2tCloudProviderConfigMicrosoft";
	}
	static deserializeBinary(bytes) {
		const instance = new S2tCloudProviderConfigMicrosoft();
		S2tCloudProviderConfigMicrosoft.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.useFastTranscriptionApi = _reader.readBool();
					break;
				case 2:
					_instance.useDetailedOutputFormat = _reader.readBool();
					break;
				default: _reader.skipField();
			}
		}
		S2tCloudProviderConfigMicrosoft.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.useFastTranscriptionApi !== void 0 && _instance.useFastTranscriptionApi !== null) _writer.writeBool(1, _instance.useFastTranscriptionApi);
		if (_instance.useDetailedOutputFormat !== void 0 && _instance.useDetailedOutputFormat !== null) _writer.writeBool(2, _instance.useDetailedOutputFormat);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		S2tCloudProviderConfigMicrosoft.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			useFastTranscriptionApi: this.useFastTranscriptionApi,
			useDetailedOutputFormat: this.useDetailedOutputFormat
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			useFastTranscriptionApi: this.useFastTranscriptionApi,
			useDetailedOutputFormat: this.useDetailedOutputFormat
		};
	}
};
var TranscriptionReturnOptions = class TranscriptionReturnOptions {
	static {
		this.id = "ondewo.s2t.TranscriptionReturnOptions";
	}
	static deserializeBinary(bytes) {
		const instance = new TranscriptionReturnOptions();
		TranscriptionReturnOptions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.returnStartOfSpeech = _instance.returnStartOfSpeech || false;
		_instance.returnAudio = _instance.returnAudio || false;
		_instance.returnConfidenceScore = _instance.returnConfidenceScore || false;
		_instance.returnAlternativeTranscriptions = _instance.returnAlternativeTranscriptions || false;
		_instance.returnAlternativeTranscriptionsNr = _instance.returnAlternativeTranscriptionsNr || 0;
		_instance.returnAlternativeWords = _instance.returnAlternativeWords || false;
		_instance.returnAlternativeWordsNr = _instance.returnAlternativeWordsNr || 0;
		_instance.returnWordTiming = _instance.returnWordTiming || false;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		TranscriptionReturnOptions.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.returnStartOfSpeech) _writer.writeBool(1, _instance.returnStartOfSpeech);
		if (_instance.returnAudio) _writer.writeBool(2, _instance.returnAudio);
		if (_instance.returnConfidenceScore) _writer.writeBool(3, _instance.returnConfidenceScore);
		if (_instance.returnAlternativeTranscriptions) _writer.writeBool(4, _instance.returnAlternativeTranscriptions);
		if (_instance.returnAlternativeTranscriptionsNr) _writer.writeInt32(5, _instance.returnAlternativeTranscriptionsNr);
		if (_instance.returnAlternativeWords) _writer.writeBool(6, _instance.returnAlternativeWords);
		if (_instance.returnAlternativeWordsNr) _writer.writeInt32(7, _instance.returnAlternativeWordsNr);
		if (_instance.returnWordTiming) _writer.writeBool(8, _instance.returnWordTiming);
	}
	constructor(_value) {
		_value = _value || {};
		this.returnStartOfSpeech = _value.returnStartOfSpeech;
		this.returnAudio = _value.returnAudio;
		this.returnConfidenceScore = _value.returnConfidenceScore;
		this.returnAlternativeTranscriptions = _value.returnAlternativeTranscriptions;
		this.returnAlternativeTranscriptionsNr = _value.returnAlternativeTranscriptionsNr;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		TranscriptionReturnOptions.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
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
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
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
};
var UtteranceDetectionOptions = class UtteranceDetectionOptions {
	static {
		this.id = "ondewo.s2t.UtteranceDetectionOptions";
	}
	static deserializeBinary(bytes) {
		const instance = new UtteranceDetectionOptions();
		UtteranceDetectionOptions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.nextChunkTimeout = _instance.nextChunkTimeout || 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.transcribeNotFinal = _reader.readBool();
					break;
				case 2:
					_instance.nextChunkTimeout = _reader.readFloat();
					break;
				case 3:
					_instance.turnDetection = new TurnDetectionOptions();
					_reader.readMessage(_instance.turnDetection, TurnDetectionOptions.deserializeBinaryFromReader);
					break;
				default: _reader.skipField();
			}
		}
		UtteranceDetectionOptions.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.transcribeNotFinal || _instance.transcribeNotFinal === false) _writer.writeBool(1, _instance.transcribeNotFinal);
		if (_instance.nextChunkTimeout) _writer.writeFloat(2, _instance.nextChunkTimeout);
		if (_instance.turnDetection) _writer.writeMessage(3, _instance.turnDetection, TurnDetectionOptions.serializeBinaryToWriter);
	}
	constructor(_value) {
		this._oneofTranscribeNotFinal = UtteranceDetectionOptions.OneofTranscribeNotFinalCase.none;
		this._oneofTurnDetection = UtteranceDetectionOptions.OneofTurnDetectionCase.none;
		_value = _value || {};
		this.transcribeNotFinal = _value.transcribeNotFinal;
		this.nextChunkTimeout = _value.nextChunkTimeout;
		this.turnDetection = _value.turnDetection ? new TurnDetectionOptions(_value.turnDetection) : void 0;
		UtteranceDetectionOptions.refineValues(this);
	}
	get transcribeNotFinal() {
		return this._transcribeNotFinal;
	}
	set transcribeNotFinal(value) {
		if (value !== void 0 && value !== null) this._oneofTranscribeNotFinal = UtteranceDetectionOptions.OneofTranscribeNotFinalCase.transcribeNotFinal;
		this._transcribeNotFinal = value;
	}
	get nextChunkTimeout() {
		return this._nextChunkTimeout;
	}
	set nextChunkTimeout(value) {
		this._nextChunkTimeout = value;
	}
	get turnDetection() {
		return this._turnDetection;
	}
	set turnDetection(value) {
		if (value !== void 0 && value !== null) this._oneofTurnDetection = UtteranceDetectionOptions.OneofTurnDetectionCase.turnDetection;
		this._turnDetection = value;
	}
	get oneofTranscribeNotFinal() {
		return this._oneofTranscribeNotFinal;
	}
	get oneofTurnDetection() {
		return this._oneofTurnDetection;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		UtteranceDetectionOptions.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			transcribeNotFinal: this.transcribeNotFinal,
			nextChunkTimeout: this.nextChunkTimeout,
			turnDetection: this.turnDetection ? this.turnDetection.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			transcribeNotFinal: this.transcribeNotFinal,
			nextChunkTimeout: this.nextChunkTimeout,
			turnDetection: this.turnDetection ? this.turnDetection.toProtobufJSON(options) : null
		};
	}
};
(function(UtteranceDetectionOptions) {
	(function(OneofTranscribeNotFinalCase) {
		OneofTranscribeNotFinalCase[OneofTranscribeNotFinalCase["none"] = 0] = "none";
		OneofTranscribeNotFinalCase[OneofTranscribeNotFinalCase["transcribeNotFinal"] = 1] = "transcribeNotFinal";
	})(UtteranceDetectionOptions.OneofTranscribeNotFinalCase || (UtteranceDetectionOptions.OneofTranscribeNotFinalCase = {}));
	(function(OneofTurnDetectionCase) {
		OneofTurnDetectionCase[OneofTurnDetectionCase["none"] = 0] = "none";
		OneofTurnDetectionCase[OneofTurnDetectionCase["turnDetection"] = 1] = "turnDetection";
	})(UtteranceDetectionOptions.OneofTurnDetectionCase || (UtteranceDetectionOptions.OneofTurnDetectionCase = {}));
})(UtteranceDetectionOptions || (UtteranceDetectionOptions = {}));
var PostProcessingOptions = class PostProcessingOptions {
	static {
		this.id = "ondewo.s2t.PostProcessingOptions";
	}
	static deserializeBinary(bytes) {
		const instance = new PostProcessingOptions();
		PostProcessingOptions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.spellingCorrection = _instance.spellingCorrection || false;
		_instance.normalize = _instance.normalize || false;
		_instance.config = _instance.config || void 0;
		_instance.llmPostProcessing = _instance.llmPostProcessing || false;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				case 4:
					_instance.llmPostProcessing = _reader.readBool();
					break;
				default: _reader.skipField();
			}
		}
		PostProcessingOptions.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.spellingCorrection) _writer.writeBool(1, _instance.spellingCorrection);
		if (_instance.normalize) _writer.writeBool(2, _instance.normalize);
		if (_instance.config) _writer.writeMessage(3, _instance.config, PostProcessing.serializeBinaryToWriter);
		if (_instance.llmPostProcessing) _writer.writeBool(4, _instance.llmPostProcessing);
	}
	constructor(_value) {
		_value = _value || {};
		this.spellingCorrection = _value.spellingCorrection;
		this.normalize = _value.normalize;
		this.config = _value.config ? new PostProcessing(_value.config) : void 0;
		this.llmPostProcessing = _value.llmPostProcessing;
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
	get llmPostProcessing() {
		return this._llmPostProcessing;
	}
	set llmPostProcessing(value) {
		this._llmPostProcessing = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		PostProcessingOptions.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			spellingCorrection: this.spellingCorrection,
			normalize: this.normalize,
			config: this.config ? this.config.toObject() : void 0,
			llmPostProcessing: this.llmPostProcessing
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			spellingCorrection: this.spellingCorrection,
			normalize: this.normalize,
			config: this.config ? this.config.toProtobufJSON(options) : null,
			llmPostProcessing: this.llmPostProcessing
		};
	}
};
var Transcription = class Transcription {
	static {
		this.id = "ondewo.s2t.Transcription";
	}
	static deserializeBinary(bytes) {
		const instance = new Transcription();
		Transcription.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.transcription = _instance.transcription || "";
		_instance.confidenceScore = _instance.confidenceScore || 0;
		_instance.words = _instance.words || [];
		_instance.alternatives = _instance.alternatives || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		Transcription.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.transcription) _writer.writeString(1, _instance.transcription);
		if (_instance.confidenceScore) _writer.writeFloat(2, _instance.confidenceScore);
		if (_instance.words && _instance.words.length) _writer.writeRepeatedMessage(3, _instance.words, WordDetail.serializeBinaryToWriter);
		if (_instance.alternatives && _instance.alternatives.length) _writer.writeRepeatedMessage(4, _instance.alternatives, TranscriptionAlternative.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.transcription = _value.transcription;
		this.confidenceScore = _value.confidenceScore;
		this.words = (_value.words || []).map((m) => new WordDetail(m));
		this.alternatives = (_value.alternatives || []).map((m) => new TranscriptionAlternative(m));
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
	serializeBinary() {
		const writer = new BinaryWriter();
		Transcription.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			transcription: this.transcription,
			confidenceScore: this.confidenceScore,
			words: (this.words || []).map((m) => m.toObject()),
			alternatives: (this.alternatives || []).map((m) => m.toObject())
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			transcription: this.transcription,
			confidenceScore: this.confidenceScore,
			words: (this.words || []).map((m) => m.toProtobufJSON(options)),
			alternatives: (this.alternatives || []).map((m) => m.toProtobufJSON(options))
		};
	}
};
var TranscriptionAlternative = class TranscriptionAlternative {
	static {
		this.id = "ondewo.s2t.TranscriptionAlternative";
	}
	static deserializeBinary(bytes) {
		const instance = new TranscriptionAlternative();
		TranscriptionAlternative.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.transcript = _instance.transcript || "";
		_instance.confidence = _instance.confidence || 0;
		_instance.words = _instance.words || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		TranscriptionAlternative.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.transcript) _writer.writeString(1, _instance.transcript);
		if (_instance.confidence) _writer.writeFloat(2, _instance.confidence);
		if (_instance.words && _instance.words.length) _writer.writeRepeatedMessage(3, _instance.words, WordDetail.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.transcript = _value.transcript;
		this.confidence = _value.confidence;
		this.words = (_value.words || []).map((m) => new WordDetail(m));
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
	serializeBinary() {
		const writer = new BinaryWriter();
		TranscriptionAlternative.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			transcript: this.transcript,
			confidence: this.confidence,
			words: (this.words || []).map((m) => m.toObject())
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			transcript: this.transcript,
			confidence: this.confidence,
			words: (this.words || []).map((m) => m.toProtobufJSON(options))
		};
	}
};
var WordDetail = class WordDetail {
	static {
		this.id = "ondewo.s2t.WordDetail";
	}
	static deserializeBinary(bytes) {
		const instance = new WordDetail();
		WordDetail.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.startTime = _instance.startTime || 0;
		_instance.endTime = _instance.endTime || 0;
		_instance.word = _instance.word || "";
		_instance.confidence = _instance.confidence || 0;
		_instance.wordAlternatives = _instance.wordAlternatives || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		WordDetail.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.startTime) _writer.writeFloat(1, _instance.startTime);
		if (_instance.endTime) _writer.writeFloat(2, _instance.endTime);
		if (_instance.word) _writer.writeString(3, _instance.word);
		if (_instance.confidence) _writer.writeFloat(4, _instance.confidence);
		if (_instance.wordAlternatives && _instance.wordAlternatives.length) _writer.writeRepeatedMessage(5, _instance.wordAlternatives, WordAlternative.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.startTime = _value.startTime;
		this.endTime = _value.endTime;
		this.word = _value.word;
		this.confidence = _value.confidence;
		this.wordAlternatives = (_value.wordAlternatives || []).map((m) => new WordAlternative(m));
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
	serializeBinary() {
		const writer = new BinaryWriter();
		WordDetail.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			startTime: this.startTime,
			endTime: this.endTime,
			word: this.word,
			confidence: this.confidence,
			wordAlternatives: (this.wordAlternatives || []).map((m) => m.toObject())
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			startTime: this.startTime,
			endTime: this.endTime,
			word: this.word,
			confidence: this.confidence,
			wordAlternatives: (this.wordAlternatives || []).map((m) => m.toProtobufJSON(options))
		};
	}
};
var WordAlternative = class WordAlternative {
	static {
		this.id = "ondewo.s2t.WordAlternative";
	}
	static deserializeBinary(bytes) {
		const instance = new WordAlternative();
		WordAlternative.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.word = _instance.word || "";
		_instance.confidence = _instance.confidence || 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.word = _reader.readString();
					break;
				case 2:
					_instance.confidence = _reader.readFloat();
					break;
				default: _reader.skipField();
			}
		}
		WordAlternative.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.word) _writer.writeString(1, _instance.word);
		if (_instance.confidence) _writer.writeFloat(2, _instance.confidence);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		WordAlternative.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			word: this.word,
			confidence: this.confidence
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			word: this.word,
			confidence: this.confidence
		};
	}
};
var TranscribeStreamRequest = class TranscribeStreamRequest {
	static {
		this.id = "ondewo.s2t.TranscribeStreamRequest";
	}
	static deserializeBinary(bytes) {
		const instance = new TranscribeStreamRequest();
		TranscribeStreamRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.audioChunk = _instance.audioChunk || /* @__PURE__ */ new Uint8Array();
		_instance.endOfStream = _instance.endOfStream || false;
		_instance.config = _instance.config || void 0;
		_instance.muteAudio = _instance.muteAudio || false;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		TranscribeStreamRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.audioChunk && _instance.audioChunk.length) _writer.writeBytes(1, _instance.audioChunk);
		if (_instance.endOfStream) _writer.writeBool(2, _instance.endOfStream);
		if (_instance.config) _writer.writeMessage(3, _instance.config, TranscribeRequestConfig.serializeBinaryToWriter);
		if (_instance.muteAudio) _writer.writeBool(4, _instance.muteAudio);
	}
	constructor(_value) {
		_value = _value || {};
		this.audioChunk = _value.audioChunk;
		this.endOfStream = _value.endOfStream;
		this.config = _value.config ? new TranscribeRequestConfig(_value.config) : void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		TranscribeStreamRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			audioChunk: this.audioChunk ? this.audioChunk.subarray(0) : /* @__PURE__ */ new Uint8Array(),
			endOfStream: this.endOfStream,
			config: this.config ? this.config.toObject() : void 0,
			muteAudio: this.muteAudio
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			audioChunk: this.audioChunk ? uint8ArrayToBase64(this.audioChunk) : "",
			endOfStream: this.endOfStream,
			config: this.config ? this.config.toProtobufJSON(options) : null,
			muteAudio: this.muteAudio
		};
	}
};
var TranscribeStreamResponse = class TranscribeStreamResponse {
	static {
		this.id = "ondewo.s2t.TranscribeStreamResponse";
	}
	static deserializeBinary(bytes) {
		const instance = new TranscribeStreamResponse();
		TranscribeStreamResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.transcriptions = _instance.transcriptions || [];
		_instance.time = _instance.time || 0;
		_instance.final = _instance.final || false;
		_instance.returnAudio = _instance.returnAudio || false;
		_instance.audio = _instance.audio || /* @__PURE__ */ new Uint8Array();
		_instance.utteranceStart = _instance.utteranceStart || false;
		_instance.audioUuid = _instance.audioUuid || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		TranscribeStreamResponse.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.transcriptions && _instance.transcriptions.length) _writer.writeRepeatedMessage(1, _instance.transcriptions, Transcription.serializeBinaryToWriter);
		if (_instance.time) _writer.writeFloat(2, _instance.time);
		if (_instance.final) _writer.writeBool(3, _instance.final);
		if (_instance.returnAudio) _writer.writeBool(4, _instance.returnAudio);
		if (_instance.audio && _instance.audio.length) _writer.writeBytes(5, _instance.audio);
		if (_instance.utteranceStart) _writer.writeBool(6, _instance.utteranceStart);
		if (_instance.audioUuid) _writer.writeString(7, _instance.audioUuid);
		if (_instance.config) _writer.writeMessage(8, _instance.config, TranscribeRequestConfig.serializeBinaryToWriter);
	}
	constructor(_value) {
		this._oneofConfig = TranscribeStreamResponse.OneofConfigCase.none;
		_value = _value || {};
		this.transcriptions = (_value.transcriptions || []).map((m) => new Transcription(m));
		this.time = _value.time;
		this.final = _value.final;
		this.returnAudio = _value.returnAudio;
		this.audio = _value.audio;
		this.utteranceStart = _value.utteranceStart;
		this.audioUuid = _value.audioUuid;
		this.config = _value.config ? new TranscribeRequestConfig(_value.config) : void 0;
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
		if (value !== void 0 && value !== null) this._oneofConfig = TranscribeStreamResponse.OneofConfigCase.config;
		this._config = value;
	}
	get oneofConfig() {
		return this._oneofConfig;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		TranscribeStreamResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			transcriptions: (this.transcriptions || []).map((m) => m.toObject()),
			time: this.time,
			final: this.final,
			returnAudio: this.returnAudio,
			audio: this.audio ? this.audio.subarray(0) : /* @__PURE__ */ new Uint8Array(),
			utteranceStart: this.utteranceStart,
			audioUuid: this.audioUuid,
			config: this.config ? this.config.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			transcriptions: (this.transcriptions || []).map((m) => m.toProtobufJSON(options)),
			time: this.time,
			final: this.final,
			returnAudio: this.returnAudio,
			audio: this.audio ? uint8ArrayToBase64(this.audio) : "",
			utteranceStart: this.utteranceStart,
			audioUuid: this.audioUuid,
			config: this.config ? this.config.toProtobufJSON(options) : null
		};
	}
};
(function(TranscribeStreamResponse) {
	(function(OneofConfigCase) {
		OneofConfigCase[OneofConfigCase["none"] = 0] = "none";
		OneofConfigCase[OneofConfigCase["config"] = 1] = "config";
	})(TranscribeStreamResponse.OneofConfigCase || (TranscribeStreamResponse.OneofConfigCase = {}));
})(TranscribeStreamResponse || (TranscribeStreamResponse = {}));
var TranscribeFileRequest = class TranscribeFileRequest {
	static {
		this.id = "ondewo.s2t.TranscribeFileRequest";
	}
	static deserializeBinary(bytes) {
		const instance = new TranscribeFileRequest();
		TranscribeFileRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.audioFile = _instance.audioFile || /* @__PURE__ */ new Uint8Array();
		_instance.config = _instance.config || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.audioFile = _reader.readBytes();
					break;
				case 2:
					_instance.config = new TranscribeRequestConfig();
					_reader.readMessage(_instance.config, TranscribeRequestConfig.deserializeBinaryFromReader);
					break;
				default: _reader.skipField();
			}
		}
		TranscribeFileRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.audioFile && _instance.audioFile.length) _writer.writeBytes(1, _instance.audioFile);
		if (_instance.config) _writer.writeMessage(2, _instance.config, TranscribeRequestConfig.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.audioFile = _value.audioFile;
		this.config = _value.config ? new TranscribeRequestConfig(_value.config) : void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		TranscribeFileRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			audioFile: this.audioFile ? this.audioFile.subarray(0) : /* @__PURE__ */ new Uint8Array(),
			config: this.config ? this.config.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			audioFile: this.audioFile ? uint8ArrayToBase64(this.audioFile) : "",
			config: this.config ? this.config.toProtobufJSON(options) : null
		};
	}
};
var TranscribeFileResponse = class TranscribeFileResponse {
	static {
		this.id = "ondewo.s2t.TranscribeFileResponse";
	}
	static deserializeBinary(bytes) {
		const instance = new TranscribeFileResponse();
		TranscribeFileResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.transcriptions = _instance.transcriptions || [];
		_instance.time = _instance.time || 0;
		_instance.audioUuid = _instance.audioUuid || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		TranscribeFileResponse.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.transcriptions && _instance.transcriptions.length) _writer.writeRepeatedMessage(1, _instance.transcriptions, Transcription.serializeBinaryToWriter);
		if (_instance.time) _writer.writeFloat(2, _instance.time);
		if (_instance.audioUuid) _writer.writeString(3, _instance.audioUuid);
	}
	constructor(_value) {
		_value = _value || {};
		this.transcriptions = (_value.transcriptions || []).map((m) => new Transcription(m));
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
	serializeBinary() {
		const writer = new BinaryWriter();
		TranscribeFileResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			transcriptions: (this.transcriptions || []).map((m) => m.toObject()),
			time: this.time,
			audioUuid: this.audioUuid
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			transcriptions: (this.transcriptions || []).map((m) => m.toProtobufJSON(options)),
			time: this.time,
			audioUuid: this.audioUuid
		};
	}
};
var S2tPipelineId = class S2tPipelineId {
	static {
		this.id = "ondewo.s2t.S2tPipelineId";
	}
	static deserializeBinary(bytes) {
		const instance = new S2tPipelineId();
		S2tPipelineId.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.id = _instance.id || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.id = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		S2tPipelineId.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.id) _writer.writeString(1, _instance.id);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		S2tPipelineId.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { id: this.id };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { id: this.id };
	}
};
var ListS2tPipelinesRequest = class ListS2tPipelinesRequest {
	static {
		this.id = "ondewo.s2t.ListS2tPipelinesRequest";
	}
	static deserializeBinary(bytes) {
		const instance = new ListS2tPipelinesRequest();
		ListS2tPipelinesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.languages = _instance.languages || [];
		_instance.pipelineOwners = _instance.pipelineOwners || [];
		_instance.domains = _instance.domains || [];
		_instance.registeredOnly = _instance.registeredOnly || false;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		ListS2tPipelinesRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.languages && _instance.languages.length) _writer.writeRepeatedString(1, _instance.languages);
		if (_instance.pipelineOwners && _instance.pipelineOwners.length) _writer.writeRepeatedString(2, _instance.pipelineOwners);
		if (_instance.domains && _instance.domains.length) _writer.writeRepeatedString(3, _instance.domains);
		if (_instance.registeredOnly) _writer.writeBool(4, _instance.registeredOnly);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		ListS2tPipelinesRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			languages: (this.languages || []).slice(),
			pipelineOwners: (this.pipelineOwners || []).slice(),
			domains: (this.domains || []).slice(),
			registeredOnly: this.registeredOnly
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			languages: (this.languages || []).slice(),
			pipelineOwners: (this.pipelineOwners || []).slice(),
			domains: (this.domains || []).slice(),
			registeredOnly: this.registeredOnly
		};
	}
};
var ListS2tPipelinesResponse = class ListS2tPipelinesResponse {
	static {
		this.id = "ondewo.s2t.ListS2tPipelinesResponse";
	}
	static deserializeBinary(bytes) {
		const instance = new ListS2tPipelinesResponse();
		ListS2tPipelinesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.pipelineConfigs = _instance.pipelineConfigs || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					const messageInitializer1 = new Speech2TextConfig();
					_reader.readMessage(messageInitializer1, Speech2TextConfig.deserializeBinaryFromReader);
					(_instance.pipelineConfigs = _instance.pipelineConfigs || []).push(messageInitializer1);
					break;
				default: _reader.skipField();
			}
		}
		ListS2tPipelinesResponse.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.pipelineConfigs && _instance.pipelineConfigs.length) _writer.writeRepeatedMessage(1, _instance.pipelineConfigs, Speech2TextConfig.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.pipelineConfigs = (_value.pipelineConfigs || []).map((m) => new Speech2TextConfig(m));
		ListS2tPipelinesResponse.refineValues(this);
	}
	get pipelineConfigs() {
		return this._pipelineConfigs;
	}
	set pipelineConfigs(value) {
		this._pipelineConfigs = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		ListS2tPipelinesResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { pipelineConfigs: (this.pipelineConfigs || []).map((m) => m.toObject()) };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { pipelineConfigs: (this.pipelineConfigs || []).map((m) => m.toProtobufJSON(options)) };
	}
};
var ListS2tLanguagesRequest = class ListS2tLanguagesRequest {
	static {
		this.id = "ondewo.s2t.ListS2tLanguagesRequest";
	}
	static deserializeBinary(bytes) {
		const instance = new ListS2tLanguagesRequest();
		ListS2tLanguagesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.domains = _instance.domains || [];
		_instance.pipelineOwners = _instance.pipelineOwners || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.domains = _instance.domains || []).push(_reader.readString());
					break;
				case 2:
					(_instance.pipelineOwners = _instance.pipelineOwners || []).push(_reader.readString());
					break;
				default: _reader.skipField();
			}
		}
		ListS2tLanguagesRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.domains && _instance.domains.length) _writer.writeRepeatedString(1, _instance.domains);
		if (_instance.pipelineOwners && _instance.pipelineOwners.length) _writer.writeRepeatedString(2, _instance.pipelineOwners);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		ListS2tLanguagesRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
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
	toProtobufJSON(options) {
		return {
			domains: (this.domains || []).slice(),
			pipelineOwners: (this.pipelineOwners || []).slice()
		};
	}
};
var ListS2tLanguagesResponse = class ListS2tLanguagesResponse {
	static {
		this.id = "ondewo.s2t.ListS2tLanguagesResponse";
	}
	static deserializeBinary(bytes) {
		const instance = new ListS2tLanguagesResponse();
		ListS2tLanguagesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.languages = _instance.languages || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.languages = _instance.languages || []).push(_reader.readString());
					break;
				default: _reader.skipField();
			}
		}
		ListS2tLanguagesResponse.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.languages && _instance.languages.length) _writer.writeRepeatedString(1, _instance.languages);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		ListS2tLanguagesResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { languages: (this.languages || []).slice() };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { languages: (this.languages || []).slice() };
	}
};
var ListS2tDomainsRequest = class ListS2tDomainsRequest {
	static {
		this.id = "ondewo.s2t.ListS2tDomainsRequest";
	}
	static deserializeBinary(bytes) {
		const instance = new ListS2tDomainsRequest();
		ListS2tDomainsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.languages = _instance.languages || [];
		_instance.pipelineOwners = _instance.pipelineOwners || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.languages = _instance.languages || []).push(_reader.readString());
					break;
				case 2:
					(_instance.pipelineOwners = _instance.pipelineOwners || []).push(_reader.readString());
					break;
				default: _reader.skipField();
			}
		}
		ListS2tDomainsRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.languages && _instance.languages.length) _writer.writeRepeatedString(1, _instance.languages);
		if (_instance.pipelineOwners && _instance.pipelineOwners.length) _writer.writeRepeatedString(2, _instance.pipelineOwners);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		ListS2tDomainsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
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
	toProtobufJSON(options) {
		return {
			languages: (this.languages || []).slice(),
			pipelineOwners: (this.pipelineOwners || []).slice()
		};
	}
};
var ListS2tDomainsResponse = class ListS2tDomainsResponse {
	static {
		this.id = "ondewo.s2t.ListS2tDomainsResponse";
	}
	static deserializeBinary(bytes) {
		const instance = new ListS2tDomainsResponse();
		ListS2tDomainsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.domains = _instance.domains || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.domains = _instance.domains || []).push(_reader.readString());
					break;
				default: _reader.skipField();
			}
		}
		ListS2tDomainsResponse.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.domains && _instance.domains.length) _writer.writeRepeatedString(1, _instance.domains);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		ListS2tDomainsResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { domains: (this.domains || []).slice() };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { domains: (this.domains || []).slice() };
	}
};
var S2tGetServiceInfoResponse = class S2tGetServiceInfoResponse {
	static {
		this.id = "ondewo.s2t.S2tGetServiceInfoResponse";
	}
	static deserializeBinary(bytes) {
		const instance = new S2tGetServiceInfoResponse();
		S2tGetServiceInfoResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.version = _instance.version || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.version = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		S2tGetServiceInfoResponse.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.version) _writer.writeString(1, _instance.version);
	}
	constructor(_value) {
		_value = _value || {};
		this.version = _value.version;
		S2tGetServiceInfoResponse.refineValues(this);
	}
	get version() {
		return this._version;
	}
	set version(value) {
		this._version = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		S2tGetServiceInfoResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { version: this.version };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { version: this.version };
	}
};
var Speech2TextConfig = class Speech2TextConfig {
	static {
		this.id = "ondewo.s2t.Speech2TextConfig";
	}
	static deserializeBinary(bytes) {
		const instance = new Speech2TextConfig();
		Speech2TextConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.id = _instance.id || "";
		_instance.description = _instance.description || void 0;
		_instance.active = _instance.active || false;
		_instance.inference = _instance.inference || void 0;
		_instance.streamingServer = _instance.streamingServer || void 0;
		_instance.voiceActivityDetection = _instance.voiceActivityDetection || void 0;
		_instance.postProcessing = _instance.postProcessing || void 0;
		_instance.logging = _instance.logging || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.id = _reader.readString();
					break;
				case 2:
					_instance.description = new S2tDescription();
					_reader.readMessage(_instance.description, S2tDescription.deserializeBinaryFromReader);
					break;
				case 3:
					_instance.active = _reader.readBool();
					break;
				case 4:
					_instance.inference = new S2tInference();
					_reader.readMessage(_instance.inference, S2tInference.deserializeBinaryFromReader);
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
				default: _reader.skipField();
			}
		}
		Speech2TextConfig.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.id) _writer.writeString(1, _instance.id);
		if (_instance.description) _writer.writeMessage(2, _instance.description, S2tDescription.serializeBinaryToWriter);
		if (_instance.active) _writer.writeBool(3, _instance.active);
		if (_instance.inference) _writer.writeMessage(4, _instance.inference, S2tInference.serializeBinaryToWriter);
		if (_instance.streamingServer) _writer.writeMessage(5, _instance.streamingServer, StreamingServer.serializeBinaryToWriter);
		if (_instance.voiceActivityDetection) _writer.writeMessage(6, _instance.voiceActivityDetection, VoiceActivityDetection.serializeBinaryToWriter);
		if (_instance.postProcessing) _writer.writeMessage(7, _instance.postProcessing, PostProcessing.serializeBinaryToWriter);
		if (_instance.logging) _writer.writeMessage(8, _instance.logging, Logging.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.id = _value.id;
		this.description = _value.description ? new S2tDescription(_value.description) : void 0;
		this.active = _value.active;
		this.inference = _value.inference ? new S2tInference(_value.inference) : void 0;
		this.streamingServer = _value.streamingServer ? new StreamingServer(_value.streamingServer) : void 0;
		this.voiceActivityDetection = _value.voiceActivityDetection ? new VoiceActivityDetection(_value.voiceActivityDetection) : void 0;
		this.postProcessing = _value.postProcessing ? new PostProcessing(_value.postProcessing) : void 0;
		this.logging = _value.logging ? new Logging(_value.logging) : void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		Speech2TextConfig.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			id: this.id,
			description: this.description ? this.description.toObject() : void 0,
			active: this.active,
			inference: this.inference ? this.inference.toObject() : void 0,
			streamingServer: this.streamingServer ? this.streamingServer.toObject() : void 0,
			voiceActivityDetection: this.voiceActivityDetection ? this.voiceActivityDetection.toObject() : void 0,
			postProcessing: this.postProcessing ? this.postProcessing.toObject() : void 0,
			logging: this.logging ? this.logging.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			id: this.id,
			description: this.description ? this.description.toProtobufJSON(options) : null,
			active: this.active,
			inference: this.inference ? this.inference.toProtobufJSON(options) : null,
			streamingServer: this.streamingServer ? this.streamingServer.toProtobufJSON(options) : null,
			voiceActivityDetection: this.voiceActivityDetection ? this.voiceActivityDetection.toProtobufJSON(options) : null,
			postProcessing: this.postProcessing ? this.postProcessing.toProtobufJSON(options) : null,
			logging: this.logging ? this.logging.toProtobufJSON(options) : null
		};
	}
};
var S2tDescription = class S2tDescription {
	static {
		this.id = "ondewo.s2t.S2tDescription";
	}
	static deserializeBinary(bytes) {
		const instance = new S2tDescription();
		S2tDescription.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.language = _instance.language || "";
		_instance.pipelineOwner = _instance.pipelineOwner || "";
		_instance.domain = _instance.domain || "";
		_instance.comments = _instance.comments || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		S2tDescription.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.language) _writer.writeString(1, _instance.language);
		if (_instance.pipelineOwner) _writer.writeString(2, _instance.pipelineOwner);
		if (_instance.domain) _writer.writeString(3, _instance.domain);
		if (_instance.comments) _writer.writeString(4, _instance.comments);
	}
	constructor(_value) {
		_value = _value || {};
		this.language = _value.language;
		this.pipelineOwner = _value.pipelineOwner;
		this.domain = _value.domain;
		this.comments = _value.comments;
		S2tDescription.refineValues(this);
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
	serializeBinary() {
		const writer = new BinaryWriter();
		S2tDescription.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
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
	toProtobufJSON(options) {
		return {
			language: this.language,
			pipelineOwner: this.pipelineOwner,
			domain: this.domain,
			comments: this.comments
		};
	}
};
var S2tInference = class S2tInference {
	static {
		this.id = "ondewo.s2t.S2tInference";
	}
	static deserializeBinary(bytes) {
		const instance = new S2tInference();
		S2tInference.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.acousticModels = _instance.acousticModels || void 0;
		_instance.languageModels = _instance.languageModels || void 0;
		_instance.inferenceBackend = _instance.inferenceBackend || 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		S2tInference.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.acousticModels) _writer.writeMessage(1, _instance.acousticModels, AcousticModels.serializeBinaryToWriter);
		if (_instance.languageModels) _writer.writeMessage(2, _instance.languageModels, LanguageModels.serializeBinaryToWriter);
		if (_instance.inferenceBackend) _writer.writeEnum(3, _instance.inferenceBackend);
	}
	constructor(_value) {
		_value = _value || {};
		this.acousticModels = _value.acousticModels ? new AcousticModels(_value.acousticModels) : void 0;
		this.languageModels = _value.languageModels ? new LanguageModels(_value.languageModels) : void 0;
		this.inferenceBackend = _value.inferenceBackend;
		S2tInference.refineValues(this);
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
	serializeBinary() {
		const writer = new BinaryWriter();
		S2tInference.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			acousticModels: this.acousticModels ? this.acousticModels.toObject() : void 0,
			languageModels: this.languageModels ? this.languageModels.toObject() : void 0,
			inferenceBackend: this.inferenceBackend
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			acousticModels: this.acousticModels ? this.acousticModels.toProtobufJSON(options) : null,
			languageModels: this.languageModels ? this.languageModels.toProtobufJSON(options) : null,
			inferenceBackend: InferenceBackend[this.inferenceBackend === null || this.inferenceBackend === void 0 ? 0 : this.inferenceBackend]
		};
	}
};
var AcousticModels = class AcousticModels {
	static {
		this.id = "ondewo.s2t.AcousticModels";
	}
	static deserializeBinary(bytes) {
		const instance = new AcousticModels();
		AcousticModels.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.type = _instance.type || "";
		_instance.wav2vec = _instance.wav2vec || void 0;
		_instance.wav2vecTriton = _instance.wav2vecTriton || void 0;
		_instance.whisper = _instance.whisper || void 0;
		_instance.whisperTriton = _instance.whisperTriton || void 0;
		_instance.s2tCloudServiceAmazon = _instance.s2tCloudServiceAmazon || void 0;
		_instance.s2tCloudServiceDeepgram = _instance.s2tCloudServiceDeepgram || void 0;
		_instance.s2tCloudServiceGoogle = _instance.s2tCloudServiceGoogle || void 0;
		_instance.s2tCloudServiceMicrosoft = _instance.s2tCloudServiceMicrosoft || void 0;
		_instance.parakeet = _instance.parakeet || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				case 10:
					_instance.parakeet = new Parakeet();
					_reader.readMessage(_instance.parakeet, Parakeet.deserializeBinaryFromReader);
					break;
				default: _reader.skipField();
			}
		}
		AcousticModels.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.type) _writer.writeString(1, _instance.type);
		if (_instance.wav2vec) _writer.writeMessage(2, _instance.wav2vec, Wav2Vec.serializeBinaryToWriter);
		if (_instance.wav2vecTriton) _writer.writeMessage(3, _instance.wav2vecTriton, Wav2VecTriton.serializeBinaryToWriter);
		if (_instance.whisper) _writer.writeMessage(4, _instance.whisper, Whisper.serializeBinaryToWriter);
		if (_instance.whisperTriton) _writer.writeMessage(5, _instance.whisperTriton, WhisperTriton.serializeBinaryToWriter);
		if (_instance.s2tCloudServiceAmazon) _writer.writeMessage(6, _instance.s2tCloudServiceAmazon, S2tCloudServiceAmazon.serializeBinaryToWriter);
		if (_instance.s2tCloudServiceDeepgram) _writer.writeMessage(7, _instance.s2tCloudServiceDeepgram, S2tCloudServiceDeepgram.serializeBinaryToWriter);
		if (_instance.s2tCloudServiceGoogle) _writer.writeMessage(8, _instance.s2tCloudServiceGoogle, S2tCloudServiceGoogle.serializeBinaryToWriter);
		if (_instance.s2tCloudServiceMicrosoft) _writer.writeMessage(9, _instance.s2tCloudServiceMicrosoft, S2tCloudServiceMicrosoft.serializeBinaryToWriter);
		if (_instance.parakeet) _writer.writeMessage(10, _instance.parakeet, Parakeet.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.type = _value.type;
		this.wav2vec = _value.wav2vec ? new Wav2Vec(_value.wav2vec) : void 0;
		this.wav2vecTriton = _value.wav2vecTriton ? new Wav2VecTriton(_value.wav2vecTriton) : void 0;
		this.whisper = _value.whisper ? new Whisper(_value.whisper) : void 0;
		this.whisperTriton = _value.whisperTriton ? new WhisperTriton(_value.whisperTriton) : void 0;
		this.s2tCloudServiceAmazon = _value.s2tCloudServiceAmazon ? new S2tCloudServiceAmazon(_value.s2tCloudServiceAmazon) : void 0;
		this.s2tCloudServiceDeepgram = _value.s2tCloudServiceDeepgram ? new S2tCloudServiceDeepgram(_value.s2tCloudServiceDeepgram) : void 0;
		this.s2tCloudServiceGoogle = _value.s2tCloudServiceGoogle ? new S2tCloudServiceGoogle(_value.s2tCloudServiceGoogle) : void 0;
		this.s2tCloudServiceMicrosoft = _value.s2tCloudServiceMicrosoft ? new S2tCloudServiceMicrosoft(_value.s2tCloudServiceMicrosoft) : void 0;
		this.parakeet = _value.parakeet ? new Parakeet(_value.parakeet) : void 0;
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
	get parakeet() {
		return this._parakeet;
	}
	set parakeet(value) {
		this._parakeet = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		AcousticModels.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			type: this.type,
			wav2vec: this.wav2vec ? this.wav2vec.toObject() : void 0,
			wav2vecTriton: this.wav2vecTriton ? this.wav2vecTriton.toObject() : void 0,
			whisper: this.whisper ? this.whisper.toObject() : void 0,
			whisperTriton: this.whisperTriton ? this.whisperTriton.toObject() : void 0,
			s2tCloudServiceAmazon: this.s2tCloudServiceAmazon ? this.s2tCloudServiceAmazon.toObject() : void 0,
			s2tCloudServiceDeepgram: this.s2tCloudServiceDeepgram ? this.s2tCloudServiceDeepgram.toObject() : void 0,
			s2tCloudServiceGoogle: this.s2tCloudServiceGoogle ? this.s2tCloudServiceGoogle.toObject() : void 0,
			s2tCloudServiceMicrosoft: this.s2tCloudServiceMicrosoft ? this.s2tCloudServiceMicrosoft.toObject() : void 0,
			parakeet: this.parakeet ? this.parakeet.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			type: this.type,
			wav2vec: this.wav2vec ? this.wav2vec.toProtobufJSON(options) : null,
			wav2vecTriton: this.wav2vecTriton ? this.wav2vecTriton.toProtobufJSON(options) : null,
			whisper: this.whisper ? this.whisper.toProtobufJSON(options) : null,
			whisperTriton: this.whisperTriton ? this.whisperTriton.toProtobufJSON(options) : null,
			s2tCloudServiceAmazon: this.s2tCloudServiceAmazon ? this.s2tCloudServiceAmazon.toProtobufJSON(options) : null,
			s2tCloudServiceDeepgram: this.s2tCloudServiceDeepgram ? this.s2tCloudServiceDeepgram.toProtobufJSON(options) : null,
			s2tCloudServiceGoogle: this.s2tCloudServiceGoogle ? this.s2tCloudServiceGoogle.toProtobufJSON(options) : null,
			s2tCloudServiceMicrosoft: this.s2tCloudServiceMicrosoft ? this.s2tCloudServiceMicrosoft.toProtobufJSON(options) : null,
			parakeet: this.parakeet ? this.parakeet.toProtobufJSON(options) : null
		};
	}
};
var S2tCloudServiceAmazon = class S2tCloudServiceAmazon {
	static {
		this.id = "ondewo.s2t.S2tCloudServiceAmazon";
	}
	static deserializeBinary(bytes) {
		const instance = new S2tCloudServiceAmazon();
		S2tCloudServiceAmazon.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.language = _instance.language || "";
		_instance.streamingAvailable = _instance.streamingAvailable || false;
		_instance.enablePartialResultsStabilization = _instance.enablePartialResultsStabilization || false;
		_instance.partialResultsStability = _instance.partialResultsStability || "";
		_instance.languageModelName = _instance.languageModelName || "";
		_instance.vocabularyName = _instance.vocabularyName || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		S2tCloudServiceAmazon.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.language) _writer.writeString(1, _instance.language);
		if (_instance.streamingAvailable) _writer.writeBool(2, _instance.streamingAvailable);
		if (_instance.enablePartialResultsStabilization) _writer.writeBool(3, _instance.enablePartialResultsStabilization);
		if (_instance.partialResultsStability) _writer.writeString(4, _instance.partialResultsStability);
		if (_instance.languageModelName) _writer.writeString(5, _instance.languageModelName);
		if (_instance.vocabularyName) _writer.writeString(6, _instance.vocabularyName);
	}
	constructor(_value) {
		_value = _value || {};
		this.language = _value.language;
		this.streamingAvailable = _value.streamingAvailable;
		this.enablePartialResultsStabilization = _value.enablePartialResultsStabilization;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		S2tCloudServiceAmazon.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
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
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			language: this.language,
			streamingAvailable: this.streamingAvailable,
			enablePartialResultsStabilization: this.enablePartialResultsStabilization,
			partialResultsStability: this.partialResultsStability,
			languageModelName: this.languageModelName,
			vocabularyName: this.vocabularyName
		};
	}
};
var S2tCloudServiceDeepgram = class S2tCloudServiceDeepgram {
	static {
		this.id = "ondewo.s2t.S2tCloudServiceDeepgram";
	}
	static deserializeBinary(bytes) {
		const instance = new S2tCloudServiceDeepgram();
		S2tCloudServiceDeepgram.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.modelName = _instance.modelName || "";
		_instance.language = _instance.language || "";
		_instance.punctuate = _instance.punctuate || false;
		_instance.smartFormat = _instance.smartFormat || false;
		_instance.numerals = _instance.numerals || false;
		_instance.measurements = _instance.measurements || false;
		_instance.dictation = _instance.dictation || false;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		S2tCloudServiceDeepgram.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.modelName) _writer.writeString(1, _instance.modelName);
		if (_instance.language) _writer.writeString(2, _instance.language);
		if (_instance.punctuate) _writer.writeBool(3, _instance.punctuate);
		if (_instance.smartFormat) _writer.writeBool(4, _instance.smartFormat);
		if (_instance.numerals) _writer.writeBool(5, _instance.numerals);
		if (_instance.measurements) _writer.writeBool(6, _instance.measurements);
		if (_instance.dictation) _writer.writeBool(7, _instance.dictation);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		S2tCloudServiceDeepgram.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
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
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
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
};
var S2tCloudServiceGoogle = class S2tCloudServiceGoogle {
	static {
		this.id = "ondewo.s2t.S2tCloudServiceGoogle";
	}
	static deserializeBinary(bytes) {
		const instance = new S2tCloudServiceGoogle();
		S2tCloudServiceGoogle.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.modelName = _instance.modelName || "";
		_instance.language = _instance.language || "";
		_instance.enableAutomaticPunctuation = _instance.enableAutomaticPunctuation || false;
		_instance.enableWordTimeOffsets = _instance.enableWordTimeOffsets || false;
		_instance.enableWordConfidence = _instance.enableWordConfidence || false;
		_instance.transcriptNormalization = _instance.transcriptNormalization || false;
		_instance.maxAlternatives = _instance.maxAlternatives || 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		S2tCloudServiceGoogle.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.modelName) _writer.writeString(1, _instance.modelName);
		if (_instance.language) _writer.writeString(2, _instance.language);
		if (_instance.enableAutomaticPunctuation) _writer.writeBool(3, _instance.enableAutomaticPunctuation);
		if (_instance.enableWordTimeOffsets) _writer.writeBool(4, _instance.enableWordTimeOffsets);
		if (_instance.enableWordConfidence) _writer.writeBool(5, _instance.enableWordConfidence);
		if (_instance.transcriptNormalization) _writer.writeBool(6, _instance.transcriptNormalization);
		if (_instance.maxAlternatives) _writer.writeInt32(7, _instance.maxAlternatives);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		S2tCloudServiceGoogle.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
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
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
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
};
var S2tCloudServiceMicrosoft = class S2tCloudServiceMicrosoft {
	static {
		this.id = "ondewo.s2t.S2tCloudServiceMicrosoft";
	}
	static deserializeBinary(bytes) {
		const instance = new S2tCloudServiceMicrosoft();
		S2tCloudServiceMicrosoft.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.language = _instance.language || "";
		_instance.useFastTranscriptionApi = _instance.useFastTranscriptionApi || false;
		_instance.useDetailedOutputFormat = _instance.useDetailedOutputFormat || false;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		S2tCloudServiceMicrosoft.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.language) _writer.writeString(1, _instance.language);
		if (_instance.useFastTranscriptionApi) _writer.writeBool(2, _instance.useFastTranscriptionApi);
		if (_instance.useDetailedOutputFormat) _writer.writeBool(3, _instance.useDetailedOutputFormat);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		S2tCloudServiceMicrosoft.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			language: this.language,
			useFastTranscriptionApi: this.useFastTranscriptionApi,
			useDetailedOutputFormat: this.useDetailedOutputFormat
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			language: this.language,
			useFastTranscriptionApi: this.useFastTranscriptionApi,
			useDetailedOutputFormat: this.useDetailedOutputFormat
		};
	}
};
var Whisper = class Whisper {
	static {
		this.id = "ondewo.s2t.Whisper";
	}
	static deserializeBinary(bytes) {
		const instance = new Whisper();
		Whisper.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.modelPath = _instance.modelPath || "";
		_instance.useGpu = _instance.useGpu || false;
		_instance.language = _instance.language || "";
		_instance.task = _instance.task || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		Whisper.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.modelPath) _writer.writeString(1, _instance.modelPath);
		if (_instance.useGpu) _writer.writeBool(2, _instance.useGpu);
		if (_instance.language) _writer.writeString(3, _instance.language);
		if (_instance.task) _writer.writeString(4, _instance.task);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		Whisper.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			modelPath: this.modelPath,
			useGpu: this.useGpu,
			language: this.language,
			task: this.task
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			modelPath: this.modelPath,
			useGpu: this.useGpu,
			language: this.language,
			task: this.task
		};
	}
};
var WhisperTriton = class WhisperTriton {
	static {
		this.id = "ondewo.s2t.WhisperTriton";
	}
	static deserializeBinary(bytes) {
		const instance = new WhisperTriton();
		WhisperTriton.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.processorPath = _instance.processorPath || "";
		_instance.tritonModelName = _instance.tritonModelName || "";
		_instance.tritonModelVersion = _instance.tritonModelVersion || "";
		_instance.checkStatusTimeout = _instance.checkStatusTimeout || "0";
		_instance.language = _instance.language || "";
		_instance.task = _instance.task || "";
		_instance.tritonServerHost = _instance.tritonServerHost || "";
		_instance.tritonServerPort = _instance.tritonServerPort || "0";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		WhisperTriton.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.processorPath) _writer.writeString(1, _instance.processorPath);
		if (_instance.tritonModelName) _writer.writeString(2, _instance.tritonModelName);
		if (_instance.tritonModelVersion) _writer.writeString(3, _instance.tritonModelVersion);
		if (_instance.checkStatusTimeout) _writer.writeInt64String(4, _instance.checkStatusTimeout);
		if (_instance.language) _writer.writeString(5, _instance.language);
		if (_instance.task) _writer.writeString(6, _instance.task);
		if (_instance.tritonServerHost) _writer.writeString(7, _instance.tritonServerHost);
		if (_instance.tritonServerPort) _writer.writeInt64String(8, _instance.tritonServerPort);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		WhisperTriton.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
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
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
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
};
var Wav2Vec = class Wav2Vec {
	static {
		this.id = "ondewo.s2t.Wav2Vec";
	}
	static deserializeBinary(bytes) {
		const instance = new Wav2Vec();
		Wav2Vec.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.modelPath = _instance.modelPath || "";
		_instance.useGpu = _instance.useGpu || false;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.modelPath = _reader.readString();
					break;
				case 2:
					_instance.useGpu = _reader.readBool();
					break;
				default: _reader.skipField();
			}
		}
		Wav2Vec.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.modelPath) _writer.writeString(1, _instance.modelPath);
		if (_instance.useGpu) _writer.writeBool(2, _instance.useGpu);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		Wav2Vec.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
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
	toProtobufJSON(options) {
		return {
			modelPath: this.modelPath,
			useGpu: this.useGpu
		};
	}
};
var Wav2VecTriton = class Wav2VecTriton {
	static {
		this.id = "ondewo.s2t.Wav2VecTriton";
	}
	static deserializeBinary(bytes) {
		const instance = new Wav2VecTriton();
		Wav2VecTriton.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.processorPath = _instance.processorPath || "";
		_instance.tritonModelName = _instance.tritonModelName || "";
		_instance.tritonModelVersion = _instance.tritonModelVersion || "";
		_instance.checkStatusTimeout = _instance.checkStatusTimeout || "0";
		_instance.tritonServerHost = _instance.tritonServerHost || "";
		_instance.tritonServerPort = _instance.tritonServerPort || "0";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		Wav2VecTriton.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.processorPath) _writer.writeString(1, _instance.processorPath);
		if (_instance.tritonModelName) _writer.writeString(2, _instance.tritonModelName);
		if (_instance.tritonModelVersion) _writer.writeString(3, _instance.tritonModelVersion);
		if (_instance.checkStatusTimeout) _writer.writeInt64String(4, _instance.checkStatusTimeout);
		if (_instance.tritonServerHost) _writer.writeString(5, _instance.tritonServerHost);
		if (_instance.tritonServerPort) _writer.writeInt64String(6, _instance.tritonServerPort);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		Wav2VecTriton.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
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
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			processorPath: this.processorPath,
			tritonModelName: this.tritonModelName,
			tritonModelVersion: this.tritonModelVersion,
			checkStatusTimeout: this.checkStatusTimeout,
			tritonServerHost: this.tritonServerHost,
			tritonServerPort: this.tritonServerPort
		};
	}
};
var Parakeet = class Parakeet {
	static {
		this.id = "ondewo.s2t.Parakeet";
	}
	static deserializeBinary(bytes) {
		const instance = new Parakeet();
		Parakeet.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.tritonModelName = _instance.tritonModelName || "";
		_instance.tritonModelVersion = _instance.tritonModelVersion || "";
		_instance.checkStatusTimeout = _instance.checkStatusTimeout || "0";
		_instance.tritonServerHost = _instance.tritonServerHost || "";
		_instance.tritonServerPort = _instance.tritonServerPort || "0";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.tritonModelName = _reader.readString();
					break;
				case 2:
					_instance.tritonModelVersion = _reader.readString();
					break;
				case 3:
					_instance.checkStatusTimeout = _reader.readInt64String();
					break;
				case 4:
					_instance.tritonServerHost = _reader.readString();
					break;
				case 5:
					_instance.tritonServerPort = _reader.readInt64String();
					break;
				default: _reader.skipField();
			}
		}
		Parakeet.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.tritonModelName) _writer.writeString(1, _instance.tritonModelName);
		if (_instance.tritonModelVersion) _writer.writeString(2, _instance.tritonModelVersion);
		if (_instance.checkStatusTimeout) _writer.writeInt64String(3, _instance.checkStatusTimeout);
		if (_instance.tritonServerHost) _writer.writeString(4, _instance.tritonServerHost);
		if (_instance.tritonServerPort) _writer.writeInt64String(5, _instance.tritonServerPort);
	}
	constructor(_value) {
		_value = _value || {};
		this.tritonModelName = _value.tritonModelName;
		this.tritonModelVersion = _value.tritonModelVersion;
		this.checkStatusTimeout = _value.checkStatusTimeout;
		this.tritonServerHost = _value.tritonServerHost;
		this.tritonServerPort = _value.tritonServerPort;
		Parakeet.refineValues(this);
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
	serializeBinary() {
		const writer = new BinaryWriter();
		Parakeet.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			tritonModelName: this.tritonModelName,
			tritonModelVersion: this.tritonModelVersion,
			checkStatusTimeout: this.checkStatusTimeout,
			tritonServerHost: this.tritonServerHost,
			tritonServerPort: this.tritonServerPort
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			tritonModelName: this.tritonModelName,
			tritonModelVersion: this.tritonModelVersion,
			checkStatusTimeout: this.checkStatusTimeout,
			tritonServerHost: this.tritonServerHost,
			tritonServerPort: this.tritonServerPort
		};
	}
};
var PtFiles = class PtFiles {
	static {
		this.id = "ondewo.s2t.PtFiles";
	}
	static deserializeBinary(bytes) {
		const instance = new PtFiles();
		PtFiles.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.path = _instance.path || "";
		_instance.step = _instance.step || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.path = _reader.readString();
					break;
				case 2:
					_instance.step = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		PtFiles.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.path) _writer.writeString(1, _instance.path);
		if (_instance.step) _writer.writeString(2, _instance.step);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		PtFiles.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
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
	toProtobufJSON(options) {
		return {
			path: this.path,
			step: this.step
		};
	}
};
var CkptFile = class CkptFile {
	static {
		this.id = "ondewo.s2t.CkptFile";
	}
	static deserializeBinary(bytes) {
		const instance = new CkptFile();
		CkptFile.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.path = _instance.path || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.path = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		CkptFile.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.path) _writer.writeString(1, _instance.path);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		CkptFile.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { path: this.path };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { path: this.path };
	}
};
var LanguageModels = class LanguageModels {
	static {
		this.id = "ondewo.s2t.LanguageModels";
	}
	static deserializeBinary(bytes) {
		const instance = new LanguageModels();
		LanguageModels.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.path = _instance.path || "";
		_instance.beamSize = _instance.beamSize || "0";
		_instance.defaultLm = _instance.defaultLm || "";
		_instance.beamSearchScorerAlpha = _instance.beamSearchScorerAlpha || 0;
		_instance.beamSearchScorerBeta = _instance.beamSearchScorerBeta || 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		LanguageModels.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.path) _writer.writeString(1, _instance.path);
		if (_instance.beamSize) _writer.writeInt64String(2, _instance.beamSize);
		if (_instance.defaultLm) _writer.writeString(3, _instance.defaultLm);
		if (_instance.beamSearchScorerAlpha) _writer.writeFloat(4, _instance.beamSearchScorerAlpha);
		if (_instance.beamSearchScorerBeta) _writer.writeFloat(5, _instance.beamSearchScorerBeta);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		LanguageModels.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			path: this.path,
			beamSize: this.beamSize,
			defaultLm: this.defaultLm,
			beamSearchScorerAlpha: this.beamSearchScorerAlpha,
			beamSearchScorerBeta: this.beamSearchScorerBeta
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			path: this.path,
			beamSize: this.beamSize,
			defaultLm: this.defaultLm,
			beamSearchScorerAlpha: this.beamSearchScorerAlpha,
			beamSearchScorerBeta: this.beamSearchScorerBeta
		};
	}
};
var StreamingServer = class StreamingServer {
	static {
		this.id = "ondewo.s2t.StreamingServer";
	}
	static deserializeBinary(bytes) {
		const instance = new StreamingServer();
		StreamingServer.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.host = _instance.host || "";
		_instance.port = _instance.port || "0";
		_instance.outputStyle = _instance.outputStyle || "";
		_instance.streamingSpeechRecognition = _instance.streamingSpeechRecognition || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		StreamingServer.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.host) _writer.writeString(1, _instance.host);
		if (_instance.port) _writer.writeInt64String(2, _instance.port);
		if (_instance.outputStyle) _writer.writeString(3, _instance.outputStyle);
		if (_instance.streamingSpeechRecognition) _writer.writeMessage(4, _instance.streamingSpeechRecognition, StreamingSpeechRecognition.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.host = _value.host;
		this.port = _value.port;
		this.outputStyle = _value.outputStyle;
		this.streamingSpeechRecognition = _value.streamingSpeechRecognition ? new StreamingSpeechRecognition(_value.streamingSpeechRecognition) : void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		StreamingServer.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			host: this.host,
			port: this.port,
			outputStyle: this.outputStyle,
			streamingSpeechRecognition: this.streamingSpeechRecognition ? this.streamingSpeechRecognition.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			host: this.host,
			port: this.port,
			outputStyle: this.outputStyle,
			streamingSpeechRecognition: this.streamingSpeechRecognition ? this.streamingSpeechRecognition.toProtobufJSON(options) : null
		};
	}
};
var StreamingSpeechRecognition = class StreamingSpeechRecognition {
	static {
		this.id = "ondewo.s2t.StreamingSpeechRecognition";
	}
	static deserializeBinary(bytes) {
		const instance = new StreamingSpeechRecognition();
		StreamingSpeechRecognition.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.transcribeNotFinal = _instance.transcribeNotFinal || false;
		_instance.decodingMethod = _instance.decodingMethod || "";
		_instance.samplingRate = _instance.samplingRate || "0";
		_instance.minAudioChunkSize = _instance.minAudioChunkSize || "0";
		_instance.nextChunkTimeout = _instance.nextChunkTimeout || 0;
		_instance.turnDetection = _instance.turnDetection || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				case 6:
					_instance.turnDetection = new TurnDetectionOptions();
					_reader.readMessage(_instance.turnDetection, TurnDetectionOptions.deserializeBinaryFromReader);
					break;
				default: _reader.skipField();
			}
		}
		StreamingSpeechRecognition.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.transcribeNotFinal) _writer.writeBool(1, _instance.transcribeNotFinal);
		if (_instance.decodingMethod) _writer.writeString(2, _instance.decodingMethod);
		if (_instance.samplingRate) _writer.writeInt64String(3, _instance.samplingRate);
		if (_instance.minAudioChunkSize) _writer.writeInt64String(4, _instance.minAudioChunkSize);
		if (_instance.nextChunkTimeout) _writer.writeFloat(5, _instance.nextChunkTimeout);
		if (_instance.turnDetection) _writer.writeMessage(6, _instance.turnDetection, TurnDetectionOptions.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.transcribeNotFinal = _value.transcribeNotFinal;
		this.decodingMethod = _value.decodingMethod;
		this.samplingRate = _value.samplingRate;
		this.minAudioChunkSize = _value.minAudioChunkSize;
		this.nextChunkTimeout = _value.nextChunkTimeout;
		this.turnDetection = _value.turnDetection ? new TurnDetectionOptions(_value.turnDetection) : void 0;
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
	get turnDetection() {
		return this._turnDetection;
	}
	set turnDetection(value) {
		this._turnDetection = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		StreamingSpeechRecognition.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			transcribeNotFinal: this.transcribeNotFinal,
			decodingMethod: this.decodingMethod,
			samplingRate: this.samplingRate,
			minAudioChunkSize: this.minAudioChunkSize,
			nextChunkTimeout: this.nextChunkTimeout,
			turnDetection: this.turnDetection ? this.turnDetection.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			transcribeNotFinal: this.transcribeNotFinal,
			decodingMethod: this.decodingMethod,
			samplingRate: this.samplingRate,
			minAudioChunkSize: this.minAudioChunkSize,
			nextChunkTimeout: this.nextChunkTimeout,
			turnDetection: this.turnDetection ? this.turnDetection.toProtobufJSON(options) : null
		};
	}
};
var TurnDetectionOptions = class TurnDetectionOptions {
	static {
		this.id = "ondewo.s2t.TurnDetectionOptions";
	}
	static deserializeBinary(bytes) {
		const instance = new TurnDetectionOptions();
		TurnDetectionOptions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.turnDetectionLlmOpenaiOptions = _instance.turnDetectionLlmOpenaiOptions || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.active = _reader.readBool();
					break;
				case 2:
					_instance.fullUtteranceDeployment = _reader.readBool();
					break;
				case 3:
					_instance.turnDetectionSystemPrompt = _reader.readString();
					break;
				case 4:
					_instance.turnDetectionUserPrompt = _reader.readString();
					break;
				case 5:
					_instance.turnDetectionLlmOpenaiOptions = new OpenaiLlmOptions();
					_reader.readMessage(_instance.turnDetectionLlmOpenaiOptions, OpenaiLlmOptions.deserializeBinaryFromReader);
					break;
				default: _reader.skipField();
			}
		}
		TurnDetectionOptions.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.active !== void 0 && _instance.active !== null) _writer.writeBool(1, _instance.active);
		if (_instance.fullUtteranceDeployment !== void 0 && _instance.fullUtteranceDeployment !== null) _writer.writeBool(2, _instance.fullUtteranceDeployment);
		if (_instance.turnDetectionSystemPrompt !== void 0 && _instance.turnDetectionSystemPrompt !== null) _writer.writeString(3, _instance.turnDetectionSystemPrompt);
		if (_instance.turnDetectionUserPrompt !== void 0 && _instance.turnDetectionUserPrompt !== null) _writer.writeString(4, _instance.turnDetectionUserPrompt);
		if (_instance.turnDetectionLlmOpenaiOptions) _writer.writeMessage(5, _instance.turnDetectionLlmOpenaiOptions, OpenaiLlmOptions.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.active = _value.active;
		this.fullUtteranceDeployment = _value.fullUtteranceDeployment;
		this.turnDetectionSystemPrompt = _value.turnDetectionSystemPrompt;
		this.turnDetectionUserPrompt = _value.turnDetectionUserPrompt;
		this.turnDetectionLlmOpenaiOptions = _value.turnDetectionLlmOpenaiOptions ? new OpenaiLlmOptions(_value.turnDetectionLlmOpenaiOptions) : void 0;
		TurnDetectionOptions.refineValues(this);
	}
	get active() {
		return this._active;
	}
	set active(value) {
		this._active = value;
	}
	get fullUtteranceDeployment() {
		return this._fullUtteranceDeployment;
	}
	set fullUtteranceDeployment(value) {
		this._fullUtteranceDeployment = value;
	}
	get turnDetectionSystemPrompt() {
		return this._turnDetectionSystemPrompt;
	}
	set turnDetectionSystemPrompt(value) {
		this._turnDetectionSystemPrompt = value;
	}
	get turnDetectionUserPrompt() {
		return this._turnDetectionUserPrompt;
	}
	set turnDetectionUserPrompt(value) {
		this._turnDetectionUserPrompt = value;
	}
	get turnDetectionLlmOpenaiOptions() {
		return this._turnDetectionLlmOpenaiOptions;
	}
	set turnDetectionLlmOpenaiOptions(value) {
		this._turnDetectionLlmOpenaiOptions = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		TurnDetectionOptions.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			active: this.active,
			fullUtteranceDeployment: this.fullUtteranceDeployment,
			turnDetectionSystemPrompt: this.turnDetectionSystemPrompt,
			turnDetectionUserPrompt: this.turnDetectionUserPrompt,
			turnDetectionLlmOpenaiOptions: this.turnDetectionLlmOpenaiOptions ? this.turnDetectionLlmOpenaiOptions.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			active: this.active,
			fullUtteranceDeployment: this.fullUtteranceDeployment,
			turnDetectionSystemPrompt: this.turnDetectionSystemPrompt,
			turnDetectionUserPrompt: this.turnDetectionUserPrompt,
			turnDetectionLlmOpenaiOptions: this.turnDetectionLlmOpenaiOptions ? this.turnDetectionLlmOpenaiOptions.toProtobufJSON(options) : null
		};
	}
};
var OpenaiLlmOptions = class OpenaiLlmOptions {
	static {
		this.id = "ondewo.s2t.OpenaiLlmOptions";
	}
	static deserializeBinary(bytes) {
		const instance = new OpenaiLlmOptions();
		OpenaiLlmOptions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.defaultHeaders = _instance.defaultHeaders || {};
		_instance.defaultQuery = _instance.defaultQuery || void 0;
		_instance.model = _instance.model || "";
		_instance.logitBias = _instance.logitBias || {};
		_instance.metadata = _instance.metadata || void 0;
		_instance.stop = _instance.stop || [];
		_instance.extraHeaders = _instance.extraHeaders || void 0;
		_instance.extraQuery = _instance.extraQuery || void 0;
		_instance.extraBody = _instance.extraBody || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.apiKey = _reader.readString();
					break;
				case 2:
					_instance.organization = _reader.readString();
					break;
				case 3:
					_instance.project = _reader.readString();
					break;
				case 4:
					_instance.webhookSecret = _reader.readString();
					break;
				case 5:
					_instance.baseUrl = _reader.readString();
					break;
				case 6:
					_instance.websocketBaseUrl = _reader.readString();
					break;
				case 7:
					_instance.timeout = _reader.readFloat();
					break;
				case 8:
					_instance.maxRetries = _reader.readInt32();
					break;
				case 9:
					const msg_9 = {};
					_reader.readMessage(msg_9, OpenaiLlmOptions.DefaultHeadersEntry.deserializeBinaryFromReader);
					_instance.defaultHeaders = _instance.defaultHeaders || {};
					_instance.defaultHeaders[msg_9.key] = msg_9.value;
					break;
				case 10:
					_instance.defaultQuery = new googleProtobuf001.Struct();
					_reader.readMessage(_instance.defaultQuery, googleProtobuf001.Struct.deserializeBinaryFromReader);
					break;
				case 11:
					_instance.strictResponseValidation = _reader.readBool();
					break;
				case 12:
					_instance.model = _reader.readString();
					break;
				case 13:
					_instance.frequencyPenalty = _reader.readFloat();
					break;
				case 14:
					const msg_14 = {};
					_reader.readMessage(msg_14, OpenaiLlmOptions.LogitBiasEntry.deserializeBinaryFromReader);
					_instance.logitBias = _instance.logitBias || {};
					_instance.logitBias[msg_14.key] = msg_14.value;
					break;
				case 15:
					_instance.logprobs = _reader.readBool();
					break;
				case 16:
					_instance.maxCompletionTokens = _reader.readInt32();
					break;
				case 17:
					_instance.maxTokens = _reader.readInt32();
					break;
				case 18:
					_instance.metadata = new googleProtobuf001.Struct();
					_reader.readMessage(_instance.metadata, googleProtobuf001.Struct.deserializeBinaryFromReader);
					break;
				case 19:
					_instance.n = _reader.readInt32();
					break;
				case 20:
					_instance.presencePenalty = _reader.readFloat();
					break;
				case 21:
					_instance.promptCacheKey = _reader.readString();
					break;
				case 22:
					_instance.reasoningEffort = _reader.readEnum();
					break;
				case 23:
					_instance.seed = _reader.readInt64String();
					break;
				case 24:
					_instance.serviceTier = _reader.readEnum();
					break;
				case 25:
					(_instance.stop = _instance.stop || []).push(_reader.readString());
					break;
				case 26:
					_instance.store = _reader.readBool();
					break;
				case 27:
					_instance.temperature = _reader.readFloat();
					break;
				case 28:
					_instance.topLogprobs = _reader.readInt32();
					break;
				case 29:
					_instance.topP = _reader.readFloat();
					break;
				case 30:
					_instance.user = _reader.readString();
					break;
				case 31:
					_instance.verbosity = _reader.readEnum();
					break;
				case 32:
					_instance.extraHeaders = new googleProtobuf001.Struct();
					_reader.readMessage(_instance.extraHeaders, googleProtobuf001.Struct.deserializeBinaryFromReader);
					break;
				case 33:
					_instance.extraQuery = new googleProtobuf001.Struct();
					_reader.readMessage(_instance.extraQuery, googleProtobuf001.Struct.deserializeBinaryFromReader);
					break;
				case 34:
					_instance.extraBody = new googleProtobuf001.Struct();
					_reader.readMessage(_instance.extraBody, googleProtobuf001.Struct.deserializeBinaryFromReader);
					break;
				default: _reader.skipField();
			}
		}
		OpenaiLlmOptions.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.apiKey !== void 0 && _instance.apiKey !== null) _writer.writeString(1, _instance.apiKey);
		if (_instance.organization !== void 0 && _instance.organization !== null) _writer.writeString(2, _instance.organization);
		if (_instance.project !== void 0 && _instance.project !== null) _writer.writeString(3, _instance.project);
		if (_instance.webhookSecret !== void 0 && _instance.webhookSecret !== null) _writer.writeString(4, _instance.webhookSecret);
		if (_instance.baseUrl !== void 0 && _instance.baseUrl !== null) _writer.writeString(5, _instance.baseUrl);
		if (_instance.websocketBaseUrl !== void 0 && _instance.websocketBaseUrl !== null) _writer.writeString(6, _instance.websocketBaseUrl);
		if (_instance.timeout !== void 0 && _instance.timeout !== null) _writer.writeFloat(7, _instance.timeout);
		if (_instance.maxRetries !== void 0 && _instance.maxRetries !== null) _writer.writeInt32(8, _instance.maxRetries);
		if (!!_instance.defaultHeaders) {
			const keys_9 = Object.keys(_instance.defaultHeaders);
			if (keys_9.length) {
				const repeated_9 = keys_9.map((key) => ({
					key,
					value: _instance.defaultHeaders[key]
				})).reduce((r, v) => [...r, v], []);
				_writer.writeRepeatedMessage(9, repeated_9, OpenaiLlmOptions.DefaultHeadersEntry.serializeBinaryToWriter);
			}
		}
		if (_instance.defaultQuery) _writer.writeMessage(10, _instance.defaultQuery, googleProtobuf001.Struct.serializeBinaryToWriter);
		if (_instance.strictResponseValidation !== void 0 && _instance.strictResponseValidation !== null) _writer.writeBool(11, _instance.strictResponseValidation);
		if (_instance.model) _writer.writeString(12, _instance.model);
		if (_instance.frequencyPenalty !== void 0 && _instance.frequencyPenalty !== null) _writer.writeFloat(13, _instance.frequencyPenalty);
		if (!!_instance.logitBias) {
			const keys_14 = Object.keys(_instance.logitBias);
			if (keys_14.length) {
				const repeated_14 = keys_14.map((key) => ({
					key,
					value: _instance.logitBias[key]
				})).reduce((r, v) => [...r, v], []);
				_writer.writeRepeatedMessage(14, repeated_14, OpenaiLlmOptions.LogitBiasEntry.serializeBinaryToWriter);
			}
		}
		if (_instance.logprobs !== void 0 && _instance.logprobs !== null) _writer.writeBool(15, _instance.logprobs);
		if (_instance.maxCompletionTokens !== void 0 && _instance.maxCompletionTokens !== null) _writer.writeInt32(16, _instance.maxCompletionTokens);
		if (_instance.maxTokens !== void 0 && _instance.maxTokens !== null) _writer.writeInt32(17, _instance.maxTokens);
		if (_instance.metadata) _writer.writeMessage(18, _instance.metadata, googleProtobuf001.Struct.serializeBinaryToWriter);
		if (_instance.n !== void 0 && _instance.n !== null) _writer.writeInt32(19, _instance.n);
		if (_instance.presencePenalty !== void 0 && _instance.presencePenalty !== null) _writer.writeFloat(20, _instance.presencePenalty);
		if (_instance.promptCacheKey !== void 0 && _instance.promptCacheKey !== null) _writer.writeString(21, _instance.promptCacheKey);
		if (_instance.reasoningEffort !== void 0 && _instance.reasoningEffort !== null) _writer.writeEnum(22, _instance.reasoningEffort);
		if (_instance.seed !== void 0 && _instance.seed !== null) _writer.writeInt64String(23, _instance.seed);
		if (_instance.serviceTier !== void 0 && _instance.serviceTier !== null) _writer.writeEnum(24, _instance.serviceTier);
		if (_instance.stop && _instance.stop.length) _writer.writeRepeatedString(25, _instance.stop);
		if (_instance.store !== void 0 && _instance.store !== null) _writer.writeBool(26, _instance.store);
		if (_instance.temperature !== void 0 && _instance.temperature !== null) _writer.writeFloat(27, _instance.temperature);
		if (_instance.topLogprobs !== void 0 && _instance.topLogprobs !== null) _writer.writeInt32(28, _instance.topLogprobs);
		if (_instance.topP !== void 0 && _instance.topP !== null) _writer.writeFloat(29, _instance.topP);
		if (_instance.user !== void 0 && _instance.user !== null) _writer.writeString(30, _instance.user);
		if (_instance.verbosity !== void 0 && _instance.verbosity !== null) _writer.writeEnum(31, _instance.verbosity);
		if (_instance.extraHeaders) _writer.writeMessage(32, _instance.extraHeaders, googleProtobuf001.Struct.serializeBinaryToWriter);
		if (_instance.extraQuery) _writer.writeMessage(33, _instance.extraQuery, googleProtobuf001.Struct.serializeBinaryToWriter);
		if (_instance.extraBody) _writer.writeMessage(34, _instance.extraBody, googleProtobuf001.Struct.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.apiKey = _value.apiKey;
		this.organization = _value.organization;
		this.project = _value.project;
		this.webhookSecret = _value.webhookSecret;
		this.baseUrl = _value.baseUrl;
		this.websocketBaseUrl = _value.websocketBaseUrl;
		this.timeout = _value.timeout;
		this.maxRetries = _value.maxRetries;
		this.defaultHeaders = _value.defaultHeaders ? Object.keys(_value.defaultHeaders).reduce((r, k) => ({
			...r,
			[k]: _value.defaultHeaders[k]
		}), {}) : {}, this.defaultQuery = _value.defaultQuery ? new googleProtobuf001.Struct(_value.defaultQuery) : void 0;
		this.strictResponseValidation = _value.strictResponseValidation;
		this.model = _value.model;
		this.frequencyPenalty = _value.frequencyPenalty;
		this.logitBias = _value.logitBias ? Object.keys(_value.logitBias).reduce((r, k) => ({
			...r,
			[k]: _value.logitBias[k]
		}), {}) : {}, this.logprobs = _value.logprobs;
		this.maxCompletionTokens = _value.maxCompletionTokens;
		this.maxTokens = _value.maxTokens;
		this.metadata = _value.metadata ? new googleProtobuf001.Struct(_value.metadata) : void 0;
		this.n = _value.n;
		this.presencePenalty = _value.presencePenalty;
		this.promptCacheKey = _value.promptCacheKey;
		this.reasoningEffort = _value.reasoningEffort;
		this.seed = _value.seed;
		this.serviceTier = _value.serviceTier;
		this.stop = (_value.stop || []).slice();
		this.store = _value.store;
		this.temperature = _value.temperature;
		this.topLogprobs = _value.topLogprobs;
		this.topP = _value.topP;
		this.user = _value.user;
		this.verbosity = _value.verbosity;
		this.extraHeaders = _value.extraHeaders ? new googleProtobuf001.Struct(_value.extraHeaders) : void 0;
		this.extraQuery = _value.extraQuery ? new googleProtobuf001.Struct(_value.extraQuery) : void 0;
		this.extraBody = _value.extraBody ? new googleProtobuf001.Struct(_value.extraBody) : void 0;
		OpenaiLlmOptions.refineValues(this);
	}
	get apiKey() {
		return this._apiKey;
	}
	set apiKey(value) {
		this._apiKey = value;
	}
	get organization() {
		return this._organization;
	}
	set organization(value) {
		this._organization = value;
	}
	get project() {
		return this._project;
	}
	set project(value) {
		this._project = value;
	}
	get webhookSecret() {
		return this._webhookSecret;
	}
	set webhookSecret(value) {
		this._webhookSecret = value;
	}
	get baseUrl() {
		return this._baseUrl;
	}
	set baseUrl(value) {
		this._baseUrl = value;
	}
	get websocketBaseUrl() {
		return this._websocketBaseUrl;
	}
	set websocketBaseUrl(value) {
		this._websocketBaseUrl = value;
	}
	get timeout() {
		return this._timeout;
	}
	set timeout(value) {
		this._timeout = value;
	}
	get maxRetries() {
		return this._maxRetries;
	}
	set maxRetries(value) {
		this._maxRetries = value;
	}
	get defaultHeaders() {
		return this._defaultHeaders;
	}
	set defaultHeaders(value) {
		this._defaultHeaders = value;
	}
	get defaultQuery() {
		return this._defaultQuery;
	}
	set defaultQuery(value) {
		this._defaultQuery = value;
	}
	get strictResponseValidation() {
		return this._strictResponseValidation;
	}
	set strictResponseValidation(value) {
		this._strictResponseValidation = value;
	}
	get model() {
		return this._model;
	}
	set model(value) {
		this._model = value;
	}
	get frequencyPenalty() {
		return this._frequencyPenalty;
	}
	set frequencyPenalty(value) {
		this._frequencyPenalty = value;
	}
	get logitBias() {
		return this._logitBias;
	}
	set logitBias(value) {
		this._logitBias = value;
	}
	get logprobs() {
		return this._logprobs;
	}
	set logprobs(value) {
		this._logprobs = value;
	}
	get maxCompletionTokens() {
		return this._maxCompletionTokens;
	}
	set maxCompletionTokens(value) {
		this._maxCompletionTokens = value;
	}
	get maxTokens() {
		return this._maxTokens;
	}
	set maxTokens(value) {
		this._maxTokens = value;
	}
	get metadata() {
		return this._metadata;
	}
	set metadata(value) {
		this._metadata = value;
	}
	get n() {
		return this._n;
	}
	set n(value) {
		this._n = value;
	}
	get presencePenalty() {
		return this._presencePenalty;
	}
	set presencePenalty(value) {
		this._presencePenalty = value;
	}
	get promptCacheKey() {
		return this._promptCacheKey;
	}
	set promptCacheKey(value) {
		this._promptCacheKey = value;
	}
	get reasoningEffort() {
		return this._reasoningEffort;
	}
	set reasoningEffort(value) {
		this._reasoningEffort = value;
	}
	get seed() {
		return this._seed;
	}
	set seed(value) {
		this._seed = value;
	}
	get serviceTier() {
		return this._serviceTier;
	}
	set serviceTier(value) {
		this._serviceTier = value;
	}
	get stop() {
		return this._stop;
	}
	set stop(value) {
		this._stop = value;
	}
	get store() {
		return this._store;
	}
	set store(value) {
		this._store = value;
	}
	get temperature() {
		return this._temperature;
	}
	set temperature(value) {
		this._temperature = value;
	}
	get topLogprobs() {
		return this._topLogprobs;
	}
	set topLogprobs(value) {
		this._topLogprobs = value;
	}
	get topP() {
		return this._topP;
	}
	set topP(value) {
		this._topP = value;
	}
	get user() {
		return this._user;
	}
	set user(value) {
		this._user = value;
	}
	get verbosity() {
		return this._verbosity;
	}
	set verbosity(value) {
		this._verbosity = value;
	}
	get extraHeaders() {
		return this._extraHeaders;
	}
	set extraHeaders(value) {
		this._extraHeaders = value;
	}
	get extraQuery() {
		return this._extraQuery;
	}
	set extraQuery(value) {
		this._extraQuery = value;
	}
	get extraBody() {
		return this._extraBody;
	}
	set extraBody(value) {
		this._extraBody = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		OpenaiLlmOptions.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			apiKey: this.apiKey,
			organization: this.organization,
			project: this.project,
			webhookSecret: this.webhookSecret,
			baseUrl: this.baseUrl,
			websocketBaseUrl: this.websocketBaseUrl,
			timeout: this.timeout,
			maxRetries: this.maxRetries,
			defaultHeaders: this.defaultHeaders ? Object.keys(this.defaultHeaders).reduce((r, k) => ({
				...r,
				[k]: this.defaultHeaders[k]
			}), {}) : {},
			defaultQuery: this.defaultQuery ? this.defaultQuery.toObject() : void 0,
			strictResponseValidation: this.strictResponseValidation,
			model: this.model,
			frequencyPenalty: this.frequencyPenalty,
			logitBias: this.logitBias ? Object.keys(this.logitBias).reduce((r, k) => ({
				...r,
				[k]: this.logitBias[k]
			}), {}) : {},
			logprobs: this.logprobs,
			maxCompletionTokens: this.maxCompletionTokens,
			maxTokens: this.maxTokens,
			metadata: this.metadata ? this.metadata.toObject() : void 0,
			n: this.n,
			presencePenalty: this.presencePenalty,
			promptCacheKey: this.promptCacheKey,
			reasoningEffort: this.reasoningEffort,
			seed: this.seed,
			serviceTier: this.serviceTier,
			stop: (this.stop || []).slice(),
			store: this.store,
			temperature: this.temperature,
			topLogprobs: this.topLogprobs,
			topP: this.topP,
			user: this.user,
			verbosity: this.verbosity,
			extraHeaders: this.extraHeaders ? this.extraHeaders.toObject() : void 0,
			extraQuery: this.extraQuery ? this.extraQuery.toObject() : void 0,
			extraBody: this.extraBody ? this.extraBody.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			apiKey: this.apiKey,
			organization: this.organization,
			project: this.project,
			webhookSecret: this.webhookSecret,
			baseUrl: this.baseUrl,
			websocketBaseUrl: this.websocketBaseUrl,
			timeout: this.timeout,
			maxRetries: this.maxRetries,
			defaultHeaders: this.defaultHeaders ? Object.keys(this.defaultHeaders).reduce((r, k) => ({
				...r,
				[k]: this.defaultHeaders[k]
			}), {}) : {},
			defaultQuery: this.defaultQuery ? this.defaultQuery.toProtobufJSON(options) : null,
			strictResponseValidation: this.strictResponseValidation,
			model: this.model,
			frequencyPenalty: this.frequencyPenalty,
			logitBias: this.logitBias ? Object.keys(this.logitBias).reduce((r, k) => ({
				...r,
				[k]: this.logitBias[k]
			}), {}) : {},
			logprobs: this.logprobs,
			maxCompletionTokens: this.maxCompletionTokens,
			maxTokens: this.maxTokens,
			metadata: this.metadata ? this.metadata.toProtobufJSON(options) : null,
			n: this.n,
			presencePenalty: this.presencePenalty,
			promptCacheKey: this.promptCacheKey,
			reasoningEffort: ReasoningEffort[this.reasoningEffort === null || this.reasoningEffort === void 0 ? 0 : this.reasoningEffort],
			seed: this.seed,
			serviceTier: ServiceTier[this.serviceTier === null || this.serviceTier === void 0 ? 0 : this.serviceTier],
			stop: (this.stop || []).slice(),
			store: this.store,
			temperature: this.temperature,
			topLogprobs: this.topLogprobs,
			topP: this.topP,
			user: this.user,
			verbosity: Verbosity[this.verbosity === null || this.verbosity === void 0 ? 0 : this.verbosity],
			extraHeaders: this.extraHeaders ? this.extraHeaders.toProtobufJSON(options) : null,
			extraQuery: this.extraQuery ? this.extraQuery.toProtobufJSON(options) : null,
			extraBody: this.extraBody ? this.extraBody.toProtobufJSON(options) : null
		};
	}
};
(function(OpenaiLlmOptions) {
	class DefaultHeadersEntry {
		static {
			this.id = "ondewo.s2t.OpenaiLlmOptions.DefaultHeadersEntry";
		}
		static deserializeBinary(bytes) {
			const instance = new DefaultHeadersEntry();
			DefaultHeadersEntry.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
			return instance;
		}
		static refineValues(_instance) {
			_instance.key = _instance.key || "";
			_instance.value = _instance.value || "";
		}
		static deserializeBinaryFromReader(_instance, _reader) {
			while (_reader.nextField()) {
				if (_reader.isEndGroup()) break;
				switch (_reader.getFieldNumber()) {
					case 1:
						_instance.key = _reader.readString();
						break;
					case 2:
						_instance.value = _reader.readString();
						break;
					default: _reader.skipField();
				}
			}
			DefaultHeadersEntry.refineValues(_instance);
		}
		static serializeBinaryToWriter(_instance, _writer) {
			if (_instance.key) _writer.writeString(1, _instance.key);
			if (_instance.value) _writer.writeString(2, _instance.value);
		}
		constructor(_value) {
			_value = _value || {};
			this.key = _value.key;
			this.value = _value.value;
			DefaultHeadersEntry.refineValues(this);
		}
		get key() {
			return this._key;
		}
		set key(value) {
			this._key = value;
		}
		get value() {
			return this._value;
		}
		set value(value) {
			this._value = value;
		}
		serializeBinary() {
			const writer = new BinaryWriter();
			DefaultHeadersEntry.serializeBinaryToWriter(this, writer);
			return writer.getResultBuffer();
		}
		toObject() {
			return {
				key: this.key,
				value: this.value
			};
		}
		toJSON() {
			return this.toObject();
		}
		toProtobufJSON(options) {
			return {
				key: this.key,
				value: this.value
			};
		}
	}
	OpenaiLlmOptions.DefaultHeadersEntry = DefaultHeadersEntry;
	class LogitBiasEntry {
		static {
			this.id = "ondewo.s2t.OpenaiLlmOptions.LogitBiasEntry";
		}
		static deserializeBinary(bytes) {
			const instance = new LogitBiasEntry();
			LogitBiasEntry.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
			return instance;
		}
		static refineValues(_instance) {
			_instance.key = _instance.key || "";
			_instance.value = _instance.value || 0;
		}
		static deserializeBinaryFromReader(_instance, _reader) {
			while (_reader.nextField()) {
				if (_reader.isEndGroup()) break;
				switch (_reader.getFieldNumber()) {
					case 1:
						_instance.key = _reader.readString();
						break;
					case 2:
						_instance.value = _reader.readInt32();
						break;
					default: _reader.skipField();
				}
			}
			LogitBiasEntry.refineValues(_instance);
		}
		static serializeBinaryToWriter(_instance, _writer) {
			if (_instance.key) _writer.writeString(1, _instance.key);
			if (_instance.value) _writer.writeInt32(2, _instance.value);
		}
		constructor(_value) {
			_value = _value || {};
			this.key = _value.key;
			this.value = _value.value;
			LogitBiasEntry.refineValues(this);
		}
		get key() {
			return this._key;
		}
		set key(value) {
			this._key = value;
		}
		get value() {
			return this._value;
		}
		set value(value) {
			this._value = value;
		}
		serializeBinary() {
			const writer = new BinaryWriter();
			LogitBiasEntry.serializeBinaryToWriter(this, writer);
			return writer.getResultBuffer();
		}
		toObject() {
			return {
				key: this.key,
				value: this.value
			};
		}
		toJSON() {
			return this.toObject();
		}
		toProtobufJSON(options) {
			return {
				key: this.key,
				value: this.value
			};
		}
	}
	OpenaiLlmOptions.LogitBiasEntry = LogitBiasEntry;
})(OpenaiLlmOptions || (OpenaiLlmOptions = {}));
var VoiceActivityDetection = class VoiceActivityDetection {
	static {
		this.id = "ondewo.s2t.VoiceActivityDetection";
	}
	static deserializeBinary(bytes) {
		const instance = new VoiceActivityDetection();
		VoiceActivityDetection.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.active = _instance.active || "";
		_instance.samplingRate = _instance.samplingRate || "0";
		_instance.pyannote = _instance.pyannote || void 0;
		_instance.silero = _instance.silero || void 0;
		_instance.wespeakerTsd = _instance.wespeakerTsd || void 0;
		_instance.vadMethod = _instance.vadMethod || 0;
		_instance.tsdMethod = _instance.tsdMethod || 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
					_instance.silero = new Silero();
					_reader.readMessage(_instance.silero, Silero.deserializeBinaryFromReader);
					break;
				case 5:
					_instance.wespeakerTsd = new WespeakerTsd();
					_reader.readMessage(_instance.wespeakerTsd, WespeakerTsd.deserializeBinaryFromReader);
					break;
				case 6:
					_instance.vadMethod = _reader.readEnum();
					break;
				case 7:
					_instance.tsdMethod = _reader.readEnum();
					break;
				default: _reader.skipField();
			}
		}
		VoiceActivityDetection.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.active) _writer.writeString(1, _instance.active);
		if (_instance.samplingRate) _writer.writeInt64String(2, _instance.samplingRate);
		if (_instance.pyannote) _writer.writeMessage(3, _instance.pyannote, Pyannote.serializeBinaryToWriter);
		if (_instance.silero) _writer.writeMessage(4, _instance.silero, Silero.serializeBinaryToWriter);
		if (_instance.wespeakerTsd) _writer.writeMessage(5, _instance.wespeakerTsd, WespeakerTsd.serializeBinaryToWriter);
		if (_instance.vadMethod) _writer.writeEnum(6, _instance.vadMethod);
		if (_instance.tsdMethod) _writer.writeEnum(7, _instance.tsdMethod);
	}
	constructor(_value) {
		_value = _value || {};
		this.active = _value.active;
		this.samplingRate = _value.samplingRate;
		this.pyannote = _value.pyannote ? new Pyannote(_value.pyannote) : void 0;
		this.silero = _value.silero ? new Silero(_value.silero) : void 0;
		this.wespeakerTsd = _value.wespeakerTsd ? new WespeakerTsd(_value.wespeakerTsd) : void 0;
		this.vadMethod = _value.vadMethod;
		this.tsdMethod = _value.tsdMethod;
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
	get silero() {
		return this._silero;
	}
	set silero(value) {
		this._silero = value;
	}
	get wespeakerTsd() {
		return this._wespeakerTsd;
	}
	set wespeakerTsd(value) {
		this._wespeakerTsd = value;
	}
	get vadMethod() {
		return this._vadMethod;
	}
	set vadMethod(value) {
		this._vadMethod = value;
	}
	get tsdMethod() {
		return this._tsdMethod;
	}
	set tsdMethod(value) {
		this._tsdMethod = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		VoiceActivityDetection.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			active: this.active,
			samplingRate: this.samplingRate,
			pyannote: this.pyannote ? this.pyannote.toObject() : void 0,
			silero: this.silero ? this.silero.toObject() : void 0,
			wespeakerTsd: this.wespeakerTsd ? this.wespeakerTsd.toObject() : void 0,
			vadMethod: this.vadMethod,
			tsdMethod: this.tsdMethod
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			active: this.active,
			samplingRate: this.samplingRate,
			pyannote: this.pyannote ? this.pyannote.toProtobufJSON(options) : null,
			silero: this.silero ? this.silero.toProtobufJSON(options) : null,
			wespeakerTsd: this.wespeakerTsd ? this.wespeakerTsd.toProtobufJSON(options) : null,
			vadMethod: VadMethod[this.vadMethod === null || this.vadMethod === void 0 ? 0 : this.vadMethod],
			tsdMethod: TsdMethod[this.tsdMethod === null || this.tsdMethod === void 0 ? 0 : this.tsdMethod]
		};
	}
};
var Pyannote = class Pyannote {
	static {
		this.id = "ondewo.s2t.Pyannote";
	}
	static deserializeBinary(bytes) {
		const instance = new Pyannote();
		Pyannote.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.modelName = _instance.modelName || "";
		_instance.minAudioSize = _instance.minAudioSize || "0";
		_instance.minDurationOff = _instance.minDurationOff || 0;
		_instance.minDurationOn = _instance.minDurationOn || 0;
		_instance.tritonServerHost = _instance.tritonServerHost || "";
		_instance.tritonServerPort = _instance.tritonServerPort || "0";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		Pyannote.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.modelName) _writer.writeString(1, _instance.modelName);
		if (_instance.minAudioSize) _writer.writeInt64String(2, _instance.minAudioSize);
		if (_instance.minDurationOff) _writer.writeFloat(3, _instance.minDurationOff);
		if (_instance.minDurationOn) _writer.writeFloat(4, _instance.minDurationOn);
		if (_instance.tritonServerHost) _writer.writeString(5, _instance.tritonServerHost);
		if (_instance.tritonServerPort) _writer.writeInt64String(6, _instance.tritonServerPort);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		Pyannote.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
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
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			modelName: this.modelName,
			minAudioSize: this.minAudioSize,
			minDurationOff: this.minDurationOff,
			minDurationOn: this.minDurationOn,
			tritonServerHost: this.tritonServerHost,
			tritonServerPort: this.tritonServerPort
		};
	}
};
var Silero = class Silero {
	static {
		this.id = "ondewo.s2t.Silero";
	}
	static deserializeBinary(bytes) {
		const instance = new Silero();
		Silero.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.modelName = _instance.modelName || "";
		_instance.minAudioSize = _instance.minAudioSize || "0";
		_instance.tritonServerHost = _instance.tritonServerHost || "";
		_instance.tritonServerPort = _instance.tritonServerPort || "0";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.modelName = _reader.readString();
					break;
				case 2:
					_instance.minAudioSize = _reader.readInt64String();
					break;
				case 3:
					_instance.threshold = _reader.readFloat();
					break;
				case 4:
					_instance.minSpeechDurationMs = _reader.readFloat();
					break;
				case 5:
					_instance.minSilenceDurationMs = _reader.readFloat();
					break;
				case 6:
					_instance.speechPadMs = _reader.readFloat();
					break;
				case 7:
					_instance.tritonServerHost = _reader.readString();
					break;
				case 8:
					_instance.tritonServerPort = _reader.readInt64String();
					break;
				default: _reader.skipField();
			}
		}
		Silero.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.modelName) _writer.writeString(1, _instance.modelName);
		if (_instance.minAudioSize) _writer.writeInt64String(2, _instance.minAudioSize);
		if (_instance.threshold !== void 0 && _instance.threshold !== null) _writer.writeFloat(3, _instance.threshold);
		if (_instance.minSpeechDurationMs !== void 0 && _instance.minSpeechDurationMs !== null) _writer.writeFloat(4, _instance.minSpeechDurationMs);
		if (_instance.minSilenceDurationMs !== void 0 && _instance.minSilenceDurationMs !== null) _writer.writeFloat(5, _instance.minSilenceDurationMs);
		if (_instance.speechPadMs !== void 0 && _instance.speechPadMs !== null) _writer.writeFloat(6, _instance.speechPadMs);
		if (_instance.tritonServerHost) _writer.writeString(7, _instance.tritonServerHost);
		if (_instance.tritonServerPort) _writer.writeInt64String(8, _instance.tritonServerPort);
	}
	constructor(_value) {
		_value = _value || {};
		this.modelName = _value.modelName;
		this.minAudioSize = _value.minAudioSize;
		this.threshold = _value.threshold;
		this.minSpeechDurationMs = _value.minSpeechDurationMs;
		this.minSilenceDurationMs = _value.minSilenceDurationMs;
		this.speechPadMs = _value.speechPadMs;
		this.tritonServerHost = _value.tritonServerHost;
		this.tritonServerPort = _value.tritonServerPort;
		Silero.refineValues(this);
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
	get threshold() {
		return this._threshold;
	}
	set threshold(value) {
		this._threshold = value;
	}
	get minSpeechDurationMs() {
		return this._minSpeechDurationMs;
	}
	set minSpeechDurationMs(value) {
		this._minSpeechDurationMs = value;
	}
	get minSilenceDurationMs() {
		return this._minSilenceDurationMs;
	}
	set minSilenceDurationMs(value) {
		this._minSilenceDurationMs = value;
	}
	get speechPadMs() {
		return this._speechPadMs;
	}
	set speechPadMs(value) {
		this._speechPadMs = value;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		Silero.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			modelName: this.modelName,
			minAudioSize: this.minAudioSize,
			threshold: this.threshold,
			minSpeechDurationMs: this.minSpeechDurationMs,
			minSilenceDurationMs: this.minSilenceDurationMs,
			speechPadMs: this.speechPadMs,
			tritonServerHost: this.tritonServerHost,
			tritonServerPort: this.tritonServerPort
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			modelName: this.modelName,
			minAudioSize: this.minAudioSize,
			threshold: this.threshold,
			minSpeechDurationMs: this.minSpeechDurationMs,
			minSilenceDurationMs: this.minSilenceDurationMs,
			speechPadMs: this.speechPadMs,
			tritonServerHost: this.tritonServerHost,
			tritonServerPort: this.tritonServerPort
		};
	}
};
var WespeakerTsd = class WespeakerTsd {
	static {
		this.id = "ondewo.s2t.WespeakerTsd";
	}
	static deserializeBinary(bytes) {
		const instance = new WespeakerTsd();
		WespeakerTsd.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.active = _instance.active || false;
		_instance.modelName = _instance.modelName || "";
		_instance.tritonServerHost = _instance.tritonServerHost || "";
		_instance.tritonServerPort = _instance.tritonServerPort || "0";
		_instance.referenceMaxLength = _instance.referenceMaxLength || 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.active = _reader.readBool();
					break;
				case 2:
					_instance.modelName = _reader.readString();
					break;
				case 3:
					_instance.tritonServerHost = _reader.readString();
					break;
				case 4:
					_instance.tritonServerPort = _reader.readInt64String();
					break;
				case 5:
					_instance.similarityThreshold = _reader.readFloat();
					break;
				case 6:
					_instance.minAudioLength = _reader.readFloat();
					break;
				case 7:
					_instance.referenceMaxLength = _reader.readFloat();
					break;
				default: _reader.skipField();
			}
		}
		WespeakerTsd.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.active) _writer.writeBool(1, _instance.active);
		if (_instance.modelName) _writer.writeString(2, _instance.modelName);
		if (_instance.tritonServerHost) _writer.writeString(3, _instance.tritonServerHost);
		if (_instance.tritonServerPort) _writer.writeInt64String(4, _instance.tritonServerPort);
		if (_instance.similarityThreshold !== void 0 && _instance.similarityThreshold !== null) _writer.writeFloat(5, _instance.similarityThreshold);
		if (_instance.minAudioLength !== void 0 && _instance.minAudioLength !== null) _writer.writeFloat(6, _instance.minAudioLength);
		if (_instance.referenceMaxLength) _writer.writeFloat(7, _instance.referenceMaxLength);
	}
	constructor(_value) {
		_value = _value || {};
		this.active = _value.active;
		this.modelName = _value.modelName;
		this.tritonServerHost = _value.tritonServerHost;
		this.tritonServerPort = _value.tritonServerPort;
		this.similarityThreshold = _value.similarityThreshold;
		this.minAudioLength = _value.minAudioLength;
		this.referenceMaxLength = _value.referenceMaxLength;
		WespeakerTsd.refineValues(this);
	}
	get active() {
		return this._active;
	}
	set active(value) {
		this._active = value;
	}
	get modelName() {
		return this._modelName;
	}
	set modelName(value) {
		this._modelName = value;
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
	get similarityThreshold() {
		return this._similarityThreshold;
	}
	set similarityThreshold(value) {
		this._similarityThreshold = value;
	}
	get minAudioLength() {
		return this._minAudioLength;
	}
	set minAudioLength(value) {
		this._minAudioLength = value;
	}
	get referenceMaxLength() {
		return this._referenceMaxLength;
	}
	set referenceMaxLength(value) {
		this._referenceMaxLength = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		WespeakerTsd.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			active: this.active,
			modelName: this.modelName,
			tritonServerHost: this.tritonServerHost,
			tritonServerPort: this.tritonServerPort,
			similarityThreshold: this.similarityThreshold,
			minAudioLength: this.minAudioLength,
			referenceMaxLength: this.referenceMaxLength
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			active: this.active,
			modelName: this.modelName,
			tritonServerHost: this.tritonServerHost,
			tritonServerPort: this.tritonServerPort,
			similarityThreshold: this.similarityThreshold,
			minAudioLength: this.minAudioLength,
			referenceMaxLength: this.referenceMaxLength
		};
	}
};
var PostProcessing = class PostProcessing {
	static {
		this.id = "ondewo.s2t.PostProcessing";
	}
	static deserializeBinary(bytes) {
		const instance = new PostProcessing();
		PostProcessing.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.pipeline = _instance.pipeline || [];
		_instance.postProcessors = _instance.postProcessors || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.pipeline = _instance.pipeline || []).push(_reader.readString());
					break;
				case 2:
					_instance.postProcessors = new PostProcessors();
					_reader.readMessage(_instance.postProcessors, PostProcessors.deserializeBinaryFromReader);
					break;
				default: _reader.skipField();
			}
		}
		PostProcessing.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.pipeline && _instance.pipeline.length) _writer.writeRepeatedString(1, _instance.pipeline);
		if (_instance.postProcessors) _writer.writeMessage(2, _instance.postProcessors, PostProcessors.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.pipeline = (_value.pipeline || []).slice();
		this.postProcessors = _value.postProcessors ? new PostProcessors(_value.postProcessors) : void 0;
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
	serializeBinary() {
		const writer = new BinaryWriter();
		PostProcessing.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			pipeline: (this.pipeline || []).slice(),
			postProcessors: this.postProcessors ? this.postProcessors.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			pipeline: (this.pipeline || []).slice(),
			postProcessors: this.postProcessors ? this.postProcessors.toProtobufJSON(options) : null
		};
	}
};
var PostProcessors = class PostProcessors {
	static {
		this.id = "ondewo.s2t.PostProcessors";
	}
	static deserializeBinary(bytes) {
		const instance = new PostProcessors();
		PostProcessors.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.symSpell = _instance.symSpell || void 0;
		_instance.normalization = _instance.normalization || void 0;
		_instance.llmPostProcessing = _instance.llmPostProcessing || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.symSpell = new SymSpell();
					_reader.readMessage(_instance.symSpell, SymSpell.deserializeBinaryFromReader);
					break;
				case 2:
					_instance.normalization = new S2tNormalization();
					_reader.readMessage(_instance.normalization, S2tNormalization.deserializeBinaryFromReader);
					break;
				case 3:
					_instance.llmPostProcessing = new S2tLlmPostProcessing();
					_reader.readMessage(_instance.llmPostProcessing, S2tLlmPostProcessing.deserializeBinaryFromReader);
					break;
				default: _reader.skipField();
			}
		}
		PostProcessors.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.symSpell) _writer.writeMessage(1, _instance.symSpell, SymSpell.serializeBinaryToWriter);
		if (_instance.normalization) _writer.writeMessage(2, _instance.normalization, S2tNormalization.serializeBinaryToWriter);
		if (_instance.llmPostProcessing) _writer.writeMessage(3, _instance.llmPostProcessing, S2tLlmPostProcessing.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.symSpell = _value.symSpell ? new SymSpell(_value.symSpell) : void 0;
		this.normalization = _value.normalization ? new S2tNormalization(_value.normalization) : void 0;
		this.llmPostProcessing = _value.llmPostProcessing ? new S2tLlmPostProcessing(_value.llmPostProcessing) : void 0;
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
	get llmPostProcessing() {
		return this._llmPostProcessing;
	}
	set llmPostProcessing(value) {
		this._llmPostProcessing = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		PostProcessors.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			symSpell: this.symSpell ? this.symSpell.toObject() : void 0,
			normalization: this.normalization ? this.normalization.toObject() : void 0,
			llmPostProcessing: this.llmPostProcessing ? this.llmPostProcessing.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			symSpell: this.symSpell ? this.symSpell.toProtobufJSON(options) : null,
			normalization: this.normalization ? this.normalization.toProtobufJSON(options) : null,
			llmPostProcessing: this.llmPostProcessing ? this.llmPostProcessing.toProtobufJSON(options) : null
		};
	}
};
var SymSpell = class SymSpell {
	static {
		this.id = "ondewo.s2t.SymSpell";
	}
	static deserializeBinary(bytes) {
		const instance = new SymSpell();
		SymSpell.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.dictPath = _instance.dictPath || "";
		_instance.maxDictionaryEditDistance = _instance.maxDictionaryEditDistance || "0";
		_instance.prefixLength = _instance.prefixLength || "0";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				default: _reader.skipField();
			}
		}
		SymSpell.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.dictPath) _writer.writeString(1, _instance.dictPath);
		if (_instance.maxDictionaryEditDistance) _writer.writeInt64String(2, _instance.maxDictionaryEditDistance);
		if (_instance.prefixLength) _writer.writeInt64String(3, _instance.prefixLength);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		SymSpell.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
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
	toProtobufJSON(options) {
		return {
			dictPath: this.dictPath,
			maxDictionaryEditDistance: this.maxDictionaryEditDistance,
			prefixLength: this.prefixLength
		};
	}
};
var S2tNormalization = class S2tNormalization {
	static {
		this.id = "ondewo.s2t.S2tNormalization";
	}
	static deserializeBinary(bytes) {
		const instance = new S2tNormalization();
		S2tNormalization.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.language = _instance.language || "";
		_instance.pipeline = _instance.pipeline || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.language = _reader.readString();
					break;
				case 2:
					(_instance.pipeline = _instance.pipeline || []).push(_reader.readString());
					break;
				default: _reader.skipField();
			}
		}
		S2tNormalization.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.language) _writer.writeString(1, _instance.language);
		if (_instance.pipeline && _instance.pipeline.length) _writer.writeRepeatedString(2, _instance.pipeline);
	}
	constructor(_value) {
		_value = _value || {};
		this.language = _value.language;
		this.pipeline = (_value.pipeline || []).slice();
		S2tNormalization.refineValues(this);
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
	serializeBinary() {
		const writer = new BinaryWriter();
		S2tNormalization.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			language: this.language,
			pipeline: (this.pipeline || []).slice()
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			language: this.language,
			pipeline: (this.pipeline || []).slice()
		};
	}
};
var S2tLlmPostProcessing = class S2tLlmPostProcessing {
	static {
		this.id = "ondewo.s2t.S2tLlmPostProcessing";
	}
	static deserializeBinary(bytes) {
		const instance = new S2tLlmPostProcessing();
		S2tLlmPostProcessing.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.s2tLlmPostProcessingOpenaiOptions = _instance.s2tLlmPostProcessingOpenaiOptions || void 0;
		_instance.s2tLlmPostProcessingCasingOptions = _instance.s2tLlmPostProcessingCasingOptions || void 0;
		_instance.s2tLlmPostProcessingPunctuationOptions = _instance.s2tLlmPostProcessingPunctuationOptions || void 0;
		_instance.s2tLlmPostProcessingSpellingCorrectionOptions = _instance.s2tLlmPostProcessingSpellingCorrectionOptions || void 0;
		_instance.s2tLlmPostProcessingSemanticCorrectionOptions = _instance.s2tLlmPostProcessingSemanticCorrectionOptions || void 0;
		_instance.s2tLlmPostProcessingTranslationOptions = _instance.s2tLlmPostProcessingTranslationOptions || void 0;
		_instance.s2tLlmPostProcessingInverseNormalizationOptions = _instance.s2tLlmPostProcessingInverseNormalizationOptions || void 0;
		_instance.s2tLlmPostProcessingNormalizationOptions = _instance.s2tLlmPostProcessingNormalizationOptions || void 0;
		_instance.s2tLlmPostProcessingSummarizationOptions = _instance.s2tLlmPostProcessingSummarizationOptions || void 0;
		_instance.s2tLlmPostProcessingUserPromptOptions = _instance.s2tLlmPostProcessingUserPromptOptions || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.s2tLlmPostProcessingOpenaiOptions = new OpenaiLlmOptions();
					_reader.readMessage(_instance.s2tLlmPostProcessingOpenaiOptions, OpenaiLlmOptions.deserializeBinaryFromReader);
					break;
				case 2:
					_instance.s2tLlmPostProcessingSystemPrompt = _reader.readString();
					break;
				case 3:
					_instance.s2tLlmPostProcessingEndingPrompt = _reader.readString();
					break;
				case 4:
					_instance.s2tLlmPostProcessingCasingOptions = new S2tLlmPostProcessingSubTaskOptions();
					_reader.readMessage(_instance.s2tLlmPostProcessingCasingOptions, S2tLlmPostProcessingSubTaskOptions.deserializeBinaryFromReader);
					break;
				case 5:
					_instance.s2tLlmPostProcessingPunctuationOptions = new S2tLlmPostProcessingSubTaskOptions();
					_reader.readMessage(_instance.s2tLlmPostProcessingPunctuationOptions, S2tLlmPostProcessingSubTaskOptions.deserializeBinaryFromReader);
					break;
				case 6:
					_instance.s2tLlmPostProcessingSpellingCorrectionOptions = new S2tLlmPostProcessingSubTaskOptions();
					_reader.readMessage(_instance.s2tLlmPostProcessingSpellingCorrectionOptions, S2tLlmPostProcessingSubTaskOptions.deserializeBinaryFromReader);
					break;
				case 7:
					_instance.s2tLlmPostProcessingSemanticCorrectionOptions = new S2tLlmPostProcessingSubTaskOptions();
					_reader.readMessage(_instance.s2tLlmPostProcessingSemanticCorrectionOptions, S2tLlmPostProcessingSubTaskOptions.deserializeBinaryFromReader);
					break;
				case 8:
					_instance.s2tLlmPostProcessingTranslationOptions = new S2tLlmPostProcessingTranslationOptions();
					_reader.readMessage(_instance.s2tLlmPostProcessingTranslationOptions, S2tLlmPostProcessingTranslationOptions.deserializeBinaryFromReader);
					break;
				case 9:
					_instance.s2tLlmPostProcessingInverseNormalizationOptions = new S2tLlmPostProcessingInverseNormalizationOptions();
					_reader.readMessage(_instance.s2tLlmPostProcessingInverseNormalizationOptions, S2tLlmPostProcessingInverseNormalizationOptions.deserializeBinaryFromReader);
					break;
				case 10:
					_instance.s2tLlmPostProcessingNormalizationOptions = new S2tLlmPostProcessingNormalizationOptions();
					_reader.readMessage(_instance.s2tLlmPostProcessingNormalizationOptions, S2tLlmPostProcessingNormalizationOptions.deserializeBinaryFromReader);
					break;
				case 11:
					_instance.s2tLlmPostProcessingSummarizationOptions = new S2tLlmPostProcessingSummarizationOptions();
					_reader.readMessage(_instance.s2tLlmPostProcessingSummarizationOptions, S2tLlmPostProcessingSummarizationOptions.deserializeBinaryFromReader);
					break;
				case 12:
					_instance.s2tLlmPostProcessingUserPromptOptions = new S2tLlmPostProcessingSubTaskOptions();
					_reader.readMessage(_instance.s2tLlmPostProcessingUserPromptOptions, S2tLlmPostProcessingSubTaskOptions.deserializeBinaryFromReader);
					break;
				default: _reader.skipField();
			}
		}
		S2tLlmPostProcessing.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.s2tLlmPostProcessingOpenaiOptions) _writer.writeMessage(1, _instance.s2tLlmPostProcessingOpenaiOptions, OpenaiLlmOptions.serializeBinaryToWriter);
		if (_instance.s2tLlmPostProcessingSystemPrompt !== void 0 && _instance.s2tLlmPostProcessingSystemPrompt !== null) _writer.writeString(2, _instance.s2tLlmPostProcessingSystemPrompt);
		if (_instance.s2tLlmPostProcessingEndingPrompt !== void 0 && _instance.s2tLlmPostProcessingEndingPrompt !== null) _writer.writeString(3, _instance.s2tLlmPostProcessingEndingPrompt);
		if (_instance.s2tLlmPostProcessingCasingOptions) _writer.writeMessage(4, _instance.s2tLlmPostProcessingCasingOptions, S2tLlmPostProcessingSubTaskOptions.serializeBinaryToWriter);
		if (_instance.s2tLlmPostProcessingPunctuationOptions) _writer.writeMessage(5, _instance.s2tLlmPostProcessingPunctuationOptions, S2tLlmPostProcessingSubTaskOptions.serializeBinaryToWriter);
		if (_instance.s2tLlmPostProcessingSpellingCorrectionOptions) _writer.writeMessage(6, _instance.s2tLlmPostProcessingSpellingCorrectionOptions, S2tLlmPostProcessingSubTaskOptions.serializeBinaryToWriter);
		if (_instance.s2tLlmPostProcessingSemanticCorrectionOptions) _writer.writeMessage(7, _instance.s2tLlmPostProcessingSemanticCorrectionOptions, S2tLlmPostProcessingSubTaskOptions.serializeBinaryToWriter);
		if (_instance.s2tLlmPostProcessingTranslationOptions) _writer.writeMessage(8, _instance.s2tLlmPostProcessingTranslationOptions, S2tLlmPostProcessingTranslationOptions.serializeBinaryToWriter);
		if (_instance.s2tLlmPostProcessingInverseNormalizationOptions) _writer.writeMessage(9, _instance.s2tLlmPostProcessingInverseNormalizationOptions, S2tLlmPostProcessingInverseNormalizationOptions.serializeBinaryToWriter);
		if (_instance.s2tLlmPostProcessingNormalizationOptions) _writer.writeMessage(10, _instance.s2tLlmPostProcessingNormalizationOptions, S2tLlmPostProcessingNormalizationOptions.serializeBinaryToWriter);
		if (_instance.s2tLlmPostProcessingSummarizationOptions) _writer.writeMessage(11, _instance.s2tLlmPostProcessingSummarizationOptions, S2tLlmPostProcessingSummarizationOptions.serializeBinaryToWriter);
		if (_instance.s2tLlmPostProcessingUserPromptOptions) _writer.writeMessage(12, _instance.s2tLlmPostProcessingUserPromptOptions, S2tLlmPostProcessingSubTaskOptions.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.s2tLlmPostProcessingOpenaiOptions = _value.s2tLlmPostProcessingOpenaiOptions ? new OpenaiLlmOptions(_value.s2tLlmPostProcessingOpenaiOptions) : void 0;
		this.s2tLlmPostProcessingSystemPrompt = _value.s2tLlmPostProcessingSystemPrompt;
		this.s2tLlmPostProcessingEndingPrompt = _value.s2tLlmPostProcessingEndingPrompt;
		this.s2tLlmPostProcessingCasingOptions = _value.s2tLlmPostProcessingCasingOptions ? new S2tLlmPostProcessingSubTaskOptions(_value.s2tLlmPostProcessingCasingOptions) : void 0;
		this.s2tLlmPostProcessingPunctuationOptions = _value.s2tLlmPostProcessingPunctuationOptions ? new S2tLlmPostProcessingSubTaskOptions(_value.s2tLlmPostProcessingPunctuationOptions) : void 0;
		this.s2tLlmPostProcessingSpellingCorrectionOptions = _value.s2tLlmPostProcessingSpellingCorrectionOptions ? new S2tLlmPostProcessingSubTaskOptions(_value.s2tLlmPostProcessingSpellingCorrectionOptions) : void 0;
		this.s2tLlmPostProcessingSemanticCorrectionOptions = _value.s2tLlmPostProcessingSemanticCorrectionOptions ? new S2tLlmPostProcessingSubTaskOptions(_value.s2tLlmPostProcessingSemanticCorrectionOptions) : void 0;
		this.s2tLlmPostProcessingTranslationOptions = _value.s2tLlmPostProcessingTranslationOptions ? new S2tLlmPostProcessingTranslationOptions(_value.s2tLlmPostProcessingTranslationOptions) : void 0;
		this.s2tLlmPostProcessingInverseNormalizationOptions = _value.s2tLlmPostProcessingInverseNormalizationOptions ? new S2tLlmPostProcessingInverseNormalizationOptions(_value.s2tLlmPostProcessingInverseNormalizationOptions) : void 0;
		this.s2tLlmPostProcessingNormalizationOptions = _value.s2tLlmPostProcessingNormalizationOptions ? new S2tLlmPostProcessingNormalizationOptions(_value.s2tLlmPostProcessingNormalizationOptions) : void 0;
		this.s2tLlmPostProcessingSummarizationOptions = _value.s2tLlmPostProcessingSummarizationOptions ? new S2tLlmPostProcessingSummarizationOptions(_value.s2tLlmPostProcessingSummarizationOptions) : void 0;
		this.s2tLlmPostProcessingUserPromptOptions = _value.s2tLlmPostProcessingUserPromptOptions ? new S2tLlmPostProcessingSubTaskOptions(_value.s2tLlmPostProcessingUserPromptOptions) : void 0;
		S2tLlmPostProcessing.refineValues(this);
	}
	get s2tLlmPostProcessingOpenaiOptions() {
		return this._s2tLlmPostProcessingOpenaiOptions;
	}
	set s2tLlmPostProcessingOpenaiOptions(value) {
		this._s2tLlmPostProcessingOpenaiOptions = value;
	}
	get s2tLlmPostProcessingSystemPrompt() {
		return this._s2tLlmPostProcessingSystemPrompt;
	}
	set s2tLlmPostProcessingSystemPrompt(value) {
		this._s2tLlmPostProcessingSystemPrompt = value;
	}
	get s2tLlmPostProcessingEndingPrompt() {
		return this._s2tLlmPostProcessingEndingPrompt;
	}
	set s2tLlmPostProcessingEndingPrompt(value) {
		this._s2tLlmPostProcessingEndingPrompt = value;
	}
	get s2tLlmPostProcessingCasingOptions() {
		return this._s2tLlmPostProcessingCasingOptions;
	}
	set s2tLlmPostProcessingCasingOptions(value) {
		this._s2tLlmPostProcessingCasingOptions = value;
	}
	get s2tLlmPostProcessingPunctuationOptions() {
		return this._s2tLlmPostProcessingPunctuationOptions;
	}
	set s2tLlmPostProcessingPunctuationOptions(value) {
		this._s2tLlmPostProcessingPunctuationOptions = value;
	}
	get s2tLlmPostProcessingSpellingCorrectionOptions() {
		return this._s2tLlmPostProcessingSpellingCorrectionOptions;
	}
	set s2tLlmPostProcessingSpellingCorrectionOptions(value) {
		this._s2tLlmPostProcessingSpellingCorrectionOptions = value;
	}
	get s2tLlmPostProcessingSemanticCorrectionOptions() {
		return this._s2tLlmPostProcessingSemanticCorrectionOptions;
	}
	set s2tLlmPostProcessingSemanticCorrectionOptions(value) {
		this._s2tLlmPostProcessingSemanticCorrectionOptions = value;
	}
	get s2tLlmPostProcessingTranslationOptions() {
		return this._s2tLlmPostProcessingTranslationOptions;
	}
	set s2tLlmPostProcessingTranslationOptions(value) {
		this._s2tLlmPostProcessingTranslationOptions = value;
	}
	get s2tLlmPostProcessingInverseNormalizationOptions() {
		return this._s2tLlmPostProcessingInverseNormalizationOptions;
	}
	set s2tLlmPostProcessingInverseNormalizationOptions(value) {
		this._s2tLlmPostProcessingInverseNormalizationOptions = value;
	}
	get s2tLlmPostProcessingNormalizationOptions() {
		return this._s2tLlmPostProcessingNormalizationOptions;
	}
	set s2tLlmPostProcessingNormalizationOptions(value) {
		this._s2tLlmPostProcessingNormalizationOptions = value;
	}
	get s2tLlmPostProcessingSummarizationOptions() {
		return this._s2tLlmPostProcessingSummarizationOptions;
	}
	set s2tLlmPostProcessingSummarizationOptions(value) {
		this._s2tLlmPostProcessingSummarizationOptions = value;
	}
	get s2tLlmPostProcessingUserPromptOptions() {
		return this._s2tLlmPostProcessingUserPromptOptions;
	}
	set s2tLlmPostProcessingUserPromptOptions(value) {
		this._s2tLlmPostProcessingUserPromptOptions = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		S2tLlmPostProcessing.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			s2tLlmPostProcessingOpenaiOptions: this.s2tLlmPostProcessingOpenaiOptions ? this.s2tLlmPostProcessingOpenaiOptions.toObject() : void 0,
			s2tLlmPostProcessingSystemPrompt: this.s2tLlmPostProcessingSystemPrompt,
			s2tLlmPostProcessingEndingPrompt: this.s2tLlmPostProcessingEndingPrompt,
			s2tLlmPostProcessingCasingOptions: this.s2tLlmPostProcessingCasingOptions ? this.s2tLlmPostProcessingCasingOptions.toObject() : void 0,
			s2tLlmPostProcessingPunctuationOptions: this.s2tLlmPostProcessingPunctuationOptions ? this.s2tLlmPostProcessingPunctuationOptions.toObject() : void 0,
			s2tLlmPostProcessingSpellingCorrectionOptions: this.s2tLlmPostProcessingSpellingCorrectionOptions ? this.s2tLlmPostProcessingSpellingCorrectionOptions.toObject() : void 0,
			s2tLlmPostProcessingSemanticCorrectionOptions: this.s2tLlmPostProcessingSemanticCorrectionOptions ? this.s2tLlmPostProcessingSemanticCorrectionOptions.toObject() : void 0,
			s2tLlmPostProcessingTranslationOptions: this.s2tLlmPostProcessingTranslationOptions ? this.s2tLlmPostProcessingTranslationOptions.toObject() : void 0,
			s2tLlmPostProcessingInverseNormalizationOptions: this.s2tLlmPostProcessingInverseNormalizationOptions ? this.s2tLlmPostProcessingInverseNormalizationOptions.toObject() : void 0,
			s2tLlmPostProcessingNormalizationOptions: this.s2tLlmPostProcessingNormalizationOptions ? this.s2tLlmPostProcessingNormalizationOptions.toObject() : void 0,
			s2tLlmPostProcessingSummarizationOptions: this.s2tLlmPostProcessingSummarizationOptions ? this.s2tLlmPostProcessingSummarizationOptions.toObject() : void 0,
			s2tLlmPostProcessingUserPromptOptions: this.s2tLlmPostProcessingUserPromptOptions ? this.s2tLlmPostProcessingUserPromptOptions.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			s2tLlmPostProcessingOpenaiOptions: this.s2tLlmPostProcessingOpenaiOptions ? this.s2tLlmPostProcessingOpenaiOptions.toProtobufJSON(options) : null,
			s2tLlmPostProcessingSystemPrompt: this.s2tLlmPostProcessingSystemPrompt,
			s2tLlmPostProcessingEndingPrompt: this.s2tLlmPostProcessingEndingPrompt,
			s2tLlmPostProcessingCasingOptions: this.s2tLlmPostProcessingCasingOptions ? this.s2tLlmPostProcessingCasingOptions.toProtobufJSON(options) : null,
			s2tLlmPostProcessingPunctuationOptions: this.s2tLlmPostProcessingPunctuationOptions ? this.s2tLlmPostProcessingPunctuationOptions.toProtobufJSON(options) : null,
			s2tLlmPostProcessingSpellingCorrectionOptions: this.s2tLlmPostProcessingSpellingCorrectionOptions ? this.s2tLlmPostProcessingSpellingCorrectionOptions.toProtobufJSON(options) : null,
			s2tLlmPostProcessingSemanticCorrectionOptions: this.s2tLlmPostProcessingSemanticCorrectionOptions ? this.s2tLlmPostProcessingSemanticCorrectionOptions.toProtobufJSON(options) : null,
			s2tLlmPostProcessingTranslationOptions: this.s2tLlmPostProcessingTranslationOptions ? this.s2tLlmPostProcessingTranslationOptions.toProtobufJSON(options) : null,
			s2tLlmPostProcessingInverseNormalizationOptions: this.s2tLlmPostProcessingInverseNormalizationOptions ? this.s2tLlmPostProcessingInverseNormalizationOptions.toProtobufJSON(options) : null,
			s2tLlmPostProcessingNormalizationOptions: this.s2tLlmPostProcessingNormalizationOptions ? this.s2tLlmPostProcessingNormalizationOptions.toProtobufJSON(options) : null,
			s2tLlmPostProcessingSummarizationOptions: this.s2tLlmPostProcessingSummarizationOptions ? this.s2tLlmPostProcessingSummarizationOptions.toProtobufJSON(options) : null,
			s2tLlmPostProcessingUserPromptOptions: this.s2tLlmPostProcessingUserPromptOptions ? this.s2tLlmPostProcessingUserPromptOptions.toProtobufJSON(options) : null
		};
	}
};
var S2tLlmPostProcessingTranslationOptions = class S2tLlmPostProcessingTranslationOptions {
	static {
		this.id = "ondewo.s2t.S2tLlmPostProcessingTranslationOptions";
	}
	static deserializeBinary(bytes) {
		const instance = new S2tLlmPostProcessingTranslationOptions();
		S2tLlmPostProcessingTranslationOptions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.active = _reader.readBool();
					break;
				case 2:
					_instance.language = _reader.readString();
					break;
				case 3:
					_instance.prompt = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		S2tLlmPostProcessingTranslationOptions.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.active !== void 0 && _instance.active !== null) _writer.writeBool(1, _instance.active);
		if (_instance.language !== void 0 && _instance.language !== null) _writer.writeString(2, _instance.language);
		if (_instance.prompt !== void 0 && _instance.prompt !== null) _writer.writeString(3, _instance.prompt);
	}
	constructor(_value) {
		_value = _value || {};
		this.active = _value.active;
		this.language = _value.language;
		this.prompt = _value.prompt;
		S2tLlmPostProcessingTranslationOptions.refineValues(this);
	}
	get active() {
		return this._active;
	}
	set active(value) {
		this._active = value;
	}
	get language() {
		return this._language;
	}
	set language(value) {
		this._language = value;
	}
	get prompt() {
		return this._prompt;
	}
	set prompt(value) {
		this._prompt = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		S2tLlmPostProcessingTranslationOptions.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			active: this.active,
			language: this.language,
			prompt: this.prompt
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			active: this.active,
			language: this.language,
			prompt: this.prompt
		};
	}
};
var S2tLlmPostProcessingInverseNormalizationOptions = class S2tLlmPostProcessingInverseNormalizationOptions {
	static {
		this.id = "ondewo.s2t.S2tLlmPostProcessingInverseNormalizationOptions";
	}
	static deserializeBinary(bytes) {
		const instance = new S2tLlmPostProcessingInverseNormalizationOptions();
		S2tLlmPostProcessingInverseNormalizationOptions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.email = _instance.email || void 0;
		_instance.phoneNumber = _instance.phoneNumber || void 0;
		_instance.dateAndTime = _instance.dateAndTime || void 0;
		_instance.creditCardNumber = _instance.creditCardNumber || void 0;
		_instance.socialSecurityNumber = _instance.socialSecurityNumber || void 0;
		_instance.timeZone = _instance.timeZone || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.active = _reader.readBool();
					break;
				case 2:
					_instance.email = new S2tLlmPostProcessingSubTaskOptions();
					_reader.readMessage(_instance.email, S2tLlmPostProcessingSubTaskOptions.deserializeBinaryFromReader);
					break;
				case 3:
					_instance.phoneNumber = new S2tLlmPostProcessingSubTaskOptions();
					_reader.readMessage(_instance.phoneNumber, S2tLlmPostProcessingSubTaskOptions.deserializeBinaryFromReader);
					break;
				case 4:
					_instance.dateAndTime = new S2tLlmPostProcessingSubTaskOptions();
					_reader.readMessage(_instance.dateAndTime, S2tLlmPostProcessingSubTaskOptions.deserializeBinaryFromReader);
					break;
				case 5:
					_instance.creditCardNumber = new S2tLlmPostProcessingSubTaskOptions();
					_reader.readMessage(_instance.creditCardNumber, S2tLlmPostProcessingSubTaskOptions.deserializeBinaryFromReader);
					break;
				case 6:
					_instance.socialSecurityNumber = new S2tLlmPostProcessingSubTaskOptions();
					_reader.readMessage(_instance.socialSecurityNumber, S2tLlmPostProcessingSubTaskOptions.deserializeBinaryFromReader);
					break;
				case 7:
					_instance.timeZone = new S2tLlmPostProcessingSubTaskOptions();
					_reader.readMessage(_instance.timeZone, S2tLlmPostProcessingSubTaskOptions.deserializeBinaryFromReader);
					break;
				default: _reader.skipField();
			}
		}
		S2tLlmPostProcessingInverseNormalizationOptions.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.active !== void 0 && _instance.active !== null) _writer.writeBool(1, _instance.active);
		if (_instance.email) _writer.writeMessage(2, _instance.email, S2tLlmPostProcessingSubTaskOptions.serializeBinaryToWriter);
		if (_instance.phoneNumber) _writer.writeMessage(3, _instance.phoneNumber, S2tLlmPostProcessingSubTaskOptions.serializeBinaryToWriter);
		if (_instance.dateAndTime) _writer.writeMessage(4, _instance.dateAndTime, S2tLlmPostProcessingSubTaskOptions.serializeBinaryToWriter);
		if (_instance.creditCardNumber) _writer.writeMessage(5, _instance.creditCardNumber, S2tLlmPostProcessingSubTaskOptions.serializeBinaryToWriter);
		if (_instance.socialSecurityNumber) _writer.writeMessage(6, _instance.socialSecurityNumber, S2tLlmPostProcessingSubTaskOptions.serializeBinaryToWriter);
		if (_instance.timeZone) _writer.writeMessage(7, _instance.timeZone, S2tLlmPostProcessingSubTaskOptions.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.active = _value.active;
		this.email = _value.email ? new S2tLlmPostProcessingSubTaskOptions(_value.email) : void 0;
		this.phoneNumber = _value.phoneNumber ? new S2tLlmPostProcessingSubTaskOptions(_value.phoneNumber) : void 0;
		this.dateAndTime = _value.dateAndTime ? new S2tLlmPostProcessingSubTaskOptions(_value.dateAndTime) : void 0;
		this.creditCardNumber = _value.creditCardNumber ? new S2tLlmPostProcessingSubTaskOptions(_value.creditCardNumber) : void 0;
		this.socialSecurityNumber = _value.socialSecurityNumber ? new S2tLlmPostProcessingSubTaskOptions(_value.socialSecurityNumber) : void 0;
		this.timeZone = _value.timeZone ? new S2tLlmPostProcessingSubTaskOptions(_value.timeZone) : void 0;
		S2tLlmPostProcessingInverseNormalizationOptions.refineValues(this);
	}
	get active() {
		return this._active;
	}
	set active(value) {
		this._active = value;
	}
	get email() {
		return this._email;
	}
	set email(value) {
		this._email = value;
	}
	get phoneNumber() {
		return this._phoneNumber;
	}
	set phoneNumber(value) {
		this._phoneNumber = value;
	}
	get dateAndTime() {
		return this._dateAndTime;
	}
	set dateAndTime(value) {
		this._dateAndTime = value;
	}
	get creditCardNumber() {
		return this._creditCardNumber;
	}
	set creditCardNumber(value) {
		this._creditCardNumber = value;
	}
	get socialSecurityNumber() {
		return this._socialSecurityNumber;
	}
	set socialSecurityNumber(value) {
		this._socialSecurityNumber = value;
	}
	get timeZone() {
		return this._timeZone;
	}
	set timeZone(value) {
		this._timeZone = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		S2tLlmPostProcessingInverseNormalizationOptions.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			active: this.active,
			email: this.email ? this.email.toObject() : void 0,
			phoneNumber: this.phoneNumber ? this.phoneNumber.toObject() : void 0,
			dateAndTime: this.dateAndTime ? this.dateAndTime.toObject() : void 0,
			creditCardNumber: this.creditCardNumber ? this.creditCardNumber.toObject() : void 0,
			socialSecurityNumber: this.socialSecurityNumber ? this.socialSecurityNumber.toObject() : void 0,
			timeZone: this.timeZone ? this.timeZone.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			active: this.active,
			email: this.email ? this.email.toProtobufJSON(options) : null,
			phoneNumber: this.phoneNumber ? this.phoneNumber.toProtobufJSON(options) : null,
			dateAndTime: this.dateAndTime ? this.dateAndTime.toProtobufJSON(options) : null,
			creditCardNumber: this.creditCardNumber ? this.creditCardNumber.toProtobufJSON(options) : null,
			socialSecurityNumber: this.socialSecurityNumber ? this.socialSecurityNumber.toProtobufJSON(options) : null,
			timeZone: this.timeZone ? this.timeZone.toProtobufJSON(options) : null
		};
	}
};
var S2tLlmPostProcessingNormalizationOptions = class S2tLlmPostProcessingNormalizationOptions {
	static {
		this.id = "ondewo.s2t.S2tLlmPostProcessingNormalizationOptions";
	}
	static deserializeBinary(bytes) {
		const instance = new S2tLlmPostProcessingNormalizationOptions();
		S2tLlmPostProcessingNormalizationOptions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.email = _instance.email || void 0;
		_instance.phoneNumber = _instance.phoneNumber || void 0;
		_instance.dateAndTime = _instance.dateAndTime || void 0;
		_instance.creditCardNumber = _instance.creditCardNumber || void 0;
		_instance.socialSecurityNumber = _instance.socialSecurityNumber || void 0;
		_instance.timeZone = _instance.timeZone || void 0;
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.active = _reader.readBool();
					break;
				case 2:
					_instance.email = new S2tLlmPostProcessingSubTaskOptions();
					_reader.readMessage(_instance.email, S2tLlmPostProcessingSubTaskOptions.deserializeBinaryFromReader);
					break;
				case 3:
					_instance.phoneNumber = new S2tLlmPostProcessingSubTaskOptions();
					_reader.readMessage(_instance.phoneNumber, S2tLlmPostProcessingSubTaskOptions.deserializeBinaryFromReader);
					break;
				case 4:
					_instance.dateAndTime = new S2tLlmPostProcessingSubTaskOptions();
					_reader.readMessage(_instance.dateAndTime, S2tLlmPostProcessingSubTaskOptions.deserializeBinaryFromReader);
					break;
				case 5:
					_instance.creditCardNumber = new S2tLlmPostProcessingSubTaskOptions();
					_reader.readMessage(_instance.creditCardNumber, S2tLlmPostProcessingSubTaskOptions.deserializeBinaryFromReader);
					break;
				case 6:
					_instance.socialSecurityNumber = new S2tLlmPostProcessingSubTaskOptions();
					_reader.readMessage(_instance.socialSecurityNumber, S2tLlmPostProcessingSubTaskOptions.deserializeBinaryFromReader);
					break;
				case 7:
					_instance.timeZone = new S2tLlmPostProcessingSubTaskOptions();
					_reader.readMessage(_instance.timeZone, S2tLlmPostProcessingSubTaskOptions.deserializeBinaryFromReader);
					break;
				default: _reader.skipField();
			}
		}
		S2tLlmPostProcessingNormalizationOptions.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.active !== void 0 && _instance.active !== null) _writer.writeBool(1, _instance.active);
		if (_instance.email) _writer.writeMessage(2, _instance.email, S2tLlmPostProcessingSubTaskOptions.serializeBinaryToWriter);
		if (_instance.phoneNumber) _writer.writeMessage(3, _instance.phoneNumber, S2tLlmPostProcessingSubTaskOptions.serializeBinaryToWriter);
		if (_instance.dateAndTime) _writer.writeMessage(4, _instance.dateAndTime, S2tLlmPostProcessingSubTaskOptions.serializeBinaryToWriter);
		if (_instance.creditCardNumber) _writer.writeMessage(5, _instance.creditCardNumber, S2tLlmPostProcessingSubTaskOptions.serializeBinaryToWriter);
		if (_instance.socialSecurityNumber) _writer.writeMessage(6, _instance.socialSecurityNumber, S2tLlmPostProcessingSubTaskOptions.serializeBinaryToWriter);
		if (_instance.timeZone) _writer.writeMessage(7, _instance.timeZone, S2tLlmPostProcessingSubTaskOptions.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.active = _value.active;
		this.email = _value.email ? new S2tLlmPostProcessingSubTaskOptions(_value.email) : void 0;
		this.phoneNumber = _value.phoneNumber ? new S2tLlmPostProcessingSubTaskOptions(_value.phoneNumber) : void 0;
		this.dateAndTime = _value.dateAndTime ? new S2tLlmPostProcessingSubTaskOptions(_value.dateAndTime) : void 0;
		this.creditCardNumber = _value.creditCardNumber ? new S2tLlmPostProcessingSubTaskOptions(_value.creditCardNumber) : void 0;
		this.socialSecurityNumber = _value.socialSecurityNumber ? new S2tLlmPostProcessingSubTaskOptions(_value.socialSecurityNumber) : void 0;
		this.timeZone = _value.timeZone ? new S2tLlmPostProcessingSubTaskOptions(_value.timeZone) : void 0;
		S2tLlmPostProcessingNormalizationOptions.refineValues(this);
	}
	get active() {
		return this._active;
	}
	set active(value) {
		this._active = value;
	}
	get email() {
		return this._email;
	}
	set email(value) {
		this._email = value;
	}
	get phoneNumber() {
		return this._phoneNumber;
	}
	set phoneNumber(value) {
		this._phoneNumber = value;
	}
	get dateAndTime() {
		return this._dateAndTime;
	}
	set dateAndTime(value) {
		this._dateAndTime = value;
	}
	get creditCardNumber() {
		return this._creditCardNumber;
	}
	set creditCardNumber(value) {
		this._creditCardNumber = value;
	}
	get socialSecurityNumber() {
		return this._socialSecurityNumber;
	}
	set socialSecurityNumber(value) {
		this._socialSecurityNumber = value;
	}
	get timeZone() {
		return this._timeZone;
	}
	set timeZone(value) {
		this._timeZone = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		S2tLlmPostProcessingNormalizationOptions.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			active: this.active,
			email: this.email ? this.email.toObject() : void 0,
			phoneNumber: this.phoneNumber ? this.phoneNumber.toObject() : void 0,
			dateAndTime: this.dateAndTime ? this.dateAndTime.toObject() : void 0,
			creditCardNumber: this.creditCardNumber ? this.creditCardNumber.toObject() : void 0,
			socialSecurityNumber: this.socialSecurityNumber ? this.socialSecurityNumber.toObject() : void 0,
			timeZone: this.timeZone ? this.timeZone.toObject() : void 0
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			active: this.active,
			email: this.email ? this.email.toProtobufJSON(options) : null,
			phoneNumber: this.phoneNumber ? this.phoneNumber.toProtobufJSON(options) : null,
			dateAndTime: this.dateAndTime ? this.dateAndTime.toProtobufJSON(options) : null,
			creditCardNumber: this.creditCardNumber ? this.creditCardNumber.toProtobufJSON(options) : null,
			socialSecurityNumber: this.socialSecurityNumber ? this.socialSecurityNumber.toProtobufJSON(options) : null,
			timeZone: this.timeZone ? this.timeZone.toProtobufJSON(options) : null
		};
	}
};
var S2tLlmPostProcessingSummarizationOptions = class S2tLlmPostProcessingSummarizationOptions {
	static {
		this.id = "ondewo.s2t.S2tLlmPostProcessingSummarizationOptions";
	}
	static deserializeBinary(bytes) {
		const instance = new S2tLlmPostProcessingSummarizationOptions();
		S2tLlmPostProcessingSummarizationOptions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.active = _reader.readBool();
					break;
				case 2:
					_instance.prompt = _reader.readString();
					break;
				case 3:
					_instance.minChars = _reader.readInt32();
					break;
				case 4:
					_instance.maxChars = _reader.readInt32();
					break;
				default: _reader.skipField();
			}
		}
		S2tLlmPostProcessingSummarizationOptions.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.active !== void 0 && _instance.active !== null) _writer.writeBool(1, _instance.active);
		if (_instance.prompt !== void 0 && _instance.prompt !== null) _writer.writeString(2, _instance.prompt);
		if (_instance.minChars !== void 0 && _instance.minChars !== null) _writer.writeInt32(3, _instance.minChars);
		if (_instance.maxChars !== void 0 && _instance.maxChars !== null) _writer.writeInt32(4, _instance.maxChars);
	}
	constructor(_value) {
		_value = _value || {};
		this.active = _value.active;
		this.prompt = _value.prompt;
		this.minChars = _value.minChars;
		this.maxChars = _value.maxChars;
		S2tLlmPostProcessingSummarizationOptions.refineValues(this);
	}
	get active() {
		return this._active;
	}
	set active(value) {
		this._active = value;
	}
	get prompt() {
		return this._prompt;
	}
	set prompt(value) {
		this._prompt = value;
	}
	get minChars() {
		return this._minChars;
	}
	set minChars(value) {
		this._minChars = value;
	}
	get maxChars() {
		return this._maxChars;
	}
	set maxChars(value) {
		this._maxChars = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		S2tLlmPostProcessingSummarizationOptions.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			active: this.active,
			prompt: this.prompt,
			minChars: this.minChars,
			maxChars: this.maxChars
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			active: this.active,
			prompt: this.prompt,
			minChars: this.minChars,
			maxChars: this.maxChars
		};
	}
};
var S2tLlmPostProcessingSubTaskOptions = class S2tLlmPostProcessingSubTaskOptions {
	static {
		this.id = "ondewo.s2t.S2tLlmPostProcessingSubTaskOptions";
	}
	static deserializeBinary(bytes) {
		const instance = new S2tLlmPostProcessingSubTaskOptions();
		S2tLlmPostProcessingSubTaskOptions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.active = _reader.readBool();
					break;
				case 2:
					_instance.prompt = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		S2tLlmPostProcessingSubTaskOptions.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.active !== void 0 && _instance.active !== null) _writer.writeBool(1, _instance.active);
		if (_instance.prompt !== void 0 && _instance.prompt !== null) _writer.writeString(2, _instance.prompt);
	}
	constructor(_value) {
		_value = _value || {};
		this.active = _value.active;
		this.prompt = _value.prompt;
		S2tLlmPostProcessingSubTaskOptions.refineValues(this);
	}
	get active() {
		return this._active;
	}
	set active(value) {
		this._active = value;
	}
	get prompt() {
		return this._prompt;
	}
	set prompt(value) {
		this._prompt = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		S2tLlmPostProcessingSubTaskOptions.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			active: this.active,
			prompt: this.prompt
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			active: this.active,
			prompt: this.prompt
		};
	}
};
var Logging = class Logging {
	static {
		this.id = "ondewo.s2t.Logging";
	}
	static deserializeBinary(bytes) {
		const instance = new Logging();
		Logging.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.type = _instance.type || "";
		_instance.path = _instance.path || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.type = _reader.readString();
					break;
				case 2:
					_instance.path = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		Logging.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.type) _writer.writeString(1, _instance.type);
		if (_instance.path) _writer.writeString(2, _instance.path);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		Logging.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
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
	toProtobufJSON(options) {
		return {
			type: this.type,
			path: this.path
		};
	}
};
var ListS2tLanguageModelsRequest = class ListS2tLanguageModelsRequest {
	static {
		this.id = "ondewo.s2t.ListS2tLanguageModelsRequest";
	}
	static deserializeBinary(bytes) {
		const instance = new ListS2tLanguageModelsRequest();
		ListS2tLanguageModelsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.ids = _instance.ids || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.ids = _instance.ids || []).push(_reader.readString());
					break;
				default: _reader.skipField();
			}
		}
		ListS2tLanguageModelsRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.ids && _instance.ids.length) _writer.writeRepeatedString(1, _instance.ids);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		ListS2tLanguageModelsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { ids: (this.ids || []).slice() };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { ids: (this.ids || []).slice() };
	}
};
var LanguageModelPipelineId = class LanguageModelPipelineId {
	static {
		this.id = "ondewo.s2t.LanguageModelPipelineId";
	}
	static deserializeBinary(bytes) {
		const instance = new LanguageModelPipelineId();
		LanguageModelPipelineId.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.pipelineId = _instance.pipelineId || "";
		_instance.modelNames = _instance.modelNames || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.pipelineId = _reader.readString();
					break;
				case 2:
					(_instance.modelNames = _instance.modelNames || []).push(_reader.readString());
					break;
				default: _reader.skipField();
			}
		}
		LanguageModelPipelineId.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.pipelineId) _writer.writeString(1, _instance.pipelineId);
		if (_instance.modelNames && _instance.modelNames.length) _writer.writeRepeatedString(2, _instance.modelNames);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		LanguageModelPipelineId.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			pipelineId: this.pipelineId,
			modelNames: (this.modelNames || []).slice()
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			pipelineId: this.pipelineId,
			modelNames: (this.modelNames || []).slice()
		};
	}
};
var ListS2tLanguageModelsResponse = class ListS2tLanguageModelsResponse {
	static {
		this.id = "ondewo.s2t.ListS2tLanguageModelsResponse";
	}
	static deserializeBinary(bytes) {
		const instance = new ListS2tLanguageModelsResponse();
		ListS2tLanguageModelsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.lmPipelineIds = _instance.lmPipelineIds || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					const messageInitializer1 = new LanguageModelPipelineId();
					_reader.readMessage(messageInitializer1, LanguageModelPipelineId.deserializeBinaryFromReader);
					(_instance.lmPipelineIds = _instance.lmPipelineIds || []).push(messageInitializer1);
					break;
				default: _reader.skipField();
			}
		}
		ListS2tLanguageModelsResponse.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.lmPipelineIds && _instance.lmPipelineIds.length) _writer.writeRepeatedMessage(1, _instance.lmPipelineIds, LanguageModelPipelineId.serializeBinaryToWriter);
	}
	constructor(_value) {
		_value = _value || {};
		this.lmPipelineIds = (_value.lmPipelineIds || []).map((m) => new LanguageModelPipelineId(m));
		ListS2tLanguageModelsResponse.refineValues(this);
	}
	get lmPipelineIds() {
		return this._lmPipelineIds;
	}
	set lmPipelineIds(value) {
		this._lmPipelineIds = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		ListS2tLanguageModelsResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { lmPipelineIds: (this.lmPipelineIds || []).map((m) => m.toObject()) };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { lmPipelineIds: (this.lmPipelineIds || []).map((m) => m.toProtobufJSON(options)) };
	}
};
var CreateUserLanguageModelRequest = class CreateUserLanguageModelRequest {
	static {
		this.id = "ondewo.s2t.CreateUserLanguageModelRequest";
	}
	static deserializeBinary(bytes) {
		const instance = new CreateUserLanguageModelRequest();
		CreateUserLanguageModelRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.languageModelName = _instance.languageModelName || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.languageModelName = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		CreateUserLanguageModelRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.languageModelName) _writer.writeString(1, _instance.languageModelName);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		CreateUserLanguageModelRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { languageModelName: this.languageModelName };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { languageModelName: this.languageModelName };
	}
};
var DeleteUserLanguageModelRequest = class DeleteUserLanguageModelRequest {
	static {
		this.id = "ondewo.s2t.DeleteUserLanguageModelRequest";
	}
	static deserializeBinary(bytes) {
		const instance = new DeleteUserLanguageModelRequest();
		DeleteUserLanguageModelRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.languageModelName = _instance.languageModelName || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.languageModelName = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		DeleteUserLanguageModelRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.languageModelName) _writer.writeString(1, _instance.languageModelName);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		DeleteUserLanguageModelRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { languageModelName: this.languageModelName };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { languageModelName: this.languageModelName };
	}
};
var AddDataToUserLanguageModelRequest = class AddDataToUserLanguageModelRequest {
	static {
		this.id = "ondewo.s2t.AddDataToUserLanguageModelRequest";
	}
	static deserializeBinary(bytes) {
		const instance = new AddDataToUserLanguageModelRequest();
		AddDataToUserLanguageModelRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.languageModelName = _instance.languageModelName || "";
		_instance.zippedData = _instance.zippedData || /* @__PURE__ */ new Uint8Array();
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.languageModelName = _reader.readString();
					break;
				case 2:
					_instance.zippedData = _reader.readBytes();
					break;
				default: _reader.skipField();
			}
		}
		AddDataToUserLanguageModelRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.languageModelName) _writer.writeString(1, _instance.languageModelName);
		if (_instance.zippedData && _instance.zippedData.length) _writer.writeBytes(2, _instance.zippedData);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		AddDataToUserLanguageModelRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			languageModelName: this.languageModelName,
			zippedData: this.zippedData ? this.zippedData.subarray(0) : /* @__PURE__ */ new Uint8Array()
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			languageModelName: this.languageModelName,
			zippedData: this.zippedData ? uint8ArrayToBase64(this.zippedData) : ""
		};
	}
};
var TrainUserLanguageModelRequest = class TrainUserLanguageModelRequest {
	static {
		this.id = "ondewo.s2t.TrainUserLanguageModelRequest";
	}
	static deserializeBinary(bytes) {
		const instance = new TrainUserLanguageModelRequest();
		TrainUserLanguageModelRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.languageModelName = _instance.languageModelName || "";
		_instance.order = _instance.order || "0";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.languageModelName = _reader.readString();
					break;
				case 2:
					_instance.order = _reader.readInt64String();
					break;
				default: _reader.skipField();
			}
		}
		TrainUserLanguageModelRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.languageModelName) _writer.writeString(1, _instance.languageModelName);
		if (_instance.order) _writer.writeInt64String(2, _instance.order);
	}
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
	serializeBinary() {
		const writer = new BinaryWriter();
		TrainUserLanguageModelRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return {
			languageModelName: this.languageModelName,
			order: this.order
		};
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return {
			languageModelName: this.languageModelName,
			order: this.order
		};
	}
};
var ListS2tNormalizationPipelinesRequest = class ListS2tNormalizationPipelinesRequest {
	static {
		this.id = "ondewo.s2t.ListS2tNormalizationPipelinesRequest";
	}
	static deserializeBinary(bytes) {
		const instance = new ListS2tNormalizationPipelinesRequest();
		ListS2tNormalizationPipelinesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.language = _instance.language || "";
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.language = _reader.readString();
					break;
				default: _reader.skipField();
			}
		}
		ListS2tNormalizationPipelinesRequest.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.language) _writer.writeString(1, _instance.language);
	}
	constructor(_value) {
		_value = _value || {};
		this.language = _value.language;
		ListS2tNormalizationPipelinesRequest.refineValues(this);
	}
	get language() {
		return this._language;
	}
	set language(value) {
		this._language = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		ListS2tNormalizationPipelinesRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { language: this.language };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { language: this.language };
	}
};
var ListS2tNormalizationPipelinesResponse = class ListS2tNormalizationPipelinesResponse {
	static {
		this.id = "ondewo.s2t.ListS2tNormalizationPipelinesResponse";
	}
	static deserializeBinary(bytes) {
		const instance = new ListS2tNormalizationPipelinesResponse();
		ListS2tNormalizationPipelinesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	static refineValues(_instance) {
		_instance.s2tNormalizationPipelines = _instance.s2tNormalizationPipelines || [];
	}
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.s2tNormalizationPipelines = _instance.s2tNormalizationPipelines || []).push(_reader.readString());
					break;
				default: _reader.skipField();
			}
		}
		ListS2tNormalizationPipelinesResponse.refineValues(_instance);
	}
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.s2tNormalizationPipelines && _instance.s2tNormalizationPipelines.length) _writer.writeRepeatedString(1, _instance.s2tNormalizationPipelines);
	}
	constructor(_value) {
		_value = _value || {};
		this.s2tNormalizationPipelines = (_value.s2tNormalizationPipelines || []).slice();
		ListS2tNormalizationPipelinesResponse.refineValues(this);
	}
	get s2tNormalizationPipelines() {
		return this._s2tNormalizationPipelines;
	}
	set s2tNormalizationPipelines(value) {
		this._s2tNormalizationPipelines = value;
	}
	serializeBinary() {
		const writer = new BinaryWriter();
		ListS2tNormalizationPipelinesResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	toObject() {
		return { s2tNormalizationPipelines: (this.s2tNormalizationPipelines || []).slice() };
	}
	toJSON() {
		return this.toObject();
	}
	toProtobufJSON(options) {
		return { s2tNormalizationPipelines: (this.s2tNormalizationPipelines || []).slice() };
	}
};
const GRPC_SPEECH2_TEXT_CLIENT_SETTINGS = new InjectionToken("GRPC_SPEECH2_TEXT_CLIENT_SETTINGS");
var Speech2TextClient = class Speech2TextClient {
	constructor(settings, clientFactory, handler) {
		this.handler = handler;
		this.$raw = {
			transcribeFile: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.s2t.Speech2Text/TranscribeFile",
					requestData,
					requestMetadata,
					requestClass: TranscribeFileRequest,
					responseClass: TranscribeFileResponse
				});
			},
			getS2tPipeline: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.s2t.Speech2Text/GetS2tPipeline",
					requestData,
					requestMetadata,
					requestClass: S2tPipelineId,
					responseClass: Speech2TextConfig
				});
			},
			createS2tPipeline: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.s2t.Speech2Text/CreateS2tPipeline",
					requestData,
					requestMetadata,
					requestClass: Speech2TextConfig,
					responseClass: S2tPipelineId
				});
			},
			deleteS2tPipeline: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.s2t.Speech2Text/DeleteS2tPipeline",
					requestData,
					requestMetadata,
					requestClass: S2tPipelineId,
					responseClass: googleProtobuf001.Empty
				});
			},
			updateS2tPipeline: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.s2t.Speech2Text/UpdateS2tPipeline",
					requestData,
					requestMetadata,
					requestClass: Speech2TextConfig,
					responseClass: googleProtobuf001.Empty
				});
			},
			listS2tPipelines: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.s2t.Speech2Text/ListS2tPipelines",
					requestData,
					requestMetadata,
					requestClass: ListS2tPipelinesRequest,
					responseClass: ListS2tPipelinesResponse
				});
			},
			listS2tLanguages: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.s2t.Speech2Text/ListS2tLanguages",
					requestData,
					requestMetadata,
					requestClass: ListS2tLanguagesRequest,
					responseClass: ListS2tLanguagesResponse
				});
			},
			listS2tDomains: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.s2t.Speech2Text/ListS2tDomains",
					requestData,
					requestMetadata,
					requestClass: ListS2tDomainsRequest,
					responseClass: ListS2tDomainsResponse
				});
			},
			getServiceInfo: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.s2t.Speech2Text/GetServiceInfo",
					requestData,
					requestMetadata,
					requestClass: googleProtobuf001.Empty,
					responseClass: S2tGetServiceInfoResponse
				});
			},
			listS2tLanguageModels: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.s2t.Speech2Text/ListS2tLanguageModels",
					requestData,
					requestMetadata,
					requestClass: ListS2tLanguageModelsRequest,
					responseClass: ListS2tLanguageModelsResponse
				});
			},
			createUserLanguageModel: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.s2t.Speech2Text/CreateUserLanguageModel",
					requestData,
					requestMetadata,
					requestClass: CreateUserLanguageModelRequest,
					responseClass: googleProtobuf001.Empty
				});
			},
			deleteUserLanguageModel: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.s2t.Speech2Text/DeleteUserLanguageModel",
					requestData,
					requestMetadata,
					requestClass: DeleteUserLanguageModelRequest,
					responseClass: googleProtobuf001.Empty
				});
			},
			addDataToUserLanguageModel: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.s2t.Speech2Text/AddDataToUserLanguageModel",
					requestData,
					requestMetadata,
					requestClass: AddDataToUserLanguageModelRequest,
					responseClass: googleProtobuf001.Empty
				});
			},
			trainUserLanguageModel: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.s2t.Speech2Text/TrainUserLanguageModel",
					requestData,
					requestMetadata,
					requestClass: TrainUserLanguageModelRequest,
					responseClass: googleProtobuf001.Empty
				});
			},
			listS2tNormalizationPipelines: (requestData, requestMetadata = new GrpcMetadata()) => {
				return this.handler.handle({
					type: GrpcCallType.unary,
					client: this.client,
					path: "/ondewo.s2t.Speech2Text/ListS2tNormalizationPipelines",
					requestData,
					requestMetadata,
					requestClass: ListS2tNormalizationPipelinesRequest,
					responseClass: ListS2tNormalizationPipelinesResponse
				});
			}
		};
		this.client = clientFactory.createClient("ondewo.s2t.Speech2Text", settings);
	}
	transcribeFile(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.transcribeFile(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	getS2tPipeline(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.getS2tPipeline(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	createS2tPipeline(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.createS2tPipeline(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	deleteS2tPipeline(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.deleteS2tPipeline(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	updateS2tPipeline(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.updateS2tPipeline(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	listS2tPipelines(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listS2tPipelines(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	listS2tLanguages(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listS2tLanguages(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	listS2tDomains(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listS2tDomains(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	getServiceInfo(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.getServiceInfo(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	listS2tLanguageModels(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listS2tLanguageModels(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	createUserLanguageModel(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.createUserLanguageModel(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	deleteUserLanguageModel(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.deleteUserLanguageModel(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	addDataToUserLanguageModel(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.addDataToUserLanguageModel(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	trainUserLanguageModel(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.trainUserLanguageModel(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	listS2tNormalizationPipelines(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listS2tNormalizationPipelines(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	static {
		this.ɵfac = i0.ɵɵngDeclareFactory({
			minVersion: "12.0.0",
			version: "22.2.6",
			ngImport: i0,
			type: Speech2TextClient,
			deps: [
				{
					token: GRPC_SPEECH2_TEXT_CLIENT_SETTINGS,
					optional: true
				},
				{ token: GRPC_CLIENT_FACTORY },
				{ token: i1$1.GrpcHandler }
			],
			target: i0.ɵɵFactoryTarget.Injectable
		});
	}
	static {
		this.ɵprov = i0.ɵɵngDeclareInjectable({
			minVersion: "12.0.0",
			version: "22.2.6",
			ngImport: i0,
			type: Speech2TextClient,
			providedIn: "any"
		});
	}
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.6",
	ngImport: i0,
	type: Speech2TextClient,
	decorators: [{
		type: Injectable,
		args: [{ providedIn: "any" }]
	}],
	ctorParameters: () => [
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [GRPC_SPEECH2_TEXT_CLIENT_SETTINGS]
			}]
		},
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [GRPC_CLIENT_FACTORY]
			}]
		},
		{ type: i1$1.GrpcHandler }
	]
});
const TOKEN_PROVIDER = new InjectionToken("ONDEWO_S2T_TOKEN_PROVIDER");
const REFRESH_SKEW_IN_S = 30;
const MIN_REFRESH_DELAY_IN_S = 1;
const KEYCLOAK_TOKEN_PROVIDER_CONFIG = new InjectionToken("ONDEWO_S2T_KEYCLOAK_TOKEN_PROVIDER_CONFIG");
var KeycloakAuthenticationError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "KeycloakAuthenticationError";
	}
};
function describeTokenEndpointError(caughtError) {
	if (caughtError instanceof HttpErrorResponse) return caughtError.message;
	if (caughtError instanceof Error) return `${caughtError.name}: ${caughtError.message}`;
	return JSON.stringify(caughtError);
}
var KeycloakTokenProvider = class KeycloakTokenProvider {
	constructor(http, config) {
		this.http = http;
		this.accessToken = null;
		this.refreshToken = null;
		this.timer = null;
		this.stopped = false;
		this.deadlineInMs = null;
		this.onRefreshErrorHandler = null;
		if (config === null) throw new KeycloakAuthenticationError("KeycloakTokenProvider requires a KEYCLOAK_TOKEN_PROVIDER_CONFIG provider");
		this.assertCredentials(config);
		this.config = config;
		this.verifySsl = config.keycloakVerifySsl ?? true;
		this.tokenEndpoint = buildTokenEndpoint(config.keycloakUrl, config.realm);
	}
	getToken() {
		return this.accessToken;
	}
	get keycloakVerifySsl() {
		return this.verifySsl;
	}
	async login() {
		if (this.accessToken !== null) return;
		const tokenResponse = typeof this.config.offlineToken === "string" && this.config.offlineToken.length > 0 ? await this.postTokenRequest({
			grant_type: "refresh_token",
			client_id: this.config.clientId,
			refresh_token: this.config.offlineToken
		}) : await this.postTokenRequest({
			grant_type: "password",
			client_id: this.config.clientId,
			username: this.config.username,
			password: this.config.password,
			scope: "offline_access"
		});
		this.storeTokens(tokenResponse);
		if (this.refreshToken === null) throw new KeycloakAuthenticationError("Keycloak token response did not contain a refresh_token; the SDK client must have directAccessGrants + the offline_access scope (e.g. ondewo-nlu-cai-sdk-public)");
		if (this.config.tokenExpirationInS !== void 0) this.deadlineInMs = Date.now() + this.config.tokenExpirationInS * 1e3;
		this.scheduleRefresh(tokenResponse.expires_in);
	}
	onRefreshError(handler) {
		this.onRefreshErrorHandler = handler;
	}
	stop() {
		this.stopped = true;
		if (this.timer !== null) {
			clearTimeout(this.timer);
			this.timer = null;
		}
	}
	ngOnDestroy() {
		this.stop();
	}
	async refresh() {
		if (this.deadlineInMs !== null && Date.now() >= this.deadlineInMs) {
			this.stop();
			return;
		}
		const tokenResponse = await this.postTokenRequest({
			grant_type: "refresh_token",
			client_id: this.config.clientId,
			refresh_token: this.refreshToken
		});
		this.storeTokens(tokenResponse);
		this.scheduleRefresh(tokenResponse.expires_in);
	}
	scheduleRefresh(expiresInRaw) {
		if (this.stopped) return;
		let delayInS = Math.max((typeof expiresInRaw === "number" && expiresInRaw > 0 ? expiresInRaw : 1) - 30, 1);
		if (this.deadlineInMs !== null) {
			const remainingInMs = this.deadlineInMs - Date.now();
			if (remainingInMs <= 0) {
				this.stop();
				return;
			}
			delayInS = Math.min(delayInS, remainingInMs / 1e3);
		}
		this.timer = setTimeout(() => {
			this.refresh().catch((refreshError) => {
				if (this.onRefreshErrorHandler !== null) this.onRefreshErrorHandler(refreshError);
			});
		}, delayInS * 1e3);
	}
	async postTokenRequest(params) {
		const body = new URLSearchParams(params).toString();
		const headers = new HttpHeaders({
			"Content-Type": "application/x-www-form-urlencoded",
			Accept: "application/json"
		});
		try {
			return await firstValueFrom(this.http.post(this.tokenEndpoint, body, { headers }));
		} catch (caughtError) {
			throw new KeycloakAuthenticationError(`Keycloak token endpoint returned HTTP ${caughtError instanceof HttpErrorResponse ? caughtError.status : 0}: ${describeTokenEndpointError(caughtError)}`);
		}
	}
	storeTokens(tokenResponse) {
		if (typeof tokenResponse.access_token !== "string" || tokenResponse.access_token.length === 0) throw new KeycloakAuthenticationError("Keycloak token response did not contain an access_token");
		this.accessToken = tokenResponse.access_token;
		if (typeof tokenResponse.refresh_token === "string" && tokenResponse.refresh_token.length > 0) this.refreshToken = tokenResponse.refresh_token;
	}
	assertCredentials(config) {
		for (const key of [
			"keycloakUrl",
			"realm",
			"clientId"
		]) if (typeof config[key] !== "string" || config[key].length === 0) throw new KeycloakAuthenticationError(`KeycloakTokenProviderConfig.${key} is required and must be a non-empty string`);
		const hasOfflineToken = typeof config.offlineToken === "string" && config.offlineToken.length > 0;
		const hasPassword = typeof config.username === "string" && config.username.length > 0 && typeof config.password === "string" && config.password.length > 0;
		if (!hasOfflineToken && !hasPassword) throw new KeycloakAuthenticationError("KeycloakTokenProviderConfig requires either an offlineToken or a username + password pair");
	}
	static {
		this.ɵfac = i0.ɵɵngDeclareFactory({
			minVersion: "12.0.0",
			version: "22.2.6",
			ngImport: i0,
			type: KeycloakTokenProvider,
			deps: [{ token: i1.HttpClient }, {
				token: KEYCLOAK_TOKEN_PROVIDER_CONFIG,
				optional: true
			}],
			target: i0.ɵɵFactoryTarget.Injectable
		});
	}
	static {
		this.ɵprov = i0.ɵɵngDeclareInjectable({
			minVersion: "12.0.0",
			version: "22.2.6",
			ngImport: i0,
			type: KeycloakTokenProvider,
			providedIn: "root"
		});
	}
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.6",
	ngImport: i0,
	type: KeycloakTokenProvider,
	decorators: [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}],
	ctorParameters: () => [{ type: i1.HttpClient }, {
		type: void 0,
		decorators: [{ type: Optional }, {
			type: Inject,
			args: [KEYCLOAK_TOKEN_PROVIDER_CONFIG]
		}]
	}]
});
function buildTokenEndpoint(keycloakUrl, realm) {
	return `${keycloakUrl.replace(/\/+$/, "")}/realms/${encodeURIComponent(realm)}/protocol/openid-connect/token`;
}
const AUTHORIZATION_HEADER = "Authorization";
const BEARER_PREFIX = "Bearer ";
function resolveToken(result) {
	const source = isObservable(result) ? result : from(Promise.resolve(result));
	return new Observable((subscriber) => {
		const subscription = source.subscribe({
			next: (token) => subscriber.next(normalizeToken(token)),
			error: (caughtError) => subscriber.error(caughtError),
			complete: () => subscriber.complete()
		});
		return () => subscription.unsubscribe();
	});
}
function buildBearerValue(token) {
	return token === null ? null : `${BEARER_PREFIX}${token}`;
}
function resolveBearerValue(result) {
	return new Observable((subscriber) => {
		const subscription = resolveToken(result).subscribe({
			next: (token) => subscriber.next(buildBearerValue(token)),
			error: (caughtError) => subscriber.error(caughtError),
			complete: () => subscriber.complete()
		});
		return () => subscription.unsubscribe();
	});
}
function normalizeToken(token) {
	if (token === null || token === void 0) return null;
	const trimmed = token.trim();
	return trimmed.length === 0 ? null : trimmed;
}
function authHttpInterceptor(req, next) {
	if (req.headers.has("Authorization")) return next(req);
	return resolveBearerValue(inject(TOKEN_PROVIDER).getToken()).pipe(switchMap((bearerValue) => {
		if (bearerValue === null) return next(req);
		return next(req.clone({ setHeaders: { [AUTHORIZATION_HEADER]: bearerValue } }));
	}));
}
var AuthGrpcInterceptor = class AuthGrpcInterceptor {
	constructor(tokenProvider) {
		this.tokenProvider = tokenProvider;
	}
	intercept(request, next) {
		if (request.requestMetadata.has("Authorization")) return next.handle(request);
		return resolveBearerValue(this.tokenProvider.getToken()).pipe(switchMap((bearerValue) => {
			if (bearerValue !== null) request.requestMetadata.set(AUTHORIZATION_HEADER, bearerValue);
			return next.handle(request);
		}));
	}
	static {
		this.ɵfac = i0.ɵɵngDeclareFactory({
			minVersion: "12.0.0",
			version: "22.2.6",
			ngImport: i0,
			type: AuthGrpcInterceptor,
			deps: [{ token: TOKEN_PROVIDER }],
			target: i0.ɵɵFactoryTarget.Injectable
		});
	}
	static {
		this.ɵprov = i0.ɵɵngDeclareInjectable({
			minVersion: "12.0.0",
			version: "22.2.6",
			ngImport: i0,
			type: AuthGrpcInterceptor
		});
	}
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.6",
	ngImport: i0,
	type: AuthGrpcInterceptor,
	decorators: [{ type: Injectable }],
	ctorParameters: () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [TOKEN_PROVIDER]
		}]
	}]
});
function provideOndewoS2tAuth(tokenProvider) {
	return makeEnvironmentProviders([
		tokenProvider,
		{
			provide: TOKEN_PROVIDER,
			useExisting: tokenProvider
		},
		{
			provide: GRPC_INTERCEPTORS,
			useClass: AuthGrpcInterceptor,
			multi: true
		}
	]);
}
const BROWSER_UNSUPPORTED_TLS_FIELDS = [
	"grpcCert",
	"grpcClientCert",
	"grpcClientKey",
	"grpc_cert",
	"grpc_client_cert",
	"grpc_client_key"
];
var GrpcWebEndpointError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "GrpcWebEndpointError";
	}
};
const SCHEME_PATTERN = /^[a-z][a-z0-9+.-]*:\/\//i;
const BARE_IPV6_PATTERN = /^(?=(?:[^:]*:){2})[0-9a-f:.]+$/i;
function buildGrpcWebHost(config) {
	const fields = config;
	for (const field of BROWSER_UNSUPPORTED_TLS_FIELDS) {
		const value = fields[field];
		if (value !== void 0 && value !== null && value !== "") throw new GrpcWebEndpointError(`GrpcWebEndpointConfig.${field} is not supported by a browser gRPC-web client: the browser owns the TLS handshake, trusts its own certificate store and presents a client certificate only from the browser/OS store. Remove the field (never ship a private key to a browser); see the README section 'TLS, mutual TLS and certificates'.`);
	}
	const host = config.host;
	if (typeof host !== "string" || host.trim() === "") throw new GrpcWebEndpointError("GrpcWebEndpointConfig.host must be a non-empty string");
	const secure = config.useSecureChannel !== false;
	if (SCHEME_PATTERN.test(host)) {
		if (config.port !== void 0) throw new GrpcWebEndpointError("GrpcWebEndpointConfig.port must be omitted when GrpcWebEndpointConfig.host is a URL; put the port in the URL");
		let url;
		try {
			url = new URL(host);
		} catch {
			throw new GrpcWebEndpointError("GrpcWebEndpointConfig.host is not a valid URL");
		}
		if (url.protocol !== "https:" && url.protocol !== "http:") throw new GrpcWebEndpointError("GrpcWebEndpointConfig.host must use the http:// or https:// scheme");
		if (url.protocol === "http:") {
			if (secure) throw new GrpcWebEndpointError("GrpcWebEndpointConfig.host uses http:// but useSecureChannel is true; use an https:// URL or set useSecureChannel: false");
			warnInsecure(url.host);
		}
		return host;
	}
	let bareHost = host;
	if (!host.startsWith("[") && host.includes(":")) {
		if (!BARE_IPV6_PATTERN.test(host)) throw new GrpcWebEndpointError("GrpcWebEndpointConfig.host must not contain a port; set GrpcWebEndpointConfig.port instead");
		bareHost = `[${host}]`;
	}
	let authority = bareHost;
	if (config.port !== void 0) {
		const port = Number(config.port);
		if (String(config.port).trim() === "" || !Number.isInteger(port) || port < 1 || port > 65535) throw new GrpcWebEndpointError("GrpcWebEndpointConfig.port must be an integer between 1 and 65535");
		authority = `${bareHost}:${port}`;
	}
	if (secure) return `https://${authority}`;
	warnInsecure(authority);
	return `http://${authority}`;
}
function warnInsecure(authority) {
	console.warn(`ONDEWO gRPC-web: insecure http:// endpoint ${authority}; requests and bearer tokens are sent unencrypted. Use useSecureChannel: true (https://) outside local development.`);
}
export { AUTHORIZATION_HEADER, AcousticModels, AddDataToUserLanguageModelRequest, AuthGrpcInterceptor, BEARER_PREFIX, BROWSER_UNSUPPORTED_TLS_FIELDS, CkptFile, CreateUserLanguageModelRequest, Decoding, DeleteUserLanguageModelRequest, GRPC_SPEECH2_TEXT_CLIENT_SETTINGS, GrpcWebEndpointError, InferenceBackend, KEYCLOAK_TOKEN_PROVIDER_CONFIG, KeycloakAuthenticationError, KeycloakTokenProvider, LanguageModelPipelineId, LanguageModels, ListS2tDomainsRequest, ListS2tDomainsResponse, ListS2tLanguageModelsRequest, ListS2tLanguageModelsResponse, ListS2tLanguagesRequest, ListS2tLanguagesResponse, ListS2tNormalizationPipelinesRequest, ListS2tNormalizationPipelinesResponse, ListS2tPipelinesRequest, ListS2tPipelinesResponse, Logging, MIN_REFRESH_DELAY_IN_S, OpenaiLlmOptions, Parakeet, PostProcessing, PostProcessingOptions, PostProcessors, PtFiles, Pyannote, REFRESH_SKEW_IN_S, ReasoningEffort, S2tCloudProviderConfig, S2tCloudProviderConfigAmazon, S2tCloudProviderConfigDeepgram, S2tCloudProviderConfigGoogle, S2tCloudProviderConfigMicrosoft, S2tCloudServiceAmazon, S2tCloudServiceDeepgram, S2tCloudServiceGoogle, S2tCloudServiceMicrosoft, S2tDescription, S2tGetServiceInfoResponse, S2tInference, S2tLlmPostProcessing, S2tLlmPostProcessingInverseNormalizationOptions, S2tLlmPostProcessingNormalizationOptions, S2tLlmPostProcessingSubTaskOptions, S2tLlmPostProcessingSummarizationOptions, S2tLlmPostProcessingTranslationOptions, S2tNormalization, S2tPipelineId, ServiceTier, Silero, Speech2TextClient, Speech2TextConfig, StreamingServer, StreamingSpeechRecognition, SymSpell, TOKEN_PROVIDER, TrainUserLanguageModelRequest, TranscribeFileRequest, TranscribeFileResponse, TranscribeRequestConfig, TranscribeStreamRequest, TranscribeStreamResponse, Transcription, TranscriptionAlternative, TranscriptionReturnOptions, TsdMethod, TurnDetectionOptions, UtteranceDetectionOptions, VadMethod, Verbosity, VoiceActivityDetection, Wav2Vec, Wav2VecTriton, WespeakerTsd, Whisper, WhisperTriton, WordAlternative, WordDetail, authHttpInterceptor, buildBearerValue, buildGrpcWebHost, provideOndewoS2tAuth, resolveBearerValue, resolveToken };

//# sourceMappingURL=ondewo-s2t-client-angular.mjs.map