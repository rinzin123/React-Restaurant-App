import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RestaurantList from "./components/RestaurantsList";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import Home from "./components/Home";
import Login from './components/Login';
// Nav bar
import {Navbar,Nav} from 'react-bootstrap';
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome ,faList,faPlus, faSearch, faUser} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand >Restaurant</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link >
                <Link to="/"><FontAwesomeIcon icon={faHome}/>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/list"><FontAwesomeIcon icon={faList}/>Listing </Link>
              </Nav.Link>
              <Nav.Link >
                <Link to="/create"><FontAwesomeIcon icon={faPlus}/>Create</Link>
              </Nav.Link>
              <Nav.Link >
                <Link to="/search"><FontAwesomeIcon icon={faSearch}/>Search</Link>
              </Nav.Link>
              <Nav.Link >
                <Link to="/login"><FontAwesomeIcon icon={faUser}/>Login</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Route */}
        <Route path="/list" component={RestaurantList}>
        </Route>
        <Route path="/create" component={RestaurantCreate}>
        </Route>
        <Route path="/update/:id" component={RestaurantUpdate}>
        </Route>
        <Route path="/search" component={RestaurantSearch}>
        </Route>
        <Route path="/login" component={Login}>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
