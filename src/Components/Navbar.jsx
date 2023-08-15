import React from "react";
import logo from "../images/logo.png";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg m-2 border-bottom">
        {/* < className="container-fluid"> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <div className="m_logo d-flex">
            <a className="navbar-brand myntra-logo" href="./">
              <img
                src={logo}
                alt="Logo"
                width="30"
                height="24"
                className="d-inline align-text-top"
              />
            </a>
          </div>
          
        </div>
      </nav>
    </>
  );
}
