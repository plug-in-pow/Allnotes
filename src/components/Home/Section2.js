import React, { Component } from "react";

class Section2 extends Component {
  render() {
    return (
      <div className=" blue darken-4 ">
        <div class="row hide-on-med-and-down">
          <div class="col s4 center-align">
            <IconBlock
              icon="settings"
              title="Easy to Work With"
              descr="We did most of the heavy lifting for you to provide a default stylings that 
            incorporate our custom components. Additionally, we refined animations and transitions 
            to provide a smoother experience for developers."
            />
          </div>
          <div class="col s4 center-align">
            <IconBlock
              icon="edit"
              title="Easy to Work With"
              descr="We did most of the heavy lifting for you to provide a default stylings that 
            incorporate our custom components. Additionally, we refined animations and transitions 
            to provide a smoother experience for developers."
            />
          </div>
          <div class="col s4 center-align">
            <IconBlock
              icon="assignment"
              title="Easy to Work With"
              descr="We did most of the heavy lifting for you to provide a default stylings that 
            incorporate our custom components. Additionally, we refined animations and transitions 
            to provide a smoother experience for developers."
            />
          </div>
        </div>

        <div class="col hide-on-large-only">
          <div class="row s4 center-align">
            <IconBlock
              icon="settings"
              title="Easy to Work With"
              descr="We did most of the heavy lifting for you to provide a default stylings that 
              incorporate our custom components. Additionally, we refined animations and transitions 
              to provide a smoother experience for developers."
            />
          </div>
          <div class="row s4 center-align">
            <IconBlock
              icon="edit"
              title="Easy to Work With"
              descr="We did most of the heavy lifting for you to provide a default stylings that 
            incorporate our custom components. Additionally, we refined animations and transitions 
            to provide a smoother experience for developers."
            />
          </div>
          <div class="row s4 center-align">
            <IconBlock
              icon="assignment"
              title="Easy to Work With"
              descr="We did most of the heavy lifting for you to provide a default stylings that 
            incorporate our custom components. Additionally, we refined animations and transitions 
            to provide a smoother experience for developers."
            />
          </div>
        </div>
      </div>
    );
  }
}

function IconBlock(props) {
  return (
    <div className="icon-block" >
      <h2 className="center white-text">
        <i className="medium material-icons" style={{ fontSize:"30px" }}>{props.icon}</i>
        <h5 className="center" style={{ fontSize:"20px" }}>{props.title}</h5>
        <p className="light" style={{ 
                display: "block",
                marginBlockStart: "1em",
                marginBlockEnd: "1em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
                fontSize:"20px" 

         }}>{props.descr}</p>
      </h2>
    </div>
  );
}

export default Section2;
