$(document).ready(function(){

var mathOperation = '';

$('.operation').on('click', function() {
  mathOperation = $(this).val();
});


  $('form').on('submit', function(event){
    event.preventDefault();
    var newMathObject = {};
    newMathObject.firstValue = $('#firstValue').val();
    newMathObject.secondValue = $('#secondValue').val();
    newMathObject.operation = mathOperation;

    saveNewCalculation(newMathObject);
    // console.log(newMathObject);
});
    function saveNewCalculation(newestMath) {
      $.ajax({
        type: 'POST',
        url: '/calculator/new',
        data: newestMath, // jquery expects this data property to be an object
        success: function(response){
          console.log(response);
        },
        error: function(response) {
          // $('#firstFishy').text('error, you missed a name!');
        }
      });
    }

    });
// console.log(newMathObject);  this object is empty.  I'll need to send my object from within the above submit function
