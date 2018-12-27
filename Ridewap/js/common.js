$(window).on('load', function () {
    $(".page-preloader").delay(350).fadeOut('slow');
});
$(document).ready(function() {

	var swiper = new Swiper('.js-reviews-slider', {
	    slidesPerView: 3,
	    spaceBetween: 30,
	    grabCursor: true,
	    navigation: {
	      nextEl: '.js-rev-next',
	      prevEl: '.js-rev-prev',
	    },
	    breakpoints: {
	      576: {
	        slidesPerView: 1
	      },
	      992: {
	        slidesPerView: 2,
	        spaceBetween: 20
	      }
	    }
	  });
  
  var swiper = new Swiper('.js-news-slider', {
    slidesPerView: 3,
    spaceBetween: 0,
    grabCursor: true,
    navigation: {
      nextEl: '.js-rev-next',
      prevEl: '.js-rev-prev',
    },
    breakpoints: {
      600: {
        slidesPerView: 1
      },
      1200: {
        slidesPerView: 2,
      }
    }
  });

	/*Table wrap*/
    $("table, .vacancy-table").wrap("<div class='size-table-wrap'></div>");

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
                if ($(window).width() > 1200) {
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

	// Button Up, Help Button
	$(".btn-up").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
	// Button Up END

  //Arrow-down
  if ( $(".arrow-down").length ) {
  	if ($(window).width() > 576) {
  		$(".arrow-down").click(function() {
	      var winHeight = $(window).innerHeight();
	      $("html, body").animate({ scrollTop: winHeight }, "slow");
	      return false;
	      
	    });
	    $(window).scroll(function() {
	      if ( $(window).scrollTop() > 200 ) {
	        $(".arrow-down").hide("slow");
	      } else {
	        $(".arrow-down").show("slow");
	      }
	    });
  	}
  };
  //END Arrow-down


	/*Mobile menu*/
	$('.js-menuToggle').click(function(e){
		e.preventDefault();
		$(this).toggleClass('-is-active');
		$('.page_wrapper').toggleClass('-style_fixed');
		$('body').toggleClass('-style_fixed');
		$('.header__right').toggleClass('-is-active');
	});
	/*End Mobile menu*/

  // Search in vacancy table
  function vacancySearch() {
    $("#vacancy-search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
        $(".js-filtering-grid .filtering-row").filter(function() {
        $(this).toggle($(this).find("div:first-child").text().toLowerCase().indexOf(value) > -1);
      });
    });
  }
  vacancySearch();
  //END Search in vacancy table


  //Vacancy add class
  // function vacAddClass() {
  //   $.expr[":"].exact = $.expr.createPseudo(function(arg) {
  //     return function(element) {
  //       return $(element).text() === arg.trim();
  //     }
  //   });
  //   $(".type:exact('Водитель')").parents(".filtering-row").addClass("driver");
  //   $(".type:exact('Швея')").parents(".filtering-row").addClass("bom-bom");
  // }
  // vacAddClass();
  //END Vacancy add class


    /*Isotope customization*/
    var $grid = $('.grid').isotope({
      itemSelector: '.filtering-row',
      transitionDuration: 0
    });

    // store filter for each group
    var filters = {};

    $('.filters').on( 'click', '.js-btn-filter', function( event ) {
      vacancySearch();
      var $button = $( event.currentTarget );
      // get group key
      var $buttonGroup = $button.parents('.button-group');
      var filterGroup = $buttonGroup.attr('data-filter-group');
      // set filter for group
      filters[ filterGroup ] = $button.attr('data-filter');
      // combine filters
      var filterValue = concatValues( filters );
      // set filter for Isotope
      $grid.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function( event ) {
        $buttonGroup.find('.active').removeClass('active');
        var $button = $( event.currentTarget );
        $button.addClass('active');
      });
    });
      
    // flatten object by concatting values
    function concatValues( obj ) {
      var value = '';
      for ( var prop in obj ) {
        value += obj[ prop ];
      }
      return value;
    }

    /*END Isotope customization*/
});



