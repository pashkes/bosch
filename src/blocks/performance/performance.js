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