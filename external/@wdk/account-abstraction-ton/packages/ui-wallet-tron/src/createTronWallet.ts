import {type NetworkAdapter, TronWallet} from './TronWallet';

export function createTronWallet(adapter: NetworkAdapter) {
  return new TronWallet(adapter);
}
