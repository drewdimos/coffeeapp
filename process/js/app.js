var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var AptList = require('./AptList');
var AddAppointment = require('./addAppointment')
var SearchAppointments = require('./SearchAppointments')

var MainInterface = React.createClass({
	getInitialState: function(){
		return {
			aptBodyVisible: false,
			orderBy: 'roaster',
			orderDir: 'asc',
			queryText: '',
			coffeeRoaster: []

			
		} //return
	}, //getInitialState

	componentDidMount: function(){
		this.serverRequest = $.get('./js/coffee.json', function(result){
			var tempApts = result;
			this.setState({
				coffeeRoaster: tempApts
			});
		}.bind(this));
	},

	componentWillUnmount: function(){
		this.serverRequest.abort();
	},

	deleteMessage: function(item){
		var allApts = this.state.coffeeRoaster;
		var newApts = _.without(allApts, item);
		this.setState({
			coffeeRoaster: newApts
		}); //setState
	}, //deleteMessages

	toggleAddDisplay: function(){
		var tempVisibility = !this.state.aptBodyVisible;
		this.setState({
			aptBodyVisible: tempVisibility
		}); //setState

	},

	addItem: function(tempItem){
		var tempApts = this.state.coffeeRoaster;
		tempApts.push(tempItem);
		this.setState({
			coffeeRoaster: tempApts
		});

	},

	reOrder: function(orderBy, orderDir){
		this.setState({
			orderBy: orderBy,
			orderDir: orderDir
		});
	},

	searchApts: function(q) {
		this.setState({
			queryText: q

		});
	},

	render: function(){

		var filteredApts = [];
		var orderBy = this.state.orderBy;
		var orderDir = this.state.orderDir;
		var queryText = this.state.queryText;
		var coffeeRoaster = this.state.coffeeRoaster;

		coffeeRoaster.forEach(function(item){
			if(
				(item.roaster.toLowerCase().indexOf(queryText) != -1) ||
				(item.location.toLowerCase().indexOf(queryText) != -1) ||
				(item.signature.toLowerCase().indexOf(queryText) != -1)
				){
				filteredApts.push(item);
			}

		});

		filteredApts = _.orderBy(filteredApts, function(item){
			return item[orderBy].toLowerCase();
		}, orderDir); //orderedBy

		filteredApts = filteredApts.map(function(item, index){
			return (

				<AptList key = { index }
			  	   singleItem = { item }
			  	   whichItem = { item }
			  	   onDelete = { this.deleteMessage }/>
				) //return
		}.bind(this)); //filteredApts.map

		return (
			<div className="inteface">
			<AddAppointment
				bodyVisible = {this.state.aptBodyVisible}
				handleToggle = {this.toggleAddDisplay} 
				addApt = {this.addItem}
				/>
			<SearchAppointments
				orderBy = {this.state.orderBy}
				orderDir = {this.state.orderDir}
				onReOrder = {this.reOrder}
				onSearch = {this.searchApts}
				 />
				
				<ul className="item-list media-list">{filteredApts}</ul>
			</div>
		) //return
	} //render
}); //MainInterface

ReactDOM.render(
	<MainInterface />,
	document.getElementById('petAppointments')
	);