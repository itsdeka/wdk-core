import { a as BridgeFeeBase, b as BridgeOutput } from './validateInput-2f503262.js';
export { A as ApproveInput, B as BridgeApi, k as BridgeMode, m as BridgeOption, l as BridgeOptions, C as ClaimInput, i as GetAllowanceInput, e as GetDurationInput, f as GetDurationResult, g as GetExtraGasInput, d as GetLimitInput, G as GetMessageFeeInput, h as GetOptionsInput, c as GetOutputInput, j as GetUnclaimedInput, I as IsRegisteredInput, P as PartialTransferInput, R as RegisterInput, S as Seconds, T as TransferInput, v as validateInput } from './validateInput-2f503262.js';
import { CurrencyAmount, Currency } from '@layerzerolabs/ui-core';

declare function validateOutput<BridgeFee extends BridgeFeeBase>(srcAmount: CurrencyAmount, dstToken: Currency, quote: BridgeOutput<BridgeFee>): void;

export { BridgeFeeBase, BridgeOutput, validateOutput };
