import {defineConfig, getDefaultConfig} from '@layerzerolabs/tsup-config';

export default defineConfig({
  ...getDefaultConfig(),
  splitting: true,
  entry: {
    typechain: 'src/typechain/index.ts',
    index: 'src/index.ts',
  },
});
