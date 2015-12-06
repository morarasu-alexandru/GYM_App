var React = require('react');
var Button_logo = require('./button_logo');

module.exports = React.createClass({

	handleClick: function() {
		this.setState(
			function(previousState) {
				return {logo_img: previousState.logo_img + 1};
			}
			//{logo_img: 3}
		);
	},
	getInitialState: function(){
	return {logo_img: 1}
	},
	render: function() {
	return <main className="main">
		<div className="header">
		<div className="logo">
			<img className="img" src={"img/logo" + this.state.logo_img + ".jpg"} height="220"/>
		</div>
		<div className="banner">
			<img className="img" src="img/gym_banner.jpg"/>
		</div>
			<Button_logo whenClicked={this.handleClick} />
	</div>
		<nav className="nav">
			<ul className="nav_ul">
				<li className="nav_li"><a className="a" href="#">Home</a></li>
				<li className="nav_li"><a className="a" href="#">Add workout</a></li>
				<li className="nav_li"><a className="a" href="#">History</a></li>
			</ul>
		</nav>
		<section className="section_right">

		</section>
		</main>
	}
});