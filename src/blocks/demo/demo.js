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