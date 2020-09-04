
$('.slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
  ]
});

$('#nav-icon3').on('click', function () {
  $('header .container .navbar nav').toggleClass('shown');
  $('header .nav_container').toggleClass('black');
  $(this).toggleClass('open');
});

$(window).resize(function () {
  if ($(window).width() > 991) {
    $('header .container .navbar nav').removeClass('shown');
    $('header .nav_container').removeClass('black');
    $('#nav-icon3').removeClass('open');
  }
});

$('header .container .navbar nav ul li a').click(function () {
  if ($(window).width() < 991) {
    $('header .container .navbar nav').removeClass('shown');
    $('header .nav_container').removeClass('black');
    $('#nav-icon3').removeClass('open');
  }
});
