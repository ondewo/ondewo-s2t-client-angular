(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('google-protobuf'), require('@ngx-grpc/common'), require('@ngx-grpc/core')) :
  typeof define === 'function' && define.amd ? define('@ondewo/s2t-client-angular', ['exports', '@angular/core', 'google-protobuf', '@ngx-grpc/common', '@ngx-grpc/core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ondewo = global.ondewo || {}, global.ondewo['s2t-client-angular'] = {}), global.ng.core, global.googleProtobuf, global.common, global.i2));
}(this, (function (exports, i0, googleProtobuf, common, i2) { 'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () {
              return e[k];
            }
          });
        }
      });
    }
    n['default'] = e;
    return Object.freeze(n);
  }

  var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
  var i2__namespace = /*#__PURE__*/_interopNamespace(i2);

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
  var GRPC_SPEECH2_TEXT_CLIENT_SETTINGS = new i0.InjectionToken('GRPC_SPEECH2_TEXT_CLIENT_SETTINGS');

  exports.CTCDecoding = void 0;
  (function (CTCDecoding) {
      CTCDecoding[CTCDecoding["greedy"] = 0] = "greedy";
      CTCDecoding[CTCDecoding["beamSearchWithLm"] = 1] = "beamSearchWithLm";
  })(exports.CTCDecoding || (exports.CTCDecoding = {}));
  var TranscribeStreamRequest = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param TranscribeStreamRequest value
       */
      function TranscribeStreamRequest(value) {
          value = value || {};
          this.s2tPipelineId = value.s2tPipelineId;
          this.audioChunk = value.audioChunk;
          this.ctcDecoding = value.ctcDecoding;
          this.spellingCorrection = value.spellingCorrection;
          this.disableNormalization = value.disableNormalization;
          this.endOfStream = value.endOfStream;
          TranscribeStreamRequest.refineValues(this);
      }
      TranscribeStreamRequest.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          TranscribeStreamRequest.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      TranscribeStreamRequest.fromBinary = function (bytes) {
          var instance = new TranscribeStreamRequest();
          TranscribeStreamRequest.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      TranscribeStreamRequest.refineValues = function (instance) {
          instance.s2tPipelineId = instance.s2tPipelineId || '';
          instance.audioChunk = instance.audioChunk || new Uint8Array();
          instance.ctcDecoding = instance.ctcDecoding || 0;
          instance.spellingCorrection = instance.spellingCorrection || false;
          instance.disableNormalization = instance.disableNormalization || false;
          instance.endOfStream = instance.endOfStream || false;
      };
      TranscribeStreamRequest.fromBinaryReader = function (instance, reader) {
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
      };
      TranscribeStreamRequest.toBinaryWriter = function (instance, writer) {
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
      TranscribeStreamRequest.prototype.toJSON = function () {
          return this.toObject();
      };
      return TranscribeStreamRequest;
  }());
  var TranscribeStreamResponse = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param TranscribeStreamResponse value
       */
      function TranscribeStreamResponse(value) {
          value = value || {};
          this.transcription = value.transcription;
          this.time = value.time;
          this.final = value.final;
          TranscribeStreamResponse.refineValues(this);
      }
      TranscribeStreamResponse.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          TranscribeStreamResponse.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      TranscribeStreamResponse.fromBinary = function (bytes) {
          var instance = new TranscribeStreamResponse();
          TranscribeStreamResponse.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      TranscribeStreamResponse.refineValues = function (instance) {
          instance.transcription = instance.transcription || '';
          instance.time = instance.time || 0;
          instance.final = instance.final || false;
      };
      TranscribeStreamResponse.fromBinaryReader = function (instance, reader) {
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
      };
      TranscribeStreamResponse.toBinaryWriter = function (instance, writer) {
          if (instance.transcription) {
              writer.writeString(1, instance.transcription);
          }
          if (instance.time) {
              writer.writeFloat(2, instance.time);
          }
          if (instance.final) {
              writer.writeBool(3, instance.final);
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
      TranscribeStreamResponse.prototype.toObject = function () {
          return {
              transcription: this.transcription,
              time: this.time,
              final: this.final
          };
      };
      TranscribeStreamResponse.prototype.toJSON = function () {
          return this.toObject();
      };
      return TranscribeStreamResponse;
  }());
  var TranscribeFileRequest = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param TranscribeFileRequest value
       */
      function TranscribeFileRequest(value) {
          value = value || {};
          this.s2tPipelineId = value.s2tPipelineId;
          this.audioFile = value.audioFile;
          this.ctcDecoding = value.ctcDecoding;
          this.spellingCorrection = value.spellingCorrection;
          this.disableNormalization = value.disableNormalization;
          this.includeTiming = value.includeTiming;
          TranscribeFileRequest.refineValues(this);
      }
      TranscribeFileRequest.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          TranscribeFileRequest.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      TranscribeFileRequest.fromBinary = function (bytes) {
          var instance = new TranscribeFileRequest();
          TranscribeFileRequest.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      TranscribeFileRequest.refineValues = function (instance) {
          instance.s2tPipelineId = instance.s2tPipelineId || '';
          instance.audioFile = instance.audioFile || new Uint8Array();
          instance.ctcDecoding = instance.ctcDecoding || 0;
          instance.spellingCorrection = instance.spellingCorrection || false;
          instance.disableNormalization = instance.disableNormalization || false;
          instance.includeTiming = instance.includeTiming || false;
      };
      TranscribeFileRequest.fromBinaryReader = function (instance, reader) {
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
      };
      TranscribeFileRequest.toBinaryWriter = function (instance, writer) {
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
      TranscribeFileRequest.prototype.toJSON = function () {
          return this.toObject();
      };
      return TranscribeFileRequest;
  }());
  var TranscribeFileResponse = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param TranscribeFileResponse value
       */
      function TranscribeFileResponse(value) {
          value = value || {};
          this.transcription = value.transcription;
          this.time = value.time;
          this.wordTiming = (value.wordTiming || []).map(function (m) { return new WordTiming(m); });
          TranscribeFileResponse.refineValues(this);
      }
      TranscribeFileResponse.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          TranscribeFileResponse.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      TranscribeFileResponse.fromBinary = function (bytes) {
          var instance = new TranscribeFileResponse();
          TranscribeFileResponse.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      TranscribeFileResponse.refineValues = function (instance) {
          instance.transcription = instance.transcription || '';
          instance.time = instance.time || 0;
          instance.wordTiming = instance.wordTiming || [];
      };
      TranscribeFileResponse.fromBinaryReader = function (instance, reader) {
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
                      var messageInitializer3 = new WordTiming();
                      reader.readMessage(messageInitializer3, WordTiming.fromBinaryReader);
                      (instance.wordTiming = instance.wordTiming || []).push(messageInitializer3);
                      break;
                  default:
                      reader.skipField();
              }
          }
          TranscribeFileResponse.refineValues(instance);
      };
      TranscribeFileResponse.toBinaryWriter = function (instance, writer) {
          if (instance.transcription) {
              writer.writeString(1, instance.transcription);
          }
          if (instance.time) {
              writer.writeFloat(2, instance.time);
          }
          if (instance.wordTiming && instance.wordTiming.length) {
              writer.writeRepeatedMessage(3, instance.wordTiming, WordTiming.toBinaryWriter);
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
      TranscribeFileResponse.prototype.toObject = function () {
          return {
              transcription: this.transcription,
              time: this.time,
              wordTiming: (this.wordTiming || []).map(function (m) { return m.toObject(); })
          };
      };
      TranscribeFileResponse.prototype.toJSON = function () {
          return this.toObject();
      };
      return TranscribeFileResponse;
  }());
  var WordTiming = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param WordTiming value
       */
      function WordTiming(value) {
          value = value || {};
          this.word = value.word;
          this.begin = value.begin;
          this.end = value.end;
          WordTiming.refineValues(this);
      }
      WordTiming.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          WordTiming.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      WordTiming.fromBinary = function (bytes) {
          var instance = new WordTiming();
          WordTiming.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      WordTiming.refineValues = function (instance) {
          instance.word = instance.word || '';
          instance.begin = instance.begin || 0;
          instance.end = instance.end || 0;
      };
      WordTiming.fromBinaryReader = function (instance, reader) {
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
      };
      WordTiming.toBinaryWriter = function (instance, writer) {
          if (instance.word) {
              writer.writeString(1, instance.word);
          }
          if (instance.begin) {
              writer.writeInt32(2, instance.begin);
          }
          if (instance.end) {
              writer.writeInt32(3, instance.end);
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
      WordTiming.prototype.toObject = function () {
          return {
              word: this.word,
              begin: this.begin,
              end: this.end
          };
      };
      WordTiming.prototype.toJSON = function () {
          return this.toObject();
      };
      return WordTiming;
  }());
  var S2tPipelineId = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param S2tPipelineId value
       */
      function S2tPipelineId(value) {
          value = value || {};
          this.id = value.id;
          S2tPipelineId.refineValues(this);
      }
      S2tPipelineId.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          S2tPipelineId.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      S2tPipelineId.fromBinary = function (bytes) {
          var instance = new S2tPipelineId();
          S2tPipelineId.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      S2tPipelineId.refineValues = function (instance) {
          instance.id = instance.id || '';
      };
      S2tPipelineId.fromBinaryReader = function (instance, reader) {
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
      };
      S2tPipelineId.toBinaryWriter = function (instance, writer) {
          if (instance.id) {
              writer.writeString(1, instance.id);
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
      S2tPipelineId.prototype.toObject = function () {
          return {
              id: this.id
          };
      };
      S2tPipelineId.prototype.toJSON = function () {
          return this.toObject();
      };
      return S2tPipelineId;
  }());
  var ListS2tPipelinesRequest = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param ListS2tPipelinesRequest value
       */
      function ListS2tPipelinesRequest(value) {
          value = value || {};
          this.languages = (value.languages || []).slice();
          this.pipelineOwners = (value.pipelineOwners || []).slice();
          this.domains = (value.domains || []).slice();
          ListS2tPipelinesRequest.refineValues(this);
      }
      ListS2tPipelinesRequest.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          ListS2tPipelinesRequest.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      ListS2tPipelinesRequest.fromBinary = function (bytes) {
          var instance = new ListS2tPipelinesRequest();
          ListS2tPipelinesRequest.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      ListS2tPipelinesRequest.refineValues = function (instance) {
          instance.languages = instance.languages || [];
          instance.pipelineOwners = instance.pipelineOwners || [];
          instance.domains = instance.domains || [];
      };
      ListS2tPipelinesRequest.fromBinaryReader = function (instance, reader) {
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
      };
      ListS2tPipelinesRequest.toBinaryWriter = function (instance, writer) {
          if (instance.languages && instance.languages.length) {
              writer.writeRepeatedString(1, instance.languages);
          }
          if (instance.pipelineOwners && instance.pipelineOwners.length) {
              writer.writeRepeatedString(2, instance.pipelineOwners);
          }
          if (instance.domains && instance.domains.length) {
              writer.writeRepeatedString(3, instance.domains);
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
      ListS2tPipelinesRequest.prototype.toObject = function () {
          return {
              languages: (this.languages || []).slice(),
              pipelineOwners: (this.pipelineOwners || []).slice(),
              domains: (this.domains || []).slice()
          };
      };
      ListS2tPipelinesRequest.prototype.toJSON = function () {
          return this.toObject();
      };
      return ListS2tPipelinesRequest;
  }());
  var ListS2tPipelinesResponse = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param ListS2tPipelinesResponse value
       */
      function ListS2tPipelinesResponse(value) {
          value = value || {};
          this.pipelineConfigs = (value.pipelineConfigs || []).map(function (m) { return new Speech2TextConfig(m); });
          ListS2tPipelinesResponse.refineValues(this);
      }
      ListS2tPipelinesResponse.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          ListS2tPipelinesResponse.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      ListS2tPipelinesResponse.fromBinary = function (bytes) {
          var instance = new ListS2tPipelinesResponse();
          ListS2tPipelinesResponse.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      ListS2tPipelinesResponse.refineValues = function (instance) {
          instance.pipelineConfigs = instance.pipelineConfigs || [];
      };
      ListS2tPipelinesResponse.fromBinaryReader = function (instance, reader) {
          while (reader.nextField()) {
              if (reader.isEndGroup())
                  break;
              switch (reader.getFieldNumber()) {
                  case 1:
                      var messageInitializer1 = new Speech2TextConfig();
                      reader.readMessage(messageInitializer1, Speech2TextConfig.fromBinaryReader);
                      (instance.pipelineConfigs = instance.pipelineConfigs || []).push(messageInitializer1);
                      break;
                  default:
                      reader.skipField();
              }
          }
          ListS2tPipelinesResponse.refineValues(instance);
      };
      ListS2tPipelinesResponse.toBinaryWriter = function (instance, writer) {
          if (instance.pipelineConfigs && instance.pipelineConfigs.length) {
              writer.writeRepeatedMessage(1, instance.pipelineConfigs, Speech2TextConfig.toBinaryWriter);
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
      ListS2tPipelinesResponse.prototype.toObject = function () {
          return {
              pipelineConfigs: (this.pipelineConfigs || []).map(function (m) { return m.toObject(); })
          };
      };
      ListS2tPipelinesResponse.prototype.toJSON = function () {
          return this.toObject();
      };
      return ListS2tPipelinesResponse;
  }());
  var ListS2tLanguagesRequest = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param ListS2tLanguagesRequest value
       */
      function ListS2tLanguagesRequest(value) {
          value = value || {};
          this.domains = (value.domains || []).slice();
          this.pipelineOwners = (value.pipelineOwners || []).slice();
          ListS2tLanguagesRequest.refineValues(this);
      }
      ListS2tLanguagesRequest.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          ListS2tLanguagesRequest.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      ListS2tLanguagesRequest.fromBinary = function (bytes) {
          var instance = new ListS2tLanguagesRequest();
          ListS2tLanguagesRequest.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      ListS2tLanguagesRequest.refineValues = function (instance) {
          instance.domains = instance.domains || [];
          instance.pipelineOwners = instance.pipelineOwners || [];
      };
      ListS2tLanguagesRequest.fromBinaryReader = function (instance, reader) {
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
      };
      ListS2tLanguagesRequest.toBinaryWriter = function (instance, writer) {
          if (instance.domains && instance.domains.length) {
              writer.writeRepeatedString(1, instance.domains);
          }
          if (instance.pipelineOwners && instance.pipelineOwners.length) {
              writer.writeRepeatedString(2, instance.pipelineOwners);
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
      ListS2tLanguagesRequest.prototype.toObject = function () {
          return {
              domains: (this.domains || []).slice(),
              pipelineOwners: (this.pipelineOwners || []).slice()
          };
      };
      ListS2tLanguagesRequest.prototype.toJSON = function () {
          return this.toObject();
      };
      return ListS2tLanguagesRequest;
  }());
  var ListS2tLanguagesResponse = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param ListS2tLanguagesResponse value
       */
      function ListS2tLanguagesResponse(value) {
          value = value || {};
          this.languages = (value.languages || []).slice();
          ListS2tLanguagesResponse.refineValues(this);
      }
      ListS2tLanguagesResponse.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          ListS2tLanguagesResponse.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      ListS2tLanguagesResponse.fromBinary = function (bytes) {
          var instance = new ListS2tLanguagesResponse();
          ListS2tLanguagesResponse.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      ListS2tLanguagesResponse.refineValues = function (instance) {
          instance.languages = instance.languages || [];
      };
      ListS2tLanguagesResponse.fromBinaryReader = function (instance, reader) {
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
      };
      ListS2tLanguagesResponse.toBinaryWriter = function (instance, writer) {
          if (instance.languages && instance.languages.length) {
              writer.writeRepeatedString(1, instance.languages);
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
      ListS2tLanguagesResponse.prototype.toObject = function () {
          return {
              languages: (this.languages || []).slice()
          };
      };
      ListS2tLanguagesResponse.prototype.toJSON = function () {
          return this.toObject();
      };
      return ListS2tLanguagesResponse;
  }());
  var ListS2tDomainsRequest = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param ListS2tDomainsRequest value
       */
      function ListS2tDomainsRequest(value) {
          value = value || {};
          this.languages = (value.languages || []).slice();
          this.pipelineOwners = (value.pipelineOwners || []).slice();
          ListS2tDomainsRequest.refineValues(this);
      }
      ListS2tDomainsRequest.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          ListS2tDomainsRequest.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      ListS2tDomainsRequest.fromBinary = function (bytes) {
          var instance = new ListS2tDomainsRequest();
          ListS2tDomainsRequest.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      ListS2tDomainsRequest.refineValues = function (instance) {
          instance.languages = instance.languages || [];
          instance.pipelineOwners = instance.pipelineOwners || [];
      };
      ListS2tDomainsRequest.fromBinaryReader = function (instance, reader) {
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
      };
      ListS2tDomainsRequest.toBinaryWriter = function (instance, writer) {
          if (instance.languages && instance.languages.length) {
              writer.writeRepeatedString(1, instance.languages);
          }
          if (instance.pipelineOwners && instance.pipelineOwners.length) {
              writer.writeRepeatedString(2, instance.pipelineOwners);
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
      ListS2tDomainsRequest.prototype.toObject = function () {
          return {
              languages: (this.languages || []).slice(),
              pipelineOwners: (this.pipelineOwners || []).slice()
          };
      };
      ListS2tDomainsRequest.prototype.toJSON = function () {
          return this.toObject();
      };
      return ListS2tDomainsRequest;
  }());
  var ListS2tDomainsResponse = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param ListS2tDomainsResponse value
       */
      function ListS2tDomainsResponse(value) {
          value = value || {};
          this.domains = (value.domains || []).slice();
          ListS2tDomainsResponse.refineValues(this);
      }
      ListS2tDomainsResponse.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          ListS2tDomainsResponse.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      ListS2tDomainsResponse.fromBinary = function (bytes) {
          var instance = new ListS2tDomainsResponse();
          ListS2tDomainsResponse.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      ListS2tDomainsResponse.refineValues = function (instance) {
          instance.domains = instance.domains || [];
      };
      ListS2tDomainsResponse.fromBinaryReader = function (instance, reader) {
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
      };
      ListS2tDomainsResponse.toBinaryWriter = function (instance, writer) {
          if (instance.domains && instance.domains.length) {
              writer.writeRepeatedString(1, instance.domains);
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
      ListS2tDomainsResponse.prototype.toObject = function () {
          return {
              domains: (this.domains || []).slice()
          };
      };
      ListS2tDomainsResponse.prototype.toJSON = function () {
          return this.toObject();
      };
      return ListS2tDomainsResponse;
  }());
  var Speech2TextConfig = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param Speech2TextConfig value
       */
      function Speech2TextConfig(value) {
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
      Speech2TextConfig.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          Speech2TextConfig.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      Speech2TextConfig.fromBinary = function (bytes) {
          var instance = new Speech2TextConfig();
          Speech2TextConfig.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      Speech2TextConfig.refineValues = function (instance) {
          instance.id = instance.id || '';
          instance.description = instance.description || undefined;
          instance.active = instance.active || false;
          instance.inference = instance.inference || undefined;
          instance.streamingServer = instance.streamingServer || undefined;
          instance.voiceActivityDetection =
              instance.voiceActivityDetection || undefined;
          instance.postProcessing = instance.postProcessing || undefined;
          instance.logging = instance.logging || undefined;
      };
      Speech2TextConfig.fromBinaryReader = function (instance, reader) {
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
      };
      Speech2TextConfig.toBinaryWriter = function (instance, writer) {
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
      Speech2TextConfig.prototype.toJSON = function () {
          return this.toObject();
      };
      return Speech2TextConfig;
  }());
  var Description = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param Description value
       */
      function Description(value) {
          value = value || {};
          this.language = value.language;
          this.pipelineOwner = value.pipelineOwner;
          this.domain = value.domain;
          this.comments = value.comments;
          Description.refineValues(this);
      }
      Description.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          Description.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      Description.fromBinary = function (bytes) {
          var instance = new Description();
          Description.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      Description.refineValues = function (instance) {
          instance.language = instance.language || '';
          instance.pipelineOwner = instance.pipelineOwner || '';
          instance.domain = instance.domain || '';
          instance.comments = instance.comments || '';
      };
      Description.fromBinaryReader = function (instance, reader) {
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
      };
      Description.toBinaryWriter = function (instance, writer) {
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
      Description.prototype.toObject = function () {
          return {
              language: this.language,
              pipelineOwner: this.pipelineOwner,
              domain: this.domain,
              comments: this.comments
          };
      };
      Description.prototype.toJSON = function () {
          return this.toObject();
      };
      return Description;
  }());
  var Inference = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param Inference value
       */
      function Inference(value) {
          value = value || {};
          this.ctcAcousticModels = value.ctcAcousticModels
              ? new CtcAcousticModels(value.ctcAcousticModels)
              : undefined;
          this.languageModel = value.languageModel
              ? new LanguageModel(value.languageModel)
              : undefined;
          Inference.refineValues(this);
      }
      Inference.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          Inference.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      Inference.fromBinary = function (bytes) {
          var instance = new Inference();
          Inference.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      Inference.refineValues = function (instance) {
          instance.ctcAcousticModels = instance.ctcAcousticModels || undefined;
          instance.languageModel = instance.languageModel || undefined;
      };
      Inference.fromBinaryReader = function (instance, reader) {
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
      };
      Inference.toBinaryWriter = function (instance, writer) {
          if (instance.ctcAcousticModels) {
              writer.writeMessage(1, instance.ctcAcousticModels, CtcAcousticModels.toBinaryWriter);
          }
          if (instance.languageModel) {
              writer.writeMessage(2, instance.languageModel, LanguageModel.toBinaryWriter);
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
      Inference.prototype.toJSON = function () {
          return this.toObject();
      };
      return Inference;
  }());
  var CtcAcousticModels = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param CtcAcousticModels value
       */
      function CtcAcousticModels(value) {
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
      CtcAcousticModels.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          CtcAcousticModels.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      CtcAcousticModels.fromBinary = function (bytes) {
          var instance = new CtcAcousticModels();
          CtcAcousticModels.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      CtcAcousticModels.refineValues = function (instance) {
          instance.type = instance.type || '';
          instance.quartznet = instance.quartznet || undefined;
          instance.quartznetTriton = instance.quartznetTriton || undefined;
          instance.wav2vec = instance.wav2vec || undefined;
      };
      CtcAcousticModels.fromBinaryReader = function (instance, reader) {
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
      };
      CtcAcousticModels.toBinaryWriter = function (instance, writer) {
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
      CtcAcousticModels.prototype.toJSON = function () {
          return this.toObject();
      };
      return CtcAcousticModels;
  }());
  var Wav2Vec = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param Wav2Vec value
       */
      function Wav2Vec(value) {
          value = value || {};
          this.modelPath = value.modelPath;
          this.useGpu = value.useGpu;
          Wav2Vec.refineValues(this);
      }
      Wav2Vec.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          Wav2Vec.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      Wav2Vec.fromBinary = function (bytes) {
          var instance = new Wav2Vec();
          Wav2Vec.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      Wav2Vec.refineValues = function (instance) {
          instance.modelPath = instance.modelPath || '';
          instance.useGpu = instance.useGpu || false;
      };
      Wav2Vec.fromBinaryReader = function (instance, reader) {
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
      };
      Wav2Vec.toBinaryWriter = function (instance, writer) {
          if (instance.modelPath) {
              writer.writeString(1, instance.modelPath);
          }
          if (instance.useGpu) {
              writer.writeBool(2, instance.useGpu);
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
      Wav2Vec.prototype.toObject = function () {
          return {
              modelPath: this.modelPath,
              useGpu: this.useGpu
          };
      };
      Wav2Vec.prototype.toJSON = function () {
          return this.toObject();
      };
      return Wav2Vec;
  }());
  var Quartznet = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param Quartznet value
       */
      function Quartznet(value) {
          value = value || {};
          this.configPath = value.configPath;
          this.loadType = value.loadType;
          this.ptFiles = value.ptFiles ? new PtFiles(value.ptFiles) : undefined;
          this.ckptFile = value.ckptFile ? new CkptFile(value.ckptFile) : undefined;
          Quartznet.refineValues(this);
      }
      Quartznet.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          Quartznet.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      Quartznet.fromBinary = function (bytes) {
          var instance = new Quartznet();
          Quartznet.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      Quartznet.refineValues = function (instance) {
          instance.configPath = instance.configPath || '';
          instance.loadType = instance.loadType || '';
          instance.ptFiles = instance.ptFiles || undefined;
          instance.ckptFile = instance.ckptFile || undefined;
      };
      Quartznet.fromBinaryReader = function (instance, reader) {
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
      };
      Quartznet.toBinaryWriter = function (instance, writer) {
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
      Quartznet.prototype.toObject = function () {
          return {
              configPath: this.configPath,
              loadType: this.loadType,
              ptFiles: this.ptFiles ? this.ptFiles.toObject() : undefined,
              ckptFile: this.ckptFile ? this.ckptFile.toObject() : undefined
          };
      };
      Quartznet.prototype.toJSON = function () {
          return this.toObject();
      };
      return Quartznet;
  }());
  var PtFiles = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param PtFiles value
       */
      function PtFiles(value) {
          value = value || {};
          this.path = value.path;
          this.step = value.step;
          PtFiles.refineValues(this);
      }
      PtFiles.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          PtFiles.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      PtFiles.fromBinary = function (bytes) {
          var instance = new PtFiles();
          PtFiles.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      PtFiles.refineValues = function (instance) {
          instance.path = instance.path || '';
          instance.step = instance.step || '';
      };
      PtFiles.fromBinaryReader = function (instance, reader) {
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
      };
      PtFiles.toBinaryWriter = function (instance, writer) {
          if (instance.path) {
              writer.writeString(1, instance.path);
          }
          if (instance.step) {
              writer.writeString(2, instance.step);
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
      PtFiles.prototype.toObject = function () {
          return {
              path: this.path,
              step: this.step
          };
      };
      PtFiles.prototype.toJSON = function () {
          return this.toObject();
      };
      return PtFiles;
  }());
  var CkptFile = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param CkptFile value
       */
      function CkptFile(value) {
          value = value || {};
          this.path = value.path;
          CkptFile.refineValues(this);
      }
      CkptFile.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          CkptFile.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      CkptFile.fromBinary = function (bytes) {
          var instance = new CkptFile();
          CkptFile.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      CkptFile.refineValues = function (instance) {
          instance.path = instance.path || '';
      };
      CkptFile.fromBinaryReader = function (instance, reader) {
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
      };
      CkptFile.toBinaryWriter = function (instance, writer) {
          if (instance.path) {
              writer.writeString(1, instance.path);
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
      CkptFile.prototype.toObject = function () {
          return {
              path: this.path
          };
      };
      CkptFile.prototype.toJSON = function () {
          return this.toObject();
      };
      return CkptFile;
  }());
  var QuartznetTriton = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param QuartznetTriton value
       */
      function QuartznetTriton(value) {
          value = value || {};
          this.configPath = value.configPath;
          this.tritonUrl = value.tritonUrl;
          this.tritonModel = value.tritonModel;
          QuartznetTriton.refineValues(this);
      }
      QuartznetTriton.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          QuartznetTriton.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      QuartznetTriton.fromBinary = function (bytes) {
          var instance = new QuartznetTriton();
          QuartznetTriton.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      QuartznetTriton.refineValues = function (instance) {
          instance.configPath = instance.configPath || '';
          instance.tritonUrl = instance.tritonUrl || '';
          instance.tritonModel = instance.tritonModel || '';
      };
      QuartznetTriton.fromBinaryReader = function (instance, reader) {
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
      };
      QuartznetTriton.toBinaryWriter = function (instance, writer) {
          if (instance.configPath) {
              writer.writeString(1, instance.configPath);
          }
          if (instance.tritonUrl) {
              writer.writeString(2, instance.tritonUrl);
          }
          if (instance.tritonModel) {
              writer.writeString(3, instance.tritonModel);
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
      QuartznetTriton.prototype.toObject = function () {
          return {
              configPath: this.configPath,
              tritonUrl: this.tritonUrl,
              tritonModel: this.tritonModel
          };
      };
      QuartznetTriton.prototype.toJSON = function () {
          return this.toObject();
      };
      return QuartznetTriton;
  }());
  var LanguageModel = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param LanguageModel value
       */
      function LanguageModel(value) {
          value = value || {};
          this.path = value.path;
          this.beamSize = value.beamSize;
          this.beamSearchScorerAlpha = value.beamSearchScorerAlpha;
          this.beamSearchScorerBeta = value.beamSearchScorerBeta;
          LanguageModel.refineValues(this);
      }
      LanguageModel.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          LanguageModel.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      LanguageModel.fromBinary = function (bytes) {
          var instance = new LanguageModel();
          LanguageModel.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      LanguageModel.refineValues = function (instance) {
          instance.path = instance.path || '';
          instance.beamSize = instance.beamSize || '0';
          instance.beamSearchScorerAlpha = instance.beamSearchScorerAlpha || 0;
          instance.beamSearchScorerBeta = instance.beamSearchScorerBeta || 0;
      };
      LanguageModel.fromBinaryReader = function (instance, reader) {
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
      };
      LanguageModel.toBinaryWriter = function (instance, writer) {
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
      LanguageModel.prototype.toObject = function () {
          return {
              path: this.path,
              beamSize: this.beamSize,
              beamSearchScorerAlpha: this.beamSearchScorerAlpha,
              beamSearchScorerBeta: this.beamSearchScorerBeta
          };
      };
      LanguageModel.prototype.toJSON = function () {
          return this.toObject();
      };
      return LanguageModel;
  }());
  var StreamingServer = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param StreamingServer value
       */
      function StreamingServer(value) {
          value = value || {};
          this.host = value.host;
          this.port = value.port;
          this.outputStyle = value.outputStyle;
          this.streamingSpeechRecognition = value.streamingSpeechRecognition
              ? new StreamingSpeechRecognition(value.streamingSpeechRecognition)
              : undefined;
          StreamingServer.refineValues(this);
      }
      StreamingServer.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          StreamingServer.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      StreamingServer.fromBinary = function (bytes) {
          var instance = new StreamingServer();
          StreamingServer.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      StreamingServer.refineValues = function (instance) {
          instance.host = instance.host || '';
          instance.port = instance.port || '0';
          instance.outputStyle = instance.outputStyle || '';
          instance.streamingSpeechRecognition =
              instance.streamingSpeechRecognition || undefined;
      };
      StreamingServer.fromBinaryReader = function (instance, reader) {
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
      };
      StreamingServer.toBinaryWriter = function (instance, writer) {
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
      StreamingServer.prototype.toJSON = function () {
          return this.toObject();
      };
      return StreamingServer;
  }());
  var StreamingSpeechRecognition = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param StreamingSpeechRecognition value
       */
      function StreamingSpeechRecognition(value) {
          value = value || {};
          this.transcribeNotFinal = value.transcribeNotFinal;
          this.ctcDecodingMethod = value.ctcDecodingMethod;
          this.samplingRate = value.samplingRate;
          this.minAudioChunkSize = value.minAudioChunkSize;
          this.startOfUtteranceThreshold = value.startOfUtteranceThreshold;
          this.endOfUtteranceThreshold = value.endOfUtteranceThreshold;
          StreamingSpeechRecognition.refineValues(this);
      }
      StreamingSpeechRecognition.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          StreamingSpeechRecognition.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      StreamingSpeechRecognition.fromBinary = function (bytes) {
          var instance = new StreamingSpeechRecognition();
          StreamingSpeechRecognition.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      StreamingSpeechRecognition.refineValues = function (instance) {
          instance.transcribeNotFinal = instance.transcribeNotFinal || false;
          instance.ctcDecodingMethod = instance.ctcDecodingMethod || '';
          instance.samplingRate = instance.samplingRate || '0';
          instance.minAudioChunkSize = instance.minAudioChunkSize || '0';
          instance.startOfUtteranceThreshold =
              instance.startOfUtteranceThreshold || 0;
          instance.endOfUtteranceThreshold = instance.endOfUtteranceThreshold || 0;
      };
      StreamingSpeechRecognition.fromBinaryReader = function (instance, reader) {
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
      };
      StreamingSpeechRecognition.toBinaryWriter = function (instance, writer) {
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
      StreamingSpeechRecognition.prototype.toJSON = function () {
          return this.toObject();
      };
      return StreamingSpeechRecognition;
  }());
  var VoiceActivityDetection = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param VoiceActivityDetection value
       */
      function VoiceActivityDetection(value) {
          value = value || {};
          this.active = value.active;
          this.samplingRate = value.samplingRate;
          this.pyannote = value.pyannote ? new Pyannote(value.pyannote) : undefined;
          this.matchbox = value.matchbox ? new Matchbox(value.matchbox) : undefined;
          VoiceActivityDetection.refineValues(this);
      }
      VoiceActivityDetection.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          VoiceActivityDetection.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      VoiceActivityDetection.fromBinary = function (bytes) {
          var instance = new VoiceActivityDetection();
          VoiceActivityDetection.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      VoiceActivityDetection.refineValues = function (instance) {
          instance.active = instance.active || '';
          instance.samplingRate = instance.samplingRate || '0';
          instance.pyannote = instance.pyannote || undefined;
          instance.matchbox = instance.matchbox || undefined;
      };
      VoiceActivityDetection.fromBinaryReader = function (instance, reader) {
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
      };
      VoiceActivityDetection.toBinaryWriter = function (instance, writer) {
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
      VoiceActivityDetection.prototype.toObject = function () {
          return {
              active: this.active,
              samplingRate: this.samplingRate,
              pyannote: this.pyannote ? this.pyannote.toObject() : undefined,
              matchbox: this.matchbox ? this.matchbox.toObject() : undefined
          };
      };
      VoiceActivityDetection.prototype.toJSON = function () {
          return this.toObject();
      };
      return VoiceActivityDetection;
  }());
  var Pyannote = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param Pyannote value
       */
      function Pyannote(value) {
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
      Pyannote.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          Pyannote.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      Pyannote.fromBinary = function (bytes) {
          var instance = new Pyannote();
          Pyannote.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      Pyannote.refineValues = function (instance) {
          instance.modelPath = instance.modelPath || '';
          instance.minAudioSize = instance.minAudioSize || '0';
          instance.offset = instance.offset || 0;
          instance.onset = instance.onset || 0;
          instance.logScale = instance.logScale || false;
          instance.minDurationOff = instance.minDurationOff || 0;
          instance.minDurationOn = instance.minDurationOn || 0;
      };
      Pyannote.fromBinaryReader = function (instance, reader) {
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
      };
      Pyannote.toBinaryWriter = function (instance, writer) {
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
      Pyannote.prototype.toJSON = function () {
          return this.toObject();
      };
      return Pyannote;
  }());
  var Matchbox = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param Matchbox value
       */
      function Matchbox(value) {
          value = value || {};
          this.modelConfig = value.modelConfig;
          this.encoderPath = value.encoderPath;
          this.decoderPath = value.decoderPath;
          Matchbox.refineValues(this);
      }
      Matchbox.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          Matchbox.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      Matchbox.fromBinary = function (bytes) {
          var instance = new Matchbox();
          Matchbox.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      Matchbox.refineValues = function (instance) {
          instance.modelConfig = instance.modelConfig || '';
          instance.encoderPath = instance.encoderPath || '';
          instance.decoderPath = instance.decoderPath || '';
      };
      Matchbox.fromBinaryReader = function (instance, reader) {
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
      };
      Matchbox.toBinaryWriter = function (instance, writer) {
          if (instance.modelConfig) {
              writer.writeString(1, instance.modelConfig);
          }
          if (instance.encoderPath) {
              writer.writeString(2, instance.encoderPath);
          }
          if (instance.decoderPath) {
              writer.writeString(3, instance.decoderPath);
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
      Matchbox.prototype.toObject = function () {
          return {
              modelConfig: this.modelConfig,
              encoderPath: this.encoderPath,
              decoderPath: this.decoderPath
          };
      };
      Matchbox.prototype.toJSON = function () {
          return this.toObject();
      };
      return Matchbox;
  }());
  var PostProcessing = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param PostProcessing value
       */
      function PostProcessing(value) {
          value = value || {};
          this.pipeline = (value.pipeline || []).slice();
          this.postProcessors = value.postProcessors
              ? new PostProcessors(value.postProcessors)
              : undefined;
          PostProcessing.refineValues(this);
      }
      PostProcessing.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          PostProcessing.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      PostProcessing.fromBinary = function (bytes) {
          var instance = new PostProcessing();
          PostProcessing.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      PostProcessing.refineValues = function (instance) {
          instance.pipeline = instance.pipeline || [];
          instance.postProcessors = instance.postProcessors || undefined;
      };
      PostProcessing.fromBinaryReader = function (instance, reader) {
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
      };
      PostProcessing.toBinaryWriter = function (instance, writer) {
          if (instance.pipeline && instance.pipeline.length) {
              writer.writeRepeatedString(1, instance.pipeline);
          }
          if (instance.postProcessors) {
              writer.writeMessage(2, instance.postProcessors, PostProcessors.toBinaryWriter);
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
      PostProcessing.prototype.toObject = function () {
          return {
              pipeline: (this.pipeline || []).slice(),
              postProcessors: this.postProcessors
                  ? this.postProcessors.toObject()
                  : undefined
          };
      };
      PostProcessing.prototype.toJSON = function () {
          return this.toObject();
      };
      return PostProcessing;
  }());
  var PostProcessors = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param PostProcessors value
       */
      function PostProcessors(value) {
          value = value || {};
          this.symSpell = value.symSpell ? new SymSpell(value.symSpell) : undefined;
          this.normalization = value.normalization
              ? new Normalization(value.normalization)
              : undefined;
          PostProcessors.refineValues(this);
      }
      PostProcessors.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          PostProcessors.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      PostProcessors.fromBinary = function (bytes) {
          var instance = new PostProcessors();
          PostProcessors.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      PostProcessors.refineValues = function (instance) {
          instance.symSpell = instance.symSpell || undefined;
          instance.normalization = instance.normalization || undefined;
      };
      PostProcessors.fromBinaryReader = function (instance, reader) {
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
      };
      PostProcessors.toBinaryWriter = function (instance, writer) {
          if (instance.symSpell) {
              writer.writeMessage(1, instance.symSpell, SymSpell.toBinaryWriter);
          }
          if (instance.normalization) {
              writer.writeMessage(2, instance.normalization, Normalization.toBinaryWriter);
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
      PostProcessors.prototype.toObject = function () {
          return {
              symSpell: this.symSpell ? this.symSpell.toObject() : undefined,
              normalization: this.normalization
                  ? this.normalization.toObject()
                  : undefined
          };
      };
      PostProcessors.prototype.toJSON = function () {
          return this.toObject();
      };
      return PostProcessors;
  }());
  var SymSpell = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param SymSpell value
       */
      function SymSpell(value) {
          value = value || {};
          this.dictPath = value.dictPath;
          this.maxDictionaryEditDistance = value.maxDictionaryEditDistance;
          this.prefixLength = value.prefixLength;
          SymSpell.refineValues(this);
      }
      SymSpell.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          SymSpell.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      SymSpell.fromBinary = function (bytes) {
          var instance = new SymSpell();
          SymSpell.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      SymSpell.refineValues = function (instance) {
          instance.dictPath = instance.dictPath || '';
          instance.maxDictionaryEditDistance =
              instance.maxDictionaryEditDistance || '0';
          instance.prefixLength = instance.prefixLength || '0';
      };
      SymSpell.fromBinaryReader = function (instance, reader) {
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
      };
      SymSpell.toBinaryWriter = function (instance, writer) {
          if (instance.dictPath) {
              writer.writeString(1, instance.dictPath);
          }
          if (instance.maxDictionaryEditDistance) {
              writer.writeInt64String(2, instance.maxDictionaryEditDistance);
          }
          if (instance.prefixLength) {
              writer.writeInt64String(3, instance.prefixLength);
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
      SymSpell.prototype.toObject = function () {
          return {
              dictPath: this.dictPath,
              maxDictionaryEditDistance: this.maxDictionaryEditDistance,
              prefixLength: this.prefixLength
          };
      };
      SymSpell.prototype.toJSON = function () {
          return this.toObject();
      };
      return SymSpell;
  }());
  var Normalization = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param Normalization value
       */
      function Normalization(value) {
          value = value || {};
          this.language = value.language;
          Normalization.refineValues(this);
      }
      Normalization.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          Normalization.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      Normalization.fromBinary = function (bytes) {
          var instance = new Normalization();
          Normalization.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      Normalization.refineValues = function (instance) {
          instance.language = instance.language || '';
      };
      Normalization.fromBinaryReader = function (instance, reader) {
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
      };
      Normalization.toBinaryWriter = function (instance, writer) {
          if (instance.language) {
              writer.writeString(1, instance.language);
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
      Normalization.prototype.toObject = function () {
          return {
              language: this.language
          };
      };
      Normalization.prototype.toJSON = function () {
          return this.toObject();
      };
      return Normalization;
  }());
  var Logging = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param Logging value
       */
      function Logging(value) {
          value = value || {};
          this.type = value.type;
          this.path = value.path;
          Logging.refineValues(this);
      }
      Logging.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          Logging.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      Logging.fromBinary = function (bytes) {
          var instance = new Logging();
          Logging.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      Logging.refineValues = function (instance) {
          instance.type = instance.type || '';
          instance.path = instance.path || '';
      };
      Logging.fromBinaryReader = function (instance, reader) {
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
      };
      Logging.toBinaryWriter = function (instance, writer) {
          if (instance.type) {
              writer.writeString(1, instance.type);
          }
          if (instance.path) {
              writer.writeString(2, instance.path);
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
      Logging.prototype.toObject = function () {
          return {
              type: this.type,
              path: this.path
          };
      };
      Logging.prototype.toJSON = function () {
          return this.toObject();
      };
      return Logging;
  }());

  var Empty = /** @class */ (function () {
      /**
       * Creates an object and applies default Protobuf values
       * @param Empty value
       */
      function Empty(value) {
          value = value || {};
          Empty.refineValues(this);
      }
      Empty.toBinary = function (instance) {
          var writer = new googleProtobuf.BinaryWriter();
          Empty.toBinaryWriter(instance, writer);
          return writer.getResultBuffer();
      };
      Empty.fromBinary = function (bytes) {
          var instance = new Empty();
          Empty.fromBinaryReader(instance, new googleProtobuf.BinaryReader(bytes));
          return instance;
      };
      Empty.refineValues = function (instance) { };
      Empty.fromBinaryReader = function (instance, reader) {
          while (reader.nextField()) {
              if (reader.isEndGroup())
                  break;
              switch (reader.getFieldNumber()) {
                  default:
                      reader.skipField();
              }
          }
          Empty.refineValues(instance);
      };
      Empty.toBinaryWriter = function (instance, writer) { };
      Empty.prototype.toObject = function () {
          return {};
      };
      Empty.prototype.toJSON = function () {
          return this.toObject();
      };
      return Empty;
  }());

  /* tslint:disable */
  var Speech2TextClient = /** @class */ (function () {
      function Speech2TextClient(settings, clientFactory, handler) {
          this.handler = handler;
          this.client = clientFactory.createClient('ondewo.s2t.Speech2Text', settings);
      }
      /**
       * Unary RPC. Emits messages and throws errors on non-zero status codes
       * @param thisProto.TranscribeFileRequest request
       * @param Metadata metadata
       * @return Observable<thisProto.TranscribeFileResponse>
       */
      Speech2TextClient.prototype.transcribeFile = function (requestData, requestMetadata) {
          if (requestMetadata === void 0) { requestMetadata = {}; }
          return this.transcribeFile$eventStream(requestData, requestMetadata).pipe(i2.throwStatusErrors(), i2.takeMessages());
      };
      /**
       * Unary RPC. Emits data and status events; does not throw errors by design
       * @param thisProto.TranscribeFileRequest request
       * @param Metadata metadata
       * @return Observable<GrpcEvent<thisProto.TranscribeFileResponse>>
       */
      Speech2TextClient.prototype.transcribeFile$eventStream = function (requestData, requestMetadata) {
          if (requestMetadata === void 0) { requestMetadata = {}; }
          return this.handler.handle({
              type: common.GrpcCallType.unary,
              client: this.client,
              path: '/ondewo.s2t.Speech2Text/TranscribeFile',
              requestData: requestData,
              requestMetadata: requestMetadata,
              requestClass: TranscribeFileRequest,
              responseClass: TranscribeFileResponse
          });
      };
      /**
       * Server streaming RPC. Emits messages and throws errors on non-zero status codes
       * @param thisProto.TranscribeStreamRequest request
       * @param Metadata metadata
       * @return Observable<thisProto.TranscribeStreamResponse>
       */
      Speech2TextClient.prototype.transcribeStream = function (requestData, requestMetadata) {
          if (requestMetadata === void 0) { requestMetadata = {}; }
          return this.transcribeStream$eventStream(requestData, requestMetadata).pipe(i2.throwStatusErrors(), i2.takeMessages());
      };
      /**
       * Server streaming RPC. Emits data and status events; does not throw errors by design
       * @param thisProto.TranscribeStreamRequest request
       * @param Metadata metadata
       * @return Observable<GrpcEvent<thisProto.TranscribeStreamResponse>>
       */
      Speech2TextClient.prototype.transcribeStream$eventStream = function (requestData, requestMetadata) {
          if (requestMetadata === void 0) { requestMetadata = {}; }
          return this.handler.handle({
              type: common.GrpcCallType.serverStream,
              client: this.client,
              path: '/ondewo.s2t.Speech2Text/TranscribeStream',
              requestData: requestData,
              requestMetadata: requestMetadata,
              requestClass: TranscribeStreamRequest,
              responseClass: TranscribeStreamResponse
          });
      };
      /**
       * Unary RPC. Emits messages and throws errors on non-zero status codes
       * @param thisProto.S2tPipelineId request
       * @param Metadata metadata
       * @return Observable<thisProto.Speech2TextConfig>
       */
      Speech2TextClient.prototype.getS2tPipeline = function (requestData, requestMetadata) {
          if (requestMetadata === void 0) { requestMetadata = {}; }
          return this.getS2tPipeline$eventStream(requestData, requestMetadata).pipe(i2.throwStatusErrors(), i2.takeMessages());
      };
      /**
       * Unary RPC. Emits data and status events; does not throw errors by design
       * @param thisProto.S2tPipelineId request
       * @param Metadata metadata
       * @return Observable<GrpcEvent<thisProto.Speech2TextConfig>>
       */
      Speech2TextClient.prototype.getS2tPipeline$eventStream = function (requestData, requestMetadata) {
          if (requestMetadata === void 0) { requestMetadata = {}; }
          return this.handler.handle({
              type: common.GrpcCallType.unary,
              client: this.client,
              path: '/ondewo.s2t.Speech2Text/GetS2tPipeline',
              requestData: requestData,
              requestMetadata: requestMetadata,
              requestClass: S2tPipelineId,
              responseClass: Speech2TextConfig
          });
      };
      /**
       * Unary RPC. Emits messages and throws errors on non-zero status codes
       * @param thisProto.Speech2TextConfig request
       * @param Metadata metadata
       * @return Observable<thisProto.S2tPipelineId>
       */
      Speech2TextClient.prototype.createS2tPipeline = function (requestData, requestMetadata) {
          if (requestMetadata === void 0) { requestMetadata = {}; }
          return this.createS2tPipeline$eventStream(requestData, requestMetadata).pipe(i2.throwStatusErrors(), i2.takeMessages());
      };
      /**
       * Unary RPC. Emits data and status events; does not throw errors by design
       * @param thisProto.Speech2TextConfig request
       * @param Metadata metadata
       * @return Observable<GrpcEvent<thisProto.S2tPipelineId>>
       */
      Speech2TextClient.prototype.createS2tPipeline$eventStream = function (requestData, requestMetadata) {
          if (requestMetadata === void 0) { requestMetadata = {}; }
          return this.handler.handle({
              type: common.GrpcCallType.unary,
              client: this.client,
              path: '/ondewo.s2t.Speech2Text/CreateS2tPipeline',
              requestData: requestData,
              requestMetadata: requestMetadata,
              requestClass: Speech2TextConfig,
              responseClass: S2tPipelineId
          });
      };
      /**
       * Unary RPC. Emits messages and throws errors on non-zero status codes
       * @param thisProto.S2tPipelineId request
       * @param Metadata metadata
       * @return Observable<googleProtobuf000.Empty>
       */
      Speech2TextClient.prototype.deleteS2tPipeline = function (requestData, requestMetadata) {
          if (requestMetadata === void 0) { requestMetadata = {}; }
          return this.deleteS2tPipeline$eventStream(requestData, requestMetadata).pipe(i2.throwStatusErrors(), i2.takeMessages());
      };
      /**
       * Unary RPC. Emits data and status events; does not throw errors by design
       * @param thisProto.S2tPipelineId request
       * @param Metadata metadata
       * @return Observable<GrpcEvent<googleProtobuf000.Empty>>
       */
      Speech2TextClient.prototype.deleteS2tPipeline$eventStream = function (requestData, requestMetadata) {
          if (requestMetadata === void 0) { requestMetadata = {}; }
          return this.handler.handle({
              type: common.GrpcCallType.unary,
              client: this.client,
              path: '/ondewo.s2t.Speech2Text/DeleteS2tPipeline',
              requestData: requestData,
              requestMetadata: requestMetadata,
              requestClass: S2tPipelineId,
              responseClass: Empty
          });
      };
      /**
       * Unary RPC. Emits messages and throws errors on non-zero status codes
       * @param thisProto.Speech2TextConfig request
       * @param Metadata metadata
       * @return Observable<googleProtobuf000.Empty>
       */
      Speech2TextClient.prototype.updateS2tPipeline = function (requestData, requestMetadata) {
          if (requestMetadata === void 0) { requestMetadata = {}; }
          return this.updateS2tPipeline$eventStream(requestData, requestMetadata).pipe(i2.throwStatusErrors(), i2.takeMessages());
      };
      /**
       * Unary RPC. Emits data and status events; does not throw errors by design
       * @param thisProto.Speech2TextConfig request
       * @param Metadata metadata
       * @return Observable<GrpcEvent<googleProtobuf000.Empty>>
       */
      Speech2TextClient.prototype.updateS2tPipeline$eventStream = function (requestData, requestMetadata) {
          if (requestMetadata === void 0) { requestMetadata = {}; }
          return this.handler.handle({
              type: common.GrpcCallType.unary,
              client: this.client,
              path: '/ondewo.s2t.Speech2Text/UpdateS2tPipeline',
              requestData: requestData,
              requestMetadata: requestMetadata,
              requestClass: Speech2TextConfig,
              responseClass: Empty
          });
      };
      /**
       * Unary RPC. Emits messages and throws errors on non-zero status codes
       * @param thisProto.ListS2tPipelinesRequest request
       * @param Metadata metadata
       * @return Observable<thisProto.ListS2tPipelinesResponse>
       */
      Speech2TextClient.prototype.listS2tPipelines = function (requestData, requestMetadata) {
          if (requestMetadata === void 0) { requestMetadata = {}; }
          return this.listS2tPipelines$eventStream(requestData, requestMetadata).pipe(i2.throwStatusErrors(), i2.takeMessages());
      };
      /**
       * Unary RPC. Emits data and status events; does not throw errors by design
       * @param thisProto.ListS2tPipelinesRequest request
       * @param Metadata metadata
       * @return Observable<GrpcEvent<thisProto.ListS2tPipelinesResponse>>
       */
      Speech2TextClient.prototype.listS2tPipelines$eventStream = function (requestData, requestMetadata) {
          if (requestMetadata === void 0) { requestMetadata = {}; }
          return this.handler.handle({
              type: common.GrpcCallType.unary,
              client: this.client,
              path: '/ondewo.s2t.Speech2Text/ListS2tPipelines',
              requestData: requestData,
              requestMetadata: requestMetadata,
              requestClass: ListS2tPipelinesRequest,
              responseClass: ListS2tPipelinesResponse
          });
      };
      /**
       * Unary RPC. Emits messages and throws errors on non-zero status codes
       * @param thisProto.ListS2tLanguagesRequest request
       * @param Metadata metadata
       * @return Observable<thisProto.ListS2tLanguagesResponse>
       */
      Speech2TextClient.prototype.listS2tLanguages = function (requestData, requestMetadata) {
          if (requestMetadata === void 0) { requestMetadata = {}; }
          return this.listS2tLanguages$eventStream(requestData, requestMetadata).pipe(i2.throwStatusErrors(), i2.takeMessages());
      };
      /**
       * Unary RPC. Emits data and status events; does not throw errors by design
       * @param thisProto.ListS2tLanguagesRequest request
       * @param Metadata metadata
       * @return Observable<GrpcEvent<thisProto.ListS2tLanguagesResponse>>
       */
      Speech2TextClient.prototype.listS2tLanguages$eventStream = function (requestData, requestMetadata) {
          if (requestMetadata === void 0) { requestMetadata = {}; }
          return this.handler.handle({
              type: common.GrpcCallType.unary,
              client: this.client,
              path: '/ondewo.s2t.Speech2Text/ListS2tLanguages',
              requestData: requestData,
              requestMetadata: requestMetadata,
              requestClass: ListS2tLanguagesRequest,
              responseClass: ListS2tLanguagesResponse
          });
      };
      /**
       * Unary RPC. Emits messages and throws errors on non-zero status codes
       * @param thisProto.ListS2tDomainsRequest request
       * @param Metadata metadata
       * @return Observable<thisProto.ListS2tDomainsResponse>
       */
      Speech2TextClient.prototype.listS2tDomains = function (requestData, requestMetadata) {
          if (requestMetadata === void 0) { requestMetadata = {}; }
          return this.listS2tDomains$eventStream(requestData, requestMetadata).pipe(i2.throwStatusErrors(), i2.takeMessages());
      };
      /**
       * Unary RPC. Emits data and status events; does not throw errors by design
       * @param thisProto.ListS2tDomainsRequest request
       * @param Metadata metadata
       * @return Observable<GrpcEvent<thisProto.ListS2tDomainsResponse>>
       */
      Speech2TextClient.prototype.listS2tDomains$eventStream = function (requestData, requestMetadata) {
          if (requestMetadata === void 0) { requestMetadata = {}; }
          return this.handler.handle({
              type: common.GrpcCallType.unary,
              client: this.client,
              path: '/ondewo.s2t.Speech2Text/ListS2tDomains',
              requestData: requestData,
              requestMetadata: requestMetadata,
              requestClass: ListS2tDomainsRequest,
              responseClass: ListS2tDomainsResponse
          });
      };
      return Speech2TextClient;
  }());
  Speech2TextClient.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function Speech2TextClient_Factory() { return new Speech2TextClient(i0__namespace.ɵɵinject(GRPC_SPEECH2_TEXT_CLIENT_SETTINGS, 8), i0__namespace.ɵɵinject(i2__namespace.GRPC_CLIENT_FACTORY), i0__namespace.ɵɵinject(i2__namespace.GrpcHandler)); }, token: Speech2TextClient, providedIn: "root" });
  Speech2TextClient.decorators = [
      { type: i0.Injectable, args: [{
                  providedIn: 'root'
              },] }
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
  exports.Empty = Empty;
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
