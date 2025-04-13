import { Stage, ChainKey } from '@layerzerolabs/ui-core';
import { AbstractWallet } from '@layerzerolabs/ui-wallet';
import TonConnect, { Wallet } from '@tonconnect/sdk';
import { Address } from '@ton/ton';
import { TonSigner as TonSigner$1, TonTransaction } from '@layerzerolabs/ui-ton';
import { TonConnectUI } from '@tonconnect/ui';

declare class TonSigner implements TonSigner$1 {
    readonly adapter: TonConnect | TonConnectUI;
    constructor(adapter: TonConnect | TonConnectUI);
    sendTransaction: (payload: TonTransaction) => Promise<string>;
    signTransaction<Transaction extends TonTransaction>(payload: Transaction): Promise<Transaction>;
    getAddress(): Address;
}
interface TonConnectionOptions {
    iconSrc: string;
    name: string;
    stage: Stage;
    chainKey: ChainKey;
    jsBridgeKey: string;
    aboutUrl: string;
}
declare class TonWallet extends AbstractWallet<unknown> {
    tonWallet?: Wallet;
    signer?: TonSigner;
    readonly chainType: "ton";
    chainKey: ChainKey;
    tonConnector?: TonConnect;
    connectionPromise?: {
        resolve: () => void;
        reject: () => void;
    };
    connectionOptions: TonConnectionOptions;
    constructor(connectionOptions: TonConnectionOptions);
    init(): Promise<void>;
    setAddress(address: Address | string): void;
    getAddress(): Promise<string>;
    getNativeChainId(): Promise<number>;
    get icon(): string;
    get type(): string;
    connect(): Promise<void>;
    private isCurrentWalletConnecting;
    autoConnect: () => Promise<void>;
    disconnect(): Promise<void>;
    switchChain(chainKey: ChainKey): Promise<void>;
}

declare class UiTonWallet extends AbstractWallet<unknown> {
    tonWallet?: Wallet;
    signer?: TonSigner;
    readonly chainType: "ton";
    chainKey: ChainKey;
    tonConnectUI: TonConnectUI;
    connectionOptions: TonConnectionOptions;
    isAvailable: boolean;
    protected get isAutoConnectEnabled(): boolean;
    constructor(connectionOptions: TonConnectionOptions);
    get icon(): string;
    get type(): string;
    connect(): Promise<void>;
    autoConnect: () => Promise<void>;
    disconnect(): Promise<void>;
    init(): Promise<void>;
    getAddress(): Promise<string>;
    getNativeChainId(): Promise<number>;
    switchChain(chainKey: string): Promise<void>;
}

export { TonConnectionOptions, TonSigner, TonWallet, UiTonWallet };
