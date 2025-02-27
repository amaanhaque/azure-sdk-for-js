/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { InboundEndpoints } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DnsResolverManagementClient } from "../dnsResolverManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  InboundEndpoint,
  InboundEndpointsListNextOptionalParams,
  InboundEndpointsListOptionalParams,
  InboundEndpointsCreateOrUpdateOptionalParams,
  InboundEndpointsCreateOrUpdateResponse,
  InboundEndpointPatch,
  InboundEndpointsUpdateOptionalParams,
  InboundEndpointsUpdateResponse,
  InboundEndpointsDeleteOptionalParams,
  InboundEndpointsGetOptionalParams,
  InboundEndpointsGetResponse,
  InboundEndpointsListResponse,
  InboundEndpointsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing InboundEndpoints operations. */
export class InboundEndpointsImpl implements InboundEndpoints {
  private readonly client: DnsResolverManagementClient;

  /**
   * Initialize a new instance of the class InboundEndpoints class.
   * @param client Reference to the service client
   */
  constructor(client: DnsResolverManagementClient) {
    this.client = client;
  }

  /**
   * Lists inbound endpoints for a DNS resolver.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    dnsResolverName: string,
    options?: InboundEndpointsListOptionalParams
  ): PagedAsyncIterableIterator<InboundEndpoint> {
    const iter = this.listPagingAll(
      resourceGroupName,
      dnsResolverName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, dnsResolverName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    dnsResolverName: string,
    options?: InboundEndpointsListOptionalParams
  ): AsyncIterableIterator<InboundEndpoint[]> {
    let result = await this._list(resourceGroupName, dnsResolverName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        dnsResolverName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    dnsResolverName: string,
    options?: InboundEndpointsListOptionalParams
  ): AsyncIterableIterator<InboundEndpoint> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      dnsResolverName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates or updates an inbound endpoint for a DNS resolver.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param inboundEndpointName The name of the inbound endpoint for the DNS resolver.
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    dnsResolverName: string,
    inboundEndpointName: string,
    parameters: InboundEndpoint,
    options?: InboundEndpointsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<InboundEndpointsCreateOrUpdateResponse>,
      InboundEndpointsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<InboundEndpointsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        dnsResolverName,
        inboundEndpointName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates an inbound endpoint for a DNS resolver.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param inboundEndpointName The name of the inbound endpoint for the DNS resolver.
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    dnsResolverName: string,
    inboundEndpointName: string,
    parameters: InboundEndpoint,
    options?: InboundEndpointsCreateOrUpdateOptionalParams
  ): Promise<InboundEndpointsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      dnsResolverName,
      inboundEndpointName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an inbound endpoint for a DNS resolver.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param inboundEndpointName The name of the inbound endpoint for the DNS resolver.
   * @param parameters Parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    dnsResolverName: string,
    inboundEndpointName: string,
    parameters: InboundEndpointPatch,
    options?: InboundEndpointsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<InboundEndpointsUpdateResponse>,
      InboundEndpointsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<InboundEndpointsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        dnsResolverName,
        inboundEndpointName,
        parameters,
        options
      },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates an inbound endpoint for a DNS resolver.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param inboundEndpointName The name of the inbound endpoint for the DNS resolver.
   * @param parameters Parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    dnsResolverName: string,
    inboundEndpointName: string,
    parameters: InboundEndpointPatch,
    options?: InboundEndpointsUpdateOptionalParams
  ): Promise<InboundEndpointsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      dnsResolverName,
      inboundEndpointName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an inbound endpoint for a DNS resolver. WARNING: This operation cannot be undone.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param inboundEndpointName The name of the inbound endpoint for the DNS resolver.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    dnsResolverName: string,
    inboundEndpointName: string,
    options?: InboundEndpointsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, dnsResolverName, inboundEndpointName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes an inbound endpoint for a DNS resolver. WARNING: This operation cannot be undone.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param inboundEndpointName The name of the inbound endpoint for the DNS resolver.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    dnsResolverName: string,
    inboundEndpointName: string,
    options?: InboundEndpointsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      dnsResolverName,
      inboundEndpointName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets properties of an inbound endpoint for a DNS resolver.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param inboundEndpointName The name of the inbound endpoint for the DNS resolver.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    dnsResolverName: string,
    inboundEndpointName: string,
    options?: InboundEndpointsGetOptionalParams
  ): Promise<InboundEndpointsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dnsResolverName, inboundEndpointName, options },
      getOperationSpec
    );
  }

  /**
   * Lists inbound endpoints for a DNS resolver.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    dnsResolverName: string,
    options?: InboundEndpointsListOptionalParams
  ): Promise<InboundEndpointsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dnsResolverName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    dnsResolverName: string,
    nextLink: string,
    options?: InboundEndpointsListNextOptionalParams
  ): Promise<InboundEndpointsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dnsResolverName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolvers/{dnsResolverName}/inboundEndpoints/{inboundEndpointName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.InboundEndpoint
    },
    201: {
      bodyMapper: Mappers.InboundEndpoint
    },
    202: {
      bodyMapper: Mappers.InboundEndpoint
    },
    204: {
      bodyMapper: Mappers.InboundEndpoint
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dnsResolverName,
    Parameters.inboundEndpointName
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolvers/{dnsResolverName}/inboundEndpoints/{inboundEndpointName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.InboundEndpoint
    },
    201: {
      bodyMapper: Mappers.InboundEndpoint
    },
    202: {
      bodyMapper: Mappers.InboundEndpoint
    },
    204: {
      bodyMapper: Mappers.InboundEndpoint
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dnsResolverName,
    Parameters.inboundEndpointName
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolvers/{dnsResolverName}/inboundEndpoints/{inboundEndpointName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dnsResolverName,
    Parameters.inboundEndpointName
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolvers/{dnsResolverName}/inboundEndpoints/{inboundEndpointName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InboundEndpoint
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dnsResolverName,
    Parameters.inboundEndpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolvers/{dnsResolverName}/inboundEndpoints",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InboundEndpointListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dnsResolverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InboundEndpointListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dnsResolverName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
