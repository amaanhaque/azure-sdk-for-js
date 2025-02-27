/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { FrontDoorManagementClient } from "@azure/arm-frontdoor";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Deletes Policy
 *
 * @summary Deletes Policy
 * x-ms-original-file: specification/frontdoor/resource-manager/Microsoft.Network/stable/2020-11-01/examples/WafPolicyDelete.json
 */
async function deleteProtectionPolicy() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const policyName = "Policy1";
  const credential = new DefaultAzureCredential();
  const client = new FrontDoorManagementClient(credential, subscriptionId);
  const result = await client.policies.beginDeleteAndWait(
    resourceGroupName,
    policyName
  );
  console.log(result);
}

deleteProtectionPolicy().catch(console.error);
