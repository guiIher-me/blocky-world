/* eslint-disable no-unused-vars */
const { HttpError } = require('../errors/HttpError');
const { Logger } = require('../logger/Logger');

/**
 * Middleware function to handle errors
 * @param {Object} err - The thrown error.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {void}
 */
const globalErrorMiddleware = (err, req, res, next) => {
    if (err instanceof HttpError) {
        return res.status(err.status).json({ error: err.message });
    }

    // Caso contrário, loga e envia um erro genérico 500
    Logger.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
};

module.exports = { globalErrorMiddleware };
