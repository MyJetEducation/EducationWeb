const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  console.log(process.env);
  return {
    mode: argv.mode,
    entry: {
      home: './src/index.tsx',
    },
    output: {
      path: path.resolve(__dirname, './wwwroot'),
      filename: '[name].js?[hash]',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpe?g|gif|ico|woff|woff2)$/i,
          use: ['file-loader'],
        },
        {
          test: /\.svg$/,
          include: [path.resolve(__dirname, './src/assets/svg/')],
          exclude: [path.resolve(__dirname, './src/assets/svg_no_compress/')],
          use: [
            'svg-sprite-loader',
            {
              loader: 'svgo-loader',
              options: {
                plugins: [
                  {
                    removeAttrs: { attrs: '(fill)' },
                  },
                ],
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          include: [path.resolve(__dirname, './src/assets/svg_no_compress/')],
          use: [
            'svg-sprite-loader',
            {
              loader: 'svgo-loader',
            },
          ],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: argv.mode !== 'production', // Must be set to true if using source-maps in production
        }),
      ],
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]|vendor[\\/]/,
            priority: -10,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
    devtool: 'source-map',
    target: 'web',
    stats: 'errors-only',
    devServer: {
      compress: true,
      historyApiFallback: true,
      https: false,
      hot: false,
      port: 8080,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html',
        meta: {
          viewport: 'width=device-width, initial-scale=1.0',
        },
      }),
      new webpack.DefinePlugin({
        WS_HOST: JSON.stringify('http://api.dfnt.work/signalr'),
        API_STRING: ['production', 'none'].includes(argv.mode)
          ? JSON.stringify('')
          : JSON.stringify('http://api.dfnt.work'),
        IS_LIVE: ['production', 'none'].includes(argv.mode),
        IS_LOCAL: argv.is_local === 'true',
        BUILD_VERSION: JSON.stringify(process.env.BUILD_VERSION),
      }),
      new CopyPlugin({
        patterns: [
          { from: './src/vendor/', to: '' },
          { from: './src/robots.txt', to: '' },
        ],
        options: {
          concurrency: 100,
        },
      }),
    ],
  };
};
