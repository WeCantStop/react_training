import React from 'react';
import {Header} from '../../components/header.jsx';
import {Container} from "../../components/container.jsx";
import './login.scss';
import {store} from '../../Redux/Store/index.jsx'
import {increaseNumber, decreaseNumber} from '../../Redux/Actions/index.jsx';


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: store.getState()
        }
    }

    componentWillMount() {
        const subscription$ = store.subscribe(this.onChange.bind(this));
    }

    render() {
        return (
            <div>
                <h2 className="login-title">Login Page!444444</h2>
                <Header title="Login Page"/>
                <Container>
                    <h1>我是container里面的内容</h1>
                    <h2>我是container里面的内容2</h2>
                    <h3>我是container里面的内容3</h3>
                    <h3>{this.state.number}</h3>
                    <button onClick={this.getStoreState}>打印Store</button>
                    <button onClick={this.increase}>+1</button>
                    <button onClick={this.decrease}>-1</button>
                </Container>
            </div>
        );
    }

    onChange() {
        this.setState({
            number: store.getState()
        });
    }

    getStoreState() {
        console.log(store.getState());
    }

    increase() {
        // store触发reducer 使用 ActionCreateFunc 使得 action 更灵活
        store.dispatch(increaseNumber(2));
    }

    decrease() {
        // store触发reducer
        store.dispatch(decreaseNumber(1));
    }
}
