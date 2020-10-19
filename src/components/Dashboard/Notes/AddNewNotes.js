import React, { Component } from "react";
import AddNewNotesForm from "./AddNewNotesForm";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

class AddNewNotes extends Component {
  render() {
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to='/login' />

    return (
      <div
        className="container valign-wrapper center-align"
        style={{ marginTop: "2%" }}
      >
        <div className="row">
          <div className="col">
            <div className="card ">
              <div className="card-content white-text center-align">
                <AddNewNotesForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default  connect(mapStateToProps)(AddNewNotes);
