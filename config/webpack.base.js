const path = require('path');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');
const serverConfig = require('./webpack.server');

require('dotenv')
  .config();

const resolve = (dirPath) => path.resolve(__dirname, dirPath);
const join = (dirPath) => path.join(__dirname, dirPath);

const PATHS = {
  app: join('../src'),
  dist: join('../dist'),
  client: join('../src'),
  public: join('../dist/public'),
  server: join('../server'),
};
const TITLE = 'React Flamingo Boilerplate';

const baseConfig = {
  context: __dirname,
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      actions: resolve('../src/actions'),
      constants: resolve('../src/constants'),
      components: resolve('../src/components'),
      containers: resolve('../src/containers'),
      images: resolve('../assets/images'),
      utils: resolve('../src/utils'),
    },
  },
  stats: {
    colors: true,
    reasons: false,
    chunks: false,
    hash: false,
    modules: false,
  },
  bail: true,
};

module.exports = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return merge(baseConfig, prodConfig(PATHS, TITLE));
    case 'server':
      return merge(baseConfig, serverConfig(PATHS));
    default:
      return merge(baseConfig, devConfig(PATHS, TITLE));
  }
};
