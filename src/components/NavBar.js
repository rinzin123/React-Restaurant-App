import React, { Component } from "react";
import { Link } from "react-router-dom";

// Nav bar
import { Navbar, Nav } from "react-bootstrap";
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faList,
    faPlus,
    faSearch,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>Restaurant</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link>
                                <Link to="/">
                                    <FontAwesomeIcon icon={faHome} />
                                    Home
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/list">
                                    <FontAwesomeIcon icon={faList} />
                                    Listing{" "}
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/create">
                                    <FontAwesomeIcon icon={faPlus} />
                                    Create
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/search">
                                    <FontAwesomeIcon icon={faSearch} />
                                    Search
                                </Link>
                            </Nav.Link>
                            {localStorage.getItem("login") ? (
                                <Nav.Link>
                                    <Link to="/logout">
                                        <FontAwesomeIcon icon={faUser} />
                                        Logout
                                    </Link>
                                </Nav.Link>
                            ) : (
                                <Nav.Link>
                                    <Link to="/login">
                                        <FontAwesomeIcon icon={faUser} />
                                        Login
                                    </Link>
                                </Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;
