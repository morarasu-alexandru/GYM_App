var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Form = require('./form');

var rootUrl = 'https://vivid-fire-3543.firebaseio.com/';

module.exports = React.createClass({
	mixins: [ ReactFire ],
	componentWillMount: function() {
		this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
	},
	render: function() {
		return <div className="addworkoutHistory">
			<h2 className="title">Adauga antrenament</h2>
			<p className="text">Selecteaza grupa mare:</p>
			<Form  itemsStore={this.firebaseRefs.items} />
		</div>
	}
});