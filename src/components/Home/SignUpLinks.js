import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css";

class SignUpLinks extends Component {
  handleClick = (e) => {
    const slide_menu = document.querySelectorAll(".sidenav");
    M.Sidenav.init(slide_menu, {});
  };

  render() {
    return (
      <div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
            <NavLink to="/" onClick={this.handleClick} className="black-text">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutUs" onClick={this.handleClick} className="black-text">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" onClick={this.handleClick} className="black-text">
              Login
            </NavLink>
          </li>
        </ul>
        <ul className="sidenav" id="slide-out">
          <li>
            <h2 className="black-text center">Menu</h2>
          </li>
          <li>
            <NavLink to="/" onClick={this.handleClick} className="black-text">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup"  onClick={this.handleClick} className="black-text">
              Sign Up
            </NavLink>
          </li>

          <li>
            <NavLink to="/login" onClick={this.handleClick} className="black-text">
              Login
            </NavLink>
          </li>

          <li>
            <NavLink to="/aboutus" onClick={this.handleClick} className="black-text">
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default SignUpLinks;
