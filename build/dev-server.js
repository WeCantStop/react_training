const config = require('./config');
const webpack = require('webpack');
const DevServerPlugin = require('webpack-dev-server');
const webpackDevConfig = require('../webpack.dev');

const server = new DevServerPlugin(webpack(webpackDevConfig), {
  contentBase: webpackDevConfig.output.path,
  progress: true,
  hot: true,
  stats: {
    colors: true,
  }
});

server.listen(config.dev.port, config.dev.host, () => {
  console.log(`正在启动 => ${config.dev.host}:${config.dev.port}`);
});