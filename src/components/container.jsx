import React, {Component} from 'react';

export class Container extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="main-container">
				{this.props.children}
			</div>
		);
	}
}