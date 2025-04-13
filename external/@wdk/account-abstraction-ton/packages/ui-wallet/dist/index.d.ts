import { ChainKey, ChainType } from '@layerzerolabs/ui-core';

interface Wallet<Signer> {
    isAvailable: boolean;
    isConnected: boolean;
    isConnecting: boolean;
    isSwitchingChain: boolean;
    type: string;
    address?: string;
    publicKey?: string;
    chainKey?: ChainKey;
    chainType: ChainType;
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

declare abstract class AbstractWallet<Signer> implements Wallet<Signer> {
    abstract chainType: ChainType;
    abstract readonly type: string;
    abstract chainKey?: ChainKey | undefined;
    abstract connect(): Promise<void>;
    abstract disconnect(): Promise<void>;
    abstract autoConnect(): Promise<void>;
    abstract switchChain(chainKey: ChainKey): Promise<void>;
    abstract getNativeChainId(): Promise<number>;
    abstract getAddress(): Promise<string>;
    abstract signer?: Signer | undefined;
    isConnected: boolean;
    isAvailable: boolean;
    isConnecting: boolean;
    isSwitchingChain: boolean;
    publicKey?: string | undefined;
    address?: string | undefined;
    nativeChainId?: string | number | undefined;
    protected get autoConnectStorageKey(): string;
    protected get isAutoConnectEnabled(): boolean;
    protected set isAutoConnectEnabled(enabled: boolean);
    getChainKey(): Promise<string | undefined>;
}

interface ActiveWallet<Signer> extends Wallet<Signer> {
    address: string;
    isConnected: true;
    chainKey: ChainKey;
    signer: Signer;
}

declare abstract class WalletError extends Error {
    abstract name: string;
    abstract shortMessage: string;
}
declare class UserRejectedRequestError extends WalletError {
    name: string;
    shortMessage: string;
}
declare class SwitchChainError extends WalletError {
    name: string;
    shortMessage: string;
}
declare class SyncWalletError extends WalletError {
    name: string;
    shortMessage: string;
}

declare function assertWallet(wallet: Wallet<unknown>, expected: {
    chainKey: string;
    address: string;
}): Promise<void>;

export { AbstractWallet, ActiveWallet, SwitchChainError, SyncWalletError, UserRejectedRequestError, Wallet, WalletError, assertWallet };
