const path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve('build'),
		filename: 'bundle.js'
	},
	module: {
		loaders:[
			{
				test: /\.js$/,
				exclude:/(node_modules)/,
				loader:'babel-loader',
				query: {
                    presets: ['es2015','react']
                }
			},
			{
				test:/\.css$/,
                loader:'style-loader!css-loader'
			}
		]
	}
};