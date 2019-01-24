import React, { Component } from 'react';
import Slide from '../common/Slide';
import Footer from './Footer';
import Map from '../common/Map';
import Catalog from './Catalog';

export default class Landing extends Component {
  render() {
    return (
      <div className="container">
        <Slide />
        <br />
        {/* <Catalog catalogTitle="Lo más visto" />
        <Catalog catalogTitle="Nuevos" /> */}
        <Map />
        <br />
        <Footer />
      </div>
    );
  }
}
