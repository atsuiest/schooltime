import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
  }

  render() {
    return (
      // <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <nav className="navbar navbar-expand-sm mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h4>SchoolTime</h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="nav-link" to="/corporative">
                    Ropa Corporativa
                  </Link>
                  <Link className="nav-link" to="/institutional">
                    Ropa Institucional
                  </Link>
                  <Link className="nav-link" to="/schools">
                    Ropa Colegios
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Quienes somos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
