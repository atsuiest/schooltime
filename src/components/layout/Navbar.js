import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../common/logo.png';

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
            {/* <div className="" style={{ height: '50px' }}>
              <img src={Logo} alt="" />
            </div> */}
            <h4>S C H O O L T I M E</h4>
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
              <li className="nav-item btn-info mr-1">
                <Link className="nav-link text-light" to="/corporative">
                  Ropa Corporativa
                </Link>
              </li>
              <li className="nav-item btn-success mr-1">
                <Link className="nav-link text-light" to="/institutional">
                  Ropa Institucional
                </Link>
              </li>
              <li className="nav-item btn-danger mr-1">
                <Link className="nav-link text-light" to="/schools">
                  Ropa Colegios
                </Link>
              </li>
              <li className="nav-item btn-warning mr-1">
                <Link className="nav-link text-white" to="/about">
                  Quienes somos
                </Link>
              </li>
              <li className="nav-item btn-primary">
                <Link className="nav-link text-white" to="/contact">
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
