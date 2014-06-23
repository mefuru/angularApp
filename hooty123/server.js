var express = require('express');
var app = express();
var router = express.Router();

var logger = require('morgan');

app.use(logger()); // log things to console
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendfile('./views/index.html');
});

app.listen(3000);
