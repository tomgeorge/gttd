module.exports = {  
	entry: './src/index.ts',
	output: {
		filename: 'resources/public/js/bundle.js'
	},
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
	},
	module: {
		loaders: [
		{ test: /\.ts$/, loader: 'ts-loader' }
		]
	}
}
