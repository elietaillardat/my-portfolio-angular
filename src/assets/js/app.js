$(document).ready(function() {
  "use strict";

  var headerOffset;

  $('a.scroll').click(function() {
    var id = $(this).attr("link");
    $('html, body').animate({scrollTop: $(id).offset().top - headerOffset}, 800);
	});

  var onResize = function() {
    if (!$('#sub-nav').hasClass('hidden')) headerOffset = $('nav').outerHeight() + $('#sub-nav').outerHeight();
    else headerOffset = $('nav').outerHeight();
    $('body').css('padding-top', headerOffset);
  };
  
  $(window).resize(onResize);
  $(window).click(onResize);
  $('html').css('overflow-y', 'scroll');
  onResize();
});
