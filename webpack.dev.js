const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: ['babel-polyfill', './src/client/index.jsx'],

  devtool: 'inline-source-map',
  devServer: {
    contentBase: './src/client',
    historyApiFallback: true
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
    filename: 'bundle.js',
    path: path.join(__dirname, 'build/js'),
    publicPath: '/js/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};