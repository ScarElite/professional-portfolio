import React from "react";

function Nav() {
  return (
    <nav className="mx-40 my-8 py-4 navbar">
      <ul className="flex justify-between mx-60">
        <li className="text-2xl">
          <a href="/">About Me</a>
        </li>
        <li className="text-2xl">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="text-2xl">
          <a href="#contact">Contact</a>
        </li>
        <li className="text-2xl">
          <a href="#resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
