// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { createSpanFunction } from "@azure/core-tracing";

/**
 * Creates a span using the global tracer.
 * @internal
 */
export const createSpan = createSpanFunction({
  packagePrefix: "Azure.Communication",
  namespace: "Microsoft.Communication",
});
