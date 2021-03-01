import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styled from 'styled-components';

const Navigation = () => {
  return (
    <Wrapper>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">My Personal Diary</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav.Link >
          <NavLink to="/" className="navlinks">Home</NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to="/add" className="navlinks">Create Diary Entries</NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to="/retrieve" className="navlinks">Retrieve/Delete/Update Diary Entries</NavLink>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
    </Wrapper>
  );
};
const Wrapper = styled.div `
.navlinks{
  color:white;
}
`;
export default Navigation;
