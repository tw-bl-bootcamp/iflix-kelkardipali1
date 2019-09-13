const mongoose = require('mongoose');
const theaterSchema = mongoose.Schema({
    name: {
        type: String
    },
    time: [{
        type: String,
    }],
    venue: {
        type: String,
    }
})
var theater = mongoose.model('theaters', theaterSchema);

exports.getTheaterList = (callback) => {
    theater.find((err, result) => {
        err ? callback(err) : callback(null, result);
    })

}
