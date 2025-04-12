import {ethers} from 'ethers';
import {assert as invariant} from '@layerzerolabs/ui-core';

/**
 *  txType 1,
 *  bytes  [2       32      ]
 *  fields [txType  extraGas]
 */
const TYPE_1 = 1;
/**
 *  txType 2,
 *  bytes  [2       32        32            bytes[]         ]
 *  fields [txType  extraGas  dstNativeAmt  dstNativeAddress]
 */
const TYPE_2 = 2;
/**
 * only available for V2
 */
const TYPE_3 = 3;

const MaxUint128 = ethers.BigNumber.from('0xffffffffffffffffffffffffffffffff');

export function optionsType1(_extraGas: number | string | bigint): string {
  const extraGas = ethers.BigNumber.from(_extraGas);
  invariant(extraGas.lte(MaxUint128), 'extraGas should be less than MaxUint128');
  return ethers.utils.solidityPack(['uint16', 'uint256'], [TYPE_1, extraGas]);
}

export function optionsType2(
  _extraGas: number | string | bigint,
  _dstNativeAmt: number | string | bigint,
  _dstNativeAddress: string,
): string {
  const extraGas = ethers.BigNumber.from(_extraGas);
  invariant(extraGas.lte(MaxUint128), 'extraGas should be less than MaxUint128');
  const dstNativeAmt = ethers.BigNumber.from(_dstNativeAmt);
  invariant(dstNativeAmt.lte(MaxUint128), 'dstNativeAmt should be less than MaxUint128');
  return ethers.utils.solidityPack(
    ['uint16', 'uint256', 'uint256', 'bytes'],
    [
      TYPE_2,
      ethers.BigNumber.from(extraGas),
      ethers.BigNumber.from(dstNativeAmt),
      _dstNativeAddress,
    ],
  );
}
