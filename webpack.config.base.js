const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

// html 复制模板
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src/app/index.html'),
  filename: 'index.html',
  inject: 'body',
});
// 清除dist文件夹
const clearDistPlugin = new CleanWebpackPlugin('dist');

const extractSass = new ExtractTextPlugin('css/[name].[hash:8].css');

const commonChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
  names: ['vendor', 'manifest']
});

module.exports = {
  entry: {
    app: path.join(__dirname, 'src/app/main.js'),
    vendor: ['react', 'redux', 'react-redux', 'react-router-dom', 'react-dom']
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash:8].js',
    publicPath: '/',
    chunkFilename: 'js/[name]-[id].[chunkHash:8].bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      'Components': path.resolve(__dirname, 'src/components/')
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?minimize=true', 'sass-loader']
        })
        // use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?minimize=true']
        })
        // use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: '10000',
              name: 'images/[name]-[hash:5].[ext]'
            }
          },
        ]
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
  plugins: [
    htmlWebpackPlugin,
    clearDistPlugin,
    new ExtractTextPlugin('css/[name].[hash:8].css', {allchunks: true}),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      filename: 'vendor.js'
    }),
    extractSass,
    commonChunkPlugin
  ],
};
