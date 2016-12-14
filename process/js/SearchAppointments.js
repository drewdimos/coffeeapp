var React= require('react');

var SearchAppointments = React.createClass({

	handleSort: function(e){
		this.props.onReOrder(e.target.id, this.props.orderDir);
	},

	handleOrder: function(e){
		this.props.onReOrder(this.props.orderBy, e.target.id);
	},

	handleSearch: function(e) {
		this.props.onSearch(e.target.value);
	},
	
	render: function(){
		return (
			<div className="row search-appointments">
			  <div className="col-sm-offset-3 col-sm-6">
			    <div className="input-group">
			      <input id="SearchApts" onChange={this.handleSearch} placeholder="Search" type="text" className="form-control" aria-label="Search Appointments" />
			      <div className="input-group-btn">
			        <button type="button" className="btn btn-primary dropdown-toggle"
			          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span className="caret"></span></button>
			          <ul className="dropdown-menu dropdown-menu-right">
			            <li><a href="#" id="roaster" onClick={this.handleSort}>Roaster { (this.props.orderBy === 'roaster') ? <span className="glyphicon glyphicon-ok"></span> : null}</a></li>
			            <li><a href="#" id="location" onClick={this.handleSort}>Location { (this.props.orderBy === 'location') ? <span className="glyphicon glyphicon-ok"></span> : null}</a></li>
			            <li><a href="#" id="signature" onClick={this.handleSort}>Signature { (this.props.orderBy === 'signature') ? <span className="glyphicon glyphicon-ok"></span> : null}</a></li>
			            <li role="separator" className="divider"></li>
			            <li><a href="#" id="asc" onClick={this.handleOrder}>Asc { (this.props.orderDir === 'asc') ? <span className="glyphicon glyphicon-ok"></span> : null}</a></li>
			            <li><a href="#" id="desc" onClick={this.handleOrder}>Desc { (this.props.orderDir === 'desc') ? <span className="glyphicon glyphicon-ok"></span> : null}</a></li>
			          </ul>
			      </div>
			    </div>
			  </div>
			</div>
			)
}

});

module.exports = SearchAppointments;