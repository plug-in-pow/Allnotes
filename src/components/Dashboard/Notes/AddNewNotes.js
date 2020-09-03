import React, { Component } from "react";
import AddNewNotesForm from "./AddNewNotesForm";

class AddNewNotes extends Component {
  render() {
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


export default AddNewNotes;
