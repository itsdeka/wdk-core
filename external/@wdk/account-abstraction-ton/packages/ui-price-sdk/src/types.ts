import type {ChainKey} from '@layerzerolabs/ui-core';

export interface NativeCurrencyMapping {
  address?: undefined;
  chainKey: ChainKey;
}

export interface TokenCurrencyMapping {
  address: string;
  chainKey: ChainKey;
}

export type CurrencyMapping = NativeCurrencyMapping | TokenCurrencyMapping;
