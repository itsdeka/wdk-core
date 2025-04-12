import type {ChainKey, Currency} from '@layerzerolabs/ui-core';
import type {StargateV1Config, ChainPath, StargateV1Pool} from './types';

export class StargateV1Sdk {
  protected poolLinks: PoolLink[] = [];
  protected endpointIdToChainKeyMap = new Map<number, ChainKey>();
  protected log = console;

  constructor(public readonly config: StargateV1Config) {
    this.update(config);
  }

  public update(config: StargateV1Config) {
    this.updateEndpointIdToChainKeyMap(config);
    this.updateChainPaths(config);
  }

  public tryGetDeployment(chainKey: string) {
    return this.config.deployments[chainKey];
  }

  public getDeployment(chainKey: string) {
    const deployment = this.tryGetDeployment(chainKey);
    if (deployment) return deployment;
    throw new Error(`No deployment for chainKey: ${chainKey}`);
  }

  private updateEndpointIdToChainKeyMap(config: StargateV1Config) {
    this.endpointIdToChainKeyMap.clear();
    for (const chainKey in config.deployments) {
      const deployment = config.deployments[chainKey];
      this.endpointIdToChainKeyMap.set(deployment.eid, chainKey);
    }
  }

  public chainKeyToEndpointId(chainKey: ChainKey) {
    return this.getDeployment(chainKey).eid;
  }

  public endpointIdToChainKey(endpointId: number) {
    const chainKey = this.endpointIdToChainKeyMap.get(endpointId);
    if (chainKey) return chainKey;
    throw new Error(`No chainKey for endpointId: ${endpointId}`);
  }

  // this method cannot throw
  // if pool or chain is not defined - it will be skipped
  private updateChainPaths(config: StargateV1Config): void {
    const chainPathLinks: PoolLink[] = [];
    for (const chainPath of config.chainPaths) {
      try {
        const srcChainKey = this.endpointIdToChainKey(chainPath.srcEid);
        const dstChainKey = this.endpointIdToChainKey(chainPath.dstEid);
        const srcPool = this.getPool({poolId: chainPath.srcPoolId, chainKey: srcChainKey});
        const dstPool = this.getPool({poolId: chainPath.dstPoolId, chainKey: dstChainKey});
        const disabled = srcPool.disabled || dstPool.disabled || false;
        const path: PoolLink = {
          disabled,
          srcPool,
          dstPool,
          chainPath,
        };
        chainPathLinks.push(path);
      } catch (e) {
        this.log.error(`Could not add chain path ${JSON.stringify(chainPath)}`, e);
      }
    }
    this.poolLinks = chainPathLinks;
  }

  tryGetPool(poolLike: PoolLike | ContractLike): StargateV1Pool | undefined {
    if ('address' in poolLike) {
      const {chainKey, address} = poolLike;
      for (const pool of this.config.pools) {
        if (pool.chainKey === chainKey && pool.address === address) {
          return pool;
        }
      }
    }
    if ('poolId' in poolLike) {
      const {chainKey, poolId} = poolLike;
      for (const pool of this.config.pools) {
        if (pool.chainKey === chainKey && pool.poolId === poolId) {
          return pool;
        }
      }
    }
    return undefined;
  }

  getPool(poolLike: PoolLike | ContractLike): StargateV1Pool {
    const pool = this.tryGetPool(poolLike);
    if (pool) return pool;
    throw new Error(`No pool for ${JSON.stringify(poolLike)}`);
  }

  getActiveLinks = (): PoolLink[] => {
    return this.poolLinks.filter(
      (path) => path.chainPath.ready && !path.srcPool.disabled && !path.dstPool.disabled,
    );
  };

  getLinks = (): PoolLink[] => {
    return this.poolLinks;
  };

  getPools = (): StargateV1Pool[] => {
    return this.config.pools;
  };

  getLink = (srcToken: Currency, dstToken: Currency): PoolLink => {
    const link = this.tryGetLink(srcToken, dstToken);
    if (link) return link;
    throw new Error('No link found');
  };
  tryGetLink = (srcToken?: Currency, dstToken?: Currency): PoolLink | undefined => {
    if (!srcToken || !dstToken) return undefined;
    for (const link of this.poolLinks) {
      if (link.srcPool.token.equals(srcToken) && link.dstPool.token.equals(dstToken)) {
        return link;
      }
    }
    return undefined;
  };

  tryGetPath = (srcToken?: Currency, dstToken?: Currency): ChainPath | undefined => {
    return this.tryGetLink(srcToken, dstToken)?.chainPath;
  };

  getPath = (srcToken: Currency, dstToken: Currency) => {
    const path = this.tryGetPath(srcToken, dstToken);
    if (path) return path;
    throw new Error('No path found');
  };

  // other
  tryGetRouterAddress(chainKey: ChainKey) {
    return this.tryGetDeployment(chainKey)?.router?.address;
  }
  getRouterAddress = (chainKey: ChainKey) => {
    const address = this.tryGetRouterAddress(chainKey);
    if (address) return address;
    throw new Error(`No router address for chainKey: ${chainKey}`);
  };
  tryGetRouterEthAddress(chainKey: ChainKey) {
    return this.tryGetDeployment(chainKey)?.routerEth?.address;
  }
  getRouterEthAddress = (chainKey: ChainKey) => {
    const address = this.tryGetRouterEthAddress(chainKey);
    if (address) return address;
    throw new Error('No router ETH address');
  };
  isPathDisabled(srcPool: PoolLike, dstPool: PoolLike): boolean {
    if (this.getPool(srcPool).disabled) return true;
    if (this.getPool(dstPool).disabled) return true;

    for (const rule of this.config.rules) {
      // skip if rule does not match path
      if (rule.srcChainKey && srcPool.chainKey !== rule.srcChainKey) continue;
      if (rule.dstChainKey && dstPool.chainKey !== rule.dstChainKey) continue;
      if (rule.srcChainKey && srcPool.poolId !== rule.srcPoolId) continue;
      if (rule.dstPoolId && dstPool.poolId !== rule.dstPoolId) continue;
      return true;
    }

    return false;
  }

  getWidgetAddress = (chainKey: ChainKey): string => {
    const address = this.tryGetWidgetAddress(chainKey);
    if (address) return address;
    throw new Error(`No widget address for chainKey: ${chainKey}`);
  };

  tryGetWidgetAddress = (chainKey: ChainKey): string | undefined => {
    throw new Error('tryGetWidgetAddress not implemented');
  };

  get pools() {
    return this.getPools();
  }
}

type PoolLike = {
  chainKey: ChainKey;
  poolId: number;
};

type ContractLike = {
  chainKey: ChainKey;
  address: string;
};

// we need a data structure with references to pools
type PoolLink = {
  disabled: boolean;
  srcPool: StargateV1Pool;
  dstPool: StargateV1Pool;
  chainPath: ChainPath;
};
