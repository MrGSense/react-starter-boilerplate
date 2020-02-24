import React, { Component } from "react";
import "./styles/app.css";

import img from "../assets/hello.jpg";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>My React App</h1>
        <img src={img} style={{ width: "200px", height: "200px" }} />
      </div>
    );
  }
}

export default App;
