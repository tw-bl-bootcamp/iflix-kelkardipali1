const model = require('../Model/theater');
exports.getTheaterList = (req, res) => {
    model.getTheaterList((err, result) => {
        err ? res.status(400).send("Error in getting Theater List") : res.status(200).send(result)
    })
}
