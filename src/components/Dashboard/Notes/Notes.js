import React from "react";
import NotesCard from './NotesCard';

const Notes = ({notes}) => {
    return (
        <div className="col container">
            {
              notes && notes.map(note =>{
                return (
                  <NotesCard note={note} key={note.id}/>
                );
              })
            }
        </div>
    );
}

export default Notes;
