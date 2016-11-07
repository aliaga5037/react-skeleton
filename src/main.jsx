var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Root" head="red"/>,document.getElementById('root'));
ReactDOM.render(<ListManager title="To Do" head="green"/>,document.getElementById('todo'));
ReactDOM.render(<ListManager title="ingredients"/>,document.getElementById('ing'));