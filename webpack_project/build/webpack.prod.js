const { resolve } = require('path');
const baseConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  ...baseConfig,
  mode: 'production',
  devtool: 'cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../index.html'),
    }),
    new CleanWebpackPlugin([resolve(__dirname, '../dist')]),
  ],
};
