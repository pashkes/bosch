
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