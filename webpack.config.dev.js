const webpackBaseConfig = require('./webpack.config.base');
const Merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

module.exports = Merge(webpackBaseConfig, {

  devtool: 'inline-source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8010,
    hot: true,
    inline: true,
    stats: {
      colors: true,
      modules: false,
      children: false,
      entrypoints: false
    }
  },
});