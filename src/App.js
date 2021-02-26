import './App.css';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap';

function App() {
    return (
        <Router>
            <div className="container row">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Noteapp</Navbar.Brand>
                    <Nav className="mr-auto">
                        <LinkContainer>
                            <Nav.Link>All</Nav.Link>
                        </LinkContainer>
                        <LinkContainer>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer>
                            <Nav.Link>Work</Nav.Link>
                        </LinkContainer>
                        <LinkContainer>
                            <Nav.Link>Personal</Nav.Link>
                        </LinkContainer>
                        <LinkContainer>
                            <Nav.Link>ADD NOTE</Nav.Link>
                        </LinkContainer>
                    </Nav>+++
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </div>
        </Router>
    );
}

export default App;
