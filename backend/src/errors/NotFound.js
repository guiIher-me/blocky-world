const { HttpError } = require('./HttpError');

class NotFound extends HttpError {
    constructor(message = 'Resource Not Found!') {
        super(message);
        this.status = 404;
    }
}

module.exports = { NotFound };
