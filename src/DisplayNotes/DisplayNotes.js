import React from 'react';

const DisplayNotes = ({notes}) => {
    console.log(notes)
    return (
        <div className="container">
            {notes.map(note => {
                return (
                    <div className="container" style={{borderStyle: "solid", borderColor: "blue", width: "50%", display:"inline-block"}}>
                        <label><input type="checkbox"/> {note.title}</label>
                        <p>{note.description}</p>
                        <p>{note.date}</p>
                    </div>
                )
            })}
        </div>
    )
};

export default DisplayNotes;
