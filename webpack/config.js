var PROD = process.env.NODE_ENV === 'production'


var path = require('path')
var precss = require('precss')
var autoprefixer = require('autoprefixer')
var entry = require('./entry')
var plugins = require('./plugins')


module.exports = {
  cache: !PROD,
  context: path.resolve('./src'),
  externals: {
    'Config': JSON.stringify(require('../app.config.json'))
  },
  entry: entry,
  output: {
    path: path.resolve('dist'),
    publicPath: '/dist',
    filename: PROD ? '[name].[chunkhash].js' : '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /libraries/],
        loader: 'babel'
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        loader: 'style!css!postcss!sass'
      },
    ]
  },
  postcss: function () {
    return [
      precss,
      autoprefixer
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: [
    plugins.clean,
    plugins.commonsChunk,
  ]
}

