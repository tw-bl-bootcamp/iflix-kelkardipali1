const mongoose = require('mongoose');

const movie = mongoose.Schema({
    title: {
        type: String,
        required: [true, "movie title ie required"]
    },
    review: {
        type: String,
        required: [true, "movie description is required"]
    },
    rating: {
        type: Number,
        required: [true, "rating is required"]
    }
})

var movies = mongoose.model('movies', movie);

exports.getListMovies = (callback) => {
    movies.find((err, result) => {
        err ? callback(err) : callback(null, result);
    })
}
