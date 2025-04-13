import * as mobx_dist_internal from 'mobx/dist/internal';
import { Transaction, TransactionResult, ChainKey } from '@layerzerolabs/ui-core';
import { AbstractWallet } from '@layerzerolabs/ui-wallet';
import { Adapter, Network } from '@tronweb3/tronwallet-abstract-adapter';

type ChainKeyToTron = Partial<Record<ChainKey, string>>;
declare class TronWallet<TAdapter extends NetworkAdapter = NetworkAdapter> extends AbstractWallet<TAdapter> {
    protected adapter: TAdapter;
    protected chainKeyToTron: ChainKeyToTron;
    chainType: string;
    type: string;
    chainKey?: string | undefined;
    publicKey: undefined;
    storageKey: string;
    get icon(): string;
    get url(): string;
    constructor(adapter: TAdapter, chainKeyToTron?: ChainKeyToTron);
    signAndSubmit(transactionRequest: Transaction<TAdapter>, _?: any): Promise<TransactionResult>;
    protected subscribe(): void;
    handleConnect: () => Promise<void>;
    update(): Promise<void>;
    connect: () => mobx_dist_internal.CancellablePromise<void>;
    disconnect(): Promise<void>;
    autoConnect(): Promise<void>;
    switchChain(chainKey: ChainKey): Promise<void>;
    getNativeChainId(): Promise<number>;
    getAddress(): Promise<string>;
    get signer(): TAdapter;
}
interface NetworkAdapter extends Adapter {
    network(): Promise<Network>;
}

declare function createTronWallet(adapter: NetworkAdapter): TronWallet<NetworkAdapter>;

export { NetworkAdapter, TronWallet, createTronWallet };
