import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className='header-div'>
                Header
                <div className='links-div'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/signin">Sign In</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/search">Search</Link></li>
                        <li><Link to="/favorites">Favorites</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
