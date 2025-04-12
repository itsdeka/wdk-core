// import {PublicKey} from '@solana/web3.js';
import {utils} from 'ethers';

export function hexZeroPadTo32(addr: string): string {
  return utils.hexZeroPad(addr, 32);
}

export function bytes32ToEthAddress(bytes32: string | Uint8Array): string {
  if (bytes32 instanceof Uint8Array) {
    bytes32 = utils.hexlify(bytes32);
  }
  return utils.getAddress(bytes32.slice(-40));
}

export function trim0x(str: string): string {
  return str.replace(/^0x/, '');
}

/**
 * Convert address to bytes32
 * @param address 0x prefixed address(20bytes or 32bytes) or solana address
 */
export function addressToBytes32(address: string): Uint8Array {
  if (isSolanaAddress(address)) {
    // return new PublicKey(address).toBytes();
    throw new Error('Solana integration is not implemented');
  } else if (address.startsWith('0x') && address.length <= 66) {
    return utils.arrayify(hexZeroPadTo32(address));
  }
  throw new Error('Invalid address');
}

const solanaAddressRegex = /^([1-9A-HJ-NP-Za-km-z]{32,44})$/;

export function isSolanaAddress(address: string): boolean {
  return solanaAddressRegex.test(address);
}
