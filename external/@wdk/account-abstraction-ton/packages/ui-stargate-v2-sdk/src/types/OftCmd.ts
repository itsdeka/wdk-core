import {utils} from 'ethers';
import {SendMode} from './SendMode';

export type Passenger = {
  address: string;
  amount: string;
};

export class OftCmd {
  constructor(
    public sendMode: number,
    public passengers: Passenger[],
  ) {}

  toBytes(): string {
    if (this.sendMode === SendMode.TAXI) {
      return '0x';
    } else if (this.sendMode === SendMode.DRIVE) {
      const passengerBytes = this.passengers
        .map((p) =>
          utils.solidityPack(['bytes32', 'uint64'], [p.address, p.amount]).replace('0x', ''),
        )
        .join('');
      return '0x' + passengerBytes;
    } else {
      // BUS
      return utils.solidityPack(['uint8'], [this.sendMode]);
    }
  }
}
