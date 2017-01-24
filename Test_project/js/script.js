
$(document).ready(function(){

  $(".subscription").animated("flipInY", "flipInY");
  $(".team_members_member").animated("zoomIn", "zoomIn");
  $(".contact_forms, .contacts_get_in_touch").animated("zoomIn", "zoomIn");

	$(".owl-carousel").owlCarousel({
		loop : true,
        //autoHeight : true,
        margin : 10,
		responsive : {
			0 : {
            items:1,
            nav:true
        }   
	  },
	  navText : ""
	});
  


});

var click = 1; 
var w = $(window).width();

function ToogleClick() {
    
    if(click)
    {   if (w >= 1160) {
        $(".main-text").css({"height": "600px", "width": "85%", "overflow-y": "scroll"});
        $(".review-item").css('min-height', '950px');
        $(".owl-prev, .owl-next").css('bottom', '700px');
        $(".info").css('top', '50px'); 
         click = 0;
        };
        if (w <= 1160) {
    	$(".main-text").css({"height": "400px", "width": "85%", "overflow-y": "scroll"});
    	$(".review-item").css('min-height', '750px');
    	$(".owl-prev, .owl-next").css('bottom', '450px'); 
    	$(".info").css('top', '50px');
    	click = 0;
        };
        if (w <= 1000) { 
          $(".main-text").css({"height": "400px", "width": "75%", "overflow-y": "scroll"});
          click = 0;
        };
        if (w <= 870) { 
          $(".learn-more").html("Hide News").css('top', '60px');
          $(".info").css('top', '60px');
          $(".owl-prev, .owl-next").css('bottom', '500px');
          $(".main-text").css({"top": "25px", "height": "350px", "width": "75%", "overflow-y": "scroll"});
          click = 0;
        };
        if (w <= 800) { 
          $(".main-text").css({"height": "350px", "width": "75%", "overflow-y": "scroll"});
          click = 0;
        };
        if (w <= 730) { 
          $(".main-text").css({"height": "250px", "width": "75%", "overflow-y": "scroll"});
          $(".info").css('top', '100px');
          click = 0;
        };
        if (w <= 660) { 
          $(".main-text").css({"height": "250px", "width": "75%", "overflow-y": "scroll"});
          $(".info").css('top', '60px');
          click = 0;
        };
        if (w <= 580) { 
          $(".info").css({"height": "70%", "top": "33px"});
          $(".owl-prev, .owl-next").css('bottom', '250px');
          $(".review-item").css('min-height', '460px');
          click = 0;
        };
        if (w <= 530) { 
          $(".main-text").css('height', '200px');
          $(".info").css('top', '50px');
          click = 0;
        };
        if (w <= 490) {
          $(".owl-prev, .owl-next").css('bottom', '280px');	
          $(".main-text").css({"height": "190px", "width": "70%", "overflow-y": "scroll"});
          click = 0;
        };
        if (w <= 455) {
          $(".main-text").css({"height": "175px", "width": "70%", "overflow-y": "scroll"});
          $(".learn-more").css('top', '35px');
          click = 0;
        };
        if (w <= 388) {
          $(".main-text").css({"height": "170px", "top": "7px", "width": "70%", "overflow-y": "scroll"});
          $(".learn-more").css('top', '20px');
          click = 0;
        };
        if (w <= 355) {
          $(".main-text").css({"height": "130px", "top": "7px", "width": "70%", "overflow-y": "scroll"});
          $(".learn-more").css('top', '20px');
          click = 0;
        };
        if (w <= 345) {
         $(".owl-prev, .owl-next").css('bottom', '310px');
          click = 0;
        };


    	
    	$(".owl-height").css('height', '950px');
    	$(".info").css('margin-bottom', '30px');
    	$(".learn-more").html("Hide News"); 
        click = 0;
    } 
    else
    {   if (w >= 1160) {
        $(".main-text").css({"height": "60px", "width": "380px", "overflow-y": "hidden"}).scrollTop("#top");
     	$(".review-item").css('min-height', '565px');
     	$(".info").css('top', '136px');
     	$(".owl-height").css('height', '565px');
     	$(".info").css('margin-bottom', '30px');
     	$(".owl-prev, .owl-next").css('bottom', '290px');
     	$(".learn-more").html("Learn More"); 
        click = 1;
        };
        if (w <= 1160) {
        	$(".main-text").css({"height": "60px", "width": "380px", "overflow-y": "none"});
          $(".review-item").css({"height": "560px", "min-height": "560px", "max-height": "560px"});	
          $(".owl-prev, .owl-next").css('bottom', '300px');
          $(".info").css('top', '160px');
          click = 1;
        };

    	if (w <= 940) { 
          $(".review-item").css({"height": "460px", "min-height": "460px", "max-height": "460px"});
          $(".info").css('top', '100px');
          $(".main-text").css({"height": "60px", "width": "380px", "overflow-y": "hidden"}).scrollTop("#top");
          click = 1;
        };
        if (w <= 870) {
          $(".review-item").css({"height": "425px", "min-height": "425px", "max-height": "425px"});	
          click = 1;	
        };
        if (w <= 580) {
          $(".review-item").css({"height": "400px", "min-height": "400px", "max-height": "400px"});
          $(".owl-prev, .owl-next").css('bottom', '255px');
          click = 1;	
        }
        if (w <= 560) {
          $(".review-item").css({"height": "330px", "min-height": "330px", "max-height": "330px"});	
          $(".owl-prev, .owl-next").css('bottom', '200px');
          $(".info").css('top', '90px');
          click = 1;
        };
        if (w <= 490) {
          $(".main-text").css({"height": "60px", "width": "245px", "overflow-y": "hidden"}).scrollTop("#top");
          click = 1;
        };
        if (w <= 455) {
          $(".review-item").css({"height": "270px", "min-height": "270px", "max-height": "270px"});
          $(".info").css('top', '60px');
          $(".owl-prev, .owl-next").css('bottom', '160px');	
          click = 1;
        };
        if (w <= 388) {
          $(".main-text").css({"height": "43px", "top": "20px", "width": "255px", "overflow-y": "hidden"});
          $(".learn-more").css('top', '30px');
          click = 1;
        };
        if (w <= 345) {
         $(".main-text").css({"height": "43px", "top": "20px", "width": "216px", "overflow-y": "hidden"});
          click = 1;
        };
     	$(".learn-more").html("Learn More"); 
        click = 1;
    }
}; 

$(".buy_basic").bind("mouseenter", function (event) {
    $(".buy_basic, .basic").css('background-color', '#44c0c2');
});
$(".buy_basic").bind("mouseleave", function (event) {
    $(".buy_basic, .basic").css('background-color', '');
}); 

$(".buy_pro").bind("mouseenter", function (event) {
    $(".buy_pro, .pro").css('background-color', '#44c0c2');
});
$(".buy_pro").bind("mouseleave", function (event) {
    $(".buy_pro, .pro").css('background-color', '');
}); 

$(".buy_premium").bind("mouseenter", function (event) {
    $(".buy_premium, .premium").css('background-color', '#44c0c2');
});
$(".buy_premium").bind("mouseleave", function (event) {
    $(".buy_premium, .premium").css('background-color', '');
});     
    



$(document).ready(function() {
    $('#email').blur(function() {
        if($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
                $(this).css({'border' : '3px solid #569b44'});
                
            } else {
                $(this).css({'border' : '3px solid #ff0000'});
                
            }
        } else {
            $(this).css({'border' : '3px solid #ff0000'});
            
        }
    });
    $('#name').blur(function() {
        if($(this).val() >= 2) {

            $(this).css({'border' : '3px solid #569b44'});
                
            } if($(this).val() <= 2) {
                $(this).css({'border' : '3px solid #ff0000'});               
            } 
        });
     $('.message').blur(function() {
        if($(this).val() >= 2) {

            $(this).css({'border' : '3px solid #569b44'});
                
            } if($(this).val() <= 2) {
                $(this).css({'border' : '3px solid #ff0000'});               
            } 
        });         
});

