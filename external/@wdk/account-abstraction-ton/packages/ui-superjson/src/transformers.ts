import {
  Coin,
  type Currency,
  CurrencyAmount,
  Fraction,
  parseCurrencyAmount,
  Percent,
  Token,
  AdapterParams,
  parsePercent,
} from '@layerzerolabs/ui-core';
import SuperJSON from 'superjson';
import type {SuperJSONValue} from 'superjson/src/types';

export type SuperJSONResult = ReturnType<(typeof SuperJSON)['serialize']>;

export type TokenJSONValue = {
  symbol: string;
  decimals: number;
  chainKey: string;
  address: string;
  name?: string;
};

export type CoinJSONValue = {symbol: string; decimals: number; chainKey: string; name?: string};

export type CurrencyAmountJsonValue = {
  amount: string;
  token: {
    json: SuperJSONResult['json'];
    meta?: SuperJSONResult['meta'];
  };
};

export type FractionJsonValue = {numerator: string; denominator: string};

export function register(transformer: typeof SuperJSON) {
  transformer.registerCustom<Token, TokenJSONValue>(
    {
      isApplicable: (v: unknown): v is Token => v instanceof Token,
      serialize: (v) => ({
        symbol: v.symbol,
        decimals: v.decimals,
        chainKey: v.chainKey,
        address: v.address,
        name: v.name,
      }),
      deserialize: (v) => Token.from(v),
    },
    'Token',
  );
  transformer.registerCustom<Coin, CoinJSONValue>(
    {
      isApplicable: (v: unknown): v is Coin => v instanceof Coin,
      serialize: (v) => ({
        symbol: v.symbol,
        decimals: v.decimals,
        chainKey: v.chainKey,
        name: v.name,
      }),
      deserialize: (v) => Coin.from(v),
    },
    'Coin',
  );

  transformer.registerCustom<CurrencyAmount, CurrencyAmountJsonValue>(
    {
      isApplicable: (v: unknown): v is CurrencyAmount => v instanceof CurrencyAmount,
      serialize: (v) => ({
        token: transformer.serialize(v.token),
        amount: v.toExact(),
      }),
      deserialize: (v) => {
        const token = transformer.deserialize<Currency>(v.token as SuperJSONResult);
        const amount = parseCurrencyAmount(token, v.amount);
        return amount;
      },
    },
    'CurrencyAmount',
  );

  const PERCENT_DECIMALS = 10;
  transformer.registerCustom<Percent, string>(
    {
      isApplicable: (v: unknown): v is Percent => v instanceof Percent,
      serialize: (v) => v.toSignificant(PERCENT_DECIMALS) + '%',
      deserialize: (v) => parsePercent(v.replace('%', ''), PERCENT_DECIMALS),
    },
    'Percent',
  );

  transformer.registerCustom<Fraction, FractionJsonValue>(
    {
      isApplicable: (v: unknown): v is Fraction => v instanceof Fraction,
      serialize: (v) => ({
        numerator: v.numerator.toString(),
        denominator: v.denominator.toString.toString(),
      }),
      deserialize: (v) => new Fraction(v.numerator, v.denominator),
    },
    'Fraction',
  );

  transformer.registerCustom<AdapterParams, SuperJSONValue>(
    {
      isApplicable: (v): v is AdapterParams => v instanceof AdapterParams,
      serialize: (v) => ({
        extraGas: v.extraGas,
        version: v.version,
        dstNativeAddress: v.dstNativeAddress,
        dstNativeAmount: SuperJSON.serialize(v.dstNativeAmount),
      }),
      deserialize: (v) => {
        if (v.version === 2) {
          return AdapterParams.forV2({
            extraGas: v.extraGas,
            dstNativeAmount: SuperJSON.deserialize(v.dstNativeAmount),
            dstNativeAddress: v.dstNativeAddress,
          });
        } else {
          return AdapterParams.forV1(v.extraGas);
        }
      },
    },
    'AdapterParams',
  );
}
