import React, { Component } from "react";
import NotesCard from './NotesCard';

class Notes extends Component {
  render() {
    return (
        <div className="notes">
            <NotesCard />
            <NotesCard />
            <NotesCard />
            <NotesCard />
            <NotesCard />
        </div>
    );
  }
}

export default Notes;
