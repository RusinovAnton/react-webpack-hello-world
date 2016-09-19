var PROD = process.env.NODE_ENV === 'production'


var webpack = require('webpack')
var config = require('./webpack/config')
var plugins = require('./webpack/plugins')

console.log('Webpack started in ' + (process.env.NODE_ENV || 'dev') + ' mode.')


/**
 * Development config
 */
if (!PROD) {

  config.devtool = 'source-map'
  config.module.preLoaders =[
    {
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /libs/,
        /libraries/
      ],
      loader: 'eslint'
    }
  ];

}


/**
 * Production config
 */
if (PROD) {

  config.module.loaders = config.module.loaders.concat([{ test: /\.js$/, loader: "webpack-strip-block" }])
  config.plugins = config.plugins.concat([
    plugins.defineProd,
    plugins.uglify,
    plugins.occurrenceOrder,
    plugins.dedupe,
    plugins.noErrors
  ]);

}

module.exports = config;
