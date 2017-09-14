
//html to watch
require('../dist/index.html')
require('../dist/tara.html')
require('../dist/goodestmedia.html')
require('../dist/villaarpel.html')
require('../dist/archfilms.html')
require('../dist/about.html')

var $ = require("jquery");

console.log('hello');


//Navigation Work
$('#nav').click(function() {
  $(this).toggleClass('open');
});

function onResize(){
	$( "#nav .section-links" ).width($( document ).width()-100);
	$( "#nav .nav-header" ).width($( document ).width()-100);
}
$( window ).resize(function() {
  onResize();
  // $( "#nav .nav-header" ).width($( document ).width()-100);
});
onResize();

$("#nav .section-links li").click(function () {
	window.location = $(this).find("a:first").attr("href");
	return false;
});


//Home page slide show
$("#landing-slides > .slide:gt(0)").hide();

setInterval(function() {
	$('#landing-slides > .slide:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#landing-slides');
	// console.log($('#landing-slides > .slide:first').find("a:first").attr("href"));
}, 4000);