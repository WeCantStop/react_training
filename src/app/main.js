// Main
import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from '../router/'


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Root />
        );
    }
}

ReactDOM.render( <App /> , document.getElementById('app'));
