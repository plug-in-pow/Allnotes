import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotesCard extends Component {
  render() {
    return (
      <div className="card z-depth-0">
        <div className="card-content black-text">
          <span className="card-title">{this.props.note.title}</span>
          <p>{this.props.note.desc}</p>
        </div>
        <div className="card-action">
          <Link
            to={{
              pathname: "/dashboard/editor",
              state: this.props.note.id,
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
          >
            Delete
          </Link>
        </div>
      </div>
    );
  }
}

export default NotesCard;
