/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { uint8ArrayToBase64 } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter } from 'google-protobuf';
export var InferenceBackend;
(function (InferenceBackend) {
	InferenceBackend[(InferenceBackend['INFERENCE_BACKEND_UNKNOWN'] = 0)] = 'INFERENCE_BACKEND_UNKNOWN';
	InferenceBackend[(InferenceBackend['INFERENCE_BACKEND_PYTORCH'] = 1)] = 'INFERENCE_BACKEND_PYTORCH';
	InferenceBackend[(InferenceBackend['INFERENCE_BACKEND_FLAX'] = 2)] = 'INFERENCE_BACKEND_FLAX';
})(InferenceBackend || (InferenceBackend = {}));
export var Decoding;
(function (Decoding) {
	Decoding[(Decoding['DEFAULT'] = 0)] = 'DEFAULT';
	Decoding[(Decoding['GREEDY'] = 1)] = 'GREEDY';
	Decoding[(Decoding['BEAM_SEARCH_WITH_LM'] = 2)] = 'BEAM_SEARCH_WITH_LM';
	Decoding[(Decoding['BEAM_SEARCH'] = 3)] = 'BEAM_SEARCH';
})(Decoding || (Decoding = {}));
/**
 * Message implementation for ondewo.s2t.TranscribeRequestConfig
 */
export class TranscribeRequestConfig {
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
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
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
				case 7:
					_instance.matchbox = new Matchbox();
					_reader.readMessage(_instance.matchbox, Matchbox.deserializeBinaryFromReader);
					break;
				case 8:
					_instance.returnOptions = new TranscriptionReturnOptions();
					_reader.readMessage(_instance.returnOptions, TranscriptionReturnOptions.deserializeBinaryFromReader);
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
		if (_instance.matchbox) {
			_writer.writeMessage(7, _instance.matchbox, Matchbox.serializeBinaryToWriter);
		}
		if (_instance.returnOptions) {
			_writer.writeMessage(8, _instance.returnOptions, TranscriptionReturnOptions.serializeBinaryToWriter);
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
		this.postProcessing = _value.postProcessing ? new PostProcessingOptions(_value.postProcessing) : undefined;
		this.utteranceDetection = _value.utteranceDetection
			? new UtteranceDetectionOptions(_value.utteranceDetection)
			: undefined;
		this.pyannote = _value.pyannote ? new Pyannote(_value.pyannote) : undefined;
		this.matchbox = _value.matchbox ? new Matchbox(_value.matchbox) : undefined;
		this.returnOptions = _value.returnOptions ? new TranscriptionReturnOptions(_value.returnOptions) : undefined;
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
			this._oneofLanguageModelName = TranscribeRequestConfig.OneofLanguageModelNameCase.languageModelName;
		}
		this._languageModelName = value;
	}
	get postProcessing() {
		return this._postProcessing;
	}
	set postProcessing(value) {
		if (value !== undefined && value !== null) {
			this._oneofPostProcessing = TranscribeRequestConfig.OneofPostProcessingCase.postProcessing;
		}
		this._postProcessing = value;
	}
	get utteranceDetection() {
		return this._utteranceDetection;
	}
	set utteranceDetection(value) {
		if (value !== undefined && value !== null) {
			this._oneofUtteranceDetection = TranscribeRequestConfig.OneofUtteranceDetectionCase.utteranceDetection;
		}
		this._utteranceDetection = value;
	}
	get pyannote() {
		return this._pyannote;
	}
	set pyannote(value) {
		if (value !== undefined && value !== null) {
			this._matchbox = undefined;
			this._voiceActivityDetection = TranscribeRequestConfig.VoiceActivityDetectionCase.pyannote;
		}
		this._pyannote = value;
	}
	get matchbox() {
		return this._matchbox;
	}
	set matchbox(value) {
		if (value !== undefined && value !== null) {
			this._pyannote = undefined;
			this._voiceActivityDetection = TranscribeRequestConfig.VoiceActivityDetectionCase.matchbox;
		}
		this._matchbox = value;
	}
	get returnOptions() {
		return this._returnOptions;
	}
	set returnOptions(value) {
		if (value !== undefined && value !== null) {
			this._oneofReturnOptions = TranscribeRequestConfig.OneofReturnOptionsCase.returnOptions;
		}
		this._returnOptions = value;
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
			postProcessing: this.postProcessing ? this.postProcessing.toObject() : undefined,
			utteranceDetection: this.utteranceDetection ? this.utteranceDetection.toObject() : undefined,
			pyannote: this.pyannote ? this.pyannote.toObject() : undefined,
			matchbox: this.matchbox ? this.matchbox.toObject() : undefined,
			returnOptions: this.returnOptions ? this.returnOptions.toObject() : undefined
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
		options
	) {
		return {
			s2tPipelineId: this.s2tPipelineId,
			decoding: Decoding[this.decoding === null || this.decoding === undefined ? 0 : this.decoding],
			languageModelName:
				this.languageModelName === null || this.languageModelName === undefined ? null : this.languageModelName,
			postProcessing: this.postProcessing ? this.postProcessing.toProtobufJSON(options) : null,
			utteranceDetection: this.utteranceDetection ? this.utteranceDetection.toProtobufJSON(options) : null,
			pyannote: this.pyannote ? this.pyannote.toProtobufJSON(options) : null,
			matchbox: this.matchbox ? this.matchbox.toProtobufJSON(options) : null,
			returnOptions: this.returnOptions ? this.returnOptions.toProtobufJSON(options) : null
		};
	}
}
TranscribeRequestConfig.id = 'ondewo.s2t.TranscribeRequestConfig';
(function (TranscribeRequestConfig) {
	let OneofLanguageModelNameCase;
	(function (OneofLanguageModelNameCase) {
		OneofLanguageModelNameCase[(OneofLanguageModelNameCase['none'] = 0)] = 'none';
		OneofLanguageModelNameCase[(OneofLanguageModelNameCase['languageModelName'] = 1)] = 'languageModelName';
	})(
		(OneofLanguageModelNameCase =
			TranscribeRequestConfig.OneofLanguageModelNameCase || (TranscribeRequestConfig.OneofLanguageModelNameCase = {}))
	);
	let OneofPostProcessingCase;
	(function (OneofPostProcessingCase) {
		OneofPostProcessingCase[(OneofPostProcessingCase['none'] = 0)] = 'none';
		OneofPostProcessingCase[(OneofPostProcessingCase['postProcessing'] = 1)] = 'postProcessing';
	})(
		(OneofPostProcessingCase =
			TranscribeRequestConfig.OneofPostProcessingCase || (TranscribeRequestConfig.OneofPostProcessingCase = {}))
	);
	let OneofUtteranceDetectionCase;
	(function (OneofUtteranceDetectionCase) {
		OneofUtteranceDetectionCase[(OneofUtteranceDetectionCase['none'] = 0)] = 'none';
		OneofUtteranceDetectionCase[(OneofUtteranceDetectionCase['utteranceDetection'] = 1)] = 'utteranceDetection';
	})(
		(OneofUtteranceDetectionCase =
			TranscribeRequestConfig.OneofUtteranceDetectionCase || (TranscribeRequestConfig.OneofUtteranceDetectionCase = {}))
	);
	let VoiceActivityDetectionCase;
	(function (VoiceActivityDetectionCase) {
		VoiceActivityDetectionCase[(VoiceActivityDetectionCase['none'] = 0)] = 'none';
		VoiceActivityDetectionCase[(VoiceActivityDetectionCase['pyannote'] = 1)] = 'pyannote';
		VoiceActivityDetectionCase[(VoiceActivityDetectionCase['matchbox'] = 2)] = 'matchbox';
	})(
		(VoiceActivityDetectionCase =
			TranscribeRequestConfig.VoiceActivityDetectionCase || (TranscribeRequestConfig.VoiceActivityDetectionCase = {}))
	);
	let OneofReturnOptionsCase;
	(function (OneofReturnOptionsCase) {
		OneofReturnOptionsCase[(OneofReturnOptionsCase['none'] = 0)] = 'none';
		OneofReturnOptionsCase[(OneofReturnOptionsCase['returnOptions'] = 1)] = 'returnOptions';
	})(
		(OneofReturnOptionsCase =
			TranscribeRequestConfig.OneofReturnOptionsCase || (TranscribeRequestConfig.OneofReturnOptionsCase = {}))
	);
})(TranscribeRequestConfig || (TranscribeRequestConfig = {}));
/**
 * Message implementation for ondewo.s2t.TranscriptionReturnOptions
 */
export class TranscriptionReturnOptions {
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
		_instance.returnAlternativeTranscriptions = _instance.returnAlternativeTranscriptions || false;
		_instance.returnAlternativeTranscriptionsNr = _instance.returnAlternativeTranscriptionsNr || 0;
		_instance.returnAlternativeWords = _instance.returnAlternativeWords || false;
		_instance.returnAlternativeWordsNr = _instance.returnAlternativeWordsNr || 0;
		_instance.returnWordTiming = _instance.returnWordTiming || false;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
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
		options
	) {
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
TranscriptionReturnOptions.id = 'ondewo.s2t.TranscriptionReturnOptions';
/**
 * Message implementation for ondewo.s2t.UtteranceDetectionOptions
 */
export class UtteranceDetectionOptions {
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
		_instance.startOfUtteranceThreshold = _instance.startOfUtteranceThreshold || 0;
		_instance.endOfUtteranceThreshold = _instance.endOfUtteranceThreshold || 0;
		_instance.nextChunkTimeout = _instance.nextChunkTimeout || 0;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.transcribeNotFinal = _reader.readBool();
					break;
				case 2:
					_instance.startOfUtteranceThreshold = _reader.readFloat();
					break;
				case 3:
					_instance.endOfUtteranceThreshold = _reader.readFloat();
					break;
				case 4:
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
		if (_instance.transcribeNotFinal || _instance.transcribeNotFinal === false) {
			_writer.writeBool(1, _instance.transcribeNotFinal);
		}
		if (_instance.startOfUtteranceThreshold) {
			_writer.writeFloat(2, _instance.startOfUtteranceThreshold);
		}
		if (_instance.endOfUtteranceThreshold) {
			_writer.writeFloat(3, _instance.endOfUtteranceThreshold);
		}
		if (_instance.nextChunkTimeout) {
			_writer.writeFloat(4, _instance.nextChunkTimeout);
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
		this.startOfUtteranceThreshold = _value.startOfUtteranceThreshold;
		this.endOfUtteranceThreshold = _value.endOfUtteranceThreshold;
		this.nextChunkTimeout = _value.nextChunkTimeout;
		UtteranceDetectionOptions.refineValues(this);
	}
	get transcribeNotFinal() {
		return this._transcribeNotFinal;
	}
	set transcribeNotFinal(value) {
		if (value !== undefined && value !== null) {
			this._oneofTranscribeNotFinal = UtteranceDetectionOptions.OneofTranscribeNotFinalCase.transcribeNotFinal;
		}
		this._transcribeNotFinal = value;
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
			startOfUtteranceThreshold: this.startOfUtteranceThreshold,
			endOfUtteranceThreshold: this.endOfUtteranceThreshold,
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
		options
	) {
		return {
			transcribeNotFinal: this.transcribeNotFinal,
			startOfUtteranceThreshold: this.startOfUtteranceThreshold,
			endOfUtteranceThreshold: this.endOfUtteranceThreshold,
			nextChunkTimeout: this.nextChunkTimeout
		};
	}
}
UtteranceDetectionOptions.id = 'ondewo.s2t.UtteranceDetectionOptions';
(function (UtteranceDetectionOptions) {
	let OneofTranscribeNotFinalCase;
	(function (OneofTranscribeNotFinalCase) {
		OneofTranscribeNotFinalCase[(OneofTranscribeNotFinalCase['none'] = 0)] = 'none';
		OneofTranscribeNotFinalCase[(OneofTranscribeNotFinalCase['transcribeNotFinal'] = 1)] = 'transcribeNotFinal';
	})(
		(OneofTranscribeNotFinalCase =
			UtteranceDetectionOptions.OneofTranscribeNotFinalCase ||
			(UtteranceDetectionOptions.OneofTranscribeNotFinalCase = {}))
	);
})(UtteranceDetectionOptions || (UtteranceDetectionOptions = {}));
/**
 * Message implementation for ondewo.s2t.PostProcessingOptions
 */
export class PostProcessingOptions {
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
		options
	) {
		return {
			spellingCorrection: this.spellingCorrection,
			normalize: this.normalize,
			config: this.config ? this.config.toProtobufJSON(options) : null
		};
	}
}
PostProcessingOptions.id = 'ondewo.s2t.PostProcessingOptions';
/**
 * Message implementation for ondewo.s2t.TranscribeStreamRequest
 */
export class TranscribeStreamRequest {
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
		this.config = _value.config ? new TranscribeRequestConfig(_value.config) : undefined;
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
			audioChunk: this.audioChunk ? this.audioChunk.subarray(0) : new Uint8Array(),
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
		options
	) {
		return {
			audioChunk: this.audioChunk ? uint8ArrayToBase64(this.audioChunk) : '',
			endOfStream: this.endOfStream,
			config: this.config ? this.config.toProtobufJSON(options) : null,
			muteAudio: this.muteAudio
		};
	}
}
TranscribeStreamRequest.id = 'ondewo.s2t.TranscribeStreamRequest';
/**
 * Message implementation for ondewo.s2t.Transcription
 */
export class Transcription {
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
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
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
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of Transcription to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.transcription = _value.transcription;
		this.confidenceScore = _value.confidenceScore;
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
			confidenceScore: this.confidenceScore
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
		options
	) {
		return {
			transcription: this.transcription,
			confidenceScore: this.confidenceScore
		};
	}
}
Transcription.id = 'ondewo.s2t.Transcription';
/**
 * Message implementation for ondewo.s2t.TranscribeStreamResponse
 */
export class TranscribeStreamResponse {
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
		this.transcriptions = (_value.transcriptions || []).map((m) => new Transcription(m));
		this.time = _value.time;
		this.final = _value.final;
		this.returnAudio = _value.returnAudio;
		this.audio = _value.audio;
		this.utteranceStart = _value.utteranceStart;
		this.audioUuid = _value.audioUuid;
		this.config = _value.config ? new TranscribeRequestConfig(_value.config) : undefined;
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
			transcriptions: (this.transcriptions || []).map((m) => m.toObject()),
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
		options
	) {
		return {
			transcriptions: (this.transcriptions || []).map((m) => m.toProtobufJSON(options)),
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
TranscribeStreamResponse.id = 'ondewo.s2t.TranscribeStreamResponse';
(function (TranscribeStreamResponse) {
	let OneofConfigCase;
	(function (OneofConfigCase) {
		OneofConfigCase[(OneofConfigCase['none'] = 0)] = 'none';
		OneofConfigCase[(OneofConfigCase['config'] = 1)] = 'config';
	})((OneofConfigCase = TranscribeStreamResponse.OneofConfigCase || (TranscribeStreamResponse.OneofConfigCase = {})));
})(TranscribeStreamResponse || (TranscribeStreamResponse = {}));
/**
 * Message implementation for ondewo.s2t.TranscribeFileRequest
 */
export class TranscribeFileRequest {
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
			if (_reader.isEndGroup()) break;
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
		this.config = _value.config ? new TranscribeRequestConfig(_value.config) : undefined;
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
		options
	) {
		return {
			audioFile: this.audioFile ? uint8ArrayToBase64(this.audioFile) : '',
			config: this.config ? this.config.toProtobufJSON(options) : null
		};
	}
}
TranscribeFileRequest.id = 'ondewo.s2t.TranscribeFileRequest';
/**
 * Message implementation for ondewo.s2t.TranscribeFileResponse
 */
export class TranscribeFileResponse {
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
		_instance.wordTiming = _instance.wordTiming || [];
		_instance.audioUuid = _instance.audioUuid || '';
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
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
					const messageInitializer3 = new WordTiming();
					_reader.readMessage(messageInitializer3, WordTiming.deserializeBinaryFromReader);
					(_instance.wordTiming = _instance.wordTiming || []).push(messageInitializer3);
					break;
				case 4:
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
		if (_instance.wordTiming && _instance.wordTiming.length) {
			_writer.writeRepeatedMessage(3, _instance.wordTiming, WordTiming.serializeBinaryToWriter);
		}
		if (_instance.audioUuid) {
			_writer.writeString(4, _instance.audioUuid);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of TranscribeFileResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.transcriptions = (_value.transcriptions || []).map((m) => new Transcription(m));
		this.time = _value.time;
		this.wordTiming = (_value.wordTiming || []).map((m) => new WordTiming(m));
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
	get wordTiming() {
		return this._wordTiming;
	}
	set wordTiming(value) {
		this._wordTiming = value;
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
			transcriptions: (this.transcriptions || []).map((m) => m.toObject()),
			time: this.time,
			wordTiming: (this.wordTiming || []).map((m) => m.toObject()),
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
		options
	) {
		return {
			transcriptions: (this.transcriptions || []).map((m) => m.toProtobufJSON(options)),
			time: this.time,
			wordTiming: (this.wordTiming || []).map((m) => m.toProtobufJSON(options)),
			audioUuid: this.audioUuid
		};
	}
}
TranscribeFileResponse.id = 'ondewo.s2t.TranscribeFileResponse';
/**
 * Message implementation for ondewo.s2t.WordTiming
 */
export class WordTiming {
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
			if (_reader.isEndGroup()) break;
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
		options
	) {
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
export class S2tPipelineId {
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
			if (_reader.isEndGroup()) break;
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
		options
	) {
		return {
			id: this.id
		};
	}
}
S2tPipelineId.id = 'ondewo.s2t.S2tPipelineId';
/**
 * Message implementation for ondewo.s2t.ListS2tPipelinesRequest
 */
export class ListS2tPipelinesRequest {
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
		options
	) {
		return {
			languages: (this.languages || []).slice(),
			pipelineOwners: (this.pipelineOwners || []).slice(),
			domains: (this.domains || []).slice(),
			registeredOnly: this.registeredOnly
		};
	}
}
ListS2tPipelinesRequest.id = 'ondewo.s2t.ListS2tPipelinesRequest';
/**
 * Message implementation for ondewo.s2t.ListS2tPipelinesResponse
 */
export class ListS2tPipelinesResponse {
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
			if (_reader.isEndGroup()) break;
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
		this.pipelineConfigs = (_value.pipelineConfigs || []).map((m) => new Speech2TextConfig(m));
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
			pipelineConfigs: (this.pipelineConfigs || []).map((m) => m.toObject())
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
		options
	) {
		return {
			pipelineConfigs: (this.pipelineConfigs || []).map((m) => m.toProtobufJSON(options))
		};
	}
}
ListS2tPipelinesResponse.id = 'ondewo.s2t.ListS2tPipelinesResponse';
/**
 * Message implementation for ondewo.s2t.ListS2tLanguagesRequest
 */
export class ListS2tLanguagesRequest {
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
			if (_reader.isEndGroup()) break;
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
		options
	) {
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
export class ListS2tLanguagesResponse {
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
			if (_reader.isEndGroup()) break;
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
		options
	) {
		return {
			languages: (this.languages || []).slice()
		};
	}
}
ListS2tLanguagesResponse.id = 'ondewo.s2t.ListS2tLanguagesResponse';
/**
 * Message implementation for ondewo.s2t.ListS2tDomainsRequest
 */
export class ListS2tDomainsRequest {
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
			if (_reader.isEndGroup()) break;
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
		options
	) {
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
export class ListS2tDomainsResponse {
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
			if (_reader.isEndGroup()) break;
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
		options
	) {
		return {
			domains: (this.domains || []).slice()
		};
	}
}
ListS2tDomainsResponse.id = 'ondewo.s2t.ListS2tDomainsResponse';
/**
 * Message implementation for ondewo.s2t.S2TGetServiceInfoResponse
 */
export class S2TGetServiceInfoResponse {
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
			if (_reader.isEndGroup()) break;
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
		options
	) {
		return {
			version: this.version
		};
	}
}
S2TGetServiceInfoResponse.id = 'ondewo.s2t.S2TGetServiceInfoResponse';
/**
 * Message implementation for ondewo.s2t.Speech2TextConfig
 */
export class Speech2TextConfig {
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
		_instance.voiceActivityDetection = _instance.voiceActivityDetection || undefined;
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
			if (_reader.isEndGroup()) break;
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
		this.description = _value.description ? new S2TDescription(_value.description) : undefined;
		this.active = _value.active;
		this.inference = _value.inference ? new S2TInference(_value.inference) : undefined;
		this.streamingServer = _value.streamingServer ? new StreamingServer(_value.streamingServer) : undefined;
		this.voiceActivityDetection = _value.voiceActivityDetection
			? new VoiceActivityDetection(_value.voiceActivityDetection)
			: undefined;
		this.postProcessing = _value.postProcessing ? new PostProcessing(_value.postProcessing) : undefined;
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
			streamingServer: this.streamingServer ? this.streamingServer.toObject() : undefined,
			voiceActivityDetection: this.voiceActivityDetection ? this.voiceActivityDetection.toObject() : undefined,
			postProcessing: this.postProcessing ? this.postProcessing.toObject() : undefined,
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
		options
	) {
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
}
Speech2TextConfig.id = 'ondewo.s2t.Speech2TextConfig';
/**
 * Message implementation for ondewo.s2t.S2TDescription
 */
export class S2TDescription {
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
		options
	) {
		return {
			language: this.language,
			pipelineOwner: this.pipelineOwner,
			domain: this.domain,
			comments: this.comments
		};
	}
}
S2TDescription.id = 'ondewo.s2t.S2TDescription';
/**
 * Message implementation for ondewo.s2t.S2TInference
 */
export class S2TInference {
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
		this.acousticModels = _value.acousticModels ? new AcousticModels(_value.acousticModels) : undefined;
		this.languageModels = _value.languageModels ? new LanguageModels(_value.languageModels) : undefined;
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
			acousticModels: this.acousticModels ? this.acousticModels.toObject() : undefined,
			languageModels: this.languageModels ? this.languageModels.toObject() : undefined,
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
		options
	) {
		return {
			acousticModels: this.acousticModels ? this.acousticModels.toProtobufJSON(options) : null,
			languageModels: this.languageModels ? this.languageModels.toProtobufJSON(options) : null,
			inferenceBackend:
				InferenceBackend[
					this.inferenceBackend === null || this.inferenceBackend === undefined ? 0 : this.inferenceBackend
				]
		};
	}
}
S2TInference.id = 'ondewo.s2t.S2TInference';
/**
 * Message implementation for ondewo.s2t.AcousticModels
 */
export class AcousticModels {
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
		_instance.quartznet = _instance.quartznet || undefined;
		_instance.quartznetTriton = _instance.quartznetTriton || undefined;
		_instance.wav2vec = _instance.wav2vec || undefined;
		_instance.wav2vecTriton = _instance.wav2vecTriton || undefined;
		_instance.whisper = _instance.whisper || undefined;
		_instance.whisperTriton = _instance.whisperTriton || undefined;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				case 5:
					_instance.wav2vecTriton = new Wav2VecTriton();
					_reader.readMessage(_instance.wav2vecTriton, Wav2VecTriton.deserializeBinaryFromReader);
					break;
				case 6:
					_instance.whisper = new Whisper();
					_reader.readMessage(_instance.whisper, Whisper.deserializeBinaryFromReader);
					break;
				case 7:
					_instance.whisperTriton = new WhisperTriton();
					_reader.readMessage(_instance.whisperTriton, WhisperTriton.deserializeBinaryFromReader);
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
		if (_instance.quartznet) {
			_writer.writeMessage(2, _instance.quartznet, Quartznet.serializeBinaryToWriter);
		}
		if (_instance.quartznetTriton) {
			_writer.writeMessage(3, _instance.quartznetTriton, QuartznetTriton.serializeBinaryToWriter);
		}
		if (_instance.wav2vec) {
			_writer.writeMessage(4, _instance.wav2vec, Wav2Vec.serializeBinaryToWriter);
		}
		if (_instance.wav2vecTriton) {
			_writer.writeMessage(5, _instance.wav2vecTriton, Wav2VecTriton.serializeBinaryToWriter);
		}
		if (_instance.whisper) {
			_writer.writeMessage(6, _instance.whisper, Whisper.serializeBinaryToWriter);
		}
		if (_instance.whisperTriton) {
			_writer.writeMessage(7, _instance.whisperTriton, WhisperTriton.serializeBinaryToWriter);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AcousticModels to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.type = _value.type;
		this.quartznet = _value.quartznet ? new Quartznet(_value.quartznet) : undefined;
		this.quartznetTriton = _value.quartznetTriton ? new QuartznetTriton(_value.quartznetTriton) : undefined;
		this.wav2vec = _value.wav2vec ? new Wav2Vec(_value.wav2vec) : undefined;
		this.wav2vecTriton = _value.wav2vecTriton ? new Wav2VecTriton(_value.wav2vecTriton) : undefined;
		this.whisper = _value.whisper ? new Whisper(_value.whisper) : undefined;
		this.whisperTriton = _value.whisperTriton ? new WhisperTriton(_value.whisperTriton) : undefined;
		AcousticModels.refineValues(this);
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
			quartznet: this.quartznet ? this.quartznet.toObject() : undefined,
			quartznetTriton: this.quartznetTriton ? this.quartznetTriton.toObject() : undefined,
			wav2vec: this.wav2vec ? this.wav2vec.toObject() : undefined,
			wav2vecTriton: this.wav2vecTriton ? this.wav2vecTriton.toObject() : undefined,
			whisper: this.whisper ? this.whisper.toObject() : undefined,
			whisperTriton: this.whisperTriton ? this.whisperTriton.toObject() : undefined
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
		options
	) {
		return {
			type: this.type,
			quartznet: this.quartznet ? this.quartznet.toProtobufJSON(options) : null,
			quartznetTriton: this.quartznetTriton ? this.quartznetTriton.toProtobufJSON(options) : null,
			wav2vec: this.wav2vec ? this.wav2vec.toProtobufJSON(options) : null,
			wav2vecTriton: this.wav2vecTriton ? this.wav2vecTriton.toProtobufJSON(options) : null,
			whisper: this.whisper ? this.whisper.toProtobufJSON(options) : null,
			whisperTriton: this.whisperTriton ? this.whisperTriton.toProtobufJSON(options) : null
		};
	}
}
AcousticModels.id = 'ondewo.s2t.AcousticModels';
/**
 * Message implementation for ondewo.s2t.Whisper
 */
export class Whisper {
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
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
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
		options
	) {
		return {
			modelPath: this.modelPath,
			useGpu: this.useGpu,
			language: this.language
		};
	}
}
Whisper.id = 'ondewo.s2t.Whisper';
/**
 * Message implementation for ondewo.s2t.WhisperTriton
 */
export class WhisperTriton {
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
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
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
			checkStatusTimeout: this.checkStatusTimeout
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
		options
	) {
		return {
			processorPath: this.processorPath,
			tritonModelName: this.tritonModelName,
			tritonModelVersion: this.tritonModelVersion,
			checkStatusTimeout: this.checkStatusTimeout
		};
	}
}
WhisperTriton.id = 'ondewo.s2t.WhisperTriton';
/**
 * Message implementation for ondewo.s2t.Wav2Vec
 */
export class Wav2Vec {
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
			if (_reader.isEndGroup()) break;
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
		options
	) {
		return {
			modelPath: this.modelPath,
			useGpu: this.useGpu
		};
	}
}
Wav2Vec.id = 'ondewo.s2t.Wav2Vec';
/**
 * Message implementation for ondewo.s2t.Wav2VecTriton
 */
export class Wav2VecTriton {
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
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
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
			checkStatusTimeout: this.checkStatusTimeout
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
		options
	) {
		return {
			processorPath: this.processorPath,
			tritonModelName: this.tritonModelName,
			tritonModelVersion: this.tritonModelVersion,
			checkStatusTimeout: this.checkStatusTimeout
		};
	}
}
Wav2VecTriton.id = 'ondewo.s2t.Wav2VecTriton';
/**
 * Message implementation for ondewo.s2t.Quartznet
 */
export class Quartznet {
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
		_instance.useGpu = _instance.useGpu || false;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
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
				case 5:
					_instance.useGpu = _reader.readBool();
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
		if (_instance.useGpu) {
			_writer.writeBool(5, _instance.useGpu);
		}
	}
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
		this.useGpu = _value.useGpu;
		Quartznet.refineValues(this);
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
			ckptFile: this.ckptFile ? this.ckptFile.toObject() : undefined,
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
		options
	) {
		return {
			configPath: this.configPath,
			loadType: this.loadType,
			ptFiles: this.ptFiles ? this.ptFiles.toProtobufJSON(options) : null,
			ckptFile: this.ckptFile ? this.ckptFile.toProtobufJSON(options) : null,
			useGpu: this.useGpu
		};
	}
}
Quartznet.id = 'ondewo.s2t.Quartznet';
/**
 * Message implementation for ondewo.s2t.PtFiles
 */
export class PtFiles {
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
			if (_reader.isEndGroup()) break;
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
		options
	) {
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
export class CkptFile {
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
			if (_reader.isEndGroup()) break;
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
		options
	) {
		return {
			path: this.path
		};
	}
}
CkptFile.id = 'ondewo.s2t.CkptFile';
/**
 * Message implementation for ondewo.s2t.QuartznetTriton
 */
export class QuartznetTriton {
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
			if (_reader.isEndGroup()) break;
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
		options
	) {
		return {
			configPath: this.configPath,
			tritonUrl: this.tritonUrl,
			tritonModel: this.tritonModel
		};
	}
}
QuartznetTriton.id = 'ondewo.s2t.QuartznetTriton';
/**
 * Message implementation for ondewo.s2t.LanguageModels
 */
export class LanguageModels {
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
		options
	) {
		return {
			path: this.path,
			beamSize: this.beamSize,
			defaultLm: this.defaultLm,
			beamSearchScorerAlpha: this.beamSearchScorerAlpha,
			beamSearchScorerBeta: this.beamSearchScorerBeta
		};
	}
}
LanguageModels.id = 'ondewo.s2t.LanguageModels';
/**
 * Message implementation for ondewo.s2t.StreamingServer
 */
export class StreamingServer {
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
		_instance.streamingSpeechRecognition = _instance.streamingSpeechRecognition || undefined;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
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
					_reader.readMessage(
						_instance.streamingSpeechRecognition,
						StreamingSpeechRecognition.deserializeBinaryFromReader
					);
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
		options
	) {
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
export class StreamingSpeechRecognition {
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
		_instance.startOfUtteranceThreshold = _instance.startOfUtteranceThreshold || 0;
		_instance.endOfUtteranceThreshold = _instance.endOfUtteranceThreshold || 0;
		_instance.nextChunkTimeout = _instance.nextChunkTimeout || 0;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
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
					_instance.startOfUtteranceThreshold = _reader.readFloat();
					break;
				case 6:
					_instance.endOfUtteranceThreshold = _reader.readFloat();
					break;
				case 7:
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
		if (_instance.startOfUtteranceThreshold) {
			_writer.writeFloat(5, _instance.startOfUtteranceThreshold);
		}
		if (_instance.endOfUtteranceThreshold) {
			_writer.writeFloat(6, _instance.endOfUtteranceThreshold);
		}
		if (_instance.nextChunkTimeout) {
			_writer.writeFloat(7, _instance.nextChunkTimeout);
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
		this.startOfUtteranceThreshold = _value.startOfUtteranceThreshold;
		this.endOfUtteranceThreshold = _value.endOfUtteranceThreshold;
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
			startOfUtteranceThreshold: this.startOfUtteranceThreshold,
			endOfUtteranceThreshold: this.endOfUtteranceThreshold,
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
		options
	) {
		return {
			transcribeNotFinal: this.transcribeNotFinal,
			decodingMethod: this.decodingMethod,
			samplingRate: this.samplingRate,
			minAudioChunkSize: this.minAudioChunkSize,
			startOfUtteranceThreshold: this.startOfUtteranceThreshold,
			endOfUtteranceThreshold: this.endOfUtteranceThreshold,
			nextChunkTimeout: this.nextChunkTimeout
		};
	}
}
StreamingSpeechRecognition.id = 'ondewo.s2t.StreamingSpeechRecognition';
/**
 * Message implementation for ondewo.s2t.VoiceActivityDetection
 */
export class VoiceActivityDetection {
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
		options
	) {
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
export class Pyannote {
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
			if (_reader.isEndGroup()) break;
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
		if (_instance.logScale || _instance.logScale === false) {
			_writer.writeBool(5, _instance.logScale);
		}
		if (_instance.minDurationOff) {
			_writer.writeFloat(6, _instance.minDurationOff);
		}
		if (_instance.minDurationOn) {
			_writer.writeFloat(7, _instance.minDurationOn);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of Pyannote to deeply clone from
	 */
	constructor(_value) {
		this._oneofLogScale = Pyannote.OneofLogScaleCase.none;
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
		if (value !== undefined && value !== null) {
			this._oneofLogScale = Pyannote.OneofLogScaleCase.logScale;
		}
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
	get oneofLogScale() {
		return this._oneofLogScale;
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
		options
	) {
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
(function (Pyannote) {
	let OneofLogScaleCase;
	(function (OneofLogScaleCase) {
		OneofLogScaleCase[(OneofLogScaleCase['none'] = 0)] = 'none';
		OneofLogScaleCase[(OneofLogScaleCase['logScale'] = 1)] = 'logScale';
	})((OneofLogScaleCase = Pyannote.OneofLogScaleCase || (Pyannote.OneofLogScaleCase = {})));
})(Pyannote || (Pyannote = {}));
/**
 * Message implementation for ondewo.s2t.Matchbox
 */
export class Matchbox {
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
			if (_reader.isEndGroup()) break;
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
		options
	) {
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
export class PostProcessing {
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
			if (_reader.isEndGroup()) break;
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
		this.postProcessors = _value.postProcessors ? new PostProcessors(_value.postProcessors) : undefined;
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
			postProcessors: this.postProcessors ? this.postProcessors.toObject() : undefined
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
		options
	) {
		return {
			pipeline: (this.pipeline || []).slice(),
			postProcessors: this.postProcessors ? this.postProcessors.toProtobufJSON(options) : null
		};
	}
}
PostProcessing.id = 'ondewo.s2t.PostProcessing';
/**
 * Message implementation for ondewo.s2t.PostProcessors
 */
export class PostProcessors {
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
			if (_reader.isEndGroup()) break;
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
		this.normalization = _value.normalization ? new S2TNormalization(_value.normalization) : undefined;
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
			normalization: this.normalization ? this.normalization.toObject() : undefined
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
		options
	) {
		return {
			symSpell: this.symSpell ? this.symSpell.toProtobufJSON(options) : null,
			normalization: this.normalization ? this.normalization.toProtobufJSON(options) : null
		};
	}
}
PostProcessors.id = 'ondewo.s2t.PostProcessors';
/**
 * Message implementation for ondewo.s2t.SymSpell
 */
export class SymSpell {
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
		_instance.maxDictionaryEditDistance = _instance.maxDictionaryEditDistance || '0';
		_instance.prefixLength = _instance.prefixLength || '0';
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
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
		options
	) {
		return {
			dictPath: this.dictPath,
			maxDictionaryEditDistance: this.maxDictionaryEditDistance,
			prefixLength: this.prefixLength
		};
	}
}
SymSpell.id = 'ondewo.s2t.SymSpell';
/**
 * Message implementation for ondewo.s2t.S2TNormalization
 */
export class S2TNormalization {
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
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.language = _reader.readString();
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
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of S2TNormalization to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.language = _value.language;
		S2TNormalization.refineValues(this);
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
		S2TNormalization.serializeBinaryToWriter(this, writer);
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
		options
	) {
		return {
			language: this.language
		};
	}
}
S2TNormalization.id = 'ondewo.s2t.S2TNormalization';
/**
 * Message implementation for ondewo.s2t.Logging
 */
export class Logging {
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
			if (_reader.isEndGroup()) break;
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
		options
	) {
		return {
			type: this.type,
			path: this.path
		};
	}
}
Logging.id = 'ondewo.s2t.Logging';
/**
 * Message implementation for ondewo.s2t.ListS2tLanguageModelsRequest
 */
export class ListS2tLanguageModelsRequest {
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
			if (_reader.isEndGroup()) break;
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
		options
	) {
		return {
			ids: (this.ids || []).slice()
		};
	}
}
ListS2tLanguageModelsRequest.id = 'ondewo.s2t.ListS2tLanguageModelsRequest';
/**
 * Message implementation for ondewo.s2t.LanguageModelPipelineId
 */
export class LanguageModelPipelineId {
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
			if (_reader.isEndGroup()) break;
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
		options
	) {
		return {
			pipelineId: this.pipelineId,
			modelNames: (this.modelNames || []).slice()
		};
	}
}
LanguageModelPipelineId.id = 'ondewo.s2t.LanguageModelPipelineId';
/**
 * Message implementation for ondewo.s2t.ListS2tLanguageModelsResponse
 */
export class ListS2tLanguageModelsResponse {
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
			if (_reader.isEndGroup()) break;
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
		this.lmPipelineIds = (_value.lmPipelineIds || []).map((m) => new LanguageModelPipelineId(m));
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
			lmPipelineIds: (this.lmPipelineIds || []).map((m) => m.toObject())
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
		options
	) {
		return {
			lmPipelineIds: (this.lmPipelineIds || []).map((m) => m.toProtobufJSON(options))
		};
	}
}
ListS2tLanguageModelsResponse.id = 'ondewo.s2t.ListS2tLanguageModelsResponse';
/**
 * Message implementation for ondewo.s2t.CreateUserLanguageModelRequest
 */
export class CreateUserLanguageModelRequest {
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
			if (_reader.isEndGroup()) break;
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
		options
	) {
		return {
			languageModelName: this.languageModelName
		};
	}
}
CreateUserLanguageModelRequest.id = 'ondewo.s2t.CreateUserLanguageModelRequest';
/**
 * Message implementation for ondewo.s2t.DeleteUserLanguageModelRequest
 */
export class DeleteUserLanguageModelRequest {
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
			if (_reader.isEndGroup()) break;
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
		options
	) {
		return {
			languageModelName: this.languageModelName
		};
	}
}
DeleteUserLanguageModelRequest.id = 'ondewo.s2t.DeleteUserLanguageModelRequest';
/**
 * Message implementation for ondewo.s2t.AddDataToUserLanguageModelRequest
 */
export class AddDataToUserLanguageModelRequest {
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
			if (_reader.isEndGroup()) break;
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
			zippedData: this.zippedData ? this.zippedData.subarray(0) : new Uint8Array()
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
		options
	) {
		return {
			languageModelName: this.languageModelName,
			zippedData: this.zippedData ? uint8ArrayToBase64(this.zippedData) : ''
		};
	}
}
AddDataToUserLanguageModelRequest.id = 'ondewo.s2t.AddDataToUserLanguageModelRequest';
/**
 * Message implementation for ondewo.s2t.TrainUserLanguageModelRequest
 */
export class TrainUserLanguageModelRequest {
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
			if (_reader.isEndGroup()) break;
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
		options
	) {
		return {
			languageModelName: this.languageModelName,
			order: this.order
		};
	}
}
TrainUserLanguageModelRequest.id = 'ondewo.s2t.TrainUserLanguageModelRequest';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlZWNoLXRvLXRleHQucGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvb25kZXdvL3MydC9zcGVlY2gtdG8tdGV4dC5wYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLGNBQWM7QUFDZCxFQUFFO0FBQ0YsMkJBQTJCO0FBQzNCLDhDQUE4QztBQUM5QyxPQUFPLEVBSUwsa0JBQWtCLEVBQ25CLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RSxNQUFNLENBQU4sSUFBWSxnQkFJWDtBQUpELFdBQVksZ0JBQWdCO0lBQzFCLGlHQUE2QixDQUFBO0lBQzdCLGlHQUE2QixDQUFBO0lBQzdCLDJGQUEwQixDQUFBO0FBQzVCLENBQUMsRUFKVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBSTNCO0FBQ0QsTUFBTSxDQUFOLElBQVksUUFLWDtBQUxELFdBQVksUUFBUTtJQUNsQiw2Q0FBVyxDQUFBO0lBQ1gsMkNBQVUsQ0FBQTtJQUNWLHFFQUF1QixDQUFBO0lBQ3ZCLHFEQUFlLENBQUE7QUFDakIsQ0FBQyxFQUxXLFFBQVEsS0FBUixRQUFRLFFBS25CO0FBQ0Q7O0dBRUc7QUFDSCxNQUFNLE9BQU8sdUJBQXVCO0lBR2xDOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUM7UUFDL0MsdUJBQXVCLENBQUMsMkJBQTJCLENBQ2pELFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQWtDO1FBQ3BELFNBQVMsQ0FBQyxhQUFhLEdBQUcs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QUFDLEtBQUs7U0FDbEIsQ0FBQztJQUNKLENBQUM7O0FBeElNLGdDQUFFLEdBQUcsMENBQTBDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEB0cy1ub2NoZWNrXG4vL1xuLy8gVEhJUyBJUyBBIEdFTkVSQVRFRCBGSUxFXG4vLyBETyBOT1QgTU9ESUZZIElUISBZT1VSIENIQU5HRVMgV0lMTCBCRSBMT1NUXG5pbXBvcnQge1xuICBHcnBjTWVzc2FnZSxcbiAgUmVjdXJzaXZlUGFydGlhbCxcbiAgVG9Qcm90b2J1ZkpTT05PcHRpb25zLFxuICB1aW50OEFycmF5VG9CYXNlNjRcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciwgQnl0ZVNvdXJjZSB9IGZyb20gJ2dvb2dsZS1wcm90b2J1Zic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMCBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5leHBvcnQgZW51bSBJbmZlcmVuY2VCYWNrZW5kIHtcbiAgSU5GRVJFTkNFX0JBQ0tFTkRfVU5LTk9XTiA9IDAsXG4gIElORkVSRU5DRV9CQUNLRU5EX1BZVE9SQ0ggPSAxLFxuICBJTkZFUkVOQ0VfQkFDS0VORF9GTEFYID0gMlxufVxuZXhwb3J0IGVudW0gRGVjb2Rpbmcge1xuICBERUZBVUxUID0gMCxcbiAgR1JFRURZID0gMSxcbiAgQkVBTV9TRUFSQ0hfV0lUSF9MTSA9IDIsXG4gIEJFQU1fU0VBUkNIID0gM1xufVxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LlRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnXG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuVHJhbnNjcmliZVJlcXVlc3RDb25maWcnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZygpO1xuICAgIFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVHJhbnNjcmliZVJlcXVlc3RDb25maWcpIHtcbiAgICBfaW5zdGFuY2UuczJ0UGlwZWxpbmVJZCA9IF9pbnN0YW5jZS5zMnRQaXBlbGluZUlkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5kZWNvZGluZyA9IF9pbnN0YW5jZS5kZWNvZGluZyB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogVHJhbnNjcmliZVJlcXVlc3RDb25maWcsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnMydFBpcGVsaW5lSWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5kZWNvZGluZyA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLnBvc3RQcm9jZXNzaW5nID0gbmV3IFBvc3RQcm9jZXNzaW5nT3B0aW9ucygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UucG9zdFByb2Nlc3NpbmcsXG4gICAgICAgICAgICBQb3N0UHJvY2Vzc2luZ09wdGlvbnMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS51dHRlcmFuY2VEZXRlY3Rpb24gPSBuZXcgVXR0ZXJhbmNlRGV0ZWN0aW9uT3B0aW9ucygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudXR0ZXJhbmNlRGV0ZWN0aW9uLFxuICAgICAgICAgICAgVXR0ZXJhbmNlRGV0ZWN0aW9uT3B0aW9ucy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLnB5YW5ub3RlID0gbmV3IFB5YW5ub3RlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5weWFubm90ZSxcbiAgICAgICAgICAgIFB5YW5ub3RlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2UubWF0Y2hib3ggPSBuZXcgTWF0Y2hib3goKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLm1hdGNoYm94LFxuICAgICAgICAgICAgTWF0Y2hib3guZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIF9pbnN0YW5jZS5yZXR1cm5PcHRpb25zID0gbmV3IFRyYW5zY3JpcHRpb25SZXR1cm5PcHRpb25zKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5yZXR1cm5PcHRpb25zLFxuICAgICAgICAgICAgVHJhbnNjcmlwdGlvblJldHVybk9wdGlvbnMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogVHJhbnNjcmliZVJlcXVlc3RDb25maWcsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuczJ0UGlwZWxpbmVJZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UuczJ0UGlwZWxpbmVJZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZGVjb2RpbmcpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDIsIF9pbnN0YW5jZS5kZWNvZGluZyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2VNb2RlbE5hbWUgfHwgX2luc3RhbmNlLmxhbmd1YWdlTW9kZWxOYW1lID09PSAnJykge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygzLCBfaW5zdGFuY2UubGFuZ3VhZ2VNb2RlbE5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBvc3RQcm9jZXNzaW5nKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgX2luc3RhbmNlLnBvc3RQcm9jZXNzaW5nIGFzIGFueSxcbiAgICAgICAgUG9zdFByb2Nlc3NpbmdPcHRpb25zLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnV0dGVyYW5jZURldGVjdGlvbikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIF9pbnN0YW5jZS51dHRlcmFuY2VEZXRlY3Rpb24gYXMgYW55LFxuICAgICAgICBVdHRlcmFuY2VEZXRlY3Rpb25PcHRpb25zLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnB5YW5ub3RlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNixcbiAgICAgICAgX2luc3RhbmNlLnB5YW5ub3RlIGFzIGFueSxcbiAgICAgICAgUHlhbm5vdGUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWF0Y2hib3gpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA3LFxuICAgICAgICBfaW5zdGFuY2UubWF0Y2hib3ggYXMgYW55LFxuICAgICAgICBNYXRjaGJveC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5yZXR1cm5PcHRpb25zKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgOCxcbiAgICAgICAgX2luc3RhbmNlLnJldHVybk9wdGlvbnMgYXMgYW55LFxuICAgICAgICBUcmFuc2NyaXB0aW9uUmV0dXJuT3B0aW9ucy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zMnRQaXBlbGluZUlkOiBzdHJpbmc7XG4gIHByaXZhdGUgX2RlY29kaW5nOiBEZWNvZGluZztcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VNb2RlbE5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfcG9zdFByb2Nlc3Npbmc/OiBQb3N0UHJvY2Vzc2luZ09wdGlvbnM7XG4gIHByaXZhdGUgX3V0dGVyYW5jZURldGVjdGlvbj86IFV0dGVyYW5jZURldGVjdGlvbk9wdGlvbnM7XG4gIHByaXZhdGUgX3B5YW5ub3RlPzogUHlhbm5vdGU7XG4gIHByaXZhdGUgX21hdGNoYm94PzogTWF0Y2hib3g7XG4gIHByaXZhdGUgX3JldHVybk9wdGlvbnM/OiBUcmFuc2NyaXB0aW9uUmV0dXJuT3B0aW9ucztcblxuICBwcml2YXRlIF9vbmVvZkxhbmd1YWdlTW9kZWxOYW1lOiBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZy5PbmVvZkxhbmd1YWdlTW9kZWxOYW1lQ2FzZSA9XG4gICAgVHJhbnNjcmliZVJlcXVlc3RDb25maWcuT25lb2ZMYW5ndWFnZU1vZGVsTmFtZUNhc2Uubm9uZTtcbiAgcHJpdmF0ZSBfb25lb2ZQb3N0UHJvY2Vzc2luZzogVHJhbnNjcmliZVJlcXVlc3RDb25maWcuT25lb2ZQb3N0UHJvY2Vzc2luZ0Nhc2UgPVxuICAgIFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLk9uZW9mUG9zdFByb2Nlc3NpbmdDYXNlLm5vbmU7XG4gIHByaXZhdGUgX29uZW9mVXR0ZXJhbmNlRGV0ZWN0aW9uOiBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZy5PbmVvZlV0dGVyYW5jZURldGVjdGlvbkNhc2UgPVxuICAgIFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLk9uZW9mVXR0ZXJhbmNlRGV0ZWN0aW9uQ2FzZS5ub25lO1xuICBwcml2YXRlIF92b2ljZUFjdGl2aXR5RGV0ZWN0aW9uOiBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZy5Wb2ljZUFjdGl2aXR5RGV0ZWN0aW9uQ2FzZSA9XG4gICAgVHJhbnNjcmliZVJlcXVlc3RDb25maWcuVm9pY2VBY3Rpdml0eURldGVjdGlvbkNhc2Uubm9uZTtcbiAgcHJpdmF0ZSBfb25lb2ZSZXR1cm5PcHRpb25zOiBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZy5PbmVvZlJldHVybk9wdGlvbnNDYXNlID1cbiAgICBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZy5PbmVvZlJldHVybk9wdGlvbnNDYXNlLm5vbmU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxUcmFuc2NyaWJlUmVxdWVzdENvbmZpZy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5zMnRQaXBlbGluZUlkID0gX3ZhbHVlLnMydFBpcGVsaW5lSWQ7XG4gICAgdGhpcy5kZWNvZGluZyA9IF92YWx1ZS5kZWNvZGluZztcbiAgICB0aGlzLmxhbmd1YWdlTW9kZWxOYW1lID0gX3ZhbHVlLmxhbmd1YWdlTW9kZWxOYW1lO1xuICAgIHRoaXMucG9zdFByb2Nlc3NpbmcgPSBfdmFsdWUucG9zdFByb2Nlc3NpbmdcbiAgICAgID8gbmV3IFBvc3RQcm9jZXNzaW5nT3B0aW9ucyhfdmFsdWUucG9zdFByb2Nlc3NpbmcpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnV0dGVyYW5jZURldGVjdGlvbiA9IF92YWx1ZS51dHRlcmFuY2VEZXRlY3Rpb25cbiAgICAgID8gbmV3IFV0dGVyYW5jZURldGVjdGlvbk9wdGlvbnMoX3ZhbHVlLnV0dGVyYW5jZURldGVjdGlvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucHlhbm5vdGUgPSBfdmFsdWUucHlhbm5vdGUgPyBuZXcgUHlhbm5vdGUoX3ZhbHVlLnB5YW5ub3RlKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1hdGNoYm94ID0gX3ZhbHVlLm1hdGNoYm94ID8gbmV3IE1hdGNoYm94KF92YWx1ZS5tYXRjaGJveCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZXR1cm5PcHRpb25zID0gX3ZhbHVlLnJldHVybk9wdGlvbnNcbiAgICAgID8gbmV3IFRyYW5zY3JpcHRpb25SZXR1cm5PcHRpb25zKF92YWx1ZS5yZXR1cm5PcHRpb25zKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgVHJhbnNjcmliZVJlcXVlc3RDb25maWcucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzMnRQaXBlbGluZUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3MydFBpcGVsaW5lSWQ7XG4gIH1cbiAgc2V0IHMydFBpcGVsaW5lSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3MydFBpcGVsaW5lSWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGVjb2RpbmcoKTogRGVjb2Rpbmcge1xuICAgIHJldHVybiB0aGlzLl9kZWNvZGluZztcbiAgfVxuICBzZXQgZGVjb2RpbmcodmFsdWU6IERlY29kaW5nKSB7XG4gICAgdGhpcy5fZGVjb2RpbmcgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VNb2RlbE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VNb2RlbE5hbWU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlTW9kZWxOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fb25lb2ZMYW5ndWFnZU1vZGVsTmFtZSA9XG4gICAgICAgIFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLk9uZW9mTGFuZ3VhZ2VNb2RlbE5hbWVDYXNlLmxhbmd1YWdlTW9kZWxOYW1lO1xuICAgIH1cbiAgICB0aGlzLl9sYW5ndWFnZU1vZGVsTmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCBwb3N0UHJvY2Vzc2luZygpOiBQb3N0UHJvY2Vzc2luZ09wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wb3N0UHJvY2Vzc2luZztcbiAgfVxuICBzZXQgcG9zdFByb2Nlc3NpbmcodmFsdWU6IFBvc3RQcm9jZXNzaW5nT3B0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9vbmVvZlBvc3RQcm9jZXNzaW5nID1cbiAgICAgICAgVHJhbnNjcmliZVJlcXVlc3RDb25maWcuT25lb2ZQb3N0UHJvY2Vzc2luZ0Nhc2UucG9zdFByb2Nlc3Npbmc7XG4gICAgfVxuICAgIHRoaXMuX3Bvc3RQcm9jZXNzaW5nID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHV0dGVyYW5jZURldGVjdGlvbigpOiBVdHRlcmFuY2VEZXRlY3Rpb25PcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdXR0ZXJhbmNlRGV0ZWN0aW9uO1xuICB9XG4gIHNldCB1dHRlcmFuY2VEZXRlY3Rpb24odmFsdWU6IFV0dGVyYW5jZURldGVjdGlvbk9wdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fb25lb2ZVdHRlcmFuY2VEZXRlY3Rpb24gPVxuICAgICAgICBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZy5PbmVvZlV0dGVyYW5jZURldGVjdGlvbkNhc2UudXR0ZXJhbmNlRGV0ZWN0aW9uO1xuICAgIH1cbiAgICB0aGlzLl91dHRlcmFuY2VEZXRlY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgcHlhbm5vdGUoKTogUHlhbm5vdGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9weWFubm90ZTtcbiAgfVxuICBzZXQgcHlhbm5vdGUodmFsdWU6IFB5YW5ub3RlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX21hdGNoYm94ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdm9pY2VBY3Rpdml0eURldGVjdGlvbiA9XG4gICAgICAgIFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLlZvaWNlQWN0aXZpdHlEZXRlY3Rpb25DYXNlLnB5YW5ub3RlO1xuICAgIH1cbiAgICB0aGlzLl9weWFubm90ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBtYXRjaGJveCgpOiBNYXRjaGJveCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21hdGNoYm94O1xuICB9XG4gIHNldCBtYXRjaGJveCh2YWx1ZTogTWF0Y2hib3ggfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcHlhbm5vdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92b2ljZUFjdGl2aXR5RGV0ZWN0aW9uID1cbiAgICAgICAgVHJhbnNjcmliZVJlcXVlc3RDb25maWcuVm9pY2VBY3Rpdml0eURldGVjdGlvbkNhc2UubWF0Y2hib3g7XG4gICAgfVxuICAgIHRoaXMuX21hdGNoYm94ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJldHVybk9wdGlvbnMoKTogVHJhbnNjcmlwdGlvblJldHVybk9wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yZXR1cm5PcHRpb25zO1xuICB9XG4gIHNldCByZXR1cm5PcHRpb25zKHZhbHVlOiBUcmFuc2NyaXB0aW9uUmV0dXJuT3B0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9vbmVvZlJldHVybk9wdGlvbnMgPVxuICAgICAgICBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZy5PbmVvZlJldHVybk9wdGlvbnNDYXNlLnJldHVybk9wdGlvbnM7XG4gICAgfVxuICAgIHRoaXMuX3JldHVybk9wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgb25lb2ZMYW5ndWFnZU1vZGVsTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fb25lb2ZMYW5ndWFnZU1vZGVsTmFtZTtcbiAgfVxuICBnZXQgb25lb2ZQb3N0UHJvY2Vzc2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5fb25lb2ZQb3N0UHJvY2Vzc2luZztcbiAgfVxuICBnZXQgb25lb2ZVdHRlcmFuY2VEZXRlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uZW9mVXR0ZXJhbmNlRGV0ZWN0aW9uO1xuICB9XG4gIGdldCB2b2ljZUFjdGl2aXR5RGV0ZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl92b2ljZUFjdGl2aXR5RGV0ZWN0aW9uO1xuICB9XG4gIGdldCBvbmVvZlJldHVybk9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uZW9mUmV0dXJuT3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHMydFBpcGVsaW5lSWQ6IHRoaXMuczJ0UGlwZWxpbmVJZCxcbiAgICAgIGRlY29kaW5nOiB0aGlzLmRlY29kaW5nLFxuICAgICAgbGFuZ3VhZ2VNb2RlbE5hbWU6IHRoaXMubGFuZ3VhZ2VNb2RlbE5hbWUsXG4gICAgICBwb3N0UHJvY2Vzc2luZzogdGhpcy5wb3N0UHJvY2Vzc2luZ1xuICAgICAgICA/IHRoaXMucG9zdFByb2Nlc3NpbmcudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHV0dGVyYW5jZURldGVjdGlvbjogdGhpcy51dHRlcmFuY2VEZXRlY3Rpb25cbiAgICAgICAgPyB0aGlzLnV0dGVyYW5jZURldGVjdGlvbi50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgcHlhbm5vdGU6IHRoaXMucHlhbm5vdGUgPyB0aGlzLnB5YW5ub3RlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBtYXRjaGJveDogdGhpcy5tYXRjaGJveCA/IHRoaXMubWF0Y2hib3gudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHJldHVybk9wdGlvbnM6IHRoaXMucmV0dXJuT3B0aW9uc1xuICAgICAgICA/IHRoaXMucmV0dXJuT3B0aW9ucy50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogVHJhbnNjcmliZVJlcXVlc3RDb25maWcuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBzMnRQaXBlbGluZUlkOiB0aGlzLnMydFBpcGVsaW5lSWQsXG4gICAgICBkZWNvZGluZzpcbiAgICAgICAgRGVjb2RpbmdbXG4gICAgICAgICAgdGhpcy5kZWNvZGluZyA9PT0gbnVsbCB8fCB0aGlzLmRlY29kaW5nID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLmRlY29kaW5nXG4gICAgICAgIF0sXG4gICAgICBsYW5ndWFnZU1vZGVsTmFtZTpcbiAgICAgICAgdGhpcy5sYW5ndWFnZU1vZGVsTmFtZSA9PT0gbnVsbCB8fCB0aGlzLmxhbmd1YWdlTW9kZWxOYW1lID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IG51bGxcbiAgICAgICAgICA6IHRoaXMubGFuZ3VhZ2VNb2RlbE5hbWUsXG4gICAgICBwb3N0UHJvY2Vzc2luZzogdGhpcy5wb3N0UHJvY2Vzc2luZ1xuICAgICAgICA/IHRoaXMucG9zdFByb2Nlc3NpbmcudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgdXR0ZXJhbmNlRGV0ZWN0aW9uOiB0aGlzLnV0dGVyYW5jZURldGVjdGlvblxuICAgICAgICA/IHRoaXMudXR0ZXJhbmNlRGV0ZWN0aW9uLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHB5YW5ub3RlOiB0aGlzLnB5YW5ub3RlID8gdGhpcy5weWFubm90ZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBtYXRjaGJveDogdGhpcy5tYXRjaGJveCA/IHRoaXMubWF0Y2hib3gudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgcmV0dXJuT3B0aW9uczogdGhpcy5yZXR1cm5PcHRpb25zXG4gICAgICAgID8gdGhpcy5yZXR1cm5PcHRpb25zLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVHJhbnNjcmliZVJlcXVlc3RDb25maWcge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBzMnRQaXBlbGluZUlkOiBzdHJpbmc7XG4gICAgZGVjb2Rpbmc6IERlY29kaW5nO1xuICAgIGxhbmd1YWdlTW9kZWxOYW1lOiBzdHJpbmc7XG4gICAgcG9zdFByb2Nlc3Npbmc/OiBQb3N0UHJvY2Vzc2luZ09wdGlvbnMuQXNPYmplY3Q7XG4gICAgdXR0ZXJhbmNlRGV0ZWN0aW9uPzogVXR0ZXJhbmNlRGV0ZWN0aW9uT3B0aW9ucy5Bc09iamVjdDtcbiAgICBweWFubm90ZT86IFB5YW5ub3RlLkFzT2JqZWN0O1xuICAgIG1hdGNoYm94PzogTWF0Y2hib3guQXNPYmplY3Q7XG4gICAgcmV0dXJuT3B0aW9ucz86IFRyYW5zY3JpcHRpb25SZXR1cm5PcHRpb25zLkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBzMnRQaXBlbGluZUlkOiBzdHJpbmc7XG4gICAgZGVjb2Rpbmc6IHN0cmluZztcbiAgICBsYW5ndWFnZU1vZGVsTmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgICBwb3N0UHJvY2Vzc2luZzogUG9zdFByb2Nlc3NpbmdPcHRpb25zLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB1dHRlcmFuY2VEZXRlY3Rpb246IFV0dGVyYW5jZURldGVjdGlvbk9wdGlvbnMuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHB5YW5ub3RlOiBQeWFubm90ZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbWF0Y2hib3g6IE1hdGNoYm94LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICByZXR1cm5PcHRpb25zOiBUcmFuc2NyaXB0aW9uUmV0dXJuT3B0aW9ucy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbiAgZXhwb3J0IGVudW0gT25lb2ZMYW5ndWFnZU1vZGVsTmFtZUNhc2Uge1xuICAgIG5vbmUgPSAwLFxuICAgIGxhbmd1YWdlTW9kZWxOYW1lID0gMVxuICB9XG4gIGV4cG9ydCBlbnVtIE9uZW9mUG9zdFByb2Nlc3NpbmdDYXNlIHtcbiAgICBub25lID0gMCxcbiAgICBwb3N0UHJvY2Vzc2luZyA9IDFcbiAgfVxuICBleHBvcnQgZW51bSBPbmVvZlV0dGVyYW5jZURldGVjdGlvbkNhc2Uge1xuICAgIG5vbmUgPSAwLFxuICAgIHV0dGVyYW5jZURldGVjdGlvbiA9IDFcbiAgfVxuICBleHBvcnQgZW51bSBWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uQ2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgcHlhbm5vdGUgPSAxLFxuICAgIG1hdGNoYm94ID0gMlxuICB9XG4gIGV4cG9ydCBlbnVtIE9uZW9mUmV0dXJuT3B0aW9uc0Nhc2Uge1xuICAgIG5vbmUgPSAwLFxuICAgIHJldHVybk9wdGlvbnMgPSAxXG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LlRyYW5zY3JpcHRpb25SZXR1cm5PcHRpb25zXG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFuc2NyaXB0aW9uUmV0dXJuT3B0aW9ucyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuVHJhbnNjcmlwdGlvblJldHVybk9wdGlvbnMnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUcmFuc2NyaXB0aW9uUmV0dXJuT3B0aW9ucygpO1xuICAgIFRyYW5zY3JpcHRpb25SZXR1cm5PcHRpb25zLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVHJhbnNjcmlwdGlvblJldHVybk9wdGlvbnMpIHtcbiAgICBfaW5zdGFuY2UucmV0dXJuU3RhcnRPZlNwZWVjaCA9IF9pbnN0YW5jZS5yZXR1cm5TdGFydE9mU3BlZWNoIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5yZXR1cm5BdWRpbyA9IF9pbnN0YW5jZS5yZXR1cm5BdWRpbyB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UucmV0dXJuQ29uZmlkZW5jZVNjb3JlID0gX2luc3RhbmNlLnJldHVybkNvbmZpZGVuY2VTY29yZSB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UucmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9ucyA9XG4gICAgICBfaW5zdGFuY2UucmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9ucyB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UucmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9uc05yID1cbiAgICAgIF9pbnN0YW5jZS5yZXR1cm5BbHRlcm5hdGl2ZVRyYW5zY3JpcHRpb25zTnIgfHwgMDtcbiAgICBfaW5zdGFuY2UucmV0dXJuQWx0ZXJuYXRpdmVXb3JkcyA9XG4gICAgICBfaW5zdGFuY2UucmV0dXJuQWx0ZXJuYXRpdmVXb3JkcyB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UucmV0dXJuQWx0ZXJuYXRpdmVXb3Jkc05yID1cbiAgICAgIF9pbnN0YW5jZS5yZXR1cm5BbHRlcm5hdGl2ZVdvcmRzTnIgfHwgMDtcbiAgICBfaW5zdGFuY2UucmV0dXJuV29yZFRpbWluZyA9IF9pbnN0YW5jZS5yZXR1cm5Xb3JkVGltaW5nIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogVHJhbnNjcmlwdGlvblJldHVybk9wdGlvbnMsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnJldHVyblN0YXJ0T2ZTcGVlY2ggPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UucmV0dXJuQXVkaW8gPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UucmV0dXJuQ29uZmlkZW5jZVNjb3JlID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLnJldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnMgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UucmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9uc05yID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5yZXR1cm5BbHRlcm5hdGl2ZVdvcmRzID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLnJldHVybkFsdGVybmF0aXZlV29yZHNOciA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2UucmV0dXJuV29yZFRpbWluZyA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFRyYW5zY3JpcHRpb25SZXR1cm5PcHRpb25zLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogVHJhbnNjcmlwdGlvblJldHVybk9wdGlvbnMsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucmV0dXJuU3RhcnRPZlNwZWVjaCkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMSwgX2luc3RhbmNlLnJldHVyblN0YXJ0T2ZTcGVlY2gpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnJldHVybkF1ZGlvKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgyLCBfaW5zdGFuY2UucmV0dXJuQXVkaW8pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnJldHVybkNvbmZpZGVuY2VTY29yZSkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMywgX2luc3RhbmNlLnJldHVybkNvbmZpZGVuY2VTY29yZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9ucykge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woNCwgX2luc3RhbmNlLnJldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnJldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnNOcikge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDUsIF9pbnN0YW5jZS5yZXR1cm5BbHRlcm5hdGl2ZVRyYW5zY3JpcHRpb25zTnIpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnJldHVybkFsdGVybmF0aXZlV29yZHMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDYsIF9pbnN0YW5jZS5yZXR1cm5BbHRlcm5hdGl2ZVdvcmRzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5yZXR1cm5BbHRlcm5hdGl2ZVdvcmRzTnIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMig3LCBfaW5zdGFuY2UucmV0dXJuQWx0ZXJuYXRpdmVXb3Jkc05yKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5yZXR1cm5Xb3JkVGltaW5nKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCg4LCBfaW5zdGFuY2UucmV0dXJuV29yZFRpbWluZyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmV0dXJuU3RhcnRPZlNwZWVjaDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfcmV0dXJuQXVkaW86IGJvb2xlYW47XG4gIHByaXZhdGUgX3JldHVybkNvbmZpZGVuY2VTY29yZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfcmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9uczogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfcmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9uc05yOiBudW1iZXI7XG4gIHByaXZhdGUgX3JldHVybkFsdGVybmF0aXZlV29yZHM6IGJvb2xlYW47XG4gIHByaXZhdGUgX3JldHVybkFsdGVybmF0aXZlV29yZHNOcjogbnVtYmVyO1xuICBwcml2YXRlIF9yZXR1cm5Xb3JkVGltaW5nOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgVHJhbnNjcmlwdGlvblJldHVybk9wdGlvbnMgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VHJhbnNjcmlwdGlvblJldHVybk9wdGlvbnMuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucmV0dXJuU3RhcnRPZlNwZWVjaCA9IF92YWx1ZS5yZXR1cm5TdGFydE9mU3BlZWNoO1xuICAgIHRoaXMucmV0dXJuQXVkaW8gPSBfdmFsdWUucmV0dXJuQXVkaW87XG4gICAgdGhpcy5yZXR1cm5Db25maWRlbmNlU2NvcmUgPSBfdmFsdWUucmV0dXJuQ29uZmlkZW5jZVNjb3JlO1xuICAgIHRoaXMucmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9ucyA9XG4gICAgICBfdmFsdWUucmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9ucztcbiAgICB0aGlzLnJldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnNOciA9XG4gICAgICBfdmFsdWUucmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9uc05yO1xuICAgIHRoaXMucmV0dXJuQWx0ZXJuYXRpdmVXb3JkcyA9IF92YWx1ZS5yZXR1cm5BbHRlcm5hdGl2ZVdvcmRzO1xuICAgIHRoaXMucmV0dXJuQWx0ZXJuYXRpdmVXb3Jkc05yID0gX3ZhbHVlLnJldHVybkFsdGVybmF0aXZlV29yZHNOcjtcbiAgICB0aGlzLnJldHVybldvcmRUaW1pbmcgPSBfdmFsdWUucmV0dXJuV29yZFRpbWluZztcbiAgICBUcmFuc2NyaXB0aW9uUmV0dXJuT3B0aW9ucy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHJldHVyblN0YXJ0T2ZTcGVlY2goKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JldHVyblN0YXJ0T2ZTcGVlY2g7XG4gIH1cbiAgc2V0IHJldHVyblN0YXJ0T2ZTcGVlY2godmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXR1cm5TdGFydE9mU3BlZWNoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJldHVybkF1ZGlvKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZXR1cm5BdWRpbztcbiAgfVxuICBzZXQgcmV0dXJuQXVkaW8odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXR1cm5BdWRpbyA9IHZhbHVlO1xuICB9XG4gIGdldCByZXR1cm5Db25maWRlbmNlU2NvcmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JldHVybkNvbmZpZGVuY2VTY29yZTtcbiAgfVxuICBzZXQgcmV0dXJuQ29uZmlkZW5jZVNjb3JlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmV0dXJuQ29uZmlkZW5jZVNjb3JlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnM7XG4gIH1cbiAgc2V0IHJldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXR1cm5BbHRlcm5hdGl2ZVRyYW5zY3JpcHRpb25zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnNOcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9yZXR1cm5BbHRlcm5hdGl2ZVRyYW5zY3JpcHRpb25zTnI7XG4gIH1cbiAgc2V0IHJldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnNOcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9uc05yID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJldHVybkFsdGVybmF0aXZlV29yZHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JldHVybkFsdGVybmF0aXZlV29yZHM7XG4gIH1cbiAgc2V0IHJldHVybkFsdGVybmF0aXZlV29yZHModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXR1cm5BbHRlcm5hdGl2ZVdvcmRzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJldHVybkFsdGVybmF0aXZlV29yZHNOcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9yZXR1cm5BbHRlcm5hdGl2ZVdvcmRzTnI7XG4gIH1cbiAgc2V0IHJldHVybkFsdGVybmF0aXZlV29yZHNOcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcmV0dXJuQWx0ZXJuYXRpdmVXb3Jkc05yID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJldHVybldvcmRUaW1pbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JldHVybldvcmRUaW1pbmc7XG4gIH1cbiAgc2V0IHJldHVybldvcmRUaW1pbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXR1cm5Xb3JkVGltaW5nID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVHJhbnNjcmlwdGlvblJldHVybk9wdGlvbnMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVHJhbnNjcmlwdGlvblJldHVybk9wdGlvbnMuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICByZXR1cm5TdGFydE9mU3BlZWNoOiB0aGlzLnJldHVyblN0YXJ0T2ZTcGVlY2gsXG4gICAgICByZXR1cm5BdWRpbzogdGhpcy5yZXR1cm5BdWRpbyxcbiAgICAgIHJldHVybkNvbmZpZGVuY2VTY29yZTogdGhpcy5yZXR1cm5Db25maWRlbmNlU2NvcmUsXG4gICAgICByZXR1cm5BbHRlcm5hdGl2ZVRyYW5zY3JpcHRpb25zOiB0aGlzLnJldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnMsXG4gICAgICByZXR1cm5BbHRlcm5hdGl2ZVRyYW5zY3JpcHRpb25zTnI6IHRoaXMucmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9uc05yLFxuICAgICAgcmV0dXJuQWx0ZXJuYXRpdmVXb3JkczogdGhpcy5yZXR1cm5BbHRlcm5hdGl2ZVdvcmRzLFxuICAgICAgcmV0dXJuQWx0ZXJuYXRpdmVXb3Jkc05yOiB0aGlzLnJldHVybkFsdGVybmF0aXZlV29yZHNOcixcbiAgICAgIHJldHVybldvcmRUaW1pbmc6IHRoaXMucmV0dXJuV29yZFRpbWluZ1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFRyYW5zY3JpcHRpb25SZXR1cm5PcHRpb25zLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmV0dXJuU3RhcnRPZlNwZWVjaDogdGhpcy5yZXR1cm5TdGFydE9mU3BlZWNoLFxuICAgICAgcmV0dXJuQXVkaW86IHRoaXMucmV0dXJuQXVkaW8sXG4gICAgICByZXR1cm5Db25maWRlbmNlU2NvcmU6IHRoaXMucmV0dXJuQ29uZmlkZW5jZVNjb3JlLFxuICAgICAgcmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9uczogdGhpcy5yZXR1cm5BbHRlcm5hdGl2ZVRyYW5zY3JpcHRpb25zLFxuICAgICAgcmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9uc05yOiB0aGlzLnJldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnNOcixcbiAgICAgIHJldHVybkFsdGVybmF0aXZlV29yZHM6IHRoaXMucmV0dXJuQWx0ZXJuYXRpdmVXb3JkcyxcbiAgICAgIHJldHVybkFsdGVybmF0aXZlV29yZHNOcjogdGhpcy5yZXR1cm5BbHRlcm5hdGl2ZVdvcmRzTnIsXG4gICAgICByZXR1cm5Xb3JkVGltaW5nOiB0aGlzLnJldHVybldvcmRUaW1pbmdcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFRyYW5zY3JpcHRpb25SZXR1cm5PcHRpb25zIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBUcmFuc2NyaXB0aW9uUmV0dXJuT3B0aW9uc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcmV0dXJuU3RhcnRPZlNwZWVjaDogYm9vbGVhbjtcbiAgICByZXR1cm5BdWRpbzogYm9vbGVhbjtcbiAgICByZXR1cm5Db25maWRlbmNlU2NvcmU6IGJvb2xlYW47XG4gICAgcmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9uczogYm9vbGVhbjtcbiAgICByZXR1cm5BbHRlcm5hdGl2ZVRyYW5zY3JpcHRpb25zTnI6IG51bWJlcjtcbiAgICByZXR1cm5BbHRlcm5hdGl2ZVdvcmRzOiBib29sZWFuO1xuICAgIHJldHVybkFsdGVybmF0aXZlV29yZHNOcjogbnVtYmVyO1xuICAgIHJldHVybldvcmRUaW1pbmc6IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVHJhbnNjcmlwdGlvblJldHVybk9wdGlvbnNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVyblN0YXJ0T2ZTcGVlY2g6IGJvb2xlYW47XG4gICAgcmV0dXJuQXVkaW86IGJvb2xlYW47XG4gICAgcmV0dXJuQ29uZmlkZW5jZVNjb3JlOiBib29sZWFuO1xuICAgIHJldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnM6IGJvb2xlYW47XG4gICAgcmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9uc05yOiBudW1iZXI7XG4gICAgcmV0dXJuQWx0ZXJuYXRpdmVXb3JkczogYm9vbGVhbjtcbiAgICByZXR1cm5BbHRlcm5hdGl2ZVdvcmRzTnI6IG51bWJlcjtcbiAgICByZXR1cm5Xb3JkVGltaW5nOiBib29sZWFuO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5VdHRlcmFuY2VEZXRlY3Rpb25PcHRpb25zXG4gKi9cbmV4cG9ydCBjbGFzcyBVdHRlcmFuY2VEZXRlY3Rpb25PcHRpb25zIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5VdHRlcmFuY2VEZXRlY3Rpb25PcHRpb25zJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVXR0ZXJhbmNlRGV0ZWN0aW9uT3B0aW9ucygpO1xuICAgIFV0dGVyYW5jZURldGVjdGlvbk9wdGlvbnMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBVdHRlcmFuY2VEZXRlY3Rpb25PcHRpb25zKSB7XG4gICAgX2luc3RhbmNlLnN0YXJ0T2ZVdHRlcmFuY2VUaHJlc2hvbGQgPVxuICAgICAgX2luc3RhbmNlLnN0YXJ0T2ZVdHRlcmFuY2VUaHJlc2hvbGQgfHwgMDtcbiAgICBfaW5zdGFuY2UuZW5kT2ZVdHRlcmFuY2VUaHJlc2hvbGQgPSBfaW5zdGFuY2UuZW5kT2ZVdHRlcmFuY2VUaHJlc2hvbGQgfHwgMDtcbiAgICBfaW5zdGFuY2UubmV4dENodW5rVGltZW91dCA9IF9pbnN0YW5jZS5uZXh0Q2h1bmtUaW1lb3V0IHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBVdHRlcmFuY2VEZXRlY3Rpb25PcHRpb25zLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS50cmFuc2NyaWJlTm90RmluYWwgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3RhcnRPZlV0dGVyYW5jZVRocmVzaG9sZCA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuZW5kT2ZVdHRlcmFuY2VUaHJlc2hvbGQgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLm5leHRDaHVua1RpbWVvdXQgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVXR0ZXJhbmNlRGV0ZWN0aW9uT3B0aW9ucy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFV0dGVyYW5jZURldGVjdGlvbk9wdGlvbnMsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChcbiAgICAgIF9pbnN0YW5jZS50cmFuc2NyaWJlTm90RmluYWwgfHxcbiAgICAgIF9pbnN0YW5jZS50cmFuc2NyaWJlTm90RmluYWwgPT09IGZhbHNlXG4gICAgKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgxLCBfaW5zdGFuY2UudHJhbnNjcmliZU5vdEZpbmFsKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zdGFydE9mVXR0ZXJhbmNlVGhyZXNob2xkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoMiwgX2luc3RhbmNlLnN0YXJ0T2ZVdHRlcmFuY2VUaHJlc2hvbGQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmVuZE9mVXR0ZXJhbmNlVGhyZXNob2xkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoMywgX2luc3RhbmNlLmVuZE9mVXR0ZXJhbmNlVGhyZXNob2xkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5uZXh0Q2h1bmtUaW1lb3V0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoNCwgX2luc3RhbmNlLm5leHRDaHVua1RpbWVvdXQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RyYW5zY3JpYmVOb3RGaW5hbDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfc3RhcnRPZlV0dGVyYW5jZVRocmVzaG9sZDogbnVtYmVyO1xuICBwcml2YXRlIF9lbmRPZlV0dGVyYW5jZVRocmVzaG9sZDogbnVtYmVyO1xuICBwcml2YXRlIF9uZXh0Q2h1bmtUaW1lb3V0OiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBfb25lb2ZUcmFuc2NyaWJlTm90RmluYWw6IFV0dGVyYW5jZURldGVjdGlvbk9wdGlvbnMuT25lb2ZUcmFuc2NyaWJlTm90RmluYWxDYXNlID1cbiAgICBVdHRlcmFuY2VEZXRlY3Rpb25PcHRpb25zLk9uZW9mVHJhbnNjcmliZU5vdEZpbmFsQ2FzZS5ub25lO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgVXR0ZXJhbmNlRGV0ZWN0aW9uT3B0aW9ucyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxVdHRlcmFuY2VEZXRlY3Rpb25PcHRpb25zLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnRyYW5zY3JpYmVOb3RGaW5hbCA9IF92YWx1ZS50cmFuc2NyaWJlTm90RmluYWw7XG4gICAgdGhpcy5zdGFydE9mVXR0ZXJhbmNlVGhyZXNob2xkID0gX3ZhbHVlLnN0YXJ0T2ZVdHRlcmFuY2VUaHJlc2hvbGQ7XG4gICAgdGhpcy5lbmRPZlV0dGVyYW5jZVRocmVzaG9sZCA9IF92YWx1ZS5lbmRPZlV0dGVyYW5jZVRocmVzaG9sZDtcbiAgICB0aGlzLm5leHRDaHVua1RpbWVvdXQgPSBfdmFsdWUubmV4dENodW5rVGltZW91dDtcbiAgICBVdHRlcmFuY2VEZXRlY3Rpb25PcHRpb25zLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdHJhbnNjcmliZU5vdEZpbmFsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl90cmFuc2NyaWJlTm90RmluYWw7XG4gIH1cbiAgc2V0IHRyYW5zY3JpYmVOb3RGaW5hbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9vbmVvZlRyYW5zY3JpYmVOb3RGaW5hbCA9XG4gICAgICAgIFV0dGVyYW5jZURldGVjdGlvbk9wdGlvbnMuT25lb2ZUcmFuc2NyaWJlTm90RmluYWxDYXNlLnRyYW5zY3JpYmVOb3RGaW5hbDtcbiAgICB9XG4gICAgdGhpcy5fdHJhbnNjcmliZU5vdEZpbmFsID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHN0YXJ0T2ZVdHRlcmFuY2VUaHJlc2hvbGQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRPZlV0dGVyYW5jZVRocmVzaG9sZDtcbiAgfVxuICBzZXQgc3RhcnRPZlV0dGVyYW5jZVRocmVzaG9sZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc3RhcnRPZlV0dGVyYW5jZVRocmVzaG9sZCA9IHZhbHVlO1xuICB9XG4gIGdldCBlbmRPZlV0dGVyYW5jZVRocmVzaG9sZCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9lbmRPZlV0dGVyYW5jZVRocmVzaG9sZDtcbiAgfVxuICBzZXQgZW5kT2ZVdHRlcmFuY2VUaHJlc2hvbGQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2VuZE9mVXR0ZXJhbmNlVGhyZXNob2xkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5leHRDaHVua1RpbWVvdXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbmV4dENodW5rVGltZW91dDtcbiAgfVxuICBzZXQgbmV4dENodW5rVGltZW91dCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbmV4dENodW5rVGltZW91dCA9IHZhbHVlO1xuICB9XG4gIGdldCBvbmVvZlRyYW5zY3JpYmVOb3RGaW5hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb25lb2ZUcmFuc2NyaWJlTm90RmluYWw7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVXR0ZXJhbmNlRGV0ZWN0aW9uT3B0aW9ucy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBVdHRlcmFuY2VEZXRlY3Rpb25PcHRpb25zLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNjcmliZU5vdEZpbmFsOiB0aGlzLnRyYW5zY3JpYmVOb3RGaW5hbCxcbiAgICAgIHN0YXJ0T2ZVdHRlcmFuY2VUaHJlc2hvbGQ6IHRoaXMuc3RhcnRPZlV0dGVyYW5jZVRocmVzaG9sZCxcbiAgICAgIGVuZE9mVXR0ZXJhbmNlVGhyZXNob2xkOiB0aGlzLmVuZE9mVXR0ZXJhbmNlVGhyZXNob2xkLFxuICAgICAgbmV4dENodW5rVGltZW91dDogdGhpcy5uZXh0Q2h1bmtUaW1lb3V0XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogVXR0ZXJhbmNlRGV0ZWN0aW9uT3B0aW9ucy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zY3JpYmVOb3RGaW5hbDogdGhpcy50cmFuc2NyaWJlTm90RmluYWwsXG4gICAgICBzdGFydE9mVXR0ZXJhbmNlVGhyZXNob2xkOiB0aGlzLnN0YXJ0T2ZVdHRlcmFuY2VUaHJlc2hvbGQsXG4gICAgICBlbmRPZlV0dGVyYW5jZVRocmVzaG9sZDogdGhpcy5lbmRPZlV0dGVyYW5jZVRocmVzaG9sZCxcbiAgICAgIG5leHRDaHVua1RpbWVvdXQ6IHRoaXMubmV4dENodW5rVGltZW91dFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVXR0ZXJhbmNlRGV0ZWN0aW9uT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVXR0ZXJhbmNlRGV0ZWN0aW9uT3B0aW9uc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdHJhbnNjcmliZU5vdEZpbmFsOiBib29sZWFuO1xuICAgIHN0YXJ0T2ZVdHRlcmFuY2VUaHJlc2hvbGQ6IG51bWJlcjtcbiAgICBlbmRPZlV0dGVyYW5jZVRocmVzaG9sZDogbnVtYmVyO1xuICAgIG5leHRDaHVua1RpbWVvdXQ6IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBVdHRlcmFuY2VEZXRlY3Rpb25PcHRpb25zXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB0cmFuc2NyaWJlTm90RmluYWw6IGJvb2xlYW47XG4gICAgc3RhcnRPZlV0dGVyYW5jZVRocmVzaG9sZDogbnVtYmVyO1xuICAgIGVuZE9mVXR0ZXJhbmNlVGhyZXNob2xkOiBudW1iZXI7XG4gICAgbmV4dENodW5rVGltZW91dDogbnVtYmVyO1xuICB9XG4gIGV4cG9ydCBlbnVtIE9uZW9mVHJhbnNjcmliZU5vdEZpbmFsQ2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgdHJhbnNjcmliZU5vdEZpbmFsID0gMVxuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5Qb3N0UHJvY2Vzc2luZ09wdGlvbnNcbiAqL1xuZXhwb3J0IGNsYXNzIFBvc3RQcm9jZXNzaW5nT3B0aW9ucyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuUG9zdFByb2Nlc3NpbmdPcHRpb25zJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUG9zdFByb2Nlc3NpbmdPcHRpb25zKCk7XG4gICAgUG9zdFByb2Nlc3NpbmdPcHRpb25zLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogUG9zdFByb2Nlc3NpbmdPcHRpb25zKSB7XG4gICAgX2luc3RhbmNlLnNwZWxsaW5nQ29ycmVjdGlvbiA9IF9pbnN0YW5jZS5zcGVsbGluZ0NvcnJlY3Rpb24gfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLm5vcm1hbGl6ZSA9IF9pbnN0YW5jZS5ub3JtYWxpemUgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLmNvbmZpZyA9IF9pbnN0YW5jZS5jb25maWcgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogUG9zdFByb2Nlc3NpbmdPcHRpb25zLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5zcGVsbGluZ0NvcnJlY3Rpb24gPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2Uubm9ybWFsaXplID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmNvbmZpZyA9IG5ldyBQb3N0UHJvY2Vzc2luZygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY29uZmlnLFxuICAgICAgICAgICAgUG9zdFByb2Nlc3NpbmcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFBvc3RQcm9jZXNzaW5nT3B0aW9ucy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFBvc3RQcm9jZXNzaW5nT3B0aW9ucyxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5zcGVsbGluZ0NvcnJlY3Rpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDEsIF9pbnN0YW5jZS5zcGVsbGluZ0NvcnJlY3Rpb24pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm5vcm1hbGl6ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMiwgX2luc3RhbmNlLm5vcm1hbGl6ZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY29uZmlnKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgX2luc3RhbmNlLmNvbmZpZyBhcyBhbnksXG4gICAgICAgIFBvc3RQcm9jZXNzaW5nLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NwZWxsaW5nQ29ycmVjdGlvbjogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfbm9ybWFsaXplOiBib29sZWFuO1xuICBwcml2YXRlIF9jb25maWc/OiBQb3N0UHJvY2Vzc2luZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFBvc3RQcm9jZXNzaW5nT3B0aW9ucyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxQb3N0UHJvY2Vzc2luZ09wdGlvbnMuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc3BlbGxpbmdDb3JyZWN0aW9uID0gX3ZhbHVlLnNwZWxsaW5nQ29ycmVjdGlvbjtcbiAgICB0aGlzLm5vcm1hbGl6ZSA9IF92YWx1ZS5ub3JtYWxpemU7XG4gICAgdGhpcy5jb25maWcgPSBfdmFsdWUuY29uZmlnID8gbmV3IFBvc3RQcm9jZXNzaW5nKF92YWx1ZS5jb25maWcpIDogdW5kZWZpbmVkO1xuICAgIFBvc3RQcm9jZXNzaW5nT3B0aW9ucy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHNwZWxsaW5nQ29ycmVjdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlbGxpbmdDb3JyZWN0aW9uO1xuICB9XG4gIHNldCBzcGVsbGluZ0NvcnJlY3Rpb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zcGVsbGluZ0NvcnJlY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgbm9ybWFsaXplKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9ub3JtYWxpemU7XG4gIH1cbiAgc2V0IG5vcm1hbGl6ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX25vcm1hbGl6ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBjb25maWcoKTogUG9zdFByb2Nlc3NpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cbiAgc2V0IGNvbmZpZyh2YWx1ZTogUG9zdFByb2Nlc3NpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jb25maWcgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBQb3N0UHJvY2Vzc2luZ09wdGlvbnMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUG9zdFByb2Nlc3NpbmdPcHRpb25zLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3BlbGxpbmdDb3JyZWN0aW9uOiB0aGlzLnNwZWxsaW5nQ29ycmVjdGlvbixcbiAgICAgIG5vcm1hbGl6ZTogdGhpcy5ub3JtYWxpemUsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFBvc3RQcm9jZXNzaW5nT3B0aW9ucy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNwZWxsaW5nQ29ycmVjdGlvbjogdGhpcy5zcGVsbGluZ0NvcnJlY3Rpb24sXG4gICAgICBub3JtYWxpemU6IHRoaXMubm9ybWFsaXplLFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUG9zdFByb2Nlc3NpbmdPcHRpb25zIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBQb3N0UHJvY2Vzc2luZ09wdGlvbnNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHNwZWxsaW5nQ29ycmVjdGlvbjogYm9vbGVhbjtcbiAgICBub3JtYWxpemU6IGJvb2xlYW47XG4gICAgY29uZmlnPzogUG9zdFByb2Nlc3NpbmcuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgUG9zdFByb2Nlc3NpbmdPcHRpb25zXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBzcGVsbGluZ0NvcnJlY3Rpb246IGJvb2xlYW47XG4gICAgbm9ybWFsaXplOiBib29sZWFuO1xuICAgIGNvbmZpZzogUG9zdFByb2Nlc3NpbmcuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5UcmFuc2NyaWJlU3RyZWFtUmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNjcmliZVN0cmVhbVJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LlRyYW5zY3JpYmVTdHJlYW1SZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVHJhbnNjcmliZVN0cmVhbVJlcXVlc3QoKTtcbiAgICBUcmFuc2NyaWJlU3RyZWFtUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFRyYW5zY3JpYmVTdHJlYW1SZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLmF1ZGlvQ2h1bmsgPSBfaW5zdGFuY2UuYXVkaW9DaHVuayB8fCBuZXcgVWludDhBcnJheSgpO1xuICAgIF9pbnN0YW5jZS5lbmRPZlN0cmVhbSA9IF9pbnN0YW5jZS5lbmRPZlN0cmVhbSB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UuY29uZmlnID0gX2luc3RhbmNlLmNvbmZpZyB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLm11dGVBdWRpbyA9IF9pbnN0YW5jZS5tdXRlQXVkaW8gfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBUcmFuc2NyaWJlU3RyZWFtUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuYXVkaW9DaHVuayA9IF9yZWFkZXIucmVhZEJ5dGVzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZW5kT2ZTdHJlYW0gPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuY29uZmlnID0gbmV3IFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jb25maWcsXG4gICAgICAgICAgICBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLm11dGVBdWRpbyA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFRyYW5zY3JpYmVTdHJlYW1SZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogVHJhbnNjcmliZVN0cmVhbVJlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuYXVkaW9DaHVuayAmJiBfaW5zdGFuY2UuYXVkaW9DaHVuay5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCeXRlcygxLCBfaW5zdGFuY2UuYXVkaW9DaHVuayk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZW5kT2ZTdHJlYW0pIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDIsIF9pbnN0YW5jZS5lbmRPZlN0cmVhbSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY29uZmlnKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgX2luc3RhbmNlLmNvbmZpZyBhcyBhbnksXG4gICAgICAgIFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm11dGVBdWRpbykge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woNCwgX2luc3RhbmNlLm11dGVBdWRpbyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXVkaW9DaHVuazogVWludDhBcnJheTtcbiAgcHJpdmF0ZSBfZW5kT2ZTdHJlYW06IGJvb2xlYW47XG4gIHByaXZhdGUgX2NvbmZpZz86IFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnO1xuICBwcml2YXRlIF9tdXRlQXVkaW86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBUcmFuc2NyaWJlU3RyZWFtUmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxUcmFuc2NyaWJlU3RyZWFtUmVxdWVzdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5hdWRpb0NodW5rID0gX3ZhbHVlLmF1ZGlvQ2h1bms7XG4gICAgdGhpcy5lbmRPZlN0cmVhbSA9IF92YWx1ZS5lbmRPZlN0cmVhbTtcbiAgICB0aGlzLmNvbmZpZyA9IF92YWx1ZS5jb25maWdcbiAgICAgID8gbmV3IFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnKF92YWx1ZS5jb25maWcpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm11dGVBdWRpbyA9IF92YWx1ZS5tdXRlQXVkaW87XG4gICAgVHJhbnNjcmliZVN0cmVhbVJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBhdWRpb0NodW5rKCk6IFVpbnQ4QXJyYXkge1xuICAgIHJldHVybiB0aGlzLl9hdWRpb0NodW5rO1xuICB9XG4gIHNldCBhdWRpb0NodW5rKHZhbHVlOiBVaW50OEFycmF5KSB7XG4gICAgdGhpcy5fYXVkaW9DaHVuayA9IHZhbHVlO1xuICB9XG4gIGdldCBlbmRPZlN0cmVhbSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZW5kT2ZTdHJlYW07XG4gIH1cbiAgc2V0IGVuZE9mU3RyZWFtKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZW5kT2ZTdHJlYW0gPSB2YWx1ZTtcbiAgfVxuICBnZXQgY29uZmlnKCk6IFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIHNldCBjb25maWcodmFsdWU6IFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY29uZmlnID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG11dGVBdWRpbygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbXV0ZUF1ZGlvO1xuICB9XG4gIHNldCBtdXRlQXVkaW8odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdXRlQXVkaW8gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBUcmFuc2NyaWJlU3RyZWFtUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBUcmFuc2NyaWJlU3RyZWFtUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF1ZGlvQ2h1bms6IHRoaXMuYXVkaW9DaHVua1xuICAgICAgICA/IHRoaXMuYXVkaW9DaHVuay5zdWJhcnJheSgwKVxuICAgICAgICA6IG5ldyBVaW50OEFycmF5KCksXG4gICAgICBlbmRPZlN0cmVhbTogdGhpcy5lbmRPZlN0cmVhbSxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZy50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbXV0ZUF1ZGlvOiB0aGlzLm11dGVBdWRpb1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFRyYW5zY3JpYmVTdHJlYW1SZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXVkaW9DaHVuazogdGhpcy5hdWRpb0NodW5rID8gdWludDhBcnJheVRvQmFzZTY0KHRoaXMuYXVkaW9DaHVuaykgOiAnJyxcbiAgICAgIGVuZE9mU3RyZWFtOiB0aGlzLmVuZE9mU3RyZWFtLFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIG11dGVBdWRpbzogdGhpcy5tdXRlQXVkaW9cbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFRyYW5zY3JpYmVTdHJlYW1SZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBUcmFuc2NyaWJlU3RyZWFtUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgYXVkaW9DaHVuazogVWludDhBcnJheTtcbiAgICBlbmRPZlN0cmVhbTogYm9vbGVhbjtcbiAgICBjb25maWc/OiBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZy5Bc09iamVjdDtcbiAgICBtdXRlQXVkaW86IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVHJhbnNjcmliZVN0cmVhbVJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGF1ZGlvQ2h1bms6IHN0cmluZztcbiAgICBlbmRPZlN0cmVhbTogYm9vbGVhbjtcbiAgICBjb25maWc6IFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBtdXRlQXVkaW86IGJvb2xlYW47XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LlRyYW5zY3JpcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFRyYW5zY3JpcHRpb24gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LlRyYW5zY3JpcHRpb24nO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUcmFuc2NyaXB0aW9uKCk7XG4gICAgVHJhbnNjcmlwdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFRyYW5zY3JpcHRpb24pIHtcbiAgICBfaW5zdGFuY2UudHJhbnNjcmlwdGlvbiA9IF9pbnN0YW5jZS50cmFuc2NyaXB0aW9uIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5jb25maWRlbmNlU2NvcmUgPSBfaW5zdGFuY2UuY29uZmlkZW5jZVNjb3JlIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBUcmFuc2NyaXB0aW9uLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS50cmFuc2NyaXB0aW9uID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuY29uZmlkZW5jZVNjb3JlID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFRyYW5zY3JpcHRpb24ucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBUcmFuc2NyaXB0aW9uLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnRyYW5zY3JpcHRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnRyYW5zY3JpcHRpb24pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNvbmZpZGVuY2VTY29yZSkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDIsIF9pbnN0YW5jZS5jb25maWRlbmNlU2NvcmUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RyYW5zY3JpcHRpb246IHN0cmluZztcbiAgcHJpdmF0ZSBfY29uZmlkZW5jZVNjb3JlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBUcmFuc2NyaXB0aW9uIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFRyYW5zY3JpcHRpb24uQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudHJhbnNjcmlwdGlvbiA9IF92YWx1ZS50cmFuc2NyaXB0aW9uO1xuICAgIHRoaXMuY29uZmlkZW5jZVNjb3JlID0gX3ZhbHVlLmNvbmZpZGVuY2VTY29yZTtcbiAgICBUcmFuc2NyaXB0aW9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdHJhbnNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90cmFuc2NyaXB0aW9uO1xuICB9XG4gIHNldCB0cmFuc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90cmFuc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNvbmZpZGVuY2VTY29yZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jb25maWRlbmNlU2NvcmU7XG4gIH1cbiAgc2V0IGNvbmZpZGVuY2VTY29yZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fY29uZmlkZW5jZVNjb3JlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVHJhbnNjcmlwdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBUcmFuc2NyaXB0aW9uLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNjcmlwdGlvbjogdGhpcy50cmFuc2NyaXB0aW9uLFxuICAgICAgY29uZmlkZW5jZVNjb3JlOiB0aGlzLmNvbmZpZGVuY2VTY29yZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFRyYW5zY3JpcHRpb24uQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2NyaXB0aW9uOiB0aGlzLnRyYW5zY3JpcHRpb24sXG4gICAgICBjb25maWRlbmNlU2NvcmU6IHRoaXMuY29uZmlkZW5jZVNjb3JlXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUcmFuc2NyaXB0aW9uIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBUcmFuc2NyaXB0aW9uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB0cmFuc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgY29uZmlkZW5jZVNjb3JlOiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVHJhbnNjcmlwdGlvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdHJhbnNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGNvbmZpZGVuY2VTY29yZTogbnVtYmVyO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5UcmFuc2NyaWJlU3RyZWFtUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuVHJhbnNjcmliZVN0cmVhbVJlc3BvbnNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVHJhbnNjcmliZVN0cmVhbVJlc3BvbnNlKCk7XG4gICAgVHJhbnNjcmliZVN0cmVhbVJlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVHJhbnNjcmliZVN0cmVhbVJlc3BvbnNlKSB7XG4gICAgX2luc3RhbmNlLnRyYW5zY3JpcHRpb25zID0gX2luc3RhbmNlLnRyYW5zY3JpcHRpb25zIHx8IFtdO1xuICAgIF9pbnN0YW5jZS50aW1lID0gX2luc3RhbmNlLnRpbWUgfHwgMDtcbiAgICBfaW5zdGFuY2UuZmluYWwgPSBfaW5zdGFuY2UuZmluYWwgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLnJldHVybkF1ZGlvID0gX2luc3RhbmNlLnJldHVybkF1ZGlvIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5hdWRpbyA9IF9pbnN0YW5jZS5hdWRpbyB8fCBuZXcgVWludDhBcnJheSgpO1xuICAgIF9pbnN0YW5jZS51dHRlcmFuY2VTdGFydCA9IF9pbnN0YW5jZS51dHRlcmFuY2VTdGFydCB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UuYXVkaW9VdWlkID0gX2luc3RhbmNlLmF1ZGlvVXVpZCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IFRyYW5zY3JpcHRpb24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMSxcbiAgICAgICAgICAgIFRyYW5zY3JpcHRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLnRyYW5zY3JpcHRpb25zID0gX2luc3RhbmNlLnRyYW5zY3JpcHRpb25zIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UudGltZSA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuZmluYWwgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UucmV0dXJuQXVkaW8gPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UuYXVkaW8gPSBfcmVhZGVyLnJlYWRCeXRlcygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLnV0dGVyYW5jZVN0YXJ0ID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLmF1ZGlvVXVpZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLmNvbmZpZyA9IG5ldyBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY29uZmlnLFxuICAgICAgICAgICAgVHJhbnNjcmliZVJlcXVlc3RDb25maWcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS50cmFuc2NyaXB0aW9ucyAmJiBfaW5zdGFuY2UudHJhbnNjcmlwdGlvbnMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UudHJhbnNjcmlwdGlvbnMgYXMgYW55LFxuICAgICAgICBUcmFuc2NyaXB0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRpbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCgyLCBfaW5zdGFuY2UudGltZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZmluYWwpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDMsIF9pbnN0YW5jZS5maW5hbCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucmV0dXJuQXVkaW8pIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDQsIF9pbnN0YW5jZS5yZXR1cm5BdWRpbyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYXVkaW8gJiYgX2luc3RhbmNlLmF1ZGlvLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZUJ5dGVzKDUsIF9pbnN0YW5jZS5hdWRpbyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudXR0ZXJhbmNlU3RhcnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDYsIF9pbnN0YW5jZS51dHRlcmFuY2VTdGFydCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYXVkaW9VdWlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDcsIF9pbnN0YW5jZS5hdWRpb1V1aWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNvbmZpZykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDgsXG4gICAgICAgIF9pbnN0YW5jZS5jb25maWcgYXMgYW55LFxuICAgICAgICBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90cmFuc2NyaXB0aW9ucz86IFRyYW5zY3JpcHRpb25bXTtcbiAgcHJpdmF0ZSBfdGltZTogbnVtYmVyO1xuICBwcml2YXRlIF9maW5hbDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfcmV0dXJuQXVkaW86IGJvb2xlYW47XG4gIHByaXZhdGUgX2F1ZGlvOiBVaW50OEFycmF5O1xuICBwcml2YXRlIF91dHRlcmFuY2VTdGFydDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfYXVkaW9VdWlkOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbmZpZz86IFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnO1xuXG4gIHByaXZhdGUgX29uZW9mQ29uZmlnOiBUcmFuc2NyaWJlU3RyZWFtUmVzcG9uc2UuT25lb2ZDb25maWdDYXNlID1cbiAgICBUcmFuc2NyaWJlU3RyZWFtUmVzcG9uc2UuT25lb2ZDb25maWdDYXNlLm5vbmU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBUcmFuc2NyaWJlU3RyZWFtUmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VHJhbnNjcmliZVN0cmVhbVJlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnRyYW5zY3JpcHRpb25zID0gKF92YWx1ZS50cmFuc2NyaXB0aW9ucyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgVHJhbnNjcmlwdGlvbihtKVxuICAgICk7XG4gICAgdGhpcy50aW1lID0gX3ZhbHVlLnRpbWU7XG4gICAgdGhpcy5maW5hbCA9IF92YWx1ZS5maW5hbDtcbiAgICB0aGlzLnJldHVybkF1ZGlvID0gX3ZhbHVlLnJldHVybkF1ZGlvO1xuICAgIHRoaXMuYXVkaW8gPSBfdmFsdWUuYXVkaW87XG4gICAgdGhpcy51dHRlcmFuY2VTdGFydCA9IF92YWx1ZS51dHRlcmFuY2VTdGFydDtcbiAgICB0aGlzLmF1ZGlvVXVpZCA9IF92YWx1ZS5hdWRpb1V1aWQ7XG4gICAgdGhpcy5jb25maWcgPSBfdmFsdWUuY29uZmlnXG4gICAgICA/IG5ldyBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZyhfdmFsdWUuY29uZmlnKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgVHJhbnNjcmliZVN0cmVhbVJlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdHJhbnNjcmlwdGlvbnMoKTogVHJhbnNjcmlwdGlvbltdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhbnNjcmlwdGlvbnM7XG4gIH1cbiAgc2V0IHRyYW5zY3JpcHRpb25zKHZhbHVlOiBUcmFuc2NyaXB0aW9uW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90cmFuc2NyaXB0aW9ucyA9IHZhbHVlO1xuICB9XG4gIGdldCB0aW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWU7XG4gIH1cbiAgc2V0IHRpbWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RpbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZmluYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbmFsO1xuICB9XG4gIHNldCBmaW5hbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2ZpbmFsID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJldHVybkF1ZGlvKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZXR1cm5BdWRpbztcbiAgfVxuICBzZXQgcmV0dXJuQXVkaW8odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXR1cm5BdWRpbyA9IHZhbHVlO1xuICB9XG4gIGdldCBhdWRpbygpOiBVaW50OEFycmF5IHtcbiAgICByZXR1cm4gdGhpcy5fYXVkaW87XG4gIH1cbiAgc2V0IGF1ZGlvKHZhbHVlOiBVaW50OEFycmF5KSB7XG4gICAgdGhpcy5fYXVkaW8gPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXR0ZXJhbmNlU3RhcnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3V0dGVyYW5jZVN0YXJ0O1xuICB9XG4gIHNldCB1dHRlcmFuY2VTdGFydCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3V0dGVyYW5jZVN0YXJ0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGF1ZGlvVXVpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9hdWRpb1V1aWQ7XG4gIH1cbiAgc2V0IGF1ZGlvVXVpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXVkaW9VdWlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNvbmZpZygpOiBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuICBzZXQgY29uZmlnKHZhbHVlOiBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9vbmVvZkNvbmZpZyA9IFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZS5PbmVvZkNvbmZpZ0Nhc2UuY29uZmlnO1xuICAgIH1cbiAgICB0aGlzLl9jb25maWcgPSB2YWx1ZTtcbiAgfVxuICBnZXQgb25lb2ZDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uZW9mQ29uZmlnO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBUcmFuc2NyaWJlU3RyZWFtUmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2NyaXB0aW9uczogKHRoaXMudHJhbnNjcmlwdGlvbnMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICB0aW1lOiB0aGlzLnRpbWUsXG4gICAgICBmaW5hbDogdGhpcy5maW5hbCxcbiAgICAgIHJldHVybkF1ZGlvOiB0aGlzLnJldHVybkF1ZGlvLFxuICAgICAgYXVkaW86IHRoaXMuYXVkaW8gPyB0aGlzLmF1ZGlvLnN1YmFycmF5KDApIDogbmV3IFVpbnQ4QXJyYXkoKSxcbiAgICAgIHV0dGVyYW5jZVN0YXJ0OiB0aGlzLnV0dGVyYW5jZVN0YXJ0LFxuICAgICAgYXVkaW9VdWlkOiB0aGlzLmF1ZGlvVXVpZCxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZy50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogVHJhbnNjcmliZVN0cmVhbVJlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNjcmlwdGlvbnM6ICh0aGlzLnRyYW5zY3JpcHRpb25zIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICApLFxuICAgICAgdGltZTogdGhpcy50aW1lLFxuICAgICAgZmluYWw6IHRoaXMuZmluYWwsXG4gICAgICByZXR1cm5BdWRpbzogdGhpcy5yZXR1cm5BdWRpbyxcbiAgICAgIGF1ZGlvOiB0aGlzLmF1ZGlvID8gdWludDhBcnJheVRvQmFzZTY0KHRoaXMuYXVkaW8pIDogJycsXG4gICAgICB1dHRlcmFuY2VTdGFydDogdGhpcy51dHRlcmFuY2VTdGFydCxcbiAgICAgIGF1ZGlvVXVpZDogdGhpcy5hdWRpb1V1aWQsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUcmFuc2NyaWJlU3RyZWFtUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdHJhbnNjcmlwdGlvbnM/OiBUcmFuc2NyaXB0aW9uLkFzT2JqZWN0W107XG4gICAgdGltZTogbnVtYmVyO1xuICAgIGZpbmFsOiBib29sZWFuO1xuICAgIHJldHVybkF1ZGlvOiBib29sZWFuO1xuICAgIGF1ZGlvOiBVaW50OEFycmF5O1xuICAgIHV0dGVyYW5jZVN0YXJ0OiBib29sZWFuO1xuICAgIGF1ZGlvVXVpZDogc3RyaW5nO1xuICAgIGNvbmZpZz86IFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdHJhbnNjcmlwdGlvbnM6IFRyYW5zY3JpcHRpb24uQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gICAgdGltZTogbnVtYmVyO1xuICAgIGZpbmFsOiBib29sZWFuO1xuICAgIHJldHVybkF1ZGlvOiBib29sZWFuO1xuICAgIGF1ZGlvOiBzdHJpbmc7XG4gICAgdXR0ZXJhbmNlU3RhcnQ6IGJvb2xlYW47XG4gICAgYXVkaW9VdWlkOiBzdHJpbmc7XG4gICAgY29uZmlnOiBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbiAgZXhwb3J0IGVudW0gT25lb2ZDb25maWdDYXNlIHtcbiAgICBub25lID0gMCxcbiAgICBjb25maWcgPSAxXG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LlRyYW5zY3JpYmVGaWxlUmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNjcmliZUZpbGVSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5UcmFuc2NyaWJlRmlsZVJlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUcmFuc2NyaWJlRmlsZVJlcXVlc3QoKTtcbiAgICBUcmFuc2NyaWJlRmlsZVJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBUcmFuc2NyaWJlRmlsZVJlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UuYXVkaW9GaWxlID0gX2luc3RhbmNlLmF1ZGlvRmlsZSB8fCBuZXcgVWludDhBcnJheSgpO1xuICAgIF9pbnN0YW5jZS5jb25maWcgPSBfaW5zdGFuY2UuY29uZmlnIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFRyYW5zY3JpYmVGaWxlUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuYXVkaW9GaWxlID0gX3JlYWRlci5yZWFkQnl0ZXMoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5jb25maWcgPSBuZXcgVHJhbnNjcmliZVJlcXVlc3RDb25maWcoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNvbmZpZyxcbiAgICAgICAgICAgIFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBUcmFuc2NyaWJlRmlsZVJlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBUcmFuc2NyaWJlRmlsZVJlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuYXVkaW9GaWxlICYmIF9pbnN0YW5jZS5hdWRpb0ZpbGUubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQnl0ZXMoMSwgX2luc3RhbmNlLmF1ZGlvRmlsZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY29uZmlnKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLmNvbmZpZyBhcyBhbnksXG4gICAgICAgIFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2F1ZGlvRmlsZTogVWludDhBcnJheTtcbiAgcHJpdmF0ZSBfY29uZmlnPzogVHJhbnNjcmliZVJlcXVlc3RDb25maWc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBUcmFuc2NyaWJlRmlsZVJlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VHJhbnNjcmliZUZpbGVSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmF1ZGlvRmlsZSA9IF92YWx1ZS5hdWRpb0ZpbGU7XG4gICAgdGhpcy5jb25maWcgPSBfdmFsdWUuY29uZmlnXG4gICAgICA/IG5ldyBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZyhfdmFsdWUuY29uZmlnKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgVHJhbnNjcmliZUZpbGVSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgYXVkaW9GaWxlKCk6IFVpbnQ4QXJyYXkge1xuICAgIHJldHVybiB0aGlzLl9hdWRpb0ZpbGU7XG4gIH1cbiAgc2V0IGF1ZGlvRmlsZSh2YWx1ZTogVWludDhBcnJheSkge1xuICAgIHRoaXMuX2F1ZGlvRmlsZSA9IHZhbHVlO1xuICB9XG4gIGdldCBjb25maWcoKTogVHJhbnNjcmliZVJlcXVlc3RDb25maWcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cbiAgc2V0IGNvbmZpZyh2YWx1ZTogVHJhbnNjcmliZVJlcXVlc3RDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jb25maWcgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBUcmFuc2NyaWJlRmlsZVJlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVHJhbnNjcmliZUZpbGVSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXVkaW9GaWxlOiB0aGlzLmF1ZGlvRmlsZSA/IHRoaXMuYXVkaW9GaWxlLnN1YmFycmF5KDApIDogbmV3IFVpbnQ4QXJyYXkoKSxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZy50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogVHJhbnNjcmliZUZpbGVSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXVkaW9GaWxlOiB0aGlzLmF1ZGlvRmlsZSA/IHVpbnQ4QXJyYXlUb0Jhc2U2NCh0aGlzLmF1ZGlvRmlsZSkgOiAnJyxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZy50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGxcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFRyYW5zY3JpYmVGaWxlUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVHJhbnNjcmliZUZpbGVSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBhdWRpb0ZpbGU6IFVpbnQ4QXJyYXk7XG4gICAgY29uZmlnPzogVHJhbnNjcmliZVJlcXVlc3RDb25maWcuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVHJhbnNjcmliZUZpbGVSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBhdWRpb0ZpbGU6IHN0cmluZztcbiAgICBjb25maWc6IFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuVHJhbnNjcmliZUZpbGVSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNjcmliZUZpbGVSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuVHJhbnNjcmliZUZpbGVSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRyYW5zY3JpYmVGaWxlUmVzcG9uc2UoKTtcbiAgICBUcmFuc2NyaWJlRmlsZVJlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVHJhbnNjcmliZUZpbGVSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS50cmFuc2NyaXB0aW9ucyA9IF9pbnN0YW5jZS50cmFuc2NyaXB0aW9ucyB8fCBbXTtcbiAgICBfaW5zdGFuY2UudGltZSA9IF9pbnN0YW5jZS50aW1lIHx8IDA7XG4gICAgX2luc3RhbmNlLndvcmRUaW1pbmcgPSBfaW5zdGFuY2Uud29yZFRpbWluZyB8fCBbXTtcbiAgICBfaW5zdGFuY2UuYXVkaW9VdWlkID0gX2luc3RhbmNlLmF1ZGlvVXVpZCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFRyYW5zY3JpYmVGaWxlUmVzcG9uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBUcmFuc2NyaXB0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICBUcmFuc2NyaXB0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS50cmFuc2NyaXB0aW9ucyA9IF9pbnN0YW5jZS50cmFuc2NyaXB0aW9ucyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjFcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnRpbWUgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMyA9IG5ldyBXb3JkVGltaW5nKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjMsXG4gICAgICAgICAgICBXb3JkVGltaW5nLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS53b3JkVGltaW5nID0gX2luc3RhbmNlLndvcmRUaW1pbmcgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIzXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5hdWRpb1V1aWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFRyYW5zY3JpYmVGaWxlUmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBUcmFuc2NyaWJlRmlsZVJlc3BvbnNlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnRyYW5zY3JpcHRpb25zICYmIF9pbnN0YW5jZS50cmFuc2NyaXB0aW9ucy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS50cmFuc2NyaXB0aW9ucyBhcyBhbnksXG4gICAgICAgIFRyYW5zY3JpcHRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGltZSkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDIsIF9pbnN0YW5jZS50aW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS53b3JkVGltaW5nICYmIF9pbnN0YW5jZS53b3JkVGltaW5nLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgX2luc3RhbmNlLndvcmRUaW1pbmcgYXMgYW55LFxuICAgICAgICBXb3JkVGltaW5nLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmF1ZGlvVXVpZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg0LCBfaW5zdGFuY2UuYXVkaW9VdWlkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90cmFuc2NyaXB0aW9ucz86IFRyYW5zY3JpcHRpb25bXTtcbiAgcHJpdmF0ZSBfdGltZTogbnVtYmVyO1xuICBwcml2YXRlIF93b3JkVGltaW5nPzogV29yZFRpbWluZ1tdO1xuICBwcml2YXRlIF9hdWRpb1V1aWQ6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFRyYW5zY3JpYmVGaWxlUmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VHJhbnNjcmliZUZpbGVSZXNwb25zZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy50cmFuc2NyaXB0aW9ucyA9IChfdmFsdWUudHJhbnNjcmlwdGlvbnMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IFRyYW5zY3JpcHRpb24obSlcbiAgICApO1xuICAgIHRoaXMudGltZSA9IF92YWx1ZS50aW1lO1xuICAgIHRoaXMud29yZFRpbWluZyA9IChfdmFsdWUud29yZFRpbWluZyB8fCBbXSkubWFwKG0gPT4gbmV3IFdvcmRUaW1pbmcobSkpO1xuICAgIHRoaXMuYXVkaW9VdWlkID0gX3ZhbHVlLmF1ZGlvVXVpZDtcbiAgICBUcmFuc2NyaWJlRmlsZVJlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdHJhbnNjcmlwdGlvbnMoKTogVHJhbnNjcmlwdGlvbltdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhbnNjcmlwdGlvbnM7XG4gIH1cbiAgc2V0IHRyYW5zY3JpcHRpb25zKHZhbHVlOiBUcmFuc2NyaXB0aW9uW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90cmFuc2NyaXB0aW9ucyA9IHZhbHVlO1xuICB9XG4gIGdldCB0aW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWU7XG4gIH1cbiAgc2V0IHRpbWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RpbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgd29yZFRpbWluZygpOiBXb3JkVGltaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl93b3JkVGltaW5nO1xuICB9XG4gIHNldCB3b3JkVGltaW5nKHZhbHVlOiBXb3JkVGltaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl93b3JkVGltaW5nID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGF1ZGlvVXVpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9hdWRpb1V1aWQ7XG4gIH1cbiAgc2V0IGF1ZGlvVXVpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXVkaW9VdWlkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVHJhbnNjcmliZUZpbGVSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBUcmFuc2NyaWJlRmlsZVJlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNjcmlwdGlvbnM6ICh0aGlzLnRyYW5zY3JpcHRpb25zIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpLFxuICAgICAgdGltZTogdGhpcy50aW1lLFxuICAgICAgd29yZFRpbWluZzogKHRoaXMud29yZFRpbWluZyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIGF1ZGlvVXVpZDogdGhpcy5hdWRpb1V1aWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBUcmFuc2NyaWJlRmlsZVJlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNjcmlwdGlvbnM6ICh0aGlzLnRyYW5zY3JpcHRpb25zIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICApLFxuICAgICAgdGltZTogdGhpcy50aW1lLFxuICAgICAgd29yZFRpbWluZzogKHRoaXMud29yZFRpbWluZyB8fCBbXSkubWFwKG0gPT4gbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSksXG4gICAgICBhdWRpb1V1aWQ6IHRoaXMuYXVkaW9VdWlkXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUcmFuc2NyaWJlRmlsZVJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBUcmFuc2NyaWJlRmlsZVJlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB0cmFuc2NyaXB0aW9ucz86IFRyYW5zY3JpcHRpb24uQXNPYmplY3RbXTtcbiAgICB0aW1lOiBudW1iZXI7XG4gICAgd29yZFRpbWluZz86IFdvcmRUaW1pbmcuQXNPYmplY3RbXTtcbiAgICBhdWRpb1V1aWQ6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBUcmFuc2NyaWJlRmlsZVJlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB0cmFuc2NyaXB0aW9uczogVHJhbnNjcmlwdGlvbi5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgICB0aW1lOiBudW1iZXI7XG4gICAgd29yZFRpbWluZzogV29yZFRpbWluZy5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgICBhdWRpb1V1aWQ6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuV29yZFRpbWluZ1xuICovXG5leHBvcnQgY2xhc3MgV29yZFRpbWluZyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuV29yZFRpbWluZyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFdvcmRUaW1pbmcoKTtcbiAgICBXb3JkVGltaW5nLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogV29yZFRpbWluZykge1xuICAgIF9pbnN0YW5jZS53b3JkID0gX2luc3RhbmNlLndvcmQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmJlZ2luID0gX2luc3RhbmNlLmJlZ2luIHx8IDA7XG4gICAgX2luc3RhbmNlLmVuZCA9IF9pbnN0YW5jZS5lbmQgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFdvcmRUaW1pbmcsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLndvcmQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5iZWdpbiA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuZW5kID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFdvcmRUaW1pbmcucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBXb3JkVGltaW5nLCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLndvcmQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLndvcmQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmJlZ2luKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50MzIoMiwgX2luc3RhbmNlLmJlZ2luKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5lbmQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMigzLCBfaW5zdGFuY2UuZW5kKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF93b3JkOiBzdHJpbmc7XG4gIHByaXZhdGUgX2JlZ2luOiBudW1iZXI7XG4gIHByaXZhdGUgX2VuZDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgV29yZFRpbWluZyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxXb3JkVGltaW5nLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLndvcmQgPSBfdmFsdWUud29yZDtcbiAgICB0aGlzLmJlZ2luID0gX3ZhbHVlLmJlZ2luO1xuICAgIHRoaXMuZW5kID0gX3ZhbHVlLmVuZDtcbiAgICBXb3JkVGltaW5nLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgd29yZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl93b3JkO1xuICB9XG4gIHNldCB3b3JkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl93b3JkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGJlZ2luKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2JlZ2luO1xuICB9XG4gIHNldCBiZWdpbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYmVnaW4gPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW5kKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZDtcbiAgfVxuICBzZXQgZW5kKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9lbmQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBXb3JkVGltaW5nLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFdvcmRUaW1pbmcuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB3b3JkOiB0aGlzLndvcmQsXG4gICAgICBiZWdpbjogdGhpcy5iZWdpbixcbiAgICAgIGVuZDogdGhpcy5lbmRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBXb3JkVGltaW5nLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgd29yZDogdGhpcy53b3JkLFxuICAgICAgYmVnaW46IHRoaXMuYmVnaW4sXG4gICAgICBlbmQ6IHRoaXMuZW5kXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBXb3JkVGltaW5nIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBXb3JkVGltaW5nXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB3b3JkOiBzdHJpbmc7XG4gICAgYmVnaW46IG51bWJlcjtcbiAgICBlbmQ6IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBXb3JkVGltaW5nXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB3b3JkOiBzdHJpbmc7XG4gICAgYmVnaW46IG51bWJlcjtcbiAgICBlbmQ6IG51bWJlcjtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuUzJ0UGlwZWxpbmVJZFxuICovXG5leHBvcnQgY2xhc3MgUzJ0UGlwZWxpbmVJZCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuUzJ0UGlwZWxpbmVJZCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFMydFBpcGVsaW5lSWQoKTtcbiAgICBTMnRQaXBlbGluZUlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogUzJ0UGlwZWxpbmVJZCkge1xuICAgIF9pbnN0YW5jZS5pZCA9IF9pbnN0YW5jZS5pZCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFMydFBpcGVsaW5lSWQsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmlkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTMnRQaXBlbGluZUlkLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogUzJ0UGlwZWxpbmVJZCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5pZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UuaWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTMnRQaXBlbGluZUlkIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFMydFBpcGVsaW5lSWQuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuaWQgPSBfdmFsdWUuaWQ7XG4gICAgUzJ0UGlwZWxpbmVJZC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG4gIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBTMnRQaXBlbGluZUlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFMydFBpcGVsaW5lSWQuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFMydFBpcGVsaW5lSWQuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUzJ0UGlwZWxpbmVJZCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUzJ0UGlwZWxpbmVJZFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgaWQ6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTMnRQaXBlbGluZUlkXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBpZDogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5MaXN0UzJ0UGlwZWxpbmVzUmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgTGlzdFMydFBpcGVsaW5lc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0Lkxpc3RTMnRQaXBlbGluZXNSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFMydFBpcGVsaW5lc1JlcXVlc3QoKTtcbiAgICBMaXN0UzJ0UGlwZWxpbmVzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExpc3RTMnRQaXBlbGluZXNSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLmxhbmd1YWdlcyA9IF9pbnN0YW5jZS5sYW5ndWFnZXMgfHwgW107XG4gICAgX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzID0gX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5kb21haW5zID0gX2luc3RhbmNlLmRvbWFpbnMgfHwgW107XG4gICAgX2luc3RhbmNlLnJlZ2lzdGVyZWRPbmx5ID0gX2luc3RhbmNlLnJlZ2lzdGVyZWRPbmx5IHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdFMydFBpcGVsaW5lc1JlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgKF9pbnN0YW5jZS5sYW5ndWFnZXMgPSBfaW5zdGFuY2UubGFuZ3VhZ2VzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgKF9pbnN0YW5jZS5waXBlbGluZU93bmVycyA9IF9pbnN0YW5jZS5waXBlbGluZU93bmVycyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIChfaW5zdGFuY2UuZG9tYWlucyA9IF9pbnN0YW5jZS5kb21haW5zIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLnJlZ2lzdGVyZWRPbmx5ID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdFMydFBpcGVsaW5lc1JlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0UzJ0UGlwZWxpbmVzUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5sYW5ndWFnZXMgJiYgX2luc3RhbmNlLmxhbmd1YWdlcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBfaW5zdGFuY2UubGFuZ3VhZ2VzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5waXBlbGluZU93bmVycyAmJiBfaW5zdGFuY2UucGlwZWxpbmVPd25lcnMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMiwgX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kb21haW5zICYmIF9pbnN0YW5jZS5kb21haW5zLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDMsIF9pbnN0YW5jZS5kb21haW5zKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5yZWdpc3RlcmVkT25seSkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woNCwgX2luc3RhbmNlLnJlZ2lzdGVyZWRPbmx5KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sYW5ndWFnZXM6IHN0cmluZ1tdO1xuICBwcml2YXRlIF9waXBlbGluZU93bmVyczogc3RyaW5nW107XG4gIHByaXZhdGUgX2RvbWFpbnM6IHN0cmluZ1tdO1xuICBwcml2YXRlIF9yZWdpc3RlcmVkT25seTogYm9vbGVhbjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIExpc3RTMnRQaXBlbGluZXNSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RTMnRQaXBlbGluZXNSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhbmd1YWdlcyA9IChfdmFsdWUubGFuZ3VhZ2VzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMucGlwZWxpbmVPd25lcnMgPSAoX3ZhbHVlLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMuZG9tYWlucyA9IChfdmFsdWUuZG9tYWlucyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLnJlZ2lzdGVyZWRPbmx5ID0gX3ZhbHVlLnJlZ2lzdGVyZWRPbmx5O1xuICAgIExpc3RTMnRQaXBlbGluZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VzO1xuICB9XG4gIHNldCBsYW5ndWFnZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBpcGVsaW5lT3duZXJzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fcGlwZWxpbmVPd25lcnM7XG4gIH1cbiAgc2V0IHBpcGVsaW5lT3duZXJzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3BpcGVsaW5lT3duZXJzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRvbWFpbnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9kb21haW5zO1xuICB9XG4gIHNldCBkb21haW5zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2RvbWFpbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVnaXN0ZXJlZE9ubHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZ2lzdGVyZWRPbmx5O1xuICB9XG4gIHNldCByZWdpc3RlcmVkT25seSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlZ2lzdGVyZWRPbmx5ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdFMydFBpcGVsaW5lc1JlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTGlzdFMydFBpcGVsaW5lc1JlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZXM6ICh0aGlzLmxhbmd1YWdlcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHBpcGVsaW5lT3duZXJzOiAodGhpcy5waXBlbGluZU93bmVycyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGRvbWFpbnM6ICh0aGlzLmRvbWFpbnMgfHwgW10pLnNsaWNlKCksXG4gICAgICByZWdpc3RlcmVkT25seTogdGhpcy5yZWdpc3RlcmVkT25seVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IExpc3RTMnRQaXBlbGluZXNSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFuZ3VhZ2VzOiAodGhpcy5sYW5ndWFnZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBwaXBlbGluZU93bmVyczogKHRoaXMucGlwZWxpbmVPd25lcnMgfHwgW10pLnNsaWNlKCksXG4gICAgICBkb21haW5zOiAodGhpcy5kb21haW5zIHx8IFtdKS5zbGljZSgpLFxuICAgICAgcmVnaXN0ZXJlZE9ubHk6IHRoaXMucmVnaXN0ZXJlZE9ubHlcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RTMnRQaXBlbGluZXNSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBMaXN0UzJ0UGlwZWxpbmVzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbGFuZ3VhZ2VzOiBzdHJpbmdbXTtcbiAgICBwaXBlbGluZU93bmVyczogc3RyaW5nW107XG4gICAgZG9tYWluczogc3RyaW5nW107XG4gICAgcmVnaXN0ZXJlZE9ubHk6IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTGlzdFMydFBpcGVsaW5lc1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGxhbmd1YWdlczogc3RyaW5nW107XG4gICAgcGlwZWxpbmVPd25lcnM6IHN0cmluZ1tdO1xuICAgIGRvbWFpbnM6IHN0cmluZ1tdO1xuICAgIHJlZ2lzdGVyZWRPbmx5OiBib29sZWFuO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5MaXN0UzJ0UGlwZWxpbmVzUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIExpc3RTMnRQaXBlbGluZXNSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuTGlzdFMydFBpcGVsaW5lc1Jlc3BvbnNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFMydFBpcGVsaW5lc1Jlc3BvbnNlKCk7XG4gICAgTGlzdFMydFBpcGVsaW5lc1Jlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTGlzdFMydFBpcGVsaW5lc1Jlc3BvbnNlKSB7XG4gICAgX2luc3RhbmNlLnBpcGVsaW5lQ29uZmlncyA9IF9pbnN0YW5jZS5waXBlbGluZUNvbmZpZ3MgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0UzJ0UGlwZWxpbmVzUmVzcG9uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBTcGVlY2gyVGV4dENvbmZpZygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxLFxuICAgICAgICAgICAgU3BlZWNoMlRleHRDb25maWcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLnBpcGVsaW5lQ29uZmlncyA9IF9pbnN0YW5jZS5waXBlbGluZUNvbmZpZ3MgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RTMnRQaXBlbGluZXNSZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RTMnRQaXBlbGluZXNSZXNwb25zZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5waXBlbGluZUNvbmZpZ3MgJiYgX2luc3RhbmNlLnBpcGVsaW5lQ29uZmlncy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS5waXBlbGluZUNvbmZpZ3MgYXMgYW55LFxuICAgICAgICBTcGVlY2gyVGV4dENvbmZpZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9waXBlbGluZUNvbmZpZ3M/OiBTcGVlY2gyVGV4dENvbmZpZ1tdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTGlzdFMydFBpcGVsaW5lc1Jlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RTMnRQaXBlbGluZXNSZXNwb25zZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5waXBlbGluZUNvbmZpZ3MgPSAoX3ZhbHVlLnBpcGVsaW5lQ29uZmlncyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgU3BlZWNoMlRleHRDb25maWcobSlcbiAgICApO1xuICAgIExpc3RTMnRQaXBlbGluZXNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBpcGVsaW5lQ29uZmlncygpOiBTcGVlY2gyVGV4dENvbmZpZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGlwZWxpbmVDb25maWdzO1xuICB9XG4gIHNldCBwaXBlbGluZUNvbmZpZ3ModmFsdWU6IFNwZWVjaDJUZXh0Q29uZmlnW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9waXBlbGluZUNvbmZpZ3MgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMaXN0UzJ0UGlwZWxpbmVzUmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTGlzdFMydFBpcGVsaW5lc1Jlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGlwZWxpbmVDb25maWdzOiAodGhpcy5waXBlbGluZUNvbmZpZ3MgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBMaXN0UzJ0UGlwZWxpbmVzUmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwaXBlbGluZUNvbmZpZ3M6ICh0aGlzLnBpcGVsaW5lQ29uZmlncyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGlzdFMydFBpcGVsaW5lc1Jlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBMaXN0UzJ0UGlwZWxpbmVzUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHBpcGVsaW5lQ29uZmlncz86IFNwZWVjaDJUZXh0Q29uZmlnLkFzT2JqZWN0W107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTGlzdFMydFBpcGVsaW5lc1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBwaXBlbGluZUNvbmZpZ3M6IFNwZWVjaDJUZXh0Q29uZmlnLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5MaXN0UzJ0TGFuZ3VhZ2VzUmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgTGlzdFMydExhbmd1YWdlc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0Lkxpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFMydExhbmd1YWdlc1JlcXVlc3QoKTtcbiAgICBMaXN0UzJ0TGFuZ3VhZ2VzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLmRvbWFpbnMgPSBfaW5zdGFuY2UuZG9tYWlucyB8fCBbXTtcbiAgICBfaW5zdGFuY2UucGlwZWxpbmVPd25lcnMgPSBfaW5zdGFuY2UucGlwZWxpbmVPd25lcnMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0UzJ0TGFuZ3VhZ2VzUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAoX2luc3RhbmNlLmRvbWFpbnMgPSBfaW5zdGFuY2UuZG9tYWlucyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIChfaW5zdGFuY2UucGlwZWxpbmVPd25lcnMgPSBfaW5zdGFuY2UucGlwZWxpbmVPd25lcnMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0UzJ0TGFuZ3VhZ2VzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmRvbWFpbnMgJiYgX2luc3RhbmNlLmRvbWFpbnMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMSwgX2luc3RhbmNlLmRvbWFpbnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzICYmIF9pbnN0YW5jZS5waXBlbGluZU93bmVycy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygyLCBfaW5zdGFuY2UucGlwZWxpbmVPd25lcnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2RvbWFpbnM6IHN0cmluZ1tdO1xuICBwcml2YXRlIF9waXBlbGluZU93bmVyczogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBMaXN0UzJ0TGFuZ3VhZ2VzUmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0UzJ0TGFuZ3VhZ2VzUmVxdWVzdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5kb21haW5zID0gKF92YWx1ZS5kb21haW5zIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMucGlwZWxpbmVPd25lcnMgPSAoX3ZhbHVlLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5zbGljZSgpO1xuICAgIExpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgZG9tYWlucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvbWFpbnM7XG4gIH1cbiAgc2V0IGRvbWFpbnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZG9tYWlucyA9IHZhbHVlO1xuICB9XG4gIGdldCBwaXBlbGluZU93bmVycygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3BpcGVsaW5lT3duZXJzO1xuICB9XG4gIHNldCBwaXBlbGluZU93bmVycyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9waXBlbGluZU93bmVycyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IExpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9tYWluczogKHRoaXMuZG9tYWlucyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHBpcGVsaW5lT3duZXJzOiAodGhpcy5waXBlbGluZU93bmVycyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IExpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9tYWluczogKHRoaXMuZG9tYWlucyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHBpcGVsaW5lT3duZXJzOiAodGhpcy5waXBlbGluZU93bmVycyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGlzdFMydExhbmd1YWdlc1JlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBkb21haW5zOiBzdHJpbmdbXTtcbiAgICBwaXBlbGluZU93bmVyczogc3RyaW5nW107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTGlzdFMydExhbmd1YWdlc1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGRvbWFpbnM6IHN0cmluZ1tdO1xuICAgIHBpcGVsaW5lT3duZXJzOiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuTGlzdFMydExhbmd1YWdlc1Jlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXN0UzJ0TGFuZ3VhZ2VzUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0Lkxpc3RTMnRMYW5ndWFnZXNSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RTMnRMYW5ndWFnZXNSZXNwb25zZSgpO1xuICAgIExpc3RTMnRMYW5ndWFnZXNSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExpc3RTMnRMYW5ndWFnZXNSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5sYW5ndWFnZXMgPSBfaW5zdGFuY2UubGFuZ3VhZ2VzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdFMydExhbmd1YWdlc1Jlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChfaW5zdGFuY2UubGFuZ3VhZ2VzID0gX2luc3RhbmNlLmxhbmd1YWdlcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RTMnRMYW5ndWFnZXNSZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RTMnRMYW5ndWFnZXNSZXNwb25zZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5sYW5ndWFnZXMgJiYgX2luc3RhbmNlLmxhbmd1YWdlcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBfaW5zdGFuY2UubGFuZ3VhZ2VzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sYW5ndWFnZXM6IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTGlzdFMydExhbmd1YWdlc1Jlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RTMnRMYW5ndWFnZXNSZXNwb25zZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5sYW5ndWFnZXMgPSAoX3ZhbHVlLmxhbmd1YWdlcyB8fCBbXSkuc2xpY2UoKTtcbiAgICBMaXN0UzJ0TGFuZ3VhZ2VzUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBsYW5ndWFnZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZXM7XG4gIH1cbiAgc2V0IGxhbmd1YWdlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9sYW5ndWFnZXMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMaXN0UzJ0TGFuZ3VhZ2VzUmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTGlzdFMydExhbmd1YWdlc1Jlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFuZ3VhZ2VzOiAodGhpcy5sYW5ndWFnZXMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBMaXN0UzJ0TGFuZ3VhZ2VzUmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZXM6ICh0aGlzLmxhbmd1YWdlcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGlzdFMydExhbmd1YWdlc1Jlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBMaXN0UzJ0TGFuZ3VhZ2VzUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGxhbmd1YWdlczogc3RyaW5nW107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTGlzdFMydExhbmd1YWdlc1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBsYW5ndWFnZXM6IHN0cmluZ1tdO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5MaXN0UzJ0RG9tYWluc1JlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIExpc3RTMnREb21haW5zUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuTGlzdFMydERvbWFpbnNSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFMydERvbWFpbnNSZXF1ZXN0KCk7XG4gICAgTGlzdFMydERvbWFpbnNSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTGlzdFMydERvbWFpbnNSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLmxhbmd1YWdlcyA9IF9pbnN0YW5jZS5sYW5ndWFnZXMgfHwgW107XG4gICAgX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzID0gX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdFMydERvbWFpbnNSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChfaW5zdGFuY2UubGFuZ3VhZ2VzID0gX2luc3RhbmNlLmxhbmd1YWdlcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIChfaW5zdGFuY2UucGlwZWxpbmVPd25lcnMgPSBfaW5zdGFuY2UucGlwZWxpbmVPd25lcnMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0UzJ0RG9tYWluc1JlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0UzJ0RG9tYWluc1JlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2VzICYmIF9pbnN0YW5jZS5sYW5ndWFnZXMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMSwgX2luc3RhbmNlLmxhbmd1YWdlcyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGlwZWxpbmVPd25lcnMgJiYgX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDIsIF9pbnN0YW5jZS5waXBlbGluZU93bmVycyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VzOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfcGlwZWxpbmVPd25lcnM6IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTGlzdFMydERvbWFpbnNSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RTMnREb21haW5zUmVxdWVzdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5sYW5ndWFnZXMgPSAoX3ZhbHVlLmxhbmd1YWdlcyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLnBpcGVsaW5lT3duZXJzID0gKF92YWx1ZS5waXBlbGluZU93bmVycyB8fCBbXSkuc2xpY2UoKTtcbiAgICBMaXN0UzJ0RG9tYWluc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBsYW5ndWFnZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZXM7XG4gIH1cbiAgc2V0IGxhbmd1YWdlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9sYW5ndWFnZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGlwZWxpbmVPd25lcnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9waXBlbGluZU93bmVycztcbiAgfVxuICBzZXQgcGlwZWxpbmVPd25lcnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fcGlwZWxpbmVPd25lcnMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMaXN0UzJ0RG9tYWluc1JlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTGlzdFMydERvbWFpbnNSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFuZ3VhZ2VzOiAodGhpcy5sYW5ndWFnZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBwaXBlbGluZU93bmVyczogKHRoaXMucGlwZWxpbmVPd25lcnMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBMaXN0UzJ0RG9tYWluc1JlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZXM6ICh0aGlzLmxhbmd1YWdlcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHBpcGVsaW5lT3duZXJzOiAodGhpcy5waXBlbGluZU93bmVycyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGlzdFMydERvbWFpbnNSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBMaXN0UzJ0RG9tYWluc1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGxhbmd1YWdlczogc3RyaW5nW107XG4gICAgcGlwZWxpbmVPd25lcnM6IHN0cmluZ1tdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIExpc3RTMnREb21haW5zUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbGFuZ3VhZ2VzOiBzdHJpbmdbXTtcbiAgICBwaXBlbGluZU93bmVyczogc3RyaW5nW107XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0Lkxpc3RTMnREb21haW5zUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIExpc3RTMnREb21haW5zUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0Lkxpc3RTMnREb21haW5zUmVzcG9uc2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaXN0UzJ0RG9tYWluc1Jlc3BvbnNlKCk7XG4gICAgTGlzdFMydERvbWFpbnNSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExpc3RTMnREb21haW5zUmVzcG9uc2UpIHtcbiAgICBfaW5zdGFuY2UuZG9tYWlucyA9IF9pbnN0YW5jZS5kb21haW5zIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdFMydERvbWFpbnNSZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAoX2luc3RhbmNlLmRvbWFpbnMgPSBfaW5zdGFuY2UuZG9tYWlucyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RTMnREb21haW5zUmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0UzJ0RG9tYWluc1Jlc3BvbnNlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmRvbWFpbnMgJiYgX2luc3RhbmNlLmRvbWFpbnMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMSwgX2luc3RhbmNlLmRvbWFpbnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2RvbWFpbnM6IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTGlzdFMydERvbWFpbnNSZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0UzJ0RG9tYWluc1Jlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmRvbWFpbnMgPSAoX3ZhbHVlLmRvbWFpbnMgfHwgW10pLnNsaWNlKCk7XG4gICAgTGlzdFMydERvbWFpbnNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGRvbWFpbnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9kb21haW5zO1xuICB9XG4gIHNldCBkb21haW5zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2RvbWFpbnMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMaXN0UzJ0RG9tYWluc1Jlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IExpc3RTMnREb21haW5zUmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBkb21haW5zOiAodGhpcy5kb21haW5zIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTGlzdFMydERvbWFpbnNSZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbWFpbnM6ICh0aGlzLmRvbWFpbnMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RTMnREb21haW5zUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExpc3RTMnREb21haW5zUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGRvbWFpbnM6IHN0cmluZ1tdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIExpc3RTMnREb21haW5zUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGRvbWFpbnM6IHN0cmluZ1tdO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5TMlRHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBTMlRHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5TMlRHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUzJUR2V0U2VydmljZUluZm9SZXNwb25zZSgpO1xuICAgIFMyVEdldFNlcnZpY2VJbmZvUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTMlRHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlKSB7XG4gICAgX2luc3RhbmNlLnZlcnNpb24gPSBfaW5zdGFuY2UudmVyc2lvbiB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFMyVEdldFNlcnZpY2VJbmZvUmVzcG9uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnZlcnNpb24gPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFMyVEdldFNlcnZpY2VJbmZvUmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBTMlRHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnZlcnNpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnZlcnNpb24pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3ZlcnNpb246IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFMyVEdldFNlcnZpY2VJbmZvUmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UzJUR2V0U2VydmljZUluZm9SZXNwb25zZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy52ZXJzaW9uID0gX3ZhbHVlLnZlcnNpb247XG4gICAgUzJUR2V0U2VydmljZUluZm9SZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHZlcnNpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdmVyc2lvbjtcbiAgfVxuICBzZXQgdmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmVyc2lvbiA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFMyVEdldFNlcnZpY2VJbmZvUmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUzJUR2V0U2VydmljZUluZm9SZXNwb25zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZlcnNpb246IHRoaXMudmVyc2lvblxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFMyVEdldFNlcnZpY2VJbmZvUmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB2ZXJzaW9uOiB0aGlzLnZlcnNpb25cbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFMyVEdldFNlcnZpY2VJbmZvUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFMyVEdldFNlcnZpY2VJbmZvUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHZlcnNpb246IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTMlRHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB2ZXJzaW9uOiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LlNwZWVjaDJUZXh0Q29uZmlnXG4gKi9cbmV4cG9ydCBjbGFzcyBTcGVlY2gyVGV4dENvbmZpZyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuU3BlZWNoMlRleHRDb25maWcnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTcGVlY2gyVGV4dENvbmZpZygpO1xuICAgIFNwZWVjaDJUZXh0Q29uZmlnLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogU3BlZWNoMlRleHRDb25maWcpIHtcbiAgICBfaW5zdGFuY2UuaWQgPSBfaW5zdGFuY2UuaWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmRlc2NyaXB0aW9uID0gX2luc3RhbmNlLmRlc2NyaXB0aW9uIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuYWN0aXZlID0gX2luc3RhbmNlLmFjdGl2ZSB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UuaW5mZXJlbmNlID0gX2luc3RhbmNlLmluZmVyZW5jZSB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnN0cmVhbWluZ1NlcnZlciA9IF9pbnN0YW5jZS5zdHJlYW1pbmdTZXJ2ZXIgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS52b2ljZUFjdGl2aXR5RGV0ZWN0aW9uID1cbiAgICAgIF9pbnN0YW5jZS52b2ljZUFjdGl2aXR5RGV0ZWN0aW9uIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UucG9zdFByb2Nlc3NpbmcgPSBfaW5zdGFuY2UucG9zdFByb2Nlc3NpbmcgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5sb2dnaW5nID0gX2luc3RhbmNlLmxvZ2dpbmcgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogU3BlZWNoMlRleHRDb25maWcsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmlkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZGVzY3JpcHRpb24gPSBuZXcgUzJURGVzY3JpcHRpb24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgUzJURGVzY3JpcHRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5hY3RpdmUgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuaW5mZXJlbmNlID0gbmV3IFMyVEluZmVyZW5jZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuaW5mZXJlbmNlLFxuICAgICAgICAgICAgUzJUSW5mZXJlbmNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3RyZWFtaW5nU2VydmVyID0gbmV3IFN0cmVhbWluZ1NlcnZlcigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc3RyZWFtaW5nU2VydmVyLFxuICAgICAgICAgICAgU3RyZWFtaW5nU2VydmVyLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2Uudm9pY2VBY3Rpdml0eURldGVjdGlvbiA9IG5ldyBWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS52b2ljZUFjdGl2aXR5RGV0ZWN0aW9uLFxuICAgICAgICAgICAgVm9pY2VBY3Rpdml0eURldGVjdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLnBvc3RQcm9jZXNzaW5nID0gbmV3IFBvc3RQcm9jZXNzaW5nKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5wb3N0UHJvY2Vzc2luZyxcbiAgICAgICAgICAgIFBvc3RQcm9jZXNzaW5nLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2UubG9nZ2luZyA9IG5ldyBMb2dnaW5nKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5sb2dnaW5nLFxuICAgICAgICAgICAgTG9nZ2luZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU3BlZWNoMlRleHRDb25maWcucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBTcGVlY2gyVGV4dENvbmZpZyxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5pZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UuaWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmRlc2NyaXB0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLmRlc2NyaXB0aW9uIGFzIGFueSxcbiAgICAgICAgUzJURGVzY3JpcHRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYWN0aXZlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgzLCBfaW5zdGFuY2UuYWN0aXZlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pbmZlcmVuY2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBfaW5zdGFuY2UuaW5mZXJlbmNlIGFzIGFueSxcbiAgICAgICAgUzJUSW5mZXJlbmNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnN0cmVhbWluZ1NlcnZlcikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIF9pbnN0YW5jZS5zdHJlYW1pbmdTZXJ2ZXIgYXMgYW55LFxuICAgICAgICBTdHJlYW1pbmdTZXJ2ZXIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uudm9pY2VBY3Rpdml0eURldGVjdGlvbikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDYsXG4gICAgICAgIF9pbnN0YW5jZS52b2ljZUFjdGl2aXR5RGV0ZWN0aW9uIGFzIGFueSxcbiAgICAgICAgVm9pY2VBY3Rpdml0eURldGVjdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wb3N0UHJvY2Vzc2luZykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDcsXG4gICAgICAgIF9pbnN0YW5jZS5wb3N0UHJvY2Vzc2luZyBhcyBhbnksXG4gICAgICAgIFBvc3RQcm9jZXNzaW5nLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxvZ2dpbmcpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA4LFxuICAgICAgICBfaW5zdGFuY2UubG9nZ2luZyBhcyBhbnksXG4gICAgICAgIExvZ2dpbmcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBTMlREZXNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfYWN0aXZlOiBib29sZWFuO1xuICBwcml2YXRlIF9pbmZlcmVuY2U/OiBTMlRJbmZlcmVuY2U7XG4gIHByaXZhdGUgX3N0cmVhbWluZ1NlcnZlcj86IFN0cmVhbWluZ1NlcnZlcjtcbiAgcHJpdmF0ZSBfdm9pY2VBY3Rpdml0eURldGVjdGlvbj86IFZvaWNlQWN0aXZpdHlEZXRlY3Rpb247XG4gIHByaXZhdGUgX3Bvc3RQcm9jZXNzaW5nPzogUG9zdFByb2Nlc3Npbmc7XG4gIHByaXZhdGUgX2xvZ2dpbmc/OiBMb2dnaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgU3BlZWNoMlRleHRDb25maWcgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U3BlZWNoMlRleHRDb25maWcuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuaWQgPSBfdmFsdWUuaWQ7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IF92YWx1ZS5kZXNjcmlwdGlvblxuICAgICAgPyBuZXcgUzJURGVzY3JpcHRpb24oX3ZhbHVlLmRlc2NyaXB0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5hY3RpdmUgPSBfdmFsdWUuYWN0aXZlO1xuICAgIHRoaXMuaW5mZXJlbmNlID0gX3ZhbHVlLmluZmVyZW5jZVxuICAgICAgPyBuZXcgUzJUSW5mZXJlbmNlKF92YWx1ZS5pbmZlcmVuY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN0cmVhbWluZ1NlcnZlciA9IF92YWx1ZS5zdHJlYW1pbmdTZXJ2ZXJcbiAgICAgID8gbmV3IFN0cmVhbWluZ1NlcnZlcihfdmFsdWUuc3RyZWFtaW5nU2VydmVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy52b2ljZUFjdGl2aXR5RGV0ZWN0aW9uID0gX3ZhbHVlLnZvaWNlQWN0aXZpdHlEZXRlY3Rpb25cbiAgICAgID8gbmV3IFZvaWNlQWN0aXZpdHlEZXRlY3Rpb24oX3ZhbHVlLnZvaWNlQWN0aXZpdHlEZXRlY3Rpb24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBvc3RQcm9jZXNzaW5nID0gX3ZhbHVlLnBvc3RQcm9jZXNzaW5nXG4gICAgICA/IG5ldyBQb3N0UHJvY2Vzc2luZyhfdmFsdWUucG9zdFByb2Nlc3NpbmcpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvZ2dpbmcgPSBfdmFsdWUubG9nZ2luZyA/IG5ldyBMb2dnaW5nKF92YWx1ZS5sb2dnaW5nKSA6IHVuZGVmaW5lZDtcbiAgICBTcGVlY2gyVGV4dENvbmZpZy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG4gIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGVzY3JpcHRpb24oKTogUzJURGVzY3JpcHRpb24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuICBzZXQgZGVzY3JpcHRpb24odmFsdWU6IFMyVERlc2NyaXB0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgYWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XG4gIH1cbiAgc2V0IGFjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FjdGl2ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBpbmZlcmVuY2UoKTogUzJUSW5mZXJlbmNlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faW5mZXJlbmNlO1xuICB9XG4gIHNldCBpbmZlcmVuY2UodmFsdWU6IFMyVEluZmVyZW5jZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2luZmVyZW5jZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzdHJlYW1pbmdTZXJ2ZXIoKTogU3RyZWFtaW5nU2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3RyZWFtaW5nU2VydmVyO1xuICB9XG4gIHNldCBzdHJlYW1pbmdTZXJ2ZXIodmFsdWU6IFN0cmVhbWluZ1NlcnZlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3N0cmVhbWluZ1NlcnZlciA9IHZhbHVlO1xuICB9XG4gIGdldCB2b2ljZUFjdGl2aXR5RGV0ZWN0aW9uKCk6IFZvaWNlQWN0aXZpdHlEZXRlY3Rpb24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl92b2ljZUFjdGl2aXR5RGV0ZWN0aW9uO1xuICB9XG4gIHNldCB2b2ljZUFjdGl2aXR5RGV0ZWN0aW9uKHZhbHVlOiBWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdm9pY2VBY3Rpdml0eURldGVjdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBwb3N0UHJvY2Vzc2luZygpOiBQb3N0UHJvY2Vzc2luZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc3RQcm9jZXNzaW5nO1xuICB9XG4gIHNldCBwb3N0UHJvY2Vzc2luZyh2YWx1ZTogUG9zdFByb2Nlc3NpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wb3N0UHJvY2Vzc2luZyA9IHZhbHVlO1xuICB9XG4gIGdldCBsb2dnaW5nKCk6IExvZ2dpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sb2dnaW5nO1xuICB9XG4gIHNldCBsb2dnaW5nKHZhbHVlOiBMb2dnaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbG9nZ2luZyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFNwZWVjaDJUZXh0Q29uZmlnLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFNwZWVjaDJUZXh0Q29uZmlnLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbiA/IHRoaXMuZGVzY3JpcHRpb24udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGFjdGl2ZTogdGhpcy5hY3RpdmUsXG4gICAgICBpbmZlcmVuY2U6IHRoaXMuaW5mZXJlbmNlID8gdGhpcy5pbmZlcmVuY2UudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHN0cmVhbWluZ1NlcnZlcjogdGhpcy5zdHJlYW1pbmdTZXJ2ZXJcbiAgICAgICAgPyB0aGlzLnN0cmVhbWluZ1NlcnZlci50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgdm9pY2VBY3Rpdml0eURldGVjdGlvbjogdGhpcy52b2ljZUFjdGl2aXR5RGV0ZWN0aW9uXG4gICAgICAgID8gdGhpcy52b2ljZUFjdGl2aXR5RGV0ZWN0aW9uLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBwb3N0UHJvY2Vzc2luZzogdGhpcy5wb3N0UHJvY2Vzc2luZ1xuICAgICAgICA/IHRoaXMucG9zdFByb2Nlc3NpbmcudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGxvZ2dpbmc6IHRoaXMubG9nZ2luZyA/IHRoaXMubG9nZ2luZy50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogU3BlZWNoMlRleHRDb25maWcuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uXG4gICAgICAgID8gdGhpcy5kZXNjcmlwdGlvbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBhY3RpdmU6IHRoaXMuYWN0aXZlLFxuICAgICAgaW5mZXJlbmNlOiB0aGlzLmluZmVyZW5jZSA/IHRoaXMuaW5mZXJlbmNlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHN0cmVhbWluZ1NlcnZlcjogdGhpcy5zdHJlYW1pbmdTZXJ2ZXJcbiAgICAgICAgPyB0aGlzLnN0cmVhbWluZ1NlcnZlci50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICB2b2ljZUFjdGl2aXR5RGV0ZWN0aW9uOiB0aGlzLnZvaWNlQWN0aXZpdHlEZXRlY3Rpb25cbiAgICAgICAgPyB0aGlzLnZvaWNlQWN0aXZpdHlEZXRlY3Rpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgcG9zdFByb2Nlc3Npbmc6IHRoaXMucG9zdFByb2Nlc3NpbmdcbiAgICAgICAgPyB0aGlzLnBvc3RQcm9jZXNzaW5nLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGxvZ2dpbmc6IHRoaXMubG9nZ2luZyA/IHRoaXMubG9nZ2luZy50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGxcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFNwZWVjaDJUZXh0Q29uZmlnIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBTcGVlY2gyVGV4dENvbmZpZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbj86IFMyVERlc2NyaXB0aW9uLkFzT2JqZWN0O1xuICAgIGFjdGl2ZTogYm9vbGVhbjtcbiAgICBpbmZlcmVuY2U/OiBTMlRJbmZlcmVuY2UuQXNPYmplY3Q7XG4gICAgc3RyZWFtaW5nU2VydmVyPzogU3RyZWFtaW5nU2VydmVyLkFzT2JqZWN0O1xuICAgIHZvaWNlQWN0aXZpdHlEZXRlY3Rpb24/OiBWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uLkFzT2JqZWN0O1xuICAgIHBvc3RQcm9jZXNzaW5nPzogUG9zdFByb2Nlc3NpbmcuQXNPYmplY3Q7XG4gICAgbG9nZ2luZz86IExvZ2dpbmcuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgU3BlZWNoMlRleHRDb25maWdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IFMyVERlc2NyaXB0aW9uLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBhY3RpdmU6IGJvb2xlYW47XG4gICAgaW5mZXJlbmNlOiBTMlRJbmZlcmVuY2UuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHN0cmVhbWluZ1NlcnZlcjogU3RyZWFtaW5nU2VydmVyLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB2b2ljZUFjdGl2aXR5RGV0ZWN0aW9uOiBWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBwb3N0UHJvY2Vzc2luZzogUG9zdFByb2Nlc3NpbmcuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGxvZ2dpbmc6IExvZ2dpbmcuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5TMlREZXNjcmlwdGlvblxuICovXG5leHBvcnQgY2xhc3MgUzJURGVzY3JpcHRpb24gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LlMyVERlc2NyaXB0aW9uJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUzJURGVzY3JpcHRpb24oKTtcbiAgICBTMlREZXNjcmlwdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFMyVERlc2NyaXB0aW9uKSB7XG4gICAgX2luc3RhbmNlLmxhbmd1YWdlID0gX2luc3RhbmNlLmxhbmd1YWdlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5waXBlbGluZU93bmVyID0gX2luc3RhbmNlLnBpcGVsaW5lT3duZXIgfHwgJyc7XG4gICAgX2luc3RhbmNlLmRvbWFpbiA9IF9pbnN0YW5jZS5kb21haW4gfHwgJyc7XG4gICAgX2luc3RhbmNlLmNvbW1lbnRzID0gX2luc3RhbmNlLmNvbW1lbnRzIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogUzJURGVzY3JpcHRpb24sXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmxhbmd1YWdlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UucGlwZWxpbmVPd25lciA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmRvbWFpbiA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmNvbW1lbnRzID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTMlREZXNjcmlwdGlvbi5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFMyVERlc2NyaXB0aW9uLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5sYW5ndWFnZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGlwZWxpbmVPd25lcikge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UucGlwZWxpbmVPd25lcik7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZG9tYWluKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS5kb21haW4pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNvbW1lbnRzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDQsIF9pbnN0YW5jZS5jb21tZW50cyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbGFuZ3VhZ2U6IHN0cmluZztcbiAgcHJpdmF0ZSBfcGlwZWxpbmVPd25lcjogc3RyaW5nO1xuICBwcml2YXRlIF9kb21haW46IHN0cmluZztcbiAgcHJpdmF0ZSBfY29tbWVudHM6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFMyVERlc2NyaXB0aW9uIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFMyVERlc2NyaXB0aW9uLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhbmd1YWdlID0gX3ZhbHVlLmxhbmd1YWdlO1xuICAgIHRoaXMucGlwZWxpbmVPd25lciA9IF92YWx1ZS5waXBlbGluZU93bmVyO1xuICAgIHRoaXMuZG9tYWluID0gX3ZhbHVlLmRvbWFpbjtcbiAgICB0aGlzLmNvbW1lbnRzID0gX3ZhbHVlLmNvbW1lbnRzO1xuICAgIFMyVERlc2NyaXB0aW9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2U7XG4gIH1cbiAgc2V0IGxhbmd1YWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYW5ndWFnZSA9IHZhbHVlO1xuICB9XG4gIGdldCBwaXBlbGluZU93bmVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BpcGVsaW5lT3duZXI7XG4gIH1cbiAgc2V0IHBpcGVsaW5lT3duZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BpcGVsaW5lT3duZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZG9tYWluKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2RvbWFpbjtcbiAgfVxuICBzZXQgZG9tYWluKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kb21haW4gPSB2YWx1ZTtcbiAgfVxuICBnZXQgY29tbWVudHMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29tbWVudHM7XG4gIH1cbiAgc2V0IGNvbW1lbnRzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb21tZW50cyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFMyVERlc2NyaXB0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFMyVERlc2NyaXB0aW9uLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2UsXG4gICAgICBwaXBlbGluZU93bmVyOiB0aGlzLnBpcGVsaW5lT3duZXIsXG4gICAgICBkb21haW46IHRoaXMuZG9tYWluLFxuICAgICAgY29tbWVudHM6IHRoaXMuY29tbWVudHNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBTMlREZXNjcmlwdGlvbi5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlLFxuICAgICAgcGlwZWxpbmVPd25lcjogdGhpcy5waXBlbGluZU93bmVyLFxuICAgICAgZG9tYWluOiB0aGlzLmRvbWFpbixcbiAgICAgIGNvbW1lbnRzOiB0aGlzLmNvbW1lbnRzXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTMlREZXNjcmlwdGlvbiB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUzJURGVzY3JpcHRpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGxhbmd1YWdlOiBzdHJpbmc7XG4gICAgcGlwZWxpbmVPd25lcjogc3RyaW5nO1xuICAgIGRvbWFpbjogc3RyaW5nO1xuICAgIGNvbW1lbnRzOiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgUzJURGVzY3JpcHRpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGxhbmd1YWdlOiBzdHJpbmc7XG4gICAgcGlwZWxpbmVPd25lcjogc3RyaW5nO1xuICAgIGRvbWFpbjogc3RyaW5nO1xuICAgIGNvbW1lbnRzOiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LlMyVEluZmVyZW5jZVxuICovXG5leHBvcnQgY2xhc3MgUzJUSW5mZXJlbmNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5TMlRJbmZlcmVuY2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTMlRJbmZlcmVuY2UoKTtcbiAgICBTMlRJbmZlcmVuY2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTMlRJbmZlcmVuY2UpIHtcbiAgICBfaW5zdGFuY2UuYWNvdXN0aWNNb2RlbHMgPSBfaW5zdGFuY2UuYWNvdXN0aWNNb2RlbHMgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVscyA9IF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVscyB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmluZmVyZW5jZUJhY2tlbmQgPSBfaW5zdGFuY2UuaW5mZXJlbmNlQmFja2VuZCB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogUzJUSW5mZXJlbmNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5hY291c3RpY01vZGVscyA9IG5ldyBBY291c3RpY01vZGVscygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuYWNvdXN0aWNNb2RlbHMsXG4gICAgICAgICAgICBBY291c3RpY01vZGVscy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmxhbmd1YWdlTW9kZWxzID0gbmV3IExhbmd1YWdlTW9kZWxzKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVscyxcbiAgICAgICAgICAgIExhbmd1YWdlTW9kZWxzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuaW5mZXJlbmNlQmFja2VuZCA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFMyVEluZmVyZW5jZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFMyVEluZmVyZW5jZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5hY291c3RpY01vZGVscykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS5hY291c3RpY01vZGVscyBhcyBhbnksXG4gICAgICAgIEFjb3VzdGljTW9kZWxzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlTW9kZWxzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLmxhbmd1YWdlTW9kZWxzIGFzIGFueSxcbiAgICAgICAgTGFuZ3VhZ2VNb2RlbHMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuaW5mZXJlbmNlQmFja2VuZCkge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oMywgX2luc3RhbmNlLmluZmVyZW5jZUJhY2tlbmQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Fjb3VzdGljTW9kZWxzPzogQWNvdXN0aWNNb2RlbHM7XG4gIHByaXZhdGUgX2xhbmd1YWdlTW9kZWxzPzogTGFuZ3VhZ2VNb2RlbHM7XG4gIHByaXZhdGUgX2luZmVyZW5jZUJhY2tlbmQ6IEluZmVyZW5jZUJhY2tlbmQ7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTMlRJbmZlcmVuY2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UzJUSW5mZXJlbmNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmFjb3VzdGljTW9kZWxzID0gX3ZhbHVlLmFjb3VzdGljTW9kZWxzXG4gICAgICA/IG5ldyBBY291c3RpY01vZGVscyhfdmFsdWUuYWNvdXN0aWNNb2RlbHMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhbmd1YWdlTW9kZWxzID0gX3ZhbHVlLmxhbmd1YWdlTW9kZWxzXG4gICAgICA/IG5ldyBMYW5ndWFnZU1vZGVscyhfdmFsdWUubGFuZ3VhZ2VNb2RlbHMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmluZmVyZW5jZUJhY2tlbmQgPSBfdmFsdWUuaW5mZXJlbmNlQmFja2VuZDtcbiAgICBTMlRJbmZlcmVuY2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBhY291c3RpY01vZGVscygpOiBBY291c3RpY01vZGVscyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Fjb3VzdGljTW9kZWxzO1xuICB9XG4gIHNldCBhY291c3RpY01vZGVscyh2YWx1ZTogQWNvdXN0aWNNb2RlbHMgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hY291c3RpY01vZGVscyA9IHZhbHVlO1xuICB9XG4gIGdldCBsYW5ndWFnZU1vZGVscygpOiBMYW5ndWFnZU1vZGVscyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlTW9kZWxzO1xuICB9XG4gIHNldCBsYW5ndWFnZU1vZGVscyh2YWx1ZTogTGFuZ3VhZ2VNb2RlbHMgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZU1vZGVscyA9IHZhbHVlO1xuICB9XG4gIGdldCBpbmZlcmVuY2VCYWNrZW5kKCk6IEluZmVyZW5jZUJhY2tlbmQge1xuICAgIHJldHVybiB0aGlzLl9pbmZlcmVuY2VCYWNrZW5kO1xuICB9XG4gIHNldCBpbmZlcmVuY2VCYWNrZW5kKHZhbHVlOiBJbmZlcmVuY2VCYWNrZW5kKSB7XG4gICAgdGhpcy5faW5mZXJlbmNlQmFja2VuZCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFMyVEluZmVyZW5jZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBTMlRJbmZlcmVuY2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBhY291c3RpY01vZGVsczogdGhpcy5hY291c3RpY01vZGVsc1xuICAgICAgICA/IHRoaXMuYWNvdXN0aWNNb2RlbHMudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGxhbmd1YWdlTW9kZWxzOiB0aGlzLmxhbmd1YWdlTW9kZWxzXG4gICAgICAgID8gdGhpcy5sYW5ndWFnZU1vZGVscy50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgaW5mZXJlbmNlQmFja2VuZDogdGhpcy5pbmZlcmVuY2VCYWNrZW5kXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogUzJUSW5mZXJlbmNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWNvdXN0aWNNb2RlbHM6IHRoaXMuYWNvdXN0aWNNb2RlbHNcbiAgICAgICAgPyB0aGlzLmFjb3VzdGljTW9kZWxzLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGxhbmd1YWdlTW9kZWxzOiB0aGlzLmxhbmd1YWdlTW9kZWxzXG4gICAgICAgID8gdGhpcy5sYW5ndWFnZU1vZGVscy50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBpbmZlcmVuY2VCYWNrZW5kOlxuICAgICAgICBJbmZlcmVuY2VCYWNrZW5kW1xuICAgICAgICAgIHRoaXMuaW5mZXJlbmNlQmFja2VuZCA9PT0gbnVsbCB8fCB0aGlzLmluZmVyZW5jZUJhY2tlbmQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IHRoaXMuaW5mZXJlbmNlQmFja2VuZFxuICAgICAgICBdXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTMlRJbmZlcmVuY2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFMyVEluZmVyZW5jZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgYWNvdXN0aWNNb2RlbHM/OiBBY291c3RpY01vZGVscy5Bc09iamVjdDtcbiAgICBsYW5ndWFnZU1vZGVscz86IExhbmd1YWdlTW9kZWxzLkFzT2JqZWN0O1xuICAgIGluZmVyZW5jZUJhY2tlbmQ6IEluZmVyZW5jZUJhY2tlbmQ7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgUzJUSW5mZXJlbmNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBhY291c3RpY01vZGVsczogQWNvdXN0aWNNb2RlbHMuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGxhbmd1YWdlTW9kZWxzOiBMYW5ndWFnZU1vZGVscy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgaW5mZXJlbmNlQmFja2VuZDogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5BY291c3RpY01vZGVsc1xuICovXG5leHBvcnQgY2xhc3MgQWNvdXN0aWNNb2RlbHMgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LkFjb3VzdGljTW9kZWxzJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQWNvdXN0aWNNb2RlbHMoKTtcbiAgICBBY291c3RpY01vZGVscy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEFjb3VzdGljTW9kZWxzKSB7XG4gICAgX2luc3RhbmNlLnR5cGUgPSBfaW5zdGFuY2UudHlwZSB8fCAnJztcbiAgICBfaW5zdGFuY2UucXVhcnR6bmV0ID0gX2luc3RhbmNlLnF1YXJ0em5ldCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnF1YXJ0em5ldFRyaXRvbiA9IF9pbnN0YW5jZS5xdWFydHpuZXRUcml0b24gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS53YXYydmVjID0gX2luc3RhbmNlLndhdjJ2ZWMgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS53YXYydmVjVHJpdG9uID0gX2luc3RhbmNlLndhdjJ2ZWNUcml0b24gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS53aGlzcGVyID0gX2luc3RhbmNlLndoaXNwZXIgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS53aGlzcGVyVHJpdG9uID0gX2luc3RhbmNlLndoaXNwZXJUcml0b24gfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQWNvdXN0aWNNb2RlbHMsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnR5cGUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5xdWFydHpuZXQgPSBuZXcgUXVhcnR6bmV0KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5xdWFydHpuZXQsXG4gICAgICAgICAgICBRdWFydHpuZXQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5xdWFydHpuZXRUcml0b24gPSBuZXcgUXVhcnR6bmV0VHJpdG9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5xdWFydHpuZXRUcml0b24sXG4gICAgICAgICAgICBRdWFydHpuZXRUcml0b24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS53YXYydmVjID0gbmV3IFdhdjJWZWMoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLndhdjJ2ZWMsXG4gICAgICAgICAgICBXYXYyVmVjLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2Uud2F2MnZlY1RyaXRvbiA9IG5ldyBXYXYyVmVjVHJpdG9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS53YXYydmVjVHJpdG9uLFxuICAgICAgICAgICAgV2F2MlZlY1RyaXRvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLndoaXNwZXIgPSBuZXcgV2hpc3BlcigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uud2hpc3BlcixcbiAgICAgICAgICAgIFdoaXNwZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS53aGlzcGVyVHJpdG9uID0gbmV3IFdoaXNwZXJUcml0b24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLndoaXNwZXJUcml0b24sXG4gICAgICAgICAgICBXaGlzcGVyVHJpdG9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBY291c3RpY01vZGVscy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEFjb3VzdGljTW9kZWxzLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnR5cGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnR5cGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnF1YXJ0em5ldCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIF9pbnN0YW5jZS5xdWFydHpuZXQgYXMgYW55LFxuICAgICAgICBRdWFydHpuZXQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucXVhcnR6bmV0VHJpdG9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgX2luc3RhbmNlLnF1YXJ0em5ldFRyaXRvbiBhcyBhbnksXG4gICAgICAgIFF1YXJ0em5ldFRyaXRvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS53YXYydmVjKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgX2luc3RhbmNlLndhdjJ2ZWMgYXMgYW55LFxuICAgICAgICBXYXYyVmVjLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLndhdjJ2ZWNUcml0b24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA1LFxuICAgICAgICBfaW5zdGFuY2Uud2F2MnZlY1RyaXRvbiBhcyBhbnksXG4gICAgICAgIFdhdjJWZWNUcml0b24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uud2hpc3Blcikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDYsXG4gICAgICAgIF9pbnN0YW5jZS53aGlzcGVyIGFzIGFueSxcbiAgICAgICAgV2hpc3Blci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS53aGlzcGVyVHJpdG9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNyxcbiAgICAgICAgX2luc3RhbmNlLndoaXNwZXJUcml0b24gYXMgYW55LFxuICAgICAgICBXaGlzcGVyVHJpdG9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3R5cGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfcXVhcnR6bmV0PzogUXVhcnR6bmV0O1xuICBwcml2YXRlIF9xdWFydHpuZXRUcml0b24/OiBRdWFydHpuZXRUcml0b247XG4gIHByaXZhdGUgX3dhdjJ2ZWM/OiBXYXYyVmVjO1xuICBwcml2YXRlIF93YXYydmVjVHJpdG9uPzogV2F2MlZlY1RyaXRvbjtcbiAgcHJpdmF0ZSBfd2hpc3Blcj86IFdoaXNwZXI7XG4gIHByaXZhdGUgX3doaXNwZXJUcml0b24/OiBXaGlzcGVyVHJpdG9uO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQWNvdXN0aWNNb2RlbHMgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QWNvdXN0aWNNb2RlbHMuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudHlwZSA9IF92YWx1ZS50eXBlO1xuICAgIHRoaXMucXVhcnR6bmV0ID0gX3ZhbHVlLnF1YXJ0em5ldFxuICAgICAgPyBuZXcgUXVhcnR6bmV0KF92YWx1ZS5xdWFydHpuZXQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnF1YXJ0em5ldFRyaXRvbiA9IF92YWx1ZS5xdWFydHpuZXRUcml0b25cbiAgICAgID8gbmV3IFF1YXJ0em5ldFRyaXRvbihfdmFsdWUucXVhcnR6bmV0VHJpdG9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy53YXYydmVjID0gX3ZhbHVlLndhdjJ2ZWMgPyBuZXcgV2F2MlZlYyhfdmFsdWUud2F2MnZlYykgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy53YXYydmVjVHJpdG9uID0gX3ZhbHVlLndhdjJ2ZWNUcml0b25cbiAgICAgID8gbmV3IFdhdjJWZWNUcml0b24oX3ZhbHVlLndhdjJ2ZWNUcml0b24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLndoaXNwZXIgPSBfdmFsdWUud2hpc3BlciA/IG5ldyBXaGlzcGVyKF92YWx1ZS53aGlzcGVyKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLndoaXNwZXJUcml0b24gPSBfdmFsdWUud2hpc3BlclRyaXRvblxuICAgICAgPyBuZXcgV2hpc3BlclRyaXRvbihfdmFsdWUud2hpc3BlclRyaXRvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIEFjb3VzdGljTW9kZWxzLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG4gIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHF1YXJ0em5ldCgpOiBRdWFydHpuZXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9xdWFydHpuZXQ7XG4gIH1cbiAgc2V0IHF1YXJ0em5ldCh2YWx1ZTogUXVhcnR6bmV0IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcXVhcnR6bmV0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHF1YXJ0em5ldFRyaXRvbigpOiBRdWFydHpuZXRUcml0b24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9xdWFydHpuZXRUcml0b247XG4gIH1cbiAgc2V0IHF1YXJ0em5ldFRyaXRvbih2YWx1ZTogUXVhcnR6bmV0VHJpdG9uIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcXVhcnR6bmV0VHJpdG9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHdhdjJ2ZWMoKTogV2F2MlZlYyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3dhdjJ2ZWM7XG4gIH1cbiAgc2V0IHdhdjJ2ZWModmFsdWU6IFdhdjJWZWMgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl93YXYydmVjID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHdhdjJ2ZWNUcml0b24oKTogV2F2MlZlY1RyaXRvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3dhdjJ2ZWNUcml0b247XG4gIH1cbiAgc2V0IHdhdjJ2ZWNUcml0b24odmFsdWU6IFdhdjJWZWNUcml0b24gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl93YXYydmVjVHJpdG9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHdoaXNwZXIoKTogV2hpc3BlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3doaXNwZXI7XG4gIH1cbiAgc2V0IHdoaXNwZXIodmFsdWU6IFdoaXNwZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl93aGlzcGVyID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHdoaXNwZXJUcml0b24oKTogV2hpc3BlclRyaXRvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3doaXNwZXJUcml0b247XG4gIH1cbiAgc2V0IHdoaXNwZXJUcml0b24odmFsdWU6IFdoaXNwZXJUcml0b24gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl93aGlzcGVyVHJpdG9uID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQWNvdXN0aWNNb2RlbHMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQWNvdXN0aWNNb2RlbHMuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBxdWFydHpuZXQ6IHRoaXMucXVhcnR6bmV0ID8gdGhpcy5xdWFydHpuZXQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHF1YXJ0em5ldFRyaXRvbjogdGhpcy5xdWFydHpuZXRUcml0b25cbiAgICAgICAgPyB0aGlzLnF1YXJ0em5ldFRyaXRvbi50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgd2F2MnZlYzogdGhpcy53YXYydmVjID8gdGhpcy53YXYydmVjLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICB3YXYydmVjVHJpdG9uOiB0aGlzLndhdjJ2ZWNUcml0b25cbiAgICAgICAgPyB0aGlzLndhdjJ2ZWNUcml0b24udG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHdoaXNwZXI6IHRoaXMud2hpc3BlciA/IHRoaXMud2hpc3Blci50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgd2hpc3BlclRyaXRvbjogdGhpcy53aGlzcGVyVHJpdG9uXG4gICAgICAgID8gdGhpcy53aGlzcGVyVHJpdG9uLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBBY291c3RpY01vZGVscy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIHF1YXJ0em5ldDogdGhpcy5xdWFydHpuZXQgPyB0aGlzLnF1YXJ0em5ldC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBxdWFydHpuZXRUcml0b246IHRoaXMucXVhcnR6bmV0VHJpdG9uXG4gICAgICAgID8gdGhpcy5xdWFydHpuZXRUcml0b24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgd2F2MnZlYzogdGhpcy53YXYydmVjID8gdGhpcy53YXYydmVjLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHdhdjJ2ZWNUcml0b246IHRoaXMud2F2MnZlY1RyaXRvblxuICAgICAgICA/IHRoaXMud2F2MnZlY1RyaXRvbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICB3aGlzcGVyOiB0aGlzLndoaXNwZXIgPyB0aGlzLndoaXNwZXIudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgd2hpc3BlclRyaXRvbjogdGhpcy53aGlzcGVyVHJpdG9uXG4gICAgICAgID8gdGhpcy53aGlzcGVyVHJpdG9uLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQWNvdXN0aWNNb2RlbHMge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEFjb3VzdGljTW9kZWxzXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgcXVhcnR6bmV0PzogUXVhcnR6bmV0LkFzT2JqZWN0O1xuICAgIHF1YXJ0em5ldFRyaXRvbj86IFF1YXJ0em5ldFRyaXRvbi5Bc09iamVjdDtcbiAgICB3YXYydmVjPzogV2F2MlZlYy5Bc09iamVjdDtcbiAgICB3YXYydmVjVHJpdG9uPzogV2F2MlZlY1RyaXRvbi5Bc09iamVjdDtcbiAgICB3aGlzcGVyPzogV2hpc3Blci5Bc09iamVjdDtcbiAgICB3aGlzcGVyVHJpdG9uPzogV2hpc3BlclRyaXRvbi5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBBY291c3RpY01vZGVsc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIHF1YXJ0em5ldDogUXVhcnR6bmV0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBxdWFydHpuZXRUcml0b246IFF1YXJ0em5ldFRyaXRvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgd2F2MnZlYzogV2F2MlZlYy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgd2F2MnZlY1RyaXRvbjogV2F2MlZlY1RyaXRvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgd2hpc3BlcjogV2hpc3Blci5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgd2hpc3BlclRyaXRvbjogV2hpc3BlclRyaXRvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LldoaXNwZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFdoaXNwZXIgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LldoaXNwZXInO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBXaGlzcGVyKCk7XG4gICAgV2hpc3Blci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFdoaXNwZXIpIHtcbiAgICBfaW5zdGFuY2UubW9kZWxQYXRoID0gX2luc3RhbmNlLm1vZGVsUGF0aCB8fCAnJztcbiAgICBfaW5zdGFuY2UudXNlR3B1ID0gX2luc3RhbmNlLnVzZUdwdSB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2UgPSBfaW5zdGFuY2UubGFuZ3VhZ2UgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBXaGlzcGVyLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5tb2RlbFBhdGggPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS51c2VHcHUgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UubGFuZ3VhZ2UgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFdoaXNwZXIucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBXaGlzcGVyLCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLm1vZGVsUGF0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UubW9kZWxQYXRoKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS51c2VHcHUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDIsIF9pbnN0YW5jZS51c2VHcHUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS5sYW5ndWFnZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbW9kZWxQYXRoOiBzdHJpbmc7XG4gIHByaXZhdGUgX3VzZUdwdTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2U6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFdoaXNwZXIgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8V2hpc3Blci5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5tb2RlbFBhdGggPSBfdmFsdWUubW9kZWxQYXRoO1xuICAgIHRoaXMudXNlR3B1ID0gX3ZhbHVlLnVzZUdwdTtcbiAgICB0aGlzLmxhbmd1YWdlID0gX3ZhbHVlLmxhbmd1YWdlO1xuICAgIFdoaXNwZXIucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBtb2RlbFBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWxQYXRoO1xuICB9XG4gIHNldCBtb2RlbFBhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGVsUGF0aCA9IHZhbHVlO1xuICB9XG4gIGdldCB1c2VHcHUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZUdwdTtcbiAgfVxuICBzZXQgdXNlR3B1KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdXNlR3B1ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlO1xuICB9XG4gIHNldCBsYW5ndWFnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBXaGlzcGVyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFdoaXNwZXIuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBtb2RlbFBhdGg6IHRoaXMubW9kZWxQYXRoLFxuICAgICAgdXNlR3B1OiB0aGlzLnVzZUdwdSxcbiAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogV2hpc3Blci5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZGVsUGF0aDogdGhpcy5tb2RlbFBhdGgsXG4gICAgICB1c2VHcHU6IHRoaXMudXNlR3B1LFxuICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2VcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFdoaXNwZXIge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFdoaXNwZXJcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIG1vZGVsUGF0aDogc3RyaW5nO1xuICAgIHVzZUdwdTogYm9vbGVhbjtcbiAgICBsYW5ndWFnZTogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFdoaXNwZXJcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIG1vZGVsUGF0aDogc3RyaW5nO1xuICAgIHVzZUdwdTogYm9vbGVhbjtcbiAgICBsYW5ndWFnZTogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5XaGlzcGVyVHJpdG9uXG4gKi9cbmV4cG9ydCBjbGFzcyBXaGlzcGVyVHJpdG9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5XaGlzcGVyVHJpdG9uJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgV2hpc3BlclRyaXRvbigpO1xuICAgIFdoaXNwZXJUcml0b24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBXaGlzcGVyVHJpdG9uKSB7XG4gICAgX2luc3RhbmNlLnByb2Nlc3NvclBhdGggPSBfaW5zdGFuY2UucHJvY2Vzc29yUGF0aCB8fCAnJztcbiAgICBfaW5zdGFuY2UudHJpdG9uTW9kZWxOYW1lID0gX2luc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UudHJpdG9uTW9kZWxWZXJzaW9uID0gX2luc3RhbmNlLnRyaXRvbk1vZGVsVmVyc2lvbiB8fCAnJztcbiAgICBfaW5zdGFuY2UuY2hlY2tTdGF0dXNUaW1lb3V0ID0gX2luc3RhbmNlLmNoZWNrU3RhdHVzVGltZW91dCB8fCAnMCc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBXaGlzcGVyVHJpdG9uLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wcm9jZXNzb3JQYXRoID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UudHJpdG9uTW9kZWxOYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UudHJpdG9uTW9kZWxWZXJzaW9uID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuY2hlY2tTdGF0dXNUaW1lb3V0ID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFdoaXNwZXJUcml0b24ucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBXaGlzcGVyVHJpdG9uLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnByb2Nlc3NvclBhdGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnByb2Nlc3NvclBhdGgpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UudHJpdG9uTW9kZWxOYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50cml0b25Nb2RlbFZlcnNpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLnRyaXRvbk1vZGVsVmVyc2lvbik7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2hlY2tTdGF0dXNUaW1lb3V0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoNCwgX2luc3RhbmNlLmNoZWNrU3RhdHVzVGltZW91dCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcHJvY2Vzc29yUGF0aDogc3RyaW5nO1xuICBwcml2YXRlIF90cml0b25Nb2RlbE5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfdHJpdG9uTW9kZWxWZXJzaW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NoZWNrU3RhdHVzVGltZW91dDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgV2hpc3BlclRyaXRvbiB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxXaGlzcGVyVHJpdG9uLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnByb2Nlc3NvclBhdGggPSBfdmFsdWUucHJvY2Vzc29yUGF0aDtcbiAgICB0aGlzLnRyaXRvbk1vZGVsTmFtZSA9IF92YWx1ZS50cml0b25Nb2RlbE5hbWU7XG4gICAgdGhpcy50cml0b25Nb2RlbFZlcnNpb24gPSBfdmFsdWUudHJpdG9uTW9kZWxWZXJzaW9uO1xuICAgIHRoaXMuY2hlY2tTdGF0dXNUaW1lb3V0ID0gX3ZhbHVlLmNoZWNrU3RhdHVzVGltZW91dDtcbiAgICBXaGlzcGVyVHJpdG9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcHJvY2Vzc29yUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wcm9jZXNzb3JQYXRoO1xuICB9XG4gIHNldCBwcm9jZXNzb3JQYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcm9jZXNzb3JQYXRoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRyaXRvbk1vZGVsTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90cml0b25Nb2RlbE5hbWU7XG4gIH1cbiAgc2V0IHRyaXRvbk1vZGVsTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHJpdG9uTW9kZWxOYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRyaXRvbk1vZGVsVmVyc2lvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90cml0b25Nb2RlbFZlcnNpb247XG4gIH1cbiAgc2V0IHRyaXRvbk1vZGVsVmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHJpdG9uTW9kZWxWZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNoZWNrU3RhdHVzVGltZW91dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jaGVja1N0YXR1c1RpbWVvdXQ7XG4gIH1cbiAgc2V0IGNoZWNrU3RhdHVzVGltZW91dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2hlY2tTdGF0dXNUaW1lb3V0ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgV2hpc3BlclRyaXRvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBXaGlzcGVyVHJpdG9uLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvY2Vzc29yUGF0aDogdGhpcy5wcm9jZXNzb3JQYXRoLFxuICAgICAgdHJpdG9uTW9kZWxOYW1lOiB0aGlzLnRyaXRvbk1vZGVsTmFtZSxcbiAgICAgIHRyaXRvbk1vZGVsVmVyc2lvbjogdGhpcy50cml0b25Nb2RlbFZlcnNpb24sXG4gICAgICBjaGVja1N0YXR1c1RpbWVvdXQ6IHRoaXMuY2hlY2tTdGF0dXNUaW1lb3V0XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogV2hpc3BlclRyaXRvbi5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2Nlc3NvclBhdGg6IHRoaXMucHJvY2Vzc29yUGF0aCxcbiAgICAgIHRyaXRvbk1vZGVsTmFtZTogdGhpcy50cml0b25Nb2RlbE5hbWUsXG4gICAgICB0cml0b25Nb2RlbFZlcnNpb246IHRoaXMudHJpdG9uTW9kZWxWZXJzaW9uLFxuICAgICAgY2hlY2tTdGF0dXNUaW1lb3V0OiB0aGlzLmNoZWNrU3RhdHVzVGltZW91dFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgV2hpc3BlclRyaXRvbiB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgV2hpc3BlclRyaXRvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcHJvY2Vzc29yUGF0aDogc3RyaW5nO1xuICAgIHRyaXRvbk1vZGVsTmFtZTogc3RyaW5nO1xuICAgIHRyaXRvbk1vZGVsVmVyc2lvbjogc3RyaW5nO1xuICAgIGNoZWNrU3RhdHVzVGltZW91dDogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFdoaXNwZXJUcml0b25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHByb2Nlc3NvclBhdGg6IHN0cmluZztcbiAgICB0cml0b25Nb2RlbE5hbWU6IHN0cmluZztcbiAgICB0cml0b25Nb2RlbFZlcnNpb246IHN0cmluZztcbiAgICBjaGVja1N0YXR1c1RpbWVvdXQ6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuV2F2MlZlY1xuICovXG5leHBvcnQgY2xhc3MgV2F2MlZlYyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuV2F2MlZlYyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFdhdjJWZWMoKTtcbiAgICBXYXYyVmVjLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogV2F2MlZlYykge1xuICAgIF9pbnN0YW5jZS5tb2RlbFBhdGggPSBfaW5zdGFuY2UubW9kZWxQYXRoIHx8ICcnO1xuICAgIF9pbnN0YW5jZS51c2VHcHUgPSBfaW5zdGFuY2UudXNlR3B1IHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogV2F2MlZlYyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UubW9kZWxQYXRoID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UudXNlR3B1ID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgV2F2MlZlYy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IFdhdjJWZWMsIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2UubW9kZWxQYXRoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5tb2RlbFBhdGgpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnVzZUdwdSkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMiwgX2luc3RhbmNlLnVzZUdwdSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbW9kZWxQYXRoOiBzdHJpbmc7XG4gIHByaXZhdGUgX3VzZUdwdTogYm9vbGVhbjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFdhdjJWZWMgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8V2F2MlZlYy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5tb2RlbFBhdGggPSBfdmFsdWUubW9kZWxQYXRoO1xuICAgIHRoaXMudXNlR3B1ID0gX3ZhbHVlLnVzZUdwdTtcbiAgICBXYXYyVmVjLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbW9kZWxQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVsUGF0aDtcbiAgfVxuICBzZXQgbW9kZWxQYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RlbFBhdGggPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXNlR3B1KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl91c2VHcHU7XG4gIH1cbiAgc2V0IHVzZUdwdSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3VzZUdwdSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFdhdjJWZWMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogV2F2MlZlYy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZGVsUGF0aDogdGhpcy5tb2RlbFBhdGgsXG4gICAgICB1c2VHcHU6IHRoaXMudXNlR3B1XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogV2F2MlZlYy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZGVsUGF0aDogdGhpcy5tb2RlbFBhdGgsXG4gICAgICB1c2VHcHU6IHRoaXMudXNlR3B1XG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBXYXYyVmVjIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBXYXYyVmVjXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBtb2RlbFBhdGg6IHN0cmluZztcbiAgICB1c2VHcHU6IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgV2F2MlZlY1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbW9kZWxQYXRoOiBzdHJpbmc7XG4gICAgdXNlR3B1OiBib29sZWFuO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5XYXYyVmVjVHJpdG9uXG4gKi9cbmV4cG9ydCBjbGFzcyBXYXYyVmVjVHJpdG9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5XYXYyVmVjVHJpdG9uJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgV2F2MlZlY1RyaXRvbigpO1xuICAgIFdhdjJWZWNUcml0b24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBXYXYyVmVjVHJpdG9uKSB7XG4gICAgX2luc3RhbmNlLnByb2Nlc3NvclBhdGggPSBfaW5zdGFuY2UucHJvY2Vzc29yUGF0aCB8fCAnJztcbiAgICBfaW5zdGFuY2UudHJpdG9uTW9kZWxOYW1lID0gX2luc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UudHJpdG9uTW9kZWxWZXJzaW9uID0gX2luc3RhbmNlLnRyaXRvbk1vZGVsVmVyc2lvbiB8fCAnJztcbiAgICBfaW5zdGFuY2UuY2hlY2tTdGF0dXNUaW1lb3V0ID0gX2luc3RhbmNlLmNoZWNrU3RhdHVzVGltZW91dCB8fCAnMCc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBXYXYyVmVjVHJpdG9uLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wcm9jZXNzb3JQYXRoID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UudHJpdG9uTW9kZWxOYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UudHJpdG9uTW9kZWxWZXJzaW9uID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuY2hlY2tTdGF0dXNUaW1lb3V0ID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFdhdjJWZWNUcml0b24ucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBXYXYyVmVjVHJpdG9uLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnByb2Nlc3NvclBhdGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnByb2Nlc3NvclBhdGgpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UudHJpdG9uTW9kZWxOYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50cml0b25Nb2RlbFZlcnNpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLnRyaXRvbk1vZGVsVmVyc2lvbik7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2hlY2tTdGF0dXNUaW1lb3V0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoNCwgX2luc3RhbmNlLmNoZWNrU3RhdHVzVGltZW91dCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcHJvY2Vzc29yUGF0aDogc3RyaW5nO1xuICBwcml2YXRlIF90cml0b25Nb2RlbE5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfdHJpdG9uTW9kZWxWZXJzaW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NoZWNrU3RhdHVzVGltZW91dDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgV2F2MlZlY1RyaXRvbiB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxXYXYyVmVjVHJpdG9uLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnByb2Nlc3NvclBhdGggPSBfdmFsdWUucHJvY2Vzc29yUGF0aDtcbiAgICB0aGlzLnRyaXRvbk1vZGVsTmFtZSA9IF92YWx1ZS50cml0b25Nb2RlbE5hbWU7XG4gICAgdGhpcy50cml0b25Nb2RlbFZlcnNpb24gPSBfdmFsdWUudHJpdG9uTW9kZWxWZXJzaW9uO1xuICAgIHRoaXMuY2hlY2tTdGF0dXNUaW1lb3V0ID0gX3ZhbHVlLmNoZWNrU3RhdHVzVGltZW91dDtcbiAgICBXYXYyVmVjVHJpdG9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcHJvY2Vzc29yUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wcm9jZXNzb3JQYXRoO1xuICB9XG4gIHNldCBwcm9jZXNzb3JQYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcm9jZXNzb3JQYXRoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRyaXRvbk1vZGVsTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90cml0b25Nb2RlbE5hbWU7XG4gIH1cbiAgc2V0IHRyaXRvbk1vZGVsTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHJpdG9uTW9kZWxOYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRyaXRvbk1vZGVsVmVyc2lvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90cml0b25Nb2RlbFZlcnNpb247XG4gIH1cbiAgc2V0IHRyaXRvbk1vZGVsVmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHJpdG9uTW9kZWxWZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNoZWNrU3RhdHVzVGltZW91dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jaGVja1N0YXR1c1RpbWVvdXQ7XG4gIH1cbiAgc2V0IGNoZWNrU3RhdHVzVGltZW91dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2hlY2tTdGF0dXNUaW1lb3V0ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgV2F2MlZlY1RyaXRvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBXYXYyVmVjVHJpdG9uLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvY2Vzc29yUGF0aDogdGhpcy5wcm9jZXNzb3JQYXRoLFxuICAgICAgdHJpdG9uTW9kZWxOYW1lOiB0aGlzLnRyaXRvbk1vZGVsTmFtZSxcbiAgICAgIHRyaXRvbk1vZGVsVmVyc2lvbjogdGhpcy50cml0b25Nb2RlbFZlcnNpb24sXG4gICAgICBjaGVja1N0YXR1c1RpbWVvdXQ6IHRoaXMuY2hlY2tTdGF0dXNUaW1lb3V0XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogV2F2MlZlY1RyaXRvbi5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2Nlc3NvclBhdGg6IHRoaXMucHJvY2Vzc29yUGF0aCxcbiAgICAgIHRyaXRvbk1vZGVsTmFtZTogdGhpcy50cml0b25Nb2RlbE5hbWUsXG4gICAgICB0cml0b25Nb2RlbFZlcnNpb246IHRoaXMudHJpdG9uTW9kZWxWZXJzaW9uLFxuICAgICAgY2hlY2tTdGF0dXNUaW1lb3V0OiB0aGlzLmNoZWNrU3RhdHVzVGltZW91dFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgV2F2MlZlY1RyaXRvbiB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgV2F2MlZlY1RyaXRvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcHJvY2Vzc29yUGF0aDogc3RyaW5nO1xuICAgIHRyaXRvbk1vZGVsTmFtZTogc3RyaW5nO1xuICAgIHRyaXRvbk1vZGVsVmVyc2lvbjogc3RyaW5nO1xuICAgIGNoZWNrU3RhdHVzVGltZW91dDogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFdhdjJWZWNUcml0b25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHByb2Nlc3NvclBhdGg6IHN0cmluZztcbiAgICB0cml0b25Nb2RlbE5hbWU6IHN0cmluZztcbiAgICB0cml0b25Nb2RlbFZlcnNpb246IHN0cmluZztcbiAgICBjaGVja1N0YXR1c1RpbWVvdXQ6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuUXVhcnR6bmV0XG4gKi9cbmV4cG9ydCBjbGFzcyBRdWFydHpuZXQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LlF1YXJ0em5ldCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFF1YXJ0em5ldCgpO1xuICAgIFF1YXJ0em5ldC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFF1YXJ0em5ldCkge1xuICAgIF9pbnN0YW5jZS5jb25maWdQYXRoID0gX2luc3RhbmNlLmNvbmZpZ1BhdGggfHwgJyc7XG4gICAgX2luc3RhbmNlLmxvYWRUeXBlID0gX2luc3RhbmNlLmxvYWRUeXBlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5wdEZpbGVzID0gX2luc3RhbmNlLnB0RmlsZXMgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5ja3B0RmlsZSA9IF9pbnN0YW5jZS5ja3B0RmlsZSB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnVzZUdwdSA9IF9pbnN0YW5jZS51c2VHcHUgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBRdWFydHpuZXQsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmNvbmZpZ1BhdGggPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5sb2FkVHlwZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnB0RmlsZXMgPSBuZXcgUHRGaWxlcygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UucHRGaWxlcyxcbiAgICAgICAgICAgIFB0RmlsZXMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5ja3B0RmlsZSA9IG5ldyBDa3B0RmlsZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY2twdEZpbGUsXG4gICAgICAgICAgICBDa3B0RmlsZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLnVzZUdwdSA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFF1YXJ0em5ldC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IFF1YXJ0em5ldCwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5jb25maWdQYXRoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5jb25maWdQYXRoKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sb2FkVHlwZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UubG9hZFR5cGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnB0RmlsZXMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBfaW5zdGFuY2UucHRGaWxlcyBhcyBhbnksXG4gICAgICAgIFB0RmlsZXMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2twdEZpbGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBfaW5zdGFuY2UuY2twdEZpbGUgYXMgYW55LFxuICAgICAgICBDa3B0RmlsZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS51c2VHcHUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDUsIF9pbnN0YW5jZS51c2VHcHUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbmZpZ1BhdGg6IHN0cmluZztcbiAgcHJpdmF0ZSBfbG9hZFR5cGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfcHRGaWxlcz86IFB0RmlsZXM7XG4gIHByaXZhdGUgX2NrcHRGaWxlPzogQ2twdEZpbGU7XG4gIHByaXZhdGUgX3VzZUdwdTogYm9vbGVhbjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFF1YXJ0em5ldCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxRdWFydHpuZXQuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuY29uZmlnUGF0aCA9IF92YWx1ZS5jb25maWdQYXRoO1xuICAgIHRoaXMubG9hZFR5cGUgPSBfdmFsdWUubG9hZFR5cGU7XG4gICAgdGhpcy5wdEZpbGVzID0gX3ZhbHVlLnB0RmlsZXMgPyBuZXcgUHRGaWxlcyhfdmFsdWUucHRGaWxlcykgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5ja3B0RmlsZSA9IF92YWx1ZS5ja3B0RmlsZSA/IG5ldyBDa3B0RmlsZShfdmFsdWUuY2twdEZpbGUpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMudXNlR3B1ID0gX3ZhbHVlLnVzZUdwdTtcbiAgICBRdWFydHpuZXQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBjb25maWdQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZ1BhdGg7XG4gIH1cbiAgc2V0IGNvbmZpZ1BhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbmZpZ1BhdGggPSB2YWx1ZTtcbiAgfVxuICBnZXQgbG9hZFR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZFR5cGU7XG4gIH1cbiAgc2V0IGxvYWRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2FkVHlwZSA9IHZhbHVlO1xuICB9XG4gIGdldCBwdEZpbGVzKCk6IFB0RmlsZXMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wdEZpbGVzO1xuICB9XG4gIHNldCBwdEZpbGVzKHZhbHVlOiBQdEZpbGVzIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcHRGaWxlcyA9IHZhbHVlO1xuICB9XG4gIGdldCBja3B0RmlsZSgpOiBDa3B0RmlsZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NrcHRGaWxlO1xuICB9XG4gIHNldCBja3B0RmlsZSh2YWx1ZTogQ2twdEZpbGUgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9ja3B0RmlsZSA9IHZhbHVlO1xuICB9XG4gIGdldCB1c2VHcHUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZUdwdTtcbiAgfVxuICBzZXQgdXNlR3B1KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdXNlR3B1ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUXVhcnR6bmV0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFF1YXJ0em5ldC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ1BhdGg6IHRoaXMuY29uZmlnUGF0aCxcbiAgICAgIGxvYWRUeXBlOiB0aGlzLmxvYWRUeXBlLFxuICAgICAgcHRGaWxlczogdGhpcy5wdEZpbGVzID8gdGhpcy5wdEZpbGVzLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBja3B0RmlsZTogdGhpcy5ja3B0RmlsZSA/IHRoaXMuY2twdEZpbGUudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHVzZUdwdTogdGhpcy51c2VHcHVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBRdWFydHpuZXQuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWdQYXRoOiB0aGlzLmNvbmZpZ1BhdGgsXG4gICAgICBsb2FkVHlwZTogdGhpcy5sb2FkVHlwZSxcbiAgICAgIHB0RmlsZXM6IHRoaXMucHRGaWxlcyA/IHRoaXMucHRGaWxlcy50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBja3B0RmlsZTogdGhpcy5ja3B0RmlsZSA/IHRoaXMuY2twdEZpbGUudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgdXNlR3B1OiB0aGlzLnVzZUdwdVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUXVhcnR6bmV0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBRdWFydHpuZXRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGNvbmZpZ1BhdGg6IHN0cmluZztcbiAgICBsb2FkVHlwZTogc3RyaW5nO1xuICAgIHB0RmlsZXM/OiBQdEZpbGVzLkFzT2JqZWN0O1xuICAgIGNrcHRGaWxlPzogQ2twdEZpbGUuQXNPYmplY3Q7XG4gICAgdXNlR3B1OiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFF1YXJ0em5ldFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgY29uZmlnUGF0aDogc3RyaW5nO1xuICAgIGxvYWRUeXBlOiBzdHJpbmc7XG4gICAgcHRGaWxlczogUHRGaWxlcy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgY2twdEZpbGU6IENrcHRGaWxlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB1c2VHcHU6IGJvb2xlYW47XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LlB0RmlsZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFB0RmlsZXMgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LlB0RmlsZXMnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBQdEZpbGVzKCk7XG4gICAgUHRGaWxlcy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFB0RmlsZXMpIHtcbiAgICBfaW5zdGFuY2UucGF0aCA9IF9pbnN0YW5jZS5wYXRoIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5zdGVwID0gX2luc3RhbmNlLnN0ZXAgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBQdEZpbGVzLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXRoID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3RlcCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUHRGaWxlcy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IFB0RmlsZXMsIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2UucGF0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucGF0aCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3RlcCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2Uuc3RlcCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGF0aDogc3RyaW5nO1xuICBwcml2YXRlIF9zdGVwOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBQdEZpbGVzIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFB0RmlsZXMuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGF0aCA9IF92YWx1ZS5wYXRoO1xuICAgIHRoaXMuc3RlcCA9IF92YWx1ZS5zdGVwO1xuICAgIFB0RmlsZXMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdGg7XG4gIH1cbiAgc2V0IHBhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhdGggPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3RlcCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zdGVwO1xuICB9XG4gIHNldCBzdGVwKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGVwID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUHRGaWxlcy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBQdEZpbGVzLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgc3RlcDogdGhpcy5zdGVwXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogUHRGaWxlcy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgIHN0ZXA6IHRoaXMuc3RlcFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUHRGaWxlcyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUHRGaWxlc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGF0aDogc3RyaW5nO1xuICAgIHN0ZXA6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBQdEZpbGVzXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBwYXRoOiBzdHJpbmc7XG4gICAgc3RlcDogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5Da3B0RmlsZVxuICovXG5leHBvcnQgY2xhc3MgQ2twdEZpbGUgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LkNrcHRGaWxlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2twdEZpbGUoKTtcbiAgICBDa3B0RmlsZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IENrcHRGaWxlKSB7XG4gICAgX2luc3RhbmNlLnBhdGggPSBfaW5zdGFuY2UucGF0aCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IENrcHRGaWxlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXRoID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDa3B0RmlsZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IENrcHRGaWxlLCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLnBhdGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhdGg6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIENrcHRGaWxlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENrcHRGaWxlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhdGggPSBfdmFsdWUucGF0aDtcbiAgICBDa3B0RmlsZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGF0aDtcbiAgfVxuICBzZXQgcGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGF0aCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIENrcHRGaWxlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IENrcHRGaWxlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF0aDogdGhpcy5wYXRoXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ2twdEZpbGUuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXRoOiB0aGlzLnBhdGhcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENrcHRGaWxlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBDa3B0RmlsZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGF0aDogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIENrcHRGaWxlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBwYXRoOiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LlF1YXJ0em5ldFRyaXRvblxuICovXG5leHBvcnQgY2xhc3MgUXVhcnR6bmV0VHJpdG9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5RdWFydHpuZXRUcml0b24nO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBRdWFydHpuZXRUcml0b24oKTtcbiAgICBRdWFydHpuZXRUcml0b24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBRdWFydHpuZXRUcml0b24pIHtcbiAgICBfaW5zdGFuY2UuY29uZmlnUGF0aCA9IF9pbnN0YW5jZS5jb25maWdQYXRoIHx8ICcnO1xuICAgIF9pbnN0YW5jZS50cml0b25VcmwgPSBfaW5zdGFuY2UudHJpdG9uVXJsIHx8ICcnO1xuICAgIF9pbnN0YW5jZS50cml0b25Nb2RlbCA9IF9pbnN0YW5jZS50cml0b25Nb2RlbCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFF1YXJ0em5ldFRyaXRvbixcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuY29uZmlnUGF0aCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnRyaXRvblVybCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnRyaXRvbk1vZGVsID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBRdWFydHpuZXRUcml0b24ucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBRdWFydHpuZXRUcml0b24sXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuY29uZmlnUGF0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UuY29uZmlnUGF0aCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudHJpdG9uVXJsKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS50cml0b25VcmwpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRyaXRvbk1vZGVsKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS50cml0b25Nb2RlbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29uZmlnUGF0aDogc3RyaW5nO1xuICBwcml2YXRlIF90cml0b25Vcmw6IHN0cmluZztcbiAgcHJpdmF0ZSBfdHJpdG9uTW9kZWw6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFF1YXJ0em5ldFRyaXRvbiB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxRdWFydHpuZXRUcml0b24uQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuY29uZmlnUGF0aCA9IF92YWx1ZS5jb25maWdQYXRoO1xuICAgIHRoaXMudHJpdG9uVXJsID0gX3ZhbHVlLnRyaXRvblVybDtcbiAgICB0aGlzLnRyaXRvbk1vZGVsID0gX3ZhbHVlLnRyaXRvbk1vZGVsO1xuICAgIFF1YXJ0em5ldFRyaXRvbi5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGNvbmZpZ1BhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnUGF0aDtcbiAgfVxuICBzZXQgY29uZmlnUGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29uZmlnUGF0aCA9IHZhbHVlO1xuICB9XG4gIGdldCB0cml0b25VcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdHJpdG9uVXJsO1xuICB9XG4gIHNldCB0cml0b25VcmwodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RyaXRvblVybCA9IHZhbHVlO1xuICB9XG4gIGdldCB0cml0b25Nb2RlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90cml0b25Nb2RlbDtcbiAgfVxuICBzZXQgdHJpdG9uTW9kZWwodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RyaXRvbk1vZGVsID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUXVhcnR6bmV0VHJpdG9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFF1YXJ0em5ldFRyaXRvbi5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ1BhdGg6IHRoaXMuY29uZmlnUGF0aCxcbiAgICAgIHRyaXRvblVybDogdGhpcy50cml0b25VcmwsXG4gICAgICB0cml0b25Nb2RlbDogdGhpcy50cml0b25Nb2RlbFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFF1YXJ0em5ldFRyaXRvbi5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ1BhdGg6IHRoaXMuY29uZmlnUGF0aCxcbiAgICAgIHRyaXRvblVybDogdGhpcy50cml0b25VcmwsXG4gICAgICB0cml0b25Nb2RlbDogdGhpcy50cml0b25Nb2RlbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUXVhcnR6bmV0VHJpdG9uIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBRdWFydHpuZXRUcml0b25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGNvbmZpZ1BhdGg6IHN0cmluZztcbiAgICB0cml0b25Vcmw6IHN0cmluZztcbiAgICB0cml0b25Nb2RlbDogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFF1YXJ0em5ldFRyaXRvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgY29uZmlnUGF0aDogc3RyaW5nO1xuICAgIHRyaXRvblVybDogc3RyaW5nO1xuICAgIHRyaXRvbk1vZGVsOiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0Lkxhbmd1YWdlTW9kZWxzXG4gKi9cbmV4cG9ydCBjbGFzcyBMYW5ndWFnZU1vZGVscyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuTGFuZ3VhZ2VNb2RlbHMnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMYW5ndWFnZU1vZGVscygpO1xuICAgIExhbmd1YWdlTW9kZWxzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTGFuZ3VhZ2VNb2RlbHMpIHtcbiAgICBfaW5zdGFuY2UucGF0aCA9IF9pbnN0YW5jZS5wYXRoIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5iZWFtU2l6ZSA9IF9pbnN0YW5jZS5iZWFtU2l6ZSB8fCAnMCc7XG4gICAgX2luc3RhbmNlLmRlZmF1bHRMbSA9IF9pbnN0YW5jZS5kZWZhdWx0TG0gfHwgJyc7XG4gICAgX2luc3RhbmNlLmJlYW1TZWFyY2hTY29yZXJBbHBoYSA9IF9pbnN0YW5jZS5iZWFtU2VhcmNoU2NvcmVyQWxwaGEgfHwgMDtcbiAgICBfaW5zdGFuY2UuYmVhbVNlYXJjaFNjb3JlckJldGEgPSBfaW5zdGFuY2UuYmVhbVNlYXJjaFNjb3JlckJldGEgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IExhbmd1YWdlTW9kZWxzLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXRoID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuYmVhbVNpemUgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmRlZmF1bHRMbSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmJlYW1TZWFyY2hTY29yZXJBbHBoYSA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UuYmVhbVNlYXJjaFNjb3JlckJldGEgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGFuZ3VhZ2VNb2RlbHMucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBMYW5ndWFnZU1vZGVscyxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wYXRoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5wYXRoKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5iZWFtU2l6ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDIsIF9pbnN0YW5jZS5iZWFtU2l6ZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZGVmYXVsdExtKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS5kZWZhdWx0TG0pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmJlYW1TZWFyY2hTY29yZXJBbHBoYSkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDQsIF9pbnN0YW5jZS5iZWFtU2VhcmNoU2NvcmVyQWxwaGEpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmJlYW1TZWFyY2hTY29yZXJCZXRhKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoNSwgX2luc3RhbmNlLmJlYW1TZWFyY2hTY29yZXJCZXRhKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXRoOiBzdHJpbmc7XG4gIHByaXZhdGUgX2JlYW1TaXplOiBzdHJpbmc7XG4gIHByaXZhdGUgX2RlZmF1bHRMbTogc3RyaW5nO1xuICBwcml2YXRlIF9iZWFtU2VhcmNoU2NvcmVyQWxwaGE6IG51bWJlcjtcbiAgcHJpdmF0ZSBfYmVhbVNlYXJjaFNjb3JlckJldGE6IG51bWJlcjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIExhbmd1YWdlTW9kZWxzIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExhbmd1YWdlTW9kZWxzLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhdGggPSBfdmFsdWUucGF0aDtcbiAgICB0aGlzLmJlYW1TaXplID0gX3ZhbHVlLmJlYW1TaXplO1xuICAgIHRoaXMuZGVmYXVsdExtID0gX3ZhbHVlLmRlZmF1bHRMbTtcbiAgICB0aGlzLmJlYW1TZWFyY2hTY29yZXJBbHBoYSA9IF92YWx1ZS5iZWFtU2VhcmNoU2NvcmVyQWxwaGE7XG4gICAgdGhpcy5iZWFtU2VhcmNoU2NvcmVyQmV0YSA9IF92YWx1ZS5iZWFtU2VhcmNoU2NvcmVyQmV0YTtcbiAgICBMYW5ndWFnZU1vZGVscy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGF0aDtcbiAgfVxuICBzZXQgcGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGF0aCA9IHZhbHVlO1xuICB9XG4gIGdldCBiZWFtU2l6ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9iZWFtU2l6ZTtcbiAgfVxuICBzZXQgYmVhbVNpemUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2JlYW1TaXplID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRlZmF1bHRMbSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0TG07XG4gIH1cbiAgc2V0IGRlZmF1bHRMbSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVmYXVsdExtID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGJlYW1TZWFyY2hTY29yZXJBbHBoYSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9iZWFtU2VhcmNoU2NvcmVyQWxwaGE7XG4gIH1cbiAgc2V0IGJlYW1TZWFyY2hTY29yZXJBbHBoYSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYmVhbVNlYXJjaFNjb3JlckFscGhhID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGJlYW1TZWFyY2hTY29yZXJCZXRhKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2JlYW1TZWFyY2hTY29yZXJCZXRhO1xuICB9XG4gIHNldCBiZWFtU2VhcmNoU2NvcmVyQmV0YSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYmVhbVNlYXJjaFNjb3JlckJldGEgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMYW5ndWFnZU1vZGVscy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBMYW5ndWFnZU1vZGVscy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgIGJlYW1TaXplOiB0aGlzLmJlYW1TaXplLFxuICAgICAgZGVmYXVsdExtOiB0aGlzLmRlZmF1bHRMbSxcbiAgICAgIGJlYW1TZWFyY2hTY29yZXJBbHBoYTogdGhpcy5iZWFtU2VhcmNoU2NvcmVyQWxwaGEsXG4gICAgICBiZWFtU2VhcmNoU2NvcmVyQmV0YTogdGhpcy5iZWFtU2VhcmNoU2NvcmVyQmV0YVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IExhbmd1YWdlTW9kZWxzLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgYmVhbVNpemU6IHRoaXMuYmVhbVNpemUsXG4gICAgICBkZWZhdWx0TG06IHRoaXMuZGVmYXVsdExtLFxuICAgICAgYmVhbVNlYXJjaFNjb3JlckFscGhhOiB0aGlzLmJlYW1TZWFyY2hTY29yZXJBbHBoYSxcbiAgICAgIGJlYW1TZWFyY2hTY29yZXJCZXRhOiB0aGlzLmJlYW1TZWFyY2hTY29yZXJCZXRhXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMYW5ndWFnZU1vZGVscyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTGFuZ3VhZ2VNb2RlbHNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHBhdGg6IHN0cmluZztcbiAgICBiZWFtU2l6ZTogc3RyaW5nO1xuICAgIGRlZmF1bHRMbTogc3RyaW5nO1xuICAgIGJlYW1TZWFyY2hTY29yZXJBbHBoYTogbnVtYmVyO1xuICAgIGJlYW1TZWFyY2hTY29yZXJCZXRhOiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTGFuZ3VhZ2VNb2RlbHNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBhdGg6IHN0cmluZztcbiAgICBiZWFtU2l6ZTogc3RyaW5nO1xuICAgIGRlZmF1bHRMbTogc3RyaW5nO1xuICAgIGJlYW1TZWFyY2hTY29yZXJBbHBoYTogbnVtYmVyO1xuICAgIGJlYW1TZWFyY2hTY29yZXJCZXRhOiBudW1iZXI7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LlN0cmVhbWluZ1NlcnZlclxuICovXG5leHBvcnQgY2xhc3MgU3RyZWFtaW5nU2VydmVyIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5TdHJlYW1pbmdTZXJ2ZXInO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTdHJlYW1pbmdTZXJ2ZXIoKTtcbiAgICBTdHJlYW1pbmdTZXJ2ZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTdHJlYW1pbmdTZXJ2ZXIpIHtcbiAgICBfaW5zdGFuY2UuaG9zdCA9IF9pbnN0YW5jZS5ob3N0IHx8ICcnO1xuICAgIF9pbnN0YW5jZS5wb3J0ID0gX2luc3RhbmNlLnBvcnQgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5vdXRwdXRTdHlsZSA9IF9pbnN0YW5jZS5vdXRwdXRTdHlsZSB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24gPVxuICAgICAgX2luc3RhbmNlLnN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFN0cmVhbWluZ1NlcnZlcixcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuaG9zdCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnBvcnQgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLm91dHB1dFN0eWxlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24gPSBuZXcgU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uLFxuICAgICAgICAgICAgU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFN0cmVhbWluZ1NlcnZlci5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFN0cmVhbWluZ1NlcnZlcixcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5ob3N0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5ob3N0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wb3J0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMiwgX2luc3RhbmNlLnBvcnQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm91dHB1dFN0eWxlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS5vdXRwdXRTdHlsZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBfaW5zdGFuY2Uuc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24gYXMgYW55LFxuICAgICAgICBTdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9ob3N0OiBzdHJpbmc7XG4gIHByaXZhdGUgX3BvcnQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfb3V0cHV0U3R5bGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24/OiBTdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFN0cmVhbWluZ1NlcnZlciB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTdHJlYW1pbmdTZXJ2ZXIuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuaG9zdCA9IF92YWx1ZS5ob3N0O1xuICAgIHRoaXMucG9ydCA9IF92YWx1ZS5wb3J0O1xuICAgIHRoaXMub3V0cHV0U3R5bGUgPSBfdmFsdWUub3V0cHV0U3R5bGU7XG4gICAgdGhpcy5zdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbiA9IF92YWx1ZS5zdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvblxuICAgICAgPyBuZXcgU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24oX3ZhbHVlLnN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgU3RyZWFtaW5nU2VydmVyLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaG9zdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9ob3N0O1xuICB9XG4gIHNldCBob3N0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ob3N0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBvcnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydDtcbiAgfVxuICBzZXQgcG9ydCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcG9ydCA9IHZhbHVlO1xuICB9XG4gIGdldCBvdXRwdXRTdHlsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9vdXRwdXRTdHlsZTtcbiAgfVxuICBzZXQgb3V0cHV0U3R5bGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX291dHB1dFN0eWxlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uKCk6IFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb247XG4gIH1cbiAgc2V0IHN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uKFxuICAgIHZhbHVlOiBTdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbiB8IHVuZGVmaW5lZFxuICApIHtcbiAgICB0aGlzLl9zdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFN0cmVhbWluZ1NlcnZlci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBTdHJlYW1pbmdTZXJ2ZXIuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBob3N0OiB0aGlzLmhvc3QsXG4gICAgICBwb3J0OiB0aGlzLnBvcnQsXG4gICAgICBvdXRwdXRTdHlsZTogdGhpcy5vdXRwdXRTdHlsZSxcbiAgICAgIHN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uOiB0aGlzLnN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uXG4gICAgICAgID8gdGhpcy5zdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbi50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogU3RyZWFtaW5nU2VydmVyLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgaG9zdDogdGhpcy5ob3N0LFxuICAgICAgcG9ydDogdGhpcy5wb3J0LFxuICAgICAgb3V0cHV0U3R5bGU6IHRoaXMub3V0cHV0U3R5bGUsXG4gICAgICBzdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbjogdGhpcy5zdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvblxuICAgICAgICA/IHRoaXMuc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTdHJlYW1pbmdTZXJ2ZXIge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFN0cmVhbWluZ1NlcnZlclxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgaG9zdDogc3RyaW5nO1xuICAgIHBvcnQ6IHN0cmluZztcbiAgICBvdXRwdXRTdHlsZTogc3RyaW5nO1xuICAgIHN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uPzogU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24uQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgU3RyZWFtaW5nU2VydmVyXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBob3N0OiBzdHJpbmc7XG4gICAgcG9ydDogc3RyaW5nO1xuICAgIG91dHB1dFN0eWxlOiBzdHJpbmc7XG4gICAgc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb246IFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5TdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbic7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uKCk7XG4gICAgU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbikge1xuICAgIF9pbnN0YW5jZS50cmFuc2NyaWJlTm90RmluYWwgPSBfaW5zdGFuY2UudHJhbnNjcmliZU5vdEZpbmFsIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5kZWNvZGluZ01ldGhvZCA9IF9pbnN0YW5jZS5kZWNvZGluZ01ldGhvZCB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc2FtcGxpbmdSYXRlID0gX2luc3RhbmNlLnNhbXBsaW5nUmF0ZSB8fCAnMCc7XG4gICAgX2luc3RhbmNlLm1pbkF1ZGlvQ2h1bmtTaXplID0gX2luc3RhbmNlLm1pbkF1ZGlvQ2h1bmtTaXplIHx8ICcwJztcbiAgICBfaW5zdGFuY2Uuc3RhcnRPZlV0dGVyYW5jZVRocmVzaG9sZCA9XG4gICAgICBfaW5zdGFuY2Uuc3RhcnRPZlV0dGVyYW5jZVRocmVzaG9sZCB8fCAwO1xuICAgIF9pbnN0YW5jZS5lbmRPZlV0dGVyYW5jZVRocmVzaG9sZCA9IF9pbnN0YW5jZS5lbmRPZlV0dGVyYW5jZVRocmVzaG9sZCB8fCAwO1xuICAgIF9pbnN0YW5jZS5uZXh0Q2h1bmtUaW1lb3V0ID0gX2luc3RhbmNlLm5leHRDaHVua1RpbWVvdXQgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS50cmFuc2NyaWJlTm90RmluYWwgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZGVjb2RpbmdNZXRob2QgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5zYW1wbGluZ1JhdGUgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLm1pbkF1ZGlvQ2h1bmtTaXplID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5zdGFydE9mVXR0ZXJhbmNlVGhyZXNob2xkID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5lbmRPZlV0dGVyYW5jZVRocmVzaG9sZCA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2UubmV4dENodW5rVGltZW91dCA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbi5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnRyYW5zY3JpYmVOb3RGaW5hbCkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMSwgX2luc3RhbmNlLnRyYW5zY3JpYmVOb3RGaW5hbCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZGVjb2RpbmdNZXRob2QpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLmRlY29kaW5nTWV0aG9kKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zYW1wbGluZ1JhdGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygzLCBfaW5zdGFuY2Uuc2FtcGxpbmdSYXRlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5taW5BdWRpb0NodW5rU2l6ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDQsIF9pbnN0YW5jZS5taW5BdWRpb0NodW5rU2l6ZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3RhcnRPZlV0dGVyYW5jZVRocmVzaG9sZCkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDUsIF9pbnN0YW5jZS5zdGFydE9mVXR0ZXJhbmNlVGhyZXNob2xkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5lbmRPZlV0dGVyYW5jZVRocmVzaG9sZCkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDYsIF9pbnN0YW5jZS5lbmRPZlV0dGVyYW5jZVRocmVzaG9sZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubmV4dENodW5rVGltZW91dCkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDcsIF9pbnN0YW5jZS5uZXh0Q2h1bmtUaW1lb3V0KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90cmFuc2NyaWJlTm90RmluYWw6IGJvb2xlYW47XG4gIHByaXZhdGUgX2RlY29kaW5nTWV0aG9kOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NhbXBsaW5nUmF0ZTogc3RyaW5nO1xuICBwcml2YXRlIF9taW5BdWRpb0NodW5rU2l6ZTogc3RyaW5nO1xuICBwcml2YXRlIF9zdGFydE9mVXR0ZXJhbmNlVGhyZXNob2xkOiBudW1iZXI7XG4gIHByaXZhdGUgX2VuZE9mVXR0ZXJhbmNlVGhyZXNob2xkOiBudW1iZXI7XG4gIHByaXZhdGUgX25leHRDaHVua1RpbWVvdXQ6IG51bWJlcjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnRyYW5zY3JpYmVOb3RGaW5hbCA9IF92YWx1ZS50cmFuc2NyaWJlTm90RmluYWw7XG4gICAgdGhpcy5kZWNvZGluZ01ldGhvZCA9IF92YWx1ZS5kZWNvZGluZ01ldGhvZDtcbiAgICB0aGlzLnNhbXBsaW5nUmF0ZSA9IF92YWx1ZS5zYW1wbGluZ1JhdGU7XG4gICAgdGhpcy5taW5BdWRpb0NodW5rU2l6ZSA9IF92YWx1ZS5taW5BdWRpb0NodW5rU2l6ZTtcbiAgICB0aGlzLnN0YXJ0T2ZVdHRlcmFuY2VUaHJlc2hvbGQgPSBfdmFsdWUuc3RhcnRPZlV0dGVyYW5jZVRocmVzaG9sZDtcbiAgICB0aGlzLmVuZE9mVXR0ZXJhbmNlVGhyZXNob2xkID0gX3ZhbHVlLmVuZE9mVXR0ZXJhbmNlVGhyZXNob2xkO1xuICAgIHRoaXMubmV4dENodW5rVGltZW91dCA9IF92YWx1ZS5uZXh0Q2h1bmtUaW1lb3V0O1xuICAgIFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdHJhbnNjcmliZU5vdEZpbmFsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl90cmFuc2NyaWJlTm90RmluYWw7XG4gIH1cbiAgc2V0IHRyYW5zY3JpYmVOb3RGaW5hbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3RyYW5zY3JpYmVOb3RGaW5hbCA9IHZhbHVlO1xuICB9XG4gIGdldCBkZWNvZGluZ01ldGhvZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kZWNvZGluZ01ldGhvZDtcbiAgfVxuICBzZXQgZGVjb2RpbmdNZXRob2QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlY29kaW5nTWV0aG9kID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNhbXBsaW5nUmF0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zYW1wbGluZ1JhdGU7XG4gIH1cbiAgc2V0IHNhbXBsaW5nUmF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2FtcGxpbmdSYXRlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1pbkF1ZGlvQ2h1bmtTaXplKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21pbkF1ZGlvQ2h1bmtTaXplO1xuICB9XG4gIHNldCBtaW5BdWRpb0NodW5rU2l6ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWluQXVkaW9DaHVua1NpemUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3RhcnRPZlV0dGVyYW5jZVRocmVzaG9sZCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zdGFydE9mVXR0ZXJhbmNlVGhyZXNob2xkO1xuICB9XG4gIHNldCBzdGFydE9mVXR0ZXJhbmNlVGhyZXNob2xkKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zdGFydE9mVXR0ZXJhbmNlVGhyZXNob2xkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVuZE9mVXR0ZXJhbmNlVGhyZXNob2xkKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZE9mVXR0ZXJhbmNlVGhyZXNob2xkO1xuICB9XG4gIHNldCBlbmRPZlV0dGVyYW5jZVRocmVzaG9sZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZW5kT2ZVdHRlcmFuY2VUaHJlc2hvbGQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbmV4dENodW5rVGltZW91dCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9uZXh0Q2h1bmtUaW1lb3V0O1xuICB9XG4gIHNldCBuZXh0Q2h1bmtUaW1lb3V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9uZXh0Q2h1bmtUaW1lb3V0ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24uQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2NyaWJlTm90RmluYWw6IHRoaXMudHJhbnNjcmliZU5vdEZpbmFsLFxuICAgICAgZGVjb2RpbmdNZXRob2Q6IHRoaXMuZGVjb2RpbmdNZXRob2QsXG4gICAgICBzYW1wbGluZ1JhdGU6IHRoaXMuc2FtcGxpbmdSYXRlLFxuICAgICAgbWluQXVkaW9DaHVua1NpemU6IHRoaXMubWluQXVkaW9DaHVua1NpemUsXG4gICAgICBzdGFydE9mVXR0ZXJhbmNlVGhyZXNob2xkOiB0aGlzLnN0YXJ0T2ZVdHRlcmFuY2VUaHJlc2hvbGQsXG4gICAgICBlbmRPZlV0dGVyYW5jZVRocmVzaG9sZDogdGhpcy5lbmRPZlV0dGVyYW5jZVRocmVzaG9sZCxcbiAgICAgIG5leHRDaHVua1RpbWVvdXQ6IHRoaXMubmV4dENodW5rVGltZW91dFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNjcmliZU5vdEZpbmFsOiB0aGlzLnRyYW5zY3JpYmVOb3RGaW5hbCxcbiAgICAgIGRlY29kaW5nTWV0aG9kOiB0aGlzLmRlY29kaW5nTWV0aG9kLFxuICAgICAgc2FtcGxpbmdSYXRlOiB0aGlzLnNhbXBsaW5nUmF0ZSxcbiAgICAgIG1pbkF1ZGlvQ2h1bmtTaXplOiB0aGlzLm1pbkF1ZGlvQ2h1bmtTaXplLFxuICAgICAgc3RhcnRPZlV0dGVyYW5jZVRocmVzaG9sZDogdGhpcy5zdGFydE9mVXR0ZXJhbmNlVGhyZXNob2xkLFxuICAgICAgZW5kT2ZVdHRlcmFuY2VUaHJlc2hvbGQ6IHRoaXMuZW5kT2ZVdHRlcmFuY2VUaHJlc2hvbGQsXG4gICAgICBuZXh0Q2h1bmtUaW1lb3V0OiB0aGlzLm5leHRDaHVua1RpbWVvdXRcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBTdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdHJhbnNjcmliZU5vdEZpbmFsOiBib29sZWFuO1xuICAgIGRlY29kaW5nTWV0aG9kOiBzdHJpbmc7XG4gICAgc2FtcGxpbmdSYXRlOiBzdHJpbmc7XG4gICAgbWluQXVkaW9DaHVua1NpemU6IHN0cmluZztcbiAgICBzdGFydE9mVXR0ZXJhbmNlVGhyZXNob2xkOiBudW1iZXI7XG4gICAgZW5kT2ZVdHRlcmFuY2VUaHJlc2hvbGQ6IG51bWJlcjtcbiAgICBuZXh0Q2h1bmtUaW1lb3V0OiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHRyYW5zY3JpYmVOb3RGaW5hbDogYm9vbGVhbjtcbiAgICBkZWNvZGluZ01ldGhvZDogc3RyaW5nO1xuICAgIHNhbXBsaW5nUmF0ZTogc3RyaW5nO1xuICAgIG1pbkF1ZGlvQ2h1bmtTaXplOiBzdHJpbmc7XG4gICAgc3RhcnRPZlV0dGVyYW5jZVRocmVzaG9sZDogbnVtYmVyO1xuICAgIGVuZE9mVXR0ZXJhbmNlVGhyZXNob2xkOiBudW1iZXI7XG4gICAgbmV4dENodW5rVGltZW91dDogbnVtYmVyO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5Wb2ljZUFjdGl2aXR5RGV0ZWN0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5Wb2ljZUFjdGl2aXR5RGV0ZWN0aW9uJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVm9pY2VBY3Rpdml0eURldGVjdGlvbigpO1xuICAgIFZvaWNlQWN0aXZpdHlEZXRlY3Rpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uKSB7XG4gICAgX2luc3RhbmNlLmFjdGl2ZSA9IF9pbnN0YW5jZS5hY3RpdmUgfHwgJyc7XG4gICAgX2luc3RhbmNlLnNhbXBsaW5nUmF0ZSA9IF9pbnN0YW5jZS5zYW1wbGluZ1JhdGUgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5weWFubm90ZSA9IF9pbnN0YW5jZS5weWFubm90ZSB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLm1hdGNoYm94ID0gX2luc3RhbmNlLm1hdGNoYm94IHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFZvaWNlQWN0aXZpdHlEZXRlY3Rpb24sXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmFjdGl2ZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnNhbXBsaW5nUmF0ZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UucHlhbm5vdGUgPSBuZXcgUHlhbm5vdGUoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnB5YW5ub3RlLFxuICAgICAgICAgICAgUHlhbm5vdGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5tYXRjaGJveCA9IG5ldyBNYXRjaGJveCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UubWF0Y2hib3gsXG4gICAgICAgICAgICBNYXRjaGJveC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVm9pY2VBY3Rpdml0eURldGVjdGlvbi5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFZvaWNlQWN0aXZpdHlEZXRlY3Rpb24sXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuYWN0aXZlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5hY3RpdmUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNhbXBsaW5nUmF0ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDIsIF9pbnN0YW5jZS5zYW1wbGluZ1JhdGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnB5YW5ub3RlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgX2luc3RhbmNlLnB5YW5ub3RlIGFzIGFueSxcbiAgICAgICAgUHlhbm5vdGUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWF0Y2hib3gpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBfaW5zdGFuY2UubWF0Y2hib3ggYXMgYW55LFxuICAgICAgICBNYXRjaGJveC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hY3RpdmU6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2FtcGxpbmdSYXRlOiBzdHJpbmc7XG4gIHByaXZhdGUgX3B5YW5ub3RlPzogUHlhbm5vdGU7XG4gIHByaXZhdGUgX21hdGNoYm94PzogTWF0Y2hib3g7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFZvaWNlQWN0aXZpdHlEZXRlY3Rpb24uQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuYWN0aXZlID0gX3ZhbHVlLmFjdGl2ZTtcbiAgICB0aGlzLnNhbXBsaW5nUmF0ZSA9IF92YWx1ZS5zYW1wbGluZ1JhdGU7XG4gICAgdGhpcy5weWFubm90ZSA9IF92YWx1ZS5weWFubm90ZSA/IG5ldyBQeWFubm90ZShfdmFsdWUucHlhbm5vdGUpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubWF0Y2hib3ggPSBfdmFsdWUubWF0Y2hib3ggPyBuZXcgTWF0Y2hib3goX3ZhbHVlLm1hdGNoYm94KSA6IHVuZGVmaW5lZDtcbiAgICBWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgYWN0aXZlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuICBzZXQgYWN0aXZlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hY3RpdmUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2FtcGxpbmdSYXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NhbXBsaW5nUmF0ZTtcbiAgfVxuICBzZXQgc2FtcGxpbmdSYXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zYW1wbGluZ1JhdGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcHlhbm5vdGUoKTogUHlhbm5vdGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9weWFubm90ZTtcbiAgfVxuICBzZXQgcHlhbm5vdGUodmFsdWU6IFB5YW5ub3RlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcHlhbm5vdGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWF0Y2hib3goKTogTWF0Y2hib3ggfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tYXRjaGJveDtcbiAgfVxuICBzZXQgbWF0Y2hib3godmFsdWU6IE1hdGNoYm94IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWF0Y2hib3ggPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFZvaWNlQWN0aXZpdHlEZXRlY3Rpb24uQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmU6IHRoaXMuYWN0aXZlLFxuICAgICAgc2FtcGxpbmdSYXRlOiB0aGlzLnNhbXBsaW5nUmF0ZSxcbiAgICAgIHB5YW5ub3RlOiB0aGlzLnB5YW5ub3RlID8gdGhpcy5weWFubm90ZS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbWF0Y2hib3g6IHRoaXMubWF0Y2hib3ggPyB0aGlzLm1hdGNoYm94LnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlOiB0aGlzLmFjdGl2ZSxcbiAgICAgIHNhbXBsaW5nUmF0ZTogdGhpcy5zYW1wbGluZ1JhdGUsXG4gICAgICBweWFubm90ZTogdGhpcy5weWFubm90ZSA/IHRoaXMucHlhbm5vdGUudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgbWF0Y2hib3g6IHRoaXMubWF0Y2hib3ggPyB0aGlzLm1hdGNoYm94LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVm9pY2VBY3Rpdml0eURldGVjdGlvbiB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVm9pY2VBY3Rpdml0eURldGVjdGlvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgYWN0aXZlOiBzdHJpbmc7XG4gICAgc2FtcGxpbmdSYXRlOiBzdHJpbmc7XG4gICAgcHlhbm5vdGU/OiBQeWFubm90ZS5Bc09iamVjdDtcbiAgICBtYXRjaGJveD86IE1hdGNoYm94LkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFZvaWNlQWN0aXZpdHlEZXRlY3Rpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGFjdGl2ZTogc3RyaW5nO1xuICAgIHNhbXBsaW5nUmF0ZTogc3RyaW5nO1xuICAgIHB5YW5ub3RlOiBQeWFubm90ZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbWF0Y2hib3g6IE1hdGNoYm94LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuUHlhbm5vdGVcbiAqL1xuZXhwb3J0IGNsYXNzIFB5YW5ub3RlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5QeWFubm90ZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFB5YW5ub3RlKCk7XG4gICAgUHlhbm5vdGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBQeWFubm90ZSkge1xuICAgIF9pbnN0YW5jZS5tb2RlbFBhdGggPSBfaW5zdGFuY2UubW9kZWxQYXRoIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5taW5BdWRpb1NpemUgPSBfaW5zdGFuY2UubWluQXVkaW9TaXplIHx8ICcwJztcbiAgICBfaW5zdGFuY2Uub2Zmc2V0ID0gX2luc3RhbmNlLm9mZnNldCB8fCAwO1xuICAgIF9pbnN0YW5jZS5vbnNldCA9IF9pbnN0YW5jZS5vbnNldCB8fCAwO1xuXG4gICAgX2luc3RhbmNlLm1pbkR1cmF0aW9uT2ZmID0gX2luc3RhbmNlLm1pbkR1cmF0aW9uT2ZmIHx8IDA7XG4gICAgX2luc3RhbmNlLm1pbkR1cmF0aW9uT24gPSBfaW5zdGFuY2UubWluRHVyYXRpb25PbiB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogUHlhbm5vdGUsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLm1vZGVsUGF0aCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLm1pbkF1ZGlvU2l6ZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2Uub2Zmc2V0ID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5vbnNldCA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UubG9nU2NhbGUgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UubWluRHVyYXRpb25PZmYgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLm1pbkR1cmF0aW9uT24gPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUHlhbm5vdGUucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBQeWFubm90ZSwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5tb2RlbFBhdGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLm1vZGVsUGF0aCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWluQXVkaW9TaXplKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMiwgX2luc3RhbmNlLm1pbkF1ZGlvU2l6ZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uub2Zmc2V0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoMywgX2luc3RhbmNlLm9mZnNldCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uub25zZXQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCg0LCBfaW5zdGFuY2Uub25zZXQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxvZ1NjYWxlIHx8IF9pbnN0YW5jZS5sb2dTY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDUsIF9pbnN0YW5jZS5sb2dTY2FsZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWluRHVyYXRpb25PZmYpIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCg2LCBfaW5zdGFuY2UubWluRHVyYXRpb25PZmYpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1pbkR1cmF0aW9uT24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCg3LCBfaW5zdGFuY2UubWluRHVyYXRpb25Pbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbW9kZWxQYXRoOiBzdHJpbmc7XG4gIHByaXZhdGUgX21pbkF1ZGlvU2l6ZTogc3RyaW5nO1xuICBwcml2YXRlIF9vZmZzZXQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBfb25zZXQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbG9nU2NhbGU6IGJvb2xlYW47XG4gIHByaXZhdGUgX21pbkR1cmF0aW9uT2ZmOiBudW1iZXI7XG4gIHByaXZhdGUgX21pbkR1cmF0aW9uT246IG51bWJlcjtcblxuICBwcml2YXRlIF9vbmVvZkxvZ1NjYWxlOiBQeWFubm90ZS5PbmVvZkxvZ1NjYWxlQ2FzZSA9XG4gICAgUHlhbm5vdGUuT25lb2ZMb2dTY2FsZUNhc2Uubm9uZTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFB5YW5ub3RlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFB5YW5ub3RlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm1vZGVsUGF0aCA9IF92YWx1ZS5tb2RlbFBhdGg7XG4gICAgdGhpcy5taW5BdWRpb1NpemUgPSBfdmFsdWUubWluQXVkaW9TaXplO1xuICAgIHRoaXMub2Zmc2V0ID0gX3ZhbHVlLm9mZnNldDtcbiAgICB0aGlzLm9uc2V0ID0gX3ZhbHVlLm9uc2V0O1xuICAgIHRoaXMubG9nU2NhbGUgPSBfdmFsdWUubG9nU2NhbGU7XG4gICAgdGhpcy5taW5EdXJhdGlvbk9mZiA9IF92YWx1ZS5taW5EdXJhdGlvbk9mZjtcbiAgICB0aGlzLm1pbkR1cmF0aW9uT24gPSBfdmFsdWUubWluRHVyYXRpb25PbjtcbiAgICBQeWFubm90ZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IG1vZGVsUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbFBhdGg7XG4gIH1cbiAgc2V0IG1vZGVsUGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kZWxQYXRoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1pbkF1ZGlvU2l6ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9taW5BdWRpb1NpemU7XG4gIH1cbiAgc2V0IG1pbkF1ZGlvU2l6ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWluQXVkaW9TaXplID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9mZnNldCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vZmZzZXQ7XG4gIH1cbiAgc2V0IG9mZnNldCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fb2Zmc2V0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9uc2V0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX29uc2V0O1xuICB9XG4gIHNldCBvbnNldCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fb25zZXQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbG9nU2NhbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ1NjYWxlO1xuICB9XG4gIHNldCBsb2dTY2FsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9vbmVvZkxvZ1NjYWxlID0gUHlhbm5vdGUuT25lb2ZMb2dTY2FsZUNhc2UubG9nU2NhbGU7XG4gICAgfVxuICAgIHRoaXMuX2xvZ1NjYWxlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1pbkR1cmF0aW9uT2ZmKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21pbkR1cmF0aW9uT2ZmO1xuICB9XG4gIHNldCBtaW5EdXJhdGlvbk9mZih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWluRHVyYXRpb25PZmYgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWluRHVyYXRpb25PbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9taW5EdXJhdGlvbk9uO1xuICB9XG4gIHNldCBtaW5EdXJhdGlvbk9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9taW5EdXJhdGlvbk9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9uZW9mTG9nU2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uZW9mTG9nU2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUHlhbm5vdGUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUHlhbm5vdGUuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBtb2RlbFBhdGg6IHRoaXMubW9kZWxQYXRoLFxuICAgICAgbWluQXVkaW9TaXplOiB0aGlzLm1pbkF1ZGlvU2l6ZSxcbiAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICBvbnNldDogdGhpcy5vbnNldCxcbiAgICAgIGxvZ1NjYWxlOiB0aGlzLmxvZ1NjYWxlLFxuICAgICAgbWluRHVyYXRpb25PZmY6IHRoaXMubWluRHVyYXRpb25PZmYsXG4gICAgICBtaW5EdXJhdGlvbk9uOiB0aGlzLm1pbkR1cmF0aW9uT25cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBQeWFubm90ZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZGVsUGF0aDogdGhpcy5tb2RlbFBhdGgsXG4gICAgICBtaW5BdWRpb1NpemU6IHRoaXMubWluQXVkaW9TaXplLFxuICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgIG9uc2V0OiB0aGlzLm9uc2V0LFxuICAgICAgbG9nU2NhbGU6IHRoaXMubG9nU2NhbGUsXG4gICAgICBtaW5EdXJhdGlvbk9mZjogdGhpcy5taW5EdXJhdGlvbk9mZixcbiAgICAgIG1pbkR1cmF0aW9uT246IHRoaXMubWluRHVyYXRpb25PblxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUHlhbm5vdGUge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFB5YW5ub3RlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBtb2RlbFBhdGg6IHN0cmluZztcbiAgICBtaW5BdWRpb1NpemU6IHN0cmluZztcbiAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICBvbnNldDogbnVtYmVyO1xuICAgIGxvZ1NjYWxlOiBib29sZWFuO1xuICAgIG1pbkR1cmF0aW9uT2ZmOiBudW1iZXI7XG4gICAgbWluRHVyYXRpb25PbjogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFB5YW5ub3RlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBtb2RlbFBhdGg6IHN0cmluZztcbiAgICBtaW5BdWRpb1NpemU6IHN0cmluZztcbiAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICBvbnNldDogbnVtYmVyO1xuICAgIGxvZ1NjYWxlOiBib29sZWFuO1xuICAgIG1pbkR1cmF0aW9uT2ZmOiBudW1iZXI7XG4gICAgbWluRHVyYXRpb25PbjogbnVtYmVyO1xuICB9XG4gIGV4cG9ydCBlbnVtIE9uZW9mTG9nU2NhbGVDYXNlIHtcbiAgICBub25lID0gMCxcbiAgICBsb2dTY2FsZSA9IDFcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuTWF0Y2hib3hcbiAqL1xuZXhwb3J0IGNsYXNzIE1hdGNoYm94IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5NYXRjaGJveCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE1hdGNoYm94KCk7XG4gICAgTWF0Y2hib3guZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBNYXRjaGJveCkge1xuICAgIF9pbnN0YW5jZS5tb2RlbENvbmZpZyA9IF9pbnN0YW5jZS5tb2RlbENvbmZpZyB8fCAnJztcbiAgICBfaW5zdGFuY2UuZW5jb2RlclBhdGggPSBfaW5zdGFuY2UuZW5jb2RlclBhdGggfHwgJyc7XG4gICAgX2luc3RhbmNlLmRlY29kZXJQYXRoID0gX2luc3RhbmNlLmRlY29kZXJQYXRoIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTWF0Y2hib3gsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLm1vZGVsQ29uZmlnID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZW5jb2RlclBhdGggPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5kZWNvZGVyUGF0aCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTWF0Y2hib3gucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBNYXRjaGJveCwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5tb2RlbENvbmZpZykge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UubW9kZWxDb25maWcpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmVuY29kZXJQYXRoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5lbmNvZGVyUGF0aCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZGVjb2RlclBhdGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLmRlY29kZXJQYXRoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9tb2RlbENvbmZpZzogc3RyaW5nO1xuICBwcml2YXRlIF9lbmNvZGVyUGF0aDogc3RyaW5nO1xuICBwcml2YXRlIF9kZWNvZGVyUGF0aDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTWF0Y2hib3ggdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TWF0Y2hib3guQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubW9kZWxDb25maWcgPSBfdmFsdWUubW9kZWxDb25maWc7XG4gICAgdGhpcy5lbmNvZGVyUGF0aCA9IF92YWx1ZS5lbmNvZGVyUGF0aDtcbiAgICB0aGlzLmRlY29kZXJQYXRoID0gX3ZhbHVlLmRlY29kZXJQYXRoO1xuICAgIE1hdGNoYm94LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbW9kZWxDb25maWcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWxDb25maWc7XG4gIH1cbiAgc2V0IG1vZGVsQ29uZmlnKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RlbENvbmZpZyA9IHZhbHVlO1xuICB9XG4gIGdldCBlbmNvZGVyUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9lbmNvZGVyUGF0aDtcbiAgfVxuICBzZXQgZW5jb2RlclBhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VuY29kZXJQYXRoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRlY29kZXJQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2RlY29kZXJQYXRoO1xuICB9XG4gIHNldCBkZWNvZGVyUGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVjb2RlclBhdGggPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBNYXRjaGJveC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBNYXRjaGJveC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZGVsQ29uZmlnOiB0aGlzLm1vZGVsQ29uZmlnLFxuICAgICAgZW5jb2RlclBhdGg6IHRoaXMuZW5jb2RlclBhdGgsXG4gICAgICBkZWNvZGVyUGF0aDogdGhpcy5kZWNvZGVyUGF0aFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IE1hdGNoYm94LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgbW9kZWxDb25maWc6IHRoaXMubW9kZWxDb25maWcsXG4gICAgICBlbmNvZGVyUGF0aDogdGhpcy5lbmNvZGVyUGF0aCxcbiAgICAgIGRlY29kZXJQYXRoOiB0aGlzLmRlY29kZXJQYXRoXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBNYXRjaGJveCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTWF0Y2hib3hcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIG1vZGVsQ29uZmlnOiBzdHJpbmc7XG4gICAgZW5jb2RlclBhdGg6IHN0cmluZztcbiAgICBkZWNvZGVyUGF0aDogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIE1hdGNoYm94XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBtb2RlbENvbmZpZzogc3RyaW5nO1xuICAgIGVuY29kZXJQYXRoOiBzdHJpbmc7XG4gICAgZGVjb2RlclBhdGg6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuUG9zdFByb2Nlc3NpbmdcbiAqL1xuZXhwb3J0IGNsYXNzIFBvc3RQcm9jZXNzaW5nIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5Qb3N0UHJvY2Vzc2luZyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFBvc3RQcm9jZXNzaW5nKCk7XG4gICAgUG9zdFByb2Nlc3NpbmcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBQb3N0UHJvY2Vzc2luZykge1xuICAgIF9pbnN0YW5jZS5waXBlbGluZSA9IF9pbnN0YW5jZS5waXBlbGluZSB8fCBbXTtcbiAgICBfaW5zdGFuY2UucG9zdFByb2Nlc3NvcnMgPSBfaW5zdGFuY2UucG9zdFByb2Nlc3NvcnMgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogUG9zdFByb2Nlc3NpbmcsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgKF9pbnN0YW5jZS5waXBlbGluZSA9IF9pbnN0YW5jZS5waXBlbGluZSB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5wb3N0UHJvY2Vzc29ycyA9IG5ldyBQb3N0UHJvY2Vzc29ycygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UucG9zdFByb2Nlc3NvcnMsXG4gICAgICAgICAgICBQb3N0UHJvY2Vzc29ycy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUG9zdFByb2Nlc3NpbmcucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBQb3N0UHJvY2Vzc2luZyxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5waXBlbGluZSAmJiBfaW5zdGFuY2UucGlwZWxpbmUubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMSwgX2luc3RhbmNlLnBpcGVsaW5lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wb3N0UHJvY2Vzc29ycykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIF9pbnN0YW5jZS5wb3N0UHJvY2Vzc29ycyBhcyBhbnksXG4gICAgICAgIFBvc3RQcm9jZXNzb3JzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BpcGVsaW5lOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfcG9zdFByb2Nlc3NvcnM/OiBQb3N0UHJvY2Vzc29ycztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFBvc3RQcm9jZXNzaW5nIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFBvc3RQcm9jZXNzaW5nLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBpcGVsaW5lID0gKF92YWx1ZS5waXBlbGluZSB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLnBvc3RQcm9jZXNzb3JzID0gX3ZhbHVlLnBvc3RQcm9jZXNzb3JzXG4gICAgICA/IG5ldyBQb3N0UHJvY2Vzc29ycyhfdmFsdWUucG9zdFByb2Nlc3NvcnMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBQb3N0UHJvY2Vzc2luZy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBpcGVsaW5lKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fcGlwZWxpbmU7XG4gIH1cbiAgc2V0IHBpcGVsaW5lKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3BpcGVsaW5lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBvc3RQcm9jZXNzb3JzKCk6IFBvc3RQcm9jZXNzb3JzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zdFByb2Nlc3NvcnM7XG4gIH1cbiAgc2V0IHBvc3RQcm9jZXNzb3JzKHZhbHVlOiBQb3N0UHJvY2Vzc29ycyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Bvc3RQcm9jZXNzb3JzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUG9zdFByb2Nlc3Npbmcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUG9zdFByb2Nlc3NpbmcuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBwaXBlbGluZTogKHRoaXMucGlwZWxpbmUgfHwgW10pLnNsaWNlKCksXG4gICAgICBwb3N0UHJvY2Vzc29yczogdGhpcy5wb3N0UHJvY2Vzc29yc1xuICAgICAgICA/IHRoaXMucG9zdFByb2Nlc3NvcnMudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFBvc3RQcm9jZXNzaW5nLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGlwZWxpbmU6ICh0aGlzLnBpcGVsaW5lIHx8IFtdKS5zbGljZSgpLFxuICAgICAgcG9zdFByb2Nlc3NvcnM6IHRoaXMucG9zdFByb2Nlc3NvcnNcbiAgICAgICAgPyB0aGlzLnBvc3RQcm9jZXNzb3JzLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUG9zdFByb2Nlc3Npbmcge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFBvc3RQcm9jZXNzaW5nXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwaXBlbGluZTogc3RyaW5nW107XG4gICAgcG9zdFByb2Nlc3NvcnM/OiBQb3N0UHJvY2Vzc29ycy5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBQb3N0UHJvY2Vzc2luZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcGlwZWxpbmU6IHN0cmluZ1tdO1xuICAgIHBvc3RQcm9jZXNzb3JzOiBQb3N0UHJvY2Vzc29ycy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LlBvc3RQcm9jZXNzb3JzXG4gKi9cbmV4cG9ydCBjbGFzcyBQb3N0UHJvY2Vzc29ycyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuUG9zdFByb2Nlc3NvcnMnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBQb3N0UHJvY2Vzc29ycygpO1xuICAgIFBvc3RQcm9jZXNzb3JzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogUG9zdFByb2Nlc3NvcnMpIHtcbiAgICBfaW5zdGFuY2Uuc3ltU3BlbGwgPSBfaW5zdGFuY2Uuc3ltU3BlbGwgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5ub3JtYWxpemF0aW9uID0gX2luc3RhbmNlLm5vcm1hbGl6YXRpb24gfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogUG9zdFByb2Nlc3NvcnMsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnN5bVNwZWxsID0gbmV3IFN5bVNwZWxsKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zeW1TcGVsbCxcbiAgICAgICAgICAgIFN5bVNwZWxsLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2Uubm9ybWFsaXphdGlvbiA9IG5ldyBTMlROb3JtYWxpemF0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5ub3JtYWxpemF0aW9uLFxuICAgICAgICAgICAgUzJUTm9ybWFsaXphdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUG9zdFByb2Nlc3NvcnMucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBQb3N0UHJvY2Vzc29ycyxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5zeW1TcGVsbCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS5zeW1TcGVsbCBhcyBhbnksXG4gICAgICAgIFN5bVNwZWxsLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm5vcm1hbGl6YXRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2Uubm9ybWFsaXphdGlvbiBhcyBhbnksXG4gICAgICAgIFMyVE5vcm1hbGl6YXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3ltU3BlbGw/OiBTeW1TcGVsbDtcbiAgcHJpdmF0ZSBfbm9ybWFsaXphdGlvbj86IFMyVE5vcm1hbGl6YXRpb247XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBQb3N0UHJvY2Vzc29ycyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxQb3N0UHJvY2Vzc29ycy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5zeW1TcGVsbCA9IF92YWx1ZS5zeW1TcGVsbCA/IG5ldyBTeW1TcGVsbChfdmFsdWUuc3ltU3BlbGwpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubm9ybWFsaXphdGlvbiA9IF92YWx1ZS5ub3JtYWxpemF0aW9uXG4gICAgICA/IG5ldyBTMlROb3JtYWxpemF0aW9uKF92YWx1ZS5ub3JtYWxpemF0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgUG9zdFByb2Nlc3NvcnMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzeW1TcGVsbCgpOiBTeW1TcGVsbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3N5bVNwZWxsO1xuICB9XG4gIHNldCBzeW1TcGVsbCh2YWx1ZTogU3ltU3BlbGwgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zeW1TcGVsbCA9IHZhbHVlO1xuICB9XG4gIGdldCBub3JtYWxpemF0aW9uKCk6IFMyVE5vcm1hbGl6YXRpb24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9ub3JtYWxpemF0aW9uO1xuICB9XG4gIHNldCBub3JtYWxpemF0aW9uKHZhbHVlOiBTMlROb3JtYWxpemF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbm9ybWFsaXphdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFBvc3RQcm9jZXNzb3JzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFBvc3RQcm9jZXNzb3JzLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3ltU3BlbGw6IHRoaXMuc3ltU3BlbGwgPyB0aGlzLnN5bVNwZWxsLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBub3JtYWxpemF0aW9uOiB0aGlzLm5vcm1hbGl6YXRpb25cbiAgICAgICAgPyB0aGlzLm5vcm1hbGl6YXRpb24udG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFBvc3RQcm9jZXNzb3JzLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3ltU3BlbGw6IHRoaXMuc3ltU3BlbGwgPyB0aGlzLnN5bVNwZWxsLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIG5vcm1hbGl6YXRpb246IHRoaXMubm9ybWFsaXphdGlvblxuICAgICAgICA/IHRoaXMubm9ybWFsaXphdGlvbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGxcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFBvc3RQcm9jZXNzb3JzIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBQb3N0UHJvY2Vzc29yc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgc3ltU3BlbGw/OiBTeW1TcGVsbC5Bc09iamVjdDtcbiAgICBub3JtYWxpemF0aW9uPzogUzJUTm9ybWFsaXphdGlvbi5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBQb3N0UHJvY2Vzc29yc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgc3ltU3BlbGw6IFN5bVNwZWxsLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBub3JtYWxpemF0aW9uOiBTMlROb3JtYWxpemF0aW9uLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuU3ltU3BlbGxcbiAqL1xuZXhwb3J0IGNsYXNzIFN5bVNwZWxsIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5TeW1TcGVsbCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFN5bVNwZWxsKCk7XG4gICAgU3ltU3BlbGwuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTeW1TcGVsbCkge1xuICAgIF9pbnN0YW5jZS5kaWN0UGF0aCA9IF9pbnN0YW5jZS5kaWN0UGF0aCB8fCAnJztcbiAgICBfaW5zdGFuY2UubWF4RGljdGlvbmFyeUVkaXREaXN0YW5jZSA9XG4gICAgICBfaW5zdGFuY2UubWF4RGljdGlvbmFyeUVkaXREaXN0YW5jZSB8fCAnMCc7XG4gICAgX2luc3RhbmNlLnByZWZpeExlbmd0aCA9IF9pbnN0YW5jZS5wcmVmaXhMZW5ndGggfHwgJzAnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogU3ltU3BlbGwsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmRpY3RQYXRoID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubWF4RGljdGlvbmFyeUVkaXREaXN0YW5jZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UucHJlZml4TGVuZ3RoID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFN5bVNwZWxsLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogU3ltU3BlbGwsIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2UuZGljdFBhdGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmRpY3RQYXRoKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tYXhEaWN0aW9uYXJ5RWRpdERpc3RhbmNlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMiwgX2luc3RhbmNlLm1heERpY3Rpb25hcnlFZGl0RGlzdGFuY2UpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnByZWZpeExlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDMsIF9pbnN0YW5jZS5wcmVmaXhMZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2RpY3RQYXRoOiBzdHJpbmc7XG4gIHByaXZhdGUgX21heERpY3Rpb25hcnlFZGl0RGlzdGFuY2U6IHN0cmluZztcbiAgcHJpdmF0ZSBfcHJlZml4TGVuZ3RoOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTeW1TcGVsbCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTeW1TcGVsbC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5kaWN0UGF0aCA9IF92YWx1ZS5kaWN0UGF0aDtcbiAgICB0aGlzLm1heERpY3Rpb25hcnlFZGl0RGlzdGFuY2UgPSBfdmFsdWUubWF4RGljdGlvbmFyeUVkaXREaXN0YW5jZTtcbiAgICB0aGlzLnByZWZpeExlbmd0aCA9IF92YWx1ZS5wcmVmaXhMZW5ndGg7XG4gICAgU3ltU3BlbGwucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBkaWN0UGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kaWN0UGF0aDtcbiAgfVxuICBzZXQgZGljdFBhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RpY3RQYXRoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1heERpY3Rpb25hcnlFZGl0RGlzdGFuY2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4RGljdGlvbmFyeUVkaXREaXN0YW5jZTtcbiAgfVxuICBzZXQgbWF4RGljdGlvbmFyeUVkaXREaXN0YW5jZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWF4RGljdGlvbmFyeUVkaXREaXN0YW5jZSA9IHZhbHVlO1xuICB9XG4gIGdldCBwcmVmaXhMZW5ndGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZml4TGVuZ3RoO1xuICB9XG4gIHNldCBwcmVmaXhMZW5ndGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWZpeExlbmd0aCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFN5bVNwZWxsLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFN5bVNwZWxsLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGljdFBhdGg6IHRoaXMuZGljdFBhdGgsXG4gICAgICBtYXhEaWN0aW9uYXJ5RWRpdERpc3RhbmNlOiB0aGlzLm1heERpY3Rpb25hcnlFZGl0RGlzdGFuY2UsXG4gICAgICBwcmVmaXhMZW5ndGg6IHRoaXMucHJlZml4TGVuZ3RoXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogU3ltU3BlbGwuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBkaWN0UGF0aDogdGhpcy5kaWN0UGF0aCxcbiAgICAgIG1heERpY3Rpb25hcnlFZGl0RGlzdGFuY2U6IHRoaXMubWF4RGljdGlvbmFyeUVkaXREaXN0YW5jZSxcbiAgICAgIHByZWZpeExlbmd0aDogdGhpcy5wcmVmaXhMZW5ndGhcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFN5bVNwZWxsIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBTeW1TcGVsbFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgZGljdFBhdGg6IHN0cmluZztcbiAgICBtYXhEaWN0aW9uYXJ5RWRpdERpc3RhbmNlOiBzdHJpbmc7XG4gICAgcHJlZml4TGVuZ3RoOiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgU3ltU3BlbGxcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGRpY3RQYXRoOiBzdHJpbmc7XG4gICAgbWF4RGljdGlvbmFyeUVkaXREaXN0YW5jZTogc3RyaW5nO1xuICAgIHByZWZpeExlbmd0aDogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5TMlROb3JtYWxpemF0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTMlROb3JtYWxpemF0aW9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5TMlROb3JtYWxpemF0aW9uJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUzJUTm9ybWFsaXphdGlvbigpO1xuICAgIFMyVE5vcm1hbGl6YXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTMlROb3JtYWxpemF0aW9uKSB7XG4gICAgX2luc3RhbmNlLmxhbmd1YWdlID0gX2luc3RhbmNlLmxhbmd1YWdlIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogUzJUTm9ybWFsaXphdGlvbixcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UubGFuZ3VhZ2UgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFMyVE5vcm1hbGl6YXRpb24ucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBTMlROb3JtYWxpemF0aW9uLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5sYW5ndWFnZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbGFuZ3VhZ2U6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFMyVE5vcm1hbGl6YXRpb24gdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UzJUTm9ybWFsaXphdGlvbi5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5sYW5ndWFnZSA9IF92YWx1ZS5sYW5ndWFnZTtcbiAgICBTMlROb3JtYWxpemF0aW9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2U7XG4gIH1cbiAgc2V0IGxhbmd1YWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYW5ndWFnZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFMyVE5vcm1hbGl6YXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUzJUTm9ybWFsaXphdGlvbi5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogUzJUTm9ybWFsaXphdGlvbi5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTMlROb3JtYWxpemF0aW9uIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBTMlROb3JtYWxpemF0aW9uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBsYW5ndWFnZTogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFMyVE5vcm1hbGl6YXRpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGxhbmd1YWdlOiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LkxvZ2dpbmdcbiAqL1xuZXhwb3J0IGNsYXNzIExvZ2dpbmcgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LkxvZ2dpbmcnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMb2dnaW5nKCk7XG4gICAgTG9nZ2luZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExvZ2dpbmcpIHtcbiAgICBfaW5zdGFuY2UudHlwZSA9IF9pbnN0YW5jZS50eXBlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5wYXRoID0gX2luc3RhbmNlLnBhdGggfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMb2dnaW5nLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS50eXBlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UucGF0aCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTG9nZ2luZy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IExvZ2dpbmcsIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2UudHlwZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UudHlwZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGF0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UucGF0aCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdHlwZTogc3RyaW5nO1xuICBwcml2YXRlIF9wYXRoOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBMb2dnaW5nIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExvZ2dpbmcuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudHlwZSA9IF92YWx1ZS50eXBlO1xuICAgIHRoaXMucGF0aCA9IF92YWx1ZS5wYXRoO1xuICAgIExvZ2dpbmcucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbiAgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wYXRoO1xuICB9XG4gIHNldCBwYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXRoID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTG9nZ2luZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBMb2dnaW5nLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgcGF0aDogdGhpcy5wYXRoXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTG9nZ2luZy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTG9nZ2luZyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTG9nZ2luZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIHBhdGg6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMb2dnaW5nXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgcGF0aDogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5MaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5MaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFMydExhbmd1YWdlTW9kZWxzUmVxdWVzdCgpO1xuICAgIExpc3RTMnRMYW5ndWFnZU1vZGVsc1JlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLmlkcyA9IF9pbnN0YW5jZS5pZHMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChfaW5zdGFuY2UuaWRzID0gX2luc3RhbmNlLmlkcyB8fCBbXSkucHVzaChfcmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdFMydExhbmd1YWdlTW9kZWxzUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5pZHMgJiYgX2luc3RhbmNlLmlkcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBfaW5zdGFuY2UuaWRzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pZHM6IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTGlzdFMydExhbmd1YWdlTW9kZWxzUmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXF1ZXN0LkFzT2JqZWN0PlxuICApIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5pZHMgPSAoX3ZhbHVlLmlkcyB8fCBbXSkuc2xpY2UoKTtcbiAgICBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaWRzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5faWRzO1xuICB9XG4gIHNldCBpZHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5faWRzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdFMydExhbmd1YWdlTW9kZWxzUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWRzOiAodGhpcy5pZHMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWRzOiAodGhpcy5pZHMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RTMnRMYW5ndWFnZU1vZGVsc1JlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExpc3RTMnRMYW5ndWFnZU1vZGVsc1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGlkczogc3RyaW5nW107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTGlzdFMydExhbmd1YWdlTW9kZWxzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgaWRzOiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuTGFuZ3VhZ2VNb2RlbFBpcGVsaW5lSWRcbiAqL1xuZXhwb3J0IGNsYXNzIExhbmd1YWdlTW9kZWxQaXBlbGluZUlkIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5MYW5ndWFnZU1vZGVsUGlwZWxpbmVJZCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExhbmd1YWdlTW9kZWxQaXBlbGluZUlkKCk7XG4gICAgTGFuZ3VhZ2VNb2RlbFBpcGVsaW5lSWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBMYW5ndWFnZU1vZGVsUGlwZWxpbmVJZCkge1xuICAgIF9pbnN0YW5jZS5waXBlbGluZUlkID0gX2luc3RhbmNlLnBpcGVsaW5lSWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLm1vZGVsTmFtZXMgPSBfaW5zdGFuY2UubW9kZWxOYW1lcyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IExhbmd1YWdlTW9kZWxQaXBlbGluZUlkLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5waXBlbGluZUlkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAoX2luc3RhbmNlLm1vZGVsTmFtZXMgPSBfaW5zdGFuY2UubW9kZWxOYW1lcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExhbmd1YWdlTW9kZWxQaXBlbGluZUlkLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTGFuZ3VhZ2VNb2RlbFBpcGVsaW5lSWQsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucGlwZWxpbmVJZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucGlwZWxpbmVJZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubW9kZWxOYW1lcyAmJiBfaW5zdGFuY2UubW9kZWxOYW1lcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygyLCBfaW5zdGFuY2UubW9kZWxOYW1lcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGlwZWxpbmVJZDogc3RyaW5nO1xuICBwcml2YXRlIF9tb2RlbE5hbWVzOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIExhbmd1YWdlTW9kZWxQaXBlbGluZUlkIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExhbmd1YWdlTW9kZWxQaXBlbGluZUlkLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBpcGVsaW5lSWQgPSBfdmFsdWUucGlwZWxpbmVJZDtcbiAgICB0aGlzLm1vZGVsTmFtZXMgPSAoX3ZhbHVlLm1vZGVsTmFtZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgTGFuZ3VhZ2VNb2RlbFBpcGVsaW5lSWQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwaXBlbGluZUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BpcGVsaW5lSWQ7XG4gIH1cbiAgc2V0IHBpcGVsaW5lSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BpcGVsaW5lSWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbW9kZWxOYW1lcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVsTmFtZXM7XG4gIH1cbiAgc2V0IG1vZGVsTmFtZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fbW9kZWxOYW1lcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExhbmd1YWdlTW9kZWxQaXBlbGluZUlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IExhbmd1YWdlTW9kZWxQaXBlbGluZUlkLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGlwZWxpbmVJZDogdGhpcy5waXBlbGluZUlkLFxuICAgICAgbW9kZWxOYW1lczogKHRoaXMubW9kZWxOYW1lcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IExhbmd1YWdlTW9kZWxQaXBlbGluZUlkLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGlwZWxpbmVJZDogdGhpcy5waXBlbGluZUlkLFxuICAgICAgbW9kZWxOYW1lczogKHRoaXMubW9kZWxOYW1lcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGFuZ3VhZ2VNb2RlbFBpcGVsaW5lSWQge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExhbmd1YWdlTW9kZWxQaXBlbGluZUlkXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwaXBlbGluZUlkOiBzdHJpbmc7XG4gICAgbW9kZWxOYW1lczogc3RyaW5nW107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTGFuZ3VhZ2VNb2RlbFBpcGVsaW5lSWRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBpcGVsaW5lSWQ6IHN0cmluZztcbiAgICBtb2RlbE5hbWVzOiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuTGlzdFMydExhbmd1YWdlTW9kZWxzUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIExpc3RTMnRMYW5ndWFnZU1vZGVsc1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5MaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RTMnRMYW5ndWFnZU1vZGVsc1Jlc3BvbnNlKCk7XG4gICAgTGlzdFMydExhbmd1YWdlTW9kZWxzUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5sbVBpcGVsaW5lSWRzID0gX2luc3RhbmNlLmxtUGlwZWxpbmVJZHMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IExhbmd1YWdlTW9kZWxQaXBlbGluZUlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICBMYW5ndWFnZU1vZGVsUGlwZWxpbmVJZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UubG1QaXBlbGluZUlkcyA9IF9pbnN0YW5jZS5sbVBpcGVsaW5lSWRzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RTMnRMYW5ndWFnZU1vZGVsc1Jlc3BvbnNlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmxtUGlwZWxpbmVJZHMgJiYgX2luc3RhbmNlLmxtUGlwZWxpbmVJZHMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UubG1QaXBlbGluZUlkcyBhcyBhbnksXG4gICAgICAgIExhbmd1YWdlTW9kZWxQaXBlbGluZUlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xtUGlwZWxpbmVJZHM/OiBMYW5ndWFnZU1vZGVsUGlwZWxpbmVJZFtdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTGlzdFMydExhbmd1YWdlTW9kZWxzUmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFMydExhbmd1YWdlTW9kZWxzUmVzcG9uc2UuQXNPYmplY3Q+XG4gICkge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxtUGlwZWxpbmVJZHMgPSAoX3ZhbHVlLmxtUGlwZWxpbmVJZHMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IExhbmd1YWdlTW9kZWxQaXBlbGluZUlkKG0pXG4gICAgKTtcbiAgICBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGxtUGlwZWxpbmVJZHMoKTogTGFuZ3VhZ2VNb2RlbFBpcGVsaW5lSWRbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xtUGlwZWxpbmVJZHM7XG4gIH1cbiAgc2V0IGxtUGlwZWxpbmVJZHModmFsdWU6IExhbmd1YWdlTW9kZWxQaXBlbGluZUlkW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sbVBpcGVsaW5lSWRzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdFMydExhbmd1YWdlTW9kZWxzUmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTGlzdFMydExhbmd1YWdlTW9kZWxzUmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBsbVBpcGVsaW5lSWRzOiAodGhpcy5sbVBpcGVsaW5lSWRzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTGlzdFMydExhbmd1YWdlTW9kZWxzUmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBsbVBpcGVsaW5lSWRzOiAodGhpcy5sbVBpcGVsaW5lSWRzIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICApXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXNwb25zZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTGlzdFMydExhbmd1YWdlTW9kZWxzUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGxtUGlwZWxpbmVJZHM/OiBMYW5ndWFnZU1vZGVsUGlwZWxpbmVJZC5Bc09iamVjdFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIExpc3RTMnRMYW5ndWFnZU1vZGVsc1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBsbVBpcGVsaW5lSWRzOiBMYW5ndWFnZU1vZGVsUGlwZWxpbmVJZC5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuQ3JlYXRlVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBDcmVhdGVVc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LkNyZWF0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENyZWF0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCgpO1xuICAgIENyZWF0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IENyZWF0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSA9IF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IENyZWF0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UubGFuZ3VhZ2VNb2RlbE5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIENyZWF0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IENyZWF0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UubGFuZ3VhZ2VNb2RlbE5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xhbmd1YWdlTW9kZWxOYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBDcmVhdGVVc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q3JlYXRlVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0LkFzT2JqZWN0PlxuICApIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5sYW5ndWFnZU1vZGVsTmFtZSA9IF92YWx1ZS5sYW5ndWFnZU1vZGVsTmFtZTtcbiAgICBDcmVhdGVVc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBsYW5ndWFnZU1vZGVsTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZU1vZGVsTmFtZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VNb2RlbE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhbmd1YWdlTW9kZWxOYW1lID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ3JlYXRlVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IENyZWF0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlTW9kZWxOYW1lOiB0aGlzLmxhbmd1YWdlTW9kZWxOYW1lXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ3JlYXRlVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFuZ3VhZ2VNb2RlbE5hbWU6IHRoaXMubGFuZ3VhZ2VNb2RlbE5hbWVcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENyZWF0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQ3JlYXRlVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBsYW5ndWFnZU1vZGVsTmFtZTogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIENyZWF0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbGFuZ3VhZ2VNb2RlbE5hbWU6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuRGVsZXRlVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBEZWxldGVVc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LkRlbGV0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IERlbGV0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCgpO1xuICAgIERlbGV0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IERlbGV0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSA9IF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IERlbGV0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UubGFuZ3VhZ2VNb2RlbE5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIERlbGV0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IERlbGV0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UubGFuZ3VhZ2VNb2RlbE5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xhbmd1YWdlTW9kZWxOYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBEZWxldGVVc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RGVsZXRlVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0LkFzT2JqZWN0PlxuICApIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5sYW5ndWFnZU1vZGVsTmFtZSA9IF92YWx1ZS5sYW5ndWFnZU1vZGVsTmFtZTtcbiAgICBEZWxldGVVc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBsYW5ndWFnZU1vZGVsTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZU1vZGVsTmFtZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VNb2RlbE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhbmd1YWdlTW9kZWxOYW1lID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRGVsZXRlVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IERlbGV0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlTW9kZWxOYW1lOiB0aGlzLmxhbmd1YWdlTW9kZWxOYW1lXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogRGVsZXRlVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFuZ3VhZ2VNb2RlbE5hbWU6IHRoaXMubGFuZ3VhZ2VNb2RlbE5hbWVcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIERlbGV0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgRGVsZXRlVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBsYW5ndWFnZU1vZGVsTmFtZTogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIERlbGV0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbGFuZ3VhZ2VNb2RlbE5hbWU6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuQWRkRGF0YVRvVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBBZGREYXRhVG9Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LkFkZERhdGFUb1VzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEFkZERhdGFUb1VzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCgpO1xuICAgIEFkZERhdGFUb1VzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEFkZERhdGFUb1VzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSA9IF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UuemlwcGVkRGF0YSA9IF9pbnN0YW5jZS56aXBwZWREYXRhIHx8IG5ldyBVaW50OEFycmF5KCk7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBBZGREYXRhVG9Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmxhbmd1YWdlTW9kZWxOYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuemlwcGVkRGF0YSA9IF9yZWFkZXIucmVhZEJ5dGVzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBZGREYXRhVG9Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBBZGREYXRhVG9Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2VNb2RlbE5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmxhbmd1YWdlTW9kZWxOYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS56aXBwZWREYXRhICYmIF9pbnN0YW5jZS56aXBwZWREYXRhLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZUJ5dGVzKDIsIF9pbnN0YW5jZS56aXBwZWREYXRhKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sYW5ndWFnZU1vZGVsTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF96aXBwZWREYXRhOiBVaW50OEFycmF5O1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQWRkRGF0YVRvVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEFkZERhdGFUb1VzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5Bc09iamVjdD5cbiAgKSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubGFuZ3VhZ2VNb2RlbE5hbWUgPSBfdmFsdWUubGFuZ3VhZ2VNb2RlbE5hbWU7XG4gICAgdGhpcy56aXBwZWREYXRhID0gX3ZhbHVlLnppcHBlZERhdGE7XG4gICAgQWRkRGF0YVRvVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VNb2RlbE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VNb2RlbE5hbWU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlTW9kZWxOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYW5ndWFnZU1vZGVsTmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCB6aXBwZWREYXRhKCk6IFVpbnQ4QXJyYXkge1xuICAgIHJldHVybiB0aGlzLl96aXBwZWREYXRhO1xuICB9XG4gIHNldCB6aXBwZWREYXRhKHZhbHVlOiBVaW50OEFycmF5KSB7XG4gICAgdGhpcy5femlwcGVkRGF0YSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEFkZERhdGFUb1VzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBBZGREYXRhVG9Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZU1vZGVsTmFtZTogdGhpcy5sYW5ndWFnZU1vZGVsTmFtZSxcbiAgICAgIHppcHBlZERhdGE6IHRoaXMuemlwcGVkRGF0YVxuICAgICAgICA/IHRoaXMuemlwcGVkRGF0YS5zdWJhcnJheSgwKVxuICAgICAgICA6IG5ldyBVaW50OEFycmF5KClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBBZGREYXRhVG9Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZU1vZGVsTmFtZTogdGhpcy5sYW5ndWFnZU1vZGVsTmFtZSxcbiAgICAgIHppcHBlZERhdGE6IHRoaXMuemlwcGVkRGF0YSA/IHVpbnQ4QXJyYXlUb0Jhc2U2NCh0aGlzLnppcHBlZERhdGEpIDogJydcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEFkZERhdGFUb1VzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQWRkRGF0YVRvVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBsYW5ndWFnZU1vZGVsTmFtZTogc3RyaW5nO1xuICAgIHppcHBlZERhdGE6IFVpbnQ4QXJyYXk7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQWRkRGF0YVRvVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBsYW5ndWFnZU1vZGVsTmFtZTogc3RyaW5nO1xuICAgIHppcHBlZERhdGE6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuVHJhaW5Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIFRyYWluVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5UcmFpblVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRyYWluVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0KCk7XG4gICAgVHJhaW5Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBUcmFpblVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSA9IF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2Uub3JkZXIgPSBfaW5zdGFuY2Uub3JkZXIgfHwgJzAnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogVHJhaW5Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmxhbmd1YWdlTW9kZWxOYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2Uub3JkZXIgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVHJhaW5Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBUcmFpblVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UubGFuZ3VhZ2VNb2RlbE5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm9yZGVyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMiwgX2luc3RhbmNlLm9yZGVyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sYW5ndWFnZU1vZGVsTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9vcmRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgVHJhaW5Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VHJhaW5Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QuQXNPYmplY3Q+XG4gICkge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhbmd1YWdlTW9kZWxOYW1lID0gX3ZhbHVlLmxhbmd1YWdlTW9kZWxOYW1lO1xuICAgIHRoaXMub3JkZXIgPSBfdmFsdWUub3JkZXI7XG4gICAgVHJhaW5Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBsYW5ndWFnZU1vZGVsTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZU1vZGVsTmFtZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VNb2RlbE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhbmd1YWdlTW9kZWxOYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9yZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX29yZGVyO1xuICB9XG4gIHNldCBvcmRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb3JkZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBUcmFpblVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBUcmFpblVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlTW9kZWxOYW1lOiB0aGlzLmxhbmd1YWdlTW9kZWxOYW1lLFxuICAgICAgb3JkZXI6IHRoaXMub3JkZXJcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBUcmFpblVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlTW9kZWxOYW1lOiB0aGlzLmxhbmd1YWdlTW9kZWxOYW1lLFxuICAgICAgb3JkZXI6IHRoaXMub3JkZXJcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFRyYWluVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBUcmFpblVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbGFuZ3VhZ2VNb2RlbE5hbWU6IHN0cmluZztcbiAgICBvcmRlcjogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFRyYWluVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBsYW5ndWFnZU1vZGVsTmFtZTogc3RyaW5nO1xuICAgIG9yZGVyOiBzdHJpbmc7XG4gIH1cbn1cbiJdfQ==
