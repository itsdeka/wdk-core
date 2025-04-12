import {Web3Provider} from '@ethersproject/providers';

export const isWalletMultiSig = async (
  provider: Web3Provider,
  address: string,
): Promise<boolean> => {
  const code = await provider.getCode(address);
  return code !== '0x';
};
