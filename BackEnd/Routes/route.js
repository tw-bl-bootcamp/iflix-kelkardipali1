const express = require('express')
var controller=require('../Controller/userController')
const routes = express.Router();
routes.post('/login', controller.login);
module.exports=routes;
