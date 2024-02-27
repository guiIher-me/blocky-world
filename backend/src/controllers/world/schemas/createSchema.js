/* eslint-disable newline-per-chained-call */
const Joi = require('joi');

module.exports = Joi.object({
    name: Joi.string().trim().min(3).max(30).required(),
});
