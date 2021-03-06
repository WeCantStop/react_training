// Main
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from '../redux/index';
import { MainRoots } from '../router/';
import { DashBoard } from '../components/dashboard';

// 启用热更新
if (module.hot) {
  module.hot.accept();
}

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className={'main-wrapper'}>
            <MainRoots />
            <DashBoard />
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
