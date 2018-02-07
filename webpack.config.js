const path = require('path');
const webpack = require('webpack');

module.exports = {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']},
      {test: /\.scss$/, loaders: ['style','css', 'sass']},
      {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']}
    ]
  }
}
