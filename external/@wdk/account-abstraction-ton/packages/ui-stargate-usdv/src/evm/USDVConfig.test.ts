import {assert} from '@layerzerolabs/ui-core';
import {describe, test, expect} from 'vitest';
import {createFailoverProviderFactory} from '@layerzerolabs/ui-evm';

import {usdvTestnetConfig} from '../config/testnet';
import {BridgeRecolor__factory, SideChainLP__factory} from '../typechain';

const usdvConfig = usdvTestnetConfig;

describe.skip('USDVConfig', () => {
  const providerFactory = createFailoverProviderFactory();

  const cases = Object.values(usdvConfig.deployments)
    .flatMap((deployment) => (deployment.bridgeRecolor ? [deployment] : []))
    .map((deployment) => {
      const chainKey = deployment.usdv.chainKey;
      const assets = usdvConfig.stables.filter((stable) => stable.chainKey === chainKey);
      const bridgeRecolor = deployment.bridgeRecolor;
      assert(bridgeRecolor, `No bridgeRecolor for ${chainKey}`);
      return assets.map((token) => ({
        bridgeRecolor,
        chainKey,
        token,
      }));
    });

  test.concurrent.each(cases)(
    '$chainKey: $token.symbol',
    async ({bridgeRecolor, token, chainKey}) => {
      const contract = BridgeRecolor__factory.connect(
        bridgeRecolor.address,
        providerFactory(chainKey),
      );
      const lp = SideChainLP__factory.connect(await contract.lp(), providerFactory(chainKey));
      const tokens = await lp.getAllTokens();
      expect(tokens).toContain(token.address);
      const config = await lp.tokenConfigs(token.address);
      expect(config.enabled).toBe(true);
      expect(config.cap.toBigInt()).toBeGreaterThan(BigInt(10e6));
    },
    {
      timeout: 10_000,
    },
  );
});
