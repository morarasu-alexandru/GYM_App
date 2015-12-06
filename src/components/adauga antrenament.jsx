var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');

var Grupeimg = require('./grupeimg');
var rootUrl = 'https://vivid-fire-3543.firebaseio.com/';

module.exports = React.createClass({
	mixins: [ ReactFire ],
	componentWillMount: function() {
		this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
	},
	handleSelect: function() {
	console.log("I was clicked")
	},
	render: function() {
		return <div className="addworkoutHistory">
			<h2 className="title">Adauga antrenament</h2>
			<p className="text">Selecteaza grupa mare:</p>
			<select name="select" className="form-control SelectGr">
				<option whenSelected={this.handleSelect} value="Piept">Piept</option>
				<option value="Spate" selected>Spate</option>
				<option value="Picioare">Picioare</option>
			</select>
			<Grupeimg whenSelected={this.handleSelect} />
		</div>

	}
});