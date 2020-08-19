import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class SignOutLinks extends Component {
  render() {
    return (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <NavLink to="/" className="black-text">
            Sign Out
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="black-text">
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className="btn btn-floating white z-depth-0 blue-text"
          >
            MT
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default SignOutLinks;
