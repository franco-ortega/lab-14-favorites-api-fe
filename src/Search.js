import React, { Component } from 'react'

export default class Search extends Component {


    render() {
        return (
            <div>
                Search Page
                <form onSubmit={this.props.handleSubmitSearch}>
                    <label>
                        Search: <input onChange={ this.props.handleSearchChange } value={this.searchTerm} />
                    </label>
                    <button>
                        Sign In
                    </button>
                </form>
                You searched for {this.props.searchTerm}!
            </div>
        )
    }
}
