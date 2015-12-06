var React = require('react');
var ReactRouter = require('react-router');
var HasHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Mainpage = require('./components/mainpagge');
var AddWorkout = require('./components/addworkout');
var History = require('./components/history');

module.exports = (
	<Router history={new HasHistory}>
		<Route path="/"	component={Mainpage}>
			<Route path="Add_Workout" component={AddWorkout} />
			<Route path="History" component={History} />
		</Route>
		</Router>
);