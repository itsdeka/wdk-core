'use strict';

var uiCore = require('@layerzerolabs/ui-core');
var pMemoize = require('p-memoize');
var ExpiryMap = require('expiry-map');
var aptos = require('aptos');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var pMemoize__default = /*#__PURE__*/_interopDefault(pMemoize);
var ExpiryMap__default = /*#__PURE__*/_interopDefault(ExpiryMap);

// src/utils/createTransaction.ts
function createTransaction(entryFunctionPayload, { client: aptosClient }) {
  const tx = {
    async unwrap() {
      return entryFunctionPayload;
    },
    async signAndSubmitTransaction(signer) {
      const response = await signer.sendTransaction(entryFunctionPayload);
      return {
        txHash: response.hash,
        async wait() {
          const result = await aptosClient.waitForTransactionWithResult(response.hash, {
            checkSuccess: true
          });
          return {
            txHash: result.hash
          };
        }
      };
    },
    estimateGas(_) {
      throw new Error("Method not implemented.");
    },
    estimateNative: (_) => {
      throw new Error("Function not implemented.");
    }
  };
  return tx;
}

// src/utils/isAptosAddress.ts
function isAptosAddress(address) {
  if (typeof address !== "string")
    return false;
  if (!address.startsWith("0x"))
    return false;
  if (address.length !== 66)
    return false;
  return true;
}

// src/utils/errors.ts
function isErrorOfResourceNotFound(e) {
  return hasErrorCode(e, "resource_not_found");
}
function isErrorOfTableItemNotFound(e) {
  return hasErrorCode(e, "table_item_not_found");
}
function isErrorOfAccountNotFound(e) {
  return hasErrorCode(e, "account_not_found");
}
function hasErrorCode(e, errorCode) {
  if (!e)
    return false;
  if (e.error_code === errorCode)
    return true;
  if (e.errorCode === errorCode)
    return true;
  const body = e.body;
  if (!body)
    return false;
  if (body.error_code === errorCode)
    return true;
  if (body.errorCode === errorCode)
    return true;
  return false;
}
var AptosResourceProvider = class {
  constructor(aptosClient, cacheMs = 1e3) {
    this.aptosClient = aptosClient;
    this.getAccountResources = pMemoize__default.default(
      async (address) => {
        try {
          uiCore.assert(isAptosAddress(address));
          const resources = await this.aptosClient.getAccountResources(address);
          return resources;
        } catch (e) {
          if (isErrorOfAccountNotFound(e))
            return [];
          throw e;
        }
      },
      { cacheKey: ([address]) => address, cache: new ExpiryMap__default.default(cacheMs) }
    );
  }
  getAccountResources;
};

// src/providers/BalanceProvider__aptos.ts
var BalanceProvider__aptos = class {
  constructor(getAptosClient) {
    this.getAptosClient = getAptosClient;
  }
  endpointVersion = 1;
  resourceProviders = {};
  supports(token) {
    return uiCore.isAptosChainKey(token.chainKey);
  }
  getResourceProvider(chainKey) {
    let resourceProvider = this.resourceProviders[chainKey];
    if (resourceProvider === void 0) {
      const aptosClient = this.getAptosClient(chainKey);
      resourceProvider = new AptosResourceProvider(aptosClient);
      this.resourceProviders[chainKey] = resourceProvider;
    }
    return resourceProvider;
  }
  async getBalance(token, address) {
    uiCore.assert(isAptosAddress(address));
    uiCore.assert(uiCore.isAptosChainKey(token.chainKey));
    uiCore.assert(uiCore.isToken(token));
    const resourceType = `0x1::coin::CoinStore<${token.address}>`;
    try {
      const resourceProvider = this.getResourceProvider(token.chainKey);
      const resources = await resourceProvider.getAccountResources(address);
      const resource = resources.find((r) => r.type === resourceType);
      if (resource === void 0) {
        return uiCore.CurrencyAmount.fromRawAmount(token, 0);
      }
      const balance = BigInt(resource.data["coin"]["value"]);
      return uiCore.CurrencyAmount.fromRawAmount(token, balance);
    } catch (e) {
      if (isErrorOfAccountNotFound(e)) {
        return uiCore.CurrencyAmount.fromRawAmount(token, 0);
      }
      throw e;
    }
  }
};
var ResourceProvider__currency_aptos = class {
  constructor(service) {
    this.service = service;
  }
  supports(resource) {
    if (!uiCore.isCurrency(resource))
      return false;
    return uiCore.isAptosChainKey(resource.chainKey);
  }
  register(resource) {
    return this.service.registerCoin(resource);
  }
  async isRegistered(resource, address) {
    return this.service.isRegistered(resource, address);
  }
  getType(resource) {
    return `${resource.chainKey}:${uiCore.isToken(resource) ? resource.address : "0x"}`;
  }
};
var AptosManagedCoinRegisterService = class {
  constructor(aptosClient, resourceProvider) {
    this.aptosClient = aptosClient;
    this.resourceProvider = resourceProvider;
  }
  async isRegistered(resource, address) {
    const resources = await this.resourceProvider.getAccountResources(address);
    const type = getResourceType(resource);
    return resources.some((other) => other.type === type);
  }
  async registerCoin(token) {
    const { aptosClient } = this;
    uiCore.assert(uiCore.isToken(token));
    uiCore.assert(aptosClient);
    const coinType = token.address;
    const payload = {
      type: "entry_function_payload",
      function: `0x1::managed_coin::register`,
      type_arguments: [coinType],
      arguments: []
    };
    const tx = {
      async unwrap() {
        return payload;
      },
      async signAndSubmitTransaction(signer) {
        const response = await signer.sendTransaction(payload);
        return {
          txHash: response.hash,
          async wait() {
            const result = await aptosClient.waitForTransactionWithResult(response.hash, {
              checkSuccess: true
            });
            return {
              txHash: result.hash
            };
          }
        };
      },
      async estimateGas(signer) {
        const gasUnits = 658;
        return BigInt(gasUnits);
      },
      async estimateNative(signer) {
        const { gas_estimate: gasPrice } = await aptosClient.estimateGasPrice();
        const gasUnits = await tx.estimateGas(signer);
        const estimate = Number(gasUnits) * gasPrice * 4;
        const native = uiCore.getNativeCurrency(token.chainKey);
        return uiCore.CurrencyAmount.fromRawAmount(native, estimate);
      }
    };
    return tx;
  }
};
function getResourceType(token) {
  if (uiCore.isToken(token)) {
    const type = `0x1::coin::CoinStore<${token.address}>`;
    return type;
  }
  return void 0;
}

// src/types/AptosNativeChainId.ts
var AptosNativeChainId = /* @__PURE__ */ ((AptosNativeChainId2) => {
  AptosNativeChainId2[AptosNativeChainId2["MAINNET"] = 1] = "MAINNET";
  AptosNativeChainId2[AptosNativeChainId2["TESTNET"] = 2] = "TESTNET";
  return AptosNativeChainId2;
})(AptosNativeChainId || {});
var ZERO_ADDRESS_HEX = fullAddress("0x0").toString();
async function getUlnFee(client, accounts, uaAddress, dstEid, payloadSize, query) {
  const [appConfig, treasuryConfigResource] = await Promise.all([
    getAppConfig(client, accounts, uaAddress, dstEid, query),
    getMsgLibGlobalStore(client, accounts, query)
  ]);
  const [oracleFee, relayerFee] = await Promise.all([
    getUlnSignerFee(client, accounts, appConfig.oracle, dstEid, query),
    getUlnSignerFee(client, accounts, appConfig.relayer, dstEid, query)
  ]);
  console.log(`treasuryConfigResource`, treasuryConfigResource.data);
  const { treasury_fee_bps: treasuryFeeBps } = treasuryConfigResource.data;
  let totalFee = relayerFee.base_fee + relayerFee.fee_per_byte * BigInt(payloadSize);
  totalFee += oracleFee.base_fee + oracleFee.fee_per_byte * BigInt(payloadSize);
  totalFee += BigInt(treasuryFeeBps) * totalFee / BigInt(1e4);
  return totalFee;
}
async function getMsgLibGlobalStore(client, accounts, query) {
  return client.getAccountResource(
    accounts.layerzero.address,
    `${accounts.layerzero.address}::msglib_v1_0::GlobalStore`,
    query
  );
}
async function getAppConfig(client, accounts, uaAddress, dstEid, query) {
  const defaultConfigPromise = getDefaultAppConfig(client, accounts, dstEid, query);
  let appConfig = void 0;
  try {
    const module = `${accounts.layerzero.address}::uln_config`;
    const resource = await client.getAccountResource(
      accounts.layerzero.address,
      `${module}::UaUlnConfig`,
      query
    );
    const { config } = resource.data;
    appConfig = await client.getTableItem(
      config.handle,
      {
        key_type: `${module}::UaConfigKey`,
        value_type: `${module}::UlnConfig`,
        key: {
          ua_address: aptos.HexString.ensure(uaAddress).toString(),
          chain_id: dstEid.toString()
        }
      },
      query
    );
    console.log(`Config: `, appConfig);
  } catch (e) {
    if (!isErrorOfApiError(e, 404)) {
      throw e;
    }
  }
  const defaultConfig = await defaultConfigPromise;
  console.log("defaultConfig", defaultConfig);
  const mergedConfig = appConfig ? mergeConfig(appConfig, defaultConfig) : defaultConfig;
  mergedConfig.oracle = fullAddress(mergedConfig.oracle).toString();
  mergedConfig.relayer = fullAddress(mergedConfig.relayer).toString();
  mergedConfig.inbound_confirmations = BigInt(mergedConfig.inbound_confirmations);
  mergedConfig.outbound_confirmations = BigInt(mergedConfig.outbound_confirmations);
  return mergedConfig;
}
async function getUlnSignerFee(client, accounts, address, dstEid, query) {
  try {
    const module = `${accounts.layerzero.address}::uln_signer`;
    const resource = await client.getAccountResource(address, `${module}::Config`, query);
    const { fees } = resource.data;
    const response = await client.getTableItem(
      fees.handle,
      {
        key_type: `u64`,
        value_type: `${module}::Fee`,
        key: dstEid.toString()
      },
      query
    );
    return {
      base_fee: BigInt(response.base_fee),
      fee_per_byte: BigInt(response.fee_per_byte)
    };
  } catch (e) {
    if (isErrorOfApiError(e, 404)) {
      return {
        base_fee: BigInt(0),
        fee_per_byte: BigInt(0)
      };
    }
    throw e;
  }
}
async function getExecutorFee(client, accounts, uaAddress, dstEid, adapterParams, query) {
  const [executor] = accounts.executor ? [accounts.executor.address, accounts.executor.version] : await getExecutor(client, accounts, uaAddress, dstEid, query);
  const fee = await getFee(executor, dstEid, query);
  const [, uaGas, airdropAmount] = decodeAdapterParams(adapterParams);
  return (uaGas * fee.gasPrice + airdropAmount) * fee.priceRatio / 10000000000n;
  async function getFee(executor2, eid, query2) {
    try {
      const module = `${accounts.layerzero.address}::executor_v1`;
      const resource = await client.getAccountResource(
        executor2,
        `${module}::ExecutorConfig`,
        query2
      );
      const { fee: fee2 } = resource.data;
      const response = await client.getTableItem(
        fee2.handle,
        {
          key_type: "u64",
          value_type: `${module}::Fee`,
          key: eid.toString()
        },
        query2
      );
      return {
        airdropAmtCap: BigInt(response.airdrop_amt_cap),
        priceRatio: BigInt(response.price_ratio),
        gasPrice: BigInt(response.gas_price)
      };
    } catch (e) {
      if (isErrorOfApiError(e, 404)) {
        return {
          airdropAmtCap: 0n,
          priceRatio: 0n,
          gasPrice: 0n
        };
      }
      throw e;
    }
  }
}
async function getExecutor(client, accounts, uaAddress, dstEid, query) {
  const configuredPromise = getConfiguredExecutor(client, accounts, uaAddress, dstEid, query);
  const defaultPromise = getDefaultExecutor(client, accounts, dstEid);
  try {
    return await configuredPromise;
  } catch (e) {
    if (isErrorOfApiError(e, 404)) {
      return await defaultPromise;
    }
    throw e;
  }
}
async function getMinDstGas(client, accounts, uaAddress, dstEid, packetType) {
  const module = `${accounts.layerzero.address}::lzapp`;
  const resource = await client.getAccountResource(uaAddress, `${module}::Config`);
  const { min_dst_gas_lookup } = resource.data;
  try {
    const response = await client.getTableItem(min_dst_gas_lookup.handle, {
      key_type: `${module}::Path`,
      value_type: "u64",
      key: {
        chain_id: dstEid.toString(),
        packet_type: packetType.toString()
      }
    });
    return BigInt(response);
  } catch (e) {
    if (isErrorOfApiError(e, 404)) {
      return BigInt(0);
    }
    throw e;
  }
}
async function getConfiguredExecutor(client, accounts, uaAddress, dstEid, query) {
  const module = `${accounts.layerzero.address}::executor_config`;
  const resource = await client.getAccountResource(uaAddress, `${module}::ConfigStore`, query);
  const { config } = resource.data;
  const response = await client.getTableItem(
    config.handle,
    {
      key_type: "u64",
      value_type: `${module}::Config`,
      key: dstEid.toString()
    },
    query
  );
  return [response.executor, response.version];
}
async function getDefaultExecutor(client, accounts, dstEid) {
  const module = `${accounts.layerzero.address}::executor_config`;
  const resource = await client.getAccountResource(
    accounts.layerzero.address,
    `${module}::ConfigStore`
  );
  const { config } = resource.data;
  try {
    const response = await client.getTableItem(config.handle, {
      key_type: "u64",
      value_type: `${module}::Config`,
      key: dstEid.toString()
    });
    console.log("default executor", response);
    return [response.executor, response.version];
  } catch (e) {
    if (isErrorOfApiError(e, 404)) {
      return ["", BigInt(0)];
    }
    throw e;
  }
}
function decodeAdapterParams(adapterParams) {
  const type = adapterParams[0] * 256 + adapterParams[1];
  if (type === 1) {
    if (adapterParams.length !== 10)
      throw new Error("invalid adapter params");
    const uaGas = adapterParams.slice(2, 10);
    return [type, convertBytesToUint64(uaGas), 0n, ""];
  } else if (type === 2) {
    if (adapterParams.length <= 18)
      throw new Error("invalid adapter params");
    const uaGas = adapterParams.slice(2, 10);
    const airdropAmount = adapterParams.slice(10, 18);
    const airdropAddressBytes = adapterParams.slice(18);
    return [
      type,
      convertBytesToUint64(uaGas),
      convertBytesToUint64(airdropAmount),
      aptos.HexString.fromUint8Array(airdropAddressBytes).toString()
    ];
  } else {
    throw new Error("invalid adapter params");
  }
}
function buildAirdropAdapterParams(uaGas, airdropAmount, airdropAddress) {
  if (airdropAmount === 0n) {
    return buildDefaultAdapterParams(uaGas);
  }
  const params = [0, 2].concat(Array.from(convertUint64ToBytes(uaGas))).concat(Array.from(convertUint64ToBytes(airdropAmount))).concat(Array.from(aptos.HexString.ensure(airdropAddress).toUint8Array()));
  return Buffer.from(params);
}
function buildDefaultAdapterParams(uaGas) {
  const params = [0, 1].concat(Array.from(convertUint64ToBytes(uaGas)));
  return Uint8Array.from(Buffer.from(params));
}
function convertUint64ToBytes(number) {
  return aptos.BCS.bcsSerializeUint64(number).reverse();
}
function convertBytesToUint64(bytes) {
  if (bytes.length !== 8) {
    throw new Error("Buffer must be exactly 8 bytes long.");
  }
  let uint64BigInt = 0n;
  for (let i = 0; i < 8; i++) {
    uint64BigInt = uint64BigInt << 8n | BigInt(bytes[i]);
  }
  return uint64BigInt;
}
function isErrorOfApiError(e, status) {
  if (e instanceof aptos.ApiError) {
    return e.status === status;
  } else if (e instanceof Error && e.constructor.name.match(/ApiError[0-9]*/)) {
    if (Object.prototype.hasOwnProperty.call(e, "vmErrorCode")) {
      const err = e;
      return err.status === status;
    } else if (Object.prototype.hasOwnProperty.call(e, "request")) {
      const err = e;
      return err.status === status;
    }
  } else if (e instanceof Error) {
    if (Object.prototype.hasOwnProperty.call(e, "status")) {
      return e.status === status;
    }
  }
  return false;
}
async function getMessageFee(client, accounts, uaAddress, dstEid, adapterParams, payloadSize, query) {
  const [ulnFee, executorFee] = await Promise.all([
    getUlnFee(client, accounts, uaAddress, dstEid, payloadSize, query),
    getExecutorFee(client, accounts, uaAddress, dstEid, adapterParams, query)
  ]);
  const totalFee = BigInt(ulnFee) + BigInt(executorFee);
  return totalFee;
}
async function getDefaultAppConfig(client, accounts, remoteEid, query) {
  if (accounts.layerzero === void 0) {
    throw new Error("sdk accounts layerzero is undefined when invoke getDefaultAppConfig");
  }
  const module = `${accounts.layerzero.address}::uln_config`;
  const resource = await client.getAccountResource(
    accounts.layerzero.address,
    `${module}::DefaultUlnConfig`,
    query
  );
  const { config } = resource.data;
  try {
    return await client.getTableItem(
      config.handle,
      {
        key_type: "u64",
        value_type: `${module}::UlnConfig`,
        key: remoteEid.toString()
      },
      query
    );
  } catch (e) {
    if (isErrorOfApiError(e, 404)) {
      return {
        inbound_confirmations: BigInt(0),
        oracle: "",
        outbound_confirmations: BigInt(0),
        relayer: ""
      };
    }
    throw e;
  }
}
function fullAddress(address) {
  const rawValue = aptos.HexString.ensure(address).noPrefix();
  return aptos.HexString.ensure(
    Buffer.concat([Buffer.alloc(64 - rawValue.length, "0"), Buffer.from(rawValue)]).toString()
  );
}
function isSameAddress(a, b) {
  return fullAddress(a).toString() === fullAddress(b).toString();
}
function isZeroAddress(a) {
  return isSameAddress(a, ZERO_ADDRESS_HEX);
}
function mergeConfig(config, defaultConfig) {
  const mergedConfig = { ...defaultConfig };
  if (!isZeroAddress(config.oracle)) {
    mergedConfig.oracle = config.oracle;
  }
  if (!isZeroAddress(config.relayer)) {
    mergedConfig.relayer = config.relayer;
  }
  if (config.inbound_confirmations > 0) {
    mergedConfig.inbound_confirmations = config.inbound_confirmations;
  }
  if (config.outbound_confirmations > 0) {
    mergedConfig.outbound_confirmations = config.outbound_confirmations;
  }
  return mergedConfig;
}

exports.AptosManagedCoinRegisterService = AptosManagedCoinRegisterService;
exports.AptosNativeChainId = AptosNativeChainId;
exports.AptosResourceProvider = AptosResourceProvider;
exports.BalanceProvider__aptos = BalanceProvider__aptos;
exports.ResourceProvider__currency_aptos = ResourceProvider__currency_aptos;
exports.buildAirdropAdapterParams = buildAirdropAdapterParams;
exports.buildDefaultAdapterParams = buildDefaultAdapterParams;
exports.convertBytesToUint64 = convertBytesToUint64;
exports.convertUint64ToBytes = convertUint64ToBytes;
exports.createTransaction = createTransaction;
exports.decodeAdapterParams = decodeAdapterParams;
exports.fullAddress = fullAddress;
exports.getAppConfig = getAppConfig;
exports.getConfiguredExecutor = getConfiguredExecutor;
exports.getDefaultAppConfig = getDefaultAppConfig;
exports.getDefaultExecutor = getDefaultExecutor;
exports.getExecutor = getExecutor;
exports.getExecutorFee = getExecutorFee;
exports.getMessageFee = getMessageFee;
exports.getMinDstGas = getMinDstGas;
exports.getMsgLibGlobalStore = getMsgLibGlobalStore;
exports.getUlnFee = getUlnFee;
exports.getUlnSignerFee = getUlnSignerFee;
exports.isAptosAddress = isAptosAddress;
exports.isErrorOfAccountNotFound = isErrorOfAccountNotFound;
exports.isErrorOfApiError = isErrorOfApiError;
exports.isErrorOfResourceNotFound = isErrorOfResourceNotFound;
exports.isErrorOfTableItemNotFound = isErrorOfTableItemNotFound;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map