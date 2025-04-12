import z from 'zod';

export const serializedWrapperConfig = z.object({
  deployments: z.record(
    z.object({
      oftWrapper: z.object({
        version: z.number().optional(),
        address: z.string(),
      }),
    }),
  ),
});

export const serializedPartnerConfig = z.object({
  caller: z.string(),
  callerBps: z.number(),
  partnerId: z.number(),
});

export type OftWrapperConfig = z.infer<typeof serializedWrapperConfig>;
export type OftPartnerConfig = z.infer<typeof serializedPartnerConfig>;
