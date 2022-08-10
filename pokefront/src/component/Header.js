import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <a className="navbar-brand" href="/#">
            Pokemon
          </a>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <a className="nav-link active" aria-current="page" href="/#">
                  Home
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
