import { EIP1193Provider, AccountsListener, MessageListener, ChainListener, ConnectListener, DisconnectListener } from '@web3-onboard/common';
export { createEIP1193Provider } from '@web3-onboard/common';
import { Signer, Wallet as Wallet$1 } from 'ethers';
import { Wallet, AbstractWallet } from '@layerzerolabs/ui-wallet';
import { ChainType, ChainKey, Network } from '@layerzerolabs/ui-core';
import * as mobx_dist_internal from 'mobx/dist/internal';
import EthereumProviderType, { EthereumProviderOptions } from '@walletconnect/ethereum-provider';
import { Store } from 'mipd';
import { Web3Provider } from '@ethersproject/providers';

declare function numberToHex(number: number): string;
declare function normalizeChainId(chainId: number | string): number;
declare function getSigner(provider: EIP1193Provider): Signer;
declare function getEIP1193Provider(identity: string, { patchProvider, ignoreFlags }?: {
    ignoreFlags?: string[];
    patchProvider?: boolean;
}): EIP1193Provider | undefined;

declare function patchEIP1193Provider(provider: EIP1193Provider): EIP1193Provider;

declare enum ProviderIdentityFlag {
    AlphaWallet = "isAlphaWallet",
    ApexWallet = "isApexWallet",
    AToken = "isAToken",
    BifrostWallet = "isBifrost",
    Binance = "bbcSignTx",
    Bitpie = "isBitpie",
    BlockWallet = "isBlockWallet",
    Coinbase = "isToshi",
    CoinbaseExtension = "isCoinbaseWallet",
    Detected = "request",
    Dcent = "isDcentWallet",
    Exodus = "isExodus",
    Frontier = "isFrontier",
    Frame = "isFrame",
    HuobiWallet = "isHbWallet",
    HyperPay = "isHyperPay",
    ImToken = "isImToken",
    InfinityWallet = "isInfinityWallet",
    Liquality = "isLiquality",
    MeetOne = "wallet",
    MetaMask = "isMetaMask",
    MyKey = "isMYKEY",
    OwnBit = "isOwnbit",
    Status = "isStatus",
    Trust = "isTrust",
    TokenPocket = "isTokenPocket",
    TP = "isTp",
    WalletIo = "isWalletIO",
    XDEFI = "isXDEFI",
    OneInch = "isOneInchIOSWallet",
    Tokenary = "isTokenary",
    Taho = "isTally",
    BraveWallet = "isBraveWallet",
    Rabby = "isRabby",
    MathWallet = "isMathWallet",
    GameStop = "isGamestop",
    BitKeep = "isBitKeep",
    Sequence = "isSequence",
    Core = "isAvalanche",
    Opera = "isOpera",
    Bitski = "isBitski",
    Enkrypt = "isEnkrypt",
    Phantom = "isPhantom",
    OKXWallet = "isOkxWallet",
    Zeal = "isZeal",
    Zerion = "isZerion",
    Rainbow = "isRainbow",
    SafePal = "isSafePal",
    DeFiWallet = "isDeficonnectProvider",
    Safeheron = "isSafeheron"
}

type EvmSigner = Signer;

type BaseWallet = Wallet<EvmSigner>;
type EvmWalletConfig = {
    switchChainTimeout: number;
};
declare abstract class EvmWallet extends AbstractWallet<EvmSigner> {
    chainType: ChainType;
    abstract type: string;
    abstract autoConnect: () => Promise<void>;
    provider: EIP1193Provider | undefined;
    accounts: string[];
    protected config: EvmWalletConfig;
    get chainKey(): ChainKey | undefined;
    signer: Signer | undefined;
    protected log: Console;
    protected unsubscribe: () => void;
    protected subscribe(provider: EIP1193Provider): void;
    protected handleChange: (change: unknown) => void;
    protected handleAccountsChanged: AccountsListener;
    protected handleMessage: MessageListener;
    protected handleChainChanged: ChainListener;
    protected handleConnect: ConnectListener;
    protected handleDisconnect: DisconnectListener;
    protected eth_requestAccounts(): Promise<string[]>;
    protected accountsPromise: Promise<string[]> | undefined;
    protected nativeChainIdPromise: Promise<number> | undefined;
    getAccounts: () => Promise<string[]>;
    connect: BaseWallet['connect'];
    disconnect: BaseWallet['disconnect'];
    switchChain: BaseWallet['switchChain'];
    getNativeChainId(): Promise<number>;
    getAddress(): Promise<string>;
    getRpcUrls(chainKey: ChainKey): Promise<string[]>;
    protected getBlockExplorerUrls(chainKey: ChainKey): string[];
    protected switchEthereumChain(chain: Network): Promise<unknown>;
    protected addEthereumChain(chain: Network): Promise<unknown>;
    protected getConfig(): EvmWalletConfig;
}

declare class EvmDebugWallet extends AbstractWallet<Signer> {
    protected wallet: Wallet$1;
    readonly chainType = "evm";
    readonly type = "debug";
    chainKey: ChainKey | undefined;
    isAvailable: boolean;
    isConnected: boolean;
    nativeChainId: number | undefined;
    address: string | undefined;
    readonly signer: Signer;
    constructor(wallet: Wallet$1);
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    autoConnect(): Promise<void>;
    switchChain(chainKey: string): Promise<void>;
    getNativeChainId(): Promise<number>;
    getAddress(): Promise<string>;
}

declare const DETECT_INTERVAL = 100;
declare const DETECT_TIMEOUT = 5000;
declare abstract class InjectedWallet extends EvmWallet {
    abstract readonly identityFlag: ProviderIdentityFlag;
    protected providerPromise: Promise<EIP1193Provider>;
    autoConnect: () => Promise<void>;
    constructor();
    protected detectProvider(): Promise<EIP1193Provider>;
    protected tryGetProvider(): EIP1193Provider | undefined;
}
declare class MetaMaskWallet extends InjectedWallet {
    type: string;
    identityFlag: ProviderIdentityFlag;
    readonly url = "https://metamask.io";
    readonly icon = "https://icons-ckg.pages.dev/lz-light/wallets/metamask.svg";
    protected tryGetProvider(): EIP1193Provider | undefined;
    protected handleDisconnect: DisconnectListener;
}
declare class CoinbaseWallet extends InjectedWallet {
    type: string;
    identityFlag: ProviderIdentityFlag;
    readonly url = "https://www.coinbase.com/wallet";
    readonly icon = "https://icons-ckg.pages.dev/lz-light/wallets/coinbase.svg";
}
declare class CoreWallet extends InjectedWallet {
    type: string;
    identityFlag: ProviderIdentityFlag;
    readonly url = "https://core.app/";
    readonly icon = "https://icons-ckg.pages.dev/lz-light/wallets/core.svg";
}
declare class TahoWallet extends InjectedWallet {
    type: string;
    identityFlag: ProviderIdentityFlag;
    readonly url = "https://taho.xyz/";
    readonly icon = "https://icons-ckg.pages.dev/lz-light/wallets/taho.svg";
}
declare class DeFiWallet extends InjectedWallet {
    type: string;
    identityFlag: ProviderIdentityFlag;
    readonly url = "https://crypto.com/us/defi-wallet";
    readonly icon = "https://icons-ckg.pages.dev/lz-light/wallets/defi-wallet.svg";
}
declare class BraveWallet extends InjectedWallet {
    type: string;
    identityFlag: ProviderIdentityFlag;
    readonly url = "https://brave.com/wallet/";
    readonly icon = "https://icons-ckg.pages.dev/lz-light/wallets/brave.svg";
    protected tryGetProvider(): EIP1193Provider | undefined;
}
declare class OKXWallet extends InjectedWallet {
    type: string;
    identityFlag: ProviderIdentityFlag;
    readonly url = "https://www.okx.com/web3";
    readonly icon = "https://icons-ckg.pages.dev/lz-light/wallets/okx.svg";
    protected tryGetProvider(): EIP1193Provider | undefined;
}
declare class PhantomWallet extends InjectedWallet {
    type: string;
    identityFlag: ProviderIdentityFlag;
    readonly url = "https://phantom.app/";
    readonly icon = "https://icons-ckg.pages.dev/lz-light/wallets/phantom.svg";
    protected tryGetProvider(): EIP1193Provider | undefined;
}

declare class ExternalWallet extends EvmWallet {
    type: string;
    autoConnect: () => Promise<never>;
    get isAutoConnectEnabled(): boolean;
    constructor();
    set(args: {
        type?: string;
        provider?: EIP1193Provider;
        nativeChainId?: number;
        address?: string;
        connected?: boolean;
        isConnecting?: boolean;
    }): void;
    setProvider(walletType: string, provider: EIP1193Provider): void;
}

type WalletConnectOptions = EthereumProviderOptions;
declare class WalletConnect extends EvmWallet {
    readonly options: WalletConnectOptions;
    readonly type = "WalletConnect";
    readonly isAvailable: boolean;
    readonly icon = "https://icons-ckg.pages.dev/lz-light/wallets/walletconnect.svg";
    protected providerPromise: Promise<EthereumProviderType> | undefined;
    connect: (chainKey?: string | undefined) => mobx_dist_internal.CancellablePromise<void>;
    disconnect: () => Promise<void>;
    switchChain: BaseWallet['switchChain'];
    autoConnect: () => Promise<undefined>;
    protected get requiredChainKey(): string | undefined;
    protected set requiredChainKey(value: string | undefined);
    protected getProvider(requiredChainKey?: string): Promise<EthereumProviderType>;
    constructor(options: WalletConnectOptions);
}

declare class MipdWallet extends EvmWallet {
    info: {
        name: string;
        icon: string;
        url?: string;
    };
    protected mipd: Store;
    accounts: never[];
    autoConnect: () => Promise<void>;
    constructor(info: {
        name: string;
        icon: string;
        url?: string;
    }, mipd: Store);
    protected register(): void;
    get url(): string | undefined;
    get type(): string;
    get icon(): string;
    protected handleDisconnect: DisconnectListener;
}

declare class CoinbaseSmartWallet extends EvmWallet {
    readonly provider: EIP1193Provider;
    readonly icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI4IDU2YzE1LjQ2NCAwIDI4LTEyLjUzNiAyOC0yOFM0My40NjQgMCAyOCAwIDAgMTIuNTM2IDAgMjhzMTIuNTM2IDI4IDI4IDI4WiIgZmlsbD0iIzFCNTNFNCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNyAyOGMwIDExLjU5OCA5LjQwMiAyMSAyMSAyMXMyMS05LjQwMiAyMS0yMVMzOS41OTggNyAyOCA3IDcgMTYuNDAyIDcgMjhabTE3LjIzNC02Ljc2NmEzIDMgMCAwIDAtMyAzdjcuNTMzYTMgMyAwIDAgMCAzIDNoNy41MzNhMyAzIDAgMCAwIDMtM3YtNy41MzNhMyAzIDAgMCAwLTMtM2gtNy41MzNaIiBmaWxsPSIjZmZmIi8+PC9zdmc+";
    readonly type = "Coinbase Smart Wallet";
    readonly isAvailable: boolean;
    constructor(provider: EIP1193Provider);
    supportsChain(chainKey: string): Promise<boolean>;
    autoConnect: () => Promise<undefined>;
}

declare const isWalletMultiSig: (provider: Web3Provider, address: string) => Promise<boolean>;

export { BaseWallet, BraveWallet, CoinbaseSmartWallet, CoinbaseWallet, CoreWallet, DETECT_INTERVAL, DETECT_TIMEOUT, DeFiWallet, EvmDebugWallet, EvmWallet, EvmWalletConfig, ExternalWallet, InjectedWallet, MetaMaskWallet, MipdWallet, OKXWallet, PhantomWallet, ProviderIdentityFlag, TahoWallet, WalletConnect, WalletConnectOptions, getEIP1193Provider, getSigner, isWalletMultiSig, normalizeChainId, numberToHex, patchEIP1193Provider };
