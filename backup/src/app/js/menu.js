$(document).ready(function () {
  setTimeout(function() {
    $('body').on('click', '.mobile-menu-button', function (e) {
      $(this).toggleClass('menu-opened');
      $('.sub-menu').slideToggle();
    });

    $(window).resize(function () {
      if($(window).width() > 992) {
        $('.sub-menu').removeAttr( 'style' );
      }
    });

    $(window).scroll(function() {
      var nav = $("#menu");
      var cookiesBarHeight = $('#cookie-bar').height();
      var scroll = $(window).scrollTop();
      if (scroll >= cookiesBarHeight) {
        nav.addClass("fixed");
      } else if (typeof cookiesBarHeight == 'undefined') {
        nav.addClass("fixed");
      } else {
          nav.removeClass("fixed");
      }
    });
	}, 500);	
});
