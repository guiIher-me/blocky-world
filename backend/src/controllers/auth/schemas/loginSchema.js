/* eslint-disable newline-per-chained-call */
const Joi = require('joi');

module.exports = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});
