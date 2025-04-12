import z from 'zod';
import type {OnftBridgeConfig} from './OnftBridgeConfig';
import {NftCollection} from './NftCollection';
import {NftAsset} from './NftAsset';
import {NftStandard} from './NftStandard';

export const nftStandardSchema = z.union([
  z.literal(NftStandard.ERC1155),
  z.literal(NftStandard.ERC721),
]);
export const nftCollectionSchema = z
  .object({
    address: z.string(),
    chainKey: z.string(),
    standard: nftStandardSchema,
    name: z.string(),
  })
  .transform((input) => NftCollection.from(input));

export const nftAssetSchema = z
  .object({
    tokenId: z.number().int().positive(),
    collection: nftCollectionSchema,
  })
  .transform((input) => NftAsset.from(input));

const contractSchema = z.object({
  address: z.string(),
});

export const onftBridgeConfigSchema = z
  .object({
    standard: nftStandardSchema,
    name: z.string(),
    deployments: z.record(
      z.union([
        z.object({
          eid: z.number(),
          collection: contractSchema,
          onftProxy: contractSchema,
        }),
        z.object({
          eid: z.number(),
          onft: contractSchema,
        }),
      ]),
    ),
  })
  .transform((input) => {
    const config: OnftBridgeConfig = {
      standard: input.standard,
      deployments: {},
    };
    for (const chainKey in input.deployments) {
      const deployment = input.deployments[chainKey];
      let collection: NftCollection;
      let onft, onftProxy;

      if ('onftProxy' in deployment) {
        collection = NftCollection.from({
          chainKey,
          standard: input.standard,
          name: input.name,
          address: deployment.collection.address,
        });
        onftProxy = {
          address: deployment.onftProxy.address,
          chainKey,
        };
      } else {
        collection = NftCollection.from({
          chainKey,
          standard: input.standard,
          name: input.name,
          address: deployment.onft.address,
        });
        onft = {
          address: deployment.onft.address,
          chainKey,
        };
      }

      config.deployments[chainKey] = {
        eid: deployment.eid,
        collection,
        onft,
        onftProxy,
      };
    }

    return config;
  });

export function createOnftBridgeConfig(config: SerializedOnftBridgeConfig): OnftBridgeConfig {
  return onftBridgeConfigSchema.parse(config);
}

export type SerializedOnftBridgeConfig = z.input<typeof onftBridgeConfigSchema>;

export function serializeOnftBridgeConfig(input: OnftBridgeConfig): SerializedOnftBridgeConfig {
  const serialized: SerializedOnftBridgeConfig = {
    name: 'OFT', // we will override this
    deployments: {},
    standard: input.standard,
  };
  for (const chainKey in input.deployments) {
    const deployment = input.deployments[chainKey];
    const {eid, collection} = deployment;
    serialized.name = collection.name;
    if (deployment.onft) {
      serialized.deployments[chainKey] = {
        eid,
        onft: {
          address: deployment.onft.address,
        },
      };
    }
    if (deployment.onftProxy) {
      serialized.deployments[chainKey] = {
        eid,
        collection: {
          address: collection.address,
        },
        onftProxy: {
          address: deployment.onftProxy.address,
        },
      };
    }
  }
  return serialized;
}
