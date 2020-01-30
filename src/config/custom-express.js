//criando o servidor com o express
const express = require('express'); // framework importada

const app = express(); // retorno do modulo express

const routes = require('../app/routes/routes');

routes(app);

module.exports = app; //como se fosse o return, retornando o app