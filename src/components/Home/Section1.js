import React, { Component } from "react";

class Section1 extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ marginTop: "10%", marginBottom: "5%" }}
      >
        <div className="col">
          <div className="col s6 center-align bold-text">
            <h4>
              Want to write same notes
              <br/>then you are at the
              right place.
            </h4>
          </div>
          <div className="col s6 center-align">
            <h6>Write once acess any time.</h6>
            <div className="col s6 center-align" style={{ marginTop: "5%" }}>
              <a
                className="waves-effect waves-light btn-small blue darken-4 z-depth-5"
                href="/signup"
                style={{ borderRadius: "20px" }}
              >
                Sign Up Free
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section1;
