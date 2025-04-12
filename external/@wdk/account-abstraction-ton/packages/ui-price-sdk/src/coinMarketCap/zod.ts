import {FiatCurrency} from '@layerzerolabs/ui-core';
import z from 'zod';

export const ResponseStatusSchema = z.object({
  timestamp: z.coerce.date(),
  error_code: z.number().optional(),
  error_message: z.string().nullable(),
  elapsed: z.number(),
  credit_count: z.number(),
  notice: z.string().nullable(),
});

export const V2CryptoCurrencyQuotasLatestResponseSchema = z.object({
  data: z.record(
    z.coerce.number(),
    z.object({
      id: z.number(),
      name: z.string(),
      symbol: z.string(),
      quote: z.record(
        z.nativeEnum(FiatCurrency),
        z
          .object({
            price: z.number().nullish(),
            // We don't need these for now but we'll keep the zod types just in case
            //
            // volume_24h: z.number(),
            // volume_change_24h: z.number(),
            // percent_change_1h: z.number(),
            // percent_change_24h: z.number(),
            // percent_change_7d: z.number(),
            // percent_change_30d: z.number(),
            // market_cap: z.number(),
            // market_cap_dominance: z.number(),
            // fully_diluted_market_cap: z.number(),
            // last_updated: z.string(),
          })
          // Since the schema is not aware of the fact that we might not be asking for all
          // fiat currencies, we'll make this nullish to allow for partial records
          .nullish(),
      ),
    }),
  ),
  status: ResponseStatusSchema,
});
