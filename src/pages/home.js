import React from 'react';
import {Header} from '../components/header';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h2>Home Page!33333333</h2>
                <Header title="Home Page"/>
            </div>
        );
    }
}
