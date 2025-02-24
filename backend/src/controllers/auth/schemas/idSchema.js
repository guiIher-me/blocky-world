/* eslint-disable newline-per-chained-call */
const Joi = require('joi');

module.exports = Joi.object({
    id: Joi.string().hex().min(24).max(24).required(),
});
