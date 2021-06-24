import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RestaurantList from "./components/RestaurantsList";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
// Home
import Home from "./components/Home";
// login
import Login from './components/Login';
// logout
import Logout from "./components/Logout";
// Nav bar
// import NavBar from "./components/NavBar";
// Protected Route
import Protected from "./components/Protected";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}
        {/* Route */}
        <Protected  exact path="/list" component={RestaurantList}/>
        <Protected  exact path="/create" component={RestaurantCreate}/>
        <Protected  exact path="/update/:id" component={RestaurantUpdate}/>
        <Protected exact  path="/search" component={RestaurantSearch}/>
        <Route  exact path="/login" component={Login}></Route>
        <Route exact  path="/logout" component={Logout}></Route>
        {/* <Route exact path="/">
          <Home />
        </Route> */}
        <Protected exact path="/" component={Home}/>
      </Router>
    </div>
  );
}

export default App;
