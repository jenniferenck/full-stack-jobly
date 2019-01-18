import React, { Component } from 'react';
import Routes from './Routes';
import NavBar from './NavBar';
import JoblyApi from './JoblyApi';
import { withRouter } from 'react-router-dom';
import decode from 'jwt-decode';
// import { getCompany, getAllCompanies } from './JoblyApi';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: !!localStorage.getItem('token'),
      error: false,
      currentUser: {
        username: '',
        first_name: '',
        last_name: '',
        photo_url: '',
        email: ''
      },
      isApplied: false,
      buttonHasBeenDisabled: null
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleApply = this.handleApply.bind(this);
  }

  /*
  what happens when you hard refresh the page? You need to make sure the app can recover your login status.
  To handle this problem in your top-level App component, 
  add a localStorage check inside of componentDidMount. 
  If there’s a valid token in localStorage, then ping the API 
  to get all of the information on the current user and store it in 
  the App component’s state (e.g. this.state.currentUser). 
  This will let you pass current info down as a prop to any descendant component, too.
  */

  async componentDidMount() {
    // decode token
    if (this.state.isLoggedIn) {
      let token = localStorage.getItem('token');
      let username = decode(token).username;

      this.setState({ currentUser: await JoblyApi.getUser(username) });
    }
  }

  async handleApply(jobId) {
    try {
      let res = await JoblyApi.applyToJob(jobId);
      this.setState({
        isApplied: true
      });
    } catch (error) {
      this.setState({
        error: true
      });
      console.log('error msg', error);
    }
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

  handleLogout() {
    try {
      localStorage.clear();
      this.setState(
        {
          isLoggedIn: false,
          currentUser: {
            username: '',
            first_name: '',
            last_name: '',
            photo_url: '',
            email: ''
          }
        },
        () => this.props.history.replace('/')
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
        <NavBar
          isLoggedIn={this.state.isLoggedIn}
          handleLogout={this.handleLogout}
        />
        <div className="body container">
          <Routes
            handleApply={this.handleApply}
            buttonHasBeenDisabled={this.state.buttonHasBeenDisabled}
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
