import React from 'react';
import './index.css';
import galeria from './assets/galeria';

const DetallesCasa = ({ casa }) => {
  return (
    <div className="detalles-casa">
      <h1>Casa en Venta</h1>
      <div className="galeria">
        {casa.fotos.map((foto, index) => (
          <img key={index} src={galeria[foto]} alt={`Foto ${index + 1}`} />
        ))}
      </div>
      <div className="detalles">
        <p><strong>Metros Cuadrados:</strong> {casa.area}</p>
        <p><strong>Barrio:</strong> {casa.barrio}</p>
        <p><strong>Precio:</strong> ${casa.precio}</p>
      </div>
    </div>
  );
};

export default DetallesCasa;
