import {type ChainKey, getNetworkByNativeChainId} from '@layerzerolabs/ui-core';
import {AbstractWallet} from '@layerzerolabs/ui-wallet';
import type {Signer, Wallet} from 'ethers';
import {action, makeObservable, runInAction} from 'mobx';

export class EvmDebugWallet extends AbstractWallet<Signer> {
  readonly chainType = 'evm';
  readonly type = 'debug';
  chainKey: ChainKey | undefined = undefined;
  isAvailable = true;
  isConnected = false;
  nativeChainId: number | undefined = undefined;
  address: string | undefined = undefined;
  readonly signer: Signer;
  constructor(protected wallet: Wallet) {
    super();
    makeObservable(this, {
      isConnected: true,
      isAvailable: true,
      address: true,
      nativeChainId: true,
      chainKey: true,
      connect: action,
      disconnect: action,
    });
    this.signer = wallet;
  }
  async connect(): Promise<void> {
    try {
      runInAction(() => (this.isConnecting = true));
      const [nativeChainId, address] = await Promise.all([
        this.getNativeChainId(),
        this.getAddress(),
      ]);
      runInAction(() => {
        this.address = address;
        this.nativeChainId = nativeChainId;
        this.chainKey = getNetworkByNativeChainId('evm', this.nativeChainId).chainKey;

        this.isConnecting = false;
        this.isConnected = true;
      });
    } catch {
      runInAction(() => {
        this.isConnecting = false;
        this.isConnected = false;
      });
    }
  }
  async disconnect(): Promise<void> {
    this.isConnected = false;
  }
  async autoConnect(): Promise<void> {
    this.connect();
  }
  async switchChain(chainKey: string): Promise<void> {
    if (this.chainKey !== chainKey) {
      throw new Error('Method not implemented.');
    }
  }
  async getNativeChainId(): Promise<number> {
    return (await this.wallet.provider.getNetwork()).chainId;
  }
  async getAddress(): Promise<string> {
    return this.wallet.getAddress();
  }
}
