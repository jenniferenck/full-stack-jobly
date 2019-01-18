import React, { Component } from 'react';
import Routes from './Routes';
import NavBar from './NavBar';
import JoblyApi from './JoblyApi';
import { withRouter } from 'react-router-dom';
// import { getCompany, getAllCompanies } from './JoblyApi';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applied: false,
      isLoggedIn: !!localStorage.getItem('token'),
      error: false,
      currentUser: {
        username: '',
        first_name: '',
        last_name: '',
        photo_url: '',
        email: ''
      }
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  async handleSignUp(username, password, first_name, last_name, email) {
    try {
      await JoblyApi.signUp(username, password, first_name, last_name, email);

      this.setState(
        {
          isLoggedIn: true,
          currentUser: { username, first_name, last_name, email, photo_url: '' }
        },
        () => this.props.history.replace('/jobs')
      );
    } catch (error) {
      this.setState({
        error: true
      });
    }
  }

  async handleLogin(username, password) {
    try {
      await JoblyApi.login(username, password);
      const currentUser = await JoblyApi.getUser(username);

      this.setState({ isLoggedIn: true, currentUser: currentUser }, () =>
        this.props.history.replace('/jobs')
      );
    } catch (error) {
      this.setState({
        error: true
      });
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar isLoggedIn={this.state.isLoggedIn} />
        <div className="body container">
          <Routes
            isLoggedIn={this.state.isLoggedIn}
            handleLogin={this.handleLogin}
            handleSignUp={this.handleSignUp}
            currentUser={this.state.currentUser}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
