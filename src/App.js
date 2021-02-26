import './App.css';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap';
import React, {useState} from 'react';
import All from './All/All.js';
import Home from './Home/Home.js';
import Work from './Work/Work.js';
import Personal from './Personal/Personal.js';
import AddNote from './AddNote/AddNote.js';


function App() {
    return (
        <Router>
            <div className="container row">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Noteapp</Navbar.Brand>
                    <Nav className="mr-auto">
                        <LinkContainer to='/all'>
                            <Link>All</Link>
                        </LinkContainer>
                        <LinkContainer to='/home'>
                            <Link>Home</Link>
                        </LinkContainer>
                        <LinkContainer to='work'>
                            <Link>Work</Link>
                        </LinkContainer>
                        <LinkContainer to="personal">
                            <Link>Personal</Link>
                        </LinkContainer>
                        <LinkContainer to='addNote'>
                            <Link>ADD NOTE</Link>
                        </LinkContainer>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </div>
            <div className='container row'>
                <Switch>
                    <Route path="/all">
                        <All/>
                    </Route>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/work">
                        <Work/>
                    </Route>
                    <Route path="/personal">
                        <Personal/>
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
