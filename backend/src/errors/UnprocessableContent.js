const { HttpError } = require('./HttpError');

class UnprocessableContent extends HttpError {
    constructor(message = 'Unprocessable Content!') {
        super(message);
        this.status = 422;
    }
}

module.exports = { UnprocessableContent };
