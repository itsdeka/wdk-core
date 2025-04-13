import { ChainKey } from '@layerzerolabs/ui-core';
import { SolanaSigner as SolanaSigner$1, SolanaTransaction } from '@layerzerolabs/ui-solana';
import { AbstractWallet } from '@layerzerolabs/ui-wallet';
import { SignerWalletAdapter, BaseWalletAdapter, WalletName, WalletReadyState, SupportedTransactionVersions, TransactionOrVersionedTransaction, SendTransactionOptions } from '@solana/wallet-adapter-base';
import { Keypair, PublicKey, Connection } from '@solana/web3.js';

declare class SolanaSigner implements SolanaSigner$1 {
    readonly adapter: SignerWalletAdapter;
    constructor(adapter: SignerWalletAdapter);
    sendTransaction: SolanaSigner$1['sendTransaction'];
    signTransaction<Transaction extends SolanaTransaction>(payload: Transaction): Promise<Transaction>;
}
declare class SolanaWallet extends AbstractWallet<SolanaSigner> {
    readonly adapter: SignerWalletAdapter;
    network: 'mainnet' | 'testnet' | 'sandbox';
    signer?: SolanaSigner | undefined;
    getAddress(): Promise<string>;
    getNativeChainId(): Promise<number>;
    get icon(): string;
    get type(): string;
    readonly chainType: "solana";
    constructor(adapter: SignerWalletAdapter, network: 'mainnet' | 'testnet' | 'sandbox');
    private subscribe;
    autoConnect: () => Promise<void>;
    protected update: () => void;
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
    switchChain: (chainKey: ChainKey) => Promise<void>;
    get chainKey(): ChainKey | undefined;
}

declare class TestWalletAdapter extends BaseWalletAdapter implements SignerWalletAdapter {
    name: WalletName<"Test Wallet">;
    url: string;
    icon: string;
    readyState: WalletReadyState;
    supportedTransactionVersions?: SupportedTransactionVersions;
    protected _state: 'connected' | 'disconnected' | 'connecting';
    protected _keypair: Keypair;
    get publicKey(): PublicKey | null;
    get connecting(): boolean;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    sendTransaction(transaction: TransactionOrVersionedTransaction<this['supportedTransactionVersions']>, connection: Connection, options?: SendTransactionOptions | undefined): Promise<string>;
    constructor(config: {
        keypair: Keypair;
    });
    signTransaction<T extends TransactionOrVersionedTransaction<this['supportedTransactionVersions']>>(transaction: T): Promise<T>;
    signAllTransactions<T extends TransactionOrVersionedTransaction<this['supportedTransactionVersions']>>(transactions: T[]): Promise<T[]>;
}

export { SolanaWallet, TestWalletAdapter };
