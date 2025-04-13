'use strict';

var uiWallet = require('@layerzerolabs/ui-wallet');
var mobx = require('mobx');
var uiCore = require('@layerzerolabs/ui-core');
var core = require('@cosmos-kit/core');

// src/CosmosWallet.ts
var defaultCosmosWalletConfig = {
  defaultChainKey: "cosmoshub"
};
var CosmosWallet = class extends uiWallet.AbstractWallet {
  constructor(config) {
    super();
    this.config = config;
    mobx.makeObservable(this, {
      isAvailable: true,
      chainKey: true,
      isConnected: true,
      isConnecting: true,
      isSwitchingChain: true,
      publicKey: true,
      nativeChainId: true,
      address: true,
      signer: mobx.computed
    });
    this.wallet = config.wallet;
    this.update();
  }
  chainType = "cosmos";
  chainKey = void 0;
  wallet;
  unsubscribe = noop;
  get url() {
    for (const item of this.wallet.walletInfo?.downloads ?? []) {
      return item.link;
    }
  }
  get icon() {
    const logo = this.wallet.walletInfo.logo;
    return typeof logo === "string" ? logo : logo?.major;
  }
  log = console;
  state = core.State.Init;
  subscribe() {
    if (!this.wallet.emitter)
      return;
    const events = [
      //
      "broadcast_client",
      "broadcast_env",
      "sync_connect",
      "sync_disconnect"
    ];
    for (const event of events) {
      this.wallet.emitter.off(event, this.update);
      this.wallet.emitter.on(event, this.update);
    }
  }
  update = mobx.action(() => {
    this.isConnected = this.wallet.isActive;
    this.isAvailable = this.wallet.isWalletNotExist === false;
    this.isConnecting = this.wallet.isWalletConnecting;
  });
  connect = mobx.flow(
    function* (chainKey) {
      uiCore.assert(this.isConnected === false, "Wallet is already connected.");
      uiCore.assert(this.isConnecting === false, "Wallet is already connecting.");
      uiCore.assert(this.isAvailable === true, "Wallet is not available.");
      uiCore.assert(this.wallet, "Missing wallet property");
      chainKey = chainKey ?? this.config.defaultChainKey ?? "cosmoshub";
      try {
        this.isConnecting = true;
        this.subscribe();
        yield this.wallet.connect(true);
        const account = yield this.wallet.client.getAccount(chainKey);
        this.nativeChainId = chainKey;
        this.chainKey = chainKey;
        this.isConnecting = false;
        this.address = account.address;
        this.publicKey = account.pubkey.toString();
        this.isConnected = true;
        this.isAutoConnectEnabled = true;
      } finally {
        this.isConnecting = false;
      }
    }.bind(this)
  );
  disconnect = mobx.flow(
    function* () {
      yield this.wallet.disconnect(true);
      this.isConnected = false;
      this.address = void 0;
      this.nativeChainId = void 0;
      this.isAutoConnectEnabled = false;
    }.bind(this)
  );
  switchChain = mobx.flow(
    function* (chainKey) {
      throw new Error("Not implemented.");
    }.bind(this)
  );
  async getNativeChainId() {
    throw new Error("Not implemented.");
  }
  async getAddress() {
    uiCore.assert(this.chainKey, "Wallet is not connected to known chainKey.");
    uiCore.assert(this.wallet.client, "Missing wallet.client property");
    const account = await this.wallet.client.getAccount(this.chainKey);
    return account.address;
  }
  autoConnect = async () => {
    if (!this.isAutoConnectEnabled)
      return Promise.reject();
    await this.wallet.connect(true);
    if (this.isAvailable) {
      await this.connect();
    }
  };
  // @ts-ignore
  get signer() {
    return this.wallet;
  }
  set signer(value) {
  }
};
var noop = () => {
};

// src/CosmosMetaMaskWallet.ts
var CosmosMetaMaskWallet = class extends CosmosWallet {
  type = "MetaMask";
};

// src/KeplrWallet.ts
var KeplrWallet = class extends CosmosWallet {
  type = "Keplr";
};

// src/LeapWallet.ts
var LeapWallet = class extends CosmosWallet {
  type = "Leap";
};

exports.CosmosMetaMaskWallet = CosmosMetaMaskWallet;
exports.CosmosWallet = CosmosWallet;
exports.KeplrWallet = KeplrWallet;
exports.LeapWallet = LeapWallet;
exports.defaultCosmosWalletConfig = defaultCosmosWalletConfig;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map