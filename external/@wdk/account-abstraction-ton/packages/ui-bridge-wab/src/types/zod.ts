import z from 'zod';
import {currencySchema, serializeCurrency} from '@layerzerolabs/ui-core';
import type {WrappedAssetBridgeConfig} from './WrappedAssetBridgeConfig';

const bridgeSchema = z.object({
  address: z.string(),
});

export const wrappedAssetBridgeConfigSchema = z
  .object({
    version: z.number().or(z.string()),
    tokens: z.array(z.array(currencySchema)),
    deployments: z.record(
      z.object({
        eid: z.number(),
        bridgeOriginal: bridgeSchema.optional(),
        bridgeWrapped: bridgeSchema.optional(),
      }),
    ),
  })
  .transform((input) => {
    const config: WrappedAssetBridgeConfig = {
      version: input.version,
      deployments: {},
      tokens: input.tokens,
    };
    for (const chainKey in input.deployments) {
      const deployment = input.deployments[chainKey];
      let bridgeOriginal, bridgeWrapped;
      if (deployment.bridgeOriginal) {
        bridgeOriginal = {
          address: deployment.bridgeOriginal.address,
          chainKey,
        };
      }
      if (deployment.bridgeWrapped) {
        bridgeWrapped = {
          address: deployment.bridgeWrapped.address,
          chainKey,
        };
      }
      config.deployments[chainKey] = {
        eid: deployment.eid,
        bridgeOriginal,
        bridgeWrapped,
      };
    }
    return config;
  });

export type SerializedWrappedAssetBridgeConfig = z.input<typeof wrappedAssetBridgeConfigSchema>;

export function serializeWrappedAssetBridgeConfig(
  input: WrappedAssetBridgeConfig,
): SerializedWrappedAssetBridgeConfig {
  const serialized: SerializedWrappedAssetBridgeConfig = {
    deployments: {},
    tokens: input.tokens.map((tokenGroup) => tokenGroup.map((token) => serializeCurrency(token))),
    version: input.version,
  };
  for (const chainKey in input.deployments) {
    const deployment = input.deployments[chainKey];
    const eid = deployment.eid;
    if (deployment.bridgeOriginal) {
      serialized.deployments[chainKey] = {
        eid,
        bridgeOriginal: {
          address: deployment.bridgeOriginal.address,
        },
      };
    }
    if (deployment.bridgeWrapped) {
      serialized.deployments[chainKey] = {
        eid,
        bridgeWrapped: {
          address: deployment.bridgeWrapped.address,
        },
      };
    }
  }
  return serialized;
}
