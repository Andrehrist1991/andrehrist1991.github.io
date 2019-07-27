$(window).on('load', function () {
    $(".preloader").delay(350).fadeOut('slow');
});

$(document).ready(function () {
	// Definition of browser
	if (bowser.mac){
		$("html").addClass("mac-os");
	}

	if (bowser.windows){
		$("html").addClass("win-os");
	}

	if (bowser.safari){
		$("html").addClass("safari");
	}

	if (bowser.chrome){
		$("html").addClass("chrome");
	}

	if (bowser.msie){
		$("html").addClass("int-expl");
	}

	if (bowser.gecko){
		$("html").addClass("mozz");
	}

	// detect Edge
	if (/Edge/.test(navigator.userAgent)) {
		//alert('Hello Microsoft User!');
		$("html").addClass("edge");
	}
	// Definition of browser END

	$(".preloader").delay(20).fadeOut();

	// Bootstrap Modal
	$('.modal').modal({
		show: false
	});

	var RUSH = {} || RUSH;

	// Button Up, Help Button
	$(".btn-top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	$(window).scroll(function(){
		if ( $(document).scrollTop() > 200 ) {
			$('.btn-top').fadeIn('fast');
			$('.btn-top').addClass('on');
			$('.main-head__top').addClass('scrolling');
		} else {
			$('.btn-top').fadeOut('fast');
			$('.btn-top').removeClass('on');
			$('.main-head__top').removeClass('scrolling');
		}
	});
	// Button Up END



	// Toggle menu
	RUSH.togglemenu = {
		button: $(".toggle-btn"),
		menu: $(".js-mobile-menu"),
		show: function() {
			RUSH.togglemenu.button.click(function() {
				try {
					if ($(this).hasClass("on")) {
						$(this).removeClass("on");
						RUSH.togglemenu.menu.removeClass("open");
						$("body").removeClass("mnu-open");
					} else {
						$(this).addClass("on");
						RUSH.togglemenu.menu.addClass("open");
						$("body").addClass("mnu-open");
					}
				} catch(error) {
					console.log("Error in toggle menu");
				}
			});
		}
	}
	RUSH.togglemenu.show();

	RUSH.teamslider = {
		container: $('.js-teamSlider'),
		init: function() {
			RUSH.teamslider.container.each(function() {
				if ($(this).find('.swiper-wrapper .swiper-slide').length > 1) {
					setTimeout(function() {
						var teamSlider = new Swiper(RUSH.teamslider.container, {
					      	slidesPerView: 3,
					      	spaceBetween: 100,
					      	speed: 800,
					      	grabCursor: true,
					      	autoplay: {
							   delay: 5000,
							},
							breakpoints: {
						        1200: {
						          spaceBetween: 20,
						        },
						        992: {
						          spaceBetween: 50,
						          slidesPerView: 2,
						        },
								768: {
						          spaceBetween: 15,
						          slidesPerView: 2,
						        },
						        480: {
						          slidesPerView: 1,
						        }
						    }
					    });
					    RUSH.teamslider.container.on('mouseenter', function() {
							teamSlider.autoplay.stop();
						});
					}, 15);
					
				}
			});
		}
	}
	RUSH.teamslider.init();


	RUSH.reviews = {
		container: $('.js-reviewsSlider'),
		init: function() {
			RUSH.reviews.container.each(function() {
				if ($(this).find('.swiper-wrapper .swiper-slide').length > 1) {
					setTimeout(function() {
						var reviewsSlider = new Swiper(RUSH.reviews.container, {
							effect: 'flip',
					      	speed: 800,
					      	grabCursor: true,
					      	navigation: {
								nextEl: '.js-reviewsSlider .swiper-button-next',
								prevEl: '.js-reviewsSlider .swiper-button-prev',
					      	},
					      	autoplay: {
							   delay: 5000,
							},
					    });
					    RUSH.reviews.container.on('mouseenter', function() {
							reviewsSlider.autoplay.stop();
						});
					}, 15);
					
				}
			});
		}
	}
	RUSH.reviews.init();

	RUSH.validation = {
		init: function() {
		  try {
		  	'use strict';
			  window.addEventListener('load', function() {
			    var forms = document.getElementsByClassName('needs-validation');
			    var validation = Array.prototype.filter.call(forms, function(form) {
			      form.addEventListener('submit', function(event) {
			        if (form.checkValidity() === false) {
			          event.preventDefault();
			          event.stopPropagation();
			        }
			        form.classList.add('was-validated');
			      }, false);
			    });
			  }, false);
		  } catch(error) {
		  	console.log("Error in bootstrap validation");
		  }
		}
	}
	RUSH.validation.init();

});
// Document ready END