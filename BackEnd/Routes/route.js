const express = require('express');
var user=require('../Controller/user');
var movies=require('../Controller/movie');
var theater=require('../Controller/theater');
const routes = express.Router();
routes.post('/login', user.login);
routes.get('/movieList',movies.getMovieList);
routes.get('/theaterList',theater.getTheaterList);
module.exports=routes;
