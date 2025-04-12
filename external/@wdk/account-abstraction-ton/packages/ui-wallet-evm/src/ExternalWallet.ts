import type {EIP1193Provider} from '@web3-onboard/common';
import {EvmWallet} from './EvmWallet';
import {action, computed, makeObservable, observable} from 'mobx';

// To be used with external wallet integrations
// const externalWallet = new ExternalWallet();
// externalWallet.setProvider('MetaMask', EIP1193Provider)
export class ExternalWallet extends EvmWallet {
  public type: string = 'external';
  public autoConnect = () => Promise.reject();

  public get isAutoConnectEnabled() {
    return false;
  }

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
      type: true,
      setProvider: action,
      set: action,
    });
  }

  // todo:
  // discuss whether have `setProvider` or `update({type:'MetaMask', provider: Provider, nativeChainId: 1})`
  set(args: {
    type?: string;
    provider?: EIP1193Provider;
    nativeChainId?: number;
    address?: string;
    connected?: boolean;
    isConnecting?: boolean;
  }) {
    Object.assign(this, args);
    if (args.provider) {
      this.subscribe(args.provider);
    } else {
      this.unsubscribe();
    }
  }
  setProvider(walletType: string, provider: EIP1193Provider) {
    this.type = walletType;
    this.provider = provider;
    //
    this.isConnected = false;
    this.isConnecting = false;
    //
    this.subscribe(provider);
    this.connect();
  }
}
