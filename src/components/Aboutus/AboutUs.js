import React, { Component } from "react";
import AboutPageImage from "../../assets/AboutPage.png";

class AboutUs extends Component {
  render() {
    return (
      <div className="container center-align">
        <div className="row center-align">
          <div className="col s12 m6">
            <img
              src={AboutPageImage}
              alt="Home"
              loading="lazy"
              height={450}
              width={250}
              style={{ margin: "5%" }}
            />
          </div>
          <div className="col s12 m6" style={{ marginTop: "10%" }}>
            <h6>
              We at Allnotes always care about keeping <b>"NOTES"</b>
              <br />
              <br />
              our first priority
              <br />
              <br />
              <i className="material-icons">sentiment_very_satisfied</i> <br />
              <br />
              <br />
              This website is created by Mayank Tripathi.
            </h6>
            <br />
            <br />
            <div className="divider black m6"></div>
            <h5>Contact Details</h5>
            Mail me at <b>tripathimayank36@gmail.com</b> for any query
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
