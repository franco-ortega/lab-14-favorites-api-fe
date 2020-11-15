import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';
import Search from './Search.js';
import Favorites from './Favorites.js';
import Footer from './Footer.js';

export default class App extends Component {


  state = {
    searchTerm: ''
}

handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value })
}

handleSubmitSearch = (e) => {
    e.preventDefault()
    console.log('form data clicked')
}

  render() {
    return (
      <div>
        <div>

                <Router>
                  <Header />
                  Search Result: {this.state.searchTerm}
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Home {...routerProps} />} 
                        />
                        <Route 
                            path="/signup" 
                            exact
                            render={(routerProps) => <SignUp {...routerProps} />} 
                        />
                        <Route 
                          path="/signin" 
                          exact
                          render={(routerProps) => <SignIn {...routerProps} />} 
                        />
                        <Route 
                          path="/search" 
                          exact
                          render={(routerProps) => <Search {...routerProps}
                          handleSearchChange={this.handleSearchChange}
                          handleSubmitSearch={this.handleSubmitSearch}
                          searchTerm={this.state.searchTerm} />} 
                        />
                        <Route 
                          path="/favorites" 
                          exact
                          render={(routerProps) => <Favorites {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>

        <Footer />


      </div>
    )
  }
}
