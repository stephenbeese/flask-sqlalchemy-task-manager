$(document).ready(function () {
  // sidenav initialization
  $('.sidenav').sidenav();
  // datepicker initialization
  $('.datepicker').datepicker({
    format: "dd mmmm, yyyy",
    i18n: {
      done: "Select"
    }
  });
  $('select').formSelect();
  $('.collapsible').collapsible();
});

// $(document).ready(function(){
//   $('.datepicker').datepicker();
// });