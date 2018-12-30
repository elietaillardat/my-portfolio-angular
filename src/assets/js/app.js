$(document).ready(function() {
  "use strict";

  var headerOffset;

  $('a.scroll').click(function() {
    var id = $(this).attr("link");
    $('html, body').animate({scrollTop: $(id).offset().top - headerOffset}, 800);
  });
  
  $(window).scroll(function() {
    $('.gallery').show();
  });

  $(".nav-link").click(function() {
    $(".nav-link").each(function() {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
  });

  $("#skills").hover(function() {
    $(".nav-link").each(function() {
      $(this).removeClass("active");
    });
    $(".nav-link[link='#skills']").addClass("active");
  });

  var onResize = function() {
    if (!$('#sub-nav').hasClass('hidden')) headerOffset = $('nav').outerHeight() + $('#sub-nav').outerHeight();
    else if (!$('#sub-nav-iss').hasClass('hidden')) headerOffset = $('nav').outerHeight() + $('#sub-nav-iss').outerHeight();
    else headerOffset = $('nav').outerHeight();
    $('body').css('padding-top', headerOffset);
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
