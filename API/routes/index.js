const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');

module.exports = function () {
  // Agrega nuevos pacientes via POST
  router.post('/pacientes', pacienteController.nuevoCliente);

  // Obtiene todos los registros de pacientes en la BD
  router.get('/pacientes', pacienteController.obtenerPacientes);

  // Obtener un paciente mediante su ID
  router.get('/pacientes/:id', pacienteController.obtenerPaciente);

  // Actualizar un registro con un ID especifico
  router.put('/pacientes/:id', pacienteController.actualizarPaciente);

  // Eliminar un registro por su ID especifico
  router.delete('/pacientes/:id', pacienteController.borrarPaciente);

  return router;
};
