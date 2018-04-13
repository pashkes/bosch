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