import {CurrencyAmount, assert} from '@layerzerolabs/ui-core';
import type {StargateV1Pool} from '../../types';
import type {FeeLibrary, FeeObj} from './fee';
import {type ChainPath, amountLDtoSD, amountSDtoLD, type ChainId, type PoolId} from '../math';

// @deprecated because depends on fee library and state that often change
export function getSwapOutputAmount(
  srcPool: StargateV1Pool,
  dstPool: StargateV1Pool,
  feeLibrary: FeeLibrary,
  inputAmount: CurrencyAmount,
  // minAmount: CurrencyAmount,
  tokenBalance: CurrencyAmount,
  totalLiquidity: CurrencyAmount,
  eqFeePool: CurrencyAmount,
  chainPath: ChainPath,
): {outputAmount: CurrencyAmount; fee: FeeObj} {
  // todo: check
  assert(inputAmount.token.equals(srcPool.currency), 'CURRENCY');
  // assert(minAmount.currency.equals(this.token), 'TOKEN'); // todo: check
  assert(tokenBalance.token.equals(srcPool.token), 'TOKEN');
  assert(totalLiquidity.token.equals(srcPool.lpToken), 'LIQUIDITY');
  assert(eqFeePool.token.equals(srcPool.lpToken), 'LIQUIDITY');

  // fee library return fee in lpToken
  const fee: FeeObj = feeLibrary.getFees(
    chainPath.idealBalance,
    chainPath.balance,
    tokenBalance,
    totalLiquidity,
    eqFeePool,
    inputAmount,
  );

  const inputAmountSD = amountLDtoSD(srcPool, inputAmount);
  const totalFeeSD = fee.eqFee.add(fee.protocolFee).add(fee.lpFee);

  const outputAmountSD = inputAmountSD.subtract(totalFeeSD).add(fee.eqReward);
  // assert(amount.add(fee.eqReward).quotient >= minAmount.quotient, 'SLIPPAGE_TOO_HIGH');
  // todo: check currencies for decimals
  const lkbRemove = amountLDtoSD(srcPool, inputAmount.subtract(fee.lpFee));
  assert(chainPath.balance.quotient >= lkbRemove.quotient, 'DST_BALANCE_TOO_LOW');

  const outputAmountRD = amountSDtoLD(dstPool, outputAmountSD);

  return {
    outputAmount: outputAmountRD,
    fee,
  };
}

//remove liquidity A->B
//redeem remote
//todo: how much lp one should redeem

// @deprecated because depends on fee library and state that often change
export function getRedeemRemote(
  pool: StargateV1Pool,
  dstChainId: ChainId,
  dstPoolId: PoolId,
  totalSupply: CurrencyAmount,
  totalLiquidity: CurrencyAmount,
  lpTokenAmount: CurrencyAmount,
  minAmount: CurrencyAmount,
  tokenBalance: CurrencyAmount,
  eqFeePool: CurrencyAmount,
): [CurrencyAmount, CurrencyAmount] {
  assert(totalSupply.token.equals(pool.lpToken), 'LIQUIDITY');
  assert(totalLiquidity.token.equals(pool.lpToken), 'LIQUIDITY');
  assert(lpTokenAmount.token.equals(pool.lpToken), 'LIQUIDITY');
  assert(eqFeePool.token.equals(pool.lpToken), 'LIQUIDITY');
  assert(minAmount.token.equals(pool.currency), 'TOKEN');
  assert(tokenBalance.token.equals(pool.currency), 'TOKEN');

  //check that pool has enough liquidity
  assert(
    totalLiquidity.quotient >= lpTokenAmount.multiply(totalLiquidity).divide(totalSupply).quotient,
    'POOL DOES NOT HAVE ENOUGH LIQUIDITY',
  );

  const amountSD = lpTokenAmount.multiply(totalLiquidity).divide(totalSupply);
  const amountLD = amountSDtoLD(pool, amountSD);
  return [
    getSwapOutputAmount(
      pool,
      CurrencyAmount.fromRawAmount(this.token, amountLD.quotient),
      minAmount,
      dstChainId,
      dstPoolId,
      tokenBalance,
      totalLiquidity,
      eqFeePool,
    ).outputAmount,
    CurrencyAmount.fromRawAmount(pool.token, 0),
  ];
}
