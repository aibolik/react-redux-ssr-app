const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/client/index.jsx'],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public/js')
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

  resolve: {
    extensions: ['.js', '.jsx']
  }
};
