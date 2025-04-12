import type {ChainKey} from '@layerzerolabs/ui-core';
import type {AptosClient} from 'aptos';

export type GetAptosClientFunction = (chainKey: ChainKey) => AptosClient;
