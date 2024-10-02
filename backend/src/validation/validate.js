const { UnprocessableContentError } = require('../errors/UnprocessableContentError');

const validate = (schema, params) => {
    const result = schema.validate(params);
    if (result.error) {
        throw new UnprocessableContentError(result.error.details[0].message);
    }
};

module.exports = { validate };
