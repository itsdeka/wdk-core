import {it, describe, expect} from 'vitest';

import {FiatCurrency, getNativeCurrency} from '@layerzerolabs/ui-core';
import {CoinGeckoEndpoint, CoinGeckoPriceProvider} from './CoinGeckoPriceProvider';

// TODO: run integration tests in separate workflow
describe.skip('CoinGeckoPriceProvider', () => {
  const provider = new CoinGeckoPriceProvider({endpoint: CoinGeckoEndpoint.PUBLIC}, [
    {chainKey: 'ethereum', coinGeckoId: 'ethereum'},
    {chainKey: 'avalanche', coinGeckoId: 'avalanche-2'},
  ]);
  it('#getCurrentPrice', async () => {
    const eth = getNativeCurrency('ethereum');
    const price = await provider.getCurrentPrice(eth, FiatCurrency.USD);
    expect(price.value).toBeTypeOf('number');
  });
});
