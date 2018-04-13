// .about-company scripts goes here 

/*$(function() {
	
});*/

(function () {
	$('.js-demo-slider').slick({
		arrows: false,
		dots: true,
		mobileFirst: true,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
			{
				breakpoint: 1343,
				settings: {
					rows: 2,
					slidesToShow: 2,
					dots: false
				}
			}]
	});
})();
$(function () {
	$('.js-dilers-slider').slick({
		mobileFirst: true,
		dots: true,
		arrows: false,
		infinite: false,
		appendDots: $('.dilers__dots'),
		responsive: [{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
			{
				breakpoint: 1343,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			}
		]
	});
});

// .features-nore scripts goes here 

/*$(function() {
	
});*/
// .footer scripts goes here 

/*$(function() {
	
});*/
$(function () {
	$('.js-in-complect-photos').slick({
		fade: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000
	});

	$('.js-in-complect-main-slider').slick({
		arrows: false,
		responsive: [{
			breakpoint: 1343,
			settings: {
				adaptiveHeight: true
			}
		}]
	});
});
$(function() {
	$('.js-performance-slider-mobile').slick({
		dots: true,
		slidesToShow: 2,
		infinite: false,
		arrows: false,
		responsive: [{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				dots: true,
				infinite: false
			}
		}]
	});
});
// .promo scripts goes here 

/*$(function() {
	
});*/
// .promo-video scripts goes here 

/*$(function() {
	
});*/

$(function() {
	$('.js-reviews-slider').slick({
		prevArrow: $('.js-slider-arrow-prev'),
		nextArrow: $('.js-slider-arrow-next'),
		responsive: [{
			breakpoint: 1343,
			settings: {
				arrows: false,
				dots: true
			}
		}]
	});
});
// var header = $('.promo__header');
// var headerHeight;
// $(window).on('load resize', function () {
// 	headerHeight = header.height() + 16;
// });
// $(window).scroll(function(){
// 	if ($(window).scrollTop() >= 16) {
// 		$('.promo__header').addClass('sticky');
// 		$('body').css('margin-top', headerHeight);.promo__hand img
// 	}
// 	else {
// 		$('.promo__header').removeClass('sticky');
// 		$('body').css('margin-top', 0);
// 	}
// });
(function () {
  $('.js-sticky-header').stick_in_parent({
    parent: $('body'),
    sticky_class: 'show'
  });
})();