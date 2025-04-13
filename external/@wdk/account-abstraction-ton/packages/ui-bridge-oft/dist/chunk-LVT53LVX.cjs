'use strict';

var uiCore = require('@layerzerolabs/ui-core');
var z = require('zod');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var z__default = /*#__PURE__*/_interopDefault(z);

// src/types/zod.ts
var deploymentSchemaBase = z__default.default.object({
  eid: z__default.default.number(),
  token: uiCore.currencySchema,
  tokenEscrow: z__default.default.object({ address: z__default.default.string() }).optional(),
  executorLzReceiveOption: z__default.default.object({ gasLimit: z__default.default.number(), nativeValue: z__default.default.number().optional() }).optional(),
  destinationChains: z__default.default.array(z__default.default.string()).optional()
});
var deploymentSchemaOft = deploymentSchemaBase.extend({
  token: uiCore.tokenSchema,
  oft: z__default.default.object({ programId: z__default.default.string() }).optional()
});
var deploymentSchemaOftProxy = deploymentSchemaBase.extend({
  oftProxy: z__default.default.object({
    address: z__default.default.string(),
    approvalRequired: z__default.default.boolean().optional()
  })
});
var deploymentSchemaOftNative = deploymentSchemaBase.extend({
  oftNative: z__default.default.object({ address: z__default.default.string() })
});
var deploymentSchemaMultiAdapter = deploymentSchemaBase.extend({
  oftProxy: z__default.default.object({
    address: z__default.default.string(),
    approvalRequired: z__default.default.boolean().optional()
  }),
  oftNative: z__default.default.object({ address: z__default.default.string() })
});
var oftBridgeConfigSchema = z__default.default.object({
  fee: z__default.default.boolean(),
  version: z__default.default.string().or(z__default.default.number()),
  sharedDecimals: z__default.default.number(),
  deployments: z__default.default.record(
    z__default.default.union([
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
        code: z__default.default.ZodIssueCode.custom,
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
        code: z__default.default.ZodIssueCode.custom,
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
          code: z__default.default.ZodIssueCode.custom,
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
    const chainKeyFromEid = deployment.eid === 108 ? "aptos" : deployment.eid === 30168 ? "solana" : uiCore.endpointIdToChainKey(deployment.eid);
    uiCore.assert(
      deployment.token.chainKey === chainKey,
      `Deployment key ${chainKey} does not match token chainKey ${token.chainKey}`
    );
    uiCore.assert(
      chainKeyFromEid === chainKey,
      `Deployment eid ${deployment.eid} does not match expected chainKey ${chainKeyFromEid}`
    );
    if (deployment.destinationChains) {
      deployment.destinationChains.forEach((dstChainKey) => {
        uiCore.assert(
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
    const token = uiCore.serializeCurrency(deployment.token);
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

exports.createOftBridgeConfig = createOftBridgeConfig;
exports.oftBridgeConfigSchema = oftBridgeConfigSchema;
exports.serializeOftBridgeConfig = serializeOftBridgeConfig;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-LVT53LVX.cjs.map