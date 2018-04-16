(function () {
  $('.js-sticky-header').stick_in_parent({
    parent: $('body'),
    sticky_class: 'show'
  });
})();
document.addEventListener('DOMContentLoaded', function () {
	var trigger = new ScrollTrigger({
		toggle: {
			visible: 'visible',
			hidden: 'hidden-s'
		},
		offset: {
			x: 0,
			y: 0
		},
		once: true
	}, document.body, window);
	var player;
	var scope = {};
	trigger.callScope = scope;
	scope.playVideoReview = function () {
		onYouTubeIframeAPIReady();
		videoReviewMute();
	};
	scope.stopVideoReview = function () {
		stopVideo();
	};


	function onYouTubeIframeAPIReady () {
		player = new YT.Player('video-review', {
			height: '390',
			width: '640',
			videoId: $('#video-review').data('url'),
			events: {
				'onReady': onPlayerReady
			}
		});
	}

	var videoReviewMute = function () {
		player.mute();
	};

	function stopVideo () {
		player.stopVideo();
		console.log('tes');
	}

	function onPlayerReadyPromo (event) {
		event.target.playVideo();
	}

	var playerPromoVideo;

	function onYouTubeIframeAPIReadyPromo () {
		playerPromoVideo = new YT.Player('promo-video-player', {
			height: '390',
			width: '640',
			controls: false,
			videoId: $('#video-review').data('url'),
			events: {
				'onReady': onPlayerReadyPromo
			}
		});
	}

	function onPlayerReady (event) {
		event.target.playVideo();
	}

	function stopVideoPromo () {
		playerPromoVideo.stopVideo();
	}

	$('.promo__btn').click(function () {
		onYouTubeIframeAPIReadyPromo();
	});
	$('.js-promo-video-close').click(function () {
		stopVideoPromo();
	});
});
(function () {
	var rellax = new Rellax('.rellax');
})();