import React from 'react';
import './index.css'; 
import gallery from './assets/gallery'

const HouseDetails = ({ house }) => {
  return (
    <div className="house-details">
      <h1>Casa en Venta</h1>
      <div className="gallery">
          <img src={gallery.imag1} alt= "Habitacion Principal"/>
          <img src={gallery.imag2} alt= "Escalera"/>
      </div>
      <div className="details">
        <p><strong>Metros Cuadrados:</strong> {house.area}</p>
        <p><strong>Barrio:</strong> {house.barrio}</p>
        <p><strong>Precio:</strong> ${house.precio}</p>
      </div>
    </div>
  );
};

export default HouseDetails;
