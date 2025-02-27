/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureBotService } = require("@azure/arm-botservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Returns a BotService Channel registration specified by the parameters.
 *
 * @summary Returns a BotService Channel registration specified by the parameters.
 * x-ms-original-file: specification/botservice/resource-manager/Microsoft.BotService/preview/2021-05-01-preview/examples/GetAlexaChannel.json
 */
async function getAlexaBot() {
  const subscriptionId = "subscription-id";
  const resourceGroupName = "OneResourceGroupName";
  const resourceName = "samplebotname";
  const channelName = "AlexaChannel";
  const credential = new DefaultAzureCredential();
  const client = new AzureBotService(credential, subscriptionId);
  const result = await client.channels.get(resourceGroupName, resourceName, channelName);
  console.log(result);
}

getAlexaBot().catch(console.error);

/**
 * This sample demonstrates how to Returns a BotService Channel registration specified by the parameters.
 *
 * @summary Returns a BotService Channel registration specified by the parameters.
 * x-ms-original-file: specification/botservice/resource-manager/Microsoft.BotService/preview/2021-05-01-preview/examples/GetChannel.json
 */
async function getBot() {
  const subscriptionId = "subscription-id";
  const resourceGroupName = "OneResourceGroupName";
  const resourceName = "samplebotname";
  const channelName = "EmailChannel";
  const credential = new DefaultAzureCredential();
  const client = new AzureBotService(credential, subscriptionId);
  const result = await client.channels.get(resourceGroupName, resourceName, channelName);
  console.log(result);
}

getBot().catch(console.error);

/**
 * This sample demonstrates how to Returns a BotService Channel registration specified by the parameters.
 *
 * @summary Returns a BotService Channel registration specified by the parameters.
 * x-ms-original-file: specification/botservice/resource-manager/Microsoft.BotService/preview/2021-05-01-preview/examples/GetDirectLineSpeechChannel.json
 */
async function getDirectLineSpeechBot() {
  const subscriptionId = "subscription-id";
  const resourceGroupName = "OneResourceGroupName";
  const resourceName = "samplebotname";
  const channelName = "DirectLineSpeechChannel";
  const credential = new DefaultAzureCredential();
  const client = new AzureBotService(credential, subscriptionId);
  const result = await client.channels.get(resourceGroupName, resourceName, channelName);
  console.log(result);
}

getDirectLineSpeechBot().catch(console.error);

/**
 * This sample demonstrates how to Returns a BotService Channel registration specified by the parameters.
 *
 * @summary Returns a BotService Channel registration specified by the parameters.
 * x-ms-original-file: specification/botservice/resource-manager/Microsoft.BotService/preview/2021-05-01-preview/examples/GetLineChannel.json
 */
async function getLineBot() {
  const subscriptionId = "subscription-id";
  const resourceGroupName = "OneResourceGroupName";
  const resourceName = "samplebotname";
  const channelName = "LineChannel";
  const credential = new DefaultAzureCredential();
  const client = new AzureBotService(credential, subscriptionId);
  const result = await client.channels.get(resourceGroupName, resourceName, channelName);
  console.log(result);
}

getLineBot().catch(console.error);
