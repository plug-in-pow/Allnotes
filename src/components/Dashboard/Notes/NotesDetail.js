import React, { Component } from "react";
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./tools";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateNote, deleteNote } from "../../../store/actions/noteAction";
import { Redirect } from "react-router-dom";
import moment from "moment";

class NotesDetail extends Component {
  handleSave = async (e) => {
    const savedData = await this.editorInstance.save();
    this.props.updateNote(savedData, this.props.location.state.id);
    this.props.history.push("/dashboard");
  };

  handleDelete = (e) => {
    this.props.deleteNote(this.props.location.state.id);
    this.props.history.push("/dashboard");
  };

  render() {
    const notes = this.props.location.state;
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;

    if (notes.length !== 0) {
      return (
        <div>
          <div className="container section">
            <div
              className="card z-depth-0 green-text center-align"
              style={{
                backgroundColor: "#edf7ed",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <i className="material-icons">error_outline</i>
              <h6>Don't Forget to hit the save button !</h6>
            </div>
            <div className="card z-depth-0" style={{ borderRadius: "15px" }}>
              <div className="card-content">
                <span className="card-title">{notes.title}</span>
                <div className="action-btn">
                  <div
                    className="waves-effect waves-light btn-small center-align blue darken-4 z-depth-0"
                    style={{
                      marginRight: "10px",
                      borderRadius: "20px",
                      marginBottom: "10px",
                    }}
                    onClick={this.handleSave}
                  >
                    Save
                  </div>
                  <div
                    className="waves-effect waves-light btn-small center-align red lighten-1 z-depth-0"
                    style={{ borderRadius: "20px", marginBottom: "10px" }}
                    onClick={this.handleDelete}
                  >
                    Delete
                  </div>
                </div>

                <EditorJs
                  tools={EDITOR_JS_TOOLS}
                  instanceRef={(instance) => (this.editorInstance = instance)}
                  data={notes.data}
                  logLevel="ERROR"
                />
              </div>
              <div
                className="card-action lighten-4 blue-text"
                style={{
                  borderBottomRightRadius: "8px",
                  borderBottomLeftRadius: "8px",
                }}
              >
                <div>
                  Created on  :  {moment(notes.createdAt.toDate()).calendar()}
                </div>
                <div>
                  Last Edited on  :  {moment(notes.lastEdited.toDate()).calendar()} 
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container center-align">
        <h5>Loading note ...</h5>
      </div>
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
    updateNote: (note, id) => dispatch(updateNote(note, id)),
    deleteNote: (id) => dispatch(deleteNote(id)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NotesDetail));
