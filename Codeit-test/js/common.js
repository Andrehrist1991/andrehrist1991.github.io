$(window).on('load', function () {
    $(".page-preloader").delay(350).fadeOut('slow');
});
$(document).ready(function() {
	//Calls
	showTopSearch();
	removeProduct();
	clearWishlist();
	featuresSlider();
	formValidation();
	parallax();
	scrollingHeader();
	fixDropdown();
	mobileMenu();
});

/*Show/hide search*/
function showTopSearch() {
	$( ".js-activationSearch" ).click(function(e) {
		e.preventDefault();
		$(this).toggleClass('-is-active');
    	$( ".b-pageSearch" ).toggleClass( "-style-activeSearch" );
    	if ($(window).width() < 1200 && $(window).width() > 992) {
			if ($( ".b-pageSearch.-in-header" ).hasClass( "-style-activeSearch" )) {
				$( ".price-notification" ).addClass( "-style-hidden" );
			} else {
				$( ".price-notification" ).removeClass( "-style-hidden" );
			}
		};
	});
	function checkStatusSearch() {
		$(window).on("resize", function() {
			if ($(window).width() < 1200 && $( ".b-pageSearch.-in-header" ).hasClass( "-style-activeSearch" )) {
				$( ".price-notification" ).addClass( "-style-hidden" );
			} else {
				$( ".price-notification" ).removeClass( "-style-hidden" );
			}
		});
	}
	checkStatusSearch();
};
/*End Show/hide search*/

/*Dropdown fix*/
function fixDropdown() {
	$('body').on('click', '.js-mainMenu .dropdown', function(e) {
		e.preventDefault();
	});
};
/*END Dropdown fix*/

/*Remove product*/
function removeProduct() {
	$('body').on("click", ".js-removeProduct", function(e) {
		e.preventDefault();
		$(this).parents('.price-item__wrapper').addClass('-is-removeSlow');
		setTimeout(function(){
			$('.-is-removeSlow').addClass("-is-delete");
		}, 300);
	});
};
/*END Remove product*/

/*Clear wishlist*/
function clearWishlist() {
	$('body').on('click', ".js-clearWishlist", function(e) {
		e.preventDefault();
		$('.price-item__wrapper').addClass('-is-removeSlow');
		$('.js-wishlistPagination').fadeOut();
		setTimeout(function(){
			$('.-is-removeSlow').addClass("-is-delete");
		}, 300);
	});
};
/*End Clear wishlist*/

/*Features-slider*/
function featuresSlider() {
	if ($("body .js-featuresSlider").length) {
		var mainSwiper = new Swiper('.js-featuresSlider', {
		 	slidesPerView: 4,
	     	speed: 1000,
	     	loop: true,
	     	autoplay: {
	        	delay: 3000,
      		},
			breakpoints: {
			    1200: {
				    slidesPerView: 3,
				},
				992: {
				    slidesPerView: 2,
				},
				768: {
				    slidesPerView: 1,
				},
			},
		});
	}
}
/*END Features-slider*/

/*Validation contact form*/
function formValidation() {
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
};
/*END Validation contact form*/

/*Parallax*/
function parallax() {
	$(window).scroll(function() {
		var st = $(this).scrollTop();
		$("body .js-parallax").css({
			"background-position": "50% " + st /2 + "px"
		});
	});
};
/*END Parallax*/

/*Scrolling header*/
function scrollingHeader() {
	$(window).scroll(function() {
		if($(this).scrollTop() > 100) {
			$('body .js-scrollHeader').addClass("-style-fixed");
		} else {
			$('body .js-scrollHeader').removeClass("-style-fixed");
		};
	});
};
/*END Scrolling header*/


/*Mobile menu*/
function mobileMenu() {
	$('body').on('click', '.js-menuToggle', function(e){
		e.preventDefault();
		$(this).toggleClass('-is-active');
		$('body').toggleClass('-style_fixed');
		$('.js-mainMenu').toggleClass('-is-active');
	});
}
/*End Mobile menu*/

