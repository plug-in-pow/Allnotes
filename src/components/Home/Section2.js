import React, { Component } from "react";

class Section2 extends Component {
  render() {
    return (
      <div className="section2">
        <div className="row">
          <div className="col s12 m4">
            <IconBlock
              icon="settings"
              title="Easy to Work With"
              descr="With simple UI and minimalistic features anyone can easily get start working with it."
            />
          </div>
          <div className="col s12 m4">
            <IconBlock
              icon="edit"
              title="Editable"
              descr="You can edit anytime and anywhere by signing up with your credentials, 
              with recent update detail."
            />
          </div>
          <div className="col s12 m4">
            <IconBlock
              icon="assignment"
              title="Accessible"
              descr="Acessibility and modification without any waste of time can be achieve using this web app."
            />
          </div>
        </div>
      </div>
    );
  }
}

function IconBlock(props) {
  return (
    <div className="icon-block container">
      <div className="center">
        <i className="medium material-icons" style={{ fontSize: "30px" }}>
          {props.icon}
        </i>
        <h5 className="center" style={{ fontSize: "20px", fontWeight: "700" }}>
          {props.title}
        </h5>
        <p
          className="light"
          style={{
            display: "block",
            marginBlockStart: "1em",
            marginBlockEnd: "1em",
            marginInlineStart: "0px",
            marginInlineEnd: "0px",
            lineHeight: "155%",
            fontSize: "15px",
          }}
        >
          {props.descr}
        </p>
      </div>
    </div>
  );
}

export default Section2;
