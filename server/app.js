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
  var x = parseFloat(newCalc.firstValue);
  var y = parseFloat(newCalc.secondValue);
  if (newCalc.operation == '+') {
    var solution = x + y;
  } else if (newCalc.operation == '-') {
    var solution = x - y;
  } else if (newCalc.operation == '*') {
    var solution = x*y;
  } else if (newCalc.operation == '/') {
    var solution = x/y;
  }
  console.log(solution);
  // res.sendStatus(200);
});




app.listen(5000);
