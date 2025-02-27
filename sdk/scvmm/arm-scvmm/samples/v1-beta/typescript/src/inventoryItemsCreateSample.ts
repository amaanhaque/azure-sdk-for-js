/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  InventoryItem,
  InventoryItemsCreateOptionalParams,
  Scvmm
} from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create Or Update InventoryItem.
 *
 * @summary Create Or Update InventoryItem.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/preview/2020-06-05-preview/examples/CreateInventoryItem.json
 */
async function createInventoryItem() {
  const subscriptionId = "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName = "testrg";
  const vmmServerName = "ContosoVMMServer";
  const inventoryItemName = "12345678-1234-1234-1234-123456789abc";
  const body: InventoryItem = { inventoryType: "Cloud" };
  const options: InventoryItemsCreateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new Scvmm(credential, subscriptionId);
  const result = await client.inventoryItems.create(
    resourceGroupName,
    vmmServerName,
    inventoryItemName,
    options
  );
  console.log(result);
}

createInventoryItem().catch(console.error);
