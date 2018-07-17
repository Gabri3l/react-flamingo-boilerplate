const path = require('path');
const merge = require('webpack-merge');
const {
  ReactLoadablePlugin,
} = require('@react-firenze/react-loadable/webpack');
const parts = require('./webpack.parts');

const MAIN_CHUNK = 'main';

module.exports = (PATHS, TITLE) => merge([
  {
    mode: 'production',
    entry: path.join(PATHS.client, '/ClientApp.js'),
    devtool: false,
    output: {
      path: path.join(PATHS.public, '/js/'),
      filename: `${MAIN_CHUNK}.js`,
      chunkFilename: '[name].[chunkhash].js',
      publicPath: '/js/',
    },
    plugins: [
      new ReactLoadablePlugin({
        filename: path.join(PATHS.server, '/react-loadable.json'),
      }),
    ],
  },
  parts.loadHtmlTemplate({
    filename: path.join(PATHS.public, '/index.html'),
    template: path.join(PATHS.app, '/index.html'),
    mainChunkFilename: MAIN_CHUNK,
    appId: 'app',
    title: TITLE,
    injectStyle: true,
    injectState: true,
    injectChunkBundles: true,
  }),
  parts.setEnvVariables({
    MY_ENV_VAR: process.env.MY_ENV_VAR,
  }),
  parts.clean(PATHS.public),
  parts.transpileJavaScript(),
  parts.loadImages({
    name: '[name].[hash:8].[ext]',
    outputPath: '../images/',
    publicPath: '/images/',
  }),
  parts.speedUpMinification(true),
]);
