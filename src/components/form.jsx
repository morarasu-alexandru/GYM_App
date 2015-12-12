var React = require('react');
var Grupeimg = require('./grupeimg');

module.exports = React.createClass({
		getInitialState: function() {
			return {
				grupa: "Spate"
			}
		},
	handleChange: function() {
		console.log(this.state.grupa);
		this.setState({grupa: event.target.value});

	},
		render: function () {
		return <div>
			<select name="select" value={this.state.grupa} onChange={this.handleChange} className="form-control SelectGr">
				<option value="Selecteaza Grupa">Selecteaza Grupa</option>
				<option value="Piept">Piept</option>
				<option value="Spate">Spate</option>
				<option value="Picioare">Picioare</option>
			</select>
			<Grupeimg handlesrc={this.handlesrc}/>
			<button className="btn btn-info buttonAddWorkout" onClick={this.handlClick}>
				Salveaza
			</button></div>
	},
	handlClick: function() {
		this.props.itemsStore.push({
			grupa: this.state.grupa
		});
	},
	handlesrc: function() {
	}

});