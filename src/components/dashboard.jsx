import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/dashboard.scss';

export class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <footer>
                <nav className="main-tab">
                    <ul className='nav'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/discovery'>discovery</Link></li>
                    </ul>
                </nav>
            </footer>
        );
    }
}