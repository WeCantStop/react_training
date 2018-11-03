import React, {Component} from 'react';
import wrapperFunc from './highComponent';

class GreetOriginal extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>Welcome {this.props.username || 'no name'}</div>
		);
	}

}

export const Greet = wrapperFunc(GreetOriginal);
