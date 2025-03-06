const { HttpError } = require('./HttpError');

class BadRequest extends HttpError {
    constructor(message = 'Bad Request!') {
        super(message);
        this.status = 400;
    }
}

module.exports = { BadRequest };
