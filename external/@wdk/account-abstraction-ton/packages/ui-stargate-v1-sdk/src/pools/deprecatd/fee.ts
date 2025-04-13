import type {CurrencyAmount, Fraction} from '@layerzerolabs/ui-core';

export interface FeeObj {
  eqFee: CurrencyAmount;
  eqReward: CurrencyAmount;
  lpFee: CurrencyAmount;
  protocolFee: CurrencyAmount;
}

export interface FeeLibrary {
  getFees(
    _inputAmount: CurrencyAmount, //token
    _idealBalance: CurrencyAmount, // lpToken
    _beforeBalance: CurrencyAmount, // lpToken
    _poolTokenBalance: CurrencyAmount, //token (token.balanceOf(address(pool))
    _poolTotalLiquidity: CurrencyAmount, //lpToken
    _eqFeePool: CurrencyAmount, //lpToken
  ): FeeObj;
}

interface FeeLibraryV01Config {
  lpFeeRate: Fraction;
  protocolFeeRate: Fraction;
  eqFeeRate: Fraction;
  eqRewardRate: Fraction;
}

export class FeeLibraryV01 implements FeeLibrary {
  constructor(protected config: FeeLibraryV01Config) {}
  public getFees(_inputAmount: CurrencyAmount): FeeObj {
    return {
      eqFee: _inputAmount.multiply(this.config.eqFeeRate),
      eqReward: _inputAmount.multiply(this.config.eqRewardRate),
      lpFee: _inputAmount.multiply(this.config.lpFeeRate),
      protocolFee: _inputAmount.multiply(this.config.protocolFeeRate),
    };
  }
}
