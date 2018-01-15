import React, {Component} from 'react'
import { store } from '../../Redux/Store/'
import { increaseNumber, decreaseNumber } from '../../Redux/Actions/index'

export class Discovery extends Component {
    constructor(props) {
        super(props);
        this.state = {title: 'I am Discovery Page'}
    }

    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <button onClick={this.logStore}>打印Store</button>
                <button onClick={this.increaseNum}>+3</button>
                <button onClick={this.decreaseNum}>-1</button>                
            </div>
        )
    }

    logStore(e) {
        console.log(store.getState());
    }

    increaseNum() {
        store.dispatch(increaseNumber(3));
    }

    decreaseNum() {
        store.dispatch(decreaseNumber(1));
    }
}