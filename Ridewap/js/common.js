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

    /*Wow-init*/
    new WOW().init();
    /*END Wow-init*/
	
	/*Scrolling header*/
	$(window).scroll(function() {
		if($(this).scrollTop() > 100) {
			$('body .js-scrollHeader').addClass("scrolling");
		} else {
			$('body .js-scrollHeader').removeClass("scrolling");
		};
	});
	/*END Scrolling header*/

	/*Active video*/
	$(".js-video").on("click", function() {
		var dataYoutube = $(this).attr("data-youtube");
		$(this).addClass("active");
		$(this).html('<iframe src="https://www.youtube.com/embed/'+ dataYoutube +'?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
	});

	/*Parallax*/
    if ( $(".js-parallax").length ) {
        function parallax() {
            var distanceTop = $(".js-parallax").offset().top;
            var windowHeight = $(window).innerHeight();
            $(window).scroll(function() {
                var st = $(this).scrollTop();
                if ($(window).width() > 768) {
                    if ((st + windowHeight) > distanceTop) {
                        $("body .js-parallax").css({
                                "background-position": "50% " + st /5 + "px"
                        });
                    } else {
                        $("body .js-parallax").css({
                                "background-position": "50%"
                        });
                    };
                }
            }); 
        };
        parallax();
        $(window).resize(function() {
            parallax();
        });
    };
    /*END Parallax*/

    /*Parallax-2*/
    if ( $(".js-parallax-2").length ) {
        function parallax() {
            var distanceTop = $(".js-parallax-2").offset().top;
            var windowHeight = $(window).innerHeight();
            $(window).scroll(function() {
                var st = $(this).scrollTop();
                if ($(window).width() > 768) {
                    if ((st + windowHeight) > distanceTop) {
                        $("body .js-parallax-2").css({
                                "background-position": st /40 + "px " + "50%"
                        });
                    } else {
                        $("body .js-parallax-2").css({
                                "background-position": "50%"
                        });
                    };
                }
            }); 
        };
        parallax();
        $(window).resize(function() {
            parallax();
        });
    };
    /*END Parallax-2*/

	/*END Active video*/

	/*Custom popup*/
	$('body').on('click', '.js-contact-popup', function(e) {
		e.preventDefault();
		$('.b-popup#contact-popup').css("display", "block");
		$("body").addClass('-overflow-active');
	});
	$(document).on('click', '.js-popupClose', function(e) {
		e.preventDefault();
		$(this).parents(".b-popup").css("display", "none");
	});
	$(document).on('click', function(e) {
		var popupCallback = $(".b-popup#contact-popup");
		if( e.target == popupCallback[0] ) {
			$(".b-popup#contact-popup").css("display", "none");
			$("body").removeClass('-overflow-active');
		}
	});

	/*Read More*/
	$(document).click('.js-read-more', function(e) {
		e.preventDefault();
		$(".js-descr-toggle").toggleClass("active");
	});

	// Button Up, Help Button
	$(".btn-up").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
	// Button Up END


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

