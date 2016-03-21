$(document).ready(function(){
		
		$('#dowebok').fullpage({
			anchors:['p1', 'p2', 'p3', 'p4', 'p5', 'p6'],
			sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE','#FF8D93', '#FFBD7F', '#F3E59A'],
			'navigation': false,
		});
		$("#gotop").click(function(){
			$("html,body").animate({
				scrollTop:0
			},1000);
		});
		$(window).scroll(function() {
			if ($(this).scrollTop() > 300){
				$('#gotop').fadeIn("fast");
			} else {
				$('#gotop').stop().fadeOut("fast");
			}
		});
    });
