'use strict';
var path = require('path');

module.exports = {
	entry: './js/router.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};