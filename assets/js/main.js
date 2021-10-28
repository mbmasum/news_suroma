$(".style-slider").slick({
    prevArrow: '<i class="fas fa-chevron-left prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right next"></i>',
    slidesToShow: 5,
    autoplay: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            autoplay: true,
            vertical: false,
            prevArrow: '<i class="fas fa-chevron-left prev"></i>',
            nextArrow: '<i class="fas fa-chevron-right next"></i>',
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            vertical: false,
            prevArrow: '<i class="fas fa-chevron-left prev"></i>',
            nextArrow: '<i class="fas fa-chevron-right next"></i>',
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            prevArrow: '<i class="fas fa-chevron-left prev"></i>',
            nextArrow: '<i class="fas fa-chevron-right next"></i>',
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})


$( ".datepicker" ).datepicker({
    changeMonth: true,
    changeYear: true,
});


$(".latest_news").click(function(){
  $(".scroll_background").fadeToggle()
})

$(".favorite_news").click(function(){
  $(".scroll_background_2").fadeToggle()
})

$(function(){

    $(".back-top-btn").on("click",function(){
        $("html,body").animate({
            scrollTop: 0
        },2000)
    })

    $(window).on("scroll",function(){
        

        if($(window).scrollTop() > 400){
            $(".back-top-btn").fadeIn()
        }else{
            $(".back-top-btn").fadeOut()
        }
    })


   
})