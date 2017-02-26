var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

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
  res.send(solution.toString());
});


app.listen(5000);
