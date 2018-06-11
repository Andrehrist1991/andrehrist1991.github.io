$(function () {
	var $slider = $("#rotate-carousel");
	var $wrapper = $(".rotate-slider");
	var $animateHolder = $(".animate-holder");
	var $animateElements = $animateHolder.find("*");
	var $more = $(".slider-more");
	var gallery = {
		duration: 5000,
		deg: 0,
		step: -30,
    // prevElement: '<span class="prev"></span>',
    // nextElement: '<span class="next"></span>',
    active: $slider.find("li.active"),
    direction: "left"
  };

  $slider.find("> li").first().addClass("active");
  var href = $slider.find("> li").first().find("a").attr("href");
  $more.attr("href", href);
  $wrapper.append(gallery.prevElement, gallery.nextElement);
  setTimeout(function () {
   miniSlide(0);
 }, 300);
  $(document).on("click", "#rotate-carousel > li > a", function (e) {
   e.preventDefault();
 });
  function carousel() {
   var el;
   $animateElements.attr("style", "");
   $slider.addClass("disable-hover");
   $slider.stop(true, true).animate({rotatedeg: gallery.deg += gallery.step}, {
    duration: 400,
    step: function (now) {
     if (now >= 360) {
      now = now - 360;
    } else {
      if (now <= -360) {
       now = now + 360;
     }
   }
   $(this).css("transform", "rotate(" + now + "deg)");
   $(this).css("-webkit-transform", "rotate(" + now + "deg)");
 },
 complete: function () {
   gallery.active = $slider.find("li.active").removeClass("active");
   if (gallery.direction == "right" && gallery.step == 30) {
    if (gallery.active.prev() && gallery.active.prev().length) {
     el = gallery.active.prev().index();
     gallery.active.prev().addClass("active");
   } else {
     gallery.active.siblings(":last-child").addClass("active");
     el = 9;
   }
 }
 if (gallery.direction == "left" && gallery.step == -30) {
  if (gallery.active.next() && gallery.active.next().length) {
   el = gallery.active.next().index();
   gallery.active.next().addClass("active");
 } else {
   gallery.active.siblings(":first-child").addClass("active");
   el = 0;
 }
}
if (!$slider.is(":animated")) {
  miniSlide(el);
}
$slider.removeClass("disable-hover");
}
}, "ease");
 }

 function slideC() {
   var el;
   $animateElements.attr("style", "");
   $slider.addClass("disable-hover");
   $slider.stop(true, true).animate({rotatedeg: gallery.deg += gallery.step}, {
    duration: 400,
    step: function (now) {
     if (now >= 360) {
      now = now - 360;
    } else {
      if (now <= -360) {
       now = now + 360;
     }
   }
   $(this).css("transform", "rotate(" + now + "deg)");
   $(this).css("-webkit-transform", "rotate(" + now + "deg)");
 },
 complete: function () {
   gallery.active = $slider.find("li.active");
   el = $slider.find("li.active").index();
   if (!$slider.is(":animated")) {
    miniSlide(el);
  }
  $slider.removeClass("disable-hover");
}
}, "ease");
 }

 $(document).on("click", "#rotate-carousel > li", function () {
   var itemClick = $(this).index();
   var itemActive = $slider.find("li.active").index();
   var stepScroll = itemClick - itemActive;
   $slider.children("li").removeClass("active");
   $(this).addClass("active");
   gallery.step = (-(stepScroll * 30));
   if (stepScroll * 30 >= 288) {
    gallery.step = (-(stepScroll * 30) + 360);
  }
  if (stepScroll * 30 <= -288) {
    gallery.step = (-(stepScroll * 30) - 360);
  }
  slideC();
  gallery.step = -30;
  gallery.direction = "left";
});

 $(document).on("click", "div.rotate-slider > span.next", function () {
   if (!$slider.is(":animated")) {
    gallery.direction = "left";
    gallery.step = -30;
    carousel();
  }
});

 $(document).on("click", "div.rotate-slider > span.prev", function () {
   if (!$slider.is(":animated")) {
    gallery.direction = "right";
    gallery.step = 30;
    carousel();
  }
});

 function miniSlide(el) {
   var href = $slider.find("li.active").find("a").attr("href");
   $more.attr("href", href);
   var element = el + 1;
   $(".animate-holder > div").find(".animate-wrapper").find("div").stop(true, true);
   switch (element) {
    case 1:
    var $item = $("#animation1");
    $item.css("display", "block");
    $item.find(".animate1").animate({top: 0}, 750);
    break;
    case 2:
    var $item = $("#animation2");
    $item.css("display", "block");
    $item.find(".animate1").animate({top: 0}, 750);
    break;
    case 3:
    var $item = $("#animation3");
    $item.css("display", "block");
    $item.find(".animate1").animate({top: 0}, 750);
    break;
    case 4:
    var $item = $("#animation4");
    $item.css("display", "block");
    $item.find(".animate1").animate({opacity: 1}, 750);
    break;
    case 5:
    var $item = $("#animation5");
    $item.css("display", "block");
    $item.find(".animate1").animate({top: 0}, 750);
    break;
    case 6:
    var $item = $("#animation6");
    $item.css("display", "block");
    $item.find(".animate1").animate({left: 215}, 750);
    break;
    case 7:
    var $item = $("#animation7");
    $item.css("display", "block");
    $item.find(".animate1").animate({left: 255}, 750);
    break;
    case 8:
    var $item = $("#animation8");
    $item.css("display", "block");
    $item.find(".animate1").animate({top: 0}, 750);
    break;
    case 9:
    var $item = $("#animation9");
    $item.css("display", "block");
    $item.find(".animate1").animate({top: -10}, 750);
    break;
    case 10:
    var $item = $("#animation10");
    $item.css("display", "block");
    $item.find(".animate1").animate({opacity: 1}, 750);
    break;
    case 11:
    var $item = $("#animation11");
    $item.css("display", "block");
    $item.find(".animate1").animate({opacity: 1}, 750);
    break;
    case 12:
    var $item = $("#animation12");
    $item.css("display", "block");
    $item.find(".animate1").animate({opacity: 1}, 750);
    break;
    case 13:
    var $item = $("#animation13");
    $item.css("display", "block");
    $item.find(".animate1").animate({opacity: 1}, 750);
    break;
    // default:
    // console.log("Front-end Russia");
  }
}
});