import {
  type ChainKey,
  ChainType,
  tryGetNetworkByNativeChainId,
  waitFor,
  assert,
} from '@layerzerolabs/ui-core';
import type {SolanaSigner as ISolanaSigner, SolanaTransaction} from '@layerzerolabs/ui-solana';
import {AbstractWallet} from '@layerzerolabs/ui-wallet';
import {type SignerWalletAdapter, WalletReadyState} from '@solana/wallet-adapter-base';
import {action, computed, flow, makeObservable, transaction} from 'mobx';

enum NativeChainId {
  MAINNET = 1,
  TESTNET = 2,
}

class SolanaSigner implements ISolanaSigner {
  constructor(public readonly adapter: SignerWalletAdapter) {}
  sendTransaction: ISolanaSigner['sendTransaction'] = async (
    payload: SolanaTransaction,
    {connection, ...options},
  ) => {
    this.adapter.sendTransaction(payload, connection, options);
    const hash = await this.adapter.sendTransaction(payload, connection);
    return {hash};
  };

  signTransaction<Transaction extends SolanaTransaction>(
    payload: Transaction,
  ): Promise<Transaction> {
    return this.adapter.signTransaction(payload);
  }
}

export class SolanaWallet extends AbstractWallet<SolanaSigner> {
  public signer?: SolanaSigner | undefined = undefined;
  async getAddress(): Promise<string> {
    const address = this.signer?.adapter.publicKey?.toString();
    if (address) return address;
    throw new Error('Could not get address');
  }

  async getNativeChainId(): Promise<number> {
    return networkToNativeChainId(this.network);
  }

  get icon() {
    return this.adapter.icon;
  }

  get type(): string {
    return this.adapter.name;
  }

  public readonly chainType = ChainType.SOLANA;

  constructor(
    public readonly adapter: SignerWalletAdapter,
    public network: 'mainnet' | 'testnet' | 'sandbox',
  ) {
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
      signer: true,
    });

    this.signer = new SolanaSigner(adapter);
    this.subscribe();
    // in case wallet already updated it will not emit readyStateChange
    this.update();
  }

  private subscribe() {
    this.adapter.addListener('connect', this.update);
    this.adapter.addListener('disconnect', this.update);
    this.adapter.addListener('readyStateChange', this.update);
  }

  public autoConnect: () => Promise<void> = async () => {
    if (!this.isAutoConnectEnabled) return Promise.reject();
    try {
      await waitFor(() => this.adapter.readyState === WalletReadyState.Installed, {timeout: 3000});
      await this.connect();
    } catch (e) {
      this.isAutoConnectEnabled = false;
      throw e;
    }
  };

  // must be public because of makeObservable
  protected update = action(() => {
    this.publicKey = this.adapter.publicKey?.toString();
    this.address = this.publicKey;
    this.isConnected = this.adapter.connected;
    this.isConnecting = this.adapter.connected ? false : this.adapter.connecting;
    this.isAvailable = this.adapter.readyState === WalletReadyState.Installed;
    // todo: detect native chain id
    this.nativeChainId = networkToNativeChainId(this.network);
    this.isAutoConnectEnabled = this.isAutoConnectEnabled || this.isConnected;
  });

  connect: () => Promise<void> = flow(
    function* (this: SolanaWallet) {
      assert(this.isConnected === false);
      assert(this.isConnecting === false);
      this.isConnecting = true;
      try {
        yield this.adapter.connect();
        if (!this.isConnected) {
          // in case the wallet didn't sync
          this.update();
        }
      } finally {
        this.isConnecting = false;
      }
    }.bind(this),
  );

  disconnect: () => Promise<void> = flow(
    function* (this: SolanaWallet) {
      this.isAutoConnectEnabled = false;
      yield this.adapter.disconnect();
    }.bind(this),
  );

  switchChain = async (chainKey: ChainKey): Promise<void> => {
    this.network = chainKeyToNetwork(chainKey);
  };

  public get chainKey(): ChainKey | undefined {
    return tryGetNetworkByNativeChainId(this.chainType, this.nativeChainId)?.chainKey;
  }
}

function chainKeyToNetwork(chainKey: string): 'mainnet' | 'testnet' {
  switch (chainKey) {
    case 'solana':
      return 'mainnet';
    case 'solana-testnet':
      return 'testnet';
    default:
      throw new Error(`Unsupported network ${chainKey}`);
  }
}

function networkToNativeChainId(network: string) {
  switch (network) {
    case 'mainnet':
      return NativeChainId.MAINNET;
    case 'testnet':
      return NativeChainId.TESTNET;
    default:
      throw new Error('Unsupported network');
  }
}
