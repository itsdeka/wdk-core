import {
  type Wallet,
  AbstractWallet,
  UserRejectedRequestError,
  SyncWalletError,
} from '@layerzerolabs/ui-wallet';
import {flow, action} from 'mobx';
import type {Signer} from 'ethers';
import {
  type ChainKey,
  getNetwork,
  waitFor,
  type Network,
  tryGetNetworkByNativeChainId,
  getBlockExplorers,
  getRpcs,
  ChainType,
  assert,
} from '@layerzerolabs/ui-core';
import type {
  AccountsListener,
  ChainListener,
  ConnectListener,
  DisconnectListener,
  EIP1193Provider,
  MessageListener,
} from '@web3-onboard/common';
import {getSigner, normalizeChainId, numberToHex} from './utils';
import type {EvmSigner} from './EvmSigner';
import {tron} from 'viem/chains';

export type BaseWallet = Wallet<EvmSigner>;
export type EvmWalletConfig = {
  switchChainTimeout: number;
};

export abstract class EvmWallet extends AbstractWallet<EvmSigner> {
  public chainType: ChainType = ChainType.EVM;
  public abstract type: string;
  public abstract autoConnect: () => Promise<void>;

  public provider: EIP1193Provider | undefined = undefined;
  public accounts: string[] = [];
  protected config: EvmWalletConfig = this.getConfig();
  public get chainKey(): ChainKey | undefined {
    return tryGetNetworkByNativeChainId(this.chainType, this.nativeChainId)?.chainKey;
  }
  override signer: Signer | undefined = undefined;
  protected log = console;

  protected unsubscribe: () => void = noop;
  protected subscribe(provider: EIP1193Provider) {
    // make sure there are no previous listeners
    this.unsubscribe();

    provider.on('accountsChanged', this.handleAccountsChanged);
    provider.on('chainChanged', this.handleChainChanged);
    provider.on('connect', this.handleConnect);
    provider.on('disconnect', this.handleDisconnect);
    provider.on('message', this.handleMessage);
    //@ts-ignore
    provider.on('change', this.handleChange);

    this.unsubscribe = () => {
      provider.removeListener('accountsChanged', this.handleAccountsChanged);
      provider.removeListener('chainChanged', this.handleChainChanged);
      provider.removeListener('connect', this.handleConnect);
      provider.removeListener('disconnect', this.handleDisconnect);
      provider.removeListener('message', this.handleMessage);
      this.unsubscribe = noop;
    };
  }

  protected handleChange = action((change: unknown) => {
    this.log.log('change', this, {change});
  });

  protected handleAccountsChanged: AccountsListener = action((accounts) => {
    this.log.log('accountsChanged', this, {accounts});

    const [account] = accounts;
    if (account) {
      this.address = account;
      this.accounts = accounts;
      this.signer = getSigner(this.provider!);
    } else {
      this.address = undefined;
      this.accounts = accounts;
      this.nativeChainId = undefined;
      this.signer = undefined;
      this.isConnected = false;
    }
  });

  protected handleMessage: MessageListener = action((message) => {
    this.log.log('message', this, {message});
  });

  protected handleChainChanged: ChainListener = action((chainId) => {
    this.log.log('chainChanged', this, chainId);

    this.nativeChainId = normalizeChainId(chainId);
    this.signer = getSigner(this.provider!);
  });

  protected handleConnect: ConnectListener = action((info) => {
    if (!this.isConnecting) return;
    this.log.log('connect', this, info);

    this.nativeChainId = normalizeChainId(info.chainId);
    if (this.nativeChainId === Number(getNetwork(ChainType.TRON).nativeChainId)) {
      this.chainType = ChainType.TRON;
    }
    this.signer = getSigner(this.provider!);
  });

  protected handleDisconnect: DisconnectListener = action((error) => {
    this.log.log('disconnect', this, {error});

    this.nativeChainId = undefined;
    this.isConnected = false;
    this.signer = undefined;
  });

  protected async eth_requestAccounts(): Promise<string[]> {
    assertProvider(this);
    const accounts = (await this.provider.request({
      method: 'eth_requestAccounts',
      params: [],
    })) as string[];
    return accounts;
  }

  // adding for debugging purposes
  protected accountsPromise: Promise<string[]> | undefined;
  protected nativeChainIdPromise: Promise<number> | undefined;

  getAccounts = () => this.eth_requestAccounts();

  connect: BaseWallet['connect'] = flow(
    function* (this: EvmWallet) {
      assert(this.isConnected === false);
      assert(this.isConnecting === false);
      assertProvider(this);
      try {
        this.isConnecting = true;
        this.accountsPromise = this.getAccounts();
        this.nativeChainIdPromise = this.getNativeChainId();
        this.nativeChainId = yield this.nativeChainIdPromise;
        this.accounts = yield this.accountsPromise;
        this.address = this.accounts[0];
        this.signer = getSigner(this.provider);
        this.isConnecting = false;
        this.isConnected = true;
        this.isAutoConnectEnabled = true;
      } finally {
        this.isConnecting = false;
      }
    }.bind(this),
  );

  disconnect: BaseWallet['disconnect'] = flow(
    function* (this: EvmWallet) {
      this.isConnected = false;
      this.address = undefined;
      this.nativeChainId = undefined;
      this.signer = undefined;
      this.isAutoConnectEnabled = false;
    }.bind(this),
  );

  switchChain: BaseWallet['switchChain'] = flow(
    function* (this: EvmWallet, chainKey: ChainKey) {
      let userRejected = false;
      const network = getNetwork(chainKey);
      assertProvider(this);
      assert(this.isSwitchingChain === false);
      if (this.chainKey === network.chainKey) return;
      try {
        this.isSwitchingChain = true;
        try {
          yield this.switchEthereumChain(network);
        } catch (e) {
          const error = e as {code?: number; message?: string};

          if (error.code === 4001) {
            userRejected = true;
            throw new UserRejectedRequestError(error.message ?? 'User rejected the request.', {
              cause: error,
            });
          }

          yield this.addEthereumChain(network);
        }
        try {
          // ensure wallet synchronized chainId
          yield waitFor(() => this.chainKey === network.chainKey, {
            timeout: this.config.switchChainTimeout,
          });
        } catch {
          throw new SyncWalletError('Wallet did not sync chainId');
        }
        this.isSwitchingChain = false;
      } finally {
        this.isSwitchingChain = false;
        // don't disconnect if user rejected
        if (!userRejected) {
          // if switching failed - unknown state - disconnect
          if (this.chainKey !== network.chainKey) {
            yield this.disconnect();
          }
        }
      }
    }.bind(this),
  );

  async getNativeChainId(): Promise<number> {
    assertProvider(this);
    const chainId = await this.provider.request({
      method: 'eth_chainId',
      params: [],
    });
    return normalizeChainId(chainId as string);
  }

  async getAddress(): Promise<string> {
    const accounts = await this.getAccounts();
    const address = accounts[0];
    assert(address, 'Address is not set');
    return address;
  }

  // extracted and public so it can be overridden with custom RPCs
  public async getRpcUrls(chainKey: ChainKey): Promise<string[]> {
    const rpcs = getRpcs(chainKey);
    return rpcs.map((rpc) => rpc.url).filter((url) => url.startsWith('http'));
  }

  protected getBlockExplorerUrls(chainKey: ChainKey): string[] {
    const blockExplorerUrls = getBlockExplorers(chainKey);
    const urls = blockExplorerUrls.map((b) => b.url);
    // adding scan explorer as fallback
    const scanExplorer = `https://layerzeroscan.com/explorer/chain/${chainKey}`;
    return [...urls, scanExplorer];
  }

  protected async switchEthereumChain(chain: Network): Promise<unknown> {
    assertProvider(this);
    const chainId = normalizeChainId(chain.nativeChainId);
    return this.provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{chainId: numberToHex(chainId)}],
    });
  }

  protected async addEthereumChain(chain: Network): Promise<unknown> {
    assertProvider(this);

    const blockExplorerUrls = this.getBlockExplorerUrls(chain.chainKey);
    const rpcUrls = await this.getRpcUrls(chain.chainKey);
    const chainId = normalizeChainId(chain.nativeChainId);

    return this.provider.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: numberToHex(chainId),
          chainName: chain.name,
          nativeCurrency: {
            name: chain.nativeCurrency.name,
            symbol: chain.nativeCurrency.symbol,
            decimals: chain.nativeCurrency.decimals,
          },
          rpcUrls,
          //
          blockExplorerUrls:
            blockExplorerUrls.length > 0
              ? blockExplorerUrls
              : [`https://layerzeroscan.com/explorer/chain/${chain.chainKey}`],
        },
      ],
    });
  }

  protected getConfig(): EvmWalletConfig {
    return {
      switchChainTimeout: 10_000,
    };
  }
}

const noop = () => {};

function assertProvider(wallet: {
  provider?: EIP1193Provider;
}): asserts wallet is {provider: EIP1193Provider} {
  assert(wallet.provider, `Provider is not set`);
}
