import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RestaurantList from "./components/RestaurantsList";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import Home from "./components/Home";
// Nav bar
import {Navbar,Nav} from 'react-bootstrap';

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
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/list">Listing</Link>
              </Nav.Link>
              <Nav.Link >
                <Link to="/create">Create</Link>
              </Nav.Link>
              <Nav.Link >
                <Link to="/update">Update</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/detail">Detail</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Route */}
        <Route path="/list" component={RestaurantList}>
        </Route>
        <Route path="/create" component={RestaurantCreate}>
        </Route>
        <Route path="/detail" component={RestaurantDetail}>
        </Route>
        <Route path="/update/:id" component={RestaurantUpdate}>
        </Route>
        <Route path="/search" component={RestaurantSearch}>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
