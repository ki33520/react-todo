'use strict'
var React = require('react');
var util = require('../lib/util');

var notFoundHandler = function(req, res) {
    var initialState = {
        code: '404',
        msg: '啊噢~您访问的页面不在地球上...'
    };
    res.status(404);
    React.render(
      React.createElement('h1', null, 'Hello, world!'),
      document.getElementById('example')
    );
}


module.exports = {
    notFoundHandler: notFoundHandler
};
