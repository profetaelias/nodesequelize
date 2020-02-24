const express = require('express');
const routes = express.Router();
const userController = require('./controllers/userController');
const addressController = require('./controllers/addressController');
const techController = require('./controllers/techController');
const reportController = require('./controllers/reportController')

//Users
routes.get('/users/:id', userController.find);
routes.post('/users', userController.store);
routes.get('/users/report/usuariosPorEmail/', reportController.usuarioPorEmail);

//Address
routes.get('/users/:user_id/address', addressController.findAll)
routes.post('/users/:user_id/address', addressController.store);

//Techs
routes.get('/users/:user_id/techs', techController.findAll)
routes.post('/users/:user_id/techs', techController.store);
routes.delete('/users/:user_id/techs', techController.delete);



module.exports = routes;