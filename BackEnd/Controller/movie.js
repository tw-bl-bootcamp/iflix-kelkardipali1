const model = require('../Model/movie');

exports.getMovieList = (req, res) => {
    model.getListMovies((err, result) => {
        err ? res.status(400).send("Error in getting movieList") : res.status(200).send(result)
    })
}
