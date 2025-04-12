import {defineConfig, getDefaultConfig} from '@layerzerolabs/tsup-config';

export default defineConfig({
  ...getDefaultConfig(),
  splitting: true,
  entry: {
    v1: 'src/v1/index.ts',
  },
});
