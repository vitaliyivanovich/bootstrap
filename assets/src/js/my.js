//Настройки по выводу слайдов в зависимости от разрешения экрана
$('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });



  $('.students_feedback_slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: true,
    cssEase: 'linear'
  });
  $('.mentors_slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 10000
  });

$('.menu_button').on('click',function(){
  $('.mobile_menu').toggleClass('shown');
});

$(window).resize(function() {
  if ($(window).width() > 900 ) {
    $('.mobile_menu').removeClass("shown");
  }
});