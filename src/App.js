import React from "react";
import HouseDetails from "./home";
import Formulario from './formulario';

const house = {
  photos: [
    "./assets/imagenes/1foto.jpg",
    "./assets/imagenes/2foto.jpg",
  ],
  area: 220,
  barrio: "La Garzota",
  precio: 220000,
};

function App() {
  return (
    <div className="App">
    <HouseDetails house={house} />
     <Formulario/>
    </div>
  );
}

export default App;