(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngx-grpc/common'), require('@ngx-grpc/core'), require('google-protobuf'), require('@ngx-grpc/well-known-types')) :
    typeof define === 'function' && define.amd ? define('@ondewo/s2t-client-angular', ['exports', '@angular/core', '@ngx-grpc/common', '@ngx-grpc/core', 'google-protobuf', '@ngx-grpc/well-known-types'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ondewo = global.ondewo || {}, global.ondewo['s2t-client-angular'] = {}), global.ng.core, global.common, global.i2, global.googleProtobuf, global.googleProtobuf000));
}(this, (function (exports, i0, common, i2, googleProtobuf, googleProtobuf000) { 'use strict';

    /* tslint:disable */
    /**
     * Specific GrpcClientSettings for Speech2Text.
     * Use it only if your default settings are not set or the service requires other settings.
     */
    var GRPC_SPEECH2_TEXT_CLIENT_SETTINGS = new i0.InjectionToken('GRPC_SPEECH2_TEXT_CLIENT_SETTINGS');

    /* tslint:disable */
    (function (CTCDecoding) {
        CTCDecoding[CTCDecoding["GREEDY"] = 0] = "GREEDY";
        CTCDecoding[CTCDecoding["BEAM_SEARCH_WITH_LM"] = 1] = "BEAM_SEARCH_WITH_LM";
    })(exports.CTCDecoding || (exports.CTCDecoding = {}));
    /**
     * Message implementation for ondewo.s2t.TranscribeStreamRequest
     */
    var TranscribeStreamRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of TranscribeStreamRequest to deeply clone from
         */
        function TranscribeStreamRequest(_value) {
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
        TranscribeStreamRequest.deserializeBinary = function (bytes) {
            var instance = new TranscribeStreamRequest();
            TranscribeStreamRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        TranscribeStreamRequest.refineValues = function (_instance) {
            _instance.s2tPipelineId = _instance.s2tPipelineId || '';
            _instance.audioChunk = _instance.audioChunk || new Uint8Array();
            _instance.ctcDecoding = _instance.ctcDecoding || 0;
            _instance.spellingCorrection = _instance.spellingCorrection || false;
            _instance.disableNormalization = _instance.disableNormalization || false;
            _instance.endOfStream = _instance.endOfStream || false;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        TranscribeStreamRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        TranscribeStreamRequest.serializeBinaryToWriter = function (_instance, _writer) {
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
        };
        Object.defineProperty(TranscribeStreamRequest.prototype, "s2tPipelineId", {
            get: function () {
                return this._s2tPipelineId;
            },
            set: function (value) {
                this._s2tPipelineId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeStreamRequest.prototype, "audioChunk", {
            get: function () {
                return this._audioChunk;
            },
            set: function (value) {
                this._audioChunk = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeStreamRequest.prototype, "ctcDecoding", {
            get: function () {
                return this._ctcDecoding;
            },
            set: function (value) {
                this._ctcDecoding = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeStreamRequest.prototype, "spellingCorrection", {
            get: function () {
                return this._spellingCorrection;
            },
            set: function (value) {
                this._spellingCorrection = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeStreamRequest.prototype, "disableNormalization", {
            get: function () {
                return this._disableNormalization;
            },
            set: function (value) {
                this._disableNormalization = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeStreamRequest.prototype, "endOfStream", {
            get: function () {
                return this._endOfStream;
            },
            set: function (value) {
                this._endOfStream = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        TranscribeStreamRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            TranscribeStreamRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        TranscribeStreamRequest.prototype.toObject = function () {
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
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        TranscribeStreamRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        TranscribeStreamRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            var _a;
            return {
                s2tPipelineId: this.s2tPipelineId,
                audioChunk: this.audioChunk ? common.uint8ArrayToBase64(this.audioChunk) : '',
                ctcDecoding: exports.CTCDecoding[(_a = this.ctcDecoding) !== null && _a !== void 0 ? _a : 0],
                spellingCorrection: this.spellingCorrection,
                disableNormalization: this.disableNormalization,
                endOfStream: this.endOfStream
            };
        };
        return TranscribeStreamRequest;
    }());
    TranscribeStreamRequest.id = 'ondewo.s2t.TranscribeStreamRequest';
    /**
     * Message implementation for ondewo.s2t.TranscribeStreamResponse
     */
    var TranscribeStreamResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of TranscribeStreamResponse to deeply clone from
         */
        function TranscribeStreamResponse(_value) {
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
        TranscribeStreamResponse.deserializeBinary = function (bytes) {
            var instance = new TranscribeStreamResponse();
            TranscribeStreamResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        TranscribeStreamResponse.refineValues = function (_instance) {
            _instance.transcription = _instance.transcription || '';
            _instance.time = _instance.time || 0;
            _instance.final = _instance.final || false;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        TranscribeStreamResponse.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        TranscribeStreamResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.transcription) {
                _writer.writeString(1, _instance.transcription);
            }
            if (_instance.time) {
                _writer.writeFloat(2, _instance.time);
            }
            if (_instance.final) {
                _writer.writeBool(3, _instance.final);
            }
        };
        Object.defineProperty(TranscribeStreamResponse.prototype, "transcription", {
            get: function () {
                return this._transcription;
            },
            set: function (value) {
                this._transcription = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeStreamResponse.prototype, "time", {
            get: function () {
                return this._time;
            },
            set: function (value) {
                this._time = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeStreamResponse.prototype, "final", {
            get: function () {
                return this._final;
            },
            set: function (value) {
                this._final = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        TranscribeStreamResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            TranscribeStreamResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        TranscribeStreamResponse.prototype.toObject = function () {
            return {
                transcription: this.transcription,
                time: this.time,
                final: this.final
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        TranscribeStreamResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        TranscribeStreamResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                transcription: this.transcription,
                time: this.time,
                final: this.final
            };
        };
        return TranscribeStreamResponse;
    }());
    TranscribeStreamResponse.id = 'ondewo.s2t.TranscribeStreamResponse';
    /**
     * Message implementation for ondewo.s2t.TranscribeFileRequest
     */
    var TranscribeFileRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of TranscribeFileRequest to deeply clone from
         */
        function TranscribeFileRequest(_value) {
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
        TranscribeFileRequest.deserializeBinary = function (bytes) {
            var instance = new TranscribeFileRequest();
            TranscribeFileRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        TranscribeFileRequest.refineValues = function (_instance) {
            _instance.s2tPipelineId = _instance.s2tPipelineId || '';
            _instance.audioFile = _instance.audioFile || new Uint8Array();
            _instance.ctcDecoding = _instance.ctcDecoding || 0;
            _instance.spellingCorrection = _instance.spellingCorrection || false;
            _instance.disableNormalization = _instance.disableNormalization || false;
            _instance.includeTiming = _instance.includeTiming || false;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        TranscribeFileRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        TranscribeFileRequest.serializeBinaryToWriter = function (_instance, _writer) {
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
        };
        Object.defineProperty(TranscribeFileRequest.prototype, "s2tPipelineId", {
            get: function () {
                return this._s2tPipelineId;
            },
            set: function (value) {
                this._s2tPipelineId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeFileRequest.prototype, "audioFile", {
            get: function () {
                return this._audioFile;
            },
            set: function (value) {
                this._audioFile = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeFileRequest.prototype, "ctcDecoding", {
            get: function () {
                return this._ctcDecoding;
            },
            set: function (value) {
                this._ctcDecoding = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeFileRequest.prototype, "spellingCorrection", {
            get: function () {
                return this._spellingCorrection;
            },
            set: function (value) {
                this._spellingCorrection = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeFileRequest.prototype, "disableNormalization", {
            get: function () {
                return this._disableNormalization;
            },
            set: function (value) {
                this._disableNormalization = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeFileRequest.prototype, "includeTiming", {
            get: function () {
                return this._includeTiming;
            },
            set: function (value) {
                this._includeTiming = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        TranscribeFileRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            TranscribeFileRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        TranscribeFileRequest.prototype.toObject = function () {
            return {
                s2tPipelineId: this.s2tPipelineId,
                audioFile: this.audioFile ? this.audioFile.subarray(0) : new Uint8Array(),
                ctcDecoding: this.ctcDecoding,
                spellingCorrection: this.spellingCorrection,
                disableNormalization: this.disableNormalization,
                includeTiming: this.includeTiming
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        TranscribeFileRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        TranscribeFileRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            var _a;
            return {
                s2tPipelineId: this.s2tPipelineId,
                audioFile: this.audioFile ? common.uint8ArrayToBase64(this.audioFile) : '',
                ctcDecoding: exports.CTCDecoding[(_a = this.ctcDecoding) !== null && _a !== void 0 ? _a : 0],
                spellingCorrection: this.spellingCorrection,
                disableNormalization: this.disableNormalization,
                includeTiming: this.includeTiming
            };
        };
        return TranscribeFileRequest;
    }());
    TranscribeFileRequest.id = 'ondewo.s2t.TranscribeFileRequest';
    /**
     * Message implementation for ondewo.s2t.TranscribeFileResponse
     */
    var TranscribeFileResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of TranscribeFileResponse to deeply clone from
         */
        function TranscribeFileResponse(_value) {
            _value = _value || {};
            this.transcription = _value.transcription;
            this.time = _value.time;
            this.wordTiming = (_value.wordTiming || []).map(function (m) { return new WordTiming(m); });
            TranscribeFileResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        TranscribeFileResponse.deserializeBinary = function (bytes) {
            var instance = new TranscribeFileResponse();
            TranscribeFileResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        TranscribeFileResponse.refineValues = function (_instance) {
            _instance.transcription = _instance.transcription || '';
            _instance.time = _instance.time || 0;
            _instance.wordTiming = _instance.wordTiming || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        TranscribeFileResponse.deserializeBinaryFromReader = function (_instance, _reader) {
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
                        var messageInitializer3 = new WordTiming();
                        _reader.readMessage(messageInitializer3, WordTiming.deserializeBinaryFromReader);
                        (_instance.wordTiming = _instance.wordTiming || []).push(messageInitializer3);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            TranscribeFileResponse.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        TranscribeFileResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.transcription) {
                _writer.writeString(1, _instance.transcription);
            }
            if (_instance.time) {
                _writer.writeFloat(2, _instance.time);
            }
            if (_instance.wordTiming && _instance.wordTiming.length) {
                _writer.writeRepeatedMessage(3, _instance.wordTiming, WordTiming.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(TranscribeFileResponse.prototype, "transcription", {
            get: function () {
                return this._transcription;
            },
            set: function (value) {
                this._transcription = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeFileResponse.prototype, "time", {
            get: function () {
                return this._time;
            },
            set: function (value) {
                this._time = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeFileResponse.prototype, "wordTiming", {
            get: function () {
                return this._wordTiming;
            },
            set: function (value) {
                this._wordTiming = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        TranscribeFileResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            TranscribeFileResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        TranscribeFileResponse.prototype.toObject = function () {
            return {
                transcription: this.transcription,
                time: this.time,
                wordTiming: (this.wordTiming || []).map(function (m) { return m.toObject(); })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        TranscribeFileResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        TranscribeFileResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                transcription: this.transcription,
                time: this.time,
                wordTiming: (this.wordTiming || []).map(function (m) { return m.toProtobufJSON(options); })
            };
        };
        return TranscribeFileResponse;
    }());
    TranscribeFileResponse.id = 'ondewo.s2t.TranscribeFileResponse';
    /**
     * Message implementation for ondewo.s2t.WordTiming
     */
    var WordTiming = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of WordTiming to deeply clone from
         */
        function WordTiming(_value) {
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
        WordTiming.deserializeBinary = function (bytes) {
            var instance = new WordTiming();
            WordTiming.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        WordTiming.refineValues = function (_instance) {
            _instance.word = _instance.word || '';
            _instance.begin = _instance.begin || 0;
            _instance.end = _instance.end || 0;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        WordTiming.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        WordTiming.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.word) {
                _writer.writeString(1, _instance.word);
            }
            if (_instance.begin) {
                _writer.writeInt32(2, _instance.begin);
            }
            if (_instance.end) {
                _writer.writeInt32(3, _instance.end);
            }
        };
        Object.defineProperty(WordTiming.prototype, "word", {
            get: function () {
                return this._word;
            },
            set: function (value) {
                this._word = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(WordTiming.prototype, "begin", {
            get: function () {
                return this._begin;
            },
            set: function (value) {
                this._begin = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(WordTiming.prototype, "end", {
            get: function () {
                return this._end;
            },
            set: function (value) {
                this._end = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        WordTiming.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            WordTiming.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        WordTiming.prototype.toObject = function () {
            return {
                word: this.word,
                begin: this.begin,
                end: this.end
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        WordTiming.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        WordTiming.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                word: this.word,
                begin: this.begin,
                end: this.end
            };
        };
        return WordTiming;
    }());
    WordTiming.id = 'ondewo.s2t.WordTiming';
    /**
     * Message implementation for ondewo.s2t.S2tPipelineId
     */
    var S2tPipelineId = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of S2tPipelineId to deeply clone from
         */
        function S2tPipelineId(_value) {
            _value = _value || {};
            this.id = _value.id;
            S2tPipelineId.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        S2tPipelineId.deserializeBinary = function (bytes) {
            var instance = new S2tPipelineId();
            S2tPipelineId.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        S2tPipelineId.refineValues = function (_instance) {
            _instance.id = _instance.id || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        S2tPipelineId.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        S2tPipelineId.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.id) {
                _writer.writeString(1, _instance.id);
            }
        };
        Object.defineProperty(S2tPipelineId.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (value) {
                this._id = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        S2tPipelineId.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            S2tPipelineId.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        S2tPipelineId.prototype.toObject = function () {
            return {
                id: this.id
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        S2tPipelineId.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        S2tPipelineId.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                id: this.id
            };
        };
        return S2tPipelineId;
    }());
    S2tPipelineId.id = 'ondewo.s2t.S2tPipelineId';
    /**
     * Message implementation for ondewo.s2t.ListS2tPipelinesRequest
     */
    var ListS2tPipelinesRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ListS2tPipelinesRequest to deeply clone from
         */
        function ListS2tPipelinesRequest(_value) {
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
        ListS2tPipelinesRequest.deserializeBinary = function (bytes) {
            var instance = new ListS2tPipelinesRequest();
            ListS2tPipelinesRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        ListS2tPipelinesRequest.refineValues = function (_instance) {
            _instance.languages = _instance.languages || [];
            _instance.pipelineOwners = _instance.pipelineOwners || [];
            _instance.domains = _instance.domains || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        ListS2tPipelinesRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        ListS2tPipelinesRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.languages && _instance.languages.length) {
                _writer.writeRepeatedString(1, _instance.languages);
            }
            if (_instance.pipelineOwners && _instance.pipelineOwners.length) {
                _writer.writeRepeatedString(2, _instance.pipelineOwners);
            }
            if (_instance.domains && _instance.domains.length) {
                _writer.writeRepeatedString(3, _instance.domains);
            }
        };
        Object.defineProperty(ListS2tPipelinesRequest.prototype, "languages", {
            get: function () {
                return this._languages;
            },
            set: function (value) {
                this._languages = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListS2tPipelinesRequest.prototype, "pipelineOwners", {
            get: function () {
                return this._pipelineOwners;
            },
            set: function (value) {
                this._pipelineOwners = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListS2tPipelinesRequest.prototype, "domains", {
            get: function () {
                return this._domains;
            },
            set: function (value) {
                this._domains = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        ListS2tPipelinesRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            ListS2tPipelinesRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        ListS2tPipelinesRequest.prototype.toObject = function () {
            return {
                languages: (this.languages || []).slice(),
                pipelineOwners: (this.pipelineOwners || []).slice(),
                domains: (this.domains || []).slice()
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        ListS2tPipelinesRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        ListS2tPipelinesRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                languages: (this.languages || []).slice(),
                pipelineOwners: (this.pipelineOwners || []).slice(),
                domains: (this.domains || []).slice()
            };
        };
        return ListS2tPipelinesRequest;
    }());
    ListS2tPipelinesRequest.id = 'ondewo.s2t.ListS2tPipelinesRequest';
    /**
     * Message implementation for ondewo.s2t.ListS2tPipelinesResponse
     */
    var ListS2tPipelinesResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ListS2tPipelinesResponse to deeply clone from
         */
        function ListS2tPipelinesResponse(_value) {
            _value = _value || {};
            this.pipelineConfigs = (_value.pipelineConfigs || []).map(function (m) { return new Speech2TextConfig(m); });
            ListS2tPipelinesResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        ListS2tPipelinesResponse.deserializeBinary = function (bytes) {
            var instance = new ListS2tPipelinesResponse();
            ListS2tPipelinesResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        ListS2tPipelinesResponse.refineValues = function (_instance) {
            _instance.pipelineConfigs = _instance.pipelineConfigs || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        ListS2tPipelinesResponse.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        var messageInitializer1 = new Speech2TextConfig();
                        _reader.readMessage(messageInitializer1, Speech2TextConfig.deserializeBinaryFromReader);
                        (_instance.pipelineConfigs = _instance.pipelineConfigs || []).push(messageInitializer1);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            ListS2tPipelinesResponse.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        ListS2tPipelinesResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.pipelineConfigs && _instance.pipelineConfigs.length) {
                _writer.writeRepeatedMessage(1, _instance.pipelineConfigs, Speech2TextConfig.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(ListS2tPipelinesResponse.prototype, "pipelineConfigs", {
            get: function () {
                return this._pipelineConfigs;
            },
            set: function (value) {
                this._pipelineConfigs = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        ListS2tPipelinesResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            ListS2tPipelinesResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        ListS2tPipelinesResponse.prototype.toObject = function () {
            return {
                pipelineConfigs: (this.pipelineConfigs || []).map(function (m) { return m.toObject(); })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        ListS2tPipelinesResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        ListS2tPipelinesResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                pipelineConfigs: (this.pipelineConfigs || []).map(function (m) { return m.toProtobufJSON(options); })
            };
        };
        return ListS2tPipelinesResponse;
    }());
    ListS2tPipelinesResponse.id = 'ondewo.s2t.ListS2tPipelinesResponse';
    /**
     * Message implementation for ondewo.s2t.ListS2tLanguagesRequest
     */
    var ListS2tLanguagesRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ListS2tLanguagesRequest to deeply clone from
         */
        function ListS2tLanguagesRequest(_value) {
            _value = _value || {};
            this.domains = (_value.domains || []).slice();
            this.pipelineOwners = (_value.pipelineOwners || []).slice();
            ListS2tLanguagesRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        ListS2tLanguagesRequest.deserializeBinary = function (bytes) {
            var instance = new ListS2tLanguagesRequest();
            ListS2tLanguagesRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        ListS2tLanguagesRequest.refineValues = function (_instance) {
            _instance.domains = _instance.domains || [];
            _instance.pipelineOwners = _instance.pipelineOwners || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        ListS2tLanguagesRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        ListS2tLanguagesRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.domains && _instance.domains.length) {
                _writer.writeRepeatedString(1, _instance.domains);
            }
            if (_instance.pipelineOwners && _instance.pipelineOwners.length) {
                _writer.writeRepeatedString(2, _instance.pipelineOwners);
            }
        };
        Object.defineProperty(ListS2tLanguagesRequest.prototype, "domains", {
            get: function () {
                return this._domains;
            },
            set: function (value) {
                this._domains = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListS2tLanguagesRequest.prototype, "pipelineOwners", {
            get: function () {
                return this._pipelineOwners;
            },
            set: function (value) {
                this._pipelineOwners = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        ListS2tLanguagesRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            ListS2tLanguagesRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        ListS2tLanguagesRequest.prototype.toObject = function () {
            return {
                domains: (this.domains || []).slice(),
                pipelineOwners: (this.pipelineOwners || []).slice()
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        ListS2tLanguagesRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        ListS2tLanguagesRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                domains: (this.domains || []).slice(),
                pipelineOwners: (this.pipelineOwners || []).slice()
            };
        };
        return ListS2tLanguagesRequest;
    }());
    ListS2tLanguagesRequest.id = 'ondewo.s2t.ListS2tLanguagesRequest';
    /**
     * Message implementation for ondewo.s2t.ListS2tLanguagesResponse
     */
    var ListS2tLanguagesResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ListS2tLanguagesResponse to deeply clone from
         */
        function ListS2tLanguagesResponse(_value) {
            _value = _value || {};
            this.languages = (_value.languages || []).slice();
            ListS2tLanguagesResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        ListS2tLanguagesResponse.deserializeBinary = function (bytes) {
            var instance = new ListS2tLanguagesResponse();
            ListS2tLanguagesResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        ListS2tLanguagesResponse.refineValues = function (_instance) {
            _instance.languages = _instance.languages || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        ListS2tLanguagesResponse.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        ListS2tLanguagesResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.languages && _instance.languages.length) {
                _writer.writeRepeatedString(1, _instance.languages);
            }
        };
        Object.defineProperty(ListS2tLanguagesResponse.prototype, "languages", {
            get: function () {
                return this._languages;
            },
            set: function (value) {
                this._languages = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        ListS2tLanguagesResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            ListS2tLanguagesResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        ListS2tLanguagesResponse.prototype.toObject = function () {
            return {
                languages: (this.languages || []).slice()
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        ListS2tLanguagesResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        ListS2tLanguagesResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                languages: (this.languages || []).slice()
            };
        };
        return ListS2tLanguagesResponse;
    }());
    ListS2tLanguagesResponse.id = 'ondewo.s2t.ListS2tLanguagesResponse';
    /**
     * Message implementation for ondewo.s2t.ListS2tDomainsRequest
     */
    var ListS2tDomainsRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ListS2tDomainsRequest to deeply clone from
         */
        function ListS2tDomainsRequest(_value) {
            _value = _value || {};
            this.languages = (_value.languages || []).slice();
            this.pipelineOwners = (_value.pipelineOwners || []).slice();
            ListS2tDomainsRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        ListS2tDomainsRequest.deserializeBinary = function (bytes) {
            var instance = new ListS2tDomainsRequest();
            ListS2tDomainsRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        ListS2tDomainsRequest.refineValues = function (_instance) {
            _instance.languages = _instance.languages || [];
            _instance.pipelineOwners = _instance.pipelineOwners || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        ListS2tDomainsRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        ListS2tDomainsRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.languages && _instance.languages.length) {
                _writer.writeRepeatedString(1, _instance.languages);
            }
            if (_instance.pipelineOwners && _instance.pipelineOwners.length) {
                _writer.writeRepeatedString(2, _instance.pipelineOwners);
            }
        };
        Object.defineProperty(ListS2tDomainsRequest.prototype, "languages", {
            get: function () {
                return this._languages;
            },
            set: function (value) {
                this._languages = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListS2tDomainsRequest.prototype, "pipelineOwners", {
            get: function () {
                return this._pipelineOwners;
            },
            set: function (value) {
                this._pipelineOwners = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        ListS2tDomainsRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            ListS2tDomainsRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        ListS2tDomainsRequest.prototype.toObject = function () {
            return {
                languages: (this.languages || []).slice(),
                pipelineOwners: (this.pipelineOwners || []).slice()
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        ListS2tDomainsRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        ListS2tDomainsRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                languages: (this.languages || []).slice(),
                pipelineOwners: (this.pipelineOwners || []).slice()
            };
        };
        return ListS2tDomainsRequest;
    }());
    ListS2tDomainsRequest.id = 'ondewo.s2t.ListS2tDomainsRequest';
    /**
     * Message implementation for ondewo.s2t.ListS2tDomainsResponse
     */
    var ListS2tDomainsResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ListS2tDomainsResponse to deeply clone from
         */
        function ListS2tDomainsResponse(_value) {
            _value = _value || {};
            this.domains = (_value.domains || []).slice();
            ListS2tDomainsResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        ListS2tDomainsResponse.deserializeBinary = function (bytes) {
            var instance = new ListS2tDomainsResponse();
            ListS2tDomainsResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        ListS2tDomainsResponse.refineValues = function (_instance) {
            _instance.domains = _instance.domains || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        ListS2tDomainsResponse.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        ListS2tDomainsResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.domains && _instance.domains.length) {
                _writer.writeRepeatedString(1, _instance.domains);
            }
        };
        Object.defineProperty(ListS2tDomainsResponse.prototype, "domains", {
            get: function () {
                return this._domains;
            },
            set: function (value) {
                this._domains = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        ListS2tDomainsResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            ListS2tDomainsResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        ListS2tDomainsResponse.prototype.toObject = function () {
            return {
                domains: (this.domains || []).slice()
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        ListS2tDomainsResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        ListS2tDomainsResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                domains: (this.domains || []).slice()
            };
        };
        return ListS2tDomainsResponse;
    }());
    ListS2tDomainsResponse.id = 'ondewo.s2t.ListS2tDomainsResponse';
    /**
     * Message implementation for ondewo.s2t.Speech2TextConfig
     */
    var Speech2TextConfig = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Speech2TextConfig to deeply clone from
         */
        function Speech2TextConfig(_value) {
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
        Speech2TextConfig.deserializeBinary = function (bytes) {
            var instance = new Speech2TextConfig();
            Speech2TextConfig.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Speech2TextConfig.refineValues = function (_instance) {
            _instance.id = _instance.id || '';
            _instance.description = _instance.description || undefined;
            _instance.active = _instance.active || false;
            _instance.inference = _instance.inference || undefined;
            _instance.streamingServer = _instance.streamingServer || undefined;
            _instance.voiceActivityDetection =
                _instance.voiceActivityDetection || undefined;
            _instance.postProcessing = _instance.postProcessing || undefined;
            _instance.logging = _instance.logging || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Speech2TextConfig.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Speech2TextConfig.serializeBinaryToWriter = function (_instance, _writer) {
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
        };
        Object.defineProperty(Speech2TextConfig.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (value) {
                this._id = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Speech2TextConfig.prototype, "description", {
            get: function () {
                return this._description;
            },
            set: function (value) {
                this._description = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Speech2TextConfig.prototype, "active", {
            get: function () {
                return this._active;
            },
            set: function (value) {
                this._active = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Speech2TextConfig.prototype, "inference", {
            get: function () {
                return this._inference;
            },
            set: function (value) {
                this._inference = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Speech2TextConfig.prototype, "streamingServer", {
            get: function () {
                return this._streamingServer;
            },
            set: function (value) {
                this._streamingServer = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Speech2TextConfig.prototype, "voiceActivityDetection", {
            get: function () {
                return this._voiceActivityDetection;
            },
            set: function (value) {
                this._voiceActivityDetection = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Speech2TextConfig.prototype, "postProcessing", {
            get: function () {
                return this._postProcessing;
            },
            set: function (value) {
                this._postProcessing = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Speech2TextConfig.prototype, "logging", {
            get: function () {
                return this._logging;
            },
            set: function (value) {
                this._logging = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Speech2TextConfig.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Speech2TextConfig.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Speech2TextConfig.prototype.toObject = function () {
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
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Speech2TextConfig.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Speech2TextConfig.prototype.toProtobufJSON = function (
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
        };
        return Speech2TextConfig;
    }());
    Speech2TextConfig.id = 'ondewo.s2t.Speech2TextConfig';
    /**
     * Message implementation for ondewo.s2t.Description
     */
    var Description = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Description to deeply clone from
         */
        function Description(_value) {
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
        Description.deserializeBinary = function (bytes) {
            var instance = new Description();
            Description.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Description.refineValues = function (_instance) {
            _instance.language = _instance.language || '';
            _instance.pipelineOwner = _instance.pipelineOwner || '';
            _instance.domain = _instance.domain || '';
            _instance.comments = _instance.comments || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Description.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Description.serializeBinaryToWriter = function (_instance, _writer) {
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
        };
        Object.defineProperty(Description.prototype, "language", {
            get: function () {
                return this._language;
            },
            set: function (value) {
                this._language = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Description.prototype, "pipelineOwner", {
            get: function () {
                return this._pipelineOwner;
            },
            set: function (value) {
                this._pipelineOwner = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Description.prototype, "domain", {
            get: function () {
                return this._domain;
            },
            set: function (value) {
                this._domain = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Description.prototype, "comments", {
            get: function () {
                return this._comments;
            },
            set: function (value) {
                this._comments = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Description.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Description.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Description.prototype.toObject = function () {
            return {
                language: this.language,
                pipelineOwner: this.pipelineOwner,
                domain: this.domain,
                comments: this.comments
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Description.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Description.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                language: this.language,
                pipelineOwner: this.pipelineOwner,
                domain: this.domain,
                comments: this.comments
            };
        };
        return Description;
    }());
    Description.id = 'ondewo.s2t.Description';
    /**
     * Message implementation for ondewo.s2t.Inference
     */
    var Inference = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Inference to deeply clone from
         */
        function Inference(_value) {
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
        Inference.deserializeBinary = function (bytes) {
            var instance = new Inference();
            Inference.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Inference.refineValues = function (_instance) {
            _instance.ctcAcousticModels = _instance.ctcAcousticModels || undefined;
            _instance.languageModel = _instance.languageModel || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Inference.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Inference.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.ctcAcousticModels) {
                _writer.writeMessage(1, _instance.ctcAcousticModels, CtcAcousticModels.serializeBinaryToWriter);
            }
            if (_instance.languageModel) {
                _writer.writeMessage(2, _instance.languageModel, LanguageModel.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(Inference.prototype, "ctcAcousticModels", {
            get: function () {
                return this._ctcAcousticModels;
            },
            set: function (value) {
                this._ctcAcousticModels = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Inference.prototype, "languageModel", {
            get: function () {
                return this._languageModel;
            },
            set: function (value) {
                this._languageModel = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Inference.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Inference.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Inference.prototype.toObject = function () {
            return {
                ctcAcousticModels: this.ctcAcousticModels
                    ? this.ctcAcousticModels.toObject()
                    : undefined,
                languageModel: this.languageModel
                    ? this.languageModel.toObject()
                    : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Inference.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Inference.prototype.toProtobufJSON = function (
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
        };
        return Inference;
    }());
    Inference.id = 'ondewo.s2t.Inference';
    /**
     * Message implementation for ondewo.s2t.CtcAcousticModels
     */
    var CtcAcousticModels = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of CtcAcousticModels to deeply clone from
         */
        function CtcAcousticModels(_value) {
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
        CtcAcousticModels.deserializeBinary = function (bytes) {
            var instance = new CtcAcousticModels();
            CtcAcousticModels.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        CtcAcousticModels.refineValues = function (_instance) {
            _instance.type = _instance.type || '';
            _instance.quartznet = _instance.quartznet || undefined;
            _instance.quartznetTriton = _instance.quartznetTriton || undefined;
            _instance.wav2vec = _instance.wav2vec || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        CtcAcousticModels.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        CtcAcousticModels.serializeBinaryToWriter = function (_instance, _writer) {
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
        };
        Object.defineProperty(CtcAcousticModels.prototype, "type", {
            get: function () {
                return this._type;
            },
            set: function (value) {
                this._type = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CtcAcousticModels.prototype, "quartznet", {
            get: function () {
                return this._quartznet;
            },
            set: function (value) {
                this._quartznet = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CtcAcousticModels.prototype, "quartznetTriton", {
            get: function () {
                return this._quartznetTriton;
            },
            set: function (value) {
                this._quartznetTriton = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CtcAcousticModels.prototype, "wav2vec", {
            get: function () {
                return this._wav2vec;
            },
            set: function (value) {
                this._wav2vec = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        CtcAcousticModels.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            CtcAcousticModels.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        CtcAcousticModels.prototype.toObject = function () {
            return {
                type: this.type,
                quartznet: this.quartznet ? this.quartznet.toObject() : undefined,
                quartznetTriton: this.quartznetTriton
                    ? this.quartznetTriton.toObject()
                    : undefined,
                wav2vec: this.wav2vec ? this.wav2vec.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        CtcAcousticModels.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        CtcAcousticModels.prototype.toProtobufJSON = function (
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
        };
        return CtcAcousticModels;
    }());
    CtcAcousticModels.id = 'ondewo.s2t.CtcAcousticModels';
    /**
     * Message implementation for ondewo.s2t.Wav2Vec
     */
    var Wav2Vec = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Wav2Vec to deeply clone from
         */
        function Wav2Vec(_value) {
            _value = _value || {};
            this.modelPath = _value.modelPath;
            this.useGpu = _value.useGpu;
            Wav2Vec.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        Wav2Vec.deserializeBinary = function (bytes) {
            var instance = new Wav2Vec();
            Wav2Vec.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Wav2Vec.refineValues = function (_instance) {
            _instance.modelPath = _instance.modelPath || '';
            _instance.useGpu = _instance.useGpu || false;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Wav2Vec.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Wav2Vec.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.modelPath) {
                _writer.writeString(1, _instance.modelPath);
            }
            if (_instance.useGpu) {
                _writer.writeBool(2, _instance.useGpu);
            }
        };
        Object.defineProperty(Wav2Vec.prototype, "modelPath", {
            get: function () {
                return this._modelPath;
            },
            set: function (value) {
                this._modelPath = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Wav2Vec.prototype, "useGpu", {
            get: function () {
                return this._useGpu;
            },
            set: function (value) {
                this._useGpu = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Wav2Vec.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Wav2Vec.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Wav2Vec.prototype.toObject = function () {
            return {
                modelPath: this.modelPath,
                useGpu: this.useGpu
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Wav2Vec.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Wav2Vec.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                modelPath: this.modelPath,
                useGpu: this.useGpu
            };
        };
        return Wav2Vec;
    }());
    Wav2Vec.id = 'ondewo.s2t.Wav2Vec';
    /**
     * Message implementation for ondewo.s2t.Quartznet
     */
    var Quartznet = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Quartznet to deeply clone from
         */
        function Quartznet(_value) {
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
        Quartznet.deserializeBinary = function (bytes) {
            var instance = new Quartznet();
            Quartznet.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Quartznet.refineValues = function (_instance) {
            _instance.configPath = _instance.configPath || '';
            _instance.loadType = _instance.loadType || '';
            _instance.ptFiles = _instance.ptFiles || undefined;
            _instance.ckptFile = _instance.ckptFile || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Quartznet.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Quartznet.serializeBinaryToWriter = function (_instance, _writer) {
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
        };
        Object.defineProperty(Quartznet.prototype, "configPath", {
            get: function () {
                return this._configPath;
            },
            set: function (value) {
                this._configPath = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Quartznet.prototype, "loadType", {
            get: function () {
                return this._loadType;
            },
            set: function (value) {
                this._loadType = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Quartznet.prototype, "ptFiles", {
            get: function () {
                return this._ptFiles;
            },
            set: function (value) {
                this._ptFiles = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Quartznet.prototype, "ckptFile", {
            get: function () {
                return this._ckptFile;
            },
            set: function (value) {
                this._ckptFile = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Quartznet.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Quartznet.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Quartznet.prototype.toObject = function () {
            return {
                configPath: this.configPath,
                loadType: this.loadType,
                ptFiles: this.ptFiles ? this.ptFiles.toObject() : undefined,
                ckptFile: this.ckptFile ? this.ckptFile.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Quartznet.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Quartznet.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                configPath: this.configPath,
                loadType: this.loadType,
                ptFiles: this.ptFiles ? this.ptFiles.toProtobufJSON(options) : null,
                ckptFile: this.ckptFile ? this.ckptFile.toProtobufJSON(options) : null
            };
        };
        return Quartznet;
    }());
    Quartznet.id = 'ondewo.s2t.Quartznet';
    /**
     * Message implementation for ondewo.s2t.PtFiles
     */
    var PtFiles = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of PtFiles to deeply clone from
         */
        function PtFiles(_value) {
            _value = _value || {};
            this.path = _value.path;
            this.step = _value.step;
            PtFiles.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        PtFiles.deserializeBinary = function (bytes) {
            var instance = new PtFiles();
            PtFiles.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        PtFiles.refineValues = function (_instance) {
            _instance.path = _instance.path || '';
            _instance.step = _instance.step || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        PtFiles.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        PtFiles.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.path) {
                _writer.writeString(1, _instance.path);
            }
            if (_instance.step) {
                _writer.writeString(2, _instance.step);
            }
        };
        Object.defineProperty(PtFiles.prototype, "path", {
            get: function () {
                return this._path;
            },
            set: function (value) {
                this._path = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PtFiles.prototype, "step", {
            get: function () {
                return this._step;
            },
            set: function (value) {
                this._step = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        PtFiles.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            PtFiles.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        PtFiles.prototype.toObject = function () {
            return {
                path: this.path,
                step: this.step
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        PtFiles.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        PtFiles.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                path: this.path,
                step: this.step
            };
        };
        return PtFiles;
    }());
    PtFiles.id = 'ondewo.s2t.PtFiles';
    /**
     * Message implementation for ondewo.s2t.CkptFile
     */
    var CkptFile = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of CkptFile to deeply clone from
         */
        function CkptFile(_value) {
            _value = _value || {};
            this.path = _value.path;
            CkptFile.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        CkptFile.deserializeBinary = function (bytes) {
            var instance = new CkptFile();
            CkptFile.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        CkptFile.refineValues = function (_instance) {
            _instance.path = _instance.path || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        CkptFile.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        CkptFile.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.path) {
                _writer.writeString(1, _instance.path);
            }
        };
        Object.defineProperty(CkptFile.prototype, "path", {
            get: function () {
                return this._path;
            },
            set: function (value) {
                this._path = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        CkptFile.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            CkptFile.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        CkptFile.prototype.toObject = function () {
            return {
                path: this.path
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        CkptFile.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        CkptFile.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                path: this.path
            };
        };
        return CkptFile;
    }());
    CkptFile.id = 'ondewo.s2t.CkptFile';
    /**
     * Message implementation for ondewo.s2t.QuartznetTriton
     */
    var QuartznetTriton = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of QuartznetTriton to deeply clone from
         */
        function QuartznetTriton(_value) {
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
        QuartznetTriton.deserializeBinary = function (bytes) {
            var instance = new QuartznetTriton();
            QuartznetTriton.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        QuartznetTriton.refineValues = function (_instance) {
            _instance.configPath = _instance.configPath || '';
            _instance.tritonUrl = _instance.tritonUrl || '';
            _instance.tritonModel = _instance.tritonModel || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        QuartznetTriton.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        QuartznetTriton.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.configPath) {
                _writer.writeString(1, _instance.configPath);
            }
            if (_instance.tritonUrl) {
                _writer.writeString(2, _instance.tritonUrl);
            }
            if (_instance.tritonModel) {
                _writer.writeString(3, _instance.tritonModel);
            }
        };
        Object.defineProperty(QuartznetTriton.prototype, "configPath", {
            get: function () {
                return this._configPath;
            },
            set: function (value) {
                this._configPath = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(QuartznetTriton.prototype, "tritonUrl", {
            get: function () {
                return this._tritonUrl;
            },
            set: function (value) {
                this._tritonUrl = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(QuartznetTriton.prototype, "tritonModel", {
            get: function () {
                return this._tritonModel;
            },
            set: function (value) {
                this._tritonModel = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        QuartznetTriton.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            QuartznetTriton.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        QuartznetTriton.prototype.toObject = function () {
            return {
                configPath: this.configPath,
                tritonUrl: this.tritonUrl,
                tritonModel: this.tritonModel
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        QuartznetTriton.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        QuartznetTriton.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                configPath: this.configPath,
                tritonUrl: this.tritonUrl,
                tritonModel: this.tritonModel
            };
        };
        return QuartznetTriton;
    }());
    QuartznetTriton.id = 'ondewo.s2t.QuartznetTriton';
    /**
     * Message implementation for ondewo.s2t.LanguageModel
     */
    var LanguageModel = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of LanguageModel to deeply clone from
         */
        function LanguageModel(_value) {
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
        LanguageModel.deserializeBinary = function (bytes) {
            var instance = new LanguageModel();
            LanguageModel.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        LanguageModel.refineValues = function (_instance) {
            _instance.path = _instance.path || '';
            _instance.beamSize = _instance.beamSize || '0';
            _instance.beamSearchScorerAlpha = _instance.beamSearchScorerAlpha || 0;
            _instance.beamSearchScorerBeta = _instance.beamSearchScorerBeta || 0;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        LanguageModel.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        LanguageModel.serializeBinaryToWriter = function (_instance, _writer) {
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
        };
        Object.defineProperty(LanguageModel.prototype, "path", {
            get: function () {
                return this._path;
            },
            set: function (value) {
                this._path = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LanguageModel.prototype, "beamSize", {
            get: function () {
                return this._beamSize;
            },
            set: function (value) {
                this._beamSize = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LanguageModel.prototype, "beamSearchScorerAlpha", {
            get: function () {
                return this._beamSearchScorerAlpha;
            },
            set: function (value) {
                this._beamSearchScorerAlpha = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LanguageModel.prototype, "beamSearchScorerBeta", {
            get: function () {
                return this._beamSearchScorerBeta;
            },
            set: function (value) {
                this._beamSearchScorerBeta = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        LanguageModel.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            LanguageModel.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        LanguageModel.prototype.toObject = function () {
            return {
                path: this.path,
                beamSize: this.beamSize,
                beamSearchScorerAlpha: this.beamSearchScorerAlpha,
                beamSearchScorerBeta: this.beamSearchScorerBeta
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        LanguageModel.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        LanguageModel.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                path: this.path,
                beamSize: this.beamSize,
                beamSearchScorerAlpha: this.beamSearchScorerAlpha,
                beamSearchScorerBeta: this.beamSearchScorerBeta
            };
        };
        return LanguageModel;
    }());
    LanguageModel.id = 'ondewo.s2t.LanguageModel';
    /**
     * Message implementation for ondewo.s2t.StreamingServer
     */
    var StreamingServer = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of StreamingServer to deeply clone from
         */
        function StreamingServer(_value) {
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
        StreamingServer.deserializeBinary = function (bytes) {
            var instance = new StreamingServer();
            StreamingServer.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        StreamingServer.refineValues = function (_instance) {
            _instance.host = _instance.host || '';
            _instance.port = _instance.port || '0';
            _instance.outputStyle = _instance.outputStyle || '';
            _instance.streamingSpeechRecognition =
                _instance.streamingSpeechRecognition || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        StreamingServer.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        StreamingServer.serializeBinaryToWriter = function (_instance, _writer) {
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
        };
        Object.defineProperty(StreamingServer.prototype, "host", {
            get: function () {
                return this._host;
            },
            set: function (value) {
                this._host = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StreamingServer.prototype, "port", {
            get: function () {
                return this._port;
            },
            set: function (value) {
                this._port = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StreamingServer.prototype, "outputStyle", {
            get: function () {
                return this._outputStyle;
            },
            set: function (value) {
                this._outputStyle = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StreamingServer.prototype, "streamingSpeechRecognition", {
            get: function () {
                return this._streamingSpeechRecognition;
            },
            set: function (value) {
                this._streamingSpeechRecognition = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        StreamingServer.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            StreamingServer.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        StreamingServer.prototype.toObject = function () {
            return {
                host: this.host,
                port: this.port,
                outputStyle: this.outputStyle,
                streamingSpeechRecognition: this.streamingSpeechRecognition
                    ? this.streamingSpeechRecognition.toObject()
                    : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        StreamingServer.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        StreamingServer.prototype.toProtobufJSON = function (
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
        };
        return StreamingServer;
    }());
    StreamingServer.id = 'ondewo.s2t.StreamingServer';
    /**
     * Message implementation for ondewo.s2t.StreamingSpeechRecognition
     */
    var StreamingSpeechRecognition = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of StreamingSpeechRecognition to deeply clone from
         */
        function StreamingSpeechRecognition(_value) {
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
        StreamingSpeechRecognition.deserializeBinary = function (bytes) {
            var instance = new StreamingSpeechRecognition();
            StreamingSpeechRecognition.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        StreamingSpeechRecognition.refineValues = function (_instance) {
            _instance.transcribeNotFinal = _instance.transcribeNotFinal || false;
            _instance.ctcDecodingMethod = _instance.ctcDecodingMethod || '';
            _instance.samplingRate = _instance.samplingRate || '0';
            _instance.minAudioChunkSize = _instance.minAudioChunkSize || '0';
            _instance.startOfUtteranceThreshold =
                _instance.startOfUtteranceThreshold || 0;
            _instance.endOfUtteranceThreshold = _instance.endOfUtteranceThreshold || 0;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        StreamingSpeechRecognition.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        StreamingSpeechRecognition.serializeBinaryToWriter = function (_instance, _writer) {
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
        };
        Object.defineProperty(StreamingSpeechRecognition.prototype, "transcribeNotFinal", {
            get: function () {
                return this._transcribeNotFinal;
            },
            set: function (value) {
                this._transcribeNotFinal = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StreamingSpeechRecognition.prototype, "ctcDecodingMethod", {
            get: function () {
                return this._ctcDecodingMethod;
            },
            set: function (value) {
                this._ctcDecodingMethod = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StreamingSpeechRecognition.prototype, "samplingRate", {
            get: function () {
                return this._samplingRate;
            },
            set: function (value) {
                this._samplingRate = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StreamingSpeechRecognition.prototype, "minAudioChunkSize", {
            get: function () {
                return this._minAudioChunkSize;
            },
            set: function (value) {
                this._minAudioChunkSize = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StreamingSpeechRecognition.prototype, "startOfUtteranceThreshold", {
            get: function () {
                return this._startOfUtteranceThreshold;
            },
            set: function (value) {
                this._startOfUtteranceThreshold = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StreamingSpeechRecognition.prototype, "endOfUtteranceThreshold", {
            get: function () {
                return this._endOfUtteranceThreshold;
            },
            set: function (value) {
                this._endOfUtteranceThreshold = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        StreamingSpeechRecognition.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            StreamingSpeechRecognition.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        StreamingSpeechRecognition.prototype.toObject = function () {
            return {
                transcribeNotFinal: this.transcribeNotFinal,
                ctcDecodingMethod: this.ctcDecodingMethod,
                samplingRate: this.samplingRate,
                minAudioChunkSize: this.minAudioChunkSize,
                startOfUtteranceThreshold: this.startOfUtteranceThreshold,
                endOfUtteranceThreshold: this.endOfUtteranceThreshold
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        StreamingSpeechRecognition.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        StreamingSpeechRecognition.prototype.toProtobufJSON = function (
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
        };
        return StreamingSpeechRecognition;
    }());
    StreamingSpeechRecognition.id = 'ondewo.s2t.StreamingSpeechRecognition';
    /**
     * Message implementation for ondewo.s2t.VoiceActivityDetection
     */
    var VoiceActivityDetection = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of VoiceActivityDetection to deeply clone from
         */
        function VoiceActivityDetection(_value) {
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
        VoiceActivityDetection.deserializeBinary = function (bytes) {
            var instance = new VoiceActivityDetection();
            VoiceActivityDetection.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        VoiceActivityDetection.refineValues = function (_instance) {
            _instance.active = _instance.active || '';
            _instance.samplingRate = _instance.samplingRate || '0';
            _instance.pyannote = _instance.pyannote || undefined;
            _instance.matchbox = _instance.matchbox || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        VoiceActivityDetection.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        VoiceActivityDetection.serializeBinaryToWriter = function (_instance, _writer) {
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
        };
        Object.defineProperty(VoiceActivityDetection.prototype, "active", {
            get: function () {
                return this._active;
            },
            set: function (value) {
                this._active = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VoiceActivityDetection.prototype, "samplingRate", {
            get: function () {
                return this._samplingRate;
            },
            set: function (value) {
                this._samplingRate = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VoiceActivityDetection.prototype, "pyannote", {
            get: function () {
                return this._pyannote;
            },
            set: function (value) {
                this._pyannote = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VoiceActivityDetection.prototype, "matchbox", {
            get: function () {
                return this._matchbox;
            },
            set: function (value) {
                this._matchbox = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        VoiceActivityDetection.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            VoiceActivityDetection.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        VoiceActivityDetection.prototype.toObject = function () {
            return {
                active: this.active,
                samplingRate: this.samplingRate,
                pyannote: this.pyannote ? this.pyannote.toObject() : undefined,
                matchbox: this.matchbox ? this.matchbox.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        VoiceActivityDetection.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        VoiceActivityDetection.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                active: this.active,
                samplingRate: this.samplingRate,
                pyannote: this.pyannote ? this.pyannote.toProtobufJSON(options) : null,
                matchbox: this.matchbox ? this.matchbox.toProtobufJSON(options) : null
            };
        };
        return VoiceActivityDetection;
    }());
    VoiceActivityDetection.id = 'ondewo.s2t.VoiceActivityDetection';
    /**
     * Message implementation for ondewo.s2t.Pyannote
     */
    var Pyannote = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Pyannote to deeply clone from
         */
        function Pyannote(_value) {
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
        Pyannote.deserializeBinary = function (bytes) {
            var instance = new Pyannote();
            Pyannote.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Pyannote.refineValues = function (_instance) {
            _instance.modelPath = _instance.modelPath || '';
            _instance.minAudioSize = _instance.minAudioSize || '0';
            _instance.offset = _instance.offset || 0;
            _instance.onset = _instance.onset || 0;
            _instance.logScale = _instance.logScale || false;
            _instance.minDurationOff = _instance.minDurationOff || 0;
            _instance.minDurationOn = _instance.minDurationOn || 0;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Pyannote.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Pyannote.serializeBinaryToWriter = function (_instance, _writer) {
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
        };
        Object.defineProperty(Pyannote.prototype, "modelPath", {
            get: function () {
                return this._modelPath;
            },
            set: function (value) {
                this._modelPath = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Pyannote.prototype, "minAudioSize", {
            get: function () {
                return this._minAudioSize;
            },
            set: function (value) {
                this._minAudioSize = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Pyannote.prototype, "offset", {
            get: function () {
                return this._offset;
            },
            set: function (value) {
                this._offset = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Pyannote.prototype, "onset", {
            get: function () {
                return this._onset;
            },
            set: function (value) {
                this._onset = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Pyannote.prototype, "logScale", {
            get: function () {
                return this._logScale;
            },
            set: function (value) {
                this._logScale = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Pyannote.prototype, "minDurationOff", {
            get: function () {
                return this._minDurationOff;
            },
            set: function (value) {
                this._minDurationOff = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Pyannote.prototype, "minDurationOn", {
            get: function () {
                return this._minDurationOn;
            },
            set: function (value) {
                this._minDurationOn = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Pyannote.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Pyannote.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Pyannote.prototype.toObject = function () {
            return {
                modelPath: this.modelPath,
                minAudioSize: this.minAudioSize,
                offset: this.offset,
                onset: this.onset,
                logScale: this.logScale,
                minDurationOff: this.minDurationOff,
                minDurationOn: this.minDurationOn
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Pyannote.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Pyannote.prototype.toProtobufJSON = function (
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
        };
        return Pyannote;
    }());
    Pyannote.id = 'ondewo.s2t.Pyannote';
    /**
     * Message implementation for ondewo.s2t.Matchbox
     */
    var Matchbox = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Matchbox to deeply clone from
         */
        function Matchbox(_value) {
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
        Matchbox.deserializeBinary = function (bytes) {
            var instance = new Matchbox();
            Matchbox.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Matchbox.refineValues = function (_instance) {
            _instance.modelConfig = _instance.modelConfig || '';
            _instance.encoderPath = _instance.encoderPath || '';
            _instance.decoderPath = _instance.decoderPath || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Matchbox.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Matchbox.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.modelConfig) {
                _writer.writeString(1, _instance.modelConfig);
            }
            if (_instance.encoderPath) {
                _writer.writeString(2, _instance.encoderPath);
            }
            if (_instance.decoderPath) {
                _writer.writeString(3, _instance.decoderPath);
            }
        };
        Object.defineProperty(Matchbox.prototype, "modelConfig", {
            get: function () {
                return this._modelConfig;
            },
            set: function (value) {
                this._modelConfig = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Matchbox.prototype, "encoderPath", {
            get: function () {
                return this._encoderPath;
            },
            set: function (value) {
                this._encoderPath = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Matchbox.prototype, "decoderPath", {
            get: function () {
                return this._decoderPath;
            },
            set: function (value) {
                this._decoderPath = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Matchbox.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Matchbox.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Matchbox.prototype.toObject = function () {
            return {
                modelConfig: this.modelConfig,
                encoderPath: this.encoderPath,
                decoderPath: this.decoderPath
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Matchbox.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Matchbox.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                modelConfig: this.modelConfig,
                encoderPath: this.encoderPath,
                decoderPath: this.decoderPath
            };
        };
        return Matchbox;
    }());
    Matchbox.id = 'ondewo.s2t.Matchbox';
    /**
     * Message implementation for ondewo.s2t.PostProcessing
     */
    var PostProcessing = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of PostProcessing to deeply clone from
         */
        function PostProcessing(_value) {
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
        PostProcessing.deserializeBinary = function (bytes) {
            var instance = new PostProcessing();
            PostProcessing.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        PostProcessing.refineValues = function (_instance) {
            _instance.pipeline = _instance.pipeline || [];
            _instance.postProcessors = _instance.postProcessors || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        PostProcessing.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        PostProcessing.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.pipeline && _instance.pipeline.length) {
                _writer.writeRepeatedString(1, _instance.pipeline);
            }
            if (_instance.postProcessors) {
                _writer.writeMessage(2, _instance.postProcessors, PostProcessors.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(PostProcessing.prototype, "pipeline", {
            get: function () {
                return this._pipeline;
            },
            set: function (value) {
                this._pipeline = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PostProcessing.prototype, "postProcessors", {
            get: function () {
                return this._postProcessors;
            },
            set: function (value) {
                this._postProcessors = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        PostProcessing.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            PostProcessing.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        PostProcessing.prototype.toObject = function () {
            return {
                pipeline: (this.pipeline || []).slice(),
                postProcessors: this.postProcessors
                    ? this.postProcessors.toObject()
                    : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        PostProcessing.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        PostProcessing.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                pipeline: (this.pipeline || []).slice(),
                postProcessors: this.postProcessors
                    ? this.postProcessors.toProtobufJSON(options)
                    : null
            };
        };
        return PostProcessing;
    }());
    PostProcessing.id = 'ondewo.s2t.PostProcessing';
    /**
     * Message implementation for ondewo.s2t.PostProcessors
     */
    var PostProcessors = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of PostProcessors to deeply clone from
         */
        function PostProcessors(_value) {
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
        PostProcessors.deserializeBinary = function (bytes) {
            var instance = new PostProcessors();
            PostProcessors.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        PostProcessors.refineValues = function (_instance) {
            _instance.symSpell = _instance.symSpell || undefined;
            _instance.normalization = _instance.normalization || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        PostProcessors.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        PostProcessors.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.symSpell) {
                _writer.writeMessage(1, _instance.symSpell, SymSpell.serializeBinaryToWriter);
            }
            if (_instance.normalization) {
                _writer.writeMessage(2, _instance.normalization, Normalization.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(PostProcessors.prototype, "symSpell", {
            get: function () {
                return this._symSpell;
            },
            set: function (value) {
                this._symSpell = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PostProcessors.prototype, "normalization", {
            get: function () {
                return this._normalization;
            },
            set: function (value) {
                this._normalization = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        PostProcessors.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            PostProcessors.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        PostProcessors.prototype.toObject = function () {
            return {
                symSpell: this.symSpell ? this.symSpell.toObject() : undefined,
                normalization: this.normalization
                    ? this.normalization.toObject()
                    : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        PostProcessors.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        PostProcessors.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                symSpell: this.symSpell ? this.symSpell.toProtobufJSON(options) : null,
                normalization: this.normalization
                    ? this.normalization.toProtobufJSON(options)
                    : null
            };
        };
        return PostProcessors;
    }());
    PostProcessors.id = 'ondewo.s2t.PostProcessors';
    /**
     * Message implementation for ondewo.s2t.SymSpell
     */
    var SymSpell = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of SymSpell to deeply clone from
         */
        function SymSpell(_value) {
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
        SymSpell.deserializeBinary = function (bytes) {
            var instance = new SymSpell();
            SymSpell.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        SymSpell.refineValues = function (_instance) {
            _instance.dictPath = _instance.dictPath || '';
            _instance.maxDictionaryEditDistance =
                _instance.maxDictionaryEditDistance || '0';
            _instance.prefixLength = _instance.prefixLength || '0';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        SymSpell.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        SymSpell.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.dictPath) {
                _writer.writeString(1, _instance.dictPath);
            }
            if (_instance.maxDictionaryEditDistance) {
                _writer.writeInt64String(2, _instance.maxDictionaryEditDistance);
            }
            if (_instance.prefixLength) {
                _writer.writeInt64String(3, _instance.prefixLength);
            }
        };
        Object.defineProperty(SymSpell.prototype, "dictPath", {
            get: function () {
                return this._dictPath;
            },
            set: function (value) {
                this._dictPath = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SymSpell.prototype, "maxDictionaryEditDistance", {
            get: function () {
                return this._maxDictionaryEditDistance;
            },
            set: function (value) {
                this._maxDictionaryEditDistance = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SymSpell.prototype, "prefixLength", {
            get: function () {
                return this._prefixLength;
            },
            set: function (value) {
                this._prefixLength = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        SymSpell.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            SymSpell.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        SymSpell.prototype.toObject = function () {
            return {
                dictPath: this.dictPath,
                maxDictionaryEditDistance: this.maxDictionaryEditDistance,
                prefixLength: this.prefixLength
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        SymSpell.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        SymSpell.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                dictPath: this.dictPath,
                maxDictionaryEditDistance: this.maxDictionaryEditDistance,
                prefixLength: this.prefixLength
            };
        };
        return SymSpell;
    }());
    SymSpell.id = 'ondewo.s2t.SymSpell';
    /**
     * Message implementation for ondewo.s2t.Normalization
     */
    var Normalization = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Normalization to deeply clone from
         */
        function Normalization(_value) {
            _value = _value || {};
            this.language = _value.language;
            Normalization.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        Normalization.deserializeBinary = function (bytes) {
            var instance = new Normalization();
            Normalization.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Normalization.refineValues = function (_instance) {
            _instance.language = _instance.language || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Normalization.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Normalization.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.language) {
                _writer.writeString(1, _instance.language);
            }
        };
        Object.defineProperty(Normalization.prototype, "language", {
            get: function () {
                return this._language;
            },
            set: function (value) {
                this._language = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Normalization.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Normalization.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Normalization.prototype.toObject = function () {
            return {
                language: this.language
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Normalization.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Normalization.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                language: this.language
            };
        };
        return Normalization;
    }());
    Normalization.id = 'ondewo.s2t.Normalization';
    /**
     * Message implementation for ondewo.s2t.Logging
     */
    var Logging = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Logging to deeply clone from
         */
        function Logging(_value) {
            _value = _value || {};
            this.type = _value.type;
            this.path = _value.path;
            Logging.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        Logging.deserializeBinary = function (bytes) {
            var instance = new Logging();
            Logging.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Logging.refineValues = function (_instance) {
            _instance.type = _instance.type || '';
            _instance.path = _instance.path || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Logging.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Logging.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.type) {
                _writer.writeString(1, _instance.type);
            }
            if (_instance.path) {
                _writer.writeString(2, _instance.path);
            }
        };
        Object.defineProperty(Logging.prototype, "type", {
            get: function () {
                return this._type;
            },
            set: function (value) {
                this._type = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Logging.prototype, "path", {
            get: function () {
                return this._path;
            },
            set: function (value) {
                this._path = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Logging.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Logging.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Logging.prototype.toObject = function () {
            return {
                type: this.type,
                path: this.path
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Logging.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Logging.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                type: this.type,
                path: this.path
            };
        };
        return Logging;
    }());
    Logging.id = 'ondewo.s2t.Logging';

    /* tslint:disable */
    /**
     * Service client implementation for ondewo.s2t.Speech2Text
     */
    var Speech2TextClient = /** @class */ (function () {
        function Speech2TextClient(settings, clientFactory, handler) {
            var _this = this;
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
                transcribeFile: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.s2t.Speech2Text/TranscribeFile',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
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
                transcribeStream: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.serverStream,
                        client: _this.client,
                        path: '/ondewo.s2t.Speech2Text/TranscribeStream',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
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
                getS2tPipeline: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.s2t.Speech2Text/GetS2tPipeline',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
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
                createS2tPipeline: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.s2t.Speech2Text/CreateS2tPipeline',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
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
                deleteS2tPipeline: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.s2t.Speech2Text/DeleteS2tPipeline',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: S2tPipelineId,
                        responseClass: googleProtobuf000.Empty
                    });
                },
                /**
                 * Unary RPC for /ondewo.s2t.Speech2Text/UpdateS2tPipeline
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
                 */
                updateS2tPipeline: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.s2t.Speech2Text/UpdateS2tPipeline',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: Speech2TextConfig,
                        responseClass: googleProtobuf000.Empty
                    });
                },
                /**
                 * Unary RPC for /ondewo.s2t.Speech2Text/ListS2tPipelines
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.ListS2tPipelinesResponse>>
                 */
                listS2tPipelines: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.s2t.Speech2Text/ListS2tPipelines',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
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
                listS2tLanguages: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.s2t.Speech2Text/ListS2tLanguages',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
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
                listS2tDomains: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.s2t.Speech2Text/ListS2tDomains',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
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
        Speech2TextClient.prototype.transcribeFile = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .transcribeFile(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Server streaming RPC for /ondewo.s2t.Speech2Text/TranscribeStream
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.TranscribeStreamResponse>
         */
        Speech2TextClient.prototype.transcribeStream = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .transcribeStream(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.s2t.Speech2Text/GetS2tPipeline
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.Speech2TextConfig>
         */
        Speech2TextClient.prototype.getS2tPipeline = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .getS2tPipeline(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.s2t.Speech2Text/CreateS2tPipeline
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.S2tPipelineId>
         */
        Speech2TextClient.prototype.createS2tPipeline = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .createS2tPipeline(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.s2t.Speech2Text/DeleteS2tPipeline
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<googleProtobuf000.Empty>
         */
        Speech2TextClient.prototype.deleteS2tPipeline = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .deleteS2tPipeline(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.s2t.Speech2Text/UpdateS2tPipeline
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<googleProtobuf000.Empty>
         */
        Speech2TextClient.prototype.updateS2tPipeline = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .updateS2tPipeline(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.s2t.Speech2Text/ListS2tPipelines
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.ListS2tPipelinesResponse>
         */
        Speech2TextClient.prototype.listS2tPipelines = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .listS2tPipelines(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.s2t.Speech2Text/ListS2tLanguages
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.ListS2tLanguagesResponse>
         */
        Speech2TextClient.prototype.listS2tLanguages = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .listS2tLanguages(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.s2t.Speech2Text/ListS2tDomains
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.ListS2tDomainsResponse>
         */
        Speech2TextClient.prototype.listS2tDomains = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .listS2tDomains(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        return Speech2TextClient;
    }());
    Speech2TextClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function Speech2TextClient_Factory() { return new Speech2TextClient(i0.ɵɵinject(GRPC_SPEECH2_TEXT_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: Speech2TextClient, providedIn: "any" });
    Speech2TextClient.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'any' },] }
    ];
    Speech2TextClient.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [GRPC_SPEECH2_TEXT_CLIENT_SETTINGS,] }] },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i2.GRPC_CLIENT_FACTORY,] }] },
        { type: i2.GrpcHandler }
    ]; };

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CkptFile = CkptFile;
    exports.CtcAcousticModels = CtcAcousticModels;
    exports.Description = Description;
    exports.GRPC_SPEECH2_TEXT_CLIENT_SETTINGS = GRPC_SPEECH2_TEXT_CLIENT_SETTINGS;
    exports.Inference = Inference;
    exports.LanguageModel = LanguageModel;
    exports.ListS2tDomainsRequest = ListS2tDomainsRequest;
    exports.ListS2tDomainsResponse = ListS2tDomainsResponse;
    exports.ListS2tLanguagesRequest = ListS2tLanguagesRequest;
    exports.ListS2tLanguagesResponse = ListS2tLanguagesResponse;
    exports.ListS2tPipelinesRequest = ListS2tPipelinesRequest;
    exports.ListS2tPipelinesResponse = ListS2tPipelinesResponse;
    exports.Logging = Logging;
    exports.Matchbox = Matchbox;
    exports.Normalization = Normalization;
    exports.PostProcessing = PostProcessing;
    exports.PostProcessors = PostProcessors;
    exports.PtFiles = PtFiles;
    exports.Pyannote = Pyannote;
    exports.Quartznet = Quartznet;
    exports.QuartznetTriton = QuartznetTriton;
    exports.S2tPipelineId = S2tPipelineId;
    exports.Speech2TextClient = Speech2TextClient;
    exports.Speech2TextConfig = Speech2TextConfig;
    exports.StreamingServer = StreamingServer;
    exports.StreamingSpeechRecognition = StreamingSpeechRecognition;
    exports.SymSpell = SymSpell;
    exports.TranscribeFileRequest = TranscribeFileRequest;
    exports.TranscribeFileResponse = TranscribeFileResponse;
    exports.TranscribeStreamRequest = TranscribeStreamRequest;
    exports.TranscribeStreamResponse = TranscribeStreamResponse;
    exports.VoiceActivityDetection = VoiceActivityDetection;
    exports.Wav2Vec = Wav2Vec;
    exports.WordTiming = WordTiming;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ondewo-s2t-client-angular.umd.js.map
