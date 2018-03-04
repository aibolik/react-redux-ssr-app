const path = require('path');
const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const cssLoaderConfig = require('./_css-loader')['production'];
const commonWebpackConfigs = require('./webpack.common');

const extractSass = new ExtractTextPlugin({
  // filename: "main.bundle.css",
  filename: getPath => getPath('js/main.css').replace('js', '../css')
  // disable: process.env.NODE_ENV === "development"
});



// publicPath: path.resolve(__dirname, '../public/css')

module.exports = webpackMerge.smart(commonWebpackConfigs, {
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
      }, {
        test: /\.scss$/,
        use: extractSass.extract([
          cssLoaderConfig, {
            loader: 'sass-loader',
            options: {
              indentedSyntax: false,
              includePaths: ['node_modules/normalize-scss/fork-versions/default', 'src/client/styles']
            }
          }

        ])
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
