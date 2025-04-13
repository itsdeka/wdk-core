import { Accounts, GetAptosClientFunction } from '@layerzerolabs/ui-aptos';
import { BridgeApi, GetDurationInput, GetDurationResult, GetOptionsInput, BridgeOptions, TransferInput, GetRouteInput, GetRouteResult } from '@layerzerolabs/ui-bridge-sdk/v2';
import { ChainKey, CurrencyAmount, Transaction, Currency, FeeQuote } from '@layerzerolabs/ui-core';
import { Types, BCS } from 'aptos';
import { O as OftBridgeConfig } from './OftBridgeConfig-098dc938.js';
import { ClaimApi, ClaimInput, GetUnclaimedInput, GetUnclaimedResult } from '@layerzerolabs/ui-bridge-sdk/dist/v2';

type AccountsConfig = Record<ChainKey, Accounts>;

declare class OftBridgeV2__aptos implements BridgeApi<unknown> {
    protected config: OftBridgeConfig;
    protected accounts: AccountsConfig;
    protected getClient: GetAptosClientFunction;
    constructor(config: OftBridgeConfig, accounts: AccountsConfig, getClient: GetAptosClientFunction);
    getDuration(input: GetDurationInput): Promise<GetDurationResult>;
    getOptions(input: GetOptionsInput): Promise<BridgeOptions>;
    transfer(input: TransferInput & {
        dstNativeAmount: CurrencyAmount;
    }): Promise<Transaction<unknown>>;
    supportsTransfer(srcToken: Currency, dstToken: Currency): boolean;
    getGlobalStore(chainKey: string): Promise<Types.MoveResource>;
    getMinDstGas({ srcChainKey, dstChainKey }: Path): Promise<BCS.Uint64>;
    getFeeBp({ srcChainKey, dstChainKey }: Path): Promise<bigint>;
    getMessageFee({ srcChainKey, dstChainKey }: Path, { dstNativeAmount, minDstGas, dstNativeAddress, }: {
        dstNativeAmount: bigint;
        minDstGas: bigint;
        dstNativeAddress: string;
    }): Promise<FeeQuote>;
    getRoute(input: GetRouteInput): Promise<GetRouteResult>;
}
type Path = {
    srcChainKey: ChainKey;
    dstChainKey: ChainKey;
};

declare class OftClaimV2__aptos implements ClaimApi<unknown> {
    protected config: OftBridgeConfig;
    protected accounts: AccountsConfig;
    protected getClient: GetAptosClientFunction;
    constructor(config: OftBridgeConfig, accounts: AccountsConfig, getClient: GetAptosClientFunction);
    supports(token: Currency): boolean;
    claim(input: ClaimInput): Promise<Transaction<unknown>>;
    getUnclaimed(input: GetUnclaimedInput): Promise<GetUnclaimedResult>;
}

export { OftBridgeV2__aptos, OftClaimV2__aptos };
