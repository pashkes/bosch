
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
		}]
	});
})();
$(function () {
	$('.js-dilers-slider').slick({
		mobileFirst: true,
		dots: true,
		arrows: false,
		infinite: false,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
			{
				breakpoint: 1344,
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
$(function() {
	$('.js-in-complect-photos').slick({
		fade: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000
	});

	$('.js-in-complect-main-slider').slick({
		arrows: false,
		adaptiveHeight: true
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

$(function() {
	$('.js-reviews-slider').slick({
		responsive: [{
			breakpoint: 1343,
			settings: {
				arrows: false,
				dots: true
			}
		}]
	});
});

var advantageSlider = $('.js-advantage-slider');
var advantageSliderSettigs = {
	dots: true,
	arrows: false,
	centerPAdding: '0',
	adaptiveHeight: true,
};

$(window).on('load resize', function () {
	// slickMobile(advantageSlider, advantageSliderSettigs);
});

// включение слайдера на мобильном
function slickMobile (slider, settings) {
	if ($(window).width() > 767) {
		if (slider.hasClass('slick-initialized')) {
			slider.slick('unslick');
		}
		return
	}
	if (!slider.hasClass('slick-initialized')) {
		return slider.slick(settings);
	}
}

$(function() {
	// This will select everything with the class smoothScroll
	// This should prevent problems with carousel, scrollspy, etc...
	$('.js-go-order').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000); // The number here represents the speed of the scroll in milliseconds
				return false;
			}
		}
	});
});