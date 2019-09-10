const webpack = require('webpack');

module.exports = {
  // mode默认是production，但是不写会报warning
  // mode设置development, 代码不会压缩
  mode: 'development',
  devtool: 'cheap-eval-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            }
          },
          'less-loader',
          'postcss-loader'
        ],
      },
    ]
  },
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
    new webpack.HotModuleReplacementPlugin()
  ],
};
