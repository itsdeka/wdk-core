import {type ProviderFactory, createTransaction} from '@layerzerolabs/ui-evm';
import {type ChainKey, type FeeQuote, MessageFee, type Transaction} from '@layerzerolabs/ui-core';
import {z} from 'zod';
import redaxios from 'redaxios';
import type {Signer} from 'ethers';
import {TokenMessaging__factory} from '../typechain';
import type {StargateV2TokenMessagingConfig} from '../types/zod';

// https://github.com/colinhacks/zod/discussions/1897
const bigIntSchema = z
  .string()
  .transform((value) => {
    try {
      return BigInt(value);
    } catch (error) {
      return value;
    }
  })
  .pipe(z.bigint());

const passengerSchema = z.object({
  sender: z.string(),
  receiver: z.string(),
  ticketId: bigIntSchema,
  assetId: z.number(),
  asset: z.string(),
  amountSD: bigIntSchema,
  rideStatus: z.string(),
  txHash: z.string(),
  blockNumber: z.number(),
  timestamp: z.number(),
  nativeDrop: z.boolean(),
  passengerBytes: z.string(),
});

const path = z.object({
  srcEid: z.number(),
  dstEid: z.number(),
  srcChainKey: z.string(),
  dstChainKey: z.string(),
});

const busSchema = path.extend({
  bus: z.object({
    busId: z.string(),
    guid: z.string(),
    timestamp: z.number(),
    txHash: z.string(),
  }),
});

const queueSchema = path.extend({
  queue: z.object({
    currentBusParams: z.object({
      capacity: z.number(),
    }),
    passengers: passengerSchema.array(),
  }),
});

const busQueueSchema = z.discriminatedUnion('inQueue', [
  queueSchema.extend({
    bus: z.undefined().optional(),
    inQueue: z.literal(true),
  }),
  busSchema.extend({
    queue: z.undefined().optional(),
    inQueue: z.literal(false),
  }),
]);

const busDriveSettingsSchema = z.object({
  // expressed in ms
  maxWaitTime: z.number().transform((ms) => ({seconds: ms / 1000})),
  passengersToDrive: z.number(),
});

export type GetBusDriveSettingsInput = {srcChainKey: ChainKey; dstChainKey: ChainKey};
export type GetBusDriveSettingsResult = z.infer<typeof busDriveSettingsSchema>;

export type GetQueueByPathInput = {srcChainKey: ChainKey; dstChainKey: ChainKey};
export type GetQueueByPathResult = z.infer<typeof queueSchema>;

export type GetBusByTxHashInput = {txHash: string};
export type GetBusByTxHashResult = z.infer<typeof busQueueSchema>;

export type QuoteDriveBusInput = {
  srcChainKey: ChainKey;
  dstEid: number;
  queue: {
    passengers: Pick<Passenger, 'ticketId' | 'passengerBytes'>[];
    currentBusParams: {capacity: number};
  };
};
export type QuoteDriveBusResult = FeeQuote;

type Passenger = z.infer<typeof passengerSchema>;

export interface DriveBusInput {
  chainKey: ChainKey;
  txHash: string;
  fee: FeeQuote;
}

export class StargateV2Bus {
  protected http: ReturnType<typeof redaxios.create>;

  constructor(
    protected config: StargateV2TokenMessagingConfig,
    protected providerFactory: ProviderFactory,
  ) {
    this.http = redaxios.create({baseURL: config.api.url});
  }

  supportsPath(path: {srcChainKey: ChainKey; dstChainKey: ChainKey}): boolean {
    return !!this.tryGetDeployment(path.srcChainKey) && !!this.tryGetDeployment(path.dstChainKey);
  }

  async quoteDriveBus(input: QuoteDriveBusInput): Promise<QuoteDriveBusResult> {
    if (input.queue.passengers.length === 0) {
      throw new StargateV2NoPassengersError(input);
    }
    const messaging = this.getTokenMessagingContract(input.srcChainKey);
    const capacity = input.queue.currentBusParams.capacity;
    const passengers = input.queue.passengers.slice(0, capacity);
    const passengerBytes = this.getPassengerBytes(passengers);
    const fee = await messaging.quoteDriveBus(input.dstEid, passengerBytes);
    return MessageFee.from(input.srcChainKey, {
      nativeFee: fee.nativeFee.toBigInt(),
      zroFee: fee.nativeFee.toBigInt(),
    });
  }

  async getQueueByPath(path: {
    srcChainKey: ChainKey;
    dstChainKey: ChainKey;
  }): Promise<GetQueueByPathResult> {
    const srcEid = this.chainKeyToEid(path.srcChainKey);
    const dstEid = this.chainKeyToEid(path.dstChainKey);
    const response = await this.http.get(`v1/buses/queue/${srcEid}/${dstEid}`);
    const queue = queueSchema.parse(this.fixQueue(response.data, path));
    return this.fixChainKey(queue);
  }

  async getBusDriveSettings(path: GetBusDriveSettingsInput): Promise<GetBusDriveSettingsResult> {
    const srcEid = this.chainKeyToEid(path.srcChainKey);
    const dstEid = this.chainKeyToEid(path.dstChainKey);
    const response = await this.http.get(`v1/buses/bus-drive-settings/${srcEid}/${dstEid}`);
    const busDriveSettings = busDriveSettingsSchema.parse(response.data);
    return busDriveSettings;
  }

  async getBusByTxHash(input: GetBusByTxHashInput): Promise<GetBusByTxHashResult> {
    const response = await this.http.get(`v1/buses/bus-queue/${input.txHash}`);
    const [bus] = busQueueSchema.array().length(1).parse(response.data);
    return this.fixChainKey(bus);
  }

  public chainKeyToEid(chainKey: ChainKey): number {
    return this.getDeployment(chainKey).eid;
  }

  // todo: remove when API is fixed
  protected fixQueue<T extends object>(
    queue: T,
    path: {srcChainKey: ChainKey; dstChainKey: ChainKey},
  ) {
    return {
      ...queue,
      srcChainKey: path.srcChainKey,
      dstChainKey: path.dstChainKey,
      srcEid: this.chainKeyToEid(path.srcChainKey),
      dstEid: this.chainKeyToEid(path.dstChainKey),
    };
  }

  // todo: remove when API is fixed
  protected fixChainKey<
    T extends {srcChainKey: string; dstChainKey: string; srcEid: number; dstEid: number},
  >(data: T): T {
    return {
      ...data,
      srcChainKey: this.eidToChainKey(data.srcEid),
      dstChainKey: this.eidToChainKey(data.dstEid),
    };
  }

  // todo: this method should not be required
  // it exists only because sandbox bus API returns invalid chainKey
  protected eidToChainKey(eid: number): ChainKey {
    for (const [key, deployment] of Object.entries(this.config.deployments)) {
      if (deployment.eid === eid) return key as ChainKey;
    }
    throw new Error(`No chain key found for eid ${eid}`);
  }

  protected getTokenMessagingContract(chainKey: ChainKey) {
    const address = this.getDeployment(chainKey).tokenMessaging.address;
    const provider = this.providerFactory(chainKey);
    return TokenMessaging__factory.connect(address, provider);
  }

  protected tryGetDeployment(chainKey: ChainKey) {
    return this.config.deployments[chainKey];
  }

  protected getDeployment(chainKey: ChainKey) {
    const deployment = this.tryGetDeployment(chainKey);
    if (deployment) return deployment;
    throw new Error(`No deployment found for ${chainKey}`);
  }

  protected getPassengerBytes(
    passengers: Pick<Passenger, 'ticketId' | 'passengerBytes'>[],
  ): string {
    const header = '0x';
    const passengerBytes = passengers
      .map((data) => data.passengerBytes)
      .map((p) => p.replace('0x', ''))
      .join('');
    return header + passengerBytes;
  }

  async driveBus(input: DriveBusInput): Promise<Transaction<Signer>> {
    const chainKey = input.chainKey;
    const messaging = this.getTokenMessagingContract(chainKey);

    // in case of race condition
    // if new fee is smaller than previous - will be refunded
    const bus = await this.getBusByTxHash({txHash: input.txHash});
    if (!bus.inQueue) throw new StargateV2BusDrivenError(bus);

    const passengersBytes = this.getPassengerBytes(bus.queue.passengers);
    const value = input.fee.nativeFee.toBigInt();

    const populatedTransaction = messaging.populateTransaction.driveBus(
      bus.dstEid,
      passengersBytes,
      {value},
    );
    return createTransaction(populatedTransaction, {provider: messaging.provider, chainKey});
  }
}

export class StargateV2NoPassengersError extends Error {
  constructor(protected readonly data: QuoteDriveBusInput) {
    super('No passengers in queue');
  }
}
export class StargateV2BusDrivenError extends Error {
  constructor(protected readonly data: GetBusByTxHashResult) {
    super('Bus already driven');
  }
}
