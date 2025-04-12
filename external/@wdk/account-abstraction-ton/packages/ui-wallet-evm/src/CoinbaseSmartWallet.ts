import {computed, makeObservable, observable} from 'mobx';
import {EvmWallet} from './EvmWallet';
import type {EIP1193Provider} from '@web3-onboard/common';
import {getNetwork} from '@layerzerolabs/ui-core';

// todo: refactor so we support lazy loading of provider
export class CoinbaseSmartWallet extends EvmWallet {
  public readonly icon =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI4IDU2YzE1LjQ2NCAwIDI4LTEyLjUzNiAyOC0yOFM0My40NjQgMCAyOCAwIDAgMTIuNTM2IDAgMjhzMTIuNTM2IDI4IDI4IDI4WiIgZmlsbD0iIzFCNTNFNCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNyAyOGMwIDExLjU5OCA5LjQwMiAyMSAyMSAyMXMyMS05LjQwMiAyMS0yMVMzOS41OTggNyAyOCA3IDcgMTYuNDAyIDcgMjhabTE3LjIzNC02Ljc2NmEzIDMgMCAwIDAtMyAzdjcuNTMzYTMgMyAwIDAgMCAzIDNoNy41MzNhMyAzIDAgMCAwIDMtM3YtNy41MzNhMyAzIDAgMCAwLTMtM2gtNy41MzNaIiBmaWxsPSIjZmZmIi8+PC9zdmc+';
  public readonly type = 'Coinbase Smart Wallet';
  public readonly isAvailable: boolean = true;

  constructor(public readonly provider: EIP1193Provider) {
    super();

    makeObservable(this, {
      isAvailable: true,
      chainKey: computed,
      isConnected: true,
      isConnecting: true,
      isSwitchingChain: true,
      publicKey: true,
      nativeChainId: true,
      address: true,
      signer: observable.ref,
      connect: true,
    });
    this.subscribe(provider);
  }

  async supportsChain(chainKey: string) {
    const chain = getNetwork(chainKey);
    const response = await wallet_getCapabilities(this.provider);

    for (const [hexChainKey] of Object.entries(response)) {
      if (Number(hexChainKey) === chain.nativeChainId) {
        return true;
      }
    }
    return false;
  }

  autoConnect = async () => {
    if (!this.isAutoConnectEnabled) return Promise.reject();
    await this.connect();
  };
}

async function wallet_getCapabilities(provider: EIP1193Provider) {
  const response = await provider.request({
    method: 'wallet_getCapabilities',
  });
  return response as EIP5792Response.wallet_getCapabilities;
}

type CapabilityType = 'sessionKeys' | 'paymasterService';

namespace EIP5792Response {
  export interface wallet_getCapabilities {
    [hexChainKey: string]:
      | {
          [capability in CapabilityType]?: boolean;
        }
      | undefined;
  }
}
