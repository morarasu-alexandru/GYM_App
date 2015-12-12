var React = require('react');

module.exports = React.createClass({
	render:function() {
		return <div className="grupeImg">
			<img src={"img/Grupe muschi/" + this.props.handlesrc + ".jpg"} height="300" width="200" />
			<img src="img/Grupe muschi/exercises-back-traps.jpg" height="300" width="200" />
		</div>
	}
});