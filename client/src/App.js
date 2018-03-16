import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default App;
