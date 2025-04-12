import {Token, tokenSchema} from '@layerzerolabs/ui-core';
import z from 'zod';
import type {USDVConfig} from './USDVConfig';
const contractSchema = z.object({
  address: z.string(),
});
export const serializedUSDVConfigSchema = z
  .object({
    deployments: z.record(
      z.object({
        eid: z.number(),
        usdv: contractSchema,
        vault: contractSchema.optional(),
        minterProxy: contractSchema.optional(),
        stbt: contractSchema.optional(),
        sideChainSwapRecolor: contractSchema.array().optional().default([]),
        bridgeRecolor: contractSchema.optional(),
      }),
    ),
    stables: tokenSchema.array().default([]),
  })
  .transform((input) => {
    const config: USDVConfig = {
      deployments: {},
      stables: input.stables,
    };
    for (const chainKey in input.deployments) {
      const addChainKey = (a?: {address: string}) => a && {address: a.address, chainKey};

      const deployment = input.deployments[chainKey];
      config.deployments[chainKey] = {
        eid: deployment.eid,
        usdv: Token.from({
          address: deployment.usdv.address,
          chainKey,
          decimals: 6,
          symbol: 'USDV',
        }),
        vault: addChainKey(deployment.vault),
        minterProxy: addChainKey(deployment.minterProxy),
        stbt: addChainKey(deployment.stbt),
        bridgeRecolor: addChainKey(deployment.bridgeRecolor),
        sideChainSwapRecolor: deployment.sideChainSwapRecolor.map(addChainKey).filter(nonNullable),
      };
    }
    return config;
  });

function nonNullable<T>(x: T | null | undefined): x is NonNullable<T> {
  return !!x;
}

export type SerializedUSDVConfig = z.input<typeof serializedUSDVConfigSchema>;

export function createUSDVConfig(input: SerializedUSDVConfig): USDVConfig {
  const parsed = serializedUSDVConfigSchema.parse(input);
  return parsed;
}
