/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './speech-to-text.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import { GRPC_SPEECH2_TEXT_CLIENT_SETTINGS } from './speech-to-text.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-grpc/core";
/**
 * Service client implementation for ondewo.s2t.Speech2Text
 */
export class Speech2TextClient {
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
                    requestClass: thisProto.TranscribeFileRequest,
                    responseClass: thisProto.TranscribeFileResponse
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
                    requestClass: thisProto.TranscribeStreamRequest,
                    responseClass: thisProto.TranscribeStreamResponse
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
                    requestClass: thisProto.S2tPipelineId,
                    responseClass: thisProto.Speech2TextConfig
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
                    requestClass: thisProto.Speech2TextConfig,
                    responseClass: thisProto.S2tPipelineId
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
                    requestClass: thisProto.S2tPipelineId,
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
                    requestClass: thisProto.Speech2TextConfig,
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
                    requestClass: thisProto.ListS2tPipelinesRequest,
                    responseClass: thisProto.ListS2tPipelinesResponse
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
                    requestClass: thisProto.ListS2tLanguagesRequest,
                    responseClass: thisProto.ListS2tLanguagesResponse
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
                    requestClass: thisProto.ListS2tDomainsRequest,
                    responseClass: thisProto.ListS2tDomainsResponse
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
                    responseClass: thisProto.S2TGetServiceInfoResponse
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
                    requestClass: thisProto.ListS2tLanguageModelsRequest,
                    responseClass: thisProto.ListS2tLanguageModelsResponse
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
}
Speech2TextClient.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: Speech2TextClient, deps: [{ token: GRPC_SPEECH2_TEXT_CLIENT_SETTINGS, optional: true }, { token: GRPC_CLIENT_FACTORY }, { token: i1.GrpcHandler }], target: i0.ɵɵFactoryTarget.Injectable });
Speech2TextClient.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: Speech2TextClient, providedIn: 'any' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: Speech2TextClient, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRPC_SPEECH2_TEXT_CLIENT_SETTINGS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [GRPC_CLIENT_FACTORY]
                }] }, { type: i1.GrpcHandler }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlZWNoLXRvLXRleHQucGJzYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9vbmRld28vczJ0L3NwZWVjaC10by10ZXh0LnBic2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixjQUFjO0FBQ2QsRUFBRTtBQUNGLDJCQUEyQjtBQUMzQiw4Q0FBOEM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFDTCxZQUFZLEVBSVosWUFBWSxFQUNiLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUNMLG1CQUFtQixFQUVuQixZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxLQUFLLFNBQVMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEtBQUssaUJBQWlCLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQUM1RTs7R0FFRztBQUVILE1BQU0sT0FBTyxpQkFBaUI7SUFrUDVCLFlBQ3lELFFBQWEsRUFDdkMsYUFBcUMsRUFDMUQsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQWxQOUI7Ozs7V0FJRztRQUNILFNBQUksR0FBRztZQUNMOzs7Ozs7ZUFNRztZQUNILGNBQWMsRUFBRSxDQUNkLFdBQTRDLEVBQzVDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxFQUNxQixFQUFFO2dCQUMzRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7b0JBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtvQkFDbkIsSUFBSSxFQUFFLHdDQUF3QztvQkFDOUMsV0FBVztvQkFDWCxlQUFlO29CQUNmLFlBQVksRUFBRSxTQUFTLENBQUMscUJBQXFCO29CQUM3QyxhQUFhLEVBQUUsU0FBUyxDQUFDLHNCQUFzQjtpQkFDaEQsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUNEOzs7Ozs7ZUFNRztZQUNILGdCQUFnQixFQUFFLENBQ2hCLFdBQTBELEVBQzFELGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxFQUN1QixFQUFFO2dCQUM3RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLFVBQVU7b0JBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtvQkFDbkIsSUFBSSxFQUFFLDBDQUEwQztvQkFDaEQsV0FBVztvQkFDWCxlQUFlO29CQUNmLFlBQVksRUFBRSxTQUFTLENBQUMsdUJBQXVCO29CQUMvQyxhQUFhLEVBQUUsU0FBUyxDQUFDLHdCQUF3QjtpQkFDbEQsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUNEOzs7Ozs7ZUFNRztZQUNILGNBQWMsRUFBRSxDQUNkLFdBQW9DLEVBQ3BDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxFQUNnQixFQUFFO2dCQUN0RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7b0JBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtvQkFDbkIsSUFBSSxFQUFFLHdDQUF3QztvQkFDOUMsV0FBVztvQkFDWCxlQUFlO29CQUNmLFlBQVksRUFBRSxTQUFTLENBQUMsYUFBYTtvQkFDckMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxpQkFBaUI7aUJBQzNDLENBQUMsQ0FBQztZQUNMLENBQUM7WUFDRDs7Ozs7O2VBTUc7WUFDSCxpQkFBaUIsRUFBRSxDQUNqQixXQUF3QyxFQUN4QyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsRUFDWSxFQUFFO2dCQUNsRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7b0JBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtvQkFDbkIsSUFBSSxFQUFFLDJDQUEyQztvQkFDakQsV0FBVztvQkFDWCxlQUFlO29CQUNmLFlBQVksRUFBRSxTQUFTLENBQUMsaUJBQWlCO29CQUN6QyxhQUFhLEVBQUUsU0FBUyxDQUFDLGFBQWE7aUJBQ3ZDLENBQUMsQ0FBQztZQUNMLENBQUM7WUFDRDs7Ozs7O2VBTUc7WUFDSCxpQkFBaUIsRUFBRSxDQUNqQixXQUFvQyxFQUNwQyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsRUFDWSxFQUFFO2dCQUNsRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7b0JBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtvQkFDbkIsSUFBSSxFQUFFLDJDQUEyQztvQkFDakQsV0FBVztvQkFDWCxlQUFlO29CQUNmLFlBQVksRUFBRSxTQUFTLENBQUMsYUFBYTtvQkFDckMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLEtBQUs7aUJBQ3ZDLENBQUMsQ0FBQztZQUNMLENBQUM7WUFDRDs7Ozs7O2VBTUc7WUFDSCxpQkFBaUIsRUFBRSxDQUNqQixXQUF3QyxFQUN4QyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsRUFDWSxFQUFFO2dCQUNsRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7b0JBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtvQkFDbkIsSUFBSSxFQUFFLDJDQUEyQztvQkFDakQsV0FBVztvQkFDWCxlQUFlO29CQUNmLFlBQVksRUFBRSxTQUFTLENBQUMsaUJBQWlCO29CQUN6QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsS0FBSztpQkFDdkMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUNEOzs7Ozs7ZUFNRztZQUNILGdCQUFnQixFQUFFLENBQ2hCLFdBQThDLEVBQzlDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxFQUN1QixFQUFFO2dCQUM3RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7b0JBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtvQkFDbkIsSUFBSSxFQUFFLDBDQUEwQztvQkFDaEQsV0FBVztvQkFDWCxlQUFlO29CQUNmLFlBQVksRUFBRSxTQUFTLENBQUMsdUJBQXVCO29CQUMvQyxhQUFhLEVBQUUsU0FBUyxDQUFDLHdCQUF3QjtpQkFDbEQsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUNEOzs7Ozs7ZUFNRztZQUNILGdCQUFnQixFQUFFLENBQ2hCLFdBQThDLEVBQzlDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxFQUN1QixFQUFFO2dCQUM3RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7b0JBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtvQkFDbkIsSUFBSSxFQUFFLDBDQUEwQztvQkFDaEQsV0FBVztvQkFDWCxlQUFlO29CQUNmLFlBQVksRUFBRSxTQUFTLENBQUMsdUJBQXVCO29CQUMvQyxhQUFhLEVBQUUsU0FBUyxDQUFDLHdCQUF3QjtpQkFDbEQsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUNEOzs7Ozs7ZUFNRztZQUNILGNBQWMsRUFBRSxDQUNkLFdBQTRDLEVBQzVDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxFQUNxQixFQUFFO2dCQUMzRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7b0JBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtvQkFDbkIsSUFBSSxFQUFFLHdDQUF3QztvQkFDOUMsV0FBVztvQkFDWCxlQUFlO29CQUNmLFlBQVksRUFBRSxTQUFTLENBQUMscUJBQXFCO29CQUM3QyxhQUFhLEVBQUUsU0FBUyxDQUFDLHNCQUFzQjtpQkFDaEQsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUNEOzs7Ozs7ZUFNRztZQUNILGNBQWMsRUFBRSxDQUNkLFdBQW9DLEVBQ3BDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxFQUN3QixFQUFFO2dCQUM5RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7b0JBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtvQkFDbkIsSUFBSSxFQUFFLHdDQUF3QztvQkFDOUMsV0FBVztvQkFDWCxlQUFlO29CQUNmLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxLQUFLO29CQUNyQyxhQUFhLEVBQUUsU0FBUyxDQUFDLHlCQUF5QjtpQkFDbkQsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUNEOzs7Ozs7ZUFNRztZQUNILHFCQUFxQixFQUFFLENBQ3JCLFdBQW1ELEVBQ25ELGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxFQUM0QixFQUFFO2dCQUNsRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7b0JBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtvQkFDbkIsSUFBSSxFQUFFLCtDQUErQztvQkFDckQsV0FBVztvQkFDWCxlQUFlO29CQUNmLFlBQVksRUFBRSxTQUFTLENBQUMsNEJBQTRCO29CQUNwRCxhQUFhLEVBQUUsU0FBUyxDQUFDLDZCQUE2QjtpQkFDdkQsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUM7UUFPQSxJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQ3RDLHdCQUF3QixFQUN4QixRQUFRLENBQ1QsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxjQUFjLENBQ1osV0FBNEMsRUFDNUMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixjQUFjLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQzthQUM1QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxnQkFBZ0IsQ0FDZCxXQUEwRCxFQUMxRCxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7YUFDOUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsY0FBYyxDQUNaLFdBQW9DLEVBQ3BDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRTtRQUVwQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsY0FBYyxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7YUFDNUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsaUJBQWlCLENBQ2YsV0FBd0MsRUFDeEMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQy9DLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILGlCQUFpQixDQUNmLFdBQW9DLEVBQ3BDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRTtRQUVwQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsaUJBQWlCLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQzthQUMvQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxpQkFBaUIsQ0FDZixXQUF3QyxFQUN4QyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7YUFDL0MsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsZ0JBQWdCLENBQ2QsV0FBOEMsRUFDOUMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQzlDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILGdCQUFnQixDQUNkLFdBQThDLEVBQzlDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRTtRQUVwQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQzthQUM5QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxjQUFjLENBQ1osV0FBNEMsRUFDNUMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixjQUFjLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQzthQUM1QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxjQUFjLENBQ1osV0FBb0MsRUFDcEMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixjQUFjLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQzthQUM1QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxxQkFBcUIsQ0FDbkIsV0FBbUQsRUFDbkQsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQ25ELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OEdBM2FVLGlCQUFpQixrQkFtUE4saUNBQWlDLDZCQUM3QyxtQkFBbUI7a0hBcFBsQixpQkFBaUIsY0FESixLQUFLOzJGQUNsQixpQkFBaUI7a0JBRDdCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFOzswQkFvUDVCLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsaUNBQWlDOzswQkFDcEQsTUFBTTsyQkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEB0cy1ub2NoZWNrXG4vL1xuLy8gVEhJUyBJUyBBIEdFTkVSQVRFRCBGSUxFXG4vLyBETyBOT1QgTU9ESUZZIElUISBZT1VSIENIQU5HRVMgV0lMTCBCRSBMT1NUXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBHcnBjQ2FsbFR5cGUsXG4gIEdycGNDbGllbnQsXG4gIEdycGNDbGllbnRGYWN0b3J5LFxuICBHcnBjRXZlbnQsXG4gIEdycGNNZXRhZGF0YVxufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7XG4gIEdSUENfQ0xJRU5UX0ZBQ1RPUlksXG4gIEdycGNIYW5kbGVyLFxuICB0YWtlTWVzc2FnZXMsXG4gIHRocm93U3RhdHVzRXJyb3JzXG59IGZyb20gJ0BuZ3gtZ3JwYy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIHRoaXNQcm90byBmcm9tICcuL3NwZWVjaC10by10ZXh0LnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAwIGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCB7IEdSUENfU1BFRUNIMl9URVhUX0NMSUVOVF9TRVRUSU5HUyB9IGZyb20gJy4vc3BlZWNoLXRvLXRleHQucGJjb25mJztcbi8qKlxuICogU2VydmljZSBjbGllbnQgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuU3BlZWNoMlRleHRcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAnYW55JyB9KVxuZXhwb3J0IGNsYXNzIFNwZWVjaDJUZXh0Q2xpZW50IHtcbiAgcHJpdmF0ZSBjbGllbnQ6IEdycGNDbGllbnQ8YW55PjtcblxuICAvKipcbiAgICogUmF3IFJQQyBpbXBsZW1lbnRhdGlvbiBmb3IgZWFjaCBzZXJ2aWNlIGNsaWVudCBtZXRob2QuXG4gICAqIFRoZSByYXcgbWV0aG9kcyBwcm92aWRlIG1vcmUgY29udHJvbCBvbiB0aGUgaW5jb21pbmcgZGF0YSBhbmQgZXZlbnRzLiBFLmcuIHRoZXkgY2FuIGJlIHVzZWZ1bCB0byByZWFkIHN0YXR1cyBgT0tgIG1ldGFkYXRhLlxuICAgKiBBdHRlbnRpb246IHRoZXNlIG1ldGhvZHMgZG8gbm90IHRocm93IGVycm9ycyB3aGVuIG5vbi16ZXJvIHN0YXR1cyBjb2RlcyBhcmUgcmVjZWl2ZWQuXG4gICAqL1xuICAkcmF3ID0ge1xuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28uczJ0LlNwZWVjaDJUZXh0L1RyYW5zY3JpYmVGaWxlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlRyYW5zY3JpYmVGaWxlUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIHRyYW5zY3JpYmVGaWxlOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlRyYW5zY3JpYmVGaWxlUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5UcmFuc2NyaWJlRmlsZVJlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLnMydC5TcGVlY2gyVGV4dC9UcmFuc2NyaWJlRmlsZScsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlRyYW5zY3JpYmVGaWxlUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlRyYW5zY3JpYmVGaWxlUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQmlkaXJlY3Rpb25hbCBzdHJlYW1pbmc6IC9vbmRld28uczJ0LlNwZWVjaDJUZXh0L1RyYW5zY3JpYmVTdHJlYW1cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uVHJhbnNjcmliZVN0cmVhbVJlc3BvbnNlPj5cbiAgICAgKi9cbiAgICB0cmFuc2NyaWJlU3RyZWFtOiAoXG4gICAgICByZXF1ZXN0RGF0YTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVHJhbnNjcmliZVN0cmVhbVJlcXVlc3Q+LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLmJpZGlTdHJlYW0sXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLnMydC5TcGVlY2gyVGV4dC9UcmFuc2NyaWJlU3RyZWFtJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uVHJhbnNjcmliZVN0cmVhbVJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5UcmFuc2NyaWJlU3RyZWFtUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5zMnQuU3BlZWNoMlRleHQvR2V0UzJ0UGlwZWxpbmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU3BlZWNoMlRleHRDb25maWc+PlxuICAgICAqL1xuICAgIGdldFMydFBpcGVsaW5lOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlMydFBpcGVsaW5lSWQsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU3BlZWNoMlRleHRDb25maWc+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28uczJ0LlNwZWVjaDJUZXh0L0dldFMydFBpcGVsaW5lJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uUzJ0UGlwZWxpbmVJZCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlNwZWVjaDJUZXh0Q29uZmlnXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28uczJ0LlNwZWVjaDJUZXh0L0NyZWF0ZVMydFBpcGVsaW5lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlMydFBpcGVsaW5lSWQ+PlxuICAgICAqL1xuICAgIGNyZWF0ZVMydFBpcGVsaW5lOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlNwZWVjaDJUZXh0Q29uZmlnLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlMydFBpcGVsaW5lSWQ+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28uczJ0LlNwZWVjaDJUZXh0L0NyZWF0ZVMydFBpcGVsaW5lJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uU3BlZWNoMlRleHRDb25maWcsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5TMnRQaXBlbGluZUlkXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28uczJ0LlNwZWVjaDJUZXh0L0RlbGV0ZVMydFBpcGVsaW5lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlUHJvdG9idWYwMDAuRW1wdHk+PlxuICAgICAqL1xuICAgIGRlbGV0ZVMydFBpcGVsaW5lOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlMydFBpcGVsaW5lSWQsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDxnb29nbGVQcm90b2J1ZjAwMC5FbXB0eT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5zMnQuU3BlZWNoMlRleHQvRGVsZXRlUzJ0UGlwZWxpbmUnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5TMnRQaXBlbGluZUlkLFxuICAgICAgICByZXNwb25zZUNsYXNzOiBnb29nbGVQcm90b2J1ZjAwMC5FbXB0eVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLnMydC5TcGVlY2gyVGV4dC9VcGRhdGVTMnRQaXBlbGluZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZVByb3RvYnVmMDAwLkVtcHR5Pj5cbiAgICAgKi9cbiAgICB1cGRhdGVTMnRQaXBlbGluZTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5TcGVlY2gyVGV4dENvbmZpZyxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZVByb3RvYnVmMDAwLkVtcHR5Pj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLnMydC5TcGVlY2gyVGV4dC9VcGRhdGVTMnRQaXBlbGluZScsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlNwZWVjaDJUZXh0Q29uZmlnLFxuICAgICAgICByZXNwb25zZUNsYXNzOiBnb29nbGVQcm90b2J1ZjAwMC5FbXB0eVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLnMydC5TcGVlY2gyVGV4dC9MaXN0UzJ0UGlwZWxpbmVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RTMnRQaXBlbGluZXNSZXNwb25zZT4+XG4gICAgICovXG4gICAgbGlzdFMydFBpcGVsaW5lczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0UzJ0UGlwZWxpbmVzUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0UzJ0UGlwZWxpbmVzUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28uczJ0LlNwZWVjaDJUZXh0L0xpc3RTMnRQaXBlbGluZXMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5MaXN0UzJ0UGlwZWxpbmVzUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkxpc3RTMnRQaXBlbGluZXNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLnMydC5TcGVlY2gyVGV4dC9MaXN0UzJ0TGFuZ3VhZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RTMnRMYW5ndWFnZXNSZXNwb25zZT4+XG4gICAgICovXG4gICAgbGlzdFMydExhbmd1YWdlczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0UzJ0TGFuZ3VhZ2VzUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0UzJ0TGFuZ3VhZ2VzUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28uczJ0LlNwZWVjaDJUZXh0L0xpc3RTMnRMYW5ndWFnZXMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5MaXN0UzJ0TGFuZ3VhZ2VzUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkxpc3RTMnRMYW5ndWFnZXNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLnMydC5TcGVlY2gyVGV4dC9MaXN0UzJ0RG9tYWluc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0UzJ0RG9tYWluc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBsaXN0UzJ0RG9tYWluczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0UzJ0RG9tYWluc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdFMydERvbWFpbnNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5zMnQuU3BlZWNoMlRleHQvTGlzdFMydERvbWFpbnMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5MaXN0UzJ0RG9tYWluc1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5MaXN0UzJ0RG9tYWluc1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28uczJ0LlNwZWVjaDJUZXh0L0dldFNlcnZpY2VJbmZvXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlMyVEdldFNlcnZpY2VJbmZvUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGdldFNlcnZpY2VJbmZvOiAoXG4gICAgICByZXF1ZXN0RGF0YTogZ29vZ2xlUHJvdG9idWYwMDAuRW1wdHksXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uUzJUR2V0U2VydmljZUluZm9SZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5zMnQuU3BlZWNoMlRleHQvR2V0U2VydmljZUluZm8nLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IGdvb2dsZVByb3RvYnVmMDAwLkVtcHR5LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uUzJUR2V0U2VydmljZUluZm9SZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLnMydC5TcGVlY2gyVGV4dC9MaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdFMydExhbmd1YWdlTW9kZWxzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGxpc3RTMnRMYW5ndWFnZU1vZGVsczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RTMnRMYW5ndWFnZU1vZGVsc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLnMydC5TcGVlY2gyVGV4dC9MaXN0UzJ0TGFuZ3VhZ2VNb2RlbHMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5MaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uTGlzdFMydExhbmd1YWdlTW9kZWxzUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEdSUENfU1BFRUNIMl9URVhUX0NMSUVOVF9TRVRUSU5HUykgc2V0dGluZ3M6IGFueSxcbiAgICBASW5qZWN0KEdSUENfQ0xJRU5UX0ZBQ1RPUlkpIGNsaWVudEZhY3Rvcnk6IEdycGNDbGllbnRGYWN0b3J5PGFueT4sXG4gICAgcHJpdmF0ZSBoYW5kbGVyOiBHcnBjSGFuZGxlclxuICApIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudEZhY3RvcnkuY3JlYXRlQ2xpZW50KFxuICAgICAgJ29uZGV3by5zMnQuU3BlZWNoMlRleHQnLFxuICAgICAgc2V0dGluZ3NcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28uczJ0LlNwZWVjaDJUZXh0L1RyYW5zY3JpYmVGaWxlXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlRyYW5zY3JpYmVGaWxlUmVzcG9uc2U+XG4gICAqL1xuICB0cmFuc2NyaWJlRmlsZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlRyYW5zY3JpYmVGaWxlUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVHJhbnNjcmliZUZpbGVSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC50cmFuc2NyaWJlRmlsZShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpZGlyZWN0aW9uYWwgc3RyZWFtaW5nIEAvb25kZXdvLnMydC5TcGVlY2gyVGV4dC9UcmFuc2NyaWJlU3RyZWFtXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZT5cbiAgICovXG4gIHRyYW5zY3JpYmVTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IE9ic2VydmFibGU8dGhpc1Byb3RvLlRyYW5zY3JpYmVTdHJlYW1SZXF1ZXN0PixcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVHJhbnNjcmliZVN0cmVhbVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnRyYW5zY3JpYmVTdHJlYW0ocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLnMydC5TcGVlY2gyVGV4dC9HZXRTMnRQaXBlbGluZVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5TcGVlY2gyVGV4dENvbmZpZz5cbiAgICovXG4gIGdldFMydFBpcGVsaW5lKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uUzJ0UGlwZWxpbmVJZCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU3BlZWNoMlRleHRDb25maWc+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZ2V0UzJ0UGlwZWxpbmUocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLnMydC5TcGVlY2gyVGV4dC9DcmVhdGVTMnRQaXBlbGluZVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5TMnRQaXBlbGluZUlkPlxuICAgKi9cbiAgY3JlYXRlUzJ0UGlwZWxpbmUoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5TcGVlY2gyVGV4dENvbmZpZyxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uUzJ0UGlwZWxpbmVJZD4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5jcmVhdGVTMnRQaXBlbGluZShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28uczJ0LlNwZWVjaDJUZXh0L0RlbGV0ZVMydFBpcGVsaW5lXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8Z29vZ2xlUHJvdG9idWYwMDAuRW1wdHk+XG4gICAqL1xuICBkZWxldGVTMnRQaXBlbGluZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlMydFBpcGVsaW5lSWQsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8Z29vZ2xlUHJvdG9idWYwMDAuRW1wdHk+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZGVsZXRlUzJ0UGlwZWxpbmUocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLnMydC5TcGVlY2gyVGV4dC9VcGRhdGVTMnRQaXBlbGluZVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDAwLkVtcHR5PlxuICAgKi9cbiAgdXBkYXRlUzJ0UGlwZWxpbmUoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5TcGVlY2gyVGV4dENvbmZpZyxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTxnb29nbGVQcm90b2J1ZjAwMC5FbXB0eT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC51cGRhdGVTMnRQaXBlbGluZShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28uczJ0LlNwZWVjaDJUZXh0L0xpc3RTMnRQaXBlbGluZXNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdFMydFBpcGVsaW5lc1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdFMydFBpcGVsaW5lcyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RTMnRQaXBlbGluZXNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0UzJ0UGlwZWxpbmVzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAubGlzdFMydFBpcGVsaW5lcyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28uczJ0LlNwZWVjaDJUZXh0L0xpc3RTMnRMYW5ndWFnZXNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdFMydExhbmd1YWdlc1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdFMydExhbmd1YWdlcyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0UzJ0TGFuZ3VhZ2VzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAubGlzdFMydExhbmd1YWdlcyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28uczJ0LlNwZWVjaDJUZXh0L0xpc3RTMnREb21haW5zXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RTMnREb21haW5zUmVzcG9uc2U+XG4gICAqL1xuICBsaXN0UzJ0RG9tYWlucyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RTMnREb21haW5zUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdFMydERvbWFpbnNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5saXN0UzJ0RG9tYWlucyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28uczJ0LlNwZWVjaDJUZXh0L0dldFNlcnZpY2VJbmZvXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlMyVEdldFNlcnZpY2VJbmZvUmVzcG9uc2U+XG4gICAqL1xuICBnZXRTZXJ2aWNlSW5mbyhcbiAgICByZXF1ZXN0RGF0YTogZ29vZ2xlUHJvdG9idWYwMDAuRW1wdHksXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlMyVEdldFNlcnZpY2VJbmZvUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZ2V0U2VydmljZUluZm8ocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLnMydC5TcGVlY2gyVGV4dC9MaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdFMydExhbmd1YWdlTW9kZWxzUmVzcG9uc2U+XG4gICAqL1xuICBsaXN0UzJ0TGFuZ3VhZ2VNb2RlbHMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5saXN0UzJ0TGFuZ3VhZ2VNb2RlbHMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxufVxuIl19