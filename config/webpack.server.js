const cssLoaderConfig = require('./_css-loader')['production'];
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

module.exports = {
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
      PRODUCTION: JSON.stringify(false)
    })
  ]
};
