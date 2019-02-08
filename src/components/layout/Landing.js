import React, { Component } from 'react';
import Slide from '../common/Slide';
import Footer from './Footer';
import Map from '../common/Map';

export default class Landing extends Component {
  render() {
    return (
      <div className="container">
        <Slide />
        <br />
        <Map />
        <br />
        <Footer />
      </div>
    );
  }
}
