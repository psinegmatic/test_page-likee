$(document).ready(function(){
  $('.bxslider').bxSlider({
    slideWidth: 62,
    minSlides: 2,
    maxSlides: 60,
    slideMargin: 0,
    pager: false,
    controls: false
  });
});

$(function() {
    $("a").bind('click',function(e) {
        e.preventDefault();
    });
});