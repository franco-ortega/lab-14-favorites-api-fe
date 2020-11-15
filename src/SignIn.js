import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                Sign In
                <form className='align-form'>
                    <label>
                        Email: <input />
                    </label>
                    <label>
                        Password: <input />
                    </label>
                    <button>
                        Sign In
                    </button>
                </form>
            </div>
        )
    }
}
