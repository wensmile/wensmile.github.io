$(document).ready(function(){ 
		$(".carousel").css('height', $(window).height()); 
		$(".carousel").find(".item").css('height', $(window).height()); 	
		$(".carousel").find("img").css('height', $(window).height()); 
	$(window).resize(function(){ 
		$(".carousel").css('height', $(window).height()); 
		$(".carousel").find(".item").css('height', $(window).height()); 
		$(".carousel").find("img").css('height', $(window).height()); 
	}); 
}); 