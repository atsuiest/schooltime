import React, { Component } from 'react';
import jockey from '../../jockey.jpg';

export default class Catalog extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.catalogTitle}</h3>
        <div class="col-md-12">
          <div id="blogCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li
                data-target="#blogCarousel"
                data-slide-to="0"
                class="active"
              />
              <li data-target="#blogCarousel" data-slide-to="1" />
            </ol>

            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-md-3">
                    <a href="#">
                      <img
                        src="http://placehold.it/250x250"
                        alt="Image"
                        style={{ maxWidth: '100%' }}
                      />
                    </a>
                  </div>
                  <div class="col-md-3">
                    <a href="#">
                      <img
                        src="http://placehold.it/250x250"
                        alt="Image"
                        style={{ maxWidth: '100%' }}
                      />
                    </a>
                  </div>
                  <div class="col-md-3">
                    <a href="#">
                      <img
                        src="http://placehold.it/250x250"
                        alt="Image"
                        style={{ maxWidth: '100%' }}
                      />
                    </a>
                  </div>
                  <div class="col-md-3">
                    <a href="#">
                      <img
                        src="http://placehold.it/250x250"
                        alt="Image"
                        style={{ maxWidth: '100%' }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
