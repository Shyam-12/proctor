// import { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/LandingPage";
// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
// import PrivateRoute from "./PrivateRoute";
// import Dashboard from "./components/dashboard/Dashboard";
// import TestPage from "./components/exam_page/TestPage";

/**
 * Main component of the website which has a navbar on top of all pages
 * and a router which displays the correct component based on URL
 */

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
    </div>
  )
}

export default App;
