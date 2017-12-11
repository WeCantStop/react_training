import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from '../components/header';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return ( 
            <div> 
                <h2>How to study!</h2>
                <Header title="Helo"/>  
            </div>
        );
    }
}

ReactDOM.render( <App /> , document.getElementById('app'));