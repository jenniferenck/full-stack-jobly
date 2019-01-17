import React, { Component } from 'react';
import Routes from './Routes';
import NavBar from './NavBar';
// import { getCompany, getAllCompanies } from './JoblyApi';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { applied: false };
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="body container">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
