import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer blue darken-4">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Allnotes</h5>
              <p className="grey-text text-lighten-4">
                An easy to use online tool for keeping 
                digital notes.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Quick Links</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="/">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright blue darken-3">
          <div className="container">
            © 2020 Allnotes. All Rights Reserved
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
