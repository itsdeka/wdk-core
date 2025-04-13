import { Wallet, AbstractWallet } from '@layerzerolabs/ui-wallet';
import { ChainKey } from '@layerzerolabs/ui-core';
import { MainWalletBase, State } from '@cosmos-kit/core';

type CosmosSigner = MainWalletBase;

declare const defaultCosmosWalletConfig: {
    defaultChainKey: string;
};
type BaseWallet = Wallet<CosmosSigner>;
type CosmosWalletConfig<TWallet extends MainWalletBase = MainWalletBase> = {
    wallet: TWallet;
    defaultChainKey?: ChainKey;
};
declare abstract class CosmosWallet<TWallet extends MainWalletBase = MainWalletBase> extends AbstractWallet<CosmosSigner> {
    protected readonly config: CosmosWalletConfig<TWallet>;
    readonly chainType: any;
    abstract type: string;
    chainKey: ChainKey | undefined;
    protected wallet: TWallet;
    protected unsubscribe: () => void;
    get url(): string | undefined;
    get icon(): string | undefined;
    protected log: Console;
    protected state: State;
    constructor(config: CosmosWalletConfig<TWallet>);
    protected subscribe(): void;
    protected update: () => void;
    connect: BaseWallet['connect'];
    disconnect: BaseWallet['disconnect'];
    switchChain: BaseWallet['switchChain'];
    getNativeChainId(): Promise<number>;
    getAddress(): Promise<string>;
    autoConnect: () => Promise<undefined>;
    get signer(): CosmosSigner;
    set signer(value: unknown);
}

declare class CosmosMetaMaskWallet extends CosmosWallet {
    readonly type = "MetaMask";
}

declare class KeplrWallet extends CosmosWallet {
    readonly type = "Keplr";
}

declare class LeapWallet extends CosmosWallet {
    readonly type = "Leap";
}

export { BaseWallet, CosmosMetaMaskWallet, CosmosWallet, CosmosWalletConfig, KeplrWallet, LeapWallet, defaultCosmosWalletConfig };
