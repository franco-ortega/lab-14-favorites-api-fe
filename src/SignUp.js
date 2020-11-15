import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                Sign Up
                <form>
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
