const path = require('path')

module.exports = {

  entry: {
    main: './src',
  },

  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    publicPath: '/dist/',
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },

  devtool: 'eval-source-map',

  resolve: {
    extensions: ['.js', '.vue'],
  },

  externals: {
    'fs': 'null',
  },
}
