var React = require('react');
var ReactRouter = require('react-router');
var HasHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Mainpage = require('./components/mainpagge');
var AddWorkout = require('./components/adauga antrenament');
var History = require('./components/history');

module.exports = (
	<Router history={new HasHistory}>
		<Route path="/"	component={Mainpage}>
			<Route path="adauga_antrenament" component={AddWorkout} />
			<Route path="history" component={History} />
		</Route>
		</Router>
);