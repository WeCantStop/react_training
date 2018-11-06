import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Bundle from '../lib/bundle';
import Home from 'bundle-loader?lazy!../pages/home/home';
import Login from 'bundle-loader?lazy!../pages/user/login';
import Discovery from 'bundle-loader?lazy!../pages/discovery/discovery';
import Setting from 'bundle-loader?lazy!../pages/setting/setting';

const page = (compon) => {
  return () => (
    <Bundle load={compon}>
      {(Page) => <Page />}
    </Bundle>
  );
};

// 路由跳转
export class MainRoots extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={page(Home)} />
        <Route path='/login' component={page(Login)} />
        <Route path='/discovery' component={page(Discovery)} />
        <Route path='/setting' component={page(Setting)} />
      </Switch>
    );
  }
}
