var header = $('.promo__header');
var headerHeight;
$(window).on('load resize', function () {
	headerHeight = header.height() + 16;
});
$(window).scroll(function(){
	if ($(window).scrollTop() >= 16) {
		$('.promo__header').addClass('sticky');
		$('body').css('margin-top', headerHeight);
	}
	else {
		$('.promo__header').removeClass('sticky');
		$('body').css('margin-top', 0);
	}
});