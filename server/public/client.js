$(document).ready(function(){

  var mathOperation = '';

  $('.operation').on('click', function() {
    mathOperation = $(this).val();
  });

  $('.clear').on('click', function(){
    $('#answerDisplay').empty();
  });

  $('form').on('submit', function(event){
    event.preventDefault();
    var newMathObject = {};
    newMathObject.firstValue = $('#firstValue').val();
    newMathObject.secondValue = $('#secondValue').val();
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
        $('#answerDisplay').append(response);
      },
      error: function(response) {
        $('#answerDisplay').append('something broke');
      }
    });
  }
});
