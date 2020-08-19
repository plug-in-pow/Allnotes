import React from 'react';

function NotesCard() {
    return(
        <div className="row">
          <div className="col">
            <div className="card blue-grey darken-3">
              <div className="card-content white-text">
                <span className="card-title">Card Title</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore blanditiis ratione.
                </p>
              </div>
              <div className="card-action">
                <a href="/dashboard"><i className="material-icons">edit</i></a>
                <a href="/dashboard"><i className="material-icons">delete</i></a>
              </div>
            </div>
          </div>
        </div>
    );
}

export default NotesCard;