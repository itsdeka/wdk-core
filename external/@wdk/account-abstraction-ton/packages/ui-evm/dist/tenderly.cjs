'use strict';

var chunkBKHBQRLI_cjs = require('./chunk-BKHBQRLI.cjs');
require('./chunk-DXBKMGUM.cjs');
var http = require('redaxios');
var providers = require('@ethersproject/providers');
var ethers = require('ethers');
var uiCore = require('@layerzerolabs/ui-core');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var http__default = /*#__PURE__*/_interopDefault(http);

var TenderlyProvider = class extends providers.BaseProvider {
  constructor(fork, options = {}) {
    super("any");
    this.fork = fork;
    this.options = options;
  }
  jsonRpcProvider = null;
  startFork() {
    return this.fork.start();
  }
  stopFork() {
    return this.fork.stop();
  }
  async detectNetwork() {
    const { fork } = this;
    await uiCore.waitFor(() => fork.forkData !== void 0, {
      timeout: this.options.timeout
    });
    uiCore.assert(fork.forkData, "Fork not started");
    uiCore.assert(fork.forkUrl, "Fork has no URL");
    const network = {
      chainId: fork.forkData.simulation_fork.chain_config.chain_id,
      name: `Tenderly fork`
    };
    this.jsonRpcProvider = new providers.JsonRpcProvider(
      {
        url: fork.forkUrl,
        timeout: this.options.timeout
      },
      network
    );
    return network;
  }
  perform(method, params) {
    return this.jsonRpcProvider.perform(method, params);
  }
  addBalance(address, amount) {
    return this.jsonRpcProvider.send("tenderly_setBalance", [
      [address],
      ethers.utils.hexValue(ethers.BigNumber.from(amount).toHexString())
    ]);
  }
  setBalance(minterAddress, amount) {
    return this.jsonRpcProvider.send("tenderly_setBalance", [
      [minterAddress],
      ethers.utils.hexValue(ethers.BigNumber.from(amount).toHexString())
    ]);
  }
  setErc20Balance(token, wallet, value) {
    return this.jsonRpcProvider.send("tenderly_setErc20Balance", [
      token,
      wallet,
      ethers.utils.hexValue(ethers.BigNumber.from(value).toHexString())
    ]);
  }
};
var TenderlySdk = class {
  constructor(config) {
    this.config = config;
    uiCore.assert(config.accessKey, "Missing TENDERLY_ACCESS_KEY");
    uiCore.assert(config.project, "Missing TENDERLY_PROJECT");
    uiCore.assert(config.user, "Missing TENDERLY_USER");
    this.http = http__default.default.create({
      baseURL: "https://api.tenderly.co",
      headers: { "X-Access-Key": this.config.accessKey }
    });
  }
  http;
  async createFork(input) {
    return new TenderlyFork(this.config, input);
  }
};
var TenderlyForkStatus = /* @__PURE__ */ ((TenderlyForkStatus2) => {
  TenderlyForkStatus2["UNINITIALIZED"] = "uninitialized";
  TenderlyForkStatus2["STARTING"] = "starting";
  TenderlyForkStatus2["STARTED"] = "started";
  TenderlyForkStatus2["STOPPED"] = "stopped";
  return TenderlyForkStatus2;
})(TenderlyForkStatus || {});
var TenderlyFork = class {
  constructor(tenderlyConfig, forkConfig) {
    this.tenderlyConfig = tenderlyConfig;
    this.forkConfig = forkConfig;
    this._http = http__default.default.create({
      baseURL: "https://api.tenderly.co",
      headers: { "X-Access-Key": this.tenderlyConfig.accessKey }
    });
  }
  _http;
  _forkData;
  _status = "uninitialized" /* UNINITIALIZED */;
  async start() {
    if (this._status === "started" /* STARTED */)
      return;
    if (this._status === "starting" /* STARTING */)
      return;
    if (this._status === "stopped" /* STOPPED */) {
      throw new Error(`Fork ${this.forkId} already stopped`);
    }
    this._status = "starting" /* STARTING */;
    const network = uiCore.getNetwork(this.forkConfig.chainKey);
    const { data } = await this._http.post(`${this.projectUri}/fork`, {
      network_id: network.nativeChainId,
      chain_config: {
        chain_id: network.nativeChainId
      }
    });
    this._forkData = data;
    this._status = "started" /* STARTED */;
  }
  async stop() {
    uiCore.assert(this.forkId, "Fork not started");
    this._status = "stopped" /* STOPPED */;
    await this._http.delete(`${this.projectUri}/fork/${this.forkId}`);
  }
  // getters to ensure readonly access from outside
  get status() {
    return this._status;
  }
  get forkUrl() {
    if (!this.forkId)
      return void 0;
    return `https://rpc.tenderly.co/fork/${this.forkId}`;
  }
  get forkData() {
    return this._forkData;
  }
  get forkId() {
    return this.forkData?.simulation_fork.id;
  }
  get projectUri() {
    return `/api/v1/account/${this.tenderlyConfig.user}/project/${this.tenderlyConfig.project}`;
  }
};
var tenderlyChains = [
  "ethereum",
  "mainnet",
  "sepolia",
  "goerli",
  "holesky",
  "polygon",
  "mumbai",
  "optimism",
  "optimism-goerli",
  "base",
  "base-goerli",
  "base-sepolia",
  "optimism-sepolia",
  "arbitrum",
  "arbitrum-nova",
  "arbitrum-sepolia",
  "arbitrum-goerli",
  "boba",
  "boba-goerli",
  "boba-bnb",
  "boba-bnb-testnet",
  "bsc",
  "bsc-testnet",
  "avalanche",
  "fuji",
  "linea",
  "linea-goerli",
  "fantom",
  "fantom-testnet",
  "moonbeam",
  "moonriver",
  "cronos",
  "cronos-testnet",
  "gnosis",
  "rsk",
  "rsk-testnet",
  "zora",
  "zora-testnet",
  "zora-sepolia",
  "mantle",
  "blast"
];
var createTenderlyProviderFactory = (tenderlySdk) => {
  const providers = /* @__PURE__ */ new Map();
  const providerFactory = (chainKey) => {
    const existingProvider = providers.get(chainKey);
    if (existingProvider)
      return existingProvider;
    const createdProvider = new chunkBKHBQRLI_cjs.TestingProxyProvider(createTenderlyProvider(chainKey));
    providers.set(chainKey, createdProvider);
    return createdProvider;
  };
  return providerFactory;
  function createTenderlyProvider(chainKey) {
    return tenderlySdk.createFork({ chainKey }).then((fork) => new TenderlyProvider(fork));
  }
};

exports.TenderlyFork = TenderlyFork;
exports.TenderlyForkStatus = TenderlyForkStatus;
exports.TenderlyProvider = TenderlyProvider;
exports.TenderlySdk = TenderlySdk;
exports.createTenderlyProviderFactory = createTenderlyProviderFactory;
exports.tenderlyChains = tenderlyChains;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=tenderly.cjs.map