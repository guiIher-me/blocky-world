require('../utils/typedef');

const { NotFoundError } = require('../errors/NotFoundError');
const { UnprocessableContentError } = require('../errors/UnprocessableContentError');
const { UnauthorizedError } = require('../errors/UnauthorizedError');
const { HttpResponse } = require('../http/HttpResponse');
const { Logger } = require('../logger/Logger');

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
            response = await BaseController.handleError(error);
            const { statusCode, body } = response;
            return res.status(statusCode).json(body);
        }
    }

    static async handleError(error) {
        let response;

        if (error instanceof UnauthorizedError) {
            response = HttpResponse.unauthorized(error.message);
        } else if (error instanceof NotFoundError) {
            response = HttpResponse.notFound(error.message);
        } else if (error instanceof UnprocessableContentError) {
            response = HttpResponse.unprocessable(error.message);
        } else {
            Logger.error(error);
            response = HttpResponse.serverError();
        }

        return response;
    }
}

module.exports = { BaseController };
