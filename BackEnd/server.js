const express = require('express');
const mongoose = require('mongoose');
const app = express();
const server = app.listen(3000, () => {
    console.log("Server started at port :",3000);
})
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/iflix', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
module.exports=app;
