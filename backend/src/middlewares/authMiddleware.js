require('dotenv').config();

/**
 * Middleware function to verify the authorization token in the request headers.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {void}
 */
const verifyAuthorization = (req, res, next) => {
    const expectedAuthToken = process.env.AUTH_TOKEN;

    const providedAuthToken = req.headers.authorization;
    if (!providedAuthToken || providedAuthToken !== expectedAuthToken) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    return next();
};

module.exports = verifyAuthorization;
