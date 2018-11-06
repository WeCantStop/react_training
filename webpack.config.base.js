const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const HelloPlugin = require('./src/lib/HelloPlugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src/app/index.html'),
  filename: 'index.html',
  inject: 'body',
});

const clearDistPlugin = new CleanWebpackPlugin('dist');

module.exports = {
  mode: 'development',
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
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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

  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },

  plugins: [
    // 自己定义的插件
    new HelloPlugin({ name: 'will' }),
    htmlWebpackPlugin,
    clearDistPlugin,
  ],
};
