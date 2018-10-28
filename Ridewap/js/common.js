$(window).on('load', function () {
    // $(".page-preloader").delay(350).fadeOut('slow');
});
$(document).ready(function() {

	var swiper = new Swiper('.js-reviews-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
	
	/*Scrolling header*/
	// function scrollingHeader() {
	// 	$(window).scroll(function() {
	// 		if($(this).scrollTop() > 100) {
	// 			$('body .js-scrollHeader').addClass("-style-fixed");
	// 		} else {
	// 			$('body .js-scrollHeader').removeClass("-style-fixed");
	// 		};
	// 	});
	// };
	/*END Scrolling header*/


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

