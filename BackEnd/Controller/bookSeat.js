exports.bookSeat = (req, res) => {
    req.checkBody('seatNo', 'Invalid seatNo').matches(/[1-9]/);
    var validationError = req.validationErrors();
    var errorResponse = {};
    var successResponse = {};
    errorResponse.message = "Invalid data passed"
    successResponse.message = "validate"
    validationError ? res.status(422).send(errorResponse) : res.status(200).send(successResponse)
}
