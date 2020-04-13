const express = require('express');
const routes = express.Router();

const OngController = require('./Controllers/OngController.js');
const IncidentController = require('./Controllers/IncidentController.js');
const ProfileController = require('./Controllers/ProfileController.js');
const SessionController = require('./Controllers/SessionController.js');

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfileController.profile);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;