const path = require('path');
const webpack = require('webpack');
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

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader', {
            loader: 'sass-loader',
            options: {
              includePaths: ['node_modules/normalize-scss/fork-versions/default', 'src/client/styles']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({title: 'Development', filename: './src/client'}),
    new webpack.DefinePlugin({PRODUCTION: JSON.stringify(false)})
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'build/js'),
    publicPath: '/js/'
  }
});
