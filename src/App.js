import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import About2 from "./components/About2";

function App() {
  return (
    <div className="full-page">
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <About2></About2>
    </div>
  );
}

export default App;
