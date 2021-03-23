const Paciente = require('../models/Paciente');

// Cuando se crea un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
  // crear objeto de paciente con datos de req.body
  const paciente = new Paciente(req.body);

  try {
    await paciente.save();
    res.json({ mensaje: 'El cliente se agregó correctamente' });
  } catch (error) {
    console.log(error);
    next();
  }
};

// Obtener todos los pacientes
exports.obtenerPacientes = async (req, res, next) => {
  try {
    const pacientes = await Paciente.find({});
    res.json(pacientes);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Obtener un paciente mediante su ID
exports.obtenerPaciente = async (req, res, next) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    res.json(paciente);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Actualizar paciente por su ID
exports.actualizarPaciente = async (req, res, next) => {
  try {
    const paciente = await Paciente.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    res.json(paciente);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Borrando paciente mediante su id
exports.borrarPaciente = async (req, res, next) => {
  try {
    await Paciente.findOneAndDelete({ _id: req.params.id });
    res.json({ mensaje: 'El paciente fue eliminado' });
  } catch (error) {
    console.log(error);
    next();
  }
};
