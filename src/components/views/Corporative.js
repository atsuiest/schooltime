import React, { Component } from 'react';
import Catalogue from './catalogue/Catalogue';
import Footer from '../layout/Footer';

export default class Corporative extends Component {
  render() {
    return (
      <div>
        <Catalogue shopName="Corporativa" />
        <Footer />
      </div>
    );
  }
}
