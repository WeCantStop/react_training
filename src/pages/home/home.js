import React, {Component} from 'react';
import {Header} from '../../components/header';
import './home.scss';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeTitle: 'Home Page!33333333'
        };
    }

    handleClick() {
        console.log('123');
    }

    fatherHandleClick(data) {
        console.log(data);
        this.setState({'homeTitle': data});
    }
    render() {
        return (
            <div>
                <h2 className="test" onClick={this.handleClick}>{this.state.homeTitle}</h2>
                <Header emitDataToParent={this.fatherHandleClick.bind(this)}/>
            </div>
        );
    }
}
