import React from 'react';
import DetallesCasa from './DetallesCasa';
import FormularioContacto from './FormularioContacto';
import './index.css';

const casa = {
  fotos: [
    'foto1', 
    'foto2', 
  
  ],
  area: 220,
  barrio: 'La Garzota',
  precio: 220000
};

function App() {
  return (
    <div className="App">
      <div className="contenedor">
        <DetallesCasa casa={casa} />
        <FormularioContacto />
      </div>
    </div>
  );
}

export default App;
