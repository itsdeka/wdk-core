import { AdapterPlugin, AccountInfo, NetworkInfo, NetworkName } from '@aptos-labs/wallet-adapter-core';
import { AptosNativeChainId, AptosSigner as AptosSigner$1, AptosTransaction, AptosSubmitOptions } from '@layerzerolabs/ui-aptos';
import { ChainKey } from '@layerzerolabs/ui-core';
import { AbstractWallet } from '@layerzerolabs/ui-wallet';

declare class AptosSigner implements AptosSigner$1 {
    readonly adapter: Adapter;
    constructor(adapter: Adapter);
    sendTransaction: (payload: AptosTransaction, options: AptosSubmitOptions) => Promise<{
        hash: string;
    }>;
}
type Adapter = Omit<AdapterPlugin<string>, 'network' | 'connect' | 'disconnect' | 'signMessage'> & {
    connect: () => Promise<AccountInfo>;
    account: () => Promise<AccountInfo>;
    disconnect: () => Promise<void>;
    network: () => Promise<NetworkInfo | NetworkName>;
};
declare class AptosWallet extends AbstractWallet<AptosSigner> {
    readonly type: string;
    readonly chainType: "aptos";
    nativeChainId: AptosNativeChainId | undefined;
    networkInfo: NetworkInfo | undefined;
    signer?: AptosSigner | undefined;
    adapterPromise: Promise<Adapter>;
    adapter: Adapter | undefined;
    constructor(type: string, adapterOrFactoryPromise: ValueOrPromise<Adapter> | (() => Adapter));
    protected updateAccount: (account: AccountInfo) => void;
    protected updateNetwork: (network: NetworkInfo) => Promise<void>;
    protected updateAdapter: (adapter: Adapter) => void;
    private subscribe;
    autoConnect: () => Promise<void>;
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
    switchChain: (chainKey: ChainKey) => Promise<void>;
    getNativeChainId(): Promise<number>;
    getAddress(): Promise<string>;
    protected mapNativeChainId(networkInfo?: NetworkInfo): AptosNativeChainId | undefined;
    get chainKey(): ChainKey | undefined;
}
type ValueOrPromise<T> = T | Promise<T>;

export { Adapter, AptosWallet };
