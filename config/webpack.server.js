const cssLoaderConfig = require('./_css-loader')['production'];

module.exports = {
  "module": {
    "loaders": [
      {
        "test": /\.sass$/,
        loaders: [
          cssLoaderConfig,
          'sass-loader'
        ]
      }
    ]
  }
};
