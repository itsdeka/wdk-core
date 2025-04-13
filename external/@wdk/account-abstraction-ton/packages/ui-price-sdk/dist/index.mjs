import { FiatCurrency, assert, hasAddress, isToken } from '@layerzerolabs/ui-core';
import axios from 'redaxios';
import DataLoader2 from 'dataloader';
import z from 'zod';

// src/coinMarketCap/CoinMarketCapPriceProvider.ts
var CurrencyMappingIndex = class {
  constructor(mappings) {
    this.mappings = mappings;
    validateMappings(this.mappings);
  }
  // todo: optimize
  get(currency) {
    const chainKey = currency.chainKey;
    if (isToken(currency)) {
      const address = currency.address.toLowerCase();
      return this.mappings.find(
        (mapping) => mapping.chainKey === chainKey && mapping.address?.toLowerCase() === address
      );
    }
    return this.mappings.find(
      (mapping) => mapping.chainKey === chainKey && mapping.address == null
    );
  }
};
function validateMappings(mappings) {
  const ids = /* @__PURE__ */ new Set();
  for (const mapping of mappings) {
    const id = `${mapping.chainKey}:${mapping.address ?? "0x"}`;
    if (ids.has(id)) {
      throw new Error(
        `Duplicate mapping for chainKey ${mapping.chainKey} and address: ${mapping.address ?? "native"}`
      );
    } else {
      ids.add(id);
    }
  }
}
var ResponseStatusSchema = z.object({
  timestamp: z.coerce.date(),
  error_code: z.number().optional(),
  error_message: z.string().nullable(),
  elapsed: z.number(),
  credit_count: z.number(),
  notice: z.string().nullable()
});
var V2CryptoCurrencyQuotasLatestResponseSchema = z.object({
  data: z.record(
    z.coerce.number(),
    z.object({
      id: z.number(),
      name: z.string(),
      symbol: z.string(),
      quote: z.record(
        z.nativeEnum(FiatCurrency),
        z.object({
          price: z.number().nullish()
          // We don't need these for now but we'll keep the zod types just in case
          //
          // volume_24h: z.number(),
          // volume_change_24h: z.number(),
          // percent_change_1h: z.number(),
          // percent_change_24h: z.number(),
          // percent_change_7d: z.number(),
          // percent_change_30d: z.number(),
          // market_cap: z.number(),
          // market_cap_dominance: z.number(),
          // fully_diluted_market_cap: z.number(),
          // last_updated: z.string(),
        }).nullish()
      )
    })
  ),
  status: ResponseStatusSchema
});

// src/coinMarketCap/CoinMarketCapPriceProvider.ts
var CoinMarketCapEndpoint = /* @__PURE__ */ ((CoinMarketCapEndpoint2) => {
  CoinMarketCapEndpoint2["SANDBOX"] = "https://sandbox-api.coinmarketcap.com";
  CoinMarketCapEndpoint2["PRODUCTION"] = "https://pro-api.coinmarketcap.com";
  return CoinMarketCapEndpoint2;
})(CoinMarketCapEndpoint || {});
var CoinMarketCapPriceProvider = class {
  constructor(config, mappings) {
    this.config = config;
    this.mappings = mappings;
    assert(
      typeof window === "undefined",
      "CoinMarketCapPriceProvider is not suitable for use in public environments, please move the definition to a server"
    );
    this.http = axios.create({
      headers: { "X-CMC_PRO_API_KEY": config.apiKey, Accept: "application/json" },
      baseURL: config.endpoint
    });
    this.dataLoader = new DataLoader2(this.getBatchPrices);
    this.index = new CurrencyMappingIndex(mappings);
  }
  http;
  dataLoader;
  index;
  // main method
  async getCurrentPrice(currency, fiatCurrency) {
    const coinMarketCapId = this.getCoinMarketCapId(currency);
    const key = {
      coinMarketCapId,
      fiatCurrency
    };
    return this.dataLoader.load(key);
  }
  getBatchPrices = async (keys) => {
    const coinMarketCapIds = Array.from(
      new Set(keys.map((key) => key.coinMarketCapId).sort((a, b) => a - b))
    );
    const fiatCurrencies = Array.from(new Set(keys.map((key) => key.fiatCurrency).sort()));
    const response = await this.http.get("/v2/cryptocurrency/quotes/latest", {
      params: {
        id: coinMarketCapIds.join(","),
        convert: fiatCurrencies.join(",")
      }
    });
    const { data } = V2CryptoCurrencyQuotasLatestResponseSchema.parse(response.data);
    this.config.logger?.debug("CoinMarketCap response", data);
    const result = [];
    for (const key of keys) {
      const quote = data[key.coinMarketCapId]?.quote;
      const price = quote?.[key.fiatCurrency]?.price;
      if (typeof price === "number") {
        const fiatAmount = {
          currency: key.fiatCurrency,
          value: price
        };
        result.push(fiatAmount);
      } else {
        const symbol = data[key.coinMarketCapId]?.symbol;
        result.push(
          new Error(
            `Missing price data for ${symbol ?? ""} CoinMarketCap ID ${key.coinMarketCapId} and fiat currency ${key.fiatCurrency}`,
            { cause: quote }
          )
        );
      }
    }
    return result;
  };
  getCoinMarketCapId(currency) {
    const mapping = this.index.get(currency);
    if (!mapping)
      throw new Error(
        `Missing CoinMarketCap currency ID for currency ${currency.symbol} on chain ${currency.chainKey}`
      );
    return mapping.coinMarketCapId;
  }
};
var CoinGeckoEndpoint = /* @__PURE__ */ ((CoinGeckoEndpoint2) => {
  CoinGeckoEndpoint2["PRO"] = "https://pro-api.coingecko.com/api/v3/";
  CoinGeckoEndpoint2["PUBLIC"] = "https://api.coingecko.com/api/v3/";
  return CoinGeckoEndpoint2;
})(CoinGeckoEndpoint || {});
var CoinGeckoPriceProvider = class {
  constructor(config, mappings) {
    this.config = config;
    this.mappings = mappings;
    this.index = new CurrencyMappingIndex(mappings);
    this.http = axios.create({
      headers: { "x-cg-pro-api-key": config.apiKey ?? "", Accept: "application/json" },
      baseURL: config.endpoint
    });
    this.dataLoaderByCoinGeckoId = new DataLoader2((keys) => this.getBatchPricesByCoinGeckoId(keys));
    this.dataLoadersByByChainAndAddress = {};
  }
  dataLoaderByCoinGeckoId;
  dataLoadersByByChainAndAddress;
  index;
  http;
  getDataLoaderByChainAndAddress(chainKey) {
    let dataLoader = this.dataLoadersByByChainAndAddress[chainKey];
    if (!dataLoader) {
      dataLoader = new DataLoader2((keys) => this.getBatchPricesByChainAndAddress(chainKey, keys));
      this.dataLoadersByByChainAndAddress[chainKey] = dataLoader;
    }
    return dataLoader;
  }
  async getCurrentPrice(token, fiatCurrency) {
    const mapping = this.index.get(token);
    const chainKey = token.chainKey;
    if (mapping?.coinGeckoId) {
      const key = {
        fiatCurrency,
        symbol: token.symbol,
        coinGeckoId: mapping.coinGeckoId
      };
      return this.dataLoaderByCoinGeckoId.load(key);
    } else if (hasAddress(token)) {
      const dataLoader = this.getDataLoaderByChainAndAddress(chainKey);
      const key = {
        address: token.address.toLowerCase(),
        chainKey,
        symbol: token.symbol,
        fiatCurrency
      };
      return dataLoader.load(key);
    }
    throw new Error(`No CoinGecko mapping for chainKey ${chainKey} and symbol ${token.symbol}`);
  }
  getBatchPricesByCoinGeckoId = async (keys) => {
    const coinGeckoIds = new Set(keys.map((key) => key.coinGeckoId));
    const fiatCurrencies = new Set(keys.map((key) => key.fiatCurrency));
    const { data } = await this.http.get(`/simple/price`, {
      params: {
        ids: Array.from(coinGeckoIds).join(","),
        vs_currencies: Array.from(fiatCurrencies).join(",")
      }
    });
    this.config.logger?.debug("CoinGecko response", data);
    const result = [];
    for (const key of keys) {
      const price = data[key.coinGeckoId]?.[key.fiatCurrency.toLowerCase()];
      if (price) {
        const fiatAmount = {
          currency: key.fiatCurrency,
          value: price
        };
        result.push(fiatAmount);
      } else {
        const error = new Error(`No ${key.fiatCurrency} price for id ${key.coinGeckoId}`);
        result.push(error);
      }
    }
    return result;
  };
  getBatchPricesByChainAndAddress = async (chainKey, keys) => {
    const fiatCurrencies = new Set(keys.map((key) => key.fiatCurrency));
    const contractAddresses = new Set(keys.map((key) => key.address.toLowerCase()));
    const platformId = this.getCoinGeckoPlatformId(chainKey);
    const { data } = await this.http.get(`/simple/token_price/${platformId}`, {
      params: {
        contract_addresses: Array.from(contractAddresses).join(","),
        vs_currencies: Array.from(fiatCurrencies).join(",")
      }
    });
    this.config.logger?.debug("CoinGecko response", data);
    const result = [];
    for (const key of keys) {
      const price = data[key.address]?.[key.fiatCurrency.toLowerCase()];
      if (price) {
        const fiatAmount = {
          currency: key.fiatCurrency,
          value: price
        };
        result.push(fiatAmount);
      } else {
        const error = new Error(
          `No ${key.fiatCurrency} price for chainKey: ${chainKey} and address ${key.address}`
        );
        result.push(error);
      }
    }
    return result;
  };
  getCoinGeckoPlatformId(chainKey) {
    const platformId = COIN_GECKO_PLATFORM_IDS[chainKey];
    if (platformId)
      return platformId;
    throw new Error(`CoinGecko platform id not defined for chainKey: ${chainKey}`);
  }
};
var COIN_GECKO_PLATFORM_IDS = {
  ethereum: "ethereum",
  avalanche: "avalanche",
  polygon: "polygon-pos",
  bsc: "binance-smart-chain",
  zkevm: "polygon-zkevm",
  optimism: "optimistic-ethereum",
  arbitrum: "arbitrum-one",
  base: "base",
  // "linea": 'linea',
  aptos: "aptos",
  kava: "kava",
  fantom: "fantom",
  moonbeam: "moonbeam",
  moonriver: "moonriver"
  // "boba": 'boba',
};

export { COIN_GECKO_PLATFORM_IDS, CoinGeckoEndpoint, CoinGeckoPriceProvider, CoinMarketCapEndpoint, CoinMarketCapPriceProvider };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map