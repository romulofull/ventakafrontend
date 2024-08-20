
import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes añadir la lógica para enviar los datos a tu servidor
    console.log('Formulario enviado:', form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Teléfono (opcional):
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Correo Electrónico:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Mensaje:
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;