import React, { Component } from 'react';
import Hero from './Hero';
import Mosaic from './Mosaic';
import Product from './Product';
import Sidebar from './Sidebar';
import HeroTop from './HeroTop';
import NavStripe from './NavStripe';

export default class Catalogue extends Component {
  render() {
    return (
      <div>
        <HeroTop />
        <NavStripe />
        <div className="container">
          <div className="row">
            <Hero />

            <Mosaic />
          </div>
        </div>

        {/* <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright &copy; Your Website 2019
            </p>
          </div>
        </footer> */}
      </div>
    );
  }
}
