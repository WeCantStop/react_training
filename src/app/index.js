import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {DashBoard, Main} from '../pages/dashboard/index.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <HashRouter>
                <div>
                    <DashBoard></DashBoard>
                    <Main></Main>
                </div>
            </HashRouter>
        );
    }
}

ReactDOM.render( <App /> , document.getElementById('app'));