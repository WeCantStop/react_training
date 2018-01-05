import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { DashBoard } from '../components/dashboard.jsx';
import { Home } from '../pages/home/home.jsx';
import { Login } from '../pages/user/login.jsx';
import { Discovery } from '../pages/discovery/discovery.jsx';


// 路由跳转
export class MainRoots extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/discovery' component={Discovery} />                
            </Switch>
        );
    }
}

export class Root extends Component {

    render() {
        return (
            <HashRouter>
                <div>
                    <MainRoots/>
                    <DashBoard/>
                </div>
            </HashRouter>
        )
    }
}
