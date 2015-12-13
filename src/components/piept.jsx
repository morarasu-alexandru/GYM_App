var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			exercitiu: "Fluturari-cu-gantere"
		}
	},
	render: function() {
		return <div className="piept">
			<select name="select2" value={this.props.exercitiu} onChange={this.handleChange} className="form-control SelectEX">
				<option value="Impins din culcat cu haltera">Impins din culcat cu haltera</option>
				<option value="Impins din înclinat cu haltera">Impins din înclinat cu haltera</option>
				<option value="Impins din declinat cu haltera">Impins din declinat cu haltera</option>
				<option value="Impins din culcat cu gantere">Impins din culcat cu gantere</option>
				<option value="Fluturari-cu-gantere">Fluturari cu gantere</option>
			</select>
		</div>
	},
	handleChange: function() {
		this.setState({exercitiu: event.target.value});
	}
});