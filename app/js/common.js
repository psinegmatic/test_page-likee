$(document).ready(function(){
  $(function() {
    $("a").bind('click',function(e) {
        e.preventDefault();
    });
  });
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    responsive:{
        0:{
            items:1
        },
        620:{
            items:13
        },
        1240:{
            items:27
        }
    }
})

