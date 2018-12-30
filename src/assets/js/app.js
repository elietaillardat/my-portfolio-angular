$(function() {
  "use strict";

  var headerOffset;

  $('a.scroll').click(function() {
    var id = $(this).attr("link");
    $('html, body').animate({scrollTop: $(id).offset().top - headerOffset}, 800);
  });
  
  $(window).scroll(function() {
    $('.gallery').show();
  });

  $("a.sub-nav-link").click(function() {
    $("a.sub-nav-link").each(function() {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
  });

  var onResize = function() {
    if (!$('#sub-nav').hasClass('hidden')) headerOffset = $('nav').outerHeight() + $('#sub-nav').outerHeight();
    else if (!$('#sub-nav-iss').hasClass('hidden')) headerOffset = $('nav').outerHeight() + $('#sub-nav-iss').outerHeight();
    else headerOffset = $('nav').outerHeight();
    $('body').css('padding-top', headerOffset);

    $('section').hover(function() {
      $("a.sub-nav-link").each(function() {
        $(this).removeClass("active");
      });
      $("a.nav-link[link='#" + $(this).attr('id') + "']").addClass("active");
    });
  };
  
  $('#navbarToggler').on('hidden.bs.collapse', function () {
    onResize();
  });
  $(window).resize(onResize);
  $(window).click(onResize);
  window.onhashchange = function() {
    onResize();
  }
  $('html').css('overflow-y', 'scroll');
  onResize();
});