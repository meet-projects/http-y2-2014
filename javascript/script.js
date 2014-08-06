$( "#main" ).ready(function() {
		$("#main").fadeOut(0);});
		$( document ).ready(function() {
			$("#header").hover(function() {$("#main").fadeIn(1000);$("#wraper").fadeTo(1000, 0.9);}, function() {$("#main").fadeOut(1000);$("#wraper").fadeTo(1000, 0);});
			});
