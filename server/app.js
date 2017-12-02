var http = require('http');
var express = require('express');
var helmet = require ('helmet');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var models = require('./models/db')(mongoose);

var db = mongoose.connection;
var app = express();

var server = http.createServer(app);

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var controllers = require ('./controllers')(app);

app.get('/', function(req, res) {
    res.status(200).send('Hello World');
});

db.once('open', function () {
    server.listen(3000, function() {
        console.log('HTTP on port 3000');
    });
    // var test = new models.User({
    //     email: 'test@test.com',
    //     name: 'test name',
    //     phoneNumber: '123456',
    //     address: '123 test road',
    //     salt: 'abc',
    //     password: 'mysecurepw'
    // });
    // test.save();
});

mongoose.connect('mongodb://localhost:27017/spottr');
