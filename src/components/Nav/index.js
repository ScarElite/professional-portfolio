import React from "react";

function Nav() {
  return (
    <div className="navbar flex align-content: items-center justify-between p-4">
      <h1 className="title-header font-effect-anaglyph">
        <a href="/">
          Mitchell Armstrong <span class="wave">👋</span>
        </a>
      </h1>
      <nav className="font-mono text-2xl font-medium mr-12">
        <ul className="flex justify-between font-effect-anaglyph">
          <li className="navbar-item px-10">
            <a href="/">About Me</a>
          </li>
          <li className="navbar-item px-10">
            <a href="/portfolio">Portfolio</a>
          </li>
          <li className="navbar-item px-10">
            <a href="/contact">Contact</a>
          </li>
          <li className="navbar-item px-10">
            <a href="/resume">Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
