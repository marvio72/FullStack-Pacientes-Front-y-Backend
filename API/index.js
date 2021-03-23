const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

// Crear el servidor
const app = express();

// Habilitar Cors
const whiteList = ['http://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    // console.log(origin);
    const existe = whiteList.some((dominio) => dominio === origin);
    if (existe) {
      callback(null, true);
    } else {
      callback(new Error('No Permitido por CORS'));
    }
  },
};

// habilitar cors
// app.use(cors(corsOptions));
app.use(cors());

// Conectar a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// Habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Habilitar routing
app.use('/', routes());

// Puerto y crear Servidor
app.listen(4000, () => {
  console.log('Servidor funcionando en puerto 4000');
});
