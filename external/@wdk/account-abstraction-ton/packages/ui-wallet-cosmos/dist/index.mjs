import { AbstractWallet } from '@layerzerolabs/ui-wallet';
import { makeObservable, computed, action, flow } from 'mobx';
import { assert } from '@layerzerolabs/ui-core';
import { State } from '@cosmos-kit/core';

// src/CosmosWallet.ts
var defaultCosmosWalletConfig = {
  defaultChainKey: "cosmoshub"
};
var CosmosWallet = class extends AbstractWallet {
  constructor(config) {
    super();
    this.config = config;
    makeObservable(this, {
      isAvailable: true,
      chainKey: true,
      isConnected: true,
      isConnecting: true,
      isSwitchingChain: true,
      publicKey: true,
      nativeChainId: true,
      address: true,
      signer: computed
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
  state = State.Init;
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
  update = action(() => {
    this.isConnected = this.wallet.isActive;
    this.isAvailable = this.wallet.isWalletNotExist === false;
    this.isConnecting = this.wallet.isWalletConnecting;
  });
  connect = flow(
    function* (chainKey) {
      assert(this.isConnected === false, "Wallet is already connected.");
      assert(this.isConnecting === false, "Wallet is already connecting.");
      assert(this.isAvailable === true, "Wallet is not available.");
      assert(this.wallet, "Missing wallet property");
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
  disconnect = flow(
    function* () {
      yield this.wallet.disconnect(true);
      this.isConnected = false;
      this.address = void 0;
      this.nativeChainId = void 0;
      this.isAutoConnectEnabled = false;
    }.bind(this)
  );
  switchChain = flow(
    function* (chainKey) {
      throw new Error("Not implemented.");
    }.bind(this)
  );
  async getNativeChainId() {
    throw new Error("Not implemented.");
  }
  async getAddress() {
    assert(this.chainKey, "Wallet is not connected to known chainKey.");
    assert(this.wallet.client, "Missing wallet.client property");
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

export { CosmosMetaMaskWallet, CosmosWallet, KeplrWallet, LeapWallet, defaultCosmosWalletConfig };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map