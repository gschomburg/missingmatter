
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
$('#left-nav').click(function() {
  $(this).toggleClass('open');
});

$('#top-nav').click(function() {
  $(this).toggleClass('open');
});

function onResize(){
	$( "#left-nav .section-links" ).width($( document ).width()-100);
	$( "#left-nav .nav-header" ).width($( document ).width()-100);
}
$( window ).resize(function() {
  onResize();
  // $( "#nav .nav-header" ).width($( document ).width()-100);
});
onResize();

$(".nav .section-links li").click(function () {
	window.location = $(this).find("a:first").attr("href");
	return false;
});


//Nav slide show
$("#nav-slides > .slide:gt(0)").hide();

setInterval(function() {
	$('#nav-slides > .slide:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#nav-slides');
	// console.log($('#landing-slides > .slide:first').find("a:first").attr("href"));
}, 4000);

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


/*
* FlowType.JS v1.1
* Copyright 2013-2014, Simple Focus http://simplefocus.com/
*
* FlowType.JS by Simple Focus (http://simplefocus.com/)
* is licensed under the MIT License. Read a copy of the
* license in the LICENSE.txt file or at
* http://choosealicense.com/licenses/mit
*
* Thanks to Giovanni Difeterici (http://www.gdifeterici.com/)
*/

// (function($) {
   $.fn.flowtype = function(options) {

// Establish default settings/variables
// ====================================
      var settings = $.extend({
         maximum   : 9999,
         minimum   : 1,
         maxFont   : 9999,
         minFont   : 1,
         fontRatio : 35
      }, options),

// Do the magic math
// =================
      changes = function(el) {
         var $el = $(el),
            elw = $el.width(),
            width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
            fontBase = width / settings.fontRatio,
            fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
         $el.css('font-size', fontSize + 'px');
      };

// Make the magic visible
// ======================
      return this.each(function() {
      // Context for resize callback
         var that = this;
      // Make changes upon resize
         $(window).resize(function(){changes(that);});
      // Set changes on load
         changes(this);
      });
   };
// }(jQuery));

//startflow type
// $('body').flowtype();
$('.min-size-14').flowtype({
   minFont   : 14
});
$('.min-size-16').flowtype({
   minFont   : 16
})