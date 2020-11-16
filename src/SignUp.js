import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className='signup-div'>
                Sign Up
                <form className='signup-form'>
                    <label>
                        Email: <input />
                    </label>
                    <label>
                        Password: <input />
                    </label>
                    <button className='signup-form-button'>
                        Sign Up
                    </button>
                </form>
            </div>
        )
    }
}
