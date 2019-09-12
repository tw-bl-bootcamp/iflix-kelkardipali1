exports.login = (req, res) => {
    req.checkBody('email', 'Invalid email').isEmail().not().isEmpty();
    var validationError = req.validationErrors();
    var errorResponse= {};
    var successResponse={};
    errorResponse.message = "Invalid data passed"
    successResponse.message="validate"
    validationError?res.status(422).send(errorResponse):res.status(200).send(successResponse)      
}
