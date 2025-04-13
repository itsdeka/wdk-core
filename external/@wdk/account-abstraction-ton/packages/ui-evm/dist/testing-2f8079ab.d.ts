import { ChainKey } from '@layerzerolabs/ui-core';
import { BaseProvider, Network } from '@ethersproject/providers';

declare class ProxyBaseProvider<TProvider extends BaseProvider> extends BaseProvider {
    protected providerPromise: Promise<TProvider>;
    constructor(providerPromise: Promise<TProvider>);
    detectNetwork(): Promise<Network>;
    perform(method: string, params: any): Promise<any>;
}

interface TestingFork {
    start: () => Promise<void>;
    stop: () => Promise<void>;
}
type TestingSdk<T extends TestingFork> = {
    createFork: (input: {
        chainKey: ChainKey;
    }) => Promise<T>;
};
type TestingProvider = BaseProvider & {
    startFork(): Promise<unknown>;
    stopFork(): Promise<unknown>;
    setBalance: (address: string, amount: number | bigint) => Promise<void>;
    addBalance: (address: string, amount: number | bigint) => Promise<void>;
    setErc20Balance: (token: string, wallet: string, value: number | bigint) => Promise<void>;
};
declare class TestingProxyProvider<TProvider extends TestingProvider> extends ProxyBaseProvider<TProvider> implements TestingProvider {
    startFork(): Promise<unknown>;
    stopFork(): Promise<unknown>;
    setBalance(address: string, amount: number | bigint): Promise<void>;
    addBalance(address: string, amount: number | bigint): Promise<void>;
    setErc20Balance(token: string, wallet: string, value: number | bigint): Promise<void>;
}

export { TestingProvider as T, TestingFork as a, TestingSdk as b, TestingProxyProvider as c };
