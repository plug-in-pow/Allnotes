import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import M from "materialize-css";

class SignOutLinks extends Component {
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
            <NavLink
              to="/profile"
              onClick={this.handleClick}
              className="black-text"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              onClick={this.handleClick}
              className="black-text"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              onClick={() => {
                this.props.signOut();
                this.handleClick();
              }}
              className="black-text"
            >
              Sign Out
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              onClick={this.handleClick}
              className="btn btn-floating white z-depth-0 blue-text"
            >
              {this.props.profile.initials}
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
            <NavLink
              to="/dashboard"
              onClick={this.handleClick}
              className="black-text"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              onClick={this.handleClick}
              className="black-text"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              onClick={() => {
                this.props.signOut();
                this.handleClick();
              }}
              className="black-text"
            >
              Sign Out
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              onClick={this.handleClick}
              className="black-text"
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignOutLinks);
