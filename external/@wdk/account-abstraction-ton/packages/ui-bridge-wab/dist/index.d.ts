import { Event, EventFilter, BaseContract, Signer, CallOverrides, BigNumber, BigNumberish, BytesLike, PayableOverrides, ContractTransaction, Overrides, PopulatedTransaction, utils } from 'ethers';
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { BridgeApi, GetOptionsInput, BridgeOptions, TransferInput, GetDurationInput, GetAllowanceInput, ApproveInput, IsRegisteredInput, GetUnclaimedInput, ClaimInput, RegisterInput, GetExtraGasInput, GetMessageFeeInput, GetOutputInput, BridgeOutput, GetLimitInput } from '@layerzerolabs/ui-bridge-sdk/v1';
import * as _layerzerolabs_ui_core from '@layerzerolabs/ui-core';
import { ChainKey, Token, Coin, CurrencyAmount, Currency, Transaction, FeeQuote, AdapterParams } from '@layerzerolabs/ui-core';
import { ProviderFactory, ERC20__api } from '@layerzerolabs/ui-evm';
import z from 'zod';

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

declare namespace LzLib$1 {
    type CallParamsStruct = {
        refundAddress: PromiseOrValue<string>;
        zroPaymentAddress: PromiseOrValue<string>;
    };
    type CallParamsStructOutput = [string, string] & {
        refundAddress: string;
        zroPaymentAddress: string;
    };
}
interface OriginalTokenBridgeInterface extends utils.Interface {
    functions: {
        "LDtoSDConversionRate(address)": FunctionFragment;
        "PT_MINT()": FunctionFragment;
        "PT_UNLOCK()": FunctionFragment;
        "accruedFeeLD(address)": FunctionFragment;
        "bridge(address,uint256,address,(address,address),bytes)": FunctionFragment;
        "bridgeETH(uint256,address,(address,address),bytes)": FunctionFragment;
        "bridgeNative(uint256,address,(address,address),bytes)": FunctionFragment;
        "estimateBridgeFee(bool,bytes)": FunctionFragment;
        "failedMessages(uint16,bytes,uint64)": FunctionFragment;
        "forceResumeReceive(uint16,bytes)": FunctionFragment;
        "getConfig(uint16,uint16,address,uint256)": FunctionFragment;
        "getTrustedRemoteAddress(uint16)": FunctionFragment;
        "isTrustedRemote(uint16,bytes)": FunctionFragment;
        "lzEndpoint()": FunctionFragment;
        "lzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "minDstGasLookup(uint16,uint16)": FunctionFragment;
        "nonblockingLzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "precrime()": FunctionFragment;
        "registerToken(address,uint8)": FunctionFragment;
        "remoteChainId()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "retryMessage(uint16,bytes,uint64,bytes)": FunctionFragment;
        "setConfig(uint16,uint16,uint256,bytes)": FunctionFragment;
        "setMinDstGas(uint16,uint16,uint256)": FunctionFragment;
        "setPrecrime(address)": FunctionFragment;
        "setReceiveVersion(uint16)": FunctionFragment;
        "setRemoteChainId(uint16)": FunctionFragment;
        "setSendVersion(uint16)": FunctionFragment;
        "setTrustedRemote(uint16,bytes)": FunctionFragment;
        "setTrustedRemoteAddress(uint16,bytes)": FunctionFragment;
        "setUseCustomAdapterParams(bool)": FunctionFragment;
        "supportedTokens(address)": FunctionFragment;
        "totalValueLockedSD(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "trustedRemoteLookup(uint16)": FunctionFragment;
        "useCustomAdapterParams()": FunctionFragment;
        "weth()": FunctionFragment;
        "withdrawFee(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "LDtoSDConversionRate" | "PT_MINT" | "PT_UNLOCK" | "accruedFeeLD" | "bridge" | "bridgeETH" | "bridgeNative" | "estimateBridgeFee" | "failedMessages" | "forceResumeReceive" | "getConfig" | "getTrustedRemoteAddress" | "isTrustedRemote" | "lzEndpoint" | "lzReceive" | "minDstGasLookup" | "nonblockingLzReceive" | "owner" | "precrime" | "registerToken" | "remoteChainId" | "renounceOwnership" | "retryMessage" | "setConfig" | "setMinDstGas" | "setPrecrime" | "setReceiveVersion" | "setRemoteChainId" | "setSendVersion" | "setTrustedRemote" | "setTrustedRemoteAddress" | "setUseCustomAdapterParams" | "supportedTokens" | "totalValueLockedSD" | "transferOwnership" | "trustedRemoteLookup" | "useCustomAdapterParams" | "weth" | "withdrawFee"): FunctionFragment;
    encodeFunctionData(functionFragment: "LDtoSDConversionRate", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "PT_MINT", values?: undefined): string;
    encodeFunctionData(functionFragment: "PT_UNLOCK", values?: undefined): string;
    encodeFunctionData(functionFragment: "accruedFeeLD", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "bridge", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        LzLib$1.CallParamsStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "bridgeETH", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        LzLib$1.CallParamsStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "bridgeNative", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        LzLib$1.CallParamsStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "estimateBridgeFee", values: [PromiseOrValue<boolean>, PromiseOrValue<BytesLike>]): string;
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
    encodeFunctionData(functionFragment: "isTrustedRemote", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
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
    encodeFunctionData(functionFragment: "precrime", values?: undefined): string;
    encodeFunctionData(functionFragment: "registerToken", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "remoteChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "retryMessage", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setConfig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setMinDstGas", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setPrecrime", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setReceiveVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setRemoteChainId", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setSendVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTrustedRemote", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setTrustedRemoteAddress", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setUseCustomAdapterParams", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "supportedTokens", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "totalValueLockedSD", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "trustedRemoteLookup", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "useCustomAdapterParams", values?: undefined): string;
    encodeFunctionData(functionFragment: "weth", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawFee", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "LDtoSDConversionRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PT_MINT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PT_UNLOCK", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accruedFeeLD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgeETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgeNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateBridgeFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failedMessages", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceResumeReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzEndpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minDstGasLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonblockingLzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "precrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remoteChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "retryMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinDstGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrecrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReceiveVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRemoteChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSendVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUseCustomAdapterParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportedTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalValueLockedSD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "trustedRemoteLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "useCustomAdapterParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFee", data: BytesLike): Result;
    events: {
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ReceiveToken(address,address,uint256)": EventFragment;
        "RegisterToken(address)": EventFragment;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)": EventFragment;
        "SendToken(address,address,address,uint256)": EventFragment;
        "SetMinDstGas(uint16,uint16,uint256)": EventFragment;
        "SetPrecrime(address)": EventFragment;
        "SetRemoteChainId(uint16)": EventFragment;
        "SetTrustedRemote(uint16,bytes)": EventFragment;
        "SetTrustedRemoteAddress(uint16,bytes)": EventFragment;
        "SetUseCustomAdapterParams(bool)": EventFragment;
        "WithdrawFee(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MessageFailed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceiveToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RegisterToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RetryMessageSuccess"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetMinDstGas"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPrecrime"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetRemoteChainId"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemoteAddress"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetUseCustomAdapterParams"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawFee"): EventFragment;
}
interface MessageFailedEventObject$1 {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _payload: string;
    _reason: string;
}
type MessageFailedEvent$1 = TypedEvent<[
    number,
    string,
    BigNumber,
    string,
    string
], MessageFailedEventObject$1>;
type MessageFailedEventFilter$1 = TypedEventFilter<MessageFailedEvent$1>;
interface OwnershipTransferredEventObject$1 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$1 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$1>;
type OwnershipTransferredEventFilter$1 = TypedEventFilter<OwnershipTransferredEvent$1>;
interface ReceiveTokenEventObject {
    token: string;
    to: string;
    amount: BigNumber;
}
type ReceiveTokenEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ReceiveTokenEventObject>;
type ReceiveTokenEventFilter = TypedEventFilter<ReceiveTokenEvent>;
interface RegisterTokenEventObject$1 {
    token: string;
}
type RegisterTokenEvent$1 = TypedEvent<[string], RegisterTokenEventObject$1>;
type RegisterTokenEventFilter$1 = TypedEventFilter<RegisterTokenEvent$1>;
interface RetryMessageSuccessEventObject$1 {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _payloadHash: string;
}
type RetryMessageSuccessEvent$1 = TypedEvent<[
    number,
    string,
    BigNumber,
    string
], RetryMessageSuccessEventObject$1>;
type RetryMessageSuccessEventFilter$1 = TypedEventFilter<RetryMessageSuccessEvent$1>;
interface SendTokenEventObject {
    token: string;
    from: string;
    to: string;
    amount: BigNumber;
}
type SendTokenEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], SendTokenEventObject>;
type SendTokenEventFilter = TypedEventFilter<SendTokenEvent>;
interface SetMinDstGasEventObject$1 {
    _dstChainId: number;
    _type: number;
    _minDstGas: BigNumber;
}
type SetMinDstGasEvent$1 = TypedEvent<[
    number,
    number,
    BigNumber
], SetMinDstGasEventObject$1>;
type SetMinDstGasEventFilter$1 = TypedEventFilter<SetMinDstGasEvent$1>;
interface SetPrecrimeEventObject$1 {
    precrime: string;
}
type SetPrecrimeEvent$1 = TypedEvent<[string], SetPrecrimeEventObject$1>;
type SetPrecrimeEventFilter$1 = TypedEventFilter<SetPrecrimeEvent$1>;
interface SetRemoteChainIdEventObject {
    remoteChainId: number;
}
type SetRemoteChainIdEvent = TypedEvent<[
    number
], SetRemoteChainIdEventObject>;
type SetRemoteChainIdEventFilter = TypedEventFilter<SetRemoteChainIdEvent>;
interface SetTrustedRemoteEventObject$1 {
    _remoteChainId: number;
    _path: string;
}
type SetTrustedRemoteEvent$1 = TypedEvent<[
    number,
    string
], SetTrustedRemoteEventObject$1>;
type SetTrustedRemoteEventFilter$1 = TypedEventFilter<SetTrustedRemoteEvent$1>;
interface SetTrustedRemoteAddressEventObject$1 {
    _remoteChainId: number;
    _remoteAddress: string;
}
type SetTrustedRemoteAddressEvent$1 = TypedEvent<[
    number,
    string
], SetTrustedRemoteAddressEventObject$1>;
type SetTrustedRemoteAddressEventFilter$1 = TypedEventFilter<SetTrustedRemoteAddressEvent$1>;
interface SetUseCustomAdapterParamsEventObject$1 {
    useCustomAdapterParams: boolean;
}
type SetUseCustomAdapterParamsEvent$1 = TypedEvent<[
    boolean
], SetUseCustomAdapterParamsEventObject$1>;
type SetUseCustomAdapterParamsEventFilter$1 = TypedEventFilter<SetUseCustomAdapterParamsEvent$1>;
interface WithdrawFeeEventObject {
    token: string;
    to: string;
    amount: BigNumber;
}
type WithdrawFeeEvent = TypedEvent<[
    string,
    string,
    BigNumber
], WithdrawFeeEventObject>;
type WithdrawFeeEventFilter = TypedEventFilter<WithdrawFeeEvent>;
interface OriginalTokenBridge$1 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OriginalTokenBridgeInterface;
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
        LDtoSDConversionRate(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        PT_MINT(overrides?: CallOverrides): Promise<[number]>;
        PT_UNLOCK(overrides?: CallOverrides): Promise<[number]>;
        accruedFeeLD(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        bridge(token: PromiseOrValue<string>, amountLD: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, callParams: LzLib$1.CallParamsStruct, adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        bridgeETH(amountLD: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, callParams: LzLib$1.CallParamsStruct, adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        bridgeNative(amountLD: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, callParams: LzLib$1.CallParamsStruct, adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        estimateBridgeFee(useZro: PromiseOrValue<boolean>, adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        lzEndpoint(overrides?: CallOverrides): Promise<[string]>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        precrime(overrides?: CallOverrides): Promise<[string]>;
        registerToken(token: PromiseOrValue<string>, sharedDecimals: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        remoteChainId(overrides?: CallOverrides): Promise<[number]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
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
        setRemoteChainId(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
        supportedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        totalValueLockedSD(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<[boolean]>;
        weth(overrides?: CallOverrides): Promise<[string]>;
        withdrawFee(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amountLD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    LDtoSDConversionRate(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    PT_MINT(overrides?: CallOverrides): Promise<number>;
    PT_UNLOCK(overrides?: CallOverrides): Promise<number>;
    accruedFeeLD(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    bridge(token: PromiseOrValue<string>, amountLD: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, callParams: LzLib$1.CallParamsStruct, adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    bridgeETH(amountLD: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, callParams: LzLib$1.CallParamsStruct, adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    bridgeNative(amountLD: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, callParams: LzLib$1.CallParamsStruct, adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    estimateBridgeFee(useZro: PromiseOrValue<boolean>, adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    lzEndpoint(overrides?: CallOverrides): Promise<string>;
    lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    precrime(overrides?: CallOverrides): Promise<string>;
    registerToken(token: PromiseOrValue<string>, sharedDecimals: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    remoteChainId(overrides?: CallOverrides): Promise<number>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
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
    setRemoteChainId(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
    supportedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    totalValueLockedSD(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    useCustomAdapterParams(overrides?: CallOverrides): Promise<boolean>;
    weth(overrides?: CallOverrides): Promise<string>;
    withdrawFee(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amountLD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        LDtoSDConversionRate(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        PT_MINT(overrides?: CallOverrides): Promise<number>;
        PT_UNLOCK(overrides?: CallOverrides): Promise<number>;
        accruedFeeLD(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        bridge(token: PromiseOrValue<string>, amountLD: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, callParams: LzLib$1.CallParamsStruct, adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        bridgeETH(amountLD: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, callParams: LzLib$1.CallParamsStruct, adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        bridgeNative(amountLD: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, callParams: LzLib$1.CallParamsStruct, adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        estimateBridgeFee(useZro: PromiseOrValue<boolean>, adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        lzEndpoint(overrides?: CallOverrides): Promise<string>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        precrime(overrides?: CallOverrides): Promise<string>;
        registerToken(token: PromiseOrValue<string>, sharedDecimals: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        remoteChainId(overrides?: CallOverrides): Promise<number>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPrecrime(_precrime: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setRemoteChainId(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        supportedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        totalValueLockedSD(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<boolean>;
        weth(overrides?: CallOverrides): Promise<string>;
        withdrawFee(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amountLD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter$1;
        MessageFailed(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter$1;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$1;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$1;
        "ReceiveToken(address,address,uint256)"(token?: null, to?: null, amount?: null): ReceiveTokenEventFilter;
        ReceiveToken(token?: null, to?: null, amount?: null): ReceiveTokenEventFilter;
        "RegisterToken(address)"(token?: null): RegisterTokenEventFilter$1;
        RegisterToken(token?: null): RegisterTokenEventFilter$1;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter$1;
        RetryMessageSuccess(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter$1;
        "SendToken(address,address,address,uint256)"(token?: null, from?: null, to?: null, amount?: null): SendTokenEventFilter;
        SendToken(token?: null, from?: null, to?: null, amount?: null): SendTokenEventFilter;
        "SetMinDstGas(uint16,uint16,uint256)"(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter$1;
        SetMinDstGas(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter$1;
        "SetPrecrime(address)"(precrime?: null): SetPrecrimeEventFilter$1;
        SetPrecrime(precrime?: null): SetPrecrimeEventFilter$1;
        "SetRemoteChainId(uint16)"(remoteChainId?: null): SetRemoteChainIdEventFilter;
        SetRemoteChainId(remoteChainId?: null): SetRemoteChainIdEventFilter;
        "SetTrustedRemote(uint16,bytes)"(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter$1;
        SetTrustedRemote(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter$1;
        "SetTrustedRemoteAddress(uint16,bytes)"(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter$1;
        SetTrustedRemoteAddress(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter$1;
        "SetUseCustomAdapterParams(bool)"(useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter$1;
        SetUseCustomAdapterParams(useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter$1;
        "WithdrawFee(address,address,uint256)"(token?: PromiseOrValue<string> | null, to?: null, amount?: null): WithdrawFeeEventFilter;
        WithdrawFee(token?: PromiseOrValue<string> | null, to?: null, amount?: null): WithdrawFeeEventFilter;
    };
    estimateGas: {
        LDtoSDConversionRate(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        PT_MINT(overrides?: CallOverrides): Promise<BigNumber>;
        PT_UNLOCK(overrides?: CallOverrides): Promise<BigNumber>;
        accruedFeeLD(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        bridge(token: PromiseOrValue<string>, amountLD: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, callParams: LzLib$1.CallParamsStruct, adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        bridgeETH(amountLD: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, callParams: LzLib$1.CallParamsStruct, adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        bridgeNative(amountLD: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, callParams: LzLib$1.CallParamsStruct, adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        estimateBridgeFee(useZro: PromiseOrValue<boolean>, adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        lzEndpoint(overrides?: CallOverrides): Promise<BigNumber>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        precrime(overrides?: CallOverrides): Promise<BigNumber>;
        registerToken(token: PromiseOrValue<string>, sharedDecimals: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        remoteChainId(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
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
        setRemoteChainId(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
        supportedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        totalValueLockedSD(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<BigNumber>;
        weth(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawFee(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amountLD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        LDtoSDConversionRate(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PT_MINT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PT_UNLOCK(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accruedFeeLD(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bridge(token: PromiseOrValue<string>, amountLD: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, callParams: LzLib$1.CallParamsStruct, adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        bridgeETH(amountLD: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, callParams: LzLib$1.CallParamsStruct, adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        bridgeNative(amountLD: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, callParams: LzLib$1.CallParamsStruct, adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        estimateBridgeFee(useZro: PromiseOrValue<boolean>, adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzEndpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        precrime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerToken(token: PromiseOrValue<string>, sharedDecimals: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        remoteChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
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
        setRemoteChainId(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
        supportedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalValueLockedSD(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawFee(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amountLD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

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
interface WrappedTokenBridgeInterface extends utils.Interface {
    functions: {
        "PT_MINT()": FunctionFragment;
        "PT_UNLOCK()": FunctionFragment;
        "TOTAL_BPS()": FunctionFragment;
        "bridge(address,uint16,uint256,address,bool,(address,address),bytes)": FunctionFragment;
        "estimateBridgeFee(uint16,bool,bytes)": FunctionFragment;
        "failedMessages(uint16,bytes,uint64)": FunctionFragment;
        "forceResumeReceive(uint16,bytes)": FunctionFragment;
        "getConfig(uint16,uint16,address,uint256)": FunctionFragment;
        "getTrustedRemoteAddress(uint16)": FunctionFragment;
        "isTrustedRemote(uint16,bytes)": FunctionFragment;
        "localToRemote(address,uint16)": FunctionFragment;
        "lzEndpoint()": FunctionFragment;
        "lzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "minDstGasLookup(uint16,uint16)": FunctionFragment;
        "nonblockingLzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "precrime()": FunctionFragment;
        "registerToken(address,uint16,address)": FunctionFragment;
        "remoteToLocal(address,uint16)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "retryMessage(uint16,bytes,uint64,bytes)": FunctionFragment;
        "setConfig(uint16,uint16,uint256,bytes)": FunctionFragment;
        "setMinDstGas(uint16,uint16,uint256)": FunctionFragment;
        "setPrecrime(address)": FunctionFragment;
        "setReceiveVersion(uint16)": FunctionFragment;
        "setSendVersion(uint16)": FunctionFragment;
        "setTrustedRemote(uint16,bytes)": FunctionFragment;
        "setTrustedRemoteAddress(uint16,bytes)": FunctionFragment;
        "setUseCustomAdapterParams(bool)": FunctionFragment;
        "setWithdrawalFeeBps(uint16)": FunctionFragment;
        "totalValueLocked(uint16,address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "trustedRemoteLookup(uint16)": FunctionFragment;
        "useCustomAdapterParams()": FunctionFragment;
        "withdrawalFeeBps()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "PT_MINT" | "PT_UNLOCK" | "TOTAL_BPS" | "bridge" | "estimateBridgeFee" | "failedMessages" | "forceResumeReceive" | "getConfig" | "getTrustedRemoteAddress" | "isTrustedRemote" | "localToRemote" | "lzEndpoint" | "lzReceive" | "minDstGasLookup" | "nonblockingLzReceive" | "owner" | "precrime" | "registerToken" | "remoteToLocal" | "renounceOwnership" | "retryMessage" | "setConfig" | "setMinDstGas" | "setPrecrime" | "setReceiveVersion" | "setSendVersion" | "setTrustedRemote" | "setTrustedRemoteAddress" | "setUseCustomAdapterParams" | "setWithdrawalFeeBps" | "totalValueLocked" | "transferOwnership" | "trustedRemoteLookup" | "useCustomAdapterParams" | "withdrawalFeeBps"): FunctionFragment;
    encodeFunctionData(functionFragment: "PT_MINT", values?: undefined): string;
    encodeFunctionData(functionFragment: "PT_UNLOCK", values?: undefined): string;
    encodeFunctionData(functionFragment: "TOTAL_BPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "bridge", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        LzLib.CallParamsStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "estimateBridgeFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
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
    encodeFunctionData(functionFragment: "isTrustedRemote", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "localToRemote", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
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
    encodeFunctionData(functionFragment: "precrime", values?: undefined): string;
    encodeFunctionData(functionFragment: "registerToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "remoteToLocal", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "retryMessage", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setConfig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setMinDstGas", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setPrecrime", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setReceiveVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setSendVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTrustedRemote", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setTrustedRemoteAddress", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setUseCustomAdapterParams", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setWithdrawalFeeBps", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "totalValueLocked", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "trustedRemoteLookup", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "useCustomAdapterParams", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawalFeeBps", values?: undefined): string;
    decodeFunctionResult(functionFragment: "PT_MINT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PT_UNLOCK", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "TOTAL_BPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateBridgeFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failedMessages", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceResumeReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "localToRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzEndpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minDstGasLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonblockingLzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "precrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remoteToLocal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "retryMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinDstGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrecrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReceiveVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSendVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUseCustomAdapterParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWithdrawalFeeBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalValueLocked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "trustedRemoteLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "useCustomAdapterParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawalFeeBps", data: BytesLike): Result;
    events: {
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "RegisterToken(address,uint16,address)": EventFragment;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)": EventFragment;
        "SetMinDstGas(uint16,uint16,uint256)": EventFragment;
        "SetPrecrime(address)": EventFragment;
        "SetTrustedRemote(uint16,bytes)": EventFragment;
        "SetTrustedRemoteAddress(uint16,bytes)": EventFragment;
        "SetUseCustomAdapterParams(bool)": EventFragment;
        "SetWithdrawalFeeBps(uint16)": EventFragment;
        "UnwrapToken(address,address,uint16,address,uint256)": EventFragment;
        "WrapToken(address,address,uint16,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MessageFailed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RegisterToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RetryMessageSuccess"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetMinDstGas"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPrecrime"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemoteAddress"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetUseCustomAdapterParams"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetWithdrawalFeeBps"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UnwrapToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WrapToken"): EventFragment;
}
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
interface RegisterTokenEventObject {
    localToken: string;
    remoteChainId: number;
    remoteToken: string;
}
type RegisterTokenEvent = TypedEvent<[
    string,
    number,
    string
], RegisterTokenEventObject>;
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
interface SetWithdrawalFeeBpsEventObject {
    withdrawalFeeBps: number;
}
type SetWithdrawalFeeBpsEvent = TypedEvent<[
    number
], SetWithdrawalFeeBpsEventObject>;
type SetWithdrawalFeeBpsEventFilter = TypedEventFilter<SetWithdrawalFeeBpsEvent>;
interface UnwrapTokenEventObject {
    localToken: string;
    remoteToken: string;
    remoteChainId: number;
    to: string;
    amount: BigNumber;
}
type UnwrapTokenEvent = TypedEvent<[
    string,
    string,
    number,
    string,
    BigNumber
], UnwrapTokenEventObject>;
type UnwrapTokenEventFilter = TypedEventFilter<UnwrapTokenEvent>;
interface WrapTokenEventObject {
    localToken: string;
    remoteToken: string;
    remoteChainId: number;
    to: string;
    amount: BigNumber;
}
type WrapTokenEvent = TypedEvent<[
    string,
    string,
    number,
    string,
    BigNumber
], WrapTokenEventObject>;
type WrapTokenEventFilter = TypedEventFilter<WrapTokenEvent>;
interface WrappedTokenBridge$1 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: WrappedTokenBridgeInterface;
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
        PT_MINT(overrides?: CallOverrides): Promise<[number]>;
        PT_UNLOCK(overrides?: CallOverrides): Promise<[number]>;
        TOTAL_BPS(overrides?: CallOverrides): Promise<[number]>;
        bridge(localToken: PromiseOrValue<string>, remoteChainId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, unwrapWeth: PromiseOrValue<boolean>, callParams: LzLib.CallParamsStruct, adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        estimateBridgeFee(remoteChainId: PromiseOrValue<BigNumberish>, useZro: PromiseOrValue<boolean>, adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        localToRemote(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        lzEndpoint(overrides?: CallOverrides): Promise<[string]>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        precrime(overrides?: CallOverrides): Promise<[string]>;
        registerToken(localToken: PromiseOrValue<string>, remoteChainId: PromiseOrValue<BigNumberish>, remoteToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        remoteToLocal(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
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
        setTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setWithdrawalFeeBps(_withdrawalFeeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        totalValueLocked(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<[boolean]>;
        withdrawalFeeBps(overrides?: CallOverrides): Promise<[number]>;
    };
    PT_MINT(overrides?: CallOverrides): Promise<number>;
    PT_UNLOCK(overrides?: CallOverrides): Promise<number>;
    TOTAL_BPS(overrides?: CallOverrides): Promise<number>;
    bridge(localToken: PromiseOrValue<string>, remoteChainId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, unwrapWeth: PromiseOrValue<boolean>, callParams: LzLib.CallParamsStruct, adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    estimateBridgeFee(remoteChainId: PromiseOrValue<BigNumberish>, useZro: PromiseOrValue<boolean>, adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    localToRemote(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    lzEndpoint(overrides?: CallOverrides): Promise<string>;
    lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    precrime(overrides?: CallOverrides): Promise<string>;
    registerToken(localToken: PromiseOrValue<string>, remoteChainId: PromiseOrValue<BigNumberish>, remoteToken: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    remoteToLocal(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
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
    setTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setWithdrawalFeeBps(_withdrawalFeeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    totalValueLocked(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    useCustomAdapterParams(overrides?: CallOverrides): Promise<boolean>;
    withdrawalFeeBps(overrides?: CallOverrides): Promise<number>;
    callStatic: {
        PT_MINT(overrides?: CallOverrides): Promise<number>;
        PT_UNLOCK(overrides?: CallOverrides): Promise<number>;
        TOTAL_BPS(overrides?: CallOverrides): Promise<number>;
        bridge(localToken: PromiseOrValue<string>, remoteChainId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, unwrapWeth: PromiseOrValue<boolean>, callParams: LzLib.CallParamsStruct, adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        estimateBridgeFee(remoteChainId: PromiseOrValue<BigNumberish>, useZro: PromiseOrValue<boolean>, adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        localToRemote(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        lzEndpoint(overrides?: CallOverrides): Promise<string>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        precrime(overrides?: CallOverrides): Promise<string>;
        registerToken(localToken: PromiseOrValue<string>, remoteChainId: PromiseOrValue<BigNumberish>, remoteToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        remoteToLocal(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPrecrime(_precrime: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setWithdrawalFeeBps(_withdrawalFeeBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        totalValueLocked(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<boolean>;
        withdrawalFeeBps(overrides?: CallOverrides): Promise<number>;
    };
    filters: {
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter;
        MessageFailed(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "RegisterToken(address,uint16,address)"(localToken?: null, remoteChainId?: null, remoteToken?: null): RegisterTokenEventFilter;
        RegisterToken(localToken?: null, remoteChainId?: null, remoteToken?: null): RegisterTokenEventFilter;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter;
        RetryMessageSuccess(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter;
        "SetMinDstGas(uint16,uint16,uint256)"(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter;
        SetMinDstGas(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter;
        "SetPrecrime(address)"(precrime?: null): SetPrecrimeEventFilter;
        SetPrecrime(precrime?: null): SetPrecrimeEventFilter;
        "SetTrustedRemote(uint16,bytes)"(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter;
        SetTrustedRemote(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter;
        "SetTrustedRemoteAddress(uint16,bytes)"(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter;
        SetTrustedRemoteAddress(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter;
        "SetUseCustomAdapterParams(bool)"(useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter;
        SetUseCustomAdapterParams(useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter;
        "SetWithdrawalFeeBps(uint16)"(withdrawalFeeBps?: null): SetWithdrawalFeeBpsEventFilter;
        SetWithdrawalFeeBps(withdrawalFeeBps?: null): SetWithdrawalFeeBpsEventFilter;
        "UnwrapToken(address,address,uint16,address,uint256)"(localToken?: null, remoteToken?: null, remoteChainId?: null, to?: null, amount?: null): UnwrapTokenEventFilter;
        UnwrapToken(localToken?: null, remoteToken?: null, remoteChainId?: null, to?: null, amount?: null): UnwrapTokenEventFilter;
        "WrapToken(address,address,uint16,address,uint256)"(localToken?: null, remoteToken?: null, remoteChainId?: null, to?: null, amount?: null): WrapTokenEventFilter;
        WrapToken(localToken?: null, remoteToken?: null, remoteChainId?: null, to?: null, amount?: null): WrapTokenEventFilter;
    };
    estimateGas: {
        PT_MINT(overrides?: CallOverrides): Promise<BigNumber>;
        PT_UNLOCK(overrides?: CallOverrides): Promise<BigNumber>;
        TOTAL_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        bridge(localToken: PromiseOrValue<string>, remoteChainId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, unwrapWeth: PromiseOrValue<boolean>, callParams: LzLib.CallParamsStruct, adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        estimateBridgeFee(remoteChainId: PromiseOrValue<BigNumberish>, useZro: PromiseOrValue<boolean>, adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        localToRemote(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        lzEndpoint(overrides?: CallOverrides): Promise<BigNumber>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        precrime(overrides?: CallOverrides): Promise<BigNumber>;
        registerToken(localToken: PromiseOrValue<string>, remoteChainId: PromiseOrValue<BigNumberish>, remoteToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        remoteToLocal(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
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
        setTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setWithdrawalFeeBps(_withdrawalFeeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        totalValueLocked(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawalFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        PT_MINT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PT_UNLOCK(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        TOTAL_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bridge(localToken: PromiseOrValue<string>, remoteChainId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, unwrapWeth: PromiseOrValue<boolean>, callParams: LzLib.CallParamsStruct, adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        estimateBridgeFee(remoteChainId: PromiseOrValue<BigNumberish>, useZro: PromiseOrValue<boolean>, adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        localToRemote(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzEndpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        precrime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerToken(localToken: PromiseOrValue<string>, remoteChainId: PromiseOrValue<BigNumberish>, remoteToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        remoteToLocal(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
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
        setTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setWithdrawalFeeBps(_withdrawalFeeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        totalValueLocked(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawalFeeBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

type BridgeContract = {
    address: string;
    chainKey: ChainKey;
};
type WrappedAssetBridgeConfig = {
    version: number | string;
    deployments: {
        [chainKey: ChainKey]: {
            eid: number;
            bridgeWrapped?: BridgeContract;
            bridgeOriginal?: BridgeContract;
        };
    };
    tokens: (Token | Coin)[][];
};

type BridgeFee = {
    bridgeFee: CurrencyAmount;
};
type AbstractTokenBridge<Signer> = BridgeApi<Signer, BridgeFee>;
declare abstract class BaseTokenBridge {
    protected config: WrappedAssetBridgeConfig;
    constructor(config: WrappedAssetBridgeConfig);
    getOptions(input: GetOptionsInput): Promise<BridgeOptions>;
    protected chainKeyToEndpointId(chainKey: string): number;
    protected tryGetDeployment(chainKey: ChainKey): {
        eid: number;
        bridgeWrapped?: BridgeContract;
        bridgeOriginal?: BridgeContract;
    } | undefined;
    protected getDeployment(chainKey: ChainKey): {
        eid: number;
        bridgeWrapped?: BridgeContract;
        bridgeOriginal?: BridgeContract;
    };
    protected validateInput(input: TransferInput): asserts input is Required<TransferInput>;
}

declare class OriginalTokenBridge extends BaseTokenBridge implements AbstractTokenBridge<Signer> {
    protected providerFactory: ProviderFactory;
    protected bridge: BridgeContract;
    protected readonly erc20: ERC20__api;
    constructor(providerFactory: ProviderFactory, bridge: BridgeContract, config: WrappedAssetBridgeConfig);
    supportsClaim(currency: Currency): boolean;
    supportsRegister(currency: Currency): boolean;
    getDuration(input: GetDurationInput): Promise<number>;
    getAllowance({ token, address }: GetAllowanceInput): Promise<CurrencyAmount>;
    approve({ amount }: ApproveInput): Promise<Transaction<Signer>>;
    supportsTransfer(srcToken: Currency, dstToken: Currency): boolean;
    isRegistered({ token, address }: IsRegisteredInput): Promise<boolean>;
    getUnclaimed({ token, address }: GetUnclaimedInput): Promise<CurrencyAmount<Currency>>;
    claim(input: ClaimInput): Promise<Transaction<Signer>>;
    register(input: RegisterInput): Promise<Transaction<Signer>>;
    getExtraGas({ srcToken, dstToken }: GetExtraGasInput): Promise<number>;
    transfer(input: TransferInput): Promise<Transaction<Signer>>;
    private transferToken;
    private transferEth;
    getMessageFee({ srcToken, dstToken, adapterParams }: GetMessageFeeInput): Promise<FeeQuote>;
    getOutput({ srcAmount, dstToken }: GetOutputInput): Promise<BridgeOutput<BridgeFee>>;
    getLimit({ srcToken }: GetLimitInput): Promise<CurrencyAmount<Currency>>;
    protected getContract(): OriginalTokenBridge$1;
    protected buildLayerZeroTxParams(adapterParams: AdapterParams): string;
    protected buildCallParams(input: TransferInput): LzLib.CallParamsStruct;
}

declare class WrappedTokenBridge extends BaseTokenBridge implements AbstractTokenBridge<Signer> {
    protected providerFactory: ProviderFactory;
    protected bridge: BridgeContract;
    protected readonly erc20: ERC20__api;
    constructor(providerFactory: ProviderFactory, bridge: BridgeContract, config: WrappedAssetBridgeConfig);
    supportsClaim(currency: Currency): boolean;
    supportsRegister(currency: Currency): boolean;
    getDuration(input: GetDurationInput): Promise<number>;
    getAllowance({ token, address }: GetAllowanceInput): Promise<CurrencyAmount<Currency>>;
    approve({ amount }: ApproveInput): Promise<Transaction<Signer>>;
    supportsTransfer(srcToken: Currency, dstToken: Currency): boolean;
    isRegistered({ token, address }: IsRegisteredInput): Promise<boolean>;
    getUnclaimed({ token, address }: GetUnclaimedInput): Promise<CurrencyAmount<Currency>>;
    claim(input: ClaimInput): Promise<Transaction<Signer>>;
    register(input: RegisterInput): Promise<Transaction<Signer>>;
    getExtraGas({ srcToken, dstToken }: GetExtraGasInput): Promise<number>;
    transfer(input: TransferInput): Promise<Transaction<Signer>>;
    private transferToken;
    private transferEth;
    protected getBridgeFee(inputAmount: CurrencyAmount, dstToken: Currency): Promise<CurrencyAmount>;
    protected getWithdrawFeeBps: () => Promise<number>;
    getMessageFee({ srcToken, dstToken, adapterParams }: GetMessageFeeInput): Promise<FeeQuote>;
    getOutput({ srcAmount, dstToken }: GetOutputInput): Promise<BridgeOutput<BridgeFee>>;
    protected getWeth(chainKey: string): Promise<Token>;
    getLimit({ srcToken, dstToken }: GetLimitInput): Promise<CurrencyAmount>;
    protected getContract(): WrappedTokenBridge$1;
    protected buildLayerZeroTxParams(adapterParams: AdapterParams): string;
    protected buildCallParams(input: TransferInput): LzLib.CallParamsStruct;
}

declare const wrappedAssetBridgeConfigSchema: z.ZodEffects<z.ZodObject<{
    version: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
    tokens: z.ZodArray<z.ZodArray<z.ZodType<_layerzerolabs_ui_core.Currency, z.ZodTypeDef, {
        symbol: string;
        decimals: number;
        chainKey: string;
        address: string;
        name?: string | undefined;
    } | {
        symbol: string;
        decimals: number;
        chainKey: string;
        name?: string | undefined;
    }>, "many">, "many">;
    deployments: z.ZodRecord<z.ZodString, z.ZodObject<{
        eid: z.ZodNumber;
        bridgeOriginal: z.ZodOptional<z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>>;
        bridgeWrapped: z.ZodOptional<z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        eid: number;
        bridgeOriginal?: {
            address: string;
        } | undefined;
        bridgeWrapped?: {
            address: string;
        } | undefined;
    }, {
        eid: number;
        bridgeOriginal?: {
            address: string;
        } | undefined;
        bridgeWrapped?: {
            address: string;
        } | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    version: string | number;
    tokens: _layerzerolabs_ui_core.Currency[][];
    deployments: Record<string, {
        eid: number;
        bridgeOriginal?: {
            address: string;
        } | undefined;
        bridgeWrapped?: {
            address: string;
        } | undefined;
    }>;
}, {
    version: string | number;
    tokens: ({
        symbol: string;
        decimals: number;
        chainKey: string;
        address: string;
        name?: string | undefined;
    } | {
        symbol: string;
        decimals: number;
        chainKey: string;
        name?: string | undefined;
    })[][];
    deployments: Record<string, {
        eid: number;
        bridgeOriginal?: {
            address: string;
        } | undefined;
        bridgeWrapped?: {
            address: string;
        } | undefined;
    }>;
}>, WrappedAssetBridgeConfig, {
    version: string | number;
    tokens: ({
        symbol: string;
        decimals: number;
        chainKey: string;
        address: string;
        name?: string | undefined;
    } | {
        symbol: string;
        decimals: number;
        chainKey: string;
        name?: string | undefined;
    })[][];
    deployments: Record<string, {
        eid: number;
        bridgeOriginal?: {
            address: string;
        } | undefined;
        bridgeWrapped?: {
            address: string;
        } | undefined;
    }>;
}>;
type SerializedWrappedAssetBridgeConfig = z.input<typeof wrappedAssetBridgeConfigSchema>;
declare function serializeWrappedAssetBridgeConfig(input: WrappedAssetBridgeConfig): SerializedWrappedAssetBridgeConfig;

declare function createWrappedAssetBridge(config: WrappedAssetBridgeConfig, providerFactory: ProviderFactory): AbstractTokenBridge<Signer>[];

declare function createWrappedAssetBridgeConfig(input: SerializedWrappedAssetBridgeConfig): WrappedAssetBridgeConfig;

export { BridgeContract, OriginalTokenBridge, SerializedWrappedAssetBridgeConfig, WrappedAssetBridgeConfig, WrappedTokenBridge, createWrappedAssetBridge, createWrappedAssetBridgeConfig, serializeWrappedAssetBridgeConfig, wrappedAssetBridgeConfigSchema };
