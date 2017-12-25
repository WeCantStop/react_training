import React from 'react';
import {Header} from '../../components/header.jsx';
import {Container} from "../../components/container.jsx";
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
                <Container>
                    <h1>我是container里面的内容</h1>
                    <h2>我是container里面的内容2</h2>
                    <h3>我是container里面的内容3</h3>
                </Container>
            </div>
        );
    }
}