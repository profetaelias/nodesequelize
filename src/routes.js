const express = require('express');
const routes = express.Router();
const userController = require('./controllers/userController')

routes.get('/', (req, res) => {
    return res.json({hello: 'world'});
})

routes.post('/users', userController.store);

module.exports = routes;