import React from "react";
import Icon from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={Icon} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active mx-2" aria-current="page" href="#">
                Crypto Taxes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active mx-2" href="#">
                Free Tools
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active mx-2" href="#">
                Resource Center
              </a>
            </li>
            <li className="nav-item mx-2">
              <button className="btn btn-primary">Get Started</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
