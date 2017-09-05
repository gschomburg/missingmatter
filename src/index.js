
//html to watch
require('../dist/index.html')
require('../dist/tara.html')
require('../dist/goodestmedia.html')

var $ = require("jquery");
/*
import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hellxxxxo', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
*/
// require('/main.scss');
// require('file?name=[name].[ext]!index.html');
console.log('hello');

$('#nav').click(function() {
  $(this).toggleClass('open');
});

$("#nav .section-links li").click(function () {
	window.open($(this).find("a:first").attr("href"));
	return false;
});