import React, { Component } from 'react';
import MosaicItem from './MosaicItem';
import { Link } from 'react-router-dom';

export default class Mosaic extends Component {
  render() {
    return this.props.items.map(item => (
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <Link to="">
            <img
              className="card-img-top"
              src="http://placehold.it/700x400"
              alt=""
            />
          </Link>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">{item.title}</a>
            </h4>
            <h5>$24.99</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              numquam aspernatur!
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              &#9733; &#9733; &#9733; &#9733; &#9734;
            </small>
          </div>
        </div>
      </div>
    ));
  }
}
