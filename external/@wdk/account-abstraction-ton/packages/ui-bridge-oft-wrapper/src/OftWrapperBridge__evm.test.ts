import {createOftBridgeConfig} from '@layerzerolabs/ui-bridge-oft';
import {Token, getNativeCurrency, parseCurrencyAmount} from '@layerzerolabs/ui-core';
import {constants} from 'ethers';
import {describe, test, expect} from 'vitest';
import {OftWrapperBridge__evm} from './OftWrapperBridge__evm';
import type {ProviderFactory} from '@layerzerolabs/ui-evm';
import type {OftPartnerConfig} from './types';
import {createFailoverProviderFactory} from '@layerzerolabs/ui-evm';

const ethToken = Token.from({
  chainKey: 'ethereum',
  address: constants.AddressZero,
  decimals: 6,
  symbol: 'OFT',
});
const bscToken = Token.from({
  chainKey: 'bsc',
  address: constants.AddressZero,
  decimals: 6,
  symbol: 'OFT',
});
const partner: OftPartnerConfig = {
  caller: constants.AddressZero,
  callerBps: 0,
  partnerId: 1,
};

// TODO: run integration tests in separate workflow
describe.skip('getSendMethod', () => {
  const providerFactory: ProviderFactory = () => null!;

  class OftWrapperBridge extends OftWrapperBridge__evm {
    // expose protected method
    public getSendMethod = super.getSendMethod;
  }

  test('OFTV1', () => {
    const config = createOftBridgeConfig({
      version: 1,
      fee: false,
      sharedDecimals: 6,
      deployments: {
        ethereum: {
          eid: 101,
          oftProxy: {address: constants.AddressZero},
          token: ethToken,
        },
        bsc: {
          eid: 102,
          token: bscToken,
        },
      },
    });

    const api = new OftWrapperBridge(providerFactory, config, partner);
    const proxyMethod = api.getSendMethod(ethToken);
    expect(proxyMethod).toBe('sendProxyOFT');
    const tokenMethod = api.getSendMethod(bscToken);
    expect(tokenMethod).toBe('sendOFT');
  });

  test('OFTV2', () => {
    const config = createOftBridgeConfig({
      version: 2,
      fee: false,
      sharedDecimals: 6,
      deployments: {
        ethereum: {
          eid: 101,
          oftProxy: {address: constants.AddressZero},
          token: ethToken,
        },
        bsc: {
          eid: 102,
          token: bscToken,
        },
      },
    });

    const api = new OftWrapperBridge(providerFactory, config, partner);
    const proxyMethod = api.getSendMethod(ethToken);
    expect(proxyMethod).toBe('sendProxyOFTV2');
    const tokenMethod = api.getSendMethod(bscToken);
    expect(tokenMethod).toBe('sendOFTV2');
  });

  test('OFTFeeV2', () => {
    const config = createOftBridgeConfig({
      version: 2,
      fee: true,
      sharedDecimals: 6,
      deployments: {
        ethereum: {
          eid: 101,
          oftProxy: {address: constants.AddressZero},
          token: ethToken,
        },
        bsc: {
          eid: 102,
          token: bscToken,
        },
      },
    });
    const api = new OftWrapperBridge(providerFactory, config, partner);
    const proxyMethod = api.getSendMethod(ethToken);
    expect(proxyMethod).toBe('sendProxyOFTFeeV2');
    const tokenMethod = api.getSendMethod(bscToken);
    expect(tokenMethod).toBe('sendOFTFeeV2');
  });

  test('NativeOFTV1', () => {
    const ethNative = getNativeCurrency('ethereum');
    const config = createOftBridgeConfig({
      version: 1,
      fee: false,
      sharedDecimals: 6,
      deployments: {
        ethereum: {
          eid: 101,
          oftNative: {address: constants.AddressZero},
          token: ethNative,
        },
        bsc: {
          eid: 102,
          token: bscToken,
        },
      },
    });
    const api = new OftWrapperBridge(providerFactory, config, partner);
    const nativeMethod = api.getSendMethod(ethNative);
    expect(nativeMethod).toBe('sendNativeOFT');
    const tokenMethod = api.getSendMethod(bscToken);
    expect(tokenMethod).toBe('sendOFT');
  });

  test('NativeOFTFeeV2', () => {
    const ethNative = getNativeCurrency('ethereum');
    const config = createOftBridgeConfig({
      version: 2,
      fee: true,
      sharedDecimals: 6,
      deployments: {
        ethereum: {
          eid: 101,
          oftNative: {address: constants.AddressZero},
          token: ethNative,
        },
        bsc: {
          eid: 102,
          token: bscToken,
        },
      },
    });
    const api = new OftWrapperBridge(providerFactory, config, partner);
    const nativeMethod = api.getSendMethod(ethNative);
    expect(nativeMethod).toBe('sendNativeOFTFeeV2');
    const tokenMethod = api.getSendMethod(bscToken);
    expect(tokenMethod).toBe('sendOFTFeeV2');
  });
});

// TODO: run integration tests in separate workflow
describe.skip('getOutput', () => {
  const providerFactory = createFailoverProviderFactory();

  test('wrapper fee', async () => {
    const config = createOftBridgeConfig({
      version: 1,
      fee: false,
      sharedDecimals: 6,
      deployments: {
        ethereum: {
          eid: 101,
          oftProxy: {address: constants.AddressZero},
          token: ethToken,
        },
        bsc: {
          eid: 102,
          token: bscToken,
        },
      },
    });

    const api = new OftWrapperBridge__evm(providerFactory, config, partner);
    const output = await api.getOutput({
      srcAmount: parseCurrencyAmount(ethToken, '100'),
      dstToken: bscToken,
    });

    expect(output.dstAmount.toExact()).toEqual('99.98');
  });

  test('wrapper fee and caller fee', async () => {
    const partnerWithFee = {
      caller: constants.AddressZero,
      callerBps: 100,
      partnerId: 1,
    };
    const config = createOftBridgeConfig({
      version: 1,
      fee: false,
      sharedDecimals: 6,
      deployments: {
        ethereum: {
          eid: 101,
          oftProxy: {address: constants.AddressZero},
          token: ethToken,
        },
        bsc: {
          eid: 102,
          token: bscToken,
        },
      },
    });

    const api = new OftWrapperBridge__evm(providerFactory, config, partnerWithFee);
    const output = await api.getOutput({
      srcAmount: parseCurrencyAmount(ethToken, '100'),
      dstToken: bscToken,
    });

    expect(output.dstAmount.toExact()).toEqual('98.98');
  });
});
