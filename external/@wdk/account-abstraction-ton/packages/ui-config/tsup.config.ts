import {defineConfig, getDefaultConfig} from '@layerzerolabs/tsup-config';

export default defineConfig({
  ...getDefaultConfig(),
  splitting: true,
  clean: true,
  entry: {
    utils: 'src/utils.ts',
    dvns: 'src/dvns.ts',
    rpcs: 'src/rpcs.ts',
    networks: 'src/networks.ts',
    deployments: 'src/deployments.ts',
    index: 'src/index.ts',
  },
});
