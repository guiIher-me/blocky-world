require('./utils/typedef');

const { HttpResponse } = require('./http/HttpResponse');

class Validator {
    constructor() {
        this.err = false;
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
            this.err = result.error.details[0].message;
        }

        return !result.error;
    }

    /**
     * Gets the first found Joi error
     * @returns {HttpResponseData}
     */
    error() {
        return HttpResponse.unprocessable(this.err);
    }
}

module.exports = { Validator };
