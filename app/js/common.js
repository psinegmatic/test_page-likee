$(document).ready(function(){
  $('.bxslider-one').bxSlider({
    slideWidth: 62,
    minSlides: 2,
    maxSlides: 40,
    slideMargin: 0,
    pager: false,
    controls: false
  });
  
  $(function() {
    $("a").bind('click',function(e) {
        e.preventDefault();
    });
  });
});

