import {test, expect} from 'vitest';
import {mainnet} from './config/mainnet';
import {AptosBridgeV2__evm} from './AptosBridgeV2__evm';
import {JsonRpcProvider} from '@ethersproject/providers';
import {getNativeCurrency, parseCurrencyAmount, type ChainKey} from '@layerzerolabs/ui-core';
import {AddressOne, type ProviderFactory} from '@layerzerolabs/ui-evm';
import {fullAddress} from '@layerzerolabs/ui-aptos';

const provider = new JsonRpcProvider('https://arb1.arbitrum.io/rpc');

const getProvider: ProviderFactory = (chainKey: ChainKey) => {
  if (chainKey === 'arbitrum') return provider;
  throw new Error(`Unsupported chainKey: ${chainKey}`);
};

const bridge = new AptosBridgeV2__evm(mainnet, getProvider);

const tokens = Object.values(mainnet.tokens).flat();
const srcToken = tokens.find((token) => token.chainKey === 'arbitrum' && token.symbol === 'USDC')!;
const dstToken = tokens.find((token) => token.chainKey === 'aptos' && token.symbol === 'USDC')!;

test('supportsTransfer', async () => {
  const result = bridge.supportsTransfer(srcToken, dstToken);
  expect(result).toBe(true);
});

test('getMessageFee', async () => {
  const messageFee = await bridge.getMessageFee(
    {srcChainKey: 'arbitrum', dstChainKey: 'aptos'},
    {dstNativeAmount: 0n, minDstGas: 10_000n, dstNativeAddress: fullAddress('0').toString()},
  );
  expect(messageFee.nativeFee.toBigInt()).toBeGreaterThan(0n);
});

test('getRoute', async () => {
  const srcAmount = parseCurrencyAmount(srcToken, '100');
  const dstAmountMin = parseCurrencyAmount(dstToken, '0');
  const dstNative = getNativeCurrency('aptos');
  const dstNativeAmount = parseCurrencyAmount(dstNative, '0');
  const route = await bridge.getRoute({
    srcToken,
    dstToken,
    srcAmount,
    srcAddress: AddressOne,
    dstAddress: fullAddress('0').toString(),
    dstNativeAmount,
    mode: 'taxi',
    dstAmountMin,
  });
  expect(route).toBeDefined();
});
