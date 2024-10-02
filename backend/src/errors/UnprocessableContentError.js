const { HttpError } = require('./HttpError');

class UnprocessableContentError extends HttpError {
    constructor(message) {
        super(message);
        this.name = UnprocessableContentError;
    }
}

module.exports = { UnprocessableContentError };
