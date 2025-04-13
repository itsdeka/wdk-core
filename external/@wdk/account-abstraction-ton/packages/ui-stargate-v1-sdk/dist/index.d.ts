import { StargateVersion } from '@layerzerolabs/ui-stargate';
import { Token, Currency, ChainKey, CurrencyAmount, Transaction, FeeQuote, AdapterParams } from '@layerzerolabs/ui-core';
import { BridgeApi, GetOptionsInput, BridgeOptions, GetAllowanceInput, ApproveInput, IsRegisteredInput, GetUnclaimedInput, ClaimInput, RegisterInput, TransferInput, GetMessageFeeInput, GetOutputInput, BridgeOutput, GetLimitInput, GetExtraGasInput, GetDurationInput } from '@layerzerolabs/ui-bridge-sdk/v1';
import { ProviderFactory, ERC20__api } from '@layerzerolabs/ui-evm';
import { Signer } from 'ethers';
import { d as StargateFeeLibrary, I as IStargateRouter, c as Router, g as IStargateWidget, f as StargateWidget } from './StargateWidget-25f8a83a.js';
import '@ethersproject/abi';
import '@ethersproject/providers';

type Contract = {
    address: string;
    chainKey: ChainKey;
};
type ChainPath = {
    srcEid: number;
    dstEid: number;
    srcPoolId: number;
    dstPoolId: number;
    ready: boolean;
    weight: number;
};
type StargateV1Pool = {
    eid: number;
    address: string;
    poolId: number;
    lpToken: Token;
    token: Currency;
    stargateVersion: typeof StargateVersion.V1;
    chainKey: ChainKey;
    symbol: string;
    decimals: number;
    sharedDecimals: number;
    disabled?: boolean;
};
type Deployment = {
    eid: number;
    chainKey: ChainKey;
    router?: Contract;
    routerEth?: Contract;
    bridge?: Contract;
    factory?: Contract;
    poolView?: Contract;
    lpStaking?: Contract[];
    lpStakingTime?: Contract[];
    stargateToken?: Token;
    stargatePreCrime?: Contract;
};
type Rule = {
    srcPoolId?: number;
    dstPoolId?: number;
    srcChainKey?: ChainKey;
    dstChainKey?: ChainKey;
    disabled: boolean;
};
type StargateV1Config = {
    deployments: {
        [chainKey in ChainKey]: Deployment;
    };
    chainPaths: ChainPath[];
    pools: StargateV1Pool[];
    rules: Rule[];
};

declare const mainnet: StargateV1Config;

declare const testnet: StargateV1Config;

declare class StargateV1Sdk {
    readonly config: StargateV1Config;
    protected poolLinks: PoolLink[];
    protected endpointIdToChainKeyMap: Map<number, string>;
    protected log: Console;
    constructor(config: StargateV1Config);
    update(config: StargateV1Config): void;
    tryGetDeployment(chainKey: string): Deployment;
    getDeployment(chainKey: string): Deployment;
    private updateEndpointIdToChainKeyMap;
    chainKeyToEndpointId(chainKey: ChainKey): number;
    endpointIdToChainKey(endpointId: number): string;
    private updateChainPaths;
    tryGetPool(poolLike: PoolLike | ContractLike): StargateV1Pool | undefined;
    getPool(poolLike: PoolLike | ContractLike): StargateV1Pool;
    getActiveLinks: () => PoolLink[];
    getLinks: () => PoolLink[];
    getPools: () => StargateV1Pool[];
    getLink: (srcToken: Currency, dstToken: Currency) => PoolLink;
    tryGetLink: (srcToken?: Currency, dstToken?: Currency) => PoolLink | undefined;
    tryGetPath: (srcToken?: Currency, dstToken?: Currency) => ChainPath | undefined;
    getPath: (srcToken: Currency, dstToken: Currency) => ChainPath;
    tryGetRouterAddress(chainKey: ChainKey): string | undefined;
    getRouterAddress: (chainKey: ChainKey) => string;
    tryGetRouterEthAddress(chainKey: ChainKey): string | undefined;
    getRouterEthAddress: (chainKey: ChainKey) => string;
    isPathDisabled(srcPool: PoolLike, dstPool: PoolLike): boolean;
    getWidgetAddress: (chainKey: ChainKey) => string;
    tryGetWidgetAddress: (chainKey: ChainKey) => string | undefined;
    get pools(): StargateV1Pool[];
}
type PoolLike = {
    chainKey: ChainKey;
    poolId: number;
};
type ContractLike = {
    chainKey: ChainKey;
    address: string;
};
type PoolLink = {
    disabled: boolean;
    srcPool: StargateV1Pool;
    dstPool: StargateV1Pool;
    chainPath: ChainPath;
};

type StargateV1Fee = {
    totalFee: CurrencyAmount;
    eqFee: CurrencyAmount;
    eqReward: CurrencyAmount;
    lpFee: CurrencyAmount;
    protocolFee: CurrencyAmount;
    lkbRemove: CurrencyAmount;
};
declare class StargateV1Bridge implements BridgeApi<Signer, StargateV1Fee> {
    protected readonly providerFactory: ProviderFactory;
    readonly sdk: StargateV1Sdk;
    protected feeLibraryCache: Map<string, StargateFeeLibrary>;
    protected readonly erc20: ERC20__api;
    constructor(providerFactory: ProviderFactory, sdk: StargateV1Sdk);
    getOptions(input: GetOptionsInput): Promise<BridgeOptions>;
    getAllowance({ token, address }: GetAllowanceInput): Promise<CurrencyAmount>;
    approve({ amount }: ApproveInput): Promise<Transaction<Signer>>;
    supportsTransfer(srcToken: Currency, dstToken: Currency): boolean;
    supportsClaim(token: Currency): boolean;
    supportsRegister(token: Currency): boolean;
    isRegistered(input: IsRegisteredInput): Promise<boolean>;
    getUnclaimed({ token: currency }: GetUnclaimedInput): Promise<CurrencyAmount<Currency>>;
    claim(input: ClaimInput): Promise<Transaction<Signer>>;
    register(input: RegisterInput): Promise<Transaction<Signer>>;
    protected validateInput(input: TransferInput): void;
    transfer(input: TransferInput): Promise<Transaction<Signer>>;
    protected transferEth(input: TransferInput): Promise<Transaction<Signer>>;
    protected transferToken(input: TransferInput): Promise<Transaction<Signer>>;
    getMessageFee({ srcToken, dstToken, adapterParams }: GetMessageFeeInput): Promise<FeeQuote>;
    protected lzTxParams(adapterParams: AdapterParams): IStargateRouter.LzTxObjStruct;
    protected getFeeLibraryAddress: (lpToken: Token) => Promise<string>;
    protected getFeeLibrary(lpToken: Token): Promise<StargateFeeLibrary>;
    getOutput({ srcAmount: inputAmountLD, dstToken, }: GetOutputInput): Promise<BridgeOutput<StargateV1Fee>>;
    getLimit({ srcToken, dstToken }: GetLimitInput): Promise<CurrencyAmount<Currency>>;
    getExtraGas(input: GetExtraGasInput): Promise<number>;
    getDuration(input: GetDurationInput): Promise<number>;
    protected chainKeyToEndpointId(chainKey: string): number;
    protected getRouterContract(chainKey: string): Router;
}

type PartnerConfig = {
    partnerId: number;
    tenthBps: number;
    feeCollector: string;
};
type StargateWidgetFee = {
    totalFee: CurrencyAmount;
    eqFee: CurrencyAmount;
    eqReward: CurrencyAmount;
    lpFee: CurrencyAmount;
    protocolFee: CurrencyAmount;
    lkbRemove: CurrencyAmount;
    partnerFee: CurrencyAmount;
};
declare class StargateV1WidgetBridge extends StargateV1Bridge implements BridgeApi<Signer, StargateWidgetFee> {
    protected partnerConfig: PartnerConfig;
    private readonly tenthBpsDenominator;
    constructor(providerFactory: ProviderFactory, sdk: StargateV1Sdk, partnerConfig: PartnerConfig);
    private getPartnerFee;
    getAllowance({ token, address }: GetAllowanceInput): Promise<CurrencyAmount>;
    approve({ amount }: ApproveInput): Promise<Transaction<Signer>>;
    getOutput({ srcAmount: inputAmountLD, dstToken, }: GetOutputInput): Promise<BridgeOutput<StargateWidgetFee>>;
    protected transferEth(input: TransferInput): Promise<Transaction<Signer>>;
    get feeObj(): IStargateWidget.FeeObjStruct;
    getMessageFee({ srcToken, dstToken, adapterParams }: GetMessageFeeInput): Promise<FeeQuote>;
    protected transferToken(input: TransferInput): Promise<Transaction<Signer>>;
    getWidgetContract(chainKey: ChainKey): StargateWidget;
}

declare function getChainPaths(pool: Pick<StargateV1Pool, 'address' | 'chainKey' | 'eid'>, providerFactory: ProviderFactory): Promise<ChainPath[]>;

export { StargateV1Bridge, StargateV1Config, StargateV1Pool, StargateV1Sdk, StargateV1WidgetBridge, getChainPaths, mainnet, testnet };
