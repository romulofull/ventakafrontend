const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/venta-casas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mensajeSchema = new mongoose.Schema({
  nombre: String,
  telefono: String,
  correo: String,
  mensaje: String,
});

const Mensaje = mongoose.model('Mensaje', mensajeSchema);


app.post('/api/interesados', async (req, res) => {
  const { nombre, telefono, correo, mensaje } = req.body;

  try {
    const nuevoMensaje = new Mensaje({ nombre, telefono, correo, mensaje });
    await nuevoMensaje.save();
    res.status(201).json({ mensaje: 'Datos enviados correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al guardar los datos' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});