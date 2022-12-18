import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import About2 from "./components/About2";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="full-page">
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <About2></About2>
      <Footer></Footer>
    </div>
  );
}

export default App;
