import { JsonRpcProvider } from '@ethersproject/providers';
import { T as TestingProvider, a as TestingFork, b as TestingSdk, c as TestingProxyProvider } from './testing-2f8079ab.js';
import { ChainKey } from '@layerzerolabs/ui-core';
import { Anvil, CreateAnvilOptions } from '@viem/anvil';
import { P as ProviderFactory } from './providerFactory-d4a2e709.js';
import '@0xsequence/multicall';
import 'ethers/lib/utils';

declare class AnvilProvider extends JsonRpcProvider implements TestingProvider {
    readonly fork: AnvilFork;
    protected _started: boolean;
    constructor(fork: AnvilFork);
    startFork(): Promise<void>;
    stopFork(): Promise<void>;
    addBalance(address: string, amount: number | bigint): Promise<any>;
    setBalance(address: string, amount: number | bigint): Promise<any>;
    getErc20Balance(contract: string, wallet: string): any;
    setErc20Balance(token: string, wallet: string, value: number | bigint): Promise<void>;
}
declare class AnvilFork implements TestingFork {
    protected readonly anvil: Anvil;
    constructor(anvil: Anvil, anvilSdk?: AnvilSdk);
    start(): Promise<void>;
    stop(): Promise<void>;
    get forkUrl(): string;
}
interface AnvilSdkOptions {
    log?: boolean;
    chains: Record<ChainKey, CreateAnvilOptions>;
}
declare class AnvilSdk implements TestingSdk<AnvilFork> {
    readonly options: AnvilSdkOptions;
    protected logger: typeof console | undefined;
    constructor(options: AnvilSdkOptions);
    protected getAnvilOptions(chainKey: ChainKey): CreateAnvilOptions;
    createFork(input: {
        chainKey: ChainKey;
    }): Promise<AnvilFork>;
}
type AnvilProxyProvider = TestingProxyProvider<AnvilProvider>;
declare const createAnvilProviderFactory: (anvilSdk: AnvilSdk) => ProviderFactory<AnvilProxyProvider>;

export { AnvilFork, AnvilProvider, AnvilSdk, createAnvilProviderFactory };
