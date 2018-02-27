const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackMerge = require('webpack-merge');
const commonWebpackConfigs = require('./webpack.common');

module.exports = webpackMerge(commonWebpackConfigs, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './src/client',
    historyApiFallback: true
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({title: 'Development', filename: './src/client'})
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build/js'),
    publicPath: '/js/'
  }
});
