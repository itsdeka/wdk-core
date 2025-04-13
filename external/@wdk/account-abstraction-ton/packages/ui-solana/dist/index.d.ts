import { Transaction as Transaction$1, BalanceProvider, Currency, Token, CurrencyAmount } from '@layerzerolabs/ui-core';
import { Transaction, VersionedTransaction, SendOptions, Connection, RpcResponseAndContext, SignatureResult, SimulatedTransactionResponse, TransactionInstruction, PublicKey, AddressLookupTableAccount } from '@solana/web3.js';

declare function isSolanaAddress(address: string): boolean;

type SolanaTransaction = Transaction | VersionedTransaction;
interface SolanaSubmitOptions extends SendOptions {
    connection: Connection;
}
interface SolanaSignOptions {
}
type SolanaSigner = {
    sendTransaction(payload: SolanaTransaction, options: SolanaSubmitOptions): Promise<{
        hash: string;
    }>;
    signTransaction<Transaction extends SolanaTransaction>(payload: Transaction, options: SolanaSignOptions): Promise<Transaction>;
};

declare function createTransaction(populatedTransaction: SolanaTransaction, options: SolanaSubmitOptions): Transaction$1<SolanaSigner>;

declare const getErrorFromRPCResponse: (rpcResponse: RpcResponseAndContext<SignatureResult | SimulatedTransactionResponse>) => void;
declare const getSimulationComputeUnits: (connection: Connection, instructions: Array<TransactionInstruction>, payer: PublicKey, lookupTables: Array<AddressLookupTableAccount> | []) => Promise<number | null>;

declare class BalanceProvider__solana implements BalanceProvider {
    private readonly connection;
    protected config: {
        cacheTime?: number;
        cacheSize?: number;
    };
    constructor(connection: Connection, config?: {
        cacheTime?: number;
        cacheSize?: number;
    });
    supports(token: Currency): boolean;
    protected getTokenBalancesByMint(address: string): Promise<Record<string, ParsedData>>;
    protected getTokenBalance(token: Token, address: string): Promise<CurrencyAmount>;
    getBalance(currency: Currency, address: string): Promise<CurrencyAmount>;
    protected getNativeBalance(address: string): Promise<number>;
}
interface ParsedData {
    type: 'account' | string;
    info: {
        isNative: boolean;
        mint: string;
        owner: string;
        state: 'initialized' | string;
        tokenAmount: {
            amount: string;
            decimals: number;
        };
    };
}

interface SolanaNetworkConfig {
    endpoint: string;
}

export { BalanceProvider__solana, SolanaNetworkConfig, SolanaSignOptions, SolanaSigner, SolanaSubmitOptions, SolanaTransaction, createTransaction, getErrorFromRPCResponse, getSimulationComputeUnits, isSolanaAddress };
