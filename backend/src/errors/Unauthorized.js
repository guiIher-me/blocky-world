const { HttpError } = require('./HttpError');

class Unauthorized extends HttpError {
    constructor(message = 'Unauthorized') {
        super(message);
        this.status = 401;
    }
}

module.exports = { Unauthorized };
