// Main
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { store} from "../Redux/Store/index";
import { Root } from '../router/'
import { DashBoard } from "../components/dashboard";

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
                        <Root />
                        <DashBoard />
                    </div>
                </HashRouter>
            </Provider>
        );
    }
}

ReactDOM.render( <App /> , document.getElementById('app'));
