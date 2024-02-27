require('../utils/typedef');

const { HttpResponse } = require('../http/HttpResponse');

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
        let response;

        try {
            response = await method(req.params, req.body);
            const { statusCode, body } = response;
            return res.status(statusCode).json(body);
        } catch (error) {
            response = HttpResponse.serverError();
            const { statusCode, body } = response;
            return res.status(statusCode).json(body);
        }
    }
}

module.exports = { BaseController };
