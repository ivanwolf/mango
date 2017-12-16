const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FlowtypePlugin = require('flowtype-loader/plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
});

const FlowtypeConfig = new FlowtypePlugin();

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js',
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  devServer: {
    port: 3000,
    overlay: true,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    FlowtypeConfig,
  ],
};
