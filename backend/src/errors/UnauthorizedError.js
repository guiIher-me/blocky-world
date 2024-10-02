const { HttpError } = require('./HttpError');

class UnauthorizedError extends HttpError {
    constructor(message = 'Unauthorized') {
        super(message);
        this.name = 'UnauthorizedError';
    }
}

module.exports = { UnauthorizedError };
