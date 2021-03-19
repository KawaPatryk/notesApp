import React, {useState} from 'react';
import {Modal, Button} from "react-bootstrap";

const AddNote = ({close, handleCreateNote}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('home');

    const noteCreation = () => {
        let currDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        const note = {title: title, description: description, category: category, date: currDate};
        handleCreateNote(note);
    }

    return (
        <div>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Add Note</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Add title...</span>
                        </div>
                        <input onChange={event => setTitle(event.target.value)} type="text" className="form-control"
                               aria-label="Sizing example input"
                               aria-describedby="inputGroup-sizing-default"/>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text"
                                   htmlFor="inputGroupSelect01">Select Category</label>
                        </div>
                        <select onChange={event => setCategory(event.currentTarget.value)} className="custom-select" id="inputGroupSelect01">
                            <option value="home">Home</option>
                            <option value="work">Work</option>
                            <option value="personal">Personal</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Add description...</span>
                        </div>
                        <textarea onChange={e => setDescription(e.target.value)} className="form-control"
                                  aria-label="With textarea" cols="40" rows="6"/>
                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>Close</Button>
                    <Button variant="primary" onClick={() => noteCreation()}>Add</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default AddNote;
