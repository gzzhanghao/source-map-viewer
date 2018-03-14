const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

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

  resolve: {
    extensions: ['.js', '.vue'],
  },

  externals: {
    'fs': 'null',
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],
}
