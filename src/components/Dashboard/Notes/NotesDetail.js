import React, { Component } from "react";
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./tools";
import { connect } from "react-redux";
import { updateNote } from '../../../store/actions/noteAction';

class NotesDetail extends Component {
  handleSave = async (e) => {
    const savedData = await this.editorInstance.save();
    this.props.updateNote(savedData);
  };

  handleDelete = (e) => {
    console.log(e);
  };

  render() {
    const { notes } = this.props;
    const { state } = this.props.location;

    for (var i = 0; i < notes.length; i++) {
      if (notes[i].id === state) {
        return (
          <div>
            <div className="container section">
              <div
                className="card z-depth-0 green-text center-align"
                style={{
                  backgroundColor: "#edf7ed",
                  padding:"10px",
                  borderRadius:"10px"
                }}
              >
                <i className="material-icons">error_outline</i>
                <h6>Don't Forget to hit the save button !</h6>
              </div>
              <div className="card z-depth-0" style={{ borderRadius: "15px" }}>
                <div className="card-content">
                  <span className="card-title">Title - {notes[i].title}</span>
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
                    data={notes[i].data}
                    logLevel="ERROR"
                  />
                </div>
                <div
                  className="card-action blue lighten-3 black-text"
                  style={{
                    borderBottomRightRadius: "8px",
                    borderBottomLeftRadius: "8px",
                  }}
                >
                  <div>last edited : yesterday, 20.4AM</div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
    return (
      <div className="container center-align">
        <h5>No result</h5>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.note.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNote: (note) => dispatch(updateNote(note))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NotesDetail);
