import type {GetAptosClientFunction} from '@layerzerolabs/ui-aptos';
import {getNativeCurrency, parseCurrencyAmount, type ChainKey} from '@layerzerolabs/ui-core';
import {AptosClient} from 'aptos';
import {test, expect} from 'vitest';
import {AptosBridgeV2__aptos} from './AptosBridgeV2__aptos';
import {mainnet} from './config/mainnet';
import type {ProviderFactory} from '@layerzerolabs/ui-evm';
import {JsonRpcProvider} from '@ethersproject/providers';

const client = new AptosClient('https://mainnet.aptoslabs.com/v1');
const provider = new JsonRpcProvider('https://arb1.arbitrum.io/rpc');

const getAptosClient: GetAptosClientFunction = (chainKey: ChainKey) => {
  if (chainKey === 'aptos') return client;
  throw new Error(`Unsupported chainKey: ${chainKey}`);
};

const getProvider: ProviderFactory = (chainKey: ChainKey) => {
  if (chainKey === 'arbitrum') return provider;
  throw new Error(`Unsupported chainKey: ${chainKey}`);
};

const accounts = {
  aptos: {
    layerzero: {
      address: '0x54ad3d30af77b60d939ae356e6606de9a4da67583f02b962d2d3f2e481484e90',
    },
    layerzero_apps: {
      address: '0x43d8cad89263e6936921a0adb8d5d49f0e236c229460f01b14dca073114df2b9',
    },
    executor: {
      address: '0x1d8727df513fa2a8785d0834e40b34223daff1affc079574082baadb74b66ee4',
      version: 1n,
    },
  },
} as const;

const bridge = new AptosBridgeV2__aptos(mainnet, accounts, getAptosClient, getProvider);

test('getDstMinGas', async () => {
  const path = {srcChainKey: 'aptos', dstChainKey: 'bsc'};
  const minDstGas = await bridge.getMinDstGas(path);
  expect(minDstGas).toBeGreaterThan(0);
});

test('getLimit', async () => {
  const tokens = Object.values(mainnet.tokens).flat();
  const srcToken = tokens.find((token) => token.chainKey === 'aptos' && token.symbol === 'USDC')!;
  const dstToken = tokens.find(
    (token) => token.chainKey === 'arbitrum' && token.symbol === 'USDC',
  )!;
  const limit = await bridge.getLimit({srcToken, dstToken});
  expect(limit.quotient).toBeGreaterThan(0);
});

test('getRoute', async () => {
  const tokens = Object.values(mainnet.tokens).flat();
  const srcToken = tokens.find((token) => token.chainKey === 'aptos' && token.symbol === 'USDC')!;
  const dstToken = tokens.find(
    (token) => token.chainKey === 'arbitrum' && token.symbol === 'USDC',
  )!;
  const srcAmount = parseCurrencyAmount(srcToken, '100');
  const dstAmountMin = parseCurrencyAmount(dstToken, '0');
  const dstNative = getNativeCurrency('arbitrum');
  const dstNativeAmount = parseCurrencyAmount(dstNative, '0');

  const route = await bridge.getRoute({
    mode: 'taxi',
    srcToken,
    dstToken,
    srcAmount,
    dstAmountMin,
    srcAddress: '',
    dstAddress: '',
    dstNativeAmount,
  });
  expect(route).toBeDefined();
});
