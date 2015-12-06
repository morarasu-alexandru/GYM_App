var React = require('react');

module.exports = React.createClass({
	render:function() {
		return <button onClick={this.props.whenClicked} className="btn btn-info button" type="button">Schimba logo</button>
	}
});