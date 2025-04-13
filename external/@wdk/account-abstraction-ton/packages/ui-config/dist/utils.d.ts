import { D as DVN, a as DeploymentV2, b as DeploymentV1 } from './types-7901d2ad.js';

declare function readV2DvnsFromMonorepo(): Promise<DVN[]>;
declare function readV2DeploymentsFromMonorepo(): Promise<DeploymentV2[]>;
declare function readDeploymentsFromApi(): Promise<any[]>;
declare function readDvnsFromApi(): Promise<{
    name: any;
    address: string;
    chainKey: string;
    eid: number;
}[]>;
declare function readV1DeploymentsFromMonorepo(): Promise<DeploymentV1[]>;

export { readDeploymentsFromApi, readDvnsFromApi, readV1DeploymentsFromMonorepo, readV2DeploymentsFromMonorepo, readV2DvnsFromMonorepo };
