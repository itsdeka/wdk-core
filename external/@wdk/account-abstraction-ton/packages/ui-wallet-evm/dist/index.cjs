'use strict';

var common = require('@web3-onboard/common');
var ethers = require('ethers');
var uiWallet = require('@layerzerolabs/ui-wallet');
var mobx = require('mobx');
var uiCore = require('@layerzerolabs/ui-core');

// src/utils.ts
function numberToHex(number) {
  return "0x" + number.toString(16);
}
function normalizeChainId(chainId) {
  return Number(chainId);
}
function getSigner(provider) {
  return new ethers.providers.Web3Provider(provider, "any").getSigner();
}
function getEIP1193Provider(identity, { patchProvider = true, ignoreFlags } = {}) {
  if (typeof window === "undefined")
    return void 0;
  const ethereum = window.ethereum;
  if (!ethereum)
    return void 0;
  const providers3 = Array.isArray(ethereum.providers) ? ethereum.providers : [ethereum];
  const provider = providers3.filter((provider2) => {
    if (!ignoreFlags)
      return true;
    return !ignoreFlags.some((ignoredIdentity) => provider2[ignoredIdentity]);
  }).find((provider2) => {
    return provider2[identity];
  });
  if (!provider)
    return void 0;
  if (!patchProvider)
    return provider;
  patchEIP1193Provider(provider);
  return common.createEIP1193Provider(provider);
}
function patchEIP1193Provider(provider) {
  if (provider && !provider.removeListener) {
    if ("off" in provider && typeof provider.off === "function") {
      provider.removeListener = provider.off;
    } else {
      provider.removeListener = () => {
      };
    }
  }
  return provider;
}

// src/ProviderIdentityFlag.ts
var ProviderIdentityFlag = /* @__PURE__ */ ((ProviderIdentityFlag2) => {
  ProviderIdentityFlag2["AlphaWallet"] = "isAlphaWallet";
  ProviderIdentityFlag2["ApexWallet"] = "isApexWallet";
  ProviderIdentityFlag2["AToken"] = "isAToken";
  ProviderIdentityFlag2["BifrostWallet"] = "isBifrost";
  ProviderIdentityFlag2["Binance"] = "bbcSignTx";
  ProviderIdentityFlag2["Bitpie"] = "isBitpie";
  ProviderIdentityFlag2["BlockWallet"] = "isBlockWallet";
  ProviderIdentityFlag2["Coinbase"] = "isToshi";
  ProviderIdentityFlag2["CoinbaseExtension"] = "isCoinbaseWallet";
  ProviderIdentityFlag2["Detected"] = "request";
  ProviderIdentityFlag2["Dcent"] = "isDcentWallet";
  ProviderIdentityFlag2["Exodus"] = "isExodus";
  ProviderIdentityFlag2["Frontier"] = "isFrontier";
  ProviderIdentityFlag2["Frame"] = "isFrame";
  ProviderIdentityFlag2["HuobiWallet"] = "isHbWallet";
  ProviderIdentityFlag2["HyperPay"] = "isHyperPay";
  ProviderIdentityFlag2["ImToken"] = "isImToken";
  ProviderIdentityFlag2["InfinityWallet"] = "isInfinityWallet";
  ProviderIdentityFlag2["Liquality"] = "isLiquality";
  ProviderIdentityFlag2["MeetOne"] = "wallet";
  ProviderIdentityFlag2["MetaMask"] = "isMetaMask";
  ProviderIdentityFlag2["MyKey"] = "isMYKEY";
  ProviderIdentityFlag2["OwnBit"] = "isOwnbit";
  ProviderIdentityFlag2["Status"] = "isStatus";
  ProviderIdentityFlag2["Trust"] = "isTrust";
  ProviderIdentityFlag2["TokenPocket"] = "isTokenPocket";
  ProviderIdentityFlag2["TP"] = "isTp";
  ProviderIdentityFlag2["WalletIo"] = "isWalletIO";
  ProviderIdentityFlag2["XDEFI"] = "isXDEFI";
  ProviderIdentityFlag2["OneInch"] = "isOneInchIOSWallet";
  ProviderIdentityFlag2["Tokenary"] = "isTokenary";
  ProviderIdentityFlag2["Taho"] = "isTally";
  ProviderIdentityFlag2["BraveWallet"] = "isBraveWallet";
  ProviderIdentityFlag2["Rabby"] = "isRabby";
  ProviderIdentityFlag2["MathWallet"] = "isMathWallet";
  ProviderIdentityFlag2["GameStop"] = "isGamestop";
  ProviderIdentityFlag2["BitKeep"] = "isBitKeep";
  ProviderIdentityFlag2["Sequence"] = "isSequence";
  ProviderIdentityFlag2["Core"] = "isAvalanche";
  ProviderIdentityFlag2["Opera"] = "isOpera";
  ProviderIdentityFlag2["Bitski"] = "isBitski";
  ProviderIdentityFlag2["Enkrypt"] = "isEnkrypt";
  ProviderIdentityFlag2["Phantom"] = "isPhantom";
  ProviderIdentityFlag2["OKXWallet"] = "isOkxWallet";
  ProviderIdentityFlag2["Zeal"] = "isZeal";
  ProviderIdentityFlag2["Zerion"] = "isZerion";
  ProviderIdentityFlag2["Rainbow"] = "isRainbow";
  ProviderIdentityFlag2["SafePal"] = "isSafePal";
  ProviderIdentityFlag2["DeFiWallet"] = "isDeficonnectProvider";
  ProviderIdentityFlag2["Safeheron"] = "isSafeheron";
  return ProviderIdentityFlag2;
})(ProviderIdentityFlag || {});
var EvmWallet = class extends uiWallet.AbstractWallet {
  chainType = uiCore.ChainType.EVM;
  provider = void 0;
  accounts = [];
  config = this.getConfig();
  get chainKey() {
    return uiCore.tryGetNetworkByNativeChainId(this.chainType, this.nativeChainId)?.chainKey;
  }
  signer = void 0;
  log = console;
  unsubscribe = noop;
  subscribe(provider) {
    this.unsubscribe();
    provider.on("accountsChanged", this.handleAccountsChanged);
    provider.on("chainChanged", this.handleChainChanged);
    provider.on("connect", this.handleConnect);
    provider.on("disconnect", this.handleDisconnect);
    provider.on("message", this.handleMessage);
    provider.on("change", this.handleChange);
    this.unsubscribe = () => {
      provider.removeListener("accountsChanged", this.handleAccountsChanged);
      provider.removeListener("chainChanged", this.handleChainChanged);
      provider.removeListener("connect", this.handleConnect);
      provider.removeListener("disconnect", this.handleDisconnect);
      provider.removeListener("message", this.handleMessage);
      this.unsubscribe = noop;
    };
  }
  handleChange = mobx.action((change) => {
    this.log.log("change", this, { change });
  });
  handleAccountsChanged = mobx.action((accounts) => {
    this.log.log("accountsChanged", this, { accounts });
    const [account] = accounts;
    if (account) {
      this.address = account;
      this.accounts = accounts;
      this.signer = getSigner(this.provider);
    } else {
      this.address = void 0;
      this.accounts = accounts;
      this.nativeChainId = void 0;
      this.signer = void 0;
      this.isConnected = false;
    }
  });
  handleMessage = mobx.action((message) => {
    this.log.log("message", this, { message });
  });
  handleChainChanged = mobx.action((chainId) => {
    this.log.log("chainChanged", this, chainId);
    this.nativeChainId = normalizeChainId(chainId);
    this.signer = getSigner(this.provider);
  });
  handleConnect = mobx.action((info) => {
    if (!this.isConnecting)
      return;
    this.log.log("connect", this, info);
    this.nativeChainId = normalizeChainId(info.chainId);
    if (this.nativeChainId === Number(uiCore.getNetwork(uiCore.ChainType.TRON).nativeChainId)) {
      this.chainType = uiCore.ChainType.TRON;
    }
    this.signer = getSigner(this.provider);
  });
  handleDisconnect = mobx.action((error) => {
    this.log.log("disconnect", this, { error });
    this.nativeChainId = void 0;
    this.isConnected = false;
    this.signer = void 0;
  });
  async eth_requestAccounts() {
    assertProvider(this);
    const accounts = await this.provider.request({
      method: "eth_requestAccounts",
      params: []
    });
    return accounts;
  }
  // adding for debugging purposes
  accountsPromise;
  nativeChainIdPromise;
  getAccounts = () => this.eth_requestAccounts();
  connect = mobx.flow(
    function* () {
      uiCore.assert(this.isConnected === false);
      uiCore.assert(this.isConnecting === false);
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
    }.bind(this)
  );
  disconnect = mobx.flow(
    function* () {
      this.isConnected = false;
      this.address = void 0;
      this.nativeChainId = void 0;
      this.signer = void 0;
      this.isAutoConnectEnabled = false;
    }.bind(this)
  );
  switchChain = mobx.flow(
    function* (chainKey) {
      let userRejected = false;
      const network = uiCore.getNetwork(chainKey);
      assertProvider(this);
      uiCore.assert(this.isSwitchingChain === false);
      if (this.chainKey === network.chainKey)
        return;
      try {
        this.isSwitchingChain = true;
        try {
          yield this.switchEthereumChain(network);
        } catch (e) {
          const error = e;
          if (error.code === 4001) {
            userRejected = true;
            throw new uiWallet.UserRejectedRequestError(error.message ?? "User rejected the request.", {
              cause: error
            });
          }
          yield this.addEthereumChain(network);
        }
        try {
          yield uiCore.waitFor(() => this.chainKey === network.chainKey, {
            timeout: this.config.switchChainTimeout
          });
        } catch {
          throw new uiWallet.SyncWalletError("Wallet did not sync chainId");
        }
        this.isSwitchingChain = false;
      } finally {
        this.isSwitchingChain = false;
        if (!userRejected) {
          if (this.chainKey !== network.chainKey) {
            yield this.disconnect();
          }
        }
      }
    }.bind(this)
  );
  async getNativeChainId() {
    assertProvider(this);
    const chainId = await this.provider.request({
      method: "eth_chainId",
      params: []
    });
    return normalizeChainId(chainId);
  }
  async getAddress() {
    const accounts = await this.getAccounts();
    const address = accounts[0];
    uiCore.assert(address, "Address is not set");
    return address;
  }
  // extracted and public so it can be overridden with custom RPCs
  async getRpcUrls(chainKey) {
    const rpcs = uiCore.getRpcs(chainKey);
    return rpcs.map((rpc) => rpc.url).filter((url) => url.startsWith("http"));
  }
  getBlockExplorerUrls(chainKey) {
    const blockExplorerUrls = uiCore.getBlockExplorers(chainKey);
    const urls = blockExplorerUrls.map((b) => b.url);
    const scanExplorer = `https://layerzeroscan.com/explorer/chain/${chainKey}`;
    return [...urls, scanExplorer];
  }
  async switchEthereumChain(chain) {
    assertProvider(this);
    const chainId = normalizeChainId(chain.nativeChainId);
    return this.provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: numberToHex(chainId) }]
    });
  }
  async addEthereumChain(chain) {
    assertProvider(this);
    const blockExplorerUrls = this.getBlockExplorerUrls(chain.chainKey);
    const rpcUrls = await this.getRpcUrls(chain.chainKey);
    const chainId = normalizeChainId(chain.nativeChainId);
    return this.provider.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: numberToHex(chainId),
          chainName: chain.name,
          nativeCurrency: {
            name: chain.nativeCurrency.name,
            symbol: chain.nativeCurrency.symbol,
            decimals: chain.nativeCurrency.decimals
          },
          rpcUrls,
          //
          blockExplorerUrls: blockExplorerUrls.length > 0 ? blockExplorerUrls : [`https://layerzeroscan.com/explorer/chain/${chain.chainKey}`]
        }
      ]
    });
  }
  getConfig() {
    return {
      switchChainTimeout: 1e4
    };
  }
};
var noop = () => {
};
function assertProvider(wallet) {
  uiCore.assert(wallet.provider, `Provider is not set`);
}
var EvmDebugWallet = class extends uiWallet.AbstractWallet {
  constructor(wallet) {
    super();
    this.wallet = wallet;
    mobx.makeObservable(this, {
      isConnected: true,
      isAvailable: true,
      address: true,
      nativeChainId: true,
      chainKey: true,
      connect: mobx.action,
      disconnect: mobx.action
    });
    this.signer = wallet;
  }
  chainType = "evm";
  type = "debug";
  chainKey = void 0;
  isAvailable = true;
  isConnected = false;
  nativeChainId = void 0;
  address = void 0;
  signer;
  async connect() {
    try {
      mobx.runInAction(() => this.isConnecting = true);
      const [nativeChainId, address] = await Promise.all([
        this.getNativeChainId(),
        this.getAddress()
      ]);
      mobx.runInAction(() => {
        this.address = address;
        this.nativeChainId = nativeChainId;
        this.chainKey = uiCore.getNetworkByNativeChainId("evm", this.nativeChainId).chainKey;
        this.isConnecting = false;
        this.isConnected = true;
      });
    } catch {
      mobx.runInAction(() => {
        this.isConnecting = false;
        this.isConnected = false;
      });
    }
  }
  async disconnect() {
    this.isConnected = false;
  }
  async autoConnect() {
    this.connect();
  }
  async switchChain(chainKey) {
    if (this.chainKey !== chainKey) {
      throw new Error("Method not implemented.");
    }
  }
  async getNativeChainId() {
    return (await this.wallet.provider.getNetwork()).chainId;
  }
  async getAddress() {
    return this.wallet.getAddress();
  }
};
var DETECT_INTERVAL = 100;
var DETECT_TIMEOUT = 5e3;
var InjectedWallet = class extends EvmWallet {
  providerPromise;
  autoConnect = async () => {
    if (!this.isAutoConnectEnabled)
      return Promise.reject();
    await this.providerPromise;
    await this.connect();
  };
  constructor() {
    super();
    mobx.makeObservable(this, {
      isAvailable: true,
      chainKey: mobx.computed,
      isConnected: true,
      isConnecting: true,
      isSwitchingChain: true,
      publicKey: true,
      nativeChainId: true,
      address: true,
      signer: mobx.observable.ref,
      provider: mobx.observable.ref
    });
    this.providerPromise = this.detectProvider();
    this.providerPromise.then(
      (provider) => mobx.runInAction(() => {
        this.isAvailable = true;
        this.provider = provider;
        this.subscribe(provider);
      })
    );
  }
  detectProvider() {
    const provider = this.tryGetProvider();
    if (provider)
      return Promise.resolve(provider);
    return new Promise((resolve) => {
      if (typeof window === "undefined")
        return;
      const id = setInterval(() => {
        const provider2 = this.tryGetProvider();
        if (!provider2)
          return;
        clearInterval(id);
        resolve(provider2);
      }, DETECT_INTERVAL);
      setTimeout(() => clearInterval(id), DETECT_TIMEOUT);
    });
  }
  tryGetProvider() {
    return getEIP1193Provider(this.identityFlag);
  }
};
var MetaMaskWallet = class extends InjectedWallet {
  type = "MetaMask";
  identityFlag = "isMetaMask" /* MetaMask */;
  url = "https://metamask.io";
  icon = "https://icons-ckg.pages.dev/lz-light/wallets/metamask.svg";
  tryGetProvider() {
    return getEIP1193Provider(this.identityFlag, { ignoreFlags: ["isAvalanche" /* Core */] });
  }
  // MM sometimes fires `disconnect` when calling wallet_switchEthereumChain
  // https://github.com/MetaMask/metamask-extension/issues/13375
  handleDisconnect = (error) => {
    if (error.code === 1013) {
      console.warn(error.message, error);
      return;
    }
    this.log.log("disconnect", { error });
    this.nativeChainId = void 0;
    this.isConnected = false;
    this.signer = void 0;
  };
};
var CoinbaseWallet = class extends InjectedWallet {
  type = "CoinBase";
  identityFlag = "isCoinbaseWallet" /* CoinbaseExtension */;
  url = "https://www.coinbase.com/wallet";
  icon = "https://icons-ckg.pages.dev/lz-light/wallets/coinbase.svg";
};
var CoreWallet = class extends InjectedWallet {
  type = "Core";
  identityFlag = "isAvalanche" /* Core */;
  url = "https://core.app/";
  icon = "https://icons-ckg.pages.dev/lz-light/wallets/core.svg";
};
var TahoWallet = class extends InjectedWallet {
  type = "Taho";
  identityFlag = "isTally" /* Taho */;
  url = "https://taho.xyz/";
  icon = "https://icons-ckg.pages.dev/lz-light/wallets/taho.svg";
};
var DeFiWallet = class extends InjectedWallet {
  type = "Crypto.com DeFi Wallet";
  identityFlag = "isDeficonnectProvider" /* DeFiWallet */;
  url = "https://crypto.com/us/defi-wallet";
  icon = "https://icons-ckg.pages.dev/lz-light/wallets/defi-wallet.svg";
};
var BraveWallet = class extends InjectedWallet {
  type = "Brave";
  identityFlag = "isBraveWallet" /* BraveWallet */;
  url = "https://brave.com/wallet/";
  icon = "https://icons-ckg.pages.dev/lz-light/wallets/brave.svg";
  tryGetProvider() {
    return getEIP1193Provider(this.identityFlag, { patchProvider: false });
  }
};
var OKXWallet = class extends InjectedWallet {
  type = "OKX";
  identityFlag = "isOkxWallet" /* OKXWallet */;
  url = "https://www.okx.com/web3";
  icon = "https://icons-ckg.pages.dev/lz-light/wallets/okx.svg";
  tryGetProvider() {
    if (typeof window === "undefined")
      return void 0;
    const okxwallet = window.okxwallet;
    if (okxwallet)
      return common.createEIP1193Provider(okxwallet);
    return void 0;
  }
};
var PhantomWallet = class extends InjectedWallet {
  type = "Phantom";
  identityFlag = "isPhantom" /* Phantom */;
  url = "https://phantom.app/";
  icon = "https://icons-ckg.pages.dev/lz-light/wallets/phantom.svg";
  tryGetProvider() {
    if (typeof window === "undefined")
      return void 0;
    const ethereum = window.phantom?.ethereum;
    if (ethereum && ethereum[this.identityFlag])
      return common.createEIP1193Provider(ethereum);
    return void 0;
  }
};
var ExternalWallet = class extends EvmWallet {
  type = "external";
  autoConnect = () => Promise.reject();
  get isAutoConnectEnabled() {
    return false;
  }
  constructor() {
    super();
    mobx.makeObservable(this, {
      isAvailable: true,
      chainKey: mobx.computed,
      isConnected: true,
      isConnecting: true,
      isSwitchingChain: true,
      publicKey: true,
      nativeChainId: true,
      address: true,
      signer: mobx.observable.ref,
      provider: mobx.observable.ref,
      type: true,
      setProvider: mobx.action,
      set: mobx.action
    });
  }
  // todo:
  // discuss whether have `setProvider` or `update({type:'MetaMask', provider: Provider, nativeChainId: 1})`
  set(args) {
    Object.assign(this, args);
    if (args.provider) {
      this.subscribe(args.provider);
    } else {
      this.unsubscribe();
    }
  }
  setProvider(walletType, provider) {
    this.type = walletType;
    this.provider = provider;
    this.isConnected = false;
    this.isConnecting = false;
    this.subscribe(provider);
    this.connect();
  }
};
var REQUIRED_CHAIN_STORAGE_KEY = "wallet:evm:WalletConnect:chainKey";
var WalletConnect = class extends EvmWallet {
  constructor(options) {
    super();
    this.options = options;
    mobx.makeObservable(this, {
      isAvailable: true,
      isConnected: true,
      isConnecting: true,
      isSwitchingChain: true,
      chainKey: mobx.computed,
      publicKey: true,
      nativeChainId: true,
      address: true,
      signer: true,
      provider: true
    });
  }
  type = "WalletConnect";
  isAvailable = true;
  icon = "https://icons-ckg.pages.dev/lz-light/wallets/walletconnect.svg";
  providerPromise;
  connect = mobx.flow(
    function* (chainKey) {
      uiCore.assert(this.isConnected === false);
      uiCore.assert(this.isConnecting === false);
      try {
        this.isConnecting = true;
        const provider = yield this.getProvider(chainKey);
        this.provider = provider;
        yield provider.connect();
        this.isConnected = true;
        this.isAutoConnectEnabled = true;
      } catch (e) {
        this.provider = void 0;
        this.providerPromise = void 0;
        this.requiredChainKey = void 0;
        throw e;
      } finally {
        this.isConnecting = false;
      }
    }.bind(this)
  );
  disconnect = async () => {
    uiCore.assert(this.provider);
    await this.provider.disconnect?.();
    mobx.runInAction(() => {
      this.isConnected = false;
      this.address = void 0;
      this.nativeChainId = void 0;
      this.isAutoConnectEnabled = false;
      this.requiredChainKey = void 0;
      this.providerPromise = void 0;
      this.provider = void 0;
    });
  };
  switchChain = mobx.flow(
    function* (chainKey) {
      uiCore.assert(this.provider);
      this.isSwitchingChain = true;
      try {
        const network = uiCore.getNetwork(chainKey);
        yield this.switchEthereumChain(network);
        try {
          yield uiCore.waitFor(() => this.chainKey === chainKey, { timeout: 3e3 });
        } catch {
          throw new Error("Wallet did not sync chainKey");
        }
      } finally {
        this.isSwitchingChain = false;
      }
    }.bind(this)
  );
  autoConnect = async () => {
    if (!this.isAutoConnectEnabled)
      return Promise.reject();
    const provider = await this.getProvider(this.requiredChainKey);
    mobx.runInAction(() => {
      const address = provider.accounts.at(0);
      this.isConnected = provider.connected && Boolean(address);
      this.isConnecting = provider.connecting;
      this.address = address;
      this.nativeChainId = provider.chainId;
      this.provider = provider;
      this.signer = new ethers.providers.Web3Provider(provider).getSigner();
    });
  };
  // todo: remove when WC fully supports only optional chains
  get requiredChainKey() {
    if (typeof localStorage === "undefined")
      return void 0;
    return localStorage.getItem(REQUIRED_CHAIN_STORAGE_KEY) ?? void 0;
  }
  set requiredChainKey(value) {
    if (typeof localStorage === "undefined")
      return;
    if (value) {
      localStorage.setItem(REQUIRED_CHAIN_STORAGE_KEY, value);
    } else {
      localStorage.removeItem(REQUIRED_CHAIN_STORAGE_KEY);
    }
  }
  async getProvider(requiredChainKey) {
    if (!this.providerPromise) {
      const options = { ...this.options };
      if (requiredChainKey) {
        const nativeChainId = uiCore.getNetwork(requiredChainKey).nativeChainId;
        const chains = new Set(options.chains).add(Number(nativeChainId));
        options.chains = Array.from(chains);
        delete options.optionalChains;
      }
      this.providerPromise = new Promise(async (resolve) => {
        const { default: Provider } = await import('@walletconnect/ethereum-provider');
        const provider = await Provider.init({
          methods: [
            "eth_sendTransaction",
            "eth_signTransaction",
            "personal_sign",
            "eth_sign",
            "eth_signTypedData",
            "eth_signTypedData_v4",
            "wallet_switchEthereumChain",
            "wallet_addEthereumChain"
          ],
          events: [
            "chainChanged",
            "accountsChanged",
            "connected",
            "session_update",
            "message",
            "disconnect",
            "session_event"
          ],
          ...options
        });
        this.requiredChainKey = requiredChainKey;
        this.subscribe(provider);
        resolve(provider);
      });
    }
    return this.providerPromise;
  }
};
var isBrowser = typeof window !== "undefined";
var MipdWallet = class extends EvmWallet {
  constructor(info, mipd) {
    super();
    this.info = info;
    this.mipd = mipd;
    mobx.makeObservable(this, {
      type: mobx.computed,
      info: mobx.observable.ref,
      icon: mobx.computed,
      url: mobx.computed,
      isAvailable: true,
      chainKey: mobx.computed,
      isConnected: true,
      isConnecting: true,
      isSwitchingChain: true,
      publicKey: true,
      nativeChainId: true,
      address: true,
      signer: mobx.observable.ref,
      provider: mobx.observable.ref
    });
    if (isBrowser) {
      this.register();
    }
  }
  accounts = [];
  autoConnect = async () => {
    if (!this.isAutoConnectEnabled)
      return Promise.reject();
    await this.connect();
  };
  // simplistic approach
  register() {
    this.mipd.subscribe(
      (_, meta) => {
        mobx.runInAction(() => {
          const providerDetails = meta?.added?.find((p) => p.info.name === this.info.name);
          if (!providerDetails)
            return;
          const { provider, info } = providerDetails;
          patchEIP1193Provider(provider);
          this.isAvailable = true;
          this.info = info;
          this.provider = provider;
          this.subscribe(this.provider);
        });
      },
      { emitImmediately: true }
    );
  }
  get url() {
    return this.info.url;
  }
  get type() {
    return this.info.name;
  }
  get icon() {
    return this.info.icon;
  }
  // MM sometimes fires `disconnect` when calling wallet_switchEthereumChain
  // https://github.com/MetaMask/metamask-extension/issues/13375
  handleDisconnect = (error) => {
    if (error.code === 1013) {
      console.warn(error.message, error);
      return;
    }
    this.log.log("disconnect", { error });
    this.nativeChainId = void 0;
    this.isConnected = false;
    this.signer = void 0;
  };
};
var CoinbaseSmartWallet = class extends EvmWallet {
  constructor(provider) {
    super();
    this.provider = provider;
    mobx.makeObservable(this, {
      isAvailable: true,
      chainKey: mobx.computed,
      isConnected: true,
      isConnecting: true,
      isSwitchingChain: true,
      publicKey: true,
      nativeChainId: true,
      address: true,
      signer: mobx.observable.ref,
      connect: true
    });
    this.subscribe(provider);
  }
  icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI4IDU2YzE1LjQ2NCAwIDI4LTEyLjUzNiAyOC0yOFM0My40NjQgMCAyOCAwIDAgMTIuNTM2IDAgMjhzMTIuNTM2IDI4IDI4IDI4WiIgZmlsbD0iIzFCNTNFNCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNyAyOGMwIDExLjU5OCA5LjQwMiAyMSAyMSAyMXMyMS05LjQwMiAyMS0yMVMzOS41OTggNyAyOCA3IDcgMTYuNDAyIDcgMjhabTE3LjIzNC02Ljc2NmEzIDMgMCAwIDAtMyAzdjcuNTMzYTMgMyAwIDAgMCAzIDNoNy41MzNhMyAzIDAgMCAwIDMtM3YtNy41MzNhMyAzIDAgMCAwLTMtM2gtNy41MzNaIiBmaWxsPSIjZmZmIi8+PC9zdmc+";
  type = "Coinbase Smart Wallet";
  isAvailable = true;
  async supportsChain(chainKey) {
    const chain = uiCore.getNetwork(chainKey);
    const response = await wallet_getCapabilities(this.provider);
    for (const [hexChainKey] of Object.entries(response)) {
      if (Number(hexChainKey) === chain.nativeChainId) {
        return true;
      }
    }
    return false;
  }
  autoConnect = async () => {
    if (!this.isAutoConnectEnabled)
      return Promise.reject();
    await this.connect();
  };
};
async function wallet_getCapabilities(provider) {
  const response = await provider.request({
    method: "wallet_getCapabilities"
  });
  return response;
}

// src/isWalletMultiSig.ts
var isWalletMultiSig = async (provider, address) => {
  const code = await provider.getCode(address);
  return code !== "0x";
};

Object.defineProperty(exports, 'createEIP1193Provider', {
  enumerable: true,
  get: function () { return common.createEIP1193Provider; }
});
exports.BraveWallet = BraveWallet;
exports.CoinbaseSmartWallet = CoinbaseSmartWallet;
exports.CoinbaseWallet = CoinbaseWallet;
exports.CoreWallet = CoreWallet;
exports.DETECT_INTERVAL = DETECT_INTERVAL;
exports.DETECT_TIMEOUT = DETECT_TIMEOUT;
exports.DeFiWallet = DeFiWallet;
exports.EvmDebugWallet = EvmDebugWallet;
exports.EvmWallet = EvmWallet;
exports.ExternalWallet = ExternalWallet;
exports.InjectedWallet = InjectedWallet;
exports.MetaMaskWallet = MetaMaskWallet;
exports.MipdWallet = MipdWallet;
exports.OKXWallet = OKXWallet;
exports.PhantomWallet = PhantomWallet;
exports.ProviderIdentityFlag = ProviderIdentityFlag;
exports.TahoWallet = TahoWallet;
exports.WalletConnect = WalletConnect;
exports.getEIP1193Provider = getEIP1193Provider;
exports.getSigner = getSigner;
exports.isWalletMultiSig = isWalletMultiSig;
exports.normalizeChainId = normalizeChainId;
exports.numberToHex = numberToHex;
exports.patchEIP1193Provider = patchEIP1193Provider;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map