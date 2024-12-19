import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-${props.navbarBg} navbar-expand-lg bg-${props.navbarBg}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home Page
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form> */}
          <div
            style={{
              backgroundColor: "#FEC260",
              width: 20,
              height: 20,
              borderRadius: 5,
            }}
            className="mx-2 my-1"
            onClick={props.toggleYellowMode}
          ></div>
          <div
            style={{
              backgroundColor: "#2D4263",
              width: 20,
              height: 20,
              borderRadius: 5,
            }}
            className="mx-2 my-1"
            onClick={props.togglePrimaryMode}
          ></div>
          <div
            style={{
              backgroundColor: "#DA0037",
              width: 20,
              height: 20,
              borderRadius: 5,
            }}
            className="mx-2 my-1"
            onClick={props.toggleRedMode}
          ></div>
          <div className={`form-check form-switch text-${props.lableText}`}>
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode}
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "set title here",
  aboutText: "About",
};
