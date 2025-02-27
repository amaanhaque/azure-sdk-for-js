/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Scvmm } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Shows an inventory item.
 *
 * @summary Shows an inventory item.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/preview/2020-06-05-preview/examples/GetInventoryItem.json
 */
async function getInventoryItem() {
  const subscriptionId = "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName = "testrg";
  const vmmServerName = "ContosoVMMServer";
  const inventoryItemName = "12345678-1234-1234-1234-123456789abc";
  const credential = new DefaultAzureCredential();
  const client = new Scvmm(credential, subscriptionId);
  const result = await client.inventoryItems.get(
    resourceGroupName,
    vmmServerName,
    inventoryItemName
  );
  console.log(result);
}

getInventoryItem().catch(console.error);
