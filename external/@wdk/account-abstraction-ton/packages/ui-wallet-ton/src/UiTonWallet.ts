import {TonConnectionOptions, TonSigner} from './TonWallet';
import {TonConnectUI} from '@tonconnect/ui';
import {AbstractWallet} from '@layerzerolabs/ui-wallet';
import {ChainKey, ChainType} from '@layerzerolabs/ui-core';
import {Wallet as TonWalletType} from '@tonconnect/sdk';
import {makeObservable} from 'mobx';

export class UiTonWallet extends AbstractWallet<unknown> {
  tonWallet?: TonWalletType = undefined;
  signer?: TonSigner = undefined;
  public readonly chainType = ChainType.TON;
  chainKey: ChainKey;

  tonConnectUI: TonConnectUI;
  connectionOptions: TonConnectionOptions;
  isAvailable = true;

  protected get isAutoConnectEnabled(): boolean {
    return true;
  }

  constructor(connectionOptions: TonConnectionOptions) {
    super();
    this.chainKey = connectionOptions.chainKey;
    this.connectionOptions = connectionOptions;

    this.tonConnectUI = new TonConnectUI({
      manifestUrl: `https://lz-static-assets.s3.us-east-1.amazonaws.com/metadata/usdt/tonconnect-manifest.json`,
    });
    this.signer = new TonSigner(this.tonConnectUI);

    makeObservable(this, {
      isAvailable: true,
      chainKey: true,
      isConnected: true,
      isConnecting: true,
      isSwitchingChain: true,
      publicKey: true,
      nativeChainId: true,
      address: true,
      signer: true,
    });

    this.autoConnect();
  }

  get icon() {
    return this.connectionOptions.iconSrc;
  }

  get type(): string {
    return this.connectionOptions.name;
  }

  override connect(): Promise<void> {
    return new Promise(async (resolve, reject) => {
      this.isConnecting = true;
      const {modal} = this.tonConnectUI;
      const unsubscribe = modal.onStateChange((state) => {
        if (state.status === 'closed') {
          unsubscribe();
          if (this.tonConnectUI.wallet) {
            this.tonWallet = this.tonConnectUI.wallet;
            this.address = this.tonWallet.account.address;
            this.isConnected = true;
          } else {
            this.isConnected = false;
          }
          this.isConnecting = false;

          resolve();
        }
      });
      await this.tonConnectUI.openModal();
    });
  }

  autoConnect = async () => {
    await this.tonConnectUI.connectionRestored;
    try {
      if (this.tonConnectUI.connected) {
        if (this.tonConnectUI.wallet) {
          this.tonWallet = this.tonConnectUI.wallet;
          this.address = this.tonWallet.account.address;
          this.isConnected = true;
        }
      } else {
        await this.tonConnectUI.disconnect();
      }
      // await this.connect();
    } catch (e) {
      console.log('error', e);
      throw e;
    }
  };

  async disconnect(): Promise<void> {
    if (this.tonConnectUI?.connected) {
      await this.tonConnectUI.disconnect();
    }
    this.isConnected = false;
    this.address = undefined;
    this.tonWallet = undefined;
  }

  async init(): Promise<void> {}

  getAddress(): Promise<string> {
    return Promise.resolve('');
  }

  getNativeChainId(): Promise<number> {
    return Promise.resolve(0);
  }

  switchChain(chainKey: string): Promise<void> {
    return Promise.resolve(undefined);
  }
}
