import type {AdapterParams, FeeQuote, Transaction, ChainKey} from '@layerzerolabs/ui-core';

import type {NftAsset} from '../types/NftAsset';
import type {Amount} from '../types/Amount';
import type {NftCollection} from '../types/NftCollection';

export type OnftTransferInput = {
  assets: Amount<NftAsset>[];
  srcChainKey: ChainKey;
  dstChainKey: ChainKey;
  srcAddress: string;
  dstAddress: string;
  fee: FeeQuote;
  adapterParams: AdapterParams;
};

export type OnftInflightTransaction = {
  assets: Amount<NftAsset>[];
  srcChainKey: ChainKey;
  dstChainKey: ChainKey;
  srcTxHash: string;
  srcTxTimestamp: number;
};

export interface OnftBridgeApi<Signer> {
  supports(collection: NftCollection): boolean;
  getMessageFee(
    assets: NftAsset[],
    dstChainId: ChainKey,
    adapterParams: AdapterParams,
  ): Promise<FeeQuote>;
  getAssets(collection: NftCollection, account: string): Promise<Amount<NftAsset>[]>;
  getExtraGas(tokens: NftAsset[], dstChainId: ChainKey): Promise<number>;
  // transactions
  transfer(input: OnftTransferInput): Promise<Transaction<Signer>>;
  isApproved(assets: NftAsset[], owner: string): Promise<boolean>;
  approve(assets: NftAsset[]): Promise<Transaction<Signer>>;
  getInflight(account: string): Promise<OnftInflightTransaction[]>;
}
