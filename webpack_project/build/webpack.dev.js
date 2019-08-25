const { resolve } = require('path');
const baseConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  ...baseConfig,
  // mode默认是production，但是不写会报warning
  // mode设置development, 代码不会压缩
  mode: 'development',
  devtool: 'cheap-eval-module-source-map',
  devServer: {
    contentBase: '../dist',
    open: true,
    hot: true,
    hotOnly: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../index.html'),
    }),
    new CleanWebpackPlugin([resolve(__dirname, '../dist')]),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true,
  }
};
