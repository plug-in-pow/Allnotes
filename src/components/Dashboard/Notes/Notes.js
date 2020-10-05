import React from "react";
import NotesCard from './NotesCard';

const Notes = ({notesMetaData}) => {
    return (
        <div className="col container">
            {
              notesMetaData && notesMetaData.map(note =>{
                return (
                  <NotesCard note={note} key={note.id}/>
                );
              })
            }
        </div>
    );
}

export default Notes;
