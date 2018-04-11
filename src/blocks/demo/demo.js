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