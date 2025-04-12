import {computed, makeObservable, observable, runInAction} from 'mobx';
import {
  type DisconnectListener,
  type EIP1193Provider,
  createEIP1193Provider,
} from '@web3-onboard/common';
import {ProviderIdentityFlag} from './ProviderIdentityFlag';
import {EvmWallet} from './EvmWallet';
import {getEIP1193Provider} from './utils';

export const DETECT_INTERVAL = 100;
export const DETECT_TIMEOUT = 5000;

export abstract class InjectedWallet extends EvmWallet {
  public abstract readonly identityFlag: ProviderIdentityFlag;
  protected providerPromise: Promise<EIP1193Provider>;

  public autoConnect: () => Promise<void> = async () => {
    if (!this.isAutoConnectEnabled) return Promise.reject();
    await this.providerPromise;
    await this.connect();
  };

  constructor() {
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
      provider: observable.ref,
    });

    this.providerPromise = this.detectProvider();
    this.providerPromise.then((provider) =>
      runInAction(() => {
        this.isAvailable = true;
        this.provider = provider;
        this.subscribe(provider);
      }),
    );
  }

  protected detectProvider(): Promise<EIP1193Provider> {
    const provider = this.tryGetProvider();
    if (provider) return Promise.resolve(provider);
    return new Promise((resolve) => {
      if (typeof window === 'undefined') return;
      const id = setInterval(() => {
        const provider = this.tryGetProvider();
        if (!provider) return;
        clearInterval(id);
        resolve(provider);
      }, DETECT_INTERVAL);
      setTimeout(() => clearInterval(id), DETECT_TIMEOUT);
    });
  }

  protected tryGetProvider(): EIP1193Provider | undefined {
    return getEIP1193Provider(this.identityFlag);
  }
}

export class MetaMaskWallet extends InjectedWallet {
  public type: string = 'MetaMask';
  public identityFlag: ProviderIdentityFlag = ProviderIdentityFlag.MetaMask;
  public readonly url = 'https://metamask.io';
  public readonly icon = 'https://icons-ckg.pages.dev/lz-light/wallets/metamask.svg';

  protected tryGetProvider(): EIP1193Provider | undefined {
    // Core wallet has isMetaMask === true in its provider, we need to ignore it to properly select MetaMask
    return getEIP1193Provider(this.identityFlag, {ignoreFlags: [ProviderIdentityFlag.Core]});
  }

  // MM sometimes fires `disconnect` when calling wallet_switchEthereumChain
  // https://github.com/MetaMask/metamask-extension/issues/13375
  protected override handleDisconnect: DisconnectListener = (error) => {
    if (error.code === 1013) {
      console.warn(error.message, error);
      return;
    }
    // copying because can't access property by super
    this.log.log('disconnect', {error});

    this.nativeChainId = undefined;
    this.isConnected = false;
    this.signer = undefined;
  };
}

export class CoinbaseWallet extends InjectedWallet {
  public type: string = 'CoinBase';
  public identityFlag: ProviderIdentityFlag = ProviderIdentityFlag.CoinbaseExtension;
  public readonly url = 'https://www.coinbase.com/wallet';
  public readonly icon = 'https://icons-ckg.pages.dev/lz-light/wallets/coinbase.svg';
}

export class CoreWallet extends InjectedWallet {
  public type: string = 'Core';
  public identityFlag: ProviderIdentityFlag = ProviderIdentityFlag.Core;
  public readonly url = 'https://core.app/';
  public readonly icon = 'https://icons-ckg.pages.dev/lz-light/wallets/core.svg';
}

export class TahoWallet extends InjectedWallet {
  public type: string = 'Taho';
  public identityFlag: ProviderIdentityFlag = ProviderIdentityFlag.Taho;
  public readonly url = 'https://taho.xyz/';
  public readonly icon = 'https://icons-ckg.pages.dev/lz-light/wallets/taho.svg';
}

export class DeFiWallet extends InjectedWallet {
  public type: string = 'Crypto.com DeFi Wallet';
  public identityFlag: ProviderIdentityFlag = ProviderIdentityFlag.DeFiWallet;
  public readonly url = 'https://crypto.com/us/defi-wallet';
  public readonly icon = 'https://icons-ckg.pages.dev/lz-light/wallets/defi-wallet.svg';
}

export class BraveWallet extends InjectedWallet {
  public type: string = 'Brave';
  public identityFlag: ProviderIdentityFlag = ProviderIdentityFlag.BraveWallet;
  public readonly url = 'https://brave.com/wallet/';
  public readonly icon = 'https://icons-ckg.pages.dev/lz-light/wallets/brave.svg';
  protected tryGetProvider(): EIP1193Provider | undefined {
    return getEIP1193Provider(this.identityFlag, {patchProvider: false});
  }
}

export class OKXWallet extends InjectedWallet {
  public type: string = 'OKX';
  public identityFlag: ProviderIdentityFlag = ProviderIdentityFlag.OKXWallet;
  public readonly url = 'https://www.okx.com/web3';
  public readonly icon = 'https://icons-ckg.pages.dev/lz-light/wallets/okx.svg';

  protected tryGetProvider(): EIP1193Provider | undefined {
    if (typeof window === 'undefined') return undefined;
    const okxwallet = window.okxwallet;
    if (okxwallet) return createEIP1193Provider(okxwallet);
    return undefined;
  }
}

export class PhantomWallet extends InjectedWallet {
  public type: string = 'Phantom';
  public identityFlag: ProviderIdentityFlag = ProviderIdentityFlag.Phantom;
  public readonly url = 'https://phantom.app/';
  public readonly icon = 'https://icons-ckg.pages.dev/lz-light/wallets/phantom.svg';

  protected tryGetProvider(): EIP1193Provider | undefined {
    if (typeof window === 'undefined') return undefined;
    const ethereum = window.phantom?.ethereum;
    if (ethereum && ethereum[this.identityFlag]) return createEIP1193Provider(ethereum);
    return undefined;
  }
}
