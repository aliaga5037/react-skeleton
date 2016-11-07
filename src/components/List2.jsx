var React = require('react');
var Lists = require('./Lists.jsx');

var List2 = React.createClass({
	render:function() {
		var createItem = function(text,index) {
			
			return <Lists key={index + text} text={text}/>
		}

		return(<ul>{this.props.items.map(createItem)}</ul>);
	}
})

module.exports = List2;