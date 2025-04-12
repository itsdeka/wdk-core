import {
  AdapterParams,
  getNativeCurrency,
  parseCurrencyAmount,
  assert,
} from '@layerzerolabs/ui-core';
import {describe, test, expect} from 'vitest';
import {createFailoverProviderFactory, ONE_ADDRESS} from '@layerzerolabs/ui-evm';

import {MinterProxyBridgeApi__evm} from './MinterProxyBridgeApi__evm';
import {usdvMainnetConfig} from '../config/mainnet';

const usdvConfig = usdvMainnetConfig;

// TODO: run integration tests in separate workflow
describe.skip('MinterProxyBridgeApi__evm', () => {
  const providerFactory = createFailoverProviderFactory();
  const api = new MinterProxyBridgeApi__evm(usdvConfig, providerFactory, 3);
  const minterProxy = Object.values(usdvConfig.deployments).find((d) => d.minterProxy)?.minterProxy;
  assert(minterProxy);

  const cases = usdvConfig.stables
    .filter((srcToken) => srcToken.chainKey === minterProxy.chainKey)
    .flatMap((srcToken) => {
      const tokens = Object.values(usdvConfig.deployments).map((d) => d.usdv);
      return tokens.map((dstToken) => {
        assert(dstToken);
        assert(srcToken);
        const srcChainKey = srcToken.chainKey;
        const dstChainKey = dstToken.chainKey;
        return {srcToken, srcChainKey, dstToken, dstChainKey};
      });
    })
    .filter((path) => path.srcChainKey !== path.dstChainKey);

  test.concurrent.each(cases)(
    '$srcChainKey -> $dstChainKey',
    async ({srcToken, dstToken}) => {
      const srcAmount = parseCurrencyAmount(srcToken, '1');
      const minAmount = parseCurrencyAmount(dstToken, '1');
      const supportsTransfer = api.supportsTransfer(srcToken, dstToken);
      expect(supportsTransfer).toBe(true);
      const output = await api.getOutput({srcAmount, dstToken});
      expect(output).toBeDefined();
      expect(output.dstAmount.token).toEqual(dstToken);
      expect(output.dstAmount.lessThan(minAmount)).toBeFalsy();
      const extraGas = await api.getExtraGas({srcToken, dstToken});
      expect(extraGas).toBeGreaterThan(0);
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
