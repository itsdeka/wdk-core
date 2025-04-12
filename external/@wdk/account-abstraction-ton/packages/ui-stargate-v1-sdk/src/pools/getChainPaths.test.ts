import {describe, test, expect, beforeAll} from 'vitest';
import {StargateV1Sdk} from '../StargateV1Sdk';
import {mainnet} from '../config/mainnet';
import {getChainPaths} from './getChainPaths';
import {createProviderFactory} from '../test/providerFactory';
import {isValidChainPath} from './isValidChainPath';
import {LogLevel, Logger} from '@ethersproject/logger';

beforeAll(() => Logger.setLogLevel(LogLevel.OFF));

// TODO: run integration tests in separate workflow
describe.skip('getChainPaths', () => {
  const providerFactory = createProviderFactory();
  const sdk = new StargateV1Sdk(mainnet);
  const cases = sdk.getPools();

  test.concurrent.each(cases)(
    `$token.chainKey $token.symbol`,
    async (pool) => {
      const chainPaths = await getChainPaths(pool, providerFactory);

      const enabledPaths = chainPaths.filter(isValidChainPath);

      expect(enabledPaths.length).not.toBe(0);
    },
    {timeout: 20_000},
  );
});
