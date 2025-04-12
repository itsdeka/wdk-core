import type {ChainKey, ChainType} from '@layerzerolabs/ui-core';

export interface Wallet<Signer> {
  isAvailable: boolean;
  isConnected: boolean;
  isConnecting: boolean;
  isSwitchingChain: boolean;
  // eg MetaMask
  type: string;
  address?: string;
  publicKey?: string;
  chainKey?: ChainKey;
  chainType: ChainType;
  // native chain id eg: evm chain id
  nativeChainId?: number | string;
  signer?: Signer;
  url?: string;
  icon?: string;
  connect(chainKey?: ChainKey): Promise<void>;
  disconnect(): Promise<void>;
  autoConnect(): Promise<void>;
  switchChain(chainKey: string): Promise<void>;
  getChainKey(): Promise<ChainKey | string | undefined>;
  getNativeChainId(): Promise<number>;
  getAddress(): Promise<string>;
  supportsChain?(chainKey: ChainKey): Promise<boolean>;
}
