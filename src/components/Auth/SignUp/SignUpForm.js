import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../../store/actions/authActions";

class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signUp(this.state);
  };
  
  render() {
    const {authError} = this.props;

    return (
      <form onSubmit={this.handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={this.handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={this.handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="validate" onChange={this.handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={this.handleChange} />
        </div>

        <div style={{ marginTop: "5%" }}>
          <button
            className="btn waves-effect waves-light z-depth-5 blue darken-4"
            type="submit"
            name="action"
            style={{ borderRadius: "20px" }}
          >
            Submit
          </button>
          <div className="red-text ">
            {authError ? <p>{authError}</p> : null}
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError : state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUpForm);
