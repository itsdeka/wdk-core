import {
  type AccountInfo,
  type NetworkInfo,
  NetworkName,
  type AdapterPlugin,
} from '@aptos-labs/wallet-adapter-core';
import {
  AptosNativeChainId,
  type AptosSubmitOptions,
  type AptosTransaction,
  type AptosSigner as IAptosSigner,
} from '@layerzerolabs/ui-aptos';
import {
  ChainType,
  type ChainKey,
  waitFor,
  tryGetNetworkByNativeChainId,
  assert,
} from '@layerzerolabs/ui-core';
import {AbstractWallet} from '@layerzerolabs/ui-wallet';
import {action, computed, flow, makeObservable} from 'mobx';

class AptosSigner implements IAptosSigner {
  constructor(public readonly adapter: Adapter) {}

  sendTransaction = async (
    payload: AptosTransaction,
    options: AptosSubmitOptions,
  ): Promise<{hash: string}> => {
    const {hash} = await this.adapter.signAndSubmitTransaction(payload);
    return {hash};
  };
}

// there is a mess in types in the original `@aptos-labs/wallet-adapter-core`
//
// we need `connect`, `network`, and `account`
// to be consistent across all adapters
// and implement https://aptos.dev/standards/wallets
//
// some `plugins` might have to be adjusted to correctly implement `Adapter`

export type Adapter = Omit<
  AdapterPlugin<string>,
  'network' | 'connect' | 'disconnect' | 'signMessage'
> & {
  connect: () => Promise<AccountInfo>;
  account: () => Promise<AccountInfo>;
  disconnect: () => Promise<void>;

  // Correct signature should be:
  // network: () => Promise<NetworkInfo>;
  // but some adapters don't implement the spec correctly
  // (eg. pontem)
  network: () => Promise<NetworkInfo | NetworkName>;
};

export class AptosWallet extends AbstractWallet<AptosSigner> {
  public readonly chainType = ChainType.APTOS;
  public nativeChainId: AptosNativeChainId | undefined = undefined;
  public networkInfo: NetworkInfo | undefined = undefined;
  public signer?: AptosSigner | undefined = undefined;
  public adapterPromise: Promise<Adapter>;
  public adapter: Adapter | undefined = undefined;

  constructor(
    public readonly type: string,
    adapterOrFactoryPromise: ValueOrPromise<Adapter> | (() => Adapter),
  ) {
    super();

    makeObservable(this, {
      isAvailable: true,
      chainKey: computed,
      networkInfo: true,
      isConnected: true,
      isConnecting: true,
      isSwitchingChain: true,
      publicKey: true,
      nativeChainId: true,
      address: true,
      signer: true,
    });

    this.adapterPromise =
      typeof adapterOrFactoryPromise === 'function'
        ? waitForAdapter(adapterOrFactoryPromise)
        : Promise.resolve(adapterOrFactoryPromise);

    this.adapterPromise.then((adapter) => {
      this.updateAdapter(adapter as unknown as Adapter);
      this.subscribe();
    });
  }

  // must be public because of makeObservable
  protected updateAccount = action((account: AccountInfo) => {
    const {address, publicKey} = account;
    this.address = address?.toString() ?? undefined;
    this.publicKey = toPublicKey(publicKey);
  });

  protected updateNetwork = action(async (network: NetworkInfo) => {
    this.nativeChainId = this.mapNativeChainId(network);
    this.networkInfo = network;
  });

  protected updateAdapter = action((adapter: Adapter) => {
    this.adapter = adapter;
    this.isAvailable = Boolean(adapter.provider);
    // incorrect typings
    this.signer = new AptosSigner(adapter as unknown as Adapter);
  });

  private subscribe() {
    assert(this.adapter);
    this.adapter.onAccountChange(this.updateAccount);
    this.adapter.onNetworkChange(this.updateNetwork);
  }

  public autoConnect: () => Promise<void> = async () => {
    if (!this.isAutoConnectEnabled) return Promise.reject();
    try {
      await this.adapterPromise;
      await this.connect();
    } catch (e) {
      this.isAutoConnectEnabled = false;
      throw e;
    }
  };

  connect: () => Promise<void> = flow(
    function* (this: AptosWallet) {
      assert(this.isConnected === false);
      assert(this.isConnecting === false);
      this.isConnecting = true;
      try {
        assert(this.adapter);
        const account: AccountInfo = yield this.adapter.connect();
        const network: NetworkInfo = toNetworkInfo(yield this.adapter.network());
        this.updateAccount(account);
        this.updateNetwork(network);
        this.isConnected = true;
        this.isAutoConnectEnabled = true;
      } finally {
        this.isConnecting = false;
      }
    }.bind(this),
  );

  disconnect: () => Promise<void> = flow(
    function* (this: AptosWallet) {
      assert(this.adapter);
      this.isAutoConnectEnabled = false;
      yield this.adapter.disconnect();
      this.isConnected = false;
      this.networkInfo = undefined;
      this.nativeChainId = undefined;
      this.address = undefined;
      this.publicKey = undefined;
    }.bind(this),
  );

  switchChain = async (chainKey: ChainKey): Promise<void> => {
    if (chainKey === this.chainKey) return;
    throw new Error(`Switch network to ${chainKey}`);
  };

  public async getNativeChainId(): Promise<number> {
    assert(this.adapter);
    const networkInfo = toNetworkInfo(await this.adapter.network());
    const nativeChainId = this.mapNativeChainId(networkInfo);
    assert(nativeChainId, `Unsupported chain: ${networkInfo.name}`);
    return nativeChainId;
  }

  public async getAddress(): Promise<string> {
    assert(this.adapter);
    const account = await this.adapter.account();
    return account.address.toString();
  }

  protected mapNativeChainId(networkInfo?: NetworkInfo): AptosNativeChainId | undefined {
    // providers have inconsistent naming
    const name = networkInfo?.name?.toLowerCase();
    if (name === NetworkName.Mainnet) return AptosNativeChainId.MAINNET;
    if (name === NetworkName.Testnet) return AptosNativeChainId.TESTNET;
    const chainId = Number(networkInfo?.chainId) as unknown;
    if (chainId === AptosNativeChainId.MAINNET) return AptosNativeChainId.MAINNET;
    if (chainId === AptosNativeChainId.TESTNET) return AptosNativeChainId.TESTNET;
    return undefined;
  }

  public get chainKey(): ChainKey | undefined {
    return tryGetNetworkByNativeChainId(this.chainType, this.nativeChainId)?.chainKey;
  }
}

function toNetworkInfo(nameOrNetworkInfo: string | NetworkInfo): NetworkInfo {
  if (typeof nameOrNetworkInfo === 'string') {
    return {name: nameOrNetworkInfo.toLowerCase() as NetworkName};
  }
  return nameOrNetworkInfo;
}

function toPublicKey(publicKey: AccountInfo['publicKey']) {
  return Array.isArray(publicKey) ? publicKey.at(0)?.toString() : publicKey?.toString();
}

type ValueOrPromise<T> = T | Promise<T>;

// If adapter is instantiated before the extension plugin is injected then the wallet is not detected correctly.
// Calling adapter.connect() results in WalletType Address Info Error error to be thrown.
// https://github.com/aptos-labs/wallet-adapter-plugin-template/issues/9
function waitForAdapter(
  factory: () => Adapter,
  {timeout = 10_000, interval = 300} = {},
): Promise<Adapter> {
  let adapter: Adapter;
  return waitFor(
    () => {
      adapter = factory();
      return Boolean(adapter.provider);
    },
    {timeout, interval},
  ).then(() => adapter);
}
