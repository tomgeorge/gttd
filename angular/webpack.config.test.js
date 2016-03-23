module.exports = {  
	entry: './test/CalculatorTest.ts',
	output: {
		filename: 'test/bundle.js'
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
