import React, { useState } from 'react';
import axios from 'axios';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mensajeEstado, setMensajeEstado] = useState('');


  const manejarEnvio = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/interesados', {
        nombre,
        telefono,
        correo,
        mensaje
      });
      setMensajeEstado('Datos enviados correctamente');
      setNombre('');
      setTelefono('');
      setCorreo('');
      setMensaje('');
    } catch (error) {
      setMensajeEstado(`Error al enviar los datos: ${error.response?.data?.mensaje || error.message}`);
    }
  };

  return (
    <div>
      <h2>Formulario de Contacto</h2>
    <form onSubmit={manejarEnvio}>
      <div>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      </div>
      <div>
        <label>Teléfono (opcional):</label>
        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      </div>
      <div>
        <label>Correo Electrónico:</label>
        <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
      </div>
      <div>
        <label>Mensaje:</label>
        <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} required />
      </div>
      <button type="submit">Enviar</button>
      </form>
      {mensajeEstado && <p style={{ marginTop: '10px', color: mensajeEstado.startsWith('Error') ? 'red' : 'green' }}>{mensajeEstado}</p>}
      </div>
  );
};

export default Formulario;