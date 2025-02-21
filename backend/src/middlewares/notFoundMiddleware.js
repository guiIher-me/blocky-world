/* eslint-disable no-unused-vars */
const { NotFound } = require('../errors/NotFound');

/**
 * Throws a NotFoundError exception
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {void}
 */
const notFoundMiddleware = (req, res, next) => {
    throw new NotFound('Route not found!');
};

module.exports = { notFoundMiddleware };
