/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SynapseManagementClient } = require("@azure/arm-synapse");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets a list of deleted Sql pools that can be restored
 *
 * @summary Gets a list of deleted Sql pools that can be restored
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/RestorableDroppedSqlpoolList.json
 */
async function getListOfRestorableDroppedSqlPools() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "restorabledroppeddatabasetest-1349";
  const workspaceName = "restorabledroppeddatabasetest-1840";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.restorableDroppedSqlPools.listByWorkspace(
    resourceGroupName,
    workspaceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getListOfRestorableDroppedSqlPools().catch(console.error);
