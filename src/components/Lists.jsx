var React = require('react');
var Lists = React.createClass({
	render:function(argument) {
		return(
			<li>
				<h4>{this.props.text}</h4>
			</li>
		)
	}
});

module.exports = Lists;