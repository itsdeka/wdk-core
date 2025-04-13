import { ChainKey, Currency, PriceProvider, FiatAmount, FiatCurrency } from '@layerzerolabs/ui-core';
import DataLoader from 'dataloader';
import axios from 'redaxios';

interface NativeCurrencyMapping {
    address?: undefined;
    chainKey: ChainKey;
}
interface TokenCurrencyMapping {
    address: string;
    chainKey: ChainKey;
}
type CurrencyMapping = NativeCurrencyMapping | TokenCurrencyMapping;

declare class CurrencyMappingIndex<TCurrencyMapping extends CurrencyMapping = CurrencyMapping> {
    protected readonly mappings: TCurrencyMapping[];
    constructor(mappings: TCurrencyMapping[]);
    get(currency: Currency): TCurrencyMapping | undefined;
}

type Logger = {
    info(...args: any[]): void;
    log(...args: any[]): void;
    debug(...args: any[]): void;
    error(...args: any[]): void;
};

declare enum CoinMarketCapEndpoint {
    SANDBOX = "https://sandbox-api.coinmarketcap.com",
    PRODUCTION = "https://pro-api.coinmarketcap.com"
}
type CoinMarketCapId = number;
type CoinMarketCapCurrencyMapping = CurrencyMapping & {
    coinMarketCapId: number;
};
interface CoinMarketCapPriceProviderConfig {
    apiKey: string;
    endpoint: CoinMarketCapEndpoint;
    logger?: Logger;
}
declare class CoinMarketCapPriceProvider implements PriceProvider {
    protected readonly config: CoinMarketCapPriceProviderConfig;
    protected readonly mappings: CoinMarketCapCurrencyMapping[];
    private readonly http;
    protected dataLoader: DataLoader<DataLoaderKey, FiatAmount, DataLoaderKey>;
    protected index: CurrencyMappingIndex<CoinMarketCapCurrencyMapping>;
    constructor(config: CoinMarketCapPriceProviderConfig, mappings: CoinMarketCapCurrencyMapping[]);
    getCurrentPrice(currency: Currency, fiatCurrency: FiatCurrency): Promise<FiatAmount>;
    protected getBatchPrices: (keys: ReadonlyArray<DataLoaderKey>) => Promise<(Error | FiatAmount)[]>;
    protected getCoinMarketCapId(currency: Currency): CoinMarketCapId;
}
type DataLoaderKey = {
    coinMarketCapId: number;
    fiatCurrency: FiatCurrency;
};

type Axios = ReturnType<typeof axios.create>;
type CoinGeckoPriceProviderConfig = {
    endpoint: string;
    apiKey?: string;
    logger?: Logger;
};
declare enum CoinGeckoEndpoint {
    PRO = "https://pro-api.coingecko.com/api/v3/",
    PUBLIC = "https://api.coingecko.com/api/v3/"
}
type CoinGeckoCurrencyMapping = CurrencyMapping & {
    coinGeckoId: CoinGeckoId;
};
type CoinGeckoId = number | string;
declare class CoinGeckoPriceProvider implements PriceProvider {
    protected config: CoinGeckoPriceProviderConfig;
    protected mappings: CoinGeckoCurrencyMapping[];
    dataLoaderByCoinGeckoId: DataLoader<DataLoaderKeyByCoingeckoId, FiatAmount, DataLoaderKeyByCoingeckoId>;
    dataLoadersByByChainAndAddress: Record<string, DataLoader<DataLoaderKeyByChainAndAddress, FiatAmount, DataLoaderKeyByChainAndAddress>>;
    protected index: CurrencyMappingIndex<CoinGeckoCurrencyMapping>;
    protected http: Axios;
    constructor(config: CoinGeckoPriceProviderConfig, mappings: CoinGeckoCurrencyMapping[]);
    protected getDataLoaderByChainAndAddress(chainKey: string): DataLoader<DataLoaderKeyByChainAndAddress, FiatAmount, DataLoaderKeyByChainAndAddress>;
    getCurrentPrice(token: Currency, fiatCurrency: 'USD' | 'EUR'): Promise<FiatAmount>;
    getBatchPricesByCoinGeckoId: (keys: ReadonlyArray<DataLoaderKeyByCoingeckoId>) => Promise<(Error | FiatAmount)[]>;
    getBatchPricesByChainAndAddress: (chainKey: string, keys: ReadonlyArray<DataLoaderKeyByChainAndAddress>) => Promise<(Error | FiatAmount)[]>;
    getCoinGeckoPlatformId(chainKey: string): string;
}
declare const COIN_GECKO_PLATFORM_IDS: Partial<{
    [chainKey in ChainKey]: string;
}>;
type DataLoaderKeyByCoingeckoId = {
    coinGeckoId: CoinGeckoId;
    symbol: string;
    fiatCurrency: FiatCurrency;
};
type DataLoaderKeyByChainAndAddress = {
    chainKey: string;
    address: string;
    symbol: string;
    fiatCurrency: FiatCurrency;
};

export { COIN_GECKO_PLATFORM_IDS, CoinGeckoCurrencyMapping, CoinGeckoEndpoint, CoinGeckoPriceProvider, CoinGeckoPriceProviderConfig, CoinMarketCapCurrencyMapping, CoinMarketCapEndpoint, CoinMarketCapId, CoinMarketCapPriceProvider, CoinMarketCapPriceProviderConfig };
