$(document).ready(function(){
var newMathObject = {};
// var mathOperation = '';

$('button').on('click', function() {
  var mathOperation = $('.operation').val();
  return mathOperation;
});


  $('form').on('submit', function(event){
    event.preventDefault();
    // var newMathObject = {};
    // var mathOperation = '';

    newMathObject.firstValue = $('#firstValue').val();
    newMathObject.secondValue = $('#secondValue').val();
    newMathObject.operation = mathOperation;

    console.log(newMathObject);
  });
// console.log(newMathObject);

});
