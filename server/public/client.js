$(document).ready(function(){

  var mathOperation = '';
  var firstInput = '';
  var secondInput = '';


  $('.numerical').on('click', function(){
    firstInput += $(this).val();
    $('.calculatorInput').val(firstInput);
  });

  $('.operation').on('click', function() {
    mathOperation = $(this).val();
    $('.numerical').off( 'click');
    $('.numerical').on('click', function(){
      $('.calculatorInput').empty();
      secondInput += $(this).val();
      $('.calculatorInput').val(secondInput);
    });
  });

  $('#allClear').on('click', function(){
    myFunction();
  });

  $('#equals').on('click', function(){
    // event.preventDefault();
    var newMathObject = {};
    newMathObject.firstValue = firstInput;
    newMathObject.secondValue = secondInput;
    newMathObject.operation = mathOperation;
    saveNewCalculation(newMathObject);
  });

  function saveNewCalculation(newestMath) {
    $.ajax({
      type: 'POST',
      url: '/calculator/new',
      data: newestMath,
      success: function(response){
        console.log(response);
        $('.calculatorInput').val(response);
      },
      error: function(response) {
        $('.calculatorInput').val('something broke');
      }
    });
  }
});

function myFunction() {
  location.reload();
}
