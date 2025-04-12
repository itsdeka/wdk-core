import {networks, deployments} from '@layerzerolabs/ui-config';
import {coreModule} from '../core';
import {blockExplorers} from './blockExplorers';
import {createRpcMap} from '../utils/createRpcMap';
import {rpcMap} from './rpcs';

export function setDefaults() {
  coreModule.setNetworks(networks);
  coreModule.setDeployments(deployments);
  coreModule.setBlockExplorers(blockExplorers);
  coreModule.setRpcMap(createRpcMap(rpcMap, {}));
}

setDefaults();
