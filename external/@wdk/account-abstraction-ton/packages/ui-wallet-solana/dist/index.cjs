'use strict';

var uiCore = require('@layerzerolabs/ui-core');
var uiWallet = require('@layerzerolabs/ui-wallet');
var walletAdapterBase = require('@solana/wallet-adapter-base');
var mobx = require('mobx');
var web3_js = require('@solana/web3.js');

// src/SolanaWallet.ts
var SolanaSigner = class {
  constructor(adapter) {
    this.adapter = adapter;
  }
  sendTransaction = async (payload, { connection, ...options }) => {
    this.adapter.sendTransaction(payload, connection, options);
    const hash = await this.adapter.sendTransaction(payload, connection);
    return { hash };
  };
  signTransaction(payload) {
    return this.adapter.signTransaction(payload);
  }
};
var SolanaWallet = class extends uiWallet.AbstractWallet {
  constructor(adapter, network) {
    super();
    this.adapter = adapter;
    this.network = network;
    mobx.makeObservable(this, {
      isAvailable: true,
      chainKey: mobx.computed,
      isConnected: true,
      isConnecting: true,
      isSwitchingChain: true,
      publicKey: true,
      nativeChainId: true,
      address: true,
      signer: true
    });
    this.signer = new SolanaSigner(adapter);
    this.subscribe();
    this.update();
  }
  signer = void 0;
  async getAddress() {
    const address = this.signer?.adapter.publicKey?.toString();
    if (address)
      return address;
    throw new Error("Could not get address");
  }
  async getNativeChainId() {
    return networkToNativeChainId(this.network);
  }
  get icon() {
    return this.adapter.icon;
  }
  get type() {
    return this.adapter.name;
  }
  chainType = uiCore.ChainType.SOLANA;
  subscribe() {
    this.adapter.addListener("connect", this.update);
    this.adapter.addListener("disconnect", this.update);
    this.adapter.addListener("readyStateChange", this.update);
  }
  autoConnect = async () => {
    if (!this.isAutoConnectEnabled)
      return Promise.reject();
    try {
      await uiCore.waitFor(() => this.adapter.readyState === walletAdapterBase.WalletReadyState.Installed, { timeout: 3e3 });
      await this.connect();
    } catch (e) {
      this.isAutoConnectEnabled = false;
      throw e;
    }
  };
  // must be public because of makeObservable
  update = mobx.action(() => {
    this.publicKey = this.adapter.publicKey?.toString();
    this.address = this.publicKey;
    this.isConnected = this.adapter.connected;
    this.isConnecting = this.adapter.connected ? false : this.adapter.connecting;
    this.isAvailable = this.adapter.readyState === walletAdapterBase.WalletReadyState.Installed;
    this.nativeChainId = networkToNativeChainId(this.network);
    this.isAutoConnectEnabled = this.isAutoConnectEnabled || this.isConnected;
  });
  connect = mobx.flow(
    function* () {
      uiCore.assert(this.isConnected === false);
      uiCore.assert(this.isConnecting === false);
      this.isConnecting = true;
      try {
        yield this.adapter.connect();
        if (!this.isConnected) {
          this.update();
        }
      } finally {
        this.isConnecting = false;
      }
    }.bind(this)
  );
  disconnect = mobx.flow(
    function* () {
      this.isAutoConnectEnabled = false;
      yield this.adapter.disconnect();
    }.bind(this)
  );
  switchChain = async (chainKey) => {
    this.network = chainKeyToNetwork(chainKey);
  };
  get chainKey() {
    return uiCore.tryGetNetworkByNativeChainId(this.chainType, this.nativeChainId)?.chainKey;
  }
};
function chainKeyToNetwork(chainKey) {
  switch (chainKey) {
    case "solana":
      return "mainnet";
    case "solana-testnet":
      return "testnet";
    default:
      throw new Error(`Unsupported network ${chainKey}`);
  }
}
function networkToNativeChainId(network) {
  switch (network) {
    case "mainnet":
      return 1 /* MAINNET */;
    case "testnet":
      return 2 /* TESTNET */;
    default:
      throw new Error("Unsupported network");
  }
}
var TestWalletAdapter = class extends walletAdapterBase.BaseWalletAdapter {
  name = "Test Wallet";
  url = "";
  icon = "https://icons-ckg.pages.dev/stargate-light/wallets/test.svg";
  readyState = walletAdapterBase.WalletReadyState.Installed;
  supportedTransactionVersions;
  _state = "disconnected";
  _keypair;
  get publicKey() {
    if (this._state === "connected") {
      return this._keypair.publicKey;
    }
    return null;
  }
  get connecting() {
    return this._state === "connecting";
  }
  async connect() {
    this._state = "connected";
    this.emit("connect", this._keypair.publicKey);
  }
  async disconnect() {
    this._state = "disconnected";
    this.emit("disconnect");
  }
  async sendTransaction(transaction2, connection, options) {
    const singedTransaction = await this.signTransaction(transaction2);
    const isVersionedTransaction = singedTransaction instanceof web3_js.VersionedTransaction;
    if (!isVersionedTransaction)
      throw new Error("Only VersionedTransaction is supported.");
    const hash = await connection.sendTransaction(singedTransaction);
    return hash;
  }
  constructor(config) {
    super();
    this._keypair = config.keypair;
  }
  async signTransaction(transaction2) {
    const isVersionedTransaction = transaction2 instanceof web3_js.VersionedTransaction;
    if (!isVersionedTransaction)
      throw new Error("Only VersionedTransaction is supported.");
    await transaction2.sign([this._keypair]);
    return transaction2;
  }
  signAllTransactions(transactions) {
    throw new Error("Method not implemented.");
  }
};

exports.SolanaWallet = SolanaWallet;
exports.TestWalletAdapter = TestWalletAdapter;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map