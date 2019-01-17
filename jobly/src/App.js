import React, { Component } from 'react';
import Routes from './Routes';
import NavBar from './NavBar';
import JoblyApi from './JoblyApi';
// import { getCompany, getAllCompanies } from './JoblyApi';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { applied: false, isLoggedIn: false, error: false };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  async handleSignUp(username, password, firstName, lastName, email) {
    try {
      await JoblyApi.signUp(username, password, firstName, lastName, email);

      this.setState({ isLoggedIn: true });
    } catch (error) {
      this.setState({
        error: true
      });
    }
  }

  async handleLogin(username, password) {
    try {
      await JoblyApi.login(username, password);

      this.setState({ isLoggedIn: true });
    } catch (error) {
      this.setState({
        error: true
      });
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="body container">
          <Routes
            handleLogin={this.handleLogin}
            handleSignUp={this.handleSignUp}
          />
        </div>
      </div>
    );
  }
}

export default App;
