import commonjsPlugin from '@chialab/esbuild-plugin-commonjs';
import {nodeExternalsPlugin} from 'esbuild-node-externals';
import type {Options} from 'tsup';

export const getDefaultConfig = (): Partial<Options> => ({
  esbuildPlugins: [
    commonjsPlugin(),
    nodeExternalsPlugin({
      dependencies: false,
      devDependencies: false,
    }),
  ],
  // lets be explicit about module type
  outExtension({format}) {
    if (format === 'cjs') {
      return {js: '.cjs'};
    } else if (format === 'esm') {
      return {js: '.mjs'};
    }
    throw new Error(`Format ${format} is not supported`);
  },
  clean: false,
  dts: true,
  sourcemap: true,
  splitting: false,
  treeshake: true,
  format: ['cjs', 'esm'],
});

export {defineConfig, Options} from 'tsup';
