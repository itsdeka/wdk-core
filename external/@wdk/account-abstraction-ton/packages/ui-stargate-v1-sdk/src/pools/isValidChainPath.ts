import type {ChainPath} from '../types';

const DISABLED_ENDPOINTS: Record<number, true> = {
  10237: true, // 'xchain-testnet',
};

export function isValidChainPath(path: ChainPath) {
  return (
    path.ready && // not ready
    path.dstEid > 100 && // not ULNv1
    path.weight !== 0 && // not unassigned
    !isEndpointIdDisabled(path.srcEid) &&
    !isEndpointIdDisabled(path.dstEid)
  );
}

function isEndpointIdDisabled(eid: number): boolean {
  return !!DISABLED_ENDPOINTS[eid];
}
