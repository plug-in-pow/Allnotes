import React, { Component } from "react";
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./tools";

class NotesDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
    };
  }

  handleSave = (e) => {
    console.log(e);
  };

  handleDelete = (e) => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <div className="container section project-details">
          <div className="card z-depth-5">
            <div className="card-content">
              {/* <span className="card-title">Title - {this.props.match.params.id}</span> */}
              <div className="action-btn">
                <div
                  className="waves-effect waves-light btn-small center-align blue darken-4"
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
                  className="waves-effect waves-light btn-small center-align red lighten-1"
                  style={{ borderRadius: "20px", marginBottom: "10px" }}
                  onClick={this.handleDelete}
                >
                  Delete
                </div>
              </div>

              <EditorJs tools={EDITOR_JS_TOOLS} logLevel="ERROR" />
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>last edited : yesterday, 20.4AM</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotesDetail;
