import React, { Component } from 'react'

class AddNewNotesForm extends Component {
  state = {
    title: "",
    description: "",
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
        <h5 className="grey-text text-darken-3">Add new note</h5>
        <div className="input-field">
          <label htmlFor="title">
            Title *
          </label>
          <input type="text" id="title" onChange={this.handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="description">
            Short Description *
          </label>
          <textarea id="textarea1" className="materialize-textarea" onChange={this.handleChange} />
        </div>
        <div style={{ marginTop: "5%" }}>
          <button
            className="btn waves-effect waves-light z-depth-5 blue darken-4"
            type="submit"
            name="action"
            style={{ borderRadius: "20px" }}
          >
            Let's Go
          </button>
        </div>
      </form>
    );
  }
}

export default AddNewNotesForm;
