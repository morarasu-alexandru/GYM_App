var React = require('react');
var Button_logo = require('./button_logo');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


module.exports = React.createClass({

	handleClick: function() {
		if(this.state.logo_img<4) {this.setState(
			function (previousState) {
				return {logo_img: previousState.logo_img + 1};

			}
		)} else { this.setState({logo_img: 1})}
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
				<li className="nav_li"><Link to="/" className="btn btn-primary a" >Home</Link></li>
				<li className="nav_li"><Link to="adauga_antrenament" className="btn btn-primary a" >Adauga <br/> antrenament </Link></li>
				<li className="nav_li"><Link to="History" className="btn btn-primary a" >Istoric</Link></li>
			</ul>
		</nav>
		{this.props.children}
		<section className="section_right">
		</section>
		</main>
	}
});