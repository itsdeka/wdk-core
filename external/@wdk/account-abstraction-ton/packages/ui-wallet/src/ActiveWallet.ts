import type {ChainKey} from '@layerzerolabs/ui-core';
import type {Wallet} from './Wallet';

export interface ActiveWallet<Signer> extends Wallet<Signer> {
  address: string;
  isConnected: true;
  chainKey: ChainKey;
  signer: Signer;
}
