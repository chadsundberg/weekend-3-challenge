console.log('sourced');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var calculator = require('.')

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));






app.listen(5000);
