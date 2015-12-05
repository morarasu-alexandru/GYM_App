var React = require('react');
var Button_logo = require('./button_logo');

module.exports = React.createClass({
	render: function() {
	return <main className="main">
		<div className="header">
		<div className="logo">
			<img src="img/logo1.jpg" height="220"/>
		</div>
		<div className="banner">
			<img className="img" src="img/gym_banner.jpg"/>
		</div>
			<Button_logo />
	</div>
		<nav className="nav">
			<ul className="nav_ul">
				<li className="nav_li"><a className="a" href="#">Home</a></li>
				<li className="nav_li"><a className="a" href="#">Add work day</a></li>
				<li className="nav_li"><a className="a" href="#">History</a></li>
			</ul>
		</nav>
		<section className="section_right">

		</section>
		</main>
	}
});