var React = require('react');

var AddAppointment = React.createClass({

	toggleAptDisplay: function(){
		this.props.handleToggle();
	},

	handleAdd: function(e){
		var tempItem = {
			roaster: this.refs.inputPetName.value,
			location: this.refs.inputOwnerName.value,
			aptDate: this.refs.inputAptDate.value + ' ' ,
			signature: this.refs.inputSignature.value,
			notes: this.refs.inputAptNotes.value

		}
		e.preventDefault();
		this.props.addApt(tempItem);
	},

	render: function(){

		var displayAptBody = {
			display : this.props.bodyVisible ? "block" : "none"
		};

		return(
			<div className="panel panel-primary">
  <div className="panel-heading apt-addheading" onClick={ this.toggleAptDisplay }>
  <span className="glyphicon glyphicon-plus"></span> Add A Coffee</div>
  <div className="panel-body" style={ displayAptBody }>
    <form className="add-appointment form-horizontal" onSubmit = {this.handleAdd}>
      <div className="form-group">
        <label className="col-sm-2 control-label" for="roaster">Roaster</label>
        <div className="col-sm-10">
          <input type="text" className="form-control"
            id="petName" ref="inputPetName" placeholder="Roaster's Name" />
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-2 control-label" for="location">Location</label>
        <div className="col-sm-10">
          <input type="text" className="form-control"
            id="petOwner" ref="inputOwnerName" placeholder="Where are you?" />
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-2 control-label" for="Date">Date</label>
        <div className="col-sm-4">
          <input type="date" className="form-control"
            id="aptDate" ref="inputAptDate" />
        </div>
        <label className="col-sm-2 control-label" for="signature">Signature</label>
        <div className="col-sm-4">
          <input type="text" className="form-control"
            id="aptTime" ref="inputSignature" placeholder="Their Special Drink" />
        </div>

      </div>
      <div className="form-group">
        <label className="col-sm-2 control-label" for="notes">Notes</label>
        <div className="col-sm-10">
          <textarea className="form-control" rows="4" cols="50"
            id="aptNotes" ref="inputAptNotes" placeholder="Notes, all the Notes"></textarea>
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <button type="submit" className="btn btn-primary pull-right">Add Coffee</button>
        </div>
      </div>
    </form>
  </div>
</div>

		) //return
	} //render

}); //AddAppointment

module.exports = AddAppointment;