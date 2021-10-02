
import React from 'react';
import './Header.css'
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Headers = () => {
    return (
        <Navbar bg="light" expand="lg">

            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Brand href="/">The <span className="bg-red">MealDB</span> </Navbar.Brand>
                    <Nav className="me-auto mx-4 ">

                        <NavLink activeClassName="selected" className="nav" to="/home">Home</NavLink>
                        <NavLink className="nav" to="/restaurant">My Restaurant</NavLink>
                        <NavLink className="nav" to="/about">About</NavLink>
                    </Nav>
                    <Form className="d-flex ">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Headers;