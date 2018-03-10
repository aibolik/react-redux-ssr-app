require('dotenv').config();
const path = require('path');
const cssLoaderConfig = require('./_css-loader')['production'];
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const isProduction = process.env.PRODUCTION;

const config = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          cssLoaderConfig, {
            loader: 'sass-loader',
            options: {
              indentedSyntax: false,
              includePaths: ['node_modules/normalize-scss/fork-versions/default', 'src/client/styles']
            }
          }
        ]
      }, {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isProduction
                    ? JSON.stringify('production')
                    : JSON.stringify('development')
      },
      PRODUCTION: JSON.stringify(isProduction)
    })
  ]
};

module.exports = config;
