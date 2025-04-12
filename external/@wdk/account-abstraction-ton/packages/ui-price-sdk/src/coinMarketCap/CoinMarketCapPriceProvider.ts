import {
  type Currency,
  type FiatCurrency,
  type PriceProvider,
  type FiatAmount,
  assert,
} from '@layerzerolabs/ui-core';
import axios from 'redaxios';
import type {CurrencyMapping} from '../types';
import DataLoader from 'dataloader';
import {CurrencyMappingIndex} from '../common/CurrencyMappingIndex';
import {V2CryptoCurrencyQuotasLatestResponseSchema} from './zod';
import type {Logger} from '../common/Logger';

type Axios = ReturnType<typeof axios.create>;

export enum CoinMarketCapEndpoint {
  SANDBOX = 'https://sandbox-api.coinmarketcap.com',
  PRODUCTION = 'https://pro-api.coinmarketcap.com',
}

export type CoinMarketCapId = number;

export type CoinMarketCapCurrencyMapping = CurrencyMapping & {
  coinMarketCapId: number;
};

export interface CoinMarketCapPriceProviderConfig {
  apiKey: string;
  endpoint: CoinMarketCapEndpoint;
  logger?: Logger;
}

export class CoinMarketCapPriceProvider implements PriceProvider {
  private readonly http: Axios;
  protected dataLoader: DataLoader<DataLoaderKey, FiatAmount, DataLoaderKey>;
  protected index: CurrencyMappingIndex<CoinMarketCapCurrencyMapping>;

  constructor(
    protected readonly config: CoinMarketCapPriceProviderConfig,
    protected readonly mappings: CoinMarketCapCurrencyMapping[],
  ) {
    // To make sure nobody will use this in a browser, we'll force the window to be undefined
    assert(
      typeof window === 'undefined',
      'CoinMarketCapPriceProvider is not suitable for use in public environments, please move the definition to a server',
    );

    this.http = axios.create({
      headers: {'X-CMC_PRO_API_KEY': config.apiKey, Accept: 'application/json'},
      baseURL: config.endpoint,
    });

    this.dataLoader = new DataLoader(this.getBatchPrices);
    this.index = new CurrencyMappingIndex(mappings);
  }

  // main method
  async getCurrentPrice(currency: Currency, fiatCurrency: FiatCurrency): Promise<FiatAmount> {
    const coinMarketCapId = this.getCoinMarketCapId(currency);
    const key: DataLoaderKey = {
      coinMarketCapId,
      fiatCurrency,
    };
    return this.dataLoader.load(key);
  }

  protected getBatchPrices = async (keys: ReadonlyArray<DataLoaderKey>) => {
    const coinMarketCapIds = Array.from(
      new Set(keys.map((key) => key.coinMarketCapId).sort((a, b) => a - b)),
    );
    const fiatCurrencies = Array.from(new Set(keys.map((key) => key.fiatCurrency).sort()));

    const response = await this.http.get('/v2/cryptocurrency/quotes/latest', {
      params: {
        id: coinMarketCapIds.join(','),
        convert: fiatCurrencies.join(','),
      },
    });

    // We validate the external data
    const {data} = V2CryptoCurrencyQuotasLatestResponseSchema.parse(response.data);
    this.config.logger?.debug('CoinMarketCap response', data);

    const result: (FiatAmount | Error)[] = [];

    // result must be populated in the same order as keys
    // see https://github.com/graphql/dataloader
    for (const key of keys) {
      const quote = data[key.coinMarketCapId]?.quote;
      const price = quote?.[key.fiatCurrency]?.price;
      if (typeof price === 'number') {
        const fiatAmount: FiatAmount = {
          currency: key.fiatCurrency,
          value: price,
        };
        result.push(fiatAmount);
      } else {
        const symbol = data[key.coinMarketCapId]?.symbol;
        result.push(
          new Error(
            `Missing price data for ${symbol ?? ''} CoinMarketCap ID ${key.coinMarketCapId} and fiat currency ${key.fiatCurrency}`,
            {cause: quote},
          ),
        );
      }
    }
    return result;
  };

  protected getCoinMarketCapId(currency: Currency): CoinMarketCapId {
    const mapping = this.index.get(currency);

    if (!mapping)
      throw new Error(
        `Missing CoinMarketCap currency ID for currency ${currency.symbol} on chain ${currency.chainKey}`,
      );

    return mapping.coinMarketCapId;
  }
}

type DataLoaderKey = {
  coinMarketCapId: number;
  fiatCurrency: FiatCurrency;
};
