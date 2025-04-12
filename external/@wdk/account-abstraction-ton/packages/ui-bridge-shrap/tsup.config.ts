import {defineConfig, getDefaultConfig} from '@layerzerolabs/tsup-config';

export default defineConfig({
  ...getDefaultConfig(),
  splitting: true,
  entry: {
    index: 'src/index.ts',
  },
});
