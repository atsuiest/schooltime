import React, { Component } from 'react';

export default class Map extends Component {
  render() {
    return (
      <div>
        <br />
        <div
          id="map-container-google-1"
          class="z-depth-1-half map-container"
          style={{ height: '300' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.2258218213815!2d-70.74344308535355!3d-33.46947098076842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c30d30eeeff7%3A0xb29dad738e641afc!2sConfecciones+School+Time!5e0!3m2!1ses-419!2scl!4v1548141997855"
            width="100%"
            height="75%"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen
          />
        </div>
      </div>
    );
  }
}
