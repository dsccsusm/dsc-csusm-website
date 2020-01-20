import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import Button from "react-bootstrap/Button";

import "../node_modules/bootstrap/scss/bootstrap.scss";
import { NavDropdown } from "react-bootstrap";

const nav = () => {
  return (
    <div>
      <Navbar bg="light" variant="light" sticky="top" expand="sm">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/dsc-logo.svg"
            width="45"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <NavbarToggle aria-controls="navbar-nav"></NavbarToggle>
        <NavbarCollapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>Overview</Nav.Link>
            <Nav.Link>Events</Nav.Link>
            <Nav.Link>Team</Nav.Link>
            <Nav.Link>Partners</Nav.Link>
          </Nav>
          <Button size="sm">Login</Button>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default nav;
