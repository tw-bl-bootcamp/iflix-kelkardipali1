const express = require('express');
const bodyParser=require('body-parser');
var databaseConnection = require('./Config/databaseConfig')
const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json());
const expressValidator = require('express-validator');
app.use(expressValidator());

var routes=require('./Routes/route')
app.use('/', routes);

require('dotenv').config()
const server = app.listen(process.env.PORT, () => {
    console.log("Server started at port :", process.env.PORT);
})
databaseConnection.mongoEvent();
module.exports = server;
