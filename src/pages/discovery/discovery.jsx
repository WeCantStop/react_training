import React, {Component} from 'react';
import {store} from '../../Redux/Store/index.jsx';

export class Discovery extends Component {
    constructor(props) {
        super(props);
        this.state = {title: 'I am Discovery Page'}
    }

    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <button onClick={this.showStore}>打印Store</button>
            </div>
        )
    }

    showStore() {
        console.log(store.getState());
    }
}