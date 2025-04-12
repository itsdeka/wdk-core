import {AdapterParams, getNativeCurrency, parseCurrencyAmount} from '@layerzerolabs/ui-core';
import {createFailoverProviderFactory, ONE_ADDRESS} from '@layerzerolabs/ui-evm';
import {describe, test, expect, assert} from 'vitest';
import {BridgeRecolorBridgeApi__evm} from './BridgeRecolorBridgeApi__evm';
import {usdvTestnetConfig} from '../config/testnet';
import {usdvMainnetConfig} from '../config/mainnet';

const usdvConfig = usdvMainnetConfig;

// no liquidity
describe.skip('BridgeRecolorBridgeApi__evm', () => {
  const providerFactory = createFailoverProviderFactory();
  const api = new BridgeRecolorBridgeApi__evm(usdvConfig, providerFactory, 3);

  const cases = Object.values(usdvConfig.deployments).flatMap((deployment) => {
    const bridgeRecolor = deployment.bridgeRecolor;
    console.log('bridgeRecolor', bridgeRecolor);
    if (!bridgeRecolor) return [];
    const usdvTokens = Object.values(usdvConfig.deployments).map((d) => d.usdv);
    const srcToken = usdvConfig.stables.find((t) => t.chainKey === bridgeRecolor.chainKey);
    if (!srcToken) return [];
    const dstToken = usdvTokens.find((t) => t.chainKey !== srcToken.chainKey);
    if (!dstToken) return [];
    const srcChainKey = srcToken.chainKey;
    const dstChainKey = dstToken.chainKey;
    return {srcToken, srcChainKey, dstToken, dstChainKey};
  });

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
