import React, { Component } from 'react';
import Catalogue from './catalogue/Catalogue';
import Footer from '../layout/Footer';

export default class Institutional extends Component {
  render() {
    return (
      <div>
        <Catalogue shopName="Institucional" />
        <Footer />
      </div>
    );
  }
}
