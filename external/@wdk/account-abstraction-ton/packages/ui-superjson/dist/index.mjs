import { Token, Coin, CurrencyAmount, parseCurrencyAmount, Percent, parsePercent, Fraction, AdapterParams } from '@layerzerolabs/ui-core';
import SuperJSON from 'superjson';

// src/transformers.ts
function register(transformer) {
  transformer.registerCustom(
    {
      isApplicable: (v) => v instanceof Token,
      serialize: (v) => ({
        symbol: v.symbol,
        decimals: v.decimals,
        chainKey: v.chainKey,
        address: v.address,
        name: v.name
      }),
      deserialize: (v) => Token.from(v)
    },
    "Token"
  );
  transformer.registerCustom(
    {
      isApplicable: (v) => v instanceof Coin,
      serialize: (v) => ({
        symbol: v.symbol,
        decimals: v.decimals,
        chainKey: v.chainKey,
        name: v.name
      }),
      deserialize: (v) => Coin.from(v)
    },
    "Coin"
  );
  transformer.registerCustom(
    {
      isApplicable: (v) => v instanceof CurrencyAmount,
      serialize: (v) => ({
        token: transformer.serialize(v.token),
        amount: v.toExact()
      }),
      deserialize: (v) => {
        const token = transformer.deserialize(v.token);
        const amount = parseCurrencyAmount(token, v.amount);
        return amount;
      }
    },
    "CurrencyAmount"
  );
  const PERCENT_DECIMALS = 10;
  transformer.registerCustom(
    {
      isApplicable: (v) => v instanceof Percent,
      serialize: (v) => v.toSignificant(PERCENT_DECIMALS) + "%",
      deserialize: (v) => parsePercent(v.replace("%", ""), PERCENT_DECIMALS)
    },
    "Percent"
  );
  transformer.registerCustom(
    {
      isApplicable: (v) => v instanceof Fraction,
      serialize: (v) => ({
        numerator: v.numerator.toString(),
        denominator: v.denominator.toString.toString()
      }),
      deserialize: (v) => new Fraction(v.numerator, v.denominator)
    },
    "Fraction"
  );
  transformer.registerCustom(
    {
      isApplicable: (v) => v instanceof AdapterParams,
      serialize: (v) => ({
        extraGas: v.extraGas,
        version: v.version,
        dstNativeAddress: v.dstNativeAddress,
        dstNativeAmount: SuperJSON.serialize(v.dstNativeAmount)
      }),
      deserialize: (v) => {
        if (v.version === 2) {
          return AdapterParams.forV2({
            extraGas: v.extraGas,
            dstNativeAmount: SuperJSON.deserialize(v.dstNativeAmount),
            dstNativeAddress: v.dstNativeAddress
          });
        } else {
          return AdapterParams.forV1(v.extraGas);
        }
      }
    },
    "AdapterParams"
  );
}

export { register };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map