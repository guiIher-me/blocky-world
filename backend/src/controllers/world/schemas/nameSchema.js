/* eslint-disable newline-per-chained-call */
const Joi = require('joi');

module.exports = Joi.object({
    name: Joi.string().min(3).max(30).trim().required(),
});
