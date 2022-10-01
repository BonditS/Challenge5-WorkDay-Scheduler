
$(document).ready(function () {
    $('#currentDay').text(mometn().format('MMMM Do YYYY, h:mm:ss a'));
    $('.btn').on('click', function(){

        var taskTodo = $(this).sibling('.description').val();
        var time = $(this).parent().attr('id');

        localStorage.setItem(time, taskTodo);
    })
  })

  // retreive data from browser storage

  $('#hour8 .description').val(localStorage.getItem('hour8'))
  $('#hour9 .description').val(localStorage.getItem('hour9'))
  $('#hour10 .description').val(localStorage.getItem('hour10'))
  $('#hour11 .description').val(localStorage.getItem('hour11'))
  $('#hour12 .description').val(localStorage.getItem('hour12'))
  $('#hour13 .description').val(localStorage.getItem('hour13'))
  $('#hour14 .description').val(localStorage.getItem('hour14'))
  $('#hour15 .description').val(localStorage.getItem('hour15'))
  $('#hour16 .description').val(localStorage.getItem('hour16'))
  $('#hour17 .description').val(localStorage.getItem('hour17'))

  // timeblock function

  function timeBlock() {

    // set current hour parameter
    
  }