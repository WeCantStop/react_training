import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../pages/home/home'
import Login from '../pages/user/login'
import { Discovery } from '../pages/discovery/discovery'
import { Setting } from '../pages/setting/setting'


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

export class Root extends Component {

    render() {
        return (
            <MainRoots/>
        )
    }
}
