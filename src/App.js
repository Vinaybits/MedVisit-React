import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";

import Master_layout from "./layout/master_layout";

function App() {
  return (
    <>
      <div class="main-wrapper">
        <Router>
          <Route exact path="/" component={Master_layout} />
        </Router>
      </div>
    </>
  );
}

export default App;
