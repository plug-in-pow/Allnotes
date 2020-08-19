import React, { Component } from 'react'

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Log in</h5>
        <div className="input-field">
          <label htmlFor="email" placeholder="Email">
            Email
          </label>
          <input type="email" id="email" onChange={this.handleChange} />
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
        </div>
      </form>
    );
  }
}

export default LoginForm
