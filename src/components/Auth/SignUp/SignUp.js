import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
  render() {
    const { auth } = this.props;
    if(auth.uid) return <Redirect to='/dashboard' />

    return (
      <div
        className="container valign-wrapper center-align"
        style={{ marginTop: "2%" }}
      >
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-content white-text center-align">
                <SignUpForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};


export default connect(mapStateToProps)(SignUp);
