import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav.js';


export default class Header extends Component {
    render() {
        return (
            <div className='header-div'>
                <div className='header-search-form-div'>
                    <form onSubmit={this.props.handleSubmitSearch} className='search-form'>
                        <label>
                            <input onChange={ this.props.handleSearchChange } value={this.searchTerm} />
                        </label>
                        <button className='search-button'>
                        <Link to="/search">Search</Link>
                        </button>
                    </form>
                </div>

                <Nav />

                
                <div className='header-button-div'>
                    <button className='sign-up-button'>
                        <Link to="/signup">Sign Up</Link>
                    </button>
                    <button className='sign-in-button'>
                        <Link to="/signin">Sign In</Link>
                    </button>
                </div>
            </div>
        )
    }
}
