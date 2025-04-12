import {describe, test, expect} from 'vitest';
import {AdapterParams, CurrencyAmount, getNativeCurrency} from '@layerzerolabs/ui-core';
import {createFailoverProviderFactory} from '@layerzerolabs/ui-evm';

import {createOnftBridgeConfig} from '../types/zod';
import {OnftBridgeApi__ERC721__evm} from './OnftBridgeApi__ERC721__evm';
import {NftAsset} from '../types/NftAsset';
import type {OnftTransferInput} from './OnftBridgeApi';
import {Amount} from '../types/Amount';

describe('OnftBridgeApi__ERC721__evm', () => {
  const owner = '0x6d9798053f498451BEC79c0397F7f95B079BDCd6';
  const providerFactory = createFailoverProviderFactory();
  const config = createOnftBridgeConfig({
    standard: 'ERC721',
    name: 'LayerZero Example ERC721',
    deployments: {
      'bsc-testnet': {
        eid: 10102,
        onft: {
          address: '0xcb196127954be0b0555da5dc51432e3f8499c809',
        },
      },
      fuji: {
        eid: 10106,
        onft: {
          address: '0x27918c6f5f8aed9a6dd714685daf88b582596a58',
        },
      },
      'arbitrum-goerli': {
        eid: 10143,
        collection: {
          address: '0xD8D015FbA330A12490BdAe2642b6a75F8a0bB5E5',
        },
        onftProxy: {
          address: '0x84F041620FC54d43f18AdEe0745C5DCc84AFaC50',
        },
      },
    },
  });

  const api = new OnftBridgeApi__ERC721__evm(config, providerFactory);

  test('supports', async () => {
    const srcChainKey = 'fuji';
    const collection = config.deployments[srcChainKey].collection;
    const supports = api.supports(collection);
    expect(supports).toBe(true);
  });

  test('getAssets', async () => {
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
    const assets = [NftAsset.from({collection, tokenId: 1})];
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
    const assets = [NftAsset.from({collection, tokenId: 4})];
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
