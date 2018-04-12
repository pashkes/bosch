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