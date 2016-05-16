'use strict'
var express = require('express'),
	register = require('babel-core/register'),
	router = express.Router();

register({
    extensions: ['.es6', '.es', '.jsx']
});

var mainController = require('./controller/main');

router.all('*', mainController.notFoundHandler);

module.exports = router;