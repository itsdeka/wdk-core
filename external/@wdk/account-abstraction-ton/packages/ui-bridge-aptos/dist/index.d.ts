import { GetAptosClientFunction, Accounts } from '@layerzerolabs/ui-aptos';
import { BridgeApi, GetDurationInput, GetDurationResult, GetOptionsInput, BridgeOptions, GetRouteInput, GetRouteResult, TransferInput, ClaimApi, GetUnclaimedInput, GetUnclaimedResult, ClaimInput } from '@layerzerolabs/ui-bridge-sdk/v2';
import { ChainKey, Currency, MessageFee, Transaction, CurrencyAmount } from '@layerzerolabs/ui-core';
import { ProviderFactory, ERC20__api } from '@layerzerolabs/ui-evm';
import { Event, EventFilter, BaseContract, Signer, CallOverrides, BigNumber, Overrides, ContractTransaction, BigNumberish, BytesLike, PayableOverrides, PopulatedTransaction, utils } from 'ethers';
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';

declare enum AptosCoinType {
    APTOS = "AptosCoin",
    USDC = "USDC",
    BUSD = "BUSD",
    WBTC = "WBTC",
    USDT = "USDT",
    USDD = "USDD",
    WETH = "WETH"
}

type Deployment = {
    eid: number;
    bridge: {
        address: string;
    };
};
type AptosBridgeConfig = {
    deployments: {
        [chainKey in ChainKey]: Deployment;
    };
    tokens: {
        [coinType in AptosCoinType]: Currency[];
    };
};

declare class AptosBridgeV2__aptos implements BridgeApi {
    protected config: AptosBridgeConfig;
    protected accounts: AccountsConfig$1;
    protected getAptosClient: GetAptosClientFunction;
    protected getProvider: ProviderFactory;
    protected readonly sharedDecimals = 6;
    constructor(config: AptosBridgeConfig, accounts: AccountsConfig$1, getAptosClient: GetAptosClientFunction, getProvider: ProviderFactory);
    getDuration(input: GetDurationInput): Promise<GetDurationResult>;
    getOptions(input: GetOptionsInput): Promise<BridgeOptions>;
    getMinDstGas(path: {
        srcChainKey: ChainKey;
        dstChainKey: ChainKey;
    }): Promise<bigint>;
    getMessageFee(path: {
        srcChainKey: ChainKey;
        dstChainKey: ChainKey;
    }, { dstNativeAmount, minDstGas, dstNativeAddress, }: {
        dstNativeAmount: bigint;
        minDstGas: bigint;
        dstNativeAddress: string;
    }): Promise<MessageFee>;
    getRoute(input: GetRouteInput): Promise<GetRouteResult>;
    transfer(input: TransferInput): Promise<Transaction<unknown>>;
    supportsTransfer(srcToken: Currency, dstToken: Currency): boolean;
    getBridgeFeeBP(dstChainKey: ChainKey): Promise<number>;
    getLimit({ srcToken, dstToken, }: {
        srcToken: Currency;
        dstToken: Currency;
    }): Promise<CurrencyAmount<Currency>>;
}
type AccountsConfig$1 = Record<ChainKey, Accounts>;

interface TypedEvent<TArgsArray extends Array<any> = any, TArgsObject = any> extends Event {
    args: TArgsArray & TArgsObject;
}
interface TypedEventFilter<_TEvent extends TypedEvent> extends EventFilter {
}
interface TypedListener<TEvent extends TypedEvent> {
    (...listenerArg: [...__TypechainArgsArray<TEvent>, TEvent]): void;
}
type __TypechainArgsArray<T> = T extends TypedEvent<infer U> ? U : never;
interface OnEvent<TRes> {
    <TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>, listener: TypedListener<TEvent>): TRes;
    (eventName: string, listener: Listener): TRes;
}
type PromiseOrValue<T> = T | Promise<T>;

declare namespace LzLib {
    type CallParamsStruct = {
        refundAddress: PromiseOrValue<string>;
        zroPaymentAddress: PromiseOrValue<string>;
    };
    type CallParamsStructOutput = [string, string] & {
        refundAddress: string;
        zroPaymentAddress: string;
    };
}
interface ITokenBridgeInterface extends utils.Interface {
    functions: {
        "BP_DENOMINATOR()": FunctionFragment;
        "SHARED_DECIMALS()": FunctionFragment;
        "accruedFeeLD(address)": FunctionFragment;
        "aptosChainId()": FunctionFragment;
        "bridgeFeeBP()": FunctionFragment;
        "emergencyWithdrawEnabled()": FunctionFragment;
        "emergencyWithdrawTime()": FunctionFragment;
        "enableEmergencyWithdraw(bool)": FunctionFragment;
        "failedMessages(uint16,bytes,uint64)": FunctionFragment;
        "forceResumeReceive(uint16,bytes)": FunctionFragment;
        "getConfig(uint16,uint16,address,uint256)": FunctionFragment;
        "getTrustedRemoteAddress(uint16)": FunctionFragment;
        "globalPaused()": FunctionFragment;
        "isTrustedRemote(uint16,bytes)": FunctionFragment;
        "ld2sdRates(address)": FunctionFragment;
        "lzEndpoint()": FunctionFragment;
        "lzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "minDstGasLookup(uint16,uint16)": FunctionFragment;
        "nonblockingLzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "pausedTokens(address)": FunctionFragment;
        "precrime()": FunctionFragment;
        "quoteForSend((address,address),bytes)": FunctionFragment;
        "registerToken(address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "retryMessage(uint16,bytes,uint64,bytes)": FunctionFragment;
        "sendETHToAptos(bytes32,uint256,(address,address),bytes)": FunctionFragment;
        "sendToAptos(address,bytes32,uint256,(address,address),bytes)": FunctionFragment;
        "setAptosChainId(uint16)": FunctionFragment;
        "setBridgeFeeBP(uint256)": FunctionFragment;
        "setConfig(uint16,uint16,uint256,bytes)": FunctionFragment;
        "setGlobalPause(bool)": FunctionFragment;
        "setMinDstGas(uint16,uint16,uint256)": FunctionFragment;
        "setPrecrime(address)": FunctionFragment;
        "setReceiveVersion(uint16)": FunctionFragment;
        "setSendVersion(uint16)": FunctionFragment;
        "setTokenPause(address,bool)": FunctionFragment;
        "setTrustedRemote(uint16,bytes)": FunctionFragment;
        "setTrustedRemoteAddress(uint16,bytes)": FunctionFragment;
        "setUseCustomAdapterParams(bool)": FunctionFragment;
        "setWETH(address)": FunctionFragment;
        "supportedTokens(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "trustedRemoteLookup(uint16)": FunctionFragment;
        "tvlSDs(address)": FunctionFragment;
        "useCustomAdapterParams()": FunctionFragment;
        "weth()": FunctionFragment;
        "withdrawEmergency(address,address)": FunctionFragment;
        "withdrawFee(address,address,uint256)": FunctionFragment;
        "withdrawTVL(address,address,uint64)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "BP_DENOMINATOR" | "SHARED_DECIMALS" | "accruedFeeLD" | "aptosChainId" | "bridgeFeeBP" | "emergencyWithdrawEnabled" | "emergencyWithdrawTime" | "enableEmergencyWithdraw" | "failedMessages" | "forceResumeReceive" | "getConfig" | "getTrustedRemoteAddress" | "globalPaused" | "isTrustedRemote" | "ld2sdRates" | "lzEndpoint" | "lzReceive" | "minDstGasLookup" | "nonblockingLzReceive" | "owner" | "pausedTokens" | "precrime" | "quoteForSend" | "registerToken" | "renounceOwnership" | "retryMessage" | "sendETHToAptos" | "sendToAptos" | "setAptosChainId" | "setBridgeFeeBP" | "setConfig" | "setGlobalPause" | "setMinDstGas" | "setPrecrime" | "setReceiveVersion" | "setSendVersion" | "setTokenPause" | "setTrustedRemote" | "setTrustedRemoteAddress" | "setUseCustomAdapterParams" | "setWETH" | "supportedTokens" | "transferOwnership" | "trustedRemoteLookup" | "tvlSDs" | "useCustomAdapterParams" | "weth" | "withdrawEmergency" | "withdrawFee" | "withdrawTVL"): FunctionFragment;
    encodeFunctionData(functionFragment: "BP_DENOMINATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "SHARED_DECIMALS", values?: undefined): string;
    encodeFunctionData(functionFragment: "accruedFeeLD", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "aptosChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "bridgeFeeBP", values?: undefined): string;
    encodeFunctionData(functionFragment: "emergencyWithdrawEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "emergencyWithdrawTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "enableEmergencyWithdraw", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "failedMessages", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "forceResumeReceive", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getConfig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTrustedRemoteAddress", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "globalPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "isTrustedRemote", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "ld2sdRates", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "lzEndpoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "lzReceive", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "minDstGasLookup", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "nonblockingLzReceive", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pausedTokens", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "precrime", values?: undefined): string;
    encodeFunctionData(functionFragment: "quoteForSend", values: [LzLib.CallParamsStruct, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "registerToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "retryMessage", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "sendETHToAptos", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        LzLib.CallParamsStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "sendToAptos", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        LzLib.CallParamsStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setAptosChainId", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setBridgeFeeBP", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setConfig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setGlobalPause", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setMinDstGas", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setPrecrime", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setReceiveVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setSendVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTokenPause", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setTrustedRemote", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setTrustedRemoteAddress", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setUseCustomAdapterParams", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setWETH", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "supportedTokens", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "trustedRemoteLookup", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "tvlSDs", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "useCustomAdapterParams", values?: undefined): string;
    encodeFunctionData(functionFragment: "weth", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawEmergency", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdrawFee", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "withdrawTVL", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "BP_DENOMINATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SHARED_DECIMALS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accruedFeeLD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "aptosChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgeFeeBP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyWithdrawEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyWithdrawTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enableEmergencyWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failedMessages", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceResumeReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "globalPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ld2sdRates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzEndpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minDstGasLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonblockingLzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pausedTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "precrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteForSend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "retryMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendETHToAptos", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendToAptos", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAptosChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBridgeFeeBP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGlobalPause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinDstGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrecrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReceiveVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSendVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTokenPause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUseCustomAdapterParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportedTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "trustedRemoteLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tvlSDs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "useCustomAdapterParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawEmergency", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTVL", data: BytesLike): Result;
    events: {
        "EnableEmergencyWithdraw(bool,uint256)": EventFragment;
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Receive(address,address,uint256)": EventFragment;
        "RegisterToken(address)": EventFragment;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)": EventFragment;
        "Send(address,address,bytes32,uint256)": EventFragment;
        "SetAptosChainId(uint16)": EventFragment;
        "SetBridgeBP(uint256)": EventFragment;
        "SetGlobalPause(bool)": EventFragment;
        "SetLocalChainId(uint16)": EventFragment;
        "SetMinDstGas(uint16,uint16,uint256)": EventFragment;
        "SetPrecrime(address)": EventFragment;
        "SetTokenPause(address,bool)": EventFragment;
        "SetTrustedRemote(uint16,bytes)": EventFragment;
        "SetTrustedRemoteAddress(uint16,bytes)": EventFragment;
        "SetUseCustomAdapterParams(bool)": EventFragment;
        "SetWETH(address)": EventFragment;
        "WithdrawFee(address,address,uint256)": EventFragment;
        "WithdrawTVL(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "EnableEmergencyWithdraw"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MessageFailed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Receive"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RegisterToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RetryMessageSuccess"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Send"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetAptosChainId"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetBridgeBP"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetGlobalPause"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetLocalChainId"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetMinDstGas"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPrecrime"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTokenPause"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemoteAddress"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetUseCustomAdapterParams"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetWETH"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawFee"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawTVL"): EventFragment;
}
interface EnableEmergencyWithdrawEventObject {
    enabled: boolean;
    unlockTime: BigNumber;
}
type EnableEmergencyWithdrawEvent = TypedEvent<[
    boolean,
    BigNumber
], EnableEmergencyWithdrawEventObject>;
type EnableEmergencyWithdrawEventFilter = TypedEventFilter<EnableEmergencyWithdrawEvent>;
interface MessageFailedEventObject {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _payload: string;
    _reason: string;
}
type MessageFailedEvent = TypedEvent<[
    number,
    string,
    BigNumber,
    string,
    string
], MessageFailedEventObject>;
type MessageFailedEventFilter = TypedEventFilter<MessageFailedEvent>;
interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
interface ReceiveEventObject {
    token: string;
    to: string;
    amountLD: BigNumber;
}
type ReceiveEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ReceiveEventObject>;
type ReceiveEventFilter = TypedEventFilter<ReceiveEvent>;
interface RegisterTokenEventObject {
    token: string;
}
type RegisterTokenEvent = TypedEvent<[string], RegisterTokenEventObject>;
type RegisterTokenEventFilter = TypedEventFilter<RegisterTokenEvent>;
interface RetryMessageSuccessEventObject {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _payloadHash: string;
}
type RetryMessageSuccessEvent = TypedEvent<[
    number,
    string,
    BigNumber,
    string
], RetryMessageSuccessEventObject>;
type RetryMessageSuccessEventFilter = TypedEventFilter<RetryMessageSuccessEvent>;
interface SendEventObject {
    token: string;
    from: string;
    to: string;
    amountLD: BigNumber;
}
type SendEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], SendEventObject>;
type SendEventFilter = TypedEventFilter<SendEvent>;
interface SetAptosChainIdEventObject {
    aptosChainId: number;
}
type SetAptosChainIdEvent = TypedEvent<[
    number
], SetAptosChainIdEventObject>;
type SetAptosChainIdEventFilter = TypedEventFilter<SetAptosChainIdEvent>;
interface SetBridgeBPEventObject {
    bridgeFeeBP: BigNumber;
}
type SetBridgeBPEvent = TypedEvent<[BigNumber], SetBridgeBPEventObject>;
type SetBridgeBPEventFilter = TypedEventFilter<SetBridgeBPEvent>;
interface SetGlobalPauseEventObject {
    paused: boolean;
}
type SetGlobalPauseEvent = TypedEvent<[
    boolean
], SetGlobalPauseEventObject>;
type SetGlobalPauseEventFilter = TypedEventFilter<SetGlobalPauseEvent>;
interface SetLocalChainIdEventObject {
    localChainId: number;
}
type SetLocalChainIdEvent = TypedEvent<[
    number
], SetLocalChainIdEventObject>;
type SetLocalChainIdEventFilter = TypedEventFilter<SetLocalChainIdEvent>;
interface SetMinDstGasEventObject {
    _dstChainId: number;
    _type: number;
    _minDstGas: BigNumber;
}
type SetMinDstGasEvent = TypedEvent<[
    number,
    number,
    BigNumber
], SetMinDstGasEventObject>;
type SetMinDstGasEventFilter = TypedEventFilter<SetMinDstGasEvent>;
interface SetPrecrimeEventObject {
    precrime: string;
}
type SetPrecrimeEvent = TypedEvent<[string], SetPrecrimeEventObject>;
type SetPrecrimeEventFilter = TypedEventFilter<SetPrecrimeEvent>;
interface SetTokenPauseEventObject {
    token: string;
    paused: boolean;
}
type SetTokenPauseEvent = TypedEvent<[
    string,
    boolean
], SetTokenPauseEventObject>;
type SetTokenPauseEventFilter = TypedEventFilter<SetTokenPauseEvent>;
interface SetTrustedRemoteEventObject {
    _remoteChainId: number;
    _path: string;
}
type SetTrustedRemoteEvent = TypedEvent<[
    number,
    string
], SetTrustedRemoteEventObject>;
type SetTrustedRemoteEventFilter = TypedEventFilter<SetTrustedRemoteEvent>;
interface SetTrustedRemoteAddressEventObject {
    _remoteChainId: number;
    _remoteAddress: string;
}
type SetTrustedRemoteAddressEvent = TypedEvent<[
    number,
    string
], SetTrustedRemoteAddressEventObject>;
type SetTrustedRemoteAddressEventFilter = TypedEventFilter<SetTrustedRemoteAddressEvent>;
interface SetUseCustomAdapterParamsEventObject {
    useCustomAdapterParams: boolean;
}
type SetUseCustomAdapterParamsEvent = TypedEvent<[
    boolean
], SetUseCustomAdapterParamsEventObject>;
type SetUseCustomAdapterParamsEventFilter = TypedEventFilter<SetUseCustomAdapterParamsEvent>;
interface SetWETHEventObject {
    weth: string;
}
type SetWETHEvent = TypedEvent<[string], SetWETHEventObject>;
type SetWETHEventFilter = TypedEventFilter<SetWETHEvent>;
interface WithdrawFeeEventObject {
    token: string;
    to: string;
    amountLD: BigNumber;
}
type WithdrawFeeEvent = TypedEvent<[
    string,
    string,
    BigNumber
], WithdrawFeeEventObject>;
type WithdrawFeeEventFilter = TypedEventFilter<WithdrawFeeEvent>;
interface WithdrawTVLEventObject {
    token: string;
    to: string;
    amountLD: BigNumber;
}
type WithdrawTVLEvent = TypedEvent<[
    string,
    string,
    BigNumber
], WithdrawTVLEventObject>;
type WithdrawTVLEventFilter = TypedEventFilter<WithdrawTVLEvent>;
interface ITokenBridge extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ITokenBridgeInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        BP_DENOMINATOR(overrides?: CallOverrides): Promise<[BigNumber]>;
        SHARED_DECIMALS(overrides?: CallOverrides): Promise<[number]>;
        accruedFeeLD(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        aptosChainId(overrides?: CallOverrides): Promise<[number]>;
        bridgeFeeBP(overrides?: CallOverrides): Promise<[BigNumber]>;
        emergencyWithdrawEnabled(overrides?: CallOverrides): Promise<[boolean]>;
        emergencyWithdrawTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        enableEmergencyWithdraw(enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        globalPaused(overrides?: CallOverrides): Promise<[boolean]>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        ld2sdRates(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        lzEndpoint(overrides?: CallOverrides): Promise<[string]>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pausedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        precrime(overrides?: CallOverrides): Promise<[string]>;
        quoteForSend(_callParams: LzLib.CallParamsStruct, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        registerToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendETHToAptos(_toAddress: PromiseOrValue<BytesLike>, _amountLD: PromiseOrValue<BigNumberish>, _callParams: LzLib.CallParamsStruct, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendToAptos(_token: PromiseOrValue<string>, _toAddress: PromiseOrValue<BytesLike>, _amountLD: PromiseOrValue<BigNumberish>, _callParams: LzLib.CallParamsStruct, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAptosChainId(_aptosChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setBridgeFeeBP(_bridgeFeeBP: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGlobalPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPrecrime(_precrime: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTokenPause(_token: PromiseOrValue<string>, _paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setWETH(_weth: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        tvlSDs(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<[boolean]>;
        weth(overrides?: CallOverrides): Promise<[string]>;
        withdrawEmergency(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawFee(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawTVL(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    BP_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;
    SHARED_DECIMALS(overrides?: CallOverrides): Promise<number>;
    accruedFeeLD(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    aptosChainId(overrides?: CallOverrides): Promise<number>;
    bridgeFeeBP(overrides?: CallOverrides): Promise<BigNumber>;
    emergencyWithdrawEnabled(overrides?: CallOverrides): Promise<boolean>;
    emergencyWithdrawTime(overrides?: CallOverrides): Promise<BigNumber>;
    enableEmergencyWithdraw(enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    globalPaused(overrides?: CallOverrides): Promise<boolean>;
    isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    ld2sdRates(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    lzEndpoint(overrides?: CallOverrides): Promise<string>;
    lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    pausedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    precrime(overrides?: CallOverrides): Promise<string>;
    quoteForSend(_callParams: LzLib.CallParamsStruct, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    registerToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendETHToAptos(_toAddress: PromiseOrValue<BytesLike>, _amountLD: PromiseOrValue<BigNumberish>, _callParams: LzLib.CallParamsStruct, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendToAptos(_token: PromiseOrValue<string>, _toAddress: PromiseOrValue<BytesLike>, _amountLD: PromiseOrValue<BigNumberish>, _callParams: LzLib.CallParamsStruct, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAptosChainId(_aptosChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setBridgeFeeBP(_bridgeFeeBP: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGlobalPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPrecrime(_precrime: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTokenPause(_token: PromiseOrValue<string>, _paused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setWETH(_weth: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    tvlSDs(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    useCustomAdapterParams(overrides?: CallOverrides): Promise<boolean>;
    weth(overrides?: CallOverrides): Promise<string>;
    withdrawEmergency(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawFee(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawTVL(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        BP_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;
        SHARED_DECIMALS(overrides?: CallOverrides): Promise<number>;
        accruedFeeLD(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        aptosChainId(overrides?: CallOverrides): Promise<number>;
        bridgeFeeBP(overrides?: CallOverrides): Promise<BigNumber>;
        emergencyWithdrawEnabled(overrides?: CallOverrides): Promise<boolean>;
        emergencyWithdrawTime(overrides?: CallOverrides): Promise<BigNumber>;
        enableEmergencyWithdraw(enabled: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        globalPaused(overrides?: CallOverrides): Promise<boolean>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        ld2sdRates(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        lzEndpoint(overrides?: CallOverrides): Promise<string>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        pausedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        precrime(overrides?: CallOverrides): Promise<string>;
        quoteForSend(_callParams: LzLib.CallParamsStruct, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        registerToken(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        sendETHToAptos(_toAddress: PromiseOrValue<BytesLike>, _amountLD: PromiseOrValue<BigNumberish>, _callParams: LzLib.CallParamsStruct, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        sendToAptos(_token: PromiseOrValue<string>, _toAddress: PromiseOrValue<BytesLike>, _amountLD: PromiseOrValue<BigNumberish>, _callParams: LzLib.CallParamsStruct, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setAptosChainId(_aptosChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setBridgeFeeBP(_bridgeFeeBP: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setGlobalPause(_paused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPrecrime(_precrime: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTokenPause(_token: PromiseOrValue<string>, _paused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setWETH(_weth: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        supportedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        tvlSDs(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<boolean>;
        weth(overrides?: CallOverrides): Promise<string>;
        withdrawEmergency(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        withdrawFee(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdrawTVL(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "EnableEmergencyWithdraw(bool,uint256)"(enabled?: null, unlockTime?: null): EnableEmergencyWithdrawEventFilter;
        EnableEmergencyWithdraw(enabled?: null, unlockTime?: null): EnableEmergencyWithdrawEventFilter;
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter;
        MessageFailed(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Receive(address,address,uint256)"(token?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amountLD?: null): ReceiveEventFilter;
        Receive(token?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amountLD?: null): ReceiveEventFilter;
        "RegisterToken(address)"(token?: null): RegisterTokenEventFilter;
        RegisterToken(token?: null): RegisterTokenEventFilter;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter;
        RetryMessageSuccess(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter;
        "Send(address,address,bytes32,uint256)"(token?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: PromiseOrValue<BytesLike> | null, amountLD?: null): SendEventFilter;
        Send(token?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: PromiseOrValue<BytesLike> | null, amountLD?: null): SendEventFilter;
        "SetAptosChainId(uint16)"(aptosChainId?: null): SetAptosChainIdEventFilter;
        SetAptosChainId(aptosChainId?: null): SetAptosChainIdEventFilter;
        "SetBridgeBP(uint256)"(bridgeFeeBP?: null): SetBridgeBPEventFilter;
        SetBridgeBP(bridgeFeeBP?: null): SetBridgeBPEventFilter;
        "SetGlobalPause(bool)"(paused?: null): SetGlobalPauseEventFilter;
        SetGlobalPause(paused?: null): SetGlobalPauseEventFilter;
        "SetLocalChainId(uint16)"(localChainId?: null): SetLocalChainIdEventFilter;
        SetLocalChainId(localChainId?: null): SetLocalChainIdEventFilter;
        "SetMinDstGas(uint16,uint16,uint256)"(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter;
        SetMinDstGas(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter;
        "SetPrecrime(address)"(precrime?: null): SetPrecrimeEventFilter;
        SetPrecrime(precrime?: null): SetPrecrimeEventFilter;
        "SetTokenPause(address,bool)"(token?: null, paused?: null): SetTokenPauseEventFilter;
        SetTokenPause(token?: null, paused?: null): SetTokenPauseEventFilter;
        "SetTrustedRemote(uint16,bytes)"(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter;
        SetTrustedRemote(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter;
        "SetTrustedRemoteAddress(uint16,bytes)"(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter;
        SetTrustedRemoteAddress(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter;
        "SetUseCustomAdapterParams(bool)"(useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter;
        SetUseCustomAdapterParams(useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter;
        "SetWETH(address)"(weth?: null): SetWETHEventFilter;
        SetWETH(weth?: null): SetWETHEventFilter;
        "WithdrawFee(address,address,uint256)"(token?: PromiseOrValue<string> | null, to?: null, amountLD?: null): WithdrawFeeEventFilter;
        WithdrawFee(token?: PromiseOrValue<string> | null, to?: null, amountLD?: null): WithdrawFeeEventFilter;
        "WithdrawTVL(address,address,uint256)"(token?: PromiseOrValue<string> | null, to?: null, amountLD?: null): WithdrawTVLEventFilter;
        WithdrawTVL(token?: PromiseOrValue<string> | null, to?: null, amountLD?: null): WithdrawTVLEventFilter;
    };
    estimateGas: {
        BP_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;
        SHARED_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;
        accruedFeeLD(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        aptosChainId(overrides?: CallOverrides): Promise<BigNumber>;
        bridgeFeeBP(overrides?: CallOverrides): Promise<BigNumber>;
        emergencyWithdrawEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        emergencyWithdrawTime(overrides?: CallOverrides): Promise<BigNumber>;
        enableEmergencyWithdraw(enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        globalPaused(overrides?: CallOverrides): Promise<BigNumber>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        ld2sdRates(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        lzEndpoint(overrides?: CallOverrides): Promise<BigNumber>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pausedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        precrime(overrides?: CallOverrides): Promise<BigNumber>;
        quoteForSend(_callParams: LzLib.CallParamsStruct, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        registerToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendETHToAptos(_toAddress: PromiseOrValue<BytesLike>, _amountLD: PromiseOrValue<BigNumberish>, _callParams: LzLib.CallParamsStruct, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendToAptos(_token: PromiseOrValue<string>, _toAddress: PromiseOrValue<BytesLike>, _amountLD: PromiseOrValue<BigNumberish>, _callParams: LzLib.CallParamsStruct, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAptosChainId(_aptosChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setBridgeFeeBP(_bridgeFeeBP: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGlobalPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPrecrime(_precrime: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTokenPause(_token: PromiseOrValue<string>, _paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setWETH(_weth: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tvlSDs(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<BigNumber>;
        weth(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawEmergency(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawFee(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawTVL(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        BP_DENOMINATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SHARED_DECIMALS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accruedFeeLD(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        aptosChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bridgeFeeBP(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        emergencyWithdrawEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        emergencyWithdrawTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enableEmergencyWithdraw(enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        globalPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ld2sdRates(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzEndpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pausedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        precrime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteForSend(_callParams: LzLib.CallParamsStruct, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendETHToAptos(_toAddress: PromiseOrValue<BytesLike>, _amountLD: PromiseOrValue<BigNumberish>, _callParams: LzLib.CallParamsStruct, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendToAptos(_token: PromiseOrValue<string>, _toAddress: PromiseOrValue<BytesLike>, _amountLD: PromiseOrValue<BigNumberish>, _callParams: LzLib.CallParamsStruct, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAptosChainId(_aptosChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setBridgeFeeBP(_bridgeFeeBP: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGlobalPause(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPrecrime(_precrime: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTokenPause(_token: PromiseOrValue<string>, _paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setWETH(_weth: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tvlSDs(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawEmergency(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawFee(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawTVL(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amountSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

declare class AptosBridgeV2__evm implements BridgeApi {
    protected config: AptosBridgeConfig;
    protected getProvider: ProviderFactory;
    erc20: ERC20__api;
    protected readonly sharedDecimals = 6;
    constructor(config: AptosBridgeConfig, getProvider: ProviderFactory);
    getDuration(input: GetDurationInput): Promise<GetDurationResult>;
    getOptions(input: GetOptionsInput): Promise<BridgeOptions>;
    getRoute(input: GetRouteInput): Promise<GetRouteResult>;
    approve(input: TransferInput): Promise<Transaction<unknown>>;
    getAllowance(input: {
        srcToken: Currency;
        srcAddress: string;
    }): Promise<CurrencyAmount>;
    transfer(input: TransferInput): Promise<Transaction<unknown>>;
    supportsTransfer(srcToken: Currency, dstToken: Currency): boolean;
    getMinDstGas(path: {
        srcChainKey: string;
        dstChainKey: string;
    }): Promise<bigint>;
    getMessageFee(path: {
        srcChainKey: ChainKey;
        dstChainKey: ChainKey;
    }, { dstNativeAmount, minDstGas, dstNativeAddress, }: {
        dstNativeAmount: bigint;
        minDstGas: bigint;
        dstNativeAddress: string;
    }): Promise<MessageFee>;
    getBridgeContract(chainKey: ChainKey): ITokenBridge;
}

declare const mainnet: AptosBridgeConfig;

type AccountsConfig = Record<ChainKey, Accounts>;
declare class AptosClaimV2__aptos implements ClaimApi<unknown> {
    protected config: AptosBridgeConfig;
    protected accounts: AccountsConfig;
    protected getClient: GetAptosClientFunction;
    constructor(config: AptosBridgeConfig, accounts: AccountsConfig, getClient: GetAptosClientFunction);
    supports(token: Currency): boolean;
    getUnclaimed(input: GetUnclaimedInput): Promise<GetUnclaimedResult>;
    claim(input: ClaimInput): Promise<Transaction<unknown>>;
}

export { AptosBridgeConfig, AptosBridgeV2__aptos, AptosBridgeV2__evm, AptosClaimV2__aptos, mainnet };
