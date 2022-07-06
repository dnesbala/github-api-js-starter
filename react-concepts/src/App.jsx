import React from "react";
import logo from "./logo.svg";
import "./App.css";

// JSX is a syntax extension for JavaScript.
const App = () => {
  const name = "Swastik";

  return (
    // <div style="background-color: red"> This is using normal HTML and CSS </div>
    // class : className
    <div className="App">
      <p>{2 + 5}</p>
      <p>{name}</p>
      <img src={logo} alt="logo" style={{ height: "100px" }} />

      {/* for: htmlFor */}
      <label htmlFor="name">Enter your name</label>
      <input type="text" id="name" />
    </div>
  );
};

export default App;
