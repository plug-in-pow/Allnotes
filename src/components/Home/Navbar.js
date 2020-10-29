import React, { Component } from "react";
import SignOutLinks from "./SignOutLinks";
import SignUpLinks from "./SignUpLinks";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import M from 'materialize-css';

class Navbar extends Component {

  componentDidMount() {
    const slide_menu = document.querySelectorAll(".sidenav");
    M.Sidenav.init(slide_menu, {});
  }

  componentDidUpdate() {
    const slide_menu = document.querySelectorAll(".sidenav");
    M.Sidenav.init(slide_menu, {});
  }

  render() {
    const { auth, profile } = this.props;
    const links = auth.uid ? (
      <SignOutLinks profile={profile} />
    ) : (
      <SignUpLinks />
    );
    return (
      <nav className="nav-wrapper z-depth-0">
        <div className="container">
          <Link to="/" className="brand-logo blue-text">
            <b>Allnotes</b>
          </Link>
          <button
            className="sidenav-trigger"
            data-target="slide-out"
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              display: "inline",
              margin: "0",
              padding: "0",
            }}
          >
            <i className="material-icons black-text hide-on-large-only" >menu</i>
          </button>
          {auth.isLoaded && links}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
