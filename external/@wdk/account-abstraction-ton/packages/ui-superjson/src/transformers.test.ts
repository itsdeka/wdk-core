import {
  getNativeCurrency,
  parseCurrencyAmount,
  Percent,
  Token,
  AdapterParams,
} from '@layerzerolabs/ui-core';
import {test, expect} from 'vitest';
import SuperJSON from 'superjson';
import {register} from './transformers';

register(SuperJSON);

const eth = getNativeCurrency('ethereum');

test('Currency', () => {
  const result = SuperJSON.serialize(eth);
  const value = SuperJSON.deserialize(result);
  expect(eth.equals(value as any)).toBe(true);
});

test('Token', () => {
  const usdc = Token.from({
    chainKey: 'ethereum',
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    decimals: 6,
    symbol: 'USDC',
    name: 'USD Coin',
  });
  const result = SuperJSON.serialize(usdc);
  const value = SuperJSON.deserialize(result);
  expect(usdc.equals(value as any)).toBe(true);
});

test('CurrencyAmount', () => {
  const amount = parseCurrencyAmount(eth, '21.37');
  const result = SuperJSON.serialize(amount);
  expect(result.json).toMatchObject({amount: '21.37'});
  const value = SuperJSON.deserialize(result);
  expect(amount.equalTo(value as any)).toBe(true);
});

test('Percent', () => {
  const percent = new Percent(2137, 10000);
  const result = SuperJSON.serialize(percent);
  expect(result.json).toEqual('21.37%');
  const value = SuperJSON.deserialize(result);
  expect(percent.equalTo(value as any)).toBe(true);
});

test('AdapterParams#V1', () => {
  const extraGas = 100;
  const adapterParams = AdapterParams.forV1(extraGas);
  const serialized = SuperJSON.serialize(adapterParams);
  const deserialized = SuperJSON.deserialize(serialized) as AdapterParams;
  expect(deserialized).toBeInstanceOf(AdapterParams);
  expect(deserialized).toMatchObject({version: 1, extraGas});
});

test('AdapterParams#V2', () => {
  const extraGas = 100;
  const dstNativeAddress = '0x37CD3730D108C7C3f880201901e1e070254D75ff';
  const dstNativeAmount = parseCurrencyAmount(eth, '1');
  const adapterParams = AdapterParams.forV2({extraGas, dstNativeAmount, dstNativeAddress});
  const serialized = SuperJSON.serialize(adapterParams);
  const deserialized = SuperJSON.deserialize(serialized) as AdapterParams;
  expect(deserialized).toBeInstanceOf(AdapterParams);
  expect(deserialized).toMatchObject({version: 2, extraGas, dstNativeAddress, dstNativeAmount});
});
