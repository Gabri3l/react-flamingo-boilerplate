const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const parts = require('./webpack.parts');

module.exports = (PATHS) => merge([
  {
    entry: path.join(PATHS.server, '/server.js'),
    mode: 'production',
    target: 'node',
    devtool: false,
    output: {
      path: path.join(PATHS.dist, '/server'),
      filename: 'main.js',
    },
    externals: [nodeExternals()],
  },
  parts.limitChunks(1),
  parts.setEnvVariables({
    NODE_ENV: JSON.stringify('server'),
    PORT: JSON.stringify(process.env.PORT),
    MY_ENV_VAR: JSON.stringify(process.env.MY_ENV_VAR),
  }),
  parts.transpileJavaScript({
    presets: [['@babel/env', { targets: { node: 'current' } }]],
  }),
  parts.loadImages({
    name: '[name].[hash:8].[ext]',
    publicPath: '/images/',
    emitFile: false,
  }),
]);
