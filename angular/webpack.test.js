/**
 * Webpack config for builds
 */
const validate = require('webpack-validator');
module.exports = validate(require('./webpack.make')({
  BUILD: false,
  TEST: true
}));