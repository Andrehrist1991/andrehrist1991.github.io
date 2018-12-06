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

	/*Table wrap*/
    $("table").wrap("<div class='size-table-wrap'></div>");

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
  if ( $(".js-read-more").length ) {
    $(document).click('.js-read-more', function(e) {
      e.preventDefault();
      $(".js-descr-toggle").toggleClass("active");
    });
  };

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

  /*Custom-filter*/
  // $(document).on('click', '.js-btn-filter', function() {
  //   $(this).toggleClass('active');
  //   var curData = $(this).attr("data-filter");
  //   var activeBtn = $(".js-btn-filter").hasClass("active");
  //   //$(".js-filtering-grid").find(".filtering-row").hide();

  //   //$(".filtering-row").not(curData).hide();
  //   // if ($(".filtering-row").hasClass(curData)) {
  //   //   console.log("You Win!");
  //   // }



  //   function filtering() {
  //     //console.log(curData);
  //     console.log(activeBtn);
  //   };
  //   filtering();
  // });






  // var $grid = $('.grid').isotope({
  //   // options
  // });
  // $('.button-group').on( 'click', 'button', function() {
  //   $(this).toggleClass('active');

  //   var activeBtn = $(".js-btn-filter").hasClass("active");

  //   var result = $(activeBtn).attr('data-filter');

  //   var filterValue = $(this).attr('data-filter');
  //   $grid.isotope({ filter: filterValue });
  //   console.log(result);
  // });


  //работает
  // var $grid = $('.grid').isotope({
  //   // options
  // });
  // $('.button-group').on( 'click', 'button', function() {
  //   $(this).toggleClass('active');
  //   var filterValue = $(this).attr('data-filter');
  //   $grid.isotope({ filter: filterValue });
  // });
  //работает





  /*END Custom-filter*/


    /*Isotope customization*/
    var $grid = $('.grid').isotope({
      itemSelector: '.filtering-row'
    });

    // store filter for each group
    var filters = {};

    $('.filters').on( 'click', '.js-btn-filter', function( event ) {
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

    //Search in vacancy table



    

    // function setDataFind() {
    //   var searchDefine = $(".filtering-row").attr('data-find');
    //   var valololo = $(".filtering-row div:first-child span").html();
    //   for (var i = 0; i < searchDefine.length; i++) {
    //     console.log(searchDefine);
    //   }
      
    // };
    // setDataFind();



    $("#vacancy-search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      var empty = $(".filtering-row div span").css('display') == 'none';
      $(".js-filtering-grid div span").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        

        if ($(".filtering-row div span").css('display') == 'none') {
            $(this).parents(".filtering-row").siblings().css("color", "red");
        };

      });

      // if ($(".filtering-row div span").css('display') == 'none') {
      //   $(this).parents("filtering-row").css("color", "red");
      //   console.log("Fire!");
      // }
    });
    //END Search in vacancy table

    

});



