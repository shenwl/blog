const {resolve} = require('path');

module.exports = {
  // mode默认是production，但是不写会报warning
  // mode设置development, 代码不会压缩
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'main.js',
    path: resolve(__dirname, './dist'),
  }
};
