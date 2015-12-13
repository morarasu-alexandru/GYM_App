var React = require('react');

module.exports = React.createClass({
	render:function() {
		return <div className="grupeImg">
			<img src={"img/Grupe muschi/" + this.props.grupa + ".jpg"} height="300" width="200" />
		</div>
	}
});