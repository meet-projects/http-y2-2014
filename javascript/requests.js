$( document ).ready(function() {
	alert("jasd");
	$(".request").hover(function() {
		$(this).animate({"color":"blue"},0);
	}
	,function() {
		$(this).animate({"color":"black"},0);
	});
});
