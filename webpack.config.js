const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src/app/index.html'),
    filename: 'index.html',
    inject: 'body',
});

module.exports = {
    entry: [
        './src/app/main.js'
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }

        ],
    },
    // devServer 则是 webpack-dev-server 设定
    devServer: {
        inline: true,
        port: 8008,
    },
    // plugins 放置所使用的外挂
    plugins: [HTMLWebpackPluginConfig],
};