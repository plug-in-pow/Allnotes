import React, { Component } from "react";

class SignUpLinks extends Component {
  render() {
    return (
      <div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/" className="black-text">
              About
            </a>
          </li>
          <li>
            <a href="/login" className="black-text">
              Login
            </a>
          </li>
        </ul>
        <ul className="sidenav" id="slide-out">
          <li>
            <h2 className="black-text center">Menu</h2>
          </li>
          <li>
            <a href="/" className="black-text">
              Home
            </a>
          </li>
          <li>
            <a href="/signup" className="black-text">
              Sign Up
            </a>
          </li>

          <li>
            <a href="/login" className="black-text">
              Login
            </a>
          </li>

          <li>
            <a href="/" className="black-text">
              About
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SignUpLinks;
