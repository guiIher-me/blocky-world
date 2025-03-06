/* eslint-disable newline-per-chained-call */
const Joi = require('joi');

module.exports = Joi.object({
    firstname: Joi.string().trim().min(3).max(30).required(),
    lastname: Joi.string().trim().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(20).required(),
});
