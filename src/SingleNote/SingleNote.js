import React from 'react';

const SingleNote = ({note}) => {
    return(
        <div className="container" style={{borderStyle: "solid", borderColor: "blue", width: "50%", display:"inline-block"}}>
            <label><input type="checkbox"/> {note.topic}</label>
            <p>{note.description}</p>
            <p>{note.date}</p>
        </div>
    )
};

export default SingleNote
