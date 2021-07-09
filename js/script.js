$(".navbar-header .navbar-toggle").click(function() {
 // $('header').removeClass();
 $('header .container-fluid, .navbar-header .navbar-toggle .icon-bar').toggleClass('active');
});
$(document).ready(function(){
	$('.slider-main').slick({
		speed: 500,
		fade: true,
		easing: 'linear',
		autoplay: true,
	});
});

$(document).ready(function(){
	$('.fleet__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
      	infinite: true,
      	autoplay: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
      }
    }
    ]
	});
});
$(document).ready(function(){
	$('.aboutUs__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
      	autoplay: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
      }
    }
    ]
	});
});