import { AbstractWallet } from '@layerzerolabs/ui-wallet';
import { makeObservable, flow, action, computed } from 'mobx';

// src/TronWallet.ts
var tronChains = {
  tron: "0x2b6653dc",
  "tron-testnet": "0x94a9059e"
};
var TronWallet = class extends AbstractWallet {
  constructor(adapter, chainKeyToTron = tronChains) {
    super();
    this.adapter = adapter;
    this.chainKeyToTron = chainKeyToTron;
    this.type = adapter.name;
    this.storageKey = "TRON:AUTOCONNECT:" + adapter.name;
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
      signer: computed
    });
    if (isInBrowser()) {
      this.subscribe();
      this.update();
    }
  }
  chainType = "tron";
  type;
  chainKey = void 0;
  publicKey = void 0;
  storageKey;
  get icon() {
    return this.adapter.icon;
  }
  get url() {
    return this.adapter.url;
  }
  signAndSubmit(transactionRequest, _) {
    return transactionRequest.signAndSubmitTransaction(this.signer);
  }
  subscribe() {
    this.adapter.on("connect", this.handleConnect);
    this.adapter.on("disconnect", this.update);
    this.adapter.on("chainChanged", this.update);
    this.adapter.on("accountsChanged", this.update);
    this.adapter.on("readyStateChanged", this.update);
    this.adapter.on("stateChanged", this.update);
  }
  handleConnect = async () => {
    this.isAutoConnectEnabled = true;
    await this.update();
  };
  async update() {
    this.address = this.adapter.address ?? void 0;
    this.isConnected = this.adapter.connected ? this.isAutoConnectEnabled : false;
    this.isConnecting = this.adapter.connecting;
    this.isAvailable = this.adapter.readyState !== "NotFound";
    if (!this.chainKey && this.address) {
      const network = await this.adapter.network();
      this.nativeChainId = network.chainId;
      this.chainKey = toChainKey(this.chainKeyToTron, network.chainId);
    }
  }
  connect = flow(
    function* () {
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
    }.bind(this)
  );
  disconnect() {
    this.isAutoConnectEnabled = false;
    this.isConnected = false;
    return this.adapter.disconnect();
  }
  autoConnect() {
    if (!this.isAutoConnectEnabled)
      return Promise.reject("Auto connect is disabled");
    return this.connect();
  }
  async switchChain(chainKey) {
    const chainId = toTron(this.chainKeyToTron, chainKey);
    if (chainId)
      return this.adapter.switchChain(chainId);
    throw new Error(`Chain ${chainKey} not supported`);
  }
  async getNativeChainId() {
    const network = await this.adapter.network();
    if (network.chainId.startsWith("0x")) {
      const chainId = Number(network.chainId);
      if (Number.isFinite(chainId))
        return chainId;
    }
    return network.chainId;
  }
  async getAddress() {
    const address = await this.adapter.address;
    if (address && address !== "")
      return address;
    throw new Error("No address available");
  }
  get signer() {
    return this.adapter;
  }
};
function isInBrowser() {
  return typeof window !== "undefined";
}
function toTron(map, chainKey) {
  return map[chainKey] ?? chainKey;
}
function toChainKey(map, tron) {
  for (const [key, value] of Object.entries(map)) {
    if (value === tron) {
      return key;
    }
  }
}

// src/createTronWallet.ts
function createTronWallet(adapter) {
  return new TronWallet(adapter);
}

export { TronWallet, createTronWallet };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map