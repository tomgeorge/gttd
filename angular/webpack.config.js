module.exports = {  
	entry: "./src/index.ts",
	output: {
		filename: "bundle.js",
		path: './resources/public/js'
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
