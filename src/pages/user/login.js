import React from 'react';
import {Header} from '../../components/header';
import './login.scss';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h2 className="login-title">Login Page!444444</h2>
                <Header title="Login Page"/>
            </div>
        );
    }
}