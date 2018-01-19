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
                        <li><Link to='/discovery'>Discovery</Link></li>
<<<<<<< HEAD
                        <li><Link to='/setting'>Setting</Link></li>
=======
                        <li><Link to='/setting'>Setting</Link></li>                        
>>>>>>> 21048d39946a1d70bdbf678f360a2543f2a36304
                    </ul>
                </nav>
            </footer>
        );
    }
}