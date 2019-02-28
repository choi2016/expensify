const path = require('path');

module.exports = {
	entry: './src/app.js',

	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},

	module: {
		rules: [{
			loaders: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		}, {
			test: /\.s?css$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}]
	},

	devtool: 'cheap-module-evalsource-map',
	
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		historyApiFallback: true	
	}
};