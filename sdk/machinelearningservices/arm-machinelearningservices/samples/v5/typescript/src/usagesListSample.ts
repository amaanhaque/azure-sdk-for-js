/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureMachineLearningWorkspaces } from "@azure/arm-machinelearningservices";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets the current usage information as well as limits for AML resources for given subscription and location.
 *
 * @summary Gets the current usage information as well as limits for AML resources for given subscription and location.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Usage/list.json
 */
async function listUsages() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const location = "eastus";
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningWorkspaces(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.usages.list(location)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listUsages().catch(console.error);
