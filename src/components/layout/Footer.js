import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div class="card-group">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Navegación</h5>
            <ul class="list-unstyled list-inline">
              <li>Inicio</li>
              <li>Quienes somos</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Categorias</h5>
            <ul class="list-unstyled list-inline">
              <li>Ropa Corporativa</li>
              <li>Ropa Institucional</li>
              <li>Ropa de Colegio</li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Contacto</h5>
            <p className="card-text">Dirección</p>
            <p className="card-text">Horarios</p>
            <p className="card-text">Telefonos</p>
            <p className="card-text">Correo</p>
          </div>
        </div>
      </div>
    );
  }
}
