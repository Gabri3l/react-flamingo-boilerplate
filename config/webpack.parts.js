const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const PORT = 8080;

exports.clean = (dest) => ({
  plugins: [
    new CleanWebpackPlugin([dest], {
      root: path.join(__dirname, '..'),
      verbose: true,
    }),
  ],
});

exports.devServer = ({
  host = 'localhost',
  port = PORT,
  publicPath,
  contentBase,
} = {}) => ({
  devServer: {
    contentBase,
    historyApiFallback: true,
    host,
    overlay: {
      errors: true,
      warnings: true,
    },
    port,
    publicPath,
    stats: 'errors-only',
  },
});

exports.hotModuleRelaod = ({ host, port, entry }) => {
  const hmrEntry = [
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/only-dev-server',
  ];

  return {
    entry: Array.isArray(entry)
      ? [...hmrEntry, ...entry]
      : [...hmrEntry, entry],
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
      hot: true,
    },
  };
};

exports.inlineImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        include,
        exclude,
        use: {
          loader: 'url-loader',
          options: Object.assign(
            {},
            {
              limit: 150000,
            },
            options,
          ),
        },
      },
    ],
  },
});

exports.limitChunks = (maxChunks) => ({
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks,
    }),
  ],
});

exports.lintJavaScript = ({ include, exclude = /node_modules/, options }) => ({
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include,
        exclude,
        enforce: 'pre',
        loader: 'eslint-loader',
        options,
      },
    ],
  },
});

exports.loadHtmlTemplate = ({
  filename,
  template,
  appId,
  title,
  mainChunkFilename = 'main',
  injectState = false,
  injectStyle = false,
  injectChunkBundles = false,
}) => ({
  plugins: [
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename,
      template,
      inject: false,
      body: `<div id="${appId}"><%= body %></div>`,
      bundles: injectChunkBundles ? '<%= bundles %>' : '',
      mainChunk: `<script type="text/javascript" src="/js/${mainChunkFilename}.js"></script>`,
      rehydrateCss: injectStyle
        ? '<script>window._emotion = <%= ids %>;</script>'
        : '',
      style: injectStyle ? '<style><%= css %></style>' : '',
      title,
      initialState: injectState
        ? '<script>window.__INITIAL_STATE__ = <%= initialState %>;</script>'
        : '',
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
});

exports.loadImages = (
  options = {},
  jpgQuality = '75',
  pngQuality = '75-90',
) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        loaders: [
          {
            loader: 'file-loader',
            options,
          },
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
                quality: jpgQuality,
              },
              gifsicle: {
                interlaced: false,
              },
              pngquant: {
                optimizationLevel: 7,
                quality: pngQuality,
                speed: 4,
              },
            },
          },
        ],
      },
    ],
  },
});

exports.speedUpMinification = (shouldSpeedUp) => ({
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: shouldSpeedUp,
        parallel: shouldSpeedUp,
      }),
    ],
  },
});

exports.setEnvVariables = (vars = {}) => ({
  plugins: [
    new webpack.DefinePlugin({
      'process.env': vars,
    }),
  ],
});

exports.transpileJavaScript = (options = {}) => ({
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: Object.assign(
            {},
            {
              cacheDirectory: true,
            },
            options,
          ),
        },
      },
    ],
  },
});
