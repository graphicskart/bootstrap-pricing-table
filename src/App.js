import React, { Component } from "react";
import "./App.css";
import { PricingTable } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PricingTable />
      </div>
    );
  }
}

export default App;
