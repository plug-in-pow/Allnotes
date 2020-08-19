import React, { Component } from "react";
import LoginForm from "./LoginForm";

class Login extends Component {
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
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Login;
