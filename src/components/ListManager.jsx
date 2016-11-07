var React = require('react');
var List2 = require('./List2.jsx');


var ListManager = React.createClass({
	getInitialState:function () {
		return {items: [], newItemText: ''};
	},
	onChange:function(e) {
		console.log(this);
		this.setState({newItemText:e.target.value});
	},
	handleSubmit:function(e) {
		e.preventDefault();
		var currentItems = this.state.items;
		currentItems.push(this.state.newItemText);
		this.setState({items: currentItems, newItemText: ''});

	},

	render:function() {
		var headingStyle ={
		}

		if (this.props.head) {
			headingStyle.background = this.props.head;
		}
		return(
					<div className="col-md-4">
						<div className="panel panel-primary" >
							<div className="panel-heading" style={headingStyle}>
								<h3>{this.props.title}</h3>
							</div>
							<div className="panel-body">
								<form onSubmit={this.handleSubmit}>
									<div className="row">
										<div className="col-md-12">
											<input className="form-control" onChange={this.onChange} value={this.state.newItemText}/>
										</div>
									</div>
									<button className="btn btn-success">Add</button>
								</form>
							</div>
							<List2 items={this.state.items}/>
						</div>
					</div>
		)
	}
});


module.exports = ListManager;