import z from 'zod';
import type {StargateV1Config, Deployment, StargateV1Pool} from './index';
import {StargateVersion} from '@layerzerolabs/ui-stargate';
import {Token, currencySchema} from '@layerzerolabs/ui-core';

const serializedContractSchema = z
  .union([
    z.object({
      address: z.string(),
    }),
    z.string(),
  ])
  .transform((input) => {
    if (typeof input === 'string') {
      return {
        address: input,
      };
    }
    return input;
  });

const chainPathSchema = z.object({
  srcEid: z.number(),
  dstEid: z.number(),
  srcPoolId: z.number(),
  dstPoolId: z.number(),
  ready: z.boolean(),
  weight: z.number(),
});

const serializedDeploymentSchema = z.object({
  eid: z.number(),
  router: serializedContractSchema.optional(),
  routerEth: serializedContractSchema.optional(),
  bridge: serializedContractSchema.optional(),
  factory: serializedContractSchema.optional(),
  poolView: serializedContractSchema.optional(),
  lpStaking: serializedContractSchema.array().optional(),
  lpStakingTime: serializedContractSchema.array().optional(),
  stargateToken: serializedContractSchema.optional(),
  stargatePreCrime: serializedContractSchema.optional(),
  widgetSwap: serializedContractSchema.optional(),
});

const poolSchema = z.object({
  disabled: z.boolean().optional(),
  poolId: z.number(),
  chainKey: z.string(),
  token: currencySchema,
  stargateVersion: z.literal(StargateVersion.V1),
  address: z.string(),
  decimals: z.number(),
  sharedDecimals: z.number(),
  symbol: z.string(),
});

export const serializedStargateConfigSchema = z.object({
  deployments: z.record(serializedDeploymentSchema),
  chainPaths: chainPathSchema.array(),
  pools: poolSchema.array(),
});

export type SerializedDeployment = z.input<typeof serializedDeploymentSchema>;

export const stargateConfigSchema = serializedStargateConfigSchema.transform((input, ctx) => {
  const config: StargateV1Config = {
    rules: [],
    deployments: {},
    chainPaths: input.chainPaths,
    pools: [],
  };
  for (const chainKey in input.deployments) {
    const {
      // contracts
      stargateToken,
      factory,
      lpStaking,
      lpStakingTime,
      router,
      routerEth,
      eid,
      bridge,
    } = input.deployments[chainKey];

    const deployment: Deployment = {
      eid: eid,
      chainKey: chainKey,
      router: router && {
        address: router.address,
        chainKey,
      },
      routerEth: routerEth && {
        address: routerEth.address,
        chainKey,
      },
      bridge: bridge && {
        address: bridge.address,
        chainKey,
      },
      factory: factory && {
        address: factory.address,
        chainKey,
      },
      lpStaking:
        lpStaking &&
        lpStaking.map((contract) => ({
          address: contract.address,
          chainKey,
        })),
      lpStakingTime:
        lpStakingTime &&
        lpStakingTime.map((contract) => ({
          address: contract.address,
          chainKey,
        })),
      stargateToken:
        stargateToken &&
        Token.from({
          symbol: 'STG',
          decimals: 18,
          address: stargateToken.address,
          chainKey,
        }),
    };
    config.deployments[chainKey] = deployment;
  }

  // pools

  for (const pool of input.pools) {
    const deployment = config.deployments[pool.chainKey];
    if (!deployment) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Deployment not found for pool ${pool.symbol} on chain ${pool.chainKey}`,
      });
      continue;
    }

    const lpToken = Token.from({
      chainKey: pool.chainKey,
      address: pool.address,
      symbol: pool.symbol,
      decimals: pool.decimals,
    });

    config.pools.push({
      eid: deployment.eid,
      chainKey: pool.chainKey,
      stargateVersion: StargateVersion.V1,
      lpToken: lpToken,
      symbol: pool.symbol,
      token: pool.token,
      poolId: pool.poolId,
      address: pool.address,
      decimals: pool.decimals,
      sharedDecimals: pool.sharedDecimals,
      disabled: pool.disabled,
    });
  }

  return config;
});

export type SerializedStargateConfig = z.input<typeof serializedStargateConfigSchema>;
export type SerializedPool = z.input<typeof poolSchema>;

export function createStargateConfig(input: SerializedStargateConfig): StargateV1Config {
  return stargateConfigSchema.parse(input);
}

export function serializePool(input: StargateV1Pool): SerializedPool {
  return poolSchema.parse(input);
}
