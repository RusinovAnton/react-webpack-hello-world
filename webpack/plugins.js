var PROD = process.env.NODE_ENV === 'production'

var path = require('path')
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var ManifestPlugin = require('webpack-manifest-plugin')
var CopyPlugin = require('copy-webpack-plugin')


module.exports = {

  commonsChunk: new webpack.optimize.CommonsChunkPlugin({
    name: 'commons',
    filename: PROD ? 'commons.[chunkhash].js' : 'commons.js',
    minChinks: 2
  }),

  clean: new CleanWebpackPlugin([
    'dist'
  ], {
    root: path.resolve('./'),
    verbose: true,
    dry: false,
    exclude: []
  }),

  uglify: new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compressor: {
      warnings: false,
      sequences: true,
      dead_code: true,
      conditionals: true,
      booleans: true,
      unused: true,
      if_return: true,
      join_vars: true,
      drop_console: true,
      drop_debugger: true
    },
    mangle: {
      except: ['$super', '$', 'exports', 'require']
    },
    output: {
      comments: false
    }
  }),
  occurrenceOrder: new webpack.optimize.OccurrenceOrderPlugin(),
  dedupe: new webpack.optimize.DedupePlugin(),
  noErrors: new webpack.NoErrorsPlugin(),
  defineProd:  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
  })

}

