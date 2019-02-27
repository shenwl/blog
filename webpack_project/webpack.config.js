const {resolve} = require('path');

module.exports = {
  // mode默认是production，但是不写会报warning
  // mode设置development, 代码不会压缩
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash].[ext]',
          }
        }
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: resolve(__dirname, './dist'),
  },
};
