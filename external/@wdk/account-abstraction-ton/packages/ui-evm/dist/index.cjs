'use strict';

var chunkZWL5EJV7_cjs = require('./chunk-ZWL5EJV7.cjs');
var chunkIPT74UOE_cjs = require('./chunk-IPT74UOE.cjs');
var chunkYTZHD2MR_cjs = require('./chunk-YTZHD2MR.cjs');
var chunkDXBKMGUM_cjs = require('./chunk-DXBKMGUM.cjs');
var uiCore = require('@layerzerolabs/ui-core');
var ethers = require('ethers');
var multicall$1 = require('@0xsequence/multicall');
var memoize = require('micro-memoize');
var providers = require('@ethersproject/providers');
var logger$1 = require('@ethersproject/logger');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var memoize__default = /*#__PURE__*/_interopDefault(memoize);

// src/constants.ts
var ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
var ONE_ADDRESS = "0x0000000000000000000000000000000000000001";
var AddressOne = ONE_ADDRESS;
var AddressZero = ZERO_ADDRESS;

// src/wallet.ts
var ProviderRpcErrorCode = /* @__PURE__ */ ((ProviderRpcErrorCode2) => {
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["ACCOUNT_ACCESS_REJECTED"] = 4001] = "ACCOUNT_ACCESS_REJECTED";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["ACCOUNT_ACCESS_ALREADY_REQUESTED"] = -32002] = "ACCOUNT_ACCESS_ALREADY_REQUESTED";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["UNAUTHORIZED"] = 4100] = "UNAUTHORIZED";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["INVALID_PARAMS"] = -32602] = "INVALID_PARAMS";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["UNSUPPORTED_METHOD"] = 4200] = "UNSUPPORTED_METHOD";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["DISCONNECTED"] = 4900] = "DISCONNECTED";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["CHAIN_DISCONNECTED"] = 4901] = "CHAIN_DISCONNECTED";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["CHAIN_NOT_ADDED"] = 4902] = "CHAIN_NOT_ADDED";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["DOES_NOT_EXIST"] = -32601] = "DOES_NOT_EXIST";
  return ProviderRpcErrorCode2;
})(ProviderRpcErrorCode || {});

// src/randomize.ts
function randomizeOrder(items) {
  let remaining = items.slice();
  const result = [];
  while (remaining.length > 1) {
    const item = randomWeighted(remaining);
    result.push(item);
    remaining = remaining.filter((anItem) => anItem !== item);
  }
  result.push(...remaining);
  return result;
}
function randomWeighted(objects, defaultWeight = 1) {
  const totalWeight = objects.reduce((agg, object) => agg + (object.weight ?? defaultWeight), 0);
  const randomNumber = Math.random() * totalWeight;
  let weightSum = 0;
  for (const object of objects) {
    weightSum += object.weight ?? defaultWeight;
    if (randomNumber <= weightSum)
      return object;
  }
  return void 0;
}
var noop = {
  estimateGas() {
    throw new Error("estimateGas not implemented.");
  },
  estimateNative() {
    throw new Error("estimateNative not implemented.");
  }
};
function createTransaction(populatedTransaction, options) {
  const { provider, chainKey } = options;
  async function unwrap() {
    return populatedTransaction;
  }
  async function signAndSubmitTransaction(signer) {
    const transactionRequest = await populatedTransaction;
    if (chainKey === "taiko" && provider) {
      const minGasPrice = ethers.BigNumber.from(9e7);
      const currentGasPrice = await provider.getGasPrice();
      const gasPrice = minGasPrice.gt(currentGasPrice) ? minGasPrice : currentGasPrice;
      transactionRequest.gasPrice = gasPrice;
    }
    if (chainKey) {
      applyEIP155(transactionRequest, chainKey);
    }
    const response = await signer.sendTransaction(transactionRequest);
    return {
      txHash: response.hash,
      async wait() {
        const receipt = await response.wait();
        return {
          txHash: receipt.transactionHash
        };
      }
    };
  }
  if (provider) {
    const getGasPrice2 = options.getGasPrice ?? (() => provider.getGasPrice().then((p) => p.toBigInt()));
    const estimateGas2 = options.estimateGas ?? createEstimateGas(populatedTransaction, provider);
    const estimateNative = options.estimateNative ?? async function estimateNative2(signer) {
      const nativeChainId = (await provider.getNetwork()).chainId;
      const native = uiCore.getNetworkByNativeChainId(uiCore.ChainType.EVM, nativeChainId).nativeCurrency;
      const [gasPrice, gasUsed] = await Promise.all([getGasPrice2(), estimateGas2(signer)]);
      const amount = gasPrice * gasUsed;
      return uiCore.CurrencyAmount.fromRawAmount(native, amount);
    };
    const tx2 = {
      signAndSubmitTransaction,
      estimateGas: estimateGas2,
      estimateNative,
      unwrap
    };
    return tx2;
  }
  const tx = {
    signAndSubmitTransaction,
    estimateGas: options.estimateGas ?? noop.estimateGas,
    estimateNative: options.estimateNative ?? noop.estimateNative,
    unwrap
  };
  return tx;
}
function createEstimateGas(populatedTransaction, provider) {
  return async (signer) => {
    return (signer ?? provider).estimateGas(await populatedTransaction).then((r) => r.toBigInt());
  };
}
function applyEIP155(transactionRequest, chainKey) {
  const chainId = uiCore.getNetwork(chainKey).nativeChainId;
  if (typeof chainId !== "number")
    throw new InvalidEvmChainIdError(chainId, chainKey);
  if (transactionRequest.chainId === void 0) {
    transactionRequest.chainId = chainId;
  }
  if (transactionRequest.chainId !== chainId) {
    throw new EIP155Error(transactionRequest, chainId);
  }
}
var InvalidEvmChainIdError = class extends Error {
  constructor(chainId, chainKey) {
    super(`EVM chainId must be number, got:${chainId}`);
    this.chainId = chainId;
    this.chainKey = chainKey;
  }
};
var EIP155Error = class extends Error {
  constructor(transaction, chainId) {
    super(
      `EIP155 error: chainId ${transaction.chainId} does not match requested chainId ${chainId}`
    );
    this.transaction = transaction;
    this.chainId = chainId;
  }
};
var StaticJsonRpcBatchProvider = class extends providers.JsonRpcBatchProvider {
  _onError;
  async detectNetwork() {
    let network = this.network;
    if (network == null) {
      network = await super._ready();
    }
    return network;
  }
  send(method, params) {
    const response = super.send(method, params);
    response.catch((error) => {
      this._onError?.(error, this);
    });
    return response;
  }
  onError(handler) {
    this._onError = handler;
  }
};
var logger = new logger$1.Logger("0.0.1");
var FailoverProvider = class extends providers.BaseProvider {
  maxAttempts = 3;
  providerConfigs;
  providerEntries;
  orderedProviderEntries;
  constructor(providers2, network) {
    super(Promise.resolve(network));
    const providerConfigs = providers2.map((providerOrConfig) => {
      if (providers.Provider.isProvider(providerOrConfig)) {
        const config2 = {
          provider: providerOrConfig
        };
        return config2;
      }
      const config = {
        provider: providerOrConfig.provider
      };
      return config;
    });
    const providerEntries = /* @__PURE__ */ new Map();
    providerConfigs.forEach((config) => {
      const entry = {
        provider: config.provider,
        errors: []
      };
      providerEntries.set(config.provider, entry);
    });
    this.providerConfigs = providerConfigs;
    this.providerEntries = providerEntries;
    this.orderedProviderEntries = Array.from(providerEntries.values());
  }
  async detectNetwork() {
    return this.network;
  }
  async perform(method, params) {
    let attempt = 0;
    while (++attempt <= this.maxAttempts) {
      const provider = this.getProvider();
      if (attempt > 1) {
        logger.warn(`Attempt ${attempt}`, { provider });
      }
      try {
        return await provider.perform(method, params);
      } catch (error) {
        if (error?.code === "UNPREDICTABLE_GAS_LIMIT") {
          throw error;
        }
        logger.warn(`Attempt ${attempt} failed`, error);
        this.handleError(provider, error);
        if (attempt >= this.maxAttempts) {
          throw error;
        }
      }
    }
  }
  getProvider() {
    return this.orderedProviderEntries[0].provider;
  }
  handleError(provider, error) {
    const entry = this.getEntry(provider);
    entry.errors.push(error);
    this.updateOrder();
  }
  getEntry(provider) {
    return this.providerEntries.get(provider);
  }
  updateOrder() {
    const currentProvider = this.getProvider();
    this.orderedProviderEntries.sort((a, b) => a.errors.length - b.errors.length);
    const nextProvider = this.getProvider();
    if (nextProvider !== currentProvider) {
      logger.warn(`Next provider`, { currentProvider, nextProvider });
    }
  }
};

// src/providerFactory.ts
var noop2 = () => {
};
var createMulticallProviderFactory = (factory, multicall2) => memoize__default.default(
  (chainKey) => {
    if (!multicall2) {
      const contract = multicallDeployments[chainKey];
      if (contract)
        multicall2 = { contract };
    }
    return new multicall$1.providers.MulticallProvider(factory(chainKey), multicall2);
  },
  { maxSize: Number.POSITIVE_INFINITY }
);
var createFailoverProviderFactory = (rpcMap = uiCore.createRpcMap(), options) => {
  return memoize__default.default(
    (chainKey) => {
      const rpcList = rpcMap[chainKey];
      if (!rpcList)
        throw new Error(`No rpcs for ${chainKey}`);
      return createFailoverProvider(chainKey, rpcList, options);
    },
    { maxSize: Number.POSITIVE_INFINITY }
  );
};
function createFailoverProvider(chainKey, rpcList, options = {}) {
  const network = uiCore.getNetwork(chainKey);
  if (!rpcList || rpcList.length === 0) {
    throw new Error(`No rpcs for ${chainKey}`);
  }
  const providers2 = randomizeOrder(rpcList).map((rpc) => {
    return new StaticJsonRpcBatchProvider(
      options.connectionInfo ? options.connectionInfo(rpc, chainKey) : { url: rpc.url, timeout: rpc.timeout },
      {
        chainId: Number(network.nativeChainId),
        name: network.name
      }
    );
  });
  providers2.forEach((provider) => {
    provider.onError(options.onError ?? noop2);
    provider.on("debug", options.onDebug ?? noop2);
  });
  return new FailoverProvider(providers2, {
    chainId: Number(network.nativeChainId),
    name: network.name
  });
}
var _0xSequenceDeployment = "0xd130B43062D875a4B7aF3f8fc036Bc6e9D3E1B3E";
var multicallDeployments = {
  ethereum: _0xSequenceDeployment,
  goerli: _0xSequenceDeployment,
  sepolia: _0xSequenceDeployment,
  bsc: _0xSequenceDeployment,
  "bsc-testnet": _0xSequenceDeployment,
  polygon: _0xSequenceDeployment,
  mumbai: _0xSequenceDeployment,
  zkevm: _0xSequenceDeployment,
  "zkevm-testnet": _0xSequenceDeployment,
  optimism: _0xSequenceDeployment,
  "optimism-goerli": _0xSequenceDeployment,
  arbitrum: _0xSequenceDeployment,
  "arbitrum-goerli": _0xSequenceDeployment,
  avalanche: _0xSequenceDeployment,
  fuji: _0xSequenceDeployment,
  base: _0xSequenceDeployment,
  "base-goerli": _0xSequenceDeployment,
  nova: _0xSequenceDeployment,
  // layerzero deployments
  scroll: "0xFEe867ed545F26621Dc701e6164e02Ead9c6B081",
  mantle: "0x3617dA335F75164809B540bA31bdf79DE6cB1Ee3"
};
function serializeAdapterParams(adapterParams) {
  if (adapterParams.version === 1) {
    if (adapterParams.extraGas === 0) {
      return "0x";
    }
    return ethers.utils.solidityPack(["uint16", "uint256"], [1, adapterParams.extraGas]);
  } else {
    uiCore.assert(adapterParams.dstNativeAmount);
    return ethers.utils.solidityPack(
      ["uint16", "uint", "uint", "address"],
      [
        2,
        adapterParams.extraGas,
        adapterParams.dstNativeAmount.quotient,
        adapterParams.dstNativeAddress
      ]
    );
  }
}
var BalanceProvider__evm = class {
  constructor(providerFactory) {
    this.providerFactory = providerFactory;
  }
  supports(token) {
    return uiCore.tryGetNetwork(token.chainKey)?.chainType === uiCore.ChainType.EVM;
  }
  getBalance(token, address) {
    if (uiCore.isCoin(token))
      return this.getNativeBalance(token, address);
    if (uiCore.isToken(token))
      return this.getErc20Balance(token, address);
    throw new Error("Invalid token");
  }
  async getNativeBalance(token, address) {
    uiCore.assert(uiCore.isEvmAddress(address), "Non EVM address");
    uiCore.assert(uiCore.isCoin(token));
    const balance = await this.providerFactory(token.chainKey).getBalance(address);
    return uiCore.CurrencyAmount.fromBigInt(token, balance.toBigInt());
  }
  async getErc20Balance(token, address) {
    uiCore.assert(uiCore.isEvmAddress(address), "Non EVM address");
    uiCore.assert(uiCore.isToken(token));
    try {
      const erc20 = chunkZWL5EJV7_cjs.ERC20__factory.connect(token.address, this.providerFactory(token.chainKey));
      const balance = await erc20.balanceOf(address);
      return uiCore.CurrencyAmount.fromBigInt(token, balance.toBigInt());
    } catch (e) {
      console.error(
        `Error fetching balance for token ${token.address} on ${token.chainKey} for ${address}`,
        e
      );
      throw e;
    }
  }
};

// ../../node_modules/p-settle/index.js
var p_settle_exports = {};
chunkDXBKMGUM_cjs.__export(p_settle_exports, {
  default: () => p_settle_default
});

// ../../node_modules/p-limit/index.js
var p_limit_exports = {};
chunkDXBKMGUM_cjs.__export(p_limit_exports, {
  default: () => p_limit_default
});

// ../../node_modules/p-try/index.js
var p_try_exports = {};
chunkDXBKMGUM_cjs.__export(p_try_exports, {
  default: () => p_try_default
});
var exports$1 = {};
var module$1 = {
  get exports() {
    return exports$1;
  },
  set exports(value) {
    exports$1 = value;
  }
};
var pTry = (fn, ...arguments_) => new Promise((resolve) => {
  resolve(fn(...arguments_));
});
module$1.exports = pTry;
module$1.exports.default = pTry;
var p_try_default = module$1.exports;

// ../../node_modules/p-limit/index.js
function $$cjs_default$$(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global !== "undefined" && global || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global !== "undefined" && global || typeof globalThis !== "undefined" && globalThis || {};
var exports2 = {};
var module2 = {
  get exports() {
    return exports2;
  },
  set exports(value) {
    exports2 = value;
  }
};
var pTry2 = $$cjs_default$$(typeof p_try_exports !== "undefined" ? p_try_exports : {});
var pLimit = (concurrency) => {
  if (!((Number.isInteger(concurrency) || concurrency === Infinity) && concurrency > 0)) {
    return Promise.reject(new TypeError("Expected `concurrency` to be a number from 1 and up"));
  }
  const queue = [];
  let activeCount = 0;
  const next = () => {
    activeCount--;
    if (queue.length > 0) {
      queue.shift()();
    }
  };
  const run = (fn, resolve, ...args) => {
    activeCount++;
    const result = pTry2(fn, ...args);
    resolve(result);
    result.then(next, next);
  };
  const enqueue = (fn, resolve, ...args) => {
    if (activeCount < concurrency) {
      run(fn, resolve, ...args);
    } else {
      queue.push(run.bind(null, fn, resolve, ...args));
    }
  };
  const generator = (fn, ...args) => new Promise((resolve) => enqueue(fn, resolve, ...args));
  Object.defineProperties(generator, {
    activeCount: {
      get: () => activeCount
    },
    pendingCount: {
      get: () => queue.length
    },
    clearQueue: {
      value: () => {
        queue.length = 0;
      }
    }
  });
  return generator;
};
module2.exports = pLimit;
module2.exports.default = pLimit;
var p_limit_default = module2.exports;

// ../../node_modules/p-reflect/index.js
var p_reflect_exports = {};
chunkDXBKMGUM_cjs.__export(p_reflect_exports, {
  default: () => p_reflect_default
});
var exports3 = {};
var module3 = {
  get exports() {
    return exports3;
  },
  set exports(value) {
    exports3 = value;
  }
};
var pReflect = async (promise) => {
  try {
    const value = await promise;
    return {
      isFulfilled: true,
      isRejected: false,
      value
    };
  } catch (error) {
    return {
      isFulfilled: false,
      isRejected: true,
      reason: error
    };
  }
};
module3.exports = pReflect;
module3.exports.default = pReflect;
var p_reflect_default = module3.exports;

// ../../node_modules/p-settle/index.js
function $$cjs_default$$2(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global2 !== "undefined" && global2 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global2 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global2 !== "undefined" && global2 || typeof globalThis !== "undefined" && globalThis || {};
var exports4 = {};
var module4 = {
  get exports() {
    return exports4;
  },
  set exports(value) {
    exports4 = value;
  }
};
var pReflect2 = $$cjs_default$$2(typeof p_reflect_exports !== "undefined" ? p_reflect_exports : {});
var pLimit2 = $$cjs_default$$2(typeof p_limit_exports !== "undefined" ? p_limit_exports : {});
module4.exports = async (array, options = {}) => {
  const { concurrency = Infinity } = options;
  const limit = pLimit2(concurrency);
  return Promise.all(array.map((element) => {
    if (element && typeof element.then === "function") {
      return pReflect2(element);
    }
    if (typeof element === "function") {
      return pReflect2(limit(() => element()));
    }
    return pReflect2(Promise.resolve(element));
  }));
};
var p_settle_default = module4.exports;

// ../../node_modules/map-age-cleaner/dist/index.js
var dist_exports = {};
chunkDXBKMGUM_cjs.__export(dist_exports, {
  default: () => dist_default
});

// ../../node_modules/p-defer/index.js
var p_defer_exports = {};
chunkDXBKMGUM_cjs.__export(p_defer_exports, {
  default: () => p_defer_default
});
var exports5 = {};
var module5 = {
  get exports() {
    return exports5;
  },
  set exports(value) {
    exports5 = value;
  }
};
module5.exports = () => {
  const ret = {};
  ret.promise = new Promise((resolve, reject) => {
    ret.resolve = resolve;
    ret.reject = reject;
  });
  return ret;
};
var p_defer_default = module5.exports;

// ../../node_modules/map-age-cleaner/dist/index.js
function $$cjs_default$$3(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global3 !== "undefined" && global3 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global3 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global3 !== "undefined" && global3 || typeof globalThis !== "undefined" && globalThis || {};
var exports6 = {};
var module6 = {
  get exports() {
    return exports6;
  },
  set exports(value) {
    exports6 = value;
  }
};
var __awaiter = function(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : new P(function(resolve2) {
        resolve2(result.value);
      }).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports6, "__esModule", { value: true });
var p_defer_1 = __importDefault($$cjs_default$$3(typeof p_defer_exports !== "undefined" ? p_defer_exports : {}));
function mapAgeCleaner(map, property = "maxAge") {
  let processingKey;
  let processingTimer;
  let processingDeferred;
  const cleanup = () => __awaiter(this, void 0, void 0, function* () {
    if (processingKey !== void 0) {
      return;
    }
    const setupTimer = (item) => __awaiter(this, void 0, void 0, function* () {
      processingDeferred = p_defer_1.default();
      const delay = item[1][property] - Date.now();
      if (delay <= 0) {
        map.delete(item[0]);
        processingDeferred.resolve();
        return;
      }
      processingKey = item[0];
      processingTimer = setTimeout(() => {
        map.delete(item[0]);
        if (processingDeferred) {
          processingDeferred.resolve();
        }
      }, delay);
      if (typeof processingTimer.unref === "function") {
        processingTimer.unref();
      }
      return processingDeferred.promise;
    });
    try {
      for (const entry of map) {
        yield setupTimer(entry);
      }
    } catch (_a) {
    }
    processingKey = void 0;
  });
  const reset = () => {
    processingKey = void 0;
    if (processingTimer !== void 0) {
      clearTimeout(processingTimer);
      processingTimer = void 0;
    }
    if (processingDeferred !== void 0) {
      processingDeferred.reject(void 0);
      processingDeferred = void 0;
    }
  };
  const originalSet = map.set.bind(map);
  map.set = (key, value) => {
    if (map.has(key)) {
      map.delete(key);
    }
    const result = originalSet(key, value);
    if (processingKey && processingKey === key) {
      reset();
    }
    cleanup();
    return result;
  };
  cleanup();
  return map;
}
exports6.default = mapAgeCleaner;
module6.exports = mapAgeCleaner;
module6.exports.default = mapAgeCleaner;
var dist_default = module6.exports != null && typeof module6.exports === "object" && "default" in module6.exports ? module6.exports.default : module6.exports;

// ../../node_modules/mimic-fn/index.js
var mimic_fn_exports = {};
chunkDXBKMGUM_cjs.__export(mimic_fn_exports, {
  default: () => mimic_fn_default
});
var exports7 = {};
var module7 = {
  get exports() {
    return exports7;
  },
  set exports(value) {
    exports7 = value;
  }
};
var copyProperty = (to, from, property, ignoreNonConfigurable) => {
  if (property === "length" || property === "prototype") {
    return;
  }
  if (property === "arguments" || property === "caller") {
    return;
  }
  const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
  const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
  if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
    return;
  }
  Object.defineProperty(to, property, fromDescriptor);
};
var canCopyProperty = function(toDescriptor, fromDescriptor) {
  return toDescriptor === void 0 || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
};
var changePrototype = (to, from) => {
  const fromPrototype = Object.getPrototypeOf(from);
  if (fromPrototype === Object.getPrototypeOf(to)) {
    return;
  }
  Object.setPrototypeOf(to, fromPrototype);
};
var wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/
${fromBody}`;
var toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
var toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name");
var changeToString = (to, from, name) => {
  const withName = name === "" ? "" : `with ${name.trim()}() `;
  const newToString = wrappedToString.bind(null, withName, from.toString());
  Object.defineProperty(newToString, "name", toStringName);
  Object.defineProperty(to, "toString", { ...toStringDescriptor, value: newToString });
};
var mimicFn = (to, from, { ignoreNonConfigurable = false } = {}) => {
  const { name } = to;
  for (const property of Reflect.ownKeys(from)) {
    copyProperty(to, from, property, ignoreNonConfigurable);
  }
  changePrototype(to, from);
  changeToString(to, from, name);
  return to;
};
module7.exports = mimicFn;
var mimic_fn_default = module7.exports;

// ../../node_modules/p-memoize/index.js
function $$cjs_default$$4(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global4 !== "undefined" && global4 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global4 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global4 !== "undefined" && global4 || typeof globalThis !== "undefined" && globalThis || {};
var exports8 = {};
var module8 = {
  get exports() {
    return exports8;
  },
  set exports(value) {
    exports8 = value;
  }
};
var mimicFn2 = $$cjs_default$$4(typeof mimic_fn_exports !== "undefined" ? mimic_fn_exports : {});
var mapAgeCleaner2 = $$cjs_default$$4(typeof dist_exports !== "undefined" ? dist_exports : {});
var pSettle = $$cjs_default$$4(typeof p_settle_exports !== "undefined" ? p_settle_exports : {});
var cacheStore = /* @__PURE__ */ new WeakMap();
var pMemoize = (fn, { cachePromiseRejection = false, ...options } = {}) => {
  const { maxAge, cacheKey: cacheKey2 } = options;
  const cache = options.cache || /* @__PURE__ */ new Map();
  if (Number.isSafeInteger(maxAge)) {
    mapAgeCleaner2(cache);
  } else if (typeof maxAge !== "undefined") {
    throw new TypeError("maxAge is not a safe integer.");
  }
  const memoized = async function(...arguments_) {
    const key = cacheKey2 ? cacheKey2(arguments_) : arguments_[0];
    const cacheItem = cache.get(key);
    if (cacheItem) {
      return cacheItem.data;
    }
    const promise = fn.apply(this, arguments_);
    cache.set(key, {
      data: promise,
      // Ref. https://github.com/sindresorhus/p-memoize/issues/39#issuecomment-985301556
      maxAge: 2 ** 31 - 1
    });
    const [{ reason }] = await pSettle([promise]);
    if (!cachePromiseRejection && reason) {
      cache.delete(key);
    } else if (maxAge) {
      cache.set(key, {
        data: promise,
        maxAge: Date.now() + maxAge
      });
    }
    return promise;
  };
  mimicFn2(memoized, fn);
  cacheStore.set(memoized, cache);
  return memoized;
};
module8.exports = pMemoize;
module8.exports.clear = (memoized) => {
  if (!cacheStore.has(memoized)) {
    throw new Error("Can't clear a function that was not memoized!");
  }
  const cache = cacheStore.get(memoized);
  if (typeof cache.clear !== "function") {
    throw new TypeError("The cache Map can't be cleared!");
  }
  cache.clear();
};
if (Object.isExtensible(module8.exports) && Object.keys(module8.exports).length === 1) {
  module8.exports["clear"];
}
var p_memoize_default = module8.exports;

// src/ERC20__api.ts
var ERC20 = class {
  constructor(token, contract) {
    this.token = token;
    this.contract = contract;
  }
  async balanceOf(account) {
    const balance = await this.contract.balanceOf(account);
    return uiCore.CurrencyAmount.fromBigInt(this.token, balance.toBigInt());
  }
  async allowance(owner, spender) {
    const amount = await this.contract.allowance(owner, spender);
    return uiCore.CurrencyAmount.fromBigInt(this.token, amount.toBigInt());
  }
  async totalSupply() {
    const totalSupply = await this.contract.totalSupply();
    return uiCore.CurrencyAmount.fromBigInt(this.token, totalSupply.toBigInt());
  }
  async approve(amount, spender) {
    uiCore.assert(amount.token.equals(this.token), "token");
    const { contract } = this;
    const populatedTransaction = contract.populateTransaction.approve(spender, amount.quotient);
    return createTransaction(populatedTransaction, {
      provider: contract.provider,
      chainKey: this.token.chainKey
    });
  }
};
async function getToken(chainKey, address, provider) {
  const erc20 = chunkZWL5EJV7_cjs.ERC20__factory.connect(address, provider);
  const [symbol, decimals, name] = await Promise.all([
    erc20.symbol(),
    erc20.decimals(),
    erc20.name()
  ]);
  return uiCore.Token.from({ chainKey, address, decimals, symbol, name });
}
var ERC20__api = class {
  constructor(providerFactory) {
    this.providerFactory = providerFactory;
  }
  forToken(currency) {
    uiCore.assert(uiCore.isToken(currency), "token");
    const provider = this.providerFactory(currency.chainKey);
    const contract = chunkZWL5EJV7_cjs.ERC20__factory.connect(currency.address, provider);
    return new ERC20(currency, contract);
  }
  getToken = p_memoize_default(
    ({ chainKey, address }) => {
      return getToken(chainKey, address, this.providerFactory(chainKey));
    },
    {
      cacheKey: ([{ chainKey, address }]) => chainKey + ":" + address.toLowerCase()
    }
  );
  async getTransferEvents(chainKey, txHash) {
    const provider = this.providerFactory(chainKey);
    const receipt = await provider.getTransactionReceipt(txHash);
    const events = await Promise.all(
      receipt.logs.map((log) => this.tryParseTransferEvent(chainKey, log))
    );
    return events.flatMap((event) => event ? [event] : []);
  }
  async tryParseTransferEvent(chainKey, log) {
    const iface = chunkZWL5EJV7_cjs.ERC20__factory.createInterface();
    const event = iface.getEvent("Transfer");
    const topicHash = iface.getEventTopic(event);
    if (log.topics[0] !== topicHash)
      return void 0;
    try {
      const description = iface.parseLog(log);
      const tokenAddress = log.address;
      const token = await this.getToken({ chainKey, address: tokenAddress });
      const value = uiCore.CurrencyAmount.fromBigInt(token, description.args.value.toBigInt());
      return {
        event: {
          name: event.name,
          namespace: "ERC20"
        },
        args: {
          from: description.args.from,
          to: description.args.to,
          value
        },
        address: tokenAddress,
        chainKey
      };
    } catch {
    }
  }
};
function hexZeroPadTo32(addr) {
  return ethers.ethers.utils.hexZeroPad(addr, 32);
}
function trim0x(str) {
  return str.replace(/^0x/, "");
}
function addressToBytes32(address) {
  if (uiCore.isSolanaAddress(address)) {
    return ethers.utils.base58.decode(address);
  } else if (address.startsWith("0x") && address.length <= 66) {
    return ethers.utils.arrayify(hexZeroPadTo32(address));
  }
  throw new Error("Invalid address");
}

// src/utils/options.ts
var OptionType = /* @__PURE__ */ ((OptionType2) => {
  OptionType2[OptionType2["TYPE_1"] = 1] = "TYPE_1";
  OptionType2[OptionType2["TYPE_2"] = 2] = "TYPE_2";
  OptionType2[OptionType2["TYPE_3"] = 3] = "TYPE_3";
  return OptionType2;
})(OptionType || {});
var MAX_UINT_128 = ethers.ethers.BigNumber.from("0xffffffffffffffffffffffffffffffff");
function optionsType1(_extraGas) {
  const extraGas = ethers.ethers.BigNumber.from(_extraGas);
  uiCore.assert(extraGas.lte(MAX_UINT_128), "extraGas should be less than MAX_UINT_128");
  return ethers.ethers.utils.solidityPack(["uint16", "uint256"], [1 /* TYPE_1 */, extraGas]);
}
function optionsType2(_extraGas, _dstNativeAmt, _dstNativeAddress) {
  const extraGas = ethers.ethers.BigNumber.from(_extraGas);
  uiCore.assert(extraGas.lte(MAX_UINT_128), "extraGas should be less than MAX_UINT_128");
  const dstNativeAmt = ethers.ethers.BigNumber.from(_dstNativeAmt);
  uiCore.assert(dstNativeAmt.lte(MAX_UINT_128), "dstNativeAmt should be less than MAX_UINT_128");
  return ethers.ethers.utils.solidityPack(
    ["uint16", "uint256", "uint256", "bytes"],
    [
      2 /* TYPE_2 */,
      ethers.ethers.BigNumber.from(extraGas),
      ethers.ethers.BigNumber.from(dstNativeAmt),
      _dstNativeAddress
    ]
  );
}
var WorkerId = /* @__PURE__ */ ((WorkerId2) => {
  WorkerId2[WorkerId2["EXECUTOR"] = 1] = "EXECUTOR";
  WorkerId2[WorkerId2["VERIFIER"] = 2] = "VERIFIER";
  WorkerId2[WorkerId2["TREASURY"] = 255] = "TREASURY";
  return WorkerId2;
})(WorkerId || {});
var ExecutorOptionType = /* @__PURE__ */ ((ExecutorOptionType2) => {
  ExecutorOptionType2[ExecutorOptionType2["LZ_RECEIVE"] = 1] = "LZ_RECEIVE";
  ExecutorOptionType2[ExecutorOptionType2["NATIVE_DROP"] = 2] = "NATIVE_DROP";
  ExecutorOptionType2[ExecutorOptionType2["COMPOSE"] = 3] = "COMPOSE";
  ExecutorOptionType2[ExecutorOptionType2["ORDERED"] = 4] = "ORDERED";
  return ExecutorOptionType2;
})(ExecutorOptionType || {});
var VerifierOptionType = /* @__PURE__ */ ((VerifierOptionType2) => {
  VerifierOptionType2[VerifierOptionType2["PRECRIME"] = 1] = "PRECRIME";
  return VerifierOptionType2;
})(VerifierOptionType || {});
var Options = class {
  workerOptions = [];
  // dissuade public instantiation
  constructor() {
  }
  /**
   * Create a new options instance.
   */
  static newOptions() {
    return new Options();
  }
  /**
   * Create an options instance from a hex string.
   * @param {string} optionsHex The hex string to decode.
   */
  static fromOptions(optionsHex) {
    const options = new Options();
    const optionsBytes = ethers.ethers.utils.arrayify(optionsHex);
    const optionsType = ethers.ethers.BigNumber.from(optionsBytes.slice(0, 2)).toNumber();
    if (optionsType === 3 /* TYPE_3 */) {
      let cursor = 2;
      while (cursor < optionsBytes.byteLength) {
        const workerId = ethers.ethers.BigNumber.from(optionsBytes.slice(cursor, cursor + 1)).toNumber();
        cursor += 1;
        const size4 = ethers.ethers.BigNumber.from(optionsBytes.slice(cursor, cursor + 2)).toNumber();
        cursor += 2;
        if (workerId === 1 /* EXECUTOR */) {
          const optionType = ethers.ethers.BigNumber.from(
            optionsBytes.slice(cursor, cursor + 1)
          ).toNumber();
          cursor += 1;
          const params = optionsBytes.slice(cursor, cursor + size4 - 1);
          cursor += size4 - 1;
          options.addOption(workerId, { type: optionType, params: ethers.ethers.utils.hexlify(params) });
        } else if (workerId === 2 /* VERIFIER */) {
          const verifierIdx = ethers.ethers.BigNumber.from(
            optionsBytes.slice(cursor, cursor + 1)
          ).toNumber();
          cursor += 1;
          const optionType = ethers.ethers.BigNumber.from(
            optionsBytes.slice(cursor, cursor + 1)
          ).toNumber();
          cursor += 1;
          const params = optionsBytes.slice(cursor, cursor + size4 - 2);
          cursor += size4 - 2;
          options.addOption(workerId, {
            type: optionType,
            index: verifierIdx,
            params: ethers.ethers.utils.hexlify(params)
          });
        }
      }
    } else if (optionsType === 2 /* TYPE_2 */) {
      const extraGas = ethers.ethers.BigNumber.from(optionsBytes.slice(2, 34)).toBigInt();
      const dstNativeAmt = ethers.ethers.BigNumber.from(optionsBytes.slice(34, 66)).toBigInt();
      const dstNativeAddress = ethers.ethers.utils.hexlify(
        optionsBytes.slice(66, optionsBytes.byteLength)
      );
      options.addExecutorLzReceiveOption(extraGas).addExecutorNativeDropOption(dstNativeAmt, dstNativeAddress);
    } else if (optionsType === 1 /* TYPE_1 */) {
      const extraGas = ethers.ethers.BigNumber.from(optionsBytes.slice(2, 34)).toBigInt();
      options.addExecutorLzReceiveOption(extraGas);
    }
    return options;
  }
  /**
   * Add ExecutorOptionType.LZ_RECEIVE option.
   * @param {GasLimit} gasLimit
   * @param {NativeDrop} nativeDrop
   */
  addExecutorLzReceiveOption(gasLimit, nativeDrop = 0) {
    const gasLimitBN = ethers.ethers.BigNumber.from(gasLimit);
    uiCore.assert(gasLimitBN.lte(MAX_UINT_128), "gasLimit shouldn't be greater than MAX_UINT_128");
    const nativeDropBN = ethers.ethers.BigNumber.from(nativeDrop);
    uiCore.assert(nativeDropBN.lte(MAX_UINT_128), "value shouldn't be greater than MAX_UINT_128");
    this.addOption(1 /* EXECUTOR */, {
      type: 1 /* LZ_RECEIVE */,
      params: nativeDropBN.eq(0) ? ethers.ethers.utils.solidityPack(["uint128"], [gasLimitBN]) : ethers.ethers.utils.solidityPack(["uint128", "uint128"], [gasLimitBN, nativeDropBN])
    });
    return this;
  }
  /**
   * Add ExecutorOptionType.NATIVE_DROP option.
   * @param {NativeDrop} nativeDrop
   * @param {string} receiver
   */
  addExecutorNativeDropOption(nativeDrop, receiver) {
    const amountBN = ethers.ethers.BigNumber.from(nativeDrop);
    uiCore.assert(amountBN.lte(MAX_UINT_128), "nativeDrop shouldn't be greater than MAX_UINT_128");
    this.addOption(1 /* EXECUTOR */, {
      type: 2 /* NATIVE_DROP */,
      params: ethers.ethers.utils.solidityPack(
        ["uint128", "bytes32"],
        [amountBN, hexZeroPadTo32(receiver)]
      )
    });
    return this;
  }
  /**
   * Add ExecutorOptionType.COMPOSE option.
   * @param {number} index
   * @param {GasLimit} gasLimit
   * @param {NativeDrop} nativeDrop
   */
  addExecutorComposeOption(index2, gasLimit, nativeDrop = 0) {
    const gasLimitBN = ethers.ethers.BigNumber.from(gasLimit);
    uiCore.assert(gasLimitBN.lte(MAX_UINT_128), "gasLimit shouldn't be greater than MAX_UINT_128");
    const nativeDropBN = ethers.ethers.BigNumber.from(nativeDrop);
    uiCore.assert(nativeDropBN.lte(MAX_UINT_128), "nativeDrop shouldn't be greater than MAX_UINT_128");
    const option = nativeDropBN.gt(0) ? {
      type: 3 /* COMPOSE */,
      params: ethers.ethers.utils.solidityPack(
        ["uint16", "uint128", "uint128"],
        [index2, gasLimitBN, nativeDropBN]
      )
    } : {
      type: 3 /* COMPOSE */,
      params: ethers.ethers.utils.solidityPack(["uint16", "uint128"], [index2, gasLimitBN])
    };
    this.addOption(1 /* EXECUTOR */, option);
    return this;
  }
  /**
   * Add ExecutorOptionType.ORDERED option.
   */
  addExecutorOrderedExecutionOption() {
    this.addOption(1 /* EXECUTOR */, {
      type: 4 /* ORDERED */,
      params: "0x"
    });
    return this;
  }
  /**
   * Add VerifierOptionType.PRECRIME option.
   * @param {number} verifierIdx
   */
  addVerifierPrecrimeOption(verifierIdx) {
    this.addOption(2 /* VERIFIER */, {
      type: 1 /* PRECRIME */,
      index: verifierIdx,
      params: "0x"
    });
    return this;
  }
  /**
   * Serialize Options to hex string.
   */
  toHex() {
    let hex = ethers.ethers.utils.solidityPack(["uint16"], [3 /* TYPE_3 */]);
    this.workerOptions.forEach((w) => {
      for (const option of w.options) {
        if (w.workerId === 1 /* EXECUTOR */) {
          hex += trim0x(
            ethers.ethers.utils.solidityPack(
              ["uint8", "uint16", "uint8", "bytes"],
              [w.workerId, trim0x(option.params).length / 2 + 1, option.type, option.params]
            )
          );
        } else if (w.workerId === 2 /* VERIFIER */) {
          const verifierOption = option;
          hex += trim0x(
            ethers.ethers.utils.solidityPack(
              ["uint8", "uint16", "uint8", "uint8", "bytes"],
              [
                w.workerId,
                trim0x(option.params).length / 2 + 2,
                verifierOption.index,
                verifierOption.type,
                verifierOption.params
              ]
            )
          );
        }
      }
    });
    return hex;
  }
  /**
   * Serialize Options to Uint8Array.
   */
  toBytes() {
    return ethers.ethers.utils.arrayify(this.toHex());
  }
  addOption(workerId, option) {
    const worker = this.workerOptions.find((w) => w.workerId === workerId);
    if (worker) {
      worker.options.push(option);
    } else {
      this.workerOptions.push({ workerId, options: [option] });
    }
  }
  /**
   * Decode ExecutorOptionType.LZ_RECEIVE option.  Returns undefined if the option is not present.
   */
  decodeExecutorLzReceiveOption() {
    const options = this.findOptions(1 /* EXECUTOR */, 1 /* LZ_RECEIVE */);
    if (!options || options.length === 0) {
      return;
    }
    let totalGas = ethers.ethers.BigNumber.from(0).toBigInt();
    let totalValue = ethers.ethers.BigNumber.from(0).toBigInt();
    for (const option of options) {
      const buffer2 = Buffer.from(trim0x(option.params), "hex");
      const gas = ethers.ethers.BigNumber.from(buffer2.subarray(0, 16)).toBigInt();
      if (buffer2.length === 16) {
        return { gas, value: ethers.ethers.BigNumber.from(0).toBigInt() };
      }
      const value = ethers.ethers.BigNumber.from(buffer2.subarray(16, 32)).toBigInt();
      totalGas = totalGas + gas;
      totalValue = totalValue + value;
    }
    return { gas: totalGas, value: totalValue };
  }
  /**
   * Decode ExecutorOptionType.NATIVE_DROP options.  Returns undefined if the options is not present.
   */
  decodeExecutorNativeDropOption() {
    const options = this.findOptions(1 /* EXECUTOR */, 2 /* NATIVE_DROP */);
    if (!options || options.length === 0) {
      return [];
    }
    const results = options.reduce(
      (acc, cur) => {
        const buffer2 = Buffer.from(trim0x(cur.params), "hex");
        const amount = ethers.ethers.BigNumber.from(buffer2.subarray(0, 16)).toBigInt();
        const receiver = ethers.ethers.utils.hexlify(buffer2.subarray(16, 48));
        if (acc[receiver]) {
          acc[receiver]["amount"] = acc[receiver].amount + amount;
        } else {
          acc[receiver] = { amount, receiver };
        }
        return acc;
      },
      {}
    );
    return Object.values(results);
  }
  /**
   * Decode ExecutorOptionType.COMPOSE options.  Returns undefined if the options is not present.
   */
  decodeExecutorComposeOption() {
    const options = this.findOptions(1 /* EXECUTOR */, 3 /* COMPOSE */);
    if (!options || options.length === 0) {
      return [];
    }
    const results = options.reduce(
      (acc, cur) => {
        const buffer2 = Buffer.from(trim0x(cur.params), "hex");
        const index2 = ethers.ethers.BigNumber.from(buffer2.subarray(0, 2)).toNumber();
        const gas = ethers.ethers.BigNumber.from(buffer2.subarray(2, 18)).toBigInt();
        const value = (buffer2.length === 34 ? ethers.ethers.BigNumber.from(buffer2.subarray(18, 34)) : ethers.ethers.BigNumber.from(0)).toBigInt();
        if (acc[index2]) {
          acc[index2]["gas"] = acc[index2].gas + gas;
          acc[index2]["value"] = acc[index2].value + value;
        } else {
          acc[index2] = { index: index2, gas, value };
        }
        return acc;
      },
      {}
    );
    return Object.values(results);
  }
  /**
   * Decode ExecutorOptionType.ORDERED options.  Returns undefined if the options is not present.
   */
  decodeExecutorOrderedExecutionOption() {
    const option = this.findOptions(1 /* EXECUTOR */, 4 /* ORDERED */);
    return option !== void 0;
  }
  findOptions(workerId, optionType) {
    const worker = this.workerOptions.find((w) => w.workerId === workerId);
    if (worker) {
      if (optionType === 4 /* ORDERED */) {
        return worker.options.find((o) => o.type === optionType);
      }
      return worker.options.filter((o) => o.type === optionType);
    }
  }
  /**
   * Find VerifierOption by verifierIdx and optionType.  Returns undefined if the option is not present.
   * @param {number} verifierIdx
   * @param {number} optionType
   */
  findVerifierOption(verifierIdx, optionType) {
    const worker = this.workerOptions.find((w) => w.workerId === 2 /* VERIFIER */);
    if (worker) {
      const opt = worker.options.find(
        (o) => o.type === optionType && o.index === verifierIdx
      );
      if (opt) {
        return opt;
      }
    }
  }
};

// ../../node_modules/viem/_esm/utils/getAction.js
function getAction(client, actionFn, name) {
  const action_implicit = client[actionFn.name];
  if (typeof action_implicit === "function")
    return action_implicit;
  const action_explicit = client[name];
  if (typeof action_explicit === "function")
    return action_explicit;
  return (params) => actionFn(client, params);
}

// ../../node_modules/viem/_esm/errors/log.js
var FilterTypeNotSupportedError = class extends chunkYTZHD2MR_cjs.BaseError {
  constructor(type) {
    super(`Filter type "${type}" is not supported.`, {
      name: "FilterTypeNotSupportedError"
    });
  }
};

// ../../node_modules/viem/_esm/utils/abi/encodeEventTopics.js
var docsPath = "/docs/contract/encodeEventTopics";
function encodeEventTopics(parameters) {
  const { abi: abi2, eventName, args } = parameters;
  let abiItem = abi2[0];
  if (eventName) {
    const item = chunkYTZHD2MR_cjs.getAbiItem({ abi: abi2, name: eventName });
    if (!item)
      throw new chunkYTZHD2MR_cjs.AbiEventNotFoundError(eventName, { docsPath });
    abiItem = item;
  }
  if (abiItem.type !== "event")
    throw new chunkYTZHD2MR_cjs.AbiEventNotFoundError(void 0, { docsPath });
  const definition = chunkYTZHD2MR_cjs.formatAbiItem(abiItem);
  const signature = chunkYTZHD2MR_cjs.toEventSelector(definition);
  let topics = [];
  if (args && "inputs" in abiItem) {
    const indexedInputs = abiItem.inputs?.filter((param) => "indexed" in param && param.indexed);
    const args_ = Array.isArray(args) ? args : Object.values(args).length > 0 ? indexedInputs?.map((x) => args[x.name]) ?? [] : [];
    if (args_.length > 0) {
      topics = indexedInputs?.map((param, i) => {
        if (Array.isArray(args_[i]))
          return args_[i].map((_, j) => encodeArg({ param, value: args_[i][j] }));
        return args_[i] ? encodeArg({ param, value: args_[i] }) : null;
      }) ?? [];
    }
  }
  return [signature, ...topics];
}
function encodeArg({ param, value }) {
  if (param.type === "string" || param.type === "bytes")
    return chunkYTZHD2MR_cjs.keccak256(chunkYTZHD2MR_cjs.toBytes(value));
  if (param.type === "tuple" || param.type.match(/^(.*)\[(\d+)?\]$/))
    throw new FilterTypeNotSupportedError(param.type);
  return chunkYTZHD2MR_cjs.encodeAbiParameters([param], [value]);
}

// ../../node_modules/viem/_esm/utils/filters/createFilterRequestScope.js
function createFilterRequestScope(client, { method }) {
  const requestMap = {};
  if (client.transport.type === "fallback")
    client.transport.onResponse?.(({ method: method_, response: id, status, transport }) => {
      if (status === "success" && method === method_)
        requestMap[id] = transport.request;
    });
  return (id) => requestMap[id] || client.request;
}

// ../../node_modules/viem/_esm/actions/public/createContractEventFilter.js
async function createContractEventFilter(client, parameters) {
  const { address, abi: abi2, args, eventName, fromBlock, strict, toBlock } = parameters;
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newFilter"
  });
  const topics = eventName ? encodeEventTopics({
    abi: abi2,
    args,
    eventName
  }) : void 0;
  const id = await client.request({
    method: "eth_newFilter",
    params: [
      {
        address,
        fromBlock: typeof fromBlock === "bigint" ? chunkYTZHD2MR_cjs.numberToHex(fromBlock) : fromBlock,
        toBlock: typeof toBlock === "bigint" ? chunkYTZHD2MR_cjs.numberToHex(toBlock) : toBlock,
        topics
      }
    ]
  });
  return {
    abi: abi2,
    args,
    eventName,
    id,
    request: getRequest(id),
    strict: Boolean(strict),
    type: "event"
  };
}

// ../../node_modules/viem/_esm/utils/errors/getContractError.js
var EXECUTION_REVERTED_ERROR_CODE = 3;
function getContractError(err, { abi: abi2, address, args, docsPath: docsPath3, functionName, sender }) {
  const error = err instanceof chunkYTZHD2MR_cjs.RawContractError ? err : err instanceof chunkYTZHD2MR_cjs.BaseError ? err.walk((err2) => "data" in err2) || err.walk() : {};
  const { code, data, details, message, shortMessage } = error;
  const cause = (() => {
    if (err instanceof chunkYTZHD2MR_cjs.AbiDecodingZeroDataError)
      return new chunkYTZHD2MR_cjs.ContractFunctionZeroDataError({ functionName });
    if ([EXECUTION_REVERTED_ERROR_CODE, chunkYTZHD2MR_cjs.InternalRpcError.code].includes(code) && (data || details || message || shortMessage)) {
      return new chunkYTZHD2MR_cjs.ContractFunctionRevertedError({
        abi: abi2,
        data: typeof data === "object" ? data.data : data,
        functionName,
        message: error instanceof chunkYTZHD2MR_cjs.RpcRequestError ? details : shortMessage ?? message
      });
    }
    return err;
  })();
  return new chunkYTZHD2MR_cjs.ContractFunctionExecutionError(cause, {
    abi: abi2,
    args,
    contractAddress: address,
    docsPath: docsPath3,
    functionName,
    sender
  });
}

// ../../node_modules/viem/_esm/accounts/utils/publicKeyToAddress.js
function publicKeyToAddress(publicKey) {
  const address = chunkYTZHD2MR_cjs.keccak256(`0x${publicKey.substring(4)}`).substring(26);
  return chunkYTZHD2MR_cjs.checksumAddress(`0x${address}`);
}

// ../../node_modules/viem/_esm/utils/signature/recoverPublicKey.js
async function recoverPublicKey({ hash, signature }) {
  const hashHex = chunkYTZHD2MR_cjs.isHex(hash) ? hash : chunkYTZHD2MR_cjs.toHex(hash);
  const { secp256k1: secp256k12 } = await import('./secp256k1-KOKNXQLT.cjs');
  const signature_ = (() => {
    if (typeof signature === "object" && "r" in signature && "s" in signature) {
      const { r, s, v, yParity } = signature;
      const yParityOrV2 = Number(yParity ?? v);
      const recoveryBit2 = toRecoveryBit(yParityOrV2);
      return new secp256k12.Signature(chunkYTZHD2MR_cjs.hexToBigInt(r), chunkYTZHD2MR_cjs.hexToBigInt(s)).addRecoveryBit(recoveryBit2);
    }
    const signatureHex = chunkYTZHD2MR_cjs.isHex(signature) ? signature : chunkYTZHD2MR_cjs.toHex(signature);
    const yParityOrV = chunkYTZHD2MR_cjs.hexToNumber(`0x${signatureHex.slice(130)}`);
    const recoveryBit = toRecoveryBit(yParityOrV);
    return secp256k12.Signature.fromCompact(signatureHex.substring(2, 130)).addRecoveryBit(recoveryBit);
  })();
  const publicKey = signature_.recoverPublicKey(hashHex.substring(2)).toHex(false);
  return `0x${publicKey}`;
}
function toRecoveryBit(yParityOrV) {
  if (yParityOrV === 0 || yParityOrV === 1)
    return yParityOrV;
  if (yParityOrV === 27)
    return 0;
  if (yParityOrV === 28)
    return 1;
  throw new Error("Invalid yParityOrV value");
}

// ../../node_modules/viem/_esm/utils/signature/recoverAddress.js
async function recoverAddress({ hash, signature }) {
  return publicKeyToAddress(await recoverPublicKey({ hash, signature }));
}

// ../../node_modules/viem/_esm/utils/encoding/toRlp.js
function toRlp(bytes, to = "hex") {
  const encodable = getEncodable(bytes);
  const cursor = chunkYTZHD2MR_cjs.createCursor(new Uint8Array(encodable.length));
  encodable.encode(cursor);
  if (to === "hex")
    return chunkYTZHD2MR_cjs.bytesToHex(cursor.bytes);
  return cursor.bytes;
}
function getEncodable(bytes) {
  if (Array.isArray(bytes))
    return getEncodableList(bytes.map((x) => getEncodable(x)));
  return getEncodableBytes(bytes);
}
function getEncodableList(list) {
  const bodyLength = list.reduce((acc, x) => acc + x.length, 0);
  const sizeOfBodyLength = getSizeOfLength(bodyLength);
  const length = (() => {
    if (bodyLength <= 55)
      return 1 + bodyLength;
    return 1 + sizeOfBodyLength + bodyLength;
  })();
  return {
    length,
    encode(cursor) {
      if (bodyLength <= 55) {
        cursor.pushByte(192 + bodyLength);
      } else {
        cursor.pushByte(192 + 55 + sizeOfBodyLength);
        if (sizeOfBodyLength === 1)
          cursor.pushUint8(bodyLength);
        else if (sizeOfBodyLength === 2)
          cursor.pushUint16(bodyLength);
        else if (sizeOfBodyLength === 3)
          cursor.pushUint24(bodyLength);
        else
          cursor.pushUint32(bodyLength);
      }
      for (const { encode } of list) {
        encode(cursor);
      }
    }
  };
}
function getEncodableBytes(bytesOrHex) {
  const bytes = typeof bytesOrHex === "string" ? chunkYTZHD2MR_cjs.hexToBytes(bytesOrHex) : bytesOrHex;
  const sizeOfBytesLength = getSizeOfLength(bytes.length);
  const length = (() => {
    if (bytes.length === 1 && bytes[0] < 128)
      return 1;
    if (bytes.length <= 55)
      return 1 + bytes.length;
    return 1 + sizeOfBytesLength + bytes.length;
  })();
  return {
    length,
    encode(cursor) {
      if (bytes.length === 1 && bytes[0] < 128) {
        cursor.pushBytes(bytes);
      } else if (bytes.length <= 55) {
        cursor.pushByte(128 + bytes.length);
        cursor.pushBytes(bytes);
      } else {
        cursor.pushByte(128 + 55 + sizeOfBytesLength);
        if (sizeOfBytesLength === 1)
          cursor.pushUint8(bytes.length);
        else if (sizeOfBytesLength === 2)
          cursor.pushUint16(bytes.length);
        else if (sizeOfBytesLength === 3)
          cursor.pushUint24(bytes.length);
        else
          cursor.pushUint32(bytes.length);
        cursor.pushBytes(bytes);
      }
    }
  };
}
function getSizeOfLength(length) {
  if (length < 2 ** 8)
    return 1;
  if (length < 2 ** 16)
    return 2;
  if (length < 2 ** 24)
    return 3;
  if (length < 2 ** 32)
    return 4;
  throw new chunkYTZHD2MR_cjs.BaseError("Length is too large.");
}

// ../../node_modules/viem/_esm/experimental/eip7702/utils/hashAuthorization.js
function hashAuthorization(parameters) {
  const { chainId, contractAddress, nonce, to } = parameters;
  const hash = chunkYTZHD2MR_cjs.keccak256(chunkYTZHD2MR_cjs.concatHex([
    "0x05",
    toRlp([
      chainId ? chunkYTZHD2MR_cjs.numberToHex(chainId) : "0x",
      contractAddress,
      nonce ? chunkYTZHD2MR_cjs.numberToHex(nonce) : "0x"
    ])
  ]));
  if (to === "bytes")
    return chunkYTZHD2MR_cjs.hexToBytes(hash);
  return hash;
}

// ../../node_modules/viem/_esm/experimental/eip7702/utils/recoverAuthorizationAddress.js
async function recoverAuthorizationAddress(parameters) {
  const { authorization, signature } = parameters;
  return recoverAddress({
    hash: hashAuthorization(authorization),
    signature: signature ?? authorization
  });
}

// ../../node_modules/viem/_esm/errors/estimateGas.js
var EstimateGasExecutionError = class extends chunkYTZHD2MR_cjs.BaseError {
  constructor(cause, { account, docsPath: docsPath3, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value }) {
    const prettyArgs = chunkYTZHD2MR_cjs.prettyPrint({
      from: account?.address,
      to,
      value: typeof value !== "undefined" && `${chunkYTZHD2MR_cjs.formatEther(value)} ${chain?.nativeCurrency?.symbol || "ETH"}`,
      data,
      gas,
      gasPrice: typeof gasPrice !== "undefined" && `${chunkYTZHD2MR_cjs.formatGwei(gasPrice)} gwei`,
      maxFeePerGas: typeof maxFeePerGas !== "undefined" && `${chunkYTZHD2MR_cjs.formatGwei(maxFeePerGas)} gwei`,
      maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== "undefined" && `${chunkYTZHD2MR_cjs.formatGwei(maxPriorityFeePerGas)} gwei`,
      nonce
    });
    super(cause.shortMessage, {
      cause,
      docsPath: docsPath3,
      metaMessages: [
        ...cause.metaMessages ? [...cause.metaMessages, " "] : [],
        "Estimate Gas Arguments:",
        prettyArgs
      ].filter(Boolean),
      name: "EstimateGasExecutionError"
    });
    Object.defineProperty(this, "cause", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.cause = cause;
  }
};

// ../../node_modules/viem/_esm/utils/errors/getEstimateGasError.js
function getEstimateGasError(err, { docsPath: docsPath3, ...args }) {
  const cause = (() => {
    const cause2 = chunkYTZHD2MR_cjs.getNodeError(err, args);
    if (cause2 instanceof chunkYTZHD2MR_cjs.UnknownNodeError)
      return err;
    return cause2;
  })();
  return new EstimateGasExecutionError(cause, {
    docsPath: docsPath3,
    ...args
  });
}

// ../../node_modules/viem/_esm/errors/fee.js
var BaseFeeScalarError = class extends chunkYTZHD2MR_cjs.BaseError {
  constructor() {
    super("`baseFeeMultiplier` must be greater than 1.", {
      name: "BaseFeeScalarError"
    });
  }
};
var Eip1559FeesNotSupportedError = class extends chunkYTZHD2MR_cjs.BaseError {
  constructor() {
    super("Chain does not support EIP-1559 fees.", {
      name: "Eip1559FeesNotSupportedError"
    });
  }
};
var MaxFeePerGasTooLowError = class extends chunkYTZHD2MR_cjs.BaseError {
  constructor({ maxPriorityFeePerGas }) {
    super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${chunkYTZHD2MR_cjs.formatGwei(maxPriorityFeePerGas)} gwei).`, { name: "MaxFeePerGasTooLowError" });
  }
};

// ../../node_modules/viem/_esm/errors/block.js
var BlockNotFoundError = class extends chunkYTZHD2MR_cjs.BaseError {
  constructor({ blockHash, blockNumber }) {
    let identifier = "Block";
    if (blockHash)
      identifier = `Block at hash "${blockHash}"`;
    if (blockNumber)
      identifier = `Block at number "${blockNumber}"`;
    super(`${identifier} could not be found.`, { name: "BlockNotFoundError" });
  }
};

// ../../node_modules/viem/_esm/utils/formatters/transaction.js
var transactionType = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559",
  "0x3": "eip4844",
  "0x4": "eip7702"
};
function formatTransaction(transaction) {
  const transaction_ = {
    ...transaction,
    blockHash: transaction.blockHash ? transaction.blockHash : null,
    blockNumber: transaction.blockNumber ? BigInt(transaction.blockNumber) : null,
    chainId: transaction.chainId ? chunkYTZHD2MR_cjs.hexToNumber(transaction.chainId) : void 0,
    gas: transaction.gas ? BigInt(transaction.gas) : void 0,
    gasPrice: transaction.gasPrice ? BigInt(transaction.gasPrice) : void 0,
    maxFeePerBlobGas: transaction.maxFeePerBlobGas ? BigInt(transaction.maxFeePerBlobGas) : void 0,
    maxFeePerGas: transaction.maxFeePerGas ? BigInt(transaction.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: transaction.maxPriorityFeePerGas ? BigInt(transaction.maxPriorityFeePerGas) : void 0,
    nonce: transaction.nonce ? chunkYTZHD2MR_cjs.hexToNumber(transaction.nonce) : void 0,
    to: transaction.to ? transaction.to : null,
    transactionIndex: transaction.transactionIndex ? Number(transaction.transactionIndex) : null,
    type: transaction.type ? transactionType[transaction.type] : void 0,
    typeHex: transaction.type ? transaction.type : void 0,
    value: transaction.value ? BigInt(transaction.value) : void 0,
    v: transaction.v ? BigInt(transaction.v) : void 0
  };
  if (transaction.authorizationList)
    transaction_.authorizationList = formatAuthorizationList(transaction.authorizationList);
  transaction_.yParity = (() => {
    if (transaction.yParity)
      return Number(transaction.yParity);
    if (typeof transaction_.v === "bigint") {
      if (transaction_.v === 0n || transaction_.v === 27n)
        return 0;
      if (transaction_.v === 1n || transaction_.v === 28n)
        return 1;
      if (transaction_.v >= 35n)
        return transaction_.v % 2n === 0n ? 1 : 0;
    }
    return void 0;
  })();
  if (transaction_.type === "legacy") {
    delete transaction_.accessList;
    delete transaction_.maxFeePerBlobGas;
    delete transaction_.maxFeePerGas;
    delete transaction_.maxPriorityFeePerGas;
    delete transaction_.yParity;
  }
  if (transaction_.type === "eip2930") {
    delete transaction_.maxFeePerBlobGas;
    delete transaction_.maxFeePerGas;
    delete transaction_.maxPriorityFeePerGas;
  }
  if (transaction_.type === "eip1559") {
    delete transaction_.maxFeePerBlobGas;
  }
  return transaction_;
}
function formatAuthorizationList(authorizationList) {
  return authorizationList.map((authorization) => ({
    contractAddress: authorization.address,
    chainId: Number(authorization.chainId),
    nonce: Number(authorization.nonce),
    r: authorization.r,
    s: authorization.s,
    yParity: Number(authorization.yParity)
  }));
}

// ../../node_modules/viem/_esm/utils/formatters/block.js
function formatBlock(block) {
  const transactions = (block.transactions ?? []).map((transaction) => {
    if (typeof transaction === "string")
      return transaction;
    return formatTransaction(transaction);
  });
  return {
    ...block,
    baseFeePerGas: block.baseFeePerGas ? BigInt(block.baseFeePerGas) : null,
    blobGasUsed: block.blobGasUsed ? BigInt(block.blobGasUsed) : void 0,
    difficulty: block.difficulty ? BigInt(block.difficulty) : void 0,
    excessBlobGas: block.excessBlobGas ? BigInt(block.excessBlobGas) : void 0,
    gasLimit: block.gasLimit ? BigInt(block.gasLimit) : void 0,
    gasUsed: block.gasUsed ? BigInt(block.gasUsed) : void 0,
    hash: block.hash ? block.hash : null,
    logsBloom: block.logsBloom ? block.logsBloom : null,
    nonce: block.nonce ? block.nonce : null,
    number: block.number ? BigInt(block.number) : null,
    size: block.size ? BigInt(block.size) : void 0,
    timestamp: block.timestamp ? BigInt(block.timestamp) : void 0,
    transactions,
    totalDifficulty: block.totalDifficulty ? BigInt(block.totalDifficulty) : null
  };
}

// ../../node_modules/viem/_esm/actions/public/getBlock.js
async function getBlock(client, { blockHash, blockNumber, blockTag: blockTag_, includeTransactions: includeTransactions_ } = {}) {
  const blockTag = blockTag_ ?? "latest";
  const includeTransactions = includeTransactions_ ?? false;
  const blockNumberHex = blockNumber !== void 0 ? chunkYTZHD2MR_cjs.numberToHex(blockNumber) : void 0;
  let block = null;
  if (blockHash) {
    block = await client.request({
      method: "eth_getBlockByHash",
      params: [blockHash, includeTransactions]
    }, { dedupe: true });
  } else {
    block = await client.request({
      method: "eth_getBlockByNumber",
      params: [blockNumberHex || blockTag, includeTransactions]
    }, { dedupe: Boolean(blockNumberHex) });
  }
  if (!block)
    throw new BlockNotFoundError({ blockHash, blockNumber });
  const format = client.chain?.formatters?.block?.format || formatBlock;
  return format(block);
}

// ../../node_modules/viem/_esm/actions/public/getGasPrice.js
async function getGasPrice(client) {
  const gasPrice = await client.request({
    method: "eth_gasPrice"
  });
  return BigInt(gasPrice);
}

// ../../node_modules/viem/_esm/actions/public/estimateMaxPriorityFeePerGas.js
async function estimateMaxPriorityFeePerGas(client, args) {
  return internal_estimateMaxPriorityFeePerGas(client, args);
}
async function internal_estimateMaxPriorityFeePerGas(client, args) {
  const { block: block_, chain = client.chain, request } = args || {};
  try {
    const maxPriorityFeePerGas = chain?.fees?.maxPriorityFeePerGas ?? chain?.fees?.defaultPriorityFee;
    if (typeof maxPriorityFeePerGas === "function") {
      const block = block_ || await getAction(client, getBlock, "getBlock")({});
      const maxPriorityFeePerGas_ = await maxPriorityFeePerGas({
        block,
        client,
        request
      });
      if (maxPriorityFeePerGas_ === null)
        throw new Error();
      return maxPriorityFeePerGas_;
    }
    if (typeof maxPriorityFeePerGas !== "undefined")
      return maxPriorityFeePerGas;
    const maxPriorityFeePerGasHex = await client.request({
      method: "eth_maxPriorityFeePerGas"
    });
    return chunkYTZHD2MR_cjs.hexToBigInt(maxPriorityFeePerGasHex);
  } catch {
    const [block, gasPrice] = await Promise.all([
      block_ ? Promise.resolve(block_) : getAction(client, getBlock, "getBlock")({}),
      getAction(client, getGasPrice, "getGasPrice")({})
    ]);
    if (typeof block.baseFeePerGas !== "bigint")
      throw new Eip1559FeesNotSupportedError();
    const maxPriorityFeePerGas = gasPrice - block.baseFeePerGas;
    if (maxPriorityFeePerGas < 0n)
      return 0n;
    return maxPriorityFeePerGas;
  }
}

// ../../node_modules/viem/_esm/actions/public/estimateFeesPerGas.js
async function estimateFeesPerGas(client, args) {
  return internal_estimateFeesPerGas(client, args);
}
async function internal_estimateFeesPerGas(client, args) {
  const { block: block_, chain = client.chain, request, type = "eip1559" } = args || {};
  const baseFeeMultiplier = await (async () => {
    if (typeof chain?.fees?.baseFeeMultiplier === "function")
      return chain.fees.baseFeeMultiplier({
        block: block_,
        client,
        request
      });
    return chain?.fees?.baseFeeMultiplier ?? 1.2;
  })();
  if (baseFeeMultiplier < 1)
    throw new BaseFeeScalarError();
  const decimals = baseFeeMultiplier.toString().split(".")[1]?.length ?? 0;
  const denominator = 10 ** decimals;
  const multiply = (base) => base * BigInt(Math.ceil(baseFeeMultiplier * denominator)) / BigInt(denominator);
  const block = block_ ? block_ : await getAction(client, getBlock, "getBlock")({});
  if (typeof chain?.fees?.estimateFeesPerGas === "function") {
    const fees = await chain.fees.estimateFeesPerGas({
      block: block_,
      client,
      multiply,
      request,
      type
    });
    if (fees !== null)
      return fees;
  }
  if (type === "eip1559") {
    if (typeof block.baseFeePerGas !== "bigint")
      throw new Eip1559FeesNotSupportedError();
    const maxPriorityFeePerGas = typeof request?.maxPriorityFeePerGas === "bigint" ? request.maxPriorityFeePerGas : await internal_estimateMaxPriorityFeePerGas(client, {
      block,
      chain,
      request
    });
    const baseFeePerGas = multiply(block.baseFeePerGas);
    const maxFeePerGas = request?.maxFeePerGas ?? baseFeePerGas + maxPriorityFeePerGas;
    return {
      maxFeePerGas,
      maxPriorityFeePerGas
    };
  }
  const gasPrice = request?.gasPrice ?? multiply(await getAction(client, getGasPrice, "getGasPrice")({}));
  return {
    gasPrice
  };
}

// ../../node_modules/viem/_esm/actions/public/getTransactionCount.js
async function getTransactionCount(client, { address, blockTag = "latest", blockNumber }) {
  const count = await client.request({
    method: "eth_getTransactionCount",
    params: [address, blockNumber ? chunkYTZHD2MR_cjs.numberToHex(blockNumber) : blockTag]
  }, { dedupe: Boolean(blockNumber) });
  return chunkYTZHD2MR_cjs.hexToNumber(count);
}

// ../../node_modules/viem/_esm/utils/blob/blobsToCommitments.js
function blobsToCommitments(parameters) {
  const { kzg } = parameters;
  const to = parameters.to ?? (typeof parameters.blobs[0] === "string" ? "hex" : "bytes");
  const blobs = typeof parameters.blobs[0] === "string" ? parameters.blobs.map((x) => chunkYTZHD2MR_cjs.hexToBytes(x)) : parameters.blobs;
  const commitments = [];
  for (const blob of blobs)
    commitments.push(Uint8Array.from(kzg.blobToKzgCommitment(blob)));
  return to === "bytes" ? commitments : commitments.map((x) => chunkYTZHD2MR_cjs.bytesToHex(x));
}

// ../../node_modules/viem/_esm/utils/blob/blobsToProofs.js
function blobsToProofs(parameters) {
  const { kzg } = parameters;
  const to = parameters.to ?? (typeof parameters.blobs[0] === "string" ? "hex" : "bytes");
  const blobs = typeof parameters.blobs[0] === "string" ? parameters.blobs.map((x) => chunkYTZHD2MR_cjs.hexToBytes(x)) : parameters.blobs;
  const commitments = typeof parameters.commitments[0] === "string" ? parameters.commitments.map((x) => chunkYTZHD2MR_cjs.hexToBytes(x)) : parameters.commitments;
  const proofs = [];
  for (let i = 0; i < blobs.length; i++) {
    const blob = blobs[i];
    const commitment = commitments[i];
    proofs.push(Uint8Array.from(kzg.computeBlobKzgProof(blob, commitment)));
  }
  return to === "bytes" ? proofs : proofs.map((x) => chunkYTZHD2MR_cjs.bytesToHex(x));
}

// ../../node_modules/viem/node_modules/@noble/hashes/esm/_md.js
function setBigUint64(view, byteOffset, value, isLE) {
  if (typeof view.setBigUint64 === "function")
    return view.setBigUint64(byteOffset, value, isLE);
  const _32n = BigInt(32);
  const _u32_max = BigInt(4294967295);
  const wh = Number(value >> _32n & _u32_max);
  const wl = Number(value & _u32_max);
  const h = isLE ? 4 : 0;
  const l = isLE ? 0 : 4;
  view.setUint32(byteOffset + h, wh, isLE);
  view.setUint32(byteOffset + l, wl, isLE);
}
var Chi = (a, b, c) => a & b ^ ~a & c;
var Maj = (a, b, c) => a & b ^ a & c ^ b & c;
var HashMD = class extends chunkYTZHD2MR_cjs.Hash {
  constructor(blockLen, outputLen, padOffset, isLE) {
    super();
    this.blockLen = blockLen;
    this.outputLen = outputLen;
    this.padOffset = padOffset;
    this.isLE = isLE;
    this.finished = false;
    this.length = 0;
    this.pos = 0;
    this.destroyed = false;
    this.buffer = new Uint8Array(blockLen);
    this.view = chunkYTZHD2MR_cjs.createView(this.buffer);
  }
  update(data) {
    chunkYTZHD2MR_cjs.aexists(this);
    const { view, buffer: buffer2, blockLen } = this;
    data = chunkYTZHD2MR_cjs.toBytes2(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        const dataView = chunkYTZHD2MR_cjs.createView(data);
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(dataView, pos);
        continue;
      }
      buffer2.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(view, 0);
        this.pos = 0;
      }
    }
    this.length += data.length;
    this.roundClean();
    return this;
  }
  digestInto(out) {
    chunkYTZHD2MR_cjs.aexists(this);
    chunkYTZHD2MR_cjs.aoutput(out, this);
    this.finished = true;
    const { buffer: buffer2, view, blockLen, isLE } = this;
    let { pos } = this;
    buffer2[pos++] = 128;
    this.buffer.subarray(pos).fill(0);
    if (this.padOffset > blockLen - pos) {
      this.process(view, 0);
      pos = 0;
    }
    for (let i = pos; i < blockLen; i++)
      buffer2[i] = 0;
    setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
    this.process(view, 0);
    const oview = chunkYTZHD2MR_cjs.createView(out);
    const len = this.outputLen;
    if (len % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const outLen = len / 4;
    const state = this.get();
    if (outLen > state.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let i = 0; i < outLen; i++)
      oview.setUint32(4 * i, state[i], isLE);
  }
  digest() {
    const { buffer: buffer2, outputLen } = this;
    this.digestInto(buffer2);
    const res = buffer2.slice(0, outputLen);
    this.destroy();
    return res;
  }
  _cloneInto(to) {
    to || (to = new this.constructor());
    to.set(...this.get());
    const { blockLen, buffer: buffer2, length, finished, destroyed, pos } = this;
    to.length = length;
    to.pos = pos;
    to.finished = finished;
    to.destroyed = destroyed;
    if (length % blockLen)
      to.buffer.set(buffer2);
    return to;
  }
};

// ../../node_modules/viem/node_modules/@noble/hashes/esm/sha256.js
var SHA256_K = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
var SHA256_IV = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
var SHA256_W = /* @__PURE__ */ new Uint32Array(64);
var SHA256 = class extends HashMD {
  constructor() {
    super(64, 32, 8, false);
    this.A = SHA256_IV[0] | 0;
    this.B = SHA256_IV[1] | 0;
    this.C = SHA256_IV[2] | 0;
    this.D = SHA256_IV[3] | 0;
    this.E = SHA256_IV[4] | 0;
    this.F = SHA256_IV[5] | 0;
    this.G = SHA256_IV[6] | 0;
    this.H = SHA256_IV[7] | 0;
  }
  get() {
    const { A, B, C, D, E, F, G, H } = this;
    return [A, B, C, D, E, F, G, H];
  }
  // prettier-ignore
  set(A, B, C, D, E, F, G, H) {
    this.A = A | 0;
    this.B = B | 0;
    this.C = C | 0;
    this.D = D | 0;
    this.E = E | 0;
    this.F = F | 0;
    this.G = G | 0;
    this.H = H | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      SHA256_W[i] = view.getUint32(offset, false);
    for (let i = 16; i < 64; i++) {
      const W15 = SHA256_W[i - 15];
      const W2 = SHA256_W[i - 2];
      const s0 = chunkYTZHD2MR_cjs.rotr(W15, 7) ^ chunkYTZHD2MR_cjs.rotr(W15, 18) ^ W15 >>> 3;
      const s1 = chunkYTZHD2MR_cjs.rotr(W2, 17) ^ chunkYTZHD2MR_cjs.rotr(W2, 19) ^ W2 >>> 10;
      SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
    }
    let { A, B, C, D, E, F, G, H } = this;
    for (let i = 0; i < 64; i++) {
      const sigma1 = chunkYTZHD2MR_cjs.rotr(E, 6) ^ chunkYTZHD2MR_cjs.rotr(E, 11) ^ chunkYTZHD2MR_cjs.rotr(E, 25);
      const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
      const sigma0 = chunkYTZHD2MR_cjs.rotr(A, 2) ^ chunkYTZHD2MR_cjs.rotr(A, 13) ^ chunkYTZHD2MR_cjs.rotr(A, 22);
      const T2 = sigma0 + Maj(A, B, C) | 0;
      H = G;
      G = F;
      F = E;
      E = D + T1 | 0;
      D = C;
      C = B;
      B = A;
      A = T1 + T2 | 0;
    }
    A = A + this.A | 0;
    B = B + this.B | 0;
    C = C + this.C | 0;
    D = D + this.D | 0;
    E = E + this.E | 0;
    F = F + this.F | 0;
    G = G + this.G | 0;
    H = H + this.H | 0;
    this.set(A, B, C, D, E, F, G, H);
  }
  roundClean() {
    SHA256_W.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0);
    this.buffer.fill(0);
  }
};
var sha256 = /* @__PURE__ */ chunkYTZHD2MR_cjs.wrapConstructor(() => new SHA256());

// ../../node_modules/viem/_esm/utils/hash/sha256.js
function sha2562(value, to_) {
  const to = to_ || "hex";
  const bytes = sha256(chunkYTZHD2MR_cjs.isHex(value, { strict: false }) ? chunkYTZHD2MR_cjs.toBytes(value) : value);
  if (to === "bytes")
    return bytes;
  return chunkYTZHD2MR_cjs.toHex(bytes);
}

// ../../node_modules/viem/_esm/utils/blob/commitmentToVersionedHash.js
function commitmentToVersionedHash(parameters) {
  const { commitment, version: version2 = 1 } = parameters;
  const to = parameters.to ?? (typeof commitment === "string" ? "hex" : "bytes");
  const versionedHash = sha2562(commitment, "bytes");
  versionedHash.set([version2], 0);
  return to === "bytes" ? versionedHash : chunkYTZHD2MR_cjs.bytesToHex(versionedHash);
}

// ../../node_modules/viem/_esm/utils/blob/commitmentsToVersionedHashes.js
function commitmentsToVersionedHashes(parameters) {
  const { commitments, version: version2 } = parameters;
  const to = parameters.to ?? (typeof commitments[0] === "string" ? "hex" : "bytes");
  const hashes = [];
  for (const commitment of commitments) {
    hashes.push(commitmentToVersionedHash({
      commitment,
      to,
      version: version2
    }));
  }
  return hashes;
}

// ../../node_modules/viem/_esm/constants/blob.js
var blobsPerTransaction = 6;
var bytesPerFieldElement = 32;
var fieldElementsPerBlob = 4096;
var bytesPerBlob = bytesPerFieldElement * fieldElementsPerBlob;
var maxBytesPerTransaction = bytesPerBlob * blobsPerTransaction - // terminator byte (0x80).
1 - // zero byte (0x00) appended to each field element.
1 * fieldElementsPerBlob * blobsPerTransaction;

// ../../node_modules/viem/_esm/errors/blob.js
var BlobSizeTooLargeError = class extends chunkYTZHD2MR_cjs.BaseError {
  constructor({ maxSize, size: size4 }) {
    super("Blob size is too large.", {
      metaMessages: [`Max: ${maxSize} bytes`, `Given: ${size4} bytes`],
      name: "BlobSizeTooLargeError"
    });
  }
};
var EmptyBlobError = class extends chunkYTZHD2MR_cjs.BaseError {
  constructor() {
    super("Blob data must not be empty.", { name: "EmptyBlobError" });
  }
};

// ../../node_modules/viem/_esm/utils/blob/toBlobs.js
function toBlobs(parameters) {
  const to = parameters.to ?? (typeof parameters.data === "string" ? "hex" : "bytes");
  const data = typeof parameters.data === "string" ? chunkYTZHD2MR_cjs.hexToBytes(parameters.data) : parameters.data;
  const size_ = chunkYTZHD2MR_cjs.size(data);
  if (!size_)
    throw new EmptyBlobError();
  if (size_ > maxBytesPerTransaction)
    throw new BlobSizeTooLargeError({
      maxSize: maxBytesPerTransaction,
      size: size_
    });
  const blobs = [];
  let active = true;
  let position = 0;
  while (active) {
    const blob = chunkYTZHD2MR_cjs.createCursor(new Uint8Array(bytesPerBlob));
    let size4 = 0;
    while (size4 < fieldElementsPerBlob) {
      const bytes = data.slice(position, position + (bytesPerFieldElement - 1));
      blob.pushByte(0);
      blob.pushBytes(bytes);
      if (bytes.length < 31) {
        blob.pushByte(128);
        active = false;
        break;
      }
      size4++;
      position += 31;
    }
    blobs.push(blob);
  }
  return to === "bytes" ? blobs.map((x) => x.bytes) : blobs.map((x) => chunkYTZHD2MR_cjs.bytesToHex(x.bytes));
}

// ../../node_modules/viem/_esm/utils/blob/toBlobSidecars.js
function toBlobSidecars(parameters) {
  const { data, kzg, to } = parameters;
  const blobs = parameters.blobs ?? toBlobs({ data, to });
  const commitments = parameters.commitments ?? blobsToCommitments({ blobs, kzg, to });
  const proofs = parameters.proofs ?? blobsToProofs({ blobs, commitments, kzg, to });
  const sidecars = [];
  for (let i = 0; i < blobs.length; i++)
    sidecars.push({
      blob: blobs[i],
      commitment: commitments[i],
      proof: proofs[i]
    });
  return sidecars;
}

// ../../node_modules/viem/_esm/utils/transaction/getTransactionType.js
function getTransactionType(transaction) {
  if (transaction.type)
    return transaction.type;
  if (typeof transaction.authorizationList !== "undefined")
    return "eip7702";
  if (typeof transaction.blobs !== "undefined" || typeof transaction.blobVersionedHashes !== "undefined" || typeof transaction.maxFeePerBlobGas !== "undefined" || typeof transaction.sidecars !== "undefined")
    return "eip4844";
  if (typeof transaction.maxFeePerGas !== "undefined" || typeof transaction.maxPriorityFeePerGas !== "undefined") {
    return "eip1559";
  }
  if (typeof transaction.gasPrice !== "undefined") {
    if (typeof transaction.accessList !== "undefined")
      return "eip2930";
    return "legacy";
  }
  throw new chunkYTZHD2MR_cjs.InvalidSerializableTransactionError({ transaction });
}

// ../../node_modules/viem/_esm/actions/public/getChainId.js
async function getChainId(client) {
  const chainIdHex = await client.request({
    method: "eth_chainId"
  }, { dedupe: true });
  return chunkYTZHD2MR_cjs.hexToNumber(chainIdHex);
}

// ../../node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js
var defaultParameters = [
  "blobVersionedHashes",
  "chainId",
  "fees",
  "gas",
  "nonce",
  "type"
];
async function prepareTransactionRequest(client, args) {
  const { account: account_ = client.account, blobs, chain, gas, kzg, nonce, nonceManager, parameters = defaultParameters, type } = args;
  const account = account_ ? chunkYTZHD2MR_cjs.parseAccount(account_) : account_;
  const request = { ...args, ...account ? { from: account?.address } : {} };
  let block;
  async function getBlock2() {
    if (block)
      return block;
    block = await getAction(client, getBlock, "getBlock")({ blockTag: "latest" });
    return block;
  }
  let chainId;
  async function getChainId2() {
    if (chainId)
      return chainId;
    if (chain)
      return chain.id;
    if (typeof args.chainId !== "undefined")
      return args.chainId;
    const chainId_ = await getAction(client, getChainId, "getChainId")({});
    chainId = chainId_;
    return chainId;
  }
  if ((parameters.includes("blobVersionedHashes") || parameters.includes("sidecars")) && blobs && kzg) {
    const commitments = blobsToCommitments({ blobs, kzg });
    if (parameters.includes("blobVersionedHashes")) {
      const versionedHashes = commitmentsToVersionedHashes({
        commitments,
        to: "hex"
      });
      request.blobVersionedHashes = versionedHashes;
    }
    if (parameters.includes("sidecars")) {
      const proofs = blobsToProofs({ blobs, commitments, kzg });
      const sidecars = toBlobSidecars({
        blobs,
        commitments,
        proofs,
        to: "hex"
      });
      request.sidecars = sidecars;
    }
  }
  if (parameters.includes("chainId"))
    request.chainId = await getChainId2();
  if ((parameters.includes("fees") || parameters.includes("type")) && typeof type === "undefined") {
    try {
      request.type = getTransactionType(request);
    } catch {
      const block2 = await getBlock2();
      request.type = typeof block2?.baseFeePerGas === "bigint" ? "eip1559" : "legacy";
    }
  }
  if (parameters.includes("fees")) {
    if (request.type !== "legacy" && request.type !== "eip2930") {
      if (typeof request.maxFeePerGas === "undefined" || typeof request.maxPriorityFeePerGas === "undefined") {
        const block2 = await getBlock2();
        const { maxFeePerGas, maxPriorityFeePerGas } = await internal_estimateFeesPerGas(client, {
          block: block2,
          chain,
          request
        });
        if (typeof args.maxPriorityFeePerGas === "undefined" && args.maxFeePerGas && args.maxFeePerGas < maxPriorityFeePerGas)
          throw new MaxFeePerGasTooLowError({
            maxPriorityFeePerGas
          });
        request.maxPriorityFeePerGas = maxPriorityFeePerGas;
        request.maxFeePerGas = maxFeePerGas;
      }
    } else {
      if (typeof args.maxFeePerGas !== "undefined" || typeof args.maxPriorityFeePerGas !== "undefined")
        throw new Eip1559FeesNotSupportedError();
      const block2 = await getBlock2();
      const { gasPrice: gasPrice_ } = await internal_estimateFeesPerGas(client, {
        block: block2,
        chain,
        request,
        type: "legacy"
      });
      request.gasPrice = gasPrice_;
    }
  }
  if (parameters.includes("gas") && typeof gas === "undefined")
    request.gas = await getAction(client, estimateGas, "estimateGas")({
      ...request,
      account: account ? { address: account.address, type: "json-rpc" } : account
    });
  if (parameters.includes("nonce") && typeof nonce === "undefined" && account) {
    if (nonceManager) {
      const chainId2 = await getChainId2();
      request.nonce = await nonceManager.consume({
        address: account.address,
        chainId: chainId2,
        client
      });
    } else {
      request.nonce = await getAction(client, getTransactionCount, "getTransactionCount")({
        address: account.address,
        blockTag: "pending"
      });
    }
  }
  chunkYTZHD2MR_cjs.assertRequest(request);
  delete request.parameters;
  return request;
}

// ../../node_modules/viem/_esm/actions/public/getBalance.js
async function getBalance(client, { address, blockNumber, blockTag = "latest" }) {
  const blockNumberHex = blockNumber ? chunkYTZHD2MR_cjs.numberToHex(blockNumber) : void 0;
  const balance = await client.request({
    method: "eth_getBalance",
    params: [address, blockNumberHex || blockTag]
  });
  return BigInt(balance);
}

// ../../node_modules/viem/_esm/actions/public/estimateGas.js
async function estimateGas(client, args) {
  const { account: account_ = client.account } = args;
  const account = account_ ? chunkYTZHD2MR_cjs.parseAccount(account_) : void 0;
  try {
    let estimateGas_rpc = function(parameters) {
      const { block: block2, request: request2, rpcStateOverride: rpcStateOverride2 } = parameters;
      return client.request({
        method: "eth_estimateGas",
        params: rpcStateOverride2 ? [request2, block2 ?? "latest", rpcStateOverride2] : block2 ? [request2, block2] : [request2]
      });
    };
    const { accessList, authorizationList, blobs, blobVersionedHashes, blockNumber, blockTag, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, value, stateOverride, ...rest } = await prepareTransactionRequest(client, {
      ...args,
      parameters: (
        // Some RPC Providers do not compute versioned hashes from blobs. We will need
        // to compute them.
        account?.type === "local" ? void 0 : ["blobVersionedHashes"]
      )
    });
    const blockNumberHex = blockNumber ? chunkYTZHD2MR_cjs.numberToHex(blockNumber) : void 0;
    const block = blockNumberHex || blockTag;
    const rpcStateOverride = chunkYTZHD2MR_cjs.serializeStateOverride(stateOverride);
    const to = await (async () => {
      if (rest.to)
        return rest.to;
      if (authorizationList && authorizationList.length > 0)
        return await recoverAuthorizationAddress({
          authorization: authorizationList[0]
        }).catch(() => {
          throw new chunkYTZHD2MR_cjs.BaseError("`to` is required. Could not infer from `authorizationList`");
        });
      return void 0;
    })();
    chunkYTZHD2MR_cjs.assertRequest(args);
    const chainFormat = client.chain?.formatters?.transactionRequest?.format;
    const format = chainFormat || chunkYTZHD2MR_cjs.formatTransactionRequest;
    const request = format({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...chunkYTZHD2MR_cjs.extract(rest, { format: chainFormat }),
      from: account?.address,
      accessList,
      authorizationList,
      blobs,
      blobVersionedHashes,
      data,
      gas,
      gasPrice,
      maxFeePerBlobGas,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      to,
      value
    });
    let estimate = BigInt(await estimateGas_rpc({ block, request, rpcStateOverride }));
    if (authorizationList) {
      const value2 = await getBalance(client, { address: request.from });
      const estimates = await Promise.all(authorizationList.map(async (authorization) => {
        const { contractAddress } = authorization;
        const estimate2 = await estimateGas_rpc({
          block,
          request: {
            authorizationList: void 0,
            data,
            from: account?.address,
            to: contractAddress,
            value: chunkYTZHD2MR_cjs.numberToHex(value2)
          },
          rpcStateOverride
        }).catch(() => 100000n);
        return 2n * BigInt(estimate2);
      }));
      estimate += estimates.reduce((acc, curr) => acc + curr, 0n);
    }
    return estimate;
  } catch (err) {
    throw getEstimateGasError(err, {
      ...args,
      account,
      chain: client.chain
    });
  }
}

// ../../node_modules/viem/_esm/actions/public/estimateContractGas.js
async function estimateContractGas(client, parameters) {
  const { abi: abi2, address, args, functionName, dataSuffix, ...request } = parameters;
  const data = chunkYTZHD2MR_cjs.encodeFunctionData({
    abi: abi2,
    args,
    functionName
  });
  try {
    const gas = await getAction(client, estimateGas, "estimateGas")({
      data: `${data}${dataSuffix ? dataSuffix.replace("0x", "") : ""}`,
      to: address,
      ...request
    });
    return gas;
  } catch (error) {
    const account = request.account ? chunkYTZHD2MR_cjs.parseAccount(request.account) : void 0;
    throw getContractError(error, {
      abi: abi2,
      address,
      args,
      docsPath: "/docs/contract/estimateContractGas",
      functionName,
      sender: account?.address
    });
  }
}

// ../../node_modules/viem/_esm/utils/abi/decodeEventLog.js
var docsPath2 = "/docs/contract/decodeEventLog";
function decodeEventLog(parameters) {
  const { abi: abi2, data, strict: strict_, topics } = parameters;
  const strict = strict_ ?? true;
  const [signature, ...argTopics] = topics;
  if (!signature)
    throw new chunkYTZHD2MR_cjs.AbiEventSignatureEmptyTopicsError({ docsPath: docsPath2 });
  const abiItem = (() => {
    if (abi2.length === 1)
      return abi2[0];
    return abi2.find((x) => x.type === "event" && signature === chunkYTZHD2MR_cjs.toEventSelector(chunkYTZHD2MR_cjs.formatAbiItem(x)));
  })();
  if (!(abiItem && "name" in abiItem) || abiItem.type !== "event")
    throw new chunkYTZHD2MR_cjs.AbiEventSignatureNotFoundError(signature, { docsPath: docsPath2 });
  const { name, inputs } = abiItem;
  const isUnnamed = inputs?.some((x) => !("name" in x && x.name));
  let args = isUnnamed ? [] : {};
  const indexedInputs = inputs.filter((x) => "indexed" in x && x.indexed);
  for (let i = 0; i < indexedInputs.length; i++) {
    const param = indexedInputs[i];
    const topic = argTopics[i];
    if (!topic)
      throw new chunkYTZHD2MR_cjs.DecodeLogTopicsMismatch({
        abiItem,
        param
      });
    args[isUnnamed ? i : param.name || i] = decodeTopic({ param, value: topic });
  }
  const nonIndexedInputs = inputs.filter((x) => !("indexed" in x && x.indexed));
  if (nonIndexedInputs.length > 0) {
    if (data && data !== "0x") {
      try {
        const decodedData = chunkYTZHD2MR_cjs.decodeAbiParameters(nonIndexedInputs, data);
        if (decodedData) {
          if (isUnnamed)
            args = [...args, ...decodedData];
          else {
            for (let i = 0; i < nonIndexedInputs.length; i++) {
              args[nonIndexedInputs[i].name] = decodedData[i];
            }
          }
        }
      } catch (err) {
        if (strict) {
          if (err instanceof chunkYTZHD2MR_cjs.AbiDecodingDataSizeTooSmallError || err instanceof chunkYTZHD2MR_cjs.PositionOutOfBoundsError)
            throw new chunkYTZHD2MR_cjs.DecodeLogDataMismatch({
              abiItem,
              data,
              params: nonIndexedInputs,
              size: chunkYTZHD2MR_cjs.size(data)
            });
          throw err;
        }
      }
    } else if (strict) {
      throw new chunkYTZHD2MR_cjs.DecodeLogDataMismatch({
        abiItem,
        data: "0x",
        params: nonIndexedInputs,
        size: 0
      });
    }
  }
  return {
    eventName: name,
    args: Object.values(args).length > 0 ? args : void 0
  };
}
function decodeTopic({ param, value }) {
  if (param.type === "string" || param.type === "bytes" || param.type === "tuple" || param.type.match(/^(.*)\[(\d+)?\]$/))
    return value;
  const decodedArg = chunkYTZHD2MR_cjs.decodeAbiParameters([param], value) || [];
  return decodedArg[0];
}

// ../../node_modules/viem/_esm/utils/abi/parseEventLogs.js
function parseEventLogs(parameters) {
  const { abi: abi2, args, logs, strict = true } = parameters;
  const eventName = (() => {
    if (!parameters.eventName)
      return void 0;
    if (Array.isArray(parameters.eventName))
      return parameters.eventName;
    return [parameters.eventName];
  })();
  return logs.map((log) => {
    try {
      const abiItem = abi2.find((abiItem2) => abiItem2.type === "event" && log.topics[0] === chunkYTZHD2MR_cjs.toEventSelector(abiItem2));
      if (!abiItem)
        return null;
      const event = decodeEventLog({
        ...log,
        abi: [abiItem],
        strict
      });
      if (eventName && !eventName.includes(event.eventName))
        return null;
      if (!includesArgs({
        args: event.args,
        inputs: abiItem.inputs,
        matchArgs: args
      }))
        return null;
      return { ...event, ...log };
    } catch (err) {
      let eventName2;
      let isUnnamed;
      if (err instanceof chunkYTZHD2MR_cjs.AbiEventSignatureNotFoundError)
        return null;
      if (err instanceof chunkYTZHD2MR_cjs.DecodeLogDataMismatch || err instanceof chunkYTZHD2MR_cjs.DecodeLogTopicsMismatch) {
        if (strict)
          return null;
        eventName2 = err.abiItem.name;
        isUnnamed = err.abiItem.inputs?.some((x) => !("name" in x && x.name));
      }
      return { ...log, args: isUnnamed ? [] : {}, eventName: eventName2 };
    }
  }).filter(Boolean);
}
function includesArgs(parameters) {
  const { args, inputs, matchArgs } = parameters;
  if (!matchArgs)
    return true;
  if (!args)
    return false;
  function isEqual(input, value, arg) {
    try {
      if (input.type === "address")
        return chunkYTZHD2MR_cjs.isAddressEqual(value, arg);
      if (input.type === "string" || input.type === "bytes")
        return chunkYTZHD2MR_cjs.keccak256(chunkYTZHD2MR_cjs.toBytes(value)) === arg;
      return value === arg;
    } catch {
      return false;
    }
  }
  if (Array.isArray(args) && Array.isArray(matchArgs)) {
    return matchArgs.every((value, index2) => {
      if (value === null || value === void 0)
        return true;
      const input = inputs[index2];
      if (!input)
        return false;
      const value_ = Array.isArray(value) ? value : [value];
      return value_.some((value2) => isEqual(input, value2, args[index2]));
    });
  }
  if (typeof args === "object" && !Array.isArray(args) && typeof matchArgs === "object" && !Array.isArray(matchArgs))
    return Object.entries(matchArgs).every(([key, value]) => {
      if (value === null || value === void 0)
        return true;
      const input = inputs.find((input2) => input2.name === key);
      if (!input)
        return false;
      const value_ = Array.isArray(value) ? value : [value];
      return value_.some((value2) => isEqual(input, value2, args[key]));
    });
  return false;
}

// ../../node_modules/viem/_esm/utils/formatters/log.js
function formatLog(log, { args, eventName } = {}) {
  return {
    ...log,
    blockHash: log.blockHash ? log.blockHash : null,
    blockNumber: log.blockNumber ? BigInt(log.blockNumber) : null,
    logIndex: log.logIndex ? Number(log.logIndex) : null,
    transactionHash: log.transactionHash ? log.transactionHash : null,
    transactionIndex: log.transactionIndex ? Number(log.transactionIndex) : null,
    ...eventName ? { args, eventName } : {}
  };
}

// ../../node_modules/viem/_esm/actions/public/getLogs.js
async function getLogs(client, { address, blockHash, fromBlock, toBlock, event, events: events_, args, strict: strict_ } = {}) {
  const strict = strict_ ?? false;
  const events = events_ ?? (event ? [event] : void 0);
  let topics = [];
  if (events) {
    const encoded = events.flatMap((event2) => encodeEventTopics({
      abi: [event2],
      eventName: event2.name,
      args: events_ ? void 0 : args
    }));
    topics = [encoded];
    if (event)
      topics = topics[0];
  }
  let logs;
  if (blockHash) {
    logs = await client.request({
      method: "eth_getLogs",
      params: [{ address, topics, blockHash }]
    });
  } else {
    logs = await client.request({
      method: "eth_getLogs",
      params: [
        {
          address,
          topics,
          fromBlock: typeof fromBlock === "bigint" ? chunkYTZHD2MR_cjs.numberToHex(fromBlock) : fromBlock,
          toBlock: typeof toBlock === "bigint" ? chunkYTZHD2MR_cjs.numberToHex(toBlock) : toBlock
        }
      ]
    });
  }
  const formattedLogs = logs.map((log) => formatLog(log));
  if (!events)
    return formattedLogs;
  return parseEventLogs({
    abi: events,
    args,
    logs: formattedLogs,
    strict
  });
}

// ../../node_modules/viem/_esm/actions/public/getContractEvents.js
async function getContractEvents(client, parameters) {
  const { abi: abi2, address, args, blockHash, eventName, fromBlock, toBlock, strict } = parameters;
  const event = eventName ? chunkYTZHD2MR_cjs.getAbiItem({ abi: abi2, name: eventName }) : void 0;
  const events = !event ? abi2.filter((x) => x.type === "event") : void 0;
  return getAction(client, getLogs, "getLogs")({
    address,
    args,
    blockHash,
    event,
    events,
    fromBlock,
    toBlock,
    strict
  });
}

// ../../node_modules/viem/_esm/actions/public/readContract.js
async function readContract(client, parameters) {
  const { abi: abi2, address, args, functionName, ...rest } = parameters;
  const calldata = chunkYTZHD2MR_cjs.encodeFunctionData({
    abi: abi2,
    args,
    functionName
  });
  try {
    const { data } = await getAction(client, chunkYTZHD2MR_cjs.call, "call")({
      ...rest,
      data: calldata,
      to: address
    });
    return chunkYTZHD2MR_cjs.decodeFunctionResult({
      abi: abi2,
      args,
      functionName,
      data: data || "0x"
    });
  } catch (error) {
    throw getContractError(error, {
      abi: abi2,
      address,
      args,
      docsPath: "/docs/contract/readContract",
      functionName
    });
  }
}

// ../../node_modules/viem/_esm/actions/public/simulateContract.js
async function simulateContract(client, parameters) {
  const { abi: abi2, address, args, dataSuffix, functionName, ...callRequest } = parameters;
  const account = callRequest.account ? chunkYTZHD2MR_cjs.parseAccount(callRequest.account) : client.account;
  const calldata = chunkYTZHD2MR_cjs.encodeFunctionData({ abi: abi2, args, functionName });
  try {
    const { data } = await getAction(client, chunkYTZHD2MR_cjs.call, "call")({
      batch: false,
      data: `${calldata}${dataSuffix ? dataSuffix.replace("0x", "") : ""}`,
      to: address,
      ...callRequest,
      account
    });
    const result = chunkYTZHD2MR_cjs.decodeFunctionResult({
      abi: abi2,
      args,
      functionName,
      data: data || "0x"
    });
    const minimizedAbi = abi2.filter((abiItem) => "name" in abiItem && abiItem.name === parameters.functionName);
    return {
      result,
      request: {
        abi: minimizedAbi,
        address,
        args,
        dataSuffix,
        functionName,
        ...callRequest,
        account
      }
    };
  } catch (error) {
    throw getContractError(error, {
      abi: abi2,
      address,
      args,
      docsPath: "/docs/contract/simulateContract",
      functionName,
      sender: account?.address
    });
  }
}

// ../../node_modules/viem/_esm/utils/observe.js
var listenersCache = /* @__PURE__ */ new Map();
var cleanupCache = /* @__PURE__ */ new Map();
var callbackCount = 0;
function observe(observerId, callbacks, fn) {
  const callbackId = ++callbackCount;
  const getListeners = () => listenersCache.get(observerId) || [];
  const unsubscribe = () => {
    const listeners2 = getListeners();
    listenersCache.set(observerId, listeners2.filter((cb) => cb.id !== callbackId));
  };
  const unwatch = () => {
    const listeners2 = getListeners();
    if (!listeners2.some((cb) => cb.id === callbackId))
      return;
    const cleanup2 = cleanupCache.get(observerId);
    if (listeners2.length === 1 && cleanup2)
      cleanup2();
    unsubscribe();
  };
  const listeners = getListeners();
  listenersCache.set(observerId, [
    ...listeners,
    { id: callbackId, fns: callbacks }
  ]);
  if (listeners && listeners.length > 0)
    return unwatch;
  const emit = {};
  for (const key in callbacks) {
    emit[key] = (...args) => {
      const listeners2 = getListeners();
      if (listeners2.length === 0)
        return;
      for (const listener of listeners2)
        listener.fns[key]?.(...args);
    };
  }
  const cleanup = fn(emit);
  if (typeof cleanup === "function")
    cleanupCache.set(observerId, cleanup);
  return unwatch;
}

// ../../node_modules/viem/_esm/utils/wait.js
async function wait(time) {
  return new Promise((res) => setTimeout(res, time));
}

// ../../node_modules/viem/_esm/utils/poll.js
function poll(fn, { emitOnBegin, initialWaitTime, interval }) {
  let active = true;
  const unwatch = () => active = false;
  const watch = async () => {
    let data = void 0;
    if (emitOnBegin)
      data = await fn({ unpoll: unwatch });
    const initialWait = await initialWaitTime?.(data) ?? interval;
    await wait(initialWait);
    const poll2 = async () => {
      if (!active)
        return;
      await fn({ unpoll: unwatch });
      await wait(interval);
      poll2();
    };
    poll2();
  };
  watch();
  return unwatch;
}

// ../../node_modules/viem/_esm/utils/promise/withCache.js
var promiseCache = /* @__PURE__ */ new Map();
var responseCache = /* @__PURE__ */ new Map();
function getCache(cacheKey2) {
  const buildCache = (cacheKey3, cache) => ({
    clear: () => cache.delete(cacheKey3),
    get: () => cache.get(cacheKey3),
    set: (data) => cache.set(cacheKey3, data)
  });
  const promise = buildCache(cacheKey2, promiseCache);
  const response = buildCache(cacheKey2, responseCache);
  return {
    clear: () => {
      promise.clear();
      response.clear();
    },
    promise,
    response
  };
}
async function withCache(fn, { cacheKey: cacheKey2, cacheTime = Number.POSITIVE_INFINITY }) {
  const cache = getCache(cacheKey2);
  const response = cache.response.get();
  if (response && cacheTime > 0) {
    const age = (/* @__PURE__ */ new Date()).getTime() - response.created.getTime();
    if (age < cacheTime)
      return response.data;
  }
  let promise = cache.promise.get();
  if (!promise) {
    promise = fn();
    cache.promise.set(promise);
  }
  try {
    const data = await promise;
    cache.response.set({ created: /* @__PURE__ */ new Date(), data });
    return data;
  } finally {
    cache.promise.clear();
  }
}

// ../../node_modules/viem/_esm/actions/public/getBlockNumber.js
var cacheKey = (id) => `blockNumber.${id}`;
async function getBlockNumber(client, { cacheTime = client.cacheTime } = {}) {
  const blockNumberHex = await withCache(() => client.request({
    method: "eth_blockNumber"
  }), { cacheKey: cacheKey(client.uid), cacheTime });
  return BigInt(blockNumberHex);
}

// ../../node_modules/viem/_esm/actions/public/getFilterChanges.js
async function getFilterChanges(_client, { filter }) {
  const strict = "strict" in filter && filter.strict;
  const logs = await filter.request({
    method: "eth_getFilterChanges",
    params: [filter.id]
  });
  if (typeof logs[0] === "string")
    return logs;
  const formattedLogs = logs.map((log) => formatLog(log));
  if (!("abi" in filter) || !filter.abi)
    return formattedLogs;
  return parseEventLogs({
    abi: filter.abi,
    logs: formattedLogs,
    strict
  });
}

// ../../node_modules/viem/_esm/actions/public/uninstallFilter.js
async function uninstallFilter(_client, { filter }) {
  return filter.request({
    method: "eth_uninstallFilter",
    params: [filter.id]
  });
}

// ../../node_modules/viem/_esm/actions/public/watchContractEvent.js
function watchContractEvent(client, parameters) {
  const { abi: abi2, address, args, batch = true, eventName, fromBlock, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ } = parameters;
  const enablePolling = (() => {
    if (typeof poll_ !== "undefined")
      return poll_;
    if (typeof fromBlock === "bigint")
      return true;
    if (client.transport.type === "webSocket")
      return false;
    if (client.transport.type === "fallback" && client.transport.transports[0].config.type === "webSocket")
      return false;
    return true;
  })();
  const pollContractEvent = () => {
    const strict = strict_ ?? false;
    const observerId = chunkYTZHD2MR_cjs.stringify([
      "watchContractEvent",
      address,
      args,
      batch,
      client.uid,
      eventName,
      pollingInterval,
      strict,
      fromBlock
    ]);
    return observe(observerId, { onLogs, onError }, (emit) => {
      let previousBlockNumber;
      if (fromBlock !== void 0)
        previousBlockNumber = fromBlock - 1n;
      let filter;
      let initialized = false;
      const unwatch = poll(async () => {
        if (!initialized) {
          try {
            filter = await getAction(client, createContractEventFilter, "createContractEventFilter")({
              abi: abi2,
              address,
              args,
              eventName,
              strict,
              fromBlock
            });
          } catch {
          }
          initialized = true;
          return;
        }
        try {
          let logs;
          if (filter) {
            logs = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
          } else {
            const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({});
            if (previousBlockNumber && previousBlockNumber < blockNumber) {
              logs = await getAction(client, getContractEvents, "getContractEvents")({
                abi: abi2,
                address,
                args,
                eventName,
                fromBlock: previousBlockNumber + 1n,
                toBlock: blockNumber,
                strict
              });
            } else {
              logs = [];
            }
            previousBlockNumber = blockNumber;
          }
          if (logs.length === 0)
            return;
          if (batch)
            emit.onLogs(logs);
          else
            for (const log of logs)
              emit.onLogs([log]);
        } catch (err) {
          if (filter && err instanceof chunkYTZHD2MR_cjs.InvalidInputRpcError)
            initialized = false;
          emit.onError?.(err);
        }
      }, {
        emitOnBegin: true,
        interval: pollingInterval
      });
      return async () => {
        if (filter)
          await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
        unwatch();
      };
    });
  };
  const subscribeContractEvent = () => {
    const strict = strict_ ?? false;
    const observerId = chunkYTZHD2MR_cjs.stringify([
      "watchContractEvent",
      address,
      args,
      batch,
      client.uid,
      eventName,
      pollingInterval,
      strict
    ]);
    let active = true;
    let unsubscribe = () => active = false;
    return observe(observerId, { onLogs, onError }, (emit) => {
      (async () => {
        try {
          const transport = (() => {
            if (client.transport.type === "fallback") {
              const transport2 = client.transport.transports.find((transport3) => transport3.config.type === "webSocket");
              if (!transport2)
                return client.transport;
              return transport2.value;
            }
            return client.transport;
          })();
          const topics = eventName ? encodeEventTopics({
            abi: abi2,
            eventName,
            args
          }) : [];
          const { unsubscribe: unsubscribe_ } = await transport.subscribe({
            params: ["logs", { address, topics }],
            onData(data) {
              if (!active)
                return;
              const log = data.result;
              try {
                const { eventName: eventName2, args: args2 } = decodeEventLog({
                  abi: abi2,
                  data: log.data,
                  topics: log.topics,
                  strict: strict_
                });
                const formatted = formatLog(log, {
                  args: args2,
                  eventName: eventName2
                });
                emit.onLogs([formatted]);
              } catch (err) {
                let eventName2;
                let isUnnamed;
                if (err instanceof chunkYTZHD2MR_cjs.DecodeLogDataMismatch || err instanceof chunkYTZHD2MR_cjs.DecodeLogTopicsMismatch) {
                  if (strict_)
                    return;
                  eventName2 = err.abiItem.name;
                  isUnnamed = err.abiItem.inputs?.some((x) => !("name" in x && x.name));
                }
                const formatted = formatLog(log, {
                  args: isUnnamed ? [] : {},
                  eventName: eventName2
                });
                emit.onLogs([formatted]);
              }
            },
            onError(error) {
              emit.onError?.(error);
            }
          });
          unsubscribe = unsubscribe_;
          if (!active)
            unsubscribe();
        } catch (err) {
          onError?.(err);
        }
      })();
      return () => unsubscribe();
    });
  };
  return enablePolling ? pollContractEvent() : subscribeContractEvent();
}

// ../../node_modules/viem/_esm/actions/wallet/sendRawTransaction.js
async function sendRawTransaction(client, { serializedTransaction }) {
  return client.request({
    method: "eth_sendRawTransaction",
    params: [serializedTransaction]
  }, { retryCount: 0 });
}

// ../../node_modules/viem/_esm/errors/eip712.js
var Eip712DomainNotFoundError = class extends chunkYTZHD2MR_cjs.BaseError {
  constructor({ address }) {
    super(`No EIP-712 domain found on contract "${address}".`, {
      metaMessages: [
        "Ensure that:",
        `- The contract is deployed at the address "${address}".`,
        "- `eip712Domain()` function exists on the contract.",
        "- `eip712Domain()` function matches signature to ERC-5267 specification."
      ],
      name: "Eip712DomainNotFoundError"
    });
  }
};

// ../../node_modules/viem/_esm/actions/public/getEip712Domain.js
async function getEip712Domain(client, parameters) {
  const { address, factory, factoryData } = parameters;
  try {
    const [fields, name, version2, chainId, verifyingContract, salt, extensions] = await getAction(client, readContract, "readContract")({
      abi,
      address,
      functionName: "eip712Domain",
      factory,
      factoryData
    });
    return {
      domain: {
        name,
        version: version2,
        chainId: Number(chainId),
        verifyingContract,
        salt
      },
      extensions,
      fields
    };
  } catch (e) {
    const error = e;
    if (error.name === "ContractFunctionExecutionError" && error.cause.name === "ContractFunctionZeroDataError") {
      throw new Eip712DomainNotFoundError({ address });
    }
    throw error;
  }
}
var abi = [
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      { name: "fields", type: "bytes1" },
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "address" },
      { name: "salt", type: "bytes32" },
      { name: "extensions", type: "uint256[]" }
    ],
    stateMutability: "view",
    type: "function"
  }
];

// ../../node_modules/viem/_esm/utils/uid.js
var size2 = 256;
var index = size2;
var buffer;
function uid(length = 11) {
  if (!buffer || index + length > size2 * 2) {
    buffer = "";
    index = 0;
    for (let i = 0; i < size2; i++) {
      buffer += (256 + Math.random() * 256 | 0).toString(16).substring(1);
    }
  }
  return buffer.substring(index, index++ + length);
}

// ../../node_modules/viem/_esm/clients/createClient.js
function createClient(parameters) {
  const { batch, cacheTime = parameters.pollingInterval ?? 4e3, ccipRead, key = "base", name = "Base Client", pollingInterval = 4e3, type = "base" } = parameters;
  const chain = parameters.chain;
  const account = parameters.account ? chunkYTZHD2MR_cjs.parseAccount(parameters.account) : void 0;
  const { config, request, value } = parameters.transport({
    chain,
    pollingInterval
  });
  const transport = { ...config, ...value };
  const client = {
    account,
    batch,
    cacheTime,
    ccipRead,
    chain,
    key,
    name,
    pollingInterval,
    request,
    transport,
    type,
    uid: uid()
  };
  function extend(base) {
    return (extendFn) => {
      const extended = extendFn(base);
      for (const key2 in client)
        delete extended[key2];
      const combined = { ...base, ...extended };
      return Object.assign(combined, { extend: extend(combined) });
    };
  }
  return Object.assign(client, { extend: extend(client) });
}

// ../../node_modules/viem/_esm/utils/promise/withDedupe.js
var promiseCache2 = /* @__PURE__ */ new chunkYTZHD2MR_cjs.LruMap(8192);
function withDedupe(fn, { enabled = true, id }) {
  if (!enabled || !id)
    return fn();
  if (promiseCache2.get(id))
    return promiseCache2.get(id);
  const promise = fn().finally(() => promiseCache2.delete(id));
  promiseCache2.set(id, promise);
  return promise;
}

// ../../node_modules/viem/_esm/utils/promise/withRetry.js
function withRetry(fn, { delay: delay_ = 100, retryCount = 2, shouldRetry: shouldRetry2 = () => true } = {}) {
  return new Promise((resolve, reject) => {
    const attemptRetry = async ({ count = 0 } = {}) => {
      const retry = async ({ error }) => {
        const delay = typeof delay_ === "function" ? delay_({ count, error }) : delay_;
        if (delay)
          await wait(delay);
        attemptRetry({ count: count + 1 });
      };
      try {
        const data = await fn();
        resolve(data);
      } catch (err) {
        if (count < retryCount && await shouldRetry2({ count, error: err }))
          return retry({ error: err });
        reject(err);
      }
    };
    attemptRetry();
  });
}

// ../../node_modules/viem/_esm/utils/buildRequest.js
function buildRequest(request, options = {}) {
  return async (args, overrideOptions = {}) => {
    const { dedupe = false, methods, retryDelay = 150, retryCount = 3, uid: uid2 } = {
      ...options,
      ...overrideOptions
    };
    const { method } = args;
    if (methods?.exclude?.includes(method))
      throw new chunkYTZHD2MR_cjs.MethodNotSupportedRpcError(new Error("method not supported"), {
        method
      });
    if (methods?.include && !methods.include.includes(method))
      throw new chunkYTZHD2MR_cjs.MethodNotSupportedRpcError(new Error("method not supported"), {
        method
      });
    const requestId = dedupe ? chunkYTZHD2MR_cjs.keccak256(chunkYTZHD2MR_cjs.stringToHex(`${uid2}.${chunkYTZHD2MR_cjs.stringify(args)}`)) : void 0;
    return withDedupe(() => withRetry(async () => {
      try {
        return await request(args);
      } catch (err_) {
        const err = err_;
        switch (err.code) {
          case chunkYTZHD2MR_cjs.ParseRpcError.code:
            throw new chunkYTZHD2MR_cjs.ParseRpcError(err);
          case chunkYTZHD2MR_cjs.InvalidRequestRpcError.code:
            throw new chunkYTZHD2MR_cjs.InvalidRequestRpcError(err);
          case chunkYTZHD2MR_cjs.MethodNotFoundRpcError.code:
            throw new chunkYTZHD2MR_cjs.MethodNotFoundRpcError(err, { method: args.method });
          case chunkYTZHD2MR_cjs.InvalidParamsRpcError.code:
            throw new chunkYTZHD2MR_cjs.InvalidParamsRpcError(err);
          case chunkYTZHD2MR_cjs.InternalRpcError.code:
            throw new chunkYTZHD2MR_cjs.InternalRpcError(err);
          case chunkYTZHD2MR_cjs.InvalidInputRpcError.code:
            throw new chunkYTZHD2MR_cjs.InvalidInputRpcError(err);
          case chunkYTZHD2MR_cjs.ResourceNotFoundRpcError.code:
            throw new chunkYTZHD2MR_cjs.ResourceNotFoundRpcError(err);
          case chunkYTZHD2MR_cjs.ResourceUnavailableRpcError.code:
            throw new chunkYTZHD2MR_cjs.ResourceUnavailableRpcError(err);
          case chunkYTZHD2MR_cjs.TransactionRejectedRpcError.code:
            throw new chunkYTZHD2MR_cjs.TransactionRejectedRpcError(err);
          case chunkYTZHD2MR_cjs.MethodNotSupportedRpcError.code:
            throw new chunkYTZHD2MR_cjs.MethodNotSupportedRpcError(err, {
              method: args.method
            });
          case chunkYTZHD2MR_cjs.LimitExceededRpcError.code:
            throw new chunkYTZHD2MR_cjs.LimitExceededRpcError(err);
          case chunkYTZHD2MR_cjs.JsonRpcVersionUnsupportedError.code:
            throw new chunkYTZHD2MR_cjs.JsonRpcVersionUnsupportedError(err);
          case chunkYTZHD2MR_cjs.UserRejectedRequestError.code:
            throw new chunkYTZHD2MR_cjs.UserRejectedRequestError(err);
          case chunkYTZHD2MR_cjs.UnauthorizedProviderError.code:
            throw new chunkYTZHD2MR_cjs.UnauthorizedProviderError(err);
          case chunkYTZHD2MR_cjs.UnsupportedProviderMethodError.code:
            throw new chunkYTZHD2MR_cjs.UnsupportedProviderMethodError(err);
          case chunkYTZHD2MR_cjs.ProviderDisconnectedError.code:
            throw new chunkYTZHD2MR_cjs.ProviderDisconnectedError(err);
          case chunkYTZHD2MR_cjs.ChainDisconnectedError.code:
            throw new chunkYTZHD2MR_cjs.ChainDisconnectedError(err);
          case chunkYTZHD2MR_cjs.SwitchChainError.code:
            throw new chunkYTZHD2MR_cjs.SwitchChainError(err);
          case 5e3:
            throw new chunkYTZHD2MR_cjs.UserRejectedRequestError(err);
          default:
            if (err_ instanceof chunkYTZHD2MR_cjs.BaseError)
              throw err_;
            throw new chunkYTZHD2MR_cjs.UnknownRpcError(err);
        }
      }
    }, {
      delay: ({ count, error }) => {
        if (error && error instanceof chunkYTZHD2MR_cjs.HttpRequestError) {
          const retryAfter = error?.headers?.get("Retry-After");
          if (retryAfter?.match(/\d/))
            return Number.parseInt(retryAfter) * 1e3;
        }
        return ~~(1 << count) * retryDelay;
      },
      retryCount,
      shouldRetry: ({ error }) => shouldRetry(error)
    }), { enabled: dedupe, id: requestId });
  };
}
function shouldRetry(error) {
  if ("code" in error && typeof error.code === "number") {
    if (error.code === -1)
      return true;
    if (error.code === chunkYTZHD2MR_cjs.LimitExceededRpcError.code)
      return true;
    if (error.code === chunkYTZHD2MR_cjs.InternalRpcError.code)
      return true;
    return false;
  }
  if (error instanceof chunkYTZHD2MR_cjs.HttpRequestError && error.status) {
    if (error.status === 403)
      return true;
    if (error.status === 408)
      return true;
    if (error.status === 413)
      return true;
    if (error.status === 429)
      return true;
    if (error.status === 500)
      return true;
    if (error.status === 502)
      return true;
    if (error.status === 503)
      return true;
    if (error.status === 504)
      return true;
    return false;
  }
  return true;
}

// ../../node_modules/viem/_esm/clients/transports/createTransport.js
function createTransport({ key, methods, name, request, retryCount = 3, retryDelay = 150, timeout, type }, value) {
  const uid2 = uid();
  return {
    config: {
      key,
      name,
      request,
      retryCount,
      retryDelay,
      timeout,
      type
    },
    request: buildRequest(request, { methods, retryCount, retryDelay, uid: uid2 }),
    value
  };
}

// ../../node_modules/viem/_esm/errors/transport.js
var UrlRequiredError = class extends chunkYTZHD2MR_cjs.BaseError {
  constructor() {
    super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
      docsPath: "/docs/clients/intro",
      name: "UrlRequiredError"
    });
  }
};

// ../../node_modules/viem/_esm/utils/promise/withTimeout.js
function withTimeout(fn, { errorInstance = new Error("timed out"), timeout, signal }) {
  return new Promise((resolve, reject) => {
    (async () => {
      let timeoutId;
      try {
        const controller = new AbortController();
        if (timeout > 0) {
          timeoutId = setTimeout(() => {
            if (signal) {
              controller.abort();
            } else {
              reject(errorInstance);
            }
          }, timeout);
        }
        resolve(await fn({ signal: controller?.signal || null }));
      } catch (err) {
        if (err?.name === "AbortError")
          reject(errorInstance);
        reject(err);
      } finally {
        clearTimeout(timeoutId);
      }
    })();
  });
}

// ../../node_modules/viem/_esm/utils/rpc/id.js
function createIdStore() {
  return {
    current: 0,
    take() {
      return this.current++;
    },
    reset() {
      this.current = 0;
    }
  };
}
var idCache = /* @__PURE__ */ createIdStore();

// ../../node_modules/viem/_esm/utils/rpc/http.js
function getHttpRpcClient(url, options = {}) {
  return {
    async request(params) {
      const { body, onRequest = options.onRequest, onResponse = options.onResponse, timeout = options.timeout ?? 1e4 } = params;
      const fetchOptions = {
        ...options.fetchOptions ?? {},
        ...params.fetchOptions ?? {}
      };
      const { headers, method, signal: signal_ } = fetchOptions;
      try {
        const response = await withTimeout(async ({ signal }) => {
          const init = {
            ...fetchOptions,
            body: Array.isArray(body) ? chunkYTZHD2MR_cjs.stringify(body.map((body2) => ({
              jsonrpc: "2.0",
              id: body2.id ?? idCache.take(),
              ...body2
            }))) : chunkYTZHD2MR_cjs.stringify({
              jsonrpc: "2.0",
              id: body.id ?? idCache.take(),
              ...body
            }),
            headers: {
              "Content-Type": "application/json",
              ...headers
            },
            method: method || "POST",
            signal: signal_ || (timeout > 0 ? signal : null)
          };
          const request = new Request(url, init);
          const args = await onRequest?.(request, init) ?? { ...init, url };
          const response2 = await fetch(args.url ?? url, args);
          return response2;
        }, {
          errorInstance: new chunkYTZHD2MR_cjs.TimeoutError({ body, url }),
          timeout,
          signal: true
        });
        if (onResponse)
          await onResponse(response);
        let data;
        if (response.headers.get("Content-Type")?.startsWith("application/json"))
          data = await response.json();
        else {
          data = await response.text();
          try {
            data = JSON.parse(data || "{}");
          } catch (err) {
            if (response.ok)
              throw err;
            data = { error: data };
          }
        }
        if (!response.ok) {
          throw new chunkYTZHD2MR_cjs.HttpRequestError({
            body,
            details: chunkYTZHD2MR_cjs.stringify(data.error) || response.statusText,
            headers: response.headers,
            status: response.status,
            url
          });
        }
        return data;
      } catch (err) {
        if (err instanceof chunkYTZHD2MR_cjs.HttpRequestError)
          throw err;
        if (err instanceof chunkYTZHD2MR_cjs.TimeoutError)
          throw err;
        throw new chunkYTZHD2MR_cjs.HttpRequestError({
          body,
          cause: err,
          url
        });
      }
    }
  };
}

// ../../node_modules/viem/_esm/clients/transports/http.js
function http(url, config = {}) {
  const { batch, fetchOptions, key = "http", methods, name = "HTTP JSON-RPC", onFetchRequest, onFetchResponse, retryDelay } = config;
  return ({ chain, retryCount: retryCount_, timeout: timeout_ }) => {
    const { batchSize = 1e3, wait: wait2 = 0 } = typeof batch === "object" ? batch : {};
    const retryCount = config.retryCount ?? retryCount_;
    const timeout = timeout_ ?? config.timeout ?? 1e4;
    const url_ = url || chain?.rpcUrls.default.http[0];
    if (!url_)
      throw new UrlRequiredError();
    const rpcClient = getHttpRpcClient(url_, {
      fetchOptions,
      onRequest: onFetchRequest,
      onResponse: onFetchResponse,
      timeout
    });
    return createTransport({
      key,
      methods,
      name,
      async request({ method, params }) {
        const body = { method, params };
        const { schedule } = chunkYTZHD2MR_cjs.createBatchScheduler({
          id: url_,
          wait: wait2,
          shouldSplitBatch(requests) {
            return requests.length > batchSize;
          },
          fn: (body2) => rpcClient.request({
            body: body2
          }),
          sort: (a, b) => a.id - b.id
        });
        const fn = async (body2) => batch ? schedule(body2) : [
          await rpcClient.request({
            body: body2
          })
        ];
        const [{ error, result }] = await fn(body);
        if (error)
          throw new chunkYTZHD2MR_cjs.RpcRequestError({
            body,
            error,
            url: url_
          });
        return result;
      },
      retryCount,
      retryDelay,
      timeout,
      type: "http"
    }, {
      fetchOptions,
      url: url_
    });
  };
}

// ../../node_modules/viem/_esm/utils/ens/errors.js
function isNullUniversalResolverError(err, callType) {
  if (!(err instanceof chunkYTZHD2MR_cjs.BaseError))
    return false;
  const cause = err.walk((e) => e instanceof chunkYTZHD2MR_cjs.ContractFunctionRevertedError);
  if (!(cause instanceof chunkYTZHD2MR_cjs.ContractFunctionRevertedError))
    return false;
  if (cause.data?.errorName === "ResolverNotFound")
    return true;
  if (cause.data?.errorName === "ResolverWildcardNotSupported")
    return true;
  if (cause.data?.errorName === "ResolverNotContract")
    return true;
  if (cause.data?.errorName === "ResolverError")
    return true;
  if (cause.data?.errorName === "HttpError")
    return true;
  if (cause.reason?.includes("Wildcard on non-extended resolvers is not supported"))
    return true;
  if (callType === "reverse" && cause.reason === chunkYTZHD2MR_cjs.panicReasons[50])
    return true;
  return false;
}

// ../../node_modules/viem/_esm/utils/ens/encodedLabelToLabelhash.js
function encodedLabelToLabelhash(label) {
  if (label.length !== 66)
    return null;
  if (label.indexOf("[") !== 0)
    return null;
  if (label.indexOf("]") !== 65)
    return null;
  const hash = `0x${label.slice(1, 65)}`;
  if (!chunkYTZHD2MR_cjs.isHex(hash))
    return null;
  return hash;
}

// ../../node_modules/viem/_esm/utils/ens/namehash.js
function namehash(name) {
  let result = new Uint8Array(32).fill(0);
  if (!name)
    return chunkYTZHD2MR_cjs.bytesToHex(result);
  const labels = name.split(".");
  for (let i = labels.length - 1; i >= 0; i -= 1) {
    const hashFromEncodedLabel = encodedLabelToLabelhash(labels[i]);
    const hashed = hashFromEncodedLabel ? chunkYTZHD2MR_cjs.toBytes(hashFromEncodedLabel) : chunkYTZHD2MR_cjs.keccak256(chunkYTZHD2MR_cjs.stringToBytes(labels[i]), "bytes");
    result = chunkYTZHD2MR_cjs.keccak256(chunkYTZHD2MR_cjs.concat([result, hashed]), "bytes");
  }
  return chunkYTZHD2MR_cjs.bytesToHex(result);
}

// ../../node_modules/viem/_esm/utils/ens/encodeLabelhash.js
function encodeLabelhash(hash) {
  return `[${hash.slice(2)}]`;
}

// ../../node_modules/viem/_esm/utils/ens/labelhash.js
function labelhash(label) {
  const result = new Uint8Array(32).fill(0);
  if (!label)
    return chunkYTZHD2MR_cjs.bytesToHex(result);
  return encodedLabelToLabelhash(label) || chunkYTZHD2MR_cjs.keccak256(chunkYTZHD2MR_cjs.stringToBytes(label));
}

// ../../node_modules/viem/_esm/utils/ens/packetToBytes.js
function packetToBytes(packet) {
  const value = packet.replace(/^\.|\.$/gm, "");
  if (value.length === 0)
    return new Uint8Array(1);
  const bytes = new Uint8Array(chunkYTZHD2MR_cjs.stringToBytes(value).byteLength + 2);
  let offset = 0;
  const list = value.split(".");
  for (let i = 0; i < list.length; i++) {
    let encoded = chunkYTZHD2MR_cjs.stringToBytes(list[i]);
    if (encoded.byteLength > 255)
      encoded = chunkYTZHD2MR_cjs.stringToBytes(encodeLabelhash(labelhash(list[i])));
    bytes[offset] = encoded.length;
    bytes.set(encoded, offset + 1);
    offset += encoded.length + 1;
  }
  if (bytes.byteLength !== offset + 1)
    return bytes.slice(0, offset + 1);
  return bytes;
}

// ../../node_modules/viem/_esm/actions/ens/getEnsAddress.js
async function getEnsAddress(client, { blockNumber, blockTag, coinType, name, gatewayUrls, strict, universalResolverAddress: universalResolverAddress_ }) {
  let universalResolverAddress = universalResolverAddress_;
  if (!universalResolverAddress) {
    if (!client.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    universalResolverAddress = chunkYTZHD2MR_cjs.getChainContractAddress({
      blockNumber,
      chain: client.chain,
      contract: "ensUniversalResolver"
    });
  }
  try {
    const functionData = chunkYTZHD2MR_cjs.encodeFunctionData({
      abi: chunkYTZHD2MR_cjs.addressResolverAbi,
      functionName: "addr",
      ...coinType != null ? { args: [namehash(name), BigInt(coinType)] } : { args: [namehash(name)] }
    });
    const readContractParameters = {
      address: universalResolverAddress,
      abi: chunkYTZHD2MR_cjs.universalResolverResolveAbi,
      functionName: "resolve",
      args: [chunkYTZHD2MR_cjs.toHex(packetToBytes(name)), functionData],
      blockNumber,
      blockTag
    };
    const readContractAction = getAction(client, readContract, "readContract");
    const res = gatewayUrls ? await readContractAction({
      ...readContractParameters,
      args: [...readContractParameters.args, gatewayUrls]
    }) : await readContractAction(readContractParameters);
    if (res[0] === "0x")
      return null;
    const address = chunkYTZHD2MR_cjs.decodeFunctionResult({
      abi: chunkYTZHD2MR_cjs.addressResolverAbi,
      args: coinType != null ? [namehash(name), BigInt(coinType)] : void 0,
      functionName: "addr",
      data: res[0]
    });
    if (address === "0x")
      return null;
    if (chunkYTZHD2MR_cjs.trim(address) === "0x00")
      return null;
    return address;
  } catch (err) {
    if (strict)
      throw err;
    if (isNullUniversalResolverError(err, "resolve"))
      return null;
    throw err;
  }
}

// ../../node_modules/viem/_esm/errors/ens.js
var EnsAvatarInvalidMetadataError = class extends chunkYTZHD2MR_cjs.BaseError {
  constructor({ data }) {
    super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
      metaMessages: [
        "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
        "",
        `Provided data: ${JSON.stringify(data)}`
      ],
      name: "EnsAvatarInvalidMetadataError"
    });
  }
};
var EnsAvatarInvalidNftUriError = class extends chunkYTZHD2MR_cjs.BaseError {
  constructor({ reason }) {
    super(`ENS NFT avatar URI is invalid. ${reason}`, {
      name: "EnsAvatarInvalidNftUriError"
    });
  }
};
var EnsAvatarUriResolutionError = class extends chunkYTZHD2MR_cjs.BaseError {
  constructor({ uri }) {
    super(`Unable to resolve ENS avatar URI "${uri}". The URI may be malformed, invalid, or does not respond with a valid image.`, { name: "EnsAvatarUriResolutionError" });
  }
};
var EnsAvatarUnsupportedNamespaceError = class extends chunkYTZHD2MR_cjs.BaseError {
  constructor({ namespace }) {
    super(`ENS NFT avatar namespace "${namespace}" is not supported. Must be "erc721" or "erc1155".`, { name: "EnsAvatarUnsupportedNamespaceError" });
  }
};

// ../../node_modules/viem/_esm/utils/ens/avatar/utils.js
var networkRegex = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/;
var ipfsHashRegex = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/;
var base64Regex = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/;
var dataURIRegex = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function isImageUri(uri) {
  try {
    const res = await fetch(uri, { method: "HEAD" });
    if (res.status === 200) {
      const contentType = res.headers.get("content-type");
      return contentType?.startsWith("image/");
    }
    return false;
  } catch (error) {
    if (typeof error === "object" && typeof error.response !== "undefined") {
      return false;
    }
    if (!globalThis.hasOwnProperty("Image"))
      return false;
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve(true);
      };
      img.onerror = () => {
        resolve(false);
      };
      img.src = uri;
    });
  }
}
function getGateway(custom, defaultGateway) {
  if (!custom)
    return defaultGateway;
  if (custom.endsWith("/"))
    return custom.slice(0, -1);
  return custom;
}
function resolveAvatarUri({ uri, gatewayUrls }) {
  const isEncoded = base64Regex.test(uri);
  if (isEncoded)
    return { uri, isOnChain: true, isEncoded };
  const ipfsGateway = getGateway(gatewayUrls?.ipfs, "https://ipfs.io");
  const arweaveGateway = getGateway(gatewayUrls?.arweave, "https://arweave.net");
  const networkRegexMatch = uri.match(networkRegex);
  const { protocol, subpath, target, subtarget = "" } = networkRegexMatch?.groups || {};
  const isIPNS = protocol === "ipns:/" || subpath === "ipns/";
  const isIPFS = protocol === "ipfs:/" || subpath === "ipfs/" || ipfsHashRegex.test(uri);
  if (uri.startsWith("http") && !isIPNS && !isIPFS) {
    let replacedUri = uri;
    if (gatewayUrls?.arweave)
      replacedUri = uri.replace(/https:\/\/arweave.net/g, gatewayUrls?.arweave);
    return { uri: replacedUri, isOnChain: false, isEncoded: false };
  }
  if ((isIPNS || isIPFS) && target) {
    return {
      uri: `${ipfsGateway}/${isIPNS ? "ipns" : "ipfs"}/${target}${subtarget}`,
      isOnChain: false,
      isEncoded: false
    };
  }
  if (protocol === "ar:/" && target) {
    return {
      uri: `${arweaveGateway}/${target}${subtarget || ""}`,
      isOnChain: false,
      isEncoded: false
    };
  }
  let parsedUri = uri.replace(dataURIRegex, "");
  if (parsedUri.startsWith("<svg")) {
    parsedUri = `data:image/svg+xml;base64,${btoa(parsedUri)}`;
  }
  if (parsedUri.startsWith("data:") || parsedUri.startsWith("{")) {
    return {
      uri: parsedUri,
      isOnChain: true,
      isEncoded: false
    };
  }
  throw new EnsAvatarUriResolutionError({ uri });
}
function getJsonImage(data) {
  if (typeof data !== "object" || !("image" in data) && !("image_url" in data) && !("image_data" in data)) {
    throw new EnsAvatarInvalidMetadataError({ data });
  }
  return data.image || data.image_url || data.image_data;
}
async function getMetadataAvatarUri({ gatewayUrls, uri }) {
  try {
    const res = await fetch(uri).then((res2) => res2.json());
    const image = await parseAvatarUri({
      gatewayUrls,
      uri: getJsonImage(res)
    });
    return image;
  } catch {
    throw new EnsAvatarUriResolutionError({ uri });
  }
}
async function parseAvatarUri({ gatewayUrls, uri }) {
  const { uri: resolvedURI, isOnChain } = resolveAvatarUri({ uri, gatewayUrls });
  if (isOnChain)
    return resolvedURI;
  const isImage = await isImageUri(resolvedURI);
  if (isImage)
    return resolvedURI;
  throw new EnsAvatarUriResolutionError({ uri });
}
function parseNftUri(uri_) {
  let uri = uri_;
  if (uri.startsWith("did:nft:")) {
    uri = uri.replace("did:nft:", "").replace(/_/g, "/");
  }
  const [reference, asset_namespace, tokenID] = uri.split("/");
  const [eip_namespace, chainID] = reference.split(":");
  const [erc_namespace, contractAddress] = asset_namespace.split(":");
  if (!eip_namespace || eip_namespace.toLowerCase() !== "eip155")
    throw new EnsAvatarInvalidNftUriError({ reason: "Only EIP-155 supported" });
  if (!chainID)
    throw new EnsAvatarInvalidNftUriError({ reason: "Chain ID not found" });
  if (!contractAddress)
    throw new EnsAvatarInvalidNftUriError({
      reason: "Contract address not found"
    });
  if (!tokenID)
    throw new EnsAvatarInvalidNftUriError({ reason: "Token ID not found" });
  if (!erc_namespace)
    throw new EnsAvatarInvalidNftUriError({ reason: "ERC namespace not found" });
  return {
    chainID: Number.parseInt(chainID),
    namespace: erc_namespace.toLowerCase(),
    contractAddress,
    tokenID
  };
}
async function getNftTokenUri(client, { nft }) {
  if (nft.namespace === "erc721") {
    return readContract(client, {
      address: nft.contractAddress,
      abi: [
        {
          name: "tokenURI",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "tokenId", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "tokenURI",
      args: [BigInt(nft.tokenID)]
    });
  }
  if (nft.namespace === "erc1155") {
    return readContract(client, {
      address: nft.contractAddress,
      abi: [
        {
          name: "uri",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "_id", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "uri",
      args: [BigInt(nft.tokenID)]
    });
  }
  throw new EnsAvatarUnsupportedNamespaceError({ namespace: nft.namespace });
}

// ../../node_modules/viem/_esm/utils/ens/avatar/parseAvatarRecord.js
async function parseAvatarRecord(client, { gatewayUrls, record }) {
  if (/eip155:/i.test(record))
    return parseNftAvatarUri(client, { gatewayUrls, record });
  return parseAvatarUri({ uri: record, gatewayUrls });
}
async function parseNftAvatarUri(client, { gatewayUrls, record }) {
  const nft = parseNftUri(record);
  const nftUri = await getNftTokenUri(client, { nft });
  const { uri: resolvedNftUri, isOnChain, isEncoded } = resolveAvatarUri({ uri: nftUri, gatewayUrls });
  if (isOnChain && (resolvedNftUri.includes("data:application/json;base64,") || resolvedNftUri.startsWith("{"))) {
    const encodedJson = isEncoded ? (
      // if it is encoded, decode it
      atob(resolvedNftUri.replace("data:application/json;base64,", ""))
    ) : (
      // if it isn't encoded assume it is a JSON string, but it could be anything (it will error if it is)
      resolvedNftUri
    );
    const decoded = JSON.parse(encodedJson);
    return parseAvatarUri({ uri: getJsonImage(decoded), gatewayUrls });
  }
  let uriTokenId = nft.tokenID;
  if (nft.namespace === "erc1155")
    uriTokenId = uriTokenId.replace("0x", "").padStart(64, "0");
  return getMetadataAvatarUri({
    gatewayUrls,
    uri: resolvedNftUri.replace(/(?:0x)?{id}/, uriTokenId)
  });
}

// ../../node_modules/viem/_esm/actions/ens/getEnsText.js
async function getEnsText(client, { blockNumber, blockTag, name, key, gatewayUrls, strict, universalResolverAddress: universalResolverAddress_ }) {
  let universalResolverAddress = universalResolverAddress_;
  if (!universalResolverAddress) {
    if (!client.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    universalResolverAddress = chunkYTZHD2MR_cjs.getChainContractAddress({
      blockNumber,
      chain: client.chain,
      contract: "ensUniversalResolver"
    });
  }
  try {
    const readContractParameters = {
      address: universalResolverAddress,
      abi: chunkYTZHD2MR_cjs.universalResolverResolveAbi,
      functionName: "resolve",
      args: [
        chunkYTZHD2MR_cjs.toHex(packetToBytes(name)),
        chunkYTZHD2MR_cjs.encodeFunctionData({
          abi: chunkYTZHD2MR_cjs.textResolverAbi,
          functionName: "text",
          args: [namehash(name), key]
        })
      ],
      blockNumber,
      blockTag
    };
    const readContractAction = getAction(client, readContract, "readContract");
    const res = gatewayUrls ? await readContractAction({
      ...readContractParameters,
      args: [...readContractParameters.args, gatewayUrls]
    }) : await readContractAction(readContractParameters);
    if (res[0] === "0x")
      return null;
    const record = chunkYTZHD2MR_cjs.decodeFunctionResult({
      abi: chunkYTZHD2MR_cjs.textResolverAbi,
      functionName: "text",
      data: res[0]
    });
    return record === "" ? null : record;
  } catch (err) {
    if (strict)
      throw err;
    if (isNullUniversalResolverError(err, "resolve"))
      return null;
    throw err;
  }
}

// ../../node_modules/viem/_esm/actions/ens/getEnsAvatar.js
async function getEnsAvatar(client, { blockNumber, blockTag, assetGatewayUrls, name, gatewayUrls, strict, universalResolverAddress }) {
  const record = await getAction(client, getEnsText, "getEnsText")({
    blockNumber,
    blockTag,
    key: "avatar",
    name,
    universalResolverAddress,
    gatewayUrls,
    strict
  });
  if (!record)
    return null;
  try {
    return await parseAvatarRecord(client, {
      record,
      gatewayUrls: assetGatewayUrls
    });
  } catch {
    return null;
  }
}

// ../../node_modules/viem/_esm/actions/ens/getEnsName.js
async function getEnsName(client, { address, blockNumber, blockTag, gatewayUrls, strict, universalResolverAddress: universalResolverAddress_ }) {
  let universalResolverAddress = universalResolverAddress_;
  if (!universalResolverAddress) {
    if (!client.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    universalResolverAddress = chunkYTZHD2MR_cjs.getChainContractAddress({
      blockNumber,
      chain: client.chain,
      contract: "ensUniversalResolver"
    });
  }
  const reverseNode = `${address.toLowerCase().substring(2)}.addr.reverse`;
  try {
    const readContractParameters = {
      address: universalResolverAddress,
      abi: chunkYTZHD2MR_cjs.universalResolverReverseAbi,
      functionName: "reverse",
      args: [chunkYTZHD2MR_cjs.toHex(packetToBytes(reverseNode))],
      blockNumber,
      blockTag
    };
    const readContractAction = getAction(client, readContract, "readContract");
    const [name, resolvedAddress] = gatewayUrls ? await readContractAction({
      ...readContractParameters,
      args: [...readContractParameters.args, gatewayUrls]
    }) : await readContractAction(readContractParameters);
    if (address.toLowerCase() !== resolvedAddress.toLowerCase())
      return null;
    return name;
  } catch (err) {
    if (strict)
      throw err;
    if (isNullUniversalResolverError(err, "reverse"))
      return null;
    throw err;
  }
}

// ../../node_modules/viem/_esm/actions/ens/getEnsResolver.js
async function getEnsResolver(client, { blockNumber, blockTag, name, universalResolverAddress: universalResolverAddress_ }) {
  let universalResolverAddress = universalResolverAddress_;
  if (!universalResolverAddress) {
    if (!client.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    universalResolverAddress = chunkYTZHD2MR_cjs.getChainContractAddress({
      blockNumber,
      chain: client.chain,
      contract: "ensUniversalResolver"
    });
  }
  const [resolverAddress] = await getAction(client, readContract, "readContract")({
    address: universalResolverAddress,
    abi: [
      {
        inputs: [{ type: "bytes" }],
        name: "findResolver",
        outputs: [{ type: "address" }, { type: "bytes32" }],
        stateMutability: "view",
        type: "function"
      }
    ],
    functionName: "findResolver",
    args: [chunkYTZHD2MR_cjs.toHex(packetToBytes(name))],
    blockNumber,
    blockTag
  });
  return resolverAddress;
}

// ../../node_modules/viem/_esm/actions/public/createAccessList.js
async function createAccessList(client, args) {
  const { account: account_ = client.account, blockNumber, blockTag = "latest", blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, to, value, ...rest } = args;
  const account = account_ ? chunkYTZHD2MR_cjs.parseAccount(account_) : void 0;
  try {
    chunkYTZHD2MR_cjs.assertRequest(args);
    const blockNumberHex = blockNumber ? chunkYTZHD2MR_cjs.numberToHex(blockNumber) : void 0;
    const block = blockNumberHex || blockTag;
    const chainFormat = client.chain?.formatters?.transactionRequest?.format;
    const format = chainFormat || chunkYTZHD2MR_cjs.formatTransactionRequest;
    const request = format({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...chunkYTZHD2MR_cjs.extract(rest, { format: chainFormat }),
      from: account?.address,
      blobs,
      data,
      gas,
      gasPrice,
      maxFeePerBlobGas,
      maxFeePerGas,
      maxPriorityFeePerGas,
      to,
      value
    });
    const response = await client.request({
      method: "eth_createAccessList",
      params: [request, block]
    });
    return {
      accessList: response.accessList,
      gasUsed: BigInt(response.gasUsed)
    };
  } catch (err) {
    throw chunkYTZHD2MR_cjs.getCallError(err, {
      ...args,
      account,
      chain: client.chain
    });
  }
}

// ../../node_modules/viem/_esm/actions/public/createBlockFilter.js
async function createBlockFilter(client) {
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newBlockFilter"
  });
  const id = await client.request({
    method: "eth_newBlockFilter"
  });
  return { id, request: getRequest(id), type: "block" };
}

// ../../node_modules/viem/_esm/actions/public/createEventFilter.js
async function createEventFilter(client, { address, args, event, events: events_, fromBlock, strict, toBlock } = {}) {
  const events = events_ ?? (event ? [event] : void 0);
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newFilter"
  });
  let topics = [];
  if (events) {
    const encoded = events.flatMap((event2) => encodeEventTopics({
      abi: [event2],
      eventName: event2.name,
      args
    }));
    topics = [encoded];
    if (event)
      topics = topics[0];
  }
  const id = await client.request({
    method: "eth_newFilter",
    params: [
      {
        address,
        fromBlock: typeof fromBlock === "bigint" ? chunkYTZHD2MR_cjs.numberToHex(fromBlock) : fromBlock,
        toBlock: typeof toBlock === "bigint" ? chunkYTZHD2MR_cjs.numberToHex(toBlock) : toBlock,
        ...topics.length ? { topics } : {}
      }
    ]
  });
  return {
    abi: events,
    args,
    eventName: event ? event.name : void 0,
    fromBlock,
    id,
    request: getRequest(id),
    strict: Boolean(strict),
    toBlock,
    type: "event"
  };
}

// ../../node_modules/viem/_esm/actions/public/createPendingTransactionFilter.js
async function createPendingTransactionFilter(client) {
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newPendingTransactionFilter"
  });
  const id = await client.request({
    method: "eth_newPendingTransactionFilter"
  });
  return { id, request: getRequest(id), type: "transaction" };
}

// ../../node_modules/viem/_esm/actions/public/getBlobBaseFee.js
async function getBlobBaseFee(client) {
  const baseFee = await client.request({
    method: "eth_blobBaseFee"
  });
  return BigInt(baseFee);
}

// ../../node_modules/viem/_esm/actions/public/getBlockTransactionCount.js
async function getBlockTransactionCount(client, { blockHash, blockNumber, blockTag = "latest" } = {}) {
  const blockNumberHex = blockNumber !== void 0 ? chunkYTZHD2MR_cjs.numberToHex(blockNumber) : void 0;
  let count;
  if (blockHash) {
    count = await client.request({
      method: "eth_getBlockTransactionCountByHash",
      params: [blockHash]
    }, { dedupe: true });
  } else {
    count = await client.request({
      method: "eth_getBlockTransactionCountByNumber",
      params: [blockNumberHex || blockTag]
    }, { dedupe: Boolean(blockNumberHex) });
  }
  return chunkYTZHD2MR_cjs.hexToNumber(count);
}

// ../../node_modules/viem/_esm/actions/public/getCode.js
async function getCode(client, { address, blockNumber, blockTag = "latest" }) {
  const blockNumberHex = blockNumber !== void 0 ? chunkYTZHD2MR_cjs.numberToHex(blockNumber) : void 0;
  const hex = await client.request({
    method: "eth_getCode",
    params: [address, blockNumberHex || blockTag]
  }, { dedupe: Boolean(blockNumberHex) });
  if (hex === "0x")
    return void 0;
  return hex;
}

// ../../node_modules/viem/_esm/utils/formatters/feeHistory.js
function formatFeeHistory(feeHistory) {
  return {
    baseFeePerGas: feeHistory.baseFeePerGas.map((value) => BigInt(value)),
    gasUsedRatio: feeHistory.gasUsedRatio,
    oldestBlock: BigInt(feeHistory.oldestBlock),
    reward: feeHistory.reward?.map((reward) => reward.map((value) => BigInt(value)))
  };
}

// ../../node_modules/viem/_esm/actions/public/getFeeHistory.js
async function getFeeHistory(client, { blockCount, blockNumber, blockTag = "latest", rewardPercentiles }) {
  const blockNumberHex = blockNumber ? chunkYTZHD2MR_cjs.numberToHex(blockNumber) : void 0;
  const feeHistory = await client.request({
    method: "eth_feeHistory",
    params: [
      chunkYTZHD2MR_cjs.numberToHex(blockCount),
      blockNumberHex || blockTag,
      rewardPercentiles
    ]
  }, { dedupe: Boolean(blockNumberHex) });
  return formatFeeHistory(feeHistory);
}

// ../../node_modules/viem/_esm/actions/public/getFilterLogs.js
async function getFilterLogs(_client, { filter }) {
  const strict = filter.strict ?? false;
  const logs = await filter.request({
    method: "eth_getFilterLogs",
    params: [filter.id]
  });
  const formattedLogs = logs.map((log) => formatLog(log));
  if (!filter.abi)
    return formattedLogs;
  return parseEventLogs({
    abi: filter.abi,
    logs: formattedLogs,
    strict
  });
}

// ../../node_modules/viem/_esm/errors/typedData.js
var InvalidDomainError = class extends chunkYTZHD2MR_cjs.BaseError {
  constructor({ domain }) {
    super(`Invalid domain "${chunkYTZHD2MR_cjs.stringify(domain)}".`, {
      metaMessages: ["Must be a valid EIP-712 domain."]
    });
  }
};
var InvalidPrimaryTypeError = class extends chunkYTZHD2MR_cjs.BaseError {
  constructor({ primaryType, types }) {
    super(`Invalid primary type \`${primaryType}\` must be one of \`${JSON.stringify(Object.keys(types))}\`.`, {
      docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
      metaMessages: ["Check that the primary type is a key in `types`."]
    });
  }
};
var InvalidStructTypeError = class extends chunkYTZHD2MR_cjs.BaseError {
  constructor({ type }) {
    super(`Struct type "${type}" is invalid.`, {
      metaMessages: ["Struct type must not be a Solidity type."],
      name: "InvalidStructTypeError"
    });
  }
};

// ../../node_modules/viem/_esm/utils/signature/hashTypedData.js
function hashTypedData(parameters) {
  const { domain = {}, message, primaryType } = parameters;
  const types = {
    EIP712Domain: getTypesForEIP712Domain({ domain }),
    ...parameters.types
  };
  validateTypedData({
    domain,
    message,
    primaryType,
    types
  });
  const parts = ["0x1901"];
  if (domain)
    parts.push(hashDomain({
      domain,
      types
    }));
  if (primaryType !== "EIP712Domain")
    parts.push(hashStruct({
      data: message,
      primaryType,
      types
    }));
  return chunkYTZHD2MR_cjs.keccak256(chunkYTZHD2MR_cjs.concat(parts));
}
function hashDomain({ domain, types }) {
  return hashStruct({
    data: domain,
    primaryType: "EIP712Domain",
    types
  });
}
function hashStruct({ data, primaryType, types }) {
  const encoded = encodeData({
    data,
    primaryType,
    types
  });
  return chunkYTZHD2MR_cjs.keccak256(encoded);
}
function encodeData({ data, primaryType, types }) {
  const encodedTypes = [{ type: "bytes32" }];
  const encodedValues = [hashType({ primaryType, types })];
  for (const field of types[primaryType]) {
    const [type, value] = encodeField({
      types,
      name: field.name,
      type: field.type,
      value: data[field.name]
    });
    encodedTypes.push(type);
    encodedValues.push(value);
  }
  return chunkYTZHD2MR_cjs.encodeAbiParameters(encodedTypes, encodedValues);
}
function hashType({ primaryType, types }) {
  const encodedHashType = chunkYTZHD2MR_cjs.toHex(encodeType({ primaryType, types }));
  return chunkYTZHD2MR_cjs.keccak256(encodedHashType);
}
function encodeType({ primaryType, types }) {
  let result = "";
  const unsortedDeps = findTypeDependencies({ primaryType, types });
  unsortedDeps.delete(primaryType);
  const deps = [primaryType, ...Array.from(unsortedDeps).sort()];
  for (const type of deps) {
    result += `${type}(${types[type].map(({ name, type: t }) => `${t} ${name}`).join(",")})`;
  }
  return result;
}
function findTypeDependencies({ primaryType: primaryType_, types }, results = /* @__PURE__ */ new Set()) {
  const match = primaryType_.match(/^\w*/u);
  const primaryType = match?.[0];
  if (results.has(primaryType) || types[primaryType] === void 0) {
    return results;
  }
  results.add(primaryType);
  for (const field of types[primaryType]) {
    findTypeDependencies({ primaryType: field.type, types }, results);
  }
  return results;
}
function encodeField({ types, name, type, value }) {
  if (types[type] !== void 0) {
    return [
      { type: "bytes32" },
      chunkYTZHD2MR_cjs.keccak256(encodeData({ data: value, primaryType: type, types }))
    ];
  }
  if (type === "bytes") {
    const prepend = value.length % 2 ? "0" : "";
    value = `0x${prepend + value.slice(2)}`;
    return [{ type: "bytes32" }, chunkYTZHD2MR_cjs.keccak256(value)];
  }
  if (type === "string")
    return [{ type: "bytes32" }, chunkYTZHD2MR_cjs.keccak256(chunkYTZHD2MR_cjs.toHex(value))];
  if (type.lastIndexOf("]") === type.length - 1) {
    const parsedType = type.slice(0, type.lastIndexOf("["));
    const typeValuePairs = value.map((item) => encodeField({
      name,
      type: parsedType,
      types,
      value: item
    }));
    return [
      { type: "bytes32" },
      chunkYTZHD2MR_cjs.keccak256(chunkYTZHD2MR_cjs.encodeAbiParameters(typeValuePairs.map(([t]) => t), typeValuePairs.map(([, v]) => v)))
    ];
  }
  return [{ type }, value];
}

// ../../node_modules/viem/_esm/utils/typedData.js
function validateTypedData(parameters) {
  const { domain, message, primaryType, types } = parameters;
  const validateData = (struct, data) => {
    for (const param of struct) {
      const { name, type } = param;
      const value = data[name];
      const integerMatch = type.match(chunkYTZHD2MR_cjs.integerRegex);
      if (integerMatch && (typeof value === "number" || typeof value === "bigint")) {
        const [_type, base, size_] = integerMatch;
        chunkYTZHD2MR_cjs.numberToHex(value, {
          signed: base === "int",
          size: Number.parseInt(size_) / 8
        });
      }
      if (type === "address" && typeof value === "string" && !chunkYTZHD2MR_cjs.isAddress(value))
        throw new chunkYTZHD2MR_cjs.InvalidAddressError({ address: value });
      const bytesMatch = type.match(chunkYTZHD2MR_cjs.bytesRegex);
      if (bytesMatch) {
        const [_type, size_] = bytesMatch;
        if (size_ && chunkYTZHD2MR_cjs.size(value) !== Number.parseInt(size_))
          throw new chunkYTZHD2MR_cjs.BytesSizeMismatchError({
            expectedSize: Number.parseInt(size_),
            givenSize: chunkYTZHD2MR_cjs.size(value)
          });
      }
      const struct2 = types[type];
      if (struct2) {
        validateReference(type);
        validateData(struct2, value);
      }
    }
  };
  if (types.EIP712Domain && domain) {
    if (typeof domain !== "object")
      throw new InvalidDomainError({ domain });
    validateData(types.EIP712Domain, domain);
  }
  if (primaryType !== "EIP712Domain") {
    if (types[primaryType])
      validateData(types[primaryType], message);
    else
      throw new InvalidPrimaryTypeError({ primaryType, types });
  }
}
function getTypesForEIP712Domain({ domain }) {
  return [
    typeof domain?.name === "string" && { name: "name", type: "string" },
    domain?.version && { name: "version", type: "string" },
    (typeof domain?.chainId === "number" || typeof domain?.chainId === "bigint") && {
      name: "chainId",
      type: "uint256"
    },
    domain?.verifyingContract && {
      name: "verifyingContract",
      type: "address"
    },
    domain?.salt && { name: "salt", type: "bytes32" }
  ].filter(Boolean);
}
function validateReference(type) {
  if (type === "address" || type === "bool" || type === "string" || type.startsWith("bytes") || type.startsWith("uint") || type.startsWith("int"))
    throw new InvalidStructTypeError({ type });
}

// ../../node_modules/viem/_esm/utils/formatters/transactionReceipt.js
var receiptStatuses = {
  "0x0": "reverted",
  "0x1": "success"
};
function formatTransactionReceipt(transactionReceipt) {
  const receipt = {
    ...transactionReceipt,
    blockNumber: transactionReceipt.blockNumber ? BigInt(transactionReceipt.blockNumber) : null,
    contractAddress: transactionReceipt.contractAddress ? transactionReceipt.contractAddress : null,
    cumulativeGasUsed: transactionReceipt.cumulativeGasUsed ? BigInt(transactionReceipt.cumulativeGasUsed) : null,
    effectiveGasPrice: transactionReceipt.effectiveGasPrice ? BigInt(transactionReceipt.effectiveGasPrice) : null,
    gasUsed: transactionReceipt.gasUsed ? BigInt(transactionReceipt.gasUsed) : null,
    logs: transactionReceipt.logs ? transactionReceipt.logs.map((log) => formatLog(log)) : null,
    to: transactionReceipt.to ? transactionReceipt.to : null,
    transactionIndex: transactionReceipt.transactionIndex ? chunkYTZHD2MR_cjs.hexToNumber(transactionReceipt.transactionIndex) : null,
    status: transactionReceipt.status ? receiptStatuses[transactionReceipt.status] : null,
    type: transactionReceipt.type ? transactionType[transactionReceipt.type] || transactionReceipt.type : null
  };
  if (transactionReceipt.blobGasPrice)
    receipt.blobGasPrice = BigInt(transactionReceipt.blobGasPrice);
  if (transactionReceipt.blobGasUsed)
    receipt.blobGasUsed = BigInt(transactionReceipt.blobGasUsed);
  return receipt;
}

// ../../node_modules/viem/_esm/constants/strings.js
var presignMessagePrefix = "Ethereum Signed Message:\n";

// ../../node_modules/viem/_esm/utils/signature/toPrefixedMessage.js
function toPrefixedMessage(message_) {
  const message = (() => {
    if (typeof message_ === "string")
      return chunkYTZHD2MR_cjs.stringToHex(message_);
    if (typeof message_.raw === "string")
      return message_.raw;
    return chunkYTZHD2MR_cjs.bytesToHex(message_.raw);
  })();
  const prefix = chunkYTZHD2MR_cjs.stringToHex(`${presignMessagePrefix}${chunkYTZHD2MR_cjs.size(message)}`);
  return chunkYTZHD2MR_cjs.concat([prefix, message]);
}

// ../../node_modules/viem/_esm/utils/signature/hashMessage.js
function hashMessage(message, to_) {
  return chunkYTZHD2MR_cjs.keccak256(toPrefixedMessage(message), to_);
}

// ../../node_modules/viem/_esm/constants/bytes.js
var erc6492MagicBytes = "0x6492649264926492649264926492649264926492649264926492649264926492";

// ../../node_modules/viem/_esm/utils/signature/isErc6492Signature.js
function isErc6492Signature(signature) {
  return chunkYTZHD2MR_cjs.sliceHex(signature, -32) === erc6492MagicBytes;
}

// ../../node_modules/viem/_esm/utils/signature/serializeErc6492Signature.js
function serializeErc6492Signature(parameters) {
  const { address, data, signature, to = "hex" } = parameters;
  const signature_ = chunkYTZHD2MR_cjs.concatHex([
    chunkYTZHD2MR_cjs.encodeAbiParameters([{ type: "address" }, { type: "bytes" }, { type: "bytes" }], [address, data, signature]),
    erc6492MagicBytes
  ]);
  if (to === "hex")
    return signature_;
  return chunkYTZHD2MR_cjs.hexToBytes(signature_);
}

// ../../node_modules/viem/_esm/utils/formatters/proof.js
function formatStorageProof(storageProof) {
  return storageProof.map((proof) => ({
    ...proof,
    value: BigInt(proof.value)
  }));
}
function formatProof(proof) {
  return {
    ...proof,
    balance: proof.balance ? BigInt(proof.balance) : void 0,
    nonce: proof.nonce ? chunkYTZHD2MR_cjs.hexToNumber(proof.nonce) : void 0,
    storageProof: proof.storageProof ? formatStorageProof(proof.storageProof) : void 0
  };
}

// ../../node_modules/viem/_esm/actions/public/getProof.js
async function getProof(client, { address, blockNumber, blockTag: blockTag_, storageKeys }) {
  const blockTag = blockTag_ ?? "latest";
  const blockNumberHex = blockNumber !== void 0 ? chunkYTZHD2MR_cjs.numberToHex(blockNumber) : void 0;
  const proof = await client.request({
    method: "eth_getProof",
    params: [address, storageKeys, blockNumberHex || blockTag]
  });
  return formatProof(proof);
}

// ../../node_modules/viem/_esm/actions/public/getStorageAt.js
async function getStorageAt(client, { address, blockNumber, blockTag = "latest", slot }) {
  const blockNumberHex = blockNumber !== void 0 ? chunkYTZHD2MR_cjs.numberToHex(blockNumber) : void 0;
  const data = await client.request({
    method: "eth_getStorageAt",
    params: [address, slot, blockNumberHex || blockTag]
  });
  return data;
}

// ../../node_modules/viem/_esm/actions/public/getTransaction.js
async function getTransaction(client, { blockHash, blockNumber, blockTag: blockTag_, hash, index: index2 }) {
  const blockTag = blockTag_ || "latest";
  const blockNumberHex = blockNumber !== void 0 ? chunkYTZHD2MR_cjs.numberToHex(blockNumber) : void 0;
  let transaction = null;
  if (hash) {
    transaction = await client.request({
      method: "eth_getTransactionByHash",
      params: [hash]
    }, { dedupe: true });
  } else if (blockHash) {
    transaction = await client.request({
      method: "eth_getTransactionByBlockHashAndIndex",
      params: [blockHash, chunkYTZHD2MR_cjs.numberToHex(index2)]
    }, { dedupe: true });
  } else if (blockNumberHex || blockTag) {
    transaction = await client.request({
      method: "eth_getTransactionByBlockNumberAndIndex",
      params: [blockNumberHex || blockTag, chunkYTZHD2MR_cjs.numberToHex(index2)]
    }, { dedupe: Boolean(blockNumberHex) });
  }
  if (!transaction)
    throw new chunkYTZHD2MR_cjs.TransactionNotFoundError({
      blockHash,
      blockNumber,
      blockTag,
      hash,
      index: index2
    });
  const format = client.chain?.formatters?.transaction?.format || formatTransaction;
  return format(transaction);
}

// ../../node_modules/viem/_esm/actions/public/getTransactionConfirmations.js
async function getTransactionConfirmations(client, { hash, transactionReceipt }) {
  const [blockNumber, transaction] = await Promise.all([
    getAction(client, getBlockNumber, "getBlockNumber")({}),
    hash ? getAction(client, getTransaction, "getTransaction")({ hash }) : void 0
  ]);
  const transactionBlockNumber = transactionReceipt?.blockNumber || transaction?.blockNumber;
  if (!transactionBlockNumber)
    return 0n;
  return blockNumber - transactionBlockNumber + 1n;
}

// ../../node_modules/viem/_esm/actions/public/getTransactionReceipt.js
async function getTransactionReceipt(client, { hash }) {
  const receipt = await client.request({
    method: "eth_getTransactionReceipt",
    params: [hash]
  }, { dedupe: true });
  if (!receipt)
    throw new chunkYTZHD2MR_cjs.TransactionReceiptNotFoundError({ hash });
  const format = client.chain?.formatters?.transactionReceipt?.format || formatTransactionReceipt;
  return format(receipt);
}

// ../../node_modules/viem/_esm/actions/public/multicall.js
async function multicall(client, parameters) {
  const { allowFailure = true, batchSize: batchSize_, blockNumber, blockTag, multicallAddress: multicallAddress_, stateOverride } = parameters;
  const contracts = parameters.contracts;
  const batchSize = batchSize_ ?? (typeof client.batch?.multicall === "object" && client.batch.multicall.batchSize || 1024);
  let multicallAddress = multicallAddress_;
  if (!multicallAddress) {
    if (!client.chain)
      throw new Error("client chain not configured. multicallAddress is required.");
    multicallAddress = chunkYTZHD2MR_cjs.getChainContractAddress({
      blockNumber,
      chain: client.chain,
      contract: "multicall3"
    });
  }
  const chunkedCalls = [[]];
  let currentChunk = 0;
  let currentChunkSize = 0;
  for (let i = 0; i < contracts.length; i++) {
    const { abi: abi2, address, args, functionName } = contracts[i];
    try {
      const callData = chunkYTZHD2MR_cjs.encodeFunctionData({ abi: abi2, args, functionName });
      currentChunkSize += (callData.length - 2) / 2;
      if (
        // Check if batching is enabled.
        batchSize > 0 && // Check if the current size of the batch exceeds the size limit.
        currentChunkSize > batchSize && // Check if the current chunk is not already empty.
        chunkedCalls[currentChunk].length > 0
      ) {
        currentChunk++;
        currentChunkSize = (callData.length - 2) / 2;
        chunkedCalls[currentChunk] = [];
      }
      chunkedCalls[currentChunk] = [
        ...chunkedCalls[currentChunk],
        {
          allowFailure: true,
          callData,
          target: address
        }
      ];
    } catch (err) {
      const error = getContractError(err, {
        abi: abi2,
        address,
        args,
        docsPath: "/docs/contract/multicall",
        functionName
      });
      if (!allowFailure)
        throw error;
      chunkedCalls[currentChunk] = [
        ...chunkedCalls[currentChunk],
        {
          allowFailure: true,
          callData: "0x",
          target: address
        }
      ];
    }
  }
  const aggregate3Results = await Promise.allSettled(chunkedCalls.map((calls) => getAction(client, readContract, "readContract")({
    abi: chunkYTZHD2MR_cjs.multicall3Abi,
    address: multicallAddress,
    args: [calls],
    blockNumber,
    blockTag,
    functionName: "aggregate3",
    stateOverride
  })));
  const results = [];
  for (let i = 0; i < aggregate3Results.length; i++) {
    const result = aggregate3Results[i];
    if (result.status === "rejected") {
      if (!allowFailure)
        throw result.reason;
      for (let j = 0; j < chunkedCalls[i].length; j++) {
        results.push({
          status: "failure",
          error: result.reason,
          result: void 0
        });
      }
      continue;
    }
    const aggregate3Result = result.value;
    for (let j = 0; j < aggregate3Result.length; j++) {
      const { returnData, success } = aggregate3Result[j];
      const { callData } = chunkedCalls[i][j];
      const { abi: abi2, address, functionName, args } = contracts[results.length];
      try {
        if (callData === "0x")
          throw new chunkYTZHD2MR_cjs.AbiDecodingZeroDataError();
        if (!success)
          throw new chunkYTZHD2MR_cjs.RawContractError({ data: returnData });
        const result2 = chunkYTZHD2MR_cjs.decodeFunctionResult({
          abi: abi2,
          args,
          data: returnData,
          functionName
        });
        results.push(allowFailure ? { result: result2, status: "success" } : result2);
      } catch (err) {
        const error = getContractError(err, {
          abi: abi2,
          address,
          args,
          docsPath: "/docs/contract/multicall",
          functionName
        });
        if (!allowFailure)
          throw error;
        results.push({ error, result: void 0, status: "failure" });
      }
    }
  }
  if (results.length !== contracts.length)
    throw new chunkYTZHD2MR_cjs.BaseError("multicall results mismatch");
  return results;
}

// ../../node_modules/ox/_esm/core/version.js
var version = "0.1.1";

// ../../node_modules/ox/_esm/core/internal/errors.js
function getVersion() {
  return version;
}

// ../../node_modules/ox/_esm/core/Errors.js
var BaseError2 = class extends Error {
  constructor(shortMessage, options = {}) {
    const details = (() => {
      if (options.cause instanceof BaseError2) {
        if (options.cause.details)
          return options.cause.details;
        if (options.cause.shortMessage)
          return options.cause.shortMessage;
      }
      if (options.cause?.message)
        return options.cause.message;
      return options.details;
    })();
    const docsPath3 = (() => {
      if (options.cause instanceof BaseError2)
        return options.cause.docsPath || options.docsPath;
      return options.docsPath;
    })();
    const docsBaseUrl = "https://oxlib.sh";
    const docs = `${docsBaseUrl}${docsPath3 ?? ""}`;
    const message = [
      shortMessage || "An error occurred.",
      ...options.metaMessages ? ["", ...options.metaMessages] : [],
      ...details || docsPath3 ? [
        "",
        details ? `Details: ${details}` : void 0,
        docsPath3 ? `See: ${docs}` : void 0
      ] : []
    ].filter((x) => typeof x === "string").join("\n");
    super(message, options.cause ? { cause: options.cause } : void 0);
    Object.defineProperty(this, "details", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "docs", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "docsPath", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shortMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "cause", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "BaseError"
    });
    Object.defineProperty(this, "version", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: `ox@${getVersion()}`
    });
    this.cause = options.cause;
    this.details = details;
    this.docs = docs;
    this.docsPath = docsPath3;
    this.shortMessage = shortMessage;
  }
  walk(fn) {
    return walk(this, fn);
  }
};
function walk(err, fn) {
  if (fn?.(err))
    return err;
  if (err && typeof err === "object" && "cause" in err && err.cause)
    return walk(err.cause, fn);
  return fn ? null : err;
}

// ../../node_modules/ox/_esm/core/internal/hex.js
function pad(hex_, options = {}) {
  const { dir, size: size4 = 32 } = options;
  if (size4 === 0)
    return hex_;
  const hex = hex_.replace("0x", "");
  if (hex.length > size4 * 2)
    throw new SizeExceedsPaddingSizeError({
      size: Math.ceil(hex.length / 2),
      targetSize: size4,
      type: "Hex"
    });
  return `0x${hex[dir === "right" ? "padEnd" : "padStart"](size4 * 2, "0")}`;
}

// ../../node_modules/ox/_esm/core/Hex.js
function fromNumber(value, options = {}) {
  const { signed, size: size4 } = options;
  const value_ = BigInt(value);
  let maxValue;
  if (size4) {
    if (signed)
      maxValue = (1n << BigInt(size4) * 8n - 1n) - 1n;
    else
      maxValue = 2n ** (BigInt(size4) * 8n) - 1n;
  } else if (typeof value === "number") {
    maxValue = BigInt(Number.MAX_SAFE_INTEGER);
  }
  const minValue = typeof maxValue === "bigint" && signed ? -maxValue - 1n : 0;
  if (maxValue && value_ > maxValue || value_ < minValue) {
    const suffix = typeof value === "bigint" ? "n" : "";
    throw new IntegerOutOfRangeError({
      max: maxValue ? `${maxValue}${suffix}` : void 0,
      min: `${minValue}${suffix}`,
      signed,
      size: size4,
      value: `${value}${suffix}`
    });
  }
  const stringValue = (signed && value_ < 0 ? (1n << BigInt(size4 * 8)) + BigInt(value_) : value_).toString(16);
  const hex = `0x${stringValue}`;
  if (size4)
    return padLeft(hex, size4);
  return hex;
}
function padLeft(value, size4) {
  return pad(value, { dir: "left", size: size4 });
}
var IntegerOutOfRangeError = class extends BaseError2 {
  constructor({ max, min, signed, size: size4, value }) {
    super(`Number \`${value}\` is not in safe${size4 ? ` ${size4 * 8}-bit` : ""}${signed ? " signed" : " unsigned"} integer range ${max ? `(\`${min}\` to \`${max}\`)` : `(above \`${min}\`)`}`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.IntegerOutOfRangeError"
    });
  }
};
var SizeExceedsPaddingSizeError = class extends BaseError2 {
  constructor({ size: size4, targetSize, type }) {
    super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size4}\`) exceeds padding size (\`${targetSize}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.SizeExceedsPaddingSizeError"
    });
  }
};

// ../../node_modules/ox/_esm/core/Withdrawal.js
function toRpc(withdrawal) {
  return {
    address: withdrawal.address,
    amount: fromNumber(withdrawal.amount),
    index: fromNumber(withdrawal.index),
    validatorIndex: fromNumber(withdrawal.validatorIndex)
  };
}

// ../../node_modules/ox/_esm/core/BlockOverrides.js
function toRpc2(blockOverrides) {
  return {
    ...typeof blockOverrides.baseFeePerGas === "bigint" && {
      baseFeePerGas: fromNumber(blockOverrides.baseFeePerGas)
    },
    ...typeof blockOverrides.blobBaseFee === "bigint" && {
      blobBaseFee: fromNumber(blockOverrides.blobBaseFee)
    },
    ...typeof blockOverrides.feeRecipient === "string" && {
      feeRecipient: blockOverrides.feeRecipient
    },
    ...typeof blockOverrides.gasLimit === "bigint" && {
      gasLimit: fromNumber(blockOverrides.gasLimit)
    },
    ...typeof blockOverrides.number === "bigint" && {
      number: fromNumber(blockOverrides.number)
    },
    ...typeof blockOverrides.prevRandao === "bigint" && {
      prevRandao: fromNumber(blockOverrides.prevRandao)
    },
    ...typeof blockOverrides.time === "bigint" && {
      time: fromNumber(blockOverrides.time)
    },
    ...blockOverrides.withdrawals && {
      withdrawals: blockOverrides.withdrawals.map(toRpc)
    }
  };
}

// ../../node_modules/viem/_esm/actions/public/simulate.js
async function simulate(client, parameters) {
  const { blockNumber, blockTag = "latest", blocks, returnFullTransactions, traceTransfers, validation } = parameters;
  try {
    const blockStateCalls = [];
    for (const block2 of blocks) {
      const blockOverrides = block2.blockOverrides ? toRpc2(block2.blockOverrides) : void 0;
      const calls = block2.calls.map((call_) => {
        const call2 = call_;
        const account = call2.account ? chunkYTZHD2MR_cjs.parseAccount(call2.account) : void 0;
        const request = {
          ...call2,
          data: call2.abi ? chunkYTZHD2MR_cjs.encodeFunctionData(call2) : call2.data,
          from: call2.from ?? account?.address
        };
        chunkYTZHD2MR_cjs.assertRequest(request);
        return chunkYTZHD2MR_cjs.formatTransactionRequest(request);
      });
      const stateOverrides = block2.stateOverrides ? chunkYTZHD2MR_cjs.serializeStateOverride(block2.stateOverrides) : void 0;
      blockStateCalls.push({
        blockOverrides,
        calls,
        stateOverrides
      });
    }
    const blockNumberHex = blockNumber ? chunkYTZHD2MR_cjs.numberToHex(blockNumber) : void 0;
    const block = blockNumberHex || blockTag;
    const result = await client.request({
      method: "eth_simulateV1",
      params: [
        { blockStateCalls, returnFullTransactions, traceTransfers, validation },
        block
      ]
    });
    return result.map((block2, i) => ({
      ...formatBlock(block2),
      calls: block2.calls.map((call2, j) => {
        const { abi: abi2, args, functionName, to } = blocks[i].calls[j];
        const data = call2.error?.data ?? call2.returnData;
        const gasUsed = BigInt(call2.gasUsed);
        const logs = call2.logs?.map((log) => formatLog(log));
        const status = call2.status === "0x1" ? "success" : "failure";
        const result2 = abi2 ? chunkYTZHD2MR_cjs.decodeFunctionResult({
          abi: abi2,
          data,
          functionName
        }) : null;
        const error = (() => {
          if (status === "success")
            return void 0;
          let error2 = void 0;
          if (call2.error?.data === "0x")
            error2 = new chunkYTZHD2MR_cjs.AbiDecodingZeroDataError();
          else if (call2.error)
            error2 = new chunkYTZHD2MR_cjs.RawContractError(call2.error);
          if (!error2)
            return void 0;
          return getContractError(error2, {
            abi: abi2 ?? [],
            address: to,
            args,
            functionName: functionName ?? "<unknown>"
          });
        })();
        return {
          data,
          gasUsed,
          logs,
          status,
          ...status === "success" ? {
            result: result2
          } : {
            error
          }
        };
      })
    }));
  } catch (e) {
    const cause = e;
    const error = chunkYTZHD2MR_cjs.getNodeError(cause, {});
    if (error instanceof chunkYTZHD2MR_cjs.UnknownNodeError)
      throw cause;
    throw error;
  }
}

// ../../node_modules/viem/_esm/utils/signature/serializeSignature.js
function serializeSignature({ r, s, to = "hex", v, yParity }) {
  const yParity_ = (() => {
    if (yParity === 0 || yParity === 1)
      return yParity;
    if (v && (v === 27n || v === 28n || v >= 35n))
      return v % 2n === 0n ? 1 : 0;
    throw new Error("Invalid `v` or `yParity` value");
  })();
  const signature = `0x${new chunkIPT74UOE_cjs.secp256k1.Signature(chunkYTZHD2MR_cjs.hexToBigInt(r), chunkYTZHD2MR_cjs.hexToBigInt(s)).toCompactHex()}${yParity_ === 0 ? "1b" : "1c"}`;
  if (to === "hex")
    return signature;
  return chunkYTZHD2MR_cjs.hexToBytes(signature);
}

// ../../node_modules/viem/_esm/actions/public/verifyHash.js
async function verifyHash(client, parameters) {
  const { address, factory, factoryData, hash, signature, universalSignatureVerifierAddress = client.chain?.contracts?.universalSignatureVerifier?.address, ...rest } = parameters;
  const signatureHex = (() => {
    if (chunkYTZHD2MR_cjs.isHex(signature))
      return signature;
    if (typeof signature === "object" && "r" in signature && "s" in signature)
      return serializeSignature(signature);
    return chunkYTZHD2MR_cjs.bytesToHex(signature);
  })();
  const wrappedSignature = await (async () => {
    if (!factory && !factoryData)
      return signatureHex;
    if (isErc6492Signature(signatureHex))
      return signatureHex;
    return serializeErc6492Signature({
      address: factory,
      data: factoryData,
      signature: signatureHex
    });
  })();
  try {
    const args = universalSignatureVerifierAddress ? {
      to: universalSignatureVerifierAddress,
      data: chunkYTZHD2MR_cjs.encodeFunctionData({
        abi: chunkYTZHD2MR_cjs.universalSignatureValidatorAbi,
        functionName: "isValidSig",
        args: [address, hash, wrappedSignature]
      }),
      ...rest
    } : {
      data: chunkYTZHD2MR_cjs.encodeDeployData({
        abi: chunkYTZHD2MR_cjs.universalSignatureValidatorAbi,
        args: [address, hash, wrappedSignature],
        bytecode: chunkYTZHD2MR_cjs.universalSignatureValidatorByteCode
      }),
      ...rest
    };
    const { data } = await getAction(client, chunkYTZHD2MR_cjs.call, "call")(args);
    return chunkYTZHD2MR_cjs.hexToBool(data ?? "0x0");
  } catch (error) {
    try {
      const verified = chunkYTZHD2MR_cjs.isAddressEqual(chunkYTZHD2MR_cjs.getAddress(address), await recoverAddress({ hash, signature }));
      if (verified)
        return true;
    } catch {
    }
    if (error instanceof chunkYTZHD2MR_cjs.CallExecutionError) {
      return false;
    }
    throw error;
  }
}

// ../../node_modules/viem/_esm/actions/public/verifyMessage.js
async function verifyMessage(client, { address, message, factory, factoryData, signature, ...callRequest }) {
  const hash = hashMessage(message);
  return verifyHash(client, {
    address,
    factory,
    factoryData,
    hash,
    signature,
    ...callRequest
  });
}

// ../../node_modules/viem/_esm/actions/public/verifyTypedData.js
async function verifyTypedData(client, parameters) {
  const { address, factory, factoryData, signature, message, primaryType, types, domain, ...callRequest } = parameters;
  const hash = hashTypedData({ message, primaryType, types, domain });
  return verifyHash(client, {
    address,
    factory,
    factoryData,
    hash,
    signature,
    ...callRequest
  });
}

// ../../node_modules/viem/_esm/actions/public/watchBlockNumber.js
function watchBlockNumber(client, { emitOnBegin = false, emitMissed = false, onBlockNumber, onError, poll: poll_, pollingInterval = client.pollingInterval }) {
  const enablePolling = (() => {
    if (typeof poll_ !== "undefined")
      return poll_;
    if (client.transport.type === "webSocket")
      return false;
    if (client.transport.type === "fallback" && client.transport.transports[0].config.type === "webSocket")
      return false;
    return true;
  })();
  let prevBlockNumber;
  const pollBlockNumber = () => {
    const observerId = chunkYTZHD2MR_cjs.stringify([
      "watchBlockNumber",
      client.uid,
      emitOnBegin,
      emitMissed,
      pollingInterval
    ]);
    return observe(observerId, { onBlockNumber, onError }, (emit) => poll(async () => {
      try {
        const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({ cacheTime: 0 });
        if (prevBlockNumber) {
          if (blockNumber === prevBlockNumber)
            return;
          if (blockNumber - prevBlockNumber > 1 && emitMissed) {
            for (let i = prevBlockNumber + 1n; i < blockNumber; i++) {
              emit.onBlockNumber(i, prevBlockNumber);
              prevBlockNumber = i;
            }
          }
        }
        if (!prevBlockNumber || blockNumber > prevBlockNumber) {
          emit.onBlockNumber(blockNumber, prevBlockNumber);
          prevBlockNumber = blockNumber;
        }
      } catch (err) {
        emit.onError?.(err);
      }
    }, {
      emitOnBegin,
      interval: pollingInterval
    }));
  };
  const subscribeBlockNumber = () => {
    const observerId = chunkYTZHD2MR_cjs.stringify([
      "watchBlockNumber",
      client.uid,
      emitOnBegin,
      emitMissed
    ]);
    return observe(observerId, { onBlockNumber, onError }, (emit) => {
      let active = true;
      let unsubscribe = () => active = false;
      (async () => {
        try {
          const transport = (() => {
            if (client.transport.type === "fallback") {
              const transport2 = client.transport.transports.find((transport3) => transport3.config.type === "webSocket");
              if (!transport2)
                return client.transport;
              return transport2.value;
            }
            return client.transport;
          })();
          const { unsubscribe: unsubscribe_ } = await transport.subscribe({
            params: ["newHeads"],
            onData(data) {
              if (!active)
                return;
              const blockNumber = chunkYTZHD2MR_cjs.hexToBigInt(data.result?.number);
              emit.onBlockNumber(blockNumber, prevBlockNumber);
              prevBlockNumber = blockNumber;
            },
            onError(error) {
              emit.onError?.(error);
            }
          });
          unsubscribe = unsubscribe_;
          if (!active)
            unsubscribe();
        } catch (err) {
          onError?.(err);
        }
      })();
      return () => unsubscribe();
    });
  };
  return enablePolling ? pollBlockNumber() : subscribeBlockNumber();
}

// ../../node_modules/viem/_esm/actions/public/waitForTransactionReceipt.js
async function waitForTransactionReceipt(client, {
  confirmations = 1,
  hash,
  onReplaced,
  pollingInterval = client.pollingInterval,
  retryCount = 6,
  retryDelay = ({ count }) => ~~(1 << count) * 200,
  // exponential backoff
  timeout = 18e4
}) {
  const observerId = chunkYTZHD2MR_cjs.stringify(["waitForTransactionReceipt", client.uid, hash]);
  let transaction;
  let replacedTransaction;
  let receipt;
  let retrying = false;
  const { promise, resolve, reject } = chunkYTZHD2MR_cjs.withResolvers();
  const timer = timeout ? setTimeout(() => reject(new chunkYTZHD2MR_cjs.WaitForTransactionReceiptTimeoutError({ hash })), timeout) : void 0;
  const _unobserve = observe(observerId, { onReplaced, resolve, reject }, (emit) => {
    const _unwatch = getAction(client, watchBlockNumber, "watchBlockNumber")({
      emitMissed: true,
      emitOnBegin: true,
      poll: true,
      pollingInterval,
      async onBlockNumber(blockNumber_) {
        const done = (fn) => {
          clearTimeout(timer);
          _unwatch();
          fn();
          _unobserve();
        };
        let blockNumber = blockNumber_;
        if (retrying)
          return;
        try {
          if (receipt) {
            if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations))
              return;
            done(() => emit.resolve(receipt));
            return;
          }
          if (!transaction) {
            retrying = true;
            await withRetry(async () => {
              transaction = await getAction(client, getTransaction, "getTransaction")({ hash });
              if (transaction.blockNumber)
                blockNumber = transaction.blockNumber;
            }, {
              delay: retryDelay,
              retryCount
            });
            retrying = false;
          }
          receipt = await getAction(client, getTransactionReceipt, "getTransactionReceipt")({ hash });
          if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations))
            return;
          done(() => emit.resolve(receipt));
        } catch (err) {
          if (err instanceof chunkYTZHD2MR_cjs.TransactionNotFoundError || err instanceof chunkYTZHD2MR_cjs.TransactionReceiptNotFoundError) {
            if (!transaction) {
              retrying = false;
              return;
            }
            try {
              replacedTransaction = transaction;
              retrying = true;
              const block = await withRetry(() => getAction(client, getBlock, "getBlock")({
                blockNumber,
                includeTransactions: true
              }), {
                delay: retryDelay,
                retryCount,
                shouldRetry: ({ error }) => error instanceof BlockNotFoundError
              });
              retrying = false;
              const replacementTransaction = block.transactions.find(({ from, nonce }) => from === replacedTransaction.from && nonce === replacedTransaction.nonce);
              if (!replacementTransaction)
                return;
              receipt = await getAction(client, getTransactionReceipt, "getTransactionReceipt")({
                hash: replacementTransaction.hash
              });
              if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations))
                return;
              let reason = "replaced";
              if (replacementTransaction.to === replacedTransaction.to && replacementTransaction.value === replacedTransaction.value && replacementTransaction.input === replacedTransaction.input) {
                reason = "repriced";
              } else if (replacementTransaction.from === replacementTransaction.to && replacementTransaction.value === 0n) {
                reason = "cancelled";
              }
              done(() => {
                emit.onReplaced?.({
                  reason,
                  replacedTransaction,
                  transaction: replacementTransaction,
                  transactionReceipt: receipt
                });
                emit.resolve(receipt);
              });
            } catch (err_) {
              done(() => emit.reject(err_));
            }
          } else {
            done(() => emit.reject(err));
          }
        }
      }
    });
  });
  return promise;
}

// ../../node_modules/viem/_esm/actions/public/watchBlocks.js
function watchBlocks(client, { blockTag = "latest", emitMissed = false, emitOnBegin = false, onBlock, onError, includeTransactions: includeTransactions_, poll: poll_, pollingInterval = client.pollingInterval }) {
  const enablePolling = (() => {
    if (typeof poll_ !== "undefined")
      return poll_;
    if (client.transport.type === "webSocket")
      return false;
    if (client.transport.type === "fallback" && client.transport.transports[0].config.type === "webSocket")
      return false;
    return true;
  })();
  const includeTransactions = includeTransactions_ ?? false;
  let prevBlock;
  const pollBlocks = () => {
    const observerId = chunkYTZHD2MR_cjs.stringify([
      "watchBlocks",
      client.uid,
      blockTag,
      emitMissed,
      emitOnBegin,
      includeTransactions,
      pollingInterval
    ]);
    return observe(observerId, { onBlock, onError }, (emit) => poll(async () => {
      try {
        const block = await getAction(client, getBlock, "getBlock")({
          blockTag,
          includeTransactions
        });
        if (block.number && prevBlock?.number) {
          if (block.number === prevBlock.number)
            return;
          if (block.number - prevBlock.number > 1 && emitMissed) {
            for (let i = prevBlock?.number + 1n; i < block.number; i++) {
              const block2 = await getAction(client, getBlock, "getBlock")({
                blockNumber: i,
                includeTransactions
              });
              emit.onBlock(block2, prevBlock);
              prevBlock = block2;
            }
          }
        }
        if (
          // If no previous block exists, emit.
          !prevBlock?.number || // If the block tag is "pending" with no block number, emit.
          blockTag === "pending" && !block?.number || // If the next block number is greater than the previous block number, emit.
          // We don't want to emit blocks in the past.
          block.number && block.number > prevBlock.number
        ) {
          emit.onBlock(block, prevBlock);
          prevBlock = block;
        }
      } catch (err) {
        emit.onError?.(err);
      }
    }, {
      emitOnBegin,
      interval: pollingInterval
    }));
  };
  const subscribeBlocks = () => {
    let active = true;
    let emitFetched = true;
    let unsubscribe = () => active = false;
    (async () => {
      try {
        if (emitOnBegin) {
          getAction(client, getBlock, "getBlock")({
            blockTag,
            includeTransactions
          }).then((block) => {
            if (!active)
              return;
            if (!emitFetched)
              return;
            onBlock(block, void 0);
            emitFetched = false;
          });
        }
        const transport = (() => {
          if (client.transport.type === "fallback") {
            const transport2 = client.transport.transports.find((transport3) => transport3.config.type === "webSocket");
            if (!transport2)
              return client.transport;
            return transport2.value;
          }
          return client.transport;
        })();
        const { unsubscribe: unsubscribe_ } = await transport.subscribe({
          params: ["newHeads"],
          async onData(data) {
            if (!active)
              return;
            const block = await getAction(client, getBlock, "getBlock")({
              blockNumber: data.blockNumber,
              includeTransactions
            }).catch(() => {
            });
            if (!active)
              return;
            onBlock(block, prevBlock);
            emitFetched = false;
            prevBlock = block;
          },
          onError(error) {
            onError?.(error);
          }
        });
        unsubscribe = unsubscribe_;
        if (!active)
          unsubscribe();
      } catch (err) {
        onError?.(err);
      }
    })();
    return () => unsubscribe();
  };
  return enablePolling ? pollBlocks() : subscribeBlocks();
}

// ../../node_modules/viem/_esm/actions/public/watchEvent.js
function watchEvent(client, { address, args, batch = true, event, events, fromBlock, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ }) {
  const enablePolling = (() => {
    if (typeof poll_ !== "undefined")
      return poll_;
    if (typeof fromBlock === "bigint")
      return true;
    if (client.transport.type === "webSocket")
      return false;
    if (client.transport.type === "fallback" && client.transport.transports[0].config.type === "webSocket")
      return false;
    return true;
  })();
  const strict = strict_ ?? false;
  const pollEvent = () => {
    const observerId = chunkYTZHD2MR_cjs.stringify([
      "watchEvent",
      address,
      args,
      batch,
      client.uid,
      event,
      pollingInterval,
      fromBlock
    ]);
    return observe(observerId, { onLogs, onError }, (emit) => {
      let previousBlockNumber;
      if (fromBlock !== void 0)
        previousBlockNumber = fromBlock - 1n;
      let filter;
      let initialized = false;
      const unwatch = poll(async () => {
        if (!initialized) {
          try {
            filter = await getAction(client, createEventFilter, "createEventFilter")({
              address,
              args,
              event,
              events,
              strict,
              fromBlock
            });
          } catch {
          }
          initialized = true;
          return;
        }
        try {
          let logs;
          if (filter) {
            logs = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
          } else {
            const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({});
            if (previousBlockNumber && previousBlockNumber !== blockNumber) {
              logs = await getAction(client, getLogs, "getLogs")({
                address,
                args,
                event,
                events,
                fromBlock: previousBlockNumber + 1n,
                toBlock: blockNumber
              });
            } else {
              logs = [];
            }
            previousBlockNumber = blockNumber;
          }
          if (logs.length === 0)
            return;
          if (batch)
            emit.onLogs(logs);
          else
            for (const log of logs)
              emit.onLogs([log]);
        } catch (err) {
          if (filter && err instanceof chunkYTZHD2MR_cjs.InvalidInputRpcError)
            initialized = false;
          emit.onError?.(err);
        }
      }, {
        emitOnBegin: true,
        interval: pollingInterval
      });
      return async () => {
        if (filter)
          await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
        unwatch();
      };
    });
  };
  const subscribeEvent = () => {
    let active = true;
    let unsubscribe = () => active = false;
    (async () => {
      try {
        const transport = (() => {
          if (client.transport.type === "fallback") {
            const transport2 = client.transport.transports.find((transport3) => transport3.config.type === "webSocket");
            if (!transport2)
              return client.transport;
            return transport2.value;
          }
          return client.transport;
        })();
        const events_ = events ?? (event ? [event] : void 0);
        let topics = [];
        if (events_) {
          const encoded = events_.flatMap((event2) => encodeEventTopics({
            abi: [event2],
            eventName: event2.name,
            args
          }));
          topics = [encoded];
          if (event)
            topics = topics[0];
        }
        const { unsubscribe: unsubscribe_ } = await transport.subscribe({
          params: ["logs", { address, topics }],
          onData(data) {
            if (!active)
              return;
            const log = data.result;
            try {
              const { eventName, args: args2 } = decodeEventLog({
                abi: events_ ?? [],
                data: log.data,
                topics: log.topics,
                strict
              });
              const formatted = formatLog(log, { args: args2, eventName });
              onLogs([formatted]);
            } catch (err) {
              let eventName;
              let isUnnamed;
              if (err instanceof chunkYTZHD2MR_cjs.DecodeLogDataMismatch || err instanceof chunkYTZHD2MR_cjs.DecodeLogTopicsMismatch) {
                if (strict_)
                  return;
                eventName = err.abiItem.name;
                isUnnamed = err.abiItem.inputs?.some((x) => !("name" in x && x.name));
              }
              const formatted = formatLog(log, {
                args: isUnnamed ? [] : {},
                eventName
              });
              onLogs([formatted]);
            }
          },
          onError(error) {
            onError?.(error);
          }
        });
        unsubscribe = unsubscribe_;
        if (!active)
          unsubscribe();
      } catch (err) {
        onError?.(err);
      }
    })();
    return () => unsubscribe();
  };
  return enablePolling ? pollEvent() : subscribeEvent();
}

// ../../node_modules/viem/_esm/actions/public/watchPendingTransactions.js
function watchPendingTransactions(client, { batch = true, onError, onTransactions, poll: poll_, pollingInterval = client.pollingInterval }) {
  const enablePolling = typeof poll_ !== "undefined" ? poll_ : client.transport.type !== "webSocket";
  const pollPendingTransactions = () => {
    const observerId = chunkYTZHD2MR_cjs.stringify([
      "watchPendingTransactions",
      client.uid,
      batch,
      pollingInterval
    ]);
    return observe(observerId, { onTransactions, onError }, (emit) => {
      let filter;
      const unwatch = poll(async () => {
        try {
          if (!filter) {
            try {
              filter = await getAction(client, createPendingTransactionFilter, "createPendingTransactionFilter")({});
              return;
            } catch (err) {
              unwatch();
              throw err;
            }
          }
          const hashes = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
          if (hashes.length === 0)
            return;
          if (batch)
            emit.onTransactions(hashes);
          else
            for (const hash of hashes)
              emit.onTransactions([hash]);
        } catch (err) {
          emit.onError?.(err);
        }
      }, {
        emitOnBegin: true,
        interval: pollingInterval
      });
      return async () => {
        if (filter)
          await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
        unwatch();
      };
    });
  };
  const subscribePendingTransactions = () => {
    let active = true;
    let unsubscribe = () => active = false;
    (async () => {
      try {
        const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
          params: ["newPendingTransactions"],
          onData(data) {
            if (!active)
              return;
            const transaction = data.result;
            onTransactions([transaction]);
          },
          onError(error) {
            onError?.(error);
          }
        });
        unsubscribe = unsubscribe_;
        if (!active)
          unsubscribe();
      } catch (err) {
        onError?.(err);
      }
    })();
    return () => unsubscribe();
  };
  return enablePolling ? pollPendingTransactions() : subscribePendingTransactions();
}

// ../../node_modules/viem/_esm/utils/siwe/parseSiweMessage.js
function parseSiweMessage(message) {
  const { scheme, statement, ...prefix } = message.match(prefixRegex)?.groups ?? {};
  const { chainId, expirationTime, issuedAt, notBefore, requestId, ...suffix } = message.match(suffixRegex)?.groups ?? {};
  const resources = message.split("Resources:")[1]?.split("\n- ").slice(1);
  return {
    ...prefix,
    ...suffix,
    ...chainId ? { chainId: Number(chainId) } : {},
    ...expirationTime ? { expirationTime: new Date(expirationTime) } : {},
    ...issuedAt ? { issuedAt: new Date(issuedAt) } : {},
    ...notBefore ? { notBefore: new Date(notBefore) } : {},
    ...requestId ? { requestId } : {},
    ...resources ? { resources } : {},
    ...scheme ? { scheme } : {},
    ...statement ? { statement } : {}
  };
}
var prefixRegex = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/;
var suffixRegex = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;

// ../../node_modules/viem/_esm/utils/siwe/validateSiweMessage.js
function validateSiweMessage(parameters) {
  const { address, domain, message, nonce, scheme, time = /* @__PURE__ */ new Date() } = parameters;
  if (domain && message.domain !== domain)
    return false;
  if (nonce && message.nonce !== nonce)
    return false;
  if (scheme && message.scheme !== scheme)
    return false;
  if (message.expirationTime && time >= message.expirationTime)
    return false;
  if (message.notBefore && time < message.notBefore)
    return false;
  try {
    if (!message.address)
      return false;
    if (address && !chunkYTZHD2MR_cjs.isAddressEqual(message.address, address))
      return false;
  } catch {
    return false;
  }
  return true;
}

// ../../node_modules/viem/_esm/actions/siwe/verifySiweMessage.js
async function verifySiweMessage(client, parameters) {
  const { address, domain, message, nonce, scheme, signature, time = /* @__PURE__ */ new Date(), ...callRequest } = parameters;
  const parsed = parseSiweMessage(message);
  if (!parsed.address)
    return false;
  const isValid = validateSiweMessage({
    address,
    domain,
    message: parsed,
    nonce,
    scheme,
    time
  });
  if (!isValid)
    return false;
  const hash = hashMessage(message);
  return verifyHash(client, {
    address: parsed.address,
    hash,
    signature,
    ...callRequest
  });
}

// ../../node_modules/viem/_esm/clients/decorators/public.js
function publicActions(client) {
  return {
    call: (args) => chunkYTZHD2MR_cjs.call(client, args),
    createAccessList: (args) => createAccessList(client, args),
    createBlockFilter: () => createBlockFilter(client),
    createContractEventFilter: (args) => createContractEventFilter(client, args),
    createEventFilter: (args) => createEventFilter(client, args),
    createPendingTransactionFilter: () => createPendingTransactionFilter(client),
    estimateContractGas: (args) => estimateContractGas(client, args),
    estimateGas: (args) => estimateGas(client, args),
    getBalance: (args) => getBalance(client, args),
    getBlobBaseFee: () => getBlobBaseFee(client),
    getBlock: (args) => getBlock(client, args),
    getBlockNumber: (args) => getBlockNumber(client, args),
    getBlockTransactionCount: (args) => getBlockTransactionCount(client, args),
    getBytecode: (args) => getCode(client, args),
    getChainId: () => getChainId(client),
    getCode: (args) => getCode(client, args),
    getContractEvents: (args) => getContractEvents(client, args),
    getEip712Domain: (args) => getEip712Domain(client, args),
    getEnsAddress: (args) => getEnsAddress(client, args),
    getEnsAvatar: (args) => getEnsAvatar(client, args),
    getEnsName: (args) => getEnsName(client, args),
    getEnsResolver: (args) => getEnsResolver(client, args),
    getEnsText: (args) => getEnsText(client, args),
    getFeeHistory: (args) => getFeeHistory(client, args),
    estimateFeesPerGas: (args) => estimateFeesPerGas(client, args),
    getFilterChanges: (args) => getFilterChanges(client, args),
    getFilterLogs: (args) => getFilterLogs(client, args),
    getGasPrice: () => getGasPrice(client),
    getLogs: (args) => getLogs(client, args),
    getProof: (args) => getProof(client, args),
    estimateMaxPriorityFeePerGas: (args) => estimateMaxPriorityFeePerGas(client, args),
    getStorageAt: (args) => getStorageAt(client, args),
    getTransaction: (args) => getTransaction(client, args),
    getTransactionConfirmations: (args) => getTransactionConfirmations(client, args),
    getTransactionCount: (args) => getTransactionCount(client, args),
    getTransactionReceipt: (args) => getTransactionReceipt(client, args),
    multicall: (args) => multicall(client, args),
    prepareTransactionRequest: (args) => prepareTransactionRequest(client, args),
    readContract: (args) => readContract(client, args),
    sendRawTransaction: (args) => sendRawTransaction(client, args),
    simulate: (args) => simulate(client, args),
    simulateContract: (args) => simulateContract(client, args),
    verifyMessage: (args) => verifyMessage(client, args),
    verifySiweMessage: (args) => verifySiweMessage(client, args),
    verifyTypedData: (args) => verifyTypedData(client, args),
    uninstallFilter: (args) => uninstallFilter(client, args),
    waitForTransactionReceipt: (args) => waitForTransactionReceipt(client, args),
    watchBlocks: (args) => watchBlocks(client, args),
    watchBlockNumber: (args) => watchBlockNumber(client, args),
    watchContractEvent: (args) => watchContractEvent(client, args),
    watchEvent: (args) => watchEvent(client, args),
    watchPendingTransactions: (args) => watchPendingTransactions(client, args)
  };
}

// ../../node_modules/viem/_esm/clients/createPublicClient.js
function createPublicClient(parameters) {
  const { key = "public", name = "Public Client" } = parameters;
  const client = createClient({
    ...parameters,
    key,
    name,
    type: "publicClient"
  });
  return client.extend(publicActions);
}

// src/actions/getProvider.ts
function createProvider(publicClient) {
  const network = publicClient.chain ? { chainId: publicClient.chain.id, name: publicClient.chain.name } : void 0;
  const jsonRpcFetchFunc = async (method, params) => {
    const multicall3 = publicClient.chain?.contracts?.multicall3;
    if (multicall3) {
      if (method === "eth_getBalance") {
        const [address, blockTag] = params;
        const balance = await publicClient.readContract({
          abi: multicall3Abi2,
          address: multicall3.address,
          functionName: "getEthBalance",
          args: [chunkYTZHD2MR_cjs.getAddress(address)],
          blockTag
        });
        return balance;
      }
      if (method === "eth_call") {
        const [args, blockTag] = params;
        const result = await publicClient.call({ ...args, blockTag });
        return result.data;
      }
    }
    return publicClient.request({ method, params });
  };
  const provider = new Web3StaticProvider(jsonRpcFetchFunc, network);
  return provider;
}
var createGetProvider = ({ getPublicClient }) => {
  const providers2 = {};
  return (chainKey) => {
    if (!providers2[chainKey]) {
      const publicClient = getPublicClient(chainKey);
      const provider = createProvider(publicClient);
      providers2[chainKey] = provider;
    }
    return providers2[chainKey];
  };
};
var Web3StaticProvider = class extends providers.Web3Provider {
  // using cached network to reduce RPC calls
  async detectNetwork() {
    return this.network;
  }
};
var multicall3Abi2 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "getEthBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

// src/actions/getPublicClient.ts
var createGetPublicClient = ({
  config,
  createClient: createClient2 = defaultCreateClient
}) => {
  const clients = {};
  function getChain(chainKey) {
    const chain = config.chains[chainKey];
    if (chain)
      return chain;
    throw new Error(`Chain ${chainKey} not found`);
  }
  const getPublicClient = (chainKey) => {
    if (!clients[chainKey]) {
      const chain = getChain(chainKey);
      clients[chainKey] = createClient2(chain);
    }
    return clients[chainKey];
  };
  return getPublicClient;
};
function defaultCreateClient(chain) {
  return createPublicClient({
    batch: {
      multicall: true
    },
    chain,
    transport: http()
  });
}

exports.AddressOne = AddressOne;
exports.AddressZero = AddressZero;
exports.BalanceProvider__evm = BalanceProvider__evm;
exports.ERC20__api = ERC20__api;
exports.ExecutorOptionType = ExecutorOptionType;
exports.FailoverProvider = FailoverProvider;
exports.ONE_ADDRESS = ONE_ADDRESS;
exports.OptionType = OptionType;
exports.Options = Options;
exports.ProviderRpcErrorCode = ProviderRpcErrorCode;
exports.StaticJsonRpcBatchProvider = StaticJsonRpcBatchProvider;
exports.VerifierOptionType = VerifierOptionType;
exports.WorkerId = WorkerId;
exports.ZERO_ADDRESS = ZERO_ADDRESS;
exports.addressToBytes32 = addressToBytes32;
exports.createEstimateGas = createEstimateGas;
exports.createFailoverProviderFactory = createFailoverProviderFactory;
exports.createGetProvider = createGetProvider;
exports.createGetPublicClient = createGetPublicClient;
exports.createMulticallProviderFactory = createMulticallProviderFactory;
exports.createProvider = createProvider;
exports.createTransaction = createTransaction;
exports.hexZeroPadTo32 = hexZeroPadTo32;
exports.multicallDeployments = multicallDeployments;
exports.optionsType1 = optionsType1;
exports.optionsType2 = optionsType2;
exports.randomWeighted = randomWeighted;
exports.randomizeOrder = randomizeOrder;
exports.serializeAdapterParams = serializeAdapterParams;
exports.trim0x = trim0x;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map