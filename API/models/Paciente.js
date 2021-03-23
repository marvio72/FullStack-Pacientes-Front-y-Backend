const mongoose = require('mongoose');
// crea la Tabla de la base de datos
const Schema = mongoose.Schema;

// crea los campos de la base de datos
const pacientesSchema = new Schema({
  nombre: {
    type: String,
    trim: true,
  },
  propietario: {
    type: String,
    trim: true,
  },
  fecha: {
    type: String,
    trim: true,
  },
  hora: {
    type: String,
    trim: true,
  },
  sintomas: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('Paciente', pacientesSchema);
