import React from "react";

function Nav() {
  return (
    <nav className="mx-40 my-8 py-4 navbar font-mono text-2xl font-medium">
      <ul className="flex justify-between mx-60">
        <li className="navbar-item">
          <a href="/">About Me</a>
        </li>
        <li className="navbar-item">
          <a href="/portfolio">Portfolio</a>
        </li>
        <li className="navbar-item">
          <a href="/contact">Contact</a>
        </li>
        <li className="navbar-item">
          <a href="/resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
