import type {ChainKey, Transaction, TransactionResult} from '@layerzerolabs/ui-core';
import {AbstractWallet} from '@layerzerolabs/ui-wallet';
import type {Adapter, Network} from '@tronweb3/tronwallet-abstract-adapter';
import {action, computed, flow, makeObservable} from 'mobx';

type ChainKeyToTron = Partial<Record<ChainKey, string>>;

/**
 * Available chainIds:
 * - Mainnet: 0x2b6653dc
 * - Shasta: 0x94a9059e
 * - Nile: 0xcd8690dc
 */
const tronChains: ChainKeyToTron = {
  tron: '0x2b6653dc',
  'tron-testnet': '0x94a9059e',
};

export class TronWallet<
  TAdapter extends NetworkAdapter = NetworkAdapter,
> extends AbstractWallet<TAdapter> {
  chainType = 'tron';
  type: string;
  chainKey?: string | undefined = undefined;
  publicKey = undefined;

  storageKey: string;

  get icon() {
    return this.adapter.icon;
  }

  get url() {
    return this.adapter.url;
  }

  constructor(
    protected adapter: TAdapter,
    protected chainKeyToTron: ChainKeyToTron = tronChains,
  ) {
    super();
    this.type = adapter.name;

    this.storageKey = 'TRON:AUTOCONNECT:' + adapter.name;

    makeObservable(this, {
      isAvailable: true,
      chainKey: true,
      isConnected: true,
      isConnecting: true,
      isSwitchingChain: true,
      publicKey: true,
      nativeChainId: true,
      address: true,
      connect: flow,
      disconnect: action.bound,
      update: action.bound,
      signer: computed,
    });

    if (isInBrowser()) {
      this.subscribe();
      this.update();
    }
  }

  signAndSubmit(transactionRequest: Transaction<TAdapter>, _?: any): Promise<TransactionResult> {
    return transactionRequest.signAndSubmitTransaction(this.signer);
  }

  protected subscribe() {
    this.adapter.on('connect', this.handleConnect);
    this.adapter.on('disconnect', this.update);
    this.adapter.on('chainChanged', this.update);
    this.adapter.on('accountsChanged', this.update);
    this.adapter.on('readyStateChanged', this.update);
    this.adapter.on('stateChanged', this.update);
  }

  handleConnect = async () => {
    this.isAutoConnectEnabled = true;
    await this.update();
  };

  async update() {
    this.address = this.adapter.address ?? undefined;
    this.isConnected = this.adapter.connected ? this.isAutoConnectEnabled : false;
    this.isConnecting = this.adapter.connecting;
    this.isAvailable = this.adapter.readyState !== 'NotFound';
    if (!this.chainKey && this.address) {
      const network = await this.adapter.network();
      this.nativeChainId = network.chainId;
      this.chainKey = toChainKey(this.chainKeyToTron, network.chainId);
    }
  }

  connect = flow(
    function* (this: TronWallet) {
      try {
        this.isAutoConnectEnabled = true;
        this.isConnecting = true;
        if (!this.adapter.connected) {
          yield this.adapter.connect();
        }
      } finally {
        this.isConnecting = false;
        this.isConnected = true;
      }
    }.bind(this),
  );

  disconnect(): Promise<void> {
    this.isAutoConnectEnabled = false;
    this.isConnected = false;
    return this.adapter.disconnect();
  }
  autoConnect(): Promise<void> {
    if (!this.isAutoConnectEnabled) return Promise.reject('Auto connect is disabled');
    return this.connect();
  }
  async switchChain(chainKey: ChainKey): Promise<void> {
    const chainId = toTron(this.chainKeyToTron, chainKey);
    if (chainId) return this.adapter.switchChain(chainId);
    throw new Error(`Chain ${chainKey} not supported`);
  }
  async getNativeChainId(): Promise<number> {
    const network = await this.adapter.network();
    // todo: fix typings
    if (network.chainId.startsWith('0x')) {
      const chainId = Number(network.chainId);
      if (Number.isFinite(chainId)) return chainId;
    }
    return network.chainId as any;
  }
  async getAddress(): Promise<string> {
    const address = await this.adapter.address;
    if (address && address !== '') return address;
    throw new Error('No address available');
  }

  get signer() {
    return this.adapter;
  }
}

function isInBrowser() {
  return typeof window !== 'undefined';
}

function toTron(map: ChainKeyToTron, chainKey: ChainKey): string | undefined {
  return map[chainKey] ?? chainKey;
}

function toChainKey(map: ChainKeyToTron, tron: string): ChainKey | undefined {
  for (const [key, value] of Object.entries(map)) {
    if (value === tron) {
      return key as ChainKey;
    }
  }
}

export interface NetworkAdapter extends Adapter {
  network(): Promise<Network>;
}
