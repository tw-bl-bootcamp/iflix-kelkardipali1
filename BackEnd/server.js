const express = require('express');
var databaseConnection=require('./Config/databaseConfig')
const app = express();
const server = app.listen(3000, () => {
    console.log("Server started at port :",3000);
})
databaseConnection.mongoEvent();
module.exports=app;
