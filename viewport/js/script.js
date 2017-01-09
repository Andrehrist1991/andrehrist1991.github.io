$(".arrow-slash").bind("mouseenter", function (event) {
    $(this).prev().css("color", "#bbbbbb");
    $(this).bind("mouseleave", function (event) {
    $(this).prev().css("color", "#787878");
})});

$(document).ready(function(){
  $('.bxslider').bxSlider({
  pagerCustom: '#bx-pager',
  auto: true,
  pause: 6000,
  speed: 800,
  autoHover: true
  });
});