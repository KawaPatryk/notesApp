import React from 'react';
import SingleNote from "../SingleNote/SingleNote";

const DisplayNotes = ({notes}) => {
    console.log(notes)
    return (
        <div className="container">
            {notes.map(note => {
                return <SingleNote note={note}/>
            })}
        </div>
    )
};

export default DisplayNotes;
