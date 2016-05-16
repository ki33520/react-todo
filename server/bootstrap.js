var express = require('express'),
    http = require('http'),
    cons = require('consolidate');

var app = express();

app.use('/client', express.static('client'));

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/../view');

app.use(function(req,res,next){
    if(process.env.HMR_ENABLED){
        var hmrPort = process.env.HMR_PORT || 8000;
        res.locals.hostname = req.protocol+'://'+req.hostname+':'+hmrPort
    }
    next()
});

var router = require('./router.js');
app.use(router);

module.exports = app;