const { HttpError } = require('../errors/HttpError');
const { Logger } = require('../logger/Logger');

require('../utils/typedef');

class BaseController {
    /**
     * Asynchronous static method to handle requests and responses.
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     * @param {Function} method - Asynchronous method controller to be executed.
     * @returns {Promise<HttpResponseData>} - A promise resolving to HttpResponseData
     * @static
     */
    static async handle(req, res, method) {
        try {
            const { statusCode, body } = await method(req.params, req.body, req.user);
            return res.status(statusCode).json(body);
        } catch (error) {
            if (error instanceof HttpError) {
                return res.status(error.status).json({ error: error.message });
            }

            Logger.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = { BaseController };
