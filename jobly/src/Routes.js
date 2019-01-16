import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Jobs from './Jobs';
import Companies from './Companies';
import Company from './Company';
import HomePage from './HomePage';

class Routes extends Component {
  static defaultProps = {};
  render() {
    return (
      <div className="Routes">
        <Switch>
          {/* <Routes applied={this.state.applied/> */}
          <Route
            exact
            path="/login"
            render={() => <h1>This is the login page</h1>}
          />
          <Route exact path="/companies" render={() => <Companies />} />
          <Route
            exact
            path="/companies/:name"
            render={props => <Company {...props} />}
          />
          <Route exact path="/jobs" render={() => <Jobs />} />
          <Route
            exact
            path="/profile"
            render={() => <h1>This will render the Profile Component</h1>}
          />
          <Route exact path="/" render={() => <HomePage />} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Routes;
