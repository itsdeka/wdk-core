import z from 'zod';
import type {AptosBridgeConfig} from './AptosBridgeConfig';
import {currencySchema} from '@layerzerolabs/ui-core';
import {AptosCoinType} from './AptosCoinType';

const serializedDeploymentSchema = z.object({
  eid: z.number(),
  bridge: z.object({
    address: z.string(),
  }),
});

const serializedAptosBridgeConfigSchema = z.object({
  deployments: z.record(serializedDeploymentSchema),
  tokens: z.record(
    z.enum([
      AptosCoinType.USDC,
      AptosCoinType.BUSD,
      AptosCoinType.WBTC,
      AptosCoinType.USDT,
      AptosCoinType.USDD,
      AptosCoinType.WETH,
    ]),
    z.array(currencySchema),
  ),
});

const aptosBridgeConfigSchema = serializedAptosBridgeConfigSchema;

type SerializedAptosBridgeConfig = z.input<typeof serializedAptosBridgeConfigSchema>;

export function createAptosBridgeConfig(input: SerializedAptosBridgeConfig): AptosBridgeConfig {
  const config = serializedAptosBridgeConfigSchema.parse(input);
  // todo: test
  return config as unknown as AptosBridgeConfig;
}
