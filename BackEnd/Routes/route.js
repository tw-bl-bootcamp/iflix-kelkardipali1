const express = require('express');
var user=require('../Controller/user');
var movies=require('../Controller/movie');
const routes = express.Router();
routes.post('/login', user.login);
routes.get('/movieList',movies.getMovieList);
module.exports=routes;
