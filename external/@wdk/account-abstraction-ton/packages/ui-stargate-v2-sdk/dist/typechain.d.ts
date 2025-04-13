import { BaseContract, Signer, CallOverrides, BigNumber, BigNumberish, Overrides, ContractTransaction, PopulatedTransaction, utils, BytesLike, PayableOverrides } from 'ethers';
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Provider, Listener } from '@ethersproject/providers';
import { T as TypedEvent, a as TypedEventFilter, b as TypedListener, O as OnEvent, P as PromiseOrValue, S as StargateOFTInterface, c as StargateOFT, d as StargatePoolInterface, e as StargatePool, f as StargatePoolNativeInterface, g as StargatePoolNative, h as TokenMessagingInterface, i as TokenMessaging } from './TokenMessaging-38048f21.js';

type FeeConfigStructOutput = [
    boolean,
    BigNumber,
    BigNumber,
    number,
    number,
    number,
    number
] & {
    paused: boolean;
    zone1UpperBound: BigNumber;
    zone2UpperBound: BigNumber;
    zone1FeeMillionth: number;
    zone2FeeMillionth: number;
    zone3FeeMillionth: number;
    rewardMillionth: number;
};
type FeeParamsStruct = {
    sender: PromiseOrValue<string>;
    dstEid: PromiseOrValue<BigNumberish>;
    amountInSD: PromiseOrValue<BigNumberish>;
    deficitSD: PromiseOrValue<BigNumberish>;
    toOFT: PromiseOrValue<boolean>;
    isTaxi: PromiseOrValue<boolean>;
};
interface FeeLibV1Interface extends utils.Interface {
    functions: {
        "applyFee((address,uint32,uint64,uint64,bool,bool))": FunctionFragment;
        "applyFeeView((address,uint32,uint64,uint64,bool,bool))": FunctionFragment;
        "feeConfigs(uint32)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setFeeConfig(uint32,uint64,uint64,uint24,uint24,uint24,uint24)": FunctionFragment;
        "setPaused(uint32,bool)": FunctionFragment;
        "stargate()": FunctionFragment;
        "stargateType()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "applyFee" | "applyFeeView" | "feeConfigs" | "owner" | "renounceOwnership" | "setFeeConfig" | "setPaused" | "stargate" | "stargateType" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "applyFee", values: [FeeParamsStruct]): string;
    encodeFunctionData(functionFragment: "applyFeeView", values: [FeeParamsStruct]): string;
    encodeFunctionData(functionFragment: "feeConfigs", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setFeeConfig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setPaused", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "stargate", values?: undefined): string;
    encodeFunctionData(functionFragment: "stargateType", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "applyFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "applyFeeView", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeConfigs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stargate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stargateType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "FeeConfigSet(uint32,tuple)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "PausedSet(uint32,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "FeeConfigSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PausedSet"): EventFragment;
}
interface FeeConfigSetEventObject {
    eid: number;
    config: FeeConfigStructOutput;
}
type FeeConfigSetEvent = TypedEvent<[
    number,
    FeeConfigStructOutput
], FeeConfigSetEventObject>;
type FeeConfigSetEventFilter = TypedEventFilter<FeeConfigSetEvent>;
interface OwnershipTransferredEventObject$2 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$2 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$2>;
type OwnershipTransferredEventFilter$2 = TypedEventFilter<OwnershipTransferredEvent$2>;
interface PausedSetEventObject {
    eid: number;
    isPaused: boolean;
}
type PausedSetEvent = TypedEvent<[
    number,
    boolean
], PausedSetEventObject>;
type PausedSetEventFilter = TypedEventFilter<PausedSetEvent>;
interface FeeLibV1 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FeeLibV1Interface;
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
        applyFee(_params: FeeParamsStruct, overrides?: CallOverrides): Promise<[BigNumber] & {
            amountOutSD: BigNumber;
        }>;
        applyFeeView(_params: FeeParamsStruct, overrides?: CallOverrides): Promise<[BigNumber] & {
            amountOutSD: BigNumber;
        }>;
        feeConfigs(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber,
            BigNumber,
            number,
            number,
            number,
            number
        ] & {
            paused: boolean;
            zone1UpperBound: BigNumber;
            zone2UpperBound: BigNumber;
            zone1FeeMillionth: number;
            zone2FeeMillionth: number;
            zone3FeeMillionth: number;
            rewardMillionth: number;
        }>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFeeConfig(_dstEid: PromiseOrValue<BigNumberish>, _zone1UpperBound: PromiseOrValue<BigNumberish>, _zone2UpperBound: PromiseOrValue<BigNumberish>, _zone1FeeMillionth: PromiseOrValue<BigNumberish>, _zone2FeeMillionth: PromiseOrValue<BigNumberish>, _zone3FeeMillionth: PromiseOrValue<BigNumberish>, _rewardMillionth: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPaused(_dstEid: PromiseOrValue<BigNumberish>, _isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stargate(overrides?: CallOverrides): Promise<[string]>;
        stargateType(overrides?: CallOverrides): Promise<[number]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    applyFee(_params: FeeParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
    applyFeeView(_params: FeeParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
    feeConfigs(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        boolean,
        BigNumber,
        BigNumber,
        number,
        number,
        number,
        number
    ] & {
        paused: boolean;
        zone1UpperBound: BigNumber;
        zone2UpperBound: BigNumber;
        zone1FeeMillionth: number;
        zone2FeeMillionth: number;
        zone3FeeMillionth: number;
        rewardMillionth: number;
    }>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFeeConfig(_dstEid: PromiseOrValue<BigNumberish>, _zone1UpperBound: PromiseOrValue<BigNumberish>, _zone2UpperBound: PromiseOrValue<BigNumberish>, _zone1FeeMillionth: PromiseOrValue<BigNumberish>, _zone2FeeMillionth: PromiseOrValue<BigNumberish>, _zone3FeeMillionth: PromiseOrValue<BigNumberish>, _rewardMillionth: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPaused(_dstEid: PromiseOrValue<BigNumberish>, _isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stargate(overrides?: CallOverrides): Promise<string>;
    stargateType(overrides?: CallOverrides): Promise<number>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        applyFee(_params: FeeParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        applyFeeView(_params: FeeParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        feeConfigs(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber,
            BigNumber,
            number,
            number,
            number,
            number
        ] & {
            paused: boolean;
            zone1UpperBound: BigNumber;
            zone2UpperBound: BigNumber;
            zone1FeeMillionth: number;
            zone2FeeMillionth: number;
            zone3FeeMillionth: number;
            rewardMillionth: number;
        }>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setFeeConfig(_dstEid: PromiseOrValue<BigNumberish>, _zone1UpperBound: PromiseOrValue<BigNumberish>, _zone2UpperBound: PromiseOrValue<BigNumberish>, _zone1FeeMillionth: PromiseOrValue<BigNumberish>, _zone2FeeMillionth: PromiseOrValue<BigNumberish>, _zone3FeeMillionth: PromiseOrValue<BigNumberish>, _rewardMillionth: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPaused(_dstEid: PromiseOrValue<BigNumberish>, _isPaused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        stargate(overrides?: CallOverrides): Promise<string>;
        stargateType(overrides?: CallOverrides): Promise<number>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "FeeConfigSet(uint32,tuple)"(eid?: null, config?: null): FeeConfigSetEventFilter;
        FeeConfigSet(eid?: null, config?: null): FeeConfigSetEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$2;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$2;
        "PausedSet(uint32,bool)"(eid?: null, isPaused?: null): PausedSetEventFilter;
        PausedSet(eid?: null, isPaused?: null): PausedSetEventFilter;
    };
    estimateGas: {
        applyFee(_params: FeeParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        applyFeeView(_params: FeeParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        feeConfigs(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFeeConfig(_dstEid: PromiseOrValue<BigNumberish>, _zone1UpperBound: PromiseOrValue<BigNumberish>, _zone2UpperBound: PromiseOrValue<BigNumberish>, _zone1FeeMillionth: PromiseOrValue<BigNumberish>, _zone2FeeMillionth: PromiseOrValue<BigNumberish>, _zone3FeeMillionth: PromiseOrValue<BigNumberish>, _rewardMillionth: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPaused(_dstEid: PromiseOrValue<BigNumberish>, _isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stargate(overrides?: CallOverrides): Promise<BigNumber>;
        stargateType(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        applyFee(_params: FeeParamsStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        applyFeeView(_params: FeeParamsStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeConfigs(eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFeeConfig(_dstEid: PromiseOrValue<BigNumberish>, _zone1UpperBound: PromiseOrValue<BigNumberish>, _zone2UpperBound: PromiseOrValue<BigNumberish>, _zone1FeeMillionth: PromiseOrValue<BigNumberish>, _zone2FeeMillionth: PromiseOrValue<BigNumberish>, _zone3FeeMillionth: PromiseOrValue<BigNumberish>, _rewardMillionth: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPaused(_dstEid: PromiseOrValue<BigNumberish>, _isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stargate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stargateType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

interface PoolTokenInterface extends utils.Interface {
    functions: {
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "burnFrom(address,uint256)": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "mint(address,uint256)": FunctionFragment;
        "name()": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allowance" | "approve" | "balanceOf" | "burn" | "burnFrom" | "decimals" | "decreaseAllowance" | "increaseAllowance" | "mint" | "name" | "symbol" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "burn", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "burnFrom", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "mint", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
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
interface PoolToken extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PoolTokenInterface;
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
        burn(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        burnFrom(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mint(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    burn(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    burnFrom(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mint(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        burnFrom(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        mint(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        burnFrom(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mint(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        burnFrom(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mint(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

declare namespace IMultiRewarder {
    type RewardDetailsStruct = {
        rewardPerSec: PromiseOrValue<BigNumberish>;
        totalAllocPoints: PromiseOrValue<BigNumberish>;
        start: PromiseOrValue<BigNumberish>;
        end: PromiseOrValue<BigNumberish>;
        exists: PromiseOrValue<boolean>;
    };
    type RewardDetailsStructOutput = [
        BigNumber,
        BigNumber,
        number,
        number,
        boolean
    ] & {
        rewardPerSec: BigNumber;
        totalAllocPoints: BigNumber;
        start: number;
        end: number;
        exists: boolean;
    };
}
interface StargateMultiRewarderInterface extends utils.Interface {
    functions: {
        "allocPointsByReward(address)": FunctionFragment;
        "allocPointsByStake(address)": FunctionFragment;
        "connect(address)": FunctionFragment;
        "extendReward(address,uint256)": FunctionFragment;
        "getRewards(address,address)": FunctionFragment;
        "onUpdate(address,address,uint256,uint256,uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "rewardDetails(address)": FunctionFragment;
        "rewardTokens()": FunctionFragment;
        "setAllocPoints(address,address[],uint48[])": FunctionFragment;
        "setReward(address,uint256,uint48,uint48)": FunctionFragment;
        "staking()": FunctionFragment;
        "stopReward(address,address,bool)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allocPointsByReward" | "allocPointsByStake" | "connect" | "extendReward" | "getRewards" | "onUpdate" | "owner" | "renounceOwnership" | "rewardDetails" | "rewardTokens" | "setAllocPoints" | "setReward" | "staking" | "stopReward" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "allocPointsByReward", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "allocPointsByStake", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "connect", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "extendReward", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getRewards", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "onUpdate", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardDetails", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "rewardTokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAllocPoints", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "setReward", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "staking", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopReward", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "allocPointsByReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allocPointsByStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "connect", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extendReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardDetails", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAllocPoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "staking", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "AllocPointsSet(address,address[],uint48[])": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "PoolRegistered(address,address)": EventFragment;
        "RewardExtended(address,uint256,uint48)": EventFragment;
        "RewardRegistered(address)": EventFragment;
        "RewardSet(address,uint256,uint256,uint48,uint48)": EventFragment;
        "RewardStopped(address,address,bool)": EventFragment;
        "RewarderConnected(address)": EventFragment;
        "RewardsClaimed(address,address[],uint256[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AllocPointsSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PoolRegistered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardExtended"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardRegistered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardStopped"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewarderConnected"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardsClaimed"): EventFragment;
}
interface AllocPointsSetEventObject {
    rewardToken: string;
    stakeToken: string[];
    allocPoint: number[];
}
type AllocPointsSetEvent = TypedEvent<[
    string,
    string[],
    number[]
], AllocPointsSetEventObject>;
type AllocPointsSetEventFilter = TypedEventFilter<AllocPointsSetEvent>;
interface OwnershipTransferredEventObject$1 {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent$1 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$1>;
type OwnershipTransferredEventFilter$1 = TypedEventFilter<OwnershipTransferredEvent$1>;
interface PoolRegisteredEventObject {
    rewardToken: string;
    stakeToken: string;
}
type PoolRegisteredEvent = TypedEvent<[
    string,
    string
], PoolRegisteredEventObject>;
type PoolRegisteredEventFilter = TypedEventFilter<PoolRegisteredEvent>;
interface RewardExtendedEventObject {
    rewardToken: string;
    amountAdded: BigNumber;
    newEnd: number;
}
type RewardExtendedEvent = TypedEvent<[
    string,
    BigNumber,
    number
], RewardExtendedEventObject>;
type RewardExtendedEventFilter = TypedEventFilter<RewardExtendedEvent>;
interface RewardRegisteredEventObject {
    rewardToken: string;
}
type RewardRegisteredEvent = TypedEvent<[
    string
], RewardRegisteredEventObject>;
type RewardRegisteredEventFilter = TypedEventFilter<RewardRegisteredEvent>;
interface RewardSetEventObject {
    rewardToken: string;
    amountAdded: BigNumber;
    amountPeriod: BigNumber;
    start: number;
    duration: number;
}
type RewardSetEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    number,
    number
], RewardSetEventObject>;
type RewardSetEventFilter = TypedEventFilter<RewardSetEvent>;
interface RewardStoppedEventObject {
    rewardToken: string;
    receiver: string;
    pullTokens: boolean;
}
type RewardStoppedEvent = TypedEvent<[
    string,
    string,
    boolean
], RewardStoppedEventObject>;
type RewardStoppedEventFilter = TypedEventFilter<RewardStoppedEvent>;
interface RewarderConnectedEventObject {
    stakingToken: string;
}
type RewarderConnectedEvent = TypedEvent<[
    string
], RewarderConnectedEventObject>;
type RewarderConnectedEventFilter = TypedEventFilter<RewarderConnectedEvent>;
interface RewardsClaimedEventObject {
    user: string;
    rewardTokens: string[];
    amounts: BigNumber[];
}
type RewardsClaimedEvent = TypedEvent<[
    string,
    string[],
    BigNumber[]
], RewardsClaimedEventObject>;
type RewardsClaimedEventFilter = TypedEventFilter<RewardsClaimedEvent>;
interface StargateMultiRewarder extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StargateMultiRewarderInterface;
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
        allocPointsByReward(rewardToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[], number[]]>;
        allocPointsByStake(stakingToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[], number[]]>;
        connect(stakingToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        extendReward(rewardToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getRewards(stakingToken: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;
        onUpdate(stakingToken: PromiseOrValue<string>, user: PromiseOrValue<string>, oldStake: PromiseOrValue<BigNumberish>, oldSupply: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: CallOverrides): Promise<[void]>;
        rewardDetails(rewardToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[IMultiRewarder.RewardDetailsStructOutput]>;
        rewardTokens(overrides?: CallOverrides): Promise<[string[]]>;
        setAllocPoints(rewardToken: PromiseOrValue<string>, stakingTokens: PromiseOrValue<string>[], allocPoints: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReward(rewardToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, duration: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        staking(overrides?: CallOverrides): Promise<[string]>;
        stopReward(rewardToken: PromiseOrValue<string>, receiver: PromiseOrValue<string>, pullTokens: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    allocPointsByReward(rewardToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[], number[]]>;
    allocPointsByStake(stakingToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[], number[]]>;
    extendReward(rewardToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getRewards(stakingToken: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;
    onUpdate(stakingToken: PromiseOrValue<string>, user: PromiseOrValue<string>, oldStake: PromiseOrValue<BigNumberish>, oldSupply: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: CallOverrides): Promise<void>;
    rewardDetails(rewardToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IMultiRewarder.RewardDetailsStructOutput>;
    rewardTokens(overrides?: CallOverrides): Promise<string[]>;
    setAllocPoints(rewardToken: PromiseOrValue<string>, stakingTokens: PromiseOrValue<string>[], allocPoints: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReward(rewardToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, duration: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    staking(overrides?: CallOverrides): Promise<string>;
    stopReward(rewardToken: PromiseOrValue<string>, receiver: PromiseOrValue<string>, pullTokens: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allocPointsByReward(rewardToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[], number[]]>;
        allocPointsByStake(stakingToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[], number[]]>;
        connect(stakingToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        extendReward(rewardToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getRewards(stakingToken: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;
        onUpdate(stakingToken: PromiseOrValue<string>, user: PromiseOrValue<string>, oldStake: PromiseOrValue<BigNumberish>, oldSupply: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        rewardDetails(rewardToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IMultiRewarder.RewardDetailsStructOutput>;
        rewardTokens(overrides?: CallOverrides): Promise<string[]>;
        setAllocPoints(rewardToken: PromiseOrValue<string>, stakingTokens: PromiseOrValue<string>[], allocPoints: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        setReward(rewardToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        staking(overrides?: CallOverrides): Promise<string>;
        stopReward(rewardToken: PromiseOrValue<string>, receiver: PromiseOrValue<string>, pullTokens: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AllocPointsSet(address,address[],uint48[])"(rewardToken?: PromiseOrValue<string> | null, stakeToken?: PromiseOrValue<string>[] | null, allocPoint?: null): AllocPointsSetEventFilter;
        AllocPointsSet(rewardToken?: PromiseOrValue<string> | null, stakeToken?: PromiseOrValue<string>[] | null, allocPoint?: null): AllocPointsSetEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$1;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$1;
        "PoolRegistered(address,address)"(rewardToken?: PromiseOrValue<string> | null, stakeToken?: PromiseOrValue<string> | null): PoolRegisteredEventFilter;
        PoolRegistered(rewardToken?: PromiseOrValue<string> | null, stakeToken?: PromiseOrValue<string> | null): PoolRegisteredEventFilter;
        "RewardExtended(address,uint256,uint48)"(rewardToken?: PromiseOrValue<string> | null, amountAdded?: null, newEnd?: null): RewardExtendedEventFilter;
        RewardExtended(rewardToken?: PromiseOrValue<string> | null, amountAdded?: null, newEnd?: null): RewardExtendedEventFilter;
        "RewardRegistered(address)"(rewardToken?: PromiseOrValue<string> | null): RewardRegisteredEventFilter;
        RewardRegistered(rewardToken?: PromiseOrValue<string> | null): RewardRegisteredEventFilter;
        "RewardSet(address,uint256,uint256,uint48,uint48)"(rewardToken?: PromiseOrValue<string> | null, amountAdded?: null, amountPeriod?: null, start?: null, duration?: null): RewardSetEventFilter;
        RewardSet(rewardToken?: PromiseOrValue<string> | null, amountAdded?: null, amountPeriod?: null, start?: null, duration?: null): RewardSetEventFilter;
        "RewardStopped(address,address,bool)"(rewardToken?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, pullTokens?: null): RewardStoppedEventFilter;
        RewardStopped(rewardToken?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, pullTokens?: null): RewardStoppedEventFilter;
        "RewarderConnected(address)"(stakingToken?: PromiseOrValue<string> | null): RewarderConnectedEventFilter;
        RewarderConnected(stakingToken?: PromiseOrValue<string> | null): RewarderConnectedEventFilter;
        "RewardsClaimed(address,address[],uint256[])"(user?: PromiseOrValue<string> | null, rewardTokens?: null, amounts?: null): RewardsClaimedEventFilter;
        RewardsClaimed(user?: PromiseOrValue<string> | null, rewardTokens?: null, amounts?: null): RewardsClaimedEventFilter;
    };
    estimateGas: {
        allocPointsByReward(rewardToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        allocPointsByStake(stakingToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        connect(stakingToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        extendReward(rewardToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getRewards(stakingToken: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        onUpdate(stakingToken: PromiseOrValue<string>, user: PromiseOrValue<string>, oldStake: PromiseOrValue<BigNumberish>, oldSupply: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<BigNumber>;
        rewardDetails(rewardToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardTokens(overrides?: CallOverrides): Promise<BigNumber>;
        setAllocPoints(rewardToken: PromiseOrValue<string>, stakingTokens: PromiseOrValue<string>[], allocPoints: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReward(rewardToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, duration: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        staking(overrides?: CallOverrides): Promise<BigNumber>;
        stopReward(rewardToken: PromiseOrValue<string>, receiver: PromiseOrValue<string>, pullTokens: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allocPointsByReward(rewardToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allocPointsByStake(stakingToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        connect(stakingToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        extendReward(rewardToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getRewards(stakingToken: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onUpdate(stakingToken: PromiseOrValue<string>, user: PromiseOrValue<string>, oldStake: PromiseOrValue<BigNumberish>, oldSupply: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardDetails(rewardToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAllocPoints(rewardToken: PromiseOrValue<string>, stakingTokens: PromiseOrValue<string>[], allocPoints: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReward(rewardToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, duration: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        staking(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stopReward(rewardToken: PromiseOrValue<string>, receiver: PromiseOrValue<string>, pullTokens: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

interface StargateStakingInterface extends utils.Interface {
    functions: {
        "balanceOf(address,address)": FunctionFragment;
        "claim(address[])": FunctionFragment;
        "deposit(address,uint256)": FunctionFragment;
        "depositTo(address,address,uint256)": FunctionFragment;
        "emergencyWithdraw(address)": FunctionFragment;
        "isPool(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "rewarder(address)": FunctionFragment;
        "setPool(address,address)": FunctionFragment;
        "tokens(uint256,uint256)": FunctionFragment;
        "tokens()": FunctionFragment;
        "tokensLength()": FunctionFragment;
        "totalSupply(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "withdraw(address,uint256)": FunctionFragment;
        "withdrawToAndCall(address,address,uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "balanceOf" | "claim" | "deposit" | "depositTo" | "emergencyWithdraw" | "isPool" | "owner" | "renounceOwnership" | "rewarder" | "setPool" | "tokens(uint256,uint256)" | "tokens()" | "tokensLength" | "totalSupply" | "transferOwnership" | "withdraw" | "withdrawToAndCall"): FunctionFragment;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "claim", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "deposit", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "depositTo", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "emergencyWithdraw", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isPool", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewarder", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setPool", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "tokens(uint256,uint256)", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "tokens()", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokensLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdrawToAndCall", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokens(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokens()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokensLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawToAndCall", data: BytesLike): Result;
    events: {
        "Deposit(address,address,address,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "PoolSet(address,address,bool)": EventFragment;
        "Withdraw(address,address,address,uint256,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PoolSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
interface DepositEventObject {
    token: string;
    from: string;
    to: string;
    amount: BigNumber;
}
type DepositEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], DepositEventObject>;
type DepositEventFilter = TypedEventFilter<DepositEvent>;
interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
interface PoolSetEventObject {
    token: string;
    rewarder: string;
    exists: boolean;
}
type PoolSetEvent = TypedEvent<[
    string,
    string,
    boolean
], PoolSetEventObject>;
type PoolSetEventFilter = TypedEventFilter<PoolSetEvent>;
interface WithdrawEventObject {
    token: string;
    from: string;
    to: string;
    amount: BigNumber;
    withUpdate: boolean;
}
type WithdrawEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    boolean
], WithdrawEventObject>;
type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
interface StargateStaking extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StargateStakingInterface;
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
        balanceOf(token: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        claim(lpTokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deposit(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositTo(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emergencyWithdraw(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isPool(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: CallOverrides): Promise<[void]>;
        rewarder(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        setPool(token: PromiseOrValue<string>, newRewarder: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "tokens(uint256,uint256)"(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]]>;
        "tokens()"(overrides?: CallOverrides): Promise<[string[]]>;
        tokensLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdraw(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawToAndCall(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    balanceOf(token: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    claim(lpTokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deposit(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositTo(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emergencyWithdraw(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isPool(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: CallOverrides): Promise<void>;
    rewarder(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    setPool(token: PromiseOrValue<string>, newRewarder: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "tokens(uint256,uint256)"(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    "tokens()"(overrides?: CallOverrides): Promise<string[]>;
    tokensLength(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdraw(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawToAndCall(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        balanceOf(token: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        claim(lpTokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        deposit(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        depositTo(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        emergencyWithdraw(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        isPool(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        rewarder(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        setPool(token: PromiseOrValue<string>, newRewarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "tokens(uint256,uint256)"(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        "tokens()"(overrides?: CallOverrides): Promise<string[]>;
        tokensLength(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        withdraw(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdrawToAndCall(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Deposit(address,address,address,uint256)"(token?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null): DepositEventFilter;
        Deposit(token?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null): DepositEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "PoolSet(address,address,bool)"(token?: PromiseOrValue<string> | null, rewarder?: null, exists?: null): PoolSetEventFilter;
        PoolSet(token?: PromiseOrValue<string> | null, rewarder?: null, exists?: null): PoolSetEventFilter;
        "Withdraw(address,address,address,uint256,bool)"(token?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null, withUpdate?: null): WithdrawEventFilter;
        Withdraw(token?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null, withUpdate?: null): WithdrawEventFilter;
    };
    estimateGas: {
        balanceOf(token: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        claim(lpTokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deposit(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositTo(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emergencyWithdraw(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isPool(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<BigNumber>;
        rewarder(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setPool(token: PromiseOrValue<string>, newRewarder: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "tokens(uint256,uint256)"(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "tokens()"(overrides?: CallOverrides): Promise<BigNumber>;
        tokensLength(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdraw(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawToAndCall(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        balanceOf(token: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claim(lpTokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deposit(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositTo(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emergencyWithdraw(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isPool(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewarder(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setPool(token: PromiseOrValue<string>, newRewarder: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "tokens(uint256,uint256)"(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "tokens()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokensLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawToAndCall(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

declare class FeeLibV1__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_stargate";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "FeeLib_InvalidFeeConfiguration";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "FeeLib_Paused";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "FeeLib_Unauthorized";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "eid";
            readonly type: "uint32";
        }, {
            readonly components: readonly [{
                readonly internalType: "bool";
                readonly name: "paused";
                readonly type: "bool";
            }, {
                readonly internalType: "uint64";
                readonly name: "zone1UpperBound";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "zone2UpperBound";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint24";
                readonly name: "zone1FeeMillionth";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "zone2FeeMillionth";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "zone3FeeMillionth";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "rewardMillionth";
                readonly type: "uint24";
            }];
            readonly indexed: false;
            readonly internalType: "struct FeeConfig";
            readonly name: "config";
            readonly type: "tuple";
        }];
        readonly name: "FeeConfigSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "eid";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isPaused";
            readonly type: "bool";
        }];
        readonly name: "PausedSet";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "dstEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "amountInSD";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "deficitSD";
                readonly type: "uint64";
            }, {
                readonly internalType: "bool";
                readonly name: "toOFT";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isTaxi";
                readonly type: "bool";
            }];
            readonly internalType: "struct FeeParams";
            readonly name: "_params";
            readonly type: "tuple";
        }];
        readonly name: "applyFee";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "amountOutSD";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "dstEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "amountInSD";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "deficitSD";
                readonly type: "uint64";
            }, {
                readonly internalType: "bool";
                readonly name: "toOFT";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isTaxi";
                readonly type: "bool";
            }];
            readonly internalType: "struct FeeParams";
            readonly name: "_params";
            readonly type: "tuple";
        }];
        readonly name: "applyFeeView";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "amountOutSD";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "eid";
            readonly type: "uint32";
        }];
        readonly name: "feeConfigs";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "paused";
            readonly type: "bool";
        }, {
            readonly internalType: "uint64";
            readonly name: "zone1UpperBound";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "zone2UpperBound";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint24";
            readonly name: "zone1FeeMillionth";
            readonly type: "uint24";
        }, {
            readonly internalType: "uint24";
            readonly name: "zone2FeeMillionth";
            readonly type: "uint24";
        }, {
            readonly internalType: "uint24";
            readonly name: "zone3FeeMillionth";
            readonly type: "uint24";
        }, {
            readonly internalType: "uint24";
            readonly name: "rewardMillionth";
            readonly type: "uint24";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_dstEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint64";
            readonly name: "_zone1UpperBound";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "_zone2UpperBound";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint24";
            readonly name: "_zone1FeeMillionth";
            readonly type: "uint24";
        }, {
            readonly internalType: "uint24";
            readonly name: "_zone2FeeMillionth";
            readonly type: "uint24";
        }, {
            readonly internalType: "uint24";
            readonly name: "_zone3FeeMillionth";
            readonly type: "uint24";
        }, {
            readonly internalType: "uint24";
            readonly name: "_rewardMillionth";
            readonly type: "uint24";
        }];
        readonly name: "setFeeConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_dstEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "bool";
            readonly name: "_isPaused";
            readonly type: "bool";
        }];
        readonly name: "setPaused";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stargate";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stargateType";
        readonly outputs: readonly [{
            readonly internalType: "enum StargateType";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): FeeLibV1Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): FeeLibV1;
}

declare class PoolToken__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "_symbol";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "burnFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): PoolTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PoolToken;
}

declare class StargateMultiRewarder__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IStargateStaking";
            readonly name: "_staking";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "MultiRewarderDisconnectedStakingToken";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "expected";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "actual";
            readonly type: "uint256";
        }];
        readonly name: "MultiRewarderIncorrectNative";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MultiRewarderMaxActiveRewardTokens";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MultiRewarderMaxPoolsForRewardToken";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "MultiRewarderNativeTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "rewardToken";
            readonly type: "address";
        }];
        readonly name: "MultiRewarderPoolFinished";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MultiRewarderRenounceOwnershipDisabled";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "start";
            readonly type: "uint256";
        }];
        readonly name: "MultiRewarderStartInPast";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "caller";
            readonly type: "address";
        }];
        readonly name: "MultiRewarderUnauthorizedCaller";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "MultiRewarderUnregisteredToken";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MultiRewarderZeroDuration";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MultiRewarderZeroRewardRate";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "stakingToken";
            readonly type: "address";
        }];
        readonly name: "RewarderAlreadyConnected";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "rewardToken";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "contract IERC20[]";
            readonly name: "stakeToken";
            readonly type: "address[]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint48[]";
            readonly name: "allocPoint";
            readonly type: "uint48[]";
        }];
        readonly name: "AllocPointsSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "rewardToken";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "contract IERC20";
            readonly name: "stakeToken";
            readonly type: "address";
        }];
        readonly name: "PoolRegistered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "rewardToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountAdded";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint48";
            readonly name: "newEnd";
            readonly type: "uint48";
        }];
        readonly name: "RewardExtended";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "rewardToken";
            readonly type: "address";
        }];
        readonly name: "RewardRegistered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "rewardToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountAdded";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountPeriod";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly indexed: false;
            readonly internalType: "uint48";
            readonly name: "duration";
            readonly type: "uint48";
        }];
        readonly name: "RewardSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "rewardToken";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "pullTokens";
            readonly type: "bool";
        }];
        readonly name: "RewardStopped";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract IERC20";
            readonly name: "stakingToken";
            readonly type: "address";
        }];
        readonly name: "RewarderConnected";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "rewardTokens";
            readonly type: "address[]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "amounts";
            readonly type: "uint256[]";
        }];
        readonly name: "RewardsClaimed";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "rewardToken";
            readonly type: "address";
        }];
        readonly name: "allocPointsByReward";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20[]";
            readonly name: "";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint48[]";
            readonly name: "";
            readonly type: "uint48[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "stakingToken";
            readonly type: "address";
        }];
        readonly name: "allocPointsByStake";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint48[]";
            readonly name: "";
            readonly type: "uint48[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "stakingToken";
            readonly type: "address";
        }];
        readonly name: "connect";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "rewardToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "extendReward";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "stakingToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "getRewards";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "stakingToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "oldStake";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "oldSupply";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "onUpdate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "rewardToken";
            readonly type: "address";
        }];
        readonly name: "rewardDetails";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "rewardPerSec";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint160";
                readonly name: "totalAllocPoints";
                readonly type: "uint160";
            }, {
                readonly internalType: "uint48";
                readonly name: "start";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint48";
                readonly name: "end";
                readonly type: "uint48";
            }, {
                readonly internalType: "bool";
                readonly name: "exists";
                readonly type: "bool";
            }];
            readonly internalType: "struct IMultiRewarder.RewardDetails";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "rewardTokens";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "rewardToken";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20[]";
            readonly name: "stakingTokens";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint48[]";
            readonly name: "allocPoints";
            readonly type: "uint48[]";
        }];
        readonly name: "setAllocPoints";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "rewardToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "duration";
            readonly type: "uint48";
        }];
        readonly name: "setReward";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "staking";
        readonly outputs: readonly [{
            readonly internalType: "contract IStargateStaking";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "rewardToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "pullTokens";
            readonly type: "bool";
        }];
        readonly name: "stopReward";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): StargateMultiRewarderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StargateMultiRewarder;
}

declare class StargateOFT__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint8";
            readonly name: "_sharedDecimals";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "_endpoint";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidLocalDecimals";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Path_AlreadyHasCredit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Path_InsufficientCredit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Path_UnlimitedCredit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minAmountLD";
            readonly type: "uint256";
        }];
        readonly name: "SlippageExceeded";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_InsufficientFare";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_InvalidAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_InvalidPath";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_InvalidTokenDecimals";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_LzTokenUnavailable";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_OutflowFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_Paused";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_RecoverTokenUnsupported";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_ReentrantCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_SlippageTooHigh";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_Unauthorized";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_UnreceivedTokenNotFound";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_WithdrawPlannerFeeFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Transfer_TransferFailed";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "feeLib";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "planner";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "treasurer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "tokenMessaging";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "creditMessaging";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "lzToken";
                readonly type: "address";
            }];
            readonly indexed: false;
            readonly internalType: "struct StargateBase.AddressConfig";
            readonly name: "config";
            readonly type: "tuple";
        }];
        readonly name: "AddressConfigSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "srcEid";
            readonly type: "uint32";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "amount";
                readonly type: "uint64";
            }];
            readonly indexed: false;
            readonly internalType: "struct Credit[]";
            readonly name: "credits";
            readonly type: "tuple[]";
        }];
        readonly name: "CreditsReceived";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "dstEid";
            readonly type: "uint32";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "amount";
                readonly type: "uint64";
            }];
            readonly indexed: false;
            readonly internalType: "struct Credit[]";
            readonly name: "credits";
            readonly type: "tuple[]";
        }];
        readonly name: "CreditsSent";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "dstEid";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "oft";
            readonly type: "bool";
        }];
        readonly name: "OFTPathSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "guid";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "srcEid";
            readonly type: "uint32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "toAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountReceivedLD";
            readonly type: "uint256";
        }];
        readonly name: "OFTReceived";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "guid";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "dstEid";
            readonly type: "uint32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "fromAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountSentLD";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountReceivedLD";
            readonly type: "uint256";
        }];
        readonly name: "OFTSent";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "paused";
            readonly type: "bool";
        }];
        readonly name: "PauseSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "PlannerFeeWithdrawn";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "amountSD";
            readonly type: "uint64";
        }];
        readonly name: "TreasuryFeeAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "amountSD";
            readonly type: "uint64";
        }];
        readonly name: "TreasuryFeeWithdrawn";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "guid";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "index";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "srcEid";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "composeMsg";
            readonly type: "bytes";
        }];
        readonly name: "UnreceivedTokenCached";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_amountLD";
            readonly type: "uint256";
        }];
        readonly name: "addTreasuryFee";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "approvalRequired";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "endpoint";
        readonly outputs: readonly [{
            readonly internalType: "contract ILayerZeroEndpointV2";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAddressConfig";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "feeLib";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "planner";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "treasurer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "tokenMessaging";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "creditMessaging";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "lzToken";
                readonly type: "address";
            }];
            readonly internalType: "struct StargateBase.AddressConfig";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "localEid";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "oftVersion";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }, {
            readonly internalType: "uint64";
            readonly name: "version";
            readonly type: "uint64";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "eid";
            readonly type: "uint32";
        }];
        readonly name: "paths";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "credit";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "plannerFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "available";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "dstEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "to";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraOptions";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "composeMsg";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "oftCmd";
                readonly type: "bytes";
            }];
            readonly internalType: "struct SendParam";
            readonly name: "_sendParam";
            readonly type: "tuple";
        }];
        readonly name: "quoteOFT";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "minAmountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxAmountLD";
                readonly type: "uint256";
            }];
            readonly internalType: "struct OFTLimit";
            readonly name: "limit";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "int256";
                readonly name: "feeAmountLD";
                readonly type: "int256";
            }, {
                readonly internalType: "string";
                readonly name: "description";
                readonly type: "string";
            }];
            readonly internalType: "struct OFTFeeDetail[]";
            readonly name: "oftFeeDetails";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amountSentLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountReceivedLD";
                readonly type: "uint256";
            }];
            readonly internalType: "struct OFTReceipt";
            readonly name: "receipt";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "dstEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "to";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraOptions";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "composeMsg";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "oftCmd";
                readonly type: "bytes";
            }];
            readonly internalType: "struct SendParam";
            readonly name: "_sendParam";
            readonly type: "tuple";
        }, {
            readonly internalType: "bool";
            readonly name: "_payInLzToken";
            readonly type: "bool";
        }];
        readonly name: "quoteSend";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "nativeFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lzTokenFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MessagingFee";
            readonly name: "fee";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_srcEid";
            readonly type: "uint32";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "amount";
                readonly type: "uint64";
            }];
            readonly internalType: "struct Credit[]";
            readonly name: "_credits";
            readonly type: "tuple[]";
        }];
        readonly name: "receiveCredits";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "sender";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }];
            readonly internalType: "struct Origin";
            readonly name: "_origin";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_guid";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint8";
            readonly name: "_seatNumber";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "_amountSD";
            readonly type: "uint64";
        }];
        readonly name: "receiveTokenBus";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "sender";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }];
            readonly internalType: "struct Origin";
            readonly name: "_origin";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_guid";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "_amountSD";
            readonly type: "uint64";
        }, {
            readonly internalType: "bytes";
            readonly name: "_composeMsg";
            readonly type: "bytes";
        }];
        readonly name: "receiveTokenTaxi";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "recoverToken";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_guid";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint8";
            readonly name: "_index";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint32";
            readonly name: "_srcEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_composeMsg";
            readonly type: "bytes";
        }];
        readonly name: "retryReceiveToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "dstEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "to";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraOptions";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "composeMsg";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "oftCmd";
                readonly type: "bytes";
            }];
            readonly internalType: "struct SendParam";
            readonly name: "_sendParam";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "nativeFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lzTokenFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MessagingFee";
            readonly name: "_fee";
            readonly type: "tuple";
        }, {
            readonly internalType: "address";
            readonly name: "_refundAddress";
            readonly type: "address";
        }];
        readonly name: "send";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "guid";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "nativeFee";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lzTokenFee";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct MessagingFee";
                readonly name: "fee";
                readonly type: "tuple";
            }];
            readonly internalType: "struct MessagingReceipt";
            readonly name: "msgReceipt";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amountSentLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountReceivedLD";
                readonly type: "uint256";
            }];
            readonly internalType: "struct OFTReceipt";
            readonly name: "oftReceipt";
            readonly type: "tuple";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_dstEid";
            readonly type: "uint32";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "amount";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "minAmount";
                readonly type: "uint64";
            }];
            readonly internalType: "struct TargetCredit[]";
            readonly name: "_credits";
            readonly type: "tuple[]";
        }];
        readonly name: "sendCredits";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "amount";
                readonly type: "uint64";
            }];
            readonly internalType: "struct Credit[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "dstEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "to";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraOptions";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "composeMsg";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "oftCmd";
                readonly type: "bytes";
            }];
            readonly internalType: "struct SendParam";
            readonly name: "_sendParam";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "nativeFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lzTokenFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MessagingFee";
            readonly name: "_fee";
            readonly type: "tuple";
        }, {
            readonly internalType: "address";
            readonly name: "_refundAddress";
            readonly type: "address";
        }];
        readonly name: "sendToken";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "guid";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "nativeFee";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lzTokenFee";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct MessagingFee";
                readonly name: "fee";
                readonly type: "tuple";
            }];
            readonly internalType: "struct MessagingReceipt";
            readonly name: "msgReceipt";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amountSentLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountReceivedLD";
                readonly type: "uint256";
            }];
            readonly internalType: "struct OFTReceipt";
            readonly name: "oftReceipt";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint72";
                readonly name: "ticketId";
                readonly type: "uint72";
            }, {
                readonly internalType: "bytes";
                readonly name: "passengerBytes";
                readonly type: "bytes";
            }];
            readonly internalType: "struct Ticket";
            readonly name: "ticket";
            readonly type: "tuple";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "feeLib";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "planner";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "treasurer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "tokenMessaging";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "creditMessaging";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "lzToken";
                readonly type: "address";
            }];
            readonly internalType: "struct StargateBase.AddressConfig";
            readonly name: "_config";
            readonly type: "tuple";
        }];
        readonly name: "setAddressConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_dstEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "bool";
            readonly name: "_oft";
            readonly type: "bool";
        }];
        readonly name: "setOFTPath";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "_paused";
            readonly type: "bool";
        }];
        readonly name: "setPause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "sharedDecimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stargateType";
        readonly outputs: readonly [{
            readonly internalType: "enum StargateType";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "status";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "token";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "treasuryFee";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "guid";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint8";
            readonly name: "index";
            readonly type: "uint8";
        }];
        readonly name: "unreceivedTokens";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "hash";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "withdrawPlannerFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "_amountSD";
            readonly type: "uint64";
        }];
        readonly name: "withdrawTreasuryFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): StargateOFTInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StargateOFT;
}

declare class StargatePool__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_lpTokenName";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "_lpTokenSymbol";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint8";
            readonly name: "_tokenDecimals";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint8";
            readonly name: "_sharedDecimals";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "_endpoint";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidLocalDecimals";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Path_AlreadyHasCredit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Path_InsufficientCredit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Path_UnlimitedCredit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minAmountLD";
            readonly type: "uint256";
        }];
        readonly name: "SlippageExceeded";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "StargatePoolUSDC_BurnAmountExceedsBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_InsufficientFare";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_InvalidAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_InvalidPath";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_InvalidTokenDecimals";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_LzTokenUnavailable";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_OnlyTaxi";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_OutflowFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_Paused";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_RecoverTokenUnsupported";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_ReentrantCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_SlippageTooHigh";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_Unauthorized";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_UnreceivedTokenNotFound";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Transfer_ApproveFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Transfer_TransferFailed";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "feeLib";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "planner";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "treasurer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "tokenMessaging";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "creditMessaging";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "lzToken";
                readonly type: "address";
            }];
            readonly indexed: false;
            readonly internalType: "struct StargateBase.AddressConfig";
            readonly name: "config";
            readonly type: "tuple";
        }];
        readonly name: "AddressConfigSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "srcEid";
            readonly type: "uint32";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "amount";
                readonly type: "uint64";
            }];
            readonly indexed: false;
            readonly internalType: "struct Credit[]";
            readonly name: "credits";
            readonly type: "tuple[]";
        }];
        readonly name: "CreditsReceived";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "dstEid";
            readonly type: "uint32";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "amount";
                readonly type: "uint64";
            }];
            readonly indexed: false;
            readonly internalType: "struct Credit[]";
            readonly name: "credits";
            readonly type: "tuple[]";
        }];
        readonly name: "CreditsSent";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "payer";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }];
        readonly name: "Deposited";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "dstEid";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "oft";
            readonly type: "bool";
        }];
        readonly name: "OFTPathSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "guid";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "srcEid";
            readonly type: "uint32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "toAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountReceivedLD";
            readonly type: "uint256";
        }];
        readonly name: "OFTReceived";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "guid";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "dstEid";
            readonly type: "uint32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "fromAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountSentLD";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountReceivedLD";
            readonly type: "uint256";
        }];
        readonly name: "OFTSent";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "amountSD";
            readonly type: "uint64";
        }];
        readonly name: "Path_CreditBurned";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "paused";
            readonly type: "bool";
        }];
        readonly name: "PauseSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "PlannerFeeWithdrawn";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "payer";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }];
        readonly name: "Redeemed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "amountSD";
            readonly type: "uint64";
        }];
        readonly name: "TreasuryFeeAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "amountSD";
            readonly type: "uint64";
        }];
        readonly name: "TreasuryFeeWithdrawn";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "guid";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "index";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "srcEid";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "composeMsg";
            readonly type: "bytes";
        }];
        readonly name: "UnreceivedTokenCached";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_amountLD";
            readonly type: "uint256";
        }];
        readonly name: "addTreasuryFee";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_burnAdmin";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "_burnAllowanceSD";
            readonly type: "uint64";
        }];
        readonly name: "allowBurn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "approvalRequired";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "burnAdmin";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "burnAllowanceSD";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "burnLockedUSDC";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "deficitOffset";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountLD";
            readonly type: "uint256";
        }];
        readonly name: "deposit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "endpoint";
        readonly outputs: readonly [{
            readonly internalType: "contract ILayerZeroEndpointV2";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAddressConfig";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "feeLib";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "planner";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "treasurer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "tokenMessaging";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "creditMessaging";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "lzToken";
                readonly type: "address";
            }];
            readonly internalType: "struct StargateBase.AddressConfig";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTransferGasLimit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "localEid";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lpToken";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "oftVersion";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }, {
            readonly internalType: "uint64";
            readonly name: "version";
            readonly type: "uint64";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "eid";
            readonly type: "uint32";
        }];
        readonly name: "paths";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "credit";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "plannerFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "available";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "poolBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "dstEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "to";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraOptions";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "composeMsg";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "oftCmd";
                readonly type: "bytes";
            }];
            readonly internalType: "struct SendParam";
            readonly name: "_sendParam";
            readonly type: "tuple";
        }];
        readonly name: "quoteOFT";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "minAmountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxAmountLD";
                readonly type: "uint256";
            }];
            readonly internalType: "struct OFTLimit";
            readonly name: "limit";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "int256";
                readonly name: "feeAmountLD";
                readonly type: "int256";
            }, {
                readonly internalType: "string";
                readonly name: "description";
                readonly type: "string";
            }];
            readonly internalType: "struct OFTFeeDetail[]";
            readonly name: "oftFeeDetails";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amountSentLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountReceivedLD";
                readonly type: "uint256";
            }];
            readonly internalType: "struct OFTReceipt";
            readonly name: "receipt";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "dstEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "to";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraOptions";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "composeMsg";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "oftCmd";
                readonly type: "bytes";
            }];
            readonly internalType: "struct SendParam";
            readonly name: "_sendParam";
            readonly type: "tuple";
        }, {
            readonly internalType: "bool";
            readonly name: "_payInLzToken";
            readonly type: "bool";
        }];
        readonly name: "quoteRedeemSend";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "nativeFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lzTokenFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MessagingFee";
            readonly name: "fee";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "dstEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "to";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraOptions";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "composeMsg";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "oftCmd";
                readonly type: "bytes";
            }];
            readonly internalType: "struct SendParam";
            readonly name: "_sendParam";
            readonly type: "tuple";
        }, {
            readonly internalType: "bool";
            readonly name: "_payInLzToken";
            readonly type: "bool";
        }];
        readonly name: "quoteSend";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "nativeFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lzTokenFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MessagingFee";
            readonly name: "fee";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_srcEid";
            readonly type: "uint32";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "amount";
                readonly type: "uint64";
            }];
            readonly internalType: "struct Credit[]";
            readonly name: "_credits";
            readonly type: "tuple[]";
        }];
        readonly name: "receiveCredits";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "sender";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }];
            readonly internalType: "struct Origin";
            readonly name: "_origin";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_guid";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint8";
            readonly name: "_seatNumber";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "_amountSD";
            readonly type: "uint64";
        }];
        readonly name: "receiveTokenBus";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "sender";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }];
            readonly internalType: "struct Origin";
            readonly name: "_origin";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_guid";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "_amountSD";
            readonly type: "uint64";
        }, {
            readonly internalType: "bytes";
            readonly name: "_composeMsg";
            readonly type: "bytes";
        }];
        readonly name: "receiveTokenTaxi";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "recoverToken";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_amountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }];
        readonly name: "redeem";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "dstEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "to";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraOptions";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "composeMsg";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "oftCmd";
                readonly type: "bytes";
            }];
            readonly internalType: "struct SendParam";
            readonly name: "_sendParam";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "nativeFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lzTokenFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MessagingFee";
            readonly name: "_fee";
            readonly type: "tuple";
        }, {
            readonly internalType: "address";
            readonly name: "_refundAddress";
            readonly type: "address";
        }];
        readonly name: "redeemSend";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "guid";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "nativeFee";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lzTokenFee";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct MessagingFee";
                readonly name: "fee";
                readonly type: "tuple";
            }];
            readonly internalType: "struct MessagingReceipt";
            readonly name: "msgReceipt";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amountSentLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountReceivedLD";
                readonly type: "uint256";
            }];
            readonly internalType: "struct OFTReceipt";
            readonly name: "oftReceipt";
            readonly type: "tuple";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }];
        readonly name: "redeemable";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_guid";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint8";
            readonly name: "_index";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint32";
            readonly name: "_srcEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_composeMsg";
            readonly type: "bytes";
        }];
        readonly name: "retryReceiveToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "dstEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "to";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraOptions";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "composeMsg";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "oftCmd";
                readonly type: "bytes";
            }];
            readonly internalType: "struct SendParam";
            readonly name: "_sendParam";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "nativeFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lzTokenFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MessagingFee";
            readonly name: "_fee";
            readonly type: "tuple";
        }, {
            readonly internalType: "address";
            readonly name: "_refundAddress";
            readonly type: "address";
        }];
        readonly name: "send";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "guid";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "nativeFee";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lzTokenFee";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct MessagingFee";
                readonly name: "fee";
                readonly type: "tuple";
            }];
            readonly internalType: "struct MessagingReceipt";
            readonly name: "msgReceipt";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amountSentLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountReceivedLD";
                readonly type: "uint256";
            }];
            readonly internalType: "struct OFTReceipt";
            readonly name: "oftReceipt";
            readonly type: "tuple";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_dstEid";
            readonly type: "uint32";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "amount";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "minAmount";
                readonly type: "uint64";
            }];
            readonly internalType: "struct TargetCredit[]";
            readonly name: "_credits";
            readonly type: "tuple[]";
        }];
        readonly name: "sendCredits";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "amount";
                readonly type: "uint64";
            }];
            readonly internalType: "struct Credit[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "dstEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "to";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraOptions";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "composeMsg";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "oftCmd";
                readonly type: "bytes";
            }];
            readonly internalType: "struct SendParam";
            readonly name: "_sendParam";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "nativeFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lzTokenFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MessagingFee";
            readonly name: "_fee";
            readonly type: "tuple";
        }, {
            readonly internalType: "address";
            readonly name: "_refundAddress";
            readonly type: "address";
        }];
        readonly name: "sendToken";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "guid";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "nativeFee";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lzTokenFee";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct MessagingFee";
                readonly name: "fee";
                readonly type: "tuple";
            }];
            readonly internalType: "struct MessagingReceipt";
            readonly name: "msgReceipt";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amountSentLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountReceivedLD";
                readonly type: "uint256";
            }];
            readonly internalType: "struct OFTReceipt";
            readonly name: "oftReceipt";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint72";
                readonly name: "ticketId";
                readonly type: "uint72";
            }, {
                readonly internalType: "bytes";
                readonly name: "passengerBytes";
                readonly type: "bytes";
            }];
            readonly internalType: "struct Ticket";
            readonly name: "ticket";
            readonly type: "tuple";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "feeLib";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "planner";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "treasurer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "tokenMessaging";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "creditMessaging";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "lzToken";
                readonly type: "address";
            }];
            readonly internalType: "struct StargateBase.AddressConfig";
            readonly name: "_config";
            readonly type: "tuple";
        }];
        readonly name: "setAddressConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_deficitOffsetLD";
            readonly type: "uint256";
        }];
        readonly name: "setDeficitOffset";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_dstEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "bool";
            readonly name: "_oft";
            readonly type: "bool";
        }];
        readonly name: "setOFTPath";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "_paused";
            readonly type: "bool";
        }];
        readonly name: "setPause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_gasLimit";
            readonly type: "uint256";
        }];
        readonly name: "setTransferGasLimit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "sharedDecimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stargateType";
        readonly outputs: readonly [{
            readonly internalType: "enum StargateType";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "status";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "token";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "treasuryFee";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "tvl";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "guid";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint8";
            readonly name: "index";
            readonly type: "uint8";
        }];
        readonly name: "unreceivedTokens";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "hash";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "withdrawPlannerFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "_amountSD";
            readonly type: "uint64";
        }];
        readonly name: "withdrawTreasuryFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): StargatePoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StargatePool;
}

declare class StargatePoolNative__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_lpTokenName";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "_lpTokenSymbol";
            readonly type: "string";
        }, {
            readonly internalType: "uint8";
            readonly name: "_tokenDecimals";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint8";
            readonly name: "_sharedDecimals";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "_endpoint";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidLocalDecimals";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Path_AlreadyHasCredit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Path_InsufficientCredit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Path_UnlimitedCredit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minAmountLD";
            readonly type: "uint256";
        }];
        readonly name: "SlippageExceeded";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_InsufficientFare";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_InvalidAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_InvalidPath";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_InvalidTokenDecimals";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_LzTokenUnavailable";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_OnlyTaxi";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_OutflowFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_Paused";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_RecoverTokenUnsupported";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_ReentrantCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_SlippageTooHigh";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_Unauthorized";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Stargate_UnreceivedTokenNotFound";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Transfer_ApproveFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Transfer_TransferFailed";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "feeLib";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "planner";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "treasurer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "tokenMessaging";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "creditMessaging";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "lzToken";
                readonly type: "address";
            }];
            readonly indexed: false;
            readonly internalType: "struct StargateBase.AddressConfig";
            readonly name: "config";
            readonly type: "tuple";
        }];
        readonly name: "AddressConfigSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "srcEid";
            readonly type: "uint32";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "amount";
                readonly type: "uint64";
            }];
            readonly indexed: false;
            readonly internalType: "struct Credit[]";
            readonly name: "credits";
            readonly type: "tuple[]";
        }];
        readonly name: "CreditsReceived";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "dstEid";
            readonly type: "uint32";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "amount";
                readonly type: "uint64";
            }];
            readonly indexed: false;
            readonly internalType: "struct Credit[]";
            readonly name: "credits";
            readonly type: "tuple[]";
        }];
        readonly name: "CreditsSent";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "payer";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }];
        readonly name: "Deposited";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "dstEid";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "oft";
            readonly type: "bool";
        }];
        readonly name: "OFTPathSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "guid";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "srcEid";
            readonly type: "uint32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "toAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountReceivedLD";
            readonly type: "uint256";
        }];
        readonly name: "OFTReceived";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "guid";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "dstEid";
            readonly type: "uint32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "fromAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountSentLD";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountReceivedLD";
            readonly type: "uint256";
        }];
        readonly name: "OFTSent";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "paused";
            readonly type: "bool";
        }];
        readonly name: "PauseSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "PlannerFeeWithdrawn";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "payer";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }];
        readonly name: "Redeemed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "amountSD";
            readonly type: "uint64";
        }];
        readonly name: "TreasuryFeeAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "amountSD";
            readonly type: "uint64";
        }];
        readonly name: "TreasuryFeeWithdrawn";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "guid";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "index";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "srcEid";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "composeMsg";
            readonly type: "bytes";
        }];
        readonly name: "UnreceivedTokenCached";
        readonly type: "event";
    }, {
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_amountLD";
            readonly type: "uint256";
        }];
        readonly name: "addTreasuryFee";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "approvalRequired";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "deficitOffset";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountLD";
            readonly type: "uint256";
        }];
        readonly name: "deposit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "endpoint";
        readonly outputs: readonly [{
            readonly internalType: "contract ILayerZeroEndpointV2";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAddressConfig";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "feeLib";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "planner";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "treasurer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "tokenMessaging";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "creditMessaging";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "lzToken";
                readonly type: "address";
            }];
            readonly internalType: "struct StargateBase.AddressConfig";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTransferGasLimit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "localEid";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lpToken";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "oftVersion";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }, {
            readonly internalType: "uint64";
            readonly name: "version";
            readonly type: "uint64";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "eid";
            readonly type: "uint32";
        }];
        readonly name: "paths";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "credit";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "plannerFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "available";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "poolBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "dstEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "to";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraOptions";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "composeMsg";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "oftCmd";
                readonly type: "bytes";
            }];
            readonly internalType: "struct SendParam";
            readonly name: "_sendParam";
            readonly type: "tuple";
        }];
        readonly name: "quoteOFT";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "minAmountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxAmountLD";
                readonly type: "uint256";
            }];
            readonly internalType: "struct OFTLimit";
            readonly name: "limit";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "int256";
                readonly name: "feeAmountLD";
                readonly type: "int256";
            }, {
                readonly internalType: "string";
                readonly name: "description";
                readonly type: "string";
            }];
            readonly internalType: "struct OFTFeeDetail[]";
            readonly name: "oftFeeDetails";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amountSentLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountReceivedLD";
                readonly type: "uint256";
            }];
            readonly internalType: "struct OFTReceipt";
            readonly name: "receipt";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "dstEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "to";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraOptions";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "composeMsg";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "oftCmd";
                readonly type: "bytes";
            }];
            readonly internalType: "struct SendParam";
            readonly name: "_sendParam";
            readonly type: "tuple";
        }, {
            readonly internalType: "bool";
            readonly name: "_payInLzToken";
            readonly type: "bool";
        }];
        readonly name: "quoteRedeemSend";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "nativeFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lzTokenFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MessagingFee";
            readonly name: "fee";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "dstEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "to";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraOptions";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "composeMsg";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "oftCmd";
                readonly type: "bytes";
            }];
            readonly internalType: "struct SendParam";
            readonly name: "_sendParam";
            readonly type: "tuple";
        }, {
            readonly internalType: "bool";
            readonly name: "_payInLzToken";
            readonly type: "bool";
        }];
        readonly name: "quoteSend";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "nativeFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lzTokenFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MessagingFee";
            readonly name: "fee";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_srcEid";
            readonly type: "uint32";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "amount";
                readonly type: "uint64";
            }];
            readonly internalType: "struct Credit[]";
            readonly name: "_credits";
            readonly type: "tuple[]";
        }];
        readonly name: "receiveCredits";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "sender";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }];
            readonly internalType: "struct Origin";
            readonly name: "_origin";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_guid";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint8";
            readonly name: "_seatNumber";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "_amountSD";
            readonly type: "uint64";
        }];
        readonly name: "receiveTokenBus";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "sender";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }];
            readonly internalType: "struct Origin";
            readonly name: "_origin";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_guid";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "_amountSD";
            readonly type: "uint64";
        }, {
            readonly internalType: "bytes";
            readonly name: "_composeMsg";
            readonly type: "bytes";
        }];
        readonly name: "receiveTokenTaxi";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "recoverToken";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_amountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }];
        readonly name: "redeem";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "dstEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "to";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraOptions";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "composeMsg";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "oftCmd";
                readonly type: "bytes";
            }];
            readonly internalType: "struct SendParam";
            readonly name: "_sendParam";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "nativeFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lzTokenFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MessagingFee";
            readonly name: "_fee";
            readonly type: "tuple";
        }, {
            readonly internalType: "address";
            readonly name: "_refundAddress";
            readonly type: "address";
        }];
        readonly name: "redeemSend";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "guid";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "nativeFee";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lzTokenFee";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct MessagingFee";
                readonly name: "fee";
                readonly type: "tuple";
            }];
            readonly internalType: "struct MessagingReceipt";
            readonly name: "msgReceipt";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amountSentLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountReceivedLD";
                readonly type: "uint256";
            }];
            readonly internalType: "struct OFTReceipt";
            readonly name: "oftReceipt";
            readonly type: "tuple";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }];
        readonly name: "redeemable";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_guid";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint8";
            readonly name: "_index";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint32";
            readonly name: "_srcEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_composeMsg";
            readonly type: "bytes";
        }];
        readonly name: "retryReceiveToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "dstEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "to";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraOptions";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "composeMsg";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "oftCmd";
                readonly type: "bytes";
            }];
            readonly internalType: "struct SendParam";
            readonly name: "_sendParam";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "nativeFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lzTokenFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MessagingFee";
            readonly name: "_fee";
            readonly type: "tuple";
        }, {
            readonly internalType: "address";
            readonly name: "_refundAddress";
            readonly type: "address";
        }];
        readonly name: "send";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "guid";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "nativeFee";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lzTokenFee";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct MessagingFee";
                readonly name: "fee";
                readonly type: "tuple";
            }];
            readonly internalType: "struct MessagingReceipt";
            readonly name: "msgReceipt";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amountSentLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountReceivedLD";
                readonly type: "uint256";
            }];
            readonly internalType: "struct OFTReceipt";
            readonly name: "oftReceipt";
            readonly type: "tuple";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_dstEid";
            readonly type: "uint32";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "amount";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "minAmount";
                readonly type: "uint64";
            }];
            readonly internalType: "struct TargetCredit[]";
            readonly name: "_credits";
            readonly type: "tuple[]";
        }];
        readonly name: "sendCredits";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "amount";
                readonly type: "uint64";
            }];
            readonly internalType: "struct Credit[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "dstEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "to";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmountLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraOptions";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "composeMsg";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "oftCmd";
                readonly type: "bytes";
            }];
            readonly internalType: "struct SendParam";
            readonly name: "_sendParam";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "nativeFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lzTokenFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MessagingFee";
            readonly name: "_fee";
            readonly type: "tuple";
        }, {
            readonly internalType: "address";
            readonly name: "_refundAddress";
            readonly type: "address";
        }];
        readonly name: "sendToken";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "guid";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "nativeFee";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lzTokenFee";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct MessagingFee";
                readonly name: "fee";
                readonly type: "tuple";
            }];
            readonly internalType: "struct MessagingReceipt";
            readonly name: "msgReceipt";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amountSentLD";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountReceivedLD";
                readonly type: "uint256";
            }];
            readonly internalType: "struct OFTReceipt";
            readonly name: "oftReceipt";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint72";
                readonly name: "ticketId";
                readonly type: "uint72";
            }, {
                readonly internalType: "bytes";
                readonly name: "passengerBytes";
                readonly type: "bytes";
            }];
            readonly internalType: "struct Ticket";
            readonly name: "ticket";
            readonly type: "tuple";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "feeLib";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "planner";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "treasurer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "tokenMessaging";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "creditMessaging";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "lzToken";
                readonly type: "address";
            }];
            readonly internalType: "struct StargateBase.AddressConfig";
            readonly name: "_config";
            readonly type: "tuple";
        }];
        readonly name: "setAddressConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_deficitOffsetLD";
            readonly type: "uint256";
        }];
        readonly name: "setDeficitOffset";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_dstEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "bool";
            readonly name: "_oft";
            readonly type: "bool";
        }];
        readonly name: "setOFTPath";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "_paused";
            readonly type: "bool";
        }];
        readonly name: "setPause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_gasLimit";
            readonly type: "uint256";
        }];
        readonly name: "setTransferGasLimit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "sharedDecimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stargateType";
        readonly outputs: readonly [{
            readonly internalType: "enum StargateType";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "status";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "token";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "treasuryFee";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "tvl";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "guid";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint8";
            readonly name: "index";
            readonly type: "uint8";
        }];
        readonly name: "unreceivedTokens";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "hash";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "withdrawPlannerFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "_amountSD";
            readonly type: "uint64";
        }];
        readonly name: "withdrawTreasuryFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): StargatePoolNativeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StargatePoolNative;
}

declare class StargateStaking__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "InvalidCaller";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "NonExistentPool";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "StargateStakingRenounceOwnershipDisabled";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WithdrawalAmountExceedsBalance";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Deposit";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "contract IRewarder";
            readonly name: "rewarder";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "exists";
            readonly type: "bool";
        }];
        readonly name: "PoolSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "withUpdate";
            readonly type: "bool";
        }];
        readonly name: "Withdraw";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20[]";
            readonly name: "lpTokens";
            readonly type: "address[]";
        }];
        readonly name: "claim";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "depositTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "emergencyWithdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "isPool";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "rewarder";
        readonly outputs: readonly [{
            readonly internalType: "contract IRewarder";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "contract IRewarder";
            readonly name: "newRewarder";
            readonly type: "address";
        }];
        readonly name: "setPool";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "start";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "end";
            readonly type: "uint256";
        }];
        readonly name: "tokens";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "tokens";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "tokensLength";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "contract IStakingReceiver";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "withdrawToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): StargateStakingInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StargateStaking;
}

declare class TokenMessaging__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_endpoint";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "_queueCapacity";
            readonly type: "uint16";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "BusCodec_InvalidBusBytesLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "BusCodec_InvalidMessage";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "BusCodec_InvalidPassengersBytesLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "nativeDrop";
            readonly type: "bool";
        }];
        readonly name: "Bus_InvalidFare";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "numPassengers";
            readonly type: "uint8";
        }];
        readonly name: "Bus_InvalidNumPassengers";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Bus_InvalidPassenger";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Bus_QueueFull";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidDelegate";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidEndpointCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "options";
            readonly type: "bytes";
        }];
        readonly name: "InvalidOptions";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "LzTokenUnavailable";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MessagingOptions_ZeroGasLimit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Messaging_InvalidAssetId";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Messaging_InvalidEid";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Messaging_InvalidMsgValue";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Messaging_InvalidQueueCapacity";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Messaging_MaxNumPassengersExceedsQueueCapacity";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Messaging_NotEnoughPassengers";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Messaging_Unauthorized";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Messaging_Unavailable";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "eid";
            readonly type: "uint32";
        }];
        readonly name: "NoPeer";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "msgValue";
            readonly type: "uint256";
        }];
        readonly name: "NotEnoughNative";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }];
        readonly name: "OnlyEndpoint";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "eid";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "sender";
            readonly type: "bytes32";
        }];
        readonly name: "OnlyPeer";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OnlySelf";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "result";
            readonly type: "bytes";
        }];
        readonly name: "SimulationResult";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TaxiCodec_InvalidMessage";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Transfer_ApproveFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Transfer_TransferFailed";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "stargateImpl";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "assetId";
            readonly type: "uint16";
        }];
        readonly name: "AssetIdSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "dstEid";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint72";
            readonly name: "startTicketId";
            readonly type: "uint72";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "numPassengers";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "guid";
            readonly type: "bytes32";
        }];
        readonly name: "BusDriven";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "dstEid";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "startSlot";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "endSlot";
            readonly type: "uint16";
        }];
        readonly name: "BusQueueStorageInitialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "dstEid";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint72";
            readonly name: "ticketId";
            readonly type: "uint72";
        }, {
            readonly indexed: false;
            readonly internalType: "uint80";
            readonly name: "fare";
            readonly type: "uint80";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "passenger";
            readonly type: "bytes";
        }];
        readonly name: "BusRode";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "eid";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "msgType";
                readonly type: "uint16";
            }, {
                readonly internalType: "bytes";
                readonly name: "options";
                readonly type: "bytes";
            }];
            readonly indexed: false;
            readonly internalType: "struct EnforcedOptionParam[]";
            readonly name: "_enforcedOptions";
            readonly type: "tuple[]";
        }];
        readonly name: "EnforcedOptionSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "dstEid";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint80";
            readonly name: "busFare";
            readonly type: "uint80";
        }, {
            readonly indexed: false;
            readonly internalType: "uint80";
            readonly name: "busAndNativeDropFare";
            readonly type: "uint80";
        }];
        readonly name: "FaresSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "eid";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "gasLimit";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "nativeDropGasLimit";
            readonly type: "uint128";
        }];
        readonly name: "GasLimitSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "maxAssetId";
            readonly type: "uint16";
        }];
        readonly name: "MaxAssetIdSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "dstEid";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "maxNumPassengers";
            readonly type: "uint8";
        }];
        readonly name: "MaxNumPassengersSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "dstEid";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "nativeDropAmount";
            readonly type: "uint128";
        }];
        readonly name: "NativeDropAmountSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "amount";
            readonly type: "uint128";
        }];
        readonly name: "NativeDropApplied";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "amount";
            readonly type: "uint128";
        }];
        readonly name: "NativeDropFailed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "eid";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "peer";
            readonly type: "bytes32";
        }];
        readonly name: "PeerSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "planner";
            readonly type: "address";
        }];
        readonly name: "PlannerSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "preCrimeAddress";
            readonly type: "address";
        }];
        readonly name: "PreCrimeSet";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "MSG_TYPE_BUS";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "MSG_TYPE_TAXI";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "sender";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }];
            readonly internalType: "struct Origin";
            readonly name: "origin";
            readonly type: "tuple";
        }];
        readonly name: "allowInitializePath";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "stargateImpl";
            readonly type: "address";
        }];
        readonly name: "assetIds";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "assetId";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "dstEid";
            readonly type: "uint32";
        }];
        readonly name: "busQueues";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "maxNumPassengers";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint80";
            readonly name: "busFare";
            readonly type: "uint80";
        }, {
            readonly internalType: "uint80";
            readonly name: "busAndNativeDropFare";
            readonly type: "uint80";
        }, {
            readonly internalType: "uint16";
            readonly name: "qLength";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint72";
            readonly name: "nextTicketId";
            readonly type: "uint72";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_eid";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint16";
            readonly name: "_msgType";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_extraOptions";
            readonly type: "bytes";
        }];
        readonly name: "combineOptions";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_dstEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "_passengers";
            readonly type: "bytes";
        }];
        readonly name: "driveBus";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "guid";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "nativeFee";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lzTokenFee";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct MessagingFee";
                readonly name: "fee";
                readonly type: "tuple";
            }];
            readonly internalType: "struct MessagingReceipt";
            readonly name: "receipt";
            readonly type: "tuple";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "endpoint";
        readonly outputs: readonly [{
            readonly internalType: "contract ILayerZeroEndpointV2";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "eid";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint16";
            readonly name: "msgType";
            readonly type: "uint16";
        }];
        readonly name: "enforcedOptions";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "enforcedOption";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "eid";
            readonly type: "uint32";
        }];
        readonly name: "gasLimits";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "gasLimit";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "nativeDropGasLimit";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_dstEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint16";
            readonly name: "_index";
            readonly type: "uint16";
        }];
        readonly name: "getPassengerHash";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "hash";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTransferGasLimit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32[]";
            readonly name: "_dstEids";
            readonly type: "uint32[]";
        }, {
            readonly internalType: "uint16";
            readonly name: "_startSlot";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint16";
            readonly name: "_endSlot";
            readonly type: "uint16";
        }];
        readonly name: "initializeBusQueueStorage";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "sender";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }];
            readonly internalType: "struct Origin";
            readonly name: "";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "_message";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "_sender";
            readonly type: "address";
        }];
        readonly name: "isComposeMsgSender";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_eid";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_peer";
            readonly type: "bytes32";
        }];
        readonly name: "isPeer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "sender";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }];
            readonly internalType: "struct Origin";
            readonly name: "_origin";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_guid";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "_message";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "_executor";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_extraData";
            readonly type: "bytes";
        }];
        readonly name: "lzReceive";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "srcEid";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "sender";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "nonce";
                    readonly type: "uint64";
                }];
                readonly internalType: "struct Origin";
                readonly name: "origin";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint32";
                readonly name: "dstEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "bytes32";
                readonly name: "guid";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "executor";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "message";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct InboundPacket[]";
            readonly name: "_packets";
            readonly type: "tuple[]";
        }];
        readonly name: "lzReceiveAndRevert";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "sender";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }];
            readonly internalType: "struct Origin";
            readonly name: "_origin";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_guid";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "_message";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "_executor";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_extraData";
            readonly type: "bytes";
        }];
        readonly name: "lzReceiveSimulate";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "maxAssetId";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "dstEid";
            readonly type: "uint32";
        }];
        readonly name: "nativeDropAmounts";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "nativeDropAmount";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "nextNonce";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "nonce";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "oApp";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "oAppVersion";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "senderVersion";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "receiverVersion";
            readonly type: "uint64";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "eid";
            readonly type: "uint32";
        }];
        readonly name: "peers";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "peer";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "planner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "preCrime";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "queueCapacity";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_dstEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "_passengers";
            readonly type: "bytes";
        }];
        readonly name: "quoteDriveBus";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "nativeFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lzTokenFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MessagingFee";
            readonly name: "fee";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_dstEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint8";
            readonly name: "_numPassengers";
            readonly type: "uint8";
        }];
        readonly name: "quoteFares";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "busFare";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "busAndNativeDropFare";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_dstEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "bool";
            readonly name: "_airdrop";
            readonly type: "bool";
        }];
        readonly name: "quoteRideBus";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "nativeFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lzTokenFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MessagingFee";
            readonly name: "fee";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "dstEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "receiver";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "amountSD";
                readonly type: "uint64";
            }, {
                readonly internalType: "bytes";
                readonly name: "composeMsg";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraOptions";
                readonly type: "bytes";
            }];
            readonly internalType: "struct TaxiParams";
            readonly name: "_params";
            readonly type: "tuple";
        }, {
            readonly internalType: "bool";
            readonly name: "_payInLzToken";
            readonly type: "bool";
        }];
        readonly name: "quoteTaxi";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "nativeFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lzTokenFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MessagingFee";
            readonly name: "fee";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "dstEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "receiver";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "amountSD";
                readonly type: "uint64";
            }, {
                readonly internalType: "bool";
                readonly name: "nativeDrop";
                readonly type: "bool";
            }];
            readonly internalType: "struct RideBusParams";
            readonly name: "_params";
            readonly type: "tuple";
        }];
        readonly name: "rideBus";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "guid";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "nativeFee";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lzTokenFee";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct MessagingFee";
                readonly name: "fee";
                readonly type: "tuple";
            }];
            readonly internalType: "struct MessagingReceipt";
            readonly name: "receipt";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint72";
                readonly name: "ticketId";
                readonly type: "uint72";
            }, {
                readonly internalType: "bytes";
                readonly name: "passengerBytes";
                readonly type: "bytes";
            }];
            readonly internalType: "struct Ticket";
            readonly name: "ticket";
            readonly type: "tuple";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_stargateImpl";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "_assetId";
            readonly type: "uint16";
        }];
        readonly name: "setAssetId";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_delegate";
            readonly type: "address";
        }];
        readonly name: "setDelegate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "eid";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "msgType";
                readonly type: "uint16";
            }, {
                readonly internalType: "bytes";
                readonly name: "options";
                readonly type: "bytes";
            }];
            readonly internalType: "struct EnforcedOptionParam[]";
            readonly name: "_enforcedOptions";
            readonly type: "tuple[]";
        }];
        readonly name: "setEnforcedOptions";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_dstEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint80";
            readonly name: "_busFare";
            readonly type: "uint80";
        }, {
            readonly internalType: "uint80";
            readonly name: "_busAndNativeDropFare";
            readonly type: "uint80";
        }];
        readonly name: "setFares";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_eid";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint128";
            readonly name: "_gasLimit";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "_nativeDropGasLimit";
            readonly type: "uint128";
        }];
        readonly name: "setGasLimit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_maxAssetId";
            readonly type: "uint16";
        }];
        readonly name: "setMaxAssetId";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_dstEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint8";
            readonly name: "_maxNumPassengers";
            readonly type: "uint8";
        }];
        readonly name: "setMaxNumPassengers";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_dstEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint128";
            readonly name: "_nativeDropAmount";
            readonly type: "uint128";
        }];
        readonly name: "setNativeDropAmount";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_eid";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_peer";
            readonly type: "bytes32";
        }];
        readonly name: "setPeer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_planner";
            readonly type: "address";
        }];
        readonly name: "setPlanner";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_preCrime";
            readonly type: "address";
        }];
        readonly name: "setPreCrime";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_gasLimit";
            readonly type: "uint256";
        }];
        readonly name: "setTransferGasLimit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "assetId";
            readonly type: "uint16";
        }];
        readonly name: "stargateImpls";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "stargateImpl";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "dstEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "receiver";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "amountSD";
                readonly type: "uint64";
            }, {
                readonly internalType: "bytes";
                readonly name: "composeMsg";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraOptions";
                readonly type: "bytes";
            }];
            readonly internalType: "struct TaxiParams";
            readonly name: "_params";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "nativeFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lzTokenFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MessagingFee";
            readonly name: "_messagingFee";
            readonly type: "tuple";
        }, {
            readonly internalType: "address";
            readonly name: "_refundAddress";
            readonly type: "address";
        }];
        readonly name: "taxi";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "guid";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "nativeFee";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lzTokenFee";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct MessagingFee";
                readonly name: "fee";
                readonly type: "tuple";
            }];
            readonly internalType: "struct MessagingReceipt";
            readonly name: "receipt";
            readonly type: "tuple";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): TokenMessagingInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenMessaging;
}

type index_FeeLibV1__factory = FeeLibV1__factory;
declare const index_FeeLibV1__factory: typeof FeeLibV1__factory;
type index_PoolToken__factory = PoolToken__factory;
declare const index_PoolToken__factory: typeof PoolToken__factory;
type index_StargateMultiRewarder__factory = StargateMultiRewarder__factory;
declare const index_StargateMultiRewarder__factory: typeof StargateMultiRewarder__factory;
type index_StargateOFT__factory = StargateOFT__factory;
declare const index_StargateOFT__factory: typeof StargateOFT__factory;
type index_StargatePoolNative__factory = StargatePoolNative__factory;
declare const index_StargatePoolNative__factory: typeof StargatePoolNative__factory;
type index_StargatePool__factory = StargatePool__factory;
declare const index_StargatePool__factory: typeof StargatePool__factory;
type index_StargateStaking__factory = StargateStaking__factory;
declare const index_StargateStaking__factory: typeof StargateStaking__factory;
type index_TokenMessaging__factory = TokenMessaging__factory;
declare const index_TokenMessaging__factory: typeof TokenMessaging__factory;
declare namespace index {
  export {
    index_FeeLibV1__factory as FeeLibV1__factory,
    index_PoolToken__factory as PoolToken__factory,
    index_StargateMultiRewarder__factory as StargateMultiRewarder__factory,
    index_StargateOFT__factory as StargateOFT__factory,
    index_StargatePoolNative__factory as StargatePoolNative__factory,
    index_StargatePool__factory as StargatePool__factory,
    index_StargateStaking__factory as StargateStaking__factory,
    index_TokenMessaging__factory as TokenMessaging__factory,
  };
}

export { FeeLibV1, FeeLibV1__factory, PoolToken, PoolToken__factory, StargateMultiRewarder, StargateMultiRewarder__factory, StargateOFT, StargateOFT__factory, StargatePool, StargatePoolNative, StargatePoolNative__factory, StargatePool__factory, StargateStaking, StargateStaking__factory, TokenMessaging, TokenMessaging__factory, index as factories };
