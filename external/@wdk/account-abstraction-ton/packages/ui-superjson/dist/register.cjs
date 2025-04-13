'use strict';

var SuperJSON = require('superjson');
var uiCore = require('@layerzerolabs/ui-core');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var SuperJSON__default = /*#__PURE__*/_interopDefault(SuperJSON);

// src/register.ts
function register(transformer) {
  transformer.registerCustom(
    {
      isApplicable: (v) => v instanceof uiCore.Token,
      serialize: (v) => ({
        symbol: v.symbol,
        decimals: v.decimals,
        chainKey: v.chainKey,
        address: v.address,
        name: v.name
      }),
      deserialize: (v) => uiCore.Token.from(v)
    },
    "Token"
  );
  transformer.registerCustom(
    {
      isApplicable: (v) => v instanceof uiCore.Coin,
      serialize: (v) => ({
        symbol: v.symbol,
        decimals: v.decimals,
        chainKey: v.chainKey,
        name: v.name
      }),
      deserialize: (v) => uiCore.Coin.from(v)
    },
    "Coin"
  );
  transformer.registerCustom(
    {
      isApplicable: (v) => v instanceof uiCore.CurrencyAmount,
      serialize: (v) => ({
        token: transformer.serialize(v.token),
        amount: v.toExact()
      }),
      deserialize: (v) => {
        const token = transformer.deserialize(v.token);
        const amount = uiCore.parseCurrencyAmount(token, v.amount);
        return amount;
      }
    },
    "CurrencyAmount"
  );
  const PERCENT_DECIMALS = 10;
  transformer.registerCustom(
    {
      isApplicable: (v) => v instanceof uiCore.Percent,
      serialize: (v) => v.toSignificant(PERCENT_DECIMALS) + "%",
      deserialize: (v) => uiCore.parsePercent(v.replace("%", ""), PERCENT_DECIMALS)
    },
    "Percent"
  );
  transformer.registerCustom(
    {
      isApplicable: (v) => v instanceof uiCore.Fraction,
      serialize: (v) => ({
        numerator: v.numerator.toString(),
        denominator: v.denominator.toString.toString()
      }),
      deserialize: (v) => new uiCore.Fraction(v.numerator, v.denominator)
    },
    "Fraction"
  );
  transformer.registerCustom(
    {
      isApplicable: (v) => v instanceof uiCore.AdapterParams,
      serialize: (v) => ({
        extraGas: v.extraGas,
        version: v.version,
        dstNativeAddress: v.dstNativeAddress,
        dstNativeAmount: SuperJSON__default.default.serialize(v.dstNativeAmount)
      }),
      deserialize: (v) => {
        if (v.version === 2) {
          return uiCore.AdapterParams.forV2({
            extraGas: v.extraGas,
            dstNativeAmount: SuperJSON__default.default.deserialize(v.dstNativeAmount),
            dstNativeAddress: v.dstNativeAddress
          });
        } else {
          return uiCore.AdapterParams.forV1(v.extraGas);
        }
      }
    },
    "AdapterParams"
  );
}

// src/register.ts
register(SuperJSON__default.default);
//# sourceMappingURL=out.js.map
//# sourceMappingURL=register.cjs.map