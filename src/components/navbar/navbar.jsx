import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import "./navbar.scss";

function NavBar({ logout }) {
  const user = localStorage.getItem('user');
  const onLoggedOut = () => {
          localStorage.clear();
          window.open("/", "_self");
      };

  const isAuth = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token");
    } else {
      return false;
    }
  };

  return (
    <Navbar collapseOnSelect expand="xxl" variant="dark">
        <Navbar.Brand className="navbar-logo" href="/">
          myFlix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {isAuth() && (
              <Nav.Link as={Link} to={`/users/${user}`}>
                {user}
              </Nav.Link>
            )}
            {isAuth() && (
              <Button className="logout" variant="link" onClick={handleLogOut}>
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
