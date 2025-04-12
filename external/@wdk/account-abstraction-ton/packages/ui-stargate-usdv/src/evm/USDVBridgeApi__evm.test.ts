import {AdapterParams, getNativeCurrency, parseCurrencyAmount} from '@layerzerolabs/ui-core';
import {describe, test, expect} from 'vitest';
import {createFailoverProviderFactory, ONE_ADDRESS} from '@layerzerolabs/ui-evm';

import {USDVBridgeApi__evm} from './USDVBridgeApi__evm';
import {usdvMainnetConfig} from '../config/mainnet';

const usdvConfig = usdvMainnetConfig;

// TODO: run integration tests in separate workflow
describe.skip('USDVBridgeApi__evm', () => {
  const providerFactory = createFailoverProviderFactory();
  const api = new USDVBridgeApi__evm(usdvConfig, providerFactory);

  const cases = Object.values(usdvConfig.deployments).flatMap((deployment) => {
    if (!deployment.bridgeRecolor) return [];
    const srcToken = deployment.usdv;

    return Object.values(usdvConfig.deployments)
      .map((d) => d.usdv)
      .filter((dstToken) => !dstToken.equals(srcToken))
      .map((dstToken) => ({
        srcToken,
        dstToken,
        srcChainKey: srcToken.chainKey,
        dstChainKey: dstToken.chainKey,
      }));
  });

  test.concurrent.each(cases)(
    '$srcChainKey -> $dstChainKey',
    async ({srcToken, dstToken}) => {
      const srcAmount = parseCurrencyAmount(srcToken, '1');
      const minAmount = parseCurrencyAmount(dstToken, '1');
      const supportsTransfer = api.supportsTransfer(srcToken, dstToken);
      expect(supportsTransfer).toBe(true);
      const outputAmountRD = await api.getOutput({srcAmount, dstToken});
      expect(outputAmountRD).toBeDefined();
      expect(outputAmountRD.dstAmount.token).toEqual(dstToken);
      expect(outputAmountRD.dstAmount.lessThan(minAmount)).toBeFalsy();
      const extraGas = await api.getExtraGas({srcToken, dstToken});
      expect(extraGas).toBeDefined();
      const limit = await api.getLimit({srcToken, dstToken});
      expect(limit.greaterThan(0)).toBeTruthy();
      const dstNativeCurrency = getNativeCurrency(dstToken.chainKey);
      const dstNativeAmount = parseCurrencyAmount(dstNativeCurrency, '0.001');
      const dstNativeAddress = ONE_ADDRESS;
      const adapterParams = AdapterParams.forV2({extraGas, dstNativeAmount, dstNativeAddress});
      const messageFee = await api.getMessageFee({
        srcToken,
        dstToken,
        adapterParams,
      });
      expect(messageFee).toBeDefined();
    },
    {
      timeout: 10_000,
    },
  );
});
