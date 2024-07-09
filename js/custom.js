$(document).ready(function(){
    $(".bar").click(function(){
	    $("nav").animate({right :'0'});
	});

	$(".close").click(function(){
	    $("nav").animate({right :'-30%'});
	});
	
	$(".search i").click(function(){
	    $(".search input").animate({width :"toggle"});
	});
	
	$(".filter-controls .all").click(function(){
	    $(".filter-thumbs .all").fadeIn(1000);
	});
    $(".filter-controls .kameez").click(function(){
	    $(".filter-thumbs .kameez").fadeIn(1000);
		$(".filter-thumbs .tshirt").fadeOut(1000);
		$(".filter-thumbs .pant").fadeOut(1000);
		$(".apend").fadeOut(1000);
	});	
	$(".filter-controls .pant").click(function(){
	    $(".filter-thumbs .pant").fadeIn(1000);
		$(".filter-thumbs .tshirt").fadeOut(1000);
		$(".filter-thumbs .kameez").fadeOut(1000);
		$(".apend").fadeOut(1000);
	});	
	$(".filter-controls .tshirt").click(function(){
	    $(".filter-thumbs .tshirt").fadeIn(1000);
		$(".filter-thumbs .pant").fadeOut(1000);
		$(".filter-thumbs .kameez").fadeOut(1000);
		$(".apend").fadeOut(1000);
	});
});	