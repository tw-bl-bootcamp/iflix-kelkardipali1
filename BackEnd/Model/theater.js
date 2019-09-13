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
class Theater {
    getTheaterList(callback) {
        theater.find((err, result) => {
            err ? callback(err) : callback(null, result);
        })

    }
    model() {
        return theater;
    }

}
var theaterObj=new Theater()
module.exports=theaterObj
