const { UnprocessableContent } = require('../errors/UnprocessableContent');

const validate = (schema, params) => {
    const result = schema.validate(params);
    if (result.error) {
        throw new UnprocessableContent(result.error.details[0].message);
    }
};

module.exports = { validate };
