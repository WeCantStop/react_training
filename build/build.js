const config = require('./config');
const webpack = require('webpack');
const DevServerPlugin = require('webpack-dev-server');
const webpackProdConfig = require('../webpack.config');

const server = new DevServerPlugin(webpack(webpackProdConfig), {
	contentBase: webpackProdConfig.output.path,
	progress: true,
	hot: true,
	open: true,
	stats: {
		colors: true,
	}
});

server.listen(config.dev.port, config.dev.host, () => {
	console.log(`正在启动 => ${config.dev.port}:${config.dev.port}`);
});