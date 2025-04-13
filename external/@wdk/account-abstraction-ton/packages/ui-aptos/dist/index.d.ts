import { Types, AptosClient, MaybeHexString, BCS, HexString } from 'aptos';
import * as _layerzerolabs_ui_core from '@layerzerolabs/ui-core';
import { Transaction, ChainKey, BalanceProvider, Currency, CurrencyAmount, ResourceProvider } from '@layerzerolabs/ui-core';

type AptosTransaction = Types.TransactionPayload;
type AptosSubmitOptions = {};
type AptosSigner = {
    sendTransaction(payload: Types.TransactionPayload, options?: AptosSubmitOptions): Promise<{
        hash: string;
    }>;
};

declare function createTransaction(entryFunctionPayload: Types.EntryFunctionPayload, { client: aptosClient }: {
    client: AptosClient;
}): Transaction<AptosSigner, {
    function: string;
    type_arguments: Array<string>;
    arguments: Array<any>;
}>;

declare function isAptosAddress(address: unknown): boolean;

declare function isErrorOfResourceNotFound(e: any): boolean;
declare function isErrorOfTableItemNotFound(e: any): boolean;
declare function isErrorOfAccountNotFound(e: any): boolean;

declare class AptosResourceProvider {
    private readonly aptosClient;
    readonly getAccountResources: AptosClient['getAccountResources'];
    constructor(aptosClient: AptosClient, cacheMs?: number);
}

type GetAptosClientFunction = (chainKey: ChainKey) => AptosClient;

declare class BalanceProvider__aptos implements BalanceProvider {
    private readonly getAptosClient;
    protected readonly endpointVersion = 1;
    private readonly resourceProviders;
    constructor(getAptosClient: GetAptosClientFunction);
    supports(token: Currency): boolean;
    protected getResourceProvider(chainKey: ChainKey): AptosResourceProvider;
    getBalance(token: Currency, address: string): Promise<CurrencyAmount<_layerzerolabs_ui_core.Token>>;
}

declare class AptosManagedCoinRegisterService {
    private readonly aptosClient;
    private readonly resourceProvider;
    constructor(aptosClient: AptosClient, resourceProvider: AptosResourceProvider);
    isRegistered(resource: Currency, address: string): Promise<boolean>;
    registerCoin(token: Currency): Promise<Transaction<AptosSigner>>;
}

declare class ResourceProvider__currency_aptos implements ResourceProvider<AptosSigner, Currency> {
    private readonly service;
    constructor(service: AptosManagedCoinRegisterService);
    supports(resource: unknown): resource is Currency;
    register(resource: Currency): Promise<Transaction<AptosSigner>>;
    isRegistered(resource: Currency, address: string): Promise<boolean>;
    getType(resource: Currency): string;
}

type AptosNetworkConfigs = Partial<Record<ChainKey, AptosNetworkConfig>>;
interface AptosNetworkConfig {
    nodeUrl: string;
    executorAccount: string;
}

declare enum AptosNativeChainId {
    MAINNET = 1,
    TESTNET = 2
}

declare function getUlnFee(client: AptosClient, accounts: Accounts, uaAddress: MaybeHexString, dstEid: BCS.Uint16, payloadSize: number, query?: Query): Promise<bigint>;
declare function getMsgLibGlobalStore(client: AptosClient, accounts: Accounts, query?: Query): Promise<{
    type: string;
    data: {};
}>;
declare function getAppConfig(client: AptosClient, accounts: Accounts, uaAddress: MaybeHexString, dstEid: BCS.Uint16, query?: Query): Promise<UlnConfigType>;
declare function getUlnSignerFee(client: AptosClient, accounts: Accounts, address: MaybeHexString, dstEid: BCS.Uint16, query?: Query): Promise<{
    base_fee: bigint;
    fee_per_byte: bigint;
}>;
declare function getExecutorFee(client: AptosClient, accounts: Accounts, uaAddress: MaybeHexString, dstEid: BCS.Uint16, adapterParams: BCS.Bytes, query?: Query): Promise<bigint>;
declare function getExecutor(client: AptosClient, accounts: Accounts, uaAddress: MaybeHexString, dstEid: BCS.Uint16, query?: Query): Promise<[string, BCS.Uint64]>;
declare function getMinDstGas(client: AptosClient, accounts: Accounts, uaAddress: MaybeHexString, dstEid: BCS.Uint16, packetType: BCS.Uint64): Promise<BCS.Uint64>;
declare function getConfiguredExecutor(client: AptosClient, accounts: Accounts, uaAddress: MaybeHexString, dstEid: BCS.Uint16, query?: Query): Promise<[string, BCS.Uint64]>;
declare function getDefaultExecutor(client: AptosClient, accounts: Accounts, dstEid: BCS.Uint16): Promise<[string, BCS.Uint64]>;
declare function decodeAdapterParams(adapterParams: BCS.Bytes): [type: BCS.Uint16, uaGas: BCS.Uint64, airdropAmount: BCS.Uint64, airdropAddress: string];
declare function buildAirdropAdapterParams(uaGas: BCS.Uint64 | BCS.Uint32, airdropAmount: BCS.Uint64 | BCS.Uint32, airdropAddress: string): BCS.Bytes;
declare function buildDefaultAdapterParams(uaGas: BCS.Uint64 | BCS.Uint32): BCS.Bytes;
declare function convertUint64ToBytes(number: BCS.Uint64 | BCS.Uint32): BCS.Bytes;
declare function convertBytesToUint64(bytes: BCS.Bytes): BCS.Uint64;
declare function isErrorOfApiError(e: any, status: number): boolean;
type Accounts = {
    layerzero_apps: {
        address: MaybeHexString;
    };
    layerzero: {
        address: MaybeHexString;
    };
    executor?: {
        address: MaybeHexString;
        version: bigint;
    };
};
declare function getMessageFee(client: AptosClient, accounts: Accounts, uaAddress: MaybeHexString, dstEid: BCS.Uint16, adapterParams: BCS.Bytes, payloadSize: number, query?: Query): Promise<BCS.Uint64>;
declare function getDefaultAppConfig(client: AptosClient, accounts: Accounts, remoteEid: BCS.Uint16, query?: Query): Promise<UlnConfigType>;
interface UlnConfigType {
    inbound_confirmations: BCS.Uint64 | BCS.Uint32;
    oracle: MaybeHexString;
    outbound_confirmations: BCS.Uint64 | BCS.Uint32;
    relayer: MaybeHexString;
}
declare function fullAddress(address: string | HexString): HexString;
interface ExecutorFee {
    airdropAmtCap: BCS.Uint64;
    priceRatio: BCS.Uint64;
    gasPrice: BCS.Uint64;
}
interface Query {
    ledgerVersion?: bigint | number;
}

export { Accounts, AptosManagedCoinRegisterService, AptosNativeChainId, AptosNetworkConfig, AptosNetworkConfigs, AptosResourceProvider, AptosSigner, AptosSubmitOptions, AptosTransaction, BalanceProvider__aptos, ExecutorFee, GetAptosClientFunction, Query, ResourceProvider__currency_aptos, UlnConfigType, buildAirdropAdapterParams, buildDefaultAdapterParams, convertBytesToUint64, convertUint64ToBytes, createTransaction, decodeAdapterParams, fullAddress, getAppConfig, getConfiguredExecutor, getDefaultAppConfig, getDefaultExecutor, getExecutor, getExecutorFee, getMessageFee, getMinDstGas, getMsgLibGlobalStore, getUlnFee, getUlnSignerFee, isAptosAddress, isErrorOfAccountNotFound, isErrorOfApiError, isErrorOfResourceNotFound, isErrorOfTableItemNotFound };
