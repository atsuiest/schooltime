import React, { Component } from 'react';
import MosaicItem from './MosaicItem';
import { Link } from 'react-router-dom';

export default class Mosaic extends Component {
  render() {
    return (
      <div className="row">
        <MosaicItem />
        <MosaicItem />
        <MosaicItem />
        <MosaicItem />
        <MosaicItem />
        <MosaicItem />
      </div>
    );
  }
}
