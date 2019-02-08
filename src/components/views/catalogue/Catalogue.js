import React, { Component } from 'react';
import Hero from './Hero';
import Mosaic from './Mosaic';
import Product from './Product';
import Sidebar from './Sidebar';

export default class Catalogue extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {/* Tienda */}

        {/* Sidebar */}
        <Sidebar />

        {/* Hero */}
        <Hero />

        {/* Product mosaic */}
        <Mosaic items={[{ title: '1' }]} />
      </div>
    );
  }
}
