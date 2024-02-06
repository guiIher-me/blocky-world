import '../utils/typedef';
const { HttpResponse } = require("../http/HttpResponse");

class BaseController {

    /**
     * Asynchronous method to handle requests and responses.
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     * @param {Function} method - Asynchronous method controller to be executed, accepting request parameters and body.
     * @returns {Promise<HttpResponseData>} - A promise resolving to HttpResponseData
     */
    async handle(req, res, method) {
        let response;

        try {
            response = await method(req.params, req.body);
        } catch(error) {
            console.error(error);
            response = HttpResponse.serverError();
        } finally {
            const { statusCode, body } = response;
            return res.status(statusCode).json(body);
        }
    }

}

module.exports = { BaseController };