import {CosmosWallet} from './CosmosWallet';

export class CosmosMetaMaskWallet extends CosmosWallet {
  public override readonly type = 'MetaMask';
}
