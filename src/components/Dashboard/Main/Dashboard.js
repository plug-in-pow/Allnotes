import React, { Component } from "react";
import Notes from "../Notes/Notes";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    const { notesMetaData, auth } = this.props;
    if(!auth.uid) return <Redirect to='/login' />

    return (
      <div className="dashboard notes-container container">
        <div className="center-align">
          <h5>Saved Notes</h5>
          <a href="/dashboard/addnote" style={{ color: "white" }}>
            <button
              data-target="modal1"
              className="waves-effect waves-light btn modal-trigger blue darken-4 z-depth-4"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
              }}
            >
              Add new note
            </button>
          </a>
        </div>
        <Notes notesMetaData={notesMetaData} auth={auth}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    notesMetaData: state.firestore.ordered.notesMetaData,
    auth: state.firebase.auth,
  };
};

export default compose(
  firestoreConnect([{collection:'notesMetaData'}]),
  connect(mapStateToProps)
  )(Dashboard);
