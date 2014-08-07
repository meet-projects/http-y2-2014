$( "#wrw" ).ready(function() {
		$("#wrw").fadeOut(0);});
		$( document ).ready(function() {

$("#request").hover(
function() {
$(this).animate({"background-color":"blue"});
});
var filename = document.location.href.replace(/^.*[\\\/]/, '');
if (filename="index.html"){
$("#header").hover(
function() {
$("#menu").css({"zIndex":"-2"});
$("#wrw").fadeIn(1000);
$("#wraper").fadeTo(1000, 0.9);}
, function() {
$("#wrw").fadeOut(1000 , function() {
$("#menu").css({"zIndex":"0"});
});
$("#wraper").fadeTo(1000, 0);});
}
$("#wrw").click(
function() {
document.location.href = "../Actual Home Page/index.html";
});
});
