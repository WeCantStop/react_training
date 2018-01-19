<<<<<<< HEAD
import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { DashBoard } from '../components/dashboard.jsx';
import { Home } from '../pages/home/home.jsx';
import { Login } from '../pages/user/login.jsx';
import { Discovery } from '../pages/discovery/discovery.jsx';
import { Setting } from '../pages/setting/setting.jsx';
=======
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Bundle from '../../lib/bundle'
import { Home } from '../pages/home/home'
// import Login from '../pages/user/login'
import LoginContainer from 'bundle-loader?lazy&name=[name]!../pages/user/login'
import DiscoveryContainer from 'bundle-loader?lazy&name=[name]!../pages/discovery/discovery'
import { Setting } from '../pages/setting/setting'
>>>>>>> 21048d39946a1d70bdbf678f360a2543f2a36304

const Login = () => (
    <Bundle load={LoginContainer}>
        {(Login) => <Login />}
    </Bundle>
);

const Discovery = () => (
    <Bundle load={DiscoveryContainer}>
        {(Discovery) => <Discovery />}
    </Bundle>
);

// 路由跳转
export class MainRoots extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/discovery' component={Discovery} />
                <Route path='/setting' component={Setting} />
            </Switch>
        );
    }
}
