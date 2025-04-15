export type Contract = {
  parameter: {
    type_url: string;
    value: Record<string, unknown>;
  };
  type: string;
};

export type Transaction = {
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

export type SignedTransaction = Transaction & {signature: string[]};

export type Signer = {
  signTransaction(transaction: Transaction, privateKey?: string): Promise<SignedTransaction>;
};
