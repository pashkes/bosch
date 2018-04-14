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
		swipe: false,
		touchMove: false,
		responsive: [{
			breakpoint: 1343,
			settings: {
				adaptiveHeight: true
			}
		}]
	});

	$(".js-toggle-slide").click(function(e){
		e.preventDefault();
		slideIndex = $(this).index();
		$( '.js-in-complect-main-slider' ).slick('slickGoTo', ( parseInt(slideIndex)) );
		if (!$(this).hasClass('btn--violet-fill')) {
			$(".js-toggle-slide").removeClass('btn--violet-fill');
			$(this).addClass('btn--violet-fill');
		} else {
			return false;
		}
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
(function () {
  $('.js-sticky-header').stick_in_parent({
    parent: $('body'),
    sticky_class: 'show'
  });
})();