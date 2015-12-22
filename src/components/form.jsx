var React = require('react');
var Piept = require('./piept');

module.exports = React.createClass({
		getInitialState: function() {
			return {
				grupa: "Selecteaza-grupa",
				exercitiu: "",
				set: ""
			}
		},
	handleChange: function() {
		this.setState({grupa: event.target.value});
	},
		render: function () {
		return <div>
			<label className="LabelGr">Selecteaza grupa:</label>
			<select name="select" value={this.state.grupa} onChange={this.handleChange} className="form-control SelectGr">
				<option value="Selecteaza-grupa">grupa</option>
				<option value="Piept">Piept</option>
				<option value="Spate">Spate</option>
				<option value="Picioare">Picioare</option>
			</select>
			<img className="grupeImg" src={"img/Grupe muschi/" + this.state.grupa + ".jpg"} height="300" width="200" />
			{this.piept()}
			{this.numarset()}
			{this.adaugaseturi()}
			<button className="btn btn-info buttonAddWorkout" onClick={this.handlClick}>
				Salveaza
			</button>
		</div>
	},
	piept: function() {
		if(this.state.grupa === "Piept") {
			return <div className="exercitiu">
				<label className="labelEX">Selecteaza exercitiu:</label>
				<select name="select2" value={this.state.exercitiu} onChange={this.handleChangeExp} className="form-control SelectEX">
					<option value="Impins din culcat cu haltera">Exercitiu</option>
					<option value="Impins din culcat cu haltera">Impins din culcat cu haltera</option>
					<option value="Impins din înclinat cu haltera">Impins din înclinat cu haltera</option>
					<option value="Impins din declinat cu haltera">Impins din declinat cu haltera</option>
					<option value="Impins din culcat cu gantere">Impins din culcat cu gantere</option>
					<option value="Fluturari-cu-gantere">Fluturari cu gantere</option>
				</select>
			</div>
		} else {
			return null
		}
	},
	numarset: function() {
		if(this.state.exercitiu !== "") {
			return <div className="seturi">
				<label className="seturilabel">Numar seturi:</label>
				<select name="select3" value={this.state.set} onchange={this.handleChangeSet} className="form-control seturinr">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
				</select>
			</div>
		}	else {
			return null
		}
	},
	adaugaseturi: function() {
		if(this.state.exercitiu !== "" && this.state.grupa !== "Selecteaza-grupa" ) {
			return <div className="Exercitiupiept"> <h1>Ceva</h1> </div>
		} else {
			return null
		}
	},
	handleChangeSet: function () {
		this.setState({set: event.target.value});
		console.log(this.state.set)
	},
	handleChangeExp: function () {
		this.setState({exercitiu: event.target.value});
		console.log(this.state.exercitiu)
	},
	handlClick: function() {
		if(this.state.grupa!="Selecteaza-grupa") {this.props.itemsStore.push({
			grupa: this.state.grupa	});

			this.setState({grupa: "Selecteaza-grupa"})
		} else {alert("trebuie sa selectezi o grupa mai intai!")}
	}

});