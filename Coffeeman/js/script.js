$(document).ready(function() {

	$(".head-effect").animated("flipInY", "flipInY");
	$(".name-menu").animated("zoomIn", "zoomIn");
	$(".move-left").animated("fadeInRight", "fadeInRight");

   function wResize() {
   	$("header").css("min-height", $(window).height());
   }; 
   wResize();
   $(window).resize(function() {
     wResize()
   });

$.stellar({
	responsive: true,
	horizontalOffset: 40
});


});

$(".adr-1").bind("mousedown", function (event) {
    $(".map").css('backgroundImage', 'url(img/istor-muz2.jpg)' );
    $(".little-map").css('backgroundImage', 'url(img/istor-muz2.jpg)' ); 
});
$(".adr-2").bind("mousedown", function (event) {
    $(".map").css('backgroundImage', 'url(img/univ-272.jpg)' ); 
    $(".little-map").css('backgroundImage', 'url(img/univ-272.jpg)' ); 
});
$(".adr-3").bind("mousedown", function (event) {
    $(".map").css('backgroundImage', 'url(img/feierbach2.jpg)' ); 
    $(".little-map").css('backgroundImage', 'url(img/feierbach2.jpg)' ); 
});
$(".adr-4").bind("mousedown", function (event) {
    $(".map").css('backgroundImage', 'url(img/pushkinsk28.jpg)' ); 
    $(".little-map").css('backgroundImage', 'url(img/pushkinsk28.jpg)' ); 
});
$(".adr-5").bind("mousedown", function (event) {
    $(".map").css('backgroundImage', 'url(img/august232.jpg)' ); 
    $(".little-map").css('backgroundImage', 'url(img/august232.jpg)' ); 
});
$(".adr-6").bind("mousedown", function (event) {
    $(".map").css('backgroundImage', 'url(img/univ-park2.jpg)' ); 
    $(".little-map").css('backgroundImage', 'url(img/univ-park2.jpg)' ); 
});
$(".adr-7").bind("mousedown", function (event) {
    $(".map").css('backgroundImage', 'url(img/amurskaya2.jpg)' ); 
    $(".little-map").css('backgroundImage', 'url(img/amurskaya2.jpg)' ); 
});
$(".adr-8").bind("mousedown", function (event) {
    $(".map").css('backgroundImage', 'url(img/sumskaya2.jpg)' ); 
    $(".little-map").css('backgroundImage', 'url(img/sumskaya2.jpg)' ); 
});
