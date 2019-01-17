import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      email: '',
      loginActive: true,
      signUpActive: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this);
  }

  handleSubmitLogin(evt) {
    evt.preventDefault();
    this.props.handleLogin({
      username: this.state.username,
      password: this.state.password
    });
    this.setState({ username: '', password: '' });
  }

  handleSubmitSignUp(evt) {
    evt.preventDefault();

    this.props.handleSignUp({
      username: this.state.username,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email
    });
    this.setState({ username: '', password: '' });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    const loginForm = (
      <div className="card">
        <div className="card-body p-1.25">
          <form onSubmit={this.handleSubmitLogin}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Username</label>
              <input
                onChange={this.handleChange}
                name="username"
                value={this.state.username}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                onChange={this.handleChange}
                name="password"
                value={this.state.password}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );

    const signUpForm = (
      <div className="card">
        <div className="card-body p-1.25">
          <form onSubmit={this.handleSubmitSignUp}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Username</label>
              <input
                onChange={this.handleChange}
                name="username"
                value={this.state.username}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                onChange={this.handleChange}
                name="password"
                value={this.state.password}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFirstName">First name</label>
              <input
                onChange={this.handleChange}
                name="firstname"
                value={this.state.firstname}
                type="firstname"
                className="form-control"
                id="exampleInputfirstname1"
                placeholder="First Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleLastName">Last Name</label>
              <input
                onChange={this.handleChange}
                name="lastname"
                value={this.state.lastname}
                type="lastname"
                className="form-control"
                id="exampleInputlastname1"
                placeholder="Last Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleemail">Email</label>
              <input
                onChange={this.handleChange}
                name="email"
                value={this.state.email}
                type="email"
                className="form-control"
                id="exampleInputemail1"
                placeholder="Email"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );

    return (
      <div>
        <div class="btn-group mr-auto" role="group" aria-label="Basic example">
          <button
            onClick={() =>
              this.setState({ loginActive: true, signUpActive: false })
            }
            type="button"
            class="btn btn-secondary"
          >
            Login
          </button>
          <button
            onClick={() =>
              this.setState({ loginActive: false, signUpActive: true })
            }
            type="button"
            class="btn btn-secondary"
          >
            Sign up
          </button>
        </div>
        {this.state.loginActive ? loginForm : signUpForm}
      </div>
    );
  }
}

export default LoginForm;
