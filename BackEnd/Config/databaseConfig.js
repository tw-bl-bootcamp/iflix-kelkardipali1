const mongoose = require('mongoose');
var fs = require('fs')
var config = fs.readFileSync(`${__dirname}/config.json`)
var mongoData = JSON.parse(config);
var databaseUrl = mongoData.development.url
class MongoEvent {

    mongoEvent() {

        mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        /**
         * @description:for providing mongoose connection
         */
        mongoose.connection.on('connected', function () {

            console.log("Mongoose default connection is open to ", databaseUrl);
        });
        /**
         * @description:for providing error while mongoose connection
         */
        mongoose.connection.on('error', function (err) {
            console.log("Mongoose default connection has occured " + err + " error");
        });
        /**
         * @description:mongoose disconnected
         */
        mongoose.connection.on('disconnected', function () {
            console.log("Mongoose default connection is disconnected");
        });
        /**
         * @description:mongoose connection closed
         */
        process.on('SIGINT', function () {
            mongoose.connection.close(function () {
                console.log("Mongoose default connection is disconnected due to application termination");
                process.exit(0)
            });
        });
    }
}
var mongoEvents = new mongoEvent();
module.exports = mongoEvents
