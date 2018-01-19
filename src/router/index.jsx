import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Bundle from '../../lib/bundle'
import { Home } from '../pages/home/home'
// import Login from '../pages/user/login'
import LoginContainer from 'bundle-loader?lazy&name=[name]!../pages/user/login'
import DiscoveryContainer from 'bundle-loader?lazy&name=[name]!../pages/discovery/discovery'
import { Setting } from '../pages/setting/setting'

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
