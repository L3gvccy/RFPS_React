import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <header className="bg-light border-bottom py-2">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container d-flex align-items-center justify-content-between">
          <Link to="/" className="text-decoration-none">
          <div className="d-flex align-items-center">
            <img
              src="./logo.png"
              alt="logo"
              width="48"
              height="48"
              className="me-2"
            />
            <h1 className="h4 m-0 text-dark">NextApps</h1>
          </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/">Головна</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/directions">Напрями діяльності</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/feedback">Зворотній зв'язок</Link>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link text-dark" smooth to="/#founders">
                  Засновники
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link text-dark" smooth to="/#contacts">
                  Контакти
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
