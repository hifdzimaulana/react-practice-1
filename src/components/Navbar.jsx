import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
        <Link className="navbar-brand" to={"/"}>
          Praktikum1
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/bmi"}>
                Body Mass Index
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link className="nav-link" to={"/kasir"}>
                Kasir
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link className="nav-link" to={"/cicilan"}>
                Cicilan
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link className="nav-link" to={"/konversi-bilangan"}>
                Konversi bilangan
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
