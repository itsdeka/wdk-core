import {describe, test, expect} from 'vitest';
import {AdapterParams, CurrencyAmount, getNativeCurrency} from '@layerzerolabs/ui-core';
import {createFailoverProviderFactory} from '@layerzerolabs/ui-evm';

import {createOnftBridgeConfig} from '../types/zod';
import {NftAsset} from '../types/NftAsset';
import type {OnftTransferInput} from './OnftBridgeApi';
import {Amount} from '../types/Amount';
import {OnftBridgeApi__ERC1155__evm} from './OnftBridgeApi__ERC1155__evm';

describe('OnftBridgeApi__ERC1155__evm', () => {
  const owner = '0x6d9798053f498451BEC79c0397F7f95B079BDCd6';
  const providerFactory = createFailoverProviderFactory();
  const config = createOnftBridgeConfig({
    name: 'LayerZero Example ERC1155',
    standard: 'ERC1155',
    deployments: {
      'bsc-testnet': {
        eid: 10102,
        onft: {
          address: '0xf9fe722d05DA63265ACd909fe01BbB49701c2506',
        },
      },
      fuji: {
        eid: 10106,
        collection: {
          address: '0xFc13c28024Ac57B0FbfF311FccFF2dA452B7Ff26',
        },
        onftProxy: {
          address: '0xeBc2aFc3DE72a17f42962E912d03DbA5ee8af898',
        },
      },
      'arbitrum-goerli': {
        eid: 10143,
        onft: {
          address: '0x9748733678AB402e3B0464213D7f629709A87260',
        },
      },
    },
  });

  const api = new OnftBridgeApi__ERC1155__evm(config, providerFactory, null!);

  test('supports', async () => {
    const srcChainKey = 'fuji';
    const collection = config.deployments[srcChainKey].collection;
    const supports = api.supports(collection);
    expect(supports).toBe(true);
  });

  // fails because no BalanceProvider is set
  test.fails('getAssets', async () => {
    const collection = config.deployments['arbitrum-goerli'].collection;
    const assets = await api.getAssets(collection, owner);
    expect(assets).toBeDefined();
  });

  test('getMessageFee', async () => {
    const srcChainKey = 'fuji';
    const dstChainKey = 'arbitrum-goerli';
    const collection = config.deployments[srcChainKey].collection;
    const assets = [NftAsset.from({collection, tokenId: 1})];
    const adapterParams = AdapterParams.forV1();
    const messageFee = await api.getMessageFee(assets, dstChainKey, adapterParams);
    expect(messageFee).toBeDefined();
  });

  test('getExtraGas', async () => {
    const srcChainKey = 'arbitrum-goerli';
    const dstChainKey = 'fuji';
    const collection = config.deployments[srcChainKey].collection;
    const assets = [NftAsset.from({collection, tokenId: 128})];
    const extraGas = await api.getExtraGas(assets, dstChainKey);
    expect(extraGas).toBeDefined();
    expect(extraGas).toBeTypeOf('number');
  });

  // todo: test fails because not enough native for fee or token on different chain
  test.fails('transfer', async () => {
    const srcChainKey = 'arbitrum-goerli';
    const dstChainKey = 'fuji';
    const native = getNativeCurrency(srcChainKey);
    const collection = config.deployments[srcChainKey].collection;
    const assets = [NftAsset.from({collection, tokenId: 128})];
    const extraGas = 200_000;
    const adapterParams = AdapterParams.forV1(extraGas);
    const input: OnftTransferInput = {
      assets: assets.map((asset) => Amount.from(asset, BigInt(1))),
      srcChainKey,
      dstChainKey,
      srcAddress: owner,
      dstAddress: owner,
      adapterParams,
      fee: {
        nativeFee: CurrencyAmount.fromRawAmount(native, 1e14),
        zroFee: CurrencyAmount.fromRawAmount(native, 0),
      },
    };
    const tx = await api.transfer(input);
    expect(tx).toBeDefined();
    const gasUsed = await tx.estimateGas();
    expect(gasUsed).toBeTypeOf('bigint');
  });
});
