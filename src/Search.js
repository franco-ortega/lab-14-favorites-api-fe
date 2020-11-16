import React, { Component } from 'react'

export default class Search extends Component {


    render() {
        return (
            <div className='search-div'>
                Search Page
                {/* <form onSubmit={this.props.handleSubmitSearch} className='align-form'>
                    <label>
                        Search: <input onChange={ this.props.handleSearchChange } value={this.searchTerm} />
                    </label>
                    <button>
                        Search
                    </button>
                </form> */}
                <p>
                    You searched for {this.props.searchTerm}!
                </p>
                
            </div>
        )
    }
}
