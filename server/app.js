var http = require('http');
var express = require('express');

var app = express();

var server = http.createServer(app);

app.get('/', function(req, res) {
    res.status(200).send('Hello World');
});

server.listen(3000, function() {
    console.log('HTTP on port 3000');
});
