import {tryGetNetworkByNativeChainId, type ChainKey, type ChainType} from '@layerzerolabs/ui-core';
import type {Wallet} from './Wallet';

export abstract class AbstractWallet<Signer> implements Wallet<Signer> {
  public abstract chainType: ChainType;
  public abstract readonly type: string;
  public abstract chainKey?: ChainKey | undefined;
  public abstract connect(): Promise<void>;
  public abstract disconnect(): Promise<void>;
  public abstract autoConnect(): Promise<void>;
  public abstract switchChain(chainKey: ChainKey): Promise<void>;
  public abstract getNativeChainId(): Promise<number>;
  public abstract getAddress(): Promise<string>;
  public abstract signer?: Signer | undefined;

  public isConnected: boolean = false;
  public isAvailable: boolean = false;
  public isConnecting: boolean = false;
  public isSwitchingChain: boolean = false;
  public publicKey?: string | undefined = undefined;
  public address?: string | undefined = undefined;
  public nativeChainId?: string | number | undefined = undefined;

  protected get autoConnectStorageKey(): string {
    return ['wallet', this.chainType, this.type, 'autoconnect'].join(':');
  }

  protected get isAutoConnectEnabled(): boolean {
    if (typeof localStorage === 'undefined') return false;
    return localStorage.getItem(this.autoConnectStorageKey) === 'true';
  }

  protected set isAutoConnectEnabled(enabled: boolean) {
    if (typeof localStorage === 'undefined') return;
    if (enabled) {
      localStorage.setItem(this.autoConnectStorageKey, 'true');
    } else {
      localStorage.removeItem(this.autoConnectStorageKey);
    }
  }

  public async getChainKey(): Promise<string | undefined> {
    const nativeChainId = await this.getNativeChainId();
    return tryGetNetworkByNativeChainId(this.chainType, nativeChainId)?.chainKey;
  }
}
