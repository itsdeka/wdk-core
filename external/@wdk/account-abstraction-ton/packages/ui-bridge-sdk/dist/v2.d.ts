import { G as GetUnclaimedInput, a as GetUnclaimedResult, C as ClaimInput } from './validateInput-e9cf7271.js';
export { B as BridgeApi, b as BridgeMode, d as BridgeOption, e as BridgeOptions, f as GetDurationInput, g as GetDurationResult, c as GetOptionsInput, h as GetRouteInput, j as GetRouteResult, P as PartialTransferInput, i as RejectedRoute, R as ResolvedRoute, S as Seconds, T as TransferInput, v as validateInput } from './validateInput-e9cf7271.js';
import { Currency, Transaction } from '@layerzerolabs/ui-core';

interface ClaimApi<Signer = unknown> {
    supports(token: Currency): boolean;
    getUnclaimed(input: GetUnclaimedInput): Promise<GetUnclaimedResult>;
    claim(input: ClaimInput): Promise<Transaction<Signer>>;
}

export { ClaimApi, ClaimInput, GetUnclaimedInput, GetUnclaimedResult };
