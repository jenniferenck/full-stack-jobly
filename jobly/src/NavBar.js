import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  static defaultProps = {};
  render() {
    const activeStyle = {
      fontWeight: 'bold'
    };
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink
          activeStyle={activeStyle}
          className="navbar-brand"
          exact
          to="/"
        >
          Jobly
        </NavLink>

        <div className="navbar" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                activeStyle={activeStyle}
                className="nav-link"
                to="/companies"
              >
                Companies <span className="sr-only" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={activeStyle}
                className="nav-link"
                to="/jobs"
              >
                Jobs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={activeStyle}
                className="nav-link"
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={activeStyle}
                className="nav-link"
                to="/logout"
              >
                Log out
                {/* HANDLE CLICK on this NavLink to wipe local storage and send back to / */}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
