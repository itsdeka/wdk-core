import {type Wallet, AbstractWallet} from '@layerzerolabs/ui-wallet';
import {action, computed, flow, makeObservable} from 'mobx';
import {type ChainKey, assert} from '@layerzerolabs/ui-core';
import {type MainWalletBase, State, type WalletAccount} from '@cosmos-kit/core';
import type {CosmosSigner} from './CosmosSigner';

export const defaultCosmosWalletConfig = {
  defaultChainKey: 'cosmoshub',
};

export type BaseWallet = Wallet<CosmosSigner>;
export type CosmosWalletConfig<TWallet extends MainWalletBase = MainWalletBase> = {
  wallet: TWallet;
  defaultChainKey?: ChainKey;
};
export abstract class CosmosWallet<
  TWallet extends MainWalletBase = MainWalletBase,
> extends AbstractWallet<CosmosSigner> {
  public readonly chainType = 'cosmos' as any;
  public abstract type: string;
  public chainKey: ChainKey | undefined = undefined;
  protected wallet: TWallet;
  protected unsubscribe: () => void = noop;

  get url() {
    for (const item of this.wallet.walletInfo?.downloads ?? []) {
      // todo: decide which link to use
      return item.link;
    }
  }

  get icon() {
    const logo = this.wallet.walletInfo.logo;
    return typeof logo === 'string' ? logo : logo?.major;
  }
  protected log = console;
  protected state: State = State.Init;

  constructor(protected readonly config: CosmosWalletConfig<TWallet>) {
    super();
    makeObservable(this, {
      isAvailable: true,
      chainKey: true,
      isConnected: true,
      isConnecting: true,
      isSwitchingChain: true,
      publicKey: true,
      nativeChainId: true,
      address: true,
      signer: computed,
    });
    this.wallet = config.wallet;
    this.update();
  }

  protected subscribe(): void {
    if (!this.wallet.emitter) return;
    const events = [
      //
      'broadcast_client',
      'broadcast_env',
      'sync_connect',
      'sync_disconnect',
    ];
    for (const event of events) {
      this.wallet.emitter.off(event, this.update); // ensure no duplicate listeners
      this.wallet.emitter.on(event, this.update);
    }
  }

  protected update = action(() => {
    this.isConnected = this.wallet.isActive;
    this.isAvailable = this.wallet.isWalletNotExist === false;
    this.isConnecting = this.wallet.isWalletConnecting;
  });

  connect: BaseWallet['connect'] = flow(
    function* (this: CosmosWallet, chainKey: ChainKey | undefined) {
      assert(this.isConnected === false, 'Wallet is already connected.');
      assert(this.isConnecting === false, 'Wallet is already connecting.');
      assert(this.isAvailable === true, 'Wallet is not available.');
      assert(this.wallet, 'Missing wallet property');
      chainKey = chainKey ?? this.config.defaultChainKey ?? 'cosmoshub';

      try {
        this.isConnecting = true;
        this.subscribe();
        yield this.wallet.connect(true);
        const account: WalletAccount = yield this.wallet.client.getAccount!(chainKey);

        // same chainKey used for both
        this.nativeChainId = chainKey;
        this.chainKey = chainKey;

        this.isConnecting = false;
        this.address = account.address;
        this.publicKey = account.pubkey.toString();
        this.isConnected = true;
        this.isAutoConnectEnabled = true;
      } finally {
        this.isConnecting = false;
      }
    }.bind(this),
  );

  disconnect: BaseWallet['disconnect'] = flow(
    function* (this: CosmosWallet) {
      yield this.wallet.disconnect(true);
      this.isConnected = false;
      this.address = undefined;
      this.nativeChainId = undefined;
      this.isAutoConnectEnabled = false;
    }.bind(this),
  );

  switchChain: BaseWallet['switchChain'] = flow(
    function* (this: CosmosWallet, chainKey: ChainKey) {
      throw new Error('Not implemented.');
    }.bind(this),
  );

  async getNativeChainId(): Promise<number> {
    throw new Error('Not implemented.');
  }

  async getAddress(): Promise<string> {
    assert(this.chainKey, 'Wallet is not connected to known chainKey.');
    assert(this.wallet.client, 'Missing wallet.client property');
    const account = await this.wallet.client.getAccount!(this.chainKey);
    return account.address;
  }

  public autoConnect = async () => {
    if (!this.isAutoConnectEnabled) return Promise.reject();
    await this.wallet.connect(true);
    if (this.isAvailable) {
      await this.connect();
    }
  };

  // @ts-ignore
  get signer(): CosmosSigner {
    return this.wallet;
  }
  set signer(value: unknown) {
    // pass
  }
}

const noop = () => {};
