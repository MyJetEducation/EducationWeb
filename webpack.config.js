const path = require('path');
const htmlWebpackPlugins = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  mode: "development",
  entry: path.resolve(__dirname, "src/index.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000
  },
  module: {
    rules: [{
      test: /\.[tj]sx?$/,
      loader: "ts-loader",
      exclude: [/node_modules/]
    },{
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              mode: "local",
              localIdentName: '[name]__[local]__[hash:base64:5]',
              auto: /\.module\.\w+$/i,
            }
          }
        },
        'sass-loader',
      ]
    },
      {
        test:  [/\.svg$/, /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
            }
          }
        ]
      }]

  },
  plugins: [ new htmlWebpackPlugins({template: path.resolve(__dirname, "public/index.html")}) ],
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true
  }
}