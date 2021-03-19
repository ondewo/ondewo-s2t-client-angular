import { GrpcClientFactory, GrpcClientSettings, GrpcEvent } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './speech-to-text.pb';
import * as googleProtobuf000 from '../../google/protobuf/empty.pb';
export declare class Speech2TextClient {
    private handler;
    private client;
    constructor(settings: GrpcClientSettings, clientFactory: GrpcClientFactory, handler: GrpcHandler);
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.TranscribeFileRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.TranscribeFileResponse>
     */
    transcribeFile(requestData: thisProto.TranscribeFileRequest, requestMetadata?: Metadata): Observable<thisProto.TranscribeFileResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.TranscribeFileRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.TranscribeFileResponse>>
     */
    transcribeFile$eventStream(requestData: thisProto.TranscribeFileRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.TranscribeFileResponse>>;
    /**
     * Server streaming RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.TranscribeStreamRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.TranscribeStreamResponse>
     */
    transcribeStream(requestData: thisProto.TranscribeStreamRequest, requestMetadata?: Metadata): Observable<thisProto.TranscribeStreamResponse>;
    /**
     * Server streaming RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.TranscribeStreamRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.TranscribeStreamResponse>>
     */
    transcribeStream$eventStream(requestData: thisProto.TranscribeStreamRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.TranscribeStreamResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.S2tPipelineId request
     * @param Metadata metadata
     * @return Observable<thisProto.Speech2TextConfig>
     */
    getS2tPipeline(requestData: thisProto.S2tPipelineId, requestMetadata?: Metadata): Observable<thisProto.Speech2TextConfig>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.S2tPipelineId request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Speech2TextConfig>>
     */
    getS2tPipeline$eventStream(requestData: thisProto.S2tPipelineId, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.Speech2TextConfig>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.Speech2TextConfig request
     * @param Metadata metadata
     * @return Observable<thisProto.S2tPipelineId>
     */
    createS2tPipeline(requestData: thisProto.Speech2TextConfig, requestMetadata?: Metadata): Observable<thisProto.S2tPipelineId>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.Speech2TextConfig request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.S2tPipelineId>>
     */
    createS2tPipeline$eventStream(requestData: thisProto.Speech2TextConfig, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.S2tPipelineId>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.S2tPipelineId request
     * @param Metadata metadata
     * @return Observable<googleProtobuf000.Empty>
     */
    deleteS2tPipeline(requestData: thisProto.S2tPipelineId, requestMetadata?: Metadata): Observable<googleProtobuf000.Empty>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.S2tPipelineId request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    deleteS2tPipeline$eventStream(requestData: thisProto.S2tPipelineId, requestMetadata?: Metadata): Observable<GrpcEvent<googleProtobuf000.Empty>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.Speech2TextConfig request
     * @param Metadata metadata
     * @return Observable<googleProtobuf000.Empty>
     */
    updateS2tPipeline(requestData: thisProto.Speech2TextConfig, requestMetadata?: Metadata): Observable<googleProtobuf000.Empty>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.Speech2TextConfig request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    updateS2tPipeline$eventStream(requestData: thisProto.Speech2TextConfig, requestMetadata?: Metadata): Observable<GrpcEvent<googleProtobuf000.Empty>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListS2tPipelinesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListS2tPipelinesResponse>
     */
    listS2tPipelines(requestData: thisProto.ListS2tPipelinesRequest, requestMetadata?: Metadata): Observable<thisProto.ListS2tPipelinesResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListS2tPipelinesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListS2tPipelinesResponse>>
     */
    listS2tPipelines$eventStream(requestData: thisProto.ListS2tPipelinesRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ListS2tPipelinesResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListS2tLanguagesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListS2tLanguagesResponse>
     */
    listS2tLanguages(requestData: thisProto.ListS2tLanguagesRequest, requestMetadata?: Metadata): Observable<thisProto.ListS2tLanguagesResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListS2tLanguagesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListS2tLanguagesResponse>>
     */
    listS2tLanguages$eventStream(requestData: thisProto.ListS2tLanguagesRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ListS2tLanguagesResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListS2tDomainsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListS2tDomainsResponse>
     */
    listS2tDomains(requestData: thisProto.ListS2tDomainsRequest, requestMetadata?: Metadata): Observable<thisProto.ListS2tDomainsResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListS2tDomainsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListS2tDomainsResponse>>
     */
    listS2tDomains$eventStream(requestData: thisProto.ListS2tDomainsRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ListS2tDomainsResponse>>;
}
