import {defineConfig, getDefaultConfig} from '@layerzerolabs/tsup-config';

export default defineConfig({
  ...getDefaultConfig(),
  splitting: true,
  entry: {
    index: 'src/index.ts',
    types: 'src/types/index.ts',
    evm: 'src/evm/index.ts',
    aptos: 'src/aptos/index.ts',
    solana: 'src/solana/index.ts',
    ton: 'src/ton/index.ts',
  },
});
