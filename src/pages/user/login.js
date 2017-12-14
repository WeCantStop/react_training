import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from '../../components/header'

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h2>Login Page!444444</h2>
                <Header title="Login Page"/>
            </div>
        );
    }
}