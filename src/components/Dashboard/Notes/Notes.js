import React from "react";
import NotesCard from './NotesCard';

const Notes = ({notesMetaData,auth}) => {
    return (
        <div className="col container">
            {
              notesMetaData && notesMetaData.slice(0).reverse().map(note =>{
                if (note.authorId === auth.uid){
                  return (
                    <NotesCard note={note} key={note.id}/>
                  );
                }else{
                  return null
                }
              })
            }
        </div>
    );
}

export default Notes;
