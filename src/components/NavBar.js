/* Bishal */
import React from "react";
import { NavLink } from "react-router-dom";
import LoginTab from "./LoginTab";

const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav mr-auto">
          {props.links.map(list => (
            <NavLink
              className="nav-item nav-link"
              activeClassName="active"
              to={list.link}
              key={list.page}
            >
              {list.page}
            </NavLink>
          ))}
        </div>
        <span className="navbar-text">
          <LoginTab />
        </span>
      </div>
    </nav>
  );
};
export default NavBar;
