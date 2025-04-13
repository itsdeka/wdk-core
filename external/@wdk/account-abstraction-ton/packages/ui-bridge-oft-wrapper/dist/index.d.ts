import z from 'zod';
import { Event, EventFilter, BytesLike, BaseContract, Signer, CallOverrides, BigNumber, BigNumberish, Overrides, ContractTransaction, PayableOverrides, PopulatedTransaction, utils } from 'ethers';
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import * as _layerzerolabs_ui_bridge_oft from '@layerzerolabs/ui-bridge-oft';
import { OftBridgeConfig } from '@layerzerolabs/ui-bridge-oft';
import { BridgeApi, BridgeOptions, GetDurationInput, GetAllowanceInput, ApproveInput, IsRegisteredInput, GetUnclaimedInput, ClaimInput, RegisterInput, TransferInput, GetMessageFeeInput, GetExtraGasInput, GetOutputInput, BridgeOutput, GetLimitInput } from '@layerzerolabs/ui-bridge-sdk/v1';
import { CurrencyAmount, ChainKey, Currency, Transaction, FeeQuote, AdapterParams } from '@layerzerolabs/ui-core';
import { ProviderFactory, ERC20__api } from '@layerzerolabs/ui-evm';

declare const serializedWrapperConfig: z.ZodObject<{
    deployments: z.ZodRecord<z.ZodString, z.ZodObject<{
        oftWrapper: z.ZodObject<{
            version: z.ZodOptional<z.ZodNumber>;
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
            version?: number | undefined;
        }, {
            address: string;
            version?: number | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        oftWrapper: {
            address: string;
            version?: number | undefined;
        };
    }, {
        oftWrapper: {
            address: string;
            version?: number | undefined;
        };
    }>>;
}, "strip", z.ZodTypeAny, {
    deployments: Record<string, {
        oftWrapper: {
            address: string;
            version?: number | undefined;
        };
    }>;
}, {
    deployments: Record<string, {
        oftWrapper: {
            address: string;
            version?: number | undefined;
        };
    }>;
}>;
declare const serializedPartnerConfig: z.ZodObject<{
    caller: z.ZodString;
    callerBps: z.ZodNumber;
    partnerId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    caller: string;
    callerBps: number;
    partnerId: number;
}, {
    caller: string;
    callerBps: number;
    partnerId: number;
}>;
type OftWrapperConfig = z.infer<typeof serializedWrapperConfig>;
type OftPartnerConfig = z.infer<typeof serializedPartnerConfig>;

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

declare namespace ICommonOFT$2 {
    type LzCallParamsStruct = {
        refundAddress: PromiseOrValue<string>;
        zroPaymentAddress: PromiseOrValue<string>;
        adapterParams: PromiseOrValue<BytesLike>;
    };
    type LzCallParamsStructOutput = [string, string, string] & {
        refundAddress: string;
        zroPaymentAddress: string;
        adapterParams: string;
    };
}
interface OFTInterface extends utils.Interface {
    functions: {
        "BP_DENOMINATOR()": FunctionFragment;
        "NO_EXTRA_GAS()": FunctionFragment;
        "PT_SEND()": FunctionFragment;
        "PT_SEND_AND_CALL()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "callOnOFTReceived(uint16,bytes,uint64,bytes32,address,uint256,bytes,uint256)": FunctionFragment;
        "chainIdToFeeBps(uint16)": FunctionFragment;
        "circulatingSupply()": FunctionFragment;
        "creditedPackets(uint16,bytes,uint64)": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "defaultFeeBp()": FunctionFragment;
        "estimateSendAndCallFee(uint16,bytes32,uint256,bytes,uint64,bool,bytes)": FunctionFragment;
        "estimateSendFee(uint16,bytes32,uint256,bool,bytes)": FunctionFragment;
        "failedMessages(uint16,bytes,uint64)": FunctionFragment;
        "feeOwner()": FunctionFragment;
        "forceResumeReceive(uint16,bytes)": FunctionFragment;
        "getConfig(uint16,uint16,address,uint256)": FunctionFragment;
        "getTrustedRemoteAddress(uint16)": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "isTrustedRemote(uint16,bytes)": FunctionFragment;
        "lzEndpoint()": FunctionFragment;
        "lzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "minDstGasLookup(uint16,uint16)": FunctionFragment;
        "name()": FunctionFragment;
        "nonblockingLzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "precrime()": FunctionFragment;
        "quoteOFTFee(uint16,uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "retryMessage(uint16,bytes,uint64,bytes)": FunctionFragment;
        "sendAndCall(address,uint16,bytes32,uint256,uint256,bytes,uint64,(address,address,bytes))": FunctionFragment;
        "sendFrom(address,uint16,bytes32,uint256,uint256,(address,address,bytes))": FunctionFragment;
        "setConfig(uint16,uint16,uint256,bytes)": FunctionFragment;
        "setDefaultFeeBp(uint16)": FunctionFragment;
        "setFeeBp(uint16,bool,uint16)": FunctionFragment;
        "setFeeOwner(address)": FunctionFragment;
        "setMinDstGas(uint16,uint16,uint256)": FunctionFragment;
        "setPrecrime(address)": FunctionFragment;
        "setReceiveVersion(uint16)": FunctionFragment;
        "setSendVersion(uint16)": FunctionFragment;
        "setTrustedRemote(uint16,bytes)": FunctionFragment;
        "setTrustedRemoteAddress(uint16,bytes)": FunctionFragment;
        "setUseCustomAdapterParams(bool)": FunctionFragment;
        "sharedDecimals()": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "token()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "trustedRemoteLookup(uint16)": FunctionFragment;
        "useCustomAdapterParams()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "BP_DENOMINATOR" | "NO_EXTRA_GAS" | "PT_SEND" | "PT_SEND_AND_CALL" | "allowance" | "approve" | "balanceOf" | "callOnOFTReceived" | "chainIdToFeeBps" | "circulatingSupply" | "creditedPackets" | "decimals" | "decreaseAllowance" | "defaultFeeBp" | "estimateSendAndCallFee" | "estimateSendFee" | "failedMessages" | "feeOwner" | "forceResumeReceive" | "getConfig" | "getTrustedRemoteAddress" | "increaseAllowance" | "isTrustedRemote" | "lzEndpoint" | "lzReceive" | "minDstGasLookup" | "name" | "nonblockingLzReceive" | "owner" | "precrime" | "quoteOFTFee" | "renounceOwnership" | "retryMessage" | "sendAndCall" | "sendFrom" | "setConfig" | "setDefaultFeeBp" | "setFeeBp" | "setFeeOwner" | "setMinDstGas" | "setPrecrime" | "setReceiveVersion" | "setSendVersion" | "setTrustedRemote" | "setTrustedRemoteAddress" | "setUseCustomAdapterParams" | "sharedDecimals" | "supportsInterface" | "symbol" | "token" | "totalSupply" | "transfer" | "transferFrom" | "transferOwnership" | "trustedRemoteLookup" | "useCustomAdapterParams"): FunctionFragment;
    encodeFunctionData(functionFragment: "BP_DENOMINATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "NO_EXTRA_GAS", values?: undefined): string;
    encodeFunctionData(functionFragment: "PT_SEND", values?: undefined): string;
    encodeFunctionData(functionFragment: "PT_SEND_AND_CALL", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "callOnOFTReceived", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "chainIdToFeeBps", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "circulatingSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditedPackets", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "defaultFeeBp", values?: undefined): string;
    encodeFunctionData(functionFragment: "estimateSendAndCallFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "estimateSendFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "failedMessages", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "feeOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "forceResumeReceive", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getConfig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTrustedRemoteAddress", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isTrustedRemote", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "lzEndpoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "lzReceive", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "minDstGasLookup", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonblockingLzReceive", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "precrime", values?: undefined): string;
    encodeFunctionData(functionFragment: "quoteOFTFee", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "retryMessage", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "sendAndCall", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        ICommonOFT$2.LzCallParamsStruct
    ]): string;
    encodeFunctionData(functionFragment: "sendFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        ICommonOFT$2.LzCallParamsStruct
    ]): string;
    encodeFunctionData(functionFragment: "setConfig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setDefaultFeeBp", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setFeeBp", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setFeeOwner", values: [PromiseOrValue<string>]): string;
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
    encodeFunctionData(functionFragment: "sharedDecimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "trustedRemoteLookup", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "useCustomAdapterParams", values?: undefined): string;
    decodeFunctionResult(functionFragment: "BP_DENOMINATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NO_EXTRA_GAS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PT_SEND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PT_SEND_AND_CALL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callOnOFTReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainIdToFeeBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "circulatingSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditedPackets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultFeeBp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendAndCallFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failedMessages", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceResumeReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzEndpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minDstGasLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonblockingLzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "precrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteOFTFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "retryMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultFeeBp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeBp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinDstGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrecrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReceiveVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSendVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUseCustomAdapterParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sharedDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "trustedRemoteLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "useCustomAdapterParams", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "CallOFTReceivedSuccess(uint16,bytes,uint64,bytes32)": EventFragment;
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)": EventFragment;
        "NonContractAddress(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ReceiveFromChain(uint16,address,uint256)": EventFragment;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)": EventFragment;
        "SendToChain(uint16,address,bytes32,uint256)": EventFragment;
        "SetDefaultFeeBp(uint16)": EventFragment;
        "SetFeeBp(uint16,bool,uint16)": EventFragment;
        "SetFeeOwner(address)": EventFragment;
        "SetMinDstGas(uint16,uint16,uint256)": EventFragment;
        "SetPrecrime(address)": EventFragment;
        "SetTrustedRemote(uint16,bytes)": EventFragment;
        "SetTrustedRemoteAddress(uint16,bytes)": EventFragment;
        "SetUseCustomAdapterParams(bool)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CallOFTReceivedSuccess"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MessageFailed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NonContractAddress"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceiveFromChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RetryMessageSuccess"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendToChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetDefaultFeeBp"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetFeeBp"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetFeeOwner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetMinDstGas"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPrecrime"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemoteAddress"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetUseCustomAdapterParams"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
interface CallOFTReceivedSuccessEventObject$1 {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _hash: string;
}
type CallOFTReceivedSuccessEvent$1 = TypedEvent<[
    number,
    string,
    BigNumber,
    string
], CallOFTReceivedSuccessEventObject$1>;
type CallOFTReceivedSuccessEventFilter$1 = TypedEventFilter<CallOFTReceivedSuccessEvent$1>;
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
interface NonContractAddressEventObject$1 {
    _address: string;
}
type NonContractAddressEvent$1 = TypedEvent<[
    string
], NonContractAddressEventObject$1>;
type NonContractAddressEventFilter$1 = TypedEventFilter<NonContractAddressEvent$1>;
interface OwnershipTransferredEventObject$2 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$2 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$2>;
type OwnershipTransferredEventFilter$2 = TypedEventFilter<OwnershipTransferredEvent$2>;
interface ReceiveFromChainEventObject$1 {
    _srcChainId: number;
    _to: string;
    _amount: BigNumber;
}
type ReceiveFromChainEvent$1 = TypedEvent<[
    number,
    string,
    BigNumber
], ReceiveFromChainEventObject$1>;
type ReceiveFromChainEventFilter$1 = TypedEventFilter<ReceiveFromChainEvent$1>;
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
interface SendToChainEventObject$1 {
    _dstChainId: number;
    _from: string;
    _toAddress: string;
    _amount: BigNumber;
}
type SendToChainEvent$1 = TypedEvent<[
    number,
    string,
    string,
    BigNumber
], SendToChainEventObject$1>;
type SendToChainEventFilter$1 = TypedEventFilter<SendToChainEvent$1>;
interface SetDefaultFeeBpEventObject$1 {
    feeBp: number;
}
type SetDefaultFeeBpEvent$1 = TypedEvent<[
    number
], SetDefaultFeeBpEventObject$1>;
type SetDefaultFeeBpEventFilter$1 = TypedEventFilter<SetDefaultFeeBpEvent$1>;
interface SetFeeBpEventObject$1 {
    dstchainId: number;
    enabled: boolean;
    feeBp: number;
}
type SetFeeBpEvent$1 = TypedEvent<[
    number,
    boolean,
    number
], SetFeeBpEventObject$1>;
type SetFeeBpEventFilter$1 = TypedEventFilter<SetFeeBpEvent$1>;
interface SetFeeOwnerEventObject$1 {
    feeOwner: string;
}
type SetFeeOwnerEvent$1 = TypedEvent<[string], SetFeeOwnerEventObject$1>;
type SetFeeOwnerEventFilter$1 = TypedEventFilter<SetFeeOwnerEvent$1>;
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
    _useCustomAdapterParams: boolean;
}
type SetUseCustomAdapterParamsEvent$1 = TypedEvent<[
    boolean
], SetUseCustomAdapterParamsEventObject$1>;
type SetUseCustomAdapterParamsEventFilter$1 = TypedEventFilter<SetUseCustomAdapterParamsEvent$1>;
interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
type TransferEventFilter = TypedEventFilter<TransferEvent>;
interface OFT extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OFTInterface;
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
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<[BigNumber]>;
        PT_SEND(overrides?: CallOverrides): Promise<[number]>;
        PT_SEND_AND_CALL(overrides?: CallOverrides): Promise<[number]>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        callOnOFTReceived(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _gasForCall: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        chainIdToFeeBps(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number, boolean] & {
            feeBP: number;
            enabled: boolean;
        }>;
        circulatingSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        defaultFeeBp(overrides?: CallOverrides): Promise<[number]>;
        estimateSendAndCallFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        feeOwner(overrides?: CallOverrides): Promise<[string]>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        lzEndpoint(overrides?: CallOverrides): Promise<[string]>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        precrime(overrides?: CallOverrides): Promise<[string]>;
        quoteOFTFee(_dstChainId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            fee: BigNumber;
        }>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendAndCall(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$2.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$2.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDefaultFeeBp(_feeBp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFeeBp(_dstChainId: PromiseOrValue<BigNumberish>, _enabled: PromiseOrValue<boolean>, _feeBp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFeeOwner(_feeOwner: PromiseOrValue<string>, overrides?: Overrides & {
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
        sharedDecimals(overrides?: CallOverrides): Promise<[number]>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<[boolean]>;
    };
    BP_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;
    NO_EXTRA_GAS(overrides?: CallOverrides): Promise<BigNumber>;
    PT_SEND(overrides?: CallOverrides): Promise<number>;
    PT_SEND_AND_CALL(overrides?: CallOverrides): Promise<number>;
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    callOnOFTReceived(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _gasForCall: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    chainIdToFeeBps(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number, boolean] & {
        feeBP: number;
        enabled: boolean;
    }>;
    circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
    creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    defaultFeeBp(overrides?: CallOverrides): Promise<number>;
    estimateSendAndCallFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    feeOwner(overrides?: CallOverrides): Promise<string>;
    forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    lzEndpoint(overrides?: CallOverrides): Promise<string>;
    lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    name(overrides?: CallOverrides): Promise<string>;
    nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    precrime(overrides?: CallOverrides): Promise<string>;
    quoteOFTFee(_dstChainId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendAndCall(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$2.LzCallParamsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$2.LzCallParamsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDefaultFeeBp(_feeBp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFeeBp(_dstChainId: PromiseOrValue<BigNumberish>, _enabled: PromiseOrValue<boolean>, _feeBp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFeeOwner(_feeOwner: PromiseOrValue<string>, overrides?: Overrides & {
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
    sharedDecimals(overrides?: CallOverrides): Promise<number>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    token(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    useCustomAdapterParams(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        BP_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<BigNumber>;
        PT_SEND(overrides?: CallOverrides): Promise<number>;
        PT_SEND_AND_CALL(overrides?: CallOverrides): Promise<number>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        callOnOFTReceived(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _gasForCall: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        chainIdToFeeBps(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number, boolean] & {
            feeBP: number;
            enabled: boolean;
        }>;
        circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
        creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        defaultFeeBp(overrides?: CallOverrides): Promise<number>;
        estimateSendAndCallFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        feeOwner(overrides?: CallOverrides): Promise<string>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        lzEndpoint(overrides?: CallOverrides): Promise<string>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        precrime(overrides?: CallOverrides): Promise<string>;
        quoteOFTFee(_dstChainId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        sendAndCall(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$2.LzCallParamsStruct, overrides?: CallOverrides): Promise<void>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$2.LzCallParamsStruct, overrides?: CallOverrides): Promise<void>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setDefaultFeeBp(_feeBp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setFeeBp(_dstChainId: PromiseOrValue<BigNumberish>, _enabled: PromiseOrValue<boolean>, _feeBp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setFeeOwner(_feeOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPrecrime(_precrime: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        sharedDecimals(overrides?: CallOverrides): Promise<number>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        token(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        "CallOFTReceivedSuccess(uint16,bytes,uint64,bytes32)"(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: null, _nonce?: null, _hash?: null): CallOFTReceivedSuccessEventFilter$1;
        CallOFTReceivedSuccess(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: null, _nonce?: null, _hash?: null): CallOFTReceivedSuccessEventFilter$1;
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter$1;
        MessageFailed(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter$1;
        "NonContractAddress(address)"(_address?: null): NonContractAddressEventFilter$1;
        NonContractAddress(_address?: null): NonContractAddressEventFilter$1;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$2;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$2;
        "ReceiveFromChain(uint16,address,uint256)"(_srcChainId?: PromiseOrValue<BigNumberish> | null, _to?: PromiseOrValue<string> | null, _amount?: null): ReceiveFromChainEventFilter$1;
        ReceiveFromChain(_srcChainId?: PromiseOrValue<BigNumberish> | null, _to?: PromiseOrValue<string> | null, _amount?: null): ReceiveFromChainEventFilter$1;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter$1;
        RetryMessageSuccess(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter$1;
        "SendToChain(uint16,address,bytes32,uint256)"(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _amount?: null): SendToChainEventFilter$1;
        SendToChain(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _amount?: null): SendToChainEventFilter$1;
        "SetDefaultFeeBp(uint16)"(feeBp?: null): SetDefaultFeeBpEventFilter$1;
        SetDefaultFeeBp(feeBp?: null): SetDefaultFeeBpEventFilter$1;
        "SetFeeBp(uint16,bool,uint16)"(dstchainId?: null, enabled?: null, feeBp?: null): SetFeeBpEventFilter$1;
        SetFeeBp(dstchainId?: null, enabled?: null, feeBp?: null): SetFeeBpEventFilter$1;
        "SetFeeOwner(address)"(feeOwner?: null): SetFeeOwnerEventFilter$1;
        SetFeeOwner(feeOwner?: null): SetFeeOwnerEventFilter$1;
        "SetMinDstGas(uint16,uint16,uint256)"(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter$1;
        SetMinDstGas(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter$1;
        "SetPrecrime(address)"(precrime?: null): SetPrecrimeEventFilter$1;
        SetPrecrime(precrime?: null): SetPrecrimeEventFilter$1;
        "SetTrustedRemote(uint16,bytes)"(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter$1;
        SetTrustedRemote(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter$1;
        "SetTrustedRemoteAddress(uint16,bytes)"(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter$1;
        SetTrustedRemoteAddress(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter$1;
        "SetUseCustomAdapterParams(bool)"(_useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter$1;
        SetUseCustomAdapterParams(_useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter$1;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        BP_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<BigNumber>;
        PT_SEND(overrides?: CallOverrides): Promise<BigNumber>;
        PT_SEND_AND_CALL(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        callOnOFTReceived(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _gasForCall: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        chainIdToFeeBps(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
        creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        defaultFeeBp(overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendAndCallFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        feeOwner(overrides?: CallOverrides): Promise<BigNumber>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        lzEndpoint(overrides?: CallOverrides): Promise<BigNumber>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        precrime(overrides?: CallOverrides): Promise<BigNumber>;
        quoteOFTFee(_dstChainId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendAndCall(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$2.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$2.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDefaultFeeBp(_feeBp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFeeBp(_dstChainId: PromiseOrValue<BigNumberish>, _enabled: PromiseOrValue<boolean>, _feeBp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFeeOwner(_feeOwner: PromiseOrValue<string>, overrides?: Overrides & {
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
        sharedDecimals(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        BP_DENOMINATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PT_SEND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PT_SEND_AND_CALL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callOnOFTReceived(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _gasForCall: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        chainIdToFeeBps(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        circulatingSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        defaultFeeBp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSendAndCallFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzEndpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        precrime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteOFTFee(_dstChainId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendAndCall(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$2.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$2.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDefaultFeeBp(_feeBp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFeeBp(_dstChainId: PromiseOrValue<BigNumberish>, _enabled: PromiseOrValue<boolean>, _feeBp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFeeOwner(_feeOwner: PromiseOrValue<string>, overrides?: Overrides & {
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
        sharedDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

declare namespace IOFTWrapper {
    type FeeObjStruct = {
        callerBps: PromiseOrValue<BigNumberish>;
        caller: PromiseOrValue<string>;
        partnerId: PromiseOrValue<BytesLike>;
    };
    type FeeObjStructOutput = [BigNumber, string, string] & {
        callerBps: BigNumber;
        caller: string;
        partnerId: string;
    };
}
declare namespace ICommonOFT$1 {
    type LzCallParamsStruct = {
        refundAddress: PromiseOrValue<string>;
        zroPaymentAddress: PromiseOrValue<string>;
        adapterParams: PromiseOrValue<BytesLike>;
    };
    type LzCallParamsStructOutput = [string, string, string] & {
        refundAddress: string;
        zroPaymentAddress: string;
        adapterParams: string;
    };
}
interface OFTWrapperInterface extends utils.Interface {
    functions: {
        "BPS_DENOMINATOR()": FunctionFragment;
        "MAX_UINT()": FunctionFragment;
        "defaultBps()": FunctionFragment;
        "estimateSendFee(address,uint16,bytes,uint256,bool,bytes,(uint256,address,bytes2))": FunctionFragment;
        "estimateSendFeeV2(address,uint16,bytes32,uint256,bool,bytes,(uint256,address,bytes2))": FunctionFragment;
        "getAmountAndFees(address,uint256,uint256)": FunctionFragment;
        "oftBps(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "sendNativeOFT(address,uint16,bytes,uint256,uint256,address,address,bytes,(uint256,address,bytes2))": FunctionFragment;
        "sendNativeOFTFeeV2(address,uint16,bytes32,uint256,uint256,(address,address,bytes),(uint256,address,bytes2))": FunctionFragment;
        "sendOFT(address,uint16,bytes,uint256,uint256,address,address,bytes,(uint256,address,bytes2))": FunctionFragment;
        "sendOFTFeeV2(address,uint16,bytes32,uint256,uint256,(address,address,bytes),(uint256,address,bytes2))": FunctionFragment;
        "sendOFTV2(address,uint16,bytes32,uint256,uint256,(address,address,bytes),(uint256,address,bytes2))": FunctionFragment;
        "sendProxyOFT(address,uint16,bytes,uint256,uint256,address,address,bytes,(uint256,address,bytes2))": FunctionFragment;
        "sendProxyOFTFeeV2(address,uint16,bytes32,uint256,uint256,(address,address,bytes),(uint256,address,bytes2))": FunctionFragment;
        "sendProxyOFTV2(address,uint16,bytes32,uint256,uint256,(address,address,bytes),(uint256,address,bytes2))": FunctionFragment;
        "setDefaultBps(uint256)": FunctionFragment;
        "setOFTBps(address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "withdrawFees(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "BPS_DENOMINATOR" | "MAX_UINT" | "defaultBps" | "estimateSendFee" | "estimateSendFeeV2" | "getAmountAndFees" | "oftBps" | "owner" | "renounceOwnership" | "sendNativeOFT" | "sendNativeOFTFeeV2" | "sendOFT" | "sendOFTFeeV2" | "sendOFTV2" | "sendProxyOFT" | "sendProxyOFTFeeV2" | "sendProxyOFTV2" | "setDefaultBps" | "setOFTBps" | "transferOwnership" | "withdrawFees"): FunctionFragment;
    encodeFunctionData(functionFragment: "BPS_DENOMINATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_UINT", values?: undefined): string;
    encodeFunctionData(functionFragment: "defaultBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "estimateSendFee", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>,
        IOFTWrapper.FeeObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "estimateSendFeeV2", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>,
        IOFTWrapper.FeeObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "getAmountAndFees", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "oftBps", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "sendNativeOFT", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        IOFTWrapper.FeeObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "sendNativeOFTFeeV2", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        ICommonOFT$1.LzCallParamsStruct,
        IOFTWrapper.FeeObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "sendOFT", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        IOFTWrapper.FeeObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "sendOFTFeeV2", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        ICommonOFT$1.LzCallParamsStruct,
        IOFTWrapper.FeeObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "sendOFTV2", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        ICommonOFT$1.LzCallParamsStruct,
        IOFTWrapper.FeeObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "sendProxyOFT", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        IOFTWrapper.FeeObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "sendProxyOFTFeeV2", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        ICommonOFT$1.LzCallParamsStruct,
        IOFTWrapper.FeeObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "sendProxyOFTV2", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        ICommonOFT$1.LzCallParamsStruct,
        IOFTWrapper.FeeObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "setDefaultBps", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setOFTBps", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdrawFees", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "BPS_DENOMINATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_UINT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendFeeV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountAndFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oftBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendNativeOFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendNativeOFTFeeV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendOFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendOFTFeeV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendOFTV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendProxyOFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendProxyOFTFeeV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendProxyOFTV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOFTBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFees", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
        "WrapperFeeWithdrawn(address,address,uint256)": EventFragment;
        "WrapperFees(bytes2,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WrapperFeeWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WrapperFees"): EventFragment;
}
interface OwnershipTransferredEventObject$1 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$1 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$1>;
type OwnershipTransferredEventFilter$1 = TypedEventFilter<OwnershipTransferredEvent$1>;
interface WrapperFeeWithdrawnEventObject {
    oft: string;
    to: string;
    amount: BigNumber;
}
type WrapperFeeWithdrawnEvent = TypedEvent<[
    string,
    string,
    BigNumber
], WrapperFeeWithdrawnEventObject>;
type WrapperFeeWithdrawnEventFilter = TypedEventFilter<WrapperFeeWithdrawnEvent>;
interface WrapperFeesEventObject {
    partnerId: string;
    token: string;
    wrapperFee: BigNumber;
    callerFee: BigNumber;
}
type WrapperFeesEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], WrapperFeesEventObject>;
type WrapperFeesEventFilter = TypedEventFilter<WrapperFeesEvent>;
interface OFTWrapper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OFTWrapperInterface;
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
        BPS_DENOMINATOR(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_UINT(overrides?: CallOverrides): Promise<[BigNumber]>;
        defaultBps(overrides?: CallOverrides): Promise<[BigNumber]>;
        estimateSendFee(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        estimateSendFeeV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        getAmountAndFees(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _callerBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amount: BigNumber;
            wrapperFee: BigNumber;
            callerFee: BigNumber;
        }>;
        oftBps(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendNativeOFT(_nativeOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendNativeOFTFeeV2(_nativeOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendOFT(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendOFTFeeV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendOFTV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendProxyOFT(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendProxyOFTFeeV2(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendProxyOFTV2(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDefaultBps(_defaultBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setOFTBps(_token: PromiseOrValue<string>, _bps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawFees(_oft: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    BPS_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;
    defaultBps(overrides?: CallOverrides): Promise<BigNumber>;
    estimateSendFee(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    estimateSendFeeV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    getAmountAndFees(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _callerBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        amount: BigNumber;
        wrapperFee: BigNumber;
        callerFee: BigNumber;
    }>;
    oftBps(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendNativeOFT(_nativeOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendNativeOFTFeeV2(_nativeOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendOFT(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendOFTFeeV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendOFTV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendProxyOFT(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendProxyOFTFeeV2(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendProxyOFTV2(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDefaultBps(_defaultBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setOFTBps(_token: PromiseOrValue<string>, _bps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawFees(_oft: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        BPS_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;
        defaultBps(overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendFee(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        estimateSendFeeV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        getAmountAndFees(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _callerBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amount: BigNumber;
            wrapperFee: BigNumber;
            callerFee: BigNumber;
        }>;
        oftBps(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        sendNativeOFT(_nativeOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<void>;
        sendNativeOFTFeeV2(_nativeOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<void>;
        sendOFT(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<void>;
        sendOFTFeeV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<void>;
        sendOFTV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<void>;
        sendProxyOFT(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<void>;
        sendProxyOFTFeeV2(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<void>;
        sendProxyOFTV2(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<void>;
        setDefaultBps(_defaultBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setOFTBps(_token: PromiseOrValue<string>, _bps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        withdrawFees(_oft: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$1;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$1;
        "WrapperFeeWithdrawn(address,address,uint256)"(oft?: PromiseOrValue<string> | null, to?: null, amount?: null): WrapperFeeWithdrawnEventFilter;
        WrapperFeeWithdrawn(oft?: PromiseOrValue<string> | null, to?: null, amount?: null): WrapperFeeWithdrawnEventFilter;
        "WrapperFees(bytes2,address,uint256,uint256)"(partnerId?: PromiseOrValue<BytesLike> | null, token?: null, wrapperFee?: null, callerFee?: null): WrapperFeesEventFilter;
        WrapperFees(partnerId?: PromiseOrValue<BytesLike> | null, token?: null, wrapperFee?: null, callerFee?: null): WrapperFeesEventFilter;
    };
    estimateGas: {
        BPS_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;
        defaultBps(overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendFee(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendFeeV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getAmountAndFees(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _callerBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        oftBps(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendNativeOFT(_nativeOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendNativeOFTFeeV2(_nativeOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendOFT(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendOFTFeeV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendOFTV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendProxyOFT(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendProxyOFTFeeV2(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendProxyOFTV2(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDefaultBps(_defaultBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setOFTBps(_token: PromiseOrValue<string>, _bps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawFees(_oft: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        BPS_DENOMINATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_UINT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        defaultBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSendFee(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSendFeeV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountAndFees(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _callerBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oftBps(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendNativeOFT(_nativeOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendNativeOFTFeeV2(_nativeOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendOFT(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendOFTFeeV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendOFTV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendProxyOFT(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendProxyOFTFeeV2(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendProxyOFTV2(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDefaultBps(_defaultBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setOFTBps(_token: PromiseOrValue<string>, _bps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawFees(_oft: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

declare namespace ICommonOFT {
    type LzCallParamsStruct = {
        refundAddress: PromiseOrValue<string>;
        zroPaymentAddress: PromiseOrValue<string>;
        adapterParams: PromiseOrValue<BytesLike>;
    };
    type LzCallParamsStructOutput = [string, string, string] & {
        refundAddress: string;
        zroPaymentAddress: string;
        adapterParams: string;
    };
}
interface ProxyOFTInterface extends utils.Interface {
    functions: {
        "BP_DENOMINATOR()": FunctionFragment;
        "NO_EXTRA_GAS()": FunctionFragment;
        "PT_SEND()": FunctionFragment;
        "PT_SEND_AND_CALL()": FunctionFragment;
        "callOnOFTReceived(uint16,bytes,uint64,bytes32,address,uint256,bytes,uint256)": FunctionFragment;
        "chainIdToFeeBps(uint16)": FunctionFragment;
        "circulatingSupply()": FunctionFragment;
        "creditedPackets(uint16,bytes,uint64)": FunctionFragment;
        "defaultFeeBp()": FunctionFragment;
        "estimateSendAndCallFee(uint16,bytes32,uint256,bytes,uint64,bool,bytes)": FunctionFragment;
        "estimateSendFee(uint16,bytes32,uint256,bool,bytes)": FunctionFragment;
        "failedMessages(uint16,bytes,uint64)": FunctionFragment;
        "feeOwner()": FunctionFragment;
        "forceResumeReceive(uint16,bytes)": FunctionFragment;
        "getConfig(uint16,uint16,address,uint256)": FunctionFragment;
        "getTrustedRemoteAddress(uint16)": FunctionFragment;
        "isTrustedRemote(uint16,bytes)": FunctionFragment;
        "lzEndpoint()": FunctionFragment;
        "lzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "minDstGasLookup(uint16,uint16)": FunctionFragment;
        "nonblockingLzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "outboundAmount()": FunctionFragment;
        "owner()": FunctionFragment;
        "precrime()": FunctionFragment;
        "quoteOFTFee(uint16,uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "retryMessage(uint16,bytes,uint64,bytes)": FunctionFragment;
        "sendAndCall(address,uint16,bytes32,uint256,uint256,bytes,uint64,(address,address,bytes))": FunctionFragment;
        "sendFrom(address,uint16,bytes32,uint256,uint256,(address,address,bytes))": FunctionFragment;
        "setConfig(uint16,uint16,uint256,bytes)": FunctionFragment;
        "setDefaultFeeBp(uint16)": FunctionFragment;
        "setFeeBp(uint16,bool,uint16)": FunctionFragment;
        "setFeeOwner(address)": FunctionFragment;
        "setMinDstGas(uint16,uint16,uint256)": FunctionFragment;
        "setPrecrime(address)": FunctionFragment;
        "setReceiveVersion(uint16)": FunctionFragment;
        "setSendVersion(uint16)": FunctionFragment;
        "setTrustedRemote(uint16,bytes)": FunctionFragment;
        "setTrustedRemoteAddress(uint16,bytes)": FunctionFragment;
        "setUseCustomAdapterParams(bool)": FunctionFragment;
        "sharedDecimals()": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "token()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "trustedRemoteLookup(uint16)": FunctionFragment;
        "useCustomAdapterParams()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "BP_DENOMINATOR" | "NO_EXTRA_GAS" | "PT_SEND" | "PT_SEND_AND_CALL" | "callOnOFTReceived" | "chainIdToFeeBps" | "circulatingSupply" | "creditedPackets" | "defaultFeeBp" | "estimateSendAndCallFee" | "estimateSendFee" | "failedMessages" | "feeOwner" | "forceResumeReceive" | "getConfig" | "getTrustedRemoteAddress" | "isTrustedRemote" | "lzEndpoint" | "lzReceive" | "minDstGasLookup" | "nonblockingLzReceive" | "outboundAmount" | "owner" | "precrime" | "quoteOFTFee" | "renounceOwnership" | "retryMessage" | "sendAndCall" | "sendFrom" | "setConfig" | "setDefaultFeeBp" | "setFeeBp" | "setFeeOwner" | "setMinDstGas" | "setPrecrime" | "setReceiveVersion" | "setSendVersion" | "setTrustedRemote" | "setTrustedRemoteAddress" | "setUseCustomAdapterParams" | "sharedDecimals" | "supportsInterface" | "token" | "transferOwnership" | "trustedRemoteLookup" | "useCustomAdapterParams"): FunctionFragment;
    encodeFunctionData(functionFragment: "BP_DENOMINATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "NO_EXTRA_GAS", values?: undefined): string;
    encodeFunctionData(functionFragment: "PT_SEND", values?: undefined): string;
    encodeFunctionData(functionFragment: "PT_SEND_AND_CALL", values?: undefined): string;
    encodeFunctionData(functionFragment: "callOnOFTReceived", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "chainIdToFeeBps", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "circulatingSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditedPackets", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "defaultFeeBp", values?: undefined): string;
    encodeFunctionData(functionFragment: "estimateSendAndCallFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "estimateSendFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "failedMessages", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "feeOwner", values?: undefined): string;
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
    encodeFunctionData(functionFragment: "outboundAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "precrime", values?: undefined): string;
    encodeFunctionData(functionFragment: "quoteOFTFee", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "retryMessage", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "sendAndCall", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        ICommonOFT.LzCallParamsStruct
    ]): string;
    encodeFunctionData(functionFragment: "sendFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        ICommonOFT.LzCallParamsStruct
    ]): string;
    encodeFunctionData(functionFragment: "setConfig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setDefaultFeeBp", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setFeeBp", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setFeeOwner", values: [PromiseOrValue<string>]): string;
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
    encodeFunctionData(functionFragment: "sharedDecimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "trustedRemoteLookup", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "useCustomAdapterParams", values?: undefined): string;
    decodeFunctionResult(functionFragment: "BP_DENOMINATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NO_EXTRA_GAS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PT_SEND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PT_SEND_AND_CALL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callOnOFTReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainIdToFeeBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "circulatingSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditedPackets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultFeeBp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendAndCallFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failedMessages", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceResumeReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzEndpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minDstGasLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonblockingLzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outboundAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "precrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteOFTFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "retryMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultFeeBp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeBp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinDstGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrecrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReceiveVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSendVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUseCustomAdapterParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sharedDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "trustedRemoteLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "useCustomAdapterParams", data: BytesLike): Result;
    events: {
        "CallOFTReceivedSuccess(uint16,bytes,uint64,bytes32)": EventFragment;
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)": EventFragment;
        "NonContractAddress(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ReceiveFromChain(uint16,address,uint256)": EventFragment;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)": EventFragment;
        "SendToChain(uint16,address,bytes32,uint256)": EventFragment;
        "SetDefaultFeeBp(uint16)": EventFragment;
        "SetFeeBp(uint16,bool,uint16)": EventFragment;
        "SetFeeOwner(address)": EventFragment;
        "SetMinDstGas(uint16,uint16,uint256)": EventFragment;
        "SetPrecrime(address)": EventFragment;
        "SetTrustedRemote(uint16,bytes)": EventFragment;
        "SetTrustedRemoteAddress(uint16,bytes)": EventFragment;
        "SetUseCustomAdapterParams(bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CallOFTReceivedSuccess"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MessageFailed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NonContractAddress"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceiveFromChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RetryMessageSuccess"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendToChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetDefaultFeeBp"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetFeeBp"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetFeeOwner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetMinDstGas"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPrecrime"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemoteAddress"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetUseCustomAdapterParams"): EventFragment;
}
interface CallOFTReceivedSuccessEventObject {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _hash: string;
}
type CallOFTReceivedSuccessEvent = TypedEvent<[
    number,
    string,
    BigNumber,
    string
], CallOFTReceivedSuccessEventObject>;
type CallOFTReceivedSuccessEventFilter = TypedEventFilter<CallOFTReceivedSuccessEvent>;
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
interface NonContractAddressEventObject {
    _address: string;
}
type NonContractAddressEvent = TypedEvent<[
    string
], NonContractAddressEventObject>;
type NonContractAddressEventFilter = TypedEventFilter<NonContractAddressEvent>;
interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
interface ReceiveFromChainEventObject {
    _srcChainId: number;
    _to: string;
    _amount: BigNumber;
}
type ReceiveFromChainEvent = TypedEvent<[
    number,
    string,
    BigNumber
], ReceiveFromChainEventObject>;
type ReceiveFromChainEventFilter = TypedEventFilter<ReceiveFromChainEvent>;
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
interface SendToChainEventObject {
    _dstChainId: number;
    _from: string;
    _toAddress: string;
    _amount: BigNumber;
}
type SendToChainEvent = TypedEvent<[
    number,
    string,
    string,
    BigNumber
], SendToChainEventObject>;
type SendToChainEventFilter = TypedEventFilter<SendToChainEvent>;
interface SetDefaultFeeBpEventObject {
    feeBp: number;
}
type SetDefaultFeeBpEvent = TypedEvent<[
    number
], SetDefaultFeeBpEventObject>;
type SetDefaultFeeBpEventFilter = TypedEventFilter<SetDefaultFeeBpEvent>;
interface SetFeeBpEventObject {
    dstchainId: number;
    enabled: boolean;
    feeBp: number;
}
type SetFeeBpEvent = TypedEvent<[
    number,
    boolean,
    number
], SetFeeBpEventObject>;
type SetFeeBpEventFilter = TypedEventFilter<SetFeeBpEvent>;
interface SetFeeOwnerEventObject {
    feeOwner: string;
}
type SetFeeOwnerEvent = TypedEvent<[string], SetFeeOwnerEventObject>;
type SetFeeOwnerEventFilter = TypedEventFilter<SetFeeOwnerEvent>;
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
    _useCustomAdapterParams: boolean;
}
type SetUseCustomAdapterParamsEvent = TypedEvent<[
    boolean
], SetUseCustomAdapterParamsEventObject>;
type SetUseCustomAdapterParamsEventFilter = TypedEventFilter<SetUseCustomAdapterParamsEvent>;
interface ProxyOFT extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ProxyOFTInterface;
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
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<[BigNumber]>;
        PT_SEND(overrides?: CallOverrides): Promise<[number]>;
        PT_SEND_AND_CALL(overrides?: CallOverrides): Promise<[number]>;
        callOnOFTReceived(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _gasForCall: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        chainIdToFeeBps(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number, boolean] & {
            feeBP: number;
            enabled: boolean;
        }>;
        circulatingSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        defaultFeeBp(overrides?: CallOverrides): Promise<[number]>;
        estimateSendAndCallFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        feeOwner(overrides?: CallOverrides): Promise<[string]>;
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
        outboundAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        precrime(overrides?: CallOverrides): Promise<[string]>;
        quoteOFTFee(_dstChainId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            fee: BigNumber;
        }>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendAndCall(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDefaultFeeBp(_feeBp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFeeBp(_dstChainId: PromiseOrValue<BigNumberish>, _enabled: PromiseOrValue<boolean>, _feeBp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFeeOwner(_feeOwner: PromiseOrValue<string>, overrides?: Overrides & {
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
        sharedDecimals(overrides?: CallOverrides): Promise<[number]>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<[boolean]>;
    };
    BP_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;
    NO_EXTRA_GAS(overrides?: CallOverrides): Promise<BigNumber>;
    PT_SEND(overrides?: CallOverrides): Promise<number>;
    PT_SEND_AND_CALL(overrides?: CallOverrides): Promise<number>;
    callOnOFTReceived(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _gasForCall: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    chainIdToFeeBps(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number, boolean] & {
        feeBP: number;
        enabled: boolean;
    }>;
    circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
    creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    defaultFeeBp(overrides?: CallOverrides): Promise<number>;
    estimateSendAndCallFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    feeOwner(overrides?: CallOverrides): Promise<string>;
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
    outboundAmount(overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    precrime(overrides?: CallOverrides): Promise<string>;
    quoteOFTFee(_dstChainId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendAndCall(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT.LzCallParamsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT.LzCallParamsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDefaultFeeBp(_feeBp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFeeBp(_dstChainId: PromiseOrValue<BigNumberish>, _enabled: PromiseOrValue<boolean>, _feeBp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFeeOwner(_feeOwner: PromiseOrValue<string>, overrides?: Overrides & {
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
    sharedDecimals(overrides?: CallOverrides): Promise<number>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    token(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    useCustomAdapterParams(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        BP_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<BigNumber>;
        PT_SEND(overrides?: CallOverrides): Promise<number>;
        PT_SEND_AND_CALL(overrides?: CallOverrides): Promise<number>;
        callOnOFTReceived(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _gasForCall: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        chainIdToFeeBps(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number, boolean] & {
            feeBP: number;
            enabled: boolean;
        }>;
        circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
        creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        defaultFeeBp(overrides?: CallOverrides): Promise<number>;
        estimateSendAndCallFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        feeOwner(overrides?: CallOverrides): Promise<string>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        lzEndpoint(overrides?: CallOverrides): Promise<string>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        outboundAmount(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        precrime(overrides?: CallOverrides): Promise<string>;
        quoteOFTFee(_dstChainId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        sendAndCall(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT.LzCallParamsStruct, overrides?: CallOverrides): Promise<void>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT.LzCallParamsStruct, overrides?: CallOverrides): Promise<void>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setDefaultFeeBp(_feeBp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setFeeBp(_dstChainId: PromiseOrValue<BigNumberish>, _enabled: PromiseOrValue<boolean>, _feeBp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setFeeOwner(_feeOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPrecrime(_precrime: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        sharedDecimals(overrides?: CallOverrides): Promise<number>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        token(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "CallOFTReceivedSuccess(uint16,bytes,uint64,bytes32)"(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: null, _nonce?: null, _hash?: null): CallOFTReceivedSuccessEventFilter;
        CallOFTReceivedSuccess(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: null, _nonce?: null, _hash?: null): CallOFTReceivedSuccessEventFilter;
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter;
        MessageFailed(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter;
        "NonContractAddress(address)"(_address?: null): NonContractAddressEventFilter;
        NonContractAddress(_address?: null): NonContractAddressEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "ReceiveFromChain(uint16,address,uint256)"(_srcChainId?: PromiseOrValue<BigNumberish> | null, _to?: PromiseOrValue<string> | null, _amount?: null): ReceiveFromChainEventFilter;
        ReceiveFromChain(_srcChainId?: PromiseOrValue<BigNumberish> | null, _to?: PromiseOrValue<string> | null, _amount?: null): ReceiveFromChainEventFilter;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter;
        RetryMessageSuccess(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter;
        "SendToChain(uint16,address,bytes32,uint256)"(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _amount?: null): SendToChainEventFilter;
        SendToChain(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _amount?: null): SendToChainEventFilter;
        "SetDefaultFeeBp(uint16)"(feeBp?: null): SetDefaultFeeBpEventFilter;
        SetDefaultFeeBp(feeBp?: null): SetDefaultFeeBpEventFilter;
        "SetFeeBp(uint16,bool,uint16)"(dstchainId?: null, enabled?: null, feeBp?: null): SetFeeBpEventFilter;
        SetFeeBp(dstchainId?: null, enabled?: null, feeBp?: null): SetFeeBpEventFilter;
        "SetFeeOwner(address)"(feeOwner?: null): SetFeeOwnerEventFilter;
        SetFeeOwner(feeOwner?: null): SetFeeOwnerEventFilter;
        "SetMinDstGas(uint16,uint16,uint256)"(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter;
        SetMinDstGas(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter;
        "SetPrecrime(address)"(precrime?: null): SetPrecrimeEventFilter;
        SetPrecrime(precrime?: null): SetPrecrimeEventFilter;
        "SetTrustedRemote(uint16,bytes)"(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter;
        SetTrustedRemote(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter;
        "SetTrustedRemoteAddress(uint16,bytes)"(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter;
        SetTrustedRemoteAddress(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter;
        "SetUseCustomAdapterParams(bool)"(_useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter;
        SetUseCustomAdapterParams(_useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter;
    };
    estimateGas: {
        BP_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<BigNumber>;
        PT_SEND(overrides?: CallOverrides): Promise<BigNumber>;
        PT_SEND_AND_CALL(overrides?: CallOverrides): Promise<BigNumber>;
        callOnOFTReceived(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _gasForCall: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        chainIdToFeeBps(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
        creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        defaultFeeBp(overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendAndCallFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        feeOwner(overrides?: CallOverrides): Promise<BigNumber>;
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
        outboundAmount(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        precrime(overrides?: CallOverrides): Promise<BigNumber>;
        quoteOFTFee(_dstChainId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendAndCall(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDefaultFeeBp(_feeBp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFeeBp(_dstChainId: PromiseOrValue<BigNumberish>, _enabled: PromiseOrValue<boolean>, _feeBp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFeeOwner(_feeOwner: PromiseOrValue<string>, overrides?: Overrides & {
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
        sharedDecimals(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        BP_DENOMINATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PT_SEND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PT_SEND_AND_CALL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callOnOFTReceived(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _gasForCall: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        chainIdToFeeBps(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        circulatingSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        defaultFeeBp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSendAndCallFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
        outboundAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        precrime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteOFTFee(_dstChainId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendAndCall(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDefaultFeeBp(_feeBp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFeeBp(_dstChainId: PromiseOrValue<BigNumberish>, _enabled: PromiseOrValue<boolean>, _feeBp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFeeOwner(_feeOwner: PromiseOrValue<string>, overrides?: Overrides & {
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
        sharedDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

type FeeObj = {
    caller: string;
    callerBps: number;
    partnerId: string;
};
type OftWrapperBridgeFee = {
    oftFee: CurrencyAmount;
    wrapperFee: CurrencyAmount;
    callerFee: CurrencyAmount;
};
type SendMethod = 'sendOFT' | 'sendOFTV2' | 'sendOFTFeeV2' | 'sendNativeOFT' | 'sendNativeOFTFeeV2' | 'sendProxyOFT' | 'sendProxyOFTV2' | 'sendProxyOFTFeeV2';
type EstimateSendFeeMethod = 'estimateSendFee' | 'estimateSendFeeV2';
declare class OftWrapperBridge__evm implements BridgeApi<Signer, OftWrapperBridgeFee> {
    protected providerFactory: ProviderFactory;
    protected oft: OftBridgeConfig;
    protected partner: OftPartnerConfig;
    protected wrapperConfig: OftWrapperConfig;
    protected erc20: ERC20__api;
    constructor(providerFactory: ProviderFactory, oft: OftBridgeConfig, partner: OftPartnerConfig, wrapperConfig?: OftWrapperConfig);
    getOptions(): Promise<BridgeOptions>;
    protected chainKeyToEndpointId(chainKey: string): number;
    protected tryGetOftDeployment(chainKey: ChainKey): _layerzerolabs_ui_bridge_oft.OftBridgeDeployment | undefined;
    protected getOftDeployment(chainKey: ChainKey): _layerzerolabs_ui_bridge_oft.OftBridgeDeployment;
    protected getWrapperDeployment(chainKey: string): {
        address: string;
        version?: number | undefined;
    };
    supportsClaim(token: Currency): boolean;
    supportsRegister(token: Currency): boolean;
    getDuration({ srcToken, dstToken }: GetDurationInput): Promise<number>;
    getAllowance({ token, address }: GetAllowanceInput): Promise<CurrencyAmount<Currency>>;
    approve({ amount }: ApproveInput): Promise<Transaction<Signer>>;
    supportsTransfer(srcToken: Currency, dstToken: Currency): boolean;
    isRegistered(input: IsRegisteredInput): Promise<boolean>;
    getUnclaimed({ token }: GetUnclaimedInput): Promise<CurrencyAmount<Currency>>;
    claim(input: ClaimInput): Promise<Transaction<Signer>>;
    register(input: RegisterInput): Promise<Transaction<Signer>>;
    transfer(input: TransferInput): Promise<Transaction<Signer>>;
    protected sendOFTV2(input: TransferInput): Promise<Transaction<Signer>>;
    protected sendOFTV1(input: TransferInput): Promise<Transaction<Signer>>;
    protected encodeDstAddress(address: string): string;
    getMessageFee({ srcToken, dstToken, adapterParams }: GetMessageFeeInput): Promise<FeeQuote>;
    getExtraGas({ srcToken, dstToken }: GetExtraGasInput): Promise<number>;
    getOutput({ srcAmount, dstToken, }: GetOutputInput): Promise<BridgeOutput<OftWrapperBridgeFee>>;
    protected removeDust(amount: CurrencyAmount): CurrencyAmount<Currency>;
    protected getQuotedAddress({ chainKey }: Currency): string;
    protected getAmountAndFees(inputAmount: CurrencyAmount): Promise<{
        callerFee: CurrencyAmount<Currency>;
        wrapperFee: CurrencyAmount<Currency>;
        amount: CurrencyAmount<Currency>;
    }>;
    protected getOFTFee(inputAmount: CurrencyAmount, dstChainKey: ChainKey): Promise<CurrencyAmount>;
    getLimit({ srcToken, dstToken }: GetLimitInput): Promise<CurrencyAmount<Currency>>;
    protected getWrapperContract(srcToken: Currency): OFTWrapper;
    protected getOFTV2Contract(srcToken: Currency): OFT | ProxyOFT;
    protected buildLayerZeroTxParams(adapterParams: AdapterParams): string;
    protected getSendMethod(srcToken: Currency): SendMethod;
    protected buildLayerZeroCallParams(adapterParams: AdapterParams, refundAddress: string, zroPaymentAddress?: string): ICommonOFT$2.LzCallParamsStruct;
    protected get feeObj(): FeeObj;
    protected isValidNative(native: Currency): boolean;
    protected isValidToken(currency: Currency): boolean;
}

declare const mainnet: OftWrapperConfig;

export { EstimateSendFeeMethod, OftPartnerConfig, OftWrapperBridgeFee, OftWrapperBridge__evm, OftWrapperConfig, SendMethod, mainnet, serializedPartnerConfig, serializedWrapperConfig };
