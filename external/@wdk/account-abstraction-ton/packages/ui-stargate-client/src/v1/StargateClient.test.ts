import {describe, it, beforeAll, afterAll, afterEach, expect} from 'vitest';
import {setupServer} from 'msw/node';
import {HttpResponse, http} from 'msw';
import {StargateClient} from './StargateClient';
import {chainsResponse, routesResponse, tokensResponse} from './mocks';
import redaxios from 'redaxios';

describe('StargateClient', () => {
  const STARGATE_API_KEY = 'TEST-API-KEY';

  const restHandlers = [
    http.get(/\/api\/v1\/bridge\/routes/, ({request}) => {
      const url = new URL(request.url);

      function param(name: string) {
        return url.searchParams.get(name);
      }
      const input = {
        srcChain: param('srcChain'),
        dstChain: param('dstChain'),
        srcToken: param('srcToken'),
        dstToken: param('dstToken'),
        srcAmount: param('srcAmount'),
        dstAmountMin: param('dstAmountMin'),
        srcAddress: param('srcAddress'),
        dstAddress: param('dstAddress'),
      };

      for (const [key, value] of Object.entries(input)) {
        expect(value, `Missing param: ${key}`).toBeDefined();
      }

      const headers = request.headers;
      expect(headers.get('x-stargate-api-key')).toEqual(STARGATE_API_KEY);
      return HttpResponse.json(routesResponse);
    }),
    http.get(/\/api\/v1\/bridge\/chains/, () => {
      return HttpResponse.json(chainsResponse);
    }),
    http.get(/\/api\/v1\/bridge\/tokens/, () => {
      return HttpResponse.json(tokensResponse);
    }),
  ];

  const server = setupServer(...restHandlers);

  // Start server before all tests
  beforeAll(() => server.listen({onUnhandledRequest: 'error'}));

  //  Close server after all tests
  afterAll(() => server.close());

  // Reset handlers after each test `important for test isolation`
  afterEach(() => server.resetHandlers());

  const client = new StargateClient({
    http: redaxios.create({
      baseURL: 'https://stargate.finance/api',
      headers: {
        'x-stargate-api-key': STARGATE_API_KEY,
      },
    }),
  });

  it('getChains', async () => {
    const chains = await client.getChains();
    expect(chains).toBeDefined();
  });

  it('getTokens', async () => {
    const tokens = await client.getTokens();
    expect(tokens).toBeDefined();
  });

  it('getRoutes', async () => {
    const NATIVE_ETH_ADDRESS = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
    const routes = await client.getRoutes({
      srcAddress: '0x6d9798053f498451BEC79c0397F7f95B079BDCd6',
      dstAddress: '0x6d9798053f498451BEC79c0397F7f95B079BDCd6',
      dstNativeAmount: '0',
      srcAmount: '100',
      dstAmountMin: '90',
      dstChainKey: 'ethereum',
      dstToken: NATIVE_ETH_ADDRESS,
      srcChainKey: 'optimism',
      srcToken: NATIVE_ETH_ADDRESS,
    });

    expect(routes.routes).toBeDefined();
  });
});
