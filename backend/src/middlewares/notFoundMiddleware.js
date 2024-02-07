/**
 * Middleware function to handle 404 Not Found errors.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {void}
 */
const notFoundMiddleware = (req, res) => {
    res.status(404).json({ error: 'Not Found!' });
};

module.exports = notFoundMiddleware;
