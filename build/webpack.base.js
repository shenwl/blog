const { resolve } = require("path");
const { readdirSync } = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const AddAssetHtmlWebpackPlugun = require('add-asset-html-webpack-plugin');
const webpack = require("webpack");

const dllFiles = readdirSync(resolve(__dirname, '../dll'));
const dllPlugins = dllFiles.map(filename => {
  const dllReg = /.*\.dll.js/;
  const manifestReg = /.*\.manifest.json/;

  if(dllReg.test(filename)) {
    return new AddAssetHtmlWebpackPlugun({
      filepath: resolve(__dirname, '../dll', filename),
    });
  }
  if(manifestReg.test(filename)) {
    return new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, '../dll', filename),
    });
  }
})

module.exports = {
  entry: {
    main: "./src/index.tsx",
  },
  output: {
    filename: "[name].[hash].js",
    chunkFilename: "[name].[hash].chunk.js",
    path: resolve(__dirname, "../dist"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[hash].[ext]",
            outputPath: "img/",
            limit: 2048,
          },
        },
      },
      {
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: "file-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "../index.html"),
    }),
    new CleanWebpackPlugin(['dist'], {
      root: resolve(__dirname, "../"),
    }),
    new webpack.ProvidePlugin({
      // 当发现一个模块里用了$，就会在该模块引入jquery
      $: 'jquery',
    }),
    ...dllPlugins,
  ],
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
    usedExports: true,
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors',
        },
      },
    },
  },
};
