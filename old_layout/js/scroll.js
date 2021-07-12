$(function() {
  var header = $(".header");
  var menu = $(".menu");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        header.removeClass('header').addClass("header-alt");
        menu.removeClass('menu').addClass("menu-alt");
    }
    if (10 < scroll && scroll < 50) {
        header.removeClass('header-alt').addClass("header");
        menu.removeClass('menu-alt').addClass("menu");
    }
  });
});
