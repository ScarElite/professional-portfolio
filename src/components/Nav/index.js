import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation({ currentPage, handlePageChange }) {
  // const determineIsActive = (tabName, currentPage) => {
  //   let linkClass = "";
  //   if (tabName === currentPage) {
  //     linkClass += " active";
  //   }
  //   return linkClass;
  // };

  return (
    <div className="navbar flex align-content: items-center justify-between p-4">
      <h1 className="title-header">
        <a href="/">MA</a>
      </h1>
      <nav className="font-mono text-2xl font-medium mr-12">
        <ul className="flex justify-between">
          <li className="navbar-item px-10">
            {/* <NavLink
              href="/about"
              className={determineIsActive("About", currentPage)}
              onClick={() => handlePageChange("About")}
            >
              About Me
            </NavLink> */}
            About Me
          </li>
          <li className="navbar-item px-10">
            {/* <NavLink
              href="/portfolio"
              className={determineIsActive("Portfolio", currentPage)}
              onClick={() => handlePageChange("Portfolio")}
            >
              Portfolio
            </NavLink> */}
            Portfolio
          </li>
          <li className="navbar-item px-10">
            {/* <NavLink
              href="/contact"
              className={determineIsActive("Contact", currentPage)}
              onClick={() => handlePageChange("Contact")}
            >
              Contact
            </NavLink> */}
            Contact
          </li>
          <li className="navbar-item px-10">
            {/* <NavLink
              href="/resume"
              className={determineIsActive("Resume", currentPage)}
              onClick={() => handlePageChange("Resume")}
            >
              Resume
            </NavLink> */}
            Resume
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
