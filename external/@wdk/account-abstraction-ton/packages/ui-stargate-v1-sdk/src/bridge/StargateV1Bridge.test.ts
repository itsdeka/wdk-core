import {AdapterParams, type Currency, parseCurrencyAmount} from '@layerzerolabs/ui-core';
import type {TransferInput} from '@layerzerolabs/ui-bridge-sdk';
import {test, describe, expect} from 'vitest';
import {StargateV1Bridge} from './StargateV1Bridge';
import {mainnet} from '../config/mainnet';
import {StargateV1Sdk} from '../StargateV1Sdk';
import chainPaths from '../config/mainnet/chainPaths.json';

import {createProviderFactory} from '../test/providerFactory';

const timeout = 10 * 1000;

// TODO: run integration tests in separate workflow
describe.skip('StargateV1Bridge', () => {
  const providerFactory = createProviderFactory();
  const sdk = new StargateV1Sdk({...mainnet, chainPaths});
  const api = new StargateV1Bridge(providerFactory, sdk);
  const cases: {srcToken: Currency; dstToken: Currency}[] = sdk
    .getLinks()
    .filter((link) => !link.disabled)
    .map((link) => ({
      srcToken: link.srcPool.token,
      dstToken: link.dstPool.token,
    }));

  describe('getLimit', () => {
    test.concurrent.each(cases)(
      '$srcToken.chainKey:$srcToken.symbol -> $dstToken.chainKey:$dstToken.symbol',
      async ({srcToken, dstToken}) => {
        const supports = api.supportsTransfer(srcToken, dstToken);
        expect(supports).toBe(true);
        const limit = await api.getLimit({srcToken, dstToken});
        expect(limit).toBeDefined();
        // expect(limit.quotient, `chainPath: ${JSON.stringify()}`).toBeGreaterThan(0);
        // const srcAmount = parseCurrencyAmount(srcToken, '0.1');
        // const output = await api.getOutput(srcAmount, dstToken);
        // validateOutput(srcAmount, dstToken, output);
        // expect(output.amount.quotient).toBeGreaterThan(0);
      },
      timeout,
    );
  });

  // todo: define which test cases to run
  // too many test cases
  describe.skip('getOutput', () => {
    test.concurrent.each(cases)(
      '$srcToken.chainKey:$srcToken.symbol -> $dstToken.chainKey:$dstToken.symbol',
      async ({srcToken, dstToken}) => {
        const srcAmount = parseCurrencyAmount(srcToken, '0.1');
        const output = await api.getOutput({srcAmount, dstToken});
        console.log('output', output.dstAmount.toExact());
        expect(output.dstAmount.quotient).toBeGreaterThan(0);
      },
      timeout,
    );
  });

  // some test may fail because of insufficient liquidity or not enough balance
  describe.skip(
    'transfer',
    () => {
      test.concurrent.each(cases)(
        '$srcToken.chainKey:$srcToken.symbol -> $dstToken.chainKey:$dstToken.symbol',
        async ({srcToken, dstToken}) => {
          const srcAmount = parseCurrencyAmount(srcToken, '0.1');
          const dstAmountMin = parseCurrencyAmount(dstToken, '0.0');
          const output = await api.getOutput({srcAmount, dstToken});
          const srcChainKey = srcToken.chainKey;
          const dstChainKey = dstToken.chainKey;
          const adapterParams = AdapterParams.forV1();
          const fee = await api.getMessageFee({srcToken, dstToken, adapterParams});
          const srcAddress = '0x6d9F1a927CBcb5e2c28D13CA735bc6d6131406da';
          const dstAddress = srcAddress;
          const input: TransferInput = {
            mode: 'taxi',
            srcAddress,
            dstAddress,
            srcAmount,
            dstAmountMin,
            adapterParams,
            srcChainKey,
            dstChainKey,
            dstToken,
            fee,
            srcToken,
          };
          expect(output.dstAmount.quotient).toBeGreaterThan(0);
          const tx = await api.transfer(input);
          const nativeCost = tx.estimateNative();
        },
      );
    },
    timeout,
  );
});
