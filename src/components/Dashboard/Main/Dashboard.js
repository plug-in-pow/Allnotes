import React, { Component } from "react";
import Notes from "../Notes/Notes";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { notes } = this.props;

    return (
      <div className="dashboard notes-container container">
        <div className="center-align">
          <h5>Saved Notes</h5>
          <button
            data-target="modal1"
            className="waves-effect waves-light btn modal-trigger blue darken-4 z-depth-4"
            style={{
              marginBottom:"10px",
              borderRadius:"20px"
            }}
          >
            <a href="/dashboard/addnote" style={{ color: "white" }}>
              Add new note
            </a>
          </button>
        </div>
        <Notes notes={notes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.note.notes,
  };
};

export default connect(mapStateToProps)(Dashboard);
