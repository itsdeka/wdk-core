import http from 'redaxios';
import { BaseProvider, JsonRpcProvider, Network } from '@ethersproject/providers';
import { ChainKey } from '@layerzerolabs/ui-core';
import { P as ProviderFactory } from './providerFactory-d4a2e709.js';
import { T as TestingProvider, b as TestingSdk, a as TestingFork, c as TestingProxyProvider } from './testing-2f8079ab.js';
import '@0xsequence/multicall';
import 'ethers/lib/utils';

type HttpClient = ReturnType<typeof http.create>;
declare class TenderlyProvider extends BaseProvider implements TestingProvider {
    readonly fork: TenderlyFork;
    readonly options: TenderlyProviderOptions;
    protected jsonRpcProvider: JsonRpcProvider;
    constructor(fork: TenderlyFork, options?: TenderlyProviderOptions);
    startFork(): Promise<void>;
    stopFork(): Promise<void>;
    detectNetwork(): Promise<Network>;
    perform(method: string, params: any): Promise<any>;
    addBalance(address: string, amount: number | bigint): Promise<any>;
    setBalance(minterAddress: string, amount: number | bigint): Promise<any>;
    setErc20Balance(token: string, wallet: string, value: number | bigint): Promise<any>;
}
interface TenderlyProviderOptions {
    timeout?: number;
}
interface TenderlyConfig {
    user: string;
    project: string;
    accessKey: string;
}
declare class TenderlySdk implements TestingSdk<TenderlyFork> {
    private readonly config;
    protected readonly http: ReturnType<typeof http.create>;
    constructor(config: TenderlyConfig);
    createFork(input: TenderlyForkConfig): Promise<TenderlyFork>;
}
declare enum TenderlyForkStatus {
    UNINITIALIZED = "uninitialized",
    STARTING = "starting",
    STARTED = "started",
    STOPPED = "stopped"
}
declare class TenderlyFork implements TestingFork {
    readonly tenderlyConfig: TenderlyConfig;
    readonly forkConfig: TenderlyForkConfig;
    protected _http: HttpClient;
    protected _forkData: TenderlyForkData | undefined;
    protected _status: TenderlyForkStatus;
    constructor(tenderlyConfig: TenderlyConfig, forkConfig: TenderlyForkConfig);
    start(): Promise<void>;
    stop(): Promise<void>;
    get status(): TenderlyForkStatus;
    get forkUrl(): string | undefined;
    get forkData(): TenderlyForkData | undefined;
    get forkId(): string | undefined;
    protected get projectUri(): string;
}
interface TenderlyForkConfig {
    chainKey: ChainKey;
}
interface TenderlyForkData {
    simulation_fork: {
        id: string;
        project_id: string;
        network_id: string;
        block_number: number;
        transaction_index: number;
        chain_config: ChainConfig;
        fork_config: any;
        created_at: string;
        accounts: Record<string, string>;
        current_block_number: number;
        shared: boolean;
    };
}
interface ChainConfig {
    type: string;
    chain_id: number;
}
declare const tenderlyChains: ChainKey[];
declare const createTenderlyProviderFactory: (tenderlySdk: TenderlySdk) => ProviderFactory<TenderlyProxyProvider>;
type TenderlyProxyProvider = TestingProxyProvider<TenderlyProvider>;

export { ChainConfig, TenderlyConfig, TenderlyFork, TenderlyForkConfig, TenderlyForkStatus, TenderlyProvider, TenderlySdk, createTenderlyProviderFactory, tenderlyChains };
