import React, { Component } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Section1 />
        <Section2 />
        <Footer />
      </div>
    );
  }
}

export default Home;
