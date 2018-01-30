const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

// html 复制模板
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src/app/index.html'),
    filename: 'index.html',
    inject: 'body',
});
// 清除dist文件夹
const clearDistPlugin =  new CleanWebpackPlugin('dist');

module.exports = {
    entry: [
        './src/app/main.js'
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.[name].js',
        chunkFilename: '[name]-[id].[chunkhash:8].bundle.js'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss'],
        alias: {
            '@': path.join(__dirname, '..', 'src')
        }
    },
    
    module: {
        rules: [
            {
                test:  /\.js|jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: ['file-loader']
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

    // plugins 放置所使用的插件
    plugins: [htmlWebpackPlugin, clearDistPlugin],
};
