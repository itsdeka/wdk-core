import {defineConfig, getDefaultConfig} from '@layerzerolabs/tsup-config';

export default defineConfig({
  ...getDefaultConfig(),
  splitting: true,
  entry: {
    index: 'src/index.ts',
    v1: 'src/v1/index.ts',
    v2: 'src/v2/index.ts',
  },
});
