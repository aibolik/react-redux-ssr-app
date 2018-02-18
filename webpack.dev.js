const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: ['babel-polyfill', './src/client/index.jsx'],

  devtool: 'inline-source-map',
  devServer: {
    contentBase: './src/client'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Development',
      filename: './src/client'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'src/client')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};