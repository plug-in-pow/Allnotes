import React, { Component } from "react";
import SignUpForm from "./SignUpForm";

class SignUp extends Component {
  render() {
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


export default SignUp;
