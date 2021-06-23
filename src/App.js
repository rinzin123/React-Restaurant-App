import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RestaurantList from "./components/RestaurantsList";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/list">Listing</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/detail">Detail</Link></li>
          <li><Link to="/update">Update</Link></li>
        </ul>
        {/* Route */}
        <Route path="/list"><RestaurantList /></Route>
        <Route path="/create"><RestaurantCreate /></Route>
        <Route path="/detail"><RestaurantDetail /></Route>
        <Route path="/update"><RestaurantUpdate /></Route>
        <Route path="/search"><RestaurantSearch /></Route>
        <Route exact path="/"><Home /></Route>
      </Router>
    </div>
  );
}

export default App;
