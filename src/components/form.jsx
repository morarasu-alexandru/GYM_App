var React = require('react');
var Piept = require('./piept');

module.exports = React.createClass({
		getInitialState: function() {
			return {
				grupa: "Selecteaza-grupa",
				exercitiu: "Fluturari-cu-gantere"
			}
		},
	handleChange: function() {
		this.setState({grupa: event.target.value});
	},
		render: function () {
		return <div>
			<select name="select" value={this.state.grupa} onChange={this.handleChange} className="form-control SelectGr">
				<option value="Selecteaza-grupa">Selecteaza grupa</option>
				<option value="Piept">Piept</option>
				<option value="Spate">Spate</option>
				<option value="Picioare">Picioare</option>
			</select>
			{this.piept()}
			<img className="grupeImg" src={"img/Grupe muschi/" + this.state.grupa + ".jpg"} height="300" width="200" />
			<button className="btn btn-info buttonAddWorkout" onClick={this.handlClick}>
				Salveaza
			</button>
		</div>
	},
	piept: function() {
		console.log(this.state.exercitiu);
		if(this.state.grupa === "Piept") {
			return <Piept exercitiu={this.state.exercitiu} />
		} else {
			return null
		}
	}
	,
	handlClick: function() {
		if(this.state.grupa!="Selecteaza-grupa") {this.props.itemsStore.push({
			grupa: this.state.grupa	});

			this.setState({grupa: "Selecteaza-grupa"})
		} else {alert("trebuie sa selectezi o grupa mai intai!")}
	}

});