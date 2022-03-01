import {Navbar, Nav, Form, FormControl, Button, Modal} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap';
import React, {useState} from 'react';
import DisplayNotes from './DisplayNotes/DisplayNotes.js';
import AddEditNote from './AddEditNote/AddEditNote.js';
import './App.css';

let cloneDeep = require("lodash.clonedeep");

function App() {
    const hardcodedNotes = [
        {
            title: "Buy milk",
            description: "There is milk sale in a local store",
            date: '2021/03/22',
            category: 'home',
            strikethrough : false,
            id: 0
        },
        {
            title: "Lorem ipsum dolor sit amet",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: '2021/03/22',
            category: 'work',
            strikethrough : false,
            id: 1
        },
    ];

    const [notes, setNotes] = useState([...hardcodedNotes]);
    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [editNote, setEditNote] = useState("");


    const handleClose = () => {
        setShowModal(false);
    };

    const handleOpen = () => {
        setShowModal(true);
        setEditNote("");
    };

    const handleCreateNote = (note) => {
        setNotes(prevState => {
                let newState = [...prevState];
                newState.push(note);
                return newState
            }
        );
    };

    const handleDelete = ({title}) => {
        setNotes(prevState => {
            let newState = cloneDeep(prevState);
            return newState.filter(note => note.title !== title);
        })
    };

    const isSearched = searchTerm => {
        return item => {
            return !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase())
        }
    };

    const onSearchChange = event => {
        setSearchTerm(event.target.value)
    };

    const handleModalPopulation = (note) => {
        handleOpen();
        setEditNote(note);
    };


    const handleNoteEdit = (noteToEdit) => {
        setNotes(prevState => {
            let newState = cloneDeep(prevState);
            let note = newState[newState.findIndex(note => note.id === noteToEdit.id)];
            note.title = noteToEdit.title;
            note.description = noteToEdit.description;
            note.category = noteToEdit.category;
            return newState;

        })
    }

    const handleCheckbox = (value, noteId) => {
        setNotes(prevState => {
            let newState = cloneDeep(prevState);
            let note = newState[newState.findIndex(note=> note.id === noteId)]
            note.strikethrough = !note.strikethrough;
            return newState
        })
    }


    return (
        <Router>
            <div className="container">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/all">Noteapp</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link to='/all' className="navbarView" >All</Link>
                        <Link to='/home' className="navbarView">Home</Link>
                        <Link to='/work' className="navbarView">Work</Link>
                        <Link to='/personal' className="navbarView">Personal</Link>
                        <Link className="navbarView">
                            <span onClick={handleOpen}>+ ADD NOTE</span>
                            <Modal size="lg" show={showModal} onHide={handleClose}>
                                <AddEditNote handleClose={handleClose} handleCreateNote={handleCreateNote}
                                             note={editNote} handleNoteEdit={handleNoteEdit}/>
                            </Modal>
                        </Link>
                    </Nav>
                    <Form inline>
                        <FormControl value={searchTerm} onChange={onSearchChange} type="text" placeholder="Search"
                                     className="mr-sm-2"/>
                    </Form>
                </Navbar>
            </div>
            <div className='container'>
                <Redirect to="/all"/>
                <Switch>
                    <Route path="/all">
                        <DisplayNotes handleDelete={handleDelete} handleModalPopulation={handleModalPopulation}
                                      notes={notes.filter(isSearched(searchTerm))} handleCheckbox={handleCheckbox}/>
                    </Route>
                    <Route path="/home">
                        <DisplayNotes handleDelete={handleDelete} handleModalPopulation={handleModalPopulation}
                                      notes={notes.filter(note => note.category === 'home' && isSearched(searchTerm)(note))} handleCheckbox={handleCheckbox}/>
                    </Route>
                    <Route path="/work">
                        <DisplayNotes handleDelete={handleDelete} handleModalPopulation={handleModalPopulation}
                                      notes={notes.filter(note => note.category === 'work' && isSearched(searchTerm)(note))} handleCheckbox={handleCheckbox}/>
                    </Route>
                    <Route path="/personal">
                        <DisplayNotes handleDelete={handleDelete} handleModalPopulation={handleModalPopulation}
                                      notes={notes.filter(note => note.category === 'personal' && isSearched(searchTerm)(note))} handleCheckbox={handleCheckbox}/>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
