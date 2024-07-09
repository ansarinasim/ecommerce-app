$(document).ready(function(){
	
	$(".filter .popular").click(function(){
	    $(".filter-vw .uf").fadeIn(1000);
		$(".filter-vw .vf").fadeOut(1000);
		$(".filter-vw .wf").fadeOut(1000);
		$(".filter-vw .xf").fadeOut(1000);
	});
    $(".filter .sales").click(function(){
	    $(".filter-vw .vf").fadeIn(1000);
		$(".filter-vw .uf").fadeOut(1000);
		$(".filter-vw .wf").fadeOut(1000);
		$(".filter-vw .xf").fadeOut(1000);
	});	
	$(".filter .rate").click(function(){
	    $(".filter-vw .wf").fadeIn(1000);
		$(".filter-vw .uf").fadeOut(1000);
		$(".filter-vw .vf").fadeOut(1000);
		$(".filter-vw .xf").fadeOut(1000);
	});	
	$(".filter .seller").click(function(){
	    $(".filter-vw .xf").fadeIn(1000);
		$(".filter-vw .vf").fadeOut(1000);
		$(".filter-vw .uf").fadeOut(1000);
		$(".filter-vw .wf").fadeOut(1000);
	});
	
	$(".ang").click(function(){
				 $(".sec5_text").slideToggle(3000);
			  }); 
			  
			  $(".lm").click(function(){
				 $(".sec6_slide").fadeOut();
				 $(".sec6_ani").fadeIn();
			  });
			 $(".bm").click(function(){
				 $(".sec6_ani").fadeOut();
				 $(".sec6_slide").fadeIn();
			  });
			  
			  $("#sm").click(function(){
				 $(".apend").fadeIn(2000);
			  });
});	