import { Transaction as Transaction$1, ChainKey } from '@layerzerolabs/ui-core';
import { TronWeb } from 'tronweb';

type HexString = `0x${string}`;
declare function toHexAddress(address: string): HexString;

type Contract = {
    parameter: {
        type_url: string;
        value: Record<string, unknown>;
    };
    type: string;
};
type Transaction = {
    visible: boolean;
    txID: string;
    raw_data: {
        contract: Contract[];
        ref_block_bytes: string;
        ref_block_hash: string;
        expiration: number;
        fee_limit: number;
        timestamp: number;
    };
    raw_data_hex: string;
    signature?: string[];
    [key: string]: unknown;
};
type SignedTransaction = Transaction & {
    signature: string[];
};
type Signer$1 = {
    signTransaction(transaction: Transaction, privateKey?: string): Promise<SignedTransaction>;
};

type Signer = Signer$1;
interface CreateTransactionOptions {
    chainKey?: ChainKey;
    tronWeb: TronWeb;
}
declare function createTransaction<PopulatedTransaction extends {
    transaction: Transaction;
}>(populatedTransaction: PopulatedTransaction, options: CreateTransactionOptions): Transaction$1<Signer, PopulatedTransaction>;

export { Signer$1 as Signer, createTransaction, toHexAddress };
