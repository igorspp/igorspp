$(function() {
  $('.menu-right a[href$="/' + location.pathname.split("/")[2] + '"]').addClass('selected');
});
