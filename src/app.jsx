var React = require('react');
var Mainpage = require('./mainpagge');

var options = {
	logo_img: 'img/logo4.jpg'

};

var element = React.createElement(Mainpage, options);
React.render(element, document.querySelector('.containerr'));
