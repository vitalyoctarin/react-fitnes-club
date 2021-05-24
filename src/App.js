import React from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Form, Nav, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";

function App() {
    return (
        <Router>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-auto">
                        <Nav.Link className="navbar-link"><Link to="/">Главная</Link></Nav.Link>
                        <Nav.Link className="navbar-link"><Link to="/about">О нас</Link></Nav.Link>
                        <Nav.Link className="navbar-link"><Link to="/services">Услуги</Link></Nav.Link>
                    </Nav>
                    <Form inline>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

            <Switch>
                <Route path="/about">
                    <AboutUs/>
                </Route>
                <Route path="/services">
                    <Services/>
                </Route>
                <Route path="/" exact>
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
