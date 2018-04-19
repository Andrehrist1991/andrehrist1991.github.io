$(window).on('load', function () {
    $(".page-preloader").delay(350).fadeOut('slow');
    //animations init
	new WOW().init();
});
$(document).ready(function() {
	//Calls
	formValidation();
	parallax();
	counter();
	gallerySlider();
	scrollingHeader();
	scrollToAnchor();
	mobileMenu();
});

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
		$("body .features-section__bg").css({
			"background-position": "50% " + st /5 + "px"
		});
	});
};
/*END Parallax*/

/*Counter Up*/
function counter() {
	$('.js-counter').counterUp({
        delay: 10,
        time: 1000
    });
};
/*END Counter Up*/

/*Gallery slider*/
function gallerySlider() {
 	$('.js-gallery-top').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  infinite: false,
	  asNavFor: '.js-gallery-thumbs'
	});
	$('.js-gallery-thumbs').slick({
	  slidesToShow: 7,
	  slidesToScroll: 1,
	  asNavFor: '.js-gallery-top',
	  centerMode: false,
	  infinite: false,
	  arrows: false,
	  focusOnSelect: true
	});
};
/*END Gallery slider*/

/*Scrolling header*/
function scrollingHeader() {
	$(window).scroll(function() {
		if($(this).scrollTop() > 200) {
			$('body .js-scrollHeader').addClass("-style-fixed");
		} else {
			$('body .js-scrollHeader').removeClass("-style-fixed");
		};
	});
};
/*END Scrolling header*/

/*Scrolling to anchors*/
function scrollToAnchor() {
	$("body .js-mainMenu li a").click(function(e) {
		var headerHeight = $(".js-scrollHeader").innerHeight() - 6;
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - headerHeight}, 700);
        //For mobile menu
        if ($("body .js-mainMenu").hasClass('-is-active')) {
        	$('body').removeClass('-style_fixed');
		    $('.js-mainMenu').removeClass('-is-active');
		    $('.js-menuToggle').removeClass('-is-active');
	    }
    });
}
/*END Scrolling to anchors*/

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

