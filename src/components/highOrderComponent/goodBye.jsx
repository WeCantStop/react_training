import React, {Component} from 'react';
import wrapperFunc from './highComponent';

class GoodByeOriginal extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>GoodBye {this.props.username || 'no name'}</div>
		);
	}

}

export const GoodBye = wrapperFunc(GoodByeOriginal);
