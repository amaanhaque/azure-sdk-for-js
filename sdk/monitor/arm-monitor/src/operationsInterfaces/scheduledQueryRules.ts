/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  LogSearchRuleResource,
  ScheduledQueryRulesListBySubscriptionOptionalParams,
  ScheduledQueryRulesListByResourceGroupOptionalParams,
  ScheduledQueryRulesCreateOrUpdateOptionalParams,
  ScheduledQueryRulesCreateOrUpdateResponse,
  ScheduledQueryRulesGetOptionalParams,
  ScheduledQueryRulesGetResponse,
  LogSearchRuleResourcePatch,
  ScheduledQueryRulesUpdateOptionalParams,
  ScheduledQueryRulesUpdateResponse,
  ScheduledQueryRulesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ScheduledQueryRules. */
export interface ScheduledQueryRules {
  /**
   * List the Log Search rules within a subscription group.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: ScheduledQueryRulesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<LogSearchRuleResource>;
  /**
   * List the Log Search rules within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ScheduledQueryRulesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<LogSearchRuleResource>;
  /**
   * Creates or updates an log search rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ruleName The name of the rule.
   * @param parameters The parameters of the rule to create or update.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    ruleName: string,
    parameters: LogSearchRuleResource,
    options?: ScheduledQueryRulesCreateOrUpdateOptionalParams
  ): Promise<ScheduledQueryRulesCreateOrUpdateResponse>;
  /**
   * Gets an Log Search rule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ruleName The name of the rule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    ruleName: string,
    options?: ScheduledQueryRulesGetOptionalParams
  ): Promise<ScheduledQueryRulesGetResponse>;
  /**
   * Update log search Rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ruleName The name of the rule.
   * @param parameters The parameters of the rule to update.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    ruleName: string,
    parameters: LogSearchRuleResourcePatch,
    options?: ScheduledQueryRulesUpdateOptionalParams
  ): Promise<ScheduledQueryRulesUpdateResponse>;
  /**
   * Deletes a Log Search rule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ruleName The name of the rule.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    ruleName: string,
    options?: ScheduledQueryRulesDeleteOptionalParams
  ): Promise<void>;
}
