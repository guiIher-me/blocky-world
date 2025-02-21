const { HttpError } = require('./HttpError');

class UnprocessableContent extends HttpError {
    constructor(message) {
        super(message);
        this.status = 422;
    }
}

module.exports = { UnprocessableContent };
