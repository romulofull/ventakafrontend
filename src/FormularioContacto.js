import React, { useState } from 'react';

const FormularioContacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch('https://venta1decasas.vercel.app/enviar', { // Cambia la URL a la ruta correcta del backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formulario)
      });

      if (respuesta.ok) {
        alert('Mensaje enviado con éxito');
        setFormulario({
          nombre: '',
          correo: '',
          mensaje: ''
        });
      } else {
        alert('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el mensaje');
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      <div>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Correo Electrónico:
          <input
            type="email"
            name="correo"
            value={formulario.correo}
            onChange={manejarCambio}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Mensaje:
          <textarea
            name="mensaje"
            value={formulario.mensaje}
            onChange={manejarCambio}
            required
          />
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioContacto;
