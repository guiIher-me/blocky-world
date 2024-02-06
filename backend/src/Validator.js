import './utils/typedef';
const { HttpResponse } = require("./http/HttpResponse");

class Validator {
    constructor() {
        this._error = false;
    }

    /**
     * Validate params by Schema Joi object
     * @param {Object} schema 
     * @param {Object} params 
     * @returns {boolean}
     */
    validate(schema, params) {
        const result = schema.validate(params);
        if (result.error) {
            this._error = result.error.details[0].message;
        }

        return !result.error;
    }

    /**
     * Gets the first found Joi error
     * @returns {HttpResponseData}
     */
    error() {
        return HttpResponse.unprocessable(this._error);
    }
}

module.exports = { Validator };