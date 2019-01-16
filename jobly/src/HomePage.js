import React, { Component } from 'react';

class HomePage extends Component {
  static defaultProps = {};
  render() {
    return (
      <div className="HomePage">
        <h1>Jobly</h1>
        <p>All the jobs in one, convenient place. </p>
        <h3>Welcome Back</h3>
      </div>
    );
  }
}

export default HomePage;
