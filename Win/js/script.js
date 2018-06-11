$(document).ready(function() {

	mainSlider();

	function mainSlider() {
		var mySwiper = new Swiper('.js-mainSlider', {
		    speed: 4000,
		    spaceBetween: 100,
		    autoplay: {
			   delay: 5000,
			},
			pagination: {
		       el: '.main-slider__pagination',
		       clickable: true,
		    },
			effect: 'fade',
		    grabCursor: true,
		});
	};

});