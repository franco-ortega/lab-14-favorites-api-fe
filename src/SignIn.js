import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className='signin-div'>
                Sign In
                <form className='signin-form'>
                    <label>
                        Email: <input />
                    </label>
                    <label>
                        Password: <input />
                    </label>
                    <button className='signin-form-button'>
                        Sign In
                    </button>
                </form>
            </div>
        )
    }
}
