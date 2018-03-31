const path = require('path')
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
      {
        test: /\.svg$/,
        loader: 'vue-svg-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.vue', '.svg'],
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
