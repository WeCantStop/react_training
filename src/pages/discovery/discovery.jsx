import React, {Component} from 'react';

export class Discovery extends Component {
    constructor(props) {
        super(props);
        this.state = {title: 'I am Discovery Page'}
    }

    render() {
        return (
            <h2>{this.state.title}</h2>
        )
    }
}