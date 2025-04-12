import type {Store as Mipd} from 'mipd';
import {EvmWallet} from './EvmWallet';
import {makeObservable, computed, observable, runInAction} from 'mobx';
import type {DisconnectListener} from '@web3-onboard/common';
import {patchEIP1193Provider} from './utils';

const isBrowser = typeof window !== 'undefined';

// EIP-6963: Multi Injected Provider Discovery
export class MipdWallet extends EvmWallet {
  public accounts = [];

  public autoConnect: () => Promise<void> = async () => {
    if (!this.isAutoConnectEnabled) return Promise.reject();
    await this.connect();
  };
  constructor(
    public info: {
      name: string;
      icon: string;
      url?: string;
    },
    protected mipd: Mipd,
  ) {
    super();

    makeObservable(this, {
      type: computed,
      info: observable.ref,
      icon: computed,
      url: computed,
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

    if (isBrowser) {
      this.register();
    }
  }

  // simplistic approach
  protected register() {
    this.mipd.subscribe(
      (_, meta) => {
        runInAction(() => {
          const providerDetails = meta?.added?.find((p) => p.info.name === this.info.name);
          if (!providerDetails) return;
          const {provider, info} = providerDetails;
          //
          patchEIP1193Provider(provider);
          this.isAvailable = true;
          this.info = info;
          this.provider = provider;
          this.subscribe(this.provider);
        });
      },
      {emitImmediately: true},
    );
  }

  get url() {
    return this.info.url;
  }

  get type() {
    return this.info.name;
  }

  get icon() {
    return this.info.icon;
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
