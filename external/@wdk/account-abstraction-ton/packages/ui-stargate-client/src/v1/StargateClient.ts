import redaxios from 'redaxios';
import type z from 'zod';
import {
  chainsOutputSchema,
  messageInputSchema,
  messageOutputSchema,
  optionsInputSchema,
  optionsOutputSchema,
  routesInputSchema,
  routesOutputSchema,
  tokensInputSchema,
  tokensOutputSchema,
  unclaimedInputSchema,
  unclaimedOutputSchema,
} from './zod';
import type {
  ChainsResponse,
  MessageResponse,
  OptionsResponse,
  RoutesResponse,
  TokensResponse,
  UnclaimedResponse,
} from './types';

type ClientOptions =
  | {
      apiUrl: string;
      apiKey: string;
      http: undefined | never;
    }
  | {
      apiUrl?: never;
      apiKey?: never;
      http: ReturnType<typeof redaxios.create>;
    };

export class StargateClient {
  protected http: ReturnType<typeof redaxios.create>;

  constructor(public readonly config: ClientOptions) {
    this.http = config.http
      ? config.http
      : redaxios.create({
          baseURL: config.apiUrl,
          headers: {'x-stargate-api-key': config.apiKey},
        });
  }

  async getChains(): Promise<ChainsResponse> {
    const response = await this.http.get('v1/bridge/chains');
    return chainsOutputSchema.parse(response.data);
  }

  async getTokens(input: z.input<typeof tokensInputSchema> = {}): Promise<TokensResponse> {
    const params = tokensInputSchema.parse(input);
    const response = await this.http.get('v1/bridge/tokens', {params});
    return tokensOutputSchema.parse(response.data);
  }

  async getRoutes(input: z.input<typeof routesInputSchema>): Promise<RoutesResponse> {
    const params = routesInputSchema.parse(input);
    const response = await this.http.get('v1/bridge/routes', {params});
    return routesOutputSchema.parse(response.data);
  }

  async getMessage(input: z.input<typeof messageInputSchema>): Promise<MessageResponse> {
    const params = messageInputSchema.parse(input);
    const response = await this.http.get(`v1/bridge/tx/${encodeURIComponent(params.txHash)}`, {
      validateStatus: (status) => status === 200 || status === 404,
    });
    return messageOutputSchema.parse(response.data);
  }

  async getOptions(input: z.input<typeof optionsInputSchema>): Promise<OptionsResponse> {
    const params = optionsInputSchema.parse(input);
    const response = await this.http.get('v1/bridge/options', {params});
    return optionsOutputSchema.parse(response.data);
  }

  async getUnclaimed(input: z.input<typeof unclaimedInputSchema>): Promise<UnclaimedResponse> {
    const params = unclaimedInputSchema.parse(input);
    const response = await this.http.get('v1/bridge/unclaimed', {params});
    return unclaimedOutputSchema.parse(response.data);
  }
}
