exports.login = (req, res) => {
    req.checkBody('email', 'Invalid email').isEmail().not().isEmpty();
    req.checkBody("password", "password is not valid").isLength({ min: 3, max: 12 }).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
    var validationError = req.validationErrors();
    var errorResponse = {};
    var successResponse = {};
    errorResponse.message = "Invalid data passed"
    successResponse.message = "validate"
    validationError ? res.status(422).send(errorResponse) : res.status(200).send(successResponse)
}
