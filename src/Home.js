import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className='home-div'>
                Welcome Home!!!
                <div className='cube-div'>
                    <h1>CUBE</h1>
                </div>
                <div className='trending-div'>
                    
                    <button className='trending-button'>
                        Trending #1
                    </button>
                    <button className='trending-button'>
                        Trending #2
                    </button>
                    <button className='trending-button'>
                        Trending #3
                    </button>
                </div>
            </div>
        )
    }
}
