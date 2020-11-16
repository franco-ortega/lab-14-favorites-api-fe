import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className='home-div'>
                Welcome to Pizza!!!
                <div className='cube-div'>
                    <h1>Pizza</h1>
                </div>
                <div className='trending-div'>
                    
                    <button className='trending-button'>
                        Pizza #1
                    </button>
                    <button className='trending-button'>
                        Pizza #2
                    </button>
                    <button className='trending-button'>
                        Pizza #3
                    </button>
                </div>
            </div>
        )
    }
}
