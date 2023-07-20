import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes["u-list"]}>
          <NavLink to="/" className={classes.navLink}>
            Home
          </NavLink>
          <div className={classes["main-buttons"]}>
            <NavLink to="posts" className={classes.navLink}>
              Posts
            </NavLink>
            <NavLink to="add-post" className={classes.navLink}>
              Add Posts
            </NavLink>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
