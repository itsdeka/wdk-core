export const StargateVersion = {
  V1: 'v1',
  V2: 'v2',
} as const;

export type StargateVersion = (typeof StargateVersion)[keyof typeof StargateVersion];
