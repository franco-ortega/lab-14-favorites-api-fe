import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                Sign Up
                <form className='align-form'>
                    <label>
                        Email: <input />
                    </label>
                    <label>
                        Password: <input />
                    </label>
                    <button>
                        Sign Up
                    </button>
                </form>
            </div>
        )
    }
}
