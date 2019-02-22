const {resolve} = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'main.js',
    path: resolve(__dirname, './dist'),
  }
};
