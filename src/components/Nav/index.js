import React from "react";
import { NavItem, NavLink } from "reactstrap";

function Nav() {
  return (
    <Nav pills>
      <NavItem>
        <NavLink active href="#">
          Link
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Another Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </NavItem>
    </Nav>
  );
}

export default Nav;
