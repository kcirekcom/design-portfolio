var path = require('path');

module.exports = {
  entry: './app/index.jsx',
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(woff|ttf|svg|eot).*/,
        loader: 'url?limit=10000&name=font/[hash].[ext]'
      },
      {
        test: /\.(jpg|jpeg|svg|bmp|tiff|gif|png)$/,
        loader: 'url?limit=10000&name=image/[hash].[ext]'
      }
    ]
  }
};