var React = require('react');
var Mainpage = require('./mainpagge');

var options = {
	logo_img: 1,
	n: 3

};

var element = React.createElement(Mainpage, options);
React.render(element, document.querySelector('.containerr'));
