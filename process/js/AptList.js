var React = require('react');

var AptList = React.createClass({

	handleDelete: function(){
		this.props.onDelete(this.props.whichItem);
	},

	render: function(){
		return(
			<li className="pet-item media">
				<div className="media-left">
					<button className="pet-delete btn btn-xs btn-danger" onClick={this.handleDelete}>
					<span className="glyphicon glyphicon-remove"></span></button>
					</div>
					  <div className="pet-info media-body">
						<div className="pet-head">
							<span className="pet-name">{this.props.singleItem.roaster}</span>
							<span className="apt-date pull-right">{this.props.singleItem.location}</span>
						</div>
						<div className="owner-name"><span className="label-item">Signature: </span>
          				{this.props.singleItem.signature}</div>
          				<div className="apt-notes">{this.props.singleItem.notes}</div>
          				</div>
					</li>

			) //return
	} //render
});

module.exports = AptList;