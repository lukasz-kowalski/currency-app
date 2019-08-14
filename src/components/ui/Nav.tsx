import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => (
  <nav className="nav">
    <div className="nav__container">
      <Link to="/" className="nav__link">
        <h1 className="nav__logo">Currency App</h1>
      </Link>
      <div className="nav__links">
        <NavLink to="/" className="nav__link" exact>
          Dashboard
        </NavLink>
        <NavLink to="/exchange" className="nav__link">
          Exchange rate
        </NavLink>
      </div>
    </div>
  </nav>
);

export default Nav;
