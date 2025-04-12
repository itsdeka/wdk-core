import {
  hasAddress,
  type ChainKey,
  type Currency,
  type FiatAmount,
  type FiatCurrency,
  type PriceProvider,
} from '@layerzerolabs/ui-core';
import axios from 'redaxios';
import DataLoader from 'dataloader';
import type {CurrencyMapping} from '../types';
import {CurrencyMappingIndex} from '../common/CurrencyMappingIndex';
import type {Logger} from '../common/Logger';

type Axios = ReturnType<typeof axios.create>;

export type CoinGeckoPriceProviderConfig = {
  endpoint: string;
  apiKey?: string;
  logger?: Logger;
};

export enum CoinGeckoEndpoint {
  PRO = 'https://pro-api.coingecko.com/api/v3/',
  PUBLIC = 'https://api.coingecko.com/api/v3/',
}

export type CoinGeckoCurrencyMapping = CurrencyMapping & {
  coinGeckoId: CoinGeckoId;
};
type CoinGeckoId = number | string;

export class CoinGeckoPriceProvider implements PriceProvider {
  dataLoaderByCoinGeckoId: DataLoader<
    DataLoaderKeyByCoingeckoId,
    FiatAmount,
    DataLoaderKeyByCoingeckoId
  >;

  dataLoadersByByChainAndAddress: Record<
    string,
    DataLoader<DataLoaderKeyByChainAndAddress, FiatAmount, DataLoaderKeyByChainAndAddress>
  >;

  protected index: CurrencyMappingIndex<CoinGeckoCurrencyMapping>;
  protected http: Axios;

  constructor(
    protected config: CoinGeckoPriceProviderConfig,
    protected mappings: CoinGeckoCurrencyMapping[],
  ) {
    this.index = new CurrencyMappingIndex(mappings);
    this.http = axios.create({
      headers: {'x-cg-pro-api-key': config.apiKey ?? '', Accept: 'application/json'},
      baseURL: config.endpoint,
    });
    this.dataLoaderByCoinGeckoId = new DataLoader<
      DataLoaderKeyByCoingeckoId,
      FiatAmount,
      DataLoaderKeyByCoingeckoId
    >((keys) => this.getBatchPricesByCoinGeckoId(keys));
    this.dataLoadersByByChainAndAddress = {};
  }

  protected getDataLoaderByChainAndAddress(chainKey: string) {
    let dataLoader = this.dataLoadersByByChainAndAddress[chainKey];
    if (!dataLoader) {
      dataLoader = new DataLoader<
        DataLoaderKeyByChainAndAddress,
        FiatAmount,
        DataLoaderKeyByChainAndAddress
      >((keys) => this.getBatchPricesByChainAndAddress(chainKey, keys));
      this.dataLoadersByByChainAndAddress[chainKey] = dataLoader;
    }
    return dataLoader;
  }

  async getCurrentPrice(token: Currency, fiatCurrency: 'USD' | 'EUR'): Promise<FiatAmount> {
    const mapping = this.index.get(token);
    const chainKey = token.chainKey;
    if (mapping?.coinGeckoId) {
      const key: DataLoaderKeyByCoingeckoId = {
        fiatCurrency,
        symbol: token.symbol,
        coinGeckoId: mapping.coinGeckoId,
      };
      return this.dataLoaderByCoinGeckoId.load(key);
    } else if (hasAddress(token)) {
      const dataLoader = this.getDataLoaderByChainAndAddress(chainKey);
      const key: DataLoaderKeyByChainAndAddress = {
        address: token.address.toLowerCase(),
        chainKey,
        symbol: token.symbol,
        fiatCurrency,
      };
      return dataLoader.load(key);
    }
    throw new Error(`No CoinGecko mapping for chainKey ${chainKey} and symbol ${token.symbol}`);
  }

  getBatchPricesByCoinGeckoId = async (keys: ReadonlyArray<DataLoaderKeyByCoingeckoId>) => {
    const coinGeckoIds = new Set<CoinGeckoId>(keys.map((key) => key.coinGeckoId));
    const fiatCurrencies = new Set<FiatCurrency>(keys.map((key) => key.fiatCurrency));

    const {data} = await this.http.get<CoinGeckoResponse>(`/simple/price`, {
      params: {
        ids: Array.from(coinGeckoIds).join(','),
        vs_currencies: Array.from(fiatCurrencies).join(','),
      },
    });

    this.config.logger?.debug('CoinGecko response', data);

    const result: (FiatAmount | Error)[] = [];

    for (const key of keys) {
      const price = data[key.coinGeckoId]?.[key.fiatCurrency.toLowerCase()];
      if (price) {
        const fiatAmount: FiatAmount = {
          currency: key.fiatCurrency,
          value: price,
        };
        result.push(fiatAmount);
      } else {
        const error = new Error(`No ${key.fiatCurrency} price for id ${key.coinGeckoId}`);
        result.push(error);
      }
    }

    return result;
  };

  getBatchPricesByChainAndAddress = async (
    chainKey: string,
    keys: ReadonlyArray<DataLoaderKeyByChainAndAddress>,
  ) => {
    const fiatCurrencies = new Set<FiatCurrency>(keys.map((key) => key.fiatCurrency));
    const contractAddresses = new Set<string>(keys.map((key) => key.address.toLowerCase()));

    const platformId = this.getCoinGeckoPlatformId(chainKey);

    const {data} = await this.http.get<CoinGeckoResponse>(`/simple/token_price/${platformId}`, {
      params: {
        contract_addresses: Array.from(contractAddresses).join(','),
        vs_currencies: Array.from(fiatCurrencies).join(','),
      },
    });

    this.config.logger?.debug('CoinGecko response', data);

    const result: (FiatAmount | Error)[] = [];

    for (const key of keys) {
      const price = data[key.address]?.[key.fiatCurrency.toLowerCase()];
      if (price) {
        const fiatAmount: FiatAmount = {
          currency: key.fiatCurrency,
          value: price,
        };
        result.push(fiatAmount);
      } else {
        const error = new Error(
          `No ${key.fiatCurrency} price for chainKey: ${chainKey} and address ${key.address}`,
        );
        result.push(error);
      }
    }
    return result;
  };

  getCoinGeckoPlatformId(chainKey: string) {
    const platformId = COIN_GECKO_PLATFORM_IDS[chainKey];
    if (platformId) return platformId;
    throw new Error(`CoinGecko platform id not defined for chainKey: ${chainKey}`);
  }
}

// see
// https://api.coingecko.com/api/v3/asset_platforms
export const COIN_GECKO_PLATFORM_IDS: Partial<{[chainKey in ChainKey]: string}> = {
  ethereum: 'ethereum',
  avalanche: 'avalanche',
  polygon: 'polygon-pos',
  bsc: 'binance-smart-chain',
  zkevm: 'polygon-zkevm',
  optimism: 'optimistic-ethereum',
  arbitrum: 'arbitrum-one',
  base: 'base',
  // "linea": 'linea',
  aptos: 'aptos',
  kava: 'kava',
  fantom: 'fantom',
  moonbeam: 'moonbeam',
  moonriver: 'moonriver',
  // "boba": 'boba',
};

type CoinGeckoResponse = Record<string, Record<string, number>>;

type DataLoaderKeyByCoingeckoId = {
  coinGeckoId: CoinGeckoId;
  symbol: string; // for debugging
  fiatCurrency: FiatCurrency;
};

type DataLoaderKeyByChainAndAddress = {
  chainKey: string;
  address: string;
  symbol: string; // for debugging
  fiatCurrency: FiatCurrency;
};
