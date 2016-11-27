var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/Navbar'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'navbar.js',
    libraryTarget: 'umd',
    library: 'navbar'
  },
  plugins: [
    new webpack.IgnorePlugin(/underscore/),
    new webpack.IgnorePlugin(/react-scroll/)
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }]
  }
};
