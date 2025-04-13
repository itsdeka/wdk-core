// @ts-nocheck
import {describe, it} from 'vitest';
import {Token, Fraction} from '@layerzerolabs/ui-core';

describe.skip('#getSwapOutputAmount', () => {
  const srcChainId = 101; // ethereum
  const srcPoolId = 1;

  const dstChainId = 102; // bsc
  const dstPoolId = 1;
  const token = Token.from({
    chainKey: 'ethereum',
    address: '0x0000000000000000000000000000000000000000',
    decimals: 18,
    symbol: 'USDC',
  });
  const liquidityToken = Token.from({
    chainKey: 'ethereum',
    address: '0x0000000000000000000000000000000000000001',
    decimals: 6,
    symbol: 'SLP',
  });
  const fraction = new Fraction(100, 10000); // 1%

  const poolFee: PoolFee = {
    mintFeeRate: fraction,
  };

  const srcPool: Pool = {
    poolId: 1,
    eid: 101,
    sharedDecimals: 6,
    token: token,
    currency: token,
    lpToken: liquidityToken,
    address: liquidityToken.address,
    chainKey: liquidityToken.chainKey,
    decimals: liquidityToken.decimals,
    symbol: liquidityToken.symbol,
  };

  const dstToken = Token.from({
    chainKey: 'bsc',
    address: '0x0000000000000000000000000000000000000000',
    decimals: 18,
    symbol: 'USDC',
  });

  const dstLpToken = Token.from({
    chainKey: 'bsc',
    address: '0x0000000000000000000000000000000000000001',
    decimals: 6,
    symbol: 'SLP',
  });

  const dstPool: Pool = {
    poolId: 1,
    eid: 102,
    sharedDecimals: 6,
    token: dstToken,
    currency: dstToken,
    lpToken: dstLpToken,
    address: dstLpToken.address,
    chainKey: dstLpToken.chainKey,
    decimals: dstLpToken.decimals,
    symbol: dstLpToken.symbol,
  };

  it('returns correct amount', () => {
    // all fees are 1%
    // user swaps 100 and gets 98  (2% fee)
    //  sub lpFee and protocolFee and eqFee (-3%)
    //  add eqReward (+1%)

    const inputAmount = CurrencyAmount.fromRawAmount(srcPool.currency, 100e18);
    const tokenBalance = CurrencyAmount.fromRawAmount(srcPool.token, 0);
    const totalLiquidity = CurrencyAmount.fromRawAmount(srcPool.lpToken, 0);
    const eqFeePool = CurrencyAmount.fromRawAmount(srcPool.lpToken, 0);

    const output = getSwapOutputAmount(
      srcPool,
      dstPool,
      feeLibraryV01,
      inputAmount,
      tokenBalance,
      totalLiquidity,
      eqFeePool,
      chainPath,
    );

    expect(output.outputAmount).toEqualAmount(CurrencyAmount.fromRawAmount(token, 98e18));
  });
});

describe.skip('#getRedeemRemote', () => {
  //todo: how much lp one should redeem
  //currently capped by swappable, need to trial and error to get a more precise amount
  it('amount <= available', () => {
    const totalSupply = CurrencyAmount.fromRawAmount(pool.lpToken, 100e6);
    const totalLiquidity = CurrencyAmount.fromRawAmount(pool.lpToken, 100e6);
    const lpTokenAmount = CurrencyAmount.fromRawAmount(pool.lpToken, 100e6);
    const minAmount = CurrencyAmount.fromRawAmount(pool.token, 10e6);

    //
    const tokenBalance = CurrencyAmount.fromRawAmount(pool.token, BigInt(0));
    const eqFeePool = CurrencyAmount.fromRawAmount(pool.lpToken, BigInt(0));

    const redeemRemote = getRedeemRemote(
      pool,
      dstChainId,
      dstPoolId,
      totalSupply,
      totalLiquidity,
      lpTokenAmount,
      minAmount,
      tokenBalance,
      eqFeePool,
    );

    expect(redeemRemote[0]).toEqualAmount(CurrencyAmount.fromRawAmount(token, 98e18));
  });

  it('amount > available', () => {
    const totalSupply = CurrencyAmount.fromRawAmount(pool.lpToken, 100e6);
    const totalLiquidity = CurrencyAmount.fromRawAmount(pool.lpToken, 100e6);
    const lpTokenAmount = CurrencyAmount.fromRawAmount(pool.lpToken, 100e6);
    const minAmount = CurrencyAmount.fromRawAmount(pool.token, 10e6);

    expect(
      getRedeemRemote(
        pool,
        dstChainId,
        dstPoolId,
        totalSupply,
        totalLiquidity,
        lpTokenAmount,
        minAmount,
        CurrencyAmount.fromRawAmount(pool.token, BigInt(0)),
        CurrencyAmount.fromRawAmount(pool.lpToken, BigInt(0)),
      )[0].toExact(),
    ).toEqual(CurrencyAmount.fromRawAmount(token, 98e18).toExact());
  });
});
