import React from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import {Home} from '../home/home';
import {Login} from '.././user/login';
import './index.scss';


export class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <header>
                <nav>
                    <ul className='nav'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/login' component={Login}/>
            </Switch>
        );
    }
}