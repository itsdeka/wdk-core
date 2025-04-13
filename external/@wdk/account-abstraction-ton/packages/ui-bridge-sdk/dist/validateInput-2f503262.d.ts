import { Currency, ChainKey, CurrencyAmount, FeeQuote, AdapterParams, Transaction } from '@layerzerolabs/ui-core';

type PartialTransferInput<RequiredKeys extends keyof TransferInput> = Partial<TransferInput> & Required<Pick<TransferInput, RequiredKeys>>;
type Seconds = number;
type GetMessageFeeInput = PartialTransferInput<'srcToken' | 'dstToken' | 'adapterParams'>;
type GetOutputInput = PartialTransferInput<'srcAmount' | 'dstToken'>;
type GetLimitInput = PartialTransferInput<'srcToken' | 'dstToken'>;
type GetDurationInput = PartialTransferInput<'srcToken' | 'dstToken' | 'mode'>;
type GetDurationResult = {
    estimated: Seconds;
};
type GetExtraGasInput = PartialTransferInput<'srcToken' | 'dstToken'>;
type GetOptionsInput = {
    srcToken: Currency;
    dstToken: Currency;
};
type GetAllowanceInput = {
    token: Currency;
    address: string;
    dstChainKey?: ChainKey;
};
type GetUnclaimedInput = {
    token: Currency;
    address: string;
};
type IsRegisteredInput = {
    token: Currency;
    address: string;
};
type ClaimInput = {
    token: Currency;
    address: string;
};
type RegisterInput = {
    token: Currency;
    address: string;
};
type ApproveInput = {
    amount: CurrencyAmount;
    address: string;
    dstChainKey?: ChainKey;
};
type BridgeOutput<BridgeFee extends BridgeFeeBase> = {
    /**
     * expressed in dstToken
     */
    dstAmount: CurrencyAmount;
    /**
     * custom to each implementation
     */
    fee: BridgeFee;
};
type BridgeFeeBase = {
    [key: string]: CurrencyAmount;
};
type BridgeMode = string;
interface BridgeOptions {
    options: BridgeOption[];
}
interface BridgeOption {
    mode: BridgeMode;
    nativeDrop?: {
        maxAmount: CurrencyAmount;
        isFixed: boolean;
    };
}
type TransferInput = {
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
    fee: FeeQuote;
    adapterParams: AdapterParams;
};

interface BridgeApi<Signer = unknown, BridgeFee extends BridgeFeeBase = {}> {
    supportsClaim(currency: Currency): boolean;
    supportsRegister(currency: Currency): boolean;
    supportsTransfer(srcToken: Currency, dstToken: Currency): boolean;
    getMessageFee(input: GetMessageFeeInput): Promise<FeeQuote>;
    getOutput(input: GetOutputInput): Promise<BridgeOutput<BridgeFee>>;
    getDuration(input: GetDurationInput): Promise<Seconds>;
    getLimit(input: GetLimitInput): Promise<CurrencyAmount>;
    getExtraGas(input: GetExtraGasInput): Promise<number>;
    getAllowance(input: GetAllowanceInput): Promise<CurrencyAmount>;
    getOptions(input: GetOptionsInput): Promise<BridgeOptions>;
    getUnclaimed(input: GetUnclaimedInput): Promise<CurrencyAmount>;
    isRegistered(input: IsRegisteredInput): Promise<boolean>;
    transfer(input: Required<TransferInput>): Promise<Transaction<Signer>>;
    claim(input: ClaimInput): Promise<Transaction<Signer>>;
    register(register: RegisterInput): Promise<Transaction<Signer>>;
    approve(input: ApproveInput): Promise<Transaction<Signer>>;
}

declare function validateInput(input: TransferInput): asserts input is TransferInput;

export { ApproveInput as A, BridgeApi as B, ClaimInput as C, GetMessageFeeInput as G, IsRegisteredInput as I, PartialTransferInput as P, RegisterInput as R, Seconds as S, TransferInput as T, BridgeFeeBase as a, BridgeOutput as b, GetOutputInput as c, GetLimitInput as d, GetDurationInput as e, GetDurationResult as f, GetExtraGasInput as g, GetOptionsInput as h, GetAllowanceInput as i, GetUnclaimedInput as j, BridgeMode as k, BridgeOptions as l, BridgeOption as m, validateInput as v };
