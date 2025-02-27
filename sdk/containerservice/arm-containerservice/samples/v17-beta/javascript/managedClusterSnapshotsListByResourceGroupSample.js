/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerServiceClient } = require("@azure/arm-containerservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists managed cluster snapshots in the specified subscription and resource group.
 *
 * @summary Lists managed cluster snapshots in the specified subscription and resource group.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/ManagedClusterSnapshotsListByResourceGroup.json
 */
async function listManagedClusterSnapshotsByResourceGroup() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedClusterSnapshots.listByResourceGroup(resourceGroupName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listManagedClusterSnapshotsByResourceGroup().catch(console.error);
