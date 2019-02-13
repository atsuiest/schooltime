import React, { Component } from 'react';

export default class NavStripe extends Component {
  render() {
    return (
      <div>
        <ul className="nav justify-content-center nav-fill">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Categoria 1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Categoria 2
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Categoria 3
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Categoria 4
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Categoria 5
            </a>
          </li>
        </ul>
        <br />
      </div>
    );
  }
}
