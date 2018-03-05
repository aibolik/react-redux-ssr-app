const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/client/index.js'],

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['react', 'env', 'stage-2']
            }
          }
        ]
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader'
      }
    ]
  }
}
