const { HttpError } = require('./HttpError');

class NotFoundError extends HttpError {
    constructor(message = 'Resource Not Found!') {
        super(message);
        this.name = 'NotFoundError';
    }
}

module.exports = { NotFoundError };
