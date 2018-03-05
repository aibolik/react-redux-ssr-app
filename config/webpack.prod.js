const path = require('path');
const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const cssLoaderConfig = require('./_css-loader')['production'];
const commonWebpackConfigs = require('./webpack.common');

const extractSass = new ExtractTextPlugin({
  filename: 'main.css'
  // disable: process.env.NODE_ENV === "development"
});

module.exports = webpackMerge.smart(commonWebpackConfigs, {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public/assets')
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', {
            loader: 'sass-loader',
            options: {
              includePaths: ['node_modules/normalize-scss/fork-versions/default', 'src/client/styles']
            }
          }]
        })
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, '../public')], {
      root: path.resolve(__dirname, '..'),
      verbose: true
    }),
    extractSass
  ]
});
