import {test, expect} from 'vitest';
import {
  AdapterParams,
  type ChainKey,
  getNativeCurrency,
  parseCurrencyAmount,
  assert,
} from '@layerzerolabs/ui-core';

import {WrappedTokenBridge} from './WrappedTokenBridge';
import {createFailoverProviderFactory} from '@layerzerolabs/ui-evm';
import {OriginalTokenBridge} from './OriginalTokenBridge';
import {createWrappedAssetBridgeConfig} from '../utils/createWrappedTokenBridgeConfig';
import type {WrappedAssetBridgeConfig} from '../types/WrappedAssetBridgeConfig';

const testnet = createWrappedAssetBridgeConfig({
  version: 1,
  deployments: {
    'bsc-testnet': {
      eid: 10102,
      bridgeOriginal: {
        address: '0x62405Fa9aCEf1660E5c6b03bFab4F9636665681A',
      },
    },
    goerli: {
      eid: 10121,
      bridgeOriginal: {
        address: '0xc1eA4A7354277eb6939cC90ED7F73921957d1cb6',
      },
    },
    mumbai: {
      eid: 10109,
      bridgeOriginal: {
        address: '0x14fa644D97239FdF5C57f218852B0DE32aF863db',
      },
    },
    'coredao-testnet': {
      eid: 10153,
      bridgeWrapped: {
        address: '0x7612aE2a34E5A363E137De748801FB4c86499152',
      },
    },
  },
  tokens: [
    [
      // USDC
      {
        chainKey: 'coredao-testnet',
        address: '0xB30300c11FF54f8F674a9AA0777D8D5e9fefd652',
        decimals: 18,
        symbol: 'USDC',
      },
      {
        chainKey: 'bsc-testnet',
        address: '0x379b479E750C4678739F881DA50BA2c0fAA7015E',
        decimals: 18,
        symbol: 'USDC',
      },
      {
        chainKey: 'goerli',
        address: '0xc1eA4A7354277eb6939cC90ED7F73921957d1cb6',
        decimals: 18,
        symbol: 'USDC',
      },
    ],
    [
      // USDT
      {
        chainKey: 'coredao-testnet',
        address: '0xdbD61e32396550F513aa6A3dE906f9A89Ca1f2Ce',
        decimals: 18,
        symbol: 'USDT',
      },
    ],
    [
      // ETH/WETH
      getNativeCurrency('goerli'),
      {
        chainKey: 'coredao-testnet',
        address: '0xE6612eB143e4B350d55aA2E229c80b15CA336413',
        decimals: 18,
        symbol: 'WETH',
      },
    ],
  ],
});

export const mainnet = createWrappedAssetBridgeConfig({
  version: 1,
  deployments: {
    bsc: {
      eid: 102,
      bridgeOriginal: {
        address: '0x52e75D318cFB31f9A2EdFa2DFee26B161255B233',
      },
    },
    ethereum: {
      eid: 101,
      bridgeOriginal: {
        address: '0x52e75D318cFB31f9A2EdFa2DFee26B161255B233',
      },
    },
    coredao: {
      eid: 153,
      bridgeWrapped: {
        address: '0xA4218e1F39DA4AaDaC971066458Db56e901bcbdE',
      },
    },
  },
  tokens: [
    // USDC
    [
      {
        chainKey: 'coredao',
        address: '0xa4151B2B3e269645181dCcF2D426cE75fcbDeca9',
        decimals: 18,
        symbol: 'USDC',
      },
      {
        chainKey: 'ethereum',
        address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        decimals: 18,
        symbol: 'USDC',
      },
    ],
    // USDT
    [
      {
        chainKey: 'coredao',
        address: '0x900101d06A7426441Ae63e9AB3B9b0F63Be145F1',
        decimals: 18,
        symbol: 'USDT',
      },
      {
        chainKey: 'ethereum',
        address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        decimals: 18,
        symbol: 'USDT',
      },
      {
        chainKey: 'bsc',
        address: '0x55d398326f99059fF775485246999027B3197955',
        decimals: 18,
        symbol: 'USDT',
      },
    ],
    // ETH/WETH
    [
      {
        chainKey: 'ethereum',
        decimals: 18,
        symbol: 'ETH',
      },
      {
        chainKey: 'coredao',
        address: '0xeAB3aC417c4d6dF6b143346a46fEe1B847B50296',
        decimals: 18,
        symbol: 'WETH',
      },
    ],
  ],
});

const config = mainnet;

const providerFactory = createFailoverProviderFactory();

// TODO: run integration tests in separate workflow
test.skip('WrappedTokenBridge', async () => {
  const wrappedBridge = getWrappedBridge(config);
  const api = new WrappedTokenBridge(providerFactory, wrappedBridge, config);

  const srcToken = config.tokens.flat().find((i) => i.chainKey === wrappedBridge.chainKey);
  assert(srcToken);
  const dstToken = config.tokens
    .flat()
    .flat()
    .find((i) => i.chainKey !== wrappedBridge.chainKey && srcToken.symbol === i.symbol);
  assert(dstToken);

  const srcAmount = parseCurrencyAmount(srcToken, '1');

  const output = await api.getOutput({srcAmount, dstToken});

  expect(output.dstAmount).toBeDefined();

  const adapterParams = AdapterParams.forV1();
  const messageFee = await api.getMessageFee({
    srcToken,
    dstToken,
    adapterParams,
  });
  expect(messageFee).toBeDefined();
});

// TODO: run integration tests in separate workflow
test.skip('OriginalTokenBridge', async () => {
  const bridge = getOriginalBridge(config, 'ethereum');
  assert(bridge);
  const api = new OriginalTokenBridge(providerFactory, bridge, config);

  const srcToken = config.tokens.flat().find((i) => i.chainKey === bridge.chainKey);
  assert(srcToken);
  const dstToken = config.tokens
    .flat()
    .find((i) => i.chainKey !== bridge.chainKey && srcToken.symbol === i.symbol);
  assert(dstToken);

  const amount = parseCurrencyAmount(srcToken, '1');

  const output = await api.getOutput({srcAmount: amount, dstToken});

  expect(output.dstAmount).toBeDefined();

  const adapterParams = AdapterParams.forV1();
  const messageFee = await api.getMessageFee({srcToken, dstToken, adapterParams});

  expect(messageFee).toBeDefined();
});

function getWrappedBridge(config: WrappedAssetBridgeConfig) {
  for (const chainKey in config.deployments) {
    const deployment = config.deployments[chainKey];
    if (deployment.bridgeWrapped) return deployment.bridgeWrapped;
  }
  throw new Error(`No bridgeWrapped`);
}

function getOriginalBridge(config: WrappedAssetBridgeConfig, chainKey: ChainKey) {
  const deployment = config.deployments[chainKey];
  if (!deployment.bridgeOriginal) throw new Error(`No bridgeOriginal for ${chainKey}`);
  return deployment.bridgeOriginal;
}
