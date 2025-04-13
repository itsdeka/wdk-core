import { ChainKey, RpcMap, Rpc } from '@layerzerolabs/ui-core';
import { providers } from '@0xsequence/multicall';
import { BaseProvider, Provider, Network } from '@ethersproject/providers';
import { ConnectionInfo } from 'ethers/lib/utils';

type FailoverProviderConfig = {
    provider: BaseProvider;
};
type FailoverProviderEntry = {
    provider: BaseProvider;
    errors: any[];
};
declare class FailoverProvider extends BaseProvider {
    readonly maxAttempts = 3;
    readonly providerConfigs: ReadonlyArray<FailoverProviderConfig>;
    readonly providerEntries: Map<Provider, FailoverProviderEntry>;
    readonly orderedProviderEntries: FailoverProviderEntry[];
    constructor(providers: Array<BaseProvider | FailoverProviderConfig>, network: Network);
    detectNetwork(): Promise<Network>;
    perform(method: string, params: {
        [name: string]: any;
    }): Promise<any>;
    private getProvider;
    private handleError;
    private getEntry;
    private updateOrder;
}

type ProviderFactory<T extends BaseProvider = BaseProvider> = (chainKey: ChainKey) => T;
/**
 * Wraps a ProviderFactory in a multicall provider,
 * batching RPC requests instead of sending them one by one
 *
 * @param factory ProviderFactory to be used to fire the batched requests
 *
 * @returns
 */
declare const createMulticallProviderFactory: (factory: ProviderFactory, multicall?: ConstructorParameters<typeof providers.MulticallProvider>[1]) => ProviderFactory<providers.MulticallProvider>;
declare const createFailoverProviderFactory: (rpcMap?: RpcMap, options?: FailoverProviderOptions) => ProviderFactory<FailoverProvider>;
type FailoverProviderOptions = {
    onError?: (error: unknown) => void;
    onDebug?: (error: unknown) => void;
    connectionInfo?: (rpc: Rpc, chainKey: ChainKey) => ConnectionInfo;
};
declare const multicallDeployments: {
    [chainKey in ChainKey]?: string;
};

export { FailoverProvider as F, ProviderFactory as P, createFailoverProviderFactory as a, createMulticallProviderFactory as c, multicallDeployments as m };
