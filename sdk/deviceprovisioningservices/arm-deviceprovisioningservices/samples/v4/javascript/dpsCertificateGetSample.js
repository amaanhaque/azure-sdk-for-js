/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { IotDpsClient } = require("@azure/arm-deviceprovisioningservices");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get the certificate from the provisioning service.
 *
 * @summary Get the certificate from the provisioning service.
 * x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/stable/2021-10-15/examples/DPSGetCertificate.json
 */
async function dpsGetCertificate() {
  const subscriptionId = "91d12660-3dec-467a-be2a-213b5544ddc0";
  const certificateName = "cert";
  const resourceGroupName = "myResourceGroup";
  const provisioningServiceName = "myFirstProvisioningService";
  const credential = new DefaultAzureCredential();
  const client = new IotDpsClient(credential, subscriptionId);
  const result = await client.dpsCertificate.get(
    certificateName,
    resourceGroupName,
    provisioningServiceName
  );
  console.log(result);
}

dpsGetCertificate().catch(console.error);
