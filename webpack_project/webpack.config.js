const {resolve} = require('path');

module.exports = {
  // mode默认是production
  mode: 'production',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'main.js',
    path: resolve(__dirname, './dist'),
  }
};
