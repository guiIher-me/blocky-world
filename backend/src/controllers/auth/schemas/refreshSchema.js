/* eslint-disable newline-per-chained-call */
const Joi = require('joi');

module.exports = Joi.object({
    refreshToken: Joi.string().required(),
});
