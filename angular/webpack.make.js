'use strict';

// Modules
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); 
const path = require('path');
const modRewrite = require('connect-modrewrite'); 
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = function makeWebpackConfig(options) {
	/**
	 * Environment type
	 * BUILD is for generating minified builds
	 * TEST is for generating test builds
	 */
	var BUILD = !!options.BUILD;
	var TEST = !!options.TEST;

	/**
	 * Config
	 * Reference: http://webpack.github.io/docs/configuration.html
	 * This is the object where all configuration gets set
	 */
	var config = {};

	/**
	 * Entry
	 * Reference: http://webpack.github.io/docs/configuration.html#entry
	 * Should be an empty object if it's generating a test build
	 * Karma will set this when it's a test build
	 */
	if (TEST) {
		config.entry = {}
	} else {
		config.entry = {
			app : './src/index.ts',
			vendor : [
				'es6-shim', 
				'angular2/bundles/angular2-polyfills', 
				'angular2/common', 
				'angular2/core', 
				'angular2/http', 
				'angular2/platform/browser', 
				'angular2/router', 
				'rxjs',
				'jquery',
				'materialize-css']
		}
	}

	/**
	 * Output
	 * Reference: http://webpack.github.io/docs/configuration.html#output
	 * Should be an empty object if it's generating a test build
	 * Karma will handle setting it up for you when it's a test build
	 */
	if (TEST) {
		config.output = {}
	} else {
		config.output = {
			// Absolute output directory
			path : BUILD ? path.resolve(__dirname, "dist/") : __dirname + '/public',

			// Output path from the view of the page
			// Uses webpack-dev-server in development
			publicPath : BUILD ? "./" : 'http://localhost:8080/',

			// Filename for entry points
			// Only adds hash in build mode
			filename : BUILD ? '[name].[hash].js' : '[name].bundle.js',

			// Filename for non-entry points
			// Only adds hash in build mode
			chunkFilename : BUILD ? '[name].[hash].js' : '[name].bundle.js'
		}
	}

	/**
	 * Resolve
	 * Reference: http://webpack.github.io/docs/configuration.html#resolve
	 * Sets root to node_modules, but allows backup modules from bower_components
	 */
	config.resolve = {
		root : [path.join(__dirname, "node_modules")],
		fallback : [path.join(__dirname, "bower_components")],
		extensions : ['', '.ts', '.js', '.webpack.js']
	};

	/**
	 * Devtool
	 * Reference: http://webpack.github.io/docs/configuration.html#devtool
	 * Type of sourcemap to use per build type
	 */
	if (TEST) {
		config.devtool = 'inline-source-map';
	} else if (BUILD) {
		config.devtool = 'source-map';
	} else {
		config.devtool = 'eval';
	}

	/**
	 * Loaders
	 * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
	 * List: http://webpack.github.io/docs/list-of-loaders.html
	 * This handles most of the magic responsible for converting modules
	 */

	// Initialize module
	config.module = {
		preLoaders : [],
		loaders : [{
			// JS LOADER
			// Reference: https://github.com/babel/babel-loader
			// Transpile .js files using babel-loader
			// Compiles ES6 and ES7 into ES5 code
			test : /\.js$/,
			loader : 'babel?optional[]=runtime',
			exclude : /node_modules|bower_components/
		}, {
			// HTML LOADER
			// Reference: https://github.com/WearyMonkey/ngtemplate-loader
			// Allow loading html through js
			test : /\.html$/,
			loader : "ngtemplate?relativeTo=" + (path.resolve(__dirname, './src')) + "/!html-loader"
		}, {
			// ASSET LOADER
			// Reference: https://github.com/webpack/file-loader
			// Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
			// Rename the file using the asset hash
			// Pass along the updated reference to your code
			// You can add here any file extension you want to get copied to your output
			test : /\.(png|jpg|jpeg|gif)$/,
			loader : 'file'
		}, {
			test : /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader : "url-loader?limit=10000&minetype=application/font-woff"
		}, {
			test : /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader : "file-loader"
		}, {
			test : /\.ts$/,
			loader : 'ts-loader',
			exclude : /node_modules|bower_components/
		}]
	};

	// ISPARTA LOADER
	// Reference: https://github.com/ColCh/isparta-instrumenter-loader
	// Instrument JS files with Isparta for subsequent code coverage reporting
	// Skips node_modules and files that end with .test.js
	if (TEST) {
		config.module.preLoaders.push({
			test : /\.js$/,
			exclude : [/node_modules/, /\.test\.js$/],
			loader : 'isparta-instrumenter'
		})
	}

	if (!TEST) {
		// CSS LOADER
		// Reference: https://github.com/webpack/css-loader
		// Allow loading css through js
		//
		// Reference: https://github.com/postcss/postcss-loader
		// Postprocess your css with PostCSS plugins
		var cssLoader = {
			test : /\.css$/,
			// Reference: https://github.com/webpack/extract-text-webpack-plugin
			// Extract css files in production builds
			//
			// Reference: https://github.com/webpack/style-loader
			// Use style-loader in development for hot-loading
			loader : ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
		};

		// SASS LOADER
		// Reference: https://github.com/jtangelder/sass-loader
		// Allow loading inline sass through js
		//
		var sassLoader = {
			test : /\.scss$/,
			loader : 'style!css!sass?includePaths[]=' + path.join(__dirname, "node_modules")
		};
		// Add cssLoader to the loader list
		config.module.loaders.push(cssLoader);
		config.module.loaders.push(sassLoader);
	} else {
		// Skip loading styles in test mode
		// Reference: https://github.com/webpack/null-loader
		// Return an empty module
		var nullLoader = {
			test : /\.css$|\.scss$/,
			// Reference: https://github.com/webpack/style-loader
			// Use style-loader in development for hot-loading
			loader : 'null'
		};
		config.module.loaders.push(nullLoader);
	}

	/**
	 * PostCSS
	 * Reference: https://github.com/postcss/autoprefixer-core
	 * Add vendor prefixes to your css
	 */
	config.postcss = [autoprefixer({
		browsers : ['last 2 version']
	})];

	/**
	 * Plugins
	 * Reference: http://webpack.github.io/docs/configuration.html#plugins
	 * List: http://webpack.github.io/docs/list-of-plugins.html
	 */
	config.plugins = [
	// Reference: https://github.com/webpack/extract-text-webpack-plugin
	// Extract css files
	// Disabled when in test mode or not in build mode
	new ExtractTextPlugin('[name].[hash].css', {
		disable : !BUILD || TEST
	})];

	// Skip rendering index.html in test mode
	if (!TEST) {
		config.eslint = {
			parser : 'babel-eslint'
		};
		config.module.loaders.push({
			test : /\.js$/,
			exclude : /node_modules|bower_components|vendor/,
			loaders : ['eslint']
		});
		// Reference: https://github.com/ampedandwired/html-webpack-plugin
		// Render index.html
		config.plugins.push(new HtmlWebpackPlugin({
			template : './src/index.html',
			inject : 'body'// ,
			// minify : BUILD
		}), new BrowserSyncPlugin({
			host : 'localhost',
			port : 8080,
			server : {
				baseDir : ['public']
			},
			middleware : [modRewrite(['^[^\\.]*$ /index.html [L]'])]
		}),
		new webpack.optimize.CommonsChunkPlugin({ name: ['app', 'vendor'], minChunks: Infinity}))
		// Reference: https://github.com/erikras/react-redux-universal-hot-example/issues/596
		// new webpack.ProvidePlugin({
			// $ : "jquery",
			// jQuery : "jquery"}
	}

	// Add build specific plugins
	if (BUILD) {
		config.plugins.push(
		// Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
		// Only emit files when there are no errors
		new webpack.NoErrorsPlugin(),

		// Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
		// Dedupe modules in the output
		new webpack.optimize.DedupePlugin(),

		// Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
		// Minify all javascript, switch loaders to minimizing mode
		new webpack.optimize.UglifyJsPlugin())
	}

	/**
	 * Dev server configuration
	 * Reference: http://webpack.github.io/docs/configuration.html#devserver
	 * Reference: http://webpack.github.io/docs/webpack-dev-server.html
	 */
	config.devServer = {
		contentBase : './public',
		stats : {
			modules : false,
			cached : false,
			colors : true,
			chunk : false
		}
	};

	return config;
};
