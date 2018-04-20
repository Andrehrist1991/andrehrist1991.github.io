$(document).ready(function() {
	showTopSearch();
	customSelect();
	productSlider();
	currentImage();
	correctDropdown();
	pageTabs();
	sidebarMenu();
	popupCall();
	mobileMenu();
});

/*Show/hide search*/
function showTopSearch() {
	$( ".js-activationSearch" ).click(function(e) {
	e.preventDefault();
    $( ".topBar_right__search" ).toggleClass( "-style-activeSearch" );
	});
}
/*End Show/hide search*/

/*Custom select*/
function customSelect() {
	var firstItem = $('.js-choiseItem > li:nth-child(1) > a').text();
	$('.js-currentItem').text(firstItem);
	jQuery('body').on('click', '.js-choiseItem a', function(e) {
		e.preventDefault();
		$('.js-currentItem').text($(this).text());
	});
};
/*End Custom select*/

/*Product slider*/
function productSlider() {
	var mainSwiper = new Swiper('.js-productSlider', {
	 	slidesPerView: 7,
     	spaceBetween: 5,
      	freeMode: true,
      	direction: 'vertical',
      	navigation: {
			nextEl: '.-js-productSlider-next',
			prevEl: '.-js-productSlider-prev',
		},
		breakpoints: {
		    650: {
			    direction: 'horizontal',
			},
			550: {
			    slidesPerView: 4,
			    direction: 'horizontal',
			},
		},
	});
}
/*END roduct slider*/

/*Current image in product*/
function currentImage() {
	var firstImage = $(".js-currentImageSelect .product-slider__item:nth-child(1) a").css("background-image");
	$('.js-currentImage').css("background-image", firstImage);
	$('body').on('click', '.js-currentImageSelect .product-slider__item a', function(e) {
		e.preventDefault();
		$(e.target).addClass("-is-active");
		$(e.target).parent().siblings().find('a').removeClass("-is-active");
		var currentUrl = $(e.target).css("background-image");
		$('.js-currentImage').css("background-image", currentUrl);
	});
};
/*END Current image in product*/

/*Dropdowns correction*/
function correctDropdown() {
	$('body').on('click', '.-dropdown', function(e) {
		e.preventDefault();
	})
};
/*END Dropdowns correction*/

/*Tabs*/
function pageTabs() {
	$('body').on('click', '.js-tabLinks a', function(e){
	    e.preventDefault();
		var tabIndex = $(this).parent().index();
		$(this).parent().siblings().removeClass('-is-active');
		$(this).parent().addClass('-is-active');
		$(this).parents('.b-tabs').find('.b-tabs__content-wrapper').children().eq(tabIndex).siblings().removeClass('-in-active-tab');
		$(this).parents('.b-tabs').find('.b-tabs__content-wrapper').children().eq(tabIndex).addClass('-in-active-tab');
	});
};
/*END Tabs*/

/*Sidebar menu*/
$('body .js-openSubMenu li a').next().slideUp();
function sidebarMenu() {
	$('body').on('click', '.js-openSubMenu li a', function(e) {
		$( this ).toggleClass( "-is-active" );
		e.preventDefault();
		$( this ).next("ul").toggle(function() {
		  $(this).next("ul").slideDown();
		}, function() {
		  $( this ).next("ul").slideUp();
		});
	});
};
/*End Sidebar menu*/

/*Popups calls*/
function popupCall() {
	$('body').on('click', '.js-callBackPopup', function(e) {
		e.preventDefault();
		$('.b-popup#popup-callback').css("display", "block");
		$("body").addClass('-overflow-active');
	});
	$('body').on('click', '.js-popupClose', function(e) {
		e.preventDefault();
		$(this).parents(".b-popup").css("display", "none");
		$("body").removeClass('-overflow-active');
	});
	$(document).on('click', function(e) {
		var popupCallback = $(".b-popup#popup-callback");
		if( e.target == popupCallback[0] ) {
			$(".b-popup#popup-callback").css("display", "none");
			$("body").removeClass('-overflow-active');
		}
	});

	/*Quick order popup*/
	$('body').on('click', '.js-quickOrder', function(e) {
		e.preventDefault();
		$('.b-popup#quick-order-popup').css("display", "block");
		$("body").addClass('-overflow-active');
	});
	$(document).on('click', function(e) {
		var popupCallback = $(".b-popup#quick-order-popup");
		if( e.target == popupCallback[0] ) {
			$(".b-popup#quick-order-popup").css("display", "none");
			$("body").removeClass('-overflow-active');
		}
	});
};
/*End Popups calls*/

/*Main-menu-toggle*/
function mobileMenu(){
	$('body').on('click', '.js-mainMenuToggle', function(){
		$(this).toggleClass('-is-active');
		$('body').toggleClass('-overflow-active');
		$('.b-header__bottom').toggleClass('-is-active');
	});
}
/*End Main-menu-toggle*/