const webpackBaseConfig = require('./webpack.config.base');
const Merge = require('webpack-merge');
const webpack = require('webpack');
const uglifyjs = require('uglifyjs-webpack-plugin');

module.exports = Merge(webpackBaseConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  // devtool: 'false',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  optimization: {
    minimizer: [new uglifyjs()]
  },
});