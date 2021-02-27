import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">My Personal Diary</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav.Link>
          <NavLink to="/">Home</NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to="/add">Create Diary Entries</NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to="/retrieve">Retrieve/Delete/Update Diary Entries</NavLink>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
