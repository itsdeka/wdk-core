import {
  AdapterParams,
  Percent,
  getNativeCurrency,
  parseCurrencyAmount,
} from '@layerzerolabs/ui-core';
import {
  ONE_ADDRESS,
  createFailoverProviderFactory,
  createMulticallProviderFactory,
} from '@layerzerolabs/ui-evm';

import {describe, test, expect} from 'vitest';
import {USDC_SANDBOX} from '../config/sandbox';

import {StargateV2Bridge} from './StargateV2Bridge';
import {USDC_MAINNET} from '../config/mainnet';

// TODO: run integration tests in separate workflow
describe.skip('StargateV2Bridge', () => {
  const providerFactory = createMulticallProviderFactory(createFailoverProviderFactory());
  const config = USDC_MAINNET;
  const bridge = new StargateV2Bridge(config, providerFactory);

  test.skip('supportsTransfer', () => {
    const chains = ['ethereum-sandbox', 'bsc-sandbox', 'polygon-sandbox'];
    for (const srcChainKey of chains) {
      for (const dstChainKey of chains) {
        if (dstChainKey === srcChainKey) continue;
        const srcToken = config.deployments[srcChainKey].token;
        const dstToken = config.deployments[dstChainKey].token;

        const supported = bridge.supportsTransfer(srcToken, dstToken);
        expect(supported).toBe(true);
      }
    }
  });

  test.skip('getExtraGas', async () => {
    const srcToken = config.deployments['ethereum-sandbox'].token;
    const dstToken = config.deployments['bsc-sandbox'].token;
    const extraGas = await bridge.getExtraGas({
      mode: 'taxi',
      srcToken,
      dstToken,
    });
    console.log({extraGas});
    expect(extraGas).toBeGreaterThan(0);
  });

  test.skip('getMessageFee', async () => {
    const srcChainKey = 'ethereum-sandbox';
    const dstChainKey = 'bsc-sandbox';
    const srcToken = config.deployments[srcChainKey].token;
    const dstToken = config.deployments[dstChainKey].token;

    const adapterParams = AdapterParams.forV2({
      extraGas: 0, // value for TAXI
      dstNativeAddress: ONE_ADDRESS,
      dstNativeAmount: parseCurrencyAmount(getNativeCurrency(dstChainKey), '0.1'),
    });
    const messageFee = await bridge.getMessageFee({
      mode: 'taxi',
      srcToken,
      dstToken,
      adapterParams,
    });
    expect(messageFee).toBeDefined();
  });

  test.skip('transfer', async () => {
    const srcChainKey = 'ethereum-sandbox';
    const dstChainKey = 'bsc-sandbox';
    const srcToken = config.deployments[srcChainKey].token;
    const dstToken = config.deployments[dstChainKey].token;
    const srcAddress = '0x6d9798053f498451BEC79c0397F7f95B079BDCd6';
    const dstAddress = srcAddress;

    const adapterParams = AdapterParams.forV2({
      extraGas: 0, // value for TAXI
      dstNativeAddress: ONE_ADDRESS,
      dstNativeAmount: parseCurrencyAmount(getNativeCurrency(dstChainKey), '0.1'),
    });
    const messageFee = await bridge.getMessageFee({
      mode: 'taxi',
      srcToken: srcToken,
      dstToken,
      adapterParams,
    });
    const srcAmount = parseCurrencyAmount(srcToken, '1');
    const dstAmountMin = parseCurrencyAmount(dstToken, '0.1');
    const transaction = await bridge.transfer({
      srcChainKey,
      dstChainKey,
      srcToken,
      dstToken,
      srcAddress,
      dstAddress,
      adapterParams,
      fee: messageFee,
      srcAmount,
      dstAmountMin,
      mode: 'taxi',
    });
    const gas = await transaction.estimateGas();
    expect(gas).toBeDefined();
  });

  test('getOutput', async () => {
    const srcChainKey = 'ethereum';
    const dstChainKey = 'arbitrum';

    const srcToken = config.deployments[srcChainKey].token;
    const dstToken = config.deployments[dstChainKey].token;
    const srcAmount = parseCurrencyAmount(srcToken, '1');
    // max slippage 1%
    const minAmount = parseCurrencyAmount(dstToken, '0.1').multiply(99).divide(100);
    const output = await bridge.getOutput({
      mode: 'taxi',
      srcAmount,
      dstToken,
    });
    expect(output).toBeDefined();
    expect(output.dstAmount.greaterThanOrEqualTo(minAmount)).toBe(true);
  }, 30_000);

  test.skip('getLimit', async () => {
    const srcChainKey = 'ethereum-sandbox';
    const dstChainKey = 'bsc-sandbox';
    const srcToken = config.deployments[srcChainKey].token;
    const dstToken = config.deployments[dstChainKey].token;
    const limit = await bridge.getLimit({
      mode: 'taxi',
      srcToken,
      dstToken,
    });
    expect(limit).toBeDefined();
  });
});
