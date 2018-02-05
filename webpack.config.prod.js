const webpackBaseConfig = require('./webpack.base');
const Merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = Merge(webpackBaseConfig, {
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
})