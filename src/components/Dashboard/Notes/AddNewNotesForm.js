import React, { Component } from 'react';
import {connect} from 'react-redux';
import { createNote } from '../../../store/actions/noteAction';
import { withRouter } from 'react-router-dom'; 
import { Redirect } from 'react-router-dom';

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
    this.props.createNote(this.state);
    this.props.history.push('/dashboard'); 
  };

  render() {
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to='/login' />

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
          <textarea id="description" className="materialize-textarea" onChange={this.handleChange} />
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

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNote: (data) => dispatch(createNote(data)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AddNewNotesForm));
