'use strict';

var walletAdapterCore = require('@aptos-labs/wallet-adapter-core');
var uiAptos = require('@layerzerolabs/ui-aptos');
var uiCore = require('@layerzerolabs/ui-core');
var uiWallet = require('@layerzerolabs/ui-wallet');
var mobx = require('mobx');

// src/AptosWallet.ts
var AptosSigner = class {
  constructor(adapter) {
    this.adapter = adapter;
  }
  sendTransaction = async (payload, options) => {
    const { hash } = await this.adapter.signAndSubmitTransaction(payload);
    return { hash };
  };
};
var AptosWallet = class extends uiWallet.AbstractWallet {
  constructor(type, adapterOrFactoryPromise) {
    super();
    this.type = type;
    mobx.makeObservable(this, {
      isAvailable: true,
      chainKey: mobx.computed,
      networkInfo: true,
      isConnected: true,
      isConnecting: true,
      isSwitchingChain: true,
      publicKey: true,
      nativeChainId: true,
      address: true,
      signer: true
    });
    this.adapterPromise = typeof adapterOrFactoryPromise === "function" ? waitForAdapter(adapterOrFactoryPromise) : Promise.resolve(adapterOrFactoryPromise);
    this.adapterPromise.then((adapter) => {
      this.updateAdapter(adapter);
      this.subscribe();
    });
  }
  chainType = uiCore.ChainType.APTOS;
  nativeChainId = void 0;
  networkInfo = void 0;
  signer = void 0;
  adapterPromise;
  adapter = void 0;
  // must be public because of makeObservable
  updateAccount = mobx.action((account) => {
    const { address, publicKey } = account;
    this.address = address?.toString() ?? void 0;
    this.publicKey = toPublicKey(publicKey);
  });
  updateNetwork = mobx.action(async (network) => {
    this.nativeChainId = this.mapNativeChainId(network);
    this.networkInfo = network;
  });
  updateAdapter = mobx.action((adapter) => {
    this.adapter = adapter;
    this.isAvailable = Boolean(adapter.provider);
    this.signer = new AptosSigner(adapter);
  });
  subscribe() {
    uiCore.assert(this.adapter);
    this.adapter.onAccountChange(this.updateAccount);
    this.adapter.onNetworkChange(this.updateNetwork);
  }
  autoConnect = async () => {
    if (!this.isAutoConnectEnabled)
      return Promise.reject();
    try {
      await this.adapterPromise;
      await this.connect();
    } catch (e) {
      this.isAutoConnectEnabled = false;
      throw e;
    }
  };
  connect = mobx.flow(
    function* () {
      uiCore.assert(this.isConnected === false);
      uiCore.assert(this.isConnecting === false);
      this.isConnecting = true;
      try {
        uiCore.assert(this.adapter);
        const account = yield this.adapter.connect();
        const network = toNetworkInfo(yield this.adapter.network());
        this.updateAccount(account);
        this.updateNetwork(network);
        this.isConnected = true;
        this.isAutoConnectEnabled = true;
      } finally {
        this.isConnecting = false;
      }
    }.bind(this)
  );
  disconnect = mobx.flow(
    function* () {
      uiCore.assert(this.adapter);
      this.isAutoConnectEnabled = false;
      yield this.adapter.disconnect();
      this.isConnected = false;
      this.networkInfo = void 0;
      this.nativeChainId = void 0;
      this.address = void 0;
      this.publicKey = void 0;
    }.bind(this)
  );
  switchChain = async (chainKey) => {
    if (chainKey === this.chainKey)
      return;
    throw new Error(`Switch network to ${chainKey}`);
  };
  async getNativeChainId() {
    uiCore.assert(this.adapter);
    const networkInfo = toNetworkInfo(await this.adapter.network());
    const nativeChainId = this.mapNativeChainId(networkInfo);
    uiCore.assert(nativeChainId, `Unsupported chain: ${networkInfo.name}`);
    return nativeChainId;
  }
  async getAddress() {
    uiCore.assert(this.adapter);
    const account = await this.adapter.account();
    return account.address.toString();
  }
  mapNativeChainId(networkInfo) {
    const name = networkInfo?.name?.toLowerCase();
    if (name === walletAdapterCore.NetworkName.Mainnet)
      return uiAptos.AptosNativeChainId.MAINNET;
    if (name === walletAdapterCore.NetworkName.Testnet)
      return uiAptos.AptosNativeChainId.TESTNET;
    const chainId = Number(networkInfo?.chainId);
    if (chainId === uiAptos.AptosNativeChainId.MAINNET)
      return uiAptos.AptosNativeChainId.MAINNET;
    if (chainId === uiAptos.AptosNativeChainId.TESTNET)
      return uiAptos.AptosNativeChainId.TESTNET;
    return void 0;
  }
  get chainKey() {
    return uiCore.tryGetNetworkByNativeChainId(this.chainType, this.nativeChainId)?.chainKey;
  }
};
function toNetworkInfo(nameOrNetworkInfo) {
  if (typeof nameOrNetworkInfo === "string") {
    return { name: nameOrNetworkInfo.toLowerCase() };
  }
  return nameOrNetworkInfo;
}
function toPublicKey(publicKey) {
  return Array.isArray(publicKey) ? publicKey.at(0)?.toString() : publicKey?.toString();
}
function waitForAdapter(factory, { timeout = 1e4, interval = 300 } = {}) {
  let adapter;
  return uiCore.waitFor(
    () => {
      adapter = factory();
      return Boolean(adapter.provider);
    },
    { timeout, interval }
  ).then(() => adapter);
}

exports.AptosWallet = AptosWallet;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map