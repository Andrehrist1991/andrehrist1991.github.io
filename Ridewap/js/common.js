$(window).on('load', function () {
    // $(".page-preloader").delay(350).fadeOut('slow');
});
$(document).ready(function() {

	var swiper = new Swiper('.js-reviews-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      grabCursor: true,
      navigation: {
        nextEl: '.rev-next',
        prevEl: '.rev-prev',
      },
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
    });
	
	/*Scrolling header*/
	$(window).scroll(function() {
		if($(this).scrollTop() > 100) {
			$('body .js-scrollHeader').addClass("scrolling");
		} else {
			$('body .js-scrollHeader').removeClass("scrolling");
		};
	});
	/*END Scrolling header*/

	/*Custom popup*/
	$('body').on('click', '.js-video-popup', function(e) {
		e.preventDefault();
		$('.b-popup#video-popup').css("display", "block");
		$("body").addClass('-overflow-active');
	});
	$(document).on('click', '.js-popupClose', function(e) {
		e.preventDefault();
		$(this).parents(".b-popup").css("display", "none");
	});
	$(document).on('click', function(e) {
		var popupCallback = $(".b-popup#video-popup");
		if( e.target == popupCallback[0] ) {
			$(".b-popup#video-popup").css("display", "none");
			$("body").removeClass('-overflow-active');
		}
	});


	/*Mobile menu*/
	// function mobileMenu() {
	// 	$('body').on('click', '.js-menuToggle', function(e){
	// 		e.preventDefault();
	// 		$(this).toggleClass('-is-active');
	// 		$('body').toggleClass('-style_fixed');
	// 		$('.js-mainMenu').toggleClass('-is-active');
	// 	});
	// }
	/*End Mobile menu*/

});

