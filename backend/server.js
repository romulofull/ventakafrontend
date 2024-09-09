const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;


app.use(bodyParser.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27017/casas', { useNewUrlParser: true, useUnifiedTopology: true });


const contactoSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  mensaje: String
});

const Contacto = mongoose.model('Contacto', contactoSchema);


app.post('/enviar', async (req, res) => {
  try {
    const contacto = new Contacto(req.body);
    await contacto.save();
    res.status(201).send('Contacto guardado');
  } catch (error) {
    res.status(400).send('Error al guardar el contacto');
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
