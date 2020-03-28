const express = require('express');
const OngController = require("./controllers/OngController")
const IncidentsController = require("./controllers/IncidentsController")
const ProfilesController = require("./controllers/ProfilesController")
const SessionController = require("./controllers/SessionController")


const routes = express.Router();  

routes.get("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfilesController.index);

routes.get("/incidents", IncidentsController.index);
routes.post("/incidents", IncidentsController.create);
routes.delete("/incidents/:id", IncidentsController.delete);

module.exports = routes;