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