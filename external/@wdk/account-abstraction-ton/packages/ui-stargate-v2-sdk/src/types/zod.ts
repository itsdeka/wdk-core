import z from 'zod';
import type {StargateV2Config} from './StargateV2Config';
import {Coin, Token} from '@layerzerolabs/ui-core';

const currencySchema = z.object({
  symbol: z.string(),
  decimals: z.number(),
  name: z.string().optional(),
  address: z.string().optional(),
});

const tokenSchema = currencySchema.extend({
  address: z.string(),
});

const contractSchema = z.object({
  address: z.string(),
});

const serializedStargateV2ConfigSchema = z.object({
  assetId: z.number().int().min(1).max(255),
  sharedDecimals: z.number(),
  deployments: z.record(
    z.object({
      eid: z.number(),
      token: currencySchema,
      lpToken: tokenSchema.optional(),
      stargatePoolNative: contractSchema.optional(),
      stargatePool: contractSchema.optional(),
      stargateOft: contractSchema.optional(),
      feeLib: contractSchema,
      tokenMessaging: contractSchema,
    }),
  ),
});

export type SerializedStargateV2Config = z.input<typeof serializedStargateV2ConfigSchema>;

const stargateV2ConfigSchema = serializedStargateV2ConfigSchema.transform((data) => {
  const config: StargateV2Config = {
    assetId: data.assetId,
    sharedDecimals: data.sharedDecimals,
    deployments: {},
  };

  for (const chainKey in data.deployments) {
    const deployment = data.deployments[chainKey];
    config.deployments[chainKey] = {
      eid: deployment.eid,
      lpToken:
        deployment.lpToken &&
        Token.from({
          chainKey,
          symbol: deployment.lpToken.symbol,
          decimals: deployment.lpToken.decimals,
          address: deployment.lpToken.address,
          name: deployment.lpToken.name,
        }),
      token: deployment.token.address
        ? Token.from({
            chainKey,
            symbol: deployment.token.symbol,
            decimals: deployment.token.decimals,
            address: deployment.token.address,
            name: deployment.token.name,
          })
        : Coin.from({
            chainKey,
            decimals: deployment.token.decimals,
            symbol: deployment.token.symbol,
          }),
      feeLib: {
        address: deployment.feeLib.address,
      },
      stargatePool: deployment.stargatePool
        ? {
            address: deployment.stargatePool.address,
          }
        : undefined,
      stargatePoolNative: deployment.stargatePoolNative
        ? {
            address: deployment.stargatePoolNative.address,
          }
        : undefined,
      stargateOft: deployment.stargateOft
        ? {
            address: deployment.stargateOft.address,
          }
        : undefined,
      tokenMessaging: deployment.tokenMessaging,
    };
  }
  return config;
});

export function createConfig(
  input: z.input<typeof serializedStargateV2ConfigSchema>,
): StargateV2Config {
  return stargateV2ConfigSchema.parse(input);
}

// token messaging
const serializedStargateV2TokenMessagingSchema = z.object({
  api: z.object({url: z.string()}),
  deployments: z.record(
    z.object({
      eid: z.number(),
      tokenMessaging: contractSchema,
    }),
  ),
});

const stargateV2TokenMessagingSchema = serializedStargateV2TokenMessagingSchema;

export type SerializedStargateV2TokenMessagingConfig = z.input<
  typeof serializedStargateV2TokenMessagingSchema
>;
export type StargateV2TokenMessagingConfig = z.output<typeof stargateV2TokenMessagingSchema>;

// staking
const serializedStargateV2StakingSchema = z.object({
  deployments: z.record(
    z.object({
      stargateStaking: contractSchema,
      stargateMultiRewarder: contractSchema,
    }),
  ),
});

export type SerializedStargateV2StakingSchema = z.input<typeof serializedStargateV2StakingSchema>;
export type SerializedStargateV2StakingConfig = z.output<typeof serializedStargateV2StakingSchema>;
