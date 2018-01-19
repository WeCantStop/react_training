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
        chunkFilename: '[name]-[id].[chunkhash:8].bundle.js'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss'],
        alias: {
            '@': path.join(__dirname, '..', 'src')
        }
    },

    module: {
        loaders: [
            {
                test:  /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            // 按需加载
            {
                // 匹配routers下面所有文件
                // ([^/]+)\/?([^/]*) 匹配xxx/xxx 或者 xxx
                test: /pages\/([^/]+)\/?([^/]*)\.jsx?$/,
                include: path.resolve(__dirname, 'src/router/'),
                loaders: ['bundle-loader?lazy', 'babel-loader']
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