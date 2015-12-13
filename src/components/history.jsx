var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var HisotryW = require('./historyw');

var rootUrl = 'https://vivid-fire-3543.firebaseio.com/';

module.exports = React.createClass({
	mixins: [ ReactFire ],
	getInitialState: function() {
		return {
			items: {}
		}
	},
	componentWillMount: function() {
		this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
	},
	render: function() {
		return <div className="addworkoutHistory">
			<HisotryW items={this.state.items} />
		</div>
	}
});