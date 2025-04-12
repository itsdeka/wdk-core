import type {Currency, Transaction} from '@layerzerolabs/ui-core';
import type {ClaimInput, GetUnclaimedInput, GetUnclaimedResult} from './types';

export interface ClaimApi<Signer = unknown> {
  supports(token: Currency): boolean;
  getUnclaimed(input: GetUnclaimedInput): Promise<GetUnclaimedResult>;
  claim(input: ClaimInput): Promise<Transaction<Signer>>;
}
