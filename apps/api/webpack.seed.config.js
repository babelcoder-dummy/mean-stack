const { NxWebpackPlugin } = require('@nx/webpack');
const { join } = require('path');

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/api'),
  },
  plugins: [
    new NxWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/tools/seed.ts',
      tsConfig: './tsconfig.seed.json',
      optimization: false,
      outputHashing: 'none',
    }),
  ],
};
