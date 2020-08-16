import React, { Component } from "react";

class Section1 extends Component {
  render() {
    return (
      <div className=" blue lighten-5 ">
        <div className="col">
          <div className="col s6 center-align bold-text">
            <HomeIntro />
          </div>
          <div className="col s6 center-align">2</div>
        </div>
      </div>
    );
  }
}

function HomeIntro() {
  return <div className="Intro">Allnotes</div>;
}

export default Section1;
