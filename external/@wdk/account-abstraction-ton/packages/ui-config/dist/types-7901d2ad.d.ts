type Contract = {
    address: string;
};
type DeploymentV1 = {
    version: 1;
    stage: string;
    chainKey: string;
    endpoint: Contract;
    eid: number;
    isDeprecated?: boolean;
    relayer?: Contract;
    relayerV2?: Contract;
    ultraLightNode?: Contract;
    ultraLightNodeV2?: Contract;
};
type DeploymentV2 = {
    version: 2;
    stage: string;
    eid: number;
    chainKey: string;
    endpointV2: Contract;
    isDeprecated?: boolean;
    executor?: Contract;
    lzExecutor?: Contract;
    sendUln301?: Contract;
    sendUln302?: Contract;
    receiveUln301?: Contract;
    receiveUln302?: Contract;
};
type DVN = {
    name: string;
    address: string;
    chainKey: string;
    eid: number;
};
interface NetworkInfo {
    chainKey: string;
    chainType: string;
    nativeChainId: number | string;
    name: string;
    shortName: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
        address?: string;
    };
}
interface Rpc {
    url: string;
    weight?: number;
    timeout?: number;
    isPublic?: boolean;
    isActive?: boolean;
}
type Deployment = DeploymentV1 | DeploymentV2;

export { DVN as D, NetworkInfo as N, Rpc as R, DeploymentV2 as a, DeploymentV1 as b, Deployment as c };
