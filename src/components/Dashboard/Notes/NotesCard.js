import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteNote } from "../../../store/actions/noteAction";
import { connect } from "react-redux";

class NotesCard extends Component {

  handleDelete = (e) => {
    e.preventDefault();
    this.props.deleteNote(this.props.note.id);
  }

  render() {
    return (
      <div className="card z-depth-0">
        <div className="card-content black-text">
          <span className="card-title">{this.props.note.title}</span>
          <p>{this.props.note.description}</p>
        </div>
        <div className="card-action">
          <Link
            to={{
              pathname: "/dashboard/editor",
              state: this.props.note,
            }}
            className="blue-text"
          >
            Edit
          </Link>

          <Link
            to={{
              pathname: "/dashboard",
            }}
            className="red-text"
            onClick={this.handleDelete}
          >
            Delete
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (id) => dispatch(deleteNote(id)),
  };
};

export default connect(null,mapDispatchToProps) (NotesCard);
