import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Profile extends Component {
  render() {
    const { auth, profile } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <div
        className="container valign-wrapper center-align wrap-text"
        style={{ top: "50px" }}
      >
        <div className="row">
        <div className="card">
              <div className="card-content center-align black-text">
          <div className="divider"></div>
          <div className="section">
            <div className="col s6">First Name :</div>
            <div className="col s6">{profile.firstName}</div>
          </div>
          <div className="divider"></div>
          <div className="section">
            <div className="col s6">Last Name :</div>
            <div className="col s6">{profile.lastName}</div>
          </div>
          <div className="divider"></div>
          <div className="section">
            <div className="col s6">Email :</div>
            <div className="col s6 ">{auth.email}</div>
          </div>
        </div>
        </div></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Profile);
