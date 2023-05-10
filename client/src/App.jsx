import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/LandingPage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
// import PrivateRoute from "./PrivateRoute";
// import Dashboard from "./components/dashboard/Dashboard";
// import TestPage from "./components/exam_page/TestPage";

/**
 * Main component of the website which has a navbar on top of all pages
 * and a router which displays the correct component based on URL
 */
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {/* <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route exact path="/test" component={TestPage} />
          </Switch> */}
        </div>
      </Router>
    );
  }
}
export default App;
