// import { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/LandingPage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
// import PrivateRoute from "./PrivateRoute";
// import Dashboard from "./components/dashboard/Dashboard";
// import TestPage from "./components/exam_page/TestPage";

/**
 * Main component of the website which has a navbar on top of all pages
 * and a router which displays the correct component based on URL
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
