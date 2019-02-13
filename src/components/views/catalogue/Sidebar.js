import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    const shopName = this.props.shopName
      ? this.props.shopName
      : 'Nombre tienda';

    return (
      <div className="col-lg-3 bg-dark">
        <h1 className="my-4 text-light">{shopName}</h1>
        <div className="">
          <a href="#" className="list-group-item bg-dark">
            Categoria 1
          </a>
          <a href="#" className="list-group-item bg-dark">
            Categoria 2
          </a>
          <a href="#" className="list-group-item bg-dark">
            Categoria 3
          </a>
        </div>
      </div>
    );
  }
}
