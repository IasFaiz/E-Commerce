import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div
      style={{
        borderRadius: "6px",
        width: "1250px",
      }}
    >
      <nav
        className="navbar navbar-dark bg-dark  navbar-default"
        style={{
          borderRadius: "6px",
          width: "100%",
        }}
      >
        <div
          style={{
            margin: "10px",
          }}
        >
          <a className="navbar-brand">My Shop</a>
          <Link to="/" className="navbar-brand">
            Home
          </Link>
        </div>

        <form
          className="form-inline"
          style={{
            margin: "10px",
          }}
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </nav>
    </div>
  );
};

export default Nav;
