import {Navbar, Nav, Form, FormControl, Button, Modal} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap';
import React, {useState} from 'react';
import DisplayNotes from './DisplayNotes/DisplayNotes.js';
import AddNote from './AddNote/AddNote.js';

import './App.css';


function App() {
    const hardcodedNotes = [
        {title: "Note title", description: "Description", date: "March 20, 2021", category: 'home'},
        {title: "Another note", description: "Jakis tam opis xD", date: "April 02, 2021", category: 'home'},
        {title: "Wyprowadz dziewczyne", description: "Kolejna notatka", date: "March 11, 2021", category: 'work'},
        {title: "Wyprowadz psa", description: "piesek sobie idzie", date: "March 11, 2021", category: 'personal'}
    ];

    const [notes, setNotes] = useState([...hardcodedNotes]);
    const [showModal, setShowModal] = useState(false);

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
        setShowModal(true);
        console.log(note);
        <AddNote close={handleClose} handleCreateNote={handleCreateNote} note={note}/>

    };

    // const handleDelete = () => {
    //
    // }

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
                        {/*<LinkContainer to='addNote'>*/}
                            <Link className="navbarView">
                                <span onClick={handleOpen}>+ ADD NOTE</span>
                                <Modal size="lg" show={showModal} onHide={handleClose}>
                                    <AddNote close={handleClose} handleCreateNote={handleCreateNote}/>
                                </Modal>
                            </Link>
                        {/*</LinkContainer>*/}
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </div>
            <div className='container'>
                <Switch>
                    <Route path="/all">
                        <DisplayNotes handleNoteEdit={handleNoteEdit} notes={notes}/>
                    </Route>
                    <Route path="/home">
                        <DisplayNotes handleNoteEdit={handleNoteEdit} notes={notes.filter(note => note.category === 'home')}/>
                    </Route>
                    <Route path="/work">
                        <DisplayNotes handleNoteEdit={handleNoteEdit} notes={notes.filter(note => note.category === 'work')}/>
                    </Route>
                    <Route path="/personal">
                        <DisplayNotes handleNoteEdit={handleNoteEdit} notes={notes.filter(note => note.category === 'personal')}/>
                    </Route>
                    {/*<Route path="/addNote">*/}
                    {/*    <Modal size="lg" show={showModal} onHide={handleClose}>*/}
                    {/*        <AddNote close={handleClose} handleCreateNote={handleCreateNote}/>*/}
                    {/*    </Modal>*/}
                    {/*</Route>*/}
                </Switch>

            </div>
        </Router>
    );
}

export default App;
