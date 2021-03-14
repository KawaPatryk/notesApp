import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
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
        {topic: "Note topic", description: "Description", date: "March 20, 2021", category: 'home'},
        {topic: "Another note", description: "Jakis tam opis xD", date: "April 02, 2021", category: 'home'},
        {topic: "Wyprowadz dziewczyne", description: "Kolejna notatka", date: "March 11, 2021", category: 'work'},
        {topic: "Wyprowadz psa", description: "piesek sobie idzie", date: "March 11, 2021", category: 'personal'}
    ];
    const [notes, setNotes] = useState(hardcodedNotes);
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
                        <LinkContainer to='addNote'>
                            <Link className="navbarView">ADD NOTE</Link>
                        </LinkContainer>
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
                        <DisplayNotes notes={notes}/>
                    </Route>
                    <Route path="/home">
                        <DisplayNotes notes={notes.filter(note => note.category === 'home')}/>
                    </Route>
                    <Route path="/work">
                        <DisplayNotes notes={notes.filter(note => note.category === 'work')}/>
                    </Route>
                    <Route path="/personal">
                        <DisplayNotes notes={notes.filter(note => note.category === 'personal')}/>
                    </Route>
                    <Route path="/addNote">
                        <AddNote/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
