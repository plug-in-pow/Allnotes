import React, { Component } from "react";
import HomeImage from "../../assets/planbw.png";
import { connect } from "react-redux";

class Section1 extends Component {
  render() {
    const { auth } = this.props;
    const link = !auth.uid ? (
      <a
        className="waves-effect waves-light btn-small blue darken-4 z-depth-5"
        href="/signup"
        style={{ borderRadius: "20px", margin: "5%" }}
      >
        Sign Up Free
      </a>
    ) : (
      <a
        className="waves-effect waves-light btn-small blue darken-4 z-depth-5"
        href="/dashboard"
        style={{ borderRadius: "20px", margin: "5%" }}
      >
        Dashboard
      </a>
    );

    return (
      <div
        className="container center-align"
        style={{ marginTop: "5%", marginBottom: "5%" }}
      >
        <div className="row center-align ">
          <div className="col s12 m6 bold-text">
            <h4>
              Want to write some notes
              <br />
              then you are at the right place.
            </h4>
            <h6>Write once acess any time.</h6>
            {auth.isLoaded && link}
          </div>
          
          <div className="col s12 m6 center-align">
            <img
              src={HomeImage}
              alt="Home"
              loading="lazy"
              height={230}
              style={{ margin: "5%" }}
            />
          </div>
        </div>

        <div className="divider"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Section1);
