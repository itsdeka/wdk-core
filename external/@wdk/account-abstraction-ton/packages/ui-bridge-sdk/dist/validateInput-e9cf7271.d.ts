import { Currency, CurrencyAmount, ChainKey, MessageFee, Transaction } from '@layerzerolabs/ui-core';

type BridgeMode = string;
type GetOptionsInput = {
    srcToken: Currency;
    dstToken: Currency;
};
interface BridgeOption {
    mode: BridgeMode;
    nativeDrop?: {
        maxAmount: CurrencyAmount;
        isFixed: boolean;
    };
}
interface TransferInput {
    mode: BridgeMode;
    srcChainKey: ChainKey;
    dstChainKey: ChainKey;
    srcToken: Currency;
    dstToken: Currency;
    srcAmount: CurrencyAmount;
    dstAmountMin: CurrencyAmount;
    srcAddress: string;
    dstAddress: string;
    dstNativeAmount: CurrencyAmount;
}
interface BridgeOptions {
    options: BridgeOption[];
}
type PartialTransferInput<RequiredKeys extends keyof TransferInput> = Partial<TransferInput> & Required<Pick<TransferInput, RequiredKeys>>;
type Seconds = number;
type GetDurationInput = PartialTransferInput<'srcToken' | 'dstToken' | 'mode'>;
type GetDurationResult = {
    estimated: Seconds;
};
interface GetRouteInput {
    mode: BridgeMode;
    srcToken: Currency;
    dstToken: Currency;
    srcAddress: string;
    dstAddress: string;
    srcAmount: CurrencyAmount;
    dstAmountMin: CurrencyAmount;
    dstNativeAmount: CurrencyAmount;
}
interface ResolvedRoute {
    mode: BridgeMode;
    srcAddress: string;
    dstAddress: string;
    srcToken: Currency;
    dstToken: Currency;
    srcAmount: CurrencyAmount;
    dstAmount: CurrencyAmount;
    dstAmountMin: CurrencyAmount;
    dstNativeAmount: CurrencyAmount;
    duration: {
        estimated: number;
    };
    srcAmountMax: CurrencyAmount;
    allowance: CurrencyAmount;
    error?: undefined;
    messageFee: MessageFee;
    gasCost: CurrencyAmount;
    option: BridgeOption;
}
interface RejectedRoute extends Partial<Omit<ResolvedRoute, 'error'>> {
    error: Error;
}
type GetRouteResult = ResolvedRoute | RejectedRoute;
interface GetUnclaimedInput {
    token: Currency;
    owner: string;
}
type GetUnclaimedResult = CurrencyAmount;
interface ClaimInput {
    token: Currency;
    owner: string;
}

interface BridgeApi<Signer = unknown> {
    getOptions(input: GetOptionsInput): Promise<BridgeOptions>;
    getRoute(input: GetRouteInput): Promise<GetRouteResult>;
    getDuration?(input: GetDurationInput): Promise<GetDurationResult>;
    approve?(input: TransferInput): Promise<Transaction<Signer>>;
    transfer(input: TransferInput): Promise<Transaction<Signer>>;
    supportsTransfer(srcToken: Currency, dstToken: Currency): boolean;
}

declare function validateInput(input: TransferInput): asserts input is TransferInput;

export { BridgeApi as B, ClaimInput as C, GetUnclaimedInput as G, PartialTransferInput as P, ResolvedRoute as R, Seconds as S, TransferInput as T, GetUnclaimedResult as a, BridgeMode as b, GetOptionsInput as c, BridgeOption as d, BridgeOptions as e, GetDurationInput as f, GetDurationResult as g, GetRouteInput as h, RejectedRoute as i, GetRouteResult as j, validateInput as v };
