/**
 * Webpack config for development
 */
const validate = require('webpack-validator');
module.exports = validate(require('./webpack.make')({
  BUILD: false,
  TEST: false
}));
