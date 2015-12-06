 var React = require('react');
 var Layout = require('./layout');
 
 var Index = React.createClass({
	render : function() {
		return (
			<Layout title={this.props.title}>
				<div>
					<h1>{this.props.title}</h1>
					<p> Welcome to {this.props.title}</p>
				</div>
			</Layout>
		);
	} 
 });
 
 module.exports = Index;