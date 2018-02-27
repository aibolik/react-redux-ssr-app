const path = require('path');
const webpackMerge = require('webpack-merge');
const commonWebpackConfigs = require('./webpack.common');

module.exports = webpackMerge(commonWebpackConfigs, {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public/js')
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
});
