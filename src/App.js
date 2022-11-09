import React, { Component } from "react";
import Hamburger from "./Components/Hamburger";
import Banner from "./Components/Banner";
import "./index.css";
class App extends Component {
  render() {
    return (
      <div>
        <Hamburger />
        <Banner />
      </div>
    );
  }
}

export default App;
