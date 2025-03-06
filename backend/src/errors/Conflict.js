const { HttpError } = require('./HttpError');

class Conflict extends HttpError {
    constructor(message = 'Conflict!') {
        super(message);
        this.status = 409;
    }
}

module.exports = { Conflict };
