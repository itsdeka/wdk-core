import { T as TypedEvent, a as TypedEventFilter, b as TypedListener, O as OnEvent, P as PromiseOrValue, c as ERC20Interface, E as ERC20 } from './ERC20-4690a607.js';
import { BaseContract, Signer, Overrides, ContractTransaction, BytesLike, PayableOverrides, CallOverrides, BigNumber, BigNumberish, PopulatedTransaction, utils } from 'ethers';
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Provider, Listener } from '@ethersproject/providers';

type OriginStruct = {
    srcEid: PromiseOrValue<BigNumberish>;
    sender: PromiseOrValue<BytesLike>;
    nonce: PromiseOrValue<BigNumberish>;
};
type OriginStructOutput = [number, string, BigNumber] & {
    srcEid: number;
    sender: string;
    nonce: BigNumber;
};
declare namespace IExecutor {
    type DstConfigParamStruct = {
        dstEid: PromiseOrValue<BigNumberish>;
        baseGas: PromiseOrValue<BigNumberish>;
        multiplierBps: PromiseOrValue<BigNumberish>;
        floorMarginUSD: PromiseOrValue<BigNumberish>;
        nativeCap: PromiseOrValue<BigNumberish>;
    };
    type DstConfigParamStructOutput = [
        number,
        BigNumber,
        number,
        BigNumber,
        BigNumber
    ] & {
        dstEid: number;
        baseGas: BigNumber;
        multiplierBps: number;
        floorMarginUSD: BigNumber;
        nativeCap: BigNumber;
    };
    type NativeDropParamsStruct = {
        receiver: PromiseOrValue<string>;
        amount: PromiseOrValue<BigNumberish>;
    };
    type NativeDropParamsStructOutput = [string, BigNumber] & {
        receiver: string;
        amount: BigNumber;
    };
    type ExecutionParamsStruct = {
        receiver: PromiseOrValue<string>;
        origin: OriginStruct;
        guid: PromiseOrValue<BytesLike>;
        message: PromiseOrValue<BytesLike>;
        extraData: PromiseOrValue<BytesLike>;
        gasLimit: PromiseOrValue<BigNumberish>;
    };
    type ExecutionParamsStructOutput = [
        string,
        OriginStructOutput,
        string,
        string,
        string,
        BigNumber
    ] & {
        receiver: string;
        origin: OriginStructOutput;
        guid: string;
        message: string;
        extraData: string;
        gasLimit: BigNumber;
    };
}
interface ExecutorInterface extends utils.Interface {
    functions: {
        "admin()": FunctionFragment;
        "implementation()": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "allowlistSize()": FunctionFragment;
        "assignJob(uint32,address,uint256,bytes)": FunctionFragment;
        "defaultMultiplierBps()": FunctionFragment;
        "dstConfig(uint32)": FunctionFragment;
        "endpoint()": FunctionFragment;
        "execute301(bytes,uint256)": FunctionFragment;
        "getFee(uint32,address,uint256,bytes)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getSupportedOptionTypes(uint32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasAcl(address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "initialize(address,address,address[],address,address,address[])": FunctionFragment;
        "localEid()": FunctionFragment;
        "nativeDrop((uint32,bytes32,uint64),uint32,address,(address,uint256)[],uint256)": FunctionFragment;
        "nativeDropAndExecute301((uint32,bytes32,uint64),(address,uint256)[],uint256,bytes,uint256)": FunctionFragment;
        "nativeDropAndExecute302((address,uint256)[],uint256,(address,(uint32,bytes32,uint64),bytes32,bytes,bytes,uint256))": FunctionFragment;
        "onUpgrade(address)": FunctionFragment;
        "paused()": FunctionFragment;
        "priceFeed()": FunctionFragment;
        "receiveUln301()": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setDefaultMultiplierBps(uint16)": FunctionFragment;
        "setDstConfig((uint32,uint64,uint16,uint128,uint128)[])": FunctionFragment;
        "setPaused(bool)": FunctionFragment;
        "setPriceFeed(address)": FunctionFragment;
        "setSupportedOptionTypes(uint32,uint8[])": FunctionFragment;
        "setWorkerFeeLib(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "withdrawFee(address,address,uint256)": FunctionFragment;
        "withdrawToken(address,address,uint256)": FunctionFragment;
        "workerFeeLib()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "admin" | "implementation" | "upgradeTo" | "upgradeToAndCall" | "DEFAULT_ADMIN_ROLE" | "allowlistSize" | "assignJob" | "defaultMultiplierBps" | "dstConfig" | "endpoint" | "execute301" | "getFee" | "getRoleAdmin" | "getSupportedOptionTypes" | "grantRole" | "hasAcl" | "hasRole" | "initialize" | "localEid" | "nativeDrop" | "nativeDropAndExecute301" | "nativeDropAndExecute302" | "onUpgrade" | "paused" | "priceFeed" | "receiveUln301" | "renounceRole" | "revokeRole" | "setDefaultMultiplierBps" | "setDstConfig" | "setPaused" | "setPriceFeed" | "setSupportedOptionTypes" | "setWorkerFeeLib" | "supportsInterface" | "withdrawFee" | "withdrawToken" | "workerFeeLib"): FunctionFragment;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowlistSize", values?: undefined): string;
    encodeFunctionData(functionFragment: "assignJob", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "defaultMultiplierBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "dstConfig", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "endpoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "execute301", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getSupportedOptionTypes", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "hasAcl", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>[]
    ]): string;
    encodeFunctionData(functionFragment: "localEid", values?: undefined): string;
    encodeFunctionData(functionFragment: "nativeDrop", values: [
        OriginStruct,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        IExecutor.NativeDropParamsStruct[],
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "nativeDropAndExecute301", values: [
        OriginStruct,
        IExecutor.NativeDropParamsStruct[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "nativeDropAndExecute302", values: [
        IExecutor.NativeDropParamsStruct[],
        PromiseOrValue<BigNumberish>,
        IExecutor.ExecutionParamsStruct
    ]): string;
    encodeFunctionData(functionFragment: "onUpgrade", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "priceFeed", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiveUln301", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setDefaultMultiplierBps", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setDstConfig", values: [IExecutor.DstConfigParamStruct[]]): string;
    encodeFunctionData(functionFragment: "setPaused", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setPriceFeed", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setSupportedOptionTypes", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "setWorkerFeeLib", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "withdrawFee", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "withdrawToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "workerFeeLib", values?: undefined): string;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowlistSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assignJob", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultMultiplierBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dstConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "endpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute301", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupportedOptionTypes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasAcl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "localEid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nativeDrop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nativeDropAndExecute301", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nativeDropAndExecute302", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onUpgrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveUln301", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultMultiplierBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDstConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPriceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSupportedOptionTypes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWorkerFeeLib", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "workerFeeLib", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "Upgraded(address)": EventFragment;
        "DstConfigSet(tuple[])": EventFragment;
        "Initialized(uint8)": EventFragment;
        "NativeDropApplied(tuple,uint32,address,tuple[],bool[])": EventFragment;
        "Paused(address)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "SetDefaultMultiplierBps(uint16)": EventFragment;
        "SetPriceFeed(address)": EventFragment;
        "SetSupportedOptionTypes(uint32,uint8[])": EventFragment;
        "SetWorkerLib(address)": EventFragment;
        "Unpaused(address)": EventFragment;
        "Withdraw(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DstConfigSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NativeDropApplied"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetDefaultMultiplierBps"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPriceFeed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetSupportedOptionTypes"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetWorkerLib"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
type AdminChangedEvent = TypedEvent<[
    string,
    string
], AdminChangedEventObject>;
type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
interface BeaconUpgradedEventObject {
    beacon: string;
}
type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
interface UpgradedEventObject {
    implementation: string;
}
type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
interface DstConfigSetEventObject {
    params: IExecutor.DstConfigParamStructOutput[];
}
type DstConfigSetEvent = TypedEvent<[
    IExecutor.DstConfigParamStructOutput[]
], DstConfigSetEventObject>;
type DstConfigSetEventFilter = TypedEventFilter<DstConfigSetEvent>;
interface InitializedEventObject {
    version: number;
}
type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
interface NativeDropAppliedEventObject {
    origin: OriginStructOutput;
    dstEid: number;
    oapp: string;
    params: IExecutor.NativeDropParamsStructOutput[];
    success: boolean[];
}
type NativeDropAppliedEvent = TypedEvent<[
    OriginStructOutput,
    number,
    string,
    IExecutor.NativeDropParamsStructOutput[],
    boolean[]
], NativeDropAppliedEventObject>;
type NativeDropAppliedEventFilter = TypedEventFilter<NativeDropAppliedEvent>;
interface PausedEventObject {
    account: string;
}
type PausedEvent = TypedEvent<[string], PausedEventObject>;
type PausedEventFilter = TypedEventFilter<PausedEvent>;
interface RoleAdminChangedEventObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject>;
type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
interface RoleGrantedEventObject {
    role: string;
    account: string;
    sender: string;
}
type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject>;
type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
interface RoleRevokedEventObject {
    role: string;
    account: string;
    sender: string;
}
type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject>;
type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
interface SetDefaultMultiplierBpsEventObject {
    multiplierBps: number;
}
type SetDefaultMultiplierBpsEvent = TypedEvent<[
    number
], SetDefaultMultiplierBpsEventObject>;
type SetDefaultMultiplierBpsEventFilter = TypedEventFilter<SetDefaultMultiplierBpsEvent>;
interface SetPriceFeedEventObject {
    priceFeed: string;
}
type SetPriceFeedEvent = TypedEvent<[string], SetPriceFeedEventObject>;
type SetPriceFeedEventFilter = TypedEventFilter<SetPriceFeedEvent>;
interface SetSupportedOptionTypesEventObject {
    dstEid: number;
    optionTypes: number[];
}
type SetSupportedOptionTypesEvent = TypedEvent<[
    number,
    number[]
], SetSupportedOptionTypesEventObject>;
type SetSupportedOptionTypesEventFilter = TypedEventFilter<SetSupportedOptionTypesEvent>;
interface SetWorkerLibEventObject {
    workerLib: string;
}
type SetWorkerLibEvent = TypedEvent<[string], SetWorkerLibEventObject>;
type SetWorkerLibEventFilter = TypedEventFilter<SetWorkerLibEvent>;
interface UnpausedEventObject {
    account: string;
}
type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
interface WithdrawEventObject {
    lib: string;
    to: string;
    amount: BigNumber;
}
type WithdrawEvent = TypedEvent<[
    string,
    string,
    BigNumber
], WithdrawEventObject>;
type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
interface Executor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ExecutorInterface;
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
        admin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        implementation(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        allowlistSize(overrides?: CallOverrides): Promise<[BigNumber]>;
        assignJob(_dstEid: PromiseOrValue<BigNumberish>, _sender: PromiseOrValue<string>, _calldataSize: PromiseOrValue<BigNumberish>, _options: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        defaultMultiplierBps(overrides?: CallOverrides): Promise<[number]>;
        dstConfig(dstEid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            BigNumber,
            BigNumber
        ] & {
            baseGas: BigNumber;
            multiplierBps: number;
            floorMarginUSD: BigNumber;
            nativeCap: BigNumber;
        }>;
        endpoint(overrides?: CallOverrides): Promise<[string]>;
        execute301(_packet: PromiseOrValue<BytesLike>, _gasLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getFee(_dstEid: PromiseOrValue<BigNumberish>, _sender: PromiseOrValue<string>, _calldataSize: PromiseOrValue<BigNumberish>, _options: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber] & {
            fee: BigNumber;
        }>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        getSupportedOptionTypes(_eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number[]]>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        hasAcl(_sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        initialize(_endpoint: PromiseOrValue<string>, _receiveUln301: PromiseOrValue<string>, _messageLibs: PromiseOrValue<string>[], _priceFeed: PromiseOrValue<string>, _roleAdmin: PromiseOrValue<string>, _admins: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        localEid(overrides?: CallOverrides): Promise<[number]>;
        nativeDrop(_origin: OriginStruct, _dstEid: PromiseOrValue<BigNumberish>, _oapp: PromiseOrValue<string>, _nativeDropParams: IExecutor.NativeDropParamsStruct[], _nativeDropGasLimit: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nativeDropAndExecute301(_origin: OriginStruct, _nativeDropParams: IExecutor.NativeDropParamsStruct[], _nativeDropGasLimit: PromiseOrValue<BigNumberish>, _packet: PromiseOrValue<BytesLike>, _gasLimit: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nativeDropAndExecute302(_nativeDropParams: IExecutor.NativeDropParamsStruct[], _nativeDropGasLimit: PromiseOrValue<BigNumberish>, _executionParams: IExecutor.ExecutionParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        onUpgrade(_receiveUln301: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        priceFeed(overrides?: CallOverrides): Promise<[string]>;
        receiveUln301(overrides?: CallOverrides): Promise<[string]>;
        renounceRole(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[void]>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDefaultMultiplierBps(_multiplierBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDstConfig(_params: IExecutor.DstConfigParamStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPaused(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPriceFeed(_priceFeed: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSupportedOptionTypes(_eid: PromiseOrValue<BigNumberish>, _optionTypes: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setWorkerFeeLib(_workerFeeLib: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        withdrawFee(_lib: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawToken(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        workerFeeLib(overrides?: CallOverrides): Promise<[string]>;
    };
    admin(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    implementation(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    allowlistSize(overrides?: CallOverrides): Promise<BigNumber>;
    assignJob(_dstEid: PromiseOrValue<BigNumberish>, _sender: PromiseOrValue<string>, _calldataSize: PromiseOrValue<BigNumberish>, _options: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    defaultMultiplierBps(overrides?: CallOverrides): Promise<number>;
    dstConfig(dstEid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        number,
        BigNumber,
        BigNumber
    ] & {
        baseGas: BigNumber;
        multiplierBps: number;
        floorMarginUSD: BigNumber;
        nativeCap: BigNumber;
    }>;
    endpoint(overrides?: CallOverrides): Promise<string>;
    execute301(_packet: PromiseOrValue<BytesLike>, _gasLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getFee(_dstEid: PromiseOrValue<BigNumberish>, _sender: PromiseOrValue<string>, _calldataSize: PromiseOrValue<BigNumberish>, _options: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getSupportedOptionTypes(_eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number[]>;
    grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    hasAcl(_sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    initialize(_endpoint: PromiseOrValue<string>, _receiveUln301: PromiseOrValue<string>, _messageLibs: PromiseOrValue<string>[], _priceFeed: PromiseOrValue<string>, _roleAdmin: PromiseOrValue<string>, _admins: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    localEid(overrides?: CallOverrides): Promise<number>;
    nativeDrop(_origin: OriginStruct, _dstEid: PromiseOrValue<BigNumberish>, _oapp: PromiseOrValue<string>, _nativeDropParams: IExecutor.NativeDropParamsStruct[], _nativeDropGasLimit: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nativeDropAndExecute301(_origin: OriginStruct, _nativeDropParams: IExecutor.NativeDropParamsStruct[], _nativeDropGasLimit: PromiseOrValue<BigNumberish>, _packet: PromiseOrValue<BytesLike>, _gasLimit: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nativeDropAndExecute302(_nativeDropParams: IExecutor.NativeDropParamsStruct[], _nativeDropGasLimit: PromiseOrValue<BigNumberish>, _executionParams: IExecutor.ExecutionParamsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    onUpgrade(_receiveUln301: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    priceFeed(overrides?: CallOverrides): Promise<string>;
    receiveUln301(overrides?: CallOverrides): Promise<string>;
    renounceRole(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDefaultMultiplierBps(_multiplierBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDstConfig(_params: IExecutor.DstConfigParamStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPaused(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPriceFeed(_priceFeed: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSupportedOptionTypes(_eid: PromiseOrValue<BigNumberish>, _optionTypes: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setWorkerFeeLib(_workerFeeLib: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    withdrawFee(_lib: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawToken(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    workerFeeLib(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        admin(overrides?: CallOverrides): Promise<string>;
        implementation(overrides?: CallOverrides): Promise<string>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        allowlistSize(overrides?: CallOverrides): Promise<BigNumber>;
        assignJob(_dstEid: PromiseOrValue<BigNumberish>, _sender: PromiseOrValue<string>, _calldataSize: PromiseOrValue<BigNumberish>, _options: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        defaultMultiplierBps(overrides?: CallOverrides): Promise<number>;
        dstConfig(dstEid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            BigNumber,
            BigNumber
        ] & {
            baseGas: BigNumber;
            multiplierBps: number;
            floorMarginUSD: BigNumber;
            nativeCap: BigNumber;
        }>;
        endpoint(overrides?: CallOverrides): Promise<string>;
        execute301(_packet: PromiseOrValue<BytesLike>, _gasLimit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getFee(_dstEid: PromiseOrValue<BigNumberish>, _sender: PromiseOrValue<string>, _calldataSize: PromiseOrValue<BigNumberish>, _options: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getSupportedOptionTypes(_eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number[]>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        hasAcl(_sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        initialize(_endpoint: PromiseOrValue<string>, _receiveUln301: PromiseOrValue<string>, _messageLibs: PromiseOrValue<string>[], _priceFeed: PromiseOrValue<string>, _roleAdmin: PromiseOrValue<string>, _admins: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        localEid(overrides?: CallOverrides): Promise<number>;
        nativeDrop(_origin: OriginStruct, _dstEid: PromiseOrValue<BigNumberish>, _oapp: PromiseOrValue<string>, _nativeDropParams: IExecutor.NativeDropParamsStruct[], _nativeDropGasLimit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        nativeDropAndExecute301(_origin: OriginStruct, _nativeDropParams: IExecutor.NativeDropParamsStruct[], _nativeDropGasLimit: PromiseOrValue<BigNumberish>, _packet: PromiseOrValue<BytesLike>, _gasLimit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        nativeDropAndExecute302(_nativeDropParams: IExecutor.NativeDropParamsStruct[], _nativeDropGasLimit: PromiseOrValue<BigNumberish>, _executionParams: IExecutor.ExecutionParamsStruct, overrides?: CallOverrides): Promise<void>;
        onUpgrade(_receiveUln301: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        priceFeed(overrides?: CallOverrides): Promise<string>;
        receiveUln301(overrides?: CallOverrides): Promise<string>;
        renounceRole(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setDefaultMultiplierBps(_multiplierBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setDstConfig(_params: IExecutor.DstConfigParamStruct[], overrides?: CallOverrides): Promise<void>;
        setPaused(_paused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setPriceFeed(_priceFeed: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setSupportedOptionTypes(_eid: PromiseOrValue<BigNumberish>, _optionTypes: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        setWorkerFeeLib(_workerFeeLib: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        withdrawFee(_lib: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdrawToken(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        workerFeeLib(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        "Upgraded(address)"(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        Upgraded(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        "DstConfigSet(tuple[])"(params?: null): DstConfigSetEventFilter;
        DstConfigSet(params?: null): DstConfigSetEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "NativeDropApplied(tuple,uint32,address,tuple[],bool[])"(origin?: null, dstEid?: null, oapp?: null, params?: null, success?: null): NativeDropAppliedEventFilter;
        NativeDropApplied(origin?: null, dstEid?: null, oapp?: null, params?: null, success?: null): NativeDropAppliedEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        RoleGranted(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
        RoleRevoked(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
        "SetDefaultMultiplierBps(uint16)"(multiplierBps?: null): SetDefaultMultiplierBpsEventFilter;
        SetDefaultMultiplierBps(multiplierBps?: null): SetDefaultMultiplierBpsEventFilter;
        "SetPriceFeed(address)"(priceFeed?: null): SetPriceFeedEventFilter;
        SetPriceFeed(priceFeed?: null): SetPriceFeedEventFilter;
        "SetSupportedOptionTypes(uint32,uint8[])"(dstEid?: null, optionTypes?: null): SetSupportedOptionTypesEventFilter;
        SetSupportedOptionTypes(dstEid?: null, optionTypes?: null): SetSupportedOptionTypesEventFilter;
        "SetWorkerLib(address)"(workerLib?: null): SetWorkerLibEventFilter;
        SetWorkerLib(workerLib?: null): SetWorkerLibEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
        "Withdraw(address,address,uint256)"(lib?: null, to?: null, amount?: null): WithdrawEventFilter;
        Withdraw(lib?: null, to?: null, amount?: null): WithdrawEventFilter;
    };
    estimateGas: {
        admin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        implementation(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        allowlistSize(overrides?: CallOverrides): Promise<BigNumber>;
        assignJob(_dstEid: PromiseOrValue<BigNumberish>, _sender: PromiseOrValue<string>, _calldataSize: PromiseOrValue<BigNumberish>, _options: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        defaultMultiplierBps(overrides?: CallOverrides): Promise<BigNumber>;
        dstConfig(dstEid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        endpoint(overrides?: CallOverrides): Promise<BigNumber>;
        execute301(_packet: PromiseOrValue<BytesLike>, _gasLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getFee(_dstEid: PromiseOrValue<BigNumberish>, _sender: PromiseOrValue<string>, _calldataSize: PromiseOrValue<BigNumberish>, _options: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getSupportedOptionTypes(_eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        hasAcl(_sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_endpoint: PromiseOrValue<string>, _receiveUln301: PromiseOrValue<string>, _messageLibs: PromiseOrValue<string>[], _priceFeed: PromiseOrValue<string>, _roleAdmin: PromiseOrValue<string>, _admins: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        localEid(overrides?: CallOverrides): Promise<BigNumber>;
        nativeDrop(_origin: OriginStruct, _dstEid: PromiseOrValue<BigNumberish>, _oapp: PromiseOrValue<string>, _nativeDropParams: IExecutor.NativeDropParamsStruct[], _nativeDropGasLimit: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nativeDropAndExecute301(_origin: OriginStruct, _nativeDropParams: IExecutor.NativeDropParamsStruct[], _nativeDropGasLimit: PromiseOrValue<BigNumberish>, _packet: PromiseOrValue<BytesLike>, _gasLimit: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nativeDropAndExecute302(_nativeDropParams: IExecutor.NativeDropParamsStruct[], _nativeDropGasLimit: PromiseOrValue<BigNumberish>, _executionParams: IExecutor.ExecutionParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        onUpgrade(_receiveUln301: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        priceFeed(overrides?: CallOverrides): Promise<BigNumber>;
        receiveUln301(overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDefaultMultiplierBps(_multiplierBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDstConfig(_params: IExecutor.DstConfigParamStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPaused(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPriceFeed(_priceFeed: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSupportedOptionTypes(_eid: PromiseOrValue<BigNumberish>, _optionTypes: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setWorkerFeeLib(_workerFeeLib: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawFee(_lib: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawToken(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        workerFeeLib(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        admin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        implementation(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowlistSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        assignJob(_dstEid: PromiseOrValue<BigNumberish>, _sender: PromiseOrValue<string>, _calldataSize: PromiseOrValue<BigNumberish>, _options: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        defaultMultiplierBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dstConfig(dstEid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        endpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute301(_packet: PromiseOrValue<BytesLike>, _gasLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getFee(_dstEid: PromiseOrValue<BigNumberish>, _sender: PromiseOrValue<string>, _calldataSize: PromiseOrValue<BigNumberish>, _options: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSupportedOptionTypes(_eid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        hasAcl(_sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_endpoint: PromiseOrValue<string>, _receiveUln301: PromiseOrValue<string>, _messageLibs: PromiseOrValue<string>[], _priceFeed: PromiseOrValue<string>, _roleAdmin: PromiseOrValue<string>, _admins: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        localEid(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nativeDrop(_origin: OriginStruct, _dstEid: PromiseOrValue<BigNumberish>, _oapp: PromiseOrValue<string>, _nativeDropParams: IExecutor.NativeDropParamsStruct[], _nativeDropGasLimit: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nativeDropAndExecute301(_origin: OriginStruct, _nativeDropParams: IExecutor.NativeDropParamsStruct[], _nativeDropGasLimit: PromiseOrValue<BigNumberish>, _packet: PromiseOrValue<BytesLike>, _gasLimit: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nativeDropAndExecute302(_nativeDropParams: IExecutor.NativeDropParamsStruct[], _nativeDropGasLimit: PromiseOrValue<BigNumberish>, _executionParams: IExecutor.ExecutionParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        onUpgrade(_receiveUln301: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceFeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receiveUln301(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceRole(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDefaultMultiplierBps(_multiplierBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDstConfig(_params: IExecutor.DstConfigParamStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPaused(_paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPriceFeed(_priceFeed: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSupportedOptionTypes(_eid: PromiseOrValue<BigNumberish>, _optionTypes: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setWorkerFeeLib(_workerFeeLib: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawFee(_lib: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawToken(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        workerFeeLib(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

declare class ERC20__factory {
    static readonly abi: readonly [{
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "_spender";
            readonly type: "address";
        }, {
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
        }, {
            readonly name: "_spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly payable: true;
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }];
    static createInterface(): ERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20;
}

declare class Executor__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "previousAdmin";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "AdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "beacon";
            readonly type: "address";
        }];
        readonly name: "BeaconUpgraded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
    }, {
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [];
        readonly name: "admin";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "admin_";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "implementation";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "implementation_";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }];
        readonly name: "upgradeTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer_NativeFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Transfer_ToAddressIsZero";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Worker_NotAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Worker_OnlyMessageLib";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Worker_RoleRenouncingDisabled";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "dstEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "baseGas";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint16";
                readonly name: "multiplierBps";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint128";
                readonly name: "floorMarginUSD";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "nativeCap";
                readonly type: "uint128";
            }];
            readonly indexed: false;
            readonly internalType: "struct IExecutor.DstConfigParam[]";
            readonly name: "params";
            readonly type: "tuple[]";
        }];
        readonly name: "DstConfigSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
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
            readonly indexed: false;
            readonly internalType: "struct Origin";
            readonly name: "origin";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "dstEid";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "oapp";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly indexed: false;
            readonly internalType: "struct IExecutor.NativeDropParams[]";
            readonly name: "params";
            readonly type: "tuple[]";
        }, {
            readonly indexed: false;
            readonly internalType: "bool[]";
            readonly name: "success";
            readonly type: "bool[]";
        }];
        readonly name: "NativeDropApplied";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "Paused";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "previousAdminRole";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "newAdminRole";
            readonly type: "bytes32";
        }];
        readonly name: "RoleAdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleGranted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleRevoked";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "multiplierBps";
            readonly type: "uint16";
        }];
        readonly name: "SetDefaultMultiplierBps";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "priceFeed";
            readonly type: "address";
        }];
        readonly name: "SetPriceFeed";
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
            readonly internalType: "uint8[]";
            readonly name: "optionTypes";
            readonly type: "uint8[]";
        }];
        readonly name: "SetSupportedOptionTypes";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "workerLib";
            readonly type: "address";
        }];
        readonly name: "SetWorkerLib";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "Unpaused";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "lib";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Withdraw";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "DEFAULT_ADMIN_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "allowlistSize";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_dstEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "_sender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_calldataSize";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_options";
            readonly type: "bytes";
        }];
        readonly name: "assignJob";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "defaultMultiplierBps";
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
        readonly name: "dstConfig";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "baseGas";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint16";
            readonly name: "multiplierBps";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint128";
            readonly name: "floorMarginUSD";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "nativeCap";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "endpoint";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_packet";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_gasLimit";
            readonly type: "uint256";
        }];
        readonly name: "execute301";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_dstEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "_sender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_calldataSize";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_options";
            readonly type: "bytes";
        }];
        readonly name: "getFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }];
        readonly name: "getRoleAdmin";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_eid";
            readonly type: "uint32";
        }];
        readonly name: "getSupportedOptionTypes";
        readonly outputs: readonly [{
            readonly internalType: "uint8[]";
            readonly name: "";
            readonly type: "uint8[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "grantRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_sender";
            readonly type: "address";
        }];
        readonly name: "hasAcl";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "hasRole";
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
            readonly name: "_endpoint";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_receiveUln301";
            readonly type: "address";
        }, {
            readonly internalType: "address[]";
            readonly name: "_messageLibs";
            readonly type: "address[]";
        }, {
            readonly internalType: "address";
            readonly name: "_priceFeed";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_roleAdmin";
            readonly type: "address";
        }, {
            readonly internalType: "address[]";
            readonly name: "_admins";
            readonly type: "address[]";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
            readonly internalType: "uint32";
            readonly name: "_dstEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "_oapp";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IExecutor.NativeDropParams[]";
            readonly name: "_nativeDropParams";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "_nativeDropGasLimit";
            readonly type: "uint256";
        }];
        readonly name: "nativeDrop";
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
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IExecutor.NativeDropParams[]";
            readonly name: "_nativeDropParams";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "_nativeDropGasLimit";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_packet";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_gasLimit";
            readonly type: "uint256";
        }];
        readonly name: "nativeDropAndExecute301";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IExecutor.NativeDropParams[]";
            readonly name: "_nativeDropParams";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "_nativeDropGasLimit";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
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
                readonly internalType: "bytes32";
                readonly name: "guid";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes";
                readonly name: "message";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraData";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "gasLimit";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IExecutor.ExecutionParams";
            readonly name: "_executionParams";
            readonly type: "tuple";
        }];
        readonly name: "nativeDropAndExecute302";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_receiveUln301";
            readonly type: "address";
        }];
        readonly name: "onUpgrade";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "paused";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "priceFeed";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "receiveUln301";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "renounceRole";
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "revokeRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_multiplierBps";
            readonly type: "uint16";
        }];
        readonly name: "setDefaultMultiplierBps";
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
                readonly internalType: "uint64";
                readonly name: "baseGas";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint16";
                readonly name: "multiplierBps";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint128";
                readonly name: "floorMarginUSD";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "nativeCap";
                readonly type: "uint128";
            }];
            readonly internalType: "struct IExecutor.DstConfigParam[]";
            readonly name: "_params";
            readonly type: "tuple[]";
        }];
        readonly name: "setDstConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "_paused";
            readonly type: "bool";
        }];
        readonly name: "setPaused";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_priceFeed";
            readonly type: "address";
        }];
        readonly name: "setPriceFeed";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_eid";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint8[]";
            readonly name: "_optionTypes";
            readonly type: "uint8[]";
        }];
        readonly name: "setSupportedOptionTypes";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_workerFeeLib";
            readonly type: "address";
        }];
        readonly name: "setWorkerFeeLib";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
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
            readonly name: "_lib";
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
        readonly name: "withdrawFee";
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
        readonly name: "withdrawToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "workerFeeLib";
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
            readonly name: "_logic";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "admin_";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly stateMutability: "payable";
        readonly type: "constructor";
    }];
    static createInterface(): ExecutorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Executor;
}

type index_ERC20__factory = ERC20__factory;
declare const index_ERC20__factory: typeof ERC20__factory;
type index_Executor__factory = Executor__factory;
declare const index_Executor__factory: typeof Executor__factory;
declare namespace index {
  export {
    index_ERC20__factory as ERC20__factory,
    index_Executor__factory as Executor__factory,
  };
}

export { ERC20, ERC20__factory, Executor, Executor__factory, index as factories };
