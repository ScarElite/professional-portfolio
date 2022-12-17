import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

function Navigation() {
  return (
    <div className="d-flex align-items-center justify-content-between px-5 py-3 bg-info">
      <header className="d-flex mx-5">
        <h1>
          <a href="/" className="nav-link">
            Mitchell Armstrong
          </a>
        </h1>
      </header>
      <Nav>
        <NavItem className="px-5 fs-4">
          <NavLink href="#about" className="nav-link">
            About Me
          </NavLink>
        </NavItem>
        <NavItem className="px-5 fs-4">
          <NavLink href="#portfolio">Portfolio</NavLink>
        </NavItem>
        <NavItem className="px-5 fs-4">
          <NavLink href="#contact">Contact</NavLink>
        </NavItem>
        <NavItem className="px-5 fs-4">
          <NavLink href="#resume">Resume</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navigation;
