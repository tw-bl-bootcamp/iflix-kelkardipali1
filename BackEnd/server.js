const express = require('express');
var databaseConnection = require('./Config/databaseConfig')
const app = express();
require('dotenv').config()
const server = app.listen(process.env.PORT, () => {
    console.log("Server started at port :", process.env.PORT);
})
databaseConnection.mongoEvent();
module.exports = app;
