import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { store } from './store';

export class Setting extends Component {
	goToSetting() {
		store.changeName();
		console.log(store);
	}
	render() {
		return (
			<Provider store>
				<div>
					<h2>I am Setting Page</h2>
					<div>{store.name}</div>
					<button onClick={this.goToSetting}>go setting2</button>
				</div>
			</Provider>
		);
	}
}
