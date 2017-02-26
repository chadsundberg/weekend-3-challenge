console.log('sourced');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var calculator = require('./routes/calculator')

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

// app.get('//calculator', newMathObject);

app.post('/calculator/new', function(req, res){
  var newCalc = req.body;
  console.log(newCalc);
  res.sendStatus(200);
});




app.listen(5000);
