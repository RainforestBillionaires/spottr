var http = require('http');
var express = require('express');
var helmet = require ('helmet');

var app = express();

var server = http.createServer(app);

app.use(helmet());

var controllers = require ('./controllers')(app);

app.get('/', function(req, res) {
    res.status(200).send('Hello World');
});

server.listen(3000, function() {
    console.log('HTTP on port 3000');
});
