$(function() {
  $('.menu-right a[href$="/' + location.pathname.split("/")[1] + '"]').addClass('selected');
});
