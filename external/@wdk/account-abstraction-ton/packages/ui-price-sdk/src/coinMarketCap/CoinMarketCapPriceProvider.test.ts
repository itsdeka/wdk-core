import {it, describe, beforeEach, expect} from 'vitest';
import {
  CoinMarketCapPriceProvider,
  CoinMarketCapEndpoint,
  type CoinMarketCapCurrencyMapping,
} from './CoinMarketCapPriceProvider';
import {V2CryptoCurrencyQuotasLatestResponseSchema} from './zod';
import {Token, Coin, FiatCurrency} from '@layerzerolabs/ui-core';
import smallJSON from './fixtures/small.json';
import largeJSON from './fixtures/large.json';

describe(
  'CoinMarketCapPriceProvider',
  () => {
    const config = {
      apiKey: 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
      endpoint: CoinMarketCapEndpoint.SANDBOX,
    };
    const dmt = Token.from({
      chainKey: 'ethereum',
      address: '0x0B7f0e51Cd1739D6C96982D55aD8fA634dd43A9C',
      decimals: 18,
      symbol: 'DMT',
    });

    const eth = Coin.from({chainKey: 'ethereum', decimals: 18, symbol: 'ETH'});
    const arb = Coin.from({chainKey: 'arbitrum', decimals: 18, symbol: 'ETH'});

    const mappings: CoinMarketCapCurrencyMapping[] = [
      // Mapping for a token
      {
        address: dmt.address,
        chainKey: 'ethereum',
        coinMarketCapId: 10,
      },
      // Mapping for a native currency
      {
        chainKey: 'arbitrum',
        address: undefined,
        coinMarketCapId: 2,
      },
    ];

    let client: CoinMarketCapPriceProvider;

    beforeEach(() => {
      client = new CoinMarketCapPriceProvider(config, mappings);
    });

    it('should reject if an unknown coin is passed', async () => {
      await expect(() => client.getCurrentPrice(eth, FiatCurrency.USD)).rejects.toThrow(
        /Missing CoinMarketCap currency ID for currency ETH/,
      );
    });

    it.each([dmt, arb])('should return an object with price for $symbol', async (currency) => {
      const price = await client.getCurrentPrice(currency, FiatCurrency.USD);

      // First we check that we got all the fiat currencies
      expect(price.value).toBeTypeOf('number');
    });
  },
  {timeout: 30_000},
);

describe('CoinMarketCapPriceProvider', () => {
  describe('ZodSchema', () => {
    it('parses small response', () => {
      const data = V2CryptoCurrencyQuotasLatestResponseSchema.parse(smallJSON);
      expect(data).toBeDefined();
    });
    it('parses large response', () => {
      const data = V2CryptoCurrencyQuotasLatestResponseSchema.parse(largeJSON);
      expect(data).toBeDefined();
    });
  });
});
