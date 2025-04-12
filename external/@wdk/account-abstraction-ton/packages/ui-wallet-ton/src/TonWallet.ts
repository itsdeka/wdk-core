import {type ChainKey, ChainType, type Stage} from '@layerzerolabs/ui-core';
import {AbstractWallet} from '@layerzerolabs/ui-wallet';
import {
  isWalletInfoCurrentlyEmbedded,
  Wallet,
  Wallet as TonWalletType,
  WalletInfoCurrentlyEmbedded,
} from '@tonconnect/sdk';
import TonConnect from '@tonconnect/sdk';
import {makeObservable} from 'mobx';
import {Address} from '@ton/ton';
import {
  parseTonAddress,
  arrayBufferToBase64,
  TonSigner as ITonSigner,
  TonTransaction,
} from '@layerzerolabs/ui-ton';
import {trimStart} from 'lodash';
import {TonConnectUI} from '@tonconnect/ui';

export class TonSigner implements ITonSigner {
  constructor(public readonly adapter: TonConnect | TonConnectUI) {}

  sendTransaction = async (payload: TonTransaction) => {
    if (!this.adapter.connected) {
      alert('Please connect wallet to send the transaction!');
    }
    try {
      const result = await this.adapter.sendTransaction({
        validUntil: Math.floor(Date.now() / 1000) + 360,
        messages: payload.messages.map((message) => ({
          address: message.address.toString(),
          amount: message.amount,
          payload: message.payload ? arrayBufferToBase64(message.payload.toBoc()) : undefined,
        })),
      });
      return result.boc;
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('Reject request')) {
          throw new Error('User rejected transaction');
        }
      }
      throw error;
    }
  };

  signTransaction<Transaction extends TonTransaction>(payload: Transaction): Promise<Transaction> {
    return Promise.resolve(payload);
  }

  getAddress(): Address {
    return parseTonAddress(this.adapter.wallet?.account.address ?? '');
  }
}

export interface TonConnectionOptions {
  iconSrc: string;
  name: string;
  stage: Stage;
  chainKey: ChainKey;
  jsBridgeKey: string;
  aboutUrl: string;
}

export class TonWallet extends AbstractWallet<unknown> {
  tonWallet?: TonWalletType = undefined;
  signer?: TonSigner = undefined;
  public readonly chainType = ChainType.TON;
  chainKey: ChainKey;

  tonConnector?: TonConnect;

  connectionPromise?: {resolve: () => void; reject: () => void};
  connectionOptions: TonConnectionOptions;

  constructor(connectionOptions: TonConnectionOptions) {
    super();
    this.connectionOptions = connectionOptions;
    this.chainKey = connectionOptions.chainKey;
    this.isAutoConnectEnabled = true;
    this.isAvailable = true;
    // console.log(parseTonAddress('0x083b7d65b01145171cfc11a39a3dcb28ae994a31947554f44e88f63ef483b3da').toString());
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
  }

  async init() {
    this.tonConnector = new TonConnect();

    this.signer = new TonSigner(this.tonConnector);

    this.tonConnector.onStatusChange((wallet) => {
      if (wallet && this.isCurrentWalletConnecting(wallet)) {
        this.tonWallet = wallet;
        this.setAddress(wallet.account.address);
        this.isConnected = true;
        if (this.connectionPromise) {
          this.connectionPromise.resolve();
        }
      } else if (this.connectionPromise) {
        this.connectionPromise.reject();
      }
    });

    try {
      await this.tonConnector.restoreConnection();
    } catch {}
  }

  setAddress(address: Address | string) {
    const parsedAddress = parseTonAddress(address);
    this.address = '0x' + trimStart(parsedAddress.toRawString(), '0:');
  }

  async getAddress(): Promise<string> {
    if (this.tonWallet) {
      return this.tonWallet.account.address;
    }
    throw new Error('Could not get address');
  }

  async getNativeChainId(): Promise<number> {
    // 1 is Mainnet, 2 is testnet
    if (this.connectionOptions.stage === 'mainnet') {
      return 1;
    }
    return 2;
  }

  get icon() {
    return this.connectionOptions.iconSrc;
  }

  get type(): string {
    return this.connectionOptions.name;
  }

  connect(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      this.connectionPromise = {
        resolve,
        reject,
      };

      if (this.tonConnector) {
        const walletsList = await this.tonConnector.getWallets(); // or use `walletsList` fetched before

        const embeddedWallet = walletsList.find(
          isWalletInfoCurrentlyEmbedded,
        ) as WalletInfoCurrentlyEmbedded;

        if (embeddedWallet) {
          this.tonConnector.connect({jsBridgeKey: embeddedWallet.jsBridgeKey});
          return;
        }

        try {
          this.tonConnector.connect({
            jsBridgeKey: this.connectionOptions.jsBridgeKey,
          });
        } catch (error) {
          if ((error as any).message.includes('WalletNotInjectedError')) {
            window.open(this.connectionOptions.aboutUrl, '_blank');
          }
        }
      }
    });
  }

  private isCurrentWalletConnecting(wallet?: Wallet | null) {
    return wallet?.device.appName
      .toLowerCase()
      .includes(this.connectionOptions.jsBridgeKey.toLowerCase());
  }

  autoConnect = async () => {
    if (!this.tonConnector) {
      await this.init();
      if (!this.tonConnector) {
        return;
      }
    }

    if (!this.isAutoConnectEnabled) throw new Error('AutoConnect is not enabled');
    try {
      if (this.tonConnector.connected && this.isCurrentWalletConnecting(this.tonConnector.wallet)) {
        this.tonWallet = this.tonConnector.wallet ?? undefined;
        if (this.tonWallet) {
          this.setAddress(this.tonWallet.account.address);
          this.isConnected = true;
        }
      }
      // await this.connect();
    } catch (e) {
      this.isAutoConnectEnabled = false;
      throw e;
    }
  };

  async disconnect(): Promise<void> {
    if (this.tonConnector?.connected) {
      await this.tonConnector.disconnect();
    }
    this.isConnected = false;
    this.address = undefined;
    this.tonWallet = undefined;
  }

  switchChain(chainKey: ChainKey): Promise<void> {
    this.chainKey = chainKey;
    // Don't worry about this. Ton wallets will only be used on Ton chain
    return Promise.resolve(undefined);
  }
}
