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