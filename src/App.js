import React from 'react';
import HouseDetails from './home';
import ContactForm from './inquiryForm';

// Datos de ejemplo
const house = {
  photos: [
    './assets/imagenes/1foto.jpg',
    './assets/imagenes/2foto.jpg',
    // Añade más fotos aquí
  ],
  area: 220,
  barrio: 'La Garzota',
  precio: 220000
};

function App() {
  return (
    <div className="App">
      <HouseDetails house={house} />
      <ContactForm />
    </div>
  );
}

export default App;