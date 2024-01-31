const { HttpResponse } = require("./http/HttpResponse");

class Validator {

    constructor() {
        this._error = false;
    }

    validate(schema, params) {
        const result = schema.validate(params);
        if (result.error) {
            this._error = result.error.details[0].message;
        }

        return !result.error;
    }

    error() {
        return HttpResponse.unprocessable(this._error);
    }
}

module.exports = { Validator };