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
import AddNote from './AddNote/AddNote.js';
import './App.css';

let cloneDeep = require("lodash.clonedeep")

function App() {
    const hardcodedNotes = [
        {title: "Note title", description: "Description", date: "March 20, 2021", category: 'home'},
        {title: "Another note", description: "Jakis tam opis xD", date: "April 02, 2021", category: 'home'},
        {title: "Wyprowadz dziewczyne", description: "Kolejna notatka", date: "March 11, 2021", category: 'work'},
        {title: "Wyprowadz psa", description: "piesek sobie idzie", date: "March 11, 2021", category: 'personal'}
    ];

    const [notes, setNotes] = useState([...hardcodedNotes]);
    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const handleClose = () => {
        setShowModal(false);
    };

    const handleOpen = () => {
        setShowModal(true);
    };

    const handleCreateNote = (note) => {
        setNotes(prevState => {
                //moze nie dzialac jak bede chcial edytowac bo mutowanie stanu
                let newState = [...prevState];
                newState.push(note);
                return newState
            }
        );
        console.log(notes);
    };

    const handleNoteEdit = (note) => {

        console.log("handleNoteEdit run");
        handleOpen();
        <AddNote handleClose={handleClose} handleCreateNote={handleCreateNote} note={note}/>;


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
        // console.log(searchTerm)
    };

    return (
        <Router>
            <div className="container">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/all">Noteapp</Navbar.Brand>
                    <Nav className="mr-auto">
                        <LinkContainer to='/all'>
                            <Link className="navbarView">All</Link>
                        </LinkContainer>
                        <LinkContainer to='/home'>
                            <Link className="navbarView">Home</Link>
                        </LinkContainer>
                        <LinkContainer to='work'>
                            <Link className="navbarView">Work</Link>
                        </LinkContainer>
                        <LinkContainer to="personal">
                            <Link className="navbarView">Personal</Link>
                        </LinkContainer>
                        <Link className="navbarView">
                            <span onClick={handleOpen}>+ ADD NOTE</span>
                            <Modal size="lg" show={showModal} onHide={handleClose}>
                                <AddNote close={handleClose} handleCreateNote={handleCreateNote}/>
                            </Modal>
                        </Link>
                    </Nav>
                    <Form inline>
                        <FormControl value={searchTerm} onChange={onSearchChange} type="text" placeholder="Search" className="mr-sm-2"/>
                    </Form>
                </Navbar>
            </div>
            <div className='container'>
                <Redirect to="/all"/>
                <Switch>
                    <Route path="/all">
                        <DisplayNotes handleDelete={handleDelete} handleNoteEdit={handleNoteEdit} notes={notes.filter(isSearched(searchTerm))}/>
                    </Route>
                    <Route path="/home">
                        <DisplayNotes handleDelete={handleDelete} handleNoteEdit={handleNoteEdit}
                                      notes={notes.filter(note => note.category === 'home').filter(isSearched(searchTerm))}/>
                    </Route>
                    <Route path="/work">
                        <DisplayNotes handleDelete={handleDelete} handleNoteEdit={handleNoteEdit}
                                      notes={notes.filter(note => note.category === 'work').filter(isSearched(searchTerm))}/>
                    </Route>
                    <Route path="/personal">
                        <DisplayNotes handleDelete={handleDelete} handleNoteEdit={handleNoteEdit}
                                      notes={notes.filter(note => note.category === 'personal').filter(isSearched(searchTerm))}/>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
