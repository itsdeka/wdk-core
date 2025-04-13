import { Currency, CurrencyAmount, Transaction, FeeQuote, ChainKey, AdapterParams } from '@layerzerolabs/ui-core';
import { O as OftBridgeConfig, a as OftBridgeDeployment } from './OftBridgeConfig-098dc938.js';
import { O as OftBridgeApi, a as OftBridgeFee } from './OftBridgeApi-6b97cc7a.js';
import { GetOptionsInput, BridgeOptions, TransferInput, GetDurationInput, GetAllowanceInput, ApproveInput, IsRegisteredInput, GetUnclaimedInput, ClaimInput, RegisterInput, GetMessageFeeInput, GetExtraGasInput, GetOutputInput, BridgeOutput, GetLimitInput } from '@layerzerolabs/ui-bridge-sdk/v1';
import * as _layerzerolabs_ui_evm from '@layerzerolabs/ui-evm';
import { ProviderFactory, ERC20__api } from '@layerzerolabs/ui-evm';
import { Signer, Event, EventFilter, BaseContract, CallOverrides, BigNumber, BigNumberish, Overrides, ContractTransaction, BytesLike, PayableOverrides, PopulatedTransaction, utils } from 'ethers';
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';

declare abstract class OftBridgeBase<Config extends OftBridgeConfig = OftBridgeConfig> implements OftBridgeApi<Signer> {
    protected readonly providerFactory: ProviderFactory;
    readonly config: Config;
    protected erc20: ERC20__api;
    constructor(providerFactory: ProviderFactory, config: Config);
    getOptions(input: GetOptionsInput): Promise<BridgeOptions>;
    protected abstract validateConfig(config: Config): asserts config is Config;
    protected validateInput(input: TransferInput): asserts input is Required<TransferInput>;
    protected chainKeyToEndpointId(chainKey: string): number;
    supportsClaim(token: Currency): boolean;
    supportsRegister(token: Currency): boolean;
    supportsTransfer(srcToken: Currency, dstToken: Currency): boolean;
    getDuration({ srcToken, dstToken }: GetDurationInput): Promise<number>;
    getAllowance({ token, address, dstChainKey }: GetAllowanceInput): Promise<CurrencyAmount>;
    approve({ amount, dstChainKey }: ApproveInput): Promise<Transaction<Signer>>;
    isRegistered(input: IsRegisteredInput): Promise<boolean>;
    getUnclaimed({ token }: GetUnclaimedInput): Promise<CurrencyAmount<Currency>>;
    claim(input: ClaimInput): Promise<Transaction<Signer>>;
    register(input: RegisterInput): Promise<Transaction<Signer>>;
    abstract transfer(input: TransferInput): Promise<Transaction<Signer>>;
    abstract getMessageFee(input: GetMessageFeeInput): Promise<FeeQuote>;
    abstract getExtraGas(input: GetExtraGasInput): Promise<number>;
    abstract getOutput(input: GetOutputInput): Promise<BridgeOutput<OftBridgeFee>>;
    getLimit({ srcToken }: GetLimitInput): Promise<CurrencyAmount<Currency>>;
    protected tryGetDeployment(chainKey: ChainKey): OftBridgeDeployment | undefined;
    protected getDeployment(chainKey: string): OftBridgeDeployment;
    protected getDefaultExtraGas(srcChainKey: string, dstChainKey: string): number;
}

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

interface OFTV0Interface extends utils.Interface {
    functions: {
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "chainId()": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "dstContractLookup(uint16)": FunctionFragment;
        "endpoint()": FunctionFragment;
        "estimateSendTokensFee(uint16,bool,bytes)": FunctionFragment;
        "forceResumeReceive(uint16,bytes)": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "isMain()": FunctionFragment;
        "lzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "pauseSendTokens(bool)": FunctionFragment;
        "paused()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "sendTokens(uint16,bytes,uint256,address,bytes)": FunctionFragment;
        "setConfig(uint16,uint16,uint256,bytes)": FunctionFragment;
        "setDestination(uint16,bytes)": FunctionFragment;
        "setReceiveVersion(uint16)": FunctionFragment;
        "setSendVersion(uint16)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allowance" | "approve" | "balanceOf" | "chainId" | "decimals" | "decreaseAllowance" | "dstContractLookup" | "endpoint" | "estimateSendTokensFee" | "forceResumeReceive" | "increaseAllowance" | "isMain" | "lzReceive" | "name" | "owner" | "pauseSendTokens" | "paused" | "renounceOwnership" | "sendTokens" | "setConfig" | "setDestination" | "setReceiveVersion" | "setSendVersion" | "symbol" | "totalSupply" | "transfer" | "transferFrom" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "dstContractLookup", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "endpoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "estimateSendTokensFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "forceResumeReceive", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isMain", values?: undefined): string;
    encodeFunctionData(functionFragment: "lzReceive", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseSendTokens", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "sendTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setConfig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setDestination", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setReceiveVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setSendVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dstContractLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "endpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendTokensFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceResumeReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isMain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseSendTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDestination", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReceiveVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSendVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Paused(bool)": EventFragment;
        "ReceiveFromChain(uint16,uint64,uint256)": EventFragment;
        "SendToChain(uint16,bytes,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceiveFromChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendToChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
interface ApprovalEventObject$2 {
    owner: string;
    spender: string;
    value: BigNumber;
}
type ApprovalEvent$2 = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject$2>;
type ApprovalEventFilter$2 = TypedEventFilter<ApprovalEvent$2>;
interface OwnershipTransferredEventObject$6 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$6 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$6>;
type OwnershipTransferredEventFilter$6 = TypedEventFilter<OwnershipTransferredEvent$6>;
interface PausedEventObject {
    isPaused: boolean;
}
type PausedEvent = TypedEvent<[boolean], PausedEventObject>;
type PausedEventFilter = TypedEventFilter<PausedEvent>;
interface ReceiveFromChainEventObject$5 {
    srcChainId: number;
    nonce: BigNumber;
    qty: BigNumber;
}
type ReceiveFromChainEvent$5 = TypedEvent<[
    number,
    BigNumber,
    BigNumber
], ReceiveFromChainEventObject$5>;
type ReceiveFromChainEventFilter$5 = TypedEventFilter<ReceiveFromChainEvent$5>;
interface SendToChainEventObject$5 {
    dstChainId: number;
    to: string;
    qty: BigNumber;
}
type SendToChainEvent$5 = TypedEvent<[
    number,
    string,
    BigNumber
], SendToChainEventObject$5>;
type SendToChainEventFilter$5 = TypedEventFilter<SendToChainEvent$5>;
interface TransferEventObject$2 {
    from: string;
    to: string;
    value: BigNumber;
}
type TransferEvent$2 = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject$2>;
type TransferEventFilter$2 = TypedEventFilter<TransferEvent$2>;
interface OFTV0 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OFTV0Interface;
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
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        chainId(overrides?: CallOverrides): Promise<[number]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        dstContractLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        endpoint(overrides?: CallOverrides): Promise<[string]>;
        estimateSendTokensFee(_dstChainId: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, txParameters: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isMain(overrides?: CallOverrides): Promise<[boolean]>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _fromAddress: PromiseOrValue<BytesLike>, nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pauseSendTokens(_pause: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendTokens(_dstChainId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BytesLike>, _qty: PromiseOrValue<BigNumberish>, zroPaymentAddress: PromiseOrValue<string>, adapterParam: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDestination(_dstChainId: PromiseOrValue<BigNumberish>, _destinationContractAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReceiveVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSendVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    chainId(overrides?: CallOverrides): Promise<number>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    dstContractLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    endpoint(overrides?: CallOverrides): Promise<string>;
    estimateSendTokensFee(_dstChainId: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, txParameters: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isMain(overrides?: CallOverrides): Promise<boolean>;
    lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _fromAddress: PromiseOrValue<BytesLike>, nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pauseSendTokens(_pause: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendTokens(_dstChainId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BytesLike>, _qty: PromiseOrValue<BigNumberish>, zroPaymentAddress: PromiseOrValue<string>, adapterParam: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDestination(_dstChainId: PromiseOrValue<BigNumberish>, _destinationContractAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReceiveVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSendVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        chainId(overrides?: CallOverrides): Promise<number>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        dstContractLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        endpoint(overrides?: CallOverrides): Promise<string>;
        estimateSendTokensFee(_dstChainId: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, txParameters: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        isMain(overrides?: CallOverrides): Promise<boolean>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _fromAddress: PromiseOrValue<BytesLike>, nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pauseSendTokens(_pause: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        sendTokens(_dstChainId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BytesLike>, _qty: PromiseOrValue<BigNumberish>, zroPaymentAddress: PromiseOrValue<string>, adapterParam: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setDestination(_dstChainId: PromiseOrValue<BigNumberish>, _destinationContractAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setReceiveVersion(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setSendVersion(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter$2;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter$2;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$6;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$6;
        "Paused(bool)"(isPaused?: null): PausedEventFilter;
        Paused(isPaused?: null): PausedEventFilter;
        "ReceiveFromChain(uint16,uint64,uint256)"(srcChainId?: null, nonce?: null, qty?: null): ReceiveFromChainEventFilter$5;
        ReceiveFromChain(srcChainId?: null, nonce?: null, qty?: null): ReceiveFromChainEventFilter$5;
        "SendToChain(uint16,bytes,uint256)"(dstChainId?: null, to?: null, qty?: null): SendToChainEventFilter$5;
        SendToChain(dstChainId?: null, to?: null, qty?: null): SendToChainEventFilter$5;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter$2;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter$2;
    };
    estimateGas: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        dstContractLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        endpoint(overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendTokensFee(_dstChainId: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, txParameters: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isMain(overrides?: CallOverrides): Promise<BigNumber>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _fromAddress: PromiseOrValue<BytesLike>, nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pauseSendTokens(_pause: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendTokens(_dstChainId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BytesLike>, _qty: PromiseOrValue<BigNumberish>, zroPaymentAddress: PromiseOrValue<string>, adapterParam: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDestination(_dstChainId: PromiseOrValue<BigNumberish>, _destinationContractAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReceiveVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSendVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        dstContractLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        endpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSendTokensFee(_dstChainId: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, txParameters: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isMain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _fromAddress: PromiseOrValue<BytesLike>, nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pauseSendTokens(_pause: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendTokens(_dstChainId: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BytesLike>, _qty: PromiseOrValue<BigNumberish>, zroPaymentAddress: PromiseOrValue<string>, adapterParam: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDestination(_dstChainId: PromiseOrValue<BigNumberish>, _destinationContractAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReceiveVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSendVersion(version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

declare namespace ICommonOFT$3 {
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
interface OFTV2Interface extends utils.Interface {
    functions: {
        "NO_EXTRA_GAS()": FunctionFragment;
        "PT_SEND()": FunctionFragment;
        "PT_SEND_AND_CALL()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "callOnOFTReceived(uint16,bytes,uint64,bytes32,address,uint256,bytes,uint256)": FunctionFragment;
        "circulatingSupply()": FunctionFragment;
        "creditedPackets(uint16,bytes,uint64)": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "estimateSendAndCallFee(uint16,bytes32,uint256,bytes,uint64,bool,bytes)": FunctionFragment;
        "estimateSendFee(uint16,bytes32,uint256,bool,bytes)": FunctionFragment;
        "failedMessages(uint16,bytes,uint64)": FunctionFragment;
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
        "renounceOwnership()": FunctionFragment;
        "retryMessage(uint16,bytes,uint64,bytes)": FunctionFragment;
        "sendAndCall(address,uint16,bytes32,uint256,bytes,uint64,(address,address,bytes))": FunctionFragment;
        "sendFrom(address,uint16,bytes32,uint256,(address,address,bytes))": FunctionFragment;
        "setConfig(uint16,uint16,uint256,bytes)": FunctionFragment;
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
    getFunction(nameOrSignatureOrTopic: "NO_EXTRA_GAS" | "PT_SEND" | "PT_SEND_AND_CALL" | "allowance" | "approve" | "balanceOf" | "callOnOFTReceived" | "circulatingSupply" | "creditedPackets" | "decimals" | "decreaseAllowance" | "estimateSendAndCallFee" | "estimateSendFee" | "failedMessages" | "forceResumeReceive" | "getConfig" | "getTrustedRemoteAddress" | "increaseAllowance" | "isTrustedRemote" | "lzEndpoint" | "lzReceive" | "minDstGasLookup" | "name" | "nonblockingLzReceive" | "owner" | "precrime" | "renounceOwnership" | "retryMessage" | "sendAndCall" | "sendFrom" | "setConfig" | "setMinDstGas" | "setPrecrime" | "setReceiveVersion" | "setSendVersion" | "setTrustedRemote" | "setTrustedRemoteAddress" | "setUseCustomAdapterParams" | "sharedDecimals" | "supportsInterface" | "symbol" | "token" | "totalSupply" | "transfer" | "transferFrom" | "transferOwnership" | "trustedRemoteLookup" | "useCustomAdapterParams"): FunctionFragment;
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
    encodeFunctionData(functionFragment: "circulatingSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditedPackets", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
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
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        ICommonOFT$3.LzCallParamsStruct
    ]): string;
    encodeFunctionData(functionFragment: "sendFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        ICommonOFT$3.LzCallParamsStruct
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
    decodeFunctionResult(functionFragment: "NO_EXTRA_GAS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PT_SEND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PT_SEND_AND_CALL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callOnOFTReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "circulatingSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditedPackets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendAndCallFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failedMessages", data: BytesLike): Result;
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
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "retryMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
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
    getEvent(nameOrSignatureOrTopic: "SetMinDstGas"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPrecrime"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemoteAddress"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetUseCustomAdapterParams"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
interface ApprovalEventObject$1 {
    owner: string;
    spender: string;
    value: BigNumber;
}
type ApprovalEvent$1 = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject$1>;
type ApprovalEventFilter$1 = TypedEventFilter<ApprovalEvent$1>;
interface CallOFTReceivedSuccessEventObject$3 {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _hash: string;
}
type CallOFTReceivedSuccessEvent$3 = TypedEvent<[
    number,
    string,
    BigNumber,
    string
], CallOFTReceivedSuccessEventObject$3>;
type CallOFTReceivedSuccessEventFilter$3 = TypedEventFilter<CallOFTReceivedSuccessEvent$3>;
interface MessageFailedEventObject$4 {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _payload: string;
    _reason: string;
}
type MessageFailedEvent$4 = TypedEvent<[
    number,
    string,
    BigNumber,
    string,
    string
], MessageFailedEventObject$4>;
type MessageFailedEventFilter$4 = TypedEventFilter<MessageFailedEvent$4>;
interface NonContractAddressEventObject$3 {
    _address: string;
}
type NonContractAddressEvent$3 = TypedEvent<[
    string
], NonContractAddressEventObject$3>;
type NonContractAddressEventFilter$3 = TypedEventFilter<NonContractAddressEvent$3>;
interface OwnershipTransferredEventObject$5 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$5 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$5>;
type OwnershipTransferredEventFilter$5 = TypedEventFilter<OwnershipTransferredEvent$5>;
interface ReceiveFromChainEventObject$4 {
    _srcChainId: number;
    _to: string;
    _amount: BigNumber;
}
type ReceiveFromChainEvent$4 = TypedEvent<[
    number,
    string,
    BigNumber
], ReceiveFromChainEventObject$4>;
type ReceiveFromChainEventFilter$4 = TypedEventFilter<ReceiveFromChainEvent$4>;
interface RetryMessageSuccessEventObject$4 {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _payloadHash: string;
}
type RetryMessageSuccessEvent$4 = TypedEvent<[
    number,
    string,
    BigNumber,
    string
], RetryMessageSuccessEventObject$4>;
type RetryMessageSuccessEventFilter$4 = TypedEventFilter<RetryMessageSuccessEvent$4>;
interface SendToChainEventObject$4 {
    _dstChainId: number;
    _from: string;
    _toAddress: string;
    _amount: BigNumber;
}
type SendToChainEvent$4 = TypedEvent<[
    number,
    string,
    string,
    BigNumber
], SendToChainEventObject$4>;
type SendToChainEventFilter$4 = TypedEventFilter<SendToChainEvent$4>;
interface SetMinDstGasEventObject$4 {
    _dstChainId: number;
    _type: number;
    _minDstGas: BigNumber;
}
type SetMinDstGasEvent$4 = TypedEvent<[
    number,
    number,
    BigNumber
], SetMinDstGasEventObject$4>;
type SetMinDstGasEventFilter$4 = TypedEventFilter<SetMinDstGasEvent$4>;
interface SetPrecrimeEventObject$4 {
    precrime: string;
}
type SetPrecrimeEvent$4 = TypedEvent<[string], SetPrecrimeEventObject$4>;
type SetPrecrimeEventFilter$4 = TypedEventFilter<SetPrecrimeEvent$4>;
interface SetTrustedRemoteEventObject$4 {
    _remoteChainId: number;
    _path: string;
}
type SetTrustedRemoteEvent$4 = TypedEvent<[
    number,
    string
], SetTrustedRemoteEventObject$4>;
type SetTrustedRemoteEventFilter$4 = TypedEventFilter<SetTrustedRemoteEvent$4>;
interface SetTrustedRemoteAddressEventObject$4 {
    _remoteChainId: number;
    _remoteAddress: string;
}
type SetTrustedRemoteAddressEvent$4 = TypedEvent<[
    number,
    string
], SetTrustedRemoteAddressEventObject$4>;
type SetTrustedRemoteAddressEventFilter$4 = TypedEventFilter<SetTrustedRemoteAddressEvent$4>;
interface SetUseCustomAdapterParamsEventObject$4 {
    _useCustomAdapterParams: boolean;
}
type SetUseCustomAdapterParamsEvent$4 = TypedEvent<[
    boolean
], SetUseCustomAdapterParamsEventObject$4>;
type SetUseCustomAdapterParamsEventFilter$4 = TypedEventFilter<SetUseCustomAdapterParamsEvent$4>;
interface TransferEventObject$1 {
    from: string;
    to: string;
    value: BigNumber;
}
type TransferEvent$1 = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject$1>;
type TransferEventFilter$1 = TypedEventFilter<TransferEvent$1>;
interface OFTV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OFTV2Interface;
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
        circulatingSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
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
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendAndCall(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$3.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$3.LzCallParamsStruct, overrides?: PayableOverrides & {
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
    circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
    creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
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
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendAndCall(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$3.LzCallParamsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$3.LzCallParamsStruct, overrides?: PayableOverrides & {
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
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<BigNumber>;
        PT_SEND(overrides?: CallOverrides): Promise<number>;
        PT_SEND_AND_CALL(overrides?: CallOverrides): Promise<number>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        callOnOFTReceived(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _gasForCall: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
        creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
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
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        sendAndCall(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$3.LzCallParamsStruct, overrides?: CallOverrides): Promise<void>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$3.LzCallParamsStruct, overrides?: CallOverrides): Promise<void>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
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
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter$1;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter$1;
        "CallOFTReceivedSuccess(uint16,bytes,uint64,bytes32)"(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: null, _nonce?: null, _hash?: null): CallOFTReceivedSuccessEventFilter$3;
        CallOFTReceivedSuccess(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: null, _nonce?: null, _hash?: null): CallOFTReceivedSuccessEventFilter$3;
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter$4;
        MessageFailed(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter$4;
        "NonContractAddress(address)"(_address?: null): NonContractAddressEventFilter$3;
        NonContractAddress(_address?: null): NonContractAddressEventFilter$3;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$5;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$5;
        "ReceiveFromChain(uint16,address,uint256)"(_srcChainId?: PromiseOrValue<BigNumberish> | null, _to?: PromiseOrValue<string> | null, _amount?: null): ReceiveFromChainEventFilter$4;
        ReceiveFromChain(_srcChainId?: PromiseOrValue<BigNumberish> | null, _to?: PromiseOrValue<string> | null, _amount?: null): ReceiveFromChainEventFilter$4;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter$4;
        RetryMessageSuccess(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter$4;
        "SendToChain(uint16,address,bytes32,uint256)"(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _amount?: null): SendToChainEventFilter$4;
        SendToChain(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _amount?: null): SendToChainEventFilter$4;
        "SetMinDstGas(uint16,uint16,uint256)"(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter$4;
        SetMinDstGas(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter$4;
        "SetPrecrime(address)"(precrime?: null): SetPrecrimeEventFilter$4;
        SetPrecrime(precrime?: null): SetPrecrimeEventFilter$4;
        "SetTrustedRemote(uint16,bytes)"(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter$4;
        SetTrustedRemote(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter$4;
        "SetTrustedRemoteAddress(uint16,bytes)"(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter$4;
        SetTrustedRemoteAddress(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter$4;
        "SetUseCustomAdapterParams(bool)"(_useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter$4;
        SetUseCustomAdapterParams(_useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter$4;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter$1;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter$1;
    };
    estimateGas: {
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
        circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
        creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        estimateSendAndCallFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
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
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendAndCall(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$3.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$3.LzCallParamsStruct, overrides?: PayableOverrides & {
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
        circulatingSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        estimateSendAndCallFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendAndCall(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$3.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$3.LzCallParamsStruct, overrides?: PayableOverrides & {
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
interface OFTV2FeeInterface extends utils.Interface {
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
interface CallOFTReceivedSuccessEventObject$2 {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _hash: string;
}
type CallOFTReceivedSuccessEvent$2 = TypedEvent<[
    number,
    string,
    BigNumber,
    string
], CallOFTReceivedSuccessEventObject$2>;
type CallOFTReceivedSuccessEventFilter$2 = TypedEventFilter<CallOFTReceivedSuccessEvent$2>;
interface MessageFailedEventObject$3 {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _payload: string;
    _reason: string;
}
type MessageFailedEvent$3 = TypedEvent<[
    number,
    string,
    BigNumber,
    string,
    string
], MessageFailedEventObject$3>;
type MessageFailedEventFilter$3 = TypedEventFilter<MessageFailedEvent$3>;
interface NonContractAddressEventObject$2 {
    _address: string;
}
type NonContractAddressEvent$2 = TypedEvent<[
    string
], NonContractAddressEventObject$2>;
type NonContractAddressEventFilter$2 = TypedEventFilter<NonContractAddressEvent$2>;
interface OwnershipTransferredEventObject$4 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$4 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$4>;
type OwnershipTransferredEventFilter$4 = TypedEventFilter<OwnershipTransferredEvent$4>;
interface ReceiveFromChainEventObject$3 {
    _srcChainId: number;
    _to: string;
    _amount: BigNumber;
}
type ReceiveFromChainEvent$3 = TypedEvent<[
    number,
    string,
    BigNumber
], ReceiveFromChainEventObject$3>;
type ReceiveFromChainEventFilter$3 = TypedEventFilter<ReceiveFromChainEvent$3>;
interface RetryMessageSuccessEventObject$3 {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _payloadHash: string;
}
type RetryMessageSuccessEvent$3 = TypedEvent<[
    number,
    string,
    BigNumber,
    string
], RetryMessageSuccessEventObject$3>;
type RetryMessageSuccessEventFilter$3 = TypedEventFilter<RetryMessageSuccessEvent$3>;
interface SendToChainEventObject$3 {
    _dstChainId: number;
    _from: string;
    _toAddress: string;
    _amount: BigNumber;
}
type SendToChainEvent$3 = TypedEvent<[
    number,
    string,
    string,
    BigNumber
], SendToChainEventObject$3>;
type SendToChainEventFilter$3 = TypedEventFilter<SendToChainEvent$3>;
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
interface SetMinDstGasEventObject$3 {
    _dstChainId: number;
    _type: number;
    _minDstGas: BigNumber;
}
type SetMinDstGasEvent$3 = TypedEvent<[
    number,
    number,
    BigNumber
], SetMinDstGasEventObject$3>;
type SetMinDstGasEventFilter$3 = TypedEventFilter<SetMinDstGasEvent$3>;
interface SetPrecrimeEventObject$3 {
    precrime: string;
}
type SetPrecrimeEvent$3 = TypedEvent<[string], SetPrecrimeEventObject$3>;
type SetPrecrimeEventFilter$3 = TypedEventFilter<SetPrecrimeEvent$3>;
interface SetTrustedRemoteEventObject$3 {
    _remoteChainId: number;
    _path: string;
}
type SetTrustedRemoteEvent$3 = TypedEvent<[
    number,
    string
], SetTrustedRemoteEventObject$3>;
type SetTrustedRemoteEventFilter$3 = TypedEventFilter<SetTrustedRemoteEvent$3>;
interface SetTrustedRemoteAddressEventObject$3 {
    _remoteChainId: number;
    _remoteAddress: string;
}
type SetTrustedRemoteAddressEvent$3 = TypedEvent<[
    number,
    string
], SetTrustedRemoteAddressEventObject$3>;
type SetTrustedRemoteAddressEventFilter$3 = TypedEventFilter<SetTrustedRemoteAddressEvent$3>;
interface SetUseCustomAdapterParamsEventObject$3 {
    _useCustomAdapterParams: boolean;
}
type SetUseCustomAdapterParamsEvent$3 = TypedEvent<[
    boolean
], SetUseCustomAdapterParamsEventObject$3>;
type SetUseCustomAdapterParamsEventFilter$3 = TypedEventFilter<SetUseCustomAdapterParamsEvent$3>;
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
interface OFTV2Fee extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OFTV2FeeInterface;
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
        "CallOFTReceivedSuccess(uint16,bytes,uint64,bytes32)"(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: null, _nonce?: null, _hash?: null): CallOFTReceivedSuccessEventFilter$2;
        CallOFTReceivedSuccess(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: null, _nonce?: null, _hash?: null): CallOFTReceivedSuccessEventFilter$2;
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter$3;
        MessageFailed(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter$3;
        "NonContractAddress(address)"(_address?: null): NonContractAddressEventFilter$2;
        NonContractAddress(_address?: null): NonContractAddressEventFilter$2;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$4;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$4;
        "ReceiveFromChain(uint16,address,uint256)"(_srcChainId?: PromiseOrValue<BigNumberish> | null, _to?: PromiseOrValue<string> | null, _amount?: null): ReceiveFromChainEventFilter$3;
        ReceiveFromChain(_srcChainId?: PromiseOrValue<BigNumberish> | null, _to?: PromiseOrValue<string> | null, _amount?: null): ReceiveFromChainEventFilter$3;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter$3;
        RetryMessageSuccess(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter$3;
        "SendToChain(uint16,address,bytes32,uint256)"(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _amount?: null): SendToChainEventFilter$3;
        SendToChain(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _amount?: null): SendToChainEventFilter$3;
        "SetDefaultFeeBp(uint16)"(feeBp?: null): SetDefaultFeeBpEventFilter$1;
        SetDefaultFeeBp(feeBp?: null): SetDefaultFeeBpEventFilter$1;
        "SetFeeBp(uint16,bool,uint16)"(dstchainId?: null, enabled?: null, feeBp?: null): SetFeeBpEventFilter$1;
        SetFeeBp(dstchainId?: null, enabled?: null, feeBp?: null): SetFeeBpEventFilter$1;
        "SetFeeOwner(address)"(feeOwner?: null): SetFeeOwnerEventFilter$1;
        SetFeeOwner(feeOwner?: null): SetFeeOwnerEventFilter$1;
        "SetMinDstGas(uint16,uint16,uint256)"(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter$3;
        SetMinDstGas(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter$3;
        "SetPrecrime(address)"(precrime?: null): SetPrecrimeEventFilter$3;
        SetPrecrime(precrime?: null): SetPrecrimeEventFilter$3;
        "SetTrustedRemote(uint16,bytes)"(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter$3;
        SetTrustedRemote(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter$3;
        "SetTrustedRemoteAddress(uint16,bytes)"(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter$3;
        SetTrustedRemoteAddress(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter$3;
        "SetUseCustomAdapterParams(bool)"(_useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter$3;
        SetUseCustomAdapterParams(_useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter$3;
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

type EnforcedOptionParamStruct = {
    eid: PromiseOrValue<BigNumberish>;
    msgType: PromiseOrValue<BigNumberish>;
    options: PromiseOrValue<BytesLike>;
};
type EnforcedOptionParamStructOutput = [number, number, string] & {
    eid: number;
    msgType: number;
    options: string;
};
type OriginStruct = {
    srcEid: PromiseOrValue<BigNumberish>;
    sender: PromiseOrValue<BytesLike>;
    nonce: PromiseOrValue<BigNumberish>;
};
type SendParamStruct = {
    dstEid: PromiseOrValue<BigNumberish>;
    to: PromiseOrValue<BytesLike>;
    amountLD: PromiseOrValue<BigNumberish>;
    minAmountLD: PromiseOrValue<BigNumberish>;
    extraOptions: PromiseOrValue<BytesLike>;
    composeMsg: PromiseOrValue<BytesLike>;
    oftCmd: PromiseOrValue<BytesLike>;
};
type OFTLimitStructOutput = [BigNumber, BigNumber] & {
    minAmountLD: BigNumber;
    maxAmountLD: BigNumber;
};
type OFTFeeDetailStructOutput = [BigNumber, string] & {
    feeAmountLD: BigNumber;
    description: string;
};
type OFTReceiptStructOutput = [BigNumber, BigNumber] & {
    amountSentLD: BigNumber;
    amountReceivedLD: BigNumber;
};
type MessagingFeeStruct = {
    nativeFee: PromiseOrValue<BigNumberish>;
    lzTokenFee: PromiseOrValue<BigNumberish>;
};
type MessagingFeeStructOutput = [BigNumber, BigNumber] & {
    nativeFee: BigNumber;
    lzTokenFee: BigNumber;
};
type MessagingReceiptStructOutput = [
    string,
    BigNumber,
    MessagingFeeStructOutput
] & {
    guid: string;
    nonce: BigNumber;
    fee: MessagingFeeStructOutput;
};
interface OFTV3Interface extends utils.Interface {
    functions: {
        "ARBITRUM_EID()": FunctionFragment;
        "BPS_DENOMINATOR()": FunctionFragment;
        "ETH_EID()": FunctionFragment;
        "LOCAL_EID()": FunctionFragment;
        "SEND_CREDITS()": FunctionFragment;
        "SEND_OFT()": FunctionFragment;
        "TON_EID()": FunctionFragment;
        "TRON_EID()": FunctionFragment;
        "WITHDRAW_REMOTE()": FunctionFragment;
        "allowInitializePath((uint32,bytes32,uint64))": FunctionFragment;
        "approvalRequired()": FunctionFragment;
        "combineOptions(uint32,uint16,bytes)": FunctionFragment;
        "credits(uint32)": FunctionFragment;
        "depositLocal(uint256)": FunctionFragment;
        "endpoint()": FunctionFragment;
        "enforcedOptions(uint32,uint16)": FunctionFragment;
        "feeBalance()": FunctionFragment;
        "feeBps()": FunctionFragment;
        "isComposeMsgSender((uint32,bytes32,uint64),bytes,address)": FunctionFragment;
        "lzReceive((uint32,bytes32,uint64),bytes32,bytes,address,bytes)": FunctionFragment;
        "nextNonce(uint32,bytes32)": FunctionFragment;
        "oAppVersion()": FunctionFragment;
        "oftVersion()": FunctionFragment;
        "owner()": FunctionFragment;
        "peers(uint32)": FunctionFragment;
        "planner()": FunctionFragment;
        "quoteOFT((uint32,bytes32,uint256,uint256,bytes,bytes,bytes))": FunctionFragment;
        "quoteSend((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),bool)": FunctionFragment;
        "quoteSendCredits(uint32,uint64,uint64,uint64,uint64,bytes,bool)": FunctionFragment;
        "quoteWithdrawRemote((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),bool)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "send((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),(uint256,uint256),address)": FunctionFragment;
        "sendCredits(uint32,uint64,uint64,uint64,uint64,bytes,(uint256,uint256))": FunctionFragment;
        "setDelegate(address)": FunctionFragment;
        "setEnforcedOptions((uint32,uint16,bytes)[])": FunctionFragment;
        "setFeeBps(uint16)": FunctionFragment;
        "setPeer(uint32,bytes32)": FunctionFragment;
        "setPlanner(address)": FunctionFragment;
        "sharedDecimals()": FunctionFragment;
        "token()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "tvl()": FunctionFragment;
        "withdrawFees(address,uint256)": FunctionFragment;
        "withdrawLocal(address,uint256)": FunctionFragment;
        "withdrawRemote((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),(uint256,uint256),address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ARBITRUM_EID" | "BPS_DENOMINATOR" | "ETH_EID" | "LOCAL_EID" | "SEND_CREDITS" | "SEND_OFT" | "TON_EID" | "TRON_EID" | "WITHDRAW_REMOTE" | "allowInitializePath" | "approvalRequired" | "combineOptions" | "credits" | "depositLocal" | "endpoint" | "enforcedOptions" | "feeBalance" | "feeBps" | "isComposeMsgSender" | "lzReceive" | "nextNonce" | "oAppVersion" | "oftVersion" | "owner" | "peers" | "planner" | "quoteOFT" | "quoteSend" | "quoteSendCredits" | "quoteWithdrawRemote" | "renounceOwnership" | "send" | "sendCredits" | "setDelegate" | "setEnforcedOptions" | "setFeeBps" | "setPeer" | "setPlanner" | "sharedDecimals" | "token" | "transferOwnership" | "tvl" | "withdrawFees" | "withdrawLocal" | "withdrawRemote"): FunctionFragment;
    encodeFunctionData(functionFragment: "ARBITRUM_EID", values?: undefined): string;
    encodeFunctionData(functionFragment: "BPS_DENOMINATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "ETH_EID", values?: undefined): string;
    encodeFunctionData(functionFragment: "LOCAL_EID", values?: undefined): string;
    encodeFunctionData(functionFragment: "SEND_CREDITS", values?: undefined): string;
    encodeFunctionData(functionFragment: "SEND_OFT", values?: undefined): string;
    encodeFunctionData(functionFragment: "TON_EID", values?: undefined): string;
    encodeFunctionData(functionFragment: "TRON_EID", values?: undefined): string;
    encodeFunctionData(functionFragment: "WITHDRAW_REMOTE", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowInitializePath", values: [OriginStruct]): string;
    encodeFunctionData(functionFragment: "approvalRequired", values?: undefined): string;
    encodeFunctionData(functionFragment: "combineOptions", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "credits", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "depositLocal", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "endpoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "enforcedOptions", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "feeBalance", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "isComposeMsgSender", values: [OriginStruct, PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "lzReceive", values: [
        OriginStruct,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "nextNonce", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "oAppVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "oftVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "peers", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "planner", values?: undefined): string;
    encodeFunctionData(functionFragment: "quoteOFT", values: [SendParamStruct]): string;
    encodeFunctionData(functionFragment: "quoteSend", values: [SendParamStruct, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "quoteSendCredits", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "quoteWithdrawRemote", values: [SendParamStruct, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "send", values: [SendParamStruct, MessagingFeeStruct, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "sendCredits", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        MessagingFeeStruct
    ]): string;
    encodeFunctionData(functionFragment: "setDelegate", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setEnforcedOptions", values: [EnforcedOptionParamStruct[]]): string;
    encodeFunctionData(functionFragment: "setFeeBps", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setPeer", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setPlanner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "sharedDecimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "tvl", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawFees", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdrawLocal", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdrawRemote", values: [SendParamStruct, MessagingFeeStruct, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "ARBITRUM_EID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "BPS_DENOMINATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ETH_EID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "LOCAL_EID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SEND_CREDITS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SEND_OFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "TON_EID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "TRON_EID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WITHDRAW_REMOTE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowInitializePath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approvalRequired", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "combineOptions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "credits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositLocal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "endpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enforcedOptions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isComposeMsgSender", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oAppVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oftVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "peers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "planner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteOFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteSend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteSendCredits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteWithdrawRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendCredits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDelegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEnforcedOptions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPeer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPlanner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sharedDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tvl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawLocal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawRemote", data: BytesLike): Result;
    events: {
        "CreditsReceived(bytes32,uint32,bytes)": EventFragment;
        "CreditsSent(uint32,uint64,uint64,uint64,uint64)": EventFragment;
        "EnforcedOptionSet(tuple[])": EventFragment;
        "FeeBpsSet(uint16)": EventFragment;
        "FeesWithdrawn(address,uint256)": EventFragment;
        "LocalDeposit(uint256)": EventFragment;
        "LocalWithdrawn(address,uint256)": EventFragment;
        "OFTReceived(bytes32,uint32,address,uint256)": EventFragment;
        "OFTSent(bytes32,uint32,address,uint256,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "PeerSet(uint32,bytes32)": EventFragment;
        "PlannerSet(address)": EventFragment;
        "RemoteWithdrawReceived(bytes32,uint32,address,uint256)": EventFragment;
        "RemoteWithdrawn(uint32,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CreditsReceived"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CreditsSent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EnforcedOptionSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FeeBpsSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FeesWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LocalDeposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LocalWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OFTReceived"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OFTSent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PeerSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PlannerSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoteWithdrawReceived"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoteWithdrawn"): EventFragment;
}
interface CreditsReceivedEventObject {
    guid: string;
    srcEid: number;
    message: string;
}
type CreditsReceivedEvent = TypedEvent<[
    string,
    number,
    string
], CreditsReceivedEventObject>;
type CreditsReceivedEventFilter = TypedEventFilter<CreditsReceivedEvent>;
interface CreditsSentEventObject {
    dstEid: number;
    creditsEth: BigNumber;
    creditsArbitrum: BigNumber;
    creditsTon: BigNumber;
    creditsTron: BigNumber;
}
type CreditsSentEvent = TypedEvent<[
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], CreditsSentEventObject>;
type CreditsSentEventFilter = TypedEventFilter<CreditsSentEvent>;
interface EnforcedOptionSetEventObject {
    _enforcedOptions: EnforcedOptionParamStructOutput[];
}
type EnforcedOptionSetEvent = TypedEvent<[
    EnforcedOptionParamStructOutput[]
], EnforcedOptionSetEventObject>;
type EnforcedOptionSetEventFilter = TypedEventFilter<EnforcedOptionSetEvent>;
interface FeeBpsSetEventObject {
    feeBps: number;
}
type FeeBpsSetEvent = TypedEvent<[number], FeeBpsSetEventObject>;
type FeeBpsSetEventFilter = TypedEventFilter<FeeBpsSetEvent>;
interface FeesWithdrawnEventObject {
    to: string;
    amount: BigNumber;
}
type FeesWithdrawnEvent = TypedEvent<[
    string,
    BigNumber
], FeesWithdrawnEventObject>;
type FeesWithdrawnEventFilter = TypedEventFilter<FeesWithdrawnEvent>;
interface LocalDepositEventObject {
    amount: BigNumber;
}
type LocalDepositEvent = TypedEvent<[
    BigNumber
], LocalDepositEventObject>;
type LocalDepositEventFilter = TypedEventFilter<LocalDepositEvent>;
interface LocalWithdrawnEventObject {
    to: string;
    amount: BigNumber;
}
type LocalWithdrawnEvent = TypedEvent<[
    string,
    BigNumber
], LocalWithdrawnEventObject>;
type LocalWithdrawnEventFilter = TypedEventFilter<LocalWithdrawnEvent>;
interface OFTReceivedEventObject {
    guid: string;
    srcEid: number;
    toAddress: string;
    amountReceivedLD: BigNumber;
}
type OFTReceivedEvent = TypedEvent<[
    string,
    number,
    string,
    BigNumber
], OFTReceivedEventObject>;
type OFTReceivedEventFilter = TypedEventFilter<OFTReceivedEvent>;
interface OFTSentEventObject {
    guid: string;
    dstEid: number;
    fromAddress: string;
    amountSentLD: BigNumber;
    amountReceivedLD: BigNumber;
}
type OFTSentEvent = TypedEvent<[
    string,
    number,
    string,
    BigNumber,
    BigNumber
], OFTSentEventObject>;
type OFTSentEventFilter = TypedEventFilter<OFTSentEvent>;
interface OwnershipTransferredEventObject$3 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$3 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$3>;
type OwnershipTransferredEventFilter$3 = TypedEventFilter<OwnershipTransferredEvent$3>;
interface PeerSetEventObject {
    eid: number;
    peer: string;
}
type PeerSetEvent = TypedEvent<[number, string], PeerSetEventObject>;
type PeerSetEventFilter = TypedEventFilter<PeerSetEvent>;
interface PlannerSetEventObject {
    planner: string;
}
type PlannerSetEvent = TypedEvent<[string], PlannerSetEventObject>;
type PlannerSetEventFilter = TypedEventFilter<PlannerSetEvent>;
interface RemoteWithdrawReceivedEventObject {
    guid: string;
    srcEid: number;
    to: string;
    amount: BigNumber;
}
type RemoteWithdrawReceivedEvent = TypedEvent<[
    string,
    number,
    string,
    BigNumber
], RemoteWithdrawReceivedEventObject>;
type RemoteWithdrawReceivedEventFilter = TypedEventFilter<RemoteWithdrawReceivedEvent>;
interface RemoteWithdrawnEventObject {
    dstEid: number;
    amount: BigNumber;
}
type RemoteWithdrawnEvent = TypedEvent<[
    number,
    BigNumber
], RemoteWithdrawnEventObject>;
type RemoteWithdrawnEventFilter = TypedEventFilter<RemoteWithdrawnEvent>;
interface OFTV3 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OFTV3Interface;
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
        ARBITRUM_EID(overrides?: CallOverrides): Promise<[number]>;
        BPS_DENOMINATOR(overrides?: CallOverrides): Promise<[number]>;
        ETH_EID(overrides?: CallOverrides): Promise<[number]>;
        LOCAL_EID(overrides?: CallOverrides): Promise<[number]>;
        SEND_CREDITS(overrides?: CallOverrides): Promise<[number]>;
        SEND_OFT(overrides?: CallOverrides): Promise<[number]>;
        TON_EID(overrides?: CallOverrides): Promise<[number]>;
        TRON_EID(overrides?: CallOverrides): Promise<[number]>;
        WITHDRAW_REMOTE(overrides?: CallOverrides): Promise<[number]>;
        allowInitializePath(origin: OriginStruct, overrides?: CallOverrides): Promise<[boolean]>;
        approvalRequired(overrides?: CallOverrides): Promise<[boolean]>;
        combineOptions(_eid: PromiseOrValue<BigNumberish>, _msgType: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        credits(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            credits: BigNumber;
        }>;
        depositLocal(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        endpoint(overrides?: CallOverrides): Promise<[string]>;
        enforcedOptions(eid: PromiseOrValue<BigNumberish>, msgType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            enforcedOption: string;
        }>;
        feeBalance(overrides?: CallOverrides): Promise<[BigNumber]>;
        feeBps(overrides?: CallOverrides): Promise<[number]>;
        isComposeMsgSender(arg0: OriginStruct, arg1: PromiseOrValue<BytesLike>, _sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        lzReceive(_origin: OriginStruct, _guid: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _extraData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nextNonce(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber] & {
            nonce: BigNumber;
        }>;
        oAppVersion(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            senderVersion: BigNumber;
            receiverVersion: BigNumber;
        }>;
        oftVersion(overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            interfaceId: string;
            version: BigNumber;
        }>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        peers(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            peer: string;
        }>;
        planner(overrides?: CallOverrides): Promise<[string]>;
        quoteOFT(_sendParam: SendParamStruct, overrides?: CallOverrides): Promise<[
            OFTLimitStructOutput,
            OFTFeeDetailStructOutput[],
            OFTReceiptStructOutput
        ] & {
            oftLimit: OFTLimitStructOutput;
            oftFeeDetails: OFTFeeDetailStructOutput[];
            oftReceipt: OFTReceiptStructOutput;
        }>;
        quoteSend(_sendParam: SendParamStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            MessagingFeeStructOutput
        ] & {
            msgFee: MessagingFeeStructOutput;
        }>;
        quoteSendCredits(_dstEid: PromiseOrValue<BigNumberish>, _creditsEth: PromiseOrValue<BigNumberish>, _creditsArbitrum: PromiseOrValue<BigNumberish>, _creditsTon: PromiseOrValue<BigNumberish>, _creditsTron: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            MessagingFeeStructOutput
        ] & {
            msgFee: MessagingFeeStructOutput;
        }>;
        quoteWithdrawRemote(_sendParam: SendParamStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            MessagingFeeStructOutput
        ] & {
            msgFee: MessagingFeeStructOutput;
        }>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        send(_sendParam: SendParamStruct, _fee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendCredits(_dstEid: PromiseOrValue<BigNumberish>, _creditsEth: PromiseOrValue<BigNumberish>, _creditsArbitrum: PromiseOrValue<BigNumberish>, _creditsTon: PromiseOrValue<BigNumberish>, _creditsTron: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _fee: MessagingFeeStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDelegate(_delegate: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setEnforcedOptions(_enforcedOptions: EnforcedOptionParamStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFeeBps(_feeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPeer(_eid: PromiseOrValue<BigNumberish>, _peer: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPlanner(_planner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sharedDecimals(overrides?: CallOverrides): Promise<[number]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tvl(overrides?: CallOverrides): Promise<[BigNumber]>;
        withdrawFees(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawLocal(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawRemote(_sendParam: SendParamStruct, _fee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    ARBITRUM_EID(overrides?: CallOverrides): Promise<number>;
    BPS_DENOMINATOR(overrides?: CallOverrides): Promise<number>;
    ETH_EID(overrides?: CallOverrides): Promise<number>;
    LOCAL_EID(overrides?: CallOverrides): Promise<number>;
    SEND_CREDITS(overrides?: CallOverrides): Promise<number>;
    SEND_OFT(overrides?: CallOverrides): Promise<number>;
    TON_EID(overrides?: CallOverrides): Promise<number>;
    TRON_EID(overrides?: CallOverrides): Promise<number>;
    WITHDRAW_REMOTE(overrides?: CallOverrides): Promise<number>;
    allowInitializePath(origin: OriginStruct, overrides?: CallOverrides): Promise<boolean>;
    approvalRequired(overrides?: CallOverrides): Promise<boolean>;
    combineOptions(_eid: PromiseOrValue<BigNumberish>, _msgType: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    credits(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    depositLocal(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    endpoint(overrides?: CallOverrides): Promise<string>;
    enforcedOptions(eid: PromiseOrValue<BigNumberish>, msgType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    feeBalance(overrides?: CallOverrides): Promise<BigNumber>;
    feeBps(overrides?: CallOverrides): Promise<number>;
    isComposeMsgSender(arg0: OriginStruct, arg1: PromiseOrValue<BytesLike>, _sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    lzReceive(_origin: OriginStruct, _guid: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _extraData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nextNonce(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    oAppVersion(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        senderVersion: BigNumber;
        receiverVersion: BigNumber;
    }>;
    oftVersion(overrides?: CallOverrides): Promise<[string, BigNumber] & {
        interfaceId: string;
        version: BigNumber;
    }>;
    owner(overrides?: CallOverrides): Promise<string>;
    peers(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    planner(overrides?: CallOverrides): Promise<string>;
    quoteOFT(_sendParam: SendParamStruct, overrides?: CallOverrides): Promise<[
        OFTLimitStructOutput,
        OFTFeeDetailStructOutput[],
        OFTReceiptStructOutput
    ] & {
        oftLimit: OFTLimitStructOutput;
        oftFeeDetails: OFTFeeDetailStructOutput[];
        oftReceipt: OFTReceiptStructOutput;
    }>;
    quoteSend(_sendParam: SendParamStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<MessagingFeeStructOutput>;
    quoteSendCredits(_dstEid: PromiseOrValue<BigNumberish>, _creditsEth: PromiseOrValue<BigNumberish>, _creditsArbitrum: PromiseOrValue<BigNumberish>, _creditsTon: PromiseOrValue<BigNumberish>, _creditsTron: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<MessagingFeeStructOutput>;
    quoteWithdrawRemote(_sendParam: SendParamStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<MessagingFeeStructOutput>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    send(_sendParam: SendParamStruct, _fee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendCredits(_dstEid: PromiseOrValue<BigNumberish>, _creditsEth: PromiseOrValue<BigNumberish>, _creditsArbitrum: PromiseOrValue<BigNumberish>, _creditsTon: PromiseOrValue<BigNumberish>, _creditsTron: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _fee: MessagingFeeStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDelegate(_delegate: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setEnforcedOptions(_enforcedOptions: EnforcedOptionParamStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFeeBps(_feeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPeer(_eid: PromiseOrValue<BigNumberish>, _peer: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPlanner(_planner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sharedDecimals(overrides?: CallOverrides): Promise<number>;
    token(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tvl(overrides?: CallOverrides): Promise<BigNumber>;
    withdrawFees(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawLocal(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawRemote(_sendParam: SendParamStruct, _fee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        ARBITRUM_EID(overrides?: CallOverrides): Promise<number>;
        BPS_DENOMINATOR(overrides?: CallOverrides): Promise<number>;
        ETH_EID(overrides?: CallOverrides): Promise<number>;
        LOCAL_EID(overrides?: CallOverrides): Promise<number>;
        SEND_CREDITS(overrides?: CallOverrides): Promise<number>;
        SEND_OFT(overrides?: CallOverrides): Promise<number>;
        TON_EID(overrides?: CallOverrides): Promise<number>;
        TRON_EID(overrides?: CallOverrides): Promise<number>;
        WITHDRAW_REMOTE(overrides?: CallOverrides): Promise<number>;
        allowInitializePath(origin: OriginStruct, overrides?: CallOverrides): Promise<boolean>;
        approvalRequired(overrides?: CallOverrides): Promise<boolean>;
        combineOptions(_eid: PromiseOrValue<BigNumberish>, _msgType: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        credits(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        depositLocal(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        endpoint(overrides?: CallOverrides): Promise<string>;
        enforcedOptions(eid: PromiseOrValue<BigNumberish>, msgType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        feeBalance(overrides?: CallOverrides): Promise<BigNumber>;
        feeBps(overrides?: CallOverrides): Promise<number>;
        isComposeMsgSender(arg0: OriginStruct, arg1: PromiseOrValue<BytesLike>, _sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        lzReceive(_origin: OriginStruct, _guid: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _extraData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        nextNonce(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        oAppVersion(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            senderVersion: BigNumber;
            receiverVersion: BigNumber;
        }>;
        oftVersion(overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            interfaceId: string;
            version: BigNumber;
        }>;
        owner(overrides?: CallOverrides): Promise<string>;
        peers(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        planner(overrides?: CallOverrides): Promise<string>;
        quoteOFT(_sendParam: SendParamStruct, overrides?: CallOverrides): Promise<[
            OFTLimitStructOutput,
            OFTFeeDetailStructOutput[],
            OFTReceiptStructOutput
        ] & {
            oftLimit: OFTLimitStructOutput;
            oftFeeDetails: OFTFeeDetailStructOutput[];
            oftReceipt: OFTReceiptStructOutput;
        }>;
        quoteSend(_sendParam: SendParamStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<MessagingFeeStructOutput>;
        quoteSendCredits(_dstEid: PromiseOrValue<BigNumberish>, _creditsEth: PromiseOrValue<BigNumberish>, _creditsArbitrum: PromiseOrValue<BigNumberish>, _creditsTon: PromiseOrValue<BigNumberish>, _creditsTron: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<MessagingFeeStructOutput>;
        quoteWithdrawRemote(_sendParam: SendParamStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<MessagingFeeStructOutput>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        send(_sendParam: SendParamStruct, _fee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            MessagingReceiptStructOutput,
            OFTReceiptStructOutput
        ] & {
            msgReceipt: MessagingReceiptStructOutput;
            oftReceipt: OFTReceiptStructOutput;
        }>;
        sendCredits(_dstEid: PromiseOrValue<BigNumberish>, _creditsEth: PromiseOrValue<BigNumberish>, _creditsArbitrum: PromiseOrValue<BigNumberish>, _creditsTon: PromiseOrValue<BigNumberish>, _creditsTron: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _fee: MessagingFeeStruct, overrides?: CallOverrides): Promise<MessagingReceiptStructOutput>;
        setDelegate(_delegate: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setEnforcedOptions(_enforcedOptions: EnforcedOptionParamStruct[], overrides?: CallOverrides): Promise<void>;
        setFeeBps(_feeBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPeer(_eid: PromiseOrValue<BigNumberish>, _peer: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setPlanner(_planner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        sharedDecimals(overrides?: CallOverrides): Promise<number>;
        token(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        tvl(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawFees(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdrawLocal(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdrawRemote(_sendParam: SendParamStruct, _fee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<MessagingReceiptStructOutput>;
    };
    filters: {
        "CreditsReceived(bytes32,uint32,bytes)"(guid?: null, srcEid?: null, message?: null): CreditsReceivedEventFilter;
        CreditsReceived(guid?: null, srcEid?: null, message?: null): CreditsReceivedEventFilter;
        "CreditsSent(uint32,uint64,uint64,uint64,uint64)"(dstEid?: null, creditsEth?: null, creditsArbitrum?: null, creditsTon?: null, creditsTron?: null): CreditsSentEventFilter;
        CreditsSent(dstEid?: null, creditsEth?: null, creditsArbitrum?: null, creditsTon?: null, creditsTron?: null): CreditsSentEventFilter;
        "EnforcedOptionSet(tuple[])"(_enforcedOptions?: null): EnforcedOptionSetEventFilter;
        EnforcedOptionSet(_enforcedOptions?: null): EnforcedOptionSetEventFilter;
        "FeeBpsSet(uint16)"(feeBps?: null): FeeBpsSetEventFilter;
        FeeBpsSet(feeBps?: null): FeeBpsSetEventFilter;
        "FeesWithdrawn(address,uint256)"(to?: null, amount?: null): FeesWithdrawnEventFilter;
        FeesWithdrawn(to?: null, amount?: null): FeesWithdrawnEventFilter;
        "LocalDeposit(uint256)"(amount?: null): LocalDepositEventFilter;
        LocalDeposit(amount?: null): LocalDepositEventFilter;
        "LocalWithdrawn(address,uint256)"(to?: null, amount?: null): LocalWithdrawnEventFilter;
        LocalWithdrawn(to?: null, amount?: null): LocalWithdrawnEventFilter;
        "OFTReceived(bytes32,uint32,address,uint256)"(guid?: PromiseOrValue<BytesLike> | null, srcEid?: null, toAddress?: PromiseOrValue<string> | null, amountReceivedLD?: null): OFTReceivedEventFilter;
        OFTReceived(guid?: PromiseOrValue<BytesLike> | null, srcEid?: null, toAddress?: PromiseOrValue<string> | null, amountReceivedLD?: null): OFTReceivedEventFilter;
        "OFTSent(bytes32,uint32,address,uint256,uint256)"(guid?: PromiseOrValue<BytesLike> | null, dstEid?: null, fromAddress?: PromiseOrValue<string> | null, amountSentLD?: null, amountReceivedLD?: null): OFTSentEventFilter;
        OFTSent(guid?: PromiseOrValue<BytesLike> | null, dstEid?: null, fromAddress?: PromiseOrValue<string> | null, amountSentLD?: null, amountReceivedLD?: null): OFTSentEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$3;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$3;
        "PeerSet(uint32,bytes32)"(eid?: null, peer?: null): PeerSetEventFilter;
        PeerSet(eid?: null, peer?: null): PeerSetEventFilter;
        "PlannerSet(address)"(planner?: null): PlannerSetEventFilter;
        PlannerSet(planner?: null): PlannerSetEventFilter;
        "RemoteWithdrawReceived(bytes32,uint32,address,uint256)"(guid?: null, srcEid?: null, to?: null, amount?: null): RemoteWithdrawReceivedEventFilter;
        RemoteWithdrawReceived(guid?: null, srcEid?: null, to?: null, amount?: null): RemoteWithdrawReceivedEventFilter;
        "RemoteWithdrawn(uint32,uint256)"(dstEid?: null, amount?: null): RemoteWithdrawnEventFilter;
        RemoteWithdrawn(dstEid?: null, amount?: null): RemoteWithdrawnEventFilter;
    };
    estimateGas: {
        ARBITRUM_EID(overrides?: CallOverrides): Promise<BigNumber>;
        BPS_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;
        ETH_EID(overrides?: CallOverrides): Promise<BigNumber>;
        LOCAL_EID(overrides?: CallOverrides): Promise<BigNumber>;
        SEND_CREDITS(overrides?: CallOverrides): Promise<BigNumber>;
        SEND_OFT(overrides?: CallOverrides): Promise<BigNumber>;
        TON_EID(overrides?: CallOverrides): Promise<BigNumber>;
        TRON_EID(overrides?: CallOverrides): Promise<BigNumber>;
        WITHDRAW_REMOTE(overrides?: CallOverrides): Promise<BigNumber>;
        allowInitializePath(origin: OriginStruct, overrides?: CallOverrides): Promise<BigNumber>;
        approvalRequired(overrides?: CallOverrides): Promise<BigNumber>;
        combineOptions(_eid: PromiseOrValue<BigNumberish>, _msgType: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        credits(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        depositLocal(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        endpoint(overrides?: CallOverrides): Promise<BigNumber>;
        enforcedOptions(eid: PromiseOrValue<BigNumberish>, msgType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        feeBalance(overrides?: CallOverrides): Promise<BigNumber>;
        feeBps(overrides?: CallOverrides): Promise<BigNumber>;
        isComposeMsgSender(arg0: OriginStruct, arg1: PromiseOrValue<BytesLike>, _sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        lzReceive(_origin: OriginStruct, _guid: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _extraData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nextNonce(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        oAppVersion(overrides?: CallOverrides): Promise<BigNumber>;
        oftVersion(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        peers(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        planner(overrides?: CallOverrides): Promise<BigNumber>;
        quoteOFT(_sendParam: SendParamStruct, overrides?: CallOverrides): Promise<BigNumber>;
        quoteSend(_sendParam: SendParamStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        quoteSendCredits(_dstEid: PromiseOrValue<BigNumberish>, _creditsEth: PromiseOrValue<BigNumberish>, _creditsArbitrum: PromiseOrValue<BigNumberish>, _creditsTon: PromiseOrValue<BigNumberish>, _creditsTron: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        quoteWithdrawRemote(_sendParam: SendParamStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        send(_sendParam: SendParamStruct, _fee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendCredits(_dstEid: PromiseOrValue<BigNumberish>, _creditsEth: PromiseOrValue<BigNumberish>, _creditsArbitrum: PromiseOrValue<BigNumberish>, _creditsTon: PromiseOrValue<BigNumberish>, _creditsTron: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _fee: MessagingFeeStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDelegate(_delegate: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setEnforcedOptions(_enforcedOptions: EnforcedOptionParamStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFeeBps(_feeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPeer(_eid: PromiseOrValue<BigNumberish>, _peer: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPlanner(_planner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sharedDecimals(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tvl(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawFees(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawLocal(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawRemote(_sendParam: SendParamStruct, _fee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ARBITRUM_EID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        BPS_DENOMINATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ETH_EID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        LOCAL_EID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SEND_CREDITS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SEND_OFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        TON_EID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        TRON_EID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WITHDRAW_REMOTE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowInitializePath(origin: OriginStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approvalRequired(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        combineOptions(_eid: PromiseOrValue<BigNumberish>, _msgType: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        credits(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        depositLocal(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        endpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enforcedOptions(eid: PromiseOrValue<BigNumberish>, msgType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isComposeMsgSender(arg0: OriginStruct, arg1: PromiseOrValue<BytesLike>, _sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzReceive(_origin: OriginStruct, _guid: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _extraData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nextNonce(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oAppVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oftVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        peers(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        planner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteOFT(_sendParam: SendParamStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteSend(_sendParam: SendParamStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteSendCredits(_dstEid: PromiseOrValue<BigNumberish>, _creditsEth: PromiseOrValue<BigNumberish>, _creditsArbitrum: PromiseOrValue<BigNumberish>, _creditsTon: PromiseOrValue<BigNumberish>, _creditsTron: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteWithdrawRemote(_sendParam: SendParamStruct, _payInLzToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        send(_sendParam: SendParamStruct, _fee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendCredits(_dstEid: PromiseOrValue<BigNumberish>, _creditsEth: PromiseOrValue<BigNumberish>, _creditsArbitrum: PromiseOrValue<BigNumberish>, _creditsTon: PromiseOrValue<BigNumberish>, _creditsTron: PromiseOrValue<BigNumberish>, _extraOptions: PromiseOrValue<BytesLike>, _fee: MessagingFeeStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDelegate(_delegate: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setEnforcedOptions(_enforcedOptions: EnforcedOptionParamStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFeeBps(_feeBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPeer(_eid: PromiseOrValue<BigNumberish>, _peer: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPlanner(_planner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sharedDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tvl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawFees(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawLocal(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawRemote(_sendParam: SendParamStruct, _fee: MessagingFeeStruct, _refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

interface ProxyOFTV1Interface extends utils.Interface {
    functions: {
        "DEFAULT_PAYLOAD_SIZE_LIMIT()": FunctionFragment;
        "NO_EXTRA_GAS()": FunctionFragment;
        "PT_SEND()": FunctionFragment;
        "circulatingSupply()": FunctionFragment;
        "estimateSendFee(uint16,bytes,uint256,bool,bytes)": FunctionFragment;
        "failedMessages(uint16,bytes,uint64)": FunctionFragment;
        "forceResumeReceive(uint16,bytes)": FunctionFragment;
        "getConfig(uint16,uint16,address,uint256)": FunctionFragment;
        "getTrustedRemoteAddress(uint16)": FunctionFragment;
        "interfaceId()": FunctionFragment;
        "isTrustedRemote(uint16,bytes)": FunctionFragment;
        "lzEndpoint()": FunctionFragment;
        "lzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "minDstGasLookup(uint16,uint16)": FunctionFragment;
        "nonblockingLzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "payloadSizeLimitLookup(uint16)": FunctionFragment;
        "precrime()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "retryMessage(uint16,bytes,uint64,bytes)": FunctionFragment;
        "sendFrom(address,uint16,bytes,uint256,address,address,bytes)": FunctionFragment;
        "setConfig(uint16,uint16,uint256,bytes)": FunctionFragment;
        "setMinDstGas(uint16,uint16,uint256)": FunctionFragment;
        "setPayloadSizeLimit(uint16,uint256)": FunctionFragment;
        "setPrecrime(address)": FunctionFragment;
        "setReceiveVersion(uint16)": FunctionFragment;
        "setSendVersion(uint16)": FunctionFragment;
        "setTrustedRemote(uint16,bytes)": FunctionFragment;
        "setTrustedRemoteAddress(uint16,bytes)": FunctionFragment;
        "setUseCustomAdapterParams(bool)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "token()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "trustedRemoteLookup(uint16)": FunctionFragment;
        "useCustomAdapterParams()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_PAYLOAD_SIZE_LIMIT" | "NO_EXTRA_GAS" | "PT_SEND" | "circulatingSupply" | "estimateSendFee" | "failedMessages" | "forceResumeReceive" | "getConfig" | "getTrustedRemoteAddress" | "interfaceId" | "isTrustedRemote" | "lzEndpoint" | "lzReceive" | "minDstGasLookup" | "nonblockingLzReceive" | "owner" | "payloadSizeLimitLookup" | "precrime" | "renounceOwnership" | "retryMessage" | "sendFrom" | "setConfig" | "setMinDstGas" | "setPayloadSizeLimit" | "setPrecrime" | "setReceiveVersion" | "setSendVersion" | "setTrustedRemote" | "setTrustedRemoteAddress" | "setUseCustomAdapterParams" | "supportsInterface" | "token" | "transferOwnership" | "trustedRemoteLookup" | "useCustomAdapterParams"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_PAYLOAD_SIZE_LIMIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "NO_EXTRA_GAS", values?: undefined): string;
    encodeFunctionData(functionFragment: "PT_SEND", values?: undefined): string;
    encodeFunctionData(functionFragment: "circulatingSupply", values?: undefined): string;
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
    encodeFunctionData(functionFragment: "forceResumeReceive", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getConfig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTrustedRemoteAddress", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "interfaceId", values?: undefined): string;
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
    encodeFunctionData(functionFragment: "payloadSizeLimitLookup", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "precrime", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "retryMessage", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "sendFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
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
    encodeFunctionData(functionFragment: "setPayloadSizeLimit", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setPrecrime", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setReceiveVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setSendVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTrustedRemote", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setTrustedRemoteAddress", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setUseCustomAdapterParams", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "trustedRemoteLookup", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "useCustomAdapterParams", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEFAULT_PAYLOAD_SIZE_LIMIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NO_EXTRA_GAS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PT_SEND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "circulatingSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failedMessages", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceResumeReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "interfaceId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzEndpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minDstGasLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonblockingLzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "payloadSizeLimitLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "precrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "retryMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinDstGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPayloadSizeLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrecrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReceiveVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSendVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUseCustomAdapterParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "trustedRemoteLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "useCustomAdapterParams", data: BytesLike): Result;
    events: {
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ReceiveFromChain(uint16,address,uint256)": EventFragment;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)": EventFragment;
        "SendToChain(uint16,address,bytes,uint256)": EventFragment;
        "SetMinDstGas(uint16,uint16,uint256)": EventFragment;
        "SetPrecrime(address)": EventFragment;
        "SetTrustedRemote(uint16,bytes)": EventFragment;
        "SetTrustedRemoteAddress(uint16,bytes)": EventFragment;
        "SetUseCustomAdapterParams(bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MessageFailed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceiveFromChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RetryMessageSuccess"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendToChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetMinDstGas"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPrecrime"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemoteAddress"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetUseCustomAdapterParams"): EventFragment;
}
interface MessageFailedEventObject$2 {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _payload: string;
    _reason: string;
}
type MessageFailedEvent$2 = TypedEvent<[
    number,
    string,
    BigNumber,
    string,
    string
], MessageFailedEventObject$2>;
type MessageFailedEventFilter$2 = TypedEventFilter<MessageFailedEvent$2>;
interface OwnershipTransferredEventObject$2 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$2 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$2>;
type OwnershipTransferredEventFilter$2 = TypedEventFilter<OwnershipTransferredEvent$2>;
interface ReceiveFromChainEventObject$2 {
    _srcChainId: number;
    _to: string;
    _amount: BigNumber;
}
type ReceiveFromChainEvent$2 = TypedEvent<[
    number,
    string,
    BigNumber
], ReceiveFromChainEventObject$2>;
type ReceiveFromChainEventFilter$2 = TypedEventFilter<ReceiveFromChainEvent$2>;
interface RetryMessageSuccessEventObject$2 {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _payloadHash: string;
}
type RetryMessageSuccessEvent$2 = TypedEvent<[
    number,
    string,
    BigNumber,
    string
], RetryMessageSuccessEventObject$2>;
type RetryMessageSuccessEventFilter$2 = TypedEventFilter<RetryMessageSuccessEvent$2>;
interface SendToChainEventObject$2 {
    _dstChainId: number;
    _from: string;
    _toAddress: string;
    _amount: BigNumber;
}
type SendToChainEvent$2 = TypedEvent<[
    number,
    string,
    string,
    BigNumber
], SendToChainEventObject$2>;
type SendToChainEventFilter$2 = TypedEventFilter<SendToChainEvent$2>;
interface SetMinDstGasEventObject$2 {
    _dstChainId: number;
    _type: number;
    _minDstGas: BigNumber;
}
type SetMinDstGasEvent$2 = TypedEvent<[
    number,
    number,
    BigNumber
], SetMinDstGasEventObject$2>;
type SetMinDstGasEventFilter$2 = TypedEventFilter<SetMinDstGasEvent$2>;
interface SetPrecrimeEventObject$2 {
    precrime: string;
}
type SetPrecrimeEvent$2 = TypedEvent<[string], SetPrecrimeEventObject$2>;
type SetPrecrimeEventFilter$2 = TypedEventFilter<SetPrecrimeEvent$2>;
interface SetTrustedRemoteEventObject$2 {
    _remoteChainId: number;
    _path: string;
}
type SetTrustedRemoteEvent$2 = TypedEvent<[
    number,
    string
], SetTrustedRemoteEventObject$2>;
type SetTrustedRemoteEventFilter$2 = TypedEventFilter<SetTrustedRemoteEvent$2>;
interface SetTrustedRemoteAddressEventObject$2 {
    _remoteChainId: number;
    _remoteAddress: string;
}
type SetTrustedRemoteAddressEvent$2 = TypedEvent<[
    number,
    string
], SetTrustedRemoteAddressEventObject$2>;
type SetTrustedRemoteAddressEventFilter$2 = TypedEventFilter<SetTrustedRemoteAddressEvent$2>;
interface SetUseCustomAdapterParamsEventObject$2 {
    _useCustomAdapterParams: boolean;
}
type SetUseCustomAdapterParamsEvent$2 = TypedEvent<[
    boolean
], SetUseCustomAdapterParamsEventObject$2>;
type SetUseCustomAdapterParamsEventFilter$2 = TypedEventFilter<SetUseCustomAdapterParamsEvent$2>;
interface ProxyOFTV1 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ProxyOFTV1Interface;
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
        DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<[BigNumber]>;
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<[BigNumber]>;
        PT_SEND(overrides?: CallOverrides): Promise<[number]>;
        circulatingSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
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
        interfaceId(overrides?: CallOverrides): Promise<[string]>;
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
        payloadSizeLimitLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        precrime(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPayloadSizeLimit(_dstChainId: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
        setTrustedRemote(_remoteChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<[boolean]>;
    };
    DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
    NO_EXTRA_GAS(overrides?: CallOverrides): Promise<BigNumber>;
    PT_SEND(overrides?: CallOverrides): Promise<number>;
    circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
    estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
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
    interfaceId(overrides?: CallOverrides): Promise<string>;
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
    payloadSizeLimitLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    precrime(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPayloadSizeLimit(_dstChainId: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
    setTrustedRemote(_remoteChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    token(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    useCustomAdapterParams(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<BigNumber>;
        PT_SEND(overrides?: CallOverrides): Promise<number>;
        circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
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
        interfaceId(overrides?: CallOverrides): Promise<string>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        lzEndpoint(overrides?: CallOverrides): Promise<string>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        payloadSizeLimitLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        precrime(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPayloadSizeLimit(_dstChainId: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPrecrime(_precrime: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemote(_remoteChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        token(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter$2;
        MessageFailed(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter$2;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$2;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$2;
        "ReceiveFromChain(uint16,address,uint256)"(_srcChainId?: PromiseOrValue<BigNumberish> | null, _to?: PromiseOrValue<string> | null, _amount?: null): ReceiveFromChainEventFilter$2;
        ReceiveFromChain(_srcChainId?: PromiseOrValue<BigNumberish> | null, _to?: PromiseOrValue<string> | null, _amount?: null): ReceiveFromChainEventFilter$2;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter$2;
        RetryMessageSuccess(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter$2;
        "SendToChain(uint16,address,bytes,uint256)"(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: null, _amount?: null): SendToChainEventFilter$2;
        SendToChain(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: null, _amount?: null): SendToChainEventFilter$2;
        "SetMinDstGas(uint16,uint16,uint256)"(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter$2;
        SetMinDstGas(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter$2;
        "SetPrecrime(address)"(precrime?: null): SetPrecrimeEventFilter$2;
        SetPrecrime(precrime?: null): SetPrecrimeEventFilter$2;
        "SetTrustedRemote(uint16,bytes)"(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter$2;
        SetTrustedRemote(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter$2;
        "SetTrustedRemoteAddress(uint16,bytes)"(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter$2;
        SetTrustedRemoteAddress(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter$2;
        "SetUseCustomAdapterParams(bool)"(_useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter$2;
        SetUseCustomAdapterParams(_useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter$2;
    };
    estimateGas: {
        DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<BigNumber>;
        PT_SEND(overrides?: CallOverrides): Promise<BigNumber>;
        circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        interfaceId(overrides?: CallOverrides): Promise<BigNumber>;
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
        payloadSizeLimitLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        precrime(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPayloadSizeLimit(_dstChainId: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
        setTrustedRemote(_remoteChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PT_SEND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        circulatingSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        interfaceId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
        payloadSizeLimitLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        precrime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPayloadSizeLimit(_dstChainId: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
        setTrustedRemote(_remoteChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
interface ProxyOFTV2Interface extends utils.Interface {
    functions: {
        "NO_EXTRA_GAS()": FunctionFragment;
        "PT_SEND()": FunctionFragment;
        "PT_SEND_AND_CALL()": FunctionFragment;
        "callOnOFTReceived(uint16,bytes,uint64,bytes32,address,uint256,bytes,uint256)": FunctionFragment;
        "circulatingSupply()": FunctionFragment;
        "creditedPackets(uint16,bytes,uint64)": FunctionFragment;
        "estimateSendAndCallFee(uint16,bytes32,uint256,bytes,uint64,bool,bytes)": FunctionFragment;
        "estimateSendFee(uint16,bytes32,uint256,bool,bytes)": FunctionFragment;
        "failedMessages(uint16,bytes,uint64)": FunctionFragment;
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
        "renounceOwnership()": FunctionFragment;
        "retryMessage(uint16,bytes,uint64,bytes)": FunctionFragment;
        "sendAndCall(address,uint16,bytes32,uint256,bytes,uint64,(address,address,bytes))": FunctionFragment;
        "sendFrom(address,uint16,bytes32,uint256,(address,address,bytes))": FunctionFragment;
        "setConfig(uint16,uint16,uint256,bytes)": FunctionFragment;
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
    getFunction(nameOrSignatureOrTopic: "NO_EXTRA_GAS" | "PT_SEND" | "PT_SEND_AND_CALL" | "callOnOFTReceived" | "circulatingSupply" | "creditedPackets" | "estimateSendAndCallFee" | "estimateSendFee" | "failedMessages" | "forceResumeReceive" | "getConfig" | "getTrustedRemoteAddress" | "isTrustedRemote" | "lzEndpoint" | "lzReceive" | "minDstGasLookup" | "nonblockingLzReceive" | "outboundAmount" | "owner" | "precrime" | "renounceOwnership" | "retryMessage" | "sendAndCall" | "sendFrom" | "setConfig" | "setMinDstGas" | "setPrecrime" | "setReceiveVersion" | "setSendVersion" | "setTrustedRemote" | "setTrustedRemoteAddress" | "setUseCustomAdapterParams" | "sharedDecimals" | "supportsInterface" | "token" | "transferOwnership" | "trustedRemoteLookup" | "useCustomAdapterParams"): FunctionFragment;
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
    encodeFunctionData(functionFragment: "circulatingSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditedPackets", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
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
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        ICommonOFT$1.LzCallParamsStruct
    ]): string;
    encodeFunctionData(functionFragment: "sendFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        ICommonOFT$1.LzCallParamsStruct
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
    encodeFunctionData(functionFragment: "sharedDecimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "trustedRemoteLookup", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "useCustomAdapterParams", values?: undefined): string;
    decodeFunctionResult(functionFragment: "NO_EXTRA_GAS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PT_SEND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PT_SEND_AND_CALL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callOnOFTReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "circulatingSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditedPackets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendAndCallFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failedMessages", data: BytesLike): Result;
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
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "retryMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
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
    getEvent(nameOrSignatureOrTopic: "SetMinDstGas"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPrecrime"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemoteAddress"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetUseCustomAdapterParams"): EventFragment;
}
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
interface OwnershipTransferredEventObject$1 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$1 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$1>;
type OwnershipTransferredEventFilter$1 = TypedEventFilter<OwnershipTransferredEvent$1>;
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
interface ProxyOFTV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ProxyOFTV2Interface;
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
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<[BigNumber]>;
        PT_SEND(overrides?: CallOverrides): Promise<[number]>;
        PT_SEND_AND_CALL(overrides?: CallOverrides): Promise<[number]>;
        callOnOFTReceived(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _gasForCall: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        circulatingSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
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
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendAndCall(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, overrides?: PayableOverrides & {
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
        sharedDecimals(overrides?: CallOverrides): Promise<[number]>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<[boolean]>;
    };
    NO_EXTRA_GAS(overrides?: CallOverrides): Promise<BigNumber>;
    PT_SEND(overrides?: CallOverrides): Promise<number>;
    PT_SEND_AND_CALL(overrides?: CallOverrides): Promise<number>;
    callOnOFTReceived(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _gasForCall: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
    creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
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
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendAndCall(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, overrides?: PayableOverrides & {
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
    sharedDecimals(overrides?: CallOverrides): Promise<number>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    token(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    useCustomAdapterParams(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<BigNumber>;
        PT_SEND(overrides?: CallOverrides): Promise<number>;
        PT_SEND_AND_CALL(overrides?: CallOverrides): Promise<number>;
        callOnOFTReceived(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _gasForCall: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
        creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
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
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        sendAndCall(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, overrides?: CallOverrides): Promise<void>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, overrides?: CallOverrides): Promise<void>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
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
        "CallOFTReceivedSuccess(uint16,bytes,uint64,bytes32)"(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: null, _nonce?: null, _hash?: null): CallOFTReceivedSuccessEventFilter$1;
        CallOFTReceivedSuccess(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: null, _nonce?: null, _hash?: null): CallOFTReceivedSuccessEventFilter$1;
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter$1;
        MessageFailed(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter$1;
        "NonContractAddress(address)"(_address?: null): NonContractAddressEventFilter$1;
        NonContractAddress(_address?: null): NonContractAddressEventFilter$1;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$1;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$1;
        "ReceiveFromChain(uint16,address,uint256)"(_srcChainId?: PromiseOrValue<BigNumberish> | null, _to?: PromiseOrValue<string> | null, _amount?: null): ReceiveFromChainEventFilter$1;
        ReceiveFromChain(_srcChainId?: PromiseOrValue<BigNumberish> | null, _to?: PromiseOrValue<string> | null, _amount?: null): ReceiveFromChainEventFilter$1;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter$1;
        RetryMessageSuccess(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter$1;
        "SendToChain(uint16,address,bytes32,uint256)"(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _amount?: null): SendToChainEventFilter$1;
        SendToChain(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _amount?: null): SendToChainEventFilter$1;
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
    };
    estimateGas: {
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<BigNumber>;
        PT_SEND(overrides?: CallOverrides): Promise<BigNumber>;
        PT_SEND_AND_CALL(overrides?: CallOverrides): Promise<BigNumber>;
        callOnOFTReceived(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _gasForCall: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
        creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendAndCallFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
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
        outboundAmount(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        precrime(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendAndCall(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, overrides?: PayableOverrides & {
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
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PT_SEND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PT_SEND_AND_CALL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callOnOFTReceived(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _from: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _gasForCall: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        circulatingSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSendAndCallFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
        outboundAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        precrime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendAndCall(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFT$1.LzCallParamsStruct, overrides?: PayableOverrides & {
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
interface ProxyOFTV2FeeInterface extends utils.Interface {
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
interface ProxyOFTV2Fee extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ProxyOFTV2FeeInterface;
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

declare class OftBridgeV0 extends OftBridgeBase {
    protected providerFactory: ProviderFactory;
    config: OftBridgeConfig;
    constructor(providerFactory: ProviderFactory, config: OftBridgeConfig);
    protected validateConfig(config: OftBridgeConfig): asserts config is OftBridgeConfig;
    transfer(input: TransferInput): Promise<Transaction<Signer>>;
    getMessageFee({ srcToken, dstToken, adapterParams, }: GetMessageFeeInput): Promise<FeeQuote>;
    getExtraGas(): Promise<number>;
    getOutput({ srcAmount, dstToken, }: GetOutputInput): Promise<BridgeOutput<OftBridgeFee>>;
    protected getContractV0(chainKey: ChainKey): OFTV0;
}

declare class OftBridgeV1 extends OftBridgeBase {
    protected providerFactory: ProviderFactory;
    config: OftBridgeConfig;
    constructor(providerFactory: ProviderFactory, config: OftBridgeConfig);
    protected validateConfig(config: OftBridgeConfig): asserts config is OftBridgeConfig;
    transfer(input: TransferInput): Promise<Transaction<Signer>>;
    getMessageFee({ srcToken, dstToken, adapterParams, }: GetMessageFeeInput): Promise<FeeQuote>;
    getExtraGas({ srcToken, dstToken }: GetExtraGasInput): Promise<number>;
    getOutput({ srcAmount, dstToken, }: GetOutputInput): Promise<BridgeOutput<OftBridgeFee>>;
    protected getContractV1(chainKey: ChainKey): ProxyOFTV1;
}

declare abstract class OftBridgeV2Base extends OftBridgeBase {
    protected providerFactory: ProviderFactory;
    constructor(providerFactory: ProviderFactory, config: OftBridgeConfig);
    protected validateConfig(config: OftBridgeConfig): asserts config is OftBridgeConfig;
    getAllowance({ token, address }: GetAllowanceInput): Promise<CurrencyAmount<Currency>>;
    supportsTransfer(srcToken: Currency, dstToken: Currency): boolean;
    supportsRegister(token: Currency): boolean;
    supportsClaim(token: Currency): boolean;
    protected isValidNative(native: Currency): boolean;
    protected isValidToken(token: Currency): boolean;
    protected removeDust(amount: CurrencyAmount): CurrencyAmount<Currency>;
}

declare class OftBridgeV2 extends OftBridgeV2Base {
    protected providerFactory: ProviderFactory;
    config: OftBridgeConfig;
    constructor(providerFactory: ProviderFactory, config: OftBridgeConfig);
    protected validateConfig(config: OftBridgeConfig): asserts config is OftBridgeConfig;
    transfer(input: TransferInput): Promise<Transaction<Signer>>;
    getMessageFee({ srcToken, dstToken, adapterParams, }: GetMessageFeeInput): Promise<FeeQuote>;
    getExtraGas({ srcToken, dstToken }: GetExtraGasInput): Promise<number>;
    getOutput({ srcAmount, dstToken, }: GetOutputInput): Promise<BridgeOutput<OftBridgeFee>>;
    protected getContractV2(chainKey: ChainKey): OFTV2 | ProxyOFTV2;
}

declare class OftBridgeV3 extends OftBridgeBase {
    protected providerFactory: ProviderFactory;
    config: OftBridgeConfig;
    constructor(providerFactory: ProviderFactory, config: OftBridgeConfig);
    protected validateConfig(config: OftBridgeConfig): asserts config is OftBridgeConfig;
    transfer(input: TransferInput): Promise<Transaction<Signer>>;
    getMessageFee(input: GetMessageFeeInput): Promise<FeeQuote>;
    getExtraGas(input: GetExtraGasInput): Promise<number>;
    getOutput(input: GetOutputInput): Promise<BridgeOutput<OftBridgeFee>>;
    private buildSendParams;
    getLimit({ srcToken, dstToken }: GetLimitInput): Promise<CurrencyAmount<Currency>>;
    createOptions({ adapterParams, dstChainKey, }: {
        adapterParams: AdapterParams;
        dstChainKey: ChainKey;
    }): Promise<_layerzerolabs_ui_evm.Options>;
    protected getContract(srcChainKey: ChainKey, dstChainKey: ChainKey): OFTV3;
}

declare class OftBridgeV2Fee extends OftBridgeV2Base {
    protected providerFactory: ProviderFactory;
    constructor(providerFactory: ProviderFactory, config: OftBridgeConfig);
    protected validateConfig(config: OftBridgeConfig): asserts config is OftBridgeConfig;
    transfer(input: TransferInput): Promise<Transaction<Signer>>;
    getMessageFee({ srcToken, dstToken, adapterParams, }: GetMessageFeeInput): Promise<FeeQuote>;
    getExtraGas({ srcToken, dstToken }: GetExtraGasInput): Promise<number>;
    getOutput({ srcAmount, dstToken, }: GetOutputInput): Promise<BridgeOutput<OftBridgeFee>>;
    protected getBridgeFee(inputAmount: CurrencyAmount, dstChainKey: ChainKey): Promise<CurrencyAmount>;
    protected getContractV2Fee(chainKey: ChainKey): OFTV2Fee | ProxyOFTV2Fee;
}

declare class OftBridgeApiFactory__evm {
    protected providerFactory: ProviderFactory;
    constructor(providerFactory: ProviderFactory);
    create(config: OftBridgeConfig): OftBridgeBase;
}

export { OftBridgeApiFactory__evm, OftBridgeV0, OftBridgeV1, OftBridgeV2, OftBridgeV2Fee, OftBridgeV3, OftBridgeBase as OftBridge__evm };
