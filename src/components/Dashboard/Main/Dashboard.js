import React, { Component } from "react";
import Notification from "../Notes/Notification";
import Notes from "../Notes/Notes";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container ">
        <div className="row">
          <div className="col s12 m6">
            <h5>Saved Notes</h5>
            <Notes />
          </div>
          <div className="col s12 m5 offset-m1">
            <h5>Notification</h5>
            <h6 className="blue-text">Here you can see your work history</h6>
            <Notification />
          </div>
          <div className="fixed-action-btn">
          <a class="btn-floating btn-large waves-effect waves-light red fixed-action-btn" href="/">
            <i class="material-icons" >add</i>
          </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
