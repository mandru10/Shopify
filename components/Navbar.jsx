import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { navItem } from "./NavItems";
import Dropdown from "./Dropdown";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
        </Link>
        <ul className="nav-items">
          {navItem.map((item) => {
            if (item.title === "Perfumes") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                   onClick={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;