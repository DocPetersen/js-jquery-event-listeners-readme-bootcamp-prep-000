$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
  
});

function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $(this).addClass('tasty')
  })
}

function pressIt() {
  $(document).on('keydown', function(key) {
  if(key.which == 71){
      alert('G was pressed');
  }
});
}