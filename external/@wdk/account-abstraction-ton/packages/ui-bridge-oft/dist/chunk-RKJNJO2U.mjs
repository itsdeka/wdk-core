import { currencySchema, tokenSchema, endpointIdToChainKey, assert, serializeCurrency } from '@layerzerolabs/ui-core';
import z from 'zod';

// src/types/zod.ts
var deploymentSchemaBase = z.object({
  eid: z.number(),
  token: currencySchema,
  tokenEscrow: z.object({ address: z.string() }).optional(),
  executorLzReceiveOption: z.object({ gasLimit: z.number(), nativeValue: z.number().optional() }).optional(),
  destinationChains: z.array(z.string()).optional()
});
var deploymentSchemaOft = deploymentSchemaBase.extend({
  token: tokenSchema,
  oft: z.object({ programId: z.string() }).optional()
});
var deploymentSchemaOftProxy = deploymentSchemaBase.extend({
  oftProxy: z.object({
    address: z.string(),
    approvalRequired: z.boolean().optional()
  })
});
var deploymentSchemaOftNative = deploymentSchemaBase.extend({
  oftNative: z.object({ address: z.string() })
});
var deploymentSchemaMultiAdapter = deploymentSchemaBase.extend({
  oftProxy: z.object({
    address: z.string(),
    approvalRequired: z.boolean().optional()
  }),
  oftNative: z.object({ address: z.string() })
});
var oftBridgeConfigSchema = z.object({
  fee: z.boolean(),
  version: z.string().or(z.number()),
  sharedDecimals: z.number(),
  deployments: z.record(
    z.union([
      // order matters:
      deploymentSchemaMultiAdapter,
      deploymentSchemaOftNative,
      deploymentSchemaOftProxy,
      deploymentSchemaOft
    ])
  )
}).transform((input, err) => {
  const config = {
    version: input.version,
    fee: input.fee,
    sharedDecimals: input.sharedDecimals,
    deployments: {}
  };
  for (const chainKey in input.deployments) {
    const deployment = input.deployments[chainKey];
    let oftProxy, oftNative, oft;
    if ("oftProxy" in deployment) {
      oftProxy = {
        chainKey,
        address: deployment.oftProxy.address,
        approvalRequired: deployment.oftProxy.approvalRequired
      };
    }
    if ("oftNative" in deployment) {
      oftNative = {
        address: deployment.oftNative.address,
        chainKey
      };
    }
    if ("oft" in deployment) {
      oft = {
        address: deployment.token.address,
        chainKey,
        programId: deployment.oft?.programId
      };
    }
    config.deployments[chainKey] = {
      eid: deployment.eid,
      oftProxy,
      oftNative,
      oft,
      token: deployment.token,
      tokenEscrow: deployment.tokenEscrow,
      executorLzReceiveOption: deployment.executorLzReceiveOption,
      destinationChains: deployment.destinationChains
    };
    if (chainKey !== deployment.token.chainKey) {
      err.addIssue({
        code: z.ZodIssueCode.custom,
        params: {
          chainKey,
          token: deployment.token
        },
        path: ["deployments", chainKey, "token"],
        message: "Invalid chainKey"
      });
    }
    if (deployment.token.decimals < config.sharedDecimals) {
      err.addIssue({
        code: z.ZodIssueCode.custom,
        params: {
          token: deployment.token,
          decimals: deployment.token.decimals,
          sharedDecimals: config.sharedDecimals
        },
        message: "Invalid sharedDecimals"
      });
    }
    if (config.version === 3) {
      if (deployment.eid < 30101) {
        err.addIssue({
          code: z.ZodIssueCode.custom,
          params: {
            eid: deployment.eid
          },
          path: ["deployments", chainKey, "eid"],
          message: "Invalid eid"
        });
      }
    }
  }
  return config;
});
function createOftBridgeConfig(input) {
  const chainKeys = Object.keys(input.deployments).reduce((totalSet, chainKey) => {
    totalSet.add(chainKey);
    return totalSet;
  }, /* @__PURE__ */ new Set());
  for (const chainKey in input.deployments) {
    const deployment = input.deployments[chainKey];
    const token = deployment.token;
    const chainKeyFromEid = deployment.eid === 108 ? "aptos" : deployment.eid === 30168 ? "solana" : endpointIdToChainKey(deployment.eid);
    assert(
      deployment.token.chainKey === chainKey,
      `Deployment key ${chainKey} does not match token chainKey ${token.chainKey}`
    );
    assert(
      chainKeyFromEid === chainKey,
      `Deployment eid ${deployment.eid} does not match expected chainKey ${chainKeyFromEid}`
    );
    if (deployment.destinationChains) {
      deployment.destinationChains.forEach((dstChainKey) => {
        assert(
          chainKeys.has(dstChainKey),
          `Destination chain ${dstChainKey} does not have a matching config`
        );
      });
    }
  }
  return oftBridgeConfigSchema.parse(input);
}
function serializeOftBridgeConfig(input) {
  const serialized = {
    version: input.version,
    fee: input.fee,
    sharedDecimals: input.sharedDecimals,
    deployments: {}
  };
  for (const chainKey in input.deployments) {
    const deployment = input.deployments[chainKey];
    const { eid } = deployment;
    const token = serializeCurrency(deployment.token);
    const { tokenEscrow, executorLzReceiveOption, destinationChains } = deployment;
    const deploymentData = {
      eid,
      token,
      tokenEscrow,
      executorLzReceiveOption,
      destinationChains
    };
    if (deployment.oftProxy) {
      deploymentData.oftProxy = {
        address: deployment.oftProxy.address
      };
    }
    if (deployment.oftNative) {
      deploymentData.oftNative = {
        address: deployment.oftNative.address
      };
    }
    if (deployment.oft) {
      deploymentData.token = {
        ...token,
        // token.address and oft.address should be the same
        address: deployment.oft.address
      };
    }
    serialized.deployments[chainKey] = deploymentData;
  }
  return serialized;
}

export { createOftBridgeConfig, oftBridgeConfigSchema, serializeOftBridgeConfig };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-RKJNJO2U.mjs.map