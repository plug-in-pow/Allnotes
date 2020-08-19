import React from "react";

const NotesDetail = (props) => {
 const id=props.match.params.id;
  return (
    <div>
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Title - {id}</span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea earum
              quam alias quaerat itaque exercitationem sint! Eveniet dolorum
              tempora accusamus!
            </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
              <div>last edited : yesterday, 20.4AM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesDetail;
