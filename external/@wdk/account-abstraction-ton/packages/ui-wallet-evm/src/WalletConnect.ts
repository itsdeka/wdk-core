import {computed, makeObservable, flow, runInAction} from 'mobx';
import {EthereumProviderOptions} from '@walletconnect/ethereum-provider';
import type EthereumProviderType from '@walletconnect/ethereum-provider';
import {getNetwork, waitFor, type ChainKey, assert} from '@layerzerolabs/ui-core';
import {providers} from 'ethers';

import {EvmWallet, type BaseWallet} from './EvmWallet';

export type WalletConnectOptions = EthereumProviderOptions;

// Required chain should be removed in future
// this flow exists only to support some mobile wallets
const REQUIRED_CHAIN_STORAGE_KEY = 'wallet:evm:WalletConnect:chainKey';

export class WalletConnect extends EvmWallet {
  public readonly type = 'WalletConnect';
  public readonly isAvailable: boolean = true;
  public readonly icon = 'https://icons-ckg.pages.dev/lz-light/wallets/walletconnect.svg';
  protected providerPromise: Promise<EthereumProviderType> | undefined;

  connect = flow(
    function* (this: WalletConnect, chainKey?: string) {
      assert(this.isConnected === false);
      assert(this.isConnecting === false);
      try {
        this.isConnecting = true;

        const provider: EthereumProviderType = yield this.getProvider(chainKey);

        this.provider = provider;
        yield provider.connect();
        this.isConnected = true;
        this.isAutoConnectEnabled = true;
      } catch (e) {
        this.provider = undefined;
        this.providerPromise = undefined;
        this.requiredChainKey = undefined;
        throw e;
      } finally {
        this.isConnecting = false;
      }
    }.bind(this),
  );

  disconnect = async () => {
    assert(this.provider);
    await this.provider.disconnect?.();
    runInAction(() => {
      this.isConnected = false;
      this.address = undefined;
      this.nativeChainId = undefined;
      this.isAutoConnectEnabled = false;
      this.requiredChainKey = undefined;
      this.providerPromise = undefined;
      this.provider = undefined;
    });
  };

  switchChain: BaseWallet['switchChain'] = flow(
    function* (this: WalletConnect, chainKey: ChainKey) {
      assert(this.provider);
      this.isSwitchingChain = true;
      try {
        const network = getNetwork(chainKey);
        yield this.switchEthereumChain(network);
        try {
          // ensure wallet synchronized chainId
          yield waitFor(() => this.chainKey === chainKey, {timeout: 3000});
        } catch {
          throw new Error('Wallet did not sync chainKey');
        }
      } finally {
        this.isSwitchingChain = false;
      }
    }.bind(this),
  );

  autoConnect = async () => {
    if (!this.isAutoConnectEnabled) return Promise.reject();
    const provider = await this.getProvider(this.requiredChainKey);

    // wallet connect comes with already connected provider
    // so connect event will not be emitted
    // we have to update the state manually
    runInAction(() => {
      const address = provider.accounts.at(0);
      this.isConnected = provider.connected && Boolean(address);
      this.isConnecting = provider.connecting;
      this.address = address;
      this.nativeChainId = provider.chainId;
      this.provider = provider;
      this.signer = new providers.Web3Provider(provider).getSigner();
    });
  };

  // todo: remove when WC fully supports only optional chains
  protected get requiredChainKey(): string | undefined {
    if (typeof localStorage === 'undefined') return undefined;
    return localStorage.getItem(REQUIRED_CHAIN_STORAGE_KEY) ?? undefined;
  }

  protected set requiredChainKey(value: string | undefined) {
    if (typeof localStorage === 'undefined') return;
    if (value) {
      localStorage.setItem(REQUIRED_CHAIN_STORAGE_KEY, value);
    } else {
      localStorage.removeItem(REQUIRED_CHAIN_STORAGE_KEY);
    }
  }

  protected async getProvider(requiredChainKey?: string): Promise<EthereumProviderType> {
    if (!this.providerPromise) {
      // create a copy so we don't override original values
      const options = {...this.options};

      // override required chains only if no chains provided
      if (requiredChainKey) {
        const nativeChainId = getNetwork(requiredChainKey).nativeChainId;
        const chains = new Set(options.chains).add(Number(nativeChainId));
        options.chains = Array.from(chains);
        delete options.optionalChains;
      }

      this.providerPromise = new Promise(async (resolve) => {
        const {default: Provider} = await import('@walletconnect/ethereum-provider');

        const provider: EthereumProviderType = await Provider.init({
          methods: [
            'eth_sendTransaction',
            'eth_signTransaction',
            'personal_sign',
            'eth_sign',
            'eth_signTypedData',
            'eth_signTypedData_v4',
            'wallet_switchEthereumChain',
            'wallet_addEthereumChain',
          ],
          events: [
            'chainChanged',
            'accountsChanged',
            'connected',
            'session_update',
            'message',
            'disconnect',
            'session_event',
          ],
          ...options,
        });

        // save required chain to local storage after successful connection
        this.requiredChainKey = requiredChainKey;

        // calling it here so we ensure the handlers are registered only once
        this.subscribe(provider);

        resolve(provider);
      });
    }
    return this.providerPromise;
  }

  constructor(public readonly options: WalletConnectOptions) {
    super();

    makeObservable(this, {
      isAvailable: true,
      isConnected: true,
      isConnecting: true,
      isSwitchingChain: true,
      chainKey: computed,
      publicKey: true,
      nativeChainId: true,
      address: true,
      signer: true,
      provider: true,
    });
  }
}
